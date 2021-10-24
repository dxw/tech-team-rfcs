# Use Docker to deploy and run our applications in containers

## Summary

All of the applications we build are tested and run using Docker containers.

If there are compelling reasons not to use Docker on a particular project we MAY
choose not to containerise, however an ADR MUST be added to the project to
explain and document why.

This includes production environments as well as any staging environments and
continuous integration services.

The decision on whether we MUST use containers in development is not included in
the scope of this RFC.

## Problem

To date there has been no formal decision to whether or not use containers for
hosting the applications we build. The result of this is a mixed ecosystem that
is continuously growing.

We currently host our work using numerous services and platforms:

- Govpress
- AWS
- Azure
- Heroku
- Dalmatian
- Government Platform as a Service (GPaaS)

We cannot reduce the amount of services we use as doing so would reduce the
flexibility we offer our clients. Clients sometimes require we use their tooling
and platforms, ensuring all their services can be managed centrally. This makes
their services easier to operate as they move into live. It also makes it easier
for clients to transition away from dxw.

Most applications are already running with containers but some are not.

There are at least 2 categories of problem. The missed advantages of not
containerising our applications and the problems that come from being
inconsistent in our approach.

There is a common set of problems for software teams that containerisation can
help us with:

- managing dependencies
- updating software
- debugging issues
- configuring host machines
- testing and releasing code
- rolling back

The problems of being inconsistent include:

- we spend more time at the start of projects debating what tool to choose by
  default
- people have to remember the nuances involved in operating each service and
  attempt to document the variations. These variations must be kept up to date
  and clearly referenced. Being consistent in our use of containers may allow us
  to start making our processes for common tasks consistent too.
- CI environments that do not test with containers require an extra process in
  order to maintain a similar environment to production. Configuring tests with
  containers removes the risk of getting this wrong, and a need for
  documentation
- the process for accessing live environments differs depending on the
  infrastructure and whether or not containers are used. If containers are used
  throughout we can have a shared process for accessing a console and running
  scripts like migrations
- the way secrets are distributed to applications can differ. We could manually
  place them on a machine, we could add them through Terraform and task
  definitions, we could use a service like Vault or Parameter Store or we could
  use Heroku to manage the process for us. If we decide to be consistent with
  the use of containers, we can then start to look at being more consistent with
  how we distribute secrets in a common way and develop tooling and
  documentation to make this easier

## Proposal

Where possible we SHOULD use Docker to run our new applications in live
environments. For existing applications that are not containerised it is not
required to convert them as a result of this decision. We MAY choose to do this
later.

We MUST configure continuous integration to build and test the same Docker image
that is deployed.

We MAY use Docker in development environments.

If there are compelling reasons not to use Docker on a particular project we MAY
choose not to containerise, however an Architectural Decision Record (ADR) MUST
be added to the project to explain and document why.

## Next steps

- Add a Dockerfile to the
  [rails-template](https://github.com/dxw/rails-template)
- Edit the GitHub action script that runs CI in the
  [rails-template](https://github.com/dxw/rails-template) to build and test with
  Docker containers
