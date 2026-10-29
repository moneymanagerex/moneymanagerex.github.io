
---
title: "Money Manager EX for iOS in Mainland China"
description: "Get started with Money Manager EX on iPhone and iPad in mainland China. Learn about Simplified Chinese, desktop database compatibility, local storage, cloud sync, and backups."
lead: "Already using Money Manager EX on your computer? Bring your personal finance records to your iPhone. MMEX for iOS is available on the China mainland App Store and lets you manage your finances while keeping control of your data."
date: 2026-10-29
draft: false
weight: 50
images: []
contributors: ["MMEX"]
---

Money Manager EX (MMEX) is an open-source personal finance manager for desktop and mobile devices. With MMEX for iOS, you can manage your accounts and transactions on your iPhone or iPad, whether you are at home, commuting, or traveling.

For users in mainland China, getting started is straightforward. The app is available on the China mainland App Store and supports Simplified Chinese.

But the more interesting question is how to use MMEX across your phone and computer without losing control of your financial records.

This guide covers downloading the app, working with an existing database, choosing a storage strategy, and keeping your data safe.

## 1. Download MMEX for iOS in mainland China

You can download Money Manager EX directly from the China mainland App Store:

**[Download Money Manager EX for iPhone and iPad](https://apps.apple.com/cn/app/money-manager-ex/id6683300571)**

The app supports Simplified Chinese and requires:

- iPhone: iOS 17.6 or later
- iPad: iPadOS 17.6 or later

MMEX for iOS is free to download. Check the App Store listing for the latest compatibility information and release notes.

## 2. What can you do with MMEX on your iPhone?

MMEX for iOS is designed to bring everyday personal finance management to mobile devices.

Its features include:

- **Accounts and currencies:** Keep track of your financial accounts and balances.
- **Transactions:** Record income, expenses, transfers, and split transactions.
- **Payees and categories:** Organize transactions so that you can understand where your money goes.
- **Scheduled transactions:** Work with recurring financial transactions.
- **Reports and insights:** Review your financial activity using the available reporting features.
- **Database encryption:** Protect supported database files with encryption.

The iOS interface is designed for mobile use, so not every desktop feature or workflow is necessarily identical. If you rely on a particular advanced desktop feature, check that it is supported in the current iOS release.

## 3. Already using MMEX on Windows, macOS, or Linux?

You do not necessarily need to start your financial records from scratch.

MMEX uses a SQLite-based database, and its platforms are designed to work with compatible MMEX database files. The iOS app supports opening and sharing database files through Apple's Files interface.

A practical way to get started is:

1. Close MMEX on your computer and make a backup of your existing database.
2. Locate the database file you normally use.
3. Copy it to a location accessible from your iPhone, such as the Files app or a supported storage provider.
4. Open the database in MMEX for iOS.
5. Check several accounts and recent transactions to confirm that the correct database has been opened.

If your database is encrypted, keep the password available and use the appropriate supported workflow.

**Important:** Database compatibility does not mean that every feature is identical across platforms. Use compatible application versions and keep a backup before opening a database with a different release.

## 4. How should you synchronize MMEX between devices?

Sharing a database file and synchronizing changes are not the same thing.

If you use MMEX on both your computer and your iPhone, you need a reliable way to make the same database available to both devices.

MMEX supports a Bring Your Own Cloud (BYOC) approach: you choose a supported storage provider instead of being required to use a proprietary MMEX cloud account.

Depending on your setup, this may involve a cloud storage service or your own storage infrastructure.

### Option A: Keep a local database on your iPhone

This is the simplest option if you mainly use MMEX on one device.

Keep the database in a location available through Files and make regular backups. You can later transfer the database to your computer when needed.

The trade-off is that changes made on different devices will not automatically merge just because both devices have MMEX installed.

### Option B: Use a shared cloud storage location

If you regularly switch between desktop and mobile, consider a storage provider that supports the Files interface on iOS and is available on your other devices.

The general workflow is:

1. Install and configure the storage provider on your devices.
2. Make sure its files are synchronized and available locally when needed.
3. Open the same intended MMEX database through the provider.
4. Allow the database changes to be saved and synchronized before switching devices.

For users in mainland China, verify that your chosen storage provider works reliably in your actual environment. Do not assume that every international cloud service is equally accessible or that a network-mounted file is always available offline.

### Avoid concurrent editing

A synchronized database file is not a real-time collaborative database server.

If two devices independently modify copies of the same SQLite database, the storage provider may create conflicting copies or fail to combine their changes correctly.

A safer habit is to finish your work on one device, let synchronization complete, and then open the database on another device.

For more details, see the MMEX documentation on [Bring Your Own Cloud](https://moneymanagerex.org/docs/features/usecloud/).

## 5. Your financial data should remain under your control

Personal finance records can reveal much more than account balances. They may contain transaction histories, spending patterns, payees, and other sensitive information.

MMEX is designed around local-first data management, and its iOS app supports encrypted database workflows.

There are several practical steps you can take to protect your records:

- **Choose your storage location deliberately.** Know whether your database is stored locally or in a synchronized folder.
- **Use database encryption where appropriate.** Keep your password secure and make sure you understand the recovery implications.
- **Maintain independent backups.** A synchronized copy is not a substitute for a backup that you can recover independently.
- **Protect your devices.** Use your device's security features and avoid leaving unencrypted financial files in locations you do not trust.
- **Test recovery.** Periodically verify that you can restore a backup and open it successfully.

Local-first does not mean that every feature is guaranteed to work offline. Cloud-based file access and synchronization depend on the availability of the relevant storage provider.

The key benefit is flexibility: you can choose how your financial data is stored and transferred rather than being forced into a single cloud workflow.

## 6. A recommended setup for mainland China users

For most people, a simple setup is the best place to start.

**If you mainly use an iPhone:**

1. Download MMEX from the App Store.
2. Create a database or open an existing one.
3. Keep the database in a known location.
4. Set up a separate backup routine.

**If you use both a computer and an iPhone:**

1. Back up your existing desktop database.
2. Open a compatible copy in MMEX for iOS.
3. Choose a storage provider that works on both platforms.
4. Establish a one-device-at-a-time editing habit.
5. Confirm that synchronization has completed before switching devices.

You do not need to design a complicated cloud infrastructure before you can start recording transactions. Begin with a workflow you understand, then improve it as your needs grow.

## Summary

MMEX for iOS brings personal finance management to iPhone and iPad, with Simplified Chinese support and compatibility with MMEX database files.

For users in mainland China, the first step is simple: download the app from the official App Store listing. From there, choose whether to keep your database locally or use a supported storage provider to share it between devices.

The most important principle is to distinguish database compatibility from synchronization. Keep backups, avoid concurrent editing of unsynchronized copies, and choose a storage workflow that you can reliably maintain.

**Ready to get started?**

[Download Money Manager EX from the China mainland App Store](https://apps.apple.com/cn/app/money-manager-ex/id6683300571)

## References

- [Money Manager EX for iOS — App Store](https://apps.apple.com/cn/app/money-manager-ex/id6683300571)
- [MMEX for iOS — GitHub](https://github.com/moneymanagerex/mmex-ios)
- [Bring Your Own Cloud — MMEX Documentation](https://moneymanagerex.org/docs/features/usecloud/)
