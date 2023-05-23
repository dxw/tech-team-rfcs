# Our decision making process is public

## Summary

Our process of making decisions and the decisions themselves may be read by all
staff and members of the public.

This topic has previously been
[debated as an issue](https://github.com/dxw/tech-team-rfcs/issues/2) on this
repository. The decision to take no action should still be persisted as a formal
decision so has become an RFC.

## Problem

This repository started as public by default but do we agree that this is right
in this case?

### Reasons for a public repository

- dxw values include being honest and we agree with the
  [principle of making things open as it makes things better](https://www.gov.uk/guidance/government-design-principles#make-things-open-it-makes-things-better)
- [The dxw playbook is public](https://github.com/dxw/playbook) and has not
  caused us concern or prevented us from iterating it
- Others can learn from us and spend more of their time making things better for
  users
- It allows us to share our thinking and rationale on our technical decisions,
  doing so publicly as well as privately can increase trust and empathy with
  more people
- With the potential for the world watching, the bar is raised. Being open from
  the start ensures that there is less risk to us should a future team decide to
  make it public
- Most of the application code we write lives in open source repositories where
  our work and decision making process can already be viewed publicly

### Reasons against a public repository

- Parts of our discussion may have to include commercially sensitive information
  e.g. incident reports
- As the public can read any discussions, the team may feel too uncomfortable to
  contribute to discussions making it harder to talk with candour
- Making this repository private at a later date for security reasons might in
  itself be an information leak. The repository could then become a target for
  bad actors trying to access sensitive information on our incidents

### Why not start private?

It's difficult to change our mind if we start from a private repository.

Contributors should be aware of the context in which they add their comments. If
they make comments under the context of a private repository which then becomes
public, there is a potential risk for us to make content that was not intended
or written in a way appropriate for public consumption. Therefore starting from
a private repository and later deciding to make it a public one will be
incredibly difficult to do safely. By starting with a public repository however,
we always have the option of making it private if needed.

## Proposal

We SHOULD NOT make this repository private.

We MUST NOT discuss sensitive topics in this repository.

We SHOULD still have discussions about sensitive topics in a private forum and
we MUST publish a safe summary of the discussion with as much detail as is
appropriate for public consumption to allow voting to continue as normal with
adequate reference.

We SHOULD have retrospectives on how the team have found making decisions in
public.

We MAY wish to make this repository private later if we find that these concerns
cannot be addressed while it is public.

## Next steps

No further action.
