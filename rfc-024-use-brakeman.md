# Use Brakeman on all Rails projects

## Summary

[Brakeman](https://brakemanscanner.org/) is a static security scanning tool for
use on Rails projects.

Security is a key principle in all of dxw's projects. Using Brakeman during all
stages of development & testing ensures we can be more confident of addressing
and eliminating vulnerabilities before our code is deployed to production.

## Problem

Security is a key principle of dxw's development. dxw projects are normally
subject to a penetration test before entering the live stage of their lifecycle.
It is better to address security vulnerabilities in the development & testing
stage, before the code goes to production. Fixing vulnerabilities in live code
can be costly in terms of time and complexity.

Developers should learn best security practices and common vulnerabilities in
Rails applications, and regular scanning with Brakeman helps us develop better
habits and more defensive coding styles.

## Proposal

Where possible we SHOULD use Brakeman as part of our default CI build. We SHOULD
ensure a CI build fails if any warnings are raised in Brakeman. We SHOULD
address warnings where possible, and only add exceptions to Brakeman's ignore
file after discussion with the development team.

We SHOULD NOT include Brakeman in our default `rake` task. This is not
recommended by [Brakeman's developers](https://brakemanscanner.org/docs/rake/)

We SHOULD add instructions to a project's README on how to run Brakeman in
development, before committing code to the repository.

If there are compelling reasons not to use Brakeman on a particular project we
MAY not. However an Architectural Decision Record (ADR) MUST be added to the
project to explain and document why.

## Next steps

- Add Brakeman gem to the
  [rails-template](https://github.com/dxw/rails-template)
- Edit the GitHub action script that runs CI in the
  [rails-template](https://github.com/dxw/rails-template) to run Brakeman as
  part of the CI build, and fail the build if there are any warnings
