/*!
 * Vux v0.1.3 (https://vux.li)
 * Licensed under the MIT license
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vuxFullpage=t():e.vuxFullpage=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(5)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(2),i=n(r);t["default"]={ready:function(){var e=this;this._fullpage=new i["default"](this.$el,{dir:e.dir,loop:e.loop,drag:e.drag,start:e.start,duration:e.duration,page:e.page,der:e.der,change:function(t){e.$emit("on-change",t)},beforeChange:function(t){e.$emit("on-before-change",t)},afterChange:function(t){e.$emit("on-after-change",t)},orientationchange:function(t){e.$emit("on-orientation-change",t)}})},props:{page:String,start:{type:Number,"default":0},duration:{type:Number,"default":500},loop:Boolean,drag:Boolean,dir:{type:String,"default":"v"},der:{type:Number,"default":.1}}}},function(e,t){"use strict";function o(e){e.preventDefault()}function n(e,t,o){return e<0?o?t-1:0:e>=t?o?0:t-1:e}function r(e,t,o){var n="0px",r="0px";"v"===t?r=o+"px":n=o+"px",e.style.cssText+="-webkit-transform : translate3d("+n+", "+r+", 0px);transform : translate3d("+n+", "+r+", 0px)"}function i(e){var t=e||{};for(var o in c)t.hasOwnProperty(o)||(t[o]=c[o]);var n=this;n.curIndex=-1,n.o=t,n.startY=0,n.movingFlag=!1,n.ele.classList.add(s),n.parentEle=n.ele.parentNode;var r=t.page;r&&0===r.indexOf(".")&&(r=r.substring(1,r.length),n.pageEles=n.ele.getElementsByClassName(r)),r||(n.pageEles=n.ele.children);for(var i=0;i<n.pageEles.length;i++){var a=n.pageEles[i];a.classList.add(d),a.classList.add(p+t.dir)}n.pagesLength=n.pageEles.length,n.update(),n.initEvent(),n.start()}function a(e,t){this.ele=e,i.call(this,t)}Object.defineProperty(t,"__esModule",{value:!0});var s="vux-fullpage-box",u="vux-fullpage-box-anim",d="vux-fullpage-item",p="vux-fullpage-dir",c={page:null,start:0,duration:500,loop:!1,drag:!1,dir:"v",der:.1,change:function(e){},beforeChange:function(e){},afterChange:function(e){},orientationchange:function(e){}};a.prototype.update=function(){var e=void 0;if("h"===this.o.dir){this.width=this.parentEle.offsetWidth;for(var t=0;t<this.pageEles.length;t++)e=this.pageEles[t],e.style.width=this.width+"px";this.ele.style.width=this.width*this.pagesLength+"px"}this.height=this.parentEle.offsetHeight;for(var o=0;o<this.pageEles.length;o++)e=this.pageEles[o],e.style.height=this.height+"px";this.moveTo(this.curIndex<0?this.o.start:this.curIndex)},a.prototype.initEvent=function(){var e=this,t=e.ele;t.addEventListener("touchstart",function(t){return e.status?e.movingFlag?0:(e.startX=t.targetTouches[0].pageX,void(e.startY=t.targetTouches[0].pageY)):1}),t.addEventListener("touchend",function(t){if(!e.status)return 1;if(e.movingFlag)return 0;var o="v"===e.o.dir?(t.changedTouches[0].pageY-e.startY)/e.height:(t.changedTouches[0].pageX-e.startX)/e.width,n=o>e.o.der||o<-e.o.der?o>0?-1:1:0;e.moveTo(e.curIndex+n,!0)}),e.o.drag&&t.addEventListener("touchmove",function(o){if(!e.status)return 1;if(e.movingFlag)return e.startX=o.targetTouches[0].pageX,e.startY=o.targetTouches[0].pageY,0;var n=o.changedTouches[0].pageY-e.startY;(0===e.curIndex&&n>0||e.curIndex===e.pagesLength-1&&n<0)&&(n/=2);var i=o.changedTouches[0].pageX-e.startX;(0===e.curIndex&&i>0||e.curIndex===e.pagesLength-1&&i<0)&&(i/=2);var a="v"===e.o.dir?-e.curIndex*e.height+n:-e.curIndex*e.width+i;t.classList.remove(u),r(t,e.o.dir,a)}),window.addEventListener("orientationchange",function(){180!==window.orientation&&0!==window.orientation||e.o.orientationchange("portrait"),90!==window.orientation&&window.orientation!==-90||e.o.orientationchange("landscape")},!1),window.addEventListener("resize",function(){e.update()},!1)},a.prototype.holdTouch=function(){document.addEventListener("touchmove",o)},a.prototype.unholdTouch=function(){document.removeEventListener("touchmove",o)},a.prototype.start=function(){this.status=1,this.holdTouch()},a.prototype.stop=function(){this.status=0,this.unholdTouch()},a.prototype.getCurIndex=function(){return this.curIndex},a.prototype.moveTo=function(e,t){var o=this,i=o.ele,a=o.curIndex;if(e=n(e,o.pagesLength,o.o.loop),t?i.classList.add(u):i.classList.remove(u),e!==a){var s=o.o.beforeChange({next:e,cur:a});if(s===!1)return 1}o.movingFlag=!0,o.curIndex=e,r(i,o.o.dir,-e*("v"===o.o.dir?o.height:o.width)),e!==a&&o.o.change({prev:a,cur:e}),window.setTimeout(function(){if(o.movingFlag=!1,e!==a){o.o.afterChange({prev:a,cur:e});for(var t=0;t<o.pageEles.length;t++){var n=o.pageEles[t];t===e?n.classList.add("cur"):n.classList.remove("cur")}}},o.o.duration)},a.prototype.movePrev=function(e){this.moveTo(this.curIndex-1,e)},a.prototype.moveNext=function(e){this.moveTo(this.curIndex+1,e)},t["default"]=a},function(e,t){},function(e,t){e.exports=" <div> <slot></slot> </div> "},function(e,t,o){var n,r;o(3),n=o(1),r=o(4),e.exports=n||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)}])});