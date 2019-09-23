# Use containerisation in development

## Summary

By default, use docker containers locally for testing and development.

## Problem

For each application lots of local dependencies are required on our machines and
these dependencies can all be of different versions. Not using Docker requires
each person to install the intended version, failing to do this properly can
lead to weird behaviour when getting started. Whilst some packages have their
own version manager to use this is not true for all.

Supporting the many applications we look after can be challenging. We now have
a support rota where each of us will be spending short bursts of time fixing
problems on any service we look after. This can include projects we were not
involved in the development of. Setting up our local machines with the required
dependencies takes time and the documentation easily becomes out of date. The
result of this is it takes people longer to get to a point of contributing and
can result in a lot of frustration. Using Docker would only require one tool.

Documenting Docker instructions to get things running locally can be very useful
for debugging. The problem with having this as well as non-docker instructions
is that it isn't clear what team members should use and they can become unused
and out of date. This to can lead to frustration when needing to get everything
running quickly with parity to production.

## Proposal

We MUST use Docker in development for testing and running the application.

When there are compelling reasons not to we MAY use non-docker in development.
In these cases an ADR must be added to the repository in question.

Docker has inefficiencies. Instead of removing the tool and losing these
benefits we SHOULD investigate how we can make them better.

If consensus cannot be reached with Docker as the tool then using
[a tool like Makefiles](https://ftp.gnu.org/old-gnu/Manuals/make-3.79.1/html_chapter/make_2.html)
instead may be able to provide some of the benefits.
