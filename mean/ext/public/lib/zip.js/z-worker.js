var _0x513c=["crc","output","length","progress","message","prototype","options","flush","crcType","append","codec","newTask","table","type","duplicated sn","crcOutput","buffer","z-worker.js should be run only once","importScripts","stack","codecClass","now","NOOP","zWorkerInitialized","data","bind","crcInput","get","push","input","scripts","performance"];!function(x,f){!function(f){for(;--f;)x.push(x.shift())}(++f)}(_0x513c,454);var _0x532f=function(x,f){return _0x513c[x-=0]};!function(x){"use strict";if(x[_0x532f("0x11")])throw new Error(_0x532f("0xb"));x[_0x532f("0x11")]=!0,addEventListener("message",(function(x){var t,e,r=x.data,c=r[_0x532f("0x7")],n=r.sn,s=f[c];if(s)try{s(r)}catch(x){t={type:c,sn:n,error:(e=x,{message:e[_0x532f("0x1e")],stack:e[_0x532f("0xd")]})},postMessage(t)}}));var f={importScripts:function(x){x[_0x532f("0x18")]&&x[_0x532f("0x18")][_0x532f("0x1c")]>0&&importScripts.apply(void 0,x[_0x532f("0x18")]);postMessage({type:_0x532f("0xc")})},newTask:e,append:c,flush:c},t={};function e(f){var e=x[f[_0x532f("0xe")]],r=f.sn;if(t[r])throw Error(_0x532f("0x8"));t[r]={codec:new e(f[_0x532f("0x0")]),crcInput:f[_0x532f("0x2")]===_0x532f("0x17"),crcOutput:f.crcType===_0x532f("0x1b"),crc:new n},postMessage({type:_0x532f("0x5"),sn:r})}var r=x.performance?x[_0x532f("0x19")][_0x532f("0xf")][_0x532f("0x13")](x[_0x532f("0x19")]):Date[_0x532f("0xf")];function c(x){var f=x.sn,c=x.type,n=x.data,s=t[f];!s&&x[_0x532f("0xe")]&&(e(x),s=t[f]);var _,a=c===_0x532f("0x3"),o=r();if(a)try{_=s[_0x532f("0x4")][_0x532f("0x3")](n,(function(x){postMessage({type:_0x532f("0x1d"),sn:f,loaded:x})}))}catch(x){throw delete t[f],x}else delete t[f],_=s[_0x532f("0x4")][_0x532f("0x1")]();var i=r()-o;o=r(),n&&s[_0x532f("0x14")]&&s[_0x532f("0x1a")][_0x532f("0x3")](n),_&&s[_0x532f("0x9")]&&s[_0x532f("0x1a")][_0x532f("0x3")](_);var p=r()-o,u={type:c,sn:f,codecTime:i,crcTime:p},d=[];_&&(u[_0x532f("0x12")]=_,d[_0x532f("0x16")](_[_0x532f("0xa")])),a||!s.crcInput&&!s[_0x532f("0x9")]||(u[_0x532f("0x1a")]=s[_0x532f("0x1a")][_0x532f("0x15")]());try{postMessage(u,d)}catch(x){postMessage(u)}}function n(){this[_0x532f("0x1a")]=-1}function s(){}n[_0x532f("0x1f")][_0x532f("0x3")]=function(x){for(var f=0|this.crc,t=this[_0x532f("0x6")],e=0,r=0|x[_0x532f("0x1c")];e<r;e++)f=f>>>8^t[255&(f^x[e])];this[_0x532f("0x1a")]=f},n[_0x532f("0x1f")].get=function(){return~this[_0x532f("0x1a")]},n[_0x532f("0x1f")][_0x532f("0x6")]=function(){var x,f,t,e=[];for(x=0;x<256;x++){for(t=x,f=0;f<8;f++)1&t?t=t>>>1^3988292384:t>>>=1;e[x]=t}return e}(),x[_0x532f("0x10")]=s,s[_0x532f("0x1f")].append=function(x,f){return x},s[_0x532f("0x1f")][_0x532f("0x1")]=function(){}}(this);