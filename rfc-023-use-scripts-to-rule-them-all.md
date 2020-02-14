# Use the "Scripts To Rule Them All" pattern for common tasks

## Summary

We should adopt the [Scripts To Rule Them
All](https://github.com/github/scripts-to-rule-them-all) pattern which GitHub
uses to standardise the names of common scripts between various applications.

Standardising the names, locations and behaviour of these scripts makes the
experience of developing, testing and running applications more consistent.

## Problem

Applications currently perform a number of common tasks in different ways. The
exact way a task is conventionally performed for an application isn't always
documented, or is not documented consistently. This increases friction for
onboarding new developers to a project.

## Proposal

An application SHOULD have a `script/bootstrap` script, which fulfils the
application's dependencies for the environment it is run in.

An application SHOULD have a `script/test` script, which runs a standard test
suite.

An application SHOULD have a `script/server` script, which will start a working
instance of the application.

An application MAY have a `script/setup` script, which will bring the
application to a known state following a clone.

An application MAY have a `script/update` script, which will perform necessary
migrations and bootstrapping following an update to the code.

An application MAY have a `script/console` script, which will open the
application's console.

An application MAY have a `script/cibuild` script, which will perform the
necessary configuration and run tests on a continuous integration server.

## Next steps

- Add examples of all scripts to the
- [rails-template](https://github.com/dxw/rails-template).
