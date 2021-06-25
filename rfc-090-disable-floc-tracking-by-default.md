# Disable FLoC tracking by default

## Summary

Google have introduced a new (at time of writing) standard, which
organises users into cohorts according to their browsing history
in the browser and shares this information to advertisers. This has
severe security risks and we should take steps to make sure any
project we develop opts out of sharing this information.

## Problem

The FLoC protocol is a new (at time of writing) standard, which
attempts to get around some of the privacy issues caused by
tracking cookies. Instead of sharing third-party cookies with
advertisers, a browser with FloC enabled collects information
on a user's browsing habits and uses that information to assign the
user to a "cohort", or group. The cohort ID is then shared with
websites and advertisers.

This has privacy concerns, because as well as providing a vector
for browser fingerprinting, it [makes tracking a user's behaviour
across the web with higher granularity much easier][1].

## Proposal

There is a W3C standard called [`Permissions-Policy`][2], which
allows individual websites to electively enable and disable use of
various browser features and APIs.

To stop a site from having visits tracked via FLoC, we SHOULD add a
header entry to the sites we host:

```http
Permissions-Policy: interest-cohort=()
```

## Next steps

FLoC is already being treated as a security concern by [Wordpress][3],
and it is likely that it will be disabled by default in all future
versions of Wordpress, but we SHOULD monitor this, and if this does
not make it into core, we SHOULD implement our own workarounds.

For Rails projects, we SHOULD add the opt-out header to any sites we
currently actively maintain by adding the following line to our
`config/application.rb` file:

```ruby
config.action_dispatch.default_headers["Permissions-Policy"] = "interest-cohort=()"
```

(Source: [Opt out of Google’s FLoC User Tracking in Rails][4])

We also MUST add the workaround to the [Rails Template](https://github.com/dxw/rails-template/)

[1]: https://www.eff.org/nl/deeplinks/2021/03/googles-floc-terrible-idea

[2]: https://www.w3.org/TR/permissions-policy-1/

[3]: https://make.wordpress.org/core/2021/04/18/proposal-treat-floc-as-a-security-concern/

[4]: https://andycroll.com/ruby/opt-out-of-google-floc-tracking-in-rails/
