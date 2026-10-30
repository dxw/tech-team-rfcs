# Use `CODEOWNERS` in all repositories

## Summary

We should configure our repositories with
[GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
or [GitLab](https://docs.gitlab.com/ee/user/project/code_owners.html)
`CODEOWNERS` files, to ensure that issues and PRs receive a timely response, and
that our code is well maintained.

## Problem

`dxw` has a large number of repositories to maintain. At the time of writing,
GitHub has 260 repositories that are not archived and not forked from elsewhere,
151 of which are public. It is easy for new PRs and issues to be lost in the
noise of notifications. For maintainers, it can be difficult to keep up with
changes in these repositories, especially for internal code which takes a lower
priority than client products. For developers, it can be difficult to identify
someone to review code changes and respond to issues.

## Proposal

For the purposes of this RFC, the term _active repository_ means a repository
that is:

1. within the `dxw` organisation on GitHub or the equivalent on GitLab,
1. not a fork of a repository from outside the organisation; and
1. not archived.

All active repositories MUST have a `CODEOWNERS` file in the root of the
repository. There SHOULD be more than two members of staff in each file, who
SHOULD have different roles in the organisation, to avoid all owners of a
repository being unavailable at once. To save on maintenance time it is
RECOMMENDED that code owners be a GitHub team, rather than a list of
individuals.

`CODEOWNERS` files MAY specify different owners for different files, or file
types, but this should be avoided if it is likely to make it more difficult to
ensure that contributions are reviewed in a timely manner.

The use of `CODEOWNERS` MUST NOT be used to discourage developers from
commenting, reviewing or otherwise participating in code maintenance. This is
particularly important for new or junior members of staff, who should be
encouraged to participate in code maintenance and review, in a supportive
environment that
[assumes good faith](https://en.wikipedia.org/wiki/Wikipedia:Assume_good_faith).

Repositories SHOULD be configured to ensure that code owners review PRs before
they are merged into default or `main` branches.

Code owners will share responsibility for ensuring that repositories are well
maintained, and that PRs and issues receive a timely response. In particular,
code owners SHOULD ensure that their active repositories:

- have a `CODEOWNERS` file which conforms to this RFC,
- have a licence, code of conduct, and contribution guide, which MAY just link
  to the [dxw default community health files](https://github.com/dxw/.github),
  as this repository does,
- have a set of
  [topics](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics)
  that indicate which team the repository belongs to, and help other developers
  identify the intent of the repository,
- follow all RFCs; and
- are archived as soon as the repository is no longer used and maintained.

## Next steps

- [ ] Generate a data dump of all GitHub repositories within the `dxw`
      organisation and identify those that can be archived immediately; related
      to #149
- [ ] Add `CODEOWNERS` files to all active repositories.
- [ ] Ensure all repositories have
      [topics](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics)
      set which identify the owner (e.g. `govpress`, `tech-ops`, etc.)
- [ ] Write a tool to generate PRs to add a default license, `CONTRIBUTING.md`
      and `CODE_OF_CONDUCT.md` files, and add an issue to recommend the use of
      `WHY_PRIVATE.md`, where appropriate.
