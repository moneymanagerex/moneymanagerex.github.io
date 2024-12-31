---
title: "Integrate SQLite3MC into MMEX iOS Project"
Description: "A step-by-step guide to integrating SQLite3MC into the MMEX iOS project for enhanced security of financial data."
Lead: "Learn how to integrate SQLite3 Multiple Ciphers (SQLite3MC) into your iOS/swift project to enable advanced encryption features for financial database security."
Date: 2024-12-31  
Draft: False  
Weight: 50  
Images: []  
Contributors: ["MMEX Team"]
---

## Introduction

This guide outlines the process of integrating SQLite3MultipleCiphers (SQLite3MC) into the MMEX iOS project. SQLite3MC provides support for multiple encryption algorithms, enhancing SQLite database security. The SQLCipher legacy v4 cipher is fully compatible with other MMEX platforms (Desktop and Android), SQLCipher from Zetetic, and [wxSQLitePlus](https://github.com/guanlisheng/wxsqliteplus).

---

## Steps to Integrate SQLite3MC

Follow these steps to add SQLite3MC to your MMEX project:

### Step 1: Add SQLite3MC Source Files

1. Download the **SQLite3MC source code** from its official repository.  
2. Copy the following files into the `sqlite3mc` folder in your Xcode project:
   - `sqlite3mc_amalgamation.c`
   - `sqlite3mc_amalgamation.h`
3. Ensure these files are **included in the target build settings**.

---

### Step 2: Create a Bridging Header

1. Create a new file named `Bridging-Header.h` in your project.  
2. Add the following line to the file to include SQLite3MC's header file:

   ```objc
   #import "sqlite3mc_amalgamation.h"
   ```
3. Configure the bridging header in Xcode:
   - Go to your project target.
   - Navigate to `Build Settings > Swift Compiler - General > Objective-C Bridging Header`.
   - Set the path to your Bridging-Header.h file.


### Step 3: Add SQLite3MC Extension for Swift

1. Create a new file named SQLite3MC.swift in your project.
2. Use the following code snippet to implement the SQLite3MC extension, is to follow [SQLite.swift with sqlcipher](https://github.com/stephencelis/SQLite.swift/blob/master/Documentation/Index.md#using-sqliteswift-with-sqlcipher)
    ```swift
    import SQLite

    /// Extension methods for sqlite3mc (SQLite3 Multiple Ciphers).
    /// This extension interacts with the encrypted SQLite database using sqlite3mc.
    extension Connection {

        // Function to initialize the SQLCipher with the default version and legacy mode
        public func initSQLCipher() {
            sqlite3mc_config(handle, "default:cipher", sqlite3mc_cipher_index("sqlcipher"))
            sqlite3mc_config_cipher(handle, "sqlcipher", "legacy", 4);
        }

        //
        public func initAES128CBC() {
            sqlite3mc_config(handle, "default:cipher", sqlite3mc_cipher_index("aes128cbc"))
            sqlite3mc_config_cipher(handle, "sqlcipher", "legacy", 0);
        }

        /// Set the encryption key for the database. This should be called immediately after opening the database.
        ///
        /// - Parameters:
        ///   - key: The encryption key, typically a passphrase or a raw byte sequence.
        ///   - db: The name of the database, defaults to "main".
        public func key(_ key: String, db: String = "main") throws {
            try check(sqlite3_key_v2(handle, db, key, Int32(key.utf8.count)))
            try cipher_key_check()
        }

        public func key(_ key: Blob, db: String = "main") throws {
            try check(sqlite3_key_v2(handle, db, key.bytes, Int32(key.bytes.count)))
            try cipher_key_check()
        }
    
        /// Change the key on an already encrypted database.
        ///
        /// - Parameters:
        ///   - key: The new encryption key.
        ///   - db: The name of the database, defaults to "main".
        public func rekey(_ key: String, db: String = "main") throws {
            try check(sqlite3_rekey_v2(handle, db, key, Int32(key.utf8.count)))
        }

        public func rekey(_ key: Blob, db: String = "main") throws {
            try check(sqlite3_rekey_v2(handle, db, key.bytes, Int32(key.bytes.count)))
        }

        // MARK: - Private methods
        private func check(_ resultCode: Int32) throws {
            guard resultCode == SQLITE_OK else {
                throw Result.error(message: "SQLite3 Error: \(resultCode)", code: resultCode, statement: nil)
            }
        }

        // Check if the key works by performing a simple query (using SELECT count(*) from sqlite_master).
        private func cipher_key_check() throws {
            _ = try scalar("SELECT count(*) FROM sqlite_master;")
        }
    }
    ```

### Step 4: Add libsqlite3.tbd

1. Go to your project target.
2. Navigate to General > Frameworks, Libraries, and Embedded Content.
3. Click the + button and add `libsqlite3.tbd` to your project.
<p align="center">
    <img src="sqlite3mc_xcode_swift.png" height="800" />
</p>

### Step 5: Build and Run
1. Clean and rebuild your project to ensure all dependencies are integrated correctly.
2. Test the database functionality to verify that encryption and decryption work as expected.
3. we may need to `Other C Flags` and `Preprocessor Macros` at needs, e.g. `-DSQLITE_HAS_CODEC` and `SQLITE_HAS_CODEC=1`

---

## References
1. [Using SQLite.swift with SQLCipher](https://github.com/stephencelis/SQLite.swift/blob/master/Documentation/Index.md#using-sqliteswift-with-sqlcipher)
2. [SQLite3MultipleCiphers Install](https://utelle.github.io/SQLite3MultipleCiphers/docs/installation/install_overview/)
3. [MMEX4iOS Repository](https://github.com/moneymanagerex/mmex-ios)
4. [wxSQLitePlus](https://github.com/guanlisheng/wxsqliteplus/)
