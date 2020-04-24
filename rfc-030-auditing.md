# Introduce auditing on all Rails projects

## Summary

We should routinely use auditing in our projects. For those projects which will
undergo a Service Assessment, this is a requirement; for others it is good 
practice to ensure confidence and security in the data we collect & store.

## Problem

For all projects undergoing a [GOV.UK Service Assessment](https://www.gov.uk/service-manual/service-assessments), 
there is a requirement for non-repudiation - 
["nothing should happen in a system that can’t be traced back to a responsible person"](https://www.gov.uk/service-manual/technology/securing-your-information#how-to-assess-information-security)

All projects which are destined to undergo a Service Assessment should have
auditing capabilities built-in from the start. For projects which are not
likely to be assessed, it is still prudent to be able to trace data changes.

It is easier to factor in auditing from the start of a project. If auditing is
not considered until after a project has gone into private beta, we run the 
risk of an incident occurring which would have been easier to trace & resolve
if auditing was already in place.

## Proposal

The Rails Template project SHOULD include a mechanism for auditing by default.

Auditing SHOULD occur on create, update and delete actions as a minimum 
requirement.

We SHOULD consider auditing when architecting our data models in the early 
stages of developing the application.

We MAY allow a project's developers to remove auditing should it be deemed 
unnecessary, if so this decision MUST be recorded in the project's 
Architectural Decision Record (ADR).

## Next steps

- Decide on a gem to use for auditing. Currently, `public_activity` is used in
  `DFE-Digital/teacher-vacancy-service`, `LBHackney-IT/report-a-defect` and 
  `UKGovernmentBEIS/beis-report-official-development-assistance`. 
  While adding the gem in BEIS RODA we encountered a naming conflict, where 
  RODA contained an `Activity` model already, and the `public_activity`
  tracking model is also called `Activity`. This caused some issues, but is 
  unlikely to occur again in other projects. Adding `public_activity` by 
  default from the project inception would also make it less likely that 
  conflicting names would be chosen
- Once a suitable gem is decided upon, add it to the Rails Template.
