# Source code should be open source by default

## Summary

We believe in working in the open and sharing our work with others. We think
that nothing should be secret unless there’s a good reason for it to be. This is
also a belief of central government technology practice, as described in the
design principle “Make things open: it makes things better”.

All GitHub repositories created by dxw which don’t directly relate to a client
project SHOULD be public and released under the MIT licence.

When we choose to make a non-client repository private, it MUST contain a
`WHY_PRIVATE.md` file explaining why it’s private.

When starting a new client project, we SHOULD encourage the client to allow us
to make the repository public.

## A note on naming

In this RFC we use the term “open source”, to be consistent with the language
which the UK government uses to talk about software. We take our definition of
open source software as being to equal that of
[free software](https://en.wikipedia.org/wiki/Free_software)—software which
allows users to run, study, redistribute or improve it.

## Problem

dxw creates a lot of source code repositories—for tools that we use internally,
and for client work. When writing new code, we have a choice between making it
available to the public and keeping it private for our own use or that of the
client.

Sometimes the code that we write might be useful to the rest of the world—it
solves a common problem, or it provides inspiration for how to solve a problem.
We don’t usually work on projects that require secrecy. We already make most of
our repositories public—most notably the Playbook—but until now we haven’t had
an official policy, although we’ve
[tried to](https://github.com/dxw/playbook/issues/12) in the past. Most of our
client projects are also in public repositories.

We’ve [already talked about](rfc-018-our-decision-making-process-is-public.md)
why we make our RFC decision making process open. Those reasons apply here, too.

Allowing the team to work in the open also has benefits for individual
developers. They:

- can show their work to friends and family—show the thing instead of talking
  about the thing
- know that they’re investing their energy in something maximally useful and
  long-lasting
- can build up a public portfolio of work
- can talk about their work without worrying about restrictions like NDAs

We should also make a simultaneous decision about software licensing. Whilst
it’s theoretically possible to make a GitHub repository public without an
explicit licence, we shouldn’t do this, because:

- having a public repository without a licence means that legally
  [nobody can do anything useful with it](https://choosealicense.com/no-permission/),
  so there’s not much point in doing so
- releasing software without explicit no-liability, no-warranty clauses might
  cause legal problems for us one day

We had a brief discussion about this as a team and the MIT Licence is the one
that came up the most. It’s a simple licence which allows people to do what they
wish with the code and removes any potential legal issues for us. The other
licence that came up is some version of the
[GPL](https://choosealicense.com/licenses/gpl-3.0/), but even if it were
something we wished to use, we wouldn’t have the resources to monitor for and
pursue licence violations.

## Proposal

All new GitHub respositories in the dxw organisation SHOULD be public, unless
they directly relate to a client project. When these repositories are public,
they SHOULD contain a copy of the
[MIT License](https://choosealicense.com/licenses/mit/) in a `LICENCE` file in
the repository’s root. The `<copyright holders>` placeholder MUST be replaced
with “dxw”.

We MAY allow a non-client repository to be private if it contains:

- secrets such as keys—although this is bad practice and should not have
  happened in the first place
- personal information
- commercially sensitive information

If we choose to make such a repository private, it MUST contain a
`WHY_PRIVATE.md` document explaining why it’s private, with reference to one of
these reasons. This is useful because:

- it allows us to one day revisit the decision to make the repository private,
  without relying on team members’ memories
- we can set up automated checks to ensure that all private repositories contain
  this justification

When starting a new client project, we SHOULD ask the client whether we can make
the repository public. We SHOULD explain the benefits of making it public. Where
relevant, we can refer to existing guidance such as the
[Government Design Principles](https://www.gov.uk/guidance/government-design-principles#make-things-open-it-makes-things-better)
or the
[GOV.UK Service Standard](https://www.gov.uk/service-manual/service-standard/point-12-make-new-source-code-open).

### Concerns

When we write code for internal use, we don’t always apply the same standards
which we would for a client project. For example, we have some repositories
which are proofs of concept, or constrained by time. If somebody outside of dxw
sees one of these repositories without understanding the context in which it was
made, it might give a negative impression of the quality of our work.

We SHOULD reduce this risk by pinning some repositories which we’re proud of, so
that they appear at the top of dxw’s GitHub page.

We already considered a similar risk of being misunderstood in
[RFC 28](rfc-028-adopt-a-code-of-conduct.md)—namely, that adding a code of
conduct might suggest that we’re actively seeking community contributions. We
said that we can mitigate this risk by using the `CONTRIBUTING.md` file to
explain our likely response to contributions. And so, in the case of public
repositories, we MAY also use a repository’s readme to explain the state of the
project – for example, that it’s a proof of concept.

Although we produce software which is open source and sometimes useful, our
principles emphasise that we are _working in the open_—that is, we are
observable. It doesn’t imply we’re always exemplary.

## Next steps

- [ ] Go through our public GitHub repos to make sure they have a `LICENCE`; see
      [#149](https://github.com/dxw/tech-team-rfcs/issues/149)
- [ ] Go through our private GitHub repos and either make them public or add a
      `WHY_PRIVATE.md`; see [#149](https://github.com/dxw/tech-team-rfcs/issues/149)
- [ ] Start a conversation about which repositories we’re proud of, and pin them to
      dxw’s GitHub page; see [#151](https://github.com/dxw/tech-team-rfcs/issues/151)
- [ ] Start a conversation about making GovPress repositories public, possibly
      starting with moving them to GitHub
