# Use static typing where available

## Summary

Static typing can help prevent programming mistakes and bugs by making sure methods are only returning, or being passed, the types of data they expect. Since static typing is available in some form in all of our supported languages – optionally in Ruby, Python and PHP, in JavaScript via the use of TypeScript, and inherently in the language in Kotlin and C# – we should make use of static typing where available.

## Problem

In programming, every piece of data has a type. For example, whole numbers are integers, and a series of characters is a string. Generally speaking any method can only be accept some of these types - for example it doesn't make sense to multiply two strings, or to capitalise an integer.

dxw predominantly programs in what are known as dynamically typed languages, where the types of data only become relevant when they are used at run-time. This means situations can arise where an unexpected type of data can be passed into an argument, for example through uncaught errors or user input, which can cause unexpected behaviour or outright failures.

By making use of static typing we can explicitly declare which types of data methods are expected to return, and which types of data they accept as arguments. Type checking (at compile-time for compiled languages, and via separate tooling for uncompiled) can then make sure that no situation arises in the code where data is either returned or passed in an unsupported type.

Although this doesn't guarantee bug programming, and does not replace the need for testing or peer review, it does offer guard rails against some common mistakes and encourages consideration of exactly what types of data any piece of code will be expected to handle.

## Proposal

Where a language either includes support for static typing or where tooling exists to ensure it, programs we write SHOULD make use of static typing.

Where static typing is used, any automated test pipeline MUST make sure that types are checked.

If an existing project is in a language which supports optional or partial typing, you MAY only type parts of the codebase as they are modified.

## Next steps

- [ ] Update language templates to include type checking as part of their test process
