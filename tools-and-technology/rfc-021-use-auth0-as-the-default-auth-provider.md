# Use Auth0 as the default auth provider

## Summary

Use Auth0 as an authentication and authorisation service for Delivery+
(non-GovPress) projects where clients do not have a preferred choice.

## Problem

Our services regularly need a mechanism for authentication and authorisation.

Where clients do have a preexisting tool or preference this decision is usually
straight forward as we look to align new services with those that already exist.
This can help provide users a joined up and consistent journey across all
services within an organisation.

Where one does not exist and we must choose we have to spend time early on
deciding what we should do and this impacts on delivery.

Supporting services which each use different auth services is challenging. Each
require the whole support team to be set up with accounts. Each service then
offers its own user experience to perform the same routine tasks. Where we can
we should offer consistency to help with this.

We do not want to roll our own authentication code. Doing security well is a
complex task that takes a lot of time at set up and in ongoing costs.

The tool we decide on should be open source and offer open and common industry
standards. This should improve security and portability for migrating from
later.

## Proposal

We SHOULD first seek to use existing auth services where clients have them in
place.

When there is not an existing solution, we SHOULD use [Auth0](https://auth0.com)
in our Delivery+ projects.

[Auth0 offers open and common standards](https://auth0.com/docs/protocols)
including:

- OAuth 2.0
- OpenID Connect
- SAML
- WS-Federation
- LDAP

Auth0 is a hosted service and not something we have to support. They are
responsible for the uptime.

We MAY use it to create and manage users rather than building support within
each service.

Auth0 offers competitive pricing and forgiving quota allowances.

Auth0 offers an ability to run in proxy mode, this allows forwarding to popular
SSO providers such as Okta or Google. This provides us an efficient way to
migrate later.

## Next steps

As the majority of clients have auth services it does not seem appropriate to
add anything to the rails-template.
