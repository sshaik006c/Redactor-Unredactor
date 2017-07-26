/*2.63.20170406*/var compassSmartTag=compassSmartTag||void 0;!function compassProcessSmartTag(){function oldBrowsersSupport(){try{Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){var r=this.length>>>0,t=Number(arguments[1])||0;for(t=0>t?Math.ceil(t):Math.floor(t),0>t&&(t+=r);r>t;t++)if(t in this&&this[t]===e)return t;return-1})}catch(e){return!1}}function detectIE(){try{var e=window.navigator.userAgent,r=e.indexOf("MSIE ");if(r>0)return parseInt(e.substring(r+5,e.indexOf(".",r)),10);var t=e.indexOf("Trident/");if(t>0){var a=e.indexOf("rv:");return parseInt(e.substring(a+3,e.indexOf(".",a)),10)}var n=e.indexOf("Edge/");return n>0?parseInt(e.substring(n+5,e.indexOf(".",n)),10):null}catch(i){return null}}function deserializeSmartTag(e){var r={hostId:e.h,tagId:e.t,domainId:e.d,domain:getDomainById(e.d,"serving"),cdnDomain:void 0===e.cd?getDomainById(e.d,"cdn"):e.cd,referral:e.referral,pu:e.pu,sub_id:e.su,clickTrackingUrl:e.click_track,postbackUrl:e.postbackUrl,fif:void 0!==e.fif?e.fif:!0,endPoint:e.ep||"compass"};return"y_b"in e&&(r.type="b",r.typeData_b={type:e.y_b.y,size:e.y_b.s}),"y_p"in e&&(r.type="p",r.typeData_p={type:e.y_p.y,size:e.y_p.s,freqCap:e.y_p.fc,duration:e.y_p.du,popTitle:e.y_p.t},r.fif=!1),"hb"in e&&(r.headerBidding={aucId:e.hb.raid||"",impId:e.hb.rimid||"",bidId:e.hb.rbid||""}),"app"in e?r.app={isMobileApp:1==e.app.ima,id:e.app.id,name:e.app.name,bundle:e.app.bundle,version:e.app.version,storeUrl:e.app.store_url,userId:e.app.user_id,doNotTrack:e.app.do_not_track,privacyPolicy:e.app.privacy,keywords:e.app.keywords,paid:e.app.paid}:r.app={isMobileApp:!1},r}function getDomainById(e,r){var t={2:{serving:"YWRzLmRlbGl2ZXJpbXAuY29t",cdn:"Y2RuLm1hcnBoZXppcy5jb20="},3:{serving:"YWRzLnRvcHNydmltcC5jb20=",cdn:"Y2RuLnRvcHNydmltcC5jb20="},8:{serving:"YWRzLmFsbW9uZ2tpbmdzdG9yeS5jb20=",cdn:"Y2RuLmFsbW9uZ2tpbmdzdG9yeS5jb20="},9:{serving:"YWRzLmlzc2lncGVuLmNvbQ==",cdn:"Y2RuLmlzc2lncGVuLmNvbQ=="},100:{serving:"YWRzLm9uZXRhZ3N0YWdlc3J2LmNvbQ==",cdn:"Y2RuLm5hbm9vb2suY29t"},101:{serving:"YWRzLm9uZXRhZ3N0YWdlc3J2LmNvbQ==",cdn:"Y2RuLm5hbm9vb2suY29t"},300:{serving:"YWRzLmltcGFjdHNydi5jb20=",cdn:"Y2RuLmRlc2NpZGVyLmNvbQ=="}};return e in t?r in t[e]?base64Decode(t[e][r]):null:e}function base64Decode(e){var r,t,a,n,i,o,c,p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",d="",s=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");s<e.length;)n=p.indexOf(e.charAt(s++)),i=p.indexOf(e.charAt(s++)),o=p.indexOf(e.charAt(s++)),c=p.indexOf(e.charAt(s++)),r=n<<2|i>>4,t=(15&i)<<4|o>>2,a=(3&o)<<6|c,d+=String.fromCharCode(r),64!=o&&(d+=String.fromCharCode(t)),64!=c&&(d+=String.fromCharCode(a));return d}function getLoopData(){var e={inLoop:!1,firstRun:!1,iteration:0,loopIid:""};try{"object"==typeof _cltData&&(e.inLoop=1==_cltData.lt,e.iteration=_cltData.lit,e.firstRun=0==e.iteration,e.loopIid=_cltData.lsiid,e.loopHostId=_cltData.lsho)}catch(r){}return e}function generateCachebuster(){return Math.floor(2147483647*Math.random())}function processTag(e){return validateSmartTag(e)?void generateTag(e):!1}function validateSmartTag(e){try{if(void 0===e||null==e)return console.error("Smart tag was'nt found"),!1;for(var r=0;r<smartTagMandatoryFields.length;r++)if(!validateSmartTagParam(e[smartTagMandatoryFields[r]],smartTagMandatoryFields[r]))return!1;if(typeDataFieldName=getTypeDataName(e.type),!validateSmartTagParam(e[typeDataFieldName],typeDataFieldName))return!1;for(r=0;r<smartTagMandatoryTypeFields[typeDataFieldName].length;r++)if(!validateSmartTagParam(e[typeDataFieldName][smartTagMandatoryTypeFields[typeDataFieldName][r]],typeDataFieldName+"."+smartTagMandatoryTypeFields[typeDataFieldName][r]))return!1;return!0}catch(t){return sendErrorToKibana("validateSmartTag",t),!0}}function validateSmartTagParam(e,r){return void 0===e||null==e?(sendParamValidationError(r),!1):!0}function validateUrlProtocol(e){try{if(0==e.indexOf("//")){var r="https:"==window.location.protocol?"https:":"http:";return r+e}return e}catch(t){return e}}function sendParamValidationError(e){
console.error("Error in smart tag - "+e+" not found!")}function getTypeDataName(e){return"typeData_"+e}function replaceArrays(e,r,t){if(void 0===r||void 0===t)return!1;if(r.length<=0)return e;if(r.length>t.length)return!1;for(var a=e,n=0;n<r.length;n++)a=a.replace(r[n],t[n]);return a}function replaceMulti(e,r){if(void 0===r||!Array.isArray(r))return e;2!=r.length||Array.isArray(r[0])||Array.isArray(r[1])||(r=[[r[0],r[1]]]);for(var t=e,a=0;a<r.length;a++){var n=r[a];Array.isArray(n)&&2==n.length&&(t=t.replace(n[0],n[1]))}return t}function emptyIfUndefined(e){return void 0===e?"":e}function generateTag(e){var r="//<DOMAIN>/<END_POINT>?<IMPRESSION_ID>ho=<HOST_ID>&ty=<TYPE>&si=<SIZE>&ta=<TAG_ID><CDN_DOMAIN><EXTRAS><CLIENT_INFO>&v=<FILE_VERSION>&cb=<CACHE_BUSTER><REF>",t="<script type=\"text/javascript\"> var compassPopAdParams = {tagId: '<TAG_ID>', frequencyCapacity: '<FREQ_CAP>', duration: '<DURATION>', period: 'hour', popupTitle: '<POP_TITLE>', tagReferrer: '<REFERRER>', tagContent: decodeURIComponent(\"<TAG_CONTENT>\"), popupSettings: \"<POP_TYPE>\"}; </script> <script type=\"text/javascript\" src=\""+POPUPAD_SCRIPT_PATH+'"></script>',a={};a[getTypeDataName("b")]={j:'<script type="text/javascript" src="<TAG_CONTENT>"></script>',i:'<iframe src="<TAG_CONTENT>" width="<WIDTH>" height="<HEIGHT>" marginheight="0" marginwidth="0" scrolling="NO" frameborder="0"></iframe>'},a[getTypeDataName("p")]={popup:t.replace("<POP_TYPE>",'width=" + screen.availWidth + ", height=" + screen.availHeight + ", top=0, left=0'),tab:t.replace("<POP_TYPE>","tab")};var n=generateCachebuster(),i=e[typeDataFieldName].size,o=a[typeDataFieldName][e[typeDataFieldName].type],c="";""!=emptyIfUndefined(e.referral)&&"INSERT_REFERRER_HERE"!=e.referral&&(c="&re="+e.referral);var p="";null!=e.cdnDomain&&(p="&cd="+e.cdnDomain);var d,s=getExtras(e);d="p"==e.type?"p":e[typeDataFieldName].type;var l="";e.fif&&(e.impressionId=generateImpressionId(e.tagId,i),l="iid="+e.impressionId+"&");var u=replaceMulti(r,[["<DOMAIN>",e.domain],["<END_POINT>",e.endPoint],["<IMPRESSION_ID>",l],["<HOST_ID>",e.hostId],["<TYPE>",d],["<SIZE>",i],["<TAG_ID>",e.tagId],["<CDN_DOMAIN>",p],["<EXTRAS>",s],["<CLIENT_INFO>",getClientInfo(i)],["<FILE_VERSION>",fileVersion],["<CACHE_BUSTER>",n],["<REF>",c]]);u=removeTabs(u);var m=replaceMulti(o,[["<TAG_CONTENT>","p"==e.type?encodeURIComponent(u):u],["<WIDTH>",i.split("x")[0]],["<HEIGHT>",i.split("x")[1]],["<TAG_ID>",e.tagId],["<FREQ_CAP>",e[typeDataFieldName].freqCap],["<DURATION>",e[typeDataFieldName].duration],["<POP_TITLE>",emptyIfUndefined(e[typeDataFieldName].popTitle)],["<REFERRER>",c]]);m+=getAntiFraudPixel(e.tagId,i,e.referral,""!=emptyIfUndefined(e.pu)?encodeURIComponent(e.pu):encodeURIComponent(highestAnalyzedLocation),e.sub_id),e.fif?writeTagFriendlyIframe(m,i,e):writeTagSync(m)}function removeTabs(e){var r="	",t=encodeURIComponent(r),a=encodeURIComponent(" ");return e.replace(new RegExp(r,"ig"),a).replace(new RegExp(t,"ig"),a)}function getClientInfo(e){function r(e){var r=0,t=0;try{for(;e;)r+=e.offsetLeft-e.scrollLeft+e.clientLeft,t+=e.offsetTop-e.scrollTop+e.clientTop,e=e.offsetParent}catch(a){}return{left:r,top:t}}try{var t=[],a=new Date;t.push(["ts",a.getTime()]),t.push(["scw",screen.width]),t.push(["sch",screen.height]),t.push(["iif",self==top?"false":"true"]);try{var n="compassPosLocator";document.write("<div id='"+n+"' style='height: 1px; width: 1px; display: none;'></div>");var i=document.getElementById(n);i.style.display="";var o=r(i);try{i.remove()}catch(c){i.parentElement.removeChild(i)}t.push(["alp",o.left]),t.push(["atp",o.top])}catch(c){}if(e=e.split("x"),2==e.length){var p=parseInt(o.top),d=parseInt(e[1]),s=parseInt(document.documentElement.clientHeight),l="";l=s>p+d?"1":s>p?"6":"2",l="1",t.push(["av",l])}for(var u="",m="&",f=0;f<t.length;f++){var y=t[f];u=u+m+y[0]+"="+y[1]}return u}catch(c){return""}}function getExtras(e){var r="";try{try{""!=emptyIfUndefined(e.pu)&&(r+="&pu="+encodeURIComponent(e.pu))}catch(t){}null!==highestAnalyzedLocation&&""!==highestAnalyzedLocation&&(r+="&du="+encodeURIComponent(highestAnalyzedLocation)),
null!==analyzedLocation.highestDomain&&""!==analyzedLocation.highestDomain&&(r+="&dd="+analyzedLocation.highestDomain);try{""!=emptyIfUndefined(e.sub_id)&&(r+="&su="+encodeURIComponent(e.sub_id))}catch(t){}try{if(""!=emptyIfUndefined(e.postbackUrl)){Array.isArray(e.postbackUrl)||(e.postbackUrl=[e.postbackUrl]);for(var a=0;a<e.postbackUrl.length;a++)r+="&pbu="+encodeURIComponent(validateUrlProtocol(replaceCachebusterMacro(e.postbackUrl[a])))}}catch(t){}try{"headerBidding"in e&&(r+="&raid="+e.headerBidding.aucId,r+="&rimid="+e.headerBidding.impId,r+="&rbid="+e.headerBidding.bidId)}catch(t){}try{loopData.inLoop&&(r+="&lit="+loopData.iteration,""!=loopData.loopIid&&(r+="&lsiid="+loopData.loopIid),""!=loopData.loopHostId&&(r+="&lsho="+loopData.loopHostId))}catch(t){}try{var n=navigator.connection||navigator.mozConnection||navigator.webkitConnection;void 0!==n&&(r+="&ct="+n.type)}catch(t){}try{var i=["&ima=",e.app.isMobileApp?"1":"0"];""!==emptyIfUndefined(e.app.id)&&i.push("&aid=",encodeURIComponent(e.app.id)),""!==emptyIfUndefined(e.app.name)&&i.push("&anm=",encodeURIComponent(e.app.name)),""!==emptyIfUndefined(e.app.bundle)&&i.push("&abn=",encodeURIComponent(e.app.bundle)),""!==emptyIfUndefined(e.app.version)&&i.push("&aver=",encodeURIComponent(e.app.version)),""!==emptyIfUndefined(e.app.storeUrl)&&i.push("&asu=",encodeURIComponent(e.app.storeUrl)),""!==emptyIfUndefined(e.app.userId)&&i.push("&auid=",encodeURIComponent(e.app.userId)),""!==emptyIfUndefined(e.app.doNotTrack)&&i.push("&adnt=",encodeURIComponent(e.app.doNotTrack)),""!==emptyIfUndefined(e.app.privacyPolicy)&&i.push("&apr=",encodeURIComponent(e.app.privacyPolicy)),""!==emptyIfUndefined(e.app.keywords)&&i.push("&akw=",encodeURIComponent(e.app.keywords)),""!==emptyIfUndefined(e.app.paid)&&i.push("&apd=",encodeURIComponent(e.app.paid)),r+=i.join("")}catch(t){}return r}catch(t){sendErrorToKibana("getExtras",t);try{return r}catch(t){return""}}}function analyzeLocation(){function e(e){try{if(!e.location.ancestorOrigins)return[];for(var r=[],t=Object.keys(e.location.ancestorOrigins),a=0;a<t.length;a++){var n=t[a];"length"!==n&&r.push(e.location.ancestorOrigins[n])}return r}catch(i){return sendErrorToKibana("getAncestorsAsArray",i),[]}}function r(e,a){try{var n=a.shift()||null;if(e!=window.top){var i=r(e.parent,a);return i.push(t(e,n)),i}return[t(e,n)]}catch(o){return sendErrorToKibana("getLocationsStack",o),[]}}function t(e,r){try{return{referrer:e.document.referrer,href:e.location.href,isTop:e==window.top,ancestor:r}}catch(t){try{return{referrer:null,href:null,isTop:e==window.top,ancestor:r}}catch(t){return{referrer:null,href:null,isTop:null,ancestor:r}}}}function a(e){try{if(0==e.length)return"";var r=null,t=e[0].referrer;e[0].referrer=null;for(var a=0;a<e.length;a++){var i=e[a];if(r=n(i.referrer)||n(i.ancestor)||n(i.href),null!=r)break}return e[0].referrer=t,r}catch(o){return sendErrorToKibana("extractHighestLocationFromStack",o),""}}function n(e){try{return"string"!=typeof e?null:0==e.indexOf("javascript")?null:0!=e.indexOf("http")?null:e}catch(r){return null}}function i(e){try{return"string"!=typeof e?"":(e=e.split("//"),e=e.length>1?e[1]:e[0],e.split("/")[0])}catch(r){return sendErrorToKibana("extractDomain",r),e||""}}try{var o=e(window),c=r(window,o),p=a(c);return{highest:p,highestDomain:i(p),stack:c}}catch(d){return sendErrorToKibana("analyzeLocation",d),{highest:"",highestDomain:"",stack:[]}}}function writeTagSync(e){return document.write(e),!0}function writeTagFriendlyIframe(e,r,t){try{var a,n=r.split("x"),i=n[0],o=n[1],c="javascript:'<html><body></body></html>'",p='<iframe id="<ID>" src="<SRC>" width="<WIDTH>" height="<HEIGHT>"  marginheight="0" marginwidth="0" scrolling="NO" frameborder="0"></iframe>',d=replaceMulti(p,[["<ID>",t.impressionId],["<SRC>",c],["<WIDTH>",i],["<HEIGHT>",o]]),s={iid:t.impressionId,domain:t.domain,cdnDomain:t.cdnDomain,size:r,h:t.hostId,sourceObj:curCompassSmartTagSerialized};a="object"==typeof JSON?JSON.stringify(s):'{"iid": "'+t.impressionId+'","domain": "'+t.domain+'","cdnDomain":"'+t.cdnDomain+'","size":"'+r+'","h":"'+t.hostId+'"}';
var l="<script>var __compassImpData = "+a+";</script>",u="<script>var inDapIF=true;</script>";document.write(d);var m=document.getElementById(t.impressionId);if(null!==m){var f=m.contentWindow.document;f.open(),f.write("<html><head></head><body>"),f.write(u),f.write(l),f.write(e),f.write("</body></html>"),(null===ieVersion||ieVersion>9)&&f.close(),setClickTrackingFunction(t.clickTrackingUrl,f)}else sendErrorToKibana("writeTagFriendlyIframe_fifNotFound",y),writeTagSync(e)}catch(y){sendErrorToKibana("writeTagFriendlyIframe",y)}}function setClickTrackingFunction(pixelTrackingUrls,iframeDocument,attempt){try{if(void 0===pixelTrackingUrls||""==pixelTrackingUrls||0==pixelTrackingUrls.length)return!1;attempt=attempt||1;var bodyElm=iframeDocument.getElementsByTagName("body");if(0==bodyElm.length)return 3>attempt&&(attempt++,setTimeout(function(){setClickTrackingFunction(pixelTrackingUrls,iframeDocument,attempt)},500)),!1;bodyElm=bodyElm[0],Array.isArray(pixelTrackingUrls)||(pixelTrackingUrls=[pixelTrackingUrls]);for(var clickTrackingCodeArr=[],i=0;i<pixelTrackingUrls.length;i++)clickTrackingCodeArr.push('document.createElement("img").src = "'+pixelTrackingUrls[i]+'";');return bodyElm.onclick=function(event){try{eval(clickTrackingCodeArr.join(""))}catch(e){sendErrorToKibana("clickTracking_customFunction",e)}},!0}catch(e){return sendErrorToKibana("setClickTrackingFunction",e),!1}}function generateImpressionId(e,r){try{var t=[];t.push(e);var a=r.split("x");t.push(a[0]),t.push(a[1]);var n=[],i=new Date;n.push(i.getTime());var o=i.getTimezoneOffset();o=o>=0?o:Math.abs(o)+1,n.push(o),n.push(Math.floor(1e17*Math.random()));for(var c=0;c<n.length;c++)n[c]=n[c].toString(36);return t.push(n.join("")),t.join("-")}catch(p){try{return"cst-fallback-id-"+Math.floor(1e10*Math.random())}catch(p){return""}}}function getAntiFraudPixel(e,r,t,a,n){function i(e,r,t,a,n){try{var i="//c.fqtag.com/tag/implement-r.js?org=GaZEyASarA8adetechuB&p=<TAG_ID>&a=<SIZE>&cmp=<SUB_ID>&fmt=banner&rd=<DOMAIN>&rt=display&sl=1&fq=1&c1=<REF>&c2=<PU>&cb=<CACHE_BUSTER>",o=analyzedLocation.highestDomain,c=generateCachebuster(),p=["<scr",'ipt src="',replaceMulti(i,[["<TAG_ID>",e],["<SIZE>",r],["<DOMAIN>",o],["<REF>",t],["<PU>",a],["<SUB_ID>",n],["<CACHE_BUSTER>",c]]),'"></scr',"ipt>"];return p.join("")}catch(d){return""}}try{if(loopData.inLoop)return"";var o=20,c=Math.floor(Math.random()*o)+1==1;if(!c)return"";n=void 0===n?"":encodeURIComponent(n);var p="";return p+=i(e,r,t,a,n)}catch(d){return""}}function getKibanaPixel(e,r,t){try{var a=[11224,16487];if(-1==a.indexOf(parseInt(e)))return"";t=t||"",""!=t&&(t="_"+t);var n="//trk.dfxangel.com/ym.html?e=unknown&pub_name=compass_<TAG_ID>_<SIZE><SUFFIX>&cb=<CACHE_BUSTER>",i=generateCachebuster(),o=['<script src="',replaceMulti(n,[["<TAG_ID>",e],["<SIZE>",r],["<SUFFIX>",t],["<CACHE_BUSTER>",i]]),'"></scr',"ipt>"];return o.join("")}catch(c){return""}}function fireKibanaPixel(e,r,t){try{var a="//trk.diamondminebubble.com/p.gif?e=<EVENT>&<PARAMS>&cb=<CACHE_BUSTER>",n=generateCachebuster(),i=replaceMulti(a,[["<EVENT>",e],["<PARAMS>",r],["<CACHE_BUSTER>",n]]),o=document.createElement("img");return o.src=i,!0}catch(c){return!1}}function sendErrorToKibana(e,r){try{var t="",a="";try{t=encodeURIComponent(r.message)}catch(r){}try{a=encodeURIComponent(r.stack)}catch(r){}var n;n="object"==typeof JSON?JSON.stringify(r):r,fireKibanaPixel("st_error_"+e,"ta="+curCompassSmartTag.tagId+"&v="+fileVersion+"&err="+n+"&err_msg="+t+"&err_stack="+a)}catch(r){}}function fireKibanaVideoPixel(e,r,t){try{t=t||"",""!=t&&(t="_"+t);var a="//trk.dfxangel.com/ym.html?e=unknown&pub_name=compass_<TAG_ID>_<SIZE><SUFFIX>&cb=<CACHE_BUSTER>",n=generateCachebuster(),i=replaceMulti(a,[["<TAG_ID>",e],["<SIZE>",r],["<SUFFIX>",t],["<CACHE_BUSTER>",n]]),o=document.createElement("img");return o.src=i,!0}catch(c){return!1}}function replaceCachebusterMacro(e){return e.replace(/##CACHE_BUSTER##/gi,generateCachebuster())}if(void 0===compassSmartTag||null==compassSmartTag)return console.error("Smart tag not found"),!1;var fileVersion="2.63";oldBrowsersSupport();var ieVersion=detectIE(),curCompassSmartTagSerialized=compassSmartTag,curCompassSmartTag=deserializeSmartTag(curCompassSmartTagSerialized);
compassSmartTag=void 0;var CDN_URL="//"+curCompassSmartTag.cdnDomain+"/cmpp/",POPUPAD_SCRIPT_PATH=CDN_URL+"popupad.min.js?v=20150519",loopData=getLoopData(),analyzedLocation=analyzeLocation(),highestAnalyzedLocation=analyzedLocation.highest,smartTagMandatoryFields=["hostId","tagId","type","domain"],smartTagMandatoryTypeFields={};smartTagMandatoryTypeFields[getTypeDataName("b")]=["type","size"],smartTagMandatoryTypeFields[getTypeDataName("p")]=["type","size","freqCap","duration"];var typeDataFieldName;processTag(curCompassSmartTag)}();
