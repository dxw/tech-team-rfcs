# dxw's technology team's requests for comment (RFCs)

dxw's technology team uses this repository as a forum to make and document
technical decisions.

## How it works...

### ...for a proposer

1. Create a new branch named `rfc/my-proposal-title`
1. Make a copy of `rfc-000-template.md` renamed `rfc-000-my-proposal-title.md`
1. Write your proposal
   - Include any images or supporting documents in a separate directory named
     `rfc-000` and link to them from the proposal
1. When you're ready, push your branch and create a **draft** Pull Request (PR)
   for it
1. Rename your file (and directory if you created one) with the number of the PR
   and push an amended commit
1. When you are satisfied, mark your PR as **ready for review**
   - Assign some reviewers if there's anyone you think your proposal might be
     particularly relevant to
1. Post a link to your PR in #dxw-tech-team on Slack, @mentioning anyone you
   want particular attention from
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

To automatically fix some linting issues:

```sh
npm run lint:fix
```

This repository is set up to run the linter automatically as a pre-commit step.
If for some reason you need to override that, add `--no-verify` as a flag to
`git commit`. You probably shouldn't ever have to do this.
