<h1 align="center">meanOs</h1>
<img style="center" src="https://cdn.obeyi.com/os/img/ob.mean.logo.svg" />
<p align="center">(MEAN OPERATING SYSTEM)</p>
<p align="center">The smallest and the most powerful operating system.</p>
<p align="center">
  The first decentralized, artificially intelligent, MEAN.js stack, operating system. meanOs is the only operating system hosted anonymous using a P2P network and a suite of non-standard in-browser delivery mechanisms such as - [Gun](https://gun.eco) and - [IPFS] (https://ipfs.io/)
</p>
<iframe src="https://obeyi.com/" width="100%" height="400" frameborder="no" allowfullscreen="true" scrolling="no"></iframe>
<h2>Table of contents</h2>
<ul>
<ol><a href="#brave">Brave</a></ol>
<ol><a href="#gun">Gun</a></ol>
<ol><a href="#browser-support">Special Thanks</a></ol>
<ol><a href="#gui-options">GUI Options</a></ol>
<ol><a href="#architecture">Architecture</a></ol>
<ol><a href="#related-developments">Related Developments</a></ol>
<ol><a href="#special-thanks">Special Thanks</a></ol>
<ul>
<hr>
<h2>Brave</p>
<img src="https://cdn.obeyi.com/os/img/ob.mean.logo.svg" width="130px" height="170px"/>
<p>
  meanOs is specifically designed to work with Brave but is compatible with all other major browsers. meanOs is Proud to be a BRAVE supporter! 
</p>
  [![Chrome Web Store](https://img.shields.io/chrome-web-store/v/jinjaccalgkegednnccohejagnlnfdag.svg)](https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)
  [![Firefox Add-ons](https://img.shields.io/amo/v/violentmonkey.svg)](https://addons.mozilla.org/firefox/addon/violentmonkey)
  [![Microsoft Edge Add-on](https://img.shields.io/badge/dynamic/json?label=microsoft%20edge%20add-on&query=%24.version&url=https%3A%2F%2Fmicrosoftedge.microsoft.com%2Faddons%2Fgetproductdetailsbycrxid%2Feeagobfjdenkkddmbclomhiblgggliao)](https://microsoftedge.microsoft.com/addons/detail/eeagobfjdenkkddmbclomhiblgggliao)
  [![Gitter](https://img.shields.io/gitter/room/violentmonkey/violentmonkey.svg)](https://gitter.im/violentmonkey/violentmonkey)
  [![TravisCI](https://travis-ci.org/violentmonkey/violentmonkey.svg?branch=master)](https://travis-ci.org/violentmonkey/violentmonkey)

<p>
  <a href="https://www.npmjs.com/package/brave-ui" alt="NPM"><img src="https://img.shields.io/npm/v/brave-ui.svg" /></a>
</p>
<p>
  <a href="https://travis-ci.org/brave/brave-ui)" alt="Travis"><img src="https://img.shields.io/travis/brave/brave-ui.svg" /></a>
</p>
<p>
  <a href="https://snyk.io/test/github/brave/brave-ui" alt="Known Vulnerabilities"><img src="https://snyk.io/test/github/brave/brave-ui/badge.svg" /></a>
</p>
<p>
  <a href="#" alt="NPM"><img src="https://img.shields.io/npm/dt/brave-ui.svg" /></a>
</p>
<p>
  <a href="https://lernajs.io/" alt="Lerna"><img src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg" /></a>
</p>
<p>
  <a href="https://standardjs.com" alt="JavaScript Style Guide"><img src="https://img.shields.io/badge/code_style-standard-brightgreen.svg" /></a>
</p>
------------------------------------------------------------------------------------------------
<h2>Browser Support</p>
| [![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](/) | [![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](/) | [![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png)](/) | [![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](/) | [![Yandex](https://raw.github.com/alrra/browser-logos/master/src/yandex/yandex_48x48.png)](/) | [![Brave](https://raw.github.com/alrra/browser-logos/master/src/brave/brave_48x48.png)](/) | [![vivaldi](https://raw.github.com/alrra/browser-logos/master/src/vivaldi/vivaldi_48x48.png)](/) |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 49 & later ✔                                                                                  | 52 & later ✔                                                                                     | 36 & later ✔                                                                               | 79 & later ✔                                                                            | Latest ✔                                                                                      | Latest ✔                                                                                   | Latest ✔                                                                                         |
------------------------------------------------------------------------------------------------
<p>
  ## GUI Options:
</p>
<p>
  - [x] Google Fuchsia, Fuchsia is an open-source capability-based operating system currently being developed by Google. It first became known to the public when the project appeared on a self hosted form of git in August 2016 without any official announcement.
</p>
<p>
  - [x] Kali Linux, Kali Linux is a Debian-derived Linux distribution designed for digital forensics and penetration testing. It is maintained and funded by Offensive Security.
</p>
<p>
  - [x] macOS, macOS is a series of proprietary graphical operating systems developed and marketed by Apple Inc. since 2001. It is the primary operating system for Apple's Mac computers. Within the market of desktop, laptop and home computers, and by web usage, it is the second most widely used desktop OS, after Microsoft Windows.
</p>
------------------------------------------------------------------------------------------------
<p>
  ## Architecture
</p>
<p>
  A - [ServiceWorker](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) is used as a way to persist the censorship circumvention library after the initial visit to the participating website.
</p>
<p>
  After the ServiceWorker is downloaded and activated, it handles all `fetch()` events by first trying to use the regular HTTPS request to the original website. If that fails (for whatever reason, be it timeout, or a `4xx`/`5xx` error), the plugins kick-in, attempting to fetch the content via any means are available.
</p>
------------------------------------------------------------------------------------------------
<p>
  ## Related Developments
</p>
<p>
  - [x] https://ipfs.io/ipfs/QmNhFJjGcMPqpuYfxL62VVB9528NXqDNMFXiqN5bgFYiZ1/its-time-for-the-permanent-web.html
</p>
<p>
  - [x] https://blog.archive.org/2015/02/11/locking-the-web-open-a-call-for-a-distributed-web/
</p>
<p>
  - [x] https://censorship.no/
</p>
<p>
  - [x] https://netblocks.org/
</p>
<p>
  - [x] https://samizdat.is/
</p>
------------------------------------------------------------------------------------------------
<p>
  ## Special Thanks
</p>
<p>
  The following projects have been instrumental in the development to the development of meanOs:
</p>
<p>
  - [x] Gun: GUN is a data­base en­gine that runs every­where JavaScript does — browsers, mo­bile de­vices and servers, al­low­ing you to build ex­act­ly the data sys­tem you want.
</p>
<p>
  - [x] InterPlanetary File System: The InterPlanetary File System is a protocol and peer-to-peer network for storing and sharing data in a distributed file system. IPFS uses content-addressing to uniquely identify each file in a global namespace connecting all computing devices.
</p>
<p>
  - [x] Web Server Chrome: An HTTP Web Server for Chrome (chrome.sockets API)
</p>
<p>
  - [x] Violentmonkey: Violentmonkey provides userscripts support for browsers. It works on browsers with WebExtensions support.
</p>
<p>
  - [x] Samizdat: A decentralized website, browser-based solution to Internet censorship that requires no additional software for website visitors and minimal configuration for website admins.
</p>
<p>
  - [x] Cloudflare: Cloudflare, Inc. is an American web-infrastructure and website-security company, providing content-delivery-network services, DDoS mitigation, Internet security, and distributed domain-name-server services.
</p>
<p>
  - [x] Fuchsia-web-demo: Pink + Purple + Web == Fuchsia Web Demo - (unofficial). The Fuchsia Web Demo tried to simulate the UI and animations of Fuchsia OS Armadillo. RIP Armadillo. Simple Web Demo that simulates Google's new OS. Works across devices. 
</p>
<p>
  - [x] Mac OS X Lion with CSS3: Mac Os X Lion with CSS3 Experiment by Alessio Atzeni - I wanted to create with only use of CSS3 the boot, the login page and finally the desktop of the Mac OS X Lion. 
</p>
<p>
  - [x] Webix Web Desktop: Web Desktop on top of Webix UI, based on Webix UI widgets.
</p>
<p>
  - [x] Vercel: Vercel is the easiest way to deploy websites. Host your web projects with zero configuration, automatic SSL, and global CDN.
</p>
<p>
  - [x] BrowserStack: BrowserStack is a cloud web and mobile testing platform that enables developers to test their websites and mobile applications across on-demand browsers, operating systems and real mobile devices, without requiring users to install or maintain an internal lab of virtual machines, devices or emulators.
</p>
