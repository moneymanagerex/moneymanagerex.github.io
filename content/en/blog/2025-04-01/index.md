---
title: "How to read Balance in single-account panels"
description: "Understanding how the balance is displayed in the single account panel and the correct way to sort transactions for accurate calculations."
lead: "To ensure the correct balance calculation in the single account panel, transactions must be sorted by Sequence Number (SN) in ascending order."
date: 2025-04-01
draft: false
weight: 50
images: []
contributors: ["MMEX"]
---

In single-account panels, column Balance shows the account balance after the execution of each transaction.

## Short description (what you see in GUI)

**In 1.9.0, Balance is calculated in the order of SN (Sequence Number).**

To read Balance in the correct (calculation) order, you should sort by SN in ascending order, i.e., if the current sorting column is anything else, just click once on the SN header.

Sorting by SN shows Balance in calculation order also when scheduled transactions are enabled (with the square button next to the filter selector). This is a new feature in 1.9.0.

## Long description (how it works behind the GUI)

In 1.9.0, both SN and Balance are calculated dynamically, when the list of transactions is fetched from DB. They are not stored in DB and they are not re-calculated every time you sort the list by another column. If you add/remove/edit transactions, the list is re-created and it is pre-sorted by Date/ID (or Date/Time/ID if Time is enabled) before SN and Balance is re-calculated. After this, the list is sorted again by the columns you selected, so both SN and Balance may appear out of order.

Be aware that sorting is always by two columns (see the "Sort Order" indicator above the table). When you click a column it becomes the primary sorting column, but there is also a secondary column. SN is unique, so the secondary column doesn’t matter if the primary column is SN (the same is true for ID, but only if scheduled transactions are disabled). [In 1.8.1, Date was coupled to ID; not anymore in 1.9.0, so be careful about the secondary column when the primary column is not unique.]

Sorting by Date may show Balance in correct order, but only under strict conditions: all transactions have been entered in chronological order, and scheduled transactions are disabled. Under these conditions, sorting by Date is equivalent to sorting by Date/ID, which is equivalent to sorting by SN. However, after some use, the above conditions are not valid anymore, so sorting by SN is the recommended (and simpler) way to read Balance in the correct order.

Sorting by ID may show Balance in correct order, but only under strict conditions. After some use, these conditions are usually not valid.

Sorting by Date/ID (i.e., Date as primary and ID as secondary, which can be selected by clicking ID first and Date next), is almost equivalent to SN, but also only under conditions: Time is disabled and scheduled transactions are disabled.

Sorting by Balance serves a different purpose: it sorts the transactions list in order of ascending or descending balance. This is not the same as the balance calculation order, which is mostly chronological.

## Summary

Sorting by SN, shows Balance in the correct order under any conditions (because both SN and Balance are calculated together, in the same order). Sorting by anything else, usually shows Balance in the wrong order.

## Reference

- [GitHub Issue #7218 - How to read Balance in single-account panels](https://github.com/moneymanagerex/moneymanagerex/issues/7218)
