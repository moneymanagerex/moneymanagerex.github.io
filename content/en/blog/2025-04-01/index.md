---
title: "Viewing Balance in the Single Account Panel"
description: "A guide on how to correctly view and calculate balances in the single account panel of Money Manager Ex."
lead: "To ensure the correct balance calculation in the single account panel, transactions should be sorted by Sequence Number (SN) in ascending order."
date: 2025-04-01
draft: false
weight: 50
images: []
contributors: ["MMEX"]
---

## Overview

In Money Manager Ex, the **Balance** column in the single account panel displays the running balance after each transaction. However, to ensure the balance is calculated correctly, transactions must be sorted in a specific order.

## Correct Sorting for Balance Calculation

Starting from **version 1.9.0**, the balance is dynamically computed based on the **Sequence Number (SN)**. If the transactions are not sorted by SN, the balance column may show incorrect values.

To ensure the correct display of balances:

1. **Sort transactions by SN in ascending order** by clicking on the "SN" column header.
2. If scheduled transactions are enabled (using the square button next to the filter selector), the balance will still display correctly when sorted by SN.

This ensures the balance reflects the correct transaction sequence.

## How Balance Calculation Works

In **version 1.9.0**, the SN and balance are recalculated dynamically when fetching transactions from the database. The steps involved are:

1. **Retrieving Transactions**  
   - The database fetches transaction records based on the current sorting method.
  
2. **Assigning Sequence Numbers (SN)**  
   - Each transaction is assigned a sequence number dynamically according to the sorted order.
  
3. **Computing Running Balance**  
   - The balance is calculated in order of the assigned SN.

This means the balance display depends entirely on the sorting method. If transactions are sorted incorrectly, the balance calculation will not reflect the true transaction sequence.

## Ensuring Accurate Balances

To always see the correct balance:

- **Always sort by SN in ascending order** when reviewing transactions.
- **Use the SN column header** to adjust sorting if needed.
- **Enable scheduled transactions** only when required, as they also follow this ordering rule.

## Reference

- [GitHub Issue #7218 - Balance Calculation Discussion](https://github.com/moneymanagerex/moneymanagerex/issues/7218)
