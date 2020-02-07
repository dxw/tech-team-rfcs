# Use ERB as the default templating language in our Rails projects

## Summary

Haml comes with a steep learning curve for a large number of folks and makes our
code less approachable. Erb ships with Rails and bares close similarity to many
other templating languages.

## Problem

Haml is great, once you know it. It takes time and energy for folks to learn
and makes our code less approachable to those who don't.

Asking folks to learn an abstraction over something as common as html markup
could be placing an unnecessary burden on their time and energies.

ERB has the same, familiar visual 'style' as many other popular templating
languages.

As Rails ships with ERB as it's own default, large amounts of Rails
documentation and other learning resources will show ERB examples, by using ERB
in our Rails projects we make the code even more approachable and reduce the
burden on those asked to build and maintain our code.

## Proposal

An application SHOULD NOT use Haml as a default template language.

An application MAY use Haml if the team working on it feel the benefits outweigh
the drawbacks outlined above.

The dxw Rails template SHOULD use ERB as the default template language.

## Next steps

- Remove Haml from the [dxw
  rails-template](https://github.com/dxw/rails-template) switching back to ERB
  which is the default that ships with Rails
