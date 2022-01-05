# Script imports of production data

## Summary

Developers writing production data to file on a local or remote server MUST do
this via a script. It MUST NOT be done by manual actions, such as via the Rails
console or `pg_dump`.

This script MUST anonymise any sensitive data, and the data dump MUST be stored
outside of any Git repositories to ensure it can't be inadvertently committed
alongside any changes to the codebase.

## Problem

Fetching data from a database by hand is error-prone. A data dump may be left on
a server, committed to a repository or even in some cases alter production data
in unforeseen ways. Developers may not realise they have exposed or impacted
production data until long after an incident occurs.

By writing a script that developers can run from their local machine to automate
this process, we ensure that every import of data from a production environment
is done in the same way, minimising room for error. It also allows us to scrub
the resulting data dump of any personally-identifying and security-sensitive
information.

Committing a data-fetching script to the repository makes it visible to other
members of the team in the code review process, allows it to be developed
against a local instance of the database, and allows others to provide feedback
to ensure we're reaching a consensus on the safest way of fetching this data.

## Proposal

If developing an application requires a developer to write any production data
containing sensitive data to a local file or a file on a remote server, this
MUST be done via a script.

The script MUST anonymise any security-sensitive data. It SHOULD remove or
anonymise any personal data. The
[ICO guide](https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/key-definitions/what-is-personal-data/#1)
provides a useful summary of what constitutes personal or security-sensitive
data. Anonymisation SHOULD be done before any data is written to disc. This MAY
be done on the remote server, or piped through a script that substitutes any
sensitive values before writing to a file. Anonymisation is REQUIRED if the data
is being written to any kind of semi-permanent storage, such as a development
database.

The script MUST have gone through the usual code review process with other
members of the team before it is run against a production database. It SHOULD be
developed against staging to ensure it is working as expected.

The file written to by the script MUST be stored outside any Git repositories.
It SHOULD be stored as a temporary file in the `/tmp` directory or equivalent
(`/tmp/dumps/projectname.sql` for example), where it will be automatically
removed after a system-specified number of days (3 on macOS).

If for any reason it is not stored in the `/tmp` directory, the file written to
by the script MUST be temporary and MUST be deleted within 30 days of creation.

The script MAY live in the `script/` directory for projects that follow the
"Scripts To Rule Them All" pattern.

When investigating production data without writing to a file, developers MAY use
a development console to debug issues with production data. They SHOULD use
read-only modes (e.g. the `--sandbox` flag for a Rails console) where available.

## Next steps

- [ ] Ensure all projects with database dump in their workflow that are currently
      under active development or under a support contract have scripts to pull data
      from production; see [#149](https://github.com/dxw/tech-team-rfcs/issues/149).
- [ ] Ensure all projects currently under active development or under a support
      contract have documentation for fetching/interacting with production data in
      the README or support documentation; see [#149](https://github.com/dxw/tech-team-rfcs/issues/149).
