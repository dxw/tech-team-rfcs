# Use automated accessibility checks in feature tests

## Summary

Accessibility is core to our mission, but it's easy to let it slip in moments of
pressure, or to treat it as something to fix just before going live. Tools exist
that can help us integrate accessibility checks into our feature tests without
relying on memory or time, alerting us as soon as something goes wrong. We
should use these tools where possible to make building accessible services
easier.

## Problem

One of dxw's core principles is to [make everything we do
accessible][dxw-accessibility-principle], and the first point of [our mission
statement][dxw-mission-statement] is to:

> build services that fit seamlessly into user’s lives, and that make public
> services usable and _accessible to all_ [emphasis added] – especially those
> most in need

We take accessibility seriously in our client projects: designers, developers,
and members of other disciplines within a sprinting team strive to consider
accessibility within every iteration, and we conduct accessibility audits as
standard.

However, in the pressure of an busy sprint, especially when deadlines are
looming, it's easy to forget to check for accessibility issues. We tend also to
hold off on more holistic accessibility audits until nearing the end of a
statement of work, or when a service is about to go live.

We should work by the adage that accessibility should never be an afterthought.

## Proposal

We SHOULD integrate automated accessibility checks into feature tests using
axe-core where possible. axe is one of the most popular accessibility testing
suites available, with widespread usage and good language support. We have a
good level of familiarity with the axe suite within dxw, and axe DevTools, which
runs on axe-core, is recommended in our own internal accessibility training.
axe, including axe-core, is open source. While axe has premium products (we
subscribe to axe DevTools Pro), axe-core is free to use.

We MAY use an alternative automated accessibility testing tool in environments
where axe is unavailable or another tool is better suited.

We MUST continue to perform manual checks as part of a holistic approach to
accessibility testing. The [WCAG AA
standard][gov-uk-accessibility-requirements-wcag] is [the minimum
requirement][gov-uk-accessibility-requirements-services] for the types of
services we work on. Automated accessibility checks don't cover 100% of the AA
requirements - [axe-core claims around 57% coverage][axe-coverage-report] -
therefore manual checks are still necessary to plug the gaps.

### Example pull requests

#### Cypress

Example pull requests using [cypress-axe][axe-cypress]:

- [Accredited Programmes #128][moj-accredited-programmes-128]
- [Approved Premises #742][moj-approved-premises-742]
- [Regulated Professions Register #145][moj-regulated-professions-register-145]

#### Playwright

Example pull requests using [@axe-core/playwright][axe-playwright]:

- [Find information about academies and trusts
  #34][dfe-find-information-about-academies-and-trusts-34]

## Next steps

- [ ] Add automated accessibility checks to template repositories

<!-- prettier-ignore-start -->
[axe-coverage-report]: https://www.deque.com/automated-accessibility-testing-coverage
[axe-cypress]: https://github.com/component-driven/cypress-axe
[axe-playwright]: https://github.com/dequelabs/axe-core-npm/tree/develop/packages/playwright
[dfe-find-information-about-academies-and-trusts-34]: https://github.com/DFE-Digital/find-information-about-academies-and-trusts/pull/34
[dxw-accessibility-principle]: https://playbook.dxw.com/who-we-are/#make-everything-we-do-accessible
[dxw-mission-statement]: https://playbook.dxw.com/who-we-are/#our-mission
[gov-uk-accessibility-requirements-wcag]: https://www.gov.uk/service-manual/helping-people-to-use-your-service/understanding-wcag#meeting-government-accessibility-requirements
[gov-uk-accessibility-requirements-services]: https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction#meeting-government-accessibility-requirements
[moj-accredited-programmes-128]: https://github.com/ministryofjustice/hmpps-accredited-programmes-ui/pull/128
[moj-approved-premises-742]: https://github.com/ministryofjustice/hmpps-approved-premises-ui/pull/742
[moj-regulated-professions-register-145]: https://github.com/UKGovernmentBEIS/regulated-professions-register/pull/145
<!-- prettier-ignore-end -->
