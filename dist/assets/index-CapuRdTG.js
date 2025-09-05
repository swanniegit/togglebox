function Hd(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in e)){const o=Object.getOwnPropertyDescriptor(n,s);o&&Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();function Vd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var oc={exports:{}},Hs={},lc={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _n=Symbol.for("react.element"),Wd=Symbol.for("react.portal"),Gd=Symbol.for("react.fragment"),Qd=Symbol.for("react.strict_mode"),Yd=Symbol.for("react.profiler"),Kd=Symbol.for("react.provider"),Xd=Symbol.for("react.context"),Jd=Symbol.for("react.forward_ref"),Zd=Symbol.for("react.suspense"),qd=Symbol.for("react.memo"),ep=Symbol.for("react.lazy"),Ma=Symbol.iterator;function tp(e){return e===null||typeof e!="object"?null:(e=Ma&&e[Ma]||e["@@iterator"],typeof e=="function"?e:null)}var ac={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ic=Object.assign,cc={};function Fr(e,t,r){this.props=e,this.context=t,this.refs=cc,this.updater=r||ac}Fr.prototype.isReactComponent={};Fr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Fr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function uc(){}uc.prototype=Fr.prototype;function Bl(e,t,r){this.props=e,this.context=t,this.refs=cc,this.updater=r||ac}var Ul=Bl.prototype=new uc;Ul.constructor=Bl;ic(Ul,Fr.prototype);Ul.isPureReactComponent=!0;var Oa=Array.isArray,dc=Object.prototype.hasOwnProperty,Hl={current:null},pc={key:!0,ref:!0,__self:!0,__source:!0};function fc(e,t,r){var n,s={},o=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)dc.call(t,n)&&!pc.hasOwnProperty(n)&&(s[n]=t[n]);var i=arguments.length-2;if(i===1)s.children=r;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(n in i=e.defaultProps,i)s[n]===void 0&&(s[n]=i[n]);return{$$typeof:_n,type:e,key:o,ref:l,props:s,_owner:Hl.current}}function rp(e,t){return{$$typeof:_n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Vl(e){return typeof e=="object"&&e!==null&&e.$$typeof===_n}function np(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Fa=/\/+/g;function mo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?np(""+e.key):t.toString(36)}function os(e,t,r,n,s){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case _n:case Wd:l=!0}}if(l)return l=e,s=s(l),e=n===""?"."+mo(l,0):n,Oa(s)?(r="",e!=null&&(r=e.replace(Fa,"$&/")+"/"),os(s,t,r,"",function(u){return u})):s!=null&&(Vl(s)&&(s=rp(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Fa,"$&/")+"/")+e)),t.push(s)),1;if(l=0,n=n===""?".":n+":",Oa(e))for(var i=0;i<e.length;i++){o=e[i];var c=n+mo(o,i);l+=os(o,t,r,c,s)}else if(c=tp(e),typeof c=="function")for(e=c.call(e),i=0;!(o=e.next()).done;)o=o.value,c=n+mo(o,i++),l+=os(o,t,r,c,s);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Bn(e,t,r){if(e==null)return e;var n=[],s=0;return os(e,n,"","",function(o){return t.call(r,o,s++)}),n}function sp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},ls={transition:null},op={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:ls,ReactCurrentOwner:Hl};function mc(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:Bn,forEach:function(e,t,r){Bn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Bn(e,function(){t++}),t},toArray:function(e){return Bn(e,function(t){return t})||[]},only:function(e){if(!Vl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Fr;O.Fragment=Gd;O.Profiler=Yd;O.PureComponent=Bl;O.StrictMode=Qd;O.Suspense=Zd;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=op;O.act=mc;O.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=ic({},e.props),s=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Hl.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)dc.call(t,c)&&!pc.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){i=Array(c);for(var u=0;u<c;u++)i[u]=arguments[u+2];n.children=i}return{$$typeof:_n,type:e.type,key:s,ref:o,props:n,_owner:l}};O.createContext=function(e){return e={$$typeof:Xd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kd,_context:e},e.Consumer=e};O.createElement=fc;O.createFactory=function(e){var t=fc.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Jd,render:e}};O.isValidElement=Vl;O.lazy=function(e){return{$$typeof:ep,_payload:{_status:-1,_result:e},_init:sp}};O.memo=function(e,t){return{$$typeof:qd,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=ls.transition;ls.transition={};try{e()}finally{ls.transition=t}};O.unstable_act=mc;O.useCallback=function(e,t){return ke.current.useCallback(e,t)};O.useContext=function(e){return ke.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};O.useEffect=function(e,t){return ke.current.useEffect(e,t)};O.useId=function(){return ke.current.useId()};O.useImperativeHandle=function(e,t,r){return ke.current.useImperativeHandle(e,t,r)};O.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return ke.current.useMemo(e,t)};O.useReducer=function(e,t,r){return ke.current.useReducer(e,t,r)};O.useRef=function(e){return ke.current.useRef(e)};O.useState=function(e){return ke.current.useState(e)};O.useSyncExternalStore=function(e,t,r){return ke.current.useSyncExternalStore(e,t,r)};O.useTransition=function(){return ke.current.useTransition()};O.version="18.3.1";lc.exports=O;var v=lc.exports;const hc=Vd(v),lp=Hd({__proto__:null,default:hc},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ap=v,ip=Symbol.for("react.element"),cp=Symbol.for("react.fragment"),up=Object.prototype.hasOwnProperty,dp=ap.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,pp={key:!0,ref:!0,__self:!0,__source:!0};function gc(e,t,r){var n,s={},o=null,l=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)up.call(t,n)&&!pp.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)s[n]===void 0&&(s[n]=t[n]);return{$$typeof:ip,type:e,key:o,ref:l,props:s,_owner:dp.current}}Hs.Fragment=cp;Hs.jsx=gc;Hs.jsxs=gc;oc.exports=Hs;var a=oc.exports,Ho={},xc={exports:{}},_e={},vc={exports:{}},yc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,M){var k=$.length;$.push(M);e:for(;0<k;){var E=k-1>>>1,I=$[E];if(0<s(I,M))$[E]=M,$[k]=I,k=E;else break e}}function r($){return $.length===0?null:$[0]}function n($){if($.length===0)return null;var M=$[0],k=$.pop();if(k!==M){$[0]=k;e:for(var E=0,I=$.length,A=I>>>1;E<A;){var le=2*(E+1)-1,ve=$[le],ye=le+1,wt=$[ye];if(0>s(ve,k))ye<I&&0>s(wt,ve)?($[E]=wt,$[ye]=k,E=ye):($[E]=ve,$[le]=k,E=le);else if(ye<I&&0>s(wt,k))$[E]=wt,$[ye]=k,E=ye;else break e}}return M}function s($,M){var k=$.sortIndex-M.sortIndex;return k!==0?k:$.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var c=[],u=[],g=1,f=null,h=3,x=!1,y=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p($){for(var M=r(u);M!==null;){if(M.callback===null)n(u);else if(M.startTime<=$)n(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=r(u)}}function b($){if(w=!1,p($),!y)if(r(c)!==null)y=!0,yt(C);else{var M=r(u);M!==null&&bt(b,M.startTime-$)}}function C($,M){y=!1,w&&(w=!1,m(L),L=-1),x=!0;var k=h;try{for(p(M),f=r(c);f!==null&&(!(f.expirationTime>M)||$&&!G());){var E=f.callback;if(typeof E=="function"){f.callback=null,h=f.priorityLevel;var I=E(f.expirationTime<=M);M=e.unstable_now(),typeof I=="function"?f.callback=I:f===r(c)&&n(c),p(M)}else n(c);f=r(c)}if(f!==null)var A=!0;else{var le=r(u);le!==null&&bt(b,le.startTime-M),A=!1}return A}finally{f=null,h=k,x=!1}}var T=!1,N=null,L=-1,F=5,z=-1;function G(){return!(e.unstable_now()-z<F)}function He(){if(N!==null){var $=e.unstable_now();z=$;var M=!0;try{M=N(!0,$)}finally{M?ze():(T=!1,N=null)}}else T=!1}var ze;if(typeof d=="function")ze=function(){d(He)};else if(typeof MessageChannel<"u"){var vt=new MessageChannel,qe=vt.port2;vt.port1.onmessage=He,ze=function(){qe.postMessage(null)}}else ze=function(){S(He,0)};function yt($){N=$,T||(T=!0,ze())}function bt($,M){L=S(function(){$(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,yt(C))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function($){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var k=h;h=M;try{return $()}finally{h=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,M){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var k=h;h=$;try{return M()}finally{h=k}},e.unstable_scheduleCallback=function($,M,k){var E=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?E+k:E):k=E,$){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=k+I,$={id:g++,callback:M,priorityLevel:$,startTime:k,expirationTime:I,sortIndex:-1},k>E?($.sortIndex=k,t(u,$),r(c)===null&&$===r(u)&&(w?(m(L),L=-1):w=!0,bt(b,k-E))):($.sortIndex=I,t(c,$),y||x||(y=!0,yt(C))),$},e.unstable_shouldYield=G,e.unstable_wrapCallback=function($){var M=h;return function(){var k=h;h=M;try{return $.apply(this,arguments)}finally{h=k}}}})(yc);vc.exports=yc;var fp=vc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp=v,Re=fp;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var bc=new Set,mn={};function cr(e,t){Lr(e,t),Lr(e+"Capture",t)}function Lr(e,t){for(mn[e]=t,e=0;e<t.length;e++)bc.add(t[e])}var ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vo=Object.prototype.hasOwnProperty,hp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Aa={},Ba={};function gp(e){return Vo.call(Ba,e)?!0:Vo.call(Aa,e)?!1:hp.test(e)?Ba[e]=!0:(Aa[e]=!0,!1)}function xp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vp(e,t,r,n){if(t===null||typeof t>"u"||xp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ce(e,t,r,n,s,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new Ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new Ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new Ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new Ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new Ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new Ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new Ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new Ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new Ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Wl=/[\-:]([a-z])/g;function Gl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Wl,Gl);de[t]=new Ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Wl,Gl);de[t]=new Ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Wl,Gl);de[t]=new Ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new Ce(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new Ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new Ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ql(e,t,r,n){var s=de.hasOwnProperty(t)?de[t]:null;(s!==null?s.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vp(t,r,s,n)&&(r=null),n||s===null?gp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,n=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var xt=mp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Un=Symbol.for("react.element"),fr=Symbol.for("react.portal"),mr=Symbol.for("react.fragment"),Yl=Symbol.for("react.strict_mode"),Wo=Symbol.for("react.profiler"),wc=Symbol.for("react.provider"),kc=Symbol.for("react.context"),Kl=Symbol.for("react.forward_ref"),Go=Symbol.for("react.suspense"),Qo=Symbol.for("react.suspense_list"),Xl=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Cc=Symbol.for("react.offscreen"),Ua=Symbol.iterator;function Gr(e){return e===null||typeof e!="object"?null:(e=Ua&&e[Ua]||e["@@iterator"],typeof e=="function"?e:null)}var q=Object.assign,ho;function en(e){if(ho===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);ho=t&&t[1]||""}return`
`+ho+e}var go=!1;function xo(e,t){if(!e||go)return"";go=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),o=n.stack.split(`
`),l=s.length-1,i=o.length-1;1<=l&&0<=i&&s[l]!==o[i];)i--;for(;1<=l&&0<=i;l--,i--)if(s[l]!==o[i]){if(l!==1||i!==1)do if(l--,i--,0>i||s[l]!==o[i]){var c=`
`+s[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=i);break}}}finally{go=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?en(e):""}function yp(e){switch(e.tag){case 5:return en(e.type);case 16:return en("Lazy");case 13:return en("Suspense");case 19:return en("SuspenseList");case 0:case 2:case 15:return e=xo(e.type,!1),e;case 11:return e=xo(e.type.render,!1),e;case 1:return e=xo(e.type,!0),e;default:return""}}function Yo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case mr:return"Fragment";case fr:return"Portal";case Wo:return"Profiler";case Yl:return"StrictMode";case Go:return"Suspense";case Qo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case kc:return(e.displayName||"Context")+".Consumer";case wc:return(e._context.displayName||"Context")+".Provider";case Kl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xl:return t=e.displayName||null,t!==null?t:Yo(e.type)||"Memo";case St:t=e._payload,e=e._init;try{return Yo(e(t))}catch{}}return null}function bp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yo(t);case 8:return t===Yl?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function At(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wp(e){var t=Sc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(l){n=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hn(e){e._valueTracker||(e._valueTracker=wp(e))}function jc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Sc(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function xs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ko(e,t){var r=t.checked;return q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ha(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=At(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Nc(e,t){t=t.checked,t!=null&&Ql(e,"checked",t,!1)}function Xo(e,t){Nc(e,t);var r=At(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Jo(e,t.type,r):t.hasOwnProperty("defaultValue")&&Jo(e,t.type,At(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Va(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Jo(e,t,r){(t!=="number"||xs(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var tn=Array.isArray;function jr(e,t,r,n){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&n&&(e[r].defaultSelected=!0)}else{for(r=""+At(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,n&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Zo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Wa(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(j(92));if(tn(r)){if(1<r.length)throw Error(j(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:At(r)}}function Ec(e,t){var r=At(t.value),n=At(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Ga(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Pc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Pc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vn,Tc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Vn=Vn||document.createElement("div"),Vn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Vn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function hn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var sn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kp=["Webkit","ms","Moz","O"];Object.keys(sn).forEach(function(e){kp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),sn[t]=sn[e]})});function $c(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||sn.hasOwnProperty(e)&&sn[e]?(""+t).trim():t+"px"}function Lc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,s=$c(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,s):e[r]=s}}var Cp=q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function el(e,t){if(t){if(Cp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function tl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rl=null;function Jl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nl=null,Nr=null,Er=null;function Qa(e){if(e=Dn(e)){if(typeof nl!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Ys(t),nl(e.stateNode,e.type,t))}}function Rc(e){Nr?Er?Er.push(e):Er=[e]:Nr=e}function _c(){if(Nr){var e=Nr,t=Er;if(Er=Nr=null,Qa(e),t)for(e=0;e<t.length;e++)Qa(t[e])}}function Ic(e,t){return e(t)}function zc(){}var vo=!1;function Dc(e,t,r){if(vo)return e(t,r);vo=!0;try{return Ic(e,t,r)}finally{vo=!1,(Nr!==null||Er!==null)&&(zc(),_c())}}function gn(e,t){var r=e.stateNode;if(r===null)return null;var n=Ys(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(j(231,t,typeof r));return r}var sl=!1;if(ft)try{var Qr={};Object.defineProperty(Qr,"passive",{get:function(){sl=!0}}),window.addEventListener("test",Qr,Qr),window.removeEventListener("test",Qr,Qr)}catch{sl=!1}function Sp(e,t,r,n,s,o,l,i,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(g){this.onError(g)}}var on=!1,vs=null,ys=!1,ol=null,jp={onError:function(e){on=!0,vs=e}};function Np(e,t,r,n,s,o,l,i,c){on=!1,vs=null,Sp.apply(jp,arguments)}function Ep(e,t,r,n,s,o,l,i,c){if(Np.apply(this,arguments),on){if(on){var u=vs;on=!1,vs=null}else throw Error(j(198));ys||(ys=!0,ol=u)}}function ur(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Mc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ya(e){if(ur(e)!==e)throw Error(j(188))}function Pp(e){var t=e.alternate;if(!t){if(t=ur(e),t===null)throw Error(j(188));return t!==e?null:e}for(var r=e,n=t;;){var s=r.return;if(s===null)break;var o=s.alternate;if(o===null){if(n=s.return,n!==null){r=n;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===r)return Ya(s),e;if(o===n)return Ya(s),t;o=o.sibling}throw Error(j(188))}if(r.return!==n.return)r=s,n=o;else{for(var l=!1,i=s.child;i;){if(i===r){l=!0,r=s,n=o;break}if(i===n){l=!0,n=s,r=o;break}i=i.sibling}if(!l){for(i=o.child;i;){if(i===r){l=!0,r=o,n=s;break}if(i===n){l=!0,n=o,r=s;break}i=i.sibling}if(!l)throw Error(j(189))}}if(r.alternate!==n)throw Error(j(190))}if(r.tag!==3)throw Error(j(188));return r.stateNode.current===r?e:t}function Oc(e){return e=Pp(e),e!==null?Fc(e):null}function Fc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fc(e);if(t!==null)return t;e=e.sibling}return null}var Ac=Re.unstable_scheduleCallback,Ka=Re.unstable_cancelCallback,Tp=Re.unstable_shouldYield,$p=Re.unstable_requestPaint,re=Re.unstable_now,Lp=Re.unstable_getCurrentPriorityLevel,Zl=Re.unstable_ImmediatePriority,Bc=Re.unstable_UserBlockingPriority,bs=Re.unstable_NormalPriority,Rp=Re.unstable_LowPriority,Uc=Re.unstable_IdlePriority,Vs=null,st=null;function _p(e){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(Vs,e,void 0,(e.current.flags&128)===128)}catch{}}var Xe=Math.clz32?Math.clz32:Dp,Ip=Math.log,zp=Math.LN2;function Dp(e){return e>>>=0,e===0?32:31-(Ip(e)/zp|0)|0}var Wn=64,Gn=4194304;function rn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ws(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,s=e.suspendedLanes,o=e.pingedLanes,l=r&268435455;if(l!==0){var i=l&~s;i!==0?n=rn(i):(o&=l,o!==0&&(n=rn(o)))}else l=r&~s,l!==0?n=rn(l):o!==0&&(n=rn(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&s)&&(s=n&-n,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Xe(t),s=1<<r,n|=e[r],t&=~s;return n}function Mp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Op(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Xe(o),i=1<<l,c=s[l];c===-1?(!(i&r)||i&n)&&(s[l]=Mp(i,t)):c<=t&&(e.expiredLanes|=i),o&=~i}}function ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Hc(){var e=Wn;return Wn<<=1,!(Wn&4194240)&&(Wn=64),e}function yo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function In(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Xe(t),e[t]=r}function Fp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-Xe(r),o=1<<s;t[s]=0,n[s]=-1,e[s]=-1,r&=~o}}function ql(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Xe(r),s=1<<n;s&t|e[n]&t&&(e[n]|=t),r&=~s}}var H=0;function Vc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wc,ea,Gc,Qc,Yc,al=!1,Qn=[],Lt=null,Rt=null,_t=null,xn=new Map,vn=new Map,Nt=[],Ap="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xa(e,t){switch(e){case"focusin":case"focusout":Lt=null;break;case"dragenter":case"dragleave":Rt=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vn.delete(t.pointerId)}}function Yr(e,t,r,n,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[s]},t!==null&&(t=Dn(t),t!==null&&ea(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Bp(e,t,r,n,s){switch(t){case"focusin":return Lt=Yr(Lt,e,t,r,n,s),!0;case"dragenter":return Rt=Yr(Rt,e,t,r,n,s),!0;case"mouseover":return _t=Yr(_t,e,t,r,n,s),!0;case"pointerover":var o=s.pointerId;return xn.set(o,Yr(xn.get(o)||null,e,t,r,n,s)),!0;case"gotpointercapture":return o=s.pointerId,vn.set(o,Yr(vn.get(o)||null,e,t,r,n,s)),!0}return!1}function Kc(e){var t=Zt(e.target);if(t!==null){var r=ur(t);if(r!==null){if(t=r.tag,t===13){if(t=Mc(r),t!==null){e.blockedOn=t,Yc(e.priority,function(){Gc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function as(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=il(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);rl=n,r.target.dispatchEvent(n),rl=null}else return t=Dn(r),t!==null&&ea(t),e.blockedOn=r,!1;t.shift()}return!0}function Ja(e,t,r){as(e)&&r.delete(t)}function Up(){al=!1,Lt!==null&&as(Lt)&&(Lt=null),Rt!==null&&as(Rt)&&(Rt=null),_t!==null&&as(_t)&&(_t=null),xn.forEach(Ja),vn.forEach(Ja)}function Kr(e,t){e.blockedOn===t&&(e.blockedOn=null,al||(al=!0,Re.unstable_scheduleCallback(Re.unstable_NormalPriority,Up)))}function yn(e){function t(s){return Kr(s,e)}if(0<Qn.length){Kr(Qn[0],e);for(var r=1;r<Qn.length;r++){var n=Qn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Lt!==null&&Kr(Lt,e),Rt!==null&&Kr(Rt,e),_t!==null&&Kr(_t,e),xn.forEach(t),vn.forEach(t),r=0;r<Nt.length;r++)n=Nt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Nt.length&&(r=Nt[0],r.blockedOn===null);)Kc(r),r.blockedOn===null&&Nt.shift()}var Pr=xt.ReactCurrentBatchConfig,ks=!0;function Hp(e,t,r,n){var s=H,o=Pr.transition;Pr.transition=null;try{H=1,ta(e,t,r,n)}finally{H=s,Pr.transition=o}}function Vp(e,t,r,n){var s=H,o=Pr.transition;Pr.transition=null;try{H=4,ta(e,t,r,n)}finally{H=s,Pr.transition=o}}function ta(e,t,r,n){if(ks){var s=il(e,t,r,n);if(s===null)To(e,t,n,Cs,r),Xa(e,n);else if(Bp(s,e,t,r,n))n.stopPropagation();else if(Xa(e,n),t&4&&-1<Ap.indexOf(e)){for(;s!==null;){var o=Dn(s);if(o!==null&&Wc(o),o=il(e,t,r,n),o===null&&To(e,t,n,Cs,r),o===s)break;s=o}s!==null&&n.stopPropagation()}else To(e,t,n,null,r)}}var Cs=null;function il(e,t,r,n){if(Cs=null,e=Jl(n),e=Zt(e),e!==null)if(t=ur(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Mc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Cs=e,null}function Xc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lp()){case Zl:return 1;case Bc:return 4;case bs:case Rp:return 16;case Uc:return 536870912;default:return 16}default:return 16}}var Pt=null,ra=null,is=null;function Jc(){if(is)return is;var e,t=ra,r=t.length,n,s="value"in Pt?Pt.value:Pt.textContent,o=s.length;for(e=0;e<r&&t[e]===s[e];e++);var l=r-e;for(n=1;n<=l&&t[r-n]===s[o-n];n++);return is=s.slice(e,1<n?1-n:void 0)}function cs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yn(){return!0}function Za(){return!1}function Ie(e){function t(r,n,s,o,l){this._reactName=r,this._targetInst=s,this.type=n,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(r=e[i],this[i]=r?r(o):o[i]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Yn:Za,this.isPropagationStopped=Za,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Yn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Yn)},persist:function(){},isPersistent:Yn}),t}var Ar={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},na=Ie(Ar),zn=q({},Ar,{view:0,detail:0}),Wp=Ie(zn),bo,wo,Xr,Ws=q({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xr&&(Xr&&e.type==="mousemove"?(bo=e.screenX-Xr.screenX,wo=e.screenY-Xr.screenY):wo=bo=0,Xr=e),bo)},movementY:function(e){return"movementY"in e?e.movementY:wo}}),qa=Ie(Ws),Gp=q({},Ws,{dataTransfer:0}),Qp=Ie(Gp),Yp=q({},zn,{relatedTarget:0}),ko=Ie(Yp),Kp=q({},Ar,{animationName:0,elapsedTime:0,pseudoElement:0}),Xp=Ie(Kp),Jp=q({},Ar,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zp=Ie(Jp),qp=q({},Ar,{data:0}),ei=Ie(qp),ef={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rf[e])?!!t[e]:!1}function sa(){return nf}var sf=q({},zn,{key:function(e){if(e.key){var t=ef[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=cs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sa,charCode:function(e){return e.type==="keypress"?cs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),of=Ie(sf),lf=q({},Ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ti=Ie(lf),af=q({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sa}),cf=Ie(af),uf=q({},Ar,{propertyName:0,elapsedTime:0,pseudoElement:0}),df=Ie(uf),pf=q({},Ws,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ff=Ie(pf),mf=[9,13,27,32],oa=ft&&"CompositionEvent"in window,ln=null;ft&&"documentMode"in document&&(ln=document.documentMode);var hf=ft&&"TextEvent"in window&&!ln,Zc=ft&&(!oa||ln&&8<ln&&11>=ln),ri=" ",ni=!1;function qc(e,t){switch(e){case"keyup":return mf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var hr=!1;function gf(e,t){switch(e){case"compositionend":return eu(t);case"keypress":return t.which!==32?null:(ni=!0,ri);case"textInput":return e=t.data,e===ri&&ni?null:e;default:return null}}function xf(e,t){if(hr)return e==="compositionend"||!oa&&qc(e,t)?(e=Jc(),is=ra=Pt=null,hr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Zc&&t.locale!=="ko"?null:t.data;default:return null}}var vf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function si(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vf[e.type]:t==="textarea"}function tu(e,t,r,n){Rc(n),t=Ss(t,"onChange"),0<t.length&&(r=new na("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var an=null,bn=null;function yf(e){pu(e,0)}function Gs(e){var t=vr(e);if(jc(t))return e}function bf(e,t){if(e==="change")return t}var ru=!1;if(ft){var Co;if(ft){var So="oninput"in document;if(!So){var oi=document.createElement("div");oi.setAttribute("oninput","return;"),So=typeof oi.oninput=="function"}Co=So}else Co=!1;ru=Co&&(!document.documentMode||9<document.documentMode)}function li(){an&&(an.detachEvent("onpropertychange",nu),bn=an=null)}function nu(e){if(e.propertyName==="value"&&Gs(bn)){var t=[];tu(t,bn,e,Jl(e)),Dc(yf,t)}}function wf(e,t,r){e==="focusin"?(li(),an=t,bn=r,an.attachEvent("onpropertychange",nu)):e==="focusout"&&li()}function kf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gs(bn)}function Cf(e,t){if(e==="click")return Gs(t)}function Sf(e,t){if(e==="input"||e==="change")return Gs(t)}function jf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ze=typeof Object.is=="function"?Object.is:jf;function wn(e,t){if(Ze(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var s=r[n];if(!Vo.call(t,s)||!Ze(e[s],t[s]))return!1}return!0}function ai(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ii(e,t){var r=ai(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ai(r)}}function su(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?su(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ou(){for(var e=window,t=xs();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=xs(e.document)}return t}function la(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Nf(e){var t=ou(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&su(r.ownerDocument.documentElement,r)){if(n!==null&&la(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,o=Math.min(n.start,s);n=n.end===void 0?o:Math.min(n.end,s),!e.extend&&o>n&&(s=n,n=o,o=s),s=ii(r,o);var l=ii(r,n);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ef=ft&&"documentMode"in document&&11>=document.documentMode,gr=null,cl=null,cn=null,ul=!1;function ci(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ul||gr==null||gr!==xs(n)||(n=gr,"selectionStart"in n&&la(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),cn&&wn(cn,n)||(cn=n,n=Ss(cl,"onSelect"),0<n.length&&(t=new na("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=gr)))}function Kn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var xr={animationend:Kn("Animation","AnimationEnd"),animationiteration:Kn("Animation","AnimationIteration"),animationstart:Kn("Animation","AnimationStart"),transitionend:Kn("Transition","TransitionEnd")},jo={},lu={};ft&&(lu=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function Qs(e){if(jo[e])return jo[e];if(!xr[e])return e;var t=xr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in lu)return jo[e]=t[r];return e}var au=Qs("animationend"),iu=Qs("animationiteration"),cu=Qs("animationstart"),uu=Qs("transitionend"),du=new Map,ui="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ut(e,t){du.set(e,t),cr(t,[e])}for(var No=0;No<ui.length;No++){var Eo=ui[No],Pf=Eo.toLowerCase(),Tf=Eo[0].toUpperCase()+Eo.slice(1);Ut(Pf,"on"+Tf)}Ut(au,"onAnimationEnd");Ut(iu,"onAnimationIteration");Ut(cu,"onAnimationStart");Ut("dblclick","onDoubleClick");Ut("focusin","onFocus");Ut("focusout","onBlur");Ut(uu,"onTransitionEnd");Lr("onMouseEnter",["mouseout","mouseover"]);Lr("onMouseLeave",["mouseout","mouseover"]);Lr("onPointerEnter",["pointerout","pointerover"]);Lr("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$f=new Set("cancel close invalid load scroll toggle".split(" ").concat(nn));function di(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Ep(n,t,void 0,e),e.currentTarget=null}function pu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],s=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var l=n.length-1;0<=l;l--){var i=n[l],c=i.instance,u=i.currentTarget;if(i=i.listener,c!==o&&s.isPropagationStopped())break e;di(s,i,u),o=c}else for(l=0;l<n.length;l++){if(i=n[l],c=i.instance,u=i.currentTarget,i=i.listener,c!==o&&s.isPropagationStopped())break e;di(s,i,u),o=c}}}if(ys)throw e=ol,ys=!1,ol=null,e}function Q(e,t){var r=t[hl];r===void 0&&(r=t[hl]=new Set);var n=e+"__bubble";r.has(n)||(fu(t,e,2,!1),r.add(n))}function Po(e,t,r){var n=0;t&&(n|=4),fu(r,e,n,t)}var Xn="_reactListening"+Math.random().toString(36).slice(2);function kn(e){if(!e[Xn]){e[Xn]=!0,bc.forEach(function(r){r!=="selectionchange"&&($f.has(r)||Po(r,!1,e),Po(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xn]||(t[Xn]=!0,Po("selectionchange",!1,t))}}function fu(e,t,r,n){switch(Xc(t)){case 1:var s=Hp;break;case 4:s=Vp;break;default:s=ta}r=s.bind(null,t,r,e),s=void 0,!sl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),n?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function To(e,t,r,n,s){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var i=n.stateNode.containerInfo;if(i===s||i.nodeType===8&&i.parentNode===s)break;if(l===4)for(l=n.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;l=l.return}for(;i!==null;){if(l=Zt(i),l===null)return;if(c=l.tag,c===5||c===6){n=o=l;continue e}i=i.parentNode}}n=n.return}Dc(function(){var u=o,g=Jl(r),f=[];e:{var h=du.get(e);if(h!==void 0){var x=na,y=e;switch(e){case"keypress":if(cs(r)===0)break e;case"keydown":case"keyup":x=of;break;case"focusin":y="focus",x=ko;break;case"focusout":y="blur",x=ko;break;case"beforeblur":case"afterblur":x=ko;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=qa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Qp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=cf;break;case au:case iu:case cu:x=Xp;break;case uu:x=df;break;case"scroll":x=Wp;break;case"wheel":x=ff;break;case"copy":case"cut":case"paste":x=Zp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ti}var w=(t&4)!==0,S=!w&&e==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var d=u,p;d!==null;){p=d;var b=p.stateNode;if(p.tag===5&&b!==null&&(p=b,m!==null&&(b=gn(d,m),b!=null&&w.push(Cn(d,b,p)))),S)break;d=d.return}0<w.length&&(h=new x(h,y,null,r,g),f.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&r!==rl&&(y=r.relatedTarget||r.fromElement)&&(Zt(y)||y[mt]))break e;if((x||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,x?(y=r.relatedTarget||r.toElement,x=u,y=y?Zt(y):null,y!==null&&(S=ur(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=u),x!==y)){if(w=qa,b="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=ti,b="onPointerLeave",m="onPointerEnter",d="pointer"),S=x==null?h:vr(x),p=y==null?h:vr(y),h=new w(b,d+"leave",x,r,g),h.target=S,h.relatedTarget=p,b=null,Zt(g)===u&&(w=new w(m,d+"enter",y,r,g),w.target=p,w.relatedTarget=S,b=w),S=b,x&&y)t:{for(w=x,m=y,d=0,p=w;p;p=pr(p))d++;for(p=0,b=m;b;b=pr(b))p++;for(;0<d-p;)w=pr(w),d--;for(;0<p-d;)m=pr(m),p--;for(;d--;){if(w===m||m!==null&&w===m.alternate)break t;w=pr(w),m=pr(m)}w=null}else w=null;x!==null&&pi(f,h,x,w,!1),y!==null&&S!==null&&pi(f,S,y,w,!0)}}e:{if(h=u?vr(u):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var C=bf;else if(si(h))if(ru)C=Sf;else{C=kf;var T=wf}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Cf);if(C&&(C=C(e,u))){tu(f,C,r,g);break e}T&&T(e,h,u),e==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&Jo(h,"number",h.value)}switch(T=u?vr(u):window,e){case"focusin":(si(T)||T.contentEditable==="true")&&(gr=T,cl=u,cn=null);break;case"focusout":cn=cl=gr=null;break;case"mousedown":ul=!0;break;case"contextmenu":case"mouseup":case"dragend":ul=!1,ci(f,r,g);break;case"selectionchange":if(Ef)break;case"keydown":case"keyup":ci(f,r,g)}var N;if(oa)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else hr?qc(e,r)&&(L="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(L="onCompositionStart");L&&(Zc&&r.locale!=="ko"&&(hr||L!=="onCompositionStart"?L==="onCompositionEnd"&&hr&&(N=Jc()):(Pt=g,ra="value"in Pt?Pt.value:Pt.textContent,hr=!0)),T=Ss(u,L),0<T.length&&(L=new ei(L,e,null,r,g),f.push({event:L,listeners:T}),N?L.data=N:(N=eu(r),N!==null&&(L.data=N)))),(N=hf?gf(e,r):xf(e,r))&&(u=Ss(u,"onBeforeInput"),0<u.length&&(g=new ei("onBeforeInput","beforeinput",null,r,g),f.push({event:g,listeners:u}),g.data=N))}pu(f,t)})}function Cn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ss(e,t){for(var r=t+"Capture",n=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=gn(e,r),o!=null&&n.unshift(Cn(e,o,s)),o=gn(e,t),o!=null&&n.push(Cn(e,o,s))),e=e.return}return n}function pr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function pi(e,t,r,n,s){for(var o=t._reactName,l=[];r!==null&&r!==n;){var i=r,c=i.alternate,u=i.stateNode;if(c!==null&&c===n)break;i.tag===5&&u!==null&&(i=u,s?(c=gn(r,o),c!=null&&l.unshift(Cn(r,c,i))):s||(c=gn(r,o),c!=null&&l.push(Cn(r,c,i)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var Lf=/\r\n?/g,Rf=/\u0000|\uFFFD/g;function fi(e){return(typeof e=="string"?e:""+e).replace(Lf,`
`).replace(Rf,"")}function Jn(e,t,r){if(t=fi(t),fi(e)!==t&&r)throw Error(j(425))}function js(){}var dl=null,pl=null;function fl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ml=typeof setTimeout=="function"?setTimeout:void 0,_f=typeof clearTimeout=="function"?clearTimeout:void 0,mi=typeof Promise=="function"?Promise:void 0,If=typeof queueMicrotask=="function"?queueMicrotask:typeof mi<"u"?function(e){return mi.resolve(null).then(e).catch(zf)}:ml;function zf(e){setTimeout(function(){throw e})}function $o(e,t){var r=t,n=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(n===0){e.removeChild(s),yn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=s}while(r);yn(t)}function It(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function hi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Br=Math.random().toString(36).slice(2),nt="__reactFiber$"+Br,Sn="__reactProps$"+Br,mt="__reactContainer$"+Br,hl="__reactEvents$"+Br,Df="__reactListeners$"+Br,Mf="__reactHandles$"+Br;function Zt(e){var t=e[nt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[mt]||r[nt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=hi(e);e!==null;){if(r=e[nt])return r;e=hi(e)}return t}e=r,r=e.parentNode}return null}function Dn(e){return e=e[nt]||e[mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function vr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Ys(e){return e[Sn]||null}var gl=[],yr=-1;function Ht(e){return{current:e}}function Y(e){0>yr||(e.current=gl[yr],gl[yr]=null,yr--)}function W(e,t){yr++,gl[yr]=e.current,e.current=t}var Bt={},xe=Ht(Bt),Ne=Ht(!1),sr=Bt;function Rr(e,t){var r=e.type.contextTypes;if(!r)return Bt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in r)s[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Ee(e){return e=e.childContextTypes,e!=null}function Ns(){Y(Ne),Y(xe)}function gi(e,t,r){if(xe.current!==Bt)throw Error(j(168));W(xe,t),W(Ne,r)}function mu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var s in n)if(!(s in t))throw Error(j(108,bp(e)||"Unknown",s));return q({},r,n)}function Es(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Bt,sr=xe.current,W(xe,e),W(Ne,Ne.current),!0}function xi(e,t,r){var n=e.stateNode;if(!n)throw Error(j(169));r?(e=mu(e,t,sr),n.__reactInternalMemoizedMergedChildContext=e,Y(Ne),Y(xe),W(xe,e)):Y(Ne),W(Ne,r)}var ct=null,Ks=!1,Lo=!1;function hu(e){ct===null?ct=[e]:ct.push(e)}function Of(e){Ks=!0,hu(e)}function Vt(){if(!Lo&&ct!==null){Lo=!0;var e=0,t=H;try{var r=ct;for(H=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}ct=null,Ks=!1}catch(s){throw ct!==null&&(ct=ct.slice(e+1)),Ac(Zl,Vt),s}finally{H=t,Lo=!1}}return null}var br=[],wr=0,Ps=null,Ts=0,Me=[],Oe=0,or=null,ut=1,dt="";function Xt(e,t){br[wr++]=Ts,br[wr++]=Ps,Ps=e,Ts=t}function gu(e,t,r){Me[Oe++]=ut,Me[Oe++]=dt,Me[Oe++]=or,or=e;var n=ut;e=dt;var s=32-Xe(n)-1;n&=~(1<<s),r+=1;var o=32-Xe(t)+s;if(30<o){var l=s-s%5;o=(n&(1<<l)-1).toString(32),n>>=l,s-=l,ut=1<<32-Xe(t)+s|r<<s|n,dt=o+e}else ut=1<<o|r<<s|n,dt=e}function aa(e){e.return!==null&&(Xt(e,1),gu(e,1,0))}function ia(e){for(;e===Ps;)Ps=br[--wr],br[wr]=null,Ts=br[--wr],br[wr]=null;for(;e===or;)or=Me[--Oe],Me[Oe]=null,dt=Me[--Oe],Me[Oe]=null,ut=Me[--Oe],Me[Oe]=null}var Le=null,$e=null,K=!1,Ke=null;function xu(e,t){var r=Fe(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function vi(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Le=e,$e=It(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Le=e,$e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=or!==null?{id:ut,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Fe(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Le=e,$e=null,!0):!1;default:return!1}}function xl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function vl(e){if(K){var t=$e;if(t){var r=t;if(!vi(e,t)){if(xl(e))throw Error(j(418));t=It(r.nextSibling);var n=Le;t&&vi(e,t)?xu(n,r):(e.flags=e.flags&-4097|2,K=!1,Le=e)}}else{if(xl(e))throw Error(j(418));e.flags=e.flags&-4097|2,K=!1,Le=e}}}function yi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Le=e}function Zn(e){if(e!==Le)return!1;if(!K)return yi(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!fl(e.type,e.memoizedProps)),t&&(t=$e)){if(xl(e))throw vu(),Error(j(418));for(;t;)xu(e,t),t=It(t.nextSibling)}if(yi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){$e=It(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}$e=null}}else $e=Le?It(e.stateNode.nextSibling):null;return!0}function vu(){for(var e=$e;e;)e=It(e.nextSibling)}function _r(){$e=Le=null,K=!1}function ca(e){Ke===null?Ke=[e]:Ke.push(e)}var Ff=xt.ReactCurrentBatchConfig;function Jr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(j(309));var n=r.stateNode}if(!n)throw Error(j(147,e));var s=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var i=s.refs;l===null?delete i[o]:i[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!r._owner)throw Error(j(290,e))}return e}function qn(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bi(e){var t=e._init;return t(e._payload)}function yu(e){function t(m,d){if(e){var p=m.deletions;p===null?(m.deletions=[d],m.flags|=16):p.push(d)}}function r(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function n(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function s(m,d){return m=Ot(m,d),m.index=0,m.sibling=null,m}function o(m,d,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<d?(m.flags|=2,d):p):(m.flags|=2,d)):(m.flags|=1048576,d)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function i(m,d,p,b){return d===null||d.tag!==6?(d=Oo(p,m.mode,b),d.return=m,d):(d=s(d,p),d.return=m,d)}function c(m,d,p,b){var C=p.type;return C===mr?g(m,d,p.props.children,b,p.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===St&&bi(C)===d.type)?(b=s(d,p.props),b.ref=Jr(m,d,p),b.return=m,b):(b=gs(p.type,p.key,p.props,null,m.mode,b),b.ref=Jr(m,d,p),b.return=m,b)}function u(m,d,p,b){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Fo(p,m.mode,b),d.return=m,d):(d=s(d,p.children||[]),d.return=m,d)}function g(m,d,p,b,C){return d===null||d.tag!==7?(d=nr(p,m.mode,b,C),d.return=m,d):(d=s(d,p),d.return=m,d)}function f(m,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Oo(""+d,m.mode,p),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Un:return p=gs(d.type,d.key,d.props,null,m.mode,p),p.ref=Jr(m,null,d),p.return=m,p;case fr:return d=Fo(d,m.mode,p),d.return=m,d;case St:var b=d._init;return f(m,b(d._payload),p)}if(tn(d)||Gr(d))return d=nr(d,m.mode,p,null),d.return=m,d;qn(m,d)}return null}function h(m,d,p,b){var C=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:i(m,d,""+p,b);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Un:return p.key===C?c(m,d,p,b):null;case fr:return p.key===C?u(m,d,p,b):null;case St:return C=p._init,h(m,d,C(p._payload),b)}if(tn(p)||Gr(p))return C!==null?null:g(m,d,p,b,null);qn(m,p)}return null}function x(m,d,p,b,C){if(typeof b=="string"&&b!==""||typeof b=="number")return m=m.get(p)||null,i(d,m,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Un:return m=m.get(b.key===null?p:b.key)||null,c(d,m,b,C);case fr:return m=m.get(b.key===null?p:b.key)||null,u(d,m,b,C);case St:var T=b._init;return x(m,d,p,T(b._payload),C)}if(tn(b)||Gr(b))return m=m.get(p)||null,g(d,m,b,C,null);qn(d,b)}return null}function y(m,d,p,b){for(var C=null,T=null,N=d,L=d=0,F=null;N!==null&&L<p.length;L++){N.index>L?(F=N,N=null):F=N.sibling;var z=h(m,N,p[L],b);if(z===null){N===null&&(N=F);break}e&&N&&z.alternate===null&&t(m,N),d=o(z,d,L),T===null?C=z:T.sibling=z,T=z,N=F}if(L===p.length)return r(m,N),K&&Xt(m,L),C;if(N===null){for(;L<p.length;L++)N=f(m,p[L],b),N!==null&&(d=o(N,d,L),T===null?C=N:T.sibling=N,T=N);return K&&Xt(m,L),C}for(N=n(m,N);L<p.length;L++)F=x(N,m,L,p[L],b),F!==null&&(e&&F.alternate!==null&&N.delete(F.key===null?L:F.key),d=o(F,d,L),T===null?C=F:T.sibling=F,T=F);return e&&N.forEach(function(G){return t(m,G)}),K&&Xt(m,L),C}function w(m,d,p,b){var C=Gr(p);if(typeof C!="function")throw Error(j(150));if(p=C.call(p),p==null)throw Error(j(151));for(var T=C=null,N=d,L=d=0,F=null,z=p.next();N!==null&&!z.done;L++,z=p.next()){N.index>L?(F=N,N=null):F=N.sibling;var G=h(m,N,z.value,b);if(G===null){N===null&&(N=F);break}e&&N&&G.alternate===null&&t(m,N),d=o(G,d,L),T===null?C=G:T.sibling=G,T=G,N=F}if(z.done)return r(m,N),K&&Xt(m,L),C;if(N===null){for(;!z.done;L++,z=p.next())z=f(m,z.value,b),z!==null&&(d=o(z,d,L),T===null?C=z:T.sibling=z,T=z);return K&&Xt(m,L),C}for(N=n(m,N);!z.done;L++,z=p.next())z=x(N,m,L,z.value,b),z!==null&&(e&&z.alternate!==null&&N.delete(z.key===null?L:z.key),d=o(z,d,L),T===null?C=z:T.sibling=z,T=z);return e&&N.forEach(function(He){return t(m,He)}),K&&Xt(m,L),C}function S(m,d,p,b){if(typeof p=="object"&&p!==null&&p.type===mr&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Un:e:{for(var C=p.key,T=d;T!==null;){if(T.key===C){if(C=p.type,C===mr){if(T.tag===7){r(m,T.sibling),d=s(T,p.props.children),d.return=m,m=d;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===St&&bi(C)===T.type){r(m,T.sibling),d=s(T,p.props),d.ref=Jr(m,T,p),d.return=m,m=d;break e}r(m,T);break}else t(m,T);T=T.sibling}p.type===mr?(d=nr(p.props.children,m.mode,b,p.key),d.return=m,m=d):(b=gs(p.type,p.key,p.props,null,m.mode,b),b.ref=Jr(m,d,p),b.return=m,m=b)}return l(m);case fr:e:{for(T=p.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){r(m,d.sibling),d=s(d,p.children||[]),d.return=m,m=d;break e}else{r(m,d);break}else t(m,d);d=d.sibling}d=Fo(p,m.mode,b),d.return=m,m=d}return l(m);case St:return T=p._init,S(m,d,T(p._payload),b)}if(tn(p))return y(m,d,p,b);if(Gr(p))return w(m,d,p,b);qn(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(r(m,d.sibling),d=s(d,p),d.return=m,m=d):(r(m,d),d=Oo(p,m.mode,b),d.return=m,m=d),l(m)):r(m,d)}return S}var Ir=yu(!0),bu=yu(!1),$s=Ht(null),Ls=null,kr=null,ua=null;function da(){ua=kr=Ls=null}function pa(e){var t=$s.current;Y($s),e._currentValue=t}function yl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Tr(e,t){Ls=e,ua=kr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function Be(e){var t=e._currentValue;if(ua!==e)if(e={context:e,memoizedValue:t,next:null},kr===null){if(Ls===null)throw Error(j(308));kr=e,Ls.dependencies={lanes:0,firstContext:e}}else kr=kr.next=e;return t}var qt=null;function fa(e){qt===null?qt=[e]:qt.push(e)}function wu(e,t,r,n){var s=t.interleaved;return s===null?(r.next=r,fa(t)):(r.next=s.next,s.next=r),t.interleaved=r,ht(e,n)}function ht(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var jt=!1;function ma(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ku(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,B&2){var s=n.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),n.pending=t,ht(e,r)}return s=n.interleaved,s===null?(t.next=t,fa(n)):(t.next=s.next,s.next=t),n.interleaved=t,ht(e,r)}function us(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ql(e,r)}}function wi(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var s=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?s=o=l:o=o.next=l,r=r.next}while(r!==null);o===null?s=o=t:o=o.next=t}else s=o=t;r={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Rs(e,t,r,n){var s=e.updateQueue;jt=!1;var o=s.firstBaseUpdate,l=s.lastBaseUpdate,i=s.shared.pending;if(i!==null){s.shared.pending=null;var c=i,u=c.next;c.next=null,l===null?o=u:l.next=u,l=c;var g=e.alternate;g!==null&&(g=g.updateQueue,i=g.lastBaseUpdate,i!==l&&(i===null?g.firstBaseUpdate=u:i.next=u,g.lastBaseUpdate=c))}if(o!==null){var f=s.baseState;l=0,g=u=c=null,i=o;do{var h=i.lane,x=i.eventTime;if((n&h)===h){g!==null&&(g=g.next={eventTime:x,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var y=e,w=i;switch(h=t,x=r,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(x,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(x,f,h):y,h==null)break e;f=q({},f,h);break e;case 2:jt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,h=s.effects,h===null?s.effects=[i]:h.push(i))}else x={eventTime:x,lane:h,tag:i.tag,payload:i.payload,callback:i.callback,next:null},g===null?(u=g=x,c=f):g=g.next=x,l|=h;if(i=i.next,i===null){if(i=s.shared.pending,i===null)break;h=i,i=h.next,h.next=null,s.lastBaseUpdate=h,s.shared.pending=null}}while(!0);if(g===null&&(c=f),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=g,t=s.shared.interleaved,t!==null){s=t;do l|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);ar|=l,e.lanes=l,e.memoizedState=f}}function ki(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],s=n.callback;if(s!==null){if(n.callback=null,n=r,typeof s!="function")throw Error(j(191,s));s.call(n)}}}var Mn={},ot=Ht(Mn),jn=Ht(Mn),Nn=Ht(Mn);function er(e){if(e===Mn)throw Error(j(174));return e}function ha(e,t){switch(W(Nn,t),W(jn,e),W(ot,Mn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qo(t,e)}Y(ot),W(ot,t)}function zr(){Y(ot),Y(jn),Y(Nn)}function Cu(e){er(Nn.current);var t=er(ot.current),r=qo(t,e.type);t!==r&&(W(jn,e),W(ot,r))}function ga(e){jn.current===e&&(Y(ot),Y(jn))}var J=Ht(0);function _s(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ro=[];function xa(){for(var e=0;e<Ro.length;e++)Ro[e]._workInProgressVersionPrimary=null;Ro.length=0}var ds=xt.ReactCurrentDispatcher,_o=xt.ReactCurrentBatchConfig,lr=0,Z=null,se=null,ae=null,Is=!1,un=!1,En=0,Af=0;function me(){throw Error(j(321))}function va(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Ze(e[r],t[r]))return!1;return!0}function ya(e,t,r,n,s,o){if(lr=o,Z=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ds.current=e===null||e.memoizedState===null?Vf:Wf,e=r(n,s),un){o=0;do{if(un=!1,En=0,25<=o)throw Error(j(301));o+=1,ae=se=null,t.updateQueue=null,ds.current=Gf,e=r(n,s)}while(un)}if(ds.current=zs,t=se!==null&&se.next!==null,lr=0,ae=se=Z=null,Is=!1,t)throw Error(j(300));return e}function ba(){var e=En!==0;return En=0,e}function rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ae===null?Z.memoizedState=ae=e:ae=ae.next=e,ae}function Ue(){if(se===null){var e=Z.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=ae===null?Z.memoizedState:ae.next;if(t!==null)ae=t,se=e;else{if(e===null)throw Error(j(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},ae===null?Z.memoizedState=ae=e:ae=ae.next=e}return ae}function Pn(e,t){return typeof t=="function"?t(e):t}function Io(e){var t=Ue(),r=t.queue;if(r===null)throw Error(j(311));r.lastRenderedReducer=e;var n=se,s=n.baseQueue,o=r.pending;if(o!==null){if(s!==null){var l=s.next;s.next=o.next,o.next=l}n.baseQueue=s=o,r.pending=null}if(s!==null){o=s.next,n=n.baseState;var i=l=null,c=null,u=o;do{var g=u.lane;if((lr&g)===g)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var f={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(i=c=f,l=n):c=c.next=f,Z.lanes|=g,ar|=g}u=u.next}while(u!==null&&u!==o);c===null?l=n:c.next=i,Ze(n,t.memoizedState)||(je=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){s=e;do o=s.lane,Z.lanes|=o,ar|=o,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function zo(e){var t=Ue(),r=t.queue;if(r===null)throw Error(j(311));r.lastRenderedReducer=e;var n=r.dispatch,s=r.pending,o=t.memoizedState;if(s!==null){r.pending=null;var l=s=s.next;do o=e(o,l.action),l=l.next;while(l!==s);Ze(o,t.memoizedState)||(je=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function Su(){}function ju(e,t){var r=Z,n=Ue(),s=t(),o=!Ze(n.memoizedState,s);if(o&&(n.memoizedState=s,je=!0),n=n.queue,wa(Pu.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||ae!==null&&ae.memoizedState.tag&1){if(r.flags|=2048,Tn(9,Eu.bind(null,r,n,s,t),void 0,null),ie===null)throw Error(j(349));lr&30||Nu(r,t,s)}return s}function Nu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Eu(e,t,r,n){t.value=r,t.getSnapshot=n,Tu(t)&&$u(e)}function Pu(e,t,r){return r(function(){Tu(t)&&$u(e)})}function Tu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Ze(e,r)}catch{return!0}}function $u(e){var t=ht(e,1);t!==null&&Je(t,e,1,-1)}function Ci(e){var t=rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:e},t.queue=e,e=e.dispatch=Hf.bind(null,Z,e),[t.memoizedState,e]}function Tn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Z.updateQueue,t===null?(t={lastEffect:null,stores:null},Z.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Lu(){return Ue().memoizedState}function ps(e,t,r,n){var s=rt();Z.flags|=e,s.memoizedState=Tn(1|t,r,void 0,n===void 0?null:n)}function Xs(e,t,r,n){var s=Ue();n=n===void 0?null:n;var o=void 0;if(se!==null){var l=se.memoizedState;if(o=l.destroy,n!==null&&va(n,l.deps)){s.memoizedState=Tn(t,r,o,n);return}}Z.flags|=e,s.memoizedState=Tn(1|t,r,o,n)}function Si(e,t){return ps(8390656,8,e,t)}function wa(e,t){return Xs(2048,8,e,t)}function Ru(e,t){return Xs(4,2,e,t)}function _u(e,t){return Xs(4,4,e,t)}function Iu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zu(e,t,r){return r=r!=null?r.concat([e]):null,Xs(4,4,Iu.bind(null,t,e),r)}function ka(){}function Du(e,t){var r=Ue();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&va(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Mu(e,t){var r=Ue();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&va(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Ou(e,t,r){return lr&21?(Ze(r,t)||(r=Hc(),Z.lanes|=r,ar|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=r)}function Bf(e,t){var r=H;H=r!==0&&4>r?r:4,e(!0);var n=_o.transition;_o.transition={};try{e(!1),t()}finally{H=r,_o.transition=n}}function Fu(){return Ue().memoizedState}function Uf(e,t,r){var n=Mt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Au(e))Bu(t,r);else if(r=wu(e,t,r,n),r!==null){var s=we();Je(r,e,n,s),Uu(r,t,n)}}function Hf(e,t,r){var n=Mt(e),s={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Au(e))Bu(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,i=o(l,r);if(s.hasEagerState=!0,s.eagerState=i,Ze(i,l)){var c=t.interleaved;c===null?(s.next=s,fa(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}r=wu(e,t,s,n),r!==null&&(s=we(),Je(r,e,n,s),Uu(r,t,n))}}function Au(e){var t=e.alternate;return e===Z||t!==null&&t===Z}function Bu(e,t){un=Is=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Uu(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,ql(e,r)}}var zs={readContext:Be,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Vf={readContext:Be,useCallback:function(e,t){return rt().memoizedState=[e,t===void 0?null:t],e},useContext:Be,useEffect:Si,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ps(4194308,4,Iu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ps(4194308,4,e,t)},useInsertionEffect:function(e,t){return ps(4,2,e,t)},useMemo:function(e,t){var r=rt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=rt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Uf.bind(null,Z,e),[n.memoizedState,e]},useRef:function(e){var t=rt();return e={current:e},t.memoizedState=e},useState:Ci,useDebugValue:ka,useDeferredValue:function(e){return rt().memoizedState=e},useTransition:function(){var e=Ci(!1),t=e[0];return e=Bf.bind(null,e[1]),rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Z,s=rt();if(K){if(r===void 0)throw Error(j(407));r=r()}else{if(r=t(),ie===null)throw Error(j(349));lr&30||Nu(n,t,r)}s.memoizedState=r;var o={value:r,getSnapshot:t};return s.queue=o,Si(Pu.bind(null,n,o,e),[e]),n.flags|=2048,Tn(9,Eu.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=rt(),t=ie.identifierPrefix;if(K){var r=dt,n=ut;r=(n&~(1<<32-Xe(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=En++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Af++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wf={readContext:Be,useCallback:Du,useContext:Be,useEffect:wa,useImperativeHandle:zu,useInsertionEffect:Ru,useLayoutEffect:_u,useMemo:Mu,useReducer:Io,useRef:Lu,useState:function(){return Io(Pn)},useDebugValue:ka,useDeferredValue:function(e){var t=Ue();return Ou(t,se.memoizedState,e)},useTransition:function(){var e=Io(Pn)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:Su,useSyncExternalStore:ju,useId:Fu,unstable_isNewReconciler:!1},Gf={readContext:Be,useCallback:Du,useContext:Be,useEffect:wa,useImperativeHandle:zu,useInsertionEffect:Ru,useLayoutEffect:_u,useMemo:Mu,useReducer:zo,useRef:Lu,useState:function(){return zo(Pn)},useDebugValue:ka,useDeferredValue:function(e){var t=Ue();return se===null?t.memoizedState=e:Ou(t,se.memoizedState,e)},useTransition:function(){var e=zo(Pn)[0],t=Ue().memoizedState;return[e,t]},useMutableSource:Su,useSyncExternalStore:ju,useId:Fu,unstable_isNewReconciler:!1};function Qe(e,t){if(e&&e.defaultProps){t=q({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function bl(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:q({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Js={isMounted:function(e){return(e=e._reactInternals)?ur(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=we(),s=Mt(e),o=pt(n,s);o.payload=t,r!=null&&(o.callback=r),t=zt(e,o,s),t!==null&&(Je(t,e,s,n),us(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=we(),s=Mt(e),o=pt(n,s);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=zt(e,o,s),t!==null&&(Je(t,e,s,n),us(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=we(),n=Mt(e),s=pt(r,n);s.tag=2,t!=null&&(s.callback=t),t=zt(e,s,n),t!==null&&(Je(t,e,n,r),us(t,e,n))}};function ji(e,t,r,n,s,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,l):t.prototype&&t.prototype.isPureReactComponent?!wn(r,n)||!wn(s,o):!0}function Hu(e,t,r){var n=!1,s=Bt,o=t.contextType;return typeof o=="object"&&o!==null?o=Be(o):(s=Ee(t)?sr:xe.current,n=t.contextTypes,o=(n=n!=null)?Rr(e,s):Bt),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Js,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ni(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function wl(e,t,r,n){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},ma(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=Be(o):(o=Ee(t)?sr:xe.current,s.context=Rr(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(bl(e,t,o,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Js.enqueueReplaceState(s,s.state,null),Rs(e,r,s,n),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Dr(e,t){try{var r="",n=t;do r+=yp(n),n=n.return;while(n);var s=r}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function Do(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function kl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Qf=typeof WeakMap=="function"?WeakMap:Map;function Vu(e,t,r){r=pt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ms||(Ms=!0,Rl=n),kl(e,t)},r}function Wu(e,t,r){r=pt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var s=t.value;r.payload=function(){return n(s)},r.callback=function(){kl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){kl(e,t),typeof n!="function"&&(Dt===null?Dt=new Set([this]):Dt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function Ei(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Qf;var s=new Set;n.set(t,s)}else s=n.get(t),s===void 0&&(s=new Set,n.set(t,s));s.has(r)||(s.add(r),e=am.bind(null,e,t,r),t.then(e,e))}function Pi(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ti(e,t,r,n,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=pt(-1,1),t.tag=2,zt(r,t,1))),r.lanes|=1),e)}var Yf=xt.ReactCurrentOwner,je=!1;function be(e,t,r,n){t.child=e===null?bu(t,null,r,n):Ir(t,e.child,r,n)}function $i(e,t,r,n,s){r=r.render;var o=t.ref;return Tr(t,s),n=ya(e,t,r,n,o,s),r=ba(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,gt(e,t,s)):(K&&r&&aa(t),t.flags|=1,be(e,t,n,s),t.child)}function Li(e,t,r,n,s){if(e===null){var o=r.type;return typeof o=="function"&&!$a(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,Gu(e,t,o,n,s)):(e=gs(r.type,null,n,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&s)){var l=o.memoizedProps;if(r=r.compare,r=r!==null?r:wn,r(l,n)&&e.ref===t.ref)return gt(e,t,s)}return t.flags|=1,e=Ot(o,n),e.ref=t.ref,e.return=t,t.child=e}function Gu(e,t,r,n,s){if(e!==null){var o=e.memoizedProps;if(wn(o,n)&&e.ref===t.ref)if(je=!1,t.pendingProps=n=o,(e.lanes&s)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,gt(e,t,s)}return Cl(e,t,r,n,s)}function Qu(e,t,r){var n=t.pendingProps,s=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Sr,Te),Te|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Sr,Te),Te|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,W(Sr,Te),Te|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,W(Sr,Te),Te|=n;return be(e,t,s,r),t.child}function Yu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Cl(e,t,r,n,s){var o=Ee(r)?sr:xe.current;return o=Rr(t,o),Tr(t,s),r=ya(e,t,r,n,o,s),n=ba(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,gt(e,t,s)):(K&&n&&aa(t),t.flags|=1,be(e,t,r,s),t.child)}function Ri(e,t,r,n,s){if(Ee(r)){var o=!0;Es(t)}else o=!1;if(Tr(t,s),t.stateNode===null)fs(e,t),Hu(t,r,n),wl(t,r,n,s),n=!0;else if(e===null){var l=t.stateNode,i=t.memoizedProps;l.props=i;var c=l.context,u=r.contextType;typeof u=="object"&&u!==null?u=Be(u):(u=Ee(r)?sr:xe.current,u=Rr(t,u));var g=r.getDerivedStateFromProps,f=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==n||c!==u)&&Ni(t,l,n,u),jt=!1;var h=t.memoizedState;l.state=h,Rs(t,n,l,s),c=t.memoizedState,i!==n||h!==c||Ne.current||jt?(typeof g=="function"&&(bl(t,r,g,n),c=t.memoizedState),(i=jt||ji(t,r,i,n,h,c,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),l.props=n,l.state=c,l.context=u,n=i):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,ku(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:Qe(t.type,i),l.props=u,f=t.pendingProps,h=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=Be(c):(c=Ee(r)?sr:xe.current,c=Rr(t,c));var x=r.getDerivedStateFromProps;(g=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==f||h!==c)&&Ni(t,l,n,c),jt=!1,h=t.memoizedState,l.state=h,Rs(t,n,l,s);var y=t.memoizedState;i!==f||h!==y||Ne.current||jt?(typeof x=="function"&&(bl(t,r,x,n),y=t.memoizedState),(u=jt||ji(t,r,u,n,h,y,c)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,y,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,y,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),l.props=n,l.state=y,l.context=c,n=u):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return Sl(e,t,r,n,o,s)}function Sl(e,t,r,n,s,o){Yu(e,t);var l=(t.flags&128)!==0;if(!n&&!l)return s&&xi(t,r,!1),gt(e,t,o);n=t.stateNode,Yf.current=t;var i=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&l?(t.child=Ir(t,e.child,null,o),t.child=Ir(t,null,i,o)):be(e,t,i,o),t.memoizedState=n.state,s&&xi(t,r,!0),t.child}function Ku(e){var t=e.stateNode;t.pendingContext?gi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&gi(e,t.context,!1),ha(e,t.containerInfo)}function _i(e,t,r,n,s){return _r(),ca(s),t.flags|=256,be(e,t,r,n),t.child}var jl={dehydrated:null,treeContext:null,retryLane:0};function Nl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xu(e,t,r){var n=t.pendingProps,s=J.current,o=!1,l=(t.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(s&2)!==0),i?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),W(J,s&1),e===null)return vl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=n.children,e=n.fallback,o?(n=t.mode,o=t.child,l={mode:"hidden",children:l},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=eo(l,n,0,null),e=nr(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Nl(r),t.memoizedState=jl,e):Ca(t,l));if(s=e.memoizedState,s!==null&&(i=s.dehydrated,i!==null))return Kf(e,t,l,n,i,s,r);if(o){o=n.fallback,l=t.mode,s=e.child,i=s.sibling;var c={mode:"hidden",children:n.children};return!(l&1)&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=Ot(s,c),n.subtreeFlags=s.subtreeFlags&14680064),i!==null?o=Ot(i,o):(o=nr(o,l,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,l=e.child.memoizedState,l=l===null?Nl(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~r,t.memoizedState=jl,n}return o=e.child,e=o.sibling,n=Ot(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Ca(e,t){return t=eo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function es(e,t,r,n){return n!==null&&ca(n),Ir(t,e.child,null,r),e=Ca(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Kf(e,t,r,n,s,o,l){if(r)return t.flags&256?(t.flags&=-257,n=Do(Error(j(422))),es(e,t,l,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,s=t.mode,n=eo({mode:"visible",children:n.children},s,0,null),o=nr(o,s,l,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&Ir(t,e.child,null,l),t.child.memoizedState=Nl(l),t.memoizedState=jl,o);if(!(t.mode&1))return es(e,t,l,null);if(s.data==="$!"){if(n=s.nextSibling&&s.nextSibling.dataset,n)var i=n.dgst;return n=i,o=Error(j(419)),n=Do(o,n,void 0),es(e,t,l,n)}if(i=(l&e.childLanes)!==0,je||i){if(n=ie,n!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(n.suspendedLanes|l)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,ht(e,s),Je(n,e,s,-1))}return Ta(),n=Do(Error(j(421))),es(e,t,l,n)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=im.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,$e=It(s.nextSibling),Le=t,K=!0,Ke=null,e!==null&&(Me[Oe++]=ut,Me[Oe++]=dt,Me[Oe++]=or,ut=e.id,dt=e.overflow,or=t),t=Ca(t,n.children),t.flags|=4096,t)}function Ii(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),yl(e.return,t,r)}function Mo(e,t,r,n,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=s)}function Ju(e,t,r){var n=t.pendingProps,s=n.revealOrder,o=n.tail;if(be(e,t,n.children,r),n=J.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ii(e,r,t);else if(e.tag===19)Ii(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(W(J,n),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&_s(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),Mo(t,!1,s,r,o);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&_s(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}Mo(t,!0,r,null,o);break;case"together":Mo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),ar|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,r=Ot(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Ot(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Xf(e,t,r){switch(t.tag){case 3:Ku(t),_r();break;case 5:Cu(t);break;case 1:Ee(t.type)&&Es(t);break;case 4:ha(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,s=t.memoizedProps.value;W($s,n._currentValue),n._currentValue=s;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(W(J,J.current&1),t.flags|=128,null):r&t.child.childLanes?Xu(e,t,r):(W(J,J.current&1),e=gt(e,t,r),e!==null?e.sibling:null);W(J,J.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Ju(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),W(J,J.current),n)break;return null;case 22:case 23:return t.lanes=0,Qu(e,t,r)}return gt(e,t,r)}var Zu,El,qu,ed;Zu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};El=function(){};qu=function(e,t,r,n){var s=e.memoizedProps;if(s!==n){e=t.stateNode,er(ot.current);var o=null;switch(r){case"input":s=Ko(e,s),n=Ko(e,n),o=[];break;case"select":s=q({},s,{value:void 0}),n=q({},n,{value:void 0}),o=[];break;case"textarea":s=Zo(e,s),n=Zo(e,n),o=[];break;default:typeof s.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=js)}el(r,n);var l;r=null;for(u in s)if(!n.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var i=s[u];for(l in i)i.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(mn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(i=s!=null?s[u]:void 0,n.hasOwnProperty(u)&&c!==i&&(c!=null||i!=null))if(u==="style")if(i){for(l in i)!i.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&i[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(mn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Q("scroll",e),o||i===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};ed=function(e,t,r,n){r!==n&&(t.flags|=4)};function Zr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags&14680064,n|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Jf(e,t,r){var n=t.pendingProps;switch(ia(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Ee(t.type)&&Ns(),he(t),null;case 3:return n=t.stateNode,zr(),Y(Ne),Y(xe),xa(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Zn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ke!==null&&(zl(Ke),Ke=null))),El(e,t),he(t),null;case 5:ga(t);var s=er(Nn.current);if(r=t.type,e!==null&&t.stateNode!=null)qu(e,t,r,n,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(j(166));return he(t),null}if(e=er(ot.current),Zn(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[nt]=t,n[Sn]=o,e=(t.mode&1)!==0,r){case"dialog":Q("cancel",n),Q("close",n);break;case"iframe":case"object":case"embed":Q("load",n);break;case"video":case"audio":for(s=0;s<nn.length;s++)Q(nn[s],n);break;case"source":Q("error",n);break;case"img":case"image":case"link":Q("error",n),Q("load",n);break;case"details":Q("toggle",n);break;case"input":Ha(n,o),Q("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},Q("invalid",n);break;case"textarea":Wa(n,o),Q("invalid",n)}el(r,o),s=null;for(var l in o)if(o.hasOwnProperty(l)){var i=o[l];l==="children"?typeof i=="string"?n.textContent!==i&&(o.suppressHydrationWarning!==!0&&Jn(n.textContent,i,e),s=["children",i]):typeof i=="number"&&n.textContent!==""+i&&(o.suppressHydrationWarning!==!0&&Jn(n.textContent,i,e),s=["children",""+i]):mn.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&Q("scroll",n)}switch(r){case"input":Hn(n),Va(n,o,!0);break;case"textarea":Hn(n),Ga(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=js)}n=s,t.updateQueue=n,n!==null&&(t.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Pc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),r==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[nt]=t,e[Sn]=n,Zu(e,t,!1,!1),t.stateNode=e;e:{switch(l=tl(r,n),r){case"dialog":Q("cancel",e),Q("close",e),s=n;break;case"iframe":case"object":case"embed":Q("load",e),s=n;break;case"video":case"audio":for(s=0;s<nn.length;s++)Q(nn[s],e);s=n;break;case"source":Q("error",e),s=n;break;case"img":case"image":case"link":Q("error",e),Q("load",e),s=n;break;case"details":Q("toggle",e),s=n;break;case"input":Ha(e,n),s=Ko(e,n),Q("invalid",e);break;case"option":s=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},s=q({},n,{value:void 0}),Q("invalid",e);break;case"textarea":Wa(e,n),s=Zo(e,n),Q("invalid",e);break;default:s=n}el(r,s),i=s;for(o in i)if(i.hasOwnProperty(o)){var c=i[o];o==="style"?Lc(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Tc(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&hn(e,c):typeof c=="number"&&hn(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(mn.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Q("scroll",e):c!=null&&Ql(e,o,c,l))}switch(r){case"input":Hn(e),Va(e,n,!1);break;case"textarea":Hn(e),Ga(e);break;case"option":n.value!=null&&e.setAttribute("value",""+At(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?jr(e,!!n.multiple,o,!1):n.defaultValue!=null&&jr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=js)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)ed(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(j(166));if(r=er(Nn.current),er(ot.current),Zn(t)){if(n=t.stateNode,r=t.memoizedProps,n[nt]=t,(o=n.nodeValue!==r)&&(e=Le,e!==null))switch(e.tag){case 3:Jn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jn(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[nt]=t,t.stateNode=n}return he(t),null;case 13:if(Y(J),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&$e!==null&&t.mode&1&&!(t.flags&128))vu(),_r(),t.flags|=98560,o=!1;else if(o=Zn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[nt]=t}else _r(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),o=!1}else Ke!==null&&(zl(Ke),Ke=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?oe===0&&(oe=3):Ta())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return zr(),El(e,t),e===null&&kn(t.stateNode.containerInfo),he(t),null;case 10:return pa(t.type._context),he(t),null;case 17:return Ee(t.type)&&Ns(),he(t),null;case 19:if(Y(J),o=t.memoizedState,o===null)return he(t),null;if(n=(t.flags&128)!==0,l=o.rendering,l===null)if(n)Zr(o,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=_s(e),l!==null){for(t.flags|=128,Zr(o,!1),n=l.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return W(J,J.current&1|2),t.child}e=e.sibling}o.tail!==null&&re()>Mr&&(t.flags|=128,n=!0,Zr(o,!1),t.lanes=4194304)}else{if(!n)if(e=_s(l),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Zr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!K)return he(t),null}else 2*re()-o.renderingStartTime>Mr&&r!==1073741824&&(t.flags|=128,n=!0,Zr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(r=o.last,r!==null?r.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=re(),t.sibling=null,r=J.current,W(J,n?r&1|2:r&1),t):(he(t),null);case 22:case 23:return Pa(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Te&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Zf(e,t){switch(ia(t),t.tag){case 1:return Ee(t.type)&&Ns(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zr(),Y(Ne),Y(xe),xa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ga(t),null;case 13:if(Y(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));_r()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(J),null;case 4:return zr(),null;case 10:return pa(t.type._context),null;case 22:case 23:return Pa(),null;case 24:return null;default:return null}}var ts=!1,ge=!1,qf=typeof WeakSet=="function"?WeakSet:Set,R=null;function Cr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ee(e,t,n)}else r.current=null}function Pl(e,t,r){try{r()}catch(n){ee(e,t,n)}}var zi=!1;function em(e,t){if(dl=ks,e=ou(),la(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var s=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var l=0,i=-1,c=-1,u=0,g=0,f=e,h=null;t:for(;;){for(var x;f!==r||s!==0&&f.nodeType!==3||(i=l+s),f!==o||n!==0&&f.nodeType!==3||(c=l+n),f.nodeType===3&&(l+=f.nodeValue.length),(x=f.firstChild)!==null;)h=f,f=x;for(;;){if(f===e)break t;if(h===r&&++u===s&&(i=l),h===o&&++g===n&&(c=l),(x=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=x}r=i===-1||c===-1?null:{start:i,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(pl={focusedElem:e,selectionRange:r},ks=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,S=y.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:Qe(t.type,w),S);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(b){ee(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return y=zi,zi=!1,y}function dn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&Pl(t,r,o)}s=s.next}while(s!==n)}}function Zs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Tl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function td(e){var t=e.alternate;t!==null&&(e.alternate=null,td(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[nt],delete t[Sn],delete t[hl],delete t[Df],delete t[Mf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function rd(e){return e.tag===5||e.tag===3||e.tag===4}function Di(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||rd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function $l(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=js));else if(n!==4&&(e=e.child,e!==null))for($l(e,t,r),e=e.sibling;e!==null;)$l(e,t,r),e=e.sibling}function Ll(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ll(e,t,r),e=e.sibling;e!==null;)Ll(e,t,r),e=e.sibling}var ce=null,Ye=!1;function kt(e,t,r){for(r=r.child;r!==null;)nd(e,t,r),r=r.sibling}function nd(e,t,r){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(Vs,r)}catch{}switch(r.tag){case 5:ge||Cr(r,t);case 6:var n=ce,s=Ye;ce=null,kt(e,t,r),ce=n,Ye=s,ce!==null&&(Ye?(e=ce,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ce.removeChild(r.stateNode));break;case 18:ce!==null&&(Ye?(e=ce,r=r.stateNode,e.nodeType===8?$o(e.parentNode,r):e.nodeType===1&&$o(e,r),yn(e)):$o(ce,r.stateNode));break;case 4:n=ce,s=Ye,ce=r.stateNode.containerInfo,Ye=!0,kt(e,t,r),ce=n,Ye=s;break;case 0:case 11:case 14:case 15:if(!ge&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){s=n=n.next;do{var o=s,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Pl(r,t,l),s=s.next}while(s!==n)}kt(e,t,r);break;case 1:if(!ge&&(Cr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(i){ee(r,t,i)}kt(e,t,r);break;case 21:kt(e,t,r);break;case 22:r.mode&1?(ge=(n=ge)||r.memoizedState!==null,kt(e,t,r),ge=n):kt(e,t,r);break;default:kt(e,t,r)}}function Mi(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new qf),t.forEach(function(n){var s=cm.bind(null,e,n);r.has(n)||(r.add(n),n.then(s,s))})}}function Ge(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var s=r[n];try{var o=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 5:ce=i.stateNode,Ye=!1;break e;case 3:ce=i.stateNode.containerInfo,Ye=!0;break e;case 4:ce=i.stateNode.containerInfo,Ye=!0;break e}i=i.return}if(ce===null)throw Error(j(160));nd(o,l,s),ce=null,Ye=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){ee(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sd(t,e),t=t.sibling}function sd(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ge(t,e),tt(e),n&4){try{dn(3,e,e.return),Zs(3,e)}catch(w){ee(e,e.return,w)}try{dn(5,e,e.return)}catch(w){ee(e,e.return,w)}}break;case 1:Ge(t,e),tt(e),n&512&&r!==null&&Cr(r,r.return);break;case 5:if(Ge(t,e),tt(e),n&512&&r!==null&&Cr(r,r.return),e.flags&32){var s=e.stateNode;try{hn(s,"")}catch(w){ee(e,e.return,w)}}if(n&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,l=r!==null?r.memoizedProps:o,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&o.type==="radio"&&o.name!=null&&Nc(s,o),tl(i,l);var u=tl(i,o);for(l=0;l<c.length;l+=2){var g=c[l],f=c[l+1];g==="style"?Lc(s,f):g==="dangerouslySetInnerHTML"?Tc(s,f):g==="children"?hn(s,f):Ql(s,g,f,u)}switch(i){case"input":Xo(s,o);break;case"textarea":Ec(s,o);break;case"select":var h=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?jr(s,!!o.multiple,x,!1):h!==!!o.multiple&&(o.defaultValue!=null?jr(s,!!o.multiple,o.defaultValue,!0):jr(s,!!o.multiple,o.multiple?[]:"",!1))}s[Sn]=o}catch(w){ee(e,e.return,w)}}break;case 6:if(Ge(t,e),tt(e),n&4){if(e.stateNode===null)throw Error(j(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(w){ee(e,e.return,w)}}break;case 3:if(Ge(t,e),tt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{yn(t.containerInfo)}catch(w){ee(e,e.return,w)}break;case 4:Ge(t,e),tt(e);break;case 13:Ge(t,e),tt(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(Na=re())),n&4&&Mi(e);break;case 22:if(g=r!==null&&r.memoizedState!==null,e.mode&1?(ge=(u=ge)||g,Ge(t,e),ge=u):Ge(t,e),tt(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(R=e,g=e.child;g!==null;){for(f=R=g;R!==null;){switch(h=R,x=h.child,h.tag){case 0:case 11:case 14:case 15:dn(4,h,h.return);break;case 1:Cr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){ee(n,r,w)}}break;case 5:Cr(h,h.return);break;case 22:if(h.memoizedState!==null){Fi(f);continue}}x!==null?(x.return=h,R=x):Fi(f)}g=g.sibling}e:for(g=null,f=e;;){if(f.tag===5){if(g===null){g=f;try{s=f.stateNode,u?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(i=f.stateNode,c=f.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=$c("display",l))}catch(w){ee(e,e.return,w)}}}else if(f.tag===6){if(g===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){ee(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;g===f&&(g=null),f=f.return}g===f&&(g=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ge(t,e),tt(e),n&4&&Mi(e);break;case 21:break;default:Ge(t,e),tt(e)}}function tt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(rd(r)){var n=r;break e}r=r.return}throw Error(j(160))}switch(n.tag){case 5:var s=n.stateNode;n.flags&32&&(hn(s,""),n.flags&=-33);var o=Di(e);Ll(e,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,i=Di(e);$l(e,i,l);break;default:throw Error(j(161))}}catch(c){ee(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tm(e,t,r){R=e,od(e)}function od(e,t,r){for(var n=(e.mode&1)!==0;R!==null;){var s=R,o=s.child;if(s.tag===22&&n){var l=s.memoizedState!==null||ts;if(!l){var i=s.alternate,c=i!==null&&i.memoizedState!==null||ge;i=ts;var u=ge;if(ts=l,(ge=c)&&!u)for(R=s;R!==null;)l=R,c=l.child,l.tag===22&&l.memoizedState!==null?Ai(s):c!==null?(c.return=l,R=c):Ai(s);for(;o!==null;)R=o,od(o),o=o.sibling;R=s,ts=i,ge=u}Oi(e)}else s.subtreeFlags&8772&&o!==null?(o.return=s,R=o):Oi(e)}}function Oi(e){for(;R!==null;){var t=R;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||Zs(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ge)if(r===null)n.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:Qe(t.type,r.memoizedProps);n.componentDidUpdate(s,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ki(t,o,n);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}ki(t,l,r)}break;case 5:var i=t.stateNode;if(r===null&&t.flags&4){r=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var f=g.dehydrated;f!==null&&yn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ge||t.flags&512&&Tl(t)}catch(h){ee(t,t.return,h)}}if(t===e){R=null;break}if(r=t.sibling,r!==null){r.return=t.return,R=r;break}R=t.return}}function Fi(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var r=t.sibling;if(r!==null){r.return=t.return,R=r;break}R=t.return}}function Ai(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Zs(4,t)}catch(c){ee(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var s=t.return;try{n.componentDidMount()}catch(c){ee(t,s,c)}}var o=t.return;try{Tl(t)}catch(c){ee(t,o,c)}break;case 5:var l=t.return;try{Tl(t)}catch(c){ee(t,l,c)}}}catch(c){ee(t,t.return,c)}if(t===e){R=null;break}var i=t.sibling;if(i!==null){i.return=t.return,R=i;break}R=t.return}}var rm=Math.ceil,Ds=xt.ReactCurrentDispatcher,Sa=xt.ReactCurrentOwner,Ae=xt.ReactCurrentBatchConfig,B=0,ie=null,ne=null,ue=0,Te=0,Sr=Ht(0),oe=0,$n=null,ar=0,qs=0,ja=0,pn=null,Se=null,Na=0,Mr=1/0,it=null,Ms=!1,Rl=null,Dt=null,rs=!1,Tt=null,Os=0,fn=0,_l=null,ms=-1,hs=0;function we(){return B&6?re():ms!==-1?ms:ms=re()}function Mt(e){return e.mode&1?B&2&&ue!==0?ue&-ue:Ff.transition!==null?(hs===0&&(hs=Hc()),hs):(e=H,e!==0||(e=window.event,e=e===void 0?16:Xc(e.type)),e):1}function Je(e,t,r,n){if(50<fn)throw fn=0,_l=null,Error(j(185));In(e,r,n),(!(B&2)||e!==ie)&&(e===ie&&(!(B&2)&&(qs|=r),oe===4&&Et(e,ue)),Pe(e,n),r===1&&B===0&&!(t.mode&1)&&(Mr=re()+500,Ks&&Vt()))}function Pe(e,t){var r=e.callbackNode;Op(e,t);var n=ws(e,e===ie?ue:0);if(n===0)r!==null&&Ka(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Ka(r),t===1)e.tag===0?Of(Bi.bind(null,e)):hu(Bi.bind(null,e)),If(function(){!(B&6)&&Vt()}),r=null;else{switch(Vc(n)){case 1:r=Zl;break;case 4:r=Bc;break;case 16:r=bs;break;case 536870912:r=Uc;break;default:r=bs}r=fd(r,ld.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ld(e,t){if(ms=-1,hs=0,B&6)throw Error(j(327));var r=e.callbackNode;if($r()&&e.callbackNode!==r)return null;var n=ws(e,e===ie?ue:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Fs(e,n);else{t=n;var s=B;B|=2;var o=id();(ie!==e||ue!==t)&&(it=null,Mr=re()+500,rr(e,t));do try{om();break}catch(i){ad(e,i)}while(!0);da(),Ds.current=o,B=s,ne!==null?t=0:(ie=null,ue=0,t=oe)}if(t!==0){if(t===2&&(s=ll(e),s!==0&&(n=s,t=Il(e,s))),t===1)throw r=$n,rr(e,0),Et(e,n),Pe(e,re()),r;if(t===6)Et(e,n);else{if(s=e.current.alternate,!(n&30)&&!nm(s)&&(t=Fs(e,n),t===2&&(o=ll(e),o!==0&&(n=o,t=Il(e,o))),t===1))throw r=$n,rr(e,0),Et(e,n),Pe(e,re()),r;switch(e.finishedWork=s,e.finishedLanes=n,t){case 0:case 1:throw Error(j(345));case 2:Jt(e,Se,it);break;case 3:if(Et(e,n),(n&130023424)===n&&(t=Na+500-re(),10<t)){if(ws(e,0)!==0)break;if(s=e.suspendedLanes,(s&n)!==n){we(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=ml(Jt.bind(null,e,Se,it),t);break}Jt(e,Se,it);break;case 4:if(Et(e,n),(n&4194240)===n)break;for(t=e.eventTimes,s=-1;0<n;){var l=31-Xe(n);o=1<<l,l=t[l],l>s&&(s=l),n&=~o}if(n=s,n=re()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*rm(n/1960))-n,10<n){e.timeoutHandle=ml(Jt.bind(null,e,Se,it),n);break}Jt(e,Se,it);break;case 5:Jt(e,Se,it);break;default:throw Error(j(329))}}}return Pe(e,re()),e.callbackNode===r?ld.bind(null,e):null}function Il(e,t){var r=pn;return e.current.memoizedState.isDehydrated&&(rr(e,t).flags|=256),e=Fs(e,t),e!==2&&(t=Se,Se=r,t!==null&&zl(t)),e}function zl(e){Se===null?Se=e:Se.push.apply(Se,e)}function nm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var s=r[n],o=s.getSnapshot;s=s.value;try{if(!Ze(o(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Et(e,t){for(t&=~ja,t&=~qs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Xe(t),n=1<<r;e[r]=-1,t&=~n}}function Bi(e){if(B&6)throw Error(j(327));$r();var t=ws(e,0);if(!(t&1))return Pe(e,re()),null;var r=Fs(e,t);if(e.tag!==0&&r===2){var n=ll(e);n!==0&&(t=n,r=Il(e,n))}if(r===1)throw r=$n,rr(e,0),Et(e,t),Pe(e,re()),r;if(r===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,Se,it),Pe(e,re()),null}function Ea(e,t){var r=B;B|=1;try{return e(t)}finally{B=r,B===0&&(Mr=re()+500,Ks&&Vt())}}function ir(e){Tt!==null&&Tt.tag===0&&!(B&6)&&$r();var t=B;B|=1;var r=Ae.transition,n=H;try{if(Ae.transition=null,H=1,e)return e()}finally{H=n,Ae.transition=r,B=t,!(B&6)&&Vt()}}function Pa(){Te=Sr.current,Y(Sr)}function rr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,_f(r)),ne!==null)for(r=ne.return;r!==null;){var n=r;switch(ia(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ns();break;case 3:zr(),Y(Ne),Y(xe),xa();break;case 5:ga(n);break;case 4:zr();break;case 13:Y(J);break;case 19:Y(J);break;case 10:pa(n.type._context);break;case 22:case 23:Pa()}r=r.return}if(ie=e,ne=e=Ot(e.current,null),ue=Te=t,oe=0,$n=null,ja=qs=ar=0,Se=pn=null,qt!==null){for(t=0;t<qt.length;t++)if(r=qt[t],n=r.interleaved,n!==null){r.interleaved=null;var s=n.next,o=r.pending;if(o!==null){var l=o.next;o.next=s,n.next=l}r.pending=n}qt=null}return e}function ad(e,t){do{var r=ne;try{if(da(),ds.current=zs,Is){for(var n=Z.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}Is=!1}if(lr=0,ae=se=Z=null,un=!1,En=0,Sa.current=null,r===null||r.return===null){oe=1,$n=t,ne=null;break}e:{var o=e,l=r.return,i=r,c=t;if(t=ue,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,g=i,f=g.tag;if(!(g.mode&1)&&(f===0||f===11||f===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=Pi(l);if(x!==null){x.flags&=-257,Ti(x,l,i,o,t),x.mode&1&&Ei(o,u,t),t=x,c=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(c),t.updateQueue=w}else y.add(c);break e}else{if(!(t&1)){Ei(o,u,t),Ta();break e}c=Error(j(426))}}else if(K&&i.mode&1){var S=Pi(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),Ti(S,l,i,o,t),ca(Dr(c,i));break e}}o=c=Dr(c,i),oe!==4&&(oe=2),pn===null?pn=[o]:pn.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Vu(o,c,t);wi(o,m);break e;case 1:i=c;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Dt===null||!Dt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=Wu(o,i,t);wi(o,b);break e}}o=o.return}while(o!==null)}ud(r)}catch(C){t=C,ne===r&&r!==null&&(ne=r=r.return);continue}break}while(!0)}function id(){var e=Ds.current;return Ds.current=zs,e===null?zs:e}function Ta(){(oe===0||oe===3||oe===2)&&(oe=4),ie===null||!(ar&268435455)&&!(qs&268435455)||Et(ie,ue)}function Fs(e,t){var r=B;B|=2;var n=id();(ie!==e||ue!==t)&&(it=null,rr(e,t));do try{sm();break}catch(s){ad(e,s)}while(!0);if(da(),B=r,Ds.current=n,ne!==null)throw Error(j(261));return ie=null,ue=0,oe}function sm(){for(;ne!==null;)cd(ne)}function om(){for(;ne!==null&&!Tp();)cd(ne)}function cd(e){var t=pd(e.alternate,e,Te);e.memoizedProps=e.pendingProps,t===null?ud(e):ne=t,Sa.current=null}function ud(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Zf(r,t),r!==null){r.flags&=32767,ne=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,ne=null;return}}else if(r=Jf(r,t,Te),r!==null){ne=r;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);oe===0&&(oe=5)}function Jt(e,t,r){var n=H,s=Ae.transition;try{Ae.transition=null,H=1,lm(e,t,r,n)}finally{Ae.transition=s,H=n}return null}function lm(e,t,r,n){do $r();while(Tt!==null);if(B&6)throw Error(j(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Fp(e,o),e===ie&&(ne=ie=null,ue=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||rs||(rs=!0,fd(bs,function(){return $r(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Ae.transition,Ae.transition=null;var l=H;H=1;var i=B;B|=4,Sa.current=null,em(e,r),sd(r,e),Nf(pl),ks=!!dl,pl=dl=null,e.current=r,tm(r),$p(),B=i,H=l,Ae.transition=o}else e.current=r;if(rs&&(rs=!1,Tt=e,Os=s),o=e.pendingLanes,o===0&&(Dt=null),_p(r.stateNode),Pe(e,re()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],n(s.value,{componentStack:s.stack,digest:s.digest});if(Ms)throw Ms=!1,e=Rl,Rl=null,e;return Os&1&&e.tag!==0&&$r(),o=e.pendingLanes,o&1?e===_l?fn++:(fn=0,_l=e):fn=0,Vt(),null}function $r(){if(Tt!==null){var e=Vc(Os),t=Ae.transition,r=H;try{if(Ae.transition=null,H=16>e?16:e,Tt===null)var n=!1;else{if(e=Tt,Tt=null,Os=0,B&6)throw Error(j(331));var s=B;for(B|=4,R=e.current;R!==null;){var o=R,l=o.child;if(R.flags&16){var i=o.deletions;if(i!==null){for(var c=0;c<i.length;c++){var u=i[c];for(R=u;R!==null;){var g=R;switch(g.tag){case 0:case 11:case 15:dn(8,g,o)}var f=g.child;if(f!==null)f.return=g,R=f;else for(;R!==null;){g=R;var h=g.sibling,x=g.return;if(td(g),g===u){R=null;break}if(h!==null){h.return=x,R=h;break}R=x}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}R=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,R=l;else e:for(;R!==null;){if(o=R,o.flags&2048)switch(o.tag){case 0:case 11:case 15:dn(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,R=m;break e}R=o.return}}var d=e.current;for(R=d;R!==null;){l=R;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,R=p;else e:for(l=d;R!==null;){if(i=R,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Zs(9,i)}}catch(C){ee(i,i.return,C)}if(i===l){R=null;break e}var b=i.sibling;if(b!==null){b.return=i.return,R=b;break e}R=i.return}}if(B=s,Vt(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(Vs,e)}catch{}n=!0}return n}finally{H=r,Ae.transition=t}}return!1}function Ui(e,t,r){t=Dr(r,t),t=Vu(e,t,1),e=zt(e,t,1),t=we(),e!==null&&(In(e,1,t),Pe(e,t))}function ee(e,t,r){if(e.tag===3)Ui(e,e,r);else for(;t!==null;){if(t.tag===3){Ui(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Dt===null||!Dt.has(n))){e=Dr(r,e),e=Wu(t,e,1),t=zt(t,e,1),e=we(),t!==null&&(In(t,1,e),Pe(t,e));break}}t=t.return}}function am(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=we(),e.pingedLanes|=e.suspendedLanes&r,ie===e&&(ue&r)===r&&(oe===4||oe===3&&(ue&130023424)===ue&&500>re()-Na?rr(e,0):ja|=r),Pe(e,t)}function dd(e,t){t===0&&(e.mode&1?(t=Gn,Gn<<=1,!(Gn&130023424)&&(Gn=4194304)):t=1);var r=we();e=ht(e,t),e!==null&&(In(e,t,r),Pe(e,r))}function im(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),dd(e,r)}function cm(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(j(314))}n!==null&&n.delete(t),dd(e,r)}var pd;pd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ne.current)je=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return je=!1,Xf(e,t,r);je=!!(e.flags&131072)}else je=!1,K&&t.flags&1048576&&gu(t,Ts,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;fs(e,t),e=t.pendingProps;var s=Rr(t,xe.current);Tr(t,r),s=ya(null,t,n,e,s,r);var o=ba();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ee(n)?(o=!0,Es(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ma(t),s.updater=Js,t.stateNode=s,s._reactInternals=t,wl(t,n,e,r),t=Sl(null,t,n,!0,o,r)):(t.tag=0,K&&o&&aa(t),be(null,t,s,r),t=t.child),t;case 16:n=t.elementType;e:{switch(fs(e,t),e=t.pendingProps,s=n._init,n=s(n._payload),t.type=n,s=t.tag=dm(n),e=Qe(n,e),s){case 0:t=Cl(null,t,n,e,r);break e;case 1:t=Ri(null,t,n,e,r);break e;case 11:t=$i(null,t,n,e,r);break e;case 14:t=Li(null,t,n,Qe(n.type,e),r);break e}throw Error(j(306,n,""))}return t;case 0:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Qe(n,s),Cl(e,t,n,s,r);case 1:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Qe(n,s),Ri(e,t,n,s,r);case 3:e:{if(Ku(t),e===null)throw Error(j(387));n=t.pendingProps,o=t.memoizedState,s=o.element,ku(e,t),Rs(t,n,null,r);var l=t.memoizedState;if(n=l.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=Dr(Error(j(423)),t),t=_i(e,t,n,r,s);break e}else if(n!==s){s=Dr(Error(j(424)),t),t=_i(e,t,n,r,s);break e}else for($e=It(t.stateNode.containerInfo.firstChild),Le=t,K=!0,Ke=null,r=bu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(_r(),n===s){t=gt(e,t,r);break e}be(e,t,n,r)}t=t.child}return t;case 5:return Cu(t),e===null&&vl(t),n=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,l=s.children,fl(n,s)?l=null:o!==null&&fl(n,o)&&(t.flags|=32),Yu(e,t),be(e,t,l,r),t.child;case 6:return e===null&&vl(t),null;case 13:return Xu(e,t,r);case 4:return ha(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ir(t,null,n,r):be(e,t,n,r),t.child;case 11:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Qe(n,s),$i(e,t,n,s,r);case 7:return be(e,t,t.pendingProps,r),t.child;case 8:return be(e,t,t.pendingProps.children,r),t.child;case 12:return be(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,s=t.pendingProps,o=t.memoizedProps,l=s.value,W($s,n._currentValue),n._currentValue=l,o!==null)if(Ze(o.value,l)){if(o.children===s.children&&!Ne.current){t=gt(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var i=o.dependencies;if(i!==null){l=o.child;for(var c=i.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=pt(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?c.next=c:(c.next=g.next,g.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),yl(o.return,r,t),i.lanes|=r;break}c=c.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(j(341));l.lanes|=r,i=l.alternate,i!==null&&(i.lanes|=r),yl(l,r,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}be(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,n=t.pendingProps.children,Tr(t,r),s=Be(s),n=n(s),t.flags|=1,be(e,t,n,r),t.child;case 14:return n=t.type,s=Qe(n,t.pendingProps),s=Qe(n.type,s),Li(e,t,n,s,r);case 15:return Gu(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Qe(n,s),fs(e,t),t.tag=1,Ee(n)?(e=!0,Es(t)):e=!1,Tr(t,r),Hu(t,n,s),wl(t,n,s,r),Sl(null,t,n,!0,e,r);case 19:return Ju(e,t,r);case 22:return Qu(e,t,r)}throw Error(j(156,t.tag))};function fd(e,t){return Ac(e,t)}function um(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(e,t,r,n){return new um(e,t,r,n)}function $a(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dm(e){if(typeof e=="function")return $a(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Kl)return 11;if(e===Xl)return 14}return 2}function Ot(e,t){var r=e.alternate;return r===null?(r=Fe(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function gs(e,t,r,n,s,o){var l=2;if(n=e,typeof e=="function")$a(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case mr:return nr(r.children,s,o,t);case Yl:l=8,s|=8;break;case Wo:return e=Fe(12,r,t,s|2),e.elementType=Wo,e.lanes=o,e;case Go:return e=Fe(13,r,t,s),e.elementType=Go,e.lanes=o,e;case Qo:return e=Fe(19,r,t,s),e.elementType=Qo,e.lanes=o,e;case Cc:return eo(r,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wc:l=10;break e;case kc:l=9;break e;case Kl:l=11;break e;case Xl:l=14;break e;case St:l=16,n=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Fe(l,r,t,s),t.elementType=e,t.type=n,t.lanes=o,t}function nr(e,t,r,n){return e=Fe(7,e,n,t),e.lanes=r,e}function eo(e,t,r,n){return e=Fe(22,e,n,t),e.elementType=Cc,e.lanes=r,e.stateNode={isHidden:!1},e}function Oo(e,t,r){return e=Fe(6,e,null,t),e.lanes=r,e}function Fo(e,t,r){return t=Fe(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pm(e,t,r,n,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yo(0),this.expirationTimes=yo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yo(0),this.identifierPrefix=n,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function La(e,t,r,n,s,o,l,i,c){return e=new pm(e,t,r,i,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Fe(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ma(o),e}function fm(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function md(e){if(!e)return Bt;e=e._reactInternals;e:{if(ur(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ee(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var r=e.type;if(Ee(r))return mu(e,r,t)}return t}function hd(e,t,r,n,s,o,l,i,c){return e=La(r,n,!0,e,s,o,l,i,c),e.context=md(null),r=e.current,n=we(),s=Mt(r),o=pt(n,s),o.callback=t??null,zt(r,o,s),e.current.lanes=s,In(e,s,n),Pe(e,n),e}function to(e,t,r,n){var s=t.current,o=we(),l=Mt(s);return r=md(r),t.context===null?t.context=r:t.pendingContext=r,t=pt(o,l),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=zt(s,t,l),e!==null&&(Je(e,s,l,o),us(e,s,l)),l}function As(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hi(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Ra(e,t){Hi(e,t),(e=e.alternate)&&Hi(e,t)}function mm(){return null}var gd=typeof reportError=="function"?reportError:function(e){console.error(e)};function _a(e){this._internalRoot=e}ro.prototype.render=_a.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));to(e,t,null,null)};ro.prototype.unmount=_a.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ir(function(){to(null,e,null,null)}),t[mt]=null}};function ro(e){this._internalRoot=e}ro.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Nt.length&&t!==0&&t<Nt[r].priority;r++);Nt.splice(r,0,e),r===0&&Kc(e)}};function Ia(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function no(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vi(){}function hm(e,t,r,n,s){if(s){if(typeof n=="function"){var o=n;n=function(){var u=As(l);o.call(u)}}var l=hd(t,n,e,0,null,!1,!1,"",Vi);return e._reactRootContainer=l,e[mt]=l.current,kn(e.nodeType===8?e.parentNode:e),ir(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof n=="function"){var i=n;n=function(){var u=As(c);i.call(u)}}var c=La(e,0,!1,null,null,!1,!1,"",Vi);return e._reactRootContainer=c,e[mt]=c.current,kn(e.nodeType===8?e.parentNode:e),ir(function(){to(t,c,r,n)}),c}function so(e,t,r,n,s){var o=r._reactRootContainer;if(o){var l=o;if(typeof s=="function"){var i=s;s=function(){var c=As(l);i.call(c)}}to(t,l,e,s)}else l=hm(r,t,e,s,n);return As(l)}Wc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=rn(t.pendingLanes);r!==0&&(ql(t,r|1),Pe(t,re()),!(B&6)&&(Mr=re()+500,Vt()))}break;case 13:ir(function(){var n=ht(e,1);if(n!==null){var s=we();Je(n,e,1,s)}}),Ra(e,1)}};ea=function(e){if(e.tag===13){var t=ht(e,134217728);if(t!==null){var r=we();Je(t,e,134217728,r)}Ra(e,134217728)}};Gc=function(e){if(e.tag===13){var t=Mt(e),r=ht(e,t);if(r!==null){var n=we();Je(r,e,t,n)}Ra(e,t)}};Qc=function(){return H};Yc=function(e,t){var r=H;try{return H=e,t()}finally{H=r}};nl=function(e,t,r){switch(t){case"input":if(Xo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var s=Ys(n);if(!s)throw Error(j(90));jc(n),Xo(n,s)}}}break;case"textarea":Ec(e,r);break;case"select":t=r.value,t!=null&&jr(e,!!r.multiple,t,!1)}};Ic=Ea;zc=ir;var gm={usingClientEntryPoint:!1,Events:[Dn,vr,Ys,Rc,_c,Ea]},qr={findFiberByHostInstance:Zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xm={bundleType:qr.bundleType,version:qr.version,rendererPackageName:qr.rendererPackageName,rendererConfig:qr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Oc(e),e===null?null:e.stateNode},findFiberByHostInstance:qr.findFiberByHostInstance||mm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ns=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ns.isDisabled&&ns.supportsFiber)try{Vs=ns.inject(xm),st=ns}catch{}}_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gm;_e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ia(t))throw Error(j(200));return fm(e,t,null,r)};_e.createRoot=function(e,t){if(!Ia(e))throw Error(j(299));var r=!1,n="",s=gd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=La(e,1,!1,null,null,r,!1,n,s),e[mt]=t.current,kn(e.nodeType===8?e.parentNode:e),new _a(t)};_e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Oc(t),e=e===null?null:e.stateNode,e};_e.flushSync=function(e){return ir(e)};_e.hydrate=function(e,t,r){if(!no(t))throw Error(j(200));return so(null,e,t,!0,r)};_e.hydrateRoot=function(e,t,r){if(!Ia(e))throw Error(j(405));var n=r!=null&&r.hydratedSources||null,s=!1,o="",l=gd;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=hd(t,null,e,1,r??null,s,!1,o,l),e[mt]=t.current,kn(e),n)for(e=0;e<n.length;e++)r=n[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new ro(t)};_e.render=function(e,t,r){if(!no(t))throw Error(j(200));return so(null,e,t,!1,r)};_e.unmountComponentAtNode=function(e){if(!no(e))throw Error(j(40));return e._reactRootContainer?(ir(function(){so(null,null,e,!1,function(){e._reactRootContainer=null,e[mt]=null})}),!0):!1};_e.unstable_batchedUpdates=Ea;_e.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!no(r))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return so(e,t,r,!1,n)};_e.version="18.3.1-next-f1338f8080-20240426";function xd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xd)}catch(e){console.error(e)}}xd(),xc.exports=_e;var vm=xc.exports,Wi=vm;Ho.createRoot=Wi.createRoot,Ho.hydrateRoot=Wi.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ln(){return Ln=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ln.apply(this,arguments)}var $t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($t||($t={}));const Gi="popstate";function ym(e){e===void 0&&(e={});function t(n,s){let{pathname:o,search:l,hash:i}=n.location;return Dl("",{pathname:o,search:l,hash:i},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(n,s){return typeof s=="string"?s:Bs(s)}return wm(t,r,null,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function vd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function bm(){return Math.random().toString(36).substr(2,8)}function Qi(e,t){return{usr:e.state,key:e.key,idx:t}}function Dl(e,t,r,n){return r===void 0&&(r=null),Ln({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ur(t):t,{state:r,key:t&&t.key||n||bm()})}function Bs(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Ur(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function wm(e,t,r,n){n===void 0&&(n={});let{window:s=document.defaultView,v5Compat:o=!1}=n,l=s.history,i=$t.Pop,c=null,u=g();u==null&&(u=0,l.replaceState(Ln({},l.state,{idx:u}),""));function g(){return(l.state||{idx:null}).idx}function f(){i=$t.Pop;let S=g(),m=S==null?null:S-u;u=S,c&&c({action:i,location:w.location,delta:m})}function h(S,m){i=$t.Push;let d=Dl(w.location,S,m);u=g()+1;let p=Qi(d,u),b=w.createHref(d);try{l.pushState(p,"",b)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;s.location.assign(b)}o&&c&&c({action:i,location:w.location,delta:1})}function x(S,m){i=$t.Replace;let d=Dl(w.location,S,m);u=g();let p=Qi(d,u),b=w.createHref(d);l.replaceState(p,"",b),o&&c&&c({action:i,location:w.location,delta:0})}function y(S){let m=s.location.origin!=="null"?s.location.origin:s.location.href,d=typeof S=="string"?S:Bs(S);return d=d.replace(/ $/,"%20"),te(m,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,m)}let w={get action(){return i},get location(){return e(s,l)},listen(S){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Gi,f),c=S,()=>{s.removeEventListener(Gi,f),c=null}},createHref(S){return t(s,S)},createURL:y,encodeLocation(S){let m=y(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:h,replace:x,go(S){return l.go(S)}};return w}var Yi;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Yi||(Yi={}));function km(e,t,r){return r===void 0&&(r="/"),Cm(e,t,r)}function Cm(e,t,r,n){let s=typeof t=="string"?Ur(t):t,o=Or(s.pathname||"/",r);if(o==null)return null;let l=yd(e);Sm(l);let i=null;for(let c=0;i==null&&c<l.length;++c){let u=zm(o);i=_m(l[c],u)}return i}function yd(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let s=(o,l,i)=>{let c={relativePath:i===void 0?o.path||"":i,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};c.relativePath.startsWith("/")&&(te(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let u=Ft([n,c.relativePath]),g=r.concat(c);o.children&&o.children.length>0&&(te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),yd(o.children,t,g,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Lm(u,o.index),routesMeta:g})};return e.forEach((o,l)=>{var i;if(o.path===""||!((i=o.path)!=null&&i.includes("?")))s(o,l);else for(let c of bd(o.path))s(o,l,c)}),t}function bd(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,s=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return s?[o,""]:[o];let l=bd(n.join("/")),i=[];return i.push(...l.map(c=>c===""?o:[o,c].join("/"))),s&&i.push(...l),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function Sm(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Rm(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const jm=/^:[\w-]+$/,Nm=3,Em=2,Pm=1,Tm=10,$m=-2,Ki=e=>e==="*";function Lm(e,t){let r=e.split("/"),n=r.length;return r.some(Ki)&&(n+=$m),t&&(n+=Em),r.filter(s=>!Ki(s)).reduce((s,o)=>s+(jm.test(o)?Nm:o===""?Pm:Tm),n)}function Rm(e,t){return e.length===t.length&&e.slice(0,-1).every((n,s)=>n===t[s])?e[e.length-1]-t[t.length-1]:0}function _m(e,t,r){let{routesMeta:n}=e,s={},o="/",l=[];for(let i=0;i<n.length;++i){let c=n[i],u=i===n.length-1,g=o==="/"?t:t.slice(o.length)||"/",f=Ml({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},g),h=c.route;if(!f)return null;Object.assign(s,f.params),l.push({params:s,pathname:Ft([o,f.pathname]),pathnameBase:Fm(Ft([o,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(o=Ft([o,f.pathnameBase]))}return l}function Ml(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Im(e.path,e.caseSensitive,e.end),s=t.match(r);if(!s)return null;let o=s[0],l=o.replace(/(.)\/+$/,"$1"),i=s.slice(1);return{params:n.reduce((u,g,f)=>{let{paramName:h,isOptional:x}=g;if(h==="*"){let w=i[f]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=i[f];return x&&!y?u[h]=void 0:u[h]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function Im(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),vd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,i,c)=>(n.push({paramName:i,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),n]}function zm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return vd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Or(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Dm(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:s=""}=typeof e=="string"?Ur(e):e;return{pathname:r?r.startsWith("/")?r:Mm(r,t):t,search:Am(n),hash:Bm(s)}}function Mm(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function Ao(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Om(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function wd(e,t){let r=Om(e);return t?r.map((n,s)=>s===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function kd(e,t,r,n){n===void 0&&(n=!1);let s;typeof e=="string"?s=Ur(e):(s=Ln({},e),te(!s.pathname||!s.pathname.includes("?"),Ao("?","pathname","search",s)),te(!s.pathname||!s.pathname.includes("#"),Ao("#","pathname","hash",s)),te(!s.search||!s.search.includes("#"),Ao("#","search","hash",s)));let o=e===""||s.pathname==="",l=o?"/":s.pathname,i;if(l==null)i=r;else{let f=t.length-1;if(!n&&l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),f-=1;s.pathname=h.join("/")}i=f>=0?t[f]:"/"}let c=Dm(s,i),u=l&&l!=="/"&&l.endsWith("/"),g=(o||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||g)&&(c.pathname+="/"),c}const Ft=e=>e.join("/").replace(/\/\/+/g,"/"),Fm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Am=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Bm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Um(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Cd=["post","put","patch","delete"];new Set(Cd);const Hm=["get",...Cd];new Set(Hm);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Rn(){return Rn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Rn.apply(this,arguments)}const oo=v.createContext(null),Sd=v.createContext(null),Wt=v.createContext(null),lo=v.createContext(null),Gt=v.createContext({outlet:null,matches:[],isDataRoute:!1}),jd=v.createContext(null);function Vm(e,t){let{relative:r}=t===void 0?{}:t;On()||te(!1);let{basename:n,navigator:s}=v.useContext(Wt),{hash:o,pathname:l,search:i}=ao(e,{relative:r}),c=l;return n!=="/"&&(c=l==="/"?n:Ft([n,l])),s.createHref({pathname:c,search:i,hash:o})}function On(){return v.useContext(lo)!=null}function Fn(){return On()||te(!1),v.useContext(lo).location}function Nd(e){v.useContext(Wt).static||v.useLayoutEffect(e)}function Ed(){let{isDataRoute:e}=v.useContext(Gt);return e?sh():Wm()}function Wm(){On()||te(!1);let e=v.useContext(oo),{basename:t,future:r,navigator:n}=v.useContext(Wt),{matches:s}=v.useContext(Gt),{pathname:o}=Fn(),l=JSON.stringify(wd(s,r.v7_relativeSplatPath)),i=v.useRef(!1);return Nd(()=>{i.current=!0}),v.useCallback(function(u,g){if(g===void 0&&(g={}),!i.current)return;if(typeof u=="number"){n.go(u);return}let f=kd(u,JSON.parse(l),o,g.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Ft([t,f.pathname])),(g.replace?n.replace:n.push)(f,g.state,g)},[t,n,l,o,e])}function Gm(){let{matches:e}=v.useContext(Gt),t=e[e.length-1];return t?t.params:{}}function ao(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=v.useContext(Wt),{matches:s}=v.useContext(Gt),{pathname:o}=Fn(),l=JSON.stringify(wd(s,n.v7_relativeSplatPath));return v.useMemo(()=>kd(e,JSON.parse(l),o,r==="path"),[e,l,o,r])}function Qm(e,t){return Ym(e,t)}function Ym(e,t,r,n){On()||te(!1);let{navigator:s}=v.useContext(Wt),{matches:o}=v.useContext(Gt),l=o[o.length-1],i=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let u=Fn(),g;if(t){var f;let S=typeof t=="string"?Ur(t):t;c==="/"||(f=S.pathname)!=null&&f.startsWith(c)||te(!1),g=S}else g=u;let h=g.pathname||"/",x=h;if(c!=="/"){let S=c.replace(/^\//,"").split("/");x="/"+h.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=km(e,{pathname:x}),w=qm(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},i,S.params),pathname:Ft([c,s.encodeLocation?s.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:Ft([c,s.encodeLocation?s.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,r,n);return t&&w?v.createElement(lo.Provider,{value:{location:Rn({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:$t.Pop}},w):w}function Km(){let e=nh(),t=Um(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),r?v.createElement("pre",{style:s},r):null,null)}const Xm=v.createElement(Km,null);class Jm extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?v.createElement(Gt.Provider,{value:this.props.routeContext},v.createElement(jd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Zm(e){let{routeContext:t,match:r,children:n}=e,s=v.useContext(oo);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(Gt.Provider,{value:t},n)}function qm(e,t,r,n){var s;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var o;if(!r)return null;if(r.errors)e=r.matches;else if((o=n)!=null&&o.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,i=(s=r)==null?void 0:s.errors;if(i!=null){let g=l.findIndex(f=>f.route.id&&(i==null?void 0:i[f.route.id])!==void 0);g>=0||te(!1),l=l.slice(0,Math.min(l.length,g+1))}let c=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let g=0;g<l.length;g++){let f=l[g];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=g),f.route.id){let{loaderData:h,errors:x}=r,y=f.route.loader&&h[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||y){c=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((g,f,h)=>{let x,y=!1,w=null,S=null;r&&(x=i&&f.route.id?i[f.route.id]:void 0,w=f.route.errorElement||Xm,c&&(u<0&&h===0?(oh("route-fallback"),y=!0,S=null):u===h&&(y=!0,S=f.route.hydrateFallbackElement||null)));let m=t.concat(l.slice(0,h+1)),d=()=>{let p;return x?p=w:y?p=S:f.route.Component?p=v.createElement(f.route.Component,null):f.route.element?p=f.route.element:p=g,v.createElement(Zm,{match:f,routeContext:{outlet:g,matches:m,isDataRoute:r!=null},children:p})};return r&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?v.createElement(Jm,{location:r.location,revalidation:r.revalidation,component:w,error:x,children:d(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):d()},null)}var Pd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Pd||{}),Td=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Td||{});function eh(e){let t=v.useContext(oo);return t||te(!1),t}function th(e){let t=v.useContext(Sd);return t||te(!1),t}function rh(e){let t=v.useContext(Gt);return t||te(!1),t}function $d(e){let t=rh(),r=t.matches[t.matches.length-1];return r.route.id||te(!1),r.route.id}function nh(){var e;let t=v.useContext(jd),r=th(),n=$d();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function sh(){let{router:e}=eh(Pd.UseNavigateStable),t=$d(Td.UseNavigateStable),r=v.useRef(!1);return Nd(()=>{r.current=!0}),v.useCallback(function(s,o){o===void 0&&(o={}),r.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,Rn({fromRouteId:t},o)))},[e,t])}const Xi={};function oh(e,t,r){Xi[e]||(Xi[e]=!0)}function lh(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ct(e){te(!1)}function ah(e){let{basename:t="/",children:r=null,location:n,navigationType:s=$t.Pop,navigator:o,static:l=!1,future:i}=e;On()&&te(!1);let c=t.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:c,navigator:o,static:l,future:Rn({v7_relativeSplatPath:!1},i)}),[c,i,o,l]);typeof n=="string"&&(n=Ur(n));let{pathname:g="/",search:f="",hash:h="",state:x=null,key:y="default"}=n,w=v.useMemo(()=>{let S=Or(g,c);return S==null?null:{location:{pathname:S,search:f,hash:h,state:x,key:y},navigationType:s}},[c,g,f,h,x,y,s]);return w==null?null:v.createElement(Wt.Provider,{value:u},v.createElement(lo.Provider,{children:r,value:w}))}function ih(e){let{children:t,location:r}=e;return Qm(Ol(t),r)}new Promise(()=>{});function Ol(e,t){t===void 0&&(t=[]);let r=[];return v.Children.forEach(e,(n,s)=>{if(!v.isValidElement(n))return;let o=[...t,s];if(n.type===v.Fragment){r.push.apply(r,Ol(n.props.children,o));return}n.type!==Ct&&te(!1),!n.props.index||!n.props.children||te(!1);let l={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=Ol(n.props.children,o)),r.push(l)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Us(){return Us=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Us.apply(this,arguments)}function Ld(e,t){if(e==null)return{};var r={},n=Object.keys(e),s,o;for(o=0;o<n.length;o++)s=n[o],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function ch(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function uh(e,t){return e.button===0&&(!t||t==="_self")&&!ch(e)}const dh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ph=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],fh="6";try{window.__reactRouterVersion=fh}catch{}const mh=v.createContext({isTransitioning:!1}),hh="startTransition",Ji=lp[hh];function gh(e){let{basename:t,children:r,future:n,window:s}=e,o=v.useRef();o.current==null&&(o.current=ym({window:s,v5Compat:!0}));let l=o.current,[i,c]=v.useState({action:l.action,location:l.location}),{v7_startTransition:u}=n||{},g=v.useCallback(f=>{u&&Ji?Ji(()=>c(f)):c(f)},[c,u]);return v.useLayoutEffect(()=>l.listen(g),[l,g]),v.useEffect(()=>lh(n),[n]),v.createElement(ah,{basename:t,children:r,location:i.location,navigationType:i.action,navigator:l,future:n})}const xh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tr=v.forwardRef(function(t,r){let{onClick:n,relative:s,reloadDocument:o,replace:l,state:i,target:c,to:u,preventScrollReset:g,viewTransition:f}=t,h=Ld(t,dh),{basename:x}=v.useContext(Wt),y,w=!1;if(typeof u=="string"&&vh.test(u)&&(y=u,xh))try{let p=new URL(window.location.href),b=u.startsWith("//")?new URL(p.protocol+u):new URL(u),C=Or(b.pathname,x);b.origin===p.origin&&C!=null?u=C+b.search+b.hash:w=!0}catch{}let S=Vm(u,{relative:s}),m=bh(u,{replace:l,state:i,target:c,preventScrollReset:g,relative:s,viewTransition:f});function d(p){n&&n(p),p.defaultPrevented||m(p)}return v.createElement("a",Us({},h,{href:y||S,onClick:w||o?n:d,ref:r,target:c}))}),Zi=v.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:s=!1,className:o="",end:l=!1,style:i,to:c,viewTransition:u,children:g}=t,f=Ld(t,ph),h=ao(c,{relative:f.relative}),x=Fn(),y=v.useContext(Sd),{navigator:w,basename:S}=v.useContext(Wt),m=y!=null&&wh(h)&&u===!0,d=w.encodeLocation?w.encodeLocation(h).pathname:h.pathname,p=x.pathname,b=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;s||(p=p.toLowerCase(),b=b?b.toLowerCase():null,d=d.toLowerCase()),b&&S&&(b=Or(b,S)||b);const C=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let T=p===d||!l&&p.startsWith(d)&&p.charAt(C)==="/",N=b!=null&&(b===d||!l&&b.startsWith(d)&&b.charAt(d.length)==="/"),L={isActive:T,isPending:N,isTransitioning:m},F=T?n:void 0,z;typeof o=="function"?z=o(L):z=[o,T?"active":null,N?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let G=typeof i=="function"?i(L):i;return v.createElement(tr,Us({},f,{"aria-current":F,className:z,ref:r,style:G,to:c,viewTransition:u}),typeof g=="function"?g(L):g)});var Fl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Fl||(Fl={}));var qi;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(qi||(qi={}));function yh(e){let t=v.useContext(oo);return t||te(!1),t}function bh(e,t){let{target:r,replace:n,state:s,preventScrollReset:o,relative:l,viewTransition:i}=t===void 0?{}:t,c=Ed(),u=Fn(),g=ao(e,{relative:l});return v.useCallback(f=>{if(uh(f,r)){f.preventDefault();let h=n!==void 0?n:Bs(u)===Bs(g);c(e,{replace:h,state:s,preventScrollReset:o,relative:l,viewTransition:i})}},[u,c,g,n,s,r,e,o,l,i])}function wh(e,t){t===void 0&&(t={});let r=v.useContext(mh);r==null&&te(!1);let{basename:n}=yh(Fl.useViewTransitionState),s=ao(e,{relative:t.relative});if(!r.isTransitioning)return!1;let o=Or(r.currentLocation.pathname,n)||r.currentLocation.pathname,l=Or(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Ml(s.pathname,l)!=null||Ml(s.pathname,o)!=null}function ec(e){return`px-4 py-2 rounded-md font-medium transition-colors ${e?"bg-blue-600 text-white":"text-gray-600 hover:text-gray-800"}`}function kh(){return a.jsx("nav",{className:"w-full bg-white border-b",children:a.jsxs("div",{className:"container mx-auto flex items-center justify-between py-4 px-4",children:[a.jsx(tr,{to:"/",className:"text-2xl font-bold text-gray-800",children:"ToggleBox"}),a.jsxs("div",{className:"bg-white rounded-lg p-1",children:[a.jsx(Zi,{to:"/interactive",className:({isActive:e})=>ec(e),children:"🎨 Stylesheet Builder"}),a.jsx(Zi,{to:"/color-picker",className:({isActive:e})=>ec(e),children:"Color Picker"})]})]})})}const Ch=()=>a.jsxs("div",{"data-testid":"html-template",className:"preview-template p-6 max-w-4xl mx-auto bg-white",children:[a.jsxs("section",{className:"mb-8",children:[a.jsx("h1",{className:"preview-heading text-3xl font-bold mb-4 text-gray-900",children:"Main Heading - Typography Showcase"}),a.jsx("h2",{className:"preview-subheading text-2xl font-semibold mb-3 text-gray-800",children:"Secondary Heading - Web Design Elements"}),a.jsx("h3",{className:"text-xl font-medium mb-3 text-gray-700",children:"Third Level Heading - Visual Hierarchy"}),a.jsx("h4",{className:"text-lg font-medium mb-2 text-gray-600",children:"Fourth Level Heading - Content Structure"}),a.jsx("h5",{className:"text-base font-medium mb-2 text-gray-600",children:"Fifth Level Heading - Detail Organization"}),a.jsx("h6",{className:"text-sm font-medium mb-2 text-gray-500",children:"Sixth Level Heading - Fine Print"})]}),a.jsxs("section",{className:"mb-8",children:[a.jsx("p",{className:"preview-text text-base leading-relaxed mb-4 text-gray-700",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This paragraph demonstrates how text flows and wraps in different container widths. Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed."}),a.jsx("p",{className:"preview-text text-base leading-relaxed mb-4 text-gray-700",children:"The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet and is commonly used for font testing. Special characters include: © 2024 ToggleBox™, user@example.com, $129.99, 50% off, and symbols like &, @, #, %, and *."}),a.jsx("p",{className:"preview-text text-base leading-relaxed mb-4 text-gray-600","data-testid":"responsive-text",children:a.jsx("span",{className:"text-sm md:text-base lg:text-lg",children:"This paragraph demonstrates responsive typography with different sizes across screen widths. It showcases how text can adapt to various viewport dimensions while maintaining readability."})})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"flex flex-wrap gap-4 mb-4",children:[a.jsx("button",{className:"preview-button px-4 py-2 rounded-md font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700",children:"Primary Button"}),a.jsx("button",{className:"preview-button px-4 py-2 rounded-md font-medium transition-colors bg-gray-200 text-gray-800 hover:bg-gray-300",children:"Secondary Button"}),a.jsx("button",{className:"preview-button px-4 py-2 rounded-md font-medium transition-colors border border-blue-600 text-blue-600 hover:bg-blue-50",children:"Outline Button"})]})}),a.jsx("section",{className:"mb-8",children:a.jsxs("form",{className:"bg-gray-50 p-6 rounded-lg",children:[a.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-800",children:"Sample Form"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[a.jsxs("div",{children:[a.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email Address"}),a.jsx("input",{type:"email",id:"email",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"your@email.com"})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-1",children:"Password"}),a.jsx("input",{type:"password",id:"password",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"••••••••"})]})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-1",children:"Message"}),a.jsx("textarea",{id:"message",rows:"4",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Your message here..."})]}),a.jsx("button",{type:"submit",className:"preview-button px-6 py-2 rounded-md font-medium transition-colors bg-green-600 text-white hover:bg-green-700",children:"Submit Form"})]})}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3 text-gray-800",children:"Unordered List"}),a.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[a.jsx("li",{children:"First list item with standard content"}),a.jsx("li",{children:"Second item demonstrating list styling"}),a.jsxs("li",{children:["Third item with ",a.jsx("strong",{children:"bold text"})," and ",a.jsx("em",{children:"emphasis"})]}),a.jsxs("li",{children:["Fourth item containing a ",a.jsx("a",{href:"#",className:"text-blue-600 hover:underline",children:"hyperlink example"})]})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3 text-gray-800",children:"Ordered List"}),a.jsxs("ol",{className:"list-decimal list-inside space-y-2 text-gray-700",children:[a.jsx("li",{children:"First numbered item"}),a.jsx("li",{children:"Second numbered item"}),a.jsx("li",{children:"Third item with nested content"}),a.jsx("li",{children:"Fourth item completing the sequence"})]})]})]})}),a.jsxs("section",{className:"mb-8",children:[a.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-800",children:"Responsive Card Grid"}),a.jsxs("div",{"data-testid":"responsive-grid",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[a.jsxs("div",{"data-testid":"card-1",className:"preview-card p-4 rounded-lg shadow-sm border bg-white",children:[a.jsx("h4",{className:"font-semibold mb-2 text-gray-800",children:"Card Title One"}),a.jsx("p",{className:"text-gray-600 text-sm",children:"This card demonstrates responsive layout behavior and shadow effects."})]}),a.jsxs("div",{"data-testid":"card-2",className:"preview-card p-4 rounded-lg shadow-sm border bg-white",children:[a.jsx("h4",{className:"font-semibold mb-2 text-gray-800",children:"Card Title Two"}),a.jsx("p",{className:"text-gray-600 text-sm",children:"Each card adapts to different screen sizes while maintaining consistent spacing."})]}),a.jsxs("div",{"data-testid":"card-3",className:"preview-card p-4 rounded-lg shadow-sm border bg-white",children:[a.jsx("h4",{className:"font-semibold mb-2 text-gray-800",children:"Card Title Three"}),a.jsx("p",{className:"text-gray-600 text-sm",children:"The grid system demonstrates mobile-first responsive design principles."})]})]})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{"data-testid":"gradient-showcase",className:"bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg text-white text-center",children:[a.jsx("h3",{className:"text-xl font-bold mb-2",children:"Gradient Background Demonstration"}),a.jsx("p",{className:"text-purple-100",children:"This section showcases gradient backgrounds that can be dynamically modified for color, direction, and stop points in the CSS preview engine."})]})}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-gray-100 p-6 rounded-lg",children:[a.jsx("h3",{className:"text-lg font-semibold mb-3 text-gray-800",children:"Additional Typography Testing"}),a.jsxs("p",{className:"text-gray-700 mb-3",children:[a.jsx("strong",{children:"Bold text"}),", ",a.jsx("em",{children:"italic text"}),", ",a.jsx("u",{children:"underlined text"}),",",a.jsx("span",{className:"line-through",children:"strikethrough text"}),", and",a.jsx("code",{className:"bg-gray-200 px-1 rounded font-mono",children:"inline code"}),"."]}),a.jsx("blockquote",{className:"border-l-4 border-blue-500 pl-4 italic text-gray-600",children:'"This blockquote demonstrates how quoted content appears with custom styling and proper semantic markup for accessibility and SEO."'})]})})]});class Al{static sanitizeHtml(t){return!t||typeof t!="string"?"":t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"").replace(/\son\w+\s*=\s*["'][^"']*["']/gi,"").replace(/\son\w+\s*=\s*[^>\s]+/gi,"").replace(/javascript:/gi,"")}static sanitizeCss(t){return!t||typeof t!="string"?"":t.replace(/@import\s+[^;]+;?/gi,"").replace(/expression\s*\([^)]*\)/gi,"").replace(/javascript:/gi,"").replace(/vbscript:/gi,"").replace(/behavior\s*:/gi,"").replace(/-moz-binding/gi,"")}static createSecureDocument(t,r){const n=this.sanitizeHtml(t),s=this.sanitizeCss(r);return`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; img-src data: https:; font-src data: https:;">
        <title>ToggleBox Preview</title>
        <style id="dynamic-css">
          ${this.getBaseStyles()}
          /* Dynamic CSS from ToggleBox */
          ${s}
        </style>
      </head>
      <body>
        ${n}
      </body>
      </html>
    `}static getBaseStyles(){return`
      /* Reset and base styles */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
          'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
          sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.5;
        color: #333;
        background: #ffffff;
        overflow-x: auto;
        min-height: 100vh;
      }
    `}static validateHtmlSecurity(t){const r=[{pattern:/<script/i,description:"Script tags"},{pattern:/on\w+\s*=/i,description:"Event handlers"},{pattern:/javascript:/i,description:"JavaScript protocols"},{pattern:/<iframe/i,description:"Iframe elements"},{pattern:/<embed/i,description:"Embed elements"},{pattern:/<object/i,description:"Object elements"},{pattern:/data:(?!image\/)/i,description:"Non-image data URLs"}],n=[];for(const{pattern:s,description:o}of r)s.test(t)&&n.push(o);return{isSecure:n.length===0,violations:n,sanitizedContent:n.length>0?this.sanitizeHtml(t):t}}static validateCssSecurity(t){const r=[{pattern:/@import/i,description:"CSS imports"},{pattern:/expression\s*\(/i,description:"CSS expressions"},{pattern:/javascript:/i,description:"JavaScript protocols"},{pattern:/vbscript:/i,description:"VBScript protocols"},{pattern:/behavior\s*:/i,description:"CSS behaviors"},{pattern:/-moz-binding/i,description:"XBL bindings"}],n=[];for(const{pattern:s,description:o}of r)s.test(t)&&n.push(o);return{isSecure:n.length===0,violations:n,sanitizedContent:n.length>0?this.sanitizeCss(t):t}}static createErrorDocument(t="Content could not be loaded"){return`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview Error</title>
        <style>
          ${this.getBaseStyles()}
          .error-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            text-align: center;
            padding: 2rem;
          }
          .error-icon { font-size: 3rem; margin-bottom: 1rem; }
          .error-title { font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem; color: #dc2626; }
          .error-message { color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="error-container">
          <div class="error-icon">⚠️</div>
          <h2 class="error-title">Preview Error</h2>
          <p class="error-message">${t}</p>
        </div>
      </body>
      </html>
    `}}const Sh=({htmlContent:e,cssContent:t,sanitizer:r=Al})=>{const[n,s]=v.useState(null),[o,l]=v.useState(!1),i=v.useMemo(()=>{try{if(s(null),l(!0),!e&&!t)return r.createErrorDocument("No content to display");const f=r.validateHtmlSecurity(e||""),h=r.validateCssSecurity(t||"");f.isSecure||console.warn("HTML security violations detected:",f.violations),h.isSecure||console.warn("CSS security violations detected:",h.violations);const x=r.createSecureDocument(f.sanitizedContent,h.sanitizedContent);return l(!1),x}catch(f){return console.error("Error generating iframe content:",f),s(f.message),l(!1),r.createErrorDocument("Failed to generate content")}},[e,t,r]),c=v.useMemo(()=>{try{return`data:text/html;charset=utf-8,${encodeURIComponent(i)}`}catch(f){return console.error("Error encoding iframe content:",f),s("Failed to encode content"),"data:text/html;charset=utf-8,"+encodeURIComponent(Al.createErrorDocument("Failed to encode content"))}},[i]),u=v.useCallback(()=>{s(null),l(!0),setTimeout(()=>l(!1),100)},[]),g=v.useCallback(()=>{const f=r.validateHtmlSecurity(e||""),h=r.validateCssSecurity(t||"");return{isSecure:f.isSecure&&h.isSecure,htmlViolations:f.violations,cssViolations:h.violations,totalViolations:f.violations.length+h.violations.length}},[e,t,r]);return{iframeSrc:c,isLoading:o,error:n,refreshContent:u,getSecurityInfo:g,secureContent:i}},jh=()=>{const e=v.useCallback(r=>{if(!r||typeof r!="string")return{isValid:!1,error:"HTML content must be a non-empty string"};const n=[/<script/i,/on\w+\s*=/i,/javascript:/i,/<iframe/i,/<embed/i,/<object/i];for(const s of n)if(s.test(r))return{isValid:!1,error:`Content contains potentially unsafe patterns: ${s}`};return{isValid:!0,error:null}},[]),t=v.useCallback(r=>!r||typeof r!="string"?r:r.replace(/@import\s+[^;]+;?/gi,"").replace(/expression\s*\([^)]*\)/gi,"").replace(/javascript:/gi,"").replace(/vbscript:/gi,""),[]);return{validateContent:e,updateCss:t}},Rd=v.forwardRef(({src:e,className:t="",height:r="600px",allowScripts:n=!1,onLoad:s,onError:o,loading:l=!1,error:i=null,title:c="ToggleBox CSS Preview - Secure Sandbox Environment",style:u={}},g)=>{const f=v.useRef(null),h=g||f;v.useEffect(()=>{const d=h.current;if(!d)return;const p=()=>{s==null||s()},b=C=>{console.warn("IframeRenderer: Failed to load content",C),o==null||o(C)};return d.addEventListener("load",p),d.addEventListener("error",b),()=>{d.removeEventListener("load",p),d.removeEventListener("error",b)}},[s,o,h]);const x={width:"100%",height:r,border:"none",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)",backgroundColor:"#ffffff",transition:"opacity 0.2s ease",...u},y={position:"relative",display:"inline-block",width:"100%"},w={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:10,display:l?"block":"none"},S={position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.9)",display:i?"flex":"none",alignItems:"center",justifyContent:"center",flexDirection:"column",zIndex:20,borderRadius:"8px",border:"2px dashed #dc2626"},m=n?"allow-same-origin allow-scripts":"allow-same-origin";return a.jsxs("div",{className:`iframe-preview-container ${t}`.trim(),style:y,children:[a.jsx("div",{style:w,children:a.jsxs("div",{className:"loading-spinner",children:[a.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"}),a.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Loading preview..."})]})}),a.jsx("div",{style:S,children:a.jsxs("div",{className:"text-center p-6",children:[a.jsx("div",{className:"text-red-500 text-4xl mb-2",children:"⚠️"}),a.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-1",children:"Preview Error"}),a.jsx("p",{className:"text-sm text-gray-600 mb-3",children:i}),a.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"Retry"})]})}),a.jsx("iframe",{ref:h,"data-testid":"preview-iframe",title:c,src:e,sandbox:m,style:{...x,opacity:l||i?.5:1},loading:"lazy",referrerPolicy:"no-referrer",allow:"",credentialless:""})]})});Rd.displayName="IframeRenderer";const Nh=({htmlContent:e="",cssContent:t="",className:r="",height:n="600px",onLoad:s,onError:o,allowScripts:l=!1,showLoadingState:i=!0,showErrorState:c=!0,customSanitizer:u=Al})=>{const{iframeSrc:g,isLoading:f,error:h,getSecurityInfo:x}=Sh({htmlContent:e,cssContent:t,sanitizer:u});jh();const y=()=>{const S=x();S.totalViolations>0&&console.warn("Security violations detected in preview content:",S),s==null||s()},w=S=>{console.error("IframePreview error:",S),o==null||o(S)};return h&&!c&&console.error("IframePreview: Critical error occurred but error display is disabled:",h),a.jsxs("div",{className:"iframe-preview-wrapper",children:[a.jsx(Rd,{src:g,height:n,allowScripts:l,onLoad:y,onError:w,loading:i&&f,error:c?h:null,className:r}),!1]})},io=({htmlContent:e="",cssContent:t="",className:r="",height:n="600px",onLoad:s,onError:o,allowScripts:l=!1})=>a.jsx(Nh,{htmlContent:e,cssContent:t,className:r,height:n,onLoad:s,onError:o,allowScripts:l,showLoadingState:!0,showErrorState:!0});class Eh{constructor(){this.template=null,this.components=null,this.options={}}setTemplate(t){return this.template=t,this}withComponents(t){return this.components=t,this}withOptions(t){return this.options={...this.options,...t},this}build(){if(!this.template||!this.components)throw new Error("Template and ComponentLibrary must be set before building");const t=this.getTemplateConfig(this.template);return this.components.render(t,this.options)}getTemplateConfig(t){const r={sample:{sections:["hero","typography","buttons","forms","lists","cards","gradient"],layout:"standard",defaultOptions:{title:"Main Heading - Typography Showcase",subtitle:"Web Design Elements - Visual Hierarchy",showButtons:!0,cardCount:3,showActions:!1,showValidation:!0}},sixCards:{sections:["hero","alerts","cards","buttons"],layout:"showcase",defaultOptions:{title:"Six Cards Interactive Demo",subtitle:"Real-time CSS Styling with Live Preview",cardCount:6,showActions:!0,showVariants:!0,containerClass:"preview-template p-6 max-w-6xl mx-auto bg-white"}},professional:{sections:["hero","alerts","cards","forms","buttons"],layout:"professional",defaultOptions:{title:"Professional Dashboard Demo",subtitle:"Advanced UI Components with Interactive Styling",cardCount:4,showActions:!0,showVariants:!0,showValidation:!0,containerClass:"preview-template p-8 max-w-7xl mx-auto bg-white"}},minimal:{sections:["hero","buttons","cards"],layout:"minimal",defaultOptions:{title:"Minimal Preview",subtitle:"",cardCount:2,showActions:!1,showVariants:!1,containerClass:"preview-template p-4 max-w-3xl mx-auto bg-white"}},typography:{sections:["typography","lists"],layout:"standard",defaultOptions:{containerClass:"preview-template p-6 max-w-4xl mx-auto bg-white typography-focus"}},forms:{sections:["hero","forms","buttons"],layout:"standard",defaultOptions:{title:"Form Components Demo",subtitle:"Interactive Form Elements and Validation",showValidation:!0,showVariants:!1}},alerts:{sections:["hero","alerts","buttons"],layout:"standard",defaultOptions:{title:"Alert Components Showcase",subtitle:"Different alert types and styling options"}}},n=r[t];return n?{...n,defaultOptions:{...n.defaultOptions,...this.options}}:(console.warn(`Template "${t}" not found, using "sample" template`),r.sample)}getAvailableTemplates(){return["sample","sixCards","professional","minimal","typography","forms","alerts"]}getTemplateDescription(t){return{sample:"Comprehensive showcase with all component types",sixCards:"Interactive demo focused on card layouts",professional:"Advanced UI components for dashboard-style layouts",minimal:"Simple preview with essential components",typography:"Text-focused template for typography testing",forms:"Form elements and validation showcase",alerts:"Alert components with different states and styles"}[t]||"Template description not available"}reset(){return this.template=null,this.components=null,this.options={},this}validateTemplate(t){const r=this.getTemplateConfig(t),n=[];return(!r.sections||!Array.isArray(r.sections))&&n.push("Template must have a sections array"),r.sections&&r.sections.length===0&&n.push("Template must have at least one section"),r.layout||n.push("Template must specify a layout"),{isValid:n.length===0,errors:n}}}class Ph{constructor(){this.components={hero:this.createHeroComponent,typography:this.createTypographyComponent,buttons:this.createButtonsComponent,cards:this.createCardsComponent,forms:this.createFormsComponent,alerts:this.createAlertsComponent,lists:this.createListsComponent,gradient:this.createGradientComponent}}render(t,r={}){const{sections:n,layout:s}=t,o=n.map(l=>{const i=this.components[l.replace("-showcase","").replace("cards-","cards").replace("buttons-system","buttons")];return i?i.call(this,r):""}).filter(Boolean);return this.wrapInLayout(o.join(`
`),s,r)}createHeroComponent(t={}){const{title:r="Component Showcase",subtitle:n="Real-time CSS Preview Engine",showButtons:s=!0}=t;return`
      <section class="mb-10">
        <div class="gradient-showcase text-center p-8 rounded-lg">
          <h1 class="preview-heading text-4xl font-bold mb-4 text-gray-900">${r}</h1>
          ${n?`<p class="text-lg mb-6 text-gray-700">${n}</p>`:""}
          ${s?`
            <div class="flex justify-center gap-4">
              <button class="preview-button btn-primary px-6 py-3 rounded-lg font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700">Get Started</button>
              <button class="preview-button btn-secondary px-6 py-3 rounded-lg font-medium transition-colors bg-gray-200 text-gray-800 hover:bg-gray-300">Learn More</button>
            </div>
          `:""}
        </div>
      </section>
    `}createTypographyComponent(t={}){return`
      <section class="mb-8">
        <h1 class="preview-heading text-3xl font-bold mb-4 text-gray-900">Main Heading - Typography Showcase</h1>
        <h2 class="preview-subheading text-2xl font-semibold mb-3 text-gray-800">Secondary Heading - Web Design Elements</h2>
        <h3 class="text-xl font-medium mb-3 text-gray-700">Third Level Heading</h3>
        <h4 class="text-lg font-medium mb-2 text-gray-600">Fourth Level Heading</h4>
        <h5 class="text-base font-medium mb-2 text-gray-600">Fifth Level Heading</h5>
        <h6 class="text-sm font-medium mb-2 text-gray-500">Sixth Level Heading</h6>
        
        <div class="mt-6">
          <p class="preview-text text-base leading-relaxed mb-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            This paragraph demonstrates how text flows and wraps in different container widths. Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed.
          </p>
          <p class="preview-text text-base leading-relaxed mb-4 text-gray-700">
            The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet and is commonly used for font testing. Special characters include: © 2024 ToggleBox™, user@example.com, $129.99, 50% off, and symbols like &amp;, @, #, %, and *.
          </p>
          <p class="preview-text text-base leading-relaxed mb-4 text-gray-600" data-testid="responsive-text">
            <span class="text-sm md:text-base lg:text-lg">
              This paragraph demonstrates responsive typography with different sizes across screen widths. It showcases how text can adapt to various viewport dimensions while maintaining readability.
            </span>
          </p>
          <blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-600 mt-4">
            "This blockquote demonstrates how quoted content appears with custom styling and proper semantic markup for accessibility and SEO."
          </blockquote>
        </div>
      </section>
    `}createButtonsComponent(t={}){const{showVariants:r=!0}=t;return`
      <section class="mb-8">
        <h3 class="text-lg font-semibold mb-4 text-gray-800">Interactive Buttons</h3>
        <div class="flex flex-wrap gap-4">
          <button class="preview-button px-4 py-2 rounded-md font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700">
            Primary Button
          </button>
          <button class="preview-button px-4 py-2 rounded-md font-medium transition-colors bg-gray-200 text-gray-800 hover:bg-gray-300">
            Secondary Button
          </button>
          ${r?`
            <button class="preview-button px-4 py-2 rounded-md font-medium transition-colors border border-blue-600 text-blue-600 hover:bg-blue-50">
              Outline Button
            </button>
            <button class="preview-button px-4 py-2 rounded-md font-medium transition-colors bg-green-600 text-white hover:bg-green-700">
              Success Button
            </button>
            <button class="preview-button px-4 py-2 rounded-md font-medium transition-colors bg-red-600 text-white hover:bg-red-700">
              Danger Button
            </button>
          `:""}
        </div>
      </section>
    `}createCardsComponent(t={}){const{cardCount:r=3,showActions:n=!0}=t;return`
      <section class="mb-8">
        <h3 class="text-lg font-semibold mb-4 text-gray-800">Responsive Card Grid</h3>
        <div data-testid="responsive-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          ${Array.from({length:r},(o,l)=>`
      <div data-testid="card-${l+1}" class="preview-card p-6 rounded-lg shadow-sm border bg-white">
        <h4 class="font-semibold mb-3 text-gray-800">Card Title ${l+1}</h4>
        <p class="text-gray-600 text-sm mb-4">
          This card demonstrates responsive layout behavior and styling effects. Each card adapts to different screen sizes.
        </p>
        ${n?`
          <div class="flex gap-2">
            <button class="preview-button px-3 py-1 text-sm rounded bg-blue-500 text-white hover:bg-blue-600">Action</button>
            <button class="preview-button px-3 py-1 text-sm rounded border border-gray-300 text-gray-700 hover:bg-gray-50">Cancel</button>
          </div>
        `:""}
      </div>
    `).join("")}
        </div>
      </section>
    `}createAlertsComponent(t={}){const{alertStyles:r={}}=t;return`
      <section class="mb-8">
        <h3 class="text-lg font-semibold mb-4 text-gray-800">Alert Components</h3>
        <div class="space-y-4">
          <div class="alert alert-info p-4 rounded-lg border border-blue-200 bg-blue-50">
            <div class="flex items-center">
              <div class="info-icon mr-3 text-blue-600">ℹ️</div>
              <div>
                <h4 class="font-medium text-blue-800">Information Alert</h4>
                <p class="text-blue-700 text-sm">This is an informational message with helpful details.</p>
              </div>
            </div>
          </div>
          
          <div class="alert alert-success p-4 rounded-lg border border-green-200 bg-green-50">
            <div class="flex items-center">
              <div class="success-icon mr-3 text-green-600">✅</div>
              <div>
                <h4 class="font-medium text-green-800">Success Alert</h4>
                <p class="text-green-700 text-sm">Operation completed successfully!</p>
              </div>
            </div>
          </div>
          
          <div class="alert alert-warning p-4 rounded-lg border border-yellow-200 bg-yellow-50">
            <div class="flex items-center">
              <div class="warning-icon mr-3 text-yellow-600">⚠️</div>
              <div>
                <h4 class="font-medium text-yellow-800">Warning Alert</h4>
                <p class="text-yellow-700 text-sm">Please review this information carefully.</p>
              </div>
            </div>
          </div>
          
          <div class="alert alert-error p-4 rounded-lg border border-red-200 bg-red-50">
            <div class="flex items-center">
              <div class="error-icon mr-3 text-red-600">❌</div>
              <div>
                <h4 class="font-medium text-red-800">Error Alert</h4>
                <p class="text-red-700 text-sm">An error occurred. Please try again.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}createFormsComponent(t={}){const{showValidation:r=!0}=t;return`
      <section class="mb-8">
        <form class="bg-gray-50 p-6 rounded-lg">
          <h3 class="text-lg font-semibold mb-4 text-gray-800">Sample Form</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
              ${r?`<p class="text-xs text-gray-500 mt-1">We'll never share your email</p>`:""}
            </div>
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                id="password"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
            </div>
          </div>
          <div class="mb-4">
            <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              rows="4"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message here..."
            ></textarea>
          </div>
          <button type="submit" class="preview-button px-6 py-2 rounded-md font-medium transition-colors bg-green-600 text-white hover:bg-green-700">
            Submit Form
          </button>
        </form>
      </section>
    `}createListsComponent(t={}){return`
      <section class="mb-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 class="text-lg font-semibold mb-3 text-gray-800">Unordered List</h3>
            <ul class="list-disc list-inside space-y-2 text-gray-700">
              <li>First list item with standard content</li>
              <li>Second item demonstrating list styling</li>
              <li>Third item with <strong>bold text</strong> and <em>emphasis</em></li>
              <li>Fourth item with <a href="#" class="text-blue-600 hover:underline">hyperlink example</a></li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-3 text-gray-800">Ordered List</h3>
            <ol class="list-decimal list-inside space-y-2 text-gray-700">
              <li>First numbered item</li>
              <li>Second numbered item</li>
              <li>Third item with nested content</li>
              <li>Fourth item completing the sequence</li>
            </ol>
          </div>
        </div>
      </section>
    `}createGradientComponent(t={}){const{gradientDirection:r="to-r",colors:n=["purple-500","pink-500"]}=t;return`
      <section class="mb-8">
        <div 
          data-testid="gradient-showcase" 
          class="bg-gradient-${r} from-${n[0]} to-${n[1]} p-8 rounded-lg text-white text-center"
        >
          <h3 class="text-xl font-bold mb-2">Gradient Background Demonstration</h3>
          <p class="text-purple-100">
            This section showcases gradient backgrounds that can be dynamically modified 
            for color, direction, and stop points in the CSS preview engine.
          </p>
        </div>
      </section>
    `}wrapInLayout(t,r="standard",n={}){const{containerClass:s="preview-template p-6 max-w-4xl mx-auto bg-white"}=n,o={standard:`<div data-testid="html-template" class="${s}">${t}</div>`,showcase:`<div data-testid="html-template" class="${s} showcase-layout">${t}</div>`,professional:`<div data-testid="html-template" class="${s} professional-layout">${t}</div>`,minimal:`<div data-testid="html-template" class="${s} minimal-layout">${t}</div>`};return o[r]||o.standard}}class Th{constructor(){this.builder=new Eh,this.components=new Ph}generateContent(t,r={}){try{return this.builder.setTemplate(t).withComponents(this.components).withOptions(r).build()}catch(n){return console.error("Content generation failed:",n),this.generateFallbackContent(n.message)}}generateSampleHtmlContent(t={}){return this.generateContent("sample",t)}generateSixCardsContent(t={},r={}){return this.generateContent("sixCards",{...r,alertStyles:t})}generateProContent(t={},r={}){return this.generateContent("professional",{...r,alertStyles:t})}generateMinimalContent(t={}){return this.generateContent("minimal",t)}generateTypographyContent(t={}){return this.generateContent("typography",t)}generateFormContent(t={}){return this.generateContent("forms",t)}generateAlertContent(t={}){return this.generateContent("alerts",t)}generateCustomContent(t,r={}){const n={sections:t,layout:r.layout||"standard",defaultOptions:r};return this.components.render(n,r)}getAvailableTemplates(){return this.builder.getAvailableTemplates()}getTemplateDescription(t){return this.builder.getTemplateDescription(t)}validateContent(t){return Lh(t)}generateFallbackContent(t="Content generation failed"){return`
      <div data-testid="html-template" class="preview-template p-6 max-w-4xl mx-auto bg-white">
        <div class="text-center p-8">
          <div class="text-red-500 text-4xl mb-4">⚠️</div>
          <h2 class="text-xl font-semibold text-gray-800 mb-2">Content Generation Error</h2>
          <p class="text-gray-600">${t}</p>
          <div class="mt-4">
            <button class="preview-button px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">
              Retry
            </button>
          </div>
        </div>
      </div>
    `}reset(){return this.builder.reset(),this}}const $h=e=>!e||typeof e!="string"?"":e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"").replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,"").replace(/<embed\b[^>]*>/gi,"").replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi,"").replace(/\son\w+\s*=\s*["'][^"']*["']/gi,"").replace(/\son\w+\s*=\s*[^>\s]+/gi,"").replace(/javascript:/gi,"").replace(/data:(?!image\/)/gi,""),Lh=e=>{const t=[{pattern:/<script/i,description:"Script tags"},{pattern:/on\w+\s*=/i,description:"Event handlers"},{pattern:/javascript:/i,description:"JavaScript protocols"},{pattern:/<iframe/i,description:"Iframe elements"},{pattern:/<embed/i,description:"Embed elements"},{pattern:/<object/i,description:"Object elements"},{pattern:/data:(?!image\/)/i,description:"Non-image data URLs"}],r=[];for(const{pattern:n,description:s}of t)n.test(e)&&r.push(s);return{isSecure:r.length===0,violations:r,sanitizedContent:r.length>0?$h(e):e}},Rh=new Th,_h=e=>Rh.generateSampleHtmlContent(e),za=()=>_h(),Ih=({initialCss:e="",className:t=""})=>{const[r,n]=v.useState(e),[s,o]=v.useState(!1),[l,i]=v.useState(null),c=za(),u=v.useCallback(x=>{i(null),n(x)},[]),g=v.useCallback(()=>{o(!1),i(null)},[]),f=v.useCallback(x=>{o(!1),i("Failed to load preview content"),console.error("Preview iframe error:",x)},[]),h={default:"",colorful:`
      .preview-heading { 
        color: #e91e63; 
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
      }
      .preview-text { 
        color: #2196f3; 
        font-size: 1.1em;
        line-height: 1.6;
      }
      .preview-button { 
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        border: none;
        color: white;
        transform: scale(1.05);
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
      }
      .preview-card {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
      }
    `,dark:`
      .preview-template {
        background: #1a1a1a;
        color: #ffffff;
      }
      .preview-heading {
        color: #61dafb;
        border-bottom: 2px solid #61dafb;
        padding-bottom: 8px;
      }
      .preview-text {
        color: #e6e6e6;
        background: rgba(255, 255, 255, 0.05);
        padding: 12px;
        border-radius: 6px;
        border-left: 4px solid #61dafb;
      }
      .preview-button {
        background: #61dafb;
        color: #1a1a1a;
        font-weight: bold;
        border: 2px solid #61dafb;
      }
      .preview-button:hover {
        background: transparent;
        color: #61dafb;
      }
      .preview-card {
        background: #2d2d2d;
        border: 1px solid #404040;
        color: #ffffff;
      }
      form {
        background: #2d2d2d !important;
        border: 1px solid #404040;
      }
      input, textarea {
        background: #1a1a1a !important;
        border: 1px solid #404040 !important;
        color: #ffffff !important;
      }
      input:focus, textarea:focus {
        border-color: #61dafb !important;
        box-shadow: 0 0 0 2px rgba(97, 218, 251, 0.2) !important;
      }
    `,minimal:`
      .preview-template {
        font-family: 'Georgia', serif;
        max-width: 600px;
        line-height: 1.8;
        color: #333;
      }
      .preview-heading {
        font-weight: normal;
        color: #222;
        border-bottom: 1px solid #eee;
        padding-bottom: 10px;
        margin-bottom: 30px;
      }
      .preview-text {
        font-size: 1.1em;
        margin-bottom: 25px;
        text-align: justify;
      }
      .preview-button {
        background: none;
        border: 2px solid #333;
        color: #333;
        padding: 12px 24px;
        font-family: inherit;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 0.9em;
      }
      .preview-button:hover {
        background: #333;
        color: white;
      }
      .preview-card {
        border: 1px solid #ddd;
        background: #fafafa;
        padding: 20px;
        margin: 10px 0;
      }
      section {
        margin-bottom: 50px;
      }
    `};return a.jsxs("div",{className:`preview-demo ${t}`,"data-testid":"preview-demo",children:[a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border mb-6",children:[a.jsx("h2",{className:"text-xl font-semibold mb-4 text-gray-800",children:"Real-time CSS Preview Demo"}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[a.jsxs("div",{children:[a.jsx("label",{htmlFor:"css-editor",className:"block text-sm font-medium text-gray-700 mb-2",children:"CSS Editor"}),a.jsx("textarea",{id:"css-editor","data-testid":"css-editor",value:r,onChange:x=>u(x.target.value),placeholder:"Enter your CSS here to see real-time changes...",className:"w-full h-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm",style:{resize:"vertical"}})]}),a.jsx("div",{children:a.jsxs("fieldset",{children:[a.jsx("legend",{className:"block text-sm font-medium text-gray-700 mb-2",children:"CSS Presets"}),a.jsx("div",{className:"space-y-2",children:Object.entries(h).map(([x,y])=>a.jsxs("button",{onClick:()=>u(y),className:"w-full px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors text-left capitalize","data-testid":`preset-${x}`,children:[x," Theme"]},x))}),a.jsxs("div",{className:"mt-4 p-3 bg-gray-50 rounded-md",children:[a.jsx("p",{className:"text-xs text-gray-600",children:a.jsx("strong",{children:"Try these features:"})}),a.jsxs("ul",{className:"text-xs text-gray-600 mt-1 space-y-1",children:[a.jsx("li",{children:"• Change colors using .preview-heading, .preview-text"}),a.jsx("li",{children:"• Style buttons with .preview-button"}),a.jsx("li",{children:"• Modify cards using .preview-card"}),a.jsx("li",{children:"• Update the main container with .preview-template"})]})]})]})})]}),l&&a.jsx("div",{className:"mt-4 p-3 bg-red-50 border border-red-200 rounded-md",children:a.jsx("p",{className:"text-sm text-red-600",children:l})})]}),a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-800",children:"Live Preview"}),s&&a.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[a.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-2"}),"Loading..."]})]}),a.jsx("div",{className:"border rounded-lg overflow-hidden",children:a.jsx(io,{htmlContent:c,cssContent:r,height:"600px",onLoad:g,onError:f,allowScripts:!1,className:"w-full"})}),a.jsx("div",{className:"mt-4 p-3 bg-blue-50 rounded-md",children:a.jsxs("p",{className:"text-xs text-blue-700",children:[a.jsx("strong",{children:"Security Note:"})," This preview is rendered in a sandboxed iframe with restricted permissions. All content is isolated from the parent document to prevent XSS attacks."]})})]})]})},ss=(e,t,r)=>{if(!Fh(e,t,r))throw new Error("Invalid HSV values");e=e/60,t=t/100,r=r/100;const n=r*t,s=n*(1-Math.abs(e%2-1)),o=r-n;let l=0,i=0,c=0;return e>=0&&e<1?(l=n,i=s,c=0):e>=1&&e<2?(l=s,i=n,c=0):e>=2&&e<3?(l=0,i=n,c=s):e>=3&&e<4?(l=0,i=s,c=n):e>=4&&e<5?(l=s,i=0,c=n):e>=5&&e<6&&(l=n,i=0,c=s),{r:Math.round((l+o)*255),g:Math.round((i+o)*255),b:Math.round((c+o)*255)}},zh=(e,t,r)=>{if(!Hr(e,t,r))throw new Error("Invalid RGB values");e/=255,t/=255,r/=255;const n=Math.max(e,t,r),s=Math.min(e,t,r),o=n-s;let l=0;o!==0&&(n===e?l=(t-r)/o%6:n===t?l=(r-e)/o+2:l=(e-t)/o+4),l=Math.round(l*60),l<0&&(l+=360);const i=n===0?0:Math.round(o/n*100),c=Math.round(n*100);return{h:l,s:i,v:c}},_d=(e,t,r)=>{if(!Hr(e,t,r))throw new Error("Invalid RGB values");const n=s=>{const o=Math.round(s).toString(16);return o.length===1?"0"+o:o};return`#${n(e)}${n(t)}${n(r)}`.toUpperCase()},Id=e=>{if(!zd(e))throw new Error("Invalid HEX color format");e=e.replace("#",""),e.length===3&&(e=e.split("").map(s=>s+s).join(""));const t=parseInt(e.substring(0,2),16),r=parseInt(e.substring(2,4),16),n=parseInt(e.substring(4,6),16);return{r:t,g:r,b:n}},Dh=(e,t,r)=>{if(!Hr(e,t,r))throw new Error("Invalid RGB values");e/=255,t/=255,r/=255;const n=Math.max(e,t,r),s=Math.min(e,t,r),o=n-s;let l=0,i=0;const c=(n+s)/2;return o!==0&&(i=c>.5?o/(2-n-s):o/(n+s),n===e?l=(t-r)/o+(t<r?6:0):n===t?l=(r-e)/o+2:l=(e-t)/o+4,l/=6),{h:Math.round(l*360),s:Math.round(i*100),l:Math.round(c*100)}},Mh=(e,t,r)=>{if(!Ah(e,t,r))throw new Error("Invalid HSL values");e/=360,t/=100,r/=100;const n=(i,c,u)=>(u<0&&(u+=1),u>1&&(u-=1),u<1/6?i+(c-i)*6*u:u<1/2?c:u<2/3?i+(c-i)*(2/3-u)*6:i);let s,o,l;if(t===0)s=o=l=r;else{const i=r<.5?r*(1+t):r+t-r*t,c=2*r-i;s=n(c,i,e+1/3),o=n(c,i,e),l=n(c,i,e-1/3)}return{r:Math.round(s*255),g:Math.round(o*255),b:Math.round(l*255)}},tc=(e,t,r)=>{if(!Hr(e,t,r))throw new Error("Invalid RGB values");const n=[e,t,r].map(s=>(s=s/255,s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)));return .2126*n[0]+.7152*n[1]+.0722*n[2]},Oh=(e,t)=>{const r=tc(e.r,e.g,e.b),n=tc(t.r,t.g,t.b),s=Math.max(r,n),o=Math.min(r,n);return(s+.05)/(o+.05)},Bo=(e,t="AA",r="normal")=>{var o;const s=(o={AA:{normal:4.5,large:3},AAA:{normal:7,large:4.5}}[t])==null?void 0:o[r];return s?e>=s:!1},Hr=(e,t,r)=>[e,t,r].every(n=>typeof n=="number"&&n>=0&&n<=255&&Number.isInteger(n)),Fh=(e,t,r)=>typeof e=="number"&&e>=0&&e<=360&&typeof t=="number"&&t>=0&&t<=100&&typeof r=="number"&&r>=0&&r<=100,Ah=(e,t,r)=>typeof e=="number"&&e>=0&&e<=360&&typeof t=="number"&&t>=0&&t<=100&&typeof r=="number"&&r>=0&&r<=100,zd=e=>{if(typeof e!="string")return!1;const t=e.replace("#","");return/^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$/.test(t)},Uo=e=>{if(typeof e!="string")return null;if(e=e.trim(),e.startsWith("#")||/^[0-9A-Fa-f]{3,6}$/.test(e))try{return Id(e)}catch{return null}const t=e.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);if(t){const[,n,s,o]=t.map(Number);return Hr(n,s,o)?{r:n,g:s,b:o}:null}const r=e.match(/hsl\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/i);if(r){const[,n,s,o]=r.map(Number);try{return Mh(n,s,o)}catch{return null}}return null};function Bh({hsv:e,disabled:t,onMouseDown:r,onKeyDown:n,onLightnessChange:s,wheelRef:o}){return a.jsxs("div",{className:"visual-color-picker","data-testid":"visual-color-picker",children:[a.jsx("div",{ref:o,className:"color-wheel","data-testid":"color-wheel",onMouseDown:r,onKeyDown:n,tabIndex:t?-1:0,role:"slider","aria-label":"Color wheel - use arrow keys to adjust hue and saturation","aria-valuemin":"0","aria-valuemax":"360","aria-valuenow":e.h,style:{width:"200px",height:"200px",borderRadius:"50%",background:`conic-gradient(
            hsl(0, 100%, 50%),
            hsl(60, 100%, 50%),
            hsl(120, 100%, 50%),
            hsl(180, 100%, 50%),
            hsl(240, 100%, 50%),
            hsl(300, 100%, 50%),
            hsl(360, 100%, 50%)
          )`,cursor:t?"not-allowed":"pointer",position:"relative",margin:"20px auto"},children:a.jsx("div",{className:"color-wheel-pointer",style:{position:"absolute",width:"12px",height:"12px",borderRadius:"50%",border:"2px solid white",boxShadow:"0 0 4px rgba(0,0,0,0.5)",transform:"translate(-50%, -50%)",left:`${50+e.s/100*50*Math.cos(e.h*Math.PI/180)}%`,top:`${50+e.s/100*50*Math.sin(e.h*Math.PI/180)}%`,pointerEvents:"none"}})}),a.jsxs("div",{className:"lightness-slider-container",children:[a.jsx("label",{htmlFor:"lightness-slider",className:"slider-label",children:"Lightness"}),a.jsx("input",{id:"lightness-slider",type:"range",min:"0",max:"100",value:e.v,onChange:l=>s(l.target.value),disabled:t,className:"lightness-slider","data-testid":"lightness-slider","aria-label":"Lightness slider",style:{width:"200px",background:`linear-gradient(to right, 
              hsl(${e.h}, ${e.s}%, 0%), 
              hsl(${e.h}, ${e.s}%, 100%))`}})]})]})}function rc({mode:e,values:t,disabled:r,onNumber:n,onSlider:s}){const o=e==="RGB"?[{key:"r",label:"Red",min:0,max:255,sliderClass:"red-slider"},{key:"g",label:"Green",min:0,max:255,sliderClass:"green-slider"},{key:"b",label:"Blue",min:0,max:255,sliderClass:"blue-slider"}]:[{key:"h",label:"Hue",min:0,max:360,sliderClass:"hue-slider"},{key:"s",label:"Saturation",min:0,max:100,sliderClass:"saturation-slider"},{key:"v",label:"Value",min:0,max:100,sliderClass:"value-slider"}];return a.jsx("div",{className:`${e.toLowerCase()}-inputs color-input-group`,children:o.map(({key:l,label:i,min:c,max:u,sliderClass:g})=>a.jsxs("div",{className:`${e.toLowerCase()}-input-item`,children:[a.jsx("label",{className:"color-input-label",children:i}),a.jsx("input",{type:"number",min:c,max:u,value:t[l],onChange:f=>n(l,f.target.value),disabled:r,className:"color-input color-input-small"}),a.jsx("input",{type:"range",min:c,max:u,value:t[l],onChange:f=>s(l.toUpperCase(),f.target.value,e),disabled:r,className:`color-slider ${g}`,"aria-label":`${i} slider`})]},l))})}function Uh({presets:e=[],disabled:t,onSelect:r}){return e.length?a.jsxs("div",{className:"color-presets",children:[a.jsx("div",{className:"presets-label",children:"Presets"}),a.jsx("div",{className:"presets-grid",children:e.map((n,s)=>a.jsx("button",{className:"preset-color",onClick:()=>r(n),disabled:t,style:{backgroundColor:n},title:n,"aria-label":`Select preset color ${n}`},s))})]}):null}function Hh(e){return v.useMemo(()=>{const t=_d(e.r,e.g,e.b),r=zh(e.r,e.g,e.b),n=Dh(e.r,e.g,e.b);return{hex:t,hsv:r,hsl:n,rgb:e}},[e])}function Vh({info:e}){if(!e)return null;const{contrastRatio:t,wcagAA:r,wcagAALarge:n,wcagAAA:s}=e;return a.jsxs("div",{className:"accessibility-info",children:[a.jsx("div",{className:"accessibility-title",children:"Accessibility"}),a.jsxs("div",{className:"contrast-info",children:[a.jsxs("span",{children:["Contrast Ratio: ",t,":1"]}),a.jsxs("div",{className:"wcag-compliance",children:[a.jsxs("span",{className:r?"wcag-pass":"wcag-fail",children:["WCAG AA: ",r?"✓":"✗"]}),a.jsxs("span",{className:n?"wcag-pass":"wcag-fail",children:["AA Large: ",n?"✓":"✗"]}),a.jsxs("span",{className:s?"wcag-pass":"wcag-fail",children:["WCAG AAA: ",s?"✓":"✗"]})]})]})]})}const Dd=({value:e="#000000",onChange:t,onColorChange:r,property:n,backgroundColor:s,showVisualPicker:o=!0,showSliders:l=!0,presets:i=[],className:c="",disabled:u=!1})=>{const[g,f]=v.useState("HEX"),[h,x]=v.useState(""),[y,w]=v.useState(()=>Uo(e)||{r:0,g:0,b:0}),[S,m]=v.useState(e),d=v.useRef(null),p=v.useRef(!1),b=v.useCallback(k=>{if(!k||typeof k!="string")return console.warn("ColorPicker: Invalid color value provided"),{r:0,g:0,b:0};const E=Uo(k);return E||(console.warn("ColorPicker: Could not parse color value:",k),{r:0,g:0,b:0})},[]);v.useEffect(()=>{const k=b(e);w(k),m(e),x("")},[e,b]);const C=Hh(y),T=v.useMemo(()=>{if(!s)return null;const k=Uo(s);if(!k)return null;const E=Oh(y,k);return{contrastRatio:E.toFixed(2),wcagAA:Bo(E,"AA","normal"),wcagAALarge:Bo(E,"AA","large"),wcagAAA:Bo(E,"AAA","normal")}},[y,s]),N=v.useCallback((k,E=!1)=>{if(!E&&!Hr(k.r,k.g,k.b)){x("Invalid color values");return}w(k),x("");const I=_d(k.r,k.g,k.b);m(I),t==null||t(I),r==null||r(k,n,I)},[t,r,n]),L=v.useCallback(k=>{try{let E=k.trim();if(E.startsWith("#")&&(E=E.substring(1)),E.length===3&&(E=E.split("").map(A=>A+A).join("")),E="#"+E,!zd(E)){x("Invalid HEX color format");return}const I=Id(E);N(I)}catch{x("Invalid HEX color")}},[N]),F=v.useCallback((k,E)=>{const I=parseInt(E,10);if(isNaN(I)||I<0||I>255){x(`${k} value must be between 0 and 255`);return}const A={...y,[k]:I};N(A)},[y,N]),z=v.useCallback((k,E)=>{const I=parseInt(E,10);let A=!1;if(k==="h"?(A=!isNaN(I)&&I>=0&&I<=360,A||x("Hue must be between 0 and 360")):(A=!isNaN(I)&&I>=0&&I<=100,A||x(`${k==="s"?"Saturation":"Value"} must be between 0 and 100`)),!A)return;const ve={...C.hsv,[k]:I},ye=ss(ve.h,ve.s,ve.v);N(ye)},[C.hsv,N]),G=v.useCallback(k=>{if(u)return;const E=k.currentTarget.getBoundingClientRect(),I=E.width/2,A=E.height/2,le=k.clientX-E.left-I,ve=k.clientY-E.top-A,ye=Math.atan2(ve,le),wt=Math.min(Math.sqrt(le*le+ve*ve),I),co=(ye*180/Math.PI+360)%360,uo=Math.min(wt/I*100,100),dr=C.hsv,po=ss(co,uo,dr.v);N(po)},[u,C.hsv,N]),He=v.useCallback(k=>{if(u)return;const E=C.hsv,I=ss(E.h,E.s,parseInt(k,10));N(I)},[u,C.hsv,N]),ze=v.useCallback((k,E,I)=>{u||(I==="RGB"?F(k.toLowerCase(),E):I==="HSV"&&z(k.toLowerCase(),E))},[u,F,z]),vt=v.useCallback(k=>{if(u)return;const E=b(k);N(E,!0)},[u,b,N]),qe=v.useCallback(k=>{u||(p.current=!0,G(k))},[u,G]),yt=v.useCallback(k=>{!p.current||u||G(k)},[u,G]),bt=v.useCallback(()=>{p.current=!1},[]),$=v.useCallback(k=>{if(u)return;const{key:E}=k;let A={...C.hsv};switch(E){case"ArrowLeft":A.h=(A.h-5+360)%360;break;case"ArrowRight":A.h=(A.h+5)%360;break;case"ArrowUp":A.s=Math.min(A.s+5,100);break;case"ArrowDown":A.s=Math.max(A.s-5,0);break;default:return}k.preventDefault();const le=ss(A.h,A.s,A.v);N(le)},[u,C.hsv,N]);v.useEffect(()=>{const k=I=>yt(I),E=()=>bt();return p.current&&(document.addEventListener("mousemove",k),document.addEventListener("mouseup",E)),()=>{document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",E)}},[yt,bt]);const M=()=>{switch(g){case"HEX":return a.jsxs("div",{className:"color-input-group",children:[a.jsx("label",{htmlFor:"hex-input",className:"color-input-label",children:"HEX"}),a.jsx("input",{id:"hex-input",type:"text",value:S,onChange:k=>{m(k.target.value),L(k.target.value)},disabled:u,className:"color-input",placeholder:"#000000",maxLength:7})]});case"RGB":return a.jsx(rc,{mode:"RGB",values:y,disabled:u,onNumber:(k,E)=>F(k,E),onSlider:ze});case"HSV":return a.jsx(rc,{mode:"HSV",values:C.hsv,disabled:u,onNumber:(k,E)=>z(k,E),onSlider:ze});default:return null}};return a.jsxs("div",{className:`color-picker ${c} ${u?"color-picker-disabled":""}`,role:"group","aria-label":"Color picker",children:[a.jsxs("div",{className:"color-picker-header",children:[a.jsx("div",{className:"color-preview","data-testid":"color-preview",style:{backgroundColor:`rgb(${y.r}, ${y.g}, ${y.b})`,border:"2px solid #ddd",borderRadius:"4px",width:"60px",height:"40px",display:"inline-block",marginRight:"12px"},"aria-label":`Current color: ${C.hex}`}),a.jsx("div",{className:"input-mode-tabs",children:["HEX","RGB","HSV"].map(k=>a.jsx("button",{onClick:()=>f(k),disabled:u,className:`input-mode-tab ${g===k?"active":""}`,"aria-pressed":g===k,children:k},k))})]}),h&&a.jsx("div",{className:"color-error",role:"alert",children:h}),a.jsxs("div",{className:"color-picker-body",children:[o&&a.jsx(Bh,{hsv:C.hsv,disabled:u,onMouseDown:qe,onKeyDown:$,onLightnessChange:He,wheelRef:d}),a.jsx("div",{className:"color-inputs",children:M()}),a.jsx(Uh,{presets:i,disabled:u,onSelect:vt}),a.jsx(Vh,{info:T})]})]})},Wh=()=>{const[e,t]=v.useState({textColor:"#000000",backgroundColor:"#ffffff",borderColor:"#cccccc"}),[r,n]=v.useState("textColor"),s=v.useCallback((c,u,g)=>{u&&e.hasOwnProperty(u)&&t(f=>({...f,[u]:g}))},[e]),o=v.useCallback(c=>{t(u=>({...u,[r]:c}))},[r]),l=v.useCallback(()=>`
      /* Base styling */
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        line-height: 1.6;
        margin: 0;
        padding: 20px;
        color: ${e.textColor};
        background-color: ${e.backgroundColor};
      }

      /* Headers */
      h1, h2, h3 {
        color: ${e.textColor};
        margin-bottom: 1rem;
      }

      /* Paragraphs */
      p {
        margin-bottom: 1rem;
        color: ${e.textColor};
      }

      /* Buttons (match template) */
      .preview-button {
        background-color: ${e.borderColor};
        color: ${e.textColor};
        border: 2px solid ${e.borderColor};
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        margin: 5px;
        transition: all 0.2s;
      }

      .preview-button:hover {
        background-color: ${e.textColor};
        color: ${e.backgroundColor};
      }

      /* Cards (match template) */
      .preview-card {
        background-color: ${e.backgroundColor};
        border: 2px solid ${e.borderColor};
        color: ${e.textColor};
        border-radius: 8px;
        padding: 20px;
        margin: 20px 0;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      }

      /* Lists */
      ul li {
        color: ${e.textColor};
        margin-bottom: 0.5rem;
      }

      /* Links */
      a {
        color: ${e.borderColor};
        text-decoration: none;
      }

      a:hover {
        color: ${e.textColor};
        text-decoration: underline;
      }

      /* Form elements */
      input, textarea {
        border: 2px solid ${e.borderColor};
        color: ${e.textColor};
        background-color: ${e.backgroundColor};
        padding: 8px;
        border-radius: 4px;
        margin: 5px;
      }

      input:focus, textarea:focus {
        outline: none;
        border-color: ${e.textColor};
      }
    `,[e]),i={textColor:"Text Color",backgroundColor:"Background Color",borderColor:"Accent Color"};return a.jsxs("div",{className:"color-picker-demo",children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{children:"Color Picker"}),a.jsx("p",{children:"Create a background, text and accent palette. Download a free HTML + CSS with your colors. For full components (cards, buttons, badges, tabs), head to the Stylesheet Builder."})]}),a.jsxs("div",{className:"demo-layout",children:[a.jsxs("div",{className:"demo-controls",children:[a.jsxs("div",{className:"property-selector",children:[a.jsx("h3",{children:"Select Property to Modify:"}),a.jsx("div",{className:"property-buttons",children:Object.entries(i).map(([c,u])=>a.jsx("button",{onClick:()=>n(c),className:`property-btn ${r===c?"active":""}`,style:{backgroundColor:r===c?e[c]:"transparent",color:r===c?"white":e[c],border:`2px solid ${e[c]}`},children:u},c))})]}),a.jsxs("div",{className:"color-picker-container",children:[a.jsx("h3",{children:"Color Picker:"}),a.jsx(Dd,{value:e[r],onChange:o,onColorChange:s,property:r,backgroundColor:r==="textColor"?e.backgroundColor:"#ffffff",showVisualPicker:!0,showSliders:!0,presets:["#FF0000","#00FF00","#0000FF","#FFFF00","#FF00FF","#00FFFF","#000000","#808080","#FFFFFF"]})]}),a.jsxs("div",{className:"current-colors",children:[a.jsx("h3",{children:"Current Colors:"}),a.jsx("div",{className:"color-swatches",children:Object.entries(e).map(([c,u])=>a.jsxs("div",{className:"color-swatch-item",children:[a.jsx("div",{className:"color-swatch",style:{backgroundColor:u},title:u}),a.jsx("span",{className:"color-label",children:i[c]}),a.jsx("span",{className:"color-value",children:u})]},c))})]})]}),a.jsxs("div",{className:"demo-preview",children:[a.jsx("h3",{children:"Live Preview:"}),a.jsx(io,{htmlContent:za(),cssContent:l(),height:"600px"})]})]})]})},nc=(e={},t={})=>{var o,l,i,c;const r=t.primary||"#3b82f6",n=t.primaryHover||"#2563eb";t.secondary,t.success,t.warning,t.danger;const s=t.neutral||"#e5e7eb";return t.start,t.end,`
    <div data-testid="six-cards-template" class="preview-template p-6 max-w-6xl mx-auto bg-white">
      <!-- Hero Section with Gradient -->
      <section class="mb-10">
        <div class="gradient-showcase text-center">
          <h1 class="preview-heading text-4xl font-bold mb-4">
            🃏 Six Cards Showcase
          </h1>
          <p class="text-lg mb-6 opacity-90">
            Individual card designs ready to export. Each card can be styled independently with custom colors, borders, and effects.
          </p>
          <button class="btn-primary mr-4">Get Started</button>
          <button class="btn-secondary">Learn More</button>
        </div>
      </section>

      <!-- Alert System Demo -->
      <section class="mb-10">
        <h2 class="preview-heading text-2xl font-semibold mb-6 text-gray-800">
          Alert System Components
        </h2>
        <div class="space-y-4">
          <div class="alert-error">
            <span class="text-xl">${((o=e.error)==null?void 0:o.icon)||"🔥"}</span>
            <div>
              <div class="font-semibold">Error Alert</div>
              <div class="text-sm mt-1">Something went wrong. Please check your input and try again.</div>
            </div>
          </div>
          
          <div class="alert-warning">
            <span class="text-xl">${((l=e.warning)==null?void 0:l.icon)||"⚠️"}</span>
            <div>
              <div class="font-semibold">Warning Alert</div>
              <div class="text-sm mt-1">This action cannot be undone. Please proceed with caution.</div>
            </div>
          </div>
          
          <div class="alert-message">
            <span class="text-xl">${((i=e.message)==null?void 0:i.icon)||"💬"}</span>
            <div>
              <div class="font-semibold">Information Message</div>
              <div class="text-sm mt-1">Here's some helpful information to guide you through the process.</div>
            </div>
          </div>
          
          <div class="alert-success">
            <span class="text-xl">${((c=e.success)==null?void 0:c.icon)||"✅"}</span>
            <div>
              <div class="font-semibold">Success Alert</div>
              <div class="text-sm mt-1">Great! Your changes have been saved successfully.</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Color System (Badges, Form Controls, Tabs, Progress, Links) -->
      <section class="mb-10">
        <h2 class="preview-heading text-2xl font-semibold mb-6 text-gray-800">Color System Elements</h2>
        <!-- Badges -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Badges</div>
          <div class="flex flex-wrap gap-2">
            <span class="badge badge-primary">New</span>
            <span class="badge badge-success">Success</span>
            <span class="badge badge-warning">Warning</span>
            <span class="badge badge-danger">Error</span>
            <span class="badge badge-neutral">Neutral</span>
          </div>
        </div>

        <!-- Form Controls -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Form Controls</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input class="px-3 py-2 rounded-md border" placeholder="Input" style="border-color:#d1d5db" />
            <select class="px-3 py-2 rounded-md border" style="border-color:#d1d5db"><option>Select</option></select>
            <label class="flex items-center gap-2 text-sm text-gray-700"><input type="checkbox" class="w-4 h-4" /> Checkbox</label>
            <label class="flex items-center gap-2 text-sm text-gray-700"><input type="radio" name="r2" class="w-4 h-4" /> Radio</label>
          </div>
          <div class="text-xs text-gray-500 mt-2">Focus color uses your primary (${r}).</div>
        </div>

        <!-- Tabs -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Tabs</div>
          <div class="tabs">
            <button class="tab active">Active</button>
            <button class="tab">Tab</button>
            <button class="tab">Tab</button>
          </div>
        </div>

        <!-- Progress -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Progress</div>
          <div class="progress"><div class="progress-bar" style="width:60%"></div></div>
        </div>

        <!-- Links -->
        <div>
          <div class="text-sm font-medium text-gray-700 mb-2">Links</div>
          <a href="#" class="text-sm link">Link example</a>
        </div>
      </section>

      <!-- Additional Colorful Components -->
      <section class="mb-10">
        <h2 class="preview-heading text-2xl font-semibold mb-6 text-gray-800">Additional Components</h2>

        <!-- Chips / Tags -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Chips / Tags</div>
          <div class="flex flex-wrap gap-2">
            <span class="chip chip-primary">Primary</span>
            <span class="chip chip-success">Success</span>
            <span class="chip chip-warning">Warning</span>
            <span class="chip chip-danger">Danger</span>
            <span class="chip chip-outline">Outline</span>
          </div>
        </div>

        <!-- Avatars with Status Ring -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Avatars</div>
          <div class="flex items-center gap-4">
            <div class="avatar avatar-primary"></div>
            <div class="avatar avatar-success"></div>
            <div class="avatar avatar-warning"></div>
          </div>
        </div>

        <!-- Breadcrumbs -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Breadcrumbs</div>
          <nav class="breadcrumbs text-sm">
            <a href="#">Home</a>
            <span class="divider"> / </span>
            <a href="#">Library</a>
            <span class="divider"> / </span>
            <span class="current">Data</span>
          </nav>
        </div>

        <!-- Pagination -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Pagination</div>
          <div class="pagination">
            <button class="page">Prev</button>
            <button class="page">1</button>
            <button class="page page-active">2</button>
            <button class="page">3</button>
            <button class="page">Next</button>
          </div>
        </div>

        <!-- Table -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Table</div>
          <div class="overflow-auto rounded border" style="border-color:${s}">
            <table class="table min-w-full text-sm">
              <thead>
                <tr>
                  <th class="text-left px-3 py-2">User</th>
                  <th class="text-left px-3 py-2">Role</th>
                  <th class="text-left px-3 py-2">Status</th>
                  <th class="text-left px-3 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-t" style="border-color:${s}">
                  <td class="px-3 py-2">Jane Cooper</td>
                  <td class="px-3 py-2">Admin</td>
                  <td class="px-3 py-2"><span class="pill pill-success">Active</span></td>
                  <td class="px-3 py-2"><button class="btn-secondary text-xs px-3 py-1">View</button></td>
                </tr>
                <tr class="border-t bg-gray-50" style="border-color:${s}">
                  <td class="px-3 py-2">Cody Fisher</td>
                  <td class="px-3 py-2">Editor</td>
                  <td class="px-3 py-2"><span class="pill pill-warning">Pending</span></td>
                  <td class="px-3 py-2"><button class="btn-primary text-xs px-3 py-1">Invite</button></td>
                </tr>
                <tr class="border-t" style="border-color:${s}">
                  <td class="px-3 py-2">Esther Howard</td>
                  <td class="px-3 py-2">Viewer</td>
                  <td class="px-3 py-2"><span class="pill pill-danger">Blocked</span></td>
                  <td class="px-3 py-2"><button class="btn-delete text-xs px-3 py-1">Remove</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Toggle Switches -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Toggles</div>
          <div class="flex items-center gap-6">
            <div class="toggle on"><div class="knob"></div></div>
            <div class="toggle"><div class="knob"></div></div>
          </div>
        </div>

        <!-- Toasts -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Toasts</div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="toast toast-success"><span class="icon">✓</span><div><div class="font-semibold">Saved</div><div class="text-sm text-gray-600">Your changes were saved successfully.</div></div></div>
            <div class="toast toast-warning"><span class="icon">!</span><div><div class="font-semibold">Heads up</div><div class="text-sm text-gray-600">This action may affect live users.</div></div></div>
            <div class="toast toast-danger"><span class="icon">⨉</span><div><div class="font-semibold">Failed</div><div class="text-sm text-gray-600">Something went wrong. Try again.</div></div></div>
            <div class="toast toast-message"><span class="icon">i</span><div><div class="font-semibold">Info</div><div class="text-sm text-gray-600">New update available.</div></div></div>
          </div>
        </div>

        <!-- Code Block -->
        <div class="mb-6">
          <div class="text-sm font-medium text-gray-700 mb-2">Code Block</div>
          <pre class="code-block"><code><span class="c">/* Import stylesheet */</span>
<span class="k">link</span><span class="p">(</span><span class="fn">rel</span><span class="p">=</span><span class="s">"stylesheet"</span><span class="p">,</span> <span class="fn">href</span><span class="p">=</span><span class="s">"six-cards-stylesheet.css"</span><span class="p">)</span>

<span class="c">// Use classes</span>
<span class="k">div</span><span class="p">(</span><span class="fn">class</span><span class="p">=</span><span class="s">"card-1"</span><span class="p">)</span>
</code></pre>
        </div>

        <!-- Simple Chart -->
        <div>
          <div class="text-sm font-medium text-gray-700 mb-2">Mini Chart</div>
          <div class="chart">
            <div class="bar"><div class="bar-fill" style="width:70%"></div></div>
            <div class="bar"><div class="bar-fill" style="width:45%"></div></div>
            <div class="bar"><div class="bar-fill" style="width:85%"></div></div>
          </div>
        </div>
      </section>

      <!-- Six Individual Cards Showcase -->
      <section class="mb-10">
        <h2 class="preview-heading text-2xl font-semibold mb-6 text-gray-800">
          Individual Card Designs (.card-1 through .card-6)
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- Card 1 -->
          <div class="card-1" data-testid="card-1-showcase">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-1">Card 1 Design</h3>
                <p class="text-sm text-gray-600">.card-1</p>
              </div>
              <span class="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Featured</span>
            </div>
            <p class="preview-text text-sm text-gray-700 mb-4">
              This is Card 1 with customizable styling. Perfect for featured content, announcements, or primary information blocks.
            </p>
            <div class="flex gap-2">
              <button class="btn-primary text-xs px-3 py-1">Action</button>
              <button class="btn-secondary text-xs px-3 py-1">Details</button>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="card-2" data-testid="card-2-showcase">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold text-lg">2</span>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-800">Card 2 Design</h3>
                <p class="text-sm text-gray-600">.card-2</p>
              </div>
            </div>
            <p class="preview-text text-sm text-gray-700 mb-4">
              Card 2 showcases profile-style layouts with avatar integration and modern spacing.
            </p>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-500">Updated 2h ago</span>
              <button class="btn-ok text-xs px-3 py-1">View</button>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="card-3" data-testid="card-3-showcase">
            <div class="text-center">
              <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-2xl">📊</span>
              </div>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Card 3 Design</h3>
              <p class="text-sm text-gray-600 mb-1">.card-3</p>
              <p class="text-2xl font-bold text-purple-600 mb-2">+15.3%</p>
              <p class="preview-text text-sm text-gray-700 mb-4">
                Statistics and metrics display with centered content layout.
              </p>
              <button class="btn-submit text-xs px-4 py-2">Analyze</button>
            </div>
          </div>

          <!-- Card 4 -->
          <div class="card-4" data-testid="card-4-showcase">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Card 4 Design</h3>
            <p class="text-sm text-gray-600 mb-3">.card-4</p>
            <div class="space-y-2 mb-4">
              <div class="flex justify-between text-sm">
                <span class="text-gray-600">Progress</span>
                <span class="font-medium">73%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2">
                <div class="bg-green-500 h-2 rounded-full" style="width: 73%"></div>
              </div>
            </div>
            <p class="preview-text text-sm text-gray-700 mb-4">
              Progress tracking and status updates with visual indicators.
            </p>
            <button class="btn-primary text-sm w-full">Continue</button>
          </div>

          <!-- Card 5 -->
          <div class="card-5" data-testid="card-5-showcase">
            <div class="flex items-start justify-between mb-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-800 mb-1">Card 5 Design</h3>
                <p class="text-sm text-gray-600">.card-5</p>
              </div>
              <div class="flex items-center">
                <div class="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                <span class="text-sm text-red-600 font-medium">Alert</span>
              </div>
            </div>
            <div class="flex -space-x-2 mb-4">
              <div class="w-8 h-8 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
                <span class="text-xs font-medium text-white">A</span>
              </div>
              <div class="w-8 h-8 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center">
                <span class="text-xs font-medium text-white">B</span>
              </div>
              <div class="w-8 h-8 bg-yellow-500 rounded-full border-2 border-white flex items-center justify-center">
                <span class="text-xs font-medium text-white">C</span>
              </div>
            </div>
            <p class="preview-text text-sm text-gray-700 mb-4">
              Team collaboration and notification cards with status indicators.
            </p>
            <div class="flex gap-2">
              <button class="btn-delete text-xs px-3 py-1">Dismiss</button>
              <button class="btn-secondary text-xs px-3 py-1">Review</button>
            </div>
          </div>

          <!-- Card 6 -->
          <div class="card-6" data-testid="card-6-showcase">
            <div class="text-center">
              <span class="text-4xl mb-4 block">🎨</span>
              <h3 class="text-lg font-semibold text-gray-800 mb-2">Card 6 Design</h3>
              <p class="text-sm text-gray-600 mb-3">.card-6</p>
              <p class="preview-text text-sm text-gray-700 mb-4">
                Creative and artistic content with centered layout and visual emphasis.
              </p>
              <div class="flex justify-center gap-2">
                <button class="btn-primary text-xs px-3 py-1">Create</button>
                <button class="btn-ok text-xs px-3 py-1">Preview</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Button System Showcase -->
      <section class="mb-10">
        <h2 class="preview-heading text-2xl font-semibold mb-6 text-gray-800">
          Complete Button System
        </h2>
        <div class="bg-gray-50 p-6 rounded-lg">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
            
            <!-- Primary Buttons -->
            <div class="text-center">
              <h4 class="text-sm font-semibold text-gray-700 mb-3">Primary</h4>
              <div class="space-y-2">
                <button class="btn-primary w-full text-sm">Create New</button>
                <button class="btn-primary w-full text-sm">Get Started</button>
              </div>
            </div>

            <!-- Secondary Buttons -->
            <div class="text-center">
              <h4 class="text-sm font-semibold text-gray-700 mb-3">Secondary</h4>
              <div class="space-y-2">
                <button class="btn-secondary w-full text-sm">Learn More</button>
                <button class="btn-secondary w-full text-sm">View Details</button>
              </div>
            </div>

            <!-- Submit Buttons -->
            <div class="text-center">
              <h4 class="text-sm font-semibold text-gray-700 mb-3">Submit</h4>
              <div class="space-y-2">
                <button class="btn-submit w-full text-sm">Submit Form</button>
                <button class="btn-submit w-full text-sm">Save Changes</button>
              </div>
            </div>

            <!-- OK Buttons -->
            <div class="text-center">
              <h4 class="text-sm font-semibold text-gray-700 mb-3">OK / Confirm</h4>
              <div class="space-y-2">
                <button class="btn-ok w-full text-sm">OK, Got It</button>
                <button class="btn-ok w-full text-sm">Confirm</button>
              </div>
            </div>

            <!-- Delete Buttons -->
            <div class="text-center">
              <h4 class="text-sm font-semibold text-gray-700 mb-3">Delete</h4>
              <div class="space-y-2">
                <button class="btn-delete w-full text-sm">Delete Item</button>
                <button class="btn-delete w-full text-sm">Remove</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Interactive Form with Cards -->
      <section class="mb-10">
        <h2 class="preview-heading text-2xl font-semibold mb-6 text-gray-800">
          Form Integration Example
        </h2>
        <div class="card-1">
          <form>
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Contact Form in Card 1</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div class="mb-6">
              <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea 
                rows="4" 
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div class="flex gap-3">
              <button type="button" class="btn-submit flex-1">Send Message</button>
              <button type="button" class="btn-secondary">Save Draft</button>
              <button type="button" class="btn-delete px-4">Clear</button>
            </div>
          </form>
        </div>
      </section>

      <!-- Visual Divider -->
      <div class="my-12 h-px bg-gray-200"></div>

      <!-- Usage Examples (reusing same six card classes) -->
      <section class="mb-10">
        <h2 class="preview-heading text-2xl font-semibold mb-2 text-gray-800">
          Examples using the same six card classes
        </h2>
        <p class="text-sm text-gray-600 mb-6">
          These examples reuse .card-1 through .card-6 to show the same styles in different contexts.
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div class="card-2">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Dashboard Widget</h3>
            <p class="preview-text text-sm text-gray-700 mb-4">
              Card 2 styling perfect for dashboard widgets, metrics display, and status cards.
            </p>
            <div class="flex items-center justify-between text-sm">
              <span class="text-gray-600">Status: <span class="text-green-600 font-medium">Active</span></span>
              <button class="btn-ok text-xs px-3 py-1">Monitor</button>
            </div>
          </div>

          <div class="card-3">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Product Card</h3>
            <p class="preview-text text-sm text-gray-700 mb-4">
              Card 3 styling ideal for product listings, feature highlights, and call-to-action sections.
            </p>
            <div class="flex items-center justify-between">
              <span class="text-lg font-bold text-blue-600">$29.99</span>
              <button class="btn-primary text-sm px-4 py-2">Add to Cart</button>
            </div>
          </div>

          <div class="card-4">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Settings Panel</h3>
            <p class="preview-text text-sm text-gray-700 mb-4">
              Card 4 styling works great for settings panels, configuration forms, and control interfaces.
            </p>
            <div class="flex gap-2">
              <button class="btn-secondary text-sm flex-1">Configure</button>
              <button class="btn-primary text-sm flex-1">Apply</button>
            </div>
          </div>

          <div class="card-5">
            <h3 class="text-lg font-semibold text-gray-800 mb-3">Notification Card</h3>
            <p class="preview-text text-sm text-gray-700 mb-4">
              Card 5 styling perfect for notifications, alerts, and important messages that need attention.
            </p>
            <div class="flex gap-2">
              <button class="btn-ok text-sm flex-1">Mark Read</button>
              <button class="btn-delete text-sm px-4">Dismiss</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Export Information -->
      <section class="text-center">
        <div class="card-6">
          <h2 class="preview-heading text-2xl font-semibold mb-4 text-gray-800">
            Ready to Export Your Styles?
          </h2>
          <p class="preview-text text-gray-700 mb-6 max-w-2xl mx-auto">
            Your custom stylesheet includes all 6 card classes (.card-1 through .card-6), 
            complete button system (.btn-primary, .btn-secondary, .btn-delete, .btn-submit, .btn-ok), 
            and alert components (.alert-error, .alert-warning, .alert-message, .alert-success).
          </p>
          <div class="flex flex-wrap justify-center gap-4">
            <button class="btn-submit px-8 py-3">Export Stylesheet</button>
            <button class="btn-secondary px-8 py-3">View Documentation</button>
            <button class="btn-primary px-8 py-3">Download All</button>
          </div>
          <p class="text-xs text-gray-500 mt-4">
            Complete CSS ready for production • Mobile responsive • Cross-browser compatible
          </p>
        </div>
      </section>
    </div>
  `};function Gh({theme:e,buttonStyles:t,alertStyles:r,currentGradient:n,onUpdateButtonStyle:s}){var x,y,w,S,m,d;const o=((x=t==null?void 0:t.primary)==null?void 0:x.bg)||(e==null?void 0:e.primary),l=((y=t==null?void 0:t.primary)==null?void 0:y.hover)||(e==null?void 0:e.secondary),i=((w=t==null?void 0:t.secondary)==null?void 0:w.bg)||(e==null?void 0:e.secondary),c=((S=t==null?void 0:t.ok)==null?void 0:S.bg)||(e==null?void 0:e.success),u=e==null?void 0:e.warning,g=((m=t==null?void 0:t.delete)==null?void 0:m.bg)||(e==null?void 0:e.danger),f=(e==null?void 0:e.cardTints)&&(e==null?void 0:e.cardTints[1])||"#e5e7eb",h=[{key:"primary",label:"Primary",color:o},{key:"secondary",label:"Secondary",color:i},{key:"ok",label:"Success",color:c},{key:"submit",label:"Submit",color:((d=t==null?void 0:t.submit)==null?void 0:d.bg)||"#3b82f6"},{key:"delete",label:"Danger",color:g}];return a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border mb-6",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"🎨 Color System Preview"}),a.jsxs("div",{className:"mb-6",children:[a.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"Buttons"}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:h.map(p=>{var b,C;return a.jsxs("div",{className:"flex items-center justify-between gap-3 p-3 rounded border",children:[a.jsx("button",{className:"px-4 py-2 rounded-md text-white font-medium flex-1 text-left",style:{background:((b=t==null?void 0:t[p.key])==null?void 0:b.bg)||p.color},children:p.label}),s&&a.jsx("input",{type:"color",className:"w-10 h-10 rounded border cursor-pointer",value:((C=t==null?void 0:t[p.key])==null?void 0:C.bg)||p.color,onChange:T=>s(p.key,"bg",T.target.value),title:`${p.label} color`})]},p.key)})})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"Badges"}),a.jsxs("div",{className:"flex flex-wrap gap-2",children:[a.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-white",style:{background:o},children:"New"}),a.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-white",style:{background:c},children:"Success"}),a.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-white",style:{background:u},children:"Warning"}),a.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-white",style:{background:g},children:"Error"}),a.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-gray-700",style:{background:f},children:"Neutral"})]})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"Form Controls"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[a.jsx("input",{className:"px-3 py-2 rounded-md border",placeholder:"Input",style:{borderColor:"#d1d5db"}}),a.jsx("select",{className:"px-3 py-2 rounded-md border",style:{borderColor:"#d1d5db"},children:a.jsx("option",{children:"Select"})}),a.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-700",children:[a.jsx("input",{type:"checkbox",className:"w-4 h-4"})," Checkbox"]}),a.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-700",children:[a.jsx("input",{type:"radio",name:"r",className:"w-4 h-4"})," Radio"]})]}),a.jsxs("div",{className:"text-xs text-gray-500 mt-2",children:["Focus color uses your primary (",o,")."]})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"Tabs"}),a.jsxs("div",{className:"flex gap-4 border-b",children:[a.jsx("button",{className:"pb-2 text-sm font-medium",style:{borderBottom:`2px solid ${o}`,color:o},children:"Active"}),a.jsx("button",{className:"pb-2 text-sm text-gray-600",children:"Tab"}),a.jsx("button",{className:"pb-2 text-sm text-gray-600",children:"Tab"})]})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"Progress"}),a.jsx("div",{className:"w-full h-2 rounded bg-gray-200 overflow-hidden",children:a.jsx("div",{className:"h-2",style:{width:"60%",background:`linear-gradient(90deg, ${(n==null?void 0:n.start)||o}, ${(n==null?void 0:n.end)||l})`}})})]}),a.jsxs("div",{children:[a.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"Links"}),a.jsx("a",{href:"#",className:"text-sm",style:{color:o},children:"Link example"})]})]})}function Qh({presets:e={},selectedKey:t,onSelect:r,pickerBaseColor:n,inlinePicker:s}){return a.jsx("div",{className:"mb-6",children:a.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 mb-4",children:[Object.entries(e).map(([o,l])=>a.jsx("button",{onClick:()=>r(o),className:`p-3 rounded text-xs font-medium text-white text-center transition-all ${t===o?"ring-4 ring-white ring-offset-2 transform scale-105":"hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${l.start}, ${l.end})`},title:`${l.name} Theme`,"data-testid":`gradient-${o}`,children:l.name},o)),n?a.jsx("button",{onClick:()=>r("fromPicker"),className:`p-3 rounded text-xs font-medium text-white text-center transition-all ${t==="fromPicker"?"ring-4 ring-white ring-offset-2 transform scale-105":"hover:scale-105"}`,style:{background:n},title:"Use base color from Color Picker","data-testid":"gradient-from-picker",children:"From Color Picker"}):s?a.jsx("button",{onClick:s.onOpen,className:"p-3 rounded text-xs font-medium text-center transition-all bg-blue-100 text-blue-700 hover:bg-blue-200",title:"Open color picker","data-testid":"gradient-from-picker-inline",children:"Try the color picker"}):a.jsx(tr,{to:"/color-picker",className:"p-3 rounded text-xs font-medium text-center transition-all bg-blue-100 text-blue-700 hover:bg-blue-200",title:"Try the color picker","data-testid":"gradient-from-picker-link",children:"Try the color picker"})]})})}const Yh=e=>{try{return localStorage.getItem(e)}catch{return null}},Kh=e=>{try{localStorage.removeItem(e)}catch{}},Md=e=>{const t=Yh(e);return t!==null&&Kh(e),t},Xh="togglebox_transfer",Jh="togglebox_theme_color",Zh=()=>{const e=Md(Xh);if(!e)return null;try{return JSON.parse(e)}catch{return null}},qh=()=>Md(Jh),eg={confirmationUrl:`${window.location.origin}/confirm`},tg=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),rg=()=>Math.random().toString(36).substr(2,9)+Date.now().toString(36),ng=(e,t,r)=>{const n={email:e,token:t,data:r,timestamp:Date.now(),confirmed:!1},s=`email_registration_${t}`;localStorage.setItem(s,JSON.stringify(n));const o=JSON.parse(localStorage.getItem("email_lookups")||"{}");return o[e]=t,localStorage.setItem("email_lookups",JSON.stringify(o)),n},sc=async(e,t,r)=>{const n=`${eg.confirmationUrl}/${t}`;if(window.location.hostname==="www.togglebox.co.za"||window.location.hostname==="togglebox.co.za")try{const s=await fetch("/api/email/send-confirmation.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,token:t,downloadData:r})});if(s.ok){const o=await s.json();return{success:!0,confirmUrl:n,emailSent:!0}}}catch{console.log("Production email API not available, falling back to demo mode")}return console.log("🔗 Confirmation Email (Demo Mode)"),console.log(`To: ${e}`),console.log(`Confirmation URL: ${n}`),console.log(`Download includes: ${r.files?r.files.length:0} files`),setTimeout(()=>{console.log("🎯 Auto-confirming for demo..."),Od(t)},2e3),{success:!0,confirmUrl:n,emailSent:!1}},sg=async(e,t)=>{if(!tg(e))throw new Error("Please enter a valid email address");const n=JSON.parse(localStorage.getItem("email_lookups")||"{}")[e];if(n){const o=localStorage.getItem(`email_registration_${n}`);if(o){const l=JSON.parse(o);if((Date.now()-l.timestamp)/(1e3*60*60)<24)return await sc(e,n,t),{success:!0,token:n,resent:!0}}}const s=rg();return ng(e,s,t),await sc(e,s,t),{success:!0,token:s,new:!0}},Od=e=>{const t=`email_registration_${e}`,r=localStorage.getItem(t);if(!r)return{success:!1,error:"Invalid confirmation token"};const n=JSON.parse(r);return n.confirmed=!0,n.confirmedAt=Date.now(),localStorage.setItem(t,JSON.stringify(n)),{success:!0,data:n}},og=e=>{const t=`email_registration_${e}`,r=localStorage.getItem(t);if(!r)return{success:!1,error:"Invalid token"};const n=JSON.parse(r);return n.confirmed?{success:!0,data:n.data}:{success:!1,error:"Email not confirmed yet"}},lg=e=>{const r=JSON.parse(localStorage.getItem("email_lookups")||"{}")[e];if(!r)return!1;const n=localStorage.getItem(`email_registration_${r}`);return n&&JSON.parse(n).confirmed||!1},ag=()=>{const e=Object.keys(localStorage),t=Date.now()-7*24*60*60*1e3;e.forEach(r=>{if(r.startsWith("email_registration_")){const n=localStorage.getItem(r);n&&JSON.parse(n).timestamp<t&&localStorage.removeItem(r)}})};ag();function ig({onExport:e,onExportHtml:t,onCopyAgentInstructions:r,submitStyle:n,onEmailRequired:s}){return a.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e&&a.jsx("button",{onClick:s||e,className:"px-4 py-2 text-white rounded-md transition-colors font-medium hover:opacity-90",style:n,"data-testid":"export-css-button",children:"📥 Export CSS"}),t&&a.jsx("button",{onClick:s||t,className:"px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 transition-colors font-medium","data-testid":"export-demo-html-button",children:"📄 Download demo index.html"}),r&&a.jsx("button",{onClick:s||r,className:"px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors font-medium","data-testid":"copy-agent-instructions",children:"🤖 Copy agent instructions"})]})}function cg({isOpen:e,onClose:t,onSubmit:r,title:n="Get Your Export"}){const[s,o]=v.useState(""),[l,i]=v.useState(!1),[c,u]=v.useState(!1),[g,f]=v.useState(""),h=async w=>{if(w.preventDefault(),!s||!s.includes("@")){f("Please enter a valid email address");return}i(!0),f("");try{await r(s),u(!0),setTimeout(()=>{t(),x()},3e3)}catch(S){f(S.message||"Failed to send confirmation email. Please try again.")}finally{i(!1)}},x=()=>{o(""),u(!1),f(""),i(!1)},y=()=>{t(),x()};return e?a.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:a.jsx("div",{className:"bg-white rounded-lg shadow-xl max-w-md w-full",children:c?a.jsxs("div",{className:"p-6 text-center",children:[a.jsx("div",{className:"mb-4",children:a.jsx("div",{className:"mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center",children:a.jsx("span",{className:"text-2xl",children:"✅"})})}),a.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Check Your Email!"}),a.jsxs("p",{className:"text-gray-600 mb-4",children:["We've sent your download link to ",a.jsx("strong",{children:s})]}),a.jsx("p",{className:"text-sm text-gray-500",children:"This window will close automatically..."})]}):a.jsx(a.Fragment,{children:a.jsxs("div",{className:"p-6",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:n}),a.jsx("button",{onClick:y,className:"text-gray-400 hover:text-gray-600 transition-colors","data-testid":"close-modal",children:"✕"})]}),a.jsx("p",{className:"text-gray-600 mb-6",children:"Enter your email address to receive your custom CSS and demo files. We'll send you a download link right away!"}),a.jsxs("form",{onSubmit:h,children:[a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),a.jsx("input",{type:"email",id:"email",value:s,onChange:w=>o(w.target.value),placeholder:"your@email.com",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500","data-testid":"email-input",disabled:l,required:!0})]}),g&&a.jsx("div",{className:"mb-4 p-3 bg-red-50 border border-red-200 rounded-md",children:a.jsx("p",{className:"text-red-700 text-sm",children:g})}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{type:"button",onClick:y,className:"flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",disabled:l,children:"Cancel"}),a.jsx("button",{type:"submit",className:"flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed","data-testid":"submit-email",disabled:l,children:l?"Sending...":"Send Download Link"})]})]})]})})})}):null}function ug({selectedCard:e,card:t,update:r}){return a.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[a.jsxs("h4",{className:"font-medium text-gray-800 mb-4",children:["Editing: Card ",e.slice(-1)," (.",e.replace("card","card-"),")",a.jsx("span",{className:"ml-2 text-sm text-gray-500",children:"After changing a color, click off the card to see it update. Then scroll down to the preview for other changes."})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:"Background Color"}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"color",value:t.backgroundColor,onChange:n=>r("backgroundColor",n.target.value),className:"w-12 h-8 rounded border cursor-pointer"}),a.jsx("input",{type:"text",value:t.backgroundColor,onChange:n=>r("backgroundColor",n.target.value),className:"flex-1 px-2 py-1 text-sm border border-gray-300 rounded"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:"Border Color"}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"color",value:t.borderColor,onChange:n=>r("borderColor",n.target.value),className:"w-12 h-8 rounded border cursor-pointer"}),a.jsx("input",{type:"text",value:t.borderColor,onChange:n=>r("borderColor",n.target.value),className:"flex-1 px-2 py-1 text-sm border border-gray-300 rounded"})]})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:["Border Radius: ",t.borderRadius,"px"]}),a.jsx("input",{type:"range",min:"0",max:"24",value:t.borderRadius,onChange:n=>r("borderRadius",parseInt(n.target.value)),className:"w-full"})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:["Padding: ",t.padding,"px"]}),a.jsx("input",{type:"range",min:"8",max:"32",value:t.padding,onChange:n=>r("padding",parseInt(n.target.value)),className:"w-full"})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:["Shadow: ",t.shadow,"px"]}),a.jsx("input",{type:"range",min:"0",max:"12",value:t.shadow,onChange:n=>r("shadow",parseInt(n.target.value)),className:"w-full"})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:["Border Width: ",t.borderWidth,"px"]}),a.jsx("input",{type:"range",min:"0",max:"4",value:t.borderWidth,onChange:n=>r("borderWidth",parseInt(n.target.value)),className:"w-full"})]})]})]})}const dg=({className:e=""})=>{var Da;const[t,r]=v.useState({card1:{backgroundColor:"#ffffff",borderRadius:8,padding:16,shadow:2,borderWidth:1,borderColor:"#e5e7eb"},card2:{backgroundColor:"#f8fafc",borderRadius:12,padding:20,shadow:4,borderWidth:0,borderColor:"#e5e7eb"},card3:{backgroundColor:"#eff6ff",borderRadius:16,padding:24,shadow:6,borderWidth:2,borderColor:"#3b82f6"},card4:{backgroundColor:"#f0fdf4",borderRadius:8,padding:18,shadow:3,borderWidth:1,borderColor:"#10b981"},card5:{backgroundColor:"#fef2f2",borderRadius:10,padding:22,shadow:5,borderWidth:2,borderColor:"#ef4444"},card6:{backgroundColor:"#faf5ff",borderRadius:14,padding:20,shadow:4,borderWidth:1,borderColor:"#8b5cf6"}}),[n,s]=v.useState({primary:{bg:"#3b82f6",hover:"#2563eb"},secondary:{bg:"#6b7280",hover:"#374151"},delete:{bg:"#ef4444",hover:"#dc2626"},submit:{bg:"#059669",hover:"#047857"},ok:{bg:"#10b981",hover:"#059669"}}),[o,l]=v.useState({error:{bg:"#fef2f2",border:"#fecaca",text:"#991b1b",icon:"🔥"},warning:{bg:"#fffbeb",border:"#fed7aa",text:"#92400e",icon:"⚠️"},message:{bg:"#eff6ff",border:"#bfdbfe",text:"#1e40af",icon:"💬"},success:{bg:"#f0fdf4",border:"#bbf7d0",text:"#166534",icon:"✅"}}),[i,c]=v.useState({selectedGradient:"ocean",direction:"to right",enableGradient:!0,customColors:{color1:"#3b82f6",color2:"#8b5cf6",color3:"#ec4899",color4:"#f59e0b"}}),[u,g]=v.useState({fontSize:14,shadows:!0,animations:!0}),[f,h]=v.useState("card1"),[x,y]=v.useState(null),[w,S]=v.useState(!1),[m,d]=v.useState(null),[p,b]=v.useState(!1),[C,T]=v.useState(!1),[N,L]=v.useState(null),[F,z]=v.useState(!1),G={ocean:{start:"#0ea5e9",end:"#3b82f6",name:"Ocean Blue",theme:{primary:"#3b82f6",secondary:"#0ea5e9",success:"#06b6d4",warning:"#f59e0b",danger:"#ef4444",cardTints:["#f0f9ff","#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa"]}},sunset:{start:"#f59e0b",end:"#ef4444",name:"Sunset Orange",theme:{primary:"#f59e0b",secondary:"#ef4444",success:"#10b981",warning:"#fbbf24",danger:"#dc2626",cardTints:["#fefbeb","#fef3c7","#fed7aa","#fdba74","#fb923c","#f97316"]}},forest:{start:"#10b981",end:"#059669",name:"Forest Green",theme:{primary:"#10b981",secondary:"#059669",success:"#06d6a0",warning:"#f59e0b",danger:"#ef4444",cardTints:["#f0fdf4","#dcfce7","#bbf7d0","#86efac","#4ade80","#22c55e"]}},purple:{start:"#8b5cf6",end:"#a855f7",name:"Purple Dream",theme:{primary:"#8b5cf6",secondary:"#a855f7",success:"#10b981",warning:"#f59e0b",danger:"#ef4444",cardTints:["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#a855f7"]}},pink:{start:"#ec4899",end:"#be185d",name:"Pink Passion",theme:{primary:"#ec4899",secondary:"#be185d",success:"#10b981",warning:"#f59e0b",danger:"#dc2626",cardTints:["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#ec4899"]}},dark:{start:"#374151",end:"#111827",name:"Dark Mode",theme:{primary:"#6366f1",secondary:"#8b5cf6",success:"#10b981",warning:"#f59e0b",danger:"#ef4444",cardTints:["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#6b7280"]}},rainbow:{start:"#f43f5e",end:"#8b5cf6",name:"Rainbow",theme:{primary:"#f43f5e",secondary:"#8b5cf6",success:"#10b981",warning:"#f59e0b",danger:"#ef4444",cardTints:["#fdf2f8","#fce7f3","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc"]}},gold:{start:"#fbbf24",end:"#f59e0b",name:"Golden Hour",theme:{primary:"#f59e0b",secondary:"#fbbf24",success:"#10b981",warning:"#d97706",danger:"#ef4444",cardTints:["#fffbeb","#fef3c7","#fed7aa","#fdba74","#fb923c","#f97316"]}},custom:{start:"#3b82f6",end:"#ec4899",name:"Custom",theme:{primary:"#3b82f6",secondary:"#8b5cf6",success:"#10b981",warning:"#f59e0b",danger:"#ef4444",cardTints:["#f0f9ff","#e0e7ff","#fdf2f8","#fef3c7","#fed7aa","#fdba74"]}}},He=()=>{const{color1:P,color2:D,color3:U,color4:_}=i.customColors,X=(V,lt)=>{const Ve=parseInt(V.replace("#",""),16),et=Math.round(2.55*lt),De=Math.min(255,(Ve>>16)+et),pe=Math.min(255,(Ve>>8&255)+et),An=Math.min(255,(Ve&255)+et);return"#"+(16777216+De*65536+pe*256+An).toString(16).slice(1)};return{start:P,end:U,name:"Custom Rainbow",theme:{primary:P,secondary:D,success:U,warning:_,danger:U,cardTints:[X(P,85),X(D,70),X(U,85),X(_,70),X(P,40),X(D,25)]}}},ze=P=>{const D=P||m||"#3b82f6",U=(lt,Ve)=>{const et=parseInt(lt.replace("#",""),16),De=Math.round(2.55*Ve),pe=Math.min(255,(et>>16)+De),An=Math.min(255,(et>>8&255)+De),We=Math.min(255,(et&255)+De);return"#"+(16777216+pe*65536+An*256+We).toString(16).slice(1)},_=(lt,Ve)=>U(lt,Ve),X=U(D,0),V=U(D,-20);return{start:X,end:V,name:"From Color Picker",theme:{primary:D,secondary:U(D,-15),success:"#22c55e",warning:"#f59e0b",danger:"#ef4444",cardTints:[_(D,85),_(D,70),_(D,60),_(D,50),_(D,40),_(D,30)]}}},vt=v.useMemo(()=>{const P=i.selectedGradient==="custom"?He():i.selectedGradient==="fromPicker"?ze():G[i.selectedGradient],D=(We,Qt=1)=>{const fe=We.replace("#",""),at=parseInt(fe,16),Yt=at>>16&255,Vr=at>>8&255,Kt=at&255;return`rgba(${Yt}, ${Vr}, ${Kt}, ${Qt})`},U=We=>{const Qt=We.replace("#",""),fe=parseInt(Qt,16);return{r:fe>>16&255,g:fe>>8&255,b:fe&255}},_=We=>We.toString(16).padStart(2,"0"),X=(We,Qt,fe=.5)=>{const at=U(We),Yt=U(Qt),Vr=Math.round(at.r*(1-fe)+Yt.r*fe),Kt=Math.round(at.g*(1-fe)+Yt.g*fe),fo=Math.round(at.b*(1-fe)+Yt.b*fe);return`#${_(Vr)}${_(Kt)}${_(fo)}`},V=We=>{const Qt=We.replace("#",""),fe=parseInt(Qt,16);let at=fe>>16&255,Yt=fe>>8&255,Vr=fe&255;const Kt=Wr=>(Wr=Wr/255,Wr<=.03928?Wr/12.92:Math.pow((Wr+.055)/1.055,2.4)),fo=Kt(at),Bd=Kt(Yt),Ud=Kt(Vr);return .2126*fo+.7152*Bd+.0722*Ud>.55?"#111827":"#ffffff"},lt=P.start,Ve=P.end,et=.35,De=i.enableGradient?`linear-gradient(${i.direction}, ${D(lt,et)}, ${D(Ve,et)})`:"none",pe=V(X(lt,Ve,.5));return`
      /* ToggleBox Stylesheet - Theme: ${i.selectedGradient==="fromPicker"&&m?`Color Picker Base (${m})`:i.selectedGradient} */
      /* Container Styles */
      .preview-template {
        padding: 24px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
        line-height: 1.5;
      }

      /* Design Tokens derived from current theme */
      :root {
        --tb-primary: ${n.primary.bg};
        --tb-primary-hover: ${n.primary.hover};
        --tb-secondary: ${n.secondary.bg};
        --tb-success: ${n.ok.bg};
        --tb-warning: ${o.warning.border};
        --tb-danger: ${n.delete.bg};
        --tb-neutral: #e5e7eb;
        --tb-grad-start: ${lt};
        --tb-grad-end: ${Ve};
        --tb-text-dark: #111827;
        --tb-text: #374151;
        --tb-radius: 9999px;
      }

      /* Individual Card Styles - Export Ready */
      .card-1 {
        background-color: ${t.card1.backgroundColor} !important;
        background-image: ${De} !important;
        color: ${i.enableGradient?pe:V(t.card1.backgroundColor)} !important;
        border-radius: ${t.card1.borderRadius}px !important;
        padding: ${t.card1.padding}px !important;
        border: ${t.card1.borderWidth}px solid ${t.card1.borderColor} !important;
        box-shadow: ${u.shadows?`0 ${t.card1.shadow}px ${t.card1.shadow*2}px rgba(0, 0, 0, 0.1)`:"none"} !important;
        margin-bottom: 16px !important;
        ${u.animations?"transition: all 0.3s ease !important;":""}
      }
      .card-1 * { color: ${i.enableGradient?pe:V(t.card1.backgroundColor)} !important; }

      .card-2 {
        background-color: ${t.card2.backgroundColor} !important;
        background-image: ${De} !important;
        color: ${i.enableGradient?pe:V(t.card2.backgroundColor)} !important;
        border-radius: ${t.card2.borderRadius}px !important;
        padding: ${t.card2.padding}px !important;
        border: ${t.card2.borderWidth}px solid ${t.card2.borderColor} !important;
        box-shadow: ${u.shadows?`0 ${t.card2.shadow}px ${t.card2.shadow*2}px rgba(0, 0, 0, 0.1)`:"none"} !important;
        margin-bottom: 16px !important;
        ${u.animations?"transition: all 0.3s ease !important;":""}
      }
      .card-2 * { color: ${i.enableGradient?pe:V(t.card2.backgroundColor)} !important; }

      .card-3 {
        background-color: ${t.card3.backgroundColor} !important;
        background-image: ${De} !important;
        color: ${i.enableGradient?pe:V(t.card3.backgroundColor)} !important;
        border-radius: ${t.card3.borderRadius}px !important;
        padding: ${t.card3.padding}px !important;
        border: ${t.card3.borderWidth}px solid ${t.card3.borderColor} !important;
        box-shadow: ${u.shadows?`0 ${t.card3.shadow}px ${t.card3.shadow*2}px rgba(0, 0, 0, 0.1)`:"none"} !important;
        margin-bottom: 16px !important;
        ${u.animations?"transition: all 0.3s ease !important;":""}
      }
      .card-3 * { color: ${i.enableGradient?pe:V(t.card3.backgroundColor)} !important; }

      .card-4 {
        background-color: ${t.card4.backgroundColor} !important;
        background-image: ${De} !important;
        color: ${i.enableGradient?pe:V(t.card4.backgroundColor)} !important;
        border-radius: ${t.card4.borderRadius}px !important;
        padding: ${t.card4.padding}px !important;
        border: ${t.card4.borderWidth}px solid ${t.card4.borderColor} !important;
        box-shadow: ${u.shadows?`0 ${t.card4.shadow}px ${t.card4.shadow*2}px rgba(0, 0, 0, 0.1)`:"none"} !important;
        margin-bottom: 16px !important;
        ${u.animations?"transition: all 0.3s ease !important;":""}
      }
      .card-4 * { color: ${i.enableGradient?pe:V(t.card4.backgroundColor)} !important; }

      .card-5 {
        background-color: ${t.card5.backgroundColor} !important;
        background-image: ${De} !important;
        color: ${i.enableGradient?pe:V(t.card5.backgroundColor)} !important;
        border-radius: ${t.card5.borderRadius}px !important;
        padding: ${t.card5.padding}px !important;
        border: ${t.card5.borderWidth}px solid ${t.card5.borderColor} !important;
        box-shadow: ${u.shadows?`0 ${t.card5.shadow}px ${t.card5.shadow*2}px rgba(0, 0, 0, 0.1)`:"none"} !important;
        margin-bottom: 16px !important;
        ${u.animations?"transition: all 0.3s ease !important;":""}
      }
      .card-5 * { color: ${i.enableGradient?pe:V(t.card5.backgroundColor)} !important; }

      .card-6 {
        background-color: ${t.card6.backgroundColor} !important;
        background-image: ${De} !important;
        color: ${i.enableGradient?pe:V(t.card6.backgroundColor)} !important;
        border-radius: ${t.card6.borderRadius}px !important;
        padding: ${t.card6.padding}px !important;
        border: ${t.card6.borderWidth}px solid ${t.card6.borderColor} !important;
        box-shadow: ${u.shadows?`0 ${t.card6.shadow}px ${t.card6.shadow*2}px rgba(0, 0, 0, 0.1)`:"none"} !important;
        margin-bottom: 16px !important;
        ${u.animations?"transition: all 0.3s ease !important;":""}
      }
      .card-6 * { color: ${i.enableGradient?pe:V(t.card6.backgroundColor)} !important; }

      /* Hover effects for all cards */
      .card-1:hover, .card-2:hover, .card-3:hover, .card-4:hover, .card-5:hover, .card-6:hover {
        ${u.animations?"transform: translateY(-2px) !important;":""}
        ${u.shadows?"box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15) !important;":""}
      }

      /* Button System */
      .btn-primary {
        background: linear-gradient(135deg, ${n.primary.bg}, ${n.primary.hover}) !important;
        color: white !important;
        border: none !important;
        padding: 12px 24px !important;
        border-radius: 8px !important;
        font-size: ${u.fontSize}px !important;
        font-weight: 600 !important;
        cursor: pointer !important;
        ${u.animations?"transition: all 0.2s ease !important;":""}
      }

      .btn-primary:hover {
        background: ${n.primary.hover} !important;
        ${u.animations?"transform: translateY(-1px) !important;":""}
      }

      .btn-secondary {
        background: linear-gradient(135deg, ${n.secondary.bg}, ${n.secondary.hover}) !important;
        color: white !important;
        border: none !important;
        padding: 12px 24px !important;
        border-radius: 8px !important;
        font-size: ${u.fontSize}px !important;
        font-weight: 500 !important;
        cursor: pointer !important;
        ${u.animations?"transition: all 0.2s ease !important;":""}
      }

      .btn-secondary:hover {
        background: ${n.secondary.hover} !important;
        ${u.animations?"transform: translateY(-1px) !important;":""}
      }

      /* Badges */
      .badge { display:inline-flex; align-items:center; gap:6px; padding: 4px 10px; border-radius: 9999px; font-weight:600; font-size:12px; letter-spacing:.2px; }
      .badge-primary { background: var(--tb-primary); color: #fff; box-shadow: 0 1px 0 rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1); }
      .badge-success { background: var(--tb-success); color: #fff; box-shadow: 0 1px 0 rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1); }
      .badge-warning { background: var(--tb-warning); color: #fff; box-shadow: 0 1px 0 rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1); }
      .badge-danger { background: var(--tb-danger); color: #fff; box-shadow: 0 1px 0 rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.1); }
      .badge-neutral { background: var(--tb-neutral); color: var(--tb-text); box-shadow: inset 0 -1px 0 rgba(0,0,0,.06); }

      /* Chips */
      .chip { display:inline-flex; align-items:center; padding: 6px 12px; border-radius: 9999px; font-weight:500; font-size:12px; }
      .chip-primary { background: rgba(59,130,246,.12); color: var(--tb-primary); border: 1px solid rgba(59,130,246,.25); }
      .chip-success { background: rgba(16,185,129,.12); color: var(--tb-success); border: 1px solid rgba(16,185,129,.25); }
      .chip-warning { background: rgba(245,158,11,.12); color: var(--tb-warning); border: 1px solid rgba(245,158,11,.25); }
      .chip-danger { background: rgba(239,68,68,.12); color: var(--tb-danger); border: 1px solid rgba(239,68,68,.25); }
      .chip-outline { background:#fff; color: var(--tb-primary); border: 1px solid var(--tb-primary); }

      /* Tabs */
      .tabs { display:flex; gap:16px; border-bottom: 1px solid #e5e7eb; }
      .tab { position:relative; padding: 8px 4px; color:#6b7280; font-weight:600; }
      .tab.active { color: var(--tb-primary); }
      .tab.active:after { content:''; position:absolute; left:0; right:0; bottom:-1px; height:2px; background: linear-gradient(90deg, var(--tb-grad-start), var(--tb-grad-end)); border-radius:2px; }

      /* Progress */
      .progress { width:100%; height:10px; border-radius:9999px; background:#e5e7eb; overflow:hidden; box-shadow: inset 0 1px 2px rgba(0,0,0,.06); }
      .progress-bar { height:100%; background: linear-gradient(90deg, var(--tb-grad-start), var(--tb-grad-end)); box-shadow: 0 1px 2px rgba(0,0,0,.08); }

      /* Links */
      .link { color: var(--tb-primary); text-decoration:none; font-weight:500; }
      .link:hover { text-decoration:underline; }

      /* Avatars */
      .avatar { width:40px; height:40px; border-radius:9999px; box-shadow: 0 2px 6px rgba(0,0,0,.12), inset 0 -2px 6px rgba(255,255,255,.25); border:3px solid #fff; }
      .avatar-primary { background: var(--tb-primary); outline: 2px solid var(--tb-grad-end); }
      .avatar-success { background: var(--tb-success); outline: 2px solid var(--tb-primary); }
      .avatar-warning { background: var(--tb-warning); outline: 2px solid var(--tb-primary); }

      /* Breadcrumbs */
      .breadcrumbs a { color: var(--tb-primary); text-decoration:none; }
      .breadcrumbs .divider { color:#9ca3af; }
      .breadcrumbs .current { color:#6b7280; }

      /* Pagination */
      .pagination { display:flex; align-items:center; gap:8px; }
      .page { padding:8px 10px; border-radius:8px; border:1px solid #e5e7eb; background:#fff; }
      .page-active { background: var(--tb-primary); border-color: var(--tb-primary); color:#fff; box-shadow: 0 1px 2px rgba(0,0,0,.08); }

      /* Pills (for table statuses) */
      .pill { padding: 3px 8px; border-radius: 9999px; color:#fff; font-size:12px; font-weight:600; }
      .pill-success { background: var(--tb-success); }
      .pill-warning { background: var(--tb-warning); }
      .pill-danger { background: var(--tb-danger); }

      /* Table */
      .table thead tr { background: linear-gradient(90deg, var(--tb-grad-start), var(--tb-grad-end)); color:#fff; }
      .table tbody tr { background:#fff; }

      /* Toggles */
      .toggle { width:44px; height:24px; border-radius:9999px; position:relative; background:#e5e7eb; transition: background .2s ease; }
      .toggle .knob { position:absolute; top:2px; left:2px; width:20px; height:20px; background:#fff; border-radius:9999px; box-shadow:0 1px 2px rgba(0,0,0,.1); transition: transform .2s ease; }
      .toggle.on { background: var(--tb-primary); }
      .toggle.on .knob { transform: translateX(20px); }

      /* Toasts */
      .toast { display:flex; gap:10px; align-items:flex-start; padding:12px 14px; border-radius:10px; background:#fff; border:1px solid #e5e7eb; box-shadow: 0 4px 8px rgba(0,0,0,.06); }
      .toast .icon { width:24px; height:24px; border-radius:9999px; display:inline-flex; align-items:center; justify-content:center; color:#fff; font-size:12px; }
      .toast-success { border-left:4px solid var(--tb-success); }
      .toast-success .icon { background: var(--tb-success); }
      .toast-warning { border-left:4px solid var(--tb-warning); }
      .toast-warning .icon { background: var(--tb-warning); }
      .toast-danger { border-left:4px solid var(--tb-danger); }
      .toast-danger .icon { background: var(--tb-danger); }
      .toast-message { border-left:4px solid var(--tb-primary); }
      .toast-message .icon { background: var(--tb-primary); }

      /* Code block */
      .code-block { background:#0b1220; color:#e5e7eb; border-radius:12px; border:1px solid #0f172a; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; padding:14px 16px; overflow:auto; box-shadow: inset 0 1px 0 rgba(255,255,255,.04); }
      .code-block .k { color: var(--tb-warning); }
      .code-block .fn { color: var(--tb-success); }
      .code-block .p { color: #93c5fd; }
      .code-block .s { color: #f472b6; }
      .code-block .c { color:#64748b; }

      /* Mini bar chart */
      .chart { display:grid; gap:10px; }
      .bar { height:10px; background:#e5e7eb; border-radius:9999px; overflow:hidden; box-shadow: inset 0 1px 2px rgba(0,0,0,.06); }
      .bar-fill { height:100%; background: linear-gradient(90deg, var(--tb-grad-start), var(--tb-grad-end)); border-radius:9999px; box-shadow: 0 1px 2px rgba(0,0,0,.08); }

      .btn-delete {
        background: linear-gradient(135deg, ${n.delete.bg}, ${n.delete.hover}) !important;
        color: white !important;
        border: none !important;
        padding: 10px 20px !important;
        border-radius: 8px !important;
        font-size: ${u.fontSize-1}px !important;
        font-weight: 500 !important;
        cursor: pointer !important;
        ${u.animations?"transition: all 0.2s ease !important;":""}
      }

      .btn-delete:hover {
        background: ${n.delete.hover} !important;
        ${u.animations?"transform: translateY(-1px) !important;":""}
      }

      .btn-submit {
        background: linear-gradient(135deg, ${n.submit.bg}, ${n.submit.hover}) !important;
        color: white !important;
        border: none !important;
        padding: 14px 28px !important;
        border-radius: 8px !important;
        font-size: ${u.fontSize+1}px !important;
        font-weight: 600 !important;
        cursor: pointer !important;
        ${u.animations?"transition: all 0.2s ease !important;":""}
      }

      .btn-submit:hover {
        background: ${n.submit.hover} !important;
        ${u.animations?"transform: translateY(-1px) scale(1.02) !important;":""}
      }

      .btn-ok {
        background: linear-gradient(135deg, ${n.ok.bg}, ${n.ok.hover}) !important;
        color: white !important;
        border: none !important;
        padding: 10px 24px !important;
        border-radius: 8px !important;
        font-size: ${u.fontSize}px !important;
        font-weight: 500 !important;
        cursor: pointer !important;
        ${u.animations?"transition: all 0.2s ease !important;":""}
      }

      .btn-ok:hover {
        background: ${n.ok.hover} !important;
        ${u.animations?"transform: translateY(-1px) !important;":""}
      }

      /* Alert System */
      .alert-error {
        background: ${o.error.bg} !important;
        border: 1px solid ${o.error.border} !important;
        color: ${o.error.text} !important;
        padding: 16px !important;
        border-radius: 8px !important;
        margin: 16px 0 !important;
        display: flex !important;
        align-items: center !important;
        gap: 12px !important;
      }

      .alert-warning {
        background: ${o.warning.bg} !important;
        border: 1px solid ${o.warning.border} !important;
        color: ${o.warning.text} !important;
        padding: 16px !important;
        border-radius: 8px !important;
        margin: 16px 0 !important;
        display: flex !important;
        align-items: center !important;
        gap: 12px !important;
      }

      .alert-message {
        background: ${o.message.bg} !important;
        border: 1px solid ${o.message.border} !important;
        color: ${o.message.text} !important;
        padding: 16px !important;
        border-radius: 8px !important;
        margin: 16px 0 !important;
        display: flex !important;
        align-items: center !important;
        gap: 12px !important;
      }

      .alert-success {
        background: ${o.success.bg} !important;
        border: 1px solid ${o.success.border} !important;
        color: ${o.success.text} !important;
        padding: 16px !important;
        border-radius: 8px !important;
        margin: 16px 0 !important;
        display: flex !important;
        align-items: center !important;
        gap: 12px !important;
      }

      /* Gradient Background Elements */
      .gradient-showcase {
        background: ${i.enableGradient?`linear-gradient(${i.direction}, ${P.start}, ${P.end})`:P.start} !important;
        padding: 32px !important;
        border-radius: 16px !important;
        color: white !important;
        text-align: center !important;
        margin: 32px 0 !important;
        ${u.shadows?"box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2) !important;":""}
      }

      /* Text Styles */
      .preview-heading {
        font-size: ${u.fontSize+10}px !important;
        font-weight: 700 !important;
        margin-bottom: 16px !important;
        line-height: 1.2 !important;
      }

      .preview-text {
        font-size: ${u.fontSize}px !important;
        line-height: 1.6 !important;
        margin-bottom: 16px !important;
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .preview-template {
          padding: 16px !important;
        }
        
        .card-1, .card-2, .card-3, .card-4, .card-5, .card-6 {
          padding: 16px !important;
        }
        
        .btn-primary, .btn-secondary, .btn-submit {
          padding: 10px 20px !important;
          font-size: ${u.fontSize-1}px !important;
        }
      }
    `},[t,n,o,i,u,G,m]),qe=i.selectedGradient==="custom"?He():i.selectedGradient==="fromPicker"?ze():G[i.selectedGradient],yt=nc(o,{primary:n.primary.bg,primaryHover:n.primary.hover,secondary:n.secondary.bg,success:n.ok.bg,warning:(Da=o.warning)==null?void 0:Da.border,danger:n.delete.bg,neutral:"#e5e7eb",start:qe.start,end:qe.end}),bt=v.useCallback(()=>{S(!1),y(null)},[]),$=v.useCallback(P=>{S(!1),y("Failed to load preview content"),console.error("Preview iframe error:",P)},[]),M=(P,D,U)=>{r(_=>({..._,[P]:{..._[P],[D]:U}}))},k=(P,D,U)=>{s(_=>({..._,[P]:{..._[P],[D]:U}}))},E=(P,D={})=>{const _=(P==="custom"?He():P==="fromPicker"?ze(D.base):G[P]).theme;s({primary:{bg:_.primary,hover:_.secondary},secondary:{bg:"#6b7280",hover:"#374151"},delete:{bg:_.danger,hover:"#dc2626"},submit:{bg:"#8b5cf6",hover:"#7c3aed"},ok:{bg:"#22c55e",hover:"#16a34a"}}),l({error:{bg:"#fef2f2",border:_.danger,text:"#991b1b",icon:"🔥"},warning:{bg:"#fffbeb",border:_.warning,text:"#92400e",icon:"⚠️"},message:{bg:_.cardTints[0],border:_.primary,text:"#1e40af",icon:"💬"},success:{bg:"#f0fdf4",border:_.success,text:"#166534",icon:"✅"}});const X=_.cardTints&&_.cardTints.length===6?_.cardTints:[_.primary,hexToTint(_.primary,85),hexToTint(_.secondary||_.primary,70),hexToTint(_.primary,60),hexToTint(_.secondary||_.primary,50),hexToTint(_.primary,40)];r(V=>({card1:{...V.card1,backgroundColor:X[0],borderColor:_.primary},card2:{...V.card2,backgroundColor:X[1],borderColor:_.secondary||_.primary},card3:{...V.card3,backgroundColor:X[2],borderColor:_.primary},card4:{...V.card4,backgroundColor:X[3],borderColor:_.success||_.primary},card5:{...V.card5,backgroundColor:X[4],borderColor:_.warning||_.secondary||_.primary},card6:{...V.card6,backgroundColor:X[5],borderColor:_.secondary||_.primary}}))};v.useEffect(()=>{E(i.selectedGradient);const P=Zh();P&&P.type==="button"&&P.target&&P.color&&k(P.target,"bg",P.color);const D=qh();D&&d(D)},[]),v.useEffect(()=>{i.selectedGradient==="fromPicker"&&m&&E("fromPicker",{base:m})},[m]);const I=(P,D)=>{c(U=>({...U,[P]:D})),P==="selectedGradient"&&E(D)},A=(P,D)=>{g(U=>({...U,[P]:D}))},le=(P=!1)=>{if(P)return vt;const D=new Blob([vt],{type:"text/css"}),U=URL.createObjectURL(D),_=document.createElement("a");_.href=U,_.download="six-cards-stylesheet.css",_.click(),URL.revokeObjectURL(U)},ve=(P=!1)=>{var V;const D=`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>ToggleBox Demo</title>
    <link rel="stylesheet" href="./six-cards-stylesheet.css" />
    <style>body{background:#f8fafc;padding:24px} .container{max-width:1200px;margin:0 auto}</style>
  </head>
  <body>
    <div class="container">
${nc(o,{primary:n.primary.bg,primaryHover:n.primary.hover,secondary:n.secondary.bg,success:n.ok.bg,warning:(V=o.warning)==null?void 0:V.border,danger:n.delete.bg,neutral:"#e5e7eb",start:qe.start,end:qe.end})}
    </div>
  </body>
</html>`;if(P)return D;const U=new Blob([D],{type:"text/html"}),_=URL.createObjectURL(U),X=document.createElement("a");X.href=_,X.download="index.html",X.click(),URL.revokeObjectURL(_)},ye=async(P=!1)=>{var _;const U=`Integrate ToggleBox stylesheet (Theme: ${i.selectedGradient==="fromPicker"&&m?`From Color Picker (${m})`:((_=G[i.selectedGradient])==null?void 0:_.name)||"Custom Theme"}).

1) Add the CSS file to your project and include in the <head> of every page:
<link rel="stylesheet" href="/assets/css/six-cards-stylesheet.css" />

2) Use the provided utility classes without renaming:
   - Cards: .card-1 ... .card-6
   - Buttons: .btn-primary, .btn-secondary, .btn-submit, .btn-ok, .btn-delete
   - Alerts: .alert-error, .alert-warning, .alert-message, .alert-success

3) HTML example:
<div class="card-1"><h3>Title</h3><p class="preview-text">Content</p><button class="btn-primary">Action</button></div>

4) Guardrails for agents (do NOT proceed without asking the user):
   - Do not remove or rename any .card-* / .btn-* / .alert-* classes.
   - Do not change background-color or background-image on .card-* rules; both are required for solid/gradient compatibility.
   - Do not reduce color contrast or change text colors on cards/buttons to values that may break readability.
   - Do not delete border-radius, spacing, or box-shadow tokens from these classes.
   - If a design needs override, add new classes or wrappers; avoid editing the exported classes directly.
   - Before altering the stylesheet, explicitly ask: "Will this change reduce contrast, remove gradients, rename classes, or otherwise degrade the visual system?" If yes, stop and request confirmation.

5) Optional customization: create CSS variables on :root and map them to these classes; keep original declarations as fallbacks.
`;if(P)return U;try{await navigator.clipboard.writeText(U),window.alert("Agent instructions copied to clipboard.")}catch(X){console.error("Clipboard copy failed",X)}},wt=()=>le(!0),co=()=>ve(!0),uo=()=>ye(!0),dr=()=>{b(!0)},po=async P=>{try{const D={css:wt(),html:co(),agentInstructions:uo(),files:["styles.css","demo.html","agent-instructions.md"]};await sg(P,D),setTimeout(()=>{lg(P)&&(T(!0),Fd())},3e3)}catch(D){throw D}},Fd=()=>{N==="css"?le():N==="html"?ve():N==="agent"&&ye(),L(null)},Ad=t[f];return a.jsxs("div",{className:`six-cards-interactive ${e}`,"data-testid":"six-cards-interactive",children:[a.jsx("div",{className:"bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg shadow-lg mb-6",children:a.jsxs("div",{className:"flex items-start justify-between gap-4",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl font-bold mb-2",children:"🎨 Stylesheet Builder"}),a.jsx("p",{className:"text-indigo-100",children:"Build a cohesive stylesheet: define brand colors, buttons, cards, alerts, and form states. The 6 cards below are preview surfaces driven by your system colors."})]}),a.jsx(ig,{onExport:C?le:()=>{L("css"),dr()},onExportHtml:C?ve:()=>{L("html"),dr()},onCopyAgentInstructions:C?ye:()=>{L("agent"),dr()},submitStyle:{background:`linear-gradient(135deg, ${n.submit.bg}, ${n.submit.hover})`},onEmailRequired:C?null:dr})]})}),a.jsx("div",{className:"mb-6",children:a.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg shadow-sm border-2 border-blue-200",children:[a.jsx("h3",{className:"text-lg font-semibold mb-2 text-gray-800 flex items-center",children:"🎨 Card Background Gradient & Themes"}),a.jsx("div",{className:"mb-3 p-3 rounded-md bg-white/70 border border-blue-200 text-xs text-blue-900",children:"These controls color the six cards below. Toggle gradient on/off and pick a theme or your custom color."}),a.jsx("p",{className:"text-sm text-blue-700 mb-4 font-medium",children:"Choose a gradient theme to set cohesive colors for all cards, buttons, and alerts. Then fine-tune individual components below!"}),a.jsx(Qh,{presets:Object.fromEntries(Object.entries(G).filter(([P])=>P!=="custom")),selectedKey:i.selectedGradient,onSelect:P=>I("selectedGradient",P),pickerBaseColor:m,inlinePicker:{onOpen:()=>z(!0)}}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-medium text-gray-600 mb-1",children:"Gradient Direction"}),a.jsxs("select",{value:i.direction,onChange:P=>I("direction",P.target.value),className:"w-full text-xs border border-gray-300 rounded px-2 py-1","data-testid":"gradient-direction",children:[a.jsx("option",{value:"to right",children:"→ Left to Right"}),a.jsx("option",{value:"to left",children:"← Right to Left"}),a.jsx("option",{value:"to bottom",children:"↓ Top to Bottom"}),a.jsx("option",{value:"to top",children:"↑ Bottom to Top"}),a.jsx("option",{value:"135deg",children:"↘ Diagonal"}),a.jsx("option",{value:"45deg",children:"↗ Diagonal Alt"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-medium text-gray-600 mb-1",children:"Gradient Effect"}),a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("button",{onClick:()=>I("enableGradient",!0),className:`px-3 py-2 text-xs font-medium rounded transition-all ${i.enableGradient?"bg-green-600 text-white":"bg-gray-200 text-gray-600 hover:bg-gray-300"}`,"data-testid":"gradient-enable",children:"Yes"}),a.jsx("button",{onClick:()=>I("enableGradient",!1),className:`px-3 py-2 text-xs font-medium rounded transition-all ${i.enableGradient?"bg-gray-200 text-gray-600 hover:bg-gray-300":"bg-red-600 text-white"}`,"data-testid":"gradient-disable",children:"No"})]}),a.jsx("p",{className:"text-xs text-gray-500 mt-1",children:i.enableGradient?"Smooth gradient backgrounds":"Solid color backgrounds"})]})]})]})}),a.jsx(Gh,{theme:qe.theme,buttonStyles:n,alertStyles:o,currentGradient:qe,onUpdateButtonStyle:k}),F&&a.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[a.jsx("div",{className:"absolute inset-0 bg-black/40",onClick:()=>z(!1)}),a.jsxs("div",{className:"relative bg-white rounded-lg shadow-xl border max-w-xl w-full p-4",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"Pick a base color"}),a.jsx("button",{onClick:()=>z(!1),className:"text-gray-500 hover:text-gray-700",children:"✕"})]}),a.jsx(Dd,{value:m||"#3b82f6",onChange:P=>{d(P)},onColorChange:(P,D,U)=>{d(U)},property:"backgroundColor",backgroundColor:"#ffffff",showVisualPicker:!0,showSliders:!0,presets:["#3b82f6","#ef4444","#10b981","#f59e0b","#8b5cf6","#0ea5e9","#111827","#e5e7eb"]}),a.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[a.jsx("button",{className:"px-4 py-2 rounded border",onClick:()=>z(!1),children:"Cancel"}),a.jsx("button",{className:"px-4 py-2 rounded text-white",style:{background:`linear-gradient(135deg, ${n.submit.bg}, ${n.submit.hover})`},onClick:()=>{E("fromPicker",{base:m}),c(P=>({...P,selectedGradient:"fromPicker"})),z(!1)},children:"Use this color"})]})]})]}),a.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6",children:[a.jsxs("div",{className:"xl:col-span-2 bg-white p-6 rounded-lg shadow-sm border",children:[a.jsx("div",{className:"flex items-center mb-6",children:a.jsx("h3",{className:"text-lg font-semibold text-gray-800 flex items-center",children:"🎯 Individual Card Controls"})}),a.jsx("div",{className:"grid grid-cols-3 md:grid-cols-6 gap-2 mb-6",children:Object.keys(t).map((P,D)=>a.jsxs("button",{onClick:()=>h(P),className:`p-3 rounded-lg border-2 text-sm font-medium transition-all ${f===P?"border-indigo-500 bg-indigo-50 text-indigo-700":"border-gray-200 hover:border-gray-300 text-gray-700"}`,style:{backgroundColor:f===P?void 0:t[P].backgroundColor},"data-testid":`select-${P}`,children:["Card ",D+1]},P))}),a.jsx(ug,{selectedCard:f,card:Ad,update:(P,D)=>M(f,P,D)})]}),a.jsx("div",{className:"space-y-6",children:a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[a.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-800 flex items-center",children:"⚙️ General Settings"}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm font-medium text-gray-600 mb-1",children:["Font Size: ",u.fontSize,"px"]}),a.jsx("input",{type:"range",min:"12",max:"18",value:u.fontSize,onChange:P=>A("fontSize",parseInt(P.target.value)),className:"w-full","data-testid":"general-font-size"})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-sm font-medium text-gray-600",children:"Shadows"}),a.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[a.jsx("input",{type:"checkbox",checked:u.shadows,onChange:P=>A("shadows",P.target.checked),className:"sr-only peer","data-testid":"general-shadows"}),a.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"})]})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-sm font-medium text-gray-600",children:"Animations"}),a.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[a.jsx("input",{type:"checkbox",checked:u.animations,onChange:P=>A("animations",P.target.checked),className:"sr-only peer","data-testid":"general-animations"}),a.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"})]})]})]})]})})]}),a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-800 flex items-center",children:"👀 Live Preview - All 6 Cards"}),w&&a.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[a.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-2"}),"Loading..."]})]}),a.jsx("div",{className:"border rounded-lg overflow-hidden bg-gray-50",children:a.jsx(io,{htmlContent:yt,cssContent:vt,height:"800px",onLoad:bt,onError:$,allowScripts:!1,className:"w-full"})}),a.jsx("div",{className:"mt-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg",children:a.jsxs("p",{className:"text-sm text-indigo-700",children:[a.jsx("strong",{children:"🎯 Export Ready:"})," Your CSS includes 6 individual card classes (.card-1, .card-2, .card-3, .card-4, .card-5, .card-6) plus complete button system and alert components. Perfect for any project!"]})}),x&&a.jsx("div",{className:"mt-4 p-3 bg-red-50 border border-red-200 rounded-md",children:a.jsx("p",{className:"text-sm text-red-600",children:x})})]}),a.jsx(cg,{isOpen:p,onClose:()=>b(!1),onSubmit:po,title:"Get Your Custom Stylesheet"})]})},pg=({className:e=""})=>{const[t,r]=v.useState(""),[n,s]=v.useState("default"),[o,l]=v.useState("desktop"),[i,c]=v.useState(!1),[u,g]=v.useState(null),f={default:{name:"Default Template",description:"Standard layout with cards, buttons, and text elements",content:za()},blog:{name:"Blog Layout",description:"Article-style layout with headings and paragraphs",content:`
        <div data-testid="blog-template" class="preview-template p-6 max-w-4xl mx-auto bg-white">
          <article class="blog-article">
            <header class="mb-8">
              <h1 class="preview-heading text-4xl font-bold mb-4 text-gray-900">
                The Art of Modern Web Design
              </h1>
              <div class="blog-meta text-sm text-gray-600 mb-4">
                Published on <time datetime="2024-03-15">March 15, 2024</time> by <span class="author">Design Team</span>
              </div>
            </header>

            <section class="mb-8">
              <h2 class="preview-subheading text-2xl font-semibold mb-4 text-gray-800">
                Introduction
              </h2>
              <p class="preview-text text-base leading-relaxed mb-4 text-gray-700">
                In today's digital landscape, web design has evolved beyond simple aesthetics. 
                Modern web design combines functionality, accessibility, and visual appeal to create 
                experiences that truly resonate with users.
              </p>
              <p class="preview-text text-base leading-relaxed mb-6 text-gray-700">
                This article explores the key principles that define contemporary web design, 
                from responsive layouts to interactive elements that enhance user engagement.
              </p>
            </section>

            <section class="mb-8">
              <h2 class="preview-subheading text-2xl font-semibold mb-4 text-gray-800">
                Key Design Principles
              </h2>
              <div class="design-principles grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="preview-card p-6 rounded-lg shadow-sm border bg-white">
                  <h3 class="text-lg font-semibold mb-3 text-gray-800">Simplicity</h3>
                  <p class="text-gray-600 text-sm">
                    Clean, uncluttered designs that focus on essential elements and clear navigation.
                  </p>
                </div>
                <div class="preview-card p-6 rounded-lg shadow-sm border bg-white">
                  <h3 class="text-lg font-semibold mb-3 text-gray-800">Responsiveness</h3>
                  <p class="text-gray-600 text-sm">
                    Designs that adapt seamlessly across all devices and screen sizes.
                  </p>
                </div>
              </div>
              <div class="cta-section text-center">
                <button class="preview-button px-6 py-3 rounded-md font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700">
                  Learn More About Design
                </button>
              </div>
            </section>
          </article>
        </div>
      `},dashboard:{name:"Dashboard Layout",description:"Stats and metrics layout with cards and charts",content:`
        <div data-testid="dashboard-template" class="preview-template p-6 max-w-6xl mx-auto bg-gray-50">
          <header class="mb-8">
            <h1 class="preview-heading text-3xl font-bold mb-2 text-gray-900">
              Analytics Dashboard
            </h1>
            <p class="text-gray-600">Monitor your website's performance and user engagement</p>
          </header>

          <div class="stats-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="preview-card p-6 rounded-lg shadow-sm border bg-white">
              <div class="stat-icon w-10 h-10 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
                📊
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-1">24.5K</h3>
              <p class="text-sm text-gray-600">Total Visitors</p>
              <div class="stat-change text-xs text-green-600 mt-1">+12% from last month</div>
            </div>

            <div class="preview-card p-6 rounded-lg shadow-sm border bg-white">
              <div class="stat-icon w-10 h-10 bg-green-100 rounded-lg mb-4 flex items-center justify-center">
                💰
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-1">$15.2K</h3>
              <p class="text-sm text-gray-600">Revenue</p>
              <div class="stat-change text-xs text-green-600 mt-1">+8% from last month</div>
            </div>

            <div class="preview-card p-6 rounded-lg shadow-sm border bg-white">
              <div class="stat-icon w-10 h-10 bg-yellow-100 rounded-lg mb-4 flex items-center justify-center">
                📈
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-1">3.2%</h3>
              <p class="text-sm text-gray-600">Conversion Rate</p>
              <div class="stat-change text-xs text-red-600 mt-1">-0.3% from last month</div>
            </div>

            <div class="preview-card p-6 rounded-lg shadow-sm border bg-white">
              <div class="stat-icon w-10 h-10 bg-purple-100 rounded-lg mb-4 flex items-center justify-center">
                ⏱️
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-1">2m 34s</h3>
              <p class="text-sm text-gray-600">Avg. Session</p>
              <div class="stat-change text-xs text-green-600 mt-1">+15s from last month</div>
            </div>
          </div>

          <div class="dashboard-actions flex flex-wrap gap-4 mb-8">
            <button class="preview-button px-4 py-2 rounded-md font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700">
              Export Report
            </button>
            <button class="preview-button px-4 py-2 rounded-md font-medium transition-colors bg-gray-200 text-gray-800 hover:bg-gray-300">
              Filter Data
            </button>
            <button class="preview-button px-4 py-2 rounded-md font-medium transition-colors border border-blue-600 text-blue-600 hover:bg-blue-50">
              Share Dashboard
            </button>
          </div>

          <div class="chart-section">
            <div class="preview-card p-6 rounded-lg shadow-sm border bg-white">
              <h3 class="text-lg font-semibold mb-4 text-gray-800">Traffic Overview</h3>
              <div class="chart-placeholder h-64 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                <p class="text-gray-500">📊 Chart visualization would appear here</p>
              </div>
            </div>
          </div>
        </div>
      `},portfolio:{name:"Portfolio Layout",description:"Showcase layout with image placeholders and project cards",content:`
        <div data-testid="portfolio-template" class="preview-template p-6 max-w-5xl mx-auto bg-white">
          <header class="text-center mb-12">
            <h1 class="preview-heading text-4xl font-bold mb-4 text-gray-900">
              Creative Portfolio
            </h1>
            <p class="preview-text text-lg text-gray-600 max-w-2xl mx-auto">
              Showcasing innovative designs and creative solutions that bring ideas to life
            </p>
          </header>

          <section class="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div class="preview-card rounded-lg overflow-hidden shadow-sm border bg-white">
              <div class="project-image h-48 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <span class="text-white text-2xl">🎨</span>
              </div>
              <div class="project-content p-6">
                <h3 class="text-lg font-semibold mb-2 text-gray-800">Brand Identity Design</h3>
                <p class="preview-text text-sm text-gray-600 mb-4">
                  Complete brand identity system with logo, colors, and typography guidelines.
                </p>
                <button class="preview-button px-4 py-2 text-sm rounded-md font-medium transition-colors bg-purple-600 text-white hover:bg-purple-700">
                  View Project
                </button>
              </div>
            </div>

            <div class="preview-card rounded-lg overflow-hidden shadow-sm border bg-white">
              <div class="project-image h-48 bg-gradient-to-br from-green-400 to-blue-400 flex items-center justify-center">
                <span class="text-white text-2xl">📱</span>
              </div>
              <div class="project-content p-6">
                <h3 class="text-lg font-semibold mb-2 text-gray-800">Mobile App UI</h3>
                <p class="preview-text text-sm text-gray-600 mb-4">
                  User interface design for a productivity mobile application with clean aesthetics.
                </p>
                <button class="preview-button px-4 py-2 text-sm rounded-md font-medium transition-colors bg-green-600 text-white hover:bg-green-700">
                  View Project
                </button>
              </div>
            </div>

            <div class="preview-card rounded-lg overflow-hidden shadow-sm border bg-white">
              <div class="project-image h-48 bg-gradient-to-br from-orange-400 to-red-400 flex items-center justify-center">
                <span class="text-white text-2xl">🌐</span>
              </div>
              <div class="project-content p-6">
                <h3 class="text-lg font-semibold mb-2 text-gray-800">Website Redesign</h3>
                <p class="preview-text text-sm text-gray-600 mb-4">
                  Modern website redesign focusing on user experience and conversion optimization.
                </p>
                <button class="preview-button px-4 py-2 text-sm rounded-md font-medium transition-colors bg-orange-600 text-white hover:bg-orange-700">
                  View Project
                </button>
              </div>
            </div>
          </section>

          <section class="contact-section text-center">
            <div class="preview-card p-8 rounded-lg shadow-sm border bg-gray-50">
              <h2 class="preview-subheading text-2xl font-semibold mb-4 text-gray-800">
                Let's Work Together
              </h2>
              <p class="preview-text text-gray-600 mb-6 max-w-md mx-auto">
                Have a project in mind? Let's discuss how we can bring your vision to life.
              </p>
              <div class="contact-buttons flex flex-wrap justify-center gap-4">
                <button class="preview-button px-6 py-3 rounded-md font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700">
                  Get In Touch
                </button>
                <button class="preview-button px-6 py-3 rounded-md font-medium transition-colors border border-gray-300 text-gray-700 hover:bg-gray-50">
                  View Resume
                </button>
              </div>
            </div>
          </section>
        </div>
      `}},h={mobile:{width:"375px",height:"667px",name:"Mobile (375px)"},tablet:{width:"768px",height:"1024px",name:"Tablet (768px)"},desktop:{width:"100%",height:"700px",name:"Desktop (Full)"}},x=v.useCallback(p=>{g(null),r(p)},[]),y=v.useCallback(()=>{c(!1),g(null)},[]),w=v.useCallback(p=>{c(!1),g("Failed to load preview content"),console.error("Preview iframe error:",p)},[]),S=()=>{const p=new Blob([t],{type:"text/css"}),b=URL.createObjectURL(p),C=document.createElement("a");C.href=b,C.download=`${n}-styles.css`,C.click(),URL.revokeObjectURL(b)},m=f[n],d=h[o];return a.jsxs("div",{className:`style-playground ${e}`,"data-testid":"style-playground",children:[a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border mb-6",children:[a.jsx("h2",{className:"text-2xl font-semibold mb-2 text-gray-800",children:"CSS Style Playground"}),a.jsx("p",{className:"text-gray-600",children:"Experiment with different layouts and CSS styles in real-time. Choose a template and start styling!"})]}),a.jsx("div",{className:"bg-white p-6 rounded-lg shadow-sm border mb-6",children:a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-medium text-gray-700 mb-3",children:"Template"}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:Object.entries(f).map(([p,b])=>a.jsxs("button",{onClick:()=>s(p),className:`p-3 text-left rounded-lg border-2 transition-colors ${n===p?"border-blue-500 bg-blue-50":"border-gray-200 hover:border-gray-300"}`,"data-testid":`template-${p}`,children:[a.jsx("div",{className:"font-medium text-sm text-gray-800",children:b.name}),a.jsx("div",{className:"text-xs text-gray-600 mt-1",children:b.description})]},p))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-medium text-gray-700 mb-3",children:"Viewport Size"}),a.jsx("div",{className:"space-y-2",children:Object.entries(h).map(([p,b])=>a.jsx("button",{onClick:()=>l(p),className:`w-full p-3 text-left rounded-lg border transition-colors ${o===p?"border-blue-500 bg-blue-50 text-blue-700":"border-gray-200 hover:border-gray-300"}`,"data-testid":`viewport-${p}`,children:b.name},p))})]})]})}),a.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-800",children:"CSS Editor"}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{onClick:S,disabled:!t.trim(),className:"px-3 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors","data-testid":"export-css-button",children:"Export CSS"}),a.jsx("button",{onClick:()=>r(""),className:"px-3 py-2 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors","data-testid":"clear-css-button",children:"Clear"})]})]}),a.jsx("textarea",{value:t,onChange:p=>x(p.target.value),placeholder:`/* Start styling your ${m.name.toLowerCase()} */
.preview-card {
  background: #f8fafc;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.preview-button {
  background: linear-gradient(45deg, #667eea, #764ba2);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  transition: transform 0.2s ease;
}

.preview-button:hover {
  transform: translateY(-2px);
}`,className:"w-full h-96 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm resize-none","data-testid":"css-editor"}),u&&a.jsx("div",{className:"mt-3 p-3 bg-red-50 border border-red-200 rounded-md",children:a.jsx("p",{className:"text-sm text-red-600",children:u})})]}),a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsxs("h3",{className:"text-lg font-medium text-gray-800",children:["Preview - ",m.name]}),i&&a.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[a.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-2"}),"Loading..."]})]}),a.jsx("div",{className:"border rounded-lg overflow-hidden mx-auto",style:{width:d.width,maxWidth:"100%"},children:a.jsx(io,{htmlContent:m.content,cssContent:t,height:d.height,onLoad:y,onError:w,className:"w-full"})}),a.jsx("div",{className:"mt-4 p-3 bg-blue-50 rounded-md",children:a.jsxs("p",{className:"text-xs text-blue-700",children:[a.jsx("strong",{children:"Tip:"})," Try different CSS properties on elements with classes like",a.jsx("code",{className:"bg-blue-100 px-1 rounded",children:".preview-card"}),",",a.jsx("code",{className:"bg-blue-100 px-1 rounded",children:".preview-button"}),", and",a.jsx("code",{className:"bg-blue-100 px-1 rounded",children:".preview-text"})," to see instant results."]})})]})]})]})};function fg(){const{token:e}=Gm(),t=Ed(),[r,n]=v.useState("verifying"),[s,o]=v.useState(""),[l,i]=v.useState(null);v.useEffect(()=>{(async()=>{if(!e){n("error"),o("Invalid confirmation link");return}try{const x=Od(e);if(x.success){const y=og(e);y.success?(i(y.data),n("confirmed"),setTimeout(()=>{c(y.data)},1500)):(n("error"),o("Could not retrieve download data"))}else n("error"),o(x.error||"Invalid confirmation token")}catch{n("error"),o("An error occurred during confirmation")}})()},[e]);const c=h=>{if(h){if(h.css){const x=new Blob([h.css],{type:"text/css"});u(x,"six-cards-stylesheet.css")}if(h.html){const x=new Blob([h.html],{type:"text/html"});u(x,"index.html")}if(h.agentInstructions){const x=new Blob([h.agentInstructions],{type:"text/plain"});u(x,"agent-instructions.md")}}},u=(h,x)=>{const y=URL.createObjectURL(h),w=document.createElement("a");w.href=y,w.download=x,w.click(),URL.revokeObjectURL(y)},g=()=>{t("/")},f=()=>{t("/interactive")};return r==="verifying"?a.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center p-4",children:a.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-md w-full p-8 text-center",children:[a.jsx("div",{className:"mb-6",children:a.jsx("div",{className:"mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center",children:a.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})})}),a.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-2",children:"Confirming your email..."}),a.jsx("p",{className:"text-gray-600",children:"Please wait while we verify your download request."})]})}):r==="error"?a.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center p-4",children:a.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-md w-full p-8 text-center",children:[a.jsx("div",{className:"mb-6",children:a.jsx("div",{className:"mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center",children:a.jsx("span",{className:"text-2xl text-red-600",children:"❌"})})}),a.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-2",children:"Confirmation Failed"}),a.jsx("p",{className:"text-gray-600 mb-6",children:s}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{onClick:g,className:"flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",children:"Return Home"}),a.jsx("button",{onClick:f,className:"flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors",children:"Try Again"})]})]})}):r==="confirmed"?a.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center p-4",children:a.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-md w-full p-8 text-center",children:[a.jsx("div",{className:"mb-6",children:a.jsx("div",{className:"mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center",children:a.jsx("span",{className:"text-2xl",children:"✅"})})}),a.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-2",children:"Downloads Starting!"}),a.jsx("p",{className:"text-gray-600 mb-4",children:"Your custom CSS files are being downloaded now."}),l&&a.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 mb-6",children:[a.jsx("h3",{className:"font-medium text-gray-900 mb-2",children:"Files included:"}),a.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[a.jsx("li",{children:"• six-cards-stylesheet.css"}),a.jsx("li",{children:"• index.html (demo page)"}),a.jsx("li",{children:"• agent-instructions.md"})]})]}),a.jsxs("div",{className:"flex gap-3",children:[a.jsx("button",{onClick:g,className:"flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",children:"Return Home"}),a.jsx("button",{onClick:()=>c(l),className:"flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors",children:"Download Again"})]})]})}):null}function mg(){const e=[{bg:"bg-gray-100",text:"text-gray-900",accent:"#111827",accentDark:"#000000"},{bg:"bg-blue-100",text:"text-blue-900",accent:"#2563eb",accentDark:"#1e3a8a"},{bg:"bg-green-100",text:"text-green-900",accent:"#16a34a",accentDark:"#14532d"},{bg:"bg-yellow-100",text:"text-yellow-900",accent:"#eab308",accentDark:"#854d0e"},{bg:"bg-pink-100",text:"text-pink-900",accent:"#db2777",accentDark:"#831843"},{bg:"bg-purple-100",text:"text-purple-900",accent:"#9333ea",accentDark:"#581c87"},{bg:"bg-orange-100",text:"text-orange-900",accent:"#ea580c",accentDark:"#7c2d12"},{bg:"bg-teal-100",text:"text-teal-900",accent:"#0d9488",accentDark:"#134e4a"}],[t,r]=v.useState(0),[n,s]=v.useState(!0),[o,l]=v.useState(0),[i,c]=v.useState(0);v.useEffect(()=>{if(!n)return;const x=setInterval(()=>{r(y=>(y+1)%e.length)},8e3);return()=>clearInterval(x)},[n,e.length]),v.useEffect(()=>{if(!n)return;const x=Date.now(),y=setInterval(()=>{const w=Date.now()-x+t*8e3,S=Math.min(w/(8e3*e.length)*100,100);l(S)},50);return()=>clearInterval(y)},[n,t]),v.useEffect(()=>{const x=setInterval(()=>{c(y=>(y+1)%e.length)},2500);return()=>clearInterval(x)},[]);const u=(x,y,w=.5)=>{const S=N=>{const L=N.replace("#",""),F=parseInt(L,16);return{r:F>>16&255,g:F>>8&255,b:F&255}},m=N=>N.toString(16).padStart(2,"0"),d=S(x),p=S(y),b=Math.round(d.r*(1-w)+p.r*w),C=Math.round(d.g*(1-w)+p.g*w),T=Math.round(d.b*(1-w)+p.b*w);return`#${m(b)}${m(C)}${m(T)}`},g=e[t],f=e[(t+1)%e.length],h=e[i];return a.jsxs("div",{className:`min-h-screen flex flex-col transition-colors duration-1000 ${g.bg} ${g.text} font-sans`,children:[a.jsxs("div",{className:"flex items-center justify-between px-12 py-4 border-b border-gray-200 relative",children:[e.map((x,y)=>a.jsx("div",{onClick:()=>{r(y),s(!1)},className:`w-10 h-10 rounded cursor-pointer border ${y===t?"ring-2 ring-offset-2 ring-gray-800":""} ${x.bg}`},y)),a.jsx("div",{onClick:()=>s(!0),className:"w-16 h-10 flex items-center justify-center rounded cursor-pointer border bg-black text-white text-xs font-medium",children:"Re-start"}),n&&a.jsx("div",{className:"absolute -bottom-2 left-0 w-full h-2 bg-gray-200 overflow-hidden",children:a.jsx("div",{className:"h-2 transition-[width] duration-100 linear",style:{width:`${o}%`,background:`linear-gradient(to right, ${g.accent}, ${f.accent})`}})})]}),a.jsx("p",{className:"text-center text-xs text-gray-500 mt-4",children:"Tip: Click a color to stop rotation. Use the black block to restart."}),a.jsxs("section",{className:"flex flex-col items-center justify-center text-center py-20 px-6",children:[a.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-4 tracking-tight",children:"Design your site’s color system in minutes"}),a.jsx("p",{className:"text-xl md:text-2xl opacity-80 mb-8",children:"Build a production‑ready stylesheet with six cards, button states, alerts, badges, forms and more — then export."}),a.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[a.jsx(tr,{to:"/interactive",className:"rounded-xl px-8 py-4 text-lg text-white",style:{backgroundColor:g.accentDark},children:"Try the Stylesheet Builder →"}),a.jsx(tr,{to:"/color-picker",className:"rounded-xl px-8 py-4 text-lg border",style:{borderColor:g.accentDark,color:g.accentDark},children:"Start with the Color Picker (free export)"})]}),a.jsx("div",{className:"mt-12 max-w-5xl w-full border rounded-xl shadow-sm bg-white",children:a.jsx("div",{className:"rounded-xl p-6",children:a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[a.jsxs("div",{className:"p-6 rounded-lg border text-left",children:[a.jsx("h3",{className:"font-semibold mb-1",children:"Six Card Surfaces"}),a.jsx("p",{className:"text-sm opacity-80",children:"Preview typography, spacing and gradients across six card variations."})]}),a.jsxs("div",{className:"p-6 rounded-lg border text-left",children:[a.jsx("h3",{className:"font-semibold mb-1",children:"Buttons & Alerts"}),a.jsx("p",{className:"text-sm opacity-80",children:"Primary, secondary, submit, ok, delete with hover states — plus alert styles."})]}),a.jsxs("div",{className:"p-6 rounded-lg border text-left",children:[a.jsx("h3",{className:"font-semibold mb-1",children:"Badges, Forms & Tabs"}),a.jsx("p",{className:"text-sm opacity-80",children:"Cohesive micro components that match your palette automatically."})]})]})})}),a.jsx("p",{className:"mt-4 text-sm opacity-70",children:"Color Picker lets you download a free HTML + CSS with your colors. For full component exports, use the Stylesheet Builder."})]}),a.jsxs("section",{className:"py-20 px-6 border-t border-gray-100",children:[a.jsx("h2",{className:"text-3xl font-semibold text-center mb-12",children:"Why teams pick ToggleBox"}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center",children:[{title:"🎨 LEGO Builder Architecture",desc:"Atomic components and clean CSS you can drop into any stack."},{title:"⚡ Live Preview",desc:"Everything updates as you tweak colors — no rebuilds required."},{title:"⬇️ One‑click Export",desc:"CSS + demo page ready for your repo. Optional AI integration guide."},{title:"🧪 Accessible by default",desc:"Automatic text contrast on cards; WCAG‑friendly choices."}].map((x,y)=>a.jsxs("div",{className:"p-6 rounded-xl shadow-md border text-white",style:{backgroundColor:y%2===0?g.accent:g.accentDark},children:[a.jsx("h3",{className:"font-medium text-lg mb-2",children:x.title}),a.jsx("p",{className:"opacity-90",children:x.desc})]},y))})]}),a.jsxs("section",{className:"py-20 px-6 bg-gray-50 border-t border-gray-100 text-center",children:[a.jsx("h2",{className:"text-3xl font-semibold mb-8",children:"See It in Action"}),a.jsx("div",{className:"max-w-4xl mx-auto border rounded-xl shadow-sm bg-white overflow-hidden",children:a.jsxs("div",{className:"p-6 text-left transition-colors duration-500",style:{borderColor:h.accent},children:[a.jsx("div",{className:"flex gap-6 border-b pb-3",style:{borderColor:u(h.accent,h.accentDark,.3)},children:["Overview","Stats","Settings"].map((x,y)=>a.jsxs("button",{className:`text-sm font-semibold pb-2 relative ${y===0?"":"text-gray-500"}`,style:y===0?{color:h.accent}:{},children:[x,y===0&&a.jsx("span",{className:"absolute left-0 right-0 -bottom-1 h-0.5",style:{background:`linear-gradient(90deg, ${h.accent}, ${h.accentDark})`}})]},x))}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-4",children:[a.jsxs("div",{className:"rounded-lg border p-4 shadow-sm transition-colors duration-500",style:{borderColor:u(h.accent,"#cccccc",.3)},children:[a.jsx("h3",{className:"font-semibold mb-1",children:"Demo Card"}),a.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Buttons, badges and progress all follow the active color."}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{className:"px-3 py-2 rounded text-white text-sm",style:{background:h.accentDark},children:"Primary"}),a.jsx("button",{className:"px-3 py-2 rounded text-sm",style:{color:h.accentDark,borderColor:h.accentDark,borderWidth:1,borderStyle:"solid"},children:"Secondary"})]})]}),a.jsxs("div",{className:"rounded-lg border p-4 shadow-sm transition-colors duration-500",style:{borderColor:u(h.accent,"#cccccc",.3)},children:[a.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[a.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-white",style:{background:h.accent},children:"New"}),a.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-white",style:{background:u(h.accent,"#22c55e",.4)},children:"Success"}),a.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-white",style:{background:u(h.accent,"#f59e0b",.4)},children:"Warning"})]}),a.jsx("div",{className:"w-full h-2 rounded bg-gray-200 overflow-hidden",children:a.jsx("div",{className:"h-2",style:{width:"66%",background:`linear-gradient(90deg, ${h.accent}, ${h.accentDark})`}})})]}),a.jsx("div",{className:"md:col-span-2 rounded-lg border p-4 shadow-sm transition-colors duration-500",style:{borderColor:u(h.accent,"#cccccc",.3)},children:a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[a.jsx("input",{className:"px-3 py-2 rounded border",placeholder:"Your email",style:{borderColor:u(h.accent,"#d1d5db",.3)}}),a.jsx("select",{className:"px-3 py-2 rounded border",style:{borderColor:u(h.accent,"#d1d5db",.3)},children:a.jsx("option",{children:"Pick an option"})}),a.jsx("button",{className:"px-4 py-2 rounded text-white",style:{background:`linear-gradient(135deg, ${h.accent}, ${h.accentDark})`},children:"Submit"})]})})]})]})}),a.jsx(tr,{to:"/interactive",className:"mt-8 inline-block rounded-xl px-8 py-4 text-lg text-white",style:{backgroundColor:g.accentDark},children:"Open Full Playground →"})]}),a.jsxs("section",{className:"py-20 px-6 text-center",children:[a.jsx("h2",{className:"text-4xl font-bold mb-6",children:"Every website starts with the right colors."}),a.jsx("div",{className:"flex flex-col md:flex-row gap-4 justify-center",children:a.jsx(tr,{to:"/interactive",className:"rounded-xl px-8 py-4 text-lg text-white",style:{backgroundColor:g.accentDark},children:"Start Free →"})})]}),a.jsxs("footer",{className:"py-10 px-6 bg-gray-900 text-gray-400 text-center text-sm",children:[a.jsx("p",{className:"mb-4",children:"ToggleBox — Real-time CSS Preview Engine"}),a.jsxs("div",{className:"flex gap-6 justify-center",children:[a.jsx("a",{href:"#",className:"hover:text-white",children:"About"}),a.jsx("a",{href:"#",className:"hover:text-white",children:"Docs"}),a.jsx("a",{href:"#",className:"hover:text-white",children:"GitHub"}),a.jsx("a",{href:"#",className:"hover:text-white",children:"Contact"})]})]})]})}function hg(){return a.jsx(gh,{children:a.jsxs("div",{className:"min-h-screen bg-gray-100",children:[a.jsx(kh,{}),a.jsx("div",{className:"container mx-auto py-8",children:a.jsxs(ih,{children:[a.jsx(Ct,{path:"/",element:a.jsx(mg,{})}),a.jsx(Ct,{path:"/preview",element:a.jsx(Ih,{})}),a.jsx(Ct,{path:"/interactive",element:a.jsx(dg,{})}),a.jsx(Ct,{path:"/playground",element:a.jsx(pg,{})}),a.jsx(Ct,{path:"/color-picker",element:a.jsx(Wh,{})}),a.jsx(Ct,{path:"/template",element:a.jsx(Ch,{})}),a.jsx(Ct,{path:"/confirm/:token",element:a.jsx(fg,{})})]})})]})})}Ho.createRoot(document.getElementById("root")).render(a.jsx(hc.StrictMode,{children:a.jsx(hg,{})}));
