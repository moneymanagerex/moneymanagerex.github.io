---
title: "MMEX Cloud Storage Starts from Synology Drive"
description: ""
lead: ""
date: 2024-06-13
lastmod: 2024-06-13
draft: false
weight: 50
images: ["files_nas.png"]
contributors: ["MMEX Team"]
---

As well known that Money Manager EX supports [Bring Your Own Cloud](../../docs/features/usecloud/) well, and this article will take a detailed introduction on getting your MMEX + Synology Drive up on your phones and achieve data sharing.

## Preparation
Essentially, we need a device with Android 5.1 or newer, and a cloud provider account. here i take Synology Drive as a start

### Install Synology Drive
* Install Synology Drive app on your device, choose what ever source you like or directly download from [Synology Download Center](https://www.synology.com/en-sg/support/download/DS920+?version=7.2#androids)
* Synology Drive app version: `3.6.0-982`
* Logon your Synology Drive app with your account to ensure it is working well
* Open Files app to make sure it would explore your Synology Drive

### Install Money Manager EX
* Install MMEX4Android on your device from [F-Droid](https://f-droid.org/packages/com.money.manager.ex/) or [Github](https://github.com/moneymanagerex/android-money-manager-ex/releases)
* MMEX app version: `2024-05-09 (1032)`


## Create MMEX Database in Synology Drive
* Open your MMEX app (grant some permissions if any)
* If first open, choose `CREATE DATABASE`
* If not first open, click `三 -> Create Database`
* Navigate to your prefered folder in Synology Drive and set file name
* Leave password empty if your file name ends with `.mmb`
* Input and remember your password if your file name ends with `.emb`


## Open MMEX Database in Synology Drive
* Open your MMEX app (grant some permissions if any)
* If first open, choose `OPEN DATABASE`
* If not first open, click `三 -> Open Database -> Other`
* Navigate to your prefered folder in Synology Drive and choose database file 
* Input and remember your password if your file name ends with `.emb`


## Other Clouds
Synology Drive is a private cloud solution, and other public and private clouds would follow the similar setups.

## Sync tools
Sync tool (e.g. Syncthing) will rely on phone storages (e.g. Documents, Downloads) and detaileds is TBD

## P.S.
how to verify you Synology Drive is working well and connected with your phone and MMEX app.
* Files app to explore Synology Drive 
![](files_nas.png)

### LAST NOT LEAST
Enable synchronization via `三 -> Settings -> Synchronization`.
