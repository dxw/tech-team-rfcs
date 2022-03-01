# Use Rollbar to monitor application errors for Rails projects

## Summary

Use Rollbar as the service to monitor and manage application errors for Rails
projects.

## Problem

We need to use a tool that collects errors that happen across our live
environments.

We need a tool that can notify the team of new or important errors.

We need a way to record and share the outputs of our investigations and any
plans to tackle the problem, more investigation, intended fixes etc.

We need a way to group common issues.

## Proposal

We SHOULD use Rollbar as our default tool for all Rails projects.

We MAY use another service if the client has a preference, this MUST be captured
in an ADR within the project itself.

## Next steps

- [x] Add Rollbar to the [rails-template](https://github.com/dxw/rails-template)
      repository.
