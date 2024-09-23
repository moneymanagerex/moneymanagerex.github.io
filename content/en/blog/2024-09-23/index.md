---
title: "MMEX Android Attachment Preview Support"
description: "Learn how to preview transaction attachments in Money Manager EX for Android by setting up an attachment folder through phone or cloud storage."
lead: "MMEX for Android now supports attachment previews, enabling users to view files linked to transactions. Follow this guide to set it up and start using the feature."
date: 2024-09-23
draft: false
weight: 50
images: ["mmex_attachment_setup.png", "mmex_attachment_preview.png"]
contributors: ["MMEX Team"]
---

Money Manager EX (MMEX) for Android now includes attachment preview support, allowing users to view files like receipts and invoices linked to their transactions. This feature builds on MMEX’s existing attachment support for desktops, as detailed in the [MMEX Desktop Attachment Guide](https://moneymanagerex.org/docs/features/attachments/). Here’s a step-by-step guide to configuring attachment previews in MMEX4Android.

## Setting Up the Attachment Folder

To enable attachment previews, you’ll first need to configure the folder where MMEX accesses and stores attachments. Here's how to do it:

1. Open the MMEX app and navigate to `三 -> Settings -> Per-Database -> Attachment Folder`.
2. Choose the location for your attachment folder:
   - **Phone Storage**: Select a local folder on your device.
   - **Cloud Storage**: If you prefer cloud services like NextCloud, choose the folder synced to your phone through the cloud app.

> **Note:** Some cloud storage solutions, such as Google Drive, may not support direct folder setup for attachments in MMEX. You can still sync files manually through third-party tools or select different cloud providers.

|    |   
| --- |
| ![](mmex_attachment_setup.png) |

Once set up, MMEX will use this folder to store and preview attachments related to your transactions.

## Syncing Attachments from Cloud Storage

If you're using a cloud storage service such as NextCloud, ensure the attachment folder is synced to your device via the respective cloud app. This makes your attachments accessible within MMEX for previewing.

### Enabling Synchronization

To keep your attachments and financial data in sync, make sure synchronization is enabled in the MMEX app via `三 -> Settings -> Synchronization`. This will ensure your attachment files info are always up to date.

## Previewing Attachments

Once the attachment folder is set and synced, transactions with linked files will display a **Preview** link in their details. You can quickly view the attachment by:

1. Opening the transaction details.
2. Tapping the **Preview** link to open the associated file (e.g., receipts, invoices) using your phone’s default viewer.

|    |   
| --- |
| ![](mmex_attachment_preview.png) |

This feature allows you to easily access transaction-related files while managing your finances.

## Conclusion

MMEX for Android brings seamless attachment management to mobile users. By configuring the attachment folder in phone or cloud storage and linking it to MMEX, you can quickly preview important files attached to your transactions. Be mindful that some cloud services, like Google Drive, may not support direct integration, but alternatives like NextCloud work well with MMEX’s attachment system.

For more information about attachment features in MMEX, visit the [MMEX Attachment Support Page](../../docs/features/attachments/).
