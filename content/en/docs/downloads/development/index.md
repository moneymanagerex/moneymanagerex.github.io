---
title: "Development"
description: "Development Builds"
lead: ""
date: 2022-02-18
draft: false
images: []
menu:
  docs:
    parent: "Downloads"
toc: true
weight: 20
---

## Beta/Development Builds

{{< alert context="warning" text="Use unstable builds for early testing before official release. Avoid everyday use unless you need a specific feature/fix or are willing to risk using the latest software." />}}

### <i class="fa-brands fa-windows"></i>&nbsp;Windows

- [Access latest Appveyor development build](https://ci.appveyor.com/project/whalley/moneymanagerex)

Under "Job name," choose x64 or Win32 > Artifacts > Portable (recommended for unstable builds).

{{< youtube id="3T4zIdcwDP0" title="How to download from Appveyor" >}}

### <i class="fa-brands fa-apple"></i>&nbsp;MacOS

- [Repository of latest signed MacOS Universal builds](https://link.ipx.co.uk/mmex-mac-betas)

### <i class="fa-brands fa-apple"></i>&nbsp;iOS

- [Join the MMEX for iOS Beta (TestFlight)](https://testflight.apple.com/join/SYakQaAv)

Install Apple's TestFlight app, then open the invitation link on your iPhone or iPad to join the beta program.

Beta versions may contain bugs or incomplete features. Back up your MMEX database before testing.

### <i class="fa-brands fa-linux"></i>&nbsp;Linux (Flatpak)

- [Download latest Linux development build (Flatpak)](https://github.com/moneymanagerex/moneymanagerex/releases/tag/nightly)

The latest development build is automatically published to GitHub Releases after a successful build on the `master` branch.

Download the following files from the `nightly` pre-release:

- `mmex.flatpak` – Linux application package.
- `SHA256SUMS` – SHA-256 checksum for verifying the downloaded package.

To verify the download (with both files in the same directory):

    sha256sum -c SHA256SUMS

The `nightly` release is updated automatically with the latest successful development build. It is intended for testing and may contain unfinished features or bugs.

- [Arch User Repository – Stable](https://aur.archlinux.org/packages/moneymanagerex/)
- [Arch User Repository – Development](https://aur.archlinux.org/packages/moneymanagerex-git/)
- [Install Linux – Other installation instructions](https://github.com/moneymanagerex/moneymanagerex/blob/master/INSTALL.md#linux)
- [Build Linux from Source](https://github.com/moneymanagerex/moneymanagerex/blob/master/BUILD.md#linux)

[View Linux CI builds on CircleCI](https://app.circleci.com/pipelines/github/moneymanagerex/moneymanagerex)
