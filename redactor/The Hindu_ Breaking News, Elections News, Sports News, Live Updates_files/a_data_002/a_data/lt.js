/*1.6.20170406*/!function(){function isEmptyOrUndefined(e){return void 0===e||null==e||""==e}function setDefaults(){var e={i:60,m:3,w:300,h:250};ltObject.i=validateOrDefault(ltObject.i,e.i),isEmptyOrUndefined(ltObject.m)?0!=ltObject.m&&(ltObject.m=e.m):(ltObject.m=parseInt(ltObject.m),isNaN(ltObject.m)&&(ltObject.m=e.m)),ltObject.w=validateOrDefault(ltObject.w,e.w),ltObject.h=validateOrDefault(ltObject.h,e.h)}function validateOrDefault(e,t){return isEmptyOrUndefined(e)?e=t:(e=parseInt(e),isNaN(e)&&(e=t)),e}function generateTagCode(){var e="",t="";try{"object"==typeof __compassImpData&&("iid"in __compassImpData&&(e=__compassImpData.iid),"h"in __compassImpData&&(t=__compassImpData.h))}catch(r){}var n="<script>var _cltData={lt:true,lit:"+refreshCounter+',lsiid:"'+e+'",lsho:"'+t+'",csrs: '+cookieSyncRunStatus()+"};</script>";return"<html><head>"+n+"</head><body>"+ltObject.t+"</body></html>"}function addTag(){var e='<iframe src="javascript:\'<html><body></body></html>\'" width="<WIDTH>" height="<HEIGHT>" marginheight="0" marginwidth="0" scrolling="NO" frameborder="0"></iframe>';e=e.replace("<WIDTH>",fifWidth.toString()),e=e.replace("<HEIGHT>",fifHeight.toString()),document.write(e),friendlyIframe=document.getElementsByTagName("iframe")[document.getElementsByTagName("iframe").length-1],friendlyIframeDocument=friendlyIframe.contentDocument?friendlyIframe.contentDocument:friendlyIframe.contentWindow.document,updateFifContent(),(-1==refreshMaxCount||refreshMaxCount>0)&&(refTimer=setInterval(refreshTag,refreshInterval),logIntervalId())}function logIntervalId(){try{window.__clii=window.__clii||[],window.__clii.push(refTimer)}catch(e){}}function updateFifContent(){friendlyIframeDocument.write(generateTagCode()),friendlyIframeDocument.close()}function refreshTag(){refreshCounter++,updateFifContent(),-1!=refreshMaxCount&&refreshCounter>=refreshMaxCount&&clearInterval(refTimer)}function cookieSyncRunStatus(){try{var e;if("[object Object]"===Object.prototype.toString.call(window._csmRA)){e="{";for(var t in window._csmRA)window._csmRA.hasOwnProperty(t)&&(e.length>1&&(e+=","),e+='"'+t+'":'+(window._csmRA[t]===!0));e+="}"}else e="{}";return e}catch(r){return"{}"}}var scripts=document.getElementsByTagName("script");if(eval(scripts[scripts.length-1].innerHTML),isEmptyOrUndefined(compassLT))return console.error("compassLT not found!"),!1;var ltObject=compassLT;if(compassLT=void 0,setDefaults(ltObject),isEmptyOrUndefined(ltObject.t))return console.error("compassLT tag not found!"),!1;var _globalRefreshMaxCount=200,refreshInterval=1e3*ltObject.i,refreshMaxCount=ltObject.m;refreshMaxCount=-1==refreshMaxCount||refreshMaxCount>_globalRefreshMaxCount?_globalRefreshMaxCount:refreshMaxCount;var fifWidth=ltObject.w,fifHeight=ltObject.h,refreshCounter=0,refTimer,friendlyIframe,friendlyIframeDocument;addTag()}();
