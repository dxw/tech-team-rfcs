# Use ERB by default in our Rails projects

## Summary

Use ERB as the default templating language for our Rails applications. ERB ships
with Rails and bears close similarity to many other templating languages.

## Problem

Following our principle of "Use simple, conventional technology" our Rails
application code should be as approachable to as many developers as possible.

ERB extends HTML, making it easier to pick up by people familiar with HTML,
which most of the tech team will be.

With an HTML based templating language one can look at what is rendered in the
browser and see direct correlations with the template that it rendered from
which can aid in debugging.

As ERB ships with Rails, anyone with exposure to Rails will, most likely, have
exposure to ERB as well.

## Proposal

Applications SHOULD use ERB as their templating language by default.

## Next steps

- [ ] Investigate linting for ERB templates
      [erb-lint?](https://github.com/Shopify/erb-lint); see [#147](https://github.com/dxw/tech-team-rfcs/issues/147).
- [x] Remove Haml from the
      [dxw rails-template](https://github.com/dxw/rails-template)
