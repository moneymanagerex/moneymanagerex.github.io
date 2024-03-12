---
title: "Assets - a worked example"
description: "Assets - a worked example in Money Manager EX"
lead: "Assets - a worked example in Money Manager EX"
date: 2024-03-06
lastmod: 2024-03-06
draft: false
weight: 50
images: []
contributors: ["Simon1D"]
---

I've used bank accounts, credit card accounts and term accounts, transactions, and payees in mmex for many years now, previously on Windows and now on Linux (mmex v1.7.0), and am very happy with it - huge thanks from me to all the developers!
Occasionally I would try and use assets and asset accounts but always got confused and gave up.
This time I am determined to succeed, and wish there was a worked example (or even a tutorial) to help. I searched but failed to find anything other than a few asset-related exchanges here on the forum. Building on those exchanges, I offer the following. I hope I'm on the right lines (the details are made up, of course).

## Assets - a worked example
I'd like to have mmex represent the acquisition and subsequent disposal of a property asset (my house).

### In the "real" world - the purchase
I bought the property for £100,000 on 21 June 2000. I was a "cash buyer" - lucky me. The legal etc. fees for the purchase were £1000. On 19 June the balance in my bank account was more than £102k, and on 20 June I transferred £101k to a conveyancing solicitor, who completed the purchase and registered the property in my name on 21 June. My net worth changed:
* from £102k on 19 June (all in the bank account)
* to £1k on 20 June (in the bank account)
* to a nominal £101k on 21 June (consisting of £1k in the bank account plus the property, assigned a market value of £100k)
### In the "real" world - the sale
I sold the property for £120,000 on 21 June 2010. The proceeds eventually went towards the purchase of another property but, in the first instance, they arrived in my bank account (after a deduction of £2k in legal fees). During the time that elapsed between the dates of purchase and sale:
* the property value increased by £20k
  
Whatever my net worth was during this period, immediately before the sale it can reasonably be said to include an asset whose value is £120k, because immediately after the sale, the asset value (to me) was reduced to zero and in its place I had £120k in the bank, albeit offset by costs of £2k in fees incurred to complete the sale.

### In mmex - the purchase
* I have one bank account, opened before 2000-06-19, whose reconciled balance on 2000-06-19 is more than £101k. I can afford the property purchase.
* I create an asset "property-1" initial value £0 and an associated asset account also named "property-1" on 2000-06-19, with an initial balance £0, i.e. before any property-related transactions.
* I create a (non-asset) transaction on 2000-06-20 which transfers £100k from the bank account to the asset account, and a withdrawal of £1k from the bank account, with payee "solicitor", on the same date.
* I create a withrawal/transfer asset transaction on 2000-06-21 for £100k, with payee "vendor".
* My net worth, on the mmex dashboard, is correctly shown throughout the stages of the property purchase: in the beginning there is no asset. Then there is an asset whose value is zero (this makes sense because I don't own it - the value to me is zero). Then my net worth plummets when I pay all that money to the solicitor. Finally, my net worth almost recovers, i.e. apart from legal fees, when I become the property owner the following day.

### In mmex - the sale
* In the existing asset account, I create a deposit (non-asset) transaction on 2010-06-18 for £20k, with payee "the market".
* I create a withrawal/transfer asset transaction on 2010-06-19 for £20k with payee "valuation".
* In the asset account, I create a deposit/transfer asset transaction on 2010-06-20 for £120k, with payee "purchaser".
* I create one (non-asset) withdrawal from the asset account on 2010-06-21 of £2k, with payee "solicitor" and a non-asset transfer of £118k from the asset account to my bank account on the same date.
* Again, my net worth on the mmex dashboard is correctly shown throughout the stages of the property sale: the asset value increases by £20k (I already own it, but this increase in its value is only confirmed when the sale contract is agreed with the purchaser) and then my net worth changes from consisting of a property asset plus a bank balance to just a bank balance. As in reality, the net worth only ever goes down by the amount of the legal etc fees, because the ownership doesn't change until the purchaser pays up.

## Comments
In working out this example, I discovered by trial and error what has to happen in mmex for an asset value to change, and came to kind of understand why mmex handles assets the way it does, and also who the various payees should be in all the transactions, in particular, the ones that I invented: "the market" and "valuation".
I assume that the asset account balance should be zero most of the time and only needs to be non-zero when any one of the purchase, the sale, or a valuation is in progress. It is the asset that appears on the dashboard as part of the net worth, not the asset account. Also, an asset can exist even if I don't own it but in that case its value should be zero, because value means value to me.
Again, huge thanks to the developers and maintainers of mmex. If any would care to put me straight in this example, I'd be delighted.

### PS 
* I could upload a database with only these things in it, but it's instructive to work through and observe how the net worth changes as each transaction is added.
* [Original post on Money Manager EX forum](https://forum.moneymanagerex.org/viewtopic.php?p=24907#p24907)
