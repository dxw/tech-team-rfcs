# Use Existing Libraries Where Possible

## Summary

We should use existing open source libraries wherever possible,
rather than writing our own code, but we should ensure that those
libraries are trustworthy as best we can.

## Problem

Writing and maintaining code takes time, and any code is a possible
source of bugs. When we implement our own solutions for problems
that exist elsewhere, we may repeat work, increase development time,
and increase the potential for error.

## Proposal

When we need to add new generic functionality to our code, we have a
choice of whether to write our own implementation, or use an
off-the-shelf open source library.

By default, we SHOULD aim to find and reuse existing open source
libraries that fulfil the requirement rather than writing our own.

Using existing code is preferable in order to get more proven
code, a lower maintenance burden, and additional useful features we
might not have time to implement ourselves.

Some examples might include:

- Date handling and formatting
- Language inflection (e.g. pluralisation)
- Queueing and background job running
- Connecting to remote APIs

The need for this will differ across languages and frameworks. For
instance, Rails provides many capabilities that separate libraries
would be needed for when working in Node.js. Conversely, frontend
code may wish to avoid dependencies to keep file sizes low.

Acquiring dependencies is not free, however. Developers MUST check
them for licence compatibility, and SHOULD assess them for quality
and reliability, so that we are sure they will be a net positive
addition to our projects.

### License Compatibility

Our code is MIT licensed by default. All dependencies MUST have
compatible licensing. In particular this means looking out for
accidental aquisition of a dependency on GPL software (or other
[copyleft](https://en.wikipedia.org/wiki/Copyleft) licenses that put
license conditions on derivatives).

You can use tools to check license compatibility in your entire
dependency tree:

- Ruby: `bundle licenses | sed 's/.*: //g' | sort | uniq`
- Node.js: `npx license-checker --summary`
  ([setup instructions](https://www.npmjs.com/package/license-checker))
- Alternatives:
  - [LicenseFinder](https://github.com/pivotal/LicenseFinder)
  - [delice](https://github.com/cutenode/delice)
  - [licensed](https://github.com/github/licensed) and
    [bundler-licensed](https://github.com/sergey-alekseev/bundler-licensed)

In general, [permissive licenses](https://en.wikipedia.org/wiki/Permissive_software_license)
are considered to be MIT compatible, in particular:

- [Apache](https://opensource.org/licenses/Apache-2.0)
- BSD variants:
  - [3-Clause](https://opensource.org/licenses/BSD-3-Clause)
  - [2-Clause](https://opensource.org/licenses/BSD-2-Clause)
  - [0BSD](https://opensource.org/licenses/0BSD)
- [ISC](https://opensource.org/licenses/ISC)
- [MPL](https://opensource.org/licenses/MPL-2.0)
- [Unlicense](https://opensource.org/licenses/unlicense)
- [Public Domain](https://en.wikipedia.org/wiki/Public-domain-equivalent_license)

### Quality and Reliability

We SHOULD only use dependencies that are maintained, trustworthy,
and of a decent quality.

It is nigh-impossible for us to inspect the source code of all our
dependencies, however, so developer MAY use proxy measures to judge
this. Libraries.io uses a rating system called
[SourceRank](https://docs.libraries.io/overview#sourcerank)
which defines a good set of proxy measures, such as:

- Are dependencies kept up to date?
- Has the project had a release in the last 6 months?
- Is the project more than 6 months old?
- How many contributors does it have?
- Does it use semantic versioning?

A developer MAY assess these sort of things manually, but SHOULD
check the published SourceRank score on  [Libraries.io](https://libraries.io)
as an overview. The website shows a number of statistics for libraries across
many languages. For an example, see the entry for
[indefinite](https://libraries.io/npm/indefinite).

SourceRank scores range from 0 to 30. The lower this value, the
more wary we should be about acquiring a dependency. There is no
defined cutoff for quality, but packages rating below **15** should
be inspected a little more carefully, and packages below **10** should
probably be considered unreliable.

As well as SourceRank measured factors, developers MAY also wish to look at:

* Do the maintainers respond to issues?
* Are there long-running open PRs?

Developers need only make this quality assessment on _direct_ dependencies;
it is not an effective use of time to check the quality of dependencies of
our dependencies, unless there is reason to suspect problems.

## Next steps

We could look at automating these checks as part of our build
process. Licences could be checked against an approved list, and it
may even be possible to automate SourceRank checks against the
[Libraries.io API](https://libraries.io/api), though this may be
slow. There may also be existing CI tools that we could use that
will perform these functions for us.

We also create a list of packages we've reviewed in detail (including
version and date checked), to minimize the repeated work in doing
these checks.
