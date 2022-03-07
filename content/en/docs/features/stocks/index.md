---
title: "Stocks & Shares"
description: "Stocks & Shares"
lead: ""
date: 2022-02-18
draft: false
images: ["Stock-Edit-Screen.png", "Share-Edit-Screen.png"]
menu:
  docs:
    parent: "Features"
toc: true
weight: 50
---

Money Manager Ex allows the tracking of Stocks and Shares to be incorporated with our general day to day transactions. Stocks and Shares have been updated to allow money from our general accounts to be transferred to and from our investments. This also allows the payment of dividends to be recorded against our stock. To allow this to occur, a Share account is created when we create new stock. This also allows us to purchase more shares against this stock, or sell shares from a particular stock.

We often use the terms Stocks and Shares to mean the same thing. Here we refer to

Stocks as Companies
- Shares as of the units of value within the company.
- Generally, we would obtain Stocks via a Stock Broker or institution where we can then purchase or sell shares in a company.

## Initialization of Stocks and Shares

Before we can use Stocks and Shares we need to create a new account of type: Investment

This account will allow us to create Stocks held by this investment. This is known as the Investment Account. Multiple accounts can be created to hold different stocks.

## New Stocks

The creation of a Stock is now a two-stage process. When we select our Investment account from the navigation panel, we will display the Stock Portfolio for this investment. In this view when nothing is selected, a new Stock can be created.

- Here we are presented with a New Stock Investment dialog where we add the initial information for our new stock. At this point, the initial price is the current price.
- On saving, we are asked to create a Share Account having the same name as the Company Name,
followed by the Add Share Transaction dialog where we add extra information relating to our regular transactions.

This dialog is presented when we create a new stock or edit an existing stock. Saving this dialog will update information for the Stock. This dialog can also be used to update current prices and are recorded in the Stock History.

![](Stock-Edit-Screen.png)

## New Shares 

The following dialog is displayed when we create a new transaction against our stock, or we edit a transaction in the Shares account for this stock. Shares can be added or removed from our stock when using the Share Transaction dialog.

This dialog represents the Investment portion (left) and the regular transaction portion (right).

- The Share Account holds two types of transactions
    - On creating a new Stock, a Share Transaction will always be created.
    - Share Transactions holds share information for our stock
    - The regular transaction allows us to transfer money to and from our regular accounts.
- Creating a new transaction from the Stock Portfolio, on our selected stock, will allow us to increase or remove shares, depending on the state of our transaction type.
    - Deposit: Meaning we are depositing money to our regular accounts, therefore we are selling our shares
    - Withdrawal: Meaning we are withdrawing money from our regular accounts, to pay for the shares we have purchased.
    - Selecting Transfer: This means that the transaction will be regarded as a transfer by our regular accounts, otherwise, it will be regarded as an income or expense.

![](Share-Edit-Screen.png)

## Share Purchase or Sale

A Share purchase or Share sale lot can be recorded as a new transaction on the Stock shown in the Stock Portfolio view. The portfolio view will show a summary of the total amount of shares held for each stock for this investment. The individual transactions will be recorded in the Shares Account, accessible via the navigation panel, thus giving a history of activity for this stock.

## Current Price Update

This can be done manually or automatically

Manually: This is achieved by editing the Current Date and Price in the Edit Stock dialog and saving the changes.
- Automatically: This is achieved by selecting the button on the bottom right of the Stock Portfolio View. For this to work, the stock symbol must be properly recorded.
- The stock information is obtained using the Yahoo website.
- Selecting the House button will display the Stock Page in Yahoo.
- Yahoo requires the stock symbol and the stock exchange separated by a dot. Example: AMP.AX
- This can be changed using the Options/Others panel. This may also require changes to be made to the Stock Symbol

## Demonstration Video of how to use the feature

{{< youtube id="UJr2M743p10" title="Guide to rhow to use Stocks & Shares" >}}