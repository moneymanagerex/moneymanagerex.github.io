---
title: "Transactions"
description: "Transactions"
lead: ""
date: 2022-02-18
draft: false
images: []
menu:
  docs:
    parent: "Features"
toc: true
weight: 20
---

Money Manager EX allows tracking incomes and expenses inserting new transactions for every money movement.

Transactions are divided for each bank account and they could have different status:

- **Unreconciled**: When you enter a transaction, it initially is in the state of "Unreconciled". Which means the transaction has not been reconciled with your bank/credit card company's balance.

- **Reconciled**: Once the transaction is checked and verified with a credit card company's balance information, it can be marked as reconciled.

- **Void**: If you entered a transaction that later became invalid or you canceled the transaction, instead of deleting the transaction you can also mark it as void so you have a record of the transaction.

- **Followup**: This status marks transactions as needing more action. For example, you receive a balance statement from the financial institution and you notice that the transaction amount is different between what you recorded and what is in the statement. You can mark it as a flag for follow up so that you can follow up with the financial institution.

- **Duplicate**: The status will be automatically be changed to duplicate if it is recognized as such.

|    |    |
| --- | --- |
| ![](transaction1.png) | ![](transaction2.png) |
| ![](transaction3.png) | |