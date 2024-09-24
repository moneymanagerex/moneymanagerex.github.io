---
title: "MMEX Database Sync Across Android, iOS, and Desktop"
description: "Explore how Money Manager EX (MMEX) uses and syncs its SQLite database file across Android, iOS, and Desktop platforms. Learn the best practices for managing database copies, syncing, and handling conflicts."
lead: "MMEX uses SQLite for database management across multiple platforms. Follow this guide to understand the different approaches MMEX takes on Android, iOS, and Desktop for using and syncing the database file while ensuring data integrity."
date: 2024-09-24
draft: false
weight: 40
images: []
contributors: ["MMEX Team"]
---

Managing and syncing an SQLite database across different platforms is crucial for ensuring data integrity, especially when working with personal finance apps like **Money Manager EX (MMEX)**. This article details the approaches MMEX takes to use and sync the underlying SQLite database across **Android**, **iOS**, and **Desktop** platforms. Understanding these strategies will help you effectively manage your database and avoid conflicts when accessing data from multiple devices.

---

### **Platform Comparison for SQLite Database Syncing in MMEX**

Here’s a table comparing the approach MMEX uses to sync the SQLite database across Android, iOS, and Desktop:

| **Platform** | **Approach** | **Tools/Framework** | **Local Copy Usage** | **Sync Timing** | **Conflict Handling** | **Best Practice Summary** |
|--------------|--------------|---------------------|----------------------|-----------------|-----------------------|---------------------------|
| **Android**  | SAF to access cloud files, copy locally | Storage Access Framework (SAF) + cloud drive client (e.g., Google Drive, Dropbox) | Yes, copy to local storage for faster access | Sync back after database operations or periodically | Handle conflicts manually using timestamps | Use SAF to access the database, work on a local copy, sync changes when done, manage conflicts manually |
| **iOS**      | Direct access to cloud files, local copy possible in future | SwiftUI `fileImporter` + cloud drive client (e.g., iCloud, Dropbox) | Not yet, currently direct access | Sync back after user saves or exits the app | Use file timestamps | Currently directly access files, local copy may be used in the future to improve performance |
| **Desktop**  | Access from a cloud-synced folder | Native Cloud Drive Clients (e.g., Dropbox, iCloud, Google Drive) | Directly in cloud-synced folder, but safer to use a local copy | Sync as part of cloud folder's sync mechanism | Use file locks, alert users to handle conflicts | Access SQLite from a cloud-synced directory, use local copies for heavy operations, manage conflicts with locks or prompts |

---

### **Detailed Breakdown of Each Platform’s Approach**

#### **Android (MMEX for Android)**
On Android, MMEX uses the **Storage Access Framework (SAF)** to access the database stored on cloud services like Google Drive or Dropbox. By copying the file to local storage, MMEX can perform faster database operations without depending on network speeds or cloud availability. Once database operations are completed or at regular intervals, the changes are synced back to the cloud file.  
- **Key Benefit**: Improved performance due to local copies.
- **Sync Timing**: Sync occurs after database operations or periodically.
- **Conflict Handling**: Conflicts are resolved manually using **timestamps**, ensuring that the most recent version of the database is synced.

#### **iOS (MMEX for iOS)**
On iOS, MMEX currently **directly accesses** the SQLite database from cloud storage without creating a local copy. This approach may be updated in the future to use a local copy for performance improvements, especially for heavier operations. The database syncs back when users save or exit the app. For now, conflicts are handled manually using **timestamps** to determine the latest version.  
- **Key Benefit**: Simple direct access without local copy management, with future improvements planned.
- **Sync Timing**: Changes are synced back when the user saves or exits the app.
- **Conflict Handling**: MMEX uses **file timestamps** to handle conflicts and notifies users if the cloud version has changed.

#### **Desktop (MMEX for Desktop)**
For desktop platforms, MMEX uses **cloud-synced folders** provided by services like Dropbox or Google Drive. In this scenario, the SQLite database is typically stored directly in the synced folder, but for resource-heavy operations, working on a local copy is safer. Since cloud syncing is managed automatically by the cloud client, conflicts are handled through file locks or by alerting users about potential conflicts, allowing manual resolution.  
- **Key Benefit**: Direct access to cloud-synced folders, reducing the need for manual file imports.
- **Sync Timing**: Syncing is managed by the cloud service's synchronization mechanism.
- **Conflict Handling**: **File locks** or prompts help prevent simultaneous edits from different devices.


### **Attachments in MMEX**

Across **all platforms**, attachments linked to transactions (such as images or PDFs) are **always directly accessed** from cloud storage without creating local copies. Attachments are typically stored in a separate folder, which **may even be on a different cloud drive** from the database itself. This separation ensures users can access attachments in real time while keeping file management simple. Users can view or download these attachments as needed, maintaining a seamless experience.

---

### **Key Points to Remember**

1. **Local Copy Usage**:  
   Across most platforms, MMEX uses or plans to use local copies of the database to boost performance and minimize the risk of corruption during operations. This approach also helps in cases where the network connection might be unreliable or slow.

2. **Sync Timing**:  
   MMEX synchronizes database changes at specific times rather than continuously. Whether it’s after a database operation, when saving changes, or periodically, syncing at these logical points ensures that data is accurately stored without overwhelming cloud storage.

3. **Conflict Handling**:  
   Conflicts can arise when multiple devices access and modify the database simultaneously. Across platforms, MMEX handles conflicts through **manual intervention**, primarily using **timestamps** to ensure the most recent file version is saved.

4. **Attachments**:
   Attachments, such as images or documents linked to transactions, are directly accessed from cloud storage across all platforms. This allows for instant access without the need for local storage management, streamlining the user experience.

---

### **Why is This Approach Important?**

Managing an SQLite database effectively across multiple platforms ensures that users can access their financial data from any device while maintaining data consistency. Whether you are on **MMEX for Android**, **MMEX for iOS**, or **MMEX for Desktop**, understanding how database files are accessed, synced, and updated helps prevent data loss, conflicts, or performance issues.

---

For more details on how MMEX handles cloud synchronization, visit the official [MMEX documentation](../../docs/features/usecloud).
