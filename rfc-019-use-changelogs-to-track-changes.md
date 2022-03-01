# Use changelogs to track changes

## Summary

Many of our projects have staged releases. In order to be confident about what
we're releasing, and make it easier to communicate that to stakeholders,
projects that are not continuously released SHOULD use changelogs following the
[Keep a Changelog 1.0.0][] format to track changes as they happen, and label
which release they become part of as part of the release process.

## Problem

There are 4 related problems this RFC is attempting to improve:

1. Preparing releases involves an arduous, error-prone review of all the code in
   that release to determine what has changed and what impact releasing those
   changes will have.
1. We often need to communicate what we released to stakeholders, such as the
   client, and when.
1. We often hand projects we work on over to maintainers who haven't always been
   there for the history of the project, and reviewing a full commit or pull
   request history can be challenging and time consuming.
1. When a part of a deployed application needs revising, it it sometimes helpful
   to know when that change occured.

## Proposal

If a project is not continuously released, it SHOULD include a markdown
formatted file, `CHANGELOG.md`, in its root (the standard name and location for
changelogs), whether it is a library, application, or something else. That
changelog MUST follow the [Keep a Changelog 1.0.0][] format.

Pull requests that make significant changes to a project with a changelog SHOULD
update an "Unreleased" section at the top of the changelog with a summary of
those changes. A pull request template SHOULD exist, containing a prompt to
update the changelog:

```md
 <!-- Do you need to update the changelog? -->
```

The release process of a project with a changelog SHOULD update that changelog
to put newly released changes under an appropriate release heading.

Existing projects that are not continuously released SHOULD create a changelog
and integrate updating it into their release process. They MAY summarize
releases that predate the changelog by adding a section as follows:

```md
# [Earlier Releases]

Releases before `<version>` predate this changelog.
```

Alternatively, they MAY be more descriptive about changes that predate the
creation of the changelog.

Projects that choose not to use a changelog MUST document that decision and its
reasoning in an Architectural Decision Record (ADR) added to that project.

Template repositories SHOULD NOT document changes in changelogs, as they are not
released, and the decisions made in them SHOULD be documented elsewhere. They
SHOULD include a blank template changelog for any projects building from them.

## Next steps

- [x] The playbook MUST be updated to document the details of this proposal,
      including details on how to maintain a changelog.

- [x] A template changelog SHOULD be added to the [rails-template][], along with
      instructions for how to update it when making contributions and releasing
      projects built from it, and a prompt in the pull request template.

[keep a changelog 1.0.0]: https://keepachangelog.com/en/1.0.0/
[rails-template]: https://github.com/dxw/rails-template
