# Use ERB as the default templating language in our Rails projects

## Summary

Haml comes with a steep learning curve for a large number of folks and makes our
code less approachable and harder to debug. Erb ships with Rails and bears close
similarity to many other templating languages.

## Problem

Haml is great, once you know it. It takes time and energy for folks to learn and
makes our code less approachable to those who don't.

Haml is powerful, but it's very different from the default markup language of
the web: HTML. Most templating languages (including ERB) extend HTML, making
them easier to pick up by people familiar with HTML, which most of the tech team
will have some familiarity with.

Haml is also abstracted from what renders in the browser, making it harder to
debug. With an HTML based templating language one can look at what rendered in
the browser and see direct correlations with the template that it rendered from.

Asking folks to learn an abstraction over something as familiar as HTML could be
placing an unnecessary burden on their time and energies.

As Rails ships with ERB as its own default, large amounts of Rails
documentation and other learning resources will show ERB examples, by using ERB
in our Rails projects we make the code even more approachable and reduce the
burden on those asked to build and maintain our code.

## Proposal

An application SHOULD NOT use Haml as its default templating language.
Applications SHOULD use ERB as their templating language by default. An
application MAY use Haml if the team working on it feel its benefits outweigh
its drawbacks.

## Next steps

- Remove Haml from the [dxw
  rails-template](https://github.com/dxw/rails-template) switching back to ERB
  which is the default that ships with Rails
