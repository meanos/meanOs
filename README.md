meanOs: (MEAN OPERATING SYSTEM)

The smallest and the most powerful operating system.

meanOs is specifically designed to work with Brave but is compatible with all other major browsers. meanOs is Proud to be a Brave supporter! 

[https://avatars1.githubusercontent.com/u/12301619?s=200&v=4]

## Browser Support

| [![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](/) | [![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](/) | [![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png)](/) | [![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](/) | [![Yandex](https://raw.github.com/alrra/browser-logos/master/src/yandex/yandex_48x48.png)](/) | [![Brave](https://raw.github.com/alrra/browser-logos/master/src/brave/brave_48x48.png)](/) | [![vivaldi](https://raw.github.com/alrra/browser-logos/master/src/vivaldi/vivaldi_48x48.png)](/) |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 49 & later ✔                                                                                  | 52 & later ✔                                                                                     | 36 & later ✔                                                                               | 79 & later ✔                                                                            | Latest ✔                                                                                      | Latest ✔                                                                                   | Latest ✔                                                                                         |

## Used by extensions in production that has over 100,000+ users.

- [kutt-extension](https://chrome.google.com/webstore/detail/kutt/pklakpjfiegjacoppcodencchehlfnpd) in [abhijithvijayan/kutt-extension](https://github.com/abhijithvijayan/kutt-extension)
- [Virtual backgrounds for Google Meet](https://chrome.google.com/webstore/detail/virtual-backgrounds-for-g/ghlkgnalbbkgpdlodjlackgjehofahoc) in [Coderantine/VirtualBackgroundsForWeb](https://github.com/Coderantine/VirtualBackgroundsForWeb)
- [doubanIMDb](https://chrome.google.com/webstore/detail/doubanimdb/nfibbjnhkbjlgjaojglmmibdjicidini) in [lisongx/doubanIMDb](https://github.com/lisongx/doubanIMDb)
- [Mooc Assistant](https://chrome.google.com/webstore/detail/mooc-assistant/oebggekgendmoeedkkdkdcdbmfbfeldc) in [unbyte/mooc-assistant](https://github.com/unbyte/mooc-assistant)

and many more...

=============

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/jinjaccalgkegednnccohejagnlnfdag.svg)](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)
[![Firefox Add-ons](https://img.shields.io/amo/v/violentmonkey.svg)](https://addons.mozilla.org/firefox/addon/violentmonkey)
[![Microsoft Edge Add-on](https://img.shields.io/badge/dynamic/json?label=microsoft%20edge%20add-on&query=%24.version&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Feeagobfjdenkkddmbclomhiblgggliao)](https://microsoftedge.microsoft.com/addons/detail/eeagobfjdenkkddmbclomhiblgggliao)
[![Gitter](https://img.shields.io/gitter/room/violentmonkey/violentmonkey.svg)](https://gitter.im/violentmonkey/violentmonkey)
[![TravisCI](https://travis-ci.org/violentmonkey/violentmonkey.svg?branch=master)](https://travis-ci.org/violentmonkey/violentmonkey)

The first decentralized, artificially intelligent, MEAN.js stack, operating system. meanOs is the only operating system hosted anonymous using a P2P network and a suite of non-standard in-browser delivery mechanisms such as - [Gun](https://gun.eco) and - [IPFS](https://ipfs.io/)

## GUI Options:

- [x] Google Fuchsia, Fuchsia is an open-source capability-based operating system currently being developed by Google. It first became known to the public when the project appeared on a self hosted form of git in August 2016 without any official announcement.

- [x] Kali Linux, Kali Linux is a Debian-derived Linux distribution designed for digital forensics and penetration testing. It is maintained and funded by Offensive Security.

- [x] macOS, macOS is a series of proprietary graphical operating systems developed and marketed by Apple Inc. since 2001. It is the primary operating system for Apple's Mac computers. Within the market of desktop, laptop and home computers, and by web usage, it is the second most widely used desktop OS, after Microsoft Windows.


## Architecture

A - [ServiceWorker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) is used as a way to persist the censorship circumvention library after the initial visit to the participating website.

After the ServiceWorker is downloaded and activated, it handles all `fetch()` events by first trying to use the regular HTTPS request to the original website. If that fails (for whatever reason, be it timeout, or a `4xx`/`5xx` error), the plugins kick-in, attempting to fetch the content via any means are available.

## Related developments

- [x] https://ipfs.io/ipfs/QmNhFJjGcMPqpuYfxL62VVB9528NXqDNMFXiqN5bgFYiZ1/its-time-for-the-permanent-web.html
- [x] https://blog.archive.org/2015/02/11/locking-the-web-open-a-call-for-a-distributed-web/
- [x] https://censorship.no/
- [x] https://netblocks.org/
- [x] https://samizdat.is/

## Special thanks and acknowledgements

The following projects have been instrumental in the development to the development of meanOs:

- [x] Gun: GUN is a data­base en­gine that runs every­where JavaScript does — browsers, mo­bile de­vices and servers, al­low­ing you to build ex­act­ly the data sys­tem you want.

- [x] InterPlanetary File System: The InterPlanetary File System is a protocol and peer-to-peer network for storing and sharing data in a distributed file system. IPFS uses content-addressing to uniquely identify each file in a global namespace connecting all computing devices.

- [x] Web Server Chrome: An HTTP Web Server for Chrome (chrome.sockets API)

- [x] Violentmonkey: Violentmonkey provides userscripts support for browsers. It works on browsers with WebExtensions support.

- [x] Samizdat: A decentralized website, browser-based solution to Internet censorship that requires no additional software for website visitors and minimal configuration for website admins.

- [x] Cloudflare: Cloudflare, Inc. is an American web-infrastructure and website-security company, providing content-delivery-network services, DDoS mitigation, Internet security, and distributed domain-name-server services.

- [x] Fuchsia-web-demo: Pink + Purple + Web == Fuchsia Web Demo - (unofficial). The Fuchsia Web Demo tried to simulate the UI and animations of Fuchsia OS Armadillo. RIP Armadillo. Simple Web Demo that simulates Google's new OS. Works across devices. 

- [x] Mac OS X Lion with CSS3: Mac Os X Lion with CSS3 Experiment by Alessio Atzeni - I wanted to create with only use of CSS3 the boot, the login page and finally the desktop of the Mac OS X Lion. 

- [x] Webix Web Desktop: Web Desktop on top of Webix UI, based on Webix UI widgets.

- [x] Vercel: Vercel is the easiest way to deploy websites. Host your web projects with zero configuration, automatic SSL, and global CDN.

- [x] BrowserStack: BrowserStack is a cloud web and mobile testing platform that enables developers to test their websites and mobile applications across on-demand browsers, operating systems and real mobile devices, without requiring users to install or maintain an internal lab of virtual machines, devices or emulators.