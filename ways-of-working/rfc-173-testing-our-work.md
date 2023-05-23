# Testing our work

## Summary

Testing the code we write, as we write it, is vital to delivering quality
software in a sustainable way.

Testing our work has always been a core development principle for dxw. Our RFC
process was introduced relatively recently and there's no good reason why our
testing choices haven't been added so far. This proposal aims to fill this gap
and officially document our stance on testing as well as provide some sensible
defaults.

## Problem

- Testing patterns - the subject of writing tests is a broad one and there are
  numerous ways we can choose to test our work. Without guiding standards teams
  can spend unnecessary time at the start of each project deciding their
  approach, this time could be better spent elsewhere. With diverging approaches
  the team can be less clear on how to test. These differences introduce
  avoidable friction when people switch between projects
- Tooling divergence - without testing guidelines we risk introducing multiple
  tools that perform the same function. Whilst
  [we are empowered to diverge from our defaults](https://github.com/dxw/tech-team-rfcs#4-standards-are-defaults)
  there should be a good reason when doing so. Again, this can take time to set
  up for new projects and make it harder for people to move between projects and
  support
- Team growth - the development team is growing and we often invite contractors
  to represent us. Having an agreed set of principles will help all new joiners
  build an understanding around what we expect from one another when testing
- Stack variety - dxw are increasingly working with different stacks. These
  often require us to use different or new testing tools. Having a way to record
  our preferences as we grow will make it easier to contribute or work on those
  stacks again in future

## Proposal

The topic of testing code has many facets. The aim of this proposal is to
capture some of the higher level principles we wish to follow but separate from
the details of how we achieve them. We propose to document those finer details
in our
[standards for testing](https://docs.google.com/document/d/1pSZkrviFAiR-0U-PGixOyC2MfiBdCIWIN66YyLa23nc/edit#heading=h.owf78h5xtccv)
that may change more frequently. These standards may eventually become a guide
in [the dxw Playbook](https://github.com/dxw/playbook).

- We MUST write automated tests for all the code we write that will (or could)
  be used by people in live environments – this includes internal dxw tools and
  tooling that provisions real infrastructure
- We MUST write appropriate test coverage for the code we write in line with our
  standards for testing. This includes using
  [the right type of test](https://thoughtbot.com/blog/rails-test-types-and-the-testing-pyramid)
  as well as setting up and working with appropriate testing boundaries
- We MUST configure our continuous integration tools to automatically run our
  tests as part of our deployment pipelines. It MUST prevent deployments
  completing should any test fail
- We MUST set up **new** projects to automatically require 100% code coverage

- We SHOULD set up existing projects to require 100% code coverage
- We SHOULD aim to increase the minimum test coverage on projects that don't
  already require 100% as high as we can. Preferring to exclude untestable lines
  with `# :no_cov:` comments where possible
- We SHOULD write our tests in a consistent and readable way that follows our
  conventions and patterns set out in our standards for testing
- We SHOULD use consistent tooling for testing where possible
- We SHOULD write and store architecture decision records (ADR) within each
  project's repository when we diverge from our testing standards
- We SHOULD continually test the accessibility of pages shown to users through
  automated tests
- We SHOULD conduct or facilitate accessibility audits
- We SHOULD conduct tests on
  [different mainstream browsers and operating systems](https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices)
  to ensure the service remains functional
- We SHOULD ensure the services we build are functional without Javascript
  enabled where appropriate

- We MAY choose to follow the methodologies of test-driven development
- We MAY choose to test (or not test) short lived code such as prototypes or
  spikes

## Next steps

- [ ] Ensure repo templates require 100% code coverage
