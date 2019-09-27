# dxw Request For Comments

dxw staff use this repository as a forum to make and document technical
decisions.

## Process

1. Create a new branch on this repo and copy `rfc-000-template.md` to
   `rfc-000-my-proposal.md` and edit.
1. Include any images etc in a separate directory named `rfc-000` and link to
   them.
1. Make a draft Pull Request (PR) for your branch.
1. Rename your file and directory with the number of the PR and push as a new
   commits.
1. Mark your PR as "Ready for review".
1. Post a link to your PR in #tech-team on Slack. @mention teams or individuals
   in the PR description if you want particular attention from them.
1. We discuss proposals using both inline comments against the RFC document and
   the general PR comments section. Non-technical staff will need to create a
   free Github account in order to comment.
1. As changes are requested and agreed in comments, make the changes in your RFC
   and push them as new commits.
1. Stay active in the discussion and encourage and remind other relevant people
   to participate. If you're unsure who should be involved in a discussion, ask
   a senior developer or CTO. If you start an RFC it's up to you to push it
   through the process and engage people.
1. After notifications are sent there is a minimum 14 day period where it must
   remain open for comments before consensus can be made. Once this period has
   passed we try to reach consensus between active participants
1. Once consensus is reached and approvals given using the Github review system,
   the PR can be merged.
1. When an RFC is accepted, ensure the dxw tech team is made aware of it via
   Slack.
1. An RFC can be rejected. This can happen if a consensus isn't reached, or
   people agree rejecting it is the right thing to do. In this case the PR
   should be closed with a suitable comment.

## Voting with the GitHub review system

Given that there are a number of
[tools available to us when using Pull Requests](https://help.github.com/en/articles/about-pull-request-reviews)
to facilitate this process we should be explicit about how we use each to
communicate in order that it is clear how we can reach consensus.

### Comment

- Not indicative of preference and can be used for any questions, suggestions
and typos

### Approve

- This decision SHOULD be accepted
- A description is optional

### Request changes

- This decision SHOULD NOT be accepted unless the given consequences are
acceptable
- A description is required and please be prepared to respond to further
comments

### Emoji/reactions

- Not indicative of preference

## Linting

First install dependencies:

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

## Principles

In order to decide what system to use we have to consider what we as a team
 value, and in turn what a good process looks like.

1. we make decisions together
   - everyone is informed of proposals and is given a fair amount of time in
     order to join the discussion
   - decisions are not made alone, a minimum consensus of 3 is needed
1. reaching consensus is not a chore
   - we understand that not everyone in the team will have time, headspace or
     opinions to be involved in every decision. Provided changes are
     communicated, consensus should be possible between active parties
   - if consensus isn't clear, we should default to no action unless we have no
     preexisting decision on the topic in which case some guidance is nearly
     always better than none
1. standards are a set of defaults
1. authors are responsible for their proposals
   - this ensures it doesn't fall as a responsibility on any individual
   - engage and encourage others to join discussions (bring up proposals at
     tech team forums)
1. management of stale proposals should be clear and straightforward
   - the conditions under which a proposal should be considered inactive are
     clear, to reduce conflict and simplify decisions
   - proposals that are considered inactive should be closed promptly, so that
     only relevant topics for the team to review are listed
1. the rationale for decisions is documented
   - help future members of the team understand why decisions were made. This
     understanding will allow us to make more informed decisions and increase
     our empathy for past decisions
