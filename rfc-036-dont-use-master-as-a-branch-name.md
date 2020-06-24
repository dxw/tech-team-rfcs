# Don't use `master` as a branch name

## Summary

Git's `master` branch name has its origin in a master-slave metaphor. This is
insensitive to those whose ancestors were once enslaved. Instead, we MUST use
`main` as the equivalent branch name for our internal repositories unless
there's a more descriptive name to use and we SHOULD push our clients to allow
us to do the same for their code.

## Problem

The `master` branch name (along with most other technological uses of that word)
[has its origin in a master-slave metaphor](https://mail.gnome.org/archives/desktop-devel-list/2019-May/msg00066.html).
It doesn't fit our ethics to perpetuate that language. It's a relatively small
step, but by changing it we can take one of many steps needed to try to break
the cycle of institutional racism.

## Proposal

Instead of calling a branch of a Git repository `master` we SHOULD name it
`main`. We MUST do this for all internal repositories, unless there's a more
appropriate name for that branch (such as `release`). We SHOULD push our clients
to allow us to do the same in any repositories that we work in for them.

Developers MAY set their local development environments up to create Git
repositories with `main` as the default branch using
[the steps described by Leigh Brenecki](https://leigh.net.au/writing/git-init-main/).

Alternatively, when the feature lands in Git, developers MAY instead set their
default branch using the new `init.defaultBranch` option:

```sh
git config --global init.defaultBranch main
```

## Next steps

- Change all existing internal repositories with single "main" branches to
  rename `master` to `main`
- Change all template repositories to rename `master` to `main`
- Open another RFC to settle on naming conventions for repositories with
  multiple "main" branches (such as `master` and `develop`)
