# Use standard linting tools across all of our projects

## Summary

Where available, all new dxw-owned or maintained repositories SHOULD use a
linter for the major programming languages the repo is written in.

## Problem

As developers, we commonly have different styles of writing code. Unchecked this
can lead to inconsistencies in style, which over time can make code messy, and
difficult to maintain and review. It can also lead to bikeshedding over code
style in code reviews, which can cause conflict and slow down code review.

## Proposal

Where available, all new dxw-owned or maintained repositories SHOULD use an
opinionated code linter and formatter to make sure code meets a standard style.
Examples of this include (but are not limited to):

- [Standard.rb](https://github.com/testdouble/standard)
- [Standard for Javascript](https://github.com/standard/standard)
- [Standard for Typescript](https://github.com/standard/ts-standard)
- [PHP-CS-Fixer](https://github.com/FriendsOfPHP/PHP-CS-Fixer)
- [Black (for Python)](https://github.com/psf/black)

When a linter is installed, each package MUST run a check using the linting tool
as part of the default CI build. We MUST ensure a CI build fails if the linting
fails.

When using a linter, we MUST add instructions to a project's README on how to
run the tool in development, before committing code to the repository. This
SHOULD also include instruction on how to run any autofixing tasks, if any are
available.

## Next steps

We don't need to take any further action at this time. Standard.rb is already
added to the Rails template by default, so this is just codifying what we are
already doing.
