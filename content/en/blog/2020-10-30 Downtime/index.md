---
title: "Explanation on Downtime"
description: "A short explanation of what happened."
lead: "A short explanation of what happened."
date: 2020-10-30
draft: false
weight: 50
images: ["mmex_vps_down.png"]
contributors: ["MMEX Team"]
---

All MMEX users,

Just a short explanation of what happened. Basically, these several hours down was due to the php7.3-fpm down due to some unknown issues.  Just restart the service to fix it and will keep an eye on this.

    mmex@vps:~$ sudo service php7.3-fpm status
    ● php7.3-fpm.service - The PHP 7.3 FastCGI Process Manager
    Loaded: loaded (/lib/systemd/system/php7.3-fpm.service; enabled; vendor preset: enabled)
    Active: failed (Result: timeout) since Fri 2020-10-30 01:41:02 EDT; 2min 8s ago
        Docs: man:php-fpm7.3(8)
    Process: 837 ExecStart=/usr/sbin/php-fpm7.3 --nodaemonize --fpm-config /etc/php/7.3/fpm/php-fpm.conf (code=killed, signal=TERM)
    Main PID: 837 (code=killed, signal=TERM)

    Oct 30 01:39:32 vps.moneymanagerex.org systemd[1]: Starting The PHP 7.3 FastCGI Process Manager...
    Oct 30 01:41:02 vps.moneymanagerex.org systemd[1]: php7.3-fpm.service: Start operation timed out. Terminating.
    Oct 30 01:41:02 vps.moneymanagerex.org systemd[1]: Failed to start The PHP 7.3 FastCGI Process Manager.
    Oct 30 01:41:02 vps.moneymanagerex.org systemd[1]: php7.3-fpm.service: Unit entered failed state.
    Oct 30 01:41:02 vps.moneymanagerex.org systemd[1]: php7.3-fpm.service: Failed with result 'timeout'.
    mmex@vps:~$ sudo service php7.3-fpm start
    mmex@vps:~$ sudo service php7.3-fpm status
    ● php7.3-fpm.service - The PHP 7.3 FastCGI Process Manager
    Loaded: loaded (/lib/systemd/system/php7.3-fpm.service; enabled; vendor preset: enabled)
    Active: active (running) since Fri 2020-10-30 01:43:18 EDT; 6s ago
        Docs: man:php-fpm7.3(8)
    Process: 2168 ExecStartPost=/usr/lib/php/php-fpm-socket-helper install /run/php/php-fpm.sock /etc/php/7.3/fpm/pool.d/www.conf 73 (code=exited, status=0/SUCCESS)
    Main PID: 2165 (php-fpm7.3)
    Status: "Ready to handle connections"
    Memory: 13.2M
        CPU: 41ms
    CGroup: /system.slice/php7.3-fpm.service
            ├─2165 php-fpm: master process (/etc/php/7.3/fpm/php-fpm.conf)                      
            ├─2166 php-fpm: pool www                                                            
            └─2167 php-fpm: pool www   

**And here you go the details for downtime:**

![VPS graph](mmex_vps_down.png)
