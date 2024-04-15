---
title: "Attachments"
description: "Attachments"
lead: ""
date: 2022-02-18
draft: false
images: []
menu:
  docs:
    parent: "Features"
toc: true
weight: 80
---

Money Manager EX allows adding every file as an attachment for one of its elements (like transactions, accounts, assets, etc..)

All attachments are copied into a user-defined folder and not simply linked to the original file: in this way, they will remain accessible also if the original files are removed and it's possible to backup all of them by simply copying the entire folder.

[Bring Your Own Cloud](../usecloud/index.md) could synchronize these attachments and database files across all your devices, 

Here you go a typical folder tree (assume you choose `%DATABASE%`, with `mmex_attachment.mmb`)
```
mmex_att
├── MMEX_mmex_attachment_Attachments
│   ├── Transaction
│   │   ├── Transaction_1_Attach1.png
│   │   ├── Transaction_1_Attach2.png
│   │   ├── Transaction_2_Attach1.png
│   │   ├── Transaction_2_Attach2.png
│   │   └── readme.txt
│   └── readme.txt
└── mmex_attachment.mmb
```

|    |    |
| --- | --- |
| ![](attachment1.png) | ![](attachment2.png) |
| ![](attachment3.png) | |
