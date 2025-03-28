---
title: "MMEX Stock v2 - Preview and Changes"
description: "An overview of MMEX Stock v2, highlighting key changes and improvements in investment account handling."
lead: "MMEX Stock v2 introduces significant changes, including the deprecation of shared accounts, a new cash ledger system, and enhanced commission tracking."
date: 2025-03-28
draft: false
weight: 50
images: []
contributors: ["MMEX"]
---

## Overview

MMEX Stock v2 brings significant improvements to how investment accounts and stock trading are managed. This update enhances financial tracking by introducing a new cash ledger system, refining trade transactions, and deprecating outdated concepts. Below are the key changes:

## Key Changes in MMEX Stock v2

### 1. Deprecation of Shares Account

Previously, MMEX used a **Shares Account** to handle **cash transactions** related to stock investments. This approach linked stock transactions to cash in a somewhat tricky manner, requiring additional manual tracking.

In Stock v2, this structure is deprecated. Instead, each **Investment Account** now includes a **Cash Ledger** that directly records all cash movements related to stock trades, providing a more transparent and structured system.

### 2. Historical Share Accounts Coexist with Cash Ledger

To maintain **backward compatibility**, historical **Share Accounts** will still be displayed alongside the new **Cash Ledger**. This ensures users can access their past investment records without disruption.

For users migrating to Stock v2, transactions within **Share Accounts** can be updated by modifying their **Transaction Account ID** to the corresponding **Investment Account ID**. This allows for seamless integration with the new system while preserving historical data.

### 3. Stock Trading with Buy/Sell Transactions

Stock transactions are now structured using **Buy** and **Sell** operations. However, the Cash Ledger still records these movements using **Withdrawals** and **Deposits**, ensuring consistency with previous cash tracking methods.

### 4. Deductible Commission Splits

A major improvement is the support for **deductible commission splits**. This allows for more accurate tracking of stock purchase prices by properly accounting for commission fees. This ensures a precise cost basis for stock positions.

### 5. Deprecation of "Transfer" Concept

The **"Transfer"** concept has been deprecated. Instead, all **position trades** now directly impact the **Cash Ledger** with actual values, reflecting real cash flow movements.

### 6. Recommended LOT-based Trade Tracking

To enhance investment accuracy, MMEX Stock v2 introduces **LOT-based trade tracking**. This method allows investors to manage stock positions on a per-lot basis, improving capital gains calculations and trade history tracking. Benefits include:

- **Accurate Profit Calculation**: Tracks specific lots for capital gains tax reporting.
- **Better Cost Basis Management**: Identifies the purchase price of each lot when selling.
- **Flexible Selling Strategies**: Enables FIFO (First In, First Out), LIFO (Last In, First Out) by specific lot selection for stock sales.

By adopting LOT-based trade tracking, users can better manage their investment performance and tax liabilities.

## Example Scenarios

### Buying Stocks

1. **Buy Order Execution**
   - A stock purchase is recorded using a **Buy** transaction.
   - The cash required for the purchase is withdrawn from the **Cash Ledger**.
   - Any **commission fees** are split and deducted appropriately.

2. **Cash Ledger Update**
   - The transaction results in a **withdrawal** from the cash ledger, reducing available funds.

### Selling Stocks

1. **Sell Order Execution**
   - A stock sale is recorded using a **Sell** transaction.
   - Proceeds from the sale are deposited into the **Cash Ledger**.
   - Any **commission fees** are deducted accordingly.

2. **Cash Ledger Update**
   - The transaction results in a **deposit** into the cash ledger, increasing available funds.

## Conclusion

The MMEX Stock v2 update improves investment tracking by:
- **Replacing Shared Accounts** with **Cash Ledgers** for each Investment Account.
- **Maintaining Historical Share Accounts** alongside the new system for backward compatibility.
- **Allowing Data Migration** by updating **Transaction Account IDs** to link historical transactions to new Investment Accounts.
- **Standardizing Buy/Sell Transactions** while maintaining cash tracking through withdrawals and deposits.
- **Introducing Deductible Commission Splits** for accurate stock cost calculation.
- **Removing the Transfer Concept**, ensuring every position trade directly affects cash flow.
- **Recommending LOT-based Trade Tracking**, enhancing cost basis calculations and tax reporting.

These changes provide **clearer financial records**, **improved cost tracking**, and **better investment management** within MMEX.

## References

1. [MMEX Stocks and Shares Guide](https://moneymanagerex.org/moneymanagerex/en_US/stocks_and_shares.html)
