# Adopt a code of conduct for public repositories

## Summary

All dxw-owned public repositories MUST have a code of conduct and a guide to
contributing.

All repositories created by dxw which will be transferred to a client SHOULD
have a code of conduct and a guide to contributing, if feasible.

## Problem

When we publish software which allows people outside dxw to submit questions,
issues or contributions, we’re implicitly creating a community.

Anyone who chooses to join this community should feel safe to interact with it
and able to reveal any aspect of their identity that they want to without
suffering abuse.

They need to know that there are standards of behaviour which apply to them and
the others in the community. They need to be able to report violations of these
standards to the community leaders.

## Proposal

We should adopt a code of conduct, so that people know how they can expect to
be treated when they interact with our projects – hopefully making them feel
safe to do so.

The most common code of conduct is the [Contributor
Covenant](https://www.contributor-covenant.org/). It pledges to make
participation in an open source project a harrassment-free experience for
everyone. It explains:

- the standards of behaviour which are expected of everyone who interacts with
  the project
- who’s responsible for enforcing the standards
- how they’ll enforce the standards – the consequences of violating the
  standards

We want to limit the scope of who finds out about a code of conduct report, to
maintain privacy. So we’ll limit it to the Chief Technology Officer and
Managing Director.

### Guidelines

All public repositories in the `dxw` organisation MUST contain a `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md` file.

The `CONTRIBUTING.md` file:

- SHOULD explain whether the project is actively seeking contributions from
  outside dxw
- MUST link to the `CODE_OF_CONDUCT.md` file

The `CODE_OF_CONDUCT.md` file:

- SHOULD be a copy of the [Markdown version of the Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/).
- SHOULD be modified to include the following information about contact methods:
  > Instances of abusive, harassing, or otherwise unacceptable behavior may be
  > reported to dxw’s Chief Technology Officer at code-of-conduct@dxw.com. If a
  > complaint relates to the conduct of the Chief Technology Officer, then
  > complaints may be reported to the Managing Director at
  > code-of-conduct-md@dxw.com. The current holders of these roles can be found
  > on [dxw’s people page](https://www.dxw.com/our-people/).

When starting a client project, we SHOULD speak to the client to find out
whether they would like us to add a code of conduct to the project. We’ll need
to understand whether they:

- have the ability to accept reports of violations
- can do this privately
- want to take on the responsibility of enforcing the code of conduct

dxw SHOULD NOT take on the responsibility of enforcing the Code of Conduct for
a client project.

The Chief Technology Officer or Managing Director MUST take action when they
receive a violation report. At a minimum, this MUST include responding to the
reporter with a plan of action. We MUST document and SHOULD publicise our
enforcement procedures as they develop.

## Concerns

Adding a code of conduct might suggest that we’re actively seeking
contributions from outside dxw, even though sometimes we aren’t. Sometimes we
create software which we’re happy to share with the world, but which we don’t
have the time to review contributions for or which we don’t want to grow beyond
a specific use case. And on client projects, we aren’t paid to review code
which isn’t to the client’s needs.

This should not prevent us from having a code of conduct – it’s a pretty
uncontroversial baseline of decent conduct and doesn’t guarantee that we’ll
review or accept people’s work.  As long as our `CONTRIBUTING.md` is clear
about whether the project is seeking contributions, and whether we’re likely to
accept them, then we’re fine. We might like to reply to people’s contributions
and explain why we’re not going to accept them, even if it takes up a little of
our time.

## Next steps

- Set up an email contact code-of-conduct@dxw.com that goes to Dominic Baggott
- Set up an email contact code-of-conduct-md@dxw.com that goes to David Mann
- Confirm that Dave and Dom are happy to take this role
- Apply the guidance to our existing GitHub projects
- Add ourselves to the list of Contributor Covenant adopters – see
  [guidance](https://github.com/ContributorCovenant/contributor_covenant#adding-a-project-to-the-list-of-adopters)
- Create fallback CONTRIBUTING.md and CODE_OF_CONDUCT.md files for the dxw
  GitHub organisation – see
  [instructions](https://help.github.com/en/github/building-a-strong-community/creating-a-default-community-health-file)

## Research

- [GDS’s usage of the Contributor Covenant](https://github.com/search?q=org%3Aalphagov+contributor+covenant&type=Code)
- [GDS’s guidance on reviewing external pull 
  requests](https://github.com/alphagov/styleguides/blob/master/pull-requests.md#reviewing-external-pull-requests)
- code.gov has a [single repository](https://github.com/GSA/code-gov/) where
  they keep the code of conduct for all their projects

Contact mechanisms for complaints:

- Large organisations like Mozilla have a [dedicated
  service](https://www.mozilla.org/en-US/about/governance/policies/participation/reporting/)
  – they use an organisation called Convercent for their hotline
- In GDS, they give email addresses, e.g. individuals or
  alphagov-code-of-conduct@digital-cabinet-office.gov.uk
