var _0x36ea=["GET","connect_io","status","toLowerCase","onChanged","responseText","textnotification","emit","onreadystatechange","meanEmail","connect","addListener","https://api.emailfake.com/api/","reconnect","setBadgeText","readyState","browserAction","basic","log","https://emailfake.com/${newmsg.clickgo}","get","${result}","test","getBadgeText","https://api.emailfake.com/api/?pnc=${theUrl}","${channel16} -> ${newchn}","send","value","div","https://api.emailfake.com","cookies","innerHTML","surl","new_email","${nuser}@${ndom}","split","https://emailfake.com/","parse","open","tddata","This is Punycode domain watch ${watch_ch}"];!function(c,x){!function(x){for(;--x;)c.push(c.shift())}(++x)}(_0x36ea,406);var _0x557c=function(c,x){return _0x36ea[c-=0]},textnotification=0;function httpGetAsync(c,x){var e=new XMLHttpRequest;e[_0x557c("0xc")]=function(){if(4==e[_0x557c("0x13")]&&200==e[_0x557c("0x6")]){var c=JSON[_0x557c("0x0")](e.responseText);console[_0x557c("0x16")](c)}},e[_0x557c("0x1")](_0x557c("0x4"),c,!0),e[_0x557c("0x1e")](null)}function httpGetPun(c,x){var e=new XMLHttpRequest;e[_0x557c("0xc")]=function(){if(4==e[_0x557c("0x13")]&&200==e.status){var x=e[_0x557c("0x9")];socket[_0x557c("0xb")]("watch_for_my_email",x.toLowerCase()),channel16=c}},e.open(_0x557c("0x4"),_0x557c("0x1c"),!0),e.send(null)}chrome[_0x557c("0x22")][_0x557c("0x18")]({url:_0x557c("0x28"),name:_0x557c("0x24")},(function(c){c?(n=c.value.split("/",2),ndom=n[0],nuser=n[1]):httpGetAsync(_0x557c("0x10"))}));var socket=io[_0x557c("0xe")](_0x557c("0x21"));socket.on(_0x557c("0x25"),(function(c){chrome[_0x557c("0x14")][_0x557c("0x1b")]({},(function(x){""==x?chrome[_0x557c("0x14")][_0x557c("0x12")]({text:"1"}):x>=1&&(x++,chrome[_0x557c("0x14")][_0x557c("0x12")]({text:_0x557c("0x19")}));var e=JSON[_0x557c("0x0")](c),n=document.createElement("html");if(n[_0x557c("0x23")]=e[_0x557c("0x2")],1==textnotification){var t=new Notification(n.getElementsByTagName(_0x557c("0x20"))[0].innerHTML,{type:_0x557c("0x15"),title:_0x557c("0xd"),icon:"favicon.png",body:n.getElementsByTagName("div")[1].innerHTML});t.onclick=function(){window[_0x557c("0x1")](_0x557c("0x17")),t.close(),chrome[_0x557c("0x14")][_0x557c("0x12")]({text:""})}}}))}));var channel16="";function connectorr(){chrome[_0x557c("0x22")][_0x557c("0x18")]({url:_0x557c("0x28"),name:_0x557c("0x24")},(function(c){if(c){n=c[_0x557c("0x1f")][_0x557c("0x27")]("/",2),ndom=n[0],nuser=n[1];var x=_0x557c("0x26");if(x!==channel16){console[_0x557c("0x16")](_0x557c("0x5")),console[_0x557c("0x16")](_0x557c("0x1d")),socket[_0x557c("0xb")]("dont_watch",channel16[_0x557c("0x7")]());var e=x;/[^\u0000-\u007f]/[_0x557c("0x1a")](e)?(console[_0x557c("0x16")](_0x557c("0x3")),httpGetPun(e)):(socket[_0x557c("0xb")]("watch_for_my_email",e[_0x557c("0x7")]()),channel16=x)}}})),chrome[_0x557c("0x22")].get({url:_0x557c("0x28"),name:_0x557c("0xa")},(function(c){c&&(textnotification=c[_0x557c("0x1f")])}))}chrome.cookies[_0x557c("0x8")][_0x557c("0xf")]((function(c){connectorr()})),socket.on(_0x557c("0x11"),(function(c){channel16="",connectorr()}));