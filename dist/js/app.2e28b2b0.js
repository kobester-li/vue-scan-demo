!function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],f=0,p=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(s&&s(t);p.length;)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},c=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var u=window.webpackJsonp=window.webpackJsonp||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var s=i;c.push([0,"chunk-vendors"]),n()}({0:function(e,t,n){e.exports=n("56d7")},2395:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=(n("7c55"),n("2877")),c=Object(o.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),[],!1,null,null,null).exports,a=n("8c4f"),u=(n("ac1f"),n("5319"),null),i={data:function(){return{codeUrl:""}},methods:{startRecognize:function(){var e=this;window.plus&&((u=new plus.barcode.Barcode("bcid")).onmarked=function(t,n,r){switch(t){case plus.barcode.QR:t="QR";break;case plus.barcode.EAN13:t="EAN13";break;case plus.barcode.EAN8:t="EAN8";break;default:t="其它"+t}n=n.replace(/\n/g,""),e.codeUrl=n,alert(n),e.closeScan()})},startScan:function(){window.plus&&u.start()},cancelScan:function(){window.plus&&u.cancel()},closeScan:function(){window.plus&&u.close()}}},l=(n("de16"),Object(o.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"scan"},[e._m(0),n("footer",[n("button",{on:{click:e.startRecognize}},[e._v("1.创建控件")]),n("button",{on:{click:e.startScan}},[e._v("2.开始扫描")]),n("button",{on:{click:e.cancelScan}},[e._v("3.结束扫描")]),n("button",{on:{click:e.closeScan}},[e._v("4.关闭控件")])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"bcid"}},[t("div",{staticStyle:{height:"40%"}}),t("p",{staticClass:"tip"},[this._v("...载入中...")])])}],!1,null,null,null).exports);r.a.use(a.a);var s=new a.a({routes:[{path:"/",name:"home",component:l}]});r.a.config.productionTip=!1,new r.a({router:s,render:function(e){return e(c)}}).$mount("#app")},"7c55":function(e,t,n){"use strict";var r=n("2395");n.n(r).a},"8d91":function(e,t,n){},de16:function(e,t,n){"use strict";var r=n("8d91");n.n(r).a}});