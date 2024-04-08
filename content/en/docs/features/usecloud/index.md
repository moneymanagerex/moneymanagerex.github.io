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

- **Local Storage + Sync Tools**:
    - Syncthing, etc.

Once the Bring Your Own Cloud (BYOC) is set up on all your devices:

**For Desktop MMEX**:
- Simply locate your database on the shared area provided by your chosen cloud provider.
- The BYOC system takes care of synchronizing the data to the cloud.

**For Android MMEX**:
- Open or create your database on the shared area provided by your cloud provider.
- Enable synchronization via `Main Menu -> Settings -> Synchronization`.
    - Set the interval to 5 minutes and ensure "Sync on start" is checked.


Here's a simple diagram illustrating the synchronization process among the devices/platforms:
```
+-----------+-----------+-----------+-----------+
|   macOS   |  Windows  |   Linux   |  Android  |
|   (MMEX)  |   (MMEX)  |   (MMEX)  |   (MMEX)  |
+-----+-----+-----+-----+-----+-----+-----+-----+
      |           |           |           |
      v           v           v           v
+-----+-----+-----+-----+-----+-----+-----+-----+
| Database  | Database  | Database  | Database  |
|   Files   |   Files   |   Files   |   Files   |
+-----------+-----------+-----------+-----------+
      |           |           |           |
      v           v           v           v
+----------------+----------------+-------------+
|  Public Cloud  |  Private Cloud | Local Store |
| (Google Drive) | (NextCloud)    | + Sync      |
+----------------+----------------+-------------+
```
