# Optimise Dependabot rules in GovPress repos

## Summary

We should use `dependabot.yml` files in our GovPress repos to ensure we receive,
and can act upon, GitHub security alerts about vulnerable packages that could
present a risk in a production environment, but reduce noise from alerts that
are extremely unlikely to represent a risk.

## Problem

By default (e.g. when a repo does not contain a `dependabot.yml` file, but
Dependabot alerts are activated), GitHub will raise security alerts for all
packages in a repo that contain known vulnerabilities. This includes alerts for
NPM dev dependencies which are extremely unlikely to pose a risk in a production
environment (see https://overreacted.io/npm-audit-broken-by-design/ for more on
this).

For the GovPress team, who manage over 100 repos, only a handful of which are
being actively worked on at any one time, this results in an unmanageable number
of alerts being raised about packages which pose a negligible risk. This noise
then drowns out alerts we should be acting upon, for example about vulnerable
NPM production packages, or vulnerable Composer packages.

## Proposal

Configuring the alerts on a per-repo basis,
[using `dependabot.yml` files](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates),
will allow us to be alerted about all vulnerable Composer packages, and
vulnerable production NPM packages, in GovPress repos, whilst eliminating the
noise of alerts for development NPM packages.

- Each GovPress repo MUST contain a `dependabot.yml` file if it uses any form of
  dependency management
- Dependabot MUST be configured to alert about, and open PRs to address,
  production vulnerabilities for all forms of dependency management used
  anywhere in the repo (e.g. NPM, Yarn, Composer)
- Dependabot MUST be configured to alert about, and open PRs to address,
  development Composer vulnerabilities for any `composer.json` files in the repo
- Dependabot MUST be configured to alert about, and open PRs to address,
  vulnerabilities in any GitHub Actions the repo uses
- Dependabot SHOULD be configured to suppress alerts and PRs for development
  NPM-based dependencies, unless there is a compelling reason to do otherwise

## Next steps

- `dependabot.yml` files complying with the above have already been added to all
  repos tagged with the `govpress` topic in dxw's GitHub
- GovPress Tools already has a `govpress repo dependabot` command which, when
  passed a GitHub repo, generates a `dependabot.yml` file complying with the
  above rules
- We should build a shared GitHub action we can run on each GovPress repo that
  will check the `dependabot.yml` file it contains complies with the above
  rules, and fail the CI pipeline if it does not
