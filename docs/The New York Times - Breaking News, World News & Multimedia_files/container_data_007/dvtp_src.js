(function(){function h(a,c){for(var d=a.length;d--;)if(a[d]===c)return!0;return!1}function k(){var e=document.getElementsByTagName("script");a._dv_win._dvScripts||(a._dv_win._dvScripts=[]);a._dv_win._dvScriptsInternal||(a._dv_win._dvScriptsInternal=[]);a._dv_win.dvProcessed||(a._dv_win.dvProcessed=[]);for(var c in e)if(e[c].src){var d=e[c].src,b=a._dv_win.dv_config.reqex||/^[ \t]*(http(s)?:\/\/)?[a-z\-]*cdn(s)?\.doubleverify\.com:?[0-9]*\/dvtp_src.js/;if(d&&d.match(b)&&!h(a._dv_win._dvScripts,e[c])&&
!h(a._dv_win._dvScriptsInternal,e[c])&&!h(a._dv_win.dvProcessed,e[c])){var b=d,g="sr",g=g.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]"),b=RegExp("[\\?&]"+g+"=([^&#]*)","i").exec(b),b=null==b?null:b[1];if(null===b||!isNaN(b)&&b>=100*Math.random())return a._dv_win._dvScripts.push(e[c]),a._dv_win._dvScriptsInternal.push({script:e[c],loadtime:Date.now?Date.now():(new Date).getTime(),injScripts:l}),{smpl:!0,src_location:d.substr(0,d.indexOf("/dvtp_src.js")),script:e[c]};a._dv_win._dvScripts.push(e[c]);return{smpl:!1}}}return null}
var l=function(a){for(var c=[{src:"dv-match",main:3},{src:"dv-engagement",main:0,eval:3,rate:10},{src:"dv-measurements",main:0,eval:1,rate:10}],d=0;d<c.length;d++){var b=c[d],g=b.eval&&b.rate&&100*Math.random()<b.rate?b.eval:b.main;if(g){var f=document.createElement("script");f.src="//"+a+"/"+b.src+g+".js";f.async=!0;document.body.appendChild(f)}}}.toString(),a=window;try{a._dv_win=a._dv_win||a;a._dv_win.dv_config=a._dv_win.dv_config||{};a._dv_win.internalURL=a._dv_win.internalURL||"dvtp_src_internal74.js";
var f=k();if(f){if(!0===f.smpl){var i=document.createElement("script");i.type="text/javascript";i.src=f.src_location+"/"+a._dv_win.internalURL;f.script.parentNode.insertBefore(i,f.script)}}else try{var j=a.location.protocol+"//tps30.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1&dvp_intErr=2";(new Image).src=j}catch(n){}}catch(m){try{j=a.location.protocol+"//tps30.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_isLostImp=1&dvp_intErr=1&dvp_jsErrMsg="+
encodeURIComponent(m),(new Image).src=j}catch(p){}}})();
