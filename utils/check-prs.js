const { Octokit } = require("@octokit/rest");

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});

const repoOwner = process.env.REPOSITORY_OWNER;
const repoName = process.env.REPOSITORY_NAME;

const getProposalPRs = async function () {
  const pulls = await octokit.pulls.list({
    owner: repoOwner,
    repo: repoName,
    state: "open"
  });

  return pulls.data.filter(function (pull) {
    let labels = pull.labels.map((label) => label.name)
    return !(labels.includes('tooling') || labels.includes('dependencies'))
  })
};

const createCheck = function (sha, state, description) {
  return octokit.repos.createStatus({
    owner: repoOwner,
    repo: repoName,
    sha: sha,
    state: state,
    description: description,
    context: "Checking pull request age",
  });
};

getProposalPRs().then(function (response) {
  const today = new Date();
  const twoWeeksAgo = new Date(today - 1000 * 60 * 60 * 24 * 14);

  response.forEach(function (pr) {
    if (new Date(pr.created_at) > twoWeeksAgo) {
      // Create a pending check
      createCheck(
        pr.head.sha,
        "pending",
        "Pull requests must be open for comment for at least 14 days before merging"
      );
    } else {
      // Create a passing check
      createCheck(
        pr.head.sha,
        "success",
        "This pull request has been open for comment for long enough to merge"
      );
    }
  });
});
