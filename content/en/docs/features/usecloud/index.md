---
title: "Bring Your Own Cloud"
description: "Bring Your Own Cloud"
lead: ""
date: 2024-03-04
draft: false
images: []
menu:
  docs:
    parent: "Features"
toc: true
weight: 110
---

You are not tied to a specific cloud provider. With MMEX, you have the flexibility to store your database files using your chosen:

- **Public Cloud Provider**:
    - Google Drive
    - Microsoft OneDrive
    - Dropbox, etc.

- **Private Cloud Provider**:
    - NextCloud
    - Synology NAS, etc.

- **Phone Storage + Sync Tools**:
    - Syncthing, etc.

Once the Bring Your Own Cloud (BYOC) is set up on all your devices:

### For Desktop MMEX
- MMEX relies on **POSIX file system interfaces** for direct file access.
- Install your preferred cloud provider client and set its synchronization
- Simply locate your database on the shared area provided by your chosen cloud provider.
- The BYOC system syncs the data to the cloud.

### For Android MMEX
- MMEX integrates with **Storage Access Framework (SAF)**, allowing access to files stored in sandboxed locations.
- Install your preferred cloud provider client and set its synchronization
- Open or create your database on the shared area provided by your cloud provider.
- Enable synchronization via `Main Menu -> Settings -> Synchronization`.
    - Set the interval to 5 minutes and ensure "Sync on start" is checked.

### For iOS MMEX
- MMEX integrates with **File Provider Extension (FPE)** to access cloud-stored files.
- Install your preferred cloud provider client and set its synchronization
- Open or create(?) your database on the shared area provided by your cloud provider.

### Synchronization Workflow

The following diagram illustrates how MMEX synchronizes data across different platforms:
```
+-----------+-----------+-----------+-----------+-----------+
|   macOS   |  Windows  |   Linux   |  Android  | iOS/iPad  |
|   (MMEX)  |   (MMEX)  |   (MMEX)  |   (MMEX)  |  (MMEX)   |
+-----+-----+-----+-----+-----+-----+-----+-----+-----------+
      |           |           |           |           |
      v           v           v           v           v
+-----+-----+-----+-----+-----+-----+-----+-----+-----+-----+
| Database  | Database  | Database  | Database  | Database  |
|   Files   |   Files   |   Files   |   Files   |   Files   |
+-----------+-----------+-----------+-----------+-----------+
      |           |           |           |           |
      v           v           v           v           v
+----------------+---------------+--------------+-----------+
|  Public Cloud  | Private Cloud | Phone Store  |  iCloud   |
| (Google Drive) | (NextCloud)   | (Sync Tools) |           |
+----------------+---------------+--------------+-----------+
```
|     |
| --- |
| ![](data_sync_workflow.png) |

### Notes
- Desktop versions provide **direct file access** for better performance.
- Android uses SAF, meaning files must be accessed via **Android’s file picker**.
- iOS relies on FPE, allowing seamless cloud access through the **Files app**.
- Ensure your cloud provider supports **automatic syncing** for real-time updates.

By leveraging BYOC, you can choose the best storage and sync solution that fits your workflow!
