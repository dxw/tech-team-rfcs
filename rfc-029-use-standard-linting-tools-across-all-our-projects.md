# Use standard linting tools across all of our projects

## Summary

All dxw-owned respositories MUST use a standard linting tool for the
main programming language the repo is written in, where one is available.

## Problem

As developers, we commonly have different styles of writing code. Unchecked
this can lead to inconsistencies in style, which over time can make code
messy, and difficult to maintain and review. It can also lead to bikeshedding
over code style in code reviews, which can cause conflict and slow down code
review.

## Proposal

Where available, all new dxw-owned or maintained repositories MUST use a
standard linting tool to make sure code meets a standard style. Examples
of this include (but are not limited to):

- [Standard.rb](https://github.com/testdouble/standard)
- [ESLint](https://eslint.org/)

Where possible, each package SHOULD run a check using the linting tool as
part of the default CI build (preferably before the main test suite runs).
We SHOULD ensure a CI build fails if the linting fails.

We SHOULD add instructions to a project's README on how to run the tool in
development, before committing code to the repository. This MAY also
include instruction on how to run any autofixing tasks, if any are available.

## Next steps

Standard.rb is already added to the Rails template by default, and ESlint
is already in the React template, so this is just codifying what we are
already doing.
