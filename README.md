# dxw's technology team's requests for comment (RFCs)

dxw's technology team uses this repository as a forum to make and document
technical decisions.

## Current RFCs

Our currently adopted RFCs are linked below, categorised into "ways of working"
and "tools and technology".

### Ways of working

These are RFCs that are more general in focus. They aren't about using
particular tools and technology, or types of tools and technology, but rather
more general approaches we like to take.

- [Our decision making process is public][018]
- [Use changelogs to track changes][019]
- [Use the "Scripts To Rule Them All" pattern for common tasks][023]
- [Adopt a code of conduct for public repositories][028]
- [Source code should be open source by default][029]
- [Don't use `master` as a branch name][036]
- [Script imports of production data][079]
- [Testing our work][173]
- [Use automated accessibility checks in feature tests][244]

### Tools and technology

These are RFCs about using specific types of tools and technology. This includes
RFCs specific to one of our core frameworks or languages, e.g. GovPress, Rails
or TypeScript, which are subcategorised for ease of reference.

- [Use Docker to deploy and run our applications in containers][013]
- [Use Auth0 as the default auth provider][021]
- [Use linting tools across all of our projects][035]
- [Use existing libraries where possible][087]

#### GovPress

- [Optimise Dependabot rules in GovPress repos][088]

#### Rails

- [Use Rollbar to monitor application errors for Rails projects][020]
- [Use ERB by default in our Rails projects][022]
- [Use Brakeman on all Rails projects][024]

<!-- markdownlint-disable MD026 -->

## How it works...

<!-- markdownlint-enable MD001 -->

### ...for a proposer

1. Create a new branch named `rfc/my-proposal-title`
1. Make a copy of `rfc-000-template.md` renamed `rfc-000-my-proposal-title.md`
   and add it to the relevant directory (`/tools-and-technologies`, its
   subdirectories, or `ways-of-working`). You may create a new subdirectory if
   relevant
1. Write your proposal
   - Include any images or supporting documents in a separate directory named
     `rfc-000` and link to them from the proposal
1. When you're ready, push your branch and create a **draft** Pull Request (PR)
   for it
1. Rename your file (and directory of images and supporting documents if you
   created one) with the number of the PR and push an amended commit
1. Update `README.md` to include the title and link to the RFC file at the
   bottom of the relevant section. All the links are provided as numbered
   references at the bottom of `README.md`. If your RFC supersedes or deprecates
   a previous one, remove it from the list
1. When you are satisfied, mark your PR as **ready for review**
   - Assign some reviewers if there's anyone you think your proposal might be
     particularly relevant to
1. Post a link to your PR in `#dxw-tech-team` or `#dxw-govpress-team` on Slack,
   @mentioning anyone you want particular attention from. Some RFCs will
   naturally fall more within the remit of GovPress, Ops or Delivery+, but if
   you are unsure which channel to use, please post in both channels
1. As comments and questions come in, respond to them in the PR comments to keep
   a record of the discussion
1. If changes are agreed, make them in your proposal and push them as new
   commits to keep a record of the development of the proposal
   - For trivial changes like fixing typos, amend the commits that introduced
     them instead
1. No sooner than 14 days after broadcasting your proposal in Slack, if
   consensus has been reached through GitHub reviews, and at least 3 people have
   voted to approve without any outstanding votes to reject, merge the PR and
   post a link to the accepted proposal in #dxw-tech-team on Slack to let
   everyone know that it's now in place
   - If the consensus is to reject the proposal, or a consensus can't be
     reached, close the PR with a comment explaining the resolution
1. If a proposal has been open for more than 60 days, consider closing it as
   stale

As the proposer, you are responsible for gathering consensus on your proposal.
This means reaching out to others for comment, resolving issues, and reminding
people of your proposal's existence.

Once a proposal is accepted, it becomes everyone's responsibility to put it into
action and live by it.

### ...for a reviewer

When a proposal PR is marked as **ready for review**, anyone is welcome to
contribute to the discussion. Review the proposal and any existing comments and
make inline comments on the document or general comments in the PR. To vote on
the proposal, [create a GitHub review](#voting-with-a-github-review).

## Voting with a GitHub review

We use GitHub's review system to send clear signals of individual reviewers'
stances on the proposal. Each type of review has a different meaning, as
follows.

Note that emoji and reactions do not indicate preferences or votes.

### Comment

A **comment** review is not a vote. It can be used for asking questions or
making suggestions. It's also suitable for correcting typos or other minor
change suggestions that don't materially alter the proposal.

### Approve

By creating a **approve** review, a reviewer is saying the proposal SHOULD be
accepted. It is not necessary to add a comment to an approval if there's nothing
to add. It is also acceptable to approve with optional suggestions as with a
**comment** review.

### Request changes

By creating a **request changes** review, a reviewer is saying the proposal
SHOULD NOT be accepted as written unless the accompanying commented consequences
are acceptable. A review of this kind MUST be accompanied by an explanation and
the reviewer SHOULD be prepared to respond to further comments.

## Our principles

### 1. We make decisions together

Everyone is informed of proposals and is given a fair amount of time to join the
discussion.

Decisions are not made alone. We require at least 3 approvals before a proposal
can be accepted.

### 2. Reaching consensus shouldn't be a chore

We understand that not everyone in the team has the time, headspace, expertise,
or opinions to be involved in every decision. Provided those decisions are
communicated more widely, consensus should be possible between those actively
involved in the discussion.

### 3. Some guidance is better than none

If consensus isn't clear, we default to no action, but sometimes we don't have a
status quo to fall back on. In that case, we believe that some guidance is
nearly always better than none.

### 4. Standards are defaults

The decisions we make and record here are defaults. In many cases, they are
intended as guidance and not constraints. If there's a reason to depart from
them, as long as it's documented and justified, we should be able to adapt to
specific situations and needs.

### 5. Authors are responsible for their proposals

The people making proposals tend to be the people most invested in their
outcome. It's up to them to get a decision made by engaging with and encouraging
others to get involved in discussions.

### 6. We close stale proposals

If a proposal is inactive and doesn't have the momentum to reach a consensus, we
close it. Proposals that aren't moving probably aren't important or are too
contentious to make a decision about. This doesn't stop them from being reopened
at a later time.

By closing stale proposals, we keep the discussion focused on current issues,
relevant to the team now.

### 7. We document our rationale

These RFCs document our decisions and the discussions that led to them being
made. This helps our future selves and new people joining our team understand
why we do the things we do. This understanding will allow us to make more
informed decisions in the future and help us empathise with the decisions we
have already made.

## Linting

### Language and style

We use the
[IETF's RFC best practices style guide](https://www.ietf.org/rfc/rfc2119.txt)
for our RFCs to help make sure we're consistent and clear in our language and
intent.

### Running the linter

First, install dependencies:

```sh
npm install
```

To run the linter locally:

```sh
npm run lint
```

To automatically fix most linting issues:

```sh
npm run lint:fix
```

This repository is set up to run the linter automatically on pull requests and
fix any issues it can, so you usually won't need to run it yourself.

If you notice the linter doing unexpected things to your formatting, it's
usually a sign that your original formatting wouldn't have been parsed as you
intended it to be.

<!-- prettier-ignore-start -->
[013]: tools-and-technology/rfc-013-use-docker-to-deploy-and-run-applications-in-containers.md
[018]: ways-of-working/rfc-018-our-decision-making-process-is-public.md
[019]: ways-of-working/rfc-019-use-changelogs-to-track-changes.md
[020]: tools-and-technology/rails/rfc-020-use-rollbar-to-monitor-rails-errors.md
[021]: tools-and-technology/rfc-021-use-auth0-as-the-default-auth-provider.md
[022]: tools-and-technology/rails/rfc-022-use-erb-as-default-templating-language.md
[023]: ways-of-working/rfc-023-use-scripts-to-rule-them-all.md
[024]: tools-and-technology/rails/rfc-024-use-brakeman.md
[028]: ways-of-working/rfc-028-adopt-a-code-of-conduct.md
[029]: ways-of-working/rfc-029-source-code-should-be-open-source-by-default.md
[035]: tools-and-technology/rfc-035-use-linting-tools-across-all-our-projects.md
[036]: ways-of-working/rfc-036-dont-use-master-as-a-branch-name.md
[079]: ways-of-working/rfc-079-script-imports-of-production-data.md
[087]: tools-and-technology/rfc-087-use-libraries-where-possible.md
[088]: tools-and-technology/govpress/rfc-088-optimise-dependabot-config-files-in-govpress-repos.md
[173]: ways-of-working/rfc-173-testing-our-work.md
[244]: ways-of-working/rfc-244-use-automated-accessibility-checks-in-feature-tests.md
<!-- prettier-ignore-end -->
