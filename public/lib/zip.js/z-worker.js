var _0x26ff=["importScripts","message","append","apply","crcType","codec","bind","crcInput","NOOP","crc","length","type","data","flush","scripts","z-worker.js should be run only once","progress","prototype","get","push","zWorkerInitialized","stack","codecClass","performance","newTask","duplicated sn","now"];!function(c,x){!function(x){for(;--x;)c.push(c.shift())}(++x)}(_0x26ff,321);var _0x5cd7=function(c,x){return _0x26ff[c-=0]};!function(c){"use strict";if(c[_0x5cd7("0x17")])throw new Error(_0x5cd7("0x12"));c[_0x5cd7("0x17")]=!0,addEventListener(_0x5cd7("0x4"),(function(c){var t,e,d=c[_0x5cd7("0xf")],r=d[_0x5cd7("0xe")],s=d.sn,n=x[r];if(n)try{n(d)}catch(c){t={type:r,sn:s,error:(e=c,{message:e.message,stack:e[_0x5cd7("0x18")]})},postMessage(t)}}));var x={importScripts:function(c){c.scripts&&c[_0x5cd7("0x11")][_0x5cd7("0xd")]>0&&importScripts[_0x5cd7("0x6")](void 0,c[_0x5cd7("0x11")]);postMessage({type:_0x5cd7("0x3")})},newTask:e,append:r,flush:r},t={};function e(x){var e=c[x.codecClass],d=x.sn;if(t[d])throw Error(_0x5cd7("0x1"));t[d]={codec:new e(x.options),crcInput:"input"===x[_0x5cd7("0x7")],crcOutput:"output"===x[_0x5cd7("0x7")],crc:new s},postMessage({type:_0x5cd7("0x0"),sn:d})}var d=c[_0x5cd7("0x1a")]?c[_0x5cd7("0x1a")][_0x5cd7("0x2")][_0x5cd7("0x9")](c[_0x5cd7("0x1a")]):Date.now;function r(c){var x=c.sn,r=c[_0x5cd7("0xe")],s=c[_0x5cd7("0xf")],n=t[x];!n&&c[_0x5cd7("0x19")]&&(e(c),n=t[x]);var o,_=r===_0x5cd7("0x5"),a=d();if(_)try{o=n.codec[_0x5cd7("0x5")](s,(function(c){postMessage({type:_0x5cd7("0x13"),sn:x,loaded:c})}))}catch(c){throw delete t[x],c}else delete t[x],o=n[_0x5cd7("0x8")].flush();var i=d()-a;a=d(),s&&n.crcInput&&n[_0x5cd7("0xc")][_0x5cd7("0x5")](s),o&&n.crcOutput&&n[_0x5cd7("0xc")][_0x5cd7("0x5")](o);var p=d()-a,u={type:r,sn:x,codecTime:i,crcTime:p},f=[];o&&(u[_0x5cd7("0xf")]=o,f[_0x5cd7("0x16")](o.buffer)),_||!n[_0x5cd7("0xa")]&&!n.crcOutput||(u[_0x5cd7("0xc")]=n[_0x5cd7("0xc")][_0x5cd7("0x15")]());try{postMessage(u,f)}catch(c){postMessage(u)}}function s(){this[_0x5cd7("0xc")]=-1}function n(){}s[_0x5cd7("0x14")][_0x5cd7("0x5")]=function(c){for(var x=0|this[_0x5cd7("0xc")],t=this.table,e=0,d=0|c[_0x5cd7("0xd")];e<d;e++)x=x>>>8^t[255&(x^c[e])];this.crc=x},s[_0x5cd7("0x14")][_0x5cd7("0x15")]=function(){return~this.crc},s[_0x5cd7("0x14")].table=function(){var c,x,t,e=[];for(c=0;c<256;c++){for(t=c,x=0;x<8;x++)1&t?t=t>>>1^3988292384:t>>>=1;e[c]=t}return e}(),c[_0x5cd7("0xb")]=n,n[_0x5cd7("0x14")][_0x5cd7("0x5")]=function(c,x){return c},n[_0x5cd7("0x14")][_0x5cd7("0x10")]=function(){}}(this);