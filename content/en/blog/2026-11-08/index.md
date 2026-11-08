
---
title: "Why MMEX Could Crash When Creating a Database in French"
description: "A look at a recent MMEX bug where duplicate French currency translations caused database creation to fail, and how it was fixed."
lead: "A recent bug in MMEX 1.9.4 showed how a seemingly harmless translation change can break database initialization. Here is what happened, why it happened, and how it was fixed."
date: 2026-11-08
draft: false
weight: 50
images: []
contributors: ["MMEX"]
---

A recent issue reported against MMEX 1.9.4 looked like a serious database or application crash.

When creating a new database, some users found that MMEX became unresponsive and had to be terminated manually. Opening a second database could trigger the same problem.

The issue was eventually traced to something much less obvious:

**a duplicate currency name introduced by a French translation.**

This is a good example of how localization can affect application logic, especially when translated text is also used as a database key.

## What happened?

The problem was reported in [GitHub Issue #8605](https://github.com/moneymanagerex/moneymanagerex/issues/8605).

The affected configuration included:

- MMEX 1.9.4 64-bit
- Windows
- French interface language
- Creating a new database or opening another database

At first, the problem looked like a general application crash.

However, changing the interface language from French to English allowed database creation to proceed normally.

That provided an important clue.

## The unexpected cause: two currencies had the same French name

MMEX includes a list of currencies when a new database is created.

Two of these currencies are:

- South Sudanese
- South Sudanese pound

In the French translation, both names had been translated as:

> Livre soudanaise

That created a collision.

The two currencies are different records, but their translated names were identical.

The problem became especially serious because the currency name is used as a key when the initial currency data is inserted into the new database.

The result was effectively an attempt to insert the same key twice.

SQLite rejected the duplicate key, and the database initialization process did not handle that situation correctly.

Instead of reporting a normal database initialization error, MMEX ended up in a state where the application appeared to hang or crash.

## Why did changing the language to English help?

The English names are different:

- South Sudanese
- South Sudanese pound

Therefore, the two records do not collide during database initialization.

Switching the interface language to English was consequently an immediate workaround.

Users affected by the problem could:

1. Change MMEX's interface language from French to English.
2. Create the new database.
3. Continue using MMEX normally.
4. Switch back to French afterwards if desired.

This workaround was confirmed by the original reporter in Issue #8605.

## Why is this more than a translation problem?

At first glance, this looks like a simple localization mistake.

But there is an important software engineering lesson here.

**Human-readable text should generally not be relied upon as a unique identifier.**

A translation is intended for people. It is not guaranteed to remain unique.

For example, two different concepts may legitimately have the same translation in another language.

If an application uses translated strings as database keys, identifiers, or lookup values, a translation change can unexpectedly become a data-integrity problem.

This is exactly what happened here.

The English strings were unique.

The French strings were not.

The database initialization code assumed they would always be unique.

That assumption was the real problem.

## The fix

The issue was addressed in two parts.

First, the affected French translation was corrected so that the two currencies have distinct names.

The translation for "South Sudanese pound" was changed to:

> Livre sud-soudanaise

while "South Sudanese" remains:

> Livre soudanaise

This removes the immediate collision in the French language data.

Second, the database initialization logic was improved so that duplicate-key errors during the initial currency insertion do not cause the entire database creation process to fail.

The relevant fix is tracked in [GitHub Issue #8607](https://github.com/moneymanagerex/moneymanagerex/issues/8607).

The implementation was also refined to keep the related database-generation code in `sqlite2cpp.py` consistent.

## What should users do?

If you are using a current MMEX release, simply use the latest available version.

If you are specifically affected by this problem in an older build, switching the interface language to English before creating the database is a practical workaround.

After the database has been created successfully, you can switch the interface language back.

As always, keep a backup of your MMEX database before performing major version changes or database migrations.

## What does this mean for MMEX development?

This incident is a useful reminder that localization is not purely a user-interface concern.

Translations can affect:

- Database initialization
- Validation
- Sorting
- Lookup operations
- Reports
- Import/export
- Search
- Unique constraints

For this reason, localized builds need to be tested not only for visual correctness, but also for the assumptions made by the underlying application logic.

A string that looks perfectly reasonable in a translation file can still expose an edge case somewhere else in the application.

## Summary

The MMEX 1.9.4 database-creation problem reported in #8605 was not caused by a corrupted database.

It was caused by two different currencies receiving the same French translation, combined with database initialization logic that expected those translated names to be unique.

The immediate workaround was to create the database using the English interface.

The longer-term solution was to correct the translation and make database initialization more tolerant of duplicate-key conditions.

**The lesson is simple: translations are data too.**

And when application logic depends on that data, localization bugs can become database bugs.

## References

- [GitHub Issue #8605 — Crash when creating a new DB or opening a 2nd DB](https://github.com/moneymanagerex/moneymanagerex/issues/8605)
- [GitHub Issue #8607 — Database initialization fix](https://github.com/moneymanagerex/moneymanagerex/issues/8607)
- [MMEX GitHub Repository](https://github.com/moneymanagerex/moneymanagerex)
