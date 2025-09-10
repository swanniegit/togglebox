function Gd(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in e)){const o=Object.getOwnPropertyDescriptor(n,s);o&&Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();function Qd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ac={exports:{}},Hs={},lc={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rn=Symbol.for("react.element"),Yd=Symbol.for("react.portal"),Kd=Symbol.for("react.fragment"),Xd=Symbol.for("react.strict_mode"),Jd=Symbol.for("react.profiler"),Zd=Symbol.for("react.provider"),qd=Symbol.for("react.context"),ep=Symbol.for("react.forward_ref"),tp=Symbol.for("react.suspense"),rp=Symbol.for("react.memo"),np=Symbol.for("react.lazy"),Ml=Symbol.iterator;function sp(e){return e===null||typeof e!="object"?null:(e=Ml&&e[Ml]||e["@@iterator"],typeof e=="function"?e:null)}var ic={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cc=Object.assign,uc={};function Mr(e,t,r){this.props=e,this.context=t,this.refs=uc,this.updater=r||ic}Mr.prototype.isReactComponent={};Mr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Mr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dc(){}dc.prototype=Mr.prototype;function Ua(e,t,r){this.props=e,this.context=t,this.refs=uc,this.updater=r||ic}var Ha=Ua.prototype=new dc;Ha.constructor=Ua;cc(Ha,Mr.prototype);Ha.isPureReactComponent=!0;var Fl=Array.isArray,pc=Object.prototype.hasOwnProperty,Va={current:null},fc={key:!0,ref:!0,__self:!0,__source:!0};function mc(e,t,r){var n,s={},o=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)pc.call(t,n)&&!fc.hasOwnProperty(n)&&(s[n]=t[n]);var i=arguments.length-2;if(i===1)s.children=r;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(n in i=e.defaultProps,i)s[n]===void 0&&(s[n]=i[n]);return{$$typeof:Rn,type:e,key:o,ref:a,props:s,_owner:Va.current}}function op(e,t){return{$$typeof:Rn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Rn}function ap(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Al=/\/+/g;function ho(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ap(""+e.key):t.toString(36)}function os(e,t,r,n,s){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Rn:case Yd:a=!0}}if(a)return a=e,s=s(a),e=n===""?"."+ho(a,0):n,Fl(s)?(r="",e!=null&&(r=e.replace(Al,"$&/")+"/"),os(s,t,r,"",function(u){return u})):s!=null&&(Wa(s)&&(s=op(s,r+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(Al,"$&/")+"/")+e)),t.push(s)),1;if(a=0,n=n===""?".":n+":",Fl(e))for(var i=0;i<e.length;i++){o=e[i];var c=n+ho(o,i);a+=os(o,t,r,c,s)}else if(c=sp(e),typeof c=="function")for(e=c.call(e),i=0;!(o=e.next()).done;)o=o.value,c=n+ho(o,i++),a+=os(o,t,r,c,s);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Bn(e,t,r){if(e==null)return e;var n=[],s=0;return os(e,n,"","",function(o){return t.call(r,o,s++)}),n}function lp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},as={transition:null},ip={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:as,ReactCurrentOwner:Va};function hc(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Bn,forEach:function(e,t,r){Bn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return Bn(e,function(){t++}),t},toArray:function(e){return Bn(e,function(t){return t})||[]},only:function(e){if(!Wa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=Mr;M.Fragment=Kd;M.Profiler=Jd;M.PureComponent=Ua;M.StrictMode=Xd;M.Suspense=tp;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ip;M.act=hc;M.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=cc({},e.props),s=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Va.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)pc.call(t,c)&&!fc.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){i=Array(c);for(var u=0;u<c;u++)i[u]=arguments[u+2];n.children=i}return{$$typeof:Rn,type:e.type,key:s,ref:o,props:n,_owner:a}};M.createContext=function(e){return e={$$typeof:qd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Zd,_context:e},e.Consumer=e};M.createElement=mc;M.createFactory=function(e){var t=mc.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:ep,render:e}};M.isValidElement=Wa;M.lazy=function(e){return{$$typeof:np,_payload:{_status:-1,_result:e},_init:lp}};M.memo=function(e,t){return{$$typeof:rp,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=as.transition;as.transition={};try{e()}finally{as.transition=t}};M.unstable_act=hc;M.useCallback=function(e,t){return Ce.current.useCallback(e,t)};M.useContext=function(e){return Ce.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};M.useEffect=function(e,t){return Ce.current.useEffect(e,t)};M.useId=function(){return Ce.current.useId()};M.useImperativeHandle=function(e,t,r){return Ce.current.useImperativeHandle(e,t,r)};M.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return Ce.current.useMemo(e,t)};M.useReducer=function(e,t,r){return Ce.current.useReducer(e,t,r)};M.useRef=function(e){return Ce.current.useRef(e)};M.useState=function(e){return Ce.current.useState(e)};M.useSyncExternalStore=function(e,t,r){return Ce.current.useSyncExternalStore(e,t,r)};M.useTransition=function(){return Ce.current.useTransition()};M.version="18.3.1";lc.exports=M;var v=lc.exports;const gc=Qd(v),cp=Gd({__proto__:null,default:gc},[v]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up=v,dp=Symbol.for("react.element"),pp=Symbol.for("react.fragment"),fp=Object.prototype.hasOwnProperty,mp=up.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,hp={key:!0,ref:!0,__self:!0,__source:!0};function xc(e,t,r){var n,s={},o=null,a=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)fp.call(t,n)&&!hp.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)s[n]===void 0&&(s[n]=t[n]);return{$$typeof:dp,type:e,key:o,ref:a,props:s,_owner:mp.current}}Hs.Fragment=pp;Hs.jsx=xc;Hs.jsxs=xc;ac.exports=Hs;var l=ac.exports,Vo={},vc={exports:{}},De={},yc={exports:{}},bc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t($,O){var k=$.length;$.push(O);e:for(;0<k;){var E=k-1>>>1,I=$[E];if(0<s(I,O))$[E]=O,$[k]=I,k=E;else break e}}function r($){return $.length===0?null:$[0]}function n($){if($.length===0)return null;var O=$[0],k=$.pop();if(k!==O){$[0]=k;e:for(var E=0,I=$.length,A=I>>>1;E<A;){var se=2*(E+1)-1,ye=$[se],be=se+1,tt=$[be];if(0>s(ye,k))be<I&&0>s(tt,ye)?($[E]=tt,$[be]=k,E=be):($[E]=ye,$[se]=k,E=se);else if(be<I&&0>s(tt,k))$[E]=tt,$[be]=k,E=be;else break e}}return O}function s($,O){var k=$.sortIndex-O.sortIndex;return k!==0?k:$.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,i=a.now();e.unstable_now=function(){return a.now()-i}}var c=[],u=[],g=1,p=null,f=3,x=!1,y=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m($){for(var O=r(u);O!==null;){if(O.callback===null)n(u);else if(O.startTime<=$)n(u),O.sortIndex=O.expirationTime,t(c,O);else break;O=r(u)}}function b($){if(w=!1,m($),!y)if(r(c)!==null)y=!0,et(C);else{var O=r(u);O!==null&&Le(b,O.startTime-$)}}function C($,O){y=!1,w&&(w=!1,h(R),R=-1),x=!0;var k=f;try{for(m(O),p=r(c);p!==null&&(!(p.expirationTime>O)||$&&!re());){var E=p.callback;if(typeof E=="function"){p.callback=null,f=p.priorityLevel;var I=E(p.expirationTime<=O);O=e.unstable_now(),typeof I=="function"?p.callback=I:p===r(c)&&n(c),m(O)}else n(c);p=r(c)}if(p!==null)var A=!0;else{var se=r(u);se!==null&&Le(b,se.startTime-O),A=!1}return A}finally{p=null,f=k,x=!1}}var T=!1,N=null,R=-1,F=5,z=-1;function re(){return!(e.unstable_now()-z<F)}function $e(){if(N!==null){var $=e.unstable_now();z=$;var O=!0;try{O=N(!0,$)}finally{O?ve():(T=!1,N=null)}}else T=!1}var ve;if(typeof d=="function")ve=function(){d($e)};else if(typeof MessageChannel<"u"){var bt=new MessageChannel,Gt=bt.port2;bt.port1.onmessage=$e,ve=function(){Gt.postMessage(null)}}else ve=function(){S($e,0)};function et($){N=$,T||(T=!0,ve())}function Le($,O){R=S(function(){$(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function($){$.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,et(C))},e.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<$?Math.floor(1e3/$):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function($){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var k=f;f=O;try{return $()}finally{f=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function($,O){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var k=f;f=$;try{return O()}finally{f=k}},e.unstable_scheduleCallback=function($,O,k){var E=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?E+k:E):k=E,$){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=k+I,$={id:g++,callback:O,priorityLevel:$,startTime:k,expirationTime:I,sortIndex:-1},k>E?($.sortIndex=k,t(u,$),r(c)===null&&$===r(u)&&(w?(h(R),R=-1):w=!0,Le(b,k-E))):($.sortIndex=I,t(c,$),y||x||(y=!0,et(C))),$},e.unstable_shouldYield=re,e.unstable_wrapCallback=function($){var O=f;return function(){var k=f;f=O;try{return $.apply(this,arguments)}finally{f=k}}}})(bc);yc.exports=bc;var gp=yc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp=v,ze=gp;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wc=new Set,fn={};function cr(e,t){$r(e,t),$r(e+"Capture",t)}function $r(e,t){for(fn[e]=t,e=0;e<t.length;e++)wc.add(t[e])}var ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wo=Object.prototype.hasOwnProperty,vp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bl={},Ul={};function yp(e){return Wo.call(Ul,e)?!0:Wo.call(Bl,e)?!1:vp.test(e)?Ul[e]=!0:(Bl[e]=!0,!1)}function bp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wp(e,t,r,n){if(t===null||typeof t>"u"||bp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Se(e,t,r,n,s,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){de[e]=new Se(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];de[t]=new Se(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){de[e]=new Se(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){de[e]=new Se(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){de[e]=new Se(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){de[e]=new Se(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){de[e]=new Se(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){de[e]=new Se(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){de[e]=new Se(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ga=/[\-:]([a-z])/g;function Qa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ga,Qa);de[t]=new Se(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ga,Qa);de[t]=new Se(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ga,Qa);de[t]=new Se(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!1,!1)});de.xlinkHref=new Se("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){de[e]=new Se(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ya(e,t,r,n){var s=de.hasOwnProperty(t)?de[t]:null;(s!==null?s.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wp(t,r,s,n)&&(r=null),n||s===null?yp(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,n=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var yt=xp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Un=Symbol.for("react.element"),pr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),Ka=Symbol.for("react.strict_mode"),Go=Symbol.for("react.profiler"),kc=Symbol.for("react.provider"),Cc=Symbol.for("react.context"),Xa=Symbol.for("react.forward_ref"),Qo=Symbol.for("react.suspense"),Yo=Symbol.for("react.suspense_list"),Ja=Symbol.for("react.memo"),Ct=Symbol.for("react.lazy"),Sc=Symbol.for("react.offscreen"),Hl=Symbol.iterator;function Wr(e){return e===null||typeof e!="object"?null:(e=Hl&&e[Hl]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,go;function qr(e){if(go===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);go=t&&t[1]||""}return`
`+go+e}var xo=!1;function vo(e,t){if(!e||xo)return"";xo=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),o=n.stack.split(`
`),a=s.length-1,i=o.length-1;1<=a&&0<=i&&s[a]!==o[i];)i--;for(;1<=a&&0<=i;a--,i--)if(s[a]!==o[i]){if(a!==1||i!==1)do if(a--,i--,0>i||s[a]!==o[i]){var c=`
`+s[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=i);break}}}finally{xo=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?qr(e):""}function kp(e){switch(e.tag){case 5:return qr(e.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 2:case 15:return e=vo(e.type,!1),e;case 11:return e=vo(e.type.render,!1),e;case 1:return e=vo(e.type,!0),e;default:return""}}function Ko(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case fr:return"Fragment";case pr:return"Portal";case Go:return"Profiler";case Ka:return"StrictMode";case Qo:return"Suspense";case Yo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cc:return(e.displayName||"Context")+".Consumer";case kc:return(e._context.displayName||"Context")+".Provider";case Xa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ja:return t=e.displayName||null,t!==null?t:Ko(e.type)||"Memo";case Ct:t=e._payload,e=e._init;try{return Ko(e(t))}catch{}}return null}function Cp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ko(t);case 8:return t===Ka?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ft(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Sp(e){var t=jc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){n=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Hn(e){e._valueTracker||(e._valueTracker=Sp(e))}function Nc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=jc(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function xs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Xo(e,t){var r=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Vl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Ft(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ec(e,t){t=t.checked,t!=null&&Ya(e,"checked",t,!1)}function Jo(e,t){Ec(e,t);var r=Ft(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zo(e,t.type,r):t.hasOwnProperty("defaultValue")&&Zo(e,t.type,Ft(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Wl(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Zo(e,t,r){(t!=="number"||xs(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var en=Array.isArray;function Sr(e,t,r,n){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Ft(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,n&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function qo(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Gl(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(j(92));if(en(r)){if(1<r.length)throw Error(j(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ft(r)}}function Pc(e,t){var r=Ft(t.value),n=Ft(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Ql(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Tc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ea(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Tc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Vn,$c=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Vn=Vn||document.createElement("div"),Vn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Vn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function mn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var nn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jp=["Webkit","ms","Moz","O"];Object.keys(nn).forEach(function(e){jp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),nn[t]=nn[e]})});function Lc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||nn.hasOwnProperty(e)&&nn[e]?(""+t).trim():t+"px"}function Rc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,s=Lc(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,s):e[r]=s}}var Np=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ta(e,t){if(t){if(Np[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function ra(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var na=null;function Za(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var sa=null,jr=null,Nr=null;function Yl(e){if(e=zn(e)){if(typeof sa!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Ys(t),sa(e.stateNode,e.type,t))}}function _c(e){jr?Nr?Nr.push(e):Nr=[e]:jr=e}function Ic(){if(jr){var e=jr,t=Nr;if(Nr=jr=null,Yl(e),t)for(e=0;e<t.length;e++)Yl(t[e])}}function zc(e,t){return e(t)}function Dc(){}var yo=!1;function Oc(e,t,r){if(yo)return e(t,r);yo=!0;try{return zc(e,t,r)}finally{yo=!1,(jr!==null||Nr!==null)&&(Dc(),Ic())}}function hn(e,t){var r=e.stateNode;if(r===null)return null;var n=Ys(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(j(231,t,typeof r));return r}var oa=!1;if(ht)try{var Gr={};Object.defineProperty(Gr,"passive",{get:function(){oa=!0}}),window.addEventListener("test",Gr,Gr),window.removeEventListener("test",Gr,Gr)}catch{oa=!1}function Ep(e,t,r,n,s,o,a,i,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(g){this.onError(g)}}var sn=!1,vs=null,ys=!1,aa=null,Pp={onError:function(e){sn=!0,vs=e}};function Tp(e,t,r,n,s,o,a,i,c){sn=!1,vs=null,Ep.apply(Pp,arguments)}function $p(e,t,r,n,s,o,a,i,c){if(Tp.apply(this,arguments),sn){if(sn){var u=vs;sn=!1,vs=null}else throw Error(j(198));ys||(ys=!0,aa=u)}}function ur(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Mc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Kl(e){if(ur(e)!==e)throw Error(j(188))}function Lp(e){var t=e.alternate;if(!t){if(t=ur(e),t===null)throw Error(j(188));return t!==e?null:e}for(var r=e,n=t;;){var s=r.return;if(s===null)break;var o=s.alternate;if(o===null){if(n=s.return,n!==null){r=n;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===r)return Kl(s),e;if(o===n)return Kl(s),t;o=o.sibling}throw Error(j(188))}if(r.return!==n.return)r=s,n=o;else{for(var a=!1,i=s.child;i;){if(i===r){a=!0,r=s,n=o;break}if(i===n){a=!0,n=s,r=o;break}i=i.sibling}if(!a){for(i=o.child;i;){if(i===r){a=!0,r=o,n=s;break}if(i===n){a=!0,n=o,r=s;break}i=i.sibling}if(!a)throw Error(j(189))}}if(r.alternate!==n)throw Error(j(190))}if(r.tag!==3)throw Error(j(188));return r.stateNode.current===r?e:t}function Fc(e){return e=Lp(e),e!==null?Ac(e):null}function Ac(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ac(e);if(t!==null)return t;e=e.sibling}return null}var Bc=ze.unstable_scheduleCallback,Xl=ze.unstable_cancelCallback,Rp=ze.unstable_shouldYield,_p=ze.unstable_requestPaint,te=ze.unstable_now,Ip=ze.unstable_getCurrentPriorityLevel,qa=ze.unstable_ImmediatePriority,Uc=ze.unstable_UserBlockingPriority,bs=ze.unstable_NormalPriority,zp=ze.unstable_LowPriority,Hc=ze.unstable_IdlePriority,Vs=null,at=null;function Dp(e){if(at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Vs,e,void 0,(e.current.flags&128)===128)}catch{}}var Je=Math.clz32?Math.clz32:Fp,Op=Math.log,Mp=Math.LN2;function Fp(e){return e>>>=0,e===0?32:31-(Op(e)/Mp|0)|0}var Wn=64,Gn=4194304;function tn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ws(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,s=e.suspendedLanes,o=e.pingedLanes,a=r&268435455;if(a!==0){var i=a&~s;i!==0?n=tn(i):(o&=a,o!==0&&(n=tn(o)))}else a=r&~s,a!==0?n=tn(a):o!==0&&(n=tn(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&s)&&(s=n&-n,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Je(t),s=1<<r,n|=e[r],t&=~s;return n}function Ap(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Je(o),i=1<<a,c=s[a];c===-1?(!(i&r)||i&n)&&(s[a]=Ap(i,t)):c<=t&&(e.expiredLanes|=i),o&=~i}}function la(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Vc(){var e=Wn;return Wn<<=1,!(Wn&4194240)&&(Wn=64),e}function bo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function _n(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Je(t),e[t]=r}function Up(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-Je(r),o=1<<s;t[s]=0,n[s]=-1,e[s]=-1,r&=~o}}function el(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Je(r),s=1<<n;s&t|e[n]&t&&(e[n]|=t),r&=~s}}var H=0;function Wc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Gc,tl,Qc,Yc,Kc,ia=!1,Qn=[],$t=null,Lt=null,Rt=null,gn=new Map,xn=new Map,jt=[],Hp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jl(e,t){switch(e){case"focusin":case"focusout":$t=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":Rt=null;break;case"pointerover":case"pointerout":gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xn.delete(t.pointerId)}}function Qr(e,t,r,n,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[s]},t!==null&&(t=zn(t),t!==null&&tl(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Vp(e,t,r,n,s){switch(t){case"focusin":return $t=Qr($t,e,t,r,n,s),!0;case"dragenter":return Lt=Qr(Lt,e,t,r,n,s),!0;case"mouseover":return Rt=Qr(Rt,e,t,r,n,s),!0;case"pointerover":var o=s.pointerId;return gn.set(o,Qr(gn.get(o)||null,e,t,r,n,s)),!0;case"gotpointercapture":return o=s.pointerId,xn.set(o,Qr(xn.get(o)||null,e,t,r,n,s)),!0}return!1}function Xc(e){var t=Zt(e.target);if(t!==null){var r=ur(t);if(r!==null){if(t=r.tag,t===13){if(t=Mc(r),t!==null){e.blockedOn=t,Kc(e.priority,function(){Qc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ls(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ca(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);na=n,r.target.dispatchEvent(n),na=null}else return t=zn(r),t!==null&&tl(t),e.blockedOn=r,!1;t.shift()}return!0}function Zl(e,t,r){ls(e)&&r.delete(t)}function Wp(){ia=!1,$t!==null&&ls($t)&&($t=null),Lt!==null&&ls(Lt)&&(Lt=null),Rt!==null&&ls(Rt)&&(Rt=null),gn.forEach(Zl),xn.forEach(Zl)}function Yr(e,t){e.blockedOn===t&&(e.blockedOn=null,ia||(ia=!0,ze.unstable_scheduleCallback(ze.unstable_NormalPriority,Wp)))}function vn(e){function t(s){return Yr(s,e)}if(0<Qn.length){Yr(Qn[0],e);for(var r=1;r<Qn.length;r++){var n=Qn[r];n.blockedOn===e&&(n.blockedOn=null)}}for($t!==null&&Yr($t,e),Lt!==null&&Yr(Lt,e),Rt!==null&&Yr(Rt,e),gn.forEach(t),xn.forEach(t),r=0;r<jt.length;r++)n=jt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<jt.length&&(r=jt[0],r.blockedOn===null);)Xc(r),r.blockedOn===null&&jt.shift()}var Er=yt.ReactCurrentBatchConfig,ks=!0;function Gp(e,t,r,n){var s=H,o=Er.transition;Er.transition=null;try{H=1,rl(e,t,r,n)}finally{H=s,Er.transition=o}}function Qp(e,t,r,n){var s=H,o=Er.transition;Er.transition=null;try{H=4,rl(e,t,r,n)}finally{H=s,Er.transition=o}}function rl(e,t,r,n){if(ks){var s=ca(e,t,r,n);if(s===null)$o(e,t,n,Cs,r),Jl(e,n);else if(Vp(s,e,t,r,n))n.stopPropagation();else if(Jl(e,n),t&4&&-1<Hp.indexOf(e)){for(;s!==null;){var o=zn(s);if(o!==null&&Gc(o),o=ca(e,t,r,n),o===null&&$o(e,t,n,Cs,r),o===s)break;s=o}s!==null&&n.stopPropagation()}else $o(e,t,n,null,r)}}var Cs=null;function ca(e,t,r,n){if(Cs=null,e=Za(n),e=Zt(e),e!==null)if(t=ur(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Mc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Cs=e,null}function Jc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ip()){case qa:return 1;case Uc:return 4;case bs:case zp:return 16;case Hc:return 536870912;default:return 16}default:return 16}}var Et=null,nl=null,is=null;function Zc(){if(is)return is;var e,t=nl,r=t.length,n,s="value"in Et?Et.value:Et.textContent,o=s.length;for(e=0;e<r&&t[e]===s[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===s[o-n];n++);return is=s.slice(e,1<n?1-n:void 0)}function cs(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yn(){return!0}function ql(){return!1}function Oe(e){function t(r,n,s,o,a){this._reactName=r,this._targetInst=s,this.type=n,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(r=e[i],this[i]=r?r(o):o[i]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Yn:ql,this.isPropagationStopped=ql,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Yn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Yn)},persist:function(){},isPersistent:Yn}),t}var Fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sl=Oe(Fr),In=Z({},Fr,{view:0,detail:0}),Yp=Oe(In),wo,ko,Kr,Ws=Z({},In,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ol,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Kr&&(Kr&&e.type==="mousemove"?(wo=e.screenX-Kr.screenX,ko=e.screenY-Kr.screenY):ko=wo=0,Kr=e),wo)},movementY:function(e){return"movementY"in e?e.movementY:ko}}),ei=Oe(Ws),Kp=Z({},Ws,{dataTransfer:0}),Xp=Oe(Kp),Jp=Z({},In,{relatedTarget:0}),Co=Oe(Jp),Zp=Z({},Fr,{animationName:0,elapsedTime:0,pseudoElement:0}),qp=Oe(Zp),ef=Z({},Fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tf=Oe(ef),rf=Z({},Fr,{data:0}),ti=Oe(rf),nf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},of={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function af(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=of[e])?!!t[e]:!1}function ol(){return af}var lf=Z({},In,{key:function(e){if(e.key){var t=nf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=cs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ol,charCode:function(e){return e.type==="keypress"?cs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?cs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cf=Oe(lf),uf=Z({},Ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ri=Oe(uf),df=Z({},In,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ol}),pf=Oe(df),ff=Z({},Fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),mf=Oe(ff),hf=Z({},Ws,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gf=Oe(hf),xf=[9,13,27,32],al=ht&&"CompositionEvent"in window,on=null;ht&&"documentMode"in document&&(on=document.documentMode);var vf=ht&&"TextEvent"in window&&!on,qc=ht&&(!al||on&&8<on&&11>=on),ni=" ",si=!1;function eu(e,t){switch(e){case"keyup":return xf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function yf(e,t){switch(e){case"compositionend":return tu(t);case"keypress":return t.which!==32?null:(si=!0,ni);case"textInput":return e=t.data,e===ni&&si?null:e;default:return null}}function bf(e,t){if(mr)return e==="compositionend"||!al&&eu(e,t)?(e=Zc(),is=nl=Et=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qc&&t.locale!=="ko"?null:t.data;default:return null}}var wf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function oi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wf[e.type]:t==="textarea"}function ru(e,t,r,n){_c(n),t=Ss(t,"onChange"),0<t.length&&(r=new sl("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var an=null,yn=null;function kf(e){fu(e,0)}function Gs(e){var t=xr(e);if(Nc(t))return e}function Cf(e,t){if(e==="change")return t}var nu=!1;if(ht){var So;if(ht){var jo="oninput"in document;if(!jo){var ai=document.createElement("div");ai.setAttribute("oninput","return;"),jo=typeof ai.oninput=="function"}So=jo}else So=!1;nu=So&&(!document.documentMode||9<document.documentMode)}function li(){an&&(an.detachEvent("onpropertychange",su),yn=an=null)}function su(e){if(e.propertyName==="value"&&Gs(yn)){var t=[];ru(t,yn,e,Za(e)),Oc(kf,t)}}function Sf(e,t,r){e==="focusin"?(li(),an=t,yn=r,an.attachEvent("onpropertychange",su)):e==="focusout"&&li()}function jf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gs(yn)}function Nf(e,t){if(e==="click")return Gs(t)}function Ef(e,t){if(e==="input"||e==="change")return Gs(t)}function Pf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:Pf;function bn(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var s=r[n];if(!Wo.call(t,s)||!qe(e[s],t[s]))return!1}return!0}function ii(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ci(e,t){var r=ii(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ii(r)}}function ou(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ou(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function au(){for(var e=window,t=xs();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=xs(e.document)}return t}function ll(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tf(e){var t=au(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&ou(r.ownerDocument.documentElement,r)){if(n!==null&&ll(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,o=Math.min(n.start,s);n=n.end===void 0?o:Math.min(n.end,s),!e.extend&&o>n&&(s=n,n=o,o=s),s=ci(r,o);var a=ci(r,n);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var $f=ht&&"documentMode"in document&&11>=document.documentMode,hr=null,ua=null,ln=null,da=!1;function ui(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;da||hr==null||hr!==xs(n)||(n=hr,"selectionStart"in n&&ll(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),ln&&bn(ln,n)||(ln=n,n=Ss(ua,"onSelect"),0<n.length&&(t=new sl("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=hr)))}function Kn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var gr={animationend:Kn("Animation","AnimationEnd"),animationiteration:Kn("Animation","AnimationIteration"),animationstart:Kn("Animation","AnimationStart"),transitionend:Kn("Transition","TransitionEnd")},No={},lu={};ht&&(lu=document.createElement("div").style,"AnimationEvent"in window||(delete gr.animationend.animation,delete gr.animationiteration.animation,delete gr.animationstart.animation),"TransitionEvent"in window||delete gr.transitionend.transition);function Qs(e){if(No[e])return No[e];if(!gr[e])return e;var t=gr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in lu)return No[e]=t[r];return e}var iu=Qs("animationend"),cu=Qs("animationiteration"),uu=Qs("animationstart"),du=Qs("transitionend"),pu=new Map,di="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bt(e,t){pu.set(e,t),cr(t,[e])}for(var Eo=0;Eo<di.length;Eo++){var Po=di[Eo],Lf=Po.toLowerCase(),Rf=Po[0].toUpperCase()+Po.slice(1);Bt(Lf,"on"+Rf)}Bt(iu,"onAnimationEnd");Bt(cu,"onAnimationIteration");Bt(uu,"onAnimationStart");Bt("dblclick","onDoubleClick");Bt("focusin","onFocus");Bt("focusout","onBlur");Bt(du,"onTransitionEnd");$r("onMouseEnter",["mouseout","mouseover"]);$r("onMouseLeave",["mouseout","mouseover"]);$r("onPointerEnter",["pointerout","pointerover"]);$r("onPointerLeave",["pointerout","pointerover"]);cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_f=new Set("cancel close invalid load scroll toggle".split(" ").concat(rn));function pi(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,$p(n,t,void 0,e),e.currentTarget=null}function fu(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],s=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var a=n.length-1;0<=a;a--){var i=n[a],c=i.instance,u=i.currentTarget;if(i=i.listener,c!==o&&s.isPropagationStopped())break e;pi(s,i,u),o=c}else for(a=0;a<n.length;a++){if(i=n[a],c=i.instance,u=i.currentTarget,i=i.listener,c!==o&&s.isPropagationStopped())break e;pi(s,i,u),o=c}}}if(ys)throw e=aa,ys=!1,aa=null,e}function G(e,t){var r=t[ga];r===void 0&&(r=t[ga]=new Set);var n=e+"__bubble";r.has(n)||(mu(t,e,2,!1),r.add(n))}function To(e,t,r){var n=0;t&&(n|=4),mu(r,e,n,t)}var Xn="_reactListening"+Math.random().toString(36).slice(2);function wn(e){if(!e[Xn]){e[Xn]=!0,wc.forEach(function(r){r!=="selectionchange"&&(_f.has(r)||To(r,!1,e),To(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Xn]||(t[Xn]=!0,To("selectionchange",!1,t))}}function mu(e,t,r,n){switch(Jc(t)){case 1:var s=Gp;break;case 4:s=Qp;break;default:s=rl}r=s.bind(null,t,r,e),s=void 0,!oa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),n?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function $o(e,t,r,n,s){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var i=n.stateNode.containerInfo;if(i===s||i.nodeType===8&&i.parentNode===s)break;if(a===4)for(a=n.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;a=a.return}for(;i!==null;){if(a=Zt(i),a===null)return;if(c=a.tag,c===5||c===6){n=o=a;continue e}i=i.parentNode}}n=n.return}Oc(function(){var u=o,g=Za(r),p=[];e:{var f=pu.get(e);if(f!==void 0){var x=sl,y=e;switch(e){case"keypress":if(cs(r)===0)break e;case"keydown":case"keyup":x=cf;break;case"focusin":y="focus",x=Co;break;case"focusout":y="blur",x=Co;break;case"beforeblur":case"afterblur":x=Co;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=ei;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Xp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=pf;break;case iu:case cu:case uu:x=qp;break;case du:x=mf;break;case"scroll":x=Yp;break;case"wheel":x=gf;break;case"copy":case"cut":case"paste":x=tf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=ri}var w=(t&4)!==0,S=!w&&e==="scroll",h=w?f!==null?f+"Capture":null:f;w=[];for(var d=u,m;d!==null;){m=d;var b=m.stateNode;if(m.tag===5&&b!==null&&(m=b,h!==null&&(b=hn(d,h),b!=null&&w.push(kn(d,b,m)))),S)break;d=d.return}0<w.length&&(f=new x(f,y,null,r,g),p.push({event:f,listeners:w}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",f&&r!==na&&(y=r.relatedTarget||r.fromElement)&&(Zt(y)||y[gt]))break e;if((x||f)&&(f=g.window===g?g:(f=g.ownerDocument)?f.defaultView||f.parentWindow:window,x?(y=r.relatedTarget||r.toElement,x=u,y=y?Zt(y):null,y!==null&&(S=ur(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=u),x!==y)){if(w=ei,b="onMouseLeave",h="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=ri,b="onPointerLeave",h="onPointerEnter",d="pointer"),S=x==null?f:xr(x),m=y==null?f:xr(y),f=new w(b,d+"leave",x,r,g),f.target=S,f.relatedTarget=m,b=null,Zt(g)===u&&(w=new w(h,d+"enter",y,r,g),w.target=m,w.relatedTarget=S,b=w),S=b,x&&y)t:{for(w=x,h=y,d=0,m=w;m;m=dr(m))d++;for(m=0,b=h;b;b=dr(b))m++;for(;0<d-m;)w=dr(w),d--;for(;0<m-d;)h=dr(h),m--;for(;d--;){if(w===h||h!==null&&w===h.alternate)break t;w=dr(w),h=dr(h)}w=null}else w=null;x!==null&&fi(p,f,x,w,!1),y!==null&&S!==null&&fi(p,S,y,w,!0)}}e:{if(f=u?xr(u):window,x=f.nodeName&&f.nodeName.toLowerCase(),x==="select"||x==="input"&&f.type==="file")var C=Cf;else if(oi(f))if(nu)C=Ef;else{C=jf;var T=Sf}else(x=f.nodeName)&&x.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Nf);if(C&&(C=C(e,u))){ru(p,C,r,g);break e}T&&T(e,f,u),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Zo(f,"number",f.value)}switch(T=u?xr(u):window,e){case"focusin":(oi(T)||T.contentEditable==="true")&&(hr=T,ua=u,ln=null);break;case"focusout":ln=ua=hr=null;break;case"mousedown":da=!0;break;case"contextmenu":case"mouseup":case"dragend":da=!1,ui(p,r,g);break;case"selectionchange":if($f)break;case"keydown":case"keyup":ui(p,r,g)}var N;if(al)e:{switch(e){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else mr?eu(e,r)&&(R="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(R="onCompositionStart");R&&(qc&&r.locale!=="ko"&&(mr||R!=="onCompositionStart"?R==="onCompositionEnd"&&mr&&(N=Zc()):(Et=g,nl="value"in Et?Et.value:Et.textContent,mr=!0)),T=Ss(u,R),0<T.length&&(R=new ti(R,e,null,r,g),p.push({event:R,listeners:T}),N?R.data=N:(N=tu(r),N!==null&&(R.data=N)))),(N=vf?yf(e,r):bf(e,r))&&(u=Ss(u,"onBeforeInput"),0<u.length&&(g=new ti("onBeforeInput","beforeinput",null,r,g),p.push({event:g,listeners:u}),g.data=N))}fu(p,t)})}function kn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ss(e,t){for(var r=t+"Capture",n=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=hn(e,r),o!=null&&n.unshift(kn(e,o,s)),o=hn(e,t),o!=null&&n.push(kn(e,o,s))),e=e.return}return n}function dr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function fi(e,t,r,n,s){for(var o=t._reactName,a=[];r!==null&&r!==n;){var i=r,c=i.alternate,u=i.stateNode;if(c!==null&&c===n)break;i.tag===5&&u!==null&&(i=u,s?(c=hn(r,o),c!=null&&a.unshift(kn(r,c,i))):s||(c=hn(r,o),c!=null&&a.push(kn(r,c,i)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var If=/\r\n?/g,zf=/\u0000|\uFFFD/g;function mi(e){return(typeof e=="string"?e:""+e).replace(If,`
`).replace(zf,"")}function Jn(e,t,r){if(t=mi(t),mi(e)!==t&&r)throw Error(j(425))}function js(){}var pa=null,fa=null;function ma(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ha=typeof setTimeout=="function"?setTimeout:void 0,Df=typeof clearTimeout=="function"?clearTimeout:void 0,hi=typeof Promise=="function"?Promise:void 0,Of=typeof queueMicrotask=="function"?queueMicrotask:typeof hi<"u"?function(e){return hi.resolve(null).then(e).catch(Mf)}:ha;function Mf(e){setTimeout(function(){throw e})}function Lo(e,t){var r=t,n=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(n===0){e.removeChild(s),vn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=s}while(r);vn(t)}function _t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function gi(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Ar=Math.random().toString(36).slice(2),ot="__reactFiber$"+Ar,Cn="__reactProps$"+Ar,gt="__reactContainer$"+Ar,ga="__reactEvents$"+Ar,Ff="__reactListeners$"+Ar,Af="__reactHandles$"+Ar;function Zt(e){var t=e[ot];if(t)return t;for(var r=e.parentNode;r;){if(t=r[gt]||r[ot]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=gi(e);e!==null;){if(r=e[ot])return r;e=gi(e)}return t}e=r,r=e.parentNode}return null}function zn(e){return e=e[ot]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Ys(e){return e[Cn]||null}var xa=[],vr=-1;function Ut(e){return{current:e}}function Q(e){0>vr||(e.current=xa[vr],xa[vr]=null,vr--)}function W(e,t){vr++,xa[vr]=e.current,e.current=t}var At={},xe=Ut(At),Ee=Ut(!1),sr=At;function Lr(e,t){var r=e.type.contextTypes;if(!r)return At;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in r)s[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Pe(e){return e=e.childContextTypes,e!=null}function Ns(){Q(Ee),Q(xe)}function xi(e,t,r){if(xe.current!==At)throw Error(j(168));W(xe,t),W(Ee,r)}function hu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var s in n)if(!(s in t))throw Error(j(108,Cp(e)||"Unknown",s));return Z({},r,n)}function Es(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,sr=xe.current,W(xe,e),W(Ee,Ee.current),!0}function vi(e,t,r){var n=e.stateNode;if(!n)throw Error(j(169));r?(e=hu(e,t,sr),n.__reactInternalMemoizedMergedChildContext=e,Q(Ee),Q(xe),W(xe,e)):Q(Ee),W(Ee,r)}var dt=null,Ks=!1,Ro=!1;function gu(e){dt===null?dt=[e]:dt.push(e)}function Bf(e){Ks=!0,gu(e)}function Ht(){if(!Ro&&dt!==null){Ro=!0;var e=0,t=H;try{var r=dt;for(H=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}dt=null,Ks=!1}catch(s){throw dt!==null&&(dt=dt.slice(e+1)),Bc(qa,Ht),s}finally{H=t,Ro=!1}}return null}var yr=[],br=0,Ps=null,Ts=0,Fe=[],Ae=0,or=null,pt=1,ft="";function Xt(e,t){yr[br++]=Ts,yr[br++]=Ps,Ps=e,Ts=t}function xu(e,t,r){Fe[Ae++]=pt,Fe[Ae++]=ft,Fe[Ae++]=or,or=e;var n=pt;e=ft;var s=32-Je(n)-1;n&=~(1<<s),r+=1;var o=32-Je(t)+s;if(30<o){var a=s-s%5;o=(n&(1<<a)-1).toString(32),n>>=a,s-=a,pt=1<<32-Je(t)+s|r<<s|n,ft=o+e}else pt=1<<o|r<<s|n,ft=e}function il(e){e.return!==null&&(Xt(e,1),xu(e,1,0))}function cl(e){for(;e===Ps;)Ps=yr[--br],yr[br]=null,Ts=yr[--br],yr[br]=null;for(;e===or;)or=Fe[--Ae],Fe[Ae]=null,ft=Fe[--Ae],Fe[Ae]=null,pt=Fe[--Ae],Fe[Ae]=null}var Ie=null,_e=null,Y=!1,Xe=null;function vu(e,t){var r=Be(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function yi(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ie=e,_e=_t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ie=e,_e=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=or!==null?{id:pt,overflow:ft}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Be(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ie=e,_e=null,!0):!1;default:return!1}}function va(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ya(e){if(Y){var t=_e;if(t){var r=t;if(!yi(e,t)){if(va(e))throw Error(j(418));t=_t(r.nextSibling);var n=Ie;t&&yi(e,t)?vu(n,r):(e.flags=e.flags&-4097|2,Y=!1,Ie=e)}}else{if(va(e))throw Error(j(418));e.flags=e.flags&-4097|2,Y=!1,Ie=e}}}function bi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ie=e}function Zn(e){if(e!==Ie)return!1;if(!Y)return bi(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ma(e.type,e.memoizedProps)),t&&(t=_e)){if(va(e))throw yu(),Error(j(418));for(;t;)vu(e,t),t=_t(t.nextSibling)}if(bi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){_e=_t(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}_e=null}}else _e=Ie?_t(e.stateNode.nextSibling):null;return!0}function yu(){for(var e=_e;e;)e=_t(e.nextSibling)}function Rr(){_e=Ie=null,Y=!1}function ul(e){Xe===null?Xe=[e]:Xe.push(e)}var Uf=yt.ReactCurrentBatchConfig;function Xr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(j(309));var n=r.stateNode}if(!n)throw Error(j(147,e));var s=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var i=s.refs;a===null?delete i[o]:i[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!r._owner)throw Error(j(290,e))}return e}function qn(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function wi(e){var t=e._init;return t(e._payload)}function bu(e){function t(h,d){if(e){var m=h.deletions;m===null?(h.deletions=[d],h.flags|=16):m.push(d)}}function r(h,d){if(!e)return null;for(;d!==null;)t(h,d),d=d.sibling;return null}function n(h,d){for(h=new Map;d!==null;)d.key!==null?h.set(d.key,d):h.set(d.index,d),d=d.sibling;return h}function s(h,d){return h=Ot(h,d),h.index=0,h.sibling=null,h}function o(h,d,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<d?(h.flags|=2,d):m):(h.flags|=2,d)):(h.flags|=1048576,d)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function i(h,d,m,b){return d===null||d.tag!==6?(d=Fo(m,h.mode,b),d.return=h,d):(d=s(d,m),d.return=h,d)}function c(h,d,m,b){var C=m.type;return C===fr?g(h,d,m.props.children,b,m.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ct&&wi(C)===d.type)?(b=s(d,m.props),b.ref=Xr(h,d,m),b.return=h,b):(b=gs(m.type,m.key,m.props,null,h.mode,b),b.ref=Xr(h,d,m),b.return=h,b)}function u(h,d,m,b){return d===null||d.tag!==4||d.stateNode.containerInfo!==m.containerInfo||d.stateNode.implementation!==m.implementation?(d=Ao(m,h.mode,b),d.return=h,d):(d=s(d,m.children||[]),d.return=h,d)}function g(h,d,m,b,C){return d===null||d.tag!==7?(d=nr(m,h.mode,b,C),d.return=h,d):(d=s(d,m),d.return=h,d)}function p(h,d,m){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Fo(""+d,h.mode,m),d.return=h,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Un:return m=gs(d.type,d.key,d.props,null,h.mode,m),m.ref=Xr(h,null,d),m.return=h,m;case pr:return d=Ao(d,h.mode,m),d.return=h,d;case Ct:var b=d._init;return p(h,b(d._payload),m)}if(en(d)||Wr(d))return d=nr(d,h.mode,m,null),d.return=h,d;qn(h,d)}return null}function f(h,d,m,b){var C=d!==null?d.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:i(h,d,""+m,b);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Un:return m.key===C?c(h,d,m,b):null;case pr:return m.key===C?u(h,d,m,b):null;case Ct:return C=m._init,f(h,d,C(m._payload),b)}if(en(m)||Wr(m))return C!==null?null:g(h,d,m,b,null);qn(h,m)}return null}function x(h,d,m,b,C){if(typeof b=="string"&&b!==""||typeof b=="number")return h=h.get(m)||null,i(d,h,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Un:return h=h.get(b.key===null?m:b.key)||null,c(d,h,b,C);case pr:return h=h.get(b.key===null?m:b.key)||null,u(d,h,b,C);case Ct:var T=b._init;return x(h,d,m,T(b._payload),C)}if(en(b)||Wr(b))return h=h.get(m)||null,g(d,h,b,C,null);qn(d,b)}return null}function y(h,d,m,b){for(var C=null,T=null,N=d,R=d=0,F=null;N!==null&&R<m.length;R++){N.index>R?(F=N,N=null):F=N.sibling;var z=f(h,N,m[R],b);if(z===null){N===null&&(N=F);break}e&&N&&z.alternate===null&&t(h,N),d=o(z,d,R),T===null?C=z:T.sibling=z,T=z,N=F}if(R===m.length)return r(h,N),Y&&Xt(h,R),C;if(N===null){for(;R<m.length;R++)N=p(h,m[R],b),N!==null&&(d=o(N,d,R),T===null?C=N:T.sibling=N,T=N);return Y&&Xt(h,R),C}for(N=n(h,N);R<m.length;R++)F=x(N,h,R,m[R],b),F!==null&&(e&&F.alternate!==null&&N.delete(F.key===null?R:F.key),d=o(F,d,R),T===null?C=F:T.sibling=F,T=F);return e&&N.forEach(function(re){return t(h,re)}),Y&&Xt(h,R),C}function w(h,d,m,b){var C=Wr(m);if(typeof C!="function")throw Error(j(150));if(m=C.call(m),m==null)throw Error(j(151));for(var T=C=null,N=d,R=d=0,F=null,z=m.next();N!==null&&!z.done;R++,z=m.next()){N.index>R?(F=N,N=null):F=N.sibling;var re=f(h,N,z.value,b);if(re===null){N===null&&(N=F);break}e&&N&&re.alternate===null&&t(h,N),d=o(re,d,R),T===null?C=re:T.sibling=re,T=re,N=F}if(z.done)return r(h,N),Y&&Xt(h,R),C;if(N===null){for(;!z.done;R++,z=m.next())z=p(h,z.value,b),z!==null&&(d=o(z,d,R),T===null?C=z:T.sibling=z,T=z);return Y&&Xt(h,R),C}for(N=n(h,N);!z.done;R++,z=m.next())z=x(N,h,R,z.value,b),z!==null&&(e&&z.alternate!==null&&N.delete(z.key===null?R:z.key),d=o(z,d,R),T===null?C=z:T.sibling=z,T=z);return e&&N.forEach(function($e){return t(h,$e)}),Y&&Xt(h,R),C}function S(h,d,m,b){if(typeof m=="object"&&m!==null&&m.type===fr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Un:e:{for(var C=m.key,T=d;T!==null;){if(T.key===C){if(C=m.type,C===fr){if(T.tag===7){r(h,T.sibling),d=s(T,m.props.children),d.return=h,h=d;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Ct&&wi(C)===T.type){r(h,T.sibling),d=s(T,m.props),d.ref=Xr(h,T,m),d.return=h,h=d;break e}r(h,T);break}else t(h,T);T=T.sibling}m.type===fr?(d=nr(m.props.children,h.mode,b,m.key),d.return=h,h=d):(b=gs(m.type,m.key,m.props,null,h.mode,b),b.ref=Xr(h,d,m),b.return=h,h=b)}return a(h);case pr:e:{for(T=m.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===m.containerInfo&&d.stateNode.implementation===m.implementation){r(h,d.sibling),d=s(d,m.children||[]),d.return=h,h=d;break e}else{r(h,d);break}else t(h,d);d=d.sibling}d=Ao(m,h.mode,b),d.return=h,h=d}return a(h);case Ct:return T=m._init,S(h,d,T(m._payload),b)}if(en(m))return y(h,d,m,b);if(Wr(m))return w(h,d,m,b);qn(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,d!==null&&d.tag===6?(r(h,d.sibling),d=s(d,m),d.return=h,h=d):(r(h,d),d=Fo(m,h.mode,b),d.return=h,h=d),a(h)):r(h,d)}return S}var _r=bu(!0),wu=bu(!1),$s=Ut(null),Ls=null,wr=null,dl=null;function pl(){dl=wr=Ls=null}function fl(e){var t=$s.current;Q($s),e._currentValue=t}function ba(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Pr(e,t){Ls=e,dl=wr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ne=!0),e.firstContext=null)}function He(e){var t=e._currentValue;if(dl!==e)if(e={context:e,memoizedValue:t,next:null},wr===null){if(Ls===null)throw Error(j(308));wr=e,Ls.dependencies={lanes:0,firstContext:e}}else wr=wr.next=e;return t}var qt=null;function ml(e){qt===null?qt=[e]:qt.push(e)}function ku(e,t,r,n){var s=t.interleaved;return s===null?(r.next=r,ml(t)):(r.next=s.next,s.next=r),t.interleaved=r,xt(e,n)}function xt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var St=!1;function hl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function mt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function It(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,B&2){var s=n.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),n.pending=t,xt(e,r)}return s=n.interleaved,s===null?(t.next=t,ml(n)):(t.next=s.next,s.next=t),n.interleaved=t,xt(e,r)}function us(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,el(e,r)}}function ki(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var s=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?s=o=a:o=o.next=a,r=r.next}while(r!==null);o===null?s=o=t:o=o.next=t}else s=o=t;r={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Rs(e,t,r,n){var s=e.updateQueue;St=!1;var o=s.firstBaseUpdate,a=s.lastBaseUpdate,i=s.shared.pending;if(i!==null){s.shared.pending=null;var c=i,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var g=e.alternate;g!==null&&(g=g.updateQueue,i=g.lastBaseUpdate,i!==a&&(i===null?g.firstBaseUpdate=u:i.next=u,g.lastBaseUpdate=c))}if(o!==null){var p=s.baseState;a=0,g=u=c=null,i=o;do{var f=i.lane,x=i.eventTime;if((n&f)===f){g!==null&&(g=g.next={eventTime:x,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var y=e,w=i;switch(f=t,x=r,w.tag){case 1:if(y=w.payload,typeof y=="function"){p=y.call(x,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,f=typeof y=="function"?y.call(x,p,f):y,f==null)break e;p=Z({},p,f);break e;case 2:St=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,f=s.effects,f===null?s.effects=[i]:f.push(i))}else x={eventTime:x,lane:f,tag:i.tag,payload:i.payload,callback:i.callback,next:null},g===null?(u=g=x,c=p):g=g.next=x,a|=f;if(i=i.next,i===null){if(i=s.shared.pending,i===null)break;f=i,i=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(g===null&&(c=p),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=g,t=s.shared.interleaved,t!==null){s=t;do a|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);lr|=a,e.lanes=a,e.memoizedState=p}}function Ci(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],s=n.callback;if(s!==null){if(n.callback=null,n=r,typeof s!="function")throw Error(j(191,s));s.call(n)}}}var Dn={},lt=Ut(Dn),Sn=Ut(Dn),jn=Ut(Dn);function er(e){if(e===Dn)throw Error(j(174));return e}function gl(e,t){switch(W(jn,t),W(Sn,e),W(lt,Dn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ea(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ea(t,e)}Q(lt),W(lt,t)}function Ir(){Q(lt),Q(Sn),Q(jn)}function Su(e){er(jn.current);var t=er(lt.current),r=ea(t,e.type);t!==r&&(W(Sn,e),W(lt,r))}function xl(e){Sn.current===e&&(Q(lt),Q(Sn))}var X=Ut(0);function _s(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _o=[];function vl(){for(var e=0;e<_o.length;e++)_o[e]._workInProgressVersionPrimary=null;_o.length=0}var ds=yt.ReactCurrentDispatcher,Io=yt.ReactCurrentBatchConfig,ar=0,J=null,oe=null,le=null,Is=!1,cn=!1,Nn=0,Hf=0;function me(){throw Error(j(321))}function yl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!qe(e[r],t[r]))return!1;return!0}function bl(e,t,r,n,s,o){if(ar=o,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ds.current=e===null||e.memoizedState===null?Qf:Yf,e=r(n,s),cn){o=0;do{if(cn=!1,Nn=0,25<=o)throw Error(j(301));o+=1,le=oe=null,t.updateQueue=null,ds.current=Kf,e=r(n,s)}while(cn)}if(ds.current=zs,t=oe!==null&&oe.next!==null,ar=0,le=oe=J=null,Is=!1,t)throw Error(j(300));return e}function wl(){var e=Nn!==0;return Nn=0,e}function st(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?J.memoizedState=le=e:le=le.next=e,le}function Ve(){if(oe===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=le===null?J.memoizedState:le.next;if(t!==null)le=t,oe=e;else{if(e===null)throw Error(j(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},le===null?J.memoizedState=le=e:le=le.next=e}return le}function En(e,t){return typeof t=="function"?t(e):t}function zo(e){var t=Ve(),r=t.queue;if(r===null)throw Error(j(311));r.lastRenderedReducer=e;var n=oe,s=n.baseQueue,o=r.pending;if(o!==null){if(s!==null){var a=s.next;s.next=o.next,o.next=a}n.baseQueue=s=o,r.pending=null}if(s!==null){o=s.next,n=n.baseState;var i=a=null,c=null,u=o;do{var g=u.lane;if((ar&g)===g)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var p={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(i=c=p,a=n):c=c.next=p,J.lanes|=g,lr|=g}u=u.next}while(u!==null&&u!==o);c===null?a=n:c.next=i,qe(n,t.memoizedState)||(Ne=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){s=e;do o=s.lane,J.lanes|=o,lr|=o,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Do(e){var t=Ve(),r=t.queue;if(r===null)throw Error(j(311));r.lastRenderedReducer=e;var n=r.dispatch,s=r.pending,o=t.memoizedState;if(s!==null){r.pending=null;var a=s=s.next;do o=e(o,a.action),a=a.next;while(a!==s);qe(o,t.memoizedState)||(Ne=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function ju(){}function Nu(e,t){var r=J,n=Ve(),s=t(),o=!qe(n.memoizedState,s);if(o&&(n.memoizedState=s,Ne=!0),n=n.queue,kl(Tu.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(r.flags|=2048,Pn(9,Pu.bind(null,r,n,s,t),void 0,null),ie===null)throw Error(j(349));ar&30||Eu(r,t,s)}return s}function Eu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Pu(e,t,r,n){t.value=r,t.getSnapshot=n,$u(t)&&Lu(e)}function Tu(e,t,r){return r(function(){$u(t)&&Lu(e)})}function $u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!qe(e,r)}catch{return!0}}function Lu(e){var t=xt(e,1);t!==null&&Ze(t,e,1,-1)}function Si(e){var t=st();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:En,lastRenderedState:e},t.queue=e,e=e.dispatch=Gf.bind(null,J,e),[t.memoizedState,e]}function Pn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Ru(){return Ve().memoizedState}function ps(e,t,r,n){var s=st();J.flags|=e,s.memoizedState=Pn(1|t,r,void 0,n===void 0?null:n)}function Xs(e,t,r,n){var s=Ve();n=n===void 0?null:n;var o=void 0;if(oe!==null){var a=oe.memoizedState;if(o=a.destroy,n!==null&&yl(n,a.deps)){s.memoizedState=Pn(t,r,o,n);return}}J.flags|=e,s.memoizedState=Pn(1|t,r,o,n)}function ji(e,t){return ps(8390656,8,e,t)}function kl(e,t){return Xs(2048,8,e,t)}function _u(e,t){return Xs(4,2,e,t)}function Iu(e,t){return Xs(4,4,e,t)}function zu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Du(e,t,r){return r=r!=null?r.concat([e]):null,Xs(4,4,zu.bind(null,t,e),r)}function Cl(){}function Ou(e,t){var r=Ve();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&yl(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Mu(e,t){var r=Ve();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&yl(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Fu(e,t,r){return ar&21?(qe(r,t)||(r=Vc(),J.lanes|=r,lr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ne=!0),e.memoizedState=r)}function Vf(e,t){var r=H;H=r!==0&&4>r?r:4,e(!0);var n=Io.transition;Io.transition={};try{e(!1),t()}finally{H=r,Io.transition=n}}function Au(){return Ve().memoizedState}function Wf(e,t,r){var n=Dt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Bu(e))Uu(t,r);else if(r=ku(e,t,r,n),r!==null){var s=ke();Ze(r,e,n,s),Hu(r,t,n)}}function Gf(e,t,r){var n=Dt(e),s={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Bu(e))Uu(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,i=o(a,r);if(s.hasEagerState=!0,s.eagerState=i,qe(i,a)){var c=t.interleaved;c===null?(s.next=s,ml(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}r=ku(e,t,s,n),r!==null&&(s=ke(),Ze(r,e,n,s),Hu(r,t,n))}}function Bu(e){var t=e.alternate;return e===J||t!==null&&t===J}function Uu(e,t){cn=Is=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Hu(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,el(e,r)}}var zs={readContext:He,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Qf={readContext:He,useCallback:function(e,t){return st().memoizedState=[e,t===void 0?null:t],e},useContext:He,useEffect:ji,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,ps(4194308,4,zu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return ps(4194308,4,e,t)},useInsertionEffect:function(e,t){return ps(4,2,e,t)},useMemo:function(e,t){var r=st();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=st();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Wf.bind(null,J,e),[n.memoizedState,e]},useRef:function(e){var t=st();return e={current:e},t.memoizedState=e},useState:Si,useDebugValue:Cl,useDeferredValue:function(e){return st().memoizedState=e},useTransition:function(){var e=Si(!1),t=e[0];return e=Vf.bind(null,e[1]),st().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=J,s=st();if(Y){if(r===void 0)throw Error(j(407));r=r()}else{if(r=t(),ie===null)throw Error(j(349));ar&30||Eu(n,t,r)}s.memoizedState=r;var o={value:r,getSnapshot:t};return s.queue=o,ji(Tu.bind(null,n,o,e),[e]),n.flags|=2048,Pn(9,Pu.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=st(),t=ie.identifierPrefix;if(Y){var r=ft,n=pt;r=(n&~(1<<32-Je(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Nn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Hf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Yf={readContext:He,useCallback:Ou,useContext:He,useEffect:kl,useImperativeHandle:Du,useInsertionEffect:_u,useLayoutEffect:Iu,useMemo:Mu,useReducer:zo,useRef:Ru,useState:function(){return zo(En)},useDebugValue:Cl,useDeferredValue:function(e){var t=Ve();return Fu(t,oe.memoizedState,e)},useTransition:function(){var e=zo(En)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:ju,useSyncExternalStore:Nu,useId:Au,unstable_isNewReconciler:!1},Kf={readContext:He,useCallback:Ou,useContext:He,useEffect:kl,useImperativeHandle:Du,useInsertionEffect:_u,useLayoutEffect:Iu,useMemo:Mu,useReducer:Do,useRef:Ru,useState:function(){return Do(En)},useDebugValue:Cl,useDeferredValue:function(e){var t=Ve();return oe===null?t.memoizedState=e:Fu(t,oe.memoizedState,e)},useTransition:function(){var e=Do(En)[0],t=Ve().memoizedState;return[e,t]},useMutableSource:ju,useSyncExternalStore:Nu,useId:Au,unstable_isNewReconciler:!1};function Ye(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function wa(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Z({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Js={isMounted:function(e){return(e=e._reactInternals)?ur(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ke(),s=Dt(e),o=mt(n,s);o.payload=t,r!=null&&(o.callback=r),t=It(e,o,s),t!==null&&(Ze(t,e,s,n),us(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ke(),s=Dt(e),o=mt(n,s);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=It(e,o,s),t!==null&&(Ze(t,e,s,n),us(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ke(),n=Dt(e),s=mt(r,n);s.tag=2,t!=null&&(s.callback=t),t=It(e,s,n),t!==null&&(Ze(t,e,n,r),us(t,e,n))}};function Ni(e,t,r,n,s,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,a):t.prototype&&t.prototype.isPureReactComponent?!bn(r,n)||!bn(s,o):!0}function Vu(e,t,r){var n=!1,s=At,o=t.contextType;return typeof o=="object"&&o!==null?o=He(o):(s=Pe(t)?sr:xe.current,n=t.contextTypes,o=(n=n!=null)?Lr(e,s):At),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Js,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function Ei(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Js.enqueueReplaceState(t,t.state,null)}function ka(e,t,r,n){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},hl(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=He(o):(o=Pe(t)?sr:xe.current,s.context=Lr(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(wa(e,t,o,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Js.enqueueReplaceState(s,s.state,null),Rs(e,r,s,n),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function zr(e,t){try{var r="",n=t;do r+=kp(n),n=n.return;while(n);var s=r}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function Oo(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ca(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Xf=typeof WeakMap=="function"?WeakMap:Map;function Wu(e,t,r){r=mt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Os||(Os=!0,_a=n),Ca(e,t)},r}function Gu(e,t,r){r=mt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var s=t.value;r.payload=function(){return n(s)},r.callback=function(){Ca(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){Ca(e,t),typeof n!="function"&&(zt===null?zt=new Set([this]):zt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Pi(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Xf;var s=new Set;n.set(t,s)}else s=n.get(t),s===void 0&&(s=new Set,n.set(t,s));s.has(r)||(s.add(r),e=um.bind(null,e,t,r),t.then(e,e))}function Ti(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $i(e,t,r,n,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=mt(-1,1),t.tag=2,It(r,t,1))),r.lanes|=1),e)}var Jf=yt.ReactCurrentOwner,Ne=!1;function we(e,t,r,n){t.child=e===null?wu(t,null,r,n):_r(t,e.child,r,n)}function Li(e,t,r,n,s){r=r.render;var o=t.ref;return Pr(t,s),n=bl(e,t,r,n,o,s),r=wl(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,vt(e,t,s)):(Y&&r&&il(t),t.flags|=1,we(e,t,n,s),t.child)}function Ri(e,t,r,n,s){if(e===null){var o=r.type;return typeof o=="function"&&!Ll(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,Qu(e,t,o,n,s)):(e=gs(r.type,null,n,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&s)){var a=o.memoizedProps;if(r=r.compare,r=r!==null?r:bn,r(a,n)&&e.ref===t.ref)return vt(e,t,s)}return t.flags|=1,e=Ot(o,n),e.ref=t.ref,e.return=t,t.child=e}function Qu(e,t,r,n,s){if(e!==null){var o=e.memoizedProps;if(bn(o,n)&&e.ref===t.ref)if(Ne=!1,t.pendingProps=n=o,(e.lanes&s)!==0)e.flags&131072&&(Ne=!0);else return t.lanes=e.lanes,vt(e,t,s)}return Sa(e,t,r,n,s)}function Yu(e,t,r){var n=t.pendingProps,s=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(Cr,Re),Re|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(Cr,Re),Re|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,W(Cr,Re),Re|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,W(Cr,Re),Re|=n;return we(e,t,s,r),t.child}function Ku(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Sa(e,t,r,n,s){var o=Pe(r)?sr:xe.current;return o=Lr(t,o),Pr(t,s),r=bl(e,t,r,n,o,s),n=wl(),e!==null&&!Ne?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,vt(e,t,s)):(Y&&n&&il(t),t.flags|=1,we(e,t,r,s),t.child)}function _i(e,t,r,n,s){if(Pe(r)){var o=!0;Es(t)}else o=!1;if(Pr(t,s),t.stateNode===null)fs(e,t),Vu(t,r,n),ka(t,r,n,s),n=!0;else if(e===null){var a=t.stateNode,i=t.memoizedProps;a.props=i;var c=a.context,u=r.contextType;typeof u=="object"&&u!==null?u=He(u):(u=Pe(r)?sr:xe.current,u=Lr(t,u));var g=r.getDerivedStateFromProps,p=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==n||c!==u)&&Ei(t,a,n,u),St=!1;var f=t.memoizedState;a.state=f,Rs(t,n,a,s),c=t.memoizedState,i!==n||f!==c||Ee.current||St?(typeof g=="function"&&(wa(t,r,g,n),c=t.memoizedState),(i=St||Ni(t,r,i,n,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),a.props=n,a.state=c,a.context=u,n=i):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,Cu(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:Ye(t.type,i),a.props=u,p=t.pendingProps,f=a.context,c=r.contextType,typeof c=="object"&&c!==null?c=He(c):(c=Pe(r)?sr:xe.current,c=Lr(t,c));var x=r.getDerivedStateFromProps;(g=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==p||f!==c)&&Ei(t,a,n,c),St=!1,f=t.memoizedState,a.state=f,Rs(t,n,a,s);var y=t.memoizedState;i!==p||f!==y||Ee.current||St?(typeof x=="function"&&(wa(t,r,x,n),y=t.memoizedState),(u=St||Ni(t,r,u,n,f,y,c)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=y),a.props=n,a.state=y,a.context=c,n=u):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),n=!1)}return ja(e,t,r,n,o,s)}function ja(e,t,r,n,s,o){Ku(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return s&&vi(t,r,!1),vt(e,t,o);n=t.stateNode,Jf.current=t;var i=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=_r(t,e.child,null,o),t.child=_r(t,null,i,o)):we(e,t,i,o),t.memoizedState=n.state,s&&vi(t,r,!0),t.child}function Xu(e){var t=e.stateNode;t.pendingContext?xi(e,t.pendingContext,t.pendingContext!==t.context):t.context&&xi(e,t.context,!1),gl(e,t.containerInfo)}function Ii(e,t,r,n,s){return Rr(),ul(s),t.flags|=256,we(e,t,r,n),t.child}var Na={dehydrated:null,treeContext:null,retryLane:0};function Ea(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ju(e,t,r){var n=t.pendingProps,s=X.current,o=!1,a=(t.flags&128)!==0,i;if((i=a)||(i=e!==null&&e.memoizedState===null?!1:(s&2)!==0),i?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),W(X,s&1),e===null)return ya(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,o?(n=t.mode,o=t.child,a={mode:"hidden",children:a},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=eo(a,n,0,null),e=nr(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Ea(r),t.memoizedState=Na,e):Sl(t,a));if(s=e.memoizedState,s!==null&&(i=s.dehydrated,i!==null))return Zf(e,t,a,n,i,s,r);if(o){o=n.fallback,a=t.mode,s=e.child,i=s.sibling;var c={mode:"hidden",children:n.children};return!(a&1)&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=Ot(s,c),n.subtreeFlags=s.subtreeFlags&14680064),i!==null?o=Ot(i,o):(o=nr(o,a,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,a=e.child.memoizedState,a=a===null?Ea(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~r,t.memoizedState=Na,n}return o=e.child,e=o.sibling,n=Ot(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Sl(e,t){return t=eo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function es(e,t,r,n){return n!==null&&ul(n),_r(t,e.child,null,r),e=Sl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Zf(e,t,r,n,s,o,a){if(r)return t.flags&256?(t.flags&=-257,n=Oo(Error(j(422))),es(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,s=t.mode,n=eo({mode:"visible",children:n.children},s,0,null),o=nr(o,s,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&_r(t,e.child,null,a),t.child.memoizedState=Ea(a),t.memoizedState=Na,o);if(!(t.mode&1))return es(e,t,a,null);if(s.data==="$!"){if(n=s.nextSibling&&s.nextSibling.dataset,n)var i=n.dgst;return n=i,o=Error(j(419)),n=Oo(o,n,void 0),es(e,t,a,n)}if(i=(a&e.childLanes)!==0,Ne||i){if(n=ie,n!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(n.suspendedLanes|a)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,xt(e,s),Ze(n,e,s,-1))}return $l(),n=Oo(Error(j(421))),es(e,t,a,n)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=dm.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,_e=_t(s.nextSibling),Ie=t,Y=!0,Xe=null,e!==null&&(Fe[Ae++]=pt,Fe[Ae++]=ft,Fe[Ae++]=or,pt=e.id,ft=e.overflow,or=t),t=Sl(t,n.children),t.flags|=4096,t)}function zi(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ba(e.return,t,r)}function Mo(e,t,r,n,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=s)}function Zu(e,t,r){var n=t.pendingProps,s=n.revealOrder,o=n.tail;if(we(e,t,n.children,r),n=X.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zi(e,r,t);else if(e.tag===19)zi(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(W(X,n),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&_s(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),Mo(t,!1,s,r,o);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&_s(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}Mo(t,!0,r,null,o);break;case"together":Mo(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function vt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),lr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,r=Ot(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Ot(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function qf(e,t,r){switch(t.tag){case 3:Xu(t),Rr();break;case 5:Su(t);break;case 1:Pe(t.type)&&Es(t);break;case 4:gl(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,s=t.memoizedProps.value;W($s,n._currentValue),n._currentValue=s;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(W(X,X.current&1),t.flags|=128,null):r&t.child.childLanes?Ju(e,t,r):(W(X,X.current&1),e=vt(e,t,r),e!==null?e.sibling:null);W(X,X.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Zu(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),W(X,X.current),n)break;return null;case 22:case 23:return t.lanes=0,Yu(e,t,r)}return vt(e,t,r)}var qu,Pa,ed,td;qu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Pa=function(){};ed=function(e,t,r,n){var s=e.memoizedProps;if(s!==n){e=t.stateNode,er(lt.current);var o=null;switch(r){case"input":s=Xo(e,s),n=Xo(e,n),o=[];break;case"select":s=Z({},s,{value:void 0}),n=Z({},n,{value:void 0}),o=[];break;case"textarea":s=qo(e,s),n=qo(e,n),o=[];break;default:typeof s.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=js)}ta(r,n);var a;r=null;for(u in s)if(!n.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var i=s[u];for(a in i)i.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(i=s!=null?s[u]:void 0,n.hasOwnProperty(u)&&c!==i&&(c!=null||i!=null))if(u==="style")if(i){for(a in i)!i.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in c)c.hasOwnProperty(a)&&i[a]!==c[a]&&(r||(r={}),r[a]=c[a])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&G("scroll",e),o||i===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};td=function(e,t,r,n){r!==n&&(t.flags|=4)};function Jr(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags&14680064,n|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function em(e,t,r){var n=t.pendingProps;switch(cl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Pe(t.type)&&Ns(),he(t),null;case 3:return n=t.stateNode,Ir(),Q(Ee),Q(xe),vl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Zn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xe!==null&&(Da(Xe),Xe=null))),Pa(e,t),he(t),null;case 5:xl(t);var s=er(jn.current);if(r=t.type,e!==null&&t.stateNode!=null)ed(e,t,r,n,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(j(166));return he(t),null}if(e=er(lt.current),Zn(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[ot]=t,n[Cn]=o,e=(t.mode&1)!==0,r){case"dialog":G("cancel",n),G("close",n);break;case"iframe":case"object":case"embed":G("load",n);break;case"video":case"audio":for(s=0;s<rn.length;s++)G(rn[s],n);break;case"source":G("error",n);break;case"img":case"image":case"link":G("error",n),G("load",n);break;case"details":G("toggle",n);break;case"input":Vl(n,o),G("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},G("invalid",n);break;case"textarea":Gl(n,o),G("invalid",n)}ta(r,o),s=null;for(var a in o)if(o.hasOwnProperty(a)){var i=o[a];a==="children"?typeof i=="string"?n.textContent!==i&&(o.suppressHydrationWarning!==!0&&Jn(n.textContent,i,e),s=["children",i]):typeof i=="number"&&n.textContent!==""+i&&(o.suppressHydrationWarning!==!0&&Jn(n.textContent,i,e),s=["children",""+i]):fn.hasOwnProperty(a)&&i!=null&&a==="onScroll"&&G("scroll",n)}switch(r){case"input":Hn(n),Wl(n,o,!0);break;case"textarea":Hn(n),Ql(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=js)}n=s,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Tc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[ot]=t,e[Cn]=n,qu(e,t,!1,!1),t.stateNode=e;e:{switch(a=ra(r,n),r){case"dialog":G("cancel",e),G("close",e),s=n;break;case"iframe":case"object":case"embed":G("load",e),s=n;break;case"video":case"audio":for(s=0;s<rn.length;s++)G(rn[s],e);s=n;break;case"source":G("error",e),s=n;break;case"img":case"image":case"link":G("error",e),G("load",e),s=n;break;case"details":G("toggle",e),s=n;break;case"input":Vl(e,n),s=Xo(e,n),G("invalid",e);break;case"option":s=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},s=Z({},n,{value:void 0}),G("invalid",e);break;case"textarea":Gl(e,n),s=qo(e,n),G("invalid",e);break;default:s=n}ta(r,s),i=s;for(o in i)if(i.hasOwnProperty(o)){var c=i[o];o==="style"?Rc(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&$c(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&mn(e,c):typeof c=="number"&&mn(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(fn.hasOwnProperty(o)?c!=null&&o==="onScroll"&&G("scroll",e):c!=null&&Ya(e,o,c,a))}switch(r){case"input":Hn(e),Wl(e,n,!1);break;case"textarea":Hn(e),Ql(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Ft(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?Sr(e,!!n.multiple,o,!1):n.defaultValue!=null&&Sr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=js)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)td(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(j(166));if(r=er(jn.current),er(lt.current),Zn(t)){if(n=t.stateNode,r=t.memoizedProps,n[ot]=t,(o=n.nodeValue!==r)&&(e=Ie,e!==null))switch(e.tag){case 3:Jn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Jn(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[ot]=t,t.stateNode=n}return he(t),null;case 13:if(Q(X),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&_e!==null&&t.mode&1&&!(t.flags&128))yu(),Rr(),t.flags|=98560,o=!1;else if(o=Zn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[ot]=t}else Rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),o=!1}else Xe!==null&&(Da(Xe),Xe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?ae===0&&(ae=3):$l())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return Ir(),Pa(e,t),e===null&&wn(t.stateNode.containerInfo),he(t),null;case 10:return fl(t.type._context),he(t),null;case 17:return Pe(t.type)&&Ns(),he(t),null;case 19:if(Q(X),o=t.memoizedState,o===null)return he(t),null;if(n=(t.flags&128)!==0,a=o.rendering,a===null)if(n)Jr(o,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=_s(e),a!==null){for(t.flags|=128,Jr(o,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return W(X,X.current&1|2),t.child}e=e.sibling}o.tail!==null&&te()>Dr&&(t.flags|=128,n=!0,Jr(o,!1),t.lanes=4194304)}else{if(!n)if(e=_s(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Jr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!Y)return he(t),null}else 2*te()-o.renderingStartTime>Dr&&r!==1073741824&&(t.flags|=128,n=!0,Jr(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(r=o.last,r!==null?r.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=te(),t.sibling=null,r=X.current,W(X,n?r&1|2:r&1),t):(he(t),null);case 22:case 23:return Tl(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Re&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function tm(e,t){switch(cl(t),t.tag){case 1:return Pe(t.type)&&Ns(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ir(),Q(Ee),Q(xe),vl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xl(t),null;case 13:if(Q(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Q(X),null;case 4:return Ir(),null;case 10:return fl(t.type._context),null;case 22:case 23:return Tl(),null;case 24:return null;default:return null}}var ts=!1,ge=!1,rm=typeof WeakSet=="function"?WeakSet:Set,L=null;function kr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){q(e,t,n)}else r.current=null}function Ta(e,t,r){try{r()}catch(n){q(e,t,n)}}var Di=!1;function nm(e,t){if(pa=ks,e=au(),ll(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var s=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var a=0,i=-1,c=-1,u=0,g=0,p=e,f=null;t:for(;;){for(var x;p!==r||s!==0&&p.nodeType!==3||(i=a+s),p!==o||n!==0&&p.nodeType!==3||(c=a+n),p.nodeType===3&&(a+=p.nodeValue.length),(x=p.firstChild)!==null;)f=p,p=x;for(;;){if(p===e)break t;if(f===r&&++u===s&&(i=a),f===o&&++g===n&&(c=a),(x=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=x}r=i===-1||c===-1?null:{start:i,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(fa={focusedElem:e,selectionRange:r},ks=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,S=y.memoizedState,h=t.stateNode,d=h.getSnapshotBeforeUpdate(t.elementType===t.type?w:Ye(t.type,w),S);h.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(b){q(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return y=Di,Di=!1,y}function un(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&Ta(t,r,o)}s=s.next}while(s!==n)}}function Zs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function $a(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function rd(e){var t=e.alternate;t!==null&&(e.alternate=null,rd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ot],delete t[Cn],delete t[ga],delete t[Ff],delete t[Af])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function nd(e){return e.tag===5||e.tag===3||e.tag===4}function Oi(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function La(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=js));else if(n!==4&&(e=e.child,e!==null))for(La(e,t,r),e=e.sibling;e!==null;)La(e,t,r),e=e.sibling}function Ra(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ra(e,t,r),e=e.sibling;e!==null;)Ra(e,t,r),e=e.sibling}var ce=null,Ke=!1;function wt(e,t,r){for(r=r.child;r!==null;)sd(e,t,r),r=r.sibling}function sd(e,t,r){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Vs,r)}catch{}switch(r.tag){case 5:ge||kr(r,t);case 6:var n=ce,s=Ke;ce=null,wt(e,t,r),ce=n,Ke=s,ce!==null&&(Ke?(e=ce,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ce.removeChild(r.stateNode));break;case 18:ce!==null&&(Ke?(e=ce,r=r.stateNode,e.nodeType===8?Lo(e.parentNode,r):e.nodeType===1&&Lo(e,r),vn(e)):Lo(ce,r.stateNode));break;case 4:n=ce,s=Ke,ce=r.stateNode.containerInfo,Ke=!0,wt(e,t,r),ce=n,Ke=s;break;case 0:case 11:case 14:case 15:if(!ge&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){s=n=n.next;do{var o=s,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Ta(r,t,a),s=s.next}while(s!==n)}wt(e,t,r);break;case 1:if(!ge&&(kr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(i){q(r,t,i)}wt(e,t,r);break;case 21:wt(e,t,r);break;case 22:r.mode&1?(ge=(n=ge)||r.memoizedState!==null,wt(e,t,r),ge=n):wt(e,t,r);break;default:wt(e,t,r)}}function Mi(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new rm),t.forEach(function(n){var s=pm.bind(null,e,n);r.has(n)||(r.add(n),n.then(s,s))})}}function Qe(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var s=r[n];try{var o=e,a=t,i=a;e:for(;i!==null;){switch(i.tag){case 5:ce=i.stateNode,Ke=!1;break e;case 3:ce=i.stateNode.containerInfo,Ke=!0;break e;case 4:ce=i.stateNode.containerInfo,Ke=!0;break e}i=i.return}if(ce===null)throw Error(j(160));sd(o,a,s),ce=null,Ke=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){q(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)od(t,e),t=t.sibling}function od(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Qe(t,e),nt(e),n&4){try{un(3,e,e.return),Zs(3,e)}catch(w){q(e,e.return,w)}try{un(5,e,e.return)}catch(w){q(e,e.return,w)}}break;case 1:Qe(t,e),nt(e),n&512&&r!==null&&kr(r,r.return);break;case 5:if(Qe(t,e),nt(e),n&512&&r!==null&&kr(r,r.return),e.flags&32){var s=e.stateNode;try{mn(s,"")}catch(w){q(e,e.return,w)}}if(n&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,a=r!==null?r.memoizedProps:o,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&o.type==="radio"&&o.name!=null&&Ec(s,o),ra(i,a);var u=ra(i,o);for(a=0;a<c.length;a+=2){var g=c[a],p=c[a+1];g==="style"?Rc(s,p):g==="dangerouslySetInnerHTML"?$c(s,p):g==="children"?mn(s,p):Ya(s,g,p,u)}switch(i){case"input":Jo(s,o);break;case"textarea":Pc(s,o);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?Sr(s,!!o.multiple,x,!1):f!==!!o.multiple&&(o.defaultValue!=null?Sr(s,!!o.multiple,o.defaultValue,!0):Sr(s,!!o.multiple,o.multiple?[]:"",!1))}s[Cn]=o}catch(w){q(e,e.return,w)}}break;case 6:if(Qe(t,e),nt(e),n&4){if(e.stateNode===null)throw Error(j(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(w){q(e,e.return,w)}}break;case 3:if(Qe(t,e),nt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{vn(t.containerInfo)}catch(w){q(e,e.return,w)}break;case 4:Qe(t,e),nt(e);break;case 13:Qe(t,e),nt(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(El=te())),n&4&&Mi(e);break;case 22:if(g=r!==null&&r.memoizedState!==null,e.mode&1?(ge=(u=ge)||g,Qe(t,e),ge=u):Qe(t,e),nt(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(L=e,g=e.child;g!==null;){for(p=L=g;L!==null;){switch(f=L,x=f.child,f.tag){case 0:case 11:case 14:case 15:un(4,f,f.return);break;case 1:kr(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){n=f,r=f.return;try{t=n,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){q(n,r,w)}}break;case 5:kr(f,f.return);break;case 22:if(f.memoizedState!==null){Ai(p);continue}}x!==null?(x.return=f,L=x):Ai(p)}g=g.sibling}e:for(g=null,p=e;;){if(p.tag===5){if(g===null){g=p;try{s=p.stateNode,u?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(i=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=Lc("display",a))}catch(w){q(e,e.return,w)}}}else if(p.tag===6){if(g===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(w){q(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;g===p&&(g=null),p=p.return}g===p&&(g=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Qe(t,e),nt(e),n&4&&Mi(e);break;case 21:break;default:Qe(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(nd(r)){var n=r;break e}r=r.return}throw Error(j(160))}switch(n.tag){case 5:var s=n.stateNode;n.flags&32&&(mn(s,""),n.flags&=-33);var o=Oi(e);Ra(e,o,s);break;case 3:case 4:var a=n.stateNode.containerInfo,i=Oi(e);La(e,i,a);break;default:throw Error(j(161))}}catch(c){q(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sm(e,t,r){L=e,ad(e)}function ad(e,t,r){for(var n=(e.mode&1)!==0;L!==null;){var s=L,o=s.child;if(s.tag===22&&n){var a=s.memoizedState!==null||ts;if(!a){var i=s.alternate,c=i!==null&&i.memoizedState!==null||ge;i=ts;var u=ge;if(ts=a,(ge=c)&&!u)for(L=s;L!==null;)a=L,c=a.child,a.tag===22&&a.memoizedState!==null?Bi(s):c!==null?(c.return=a,L=c):Bi(s);for(;o!==null;)L=o,ad(o),o=o.sibling;L=s,ts=i,ge=u}Fi(e)}else s.subtreeFlags&8772&&o!==null?(o.return=s,L=o):Fi(e)}}function Fi(e){for(;L!==null;){var t=L;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||Zs(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ge)if(r===null)n.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:Ye(t.type,r.memoizedProps);n.componentDidUpdate(s,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ci(t,o,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Ci(t,a,r)}break;case 5:var i=t.stateNode;if(r===null&&t.flags&4){r=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var p=g.dehydrated;p!==null&&vn(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ge||t.flags&512&&$a(t)}catch(f){q(t,t.return,f)}}if(t===e){L=null;break}if(r=t.sibling,r!==null){r.return=t.return,L=r;break}L=t.return}}function Ai(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var r=t.sibling;if(r!==null){r.return=t.return,L=r;break}L=t.return}}function Bi(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Zs(4,t)}catch(c){q(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var s=t.return;try{n.componentDidMount()}catch(c){q(t,s,c)}}var o=t.return;try{$a(t)}catch(c){q(t,o,c)}break;case 5:var a=t.return;try{$a(t)}catch(c){q(t,a,c)}}}catch(c){q(t,t.return,c)}if(t===e){L=null;break}var i=t.sibling;if(i!==null){i.return=t.return,L=i;break}L=t.return}}var om=Math.ceil,Ds=yt.ReactCurrentDispatcher,jl=yt.ReactCurrentOwner,Ue=yt.ReactCurrentBatchConfig,B=0,ie=null,ne=null,ue=0,Re=0,Cr=Ut(0),ae=0,Tn=null,lr=0,qs=0,Nl=0,dn=null,je=null,El=0,Dr=1/0,ut=null,Os=!1,_a=null,zt=null,rs=!1,Pt=null,Ms=0,pn=0,Ia=null,ms=-1,hs=0;function ke(){return B&6?te():ms!==-1?ms:ms=te()}function Dt(e){return e.mode&1?B&2&&ue!==0?ue&-ue:Uf.transition!==null?(hs===0&&(hs=Vc()),hs):(e=H,e!==0||(e=window.event,e=e===void 0?16:Jc(e.type)),e):1}function Ze(e,t,r,n){if(50<pn)throw pn=0,Ia=null,Error(j(185));_n(e,r,n),(!(B&2)||e!==ie)&&(e===ie&&(!(B&2)&&(qs|=r),ae===4&&Nt(e,ue)),Te(e,n),r===1&&B===0&&!(t.mode&1)&&(Dr=te()+500,Ks&&Ht()))}function Te(e,t){var r=e.callbackNode;Bp(e,t);var n=ws(e,e===ie?ue:0);if(n===0)r!==null&&Xl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Xl(r),t===1)e.tag===0?Bf(Ui.bind(null,e)):gu(Ui.bind(null,e)),Of(function(){!(B&6)&&Ht()}),r=null;else{switch(Wc(n)){case 1:r=qa;break;case 4:r=Uc;break;case 16:r=bs;break;case 536870912:r=Hc;break;default:r=bs}r=md(r,ld.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function ld(e,t){if(ms=-1,hs=0,B&6)throw Error(j(327));var r=e.callbackNode;if(Tr()&&e.callbackNode!==r)return null;var n=ws(e,e===ie?ue:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Fs(e,n);else{t=n;var s=B;B|=2;var o=cd();(ie!==e||ue!==t)&&(ut=null,Dr=te()+500,rr(e,t));do try{im();break}catch(i){id(e,i)}while(!0);pl(),Ds.current=o,B=s,ne!==null?t=0:(ie=null,ue=0,t=ae)}if(t!==0){if(t===2&&(s=la(e),s!==0&&(n=s,t=za(e,s))),t===1)throw r=Tn,rr(e,0),Nt(e,n),Te(e,te()),r;if(t===6)Nt(e,n);else{if(s=e.current.alternate,!(n&30)&&!am(s)&&(t=Fs(e,n),t===2&&(o=la(e),o!==0&&(n=o,t=za(e,o))),t===1))throw r=Tn,rr(e,0),Nt(e,n),Te(e,te()),r;switch(e.finishedWork=s,e.finishedLanes=n,t){case 0:case 1:throw Error(j(345));case 2:Jt(e,je,ut);break;case 3:if(Nt(e,n),(n&130023424)===n&&(t=El+500-te(),10<t)){if(ws(e,0)!==0)break;if(s=e.suspendedLanes,(s&n)!==n){ke(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=ha(Jt.bind(null,e,je,ut),t);break}Jt(e,je,ut);break;case 4:if(Nt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,s=-1;0<n;){var a=31-Je(n);o=1<<a,a=t[a],a>s&&(s=a),n&=~o}if(n=s,n=te()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*om(n/1960))-n,10<n){e.timeoutHandle=ha(Jt.bind(null,e,je,ut),n);break}Jt(e,je,ut);break;case 5:Jt(e,je,ut);break;default:throw Error(j(329))}}}return Te(e,te()),e.callbackNode===r?ld.bind(null,e):null}function za(e,t){var r=dn;return e.current.memoizedState.isDehydrated&&(rr(e,t).flags|=256),e=Fs(e,t),e!==2&&(t=je,je=r,t!==null&&Da(t)),e}function Da(e){je===null?je=e:je.push.apply(je,e)}function am(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var s=r[n],o=s.getSnapshot;s=s.value;try{if(!qe(o(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Nt(e,t){for(t&=~Nl,t&=~qs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Je(t),n=1<<r;e[r]=-1,t&=~n}}function Ui(e){if(B&6)throw Error(j(327));Tr();var t=ws(e,0);if(!(t&1))return Te(e,te()),null;var r=Fs(e,t);if(e.tag!==0&&r===2){var n=la(e);n!==0&&(t=n,r=za(e,n))}if(r===1)throw r=Tn,rr(e,0),Nt(e,t),Te(e,te()),r;if(r===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Jt(e,je,ut),Te(e,te()),null}function Pl(e,t){var r=B;B|=1;try{return e(t)}finally{B=r,B===0&&(Dr=te()+500,Ks&&Ht())}}function ir(e){Pt!==null&&Pt.tag===0&&!(B&6)&&Tr();var t=B;B|=1;var r=Ue.transition,n=H;try{if(Ue.transition=null,H=1,e)return e()}finally{H=n,Ue.transition=r,B=t,!(B&6)&&Ht()}}function Tl(){Re=Cr.current,Q(Cr)}function rr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Df(r)),ne!==null)for(r=ne.return;r!==null;){var n=r;switch(cl(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ns();break;case 3:Ir(),Q(Ee),Q(xe),vl();break;case 5:xl(n);break;case 4:Ir();break;case 13:Q(X);break;case 19:Q(X);break;case 10:fl(n.type._context);break;case 22:case 23:Tl()}r=r.return}if(ie=e,ne=e=Ot(e.current,null),ue=Re=t,ae=0,Tn=null,Nl=qs=lr=0,je=dn=null,qt!==null){for(t=0;t<qt.length;t++)if(r=qt[t],n=r.interleaved,n!==null){r.interleaved=null;var s=n.next,o=r.pending;if(o!==null){var a=o.next;o.next=s,n.next=a}r.pending=n}qt=null}return e}function id(e,t){do{var r=ne;try{if(pl(),ds.current=zs,Is){for(var n=J.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}Is=!1}if(ar=0,le=oe=J=null,cn=!1,Nn=0,jl.current=null,r===null||r.return===null){ae=1,Tn=t,ne=null;break}e:{var o=e,a=r.return,i=r,c=t;if(t=ue,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,g=i,p=g.tag;if(!(g.mode&1)&&(p===0||p===11||p===15)){var f=g.alternate;f?(g.updateQueue=f.updateQueue,g.memoizedState=f.memoizedState,g.lanes=f.lanes):(g.updateQueue=null,g.memoizedState=null)}var x=Ti(a);if(x!==null){x.flags&=-257,$i(x,a,i,o,t),x.mode&1&&Pi(o,u,t),t=x,c=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(c),t.updateQueue=w}else y.add(c);break e}else{if(!(t&1)){Pi(o,u,t),$l();break e}c=Error(j(426))}}else if(Y&&i.mode&1){var S=Ti(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),$i(S,a,i,o,t),ul(zr(c,i));break e}}o=c=zr(c,i),ae!==4&&(ae=2),dn===null?dn=[o]:dn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var h=Wu(o,c,t);ki(o,h);break e;case 1:i=c;var d=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(zt===null||!zt.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=Gu(o,i,t);ki(o,b);break e}}o=o.return}while(o!==null)}dd(r)}catch(C){t=C,ne===r&&r!==null&&(ne=r=r.return);continue}break}while(!0)}function cd(){var e=Ds.current;return Ds.current=zs,e===null?zs:e}function $l(){(ae===0||ae===3||ae===2)&&(ae=4),ie===null||!(lr&268435455)&&!(qs&268435455)||Nt(ie,ue)}function Fs(e,t){var r=B;B|=2;var n=cd();(ie!==e||ue!==t)&&(ut=null,rr(e,t));do try{lm();break}catch(s){id(e,s)}while(!0);if(pl(),B=r,Ds.current=n,ne!==null)throw Error(j(261));return ie=null,ue=0,ae}function lm(){for(;ne!==null;)ud(ne)}function im(){for(;ne!==null&&!Rp();)ud(ne)}function ud(e){var t=fd(e.alternate,e,Re);e.memoizedProps=e.pendingProps,t===null?dd(e):ne=t,jl.current=null}function dd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=tm(r,t),r!==null){r.flags&=32767,ne=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,ne=null;return}}else if(r=em(r,t,Re),r!==null){ne=r;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);ae===0&&(ae=5)}function Jt(e,t,r){var n=H,s=Ue.transition;try{Ue.transition=null,H=1,cm(e,t,r,n)}finally{Ue.transition=s,H=n}return null}function cm(e,t,r,n){do Tr();while(Pt!==null);if(B&6)throw Error(j(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Up(e,o),e===ie&&(ne=ie=null,ue=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||rs||(rs=!0,md(bs,function(){return Tr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Ue.transition,Ue.transition=null;var a=H;H=1;var i=B;B|=4,jl.current=null,nm(e,r),od(r,e),Tf(fa),ks=!!pa,fa=pa=null,e.current=r,sm(r),_p(),B=i,H=a,Ue.transition=o}else e.current=r;if(rs&&(rs=!1,Pt=e,Ms=s),o=e.pendingLanes,o===0&&(zt=null),Dp(r.stateNode),Te(e,te()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],n(s.value,{componentStack:s.stack,digest:s.digest});if(Os)throw Os=!1,e=_a,_a=null,e;return Ms&1&&e.tag!==0&&Tr(),o=e.pendingLanes,o&1?e===Ia?pn++:(pn=0,Ia=e):pn=0,Ht(),null}function Tr(){if(Pt!==null){var e=Wc(Ms),t=Ue.transition,r=H;try{if(Ue.transition=null,H=16>e?16:e,Pt===null)var n=!1;else{if(e=Pt,Pt=null,Ms=0,B&6)throw Error(j(331));var s=B;for(B|=4,L=e.current;L!==null;){var o=L,a=o.child;if(L.flags&16){var i=o.deletions;if(i!==null){for(var c=0;c<i.length;c++){var u=i[c];for(L=u;L!==null;){var g=L;switch(g.tag){case 0:case 11:case 15:un(8,g,o)}var p=g.child;if(p!==null)p.return=g,L=p;else for(;L!==null;){g=L;var f=g.sibling,x=g.return;if(rd(g),g===u){L=null;break}if(f!==null){f.return=x,L=f;break}L=x}}}var y=o.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}L=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,L=a;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:un(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,L=h;break e}L=o.return}}var d=e.current;for(L=d;L!==null;){a=L;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,L=m;else e:for(a=d;L!==null;){if(i=L,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Zs(9,i)}}catch(C){q(i,i.return,C)}if(i===a){L=null;break e}var b=i.sibling;if(b!==null){b.return=i.return,L=b;break e}L=i.return}}if(B=s,Ht(),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Vs,e)}catch{}n=!0}return n}finally{H=r,Ue.transition=t}}return!1}function Hi(e,t,r){t=zr(r,t),t=Wu(e,t,1),e=It(e,t,1),t=ke(),e!==null&&(_n(e,1,t),Te(e,t))}function q(e,t,r){if(e.tag===3)Hi(e,e,r);else for(;t!==null;){if(t.tag===3){Hi(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(zt===null||!zt.has(n))){e=zr(r,e),e=Gu(t,e,1),t=It(t,e,1),e=ke(),t!==null&&(_n(t,1,e),Te(t,e));break}}t=t.return}}function um(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ke(),e.pingedLanes|=e.suspendedLanes&r,ie===e&&(ue&r)===r&&(ae===4||ae===3&&(ue&130023424)===ue&&500>te()-El?rr(e,0):Nl|=r),Te(e,t)}function pd(e,t){t===0&&(e.mode&1?(t=Gn,Gn<<=1,!(Gn&130023424)&&(Gn=4194304)):t=1);var r=ke();e=xt(e,t),e!==null&&(_n(e,t,r),Te(e,r))}function dm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),pd(e,r)}function pm(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(j(314))}n!==null&&n.delete(t),pd(e,r)}var fd;fd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ee.current)Ne=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ne=!1,qf(e,t,r);Ne=!!(e.flags&131072)}else Ne=!1,Y&&t.flags&1048576&&xu(t,Ts,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;fs(e,t),e=t.pendingProps;var s=Lr(t,xe.current);Pr(t,r),s=bl(null,t,n,e,s,r);var o=wl();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(n)?(o=!0,Es(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,hl(t),s.updater=Js,t.stateNode=s,s._reactInternals=t,ka(t,n,e,r),t=ja(null,t,n,!0,o,r)):(t.tag=0,Y&&o&&il(t),we(null,t,s,r),t=t.child),t;case 16:n=t.elementType;e:{switch(fs(e,t),e=t.pendingProps,s=n._init,n=s(n._payload),t.type=n,s=t.tag=mm(n),e=Ye(n,e),s){case 0:t=Sa(null,t,n,e,r);break e;case 1:t=_i(null,t,n,e,r);break e;case 11:t=Li(null,t,n,e,r);break e;case 14:t=Ri(null,t,n,Ye(n.type,e),r);break e}throw Error(j(306,n,""))}return t;case 0:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Ye(n,s),Sa(e,t,n,s,r);case 1:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Ye(n,s),_i(e,t,n,s,r);case 3:e:{if(Xu(t),e===null)throw Error(j(387));n=t.pendingProps,o=t.memoizedState,s=o.element,Cu(e,t),Rs(t,n,null,r);var a=t.memoizedState;if(n=a.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=zr(Error(j(423)),t),t=Ii(e,t,n,r,s);break e}else if(n!==s){s=zr(Error(j(424)),t),t=Ii(e,t,n,r,s);break e}else for(_e=_t(t.stateNode.containerInfo.firstChild),Ie=t,Y=!0,Xe=null,r=wu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Rr(),n===s){t=vt(e,t,r);break e}we(e,t,n,r)}t=t.child}return t;case 5:return Su(t),e===null&&ya(t),n=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,a=s.children,ma(n,s)?a=null:o!==null&&ma(n,o)&&(t.flags|=32),Ku(e,t),we(e,t,a,r),t.child;case 6:return e===null&&ya(t),null;case 13:return Ju(e,t,r);case 4:return gl(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=_r(t,null,n,r):we(e,t,n,r),t.child;case 11:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Ye(n,s),Li(e,t,n,s,r);case 7:return we(e,t,t.pendingProps,r),t.child;case 8:return we(e,t,t.pendingProps.children,r),t.child;case 12:return we(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,s=t.pendingProps,o=t.memoizedProps,a=s.value,W($s,n._currentValue),n._currentValue=a,o!==null)if(qe(o.value,a)){if(o.children===s.children&&!Ee.current){t=vt(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var i=o.dependencies;if(i!==null){a=o.child;for(var c=i.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=mt(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?c.next=c:(c.next=g.next,g.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),ba(o.return,r,t),i.lanes|=r;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(j(341));a.lanes|=r,i=a.alternate,i!==null&&(i.lanes|=r),ba(a,r,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}we(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,n=t.pendingProps.children,Pr(t,r),s=He(s),n=n(s),t.flags|=1,we(e,t,n,r),t.child;case 14:return n=t.type,s=Ye(n,t.pendingProps),s=Ye(n.type,s),Ri(e,t,n,s,r);case 15:return Qu(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:Ye(n,s),fs(e,t),t.tag=1,Pe(n)?(e=!0,Es(t)):e=!1,Pr(t,r),Vu(t,n,s),ka(t,n,s,r),ja(null,t,n,!0,e,r);case 19:return Zu(e,t,r);case 22:return Yu(e,t,r)}throw Error(j(156,t.tag))};function md(e,t){return Bc(e,t)}function fm(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Be(e,t,r,n){return new fm(e,t,r,n)}function Ll(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mm(e){if(typeof e=="function")return Ll(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xa)return 11;if(e===Ja)return 14}return 2}function Ot(e,t){var r=e.alternate;return r===null?(r=Be(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function gs(e,t,r,n,s,o){var a=2;if(n=e,typeof e=="function")Ll(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case fr:return nr(r.children,s,o,t);case Ka:a=8,s|=8;break;case Go:return e=Be(12,r,t,s|2),e.elementType=Go,e.lanes=o,e;case Qo:return e=Be(13,r,t,s),e.elementType=Qo,e.lanes=o,e;case Yo:return e=Be(19,r,t,s),e.elementType=Yo,e.lanes=o,e;case Sc:return eo(r,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case kc:a=10;break e;case Cc:a=9;break e;case Xa:a=11;break e;case Ja:a=14;break e;case Ct:a=16,n=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=Be(a,r,t,s),t.elementType=e,t.type=n,t.lanes=o,t}function nr(e,t,r,n){return e=Be(7,e,n,t),e.lanes=r,e}function eo(e,t,r,n){return e=Be(22,e,n,t),e.elementType=Sc,e.lanes=r,e.stateNode={isHidden:!1},e}function Fo(e,t,r){return e=Be(6,e,null,t),e.lanes=r,e}function Ao(e,t,r){return t=Be(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function hm(e,t,r,n,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bo(0),this.expirationTimes=bo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bo(0),this.identifierPrefix=n,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Rl(e,t,r,n,s,o,a,i,c){return e=new hm(e,t,r,i,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Be(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},hl(o),e}function gm(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function hd(e){if(!e)return At;e=e._reactInternals;e:{if(ur(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var r=e.type;if(Pe(r))return hu(e,r,t)}return t}function gd(e,t,r,n,s,o,a,i,c){return e=Rl(r,n,!0,e,s,o,a,i,c),e.context=hd(null),r=e.current,n=ke(),s=Dt(r),o=mt(n,s),o.callback=t??null,It(r,o,s),e.current.lanes=s,_n(e,s,n),Te(e,n),e}function to(e,t,r,n){var s=t.current,o=ke(),a=Dt(s);return r=hd(r),t.context===null?t.context=r:t.pendingContext=r,t=mt(o,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=It(s,t,a),e!==null&&(Ze(e,s,a,o),us(e,s,a)),a}function As(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vi(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function _l(e,t){Vi(e,t),(e=e.alternate)&&Vi(e,t)}function xm(){return null}var xd=typeof reportError=="function"?reportError:function(e){console.error(e)};function Il(e){this._internalRoot=e}ro.prototype.render=Il.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));to(e,t,null,null)};ro.prototype.unmount=Il.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ir(function(){to(null,e,null,null)}),t[gt]=null}};function ro(e){this._internalRoot=e}ro.prototype.unstable_scheduleHydration=function(e){if(e){var t=Yc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<jt.length&&t!==0&&t<jt[r].priority;r++);jt.splice(r,0,e),r===0&&Xc(e)}};function zl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function no(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Wi(){}function vm(e,t,r,n,s){if(s){if(typeof n=="function"){var o=n;n=function(){var u=As(a);o.call(u)}}var a=gd(t,n,e,0,null,!1,!1,"",Wi);return e._reactRootContainer=a,e[gt]=a.current,wn(e.nodeType===8?e.parentNode:e),ir(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof n=="function"){var i=n;n=function(){var u=As(c);i.call(u)}}var c=Rl(e,0,!1,null,null,!1,!1,"",Wi);return e._reactRootContainer=c,e[gt]=c.current,wn(e.nodeType===8?e.parentNode:e),ir(function(){to(t,c,r,n)}),c}function so(e,t,r,n,s){var o=r._reactRootContainer;if(o){var a=o;if(typeof s=="function"){var i=s;s=function(){var c=As(a);i.call(c)}}to(t,a,e,s)}else a=vm(r,t,e,s,n);return As(a)}Gc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=tn(t.pendingLanes);r!==0&&(el(t,r|1),Te(t,te()),!(B&6)&&(Dr=te()+500,Ht()))}break;case 13:ir(function(){var n=xt(e,1);if(n!==null){var s=ke();Ze(n,e,1,s)}}),_l(e,1)}};tl=function(e){if(e.tag===13){var t=xt(e,134217728);if(t!==null){var r=ke();Ze(t,e,134217728,r)}_l(e,134217728)}};Qc=function(e){if(e.tag===13){var t=Dt(e),r=xt(e,t);if(r!==null){var n=ke();Ze(r,e,t,n)}_l(e,t)}};Yc=function(){return H};Kc=function(e,t){var r=H;try{return H=e,t()}finally{H=r}};sa=function(e,t,r){switch(t){case"input":if(Jo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var s=Ys(n);if(!s)throw Error(j(90));Nc(n),Jo(n,s)}}}break;case"textarea":Pc(e,r);break;case"select":t=r.value,t!=null&&Sr(e,!!r.multiple,t,!1)}};zc=Pl;Dc=ir;var ym={usingClientEntryPoint:!1,Events:[zn,xr,Ys,_c,Ic,Pl]},Zr={findFiberByHostInstance:Zt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bm={bundleType:Zr.bundleType,version:Zr.version,rendererPackageName:Zr.rendererPackageName,rendererConfig:Zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fc(e),e===null?null:e.stateNode},findFiberByHostInstance:Zr.findFiberByHostInstance||xm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ns=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ns.isDisabled&&ns.supportsFiber)try{Vs=ns.inject(bm),at=ns}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ym;De.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zl(t))throw Error(j(200));return gm(e,t,null,r)};De.createRoot=function(e,t){if(!zl(e))throw Error(j(299));var r=!1,n="",s=xd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Rl(e,1,!1,null,null,r,!1,n,s),e[gt]=t.current,wn(e.nodeType===8?e.parentNode:e),new Il(t)};De.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Fc(t),e=e===null?null:e.stateNode,e};De.flushSync=function(e){return ir(e)};De.hydrate=function(e,t,r){if(!no(t))throw Error(j(200));return so(null,e,t,!0,r)};De.hydrateRoot=function(e,t,r){if(!zl(e))throw Error(j(405));var n=r!=null&&r.hydratedSources||null,s=!1,o="",a=xd;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=gd(t,null,e,1,r??null,s,!1,o,a),e[gt]=t.current,wn(e),n)for(e=0;e<n.length;e++)r=n[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new ro(t)};De.render=function(e,t,r){if(!no(t))throw Error(j(200));return so(null,e,t,!1,r)};De.unmountComponentAtNode=function(e){if(!no(e))throw Error(j(40));return e._reactRootContainer?(ir(function(){so(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};De.unstable_batchedUpdates=Pl;De.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!no(r))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return so(e,t,r,!1,n)};De.version="18.3.1-next-f1338f8080-20240426";function vd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vd)}catch(e){console.error(e)}}vd(),vc.exports=De;var wm=vc.exports,Gi=wm;Vo.createRoot=Gi.createRoot,Vo.hydrateRoot=Gi.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $n(){return $n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},$n.apply(this,arguments)}var Tt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Tt||(Tt={}));const Qi="popstate";function km(e){e===void 0&&(e={});function t(n,s){let{pathname:o,search:a,hash:i}=n.location;return Oa("",{pathname:o,search:a,hash:i},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(n,s){return typeof s=="string"?s:Bs(s)}return Sm(t,r,null,e)}function ee(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function yd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Cm(){return Math.random().toString(36).substr(2,8)}function Yi(e,t){return{usr:e.state,key:e.key,idx:t}}function Oa(e,t,r,n){return r===void 0&&(r=null),$n({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Br(t):t,{state:r,key:t&&t.key||n||Cm()})}function Bs(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Br(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Sm(e,t,r,n){n===void 0&&(n={});let{window:s=document.defaultView,v5Compat:o=!1}=n,a=s.history,i=Tt.Pop,c=null,u=g();u==null&&(u=0,a.replaceState($n({},a.state,{idx:u}),""));function g(){return(a.state||{idx:null}).idx}function p(){i=Tt.Pop;let S=g(),h=S==null?null:S-u;u=S,c&&c({action:i,location:w.location,delta:h})}function f(S,h){i=Tt.Push;let d=Oa(w.location,S,h);u=g()+1;let m=Yi(d,u),b=w.createHref(d);try{a.pushState(m,"",b)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;s.location.assign(b)}o&&c&&c({action:i,location:w.location,delta:1})}function x(S,h){i=Tt.Replace;let d=Oa(w.location,S,h);u=g();let m=Yi(d,u),b=w.createHref(d);a.replaceState(m,"",b),o&&c&&c({action:i,location:w.location,delta:0})}function y(S){let h=s.location.origin!=="null"?s.location.origin:s.location.href,d=typeof S=="string"?S:Bs(S);return d=d.replace(/ $/,"%20"),ee(h,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,h)}let w={get action(){return i},get location(){return e(s,a)},listen(S){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Qi,p),c=S,()=>{s.removeEventListener(Qi,p),c=null}},createHref(S){return t(s,S)},createURL:y,encodeLocation(S){let h=y(S);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:f,replace:x,go(S){return a.go(S)}};return w}var Ki;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ki||(Ki={}));function jm(e,t,r){return r===void 0&&(r="/"),Nm(e,t,r)}function Nm(e,t,r,n){let s=typeof t=="string"?Br(t):t,o=Or(s.pathname||"/",r);if(o==null)return null;let a=bd(e);Em(a);let i=null;for(let c=0;i==null&&c<a.length;++c){let u=Mm(o);i=Dm(a[c],u)}return i}function bd(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let s=(o,a,i)=>{let c={relativePath:i===void 0?o.path||"":i,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(ee(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let u=Mt([n,c.relativePath]),g=r.concat(c);o.children&&o.children.length>0&&(ee(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),bd(o.children,t,g,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Im(u,o.index),routesMeta:g})};return e.forEach((o,a)=>{var i;if(o.path===""||!((i=o.path)!=null&&i.includes("?")))s(o,a);else for(let c of wd(o.path))s(o,a,c)}),t}function wd(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,s=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return s?[o,""]:[o];let a=wd(n.join("/")),i=[];return i.push(...a.map(c=>c===""?o:[o,c].join("/"))),s&&i.push(...a),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function Em(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:zm(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Pm=/^:[\w-]+$/,Tm=3,$m=2,Lm=1,Rm=10,_m=-2,Xi=e=>e==="*";function Im(e,t){let r=e.split("/"),n=r.length;return r.some(Xi)&&(n+=_m),t&&(n+=$m),r.filter(s=>!Xi(s)).reduce((s,o)=>s+(Pm.test(o)?Tm:o===""?Lm:Rm),n)}function zm(e,t){return e.length===t.length&&e.slice(0,-1).every((n,s)=>n===t[s])?e[e.length-1]-t[t.length-1]:0}function Dm(e,t,r){let{routesMeta:n}=e,s={},o="/",a=[];for(let i=0;i<n.length;++i){let c=n[i],u=i===n.length-1,g=o==="/"?t:t.slice(o.length)||"/",p=Ma({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},g),f=c.route;if(!p)return null;Object.assign(s,p.params),a.push({params:s,pathname:Mt([o,p.pathname]),pathnameBase:Um(Mt([o,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(o=Mt([o,p.pathnameBase]))}return a}function Ma(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Om(e.path,e.caseSensitive,e.end),s=t.match(r);if(!s)return null;let o=s[0],a=o.replace(/(.)\/+$/,"$1"),i=s.slice(1);return{params:n.reduce((u,g,p)=>{let{paramName:f,isOptional:x}=g;if(f==="*"){let w=i[p]||"";a=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const y=i[p];return x&&!y?u[f]=void 0:u[f]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function Om(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),yd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,i,c)=>(n.push({paramName:i,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),n]}function Mm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return yd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Or(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Fm(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:s=""}=typeof e=="string"?Br(e):e;return{pathname:r?r.startsWith("/")?r:Am(r,t):t,search:Hm(n),hash:Vm(s)}}function Am(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function Bo(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Bm(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function kd(e,t){let r=Bm(e);return t?r.map((n,s)=>s===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Cd(e,t,r,n){n===void 0&&(n=!1);let s;typeof e=="string"?s=Br(e):(s=$n({},e),ee(!s.pathname||!s.pathname.includes("?"),Bo("?","pathname","search",s)),ee(!s.pathname||!s.pathname.includes("#"),Bo("#","pathname","hash",s)),ee(!s.search||!s.search.includes("#"),Bo("#","search","hash",s)));let o=e===""||s.pathname==="",a=o?"/":s.pathname,i;if(a==null)i=r;else{let p=t.length-1;if(!n&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;s.pathname=f.join("/")}i=p>=0?t[p]:"/"}let c=Fm(s,i),u=a&&a!=="/"&&a.endsWith("/"),g=(o||a===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||g)&&(c.pathname+="/"),c}const Mt=e=>e.join("/").replace(/\/\/+/g,"/"),Um=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Hm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Vm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Wm(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Sd=["post","put","patch","delete"];new Set(Sd);const Gm=["get",...Sd];new Set(Gm);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ln(){return Ln=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ln.apply(this,arguments)}const oo=v.createContext(null),jd=v.createContext(null),Vt=v.createContext(null),ao=v.createContext(null),Wt=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Nd=v.createContext(null);function Qm(e,t){let{relative:r}=t===void 0?{}:t;On()||ee(!1);let{basename:n,navigator:s}=v.useContext(Vt),{hash:o,pathname:a,search:i}=lo(e,{relative:r}),c=a;return n!=="/"&&(c=a==="/"?n:Mt([n,a])),s.createHref({pathname:c,search:i,hash:o})}function On(){return v.useContext(ao)!=null}function Mn(){return On()||ee(!1),v.useContext(ao).location}function Ed(e){v.useContext(Vt).static||v.useLayoutEffect(e)}function Pd(){let{isDataRoute:e}=v.useContext(Wt);return e?lh():Ym()}function Ym(){On()||ee(!1);let e=v.useContext(oo),{basename:t,future:r,navigator:n}=v.useContext(Vt),{matches:s}=v.useContext(Wt),{pathname:o}=Mn(),a=JSON.stringify(kd(s,r.v7_relativeSplatPath)),i=v.useRef(!1);return Ed(()=>{i.current=!0}),v.useCallback(function(u,g){if(g===void 0&&(g={}),!i.current)return;if(typeof u=="number"){n.go(u);return}let p=Cd(u,JSON.parse(a),o,g.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Mt([t,p.pathname])),(g.replace?n.replace:n.push)(p,g.state,g)},[t,n,a,o,e])}function Km(){let{matches:e}=v.useContext(Wt),t=e[e.length-1];return t?t.params:{}}function lo(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=v.useContext(Vt),{matches:s}=v.useContext(Wt),{pathname:o}=Mn(),a=JSON.stringify(kd(s,n.v7_relativeSplatPath));return v.useMemo(()=>Cd(e,JSON.parse(a),o,r==="path"),[e,a,o,r])}function Xm(e,t){return Jm(e,t)}function Jm(e,t,r,n){On()||ee(!1);let{navigator:s}=v.useContext(Vt),{matches:o}=v.useContext(Wt),a=o[o.length-1],i=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Mn(),g;if(t){var p;let S=typeof t=="string"?Br(t):t;c==="/"||(p=S.pathname)!=null&&p.startsWith(c)||ee(!1),g=S}else g=u;let f=g.pathname||"/",x=f;if(c!=="/"){let S=c.replace(/^\//,"").split("/");x="/"+f.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=jm(e,{pathname:x}),w=rh(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},i,S.params),pathname:Mt([c,s.encodeLocation?s.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:Mt([c,s.encodeLocation?s.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,r,n);return t&&w?v.createElement(ao.Provider,{value:{location:Ln({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:Tt.Pop}},w):w}function Zm(){let e=ah(),t=Wm(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),r?v.createElement("pre",{style:s},r):null,null)}const qm=v.createElement(Zm,null);class eh extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?v.createElement(Wt.Provider,{value:this.props.routeContext},v.createElement(Nd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function th(e){let{routeContext:t,match:r,children:n}=e,s=v.useContext(oo);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),v.createElement(Wt.Provider,{value:t},n)}function rh(e,t,r,n){var s;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var o;if(!r)return null;if(r.errors)e=r.matches;else if((o=n)!=null&&o.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let a=e,i=(s=r)==null?void 0:s.errors;if(i!=null){let g=a.findIndex(p=>p.route.id&&(i==null?void 0:i[p.route.id])!==void 0);g>=0||ee(!1),a=a.slice(0,Math.min(a.length,g+1))}let c=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let g=0;g<a.length;g++){let p=a[g];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=g),p.route.id){let{loaderData:f,errors:x}=r,y=p.route.loader&&f[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||y){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((g,p,f)=>{let x,y=!1,w=null,S=null;r&&(x=i&&p.route.id?i[p.route.id]:void 0,w=p.route.errorElement||qm,c&&(u<0&&f===0?(ih("route-fallback"),y=!0,S=null):u===f&&(y=!0,S=p.route.hydrateFallbackElement||null)));let h=t.concat(a.slice(0,f+1)),d=()=>{let m;return x?m=w:y?m=S:p.route.Component?m=v.createElement(p.route.Component,null):p.route.element?m=p.route.element:m=g,v.createElement(th,{match:p,routeContext:{outlet:g,matches:h,isDataRoute:r!=null},children:m})};return r&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?v.createElement(eh,{location:r.location,revalidation:r.revalidation,component:w,error:x,children:d(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):d()},null)}var Td=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Td||{}),$d=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($d||{});function nh(e){let t=v.useContext(oo);return t||ee(!1),t}function sh(e){let t=v.useContext(jd);return t||ee(!1),t}function oh(e){let t=v.useContext(Wt);return t||ee(!1),t}function Ld(e){let t=oh(),r=t.matches[t.matches.length-1];return r.route.id||ee(!1),r.route.id}function ah(){var e;let t=v.useContext(Nd),r=sh(),n=Ld();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function lh(){let{router:e}=nh(Td.UseNavigateStable),t=Ld($d.UseNavigateStable),r=v.useRef(!1);return Ed(()=>{r.current=!0}),v.useCallback(function(s,o){o===void 0&&(o={}),r.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,Ln({fromRouteId:t},o)))},[e,t])}const Ji={};function ih(e,t,r){Ji[e]||(Ji[e]=!0)}function ch(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function kt(e){ee(!1)}function uh(e){let{basename:t="/",children:r=null,location:n,navigationType:s=Tt.Pop,navigator:o,static:a=!1,future:i}=e;On()&&ee(!1);let c=t.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:c,navigator:o,static:a,future:Ln({v7_relativeSplatPath:!1},i)}),[c,i,o,a]);typeof n=="string"&&(n=Br(n));let{pathname:g="/",search:p="",hash:f="",state:x=null,key:y="default"}=n,w=v.useMemo(()=>{let S=Or(g,c);return S==null?null:{location:{pathname:S,search:p,hash:f,state:x,key:y},navigationType:s}},[c,g,p,f,x,y,s]);return w==null?null:v.createElement(Vt.Provider,{value:u},v.createElement(ao.Provider,{children:r,value:w}))}function dh(e){let{children:t,location:r}=e;return Xm(Fa(t),r)}new Promise(()=>{});function Fa(e,t){t===void 0&&(t=[]);let r=[];return v.Children.forEach(e,(n,s)=>{if(!v.isValidElement(n))return;let o=[...t,s];if(n.type===v.Fragment){r.push.apply(r,Fa(n.props.children,o));return}n.type!==kt&&ee(!1),!n.props.index||!n.props.children||ee(!1);let a={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(a.children=Fa(n.props.children,o)),r.push(a)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Us(){return Us=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Us.apply(this,arguments)}function Rd(e,t){if(e==null)return{};var r={},n=Object.keys(e),s,o;for(o=0;o<n.length;o++)s=n[o],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function ph(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function fh(e,t){return e.button===0&&(!t||t==="_self")&&!ph(e)}const mh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],hh=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],gh="6";try{window.__reactRouterVersion=gh}catch{}const xh=v.createContext({isTransitioning:!1}),vh="startTransition",Zi=cp[vh];function yh(e){let{basename:t,children:r,future:n,window:s}=e,o=v.useRef();o.current==null&&(o.current=km({window:s,v5Compat:!0}));let a=o.current,[i,c]=v.useState({action:a.action,location:a.location}),{v7_startTransition:u}=n||{},g=v.useCallback(p=>{u&&Zi?Zi(()=>c(p)):c(p)},[c,u]);return v.useLayoutEffect(()=>a.listen(g),[a,g]),v.useEffect(()=>ch(n),[n]),v.createElement(uh,{basename:t,children:r,location:i.location,navigationType:i.action,navigator:a,future:n})}const bh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tr=v.forwardRef(function(t,r){let{onClick:n,relative:s,reloadDocument:o,replace:a,state:i,target:c,to:u,preventScrollReset:g,viewTransition:p}=t,f=Rd(t,mh),{basename:x}=v.useContext(Vt),y,w=!1;if(typeof u=="string"&&wh.test(u)&&(y=u,bh))try{let m=new URL(window.location.href),b=u.startsWith("//")?new URL(m.protocol+u):new URL(u),C=Or(b.pathname,x);b.origin===m.origin&&C!=null?u=C+b.search+b.hash:w=!0}catch{}let S=Qm(u,{relative:s}),h=Ch(u,{replace:a,state:i,target:c,preventScrollReset:g,relative:s,viewTransition:p});function d(m){n&&n(m),m.defaultPrevented||h(m)}return v.createElement("a",Us({},f,{href:y||S,onClick:w||o?n:d,ref:r,target:c}))}),qi=v.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:s=!1,className:o="",end:a=!1,style:i,to:c,viewTransition:u,children:g}=t,p=Rd(t,hh),f=lo(c,{relative:p.relative}),x=Mn(),y=v.useContext(jd),{navigator:w,basename:S}=v.useContext(Vt),h=y!=null&&Sh(f)&&u===!0,d=w.encodeLocation?w.encodeLocation(f).pathname:f.pathname,m=x.pathname,b=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;s||(m=m.toLowerCase(),b=b?b.toLowerCase():null,d=d.toLowerCase()),b&&S&&(b=Or(b,S)||b);const C=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let T=m===d||!a&&m.startsWith(d)&&m.charAt(C)==="/",N=b!=null&&(b===d||!a&&b.startsWith(d)&&b.charAt(d.length)==="/"),R={isActive:T,isPending:N,isTransitioning:h},F=T?n:void 0,z;typeof o=="function"?z=o(R):z=[o,T?"active":null,N?"pending":null,h?"transitioning":null].filter(Boolean).join(" ");let re=typeof i=="function"?i(R):i;return v.createElement(tr,Us({},p,{"aria-current":F,className:z,ref:r,style:re,to:c,viewTransition:u}),typeof g=="function"?g(R):g)});var Aa;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Aa||(Aa={}));var ec;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ec||(ec={}));function kh(e){let t=v.useContext(oo);return t||ee(!1),t}function Ch(e,t){let{target:r,replace:n,state:s,preventScrollReset:o,relative:a,viewTransition:i}=t===void 0?{}:t,c=Pd(),u=Mn(),g=lo(e,{relative:a});return v.useCallback(p=>{if(fh(p,r)){p.preventDefault();let f=n!==void 0?n:Bs(u)===Bs(g);c(e,{replace:f,state:s,preventScrollReset:o,relative:a,viewTransition:i})}},[u,c,g,n,s,r,e,o,a,i])}function Sh(e,t){t===void 0&&(t={});let r=v.useContext(xh);r==null&&ee(!1);let{basename:n}=kh(Aa.useViewTransitionState),s=lo(e,{relative:t.relative});if(!r.isTransitioning)return!1;let o=Or(r.currentLocation.pathname,n)||r.currentLocation.pathname,a=Or(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Ma(s.pathname,a)!=null||Ma(s.pathname,o)!=null}function jh({isOpen:e,onClose:t}){const[r,n]=v.useState({name:"",email:"",subject:"",comment:""}),[s,o]=v.useState(!1),[a,i]=v.useState(null),c=g=>{const{name:p,value:f}=g.target;n(x=>({...x,[p]:f}))},u=async g=>{if(g.preventDefault(),!r.subject||!r.comment){alert("Please fill in subject and comment fields");return}o(!0),i(null);try{(await(await fetch("/api/email/send-confirmation.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:"christo@yellowarcher.co.za",feedback:!0,subject:r.subject,name:r.name||"Anonymous",userEmail:r.email||"not-provided@example.com",comment:r.comment})})).json()).success?(i("success"),n({name:"",email:"",subject:"",comment:""}),setTimeout(()=>{t(),i(null)},2e3)):i("error")}catch(p){console.error("Feedback submission failed:",p),i("error")}finally{o(!1)}};return e?l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:l.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6",children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"💬 Send Feedback"}),l.jsx("button",{onClick:t,className:"text-gray-500 hover:text-gray-700 text-xl",disabled:s,children:"×"})]}),a==="success"&&l.jsx("div",{className:"mb-4 p-3 bg-green-50 border border-green-200 rounded-md",children:l.jsx("p",{className:"text-sm text-green-600",children:"✅ Thank you! Your feedback has been sent to Christo."})}),a==="error"&&l.jsx("div",{className:"mb-4 p-3 bg-red-50 border border-red-200 rounded-md",children:l.jsx("p",{className:"text-sm text-red-600",children:"❌ Failed to send feedback. Please try again or email directly."})}),l.jsxs("form",{onSubmit:u,className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Your Name (optional)"}),l.jsx("input",{type:"text",name:"name",value:r.name,onChange:c,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Your name",disabled:s})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Your Email (optional)"}),l.jsx("input",{type:"email",name:"email",value:r.email,onChange:c,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"your@email.com",disabled:s})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Subject *"}),l.jsx("input",{type:"text",name:"subject",value:r.subject,onChange:c,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"What's this about?",required:!0,disabled:s})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Comment *"}),l.jsx("textarea",{name:"comment",value:r.comment,onChange:c,rows:4,className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none",placeholder:"Share your feedback, suggestions, or report issues...",required:!0,disabled:s})]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{type:"button",onClick:t,className:"flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",disabled:s,children:"Cancel"}),l.jsx("button",{type:"submit",className:"flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50",disabled:s,children:s?"Sending...":"Send Feedback"})]})]}),l.jsx("div",{className:"mt-4 pt-4 border-t border-gray-200",children:l.jsx("p",{className:"text-xs text-gray-500 text-center",children:"📧 Feedback will be sent to christo@yellowarcher.co.za"})})]})}):null}function tc(e){return`px-4 py-2 rounded-md font-medium transition-colors ${e?"bg-blue-600 text-white":"text-gray-600 hover:text-gray-800"}`}function Nh(){const[e,t]=v.useState(!1);return l.jsxs(l.Fragment,{children:[l.jsx(jh,{isOpen:e,onClose:()=>t(!1)}),l.jsx("nav",{className:"w-full bg-white border-b",children:l.jsxs("div",{className:"container mx-auto flex items-center justify-between py-4 px-4",children:[l.jsx(tr,{to:"/",className:"text-2xl font-bold text-gray-800",children:"ToggleBox"}),l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsxs("div",{className:"bg-white rounded-lg p-1",children:[l.jsx(qi,{to:"/interactive",className:({isActive:r})=>tc(r),children:"🎨 Stylesheet Builder"}),l.jsx(qi,{to:"/color-picker",className:({isActive:r})=>tc(r),children:"Color Picker"})]}),l.jsx("button",{onClick:()=>t(!0),className:"px-3 py-2 rounded-md text-sm font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors",title:"Send feedback to Christo",children:"💬 Feedback"})]})]})})]})}const Eh=()=>l.jsxs("div",{"data-testid":"html-template",className:"preview-template p-6 max-w-4xl mx-auto bg-white",children:[l.jsxs("section",{className:"mb-8",children:[l.jsx("h1",{className:"preview-heading text-3xl font-bold mb-4 text-gray-900",children:"Main Heading - Typography Showcase"}),l.jsx("h2",{className:"preview-subheading text-2xl font-semibold mb-3 text-gray-800",children:"Secondary Heading - Web Design Elements"}),l.jsx("h3",{className:"text-xl font-medium mb-3 text-gray-700",children:"Third Level Heading - Visual Hierarchy"}),l.jsx("h4",{className:"text-lg font-medium mb-2 text-gray-600",children:"Fourth Level Heading - Content Structure"}),l.jsx("h5",{className:"text-base font-medium mb-2 text-gray-600",children:"Fifth Level Heading - Detail Organization"}),l.jsx("h6",{className:"text-sm font-medium mb-2 text-gray-500",children:"Sixth Level Heading - Fine Print"})]}),l.jsxs("section",{className:"mb-8",children:[l.jsx("p",{className:"preview-text text-base leading-relaxed mb-4 text-gray-700",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This paragraph demonstrates how text flows and wraps in different container widths. Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed."}),l.jsx("p",{className:"preview-text text-base leading-relaxed mb-4 text-gray-700",children:"The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet and is commonly used for font testing. Special characters include: © 2024 ToggleBox™, user@example.com, $129.99, 50% off, and symbols like &, @, #, %, and *."}),l.jsx("p",{className:"preview-text text-base leading-relaxed mb-4 text-gray-600","data-testid":"responsive-text",children:l.jsx("span",{className:"text-sm md:text-base lg:text-lg",children:"This paragraph demonstrates responsive typography with different sizes across screen widths. It showcases how text can adapt to various viewport dimensions while maintaining readability."})})]}),l.jsx("section",{className:"mb-8",children:l.jsxs("div",{className:"flex flex-wrap gap-4 mb-4",children:[l.jsx("button",{className:"preview-button px-4 py-2 rounded-md font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700",children:"Primary Button"}),l.jsx("button",{className:"preview-button px-4 py-2 rounded-md font-medium transition-colors bg-gray-200 text-gray-800 hover:bg-gray-300",children:"Secondary Button"}),l.jsx("button",{className:"preview-button px-4 py-2 rounded-md font-medium transition-colors border border-blue-600 text-blue-600 hover:bg-blue-50",children:"Outline Button"})]})}),l.jsx("section",{className:"mb-8",children:l.jsxs("form",{className:"bg-gray-50 p-6 rounded-lg",children:[l.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-800",children:"Sample Form"}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[l.jsxs("div",{children:[l.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email Address"}),l.jsx("input",{type:"email",id:"email",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"your@email.com"})]}),l.jsxs("div",{children:[l.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-1",children:"Password"}),l.jsx("input",{type:"password",id:"password",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"••••••••"})]})]}),l.jsxs("div",{className:"mb-4",children:[l.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-1",children:"Message"}),l.jsx("textarea",{id:"message",rows:"4",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Your message here..."})]}),l.jsx("button",{type:"submit",className:"preview-button px-6 py-2 rounded-md font-medium transition-colors bg-green-600 text-white hover:bg-green-700",children:"Submit Form"})]})}),l.jsx("section",{className:"mb-8",children:l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-lg font-semibold mb-3 text-gray-800",children:"Unordered List"}),l.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[l.jsx("li",{children:"First list item with standard content"}),l.jsx("li",{children:"Second item demonstrating list styling"}),l.jsxs("li",{children:["Third item with ",l.jsx("strong",{children:"bold text"})," and ",l.jsx("em",{children:"emphasis"})]}),l.jsxs("li",{children:["Fourth item containing a ",l.jsx("a",{href:"#",className:"text-blue-600 hover:underline",children:"hyperlink example"})]})]})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-lg font-semibold mb-3 text-gray-800",children:"Ordered List"}),l.jsxs("ol",{className:"list-decimal list-inside space-y-2 text-gray-700",children:[l.jsx("li",{children:"First numbered item"}),l.jsx("li",{children:"Second numbered item"}),l.jsx("li",{children:"Third item with nested content"}),l.jsx("li",{children:"Fourth item completing the sequence"})]})]})]})}),l.jsxs("section",{className:"mb-8",children:[l.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-800",children:"Responsive Card Grid"}),l.jsxs("div",{"data-testid":"responsive-grid",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[l.jsxs("div",{"data-testid":"card-1",className:"preview-card p-4 rounded-lg shadow-sm border bg-white",children:[l.jsx("h4",{className:"font-semibold mb-2 text-gray-800",children:"Card Title One"}),l.jsx("p",{className:"text-gray-600 text-sm",children:"This card demonstrates responsive layout behavior and shadow effects."})]}),l.jsxs("div",{"data-testid":"card-2",className:"preview-card p-4 rounded-lg shadow-sm border bg-white",children:[l.jsx("h4",{className:"font-semibold mb-2 text-gray-800",children:"Card Title Two"}),l.jsx("p",{className:"text-gray-600 text-sm",children:"Each card adapts to different screen sizes while maintaining consistent spacing."})]}),l.jsxs("div",{"data-testid":"card-3",className:"preview-card p-4 rounded-lg shadow-sm border bg-white",children:[l.jsx("h4",{className:"font-semibold mb-2 text-gray-800",children:"Card Title Three"}),l.jsx("p",{className:"text-gray-600 text-sm",children:"The grid system demonstrates mobile-first responsive design principles."})]})]})]}),l.jsx("section",{className:"mb-8",children:l.jsxs("div",{"data-testid":"gradient-showcase",className:"bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg text-white text-center",children:[l.jsx("h3",{className:"text-xl font-bold mb-2",children:"Gradient Background Demonstration"}),l.jsx("p",{className:"text-purple-100",children:"This section showcases gradient backgrounds that can be dynamically modified for color, direction, and stop points in the CSS preview engine."})]})}),l.jsx("section",{className:"mb-8",children:l.jsxs("div",{className:"bg-gray-100 p-6 rounded-lg",children:[l.jsx("h3",{className:"text-lg font-semibold mb-3 text-gray-800",children:"Additional Typography Testing"}),l.jsxs("p",{className:"text-gray-700 mb-3",children:[l.jsx("strong",{children:"Bold text"}),", ",l.jsx("em",{children:"italic text"}),", ",l.jsx("u",{children:"underlined text"}),",",l.jsx("span",{className:"line-through",children:"strikethrough text"}),", and",l.jsx("code",{className:"bg-gray-200 px-1 rounded font-mono",children:"inline code"}),"."]}),l.jsx("blockquote",{className:"border-l-4 border-blue-500 pl-4 italic text-gray-600",children:'"This blockquote demonstrates how quoted content appears with custom styling and proper semantic markup for accessibility and SEO."'})]})})]});class Ba{static sanitizeHtml(t){return!t||typeof t!="string"?"":t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"").replace(/\son\w+\s*=\s*["'][^"']*["']/gi,"").replace(/\son\w+\s*=\s*[^>\s]+/gi,"").replace(/javascript:/gi,"")}static sanitizeCss(t){return!t||typeof t!="string"?"":t.replace(/@import\s+[^;]+;?/gi,"").replace(/expression\s*\([^)]*\)/gi,"").replace(/javascript:/gi,"").replace(/vbscript:/gi,"").replace(/behavior\s*:/gi,"").replace(/-moz-binding/gi,"")}static createSecureDocument(t,r){const n=this.sanitizeHtml(t),s=this.sanitizeCss(r);return`
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
    `}}const Ph=({htmlContent:e,cssContent:t,sanitizer:r=Ba})=>{const[n,s]=v.useState(null),[o,a]=v.useState(!1),i=v.useMemo(()=>{try{if(s(null),a(!0),!e&&!t)return r.createErrorDocument("No content to display");const p=r.validateHtmlSecurity(e||""),f=r.validateCssSecurity(t||"");p.isSecure||console.warn("HTML security violations detected:",p.violations),f.isSecure||console.warn("CSS security violations detected:",f.violations);const x=r.createSecureDocument(p.sanitizedContent,f.sanitizedContent);return a(!1),x}catch(p){return console.error("Error generating iframe content:",p),s(p.message),a(!1),r.createErrorDocument("Failed to generate content")}},[e,t,r]),c=v.useMemo(()=>{try{return`data:text/html;charset=utf-8,${encodeURIComponent(i)}`}catch(p){return console.error("Error encoding iframe content:",p),s("Failed to encode content"),"data:text/html;charset=utf-8,"+encodeURIComponent(Ba.createErrorDocument("Failed to encode content"))}},[i]),u=v.useCallback(()=>{s(null),a(!0),setTimeout(()=>a(!1),100)},[]),g=v.useCallback(()=>{const p=r.validateHtmlSecurity(e||""),f=r.validateCssSecurity(t||"");return{isSecure:p.isSecure&&f.isSecure,htmlViolations:p.violations,cssViolations:f.violations,totalViolations:p.violations.length+f.violations.length}},[e,t,r]);return{iframeSrc:c,isLoading:o,error:n,refreshContent:u,getSecurityInfo:g,secureContent:i}},Th=()=>{const e=v.useCallback(r=>{if(!r||typeof r!="string")return{isValid:!1,error:"HTML content must be a non-empty string"};const n=[/<script/i,/on\w+\s*=/i,/javascript:/i,/<iframe/i,/<embed/i,/<object/i];for(const s of n)if(s.test(r))return{isValid:!1,error:`Content contains potentially unsafe patterns: ${s}`};return{isValid:!0,error:null}},[]),t=v.useCallback(r=>!r||typeof r!="string"?r:r.replace(/@import\s+[^;]+;?/gi,"").replace(/expression\s*\([^)]*\)/gi,"").replace(/javascript:/gi,"").replace(/vbscript:/gi,""),[]);return{validateContent:e,updateCss:t}},_d=v.forwardRef(({src:e,className:t="",height:r="600px",allowScripts:n=!1,onLoad:s,onError:o,loading:a=!1,error:i=null,title:c="ToggleBox CSS Preview - Secure Sandbox Environment",style:u={}},g)=>{const p=v.useRef(null),f=g||p;v.useEffect(()=>{const d=f.current;if(!d)return;const m=()=>{s==null||s()},b=C=>{console.warn("IframeRenderer: Failed to load content",C),o==null||o(C)};return d.addEventListener("load",m),d.addEventListener("error",b),()=>{d.removeEventListener("load",m),d.removeEventListener("error",b)}},[s,o,f]);const x={width:"100%",height:r,border:"none",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)",backgroundColor:"#ffffff",transition:"opacity 0.2s ease",...u},y={position:"relative",display:"inline-block",width:"100%"},w={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:10,display:a?"block":"none"},S={position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.9)",display:i?"flex":"none",alignItems:"center",justifyContent:"center",flexDirection:"column",zIndex:20,borderRadius:"8px",border:"2px dashed #dc2626"},h=n?"allow-same-origin allow-scripts":"allow-same-origin";return l.jsxs("div",{className:`iframe-preview-container ${t}`.trim(),style:y,children:[l.jsx("div",{style:w,children:l.jsxs("div",{className:"loading-spinner",children:[l.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"}),l.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Loading preview..."})]})}),l.jsx("div",{style:S,children:l.jsxs("div",{className:"text-center p-6",children:[l.jsx("div",{className:"text-red-500 text-4xl mb-2",children:"⚠️"}),l.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-1",children:"Preview Error"}),l.jsx("p",{className:"text-sm text-gray-600 mb-3",children:i}),l.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"Retry"})]})}),l.jsx("iframe",{ref:f,"data-testid":"preview-iframe",title:c,src:e,sandbox:h,style:{...x,opacity:a||i?.5:1},loading:"lazy",referrerPolicy:"no-referrer",allow:"",credentialless:""})]})});_d.displayName="IframeRenderer";const $h=({htmlContent:e="",cssContent:t="",className:r="",height:n="600px",onLoad:s,onError:o,allowScripts:a=!1,showLoadingState:i=!0,showErrorState:c=!0,customSanitizer:u=Ba})=>{const{iframeSrc:g,isLoading:p,error:f,getSecurityInfo:x}=Ph({htmlContent:e,cssContent:t,sanitizer:u});Th();const y=()=>{const S=x();S.totalViolations>0&&console.warn("Security violations detected in preview content:",S),s==null||s()},w=S=>{console.error("IframePreview error:",S),o==null||o(S)};return f&&!c&&console.error("IframePreview: Critical error occurred but error display is disabled:",f),l.jsxs("div",{className:"iframe-preview-wrapper",children:[l.jsx(_d,{src:g,height:n,allowScripts:a,onLoad:y,onError:w,loading:i&&p,error:c?f:null,className:r}),!1]})},io=({htmlContent:e="",cssContent:t="",className:r="",height:n="600px",onLoad:s,onError:o,allowScripts:a=!1})=>l.jsx($h,{htmlContent:e,cssContent:t,className:r,height:n,onLoad:s,onError:o,allowScripts:a,showLoadingState:!0,showErrorState:!0});class Lh{constructor(){this.template=null,this.components=null,this.options={}}setTemplate(t){return this.template=t,this}withComponents(t){return this.components=t,this}withOptions(t){return this.options={...this.options,...t},this}build(){if(!this.template||!this.components)throw new Error("Template and ComponentLibrary must be set before building");const t=this.getTemplateConfig(this.template);return this.components.render(t,this.options)}getTemplateConfig(t){const r={sample:{sections:["hero","typography","buttons","forms","lists","cards","gradient"],layout:"standard",defaultOptions:{title:"Main Heading - Typography Showcase",subtitle:"Web Design Elements - Visual Hierarchy",showButtons:!0,cardCount:3,showActions:!1,showValidation:!0}},sixCards:{sections:["hero","alerts","cards","buttons"],layout:"showcase",defaultOptions:{title:"Six Cards Interactive Demo",subtitle:"Real-time CSS Styling with Live Preview",cardCount:6,showActions:!0,showVariants:!0,containerClass:"preview-template p-6 max-w-6xl mx-auto bg-white"}},professional:{sections:["hero","alerts","cards","forms","buttons"],layout:"professional",defaultOptions:{title:"Professional Dashboard Demo",subtitle:"Advanced UI Components with Interactive Styling",cardCount:4,showActions:!0,showVariants:!0,showValidation:!0,containerClass:"preview-template p-8 max-w-7xl mx-auto bg-white"}},minimal:{sections:["hero","buttons","cards"],layout:"minimal",defaultOptions:{title:"Minimal Preview",subtitle:"",cardCount:2,showActions:!1,showVariants:!1,containerClass:"preview-template p-4 max-w-3xl mx-auto bg-white"}},typography:{sections:["typography","lists"],layout:"standard",defaultOptions:{containerClass:"preview-template p-6 max-w-4xl mx-auto bg-white typography-focus"}},forms:{sections:["hero","forms","buttons"],layout:"standard",defaultOptions:{title:"Form Components Demo",subtitle:"Interactive Form Elements and Validation",showValidation:!0,showVariants:!1}},alerts:{sections:["hero","alerts","buttons"],layout:"standard",defaultOptions:{title:"Alert Components Showcase",subtitle:"Different alert types and styling options"}}},n=r[t];return n?{...n,defaultOptions:{...n.defaultOptions,...this.options}}:(console.warn(`Template "${t}" not found, using "sample" template`),r.sample)}getAvailableTemplates(){return["sample","sixCards","professional","minimal","typography","forms","alerts"]}getTemplateDescription(t){return{sample:"Comprehensive showcase with all component types",sixCards:"Interactive demo focused on card layouts",professional:"Advanced UI components for dashboard-style layouts",minimal:"Simple preview with essential components",typography:"Text-focused template for typography testing",forms:"Form elements and validation showcase",alerts:"Alert components with different states and styles"}[t]||"Template description not available"}reset(){return this.template=null,this.components=null,this.options={},this}validateTemplate(t){const r=this.getTemplateConfig(t),n=[];return(!r.sections||!Array.isArray(r.sections))&&n.push("Template must have a sections array"),r.sections&&r.sections.length===0&&n.push("Template must have at least one section"),r.layout||n.push("Template must specify a layout"),{isValid:n.length===0,errors:n}}}class Rh{constructor(){this.components={hero:this.createHeroComponent,typography:this.createTypographyComponent,buttons:this.createButtonsComponent,cards:this.createCardsComponent,forms:this.createFormsComponent,alerts:this.createAlertsComponent,lists:this.createListsComponent,gradient:this.createGradientComponent}}render(t,r={}){const{sections:n,layout:s}=t,o=n.map(a=>{const i=this.components[a.replace("-showcase","").replace("cards-","cards").replace("buttons-system","buttons")];return i?i.call(this,r):""}).filter(Boolean);return this.wrapInLayout(o.join(`
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
          ${Array.from({length:r},(o,a)=>`
      <div data-testid="card-${a+1}" class="preview-card p-6 rounded-lg shadow-sm border bg-white">
        <h4 class="font-semibold mb-3 text-gray-800">Card Title ${a+1}</h4>
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
    `}wrapInLayout(t,r="standard",n={}){const{containerClass:s="preview-template p-6 max-w-4xl mx-auto bg-white"}=n,o={standard:`<div data-testid="html-template" class="${s}">${t}</div>`,showcase:`<div data-testid="html-template" class="${s} showcase-layout">${t}</div>`,professional:`<div data-testid="html-template" class="${s} professional-layout">${t}</div>`,minimal:`<div data-testid="html-template" class="${s} minimal-layout">${t}</div>`};return o[r]||o.standard}}class _h{constructor(){this.builder=new Lh,this.components=new Rh}generateContent(t,r={}){try{return this.builder.setTemplate(t).withComponents(this.components).withOptions(r).build()}catch(n){return console.error("Content generation failed:",n),this.generateFallbackContent(n.message)}}generateSampleHtmlContent(t={}){return this.generateContent("sample",t)}generateSixCardsContent(t={},r={}){return this.generateContent("sixCards",{...r,alertStyles:t})}generateProContent(t={},r={}){return this.generateContent("professional",{...r,alertStyles:t})}generateMinimalContent(t={}){return this.generateContent("minimal",t)}generateTypographyContent(t={}){return this.generateContent("typography",t)}generateFormContent(t={}){return this.generateContent("forms",t)}generateAlertContent(t={}){return this.generateContent("alerts",t)}generateCustomContent(t,r={}){const n={sections:t,layout:r.layout||"standard",defaultOptions:r};return this.components.render(n,r)}getAvailableTemplates(){return this.builder.getAvailableTemplates()}getTemplateDescription(t){return this.builder.getTemplateDescription(t)}validateContent(t){return zh(t)}generateFallbackContent(t="Content generation failed"){return`
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
    `}reset(){return this.builder.reset(),this}}const Ih=e=>!e||typeof e!="string"?"":e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"").replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,"").replace(/<embed\b[^>]*>/gi,"").replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi,"").replace(/\son\w+\s*=\s*["'][^"']*["']/gi,"").replace(/\son\w+\s*=\s*[^>\s]+/gi,"").replace(/javascript:/gi,"").replace(/data:(?!image\/)/gi,""),zh=e=>{const t=[{pattern:/<script/i,description:"Script tags"},{pattern:/on\w+\s*=/i,description:"Event handlers"},{pattern:/javascript:/i,description:"JavaScript protocols"},{pattern:/<iframe/i,description:"Iframe elements"},{pattern:/<embed/i,description:"Embed elements"},{pattern:/<object/i,description:"Object elements"},{pattern:/data:(?!image\/)/i,description:"Non-image data URLs"}],r=[];for(const{pattern:n,description:s}of t)n.test(e)&&r.push(s);return{isSecure:r.length===0,violations:r,sanitizedContent:r.length>0?Ih(e):e}},Dh=new _h,Oh=e=>Dh.generateSampleHtmlContent(e),Dl=()=>Oh(),Mh=({initialCss:e="",className:t=""})=>{const[r,n]=v.useState(e),[s,o]=v.useState(!1),[a,i]=v.useState(null),c=Dl(),u=v.useCallback(x=>{i(null),n(x)},[]),g=v.useCallback(()=>{o(!1),i(null)},[]),p=v.useCallback(x=>{o(!1),i("Failed to load preview content"),console.error("Preview iframe error:",x)},[]),f={default:"",colorful:`
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
    `};return l.jsxs("div",{className:`preview-demo ${t}`,"data-testid":"preview-demo",children:[l.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border mb-6",children:[l.jsx("h2",{className:"text-xl font-semibold mb-4 text-gray-800",children:"Real-time CSS Preview Demo"}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[l.jsxs("div",{children:[l.jsx("label",{htmlFor:"css-editor",className:"block text-sm font-medium text-gray-700 mb-2",children:"CSS Editor"}),l.jsx("textarea",{id:"css-editor","data-testid":"css-editor",value:r,onChange:x=>u(x.target.value),placeholder:"Enter your CSS here to see real-time changes...",className:"w-full h-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm",style:{resize:"vertical"}})]}),l.jsx("div",{children:l.jsxs("fieldset",{children:[l.jsx("legend",{className:"block text-sm font-medium text-gray-700 mb-2",children:"CSS Presets"}),l.jsx("div",{className:"space-y-2",children:Object.entries(f).map(([x,y])=>l.jsxs("button",{onClick:()=>u(y),className:"w-full px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors text-left capitalize","data-testid":`preset-${x}`,children:[x," Theme"]},x))}),l.jsxs("div",{className:"mt-4 p-3 bg-gray-50 rounded-md",children:[l.jsx("p",{className:"text-xs text-gray-600",children:l.jsx("strong",{children:"Try these features:"})}),l.jsxs("ul",{className:"text-xs text-gray-600 mt-1 space-y-1",children:[l.jsx("li",{children:"• Change colors using .preview-heading, .preview-text"}),l.jsx("li",{children:"• Style buttons with .preview-button"}),l.jsx("li",{children:"• Modify cards using .preview-card"}),l.jsx("li",{children:"• Update the main container with .preview-template"})]})]})]})})]}),a&&l.jsx("div",{className:"mt-4 p-3 bg-red-50 border border-red-200 rounded-md",children:l.jsx("p",{className:"text-sm text-red-600",children:a})})]}),l.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("h3",{className:"text-lg font-medium text-gray-800",children:"Live Preview"}),s&&l.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[l.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-2"}),"Loading..."]})]}),l.jsx("div",{className:"border rounded-lg overflow-hidden",children:l.jsx(io,{htmlContent:c,cssContent:r,height:"600px",onLoad:g,onError:p,allowScripts:!1,className:"w-full"})}),l.jsx("div",{className:"mt-4 p-3 bg-blue-50 rounded-md",children:l.jsxs("p",{className:"text-xs text-blue-700",children:[l.jsx("strong",{children:"Security Note:"})," This preview is rendered in a sandboxed iframe with restricted permissions. All content is isolated from the parent document to prevent XSS attacks."]})})]})]})},ss=(e,t,r)=>{if(!Hh(e,t,r))throw new Error("Invalid HSV values");e=e/60,t=t/100,r=r/100;const n=r*t,s=n*(1-Math.abs(e%2-1)),o=r-n;let a=0,i=0,c=0;return e>=0&&e<1?(a=n,i=s,c=0):e>=1&&e<2?(a=s,i=n,c=0):e>=2&&e<3?(a=0,i=n,c=s):e>=3&&e<4?(a=0,i=s,c=n):e>=4&&e<5?(a=s,i=0,c=n):e>=5&&e<6&&(a=n,i=0,c=s),{r:Math.round((a+o)*255),g:Math.round((i+o)*255),b:Math.round((c+o)*255)}},Fh=(e,t,r)=>{if(!Ur(e,t,r))throw new Error("Invalid RGB values");e/=255,t/=255,r/=255;const n=Math.max(e,t,r),s=Math.min(e,t,r),o=n-s;let a=0;o!==0&&(n===e?a=(t-r)/o%6:n===t?a=(r-e)/o+2:a=(e-t)/o+4),a=Math.round(a*60),a<0&&(a+=360);const i=n===0?0:Math.round(o/n*100),c=Math.round(n*100);return{h:a,s:i,v:c}},Id=(e,t,r)=>{if(!Ur(e,t,r))throw new Error("Invalid RGB values");const n=s=>{const o=Math.round(s).toString(16);return o.length===1?"0"+o:o};return`#${n(e)}${n(t)}${n(r)}`.toUpperCase()},zd=e=>{if(!Dd(e))throw new Error("Invalid HEX color format");e=e.replace("#",""),e.length===3&&(e=e.split("").map(s=>s+s).join(""));const t=parseInt(e.substring(0,2),16),r=parseInt(e.substring(2,4),16),n=parseInt(e.substring(4,6),16);return{r:t,g:r,b:n}},Ah=(e,t,r)=>{if(!Ur(e,t,r))throw new Error("Invalid RGB values");e/=255,t/=255,r/=255;const n=Math.max(e,t,r),s=Math.min(e,t,r),o=n-s;let a=0,i=0;const c=(n+s)/2;return o!==0&&(i=c>.5?o/(2-n-s):o/(n+s),n===e?a=(t-r)/o+(t<r?6:0):n===t?a=(r-e)/o+2:a=(e-t)/o+4,a/=6),{h:Math.round(a*360),s:Math.round(i*100),l:Math.round(c*100)}},Bh=(e,t,r)=>{if(!Vh(e,t,r))throw new Error("Invalid HSL values");e/=360,t/=100,r/=100;const n=(i,c,u)=>(u<0&&(u+=1),u>1&&(u-=1),u<1/6?i+(c-i)*6*u:u<1/2?c:u<2/3?i+(c-i)*(2/3-u)*6:i);let s,o,a;if(t===0)s=o=a=r;else{const i=r<.5?r*(1+t):r+t-r*t,c=2*r-i;s=n(c,i,e+1/3),o=n(c,i,e),a=n(c,i,e-1/3)}return{r:Math.round(s*255),g:Math.round(o*255),b:Math.round(a*255)}},rc=(e,t,r)=>{if(!Ur(e,t,r))throw new Error("Invalid RGB values");const n=[e,t,r].map(s=>(s=s/255,s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)));return .2126*n[0]+.7152*n[1]+.0722*n[2]},Uh=(e,t)=>{const r=rc(e.r,e.g,e.b),n=rc(t.r,t.g,t.b),s=Math.max(r,n),o=Math.min(r,n);return(s+.05)/(o+.05)},Uo=(e,t="AA",r="normal")=>{var o;const s=(o={AA:{normal:4.5,large:3},AAA:{normal:7,large:4.5}}[t])==null?void 0:o[r];return s?e>=s:!1},Ur=(e,t,r)=>[e,t,r].every(n=>typeof n=="number"&&n>=0&&n<=255&&Number.isInteger(n)),Hh=(e,t,r)=>typeof e=="number"&&e>=0&&e<=360&&typeof t=="number"&&t>=0&&t<=100&&typeof r=="number"&&r>=0&&r<=100,Vh=(e,t,r)=>typeof e=="number"&&e>=0&&e<=360&&typeof t=="number"&&t>=0&&t<=100&&typeof r=="number"&&r>=0&&r<=100,Dd=e=>{if(typeof e!="string")return!1;const t=e.replace("#","");return/^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$/.test(t)},Ho=e=>{if(typeof e!="string")return null;if(e=e.trim(),e.startsWith("#")||/^[0-9A-Fa-f]{3,6}$/.test(e))try{return zd(e)}catch{return null}const t=e.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);if(t){const[,n,s,o]=t.map(Number);return Ur(n,s,o)?{r:n,g:s,b:o}:null}const r=e.match(/hsl\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/i);if(r){const[,n,s,o]=r.map(Number);try{return Bh(n,s,o)}catch{return null}}return null};function Wh({hsv:e,disabled:t,onMouseDown:r,onKeyDown:n,onLightnessChange:s,wheelRef:o}){return l.jsxs("div",{className:"visual-color-picker","data-testid":"visual-color-picker",children:[l.jsx("div",{ref:o,className:"color-wheel","data-testid":"color-wheel",onMouseDown:r,onKeyDown:n,tabIndex:t?-1:0,role:"slider","aria-label":"Color wheel - use arrow keys to adjust hue and saturation","aria-valuemin":"0","aria-valuemax":"360","aria-valuenow":e.h,style:{width:"200px",height:"200px",borderRadius:"50%",background:`conic-gradient(
            hsl(0, 100%, 50%),
            hsl(60, 100%, 50%),
            hsl(120, 100%, 50%),
            hsl(180, 100%, 50%),
            hsl(240, 100%, 50%),
            hsl(300, 100%, 50%),
            hsl(360, 100%, 50%)
          )`,cursor:t?"not-allowed":"pointer",position:"relative",margin:"20px auto"},children:l.jsx("div",{className:"color-wheel-pointer",style:{position:"absolute",width:"12px",height:"12px",borderRadius:"50%",border:"2px solid white",boxShadow:"0 0 4px rgba(0,0,0,0.5)",transform:"translate(-50%, -50%)",left:`${50+e.s/100*50*Math.cos(e.h*Math.PI/180)}%`,top:`${50+e.s/100*50*Math.sin(e.h*Math.PI/180)}%`,pointerEvents:"none"}})}),l.jsxs("div",{className:"lightness-slider-container",children:[l.jsx("label",{htmlFor:"lightness-slider",className:"slider-label",children:"Lightness"}),l.jsx("input",{id:"lightness-slider",type:"range",min:"0",max:"100",value:e.v,onChange:a=>s(a.target.value),disabled:t,className:"lightness-slider","data-testid":"lightness-slider","aria-label":"Lightness slider",style:{width:"200px",background:`linear-gradient(to right, 
              hsl(${e.h}, ${e.s}%, 0%), 
              hsl(${e.h}, ${e.s}%, 100%))`}})]})]})}function nc({mode:e,values:t,disabled:r,onNumber:n,onSlider:s}){const o=e==="RGB"?[{key:"r",label:"Red",min:0,max:255,sliderClass:"red-slider"},{key:"g",label:"Green",min:0,max:255,sliderClass:"green-slider"},{key:"b",label:"Blue",min:0,max:255,sliderClass:"blue-slider"}]:[{key:"h",label:"Hue",min:0,max:360,sliderClass:"hue-slider"},{key:"s",label:"Saturation",min:0,max:100,sliderClass:"saturation-slider"},{key:"v",label:"Value",min:0,max:100,sliderClass:"value-slider"}];return l.jsx("div",{className:`${e.toLowerCase()}-inputs color-input-group`,children:o.map(({key:a,label:i,min:c,max:u,sliderClass:g})=>l.jsxs("div",{className:`${e.toLowerCase()}-input-item`,children:[l.jsx("label",{className:"color-input-label",children:i}),l.jsx("input",{type:"number",min:c,max:u,value:t[a],onChange:p=>n(a,p.target.value),disabled:r,className:"color-input color-input-small"}),l.jsx("input",{type:"range",min:c,max:u,value:t[a],onChange:p=>s(a.toUpperCase(),p.target.value,e),disabled:r,className:`color-slider ${g}`,"aria-label":`${i} slider`})]},a))})}function Gh({presets:e=[],disabled:t,onSelect:r}){return e.length?l.jsxs("div",{className:"color-presets",children:[l.jsx("div",{className:"presets-label",children:"Presets"}),l.jsx("div",{className:"presets-grid",children:e.map((n,s)=>l.jsx("button",{className:"preset-color",onClick:()=>r(n),disabled:t,style:{backgroundColor:n},title:n,"aria-label":`Select preset color ${n}`},s))})]}):null}function Qh(e){return v.useMemo(()=>{const t=Id(e.r,e.g,e.b),r=Fh(e.r,e.g,e.b),n=Ah(e.r,e.g,e.b);return{hex:t,hsv:r,hsl:n,rgb:e}},[e])}function Yh({info:e}){if(!e)return null;const{contrastRatio:t,wcagAA:r,wcagAALarge:n,wcagAAA:s}=e;return l.jsxs("div",{className:"accessibility-info",children:[l.jsx("div",{className:"accessibility-title",children:"Accessibility"}),l.jsxs("div",{className:"contrast-info",children:[l.jsxs("span",{children:["Contrast Ratio: ",t,":1"]}),l.jsxs("div",{className:"wcag-compliance",children:[l.jsxs("span",{className:r?"wcag-pass":"wcag-fail",children:["WCAG AA: ",r?"✓":"✗"]}),l.jsxs("span",{className:n?"wcag-pass":"wcag-fail",children:["AA Large: ",n?"✓":"✗"]}),l.jsxs("span",{className:s?"wcag-pass":"wcag-fail",children:["WCAG AAA: ",s?"✓":"✗"]})]})]})]})}const Od=({value:e="#000000",onChange:t,onColorChange:r,property:n,backgroundColor:s,showVisualPicker:o=!0,showSliders:a=!0,presets:i=[],className:c="",disabled:u=!1})=>{const[g,p]=v.useState("HEX"),[f,x]=v.useState(""),[y,w]=v.useState(()=>Ho(e)||{r:0,g:0,b:0}),[S,h]=v.useState(e),d=v.useRef(null),m=v.useRef(!1),b=v.useCallback(k=>{if(!k||typeof k!="string")return console.warn("ColorPicker: Invalid color value provided"),{r:0,g:0,b:0};const E=Ho(k);return E||(console.warn("ColorPicker: Could not parse color value:",k),{r:0,g:0,b:0})},[]);v.useEffect(()=>{const k=b(e);w(k),h(e),x("")},[e,b]);const C=Qh(y),T=v.useMemo(()=>{if(!s)return null;const k=Ho(s);if(!k)return null;const E=Uh(y,k);return{contrastRatio:E.toFixed(2),wcagAA:Uo(E,"AA","normal"),wcagAALarge:Uo(E,"AA","large"),wcagAAA:Uo(E,"AAA","normal")}},[y,s]),N=v.useCallback((k,E=!1)=>{if(!E&&!Ur(k.r,k.g,k.b)){x("Invalid color values");return}w(k),x("");const I=Id(k.r,k.g,k.b);h(I),t==null||t(I),r==null||r(k,n,I)},[t,r,n]),R=v.useCallback(k=>{try{let E=k.trim();if(E.startsWith("#")&&(E=E.substring(1)),E.length===3&&(E=E.split("").map(A=>A+A).join("")),E="#"+E,!Dd(E)){x("Invalid HEX color format");return}const I=zd(E);N(I)}catch{x("Invalid HEX color")}},[N]),F=v.useCallback((k,E)=>{const I=parseInt(E,10);if(isNaN(I)||I<0||I>255){x(`${k} value must be between 0 and 255`);return}const A={...y,[k]:I};N(A)},[y,N]),z=v.useCallback((k,E)=>{const I=parseInt(E,10);let A=!1;if(k==="h"?(A=!isNaN(I)&&I>=0&&I<=360,A||x("Hue must be between 0 and 360")):(A=!isNaN(I)&&I>=0&&I<=100,A||x(`${k==="s"?"Saturation":"Value"} must be between 0 and 100`)),!A)return;const ye={...C.hsv,[k]:I},be=ss(ye.h,ye.s,ye.v);N(be)},[C.hsv,N]),re=v.useCallback(k=>{if(u)return;const E=k.currentTarget.getBoundingClientRect(),I=E.width/2,A=E.height/2,se=k.clientX-E.left-I,ye=k.clientY-E.top-A,be=Math.atan2(ye,se),tt=Math.min(Math.sqrt(se*se+ye*ye),I),Fn=(be*180/Math.PI+360)%360,co=Math.min(tt/I*100,100),uo=C.hsv,po=ss(Fn,co,uo.v);N(po)},[u,C.hsv,N]),$e=v.useCallback(k=>{if(u)return;const E=C.hsv,I=ss(E.h,E.s,parseInt(k,10));N(I)},[u,C.hsv,N]),ve=v.useCallback((k,E,I)=>{u||(I==="RGB"?F(k.toLowerCase(),E):I==="HSV"&&z(k.toLowerCase(),E))},[u,F,z]),bt=v.useCallback(k=>{if(u)return;const E=b(k);N(E,!0)},[u,b,N]),Gt=v.useCallback(k=>{u||(m.current=!0,re(k))},[u,re]),et=v.useCallback(k=>{!m.current||u||re(k)},[u,re]),Le=v.useCallback(()=>{m.current=!1},[]),$=v.useCallback(k=>{if(u)return;const{key:E}=k;let A={...C.hsv};switch(E){case"ArrowLeft":A.h=(A.h-5+360)%360;break;case"ArrowRight":A.h=(A.h+5)%360;break;case"ArrowUp":A.s=Math.min(A.s+5,100);break;case"ArrowDown":A.s=Math.max(A.s-5,0);break;default:return}k.preventDefault();const se=ss(A.h,A.s,A.v);N(se)},[u,C.hsv,N]);v.useEffect(()=>{const k=I=>et(I),E=()=>Le();return m.current&&(document.addEventListener("mousemove",k),document.addEventListener("mouseup",E)),()=>{document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",E)}},[et,Le]);const O=()=>{switch(g){case"HEX":return l.jsxs("div",{className:"color-input-group",children:[l.jsx("label",{htmlFor:"hex-input",className:"color-input-label",children:"HEX"}),l.jsx("input",{id:"hex-input",type:"text",value:S,onChange:k=>{h(k.target.value),R(k.target.value)},disabled:u,className:"color-input",placeholder:"#000000",maxLength:7})]});case"RGB":return l.jsx(nc,{mode:"RGB",values:y,disabled:u,onNumber:(k,E)=>F(k,E),onSlider:ve});case"HSV":return l.jsx(nc,{mode:"HSV",values:C.hsv,disabled:u,onNumber:(k,E)=>z(k,E),onSlider:ve});default:return null}};return l.jsxs("div",{className:`color-picker ${c} ${u?"color-picker-disabled":""}`,role:"group","aria-label":"Color picker",children:[l.jsxs("div",{className:"color-picker-header",children:[l.jsx("div",{className:"color-preview","data-testid":"color-preview",style:{backgroundColor:`rgb(${y.r}, ${y.g}, ${y.b})`,border:"2px solid #ddd",borderRadius:"4px",width:"60px",height:"40px",display:"inline-block",marginRight:"12px"},"aria-label":`Current color: ${C.hex}`}),l.jsx("div",{className:"input-mode-tabs",children:["HEX","RGB","HSV"].map(k=>l.jsx("button",{onClick:()=>p(k),disabled:u,className:`input-mode-tab ${g===k?"active":""}`,"aria-pressed":g===k,children:k},k))})]}),f&&l.jsx("div",{className:"color-error",role:"alert",children:f}),l.jsxs("div",{className:"color-picker-body",children:[o&&l.jsx(Wh,{hsv:C.hsv,disabled:u,onMouseDown:Gt,onKeyDown:$,onLightnessChange:$e,wheelRef:d}),l.jsx("div",{className:"color-inputs",children:O()}),l.jsx(Gh,{presets:i,disabled:u,onSelect:bt}),l.jsx(Yh,{info:T})]})]})},Kh=()=>{const[e,t]=v.useState({textColor:"#000000",backgroundColor:"#ffffff",borderColor:"#cccccc"}),[r,n]=v.useState("textColor"),s=v.useCallback((c,u,g)=>{u&&e.hasOwnProperty(u)&&t(p=>({...p,[u]:g}))},[e]),o=v.useCallback(c=>{t(u=>({...u,[r]:c}))},[r]),a=v.useCallback(()=>`
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
    `,[e]),i={textColor:"Text Color",backgroundColor:"Background Color",borderColor:"Accent Color"};return l.jsxs("div",{className:"color-picker-demo",children:[l.jsxs("div",{className:"demo-header",children:[l.jsx("h2",{children:"Color Picker"}),l.jsx("p",{children:"Create a background, text and accent palette. Download a free HTML + CSS with your colors. For full components (cards, buttons, badges, tabs), head to the Stylesheet Builder."})]}),l.jsxs("div",{className:"demo-layout",children:[l.jsxs("div",{className:"demo-controls",children:[l.jsxs("div",{className:"property-selector",children:[l.jsx("h3",{children:"Select Property to Modify:"}),l.jsx("div",{className:"property-buttons",children:Object.entries(i).map(([c,u])=>l.jsx("button",{onClick:()=>n(c),className:`property-btn ${r===c?"active":""}`,style:{backgroundColor:r===c?e[c]:"transparent",color:r===c?"white":e[c],border:`2px solid ${e[c]}`},children:u},c))})]}),l.jsxs("div",{className:"color-picker-container",children:[l.jsx("h3",{children:"Color Picker:"}),l.jsx(Od,{value:e[r],onChange:o,onColorChange:s,property:r,backgroundColor:r==="textColor"?e.backgroundColor:"#ffffff",showVisualPicker:!0,showSliders:!0,presets:["#FF0000","#00FF00","#0000FF","#FFFF00","#FF00FF","#00FFFF","#000000","#808080","#FFFFFF"]})]}),l.jsxs("div",{className:"current-colors",children:[l.jsx("h3",{children:"Current Colors:"}),l.jsx("div",{className:"color-swatches",children:Object.entries(e).map(([c,u])=>l.jsxs("div",{className:"color-swatch-item",children:[l.jsx("div",{className:"color-swatch",style:{backgroundColor:u},title:u}),l.jsx("span",{className:"color-label",children:i[c]}),l.jsx("span",{className:"color-value",children:u})]},c))})]})]}),l.jsxs("div",{className:"demo-preview",children:[l.jsx("h3",{children:"Live Preview:"}),l.jsx(io,{htmlContent:Dl(),cssContent:a(),height:"600px"})]})]})]})},sc=(e={},t={})=>{var o,a,i,c;const r=t.primary||"#3b82f6",n=t.primaryHover||"#2563eb";t.secondary,t.success,t.warning,t.danger;const s=t.neutral||"#e5e7eb";return t.start,t.end,`
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
            <span class="text-xl">${((a=e.warning)==null?void 0:a.icon)||"⚠️"}</span>
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
  `};function Xh({theme:e,buttonStyles:t,alertStyles:r,currentGradient:n,onUpdateButtonStyle:s}){var x,y,w,S,h,d;const o=((x=t==null?void 0:t.primary)==null?void 0:x.bg)||(e==null?void 0:e.primary),a=((y=t==null?void 0:t.primary)==null?void 0:y.hover)||(e==null?void 0:e.secondary),i=((w=t==null?void 0:t.secondary)==null?void 0:w.bg)||(e==null?void 0:e.secondary),c=((S=t==null?void 0:t.ok)==null?void 0:S.bg)||(e==null?void 0:e.success),u=e==null?void 0:e.warning,g=((h=t==null?void 0:t.delete)==null?void 0:h.bg)||(e==null?void 0:e.danger),p=(e==null?void 0:e.cardTints)&&(e==null?void 0:e.cardTints[1])||"#e5e7eb",f=[{key:"primary",label:"Primary",color:o},{key:"secondary",label:"Secondary",color:i},{key:"ok",label:"Success",color:c},{key:"submit",label:"Submit",color:((d=t==null?void 0:t.submit)==null?void 0:d.bg)||"#3b82f6"},{key:"delete",label:"Danger",color:g}];return l.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border mb-6",children:[l.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"🎨 Color System Preview"}),l.jsxs("div",{className:"mb-6",children:[l.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"Buttons"}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:f.map(m=>{var b,C;return l.jsxs("div",{className:"flex items-center justify-between gap-3 p-3 rounded border",children:[l.jsx("button",{className:"px-4 py-2 rounded-md text-white font-medium flex-1 text-left",style:{background:((b=t==null?void 0:t[m.key])==null?void 0:b.bg)||m.color},children:m.label}),s&&l.jsx("input",{type:"color",className:"w-10 h-10 rounded border cursor-pointer",value:((C=t==null?void 0:t[m.key])==null?void 0:C.bg)||m.color,onChange:T=>s(m.key,"bg",T.target.value),title:`${m.label} color`})]},m.key)})})]}),l.jsxs("div",{className:"mb-6",children:[l.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"Badges"}),l.jsxs("div",{className:"flex flex-wrap gap-2",children:[l.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-white",style:{background:o},children:"New"}),l.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-white",style:{background:c},children:"Success"}),l.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-white",style:{background:u},children:"Warning"}),l.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-white",style:{background:g},children:"Error"}),l.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-gray-700",style:{background:p},children:"Neutral"})]})]}),l.jsxs("div",{className:"mb-6",children:[l.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"Form Controls"}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[l.jsx("input",{className:"px-3 py-2 rounded-md border",placeholder:"Input",style:{borderColor:"#d1d5db"}}),l.jsx("select",{className:"px-3 py-2 rounded-md border",style:{borderColor:"#d1d5db"},children:l.jsx("option",{children:"Select"})}),l.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-700",children:[l.jsx("input",{type:"checkbox",className:"w-4 h-4"})," Checkbox"]}),l.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-700",children:[l.jsx("input",{type:"radio",name:"r",className:"w-4 h-4"})," Radio"]})]}),l.jsxs("div",{className:"text-xs text-gray-500 mt-2",children:["Focus color uses your primary (",o,")."]})]}),l.jsxs("div",{className:"mb-6",children:[l.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"Tabs"}),l.jsxs("div",{className:"flex gap-4 border-b",children:[l.jsx("button",{className:"pb-2 text-sm font-medium",style:{borderBottom:`2px solid ${o}`,color:o},children:"Active"}),l.jsx("button",{className:"pb-2 text-sm text-gray-600",children:"Tab"}),l.jsx("button",{className:"pb-2 text-sm text-gray-600",children:"Tab"})]})]}),l.jsxs("div",{className:"mb-6",children:[l.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"Progress"}),l.jsx("div",{className:"w-full h-2 rounded bg-gray-200 overflow-hidden",children:l.jsx("div",{className:"h-2",style:{width:"60%",background:`linear-gradient(90deg, ${(n==null?void 0:n.start)||o}, ${(n==null?void 0:n.end)||a})`}})})]}),l.jsxs("div",{children:[l.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"Links"}),l.jsx("a",{href:"#",className:"text-sm",style:{color:o},children:"Link example"})]})]})}function Jh({presets:e={},selectedKey:t,onSelect:r,pickerBaseColor:n,inlinePicker:s}){return l.jsx("div",{className:"mb-6",children:l.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 mb-4",children:[Object.entries(e).map(([o,a])=>l.jsx("button",{onClick:()=>r(o),className:`p-3 rounded text-xs font-medium text-white text-center transition-all ${t===o?"ring-4 ring-white ring-offset-2 transform scale-105":"hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${a.start}, ${a.end})`},title:`${a.name} Theme`,"data-testid":`gradient-${o}`,children:a.name},o)),n?l.jsx("button",{onClick:()=>r("fromPicker"),className:`p-3 rounded text-xs font-medium text-white text-center transition-all ${t==="fromPicker"?"ring-4 ring-white ring-offset-2 transform scale-105":"hover:scale-105"}`,style:{background:n},title:"Use base color from Color Picker","data-testid":"gradient-from-picker",children:"From Color Picker"}):s?l.jsx("button",{onClick:s.onOpen,className:"p-3 rounded text-xs font-medium text-center transition-all bg-blue-100 text-blue-700 hover:bg-blue-200",title:"Open color picker","data-testid":"gradient-from-picker-inline",children:"Try the color picker"}):l.jsx(tr,{to:"/color-picker",className:"p-3 rounded text-xs font-medium text-center transition-all bg-blue-100 text-blue-700 hover:bg-blue-200",title:"Try the color picker","data-testid":"gradient-from-picker-link",children:"Try the color picker"})]})})}const Zh=e=>{try{return localStorage.getItem(e)}catch{return null}},qh=e=>{try{localStorage.removeItem(e)}catch{}},Md=e=>{const t=Zh(e);return t!==null&&qh(e),t},eg="togglebox_transfer",tg="togglebox_theme_color",rg=()=>{const e=Md(eg);if(!e)return null;try{return JSON.parse(e)}catch{return null}},ng=()=>Md(tg),sg={confirmationUrl:`${window.location.origin}/confirm`},og=e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e),ag=()=>Math.random().toString(36).substr(2,9)+Date.now().toString(36),lg=(e,t,r)=>{const n={email:e,token:t,data:r,timestamp:Date.now(),confirmed:!1},s=`email_registration_${t}`;localStorage.setItem(s,JSON.stringify(n));const o=JSON.parse(localStorage.getItem("email_lookups")||"{}");return o[e]=t,localStorage.setItem("email_lookups",JSON.stringify(o)),n},oc=async(e,t,r)=>{const n=`${sg.confirmationUrl}/${t}`;if(window.location.hostname.includes("togglebox.co.za"))try{console.log("🔄 Attempting to send real email via PHP API...");const s=await fetch("/api/email/send-confirmation.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,token:t,downloadData:r})}),o=await s.text();if(console.log("📧 Email API Response:",o),s.ok)try{const a=JSON.parse(o);if(a.success)return console.log("✅ Email sent successfully to:",e),{success:!0,confirmUrl:n,emailSent:!0};throw console.error("❌ Email API returned error:",a),new Error(a.error||"Email send failed")}catch(a){throw console.error("❌ Failed to parse email API response:",a),new Error("Invalid response from email API")}else throw console.error("❌ Email API returned status:",s.status),new Error(`Email API error: ${s.status}`)}catch(s){throw console.error("❌ Email sending failed:",s.message),new Error(`Failed to send confirmation email: ${s.message}. Please check your email configuration.`)}return console.log("🔗 Confirmation Email (Demo Mode - Development Only)"),console.log(`To: ${e}`),console.log(`Confirmation URL: ${n}`),console.log(`Download includes: ${r.files?r.files.length:0} files`),setTimeout(()=>{console.log("🎯 Auto-confirming for demo..."),Fd(t)},2e3),{success:!0,confirmUrl:n,emailSent:!1}},ig=async(e,t)=>{if(!og(e))throw new Error("Please enter a valid email address");const n=JSON.parse(localStorage.getItem("email_lookups")||"{}")[e];if(n){const o=localStorage.getItem(`email_registration_${n}`);if(o){const a=JSON.parse(o);if((Date.now()-a.timestamp)/(1e3*60*60)<24)return await oc(e,n,t),{success:!0,token:n,resent:!0}}}const s=ag();return lg(e,s,t),await oc(e,s,t),{success:!0,token:s,new:!0}},Fd=e=>{const t=`email_registration_${e}`,r=localStorage.getItem(t);if(!r)return{success:!1,error:"Invalid confirmation token"};const n=JSON.parse(r);return n.confirmed=!0,n.confirmedAt=Date.now(),localStorage.setItem(t,JSON.stringify(n)),{success:!0,data:n}},cg=e=>{const t=`email_registration_${e}`,r=localStorage.getItem(t);if(!r)return{success:!1,error:"Invalid token"};const n=JSON.parse(r);return n.confirmed?{success:!0,data:n.data}:{success:!1,error:"Email not confirmed yet"}},ug=e=>{const r=JSON.parse(localStorage.getItem("email_lookups")||"{}")[e];if(!r)return!1;const n=localStorage.getItem(`email_registration_${r}`);return n&&JSON.parse(n).confirmed||!1},dg=()=>{const e=Object.keys(localStorage),t=Date.now()-7*24*60*60*1e3;e.forEach(r=>{if(r.startsWith("email_registration_")){const n=localStorage.getItem(r);n&&JSON.parse(n).timestamp<t&&localStorage.removeItem(r)}})};dg();const pg=async({amount:e,itemName:t,itemDescription:r,customerEmail:n,returnUrl:s,cancelUrl:o,notifyUrl:a})=>{const i={amount:Number(e||0).toFixed(2),itemName:t||"ToggleBox Export",itemDescription:r||"Unlock stylesheet export for ToggleBox",returnUrl:s||`${window.location.origin}/payment-success`,cancelUrl:o||`${window.location.origin}/payment-cancelled`,customerEmail:n||""};try{const c=await fetch("/api/payfast/create-payment.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(!c.ok)throw new Error("Payment setup failed");const u=await c.json();if(!u.success)throw new Error(u.error||"Payment failed");const g=document.createElement("form");return g.method="POST",g.action=u.paymentUrl,Object.entries(u.paymentData).forEach(([p,f])=>{if(f!=null&&f!==""){const x=document.createElement("input");x.type="hidden",x.name=p,x.value=String(f),g.appendChild(x)}}),document.body.appendChild(g),g.submit(),document.body.removeChild(g),u}catch(c){throw new Error(`Payment failed: ${c.message}`)}};function fg({onClose:e,agentInstructions:t,amount:r="49.00",itemName:n="ToggleBox AI Prompt",itemDescription:s="Get the tailored AI prompt for your custom stylesheet"}){const[o,a]=v.useState(""),[i,c]=v.useState(!1),[u,g]=v.useState(""),p=async f=>{if(f.preventDefault(),!o){g("Please enter your email address");return}c(!0),g("");try{const x={email:o,agentInstructions:t,timestamp:Date.now(),amount:r,itemName:n},y=`purchase_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;localStorage.setItem(y,JSON.stringify(x)),await pg({amount:r,itemName:n,itemDescription:s,customerEmail:o,returnUrl:`${window.location.origin}/payment-success?purchase=${y}`,cancelUrl:`${window.location.origin}/payment-cancelled`,notifyUrl:`${window.location.origin}/api/payfast/itn`})}catch(x){g(x.message||"Payment failed. Please try again."),c(!1)}};return l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50",children:l.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6",children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("h3",{className:"text-lg font-semibold text-gray-900",children:"🤖 Purchase AI Prompt"}),l.jsx("button",{onClick:e,className:"text-gray-500 hover:text-gray-700 text-xl",children:"×"})]}),l.jsx("div",{className:"mb-6",children:l.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200",children:[l.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"What you get:"}),l.jsxs("ul",{className:"text-sm text-gray-700 space-y-1",children:[l.jsx("li",{children:"• Custom AI prompt for your exact color palette"}),l.jsx("li",{children:"• Instructions for Claude, ChatGPT, and other AI tools"}),l.jsx("li",{children:"• Ready-to-use markdown file (.md format)"}),l.jsx("li",{children:"• Lifetime access to your purchase"})]})]})}),l.jsxs("form",{onSubmit:p,className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Email Address"}),l.jsx("input",{type:"email",value:o,onChange:f=>a(f.target.value),className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"your@email.com",required:!0,disabled:i}),l.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"We'll send your AI prompt to this email after payment"})]}),u&&l.jsx("div",{className:"p-3 bg-red-50 border border-red-200 rounded-md",children:l.jsx("p",{className:"text-sm text-red-600",children:u})}),l.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("span",{className:"font-medium text-gray-900",children:"Total:"}),l.jsxs("span",{className:"text-2xl font-bold text-green-600",children:["R",r]})]}),l.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"Secure payment via PayFast (South Africa)"})]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{type:"button",onClick:e,className:"flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",disabled:i,children:"Cancel"}),l.jsx("button",{type:"submit",className:"flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50",disabled:i,children:i?"Processing...":`Pay R${r}`})]})]}),l.jsx("div",{className:"mt-4 pt-4 border-t border-gray-200",children:l.jsxs("p",{className:"text-xs text-gray-500 text-center",children:["🔒 Secure payment powered by PayFast",l.jsx("br",{}),"Your CSS and HTML files remain free via email registration"]})})]})})}function mg({onExport:e,onExportHtml:t,onBuyAIPrompt:r,submitStyle:n,onEmailRequired:s}){return l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e&&l.jsx("button",{onClick:s||e,className:"px-4 py-2 text-white rounded-md transition-colors font-medium hover:opacity-90",style:n,"data-testid":"export-css-button",children:"📥 Export CSS"}),t&&l.jsx("button",{onClick:s||t,className:"px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 transition-colors font-medium","data-testid":"export-demo-html-button",children:"📄 Download demo index.html"}),r&&l.jsx("button",{onClick:r,className:"px-4 py-2 rounded-md bg-orange-600 text-white hover:bg-orange-700 transition-colors font-medium","data-testid":"buy-ai-prompt",children:"🤖 Buy AI Prompt (R49)"})]})}function hg({isOpen:e,onClose:t,onSubmit:r,title:n="Get Your Export"}){const[s,o]=v.useState(""),[a,i]=v.useState(!1),[c,u]=v.useState(!1),[g,p]=v.useState(""),f=async w=>{if(w.preventDefault(),!s||!s.includes("@")){p("Please enter a valid email address");return}i(!0),p("");try{await r(s),u(!0),setTimeout(()=>{t(),x()},3e3)}catch(S){p(S.message||"Failed to send confirmation email. Please try again.")}finally{i(!1)}},x=()=>{o(""),u(!1),p(""),i(!1)},y=()=>{t(),x()};return e?l.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",children:l.jsx("div",{className:"bg-white rounded-lg shadow-xl max-w-md w-full",children:c?l.jsxs("div",{className:"p-6 text-center",children:[l.jsx("div",{className:"mb-4",children:l.jsx("div",{className:"mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center",children:l.jsx("span",{className:"text-2xl",children:"✅"})})}),l.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Check Your Email!"}),l.jsxs("p",{className:"text-gray-600 mb-4",children:["We've sent your download link to ",l.jsx("strong",{children:s})]}),l.jsx("p",{className:"text-sm text-gray-500",children:"This window will close automatically..."})]}):l.jsx(l.Fragment,{children:l.jsxs("div",{className:"p-6",children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("h3",{className:"text-xl font-semibold text-gray-900",children:n}),l.jsx("button",{onClick:y,className:"text-gray-400 hover:text-gray-600 transition-colors","data-testid":"close-modal",children:"✕"})]}),l.jsx("p",{className:"text-gray-600 mb-6",children:"Enter your email address to receive your custom CSS and demo files. We'll send you a download link right away!"}),l.jsxs("form",{onSubmit:f,children:[l.jsxs("div",{className:"mb-4",children:[l.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),l.jsx("input",{type:"email",id:"email",value:s,onChange:w=>o(w.target.value),placeholder:"your@email.com",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500","data-testid":"email-input",disabled:a,required:!0})]}),g&&l.jsx("div",{className:"mb-4 p-3 bg-red-50 border border-red-200 rounded-md",children:l.jsx("p",{className:"text-red-700 text-sm",children:g})}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{type:"button",onClick:y,className:"flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",disabled:a,children:"Cancel"}),l.jsx("button",{type:"submit",className:"flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed","data-testid":"submit-email",disabled:a,children:a?"Sending...":"Send Download Link"})]})]})]})})})}):null}function gg({selectedCard:e,card:t,update:r}){return l.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[l.jsxs("h4",{className:"font-medium text-gray-800 mb-4",children:["Editing: Card ",e.slice(-1)," (.",e.replace("card","card-"),")",l.jsx("span",{className:"ml-2 text-sm text-gray-500",children:"After changing a color, click off the card to see it update. Then scroll down to the preview for other changes."})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:"Background Color"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("input",{type:"color",value:t.backgroundColor,onChange:n=>r("backgroundColor",n.target.value),className:"w-12 h-8 rounded border cursor-pointer"}),l.jsx("input",{type:"text",value:t.backgroundColor,onChange:n=>r("backgroundColor",n.target.value),className:"flex-1 px-2 py-1 text-sm border border-gray-300 rounded"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:"Border Color"}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("input",{type:"color",value:t.borderColor,onChange:n=>r("borderColor",n.target.value),className:"w-12 h-8 rounded border cursor-pointer"}),l.jsx("input",{type:"text",value:t.borderColor,onChange:n=>r("borderColor",n.target.value),className:"flex-1 px-2 py-1 text-sm border border-gray-300 rounded"})]})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:["Border Radius: ",t.borderRadius,"px"]}),l.jsx("input",{type:"range",min:"0",max:"24",value:t.borderRadius,onChange:n=>r("borderRadius",parseInt(n.target.value)),className:"w-full"})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:["Padding: ",t.padding,"px"]}),l.jsx("input",{type:"range",min:"8",max:"32",value:t.padding,onChange:n=>r("padding",parseInt(n.target.value)),className:"w-full"})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:["Shadow: ",t.shadow,"px"]}),l.jsx("input",{type:"range",min:"0",max:"12",value:t.shadow,onChange:n=>r("shadow",parseInt(n.target.value)),className:"w-full"})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:["Border Width: ",t.borderWidth,"px"]}),l.jsx("input",{type:"range",min:"0",max:"4",value:t.borderWidth,onChange:n=>r("borderWidth",parseInt(n.target.value)),className:"w-full"})]})]})]})}const xg=({className:e=""})=>{var Ol;const[t,r]=v.useState({card1:{backgroundColor:"#ffffff",borderRadius:8,padding:16,shadow:2,borderWidth:1,borderColor:"#e5e7eb"},card2:{backgroundColor:"#f8fafc",borderRadius:12,padding:20,shadow:4,borderWidth:0,borderColor:"#e5e7eb"},card3:{backgroundColor:"#eff6ff",borderRadius:16,padding:24,shadow:6,borderWidth:2,borderColor:"#3b82f6"},card4:{backgroundColor:"#f0fdf4",borderRadius:8,padding:18,shadow:3,borderWidth:1,borderColor:"#10b981"},card5:{backgroundColor:"#fef2f2",borderRadius:10,padding:22,shadow:5,borderWidth:2,borderColor:"#ef4444"},card6:{backgroundColor:"#faf5ff",borderRadius:14,padding:20,shadow:4,borderWidth:1,borderColor:"#8b5cf6"}}),[n,s]=v.useState({primary:{bg:"#3b82f6",hover:"#2563eb"},secondary:{bg:"#6b7280",hover:"#374151"},delete:{bg:"#ef4444",hover:"#dc2626"},submit:{bg:"#059669",hover:"#047857"},ok:{bg:"#10b981",hover:"#059669"}}),[o,a]=v.useState({error:{bg:"#fef2f2",border:"#fecaca",text:"#991b1b",icon:"🔥"},warning:{bg:"#fffbeb",border:"#fed7aa",text:"#92400e",icon:"⚠️"},message:{bg:"#eff6ff",border:"#bfdbfe",text:"#1e40af",icon:"💬"},success:{bg:"#f0fdf4",border:"#bbf7d0",text:"#166534",icon:"✅"}}),[i,c]=v.useState({selectedGradient:"ocean",direction:"to right",enableGradient:!0,customColors:{color1:"#3b82f6",color2:"#8b5cf6",color3:"#ec4899",color4:"#f59e0b"}}),[u,g]=v.useState({fontSize:14,shadows:!0,animations:!0}),[p,f]=v.useState("card1"),[x,y]=v.useState(null),[w,S]=v.useState(!1),[h,d]=v.useState(null),[m,b]=v.useState(!1),[C,T]=v.useState(!1),[N,R]=v.useState(!1),[F,z]=v.useState(null),[re,$e]=v.useState(!1),ve={ocean:{start:"#0ea5e9",end:"#3b82f6",name:"Ocean Blue",theme:{primary:"#3b82f6",secondary:"#0ea5e9",success:"#06b6d4",warning:"#f59e0b",danger:"#ef4444",cardTints:["#f0f9ff","#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa"]}},sunset:{start:"#f59e0b",end:"#ef4444",name:"Sunset Orange",theme:{primary:"#f59e0b",secondary:"#ef4444",success:"#10b981",warning:"#fbbf24",danger:"#dc2626",cardTints:["#fefbeb","#fef3c7","#fed7aa","#fdba74","#fb923c","#f97316"]}},forest:{start:"#10b981",end:"#059669",name:"Forest Green",theme:{primary:"#10b981",secondary:"#059669",success:"#06d6a0",warning:"#f59e0b",danger:"#ef4444",cardTints:["#f0fdf4","#dcfce7","#bbf7d0","#86efac","#4ade80","#22c55e"]}},purple:{start:"#8b5cf6",end:"#a855f7",name:"Purple Dream",theme:{primary:"#8b5cf6",secondary:"#a855f7",success:"#10b981",warning:"#f59e0b",danger:"#ef4444",cardTints:["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#a855f7"]}},pink:{start:"#ec4899",end:"#be185d",name:"Pink Passion",theme:{primary:"#ec4899",secondary:"#be185d",success:"#10b981",warning:"#f59e0b",danger:"#dc2626",cardTints:["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#ec4899"]}},dark:{start:"#374151",end:"#111827",name:"Dark Mode",theme:{primary:"#6366f1",secondary:"#8b5cf6",success:"#10b981",warning:"#f59e0b",danger:"#ef4444",cardTints:["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#6b7280"]}},rainbow:{start:"#f43f5e",end:"#8b5cf6",name:"Rainbow",theme:{primary:"#f43f5e",secondary:"#8b5cf6",success:"#10b981",warning:"#f59e0b",danger:"#ef4444",cardTints:["#fdf2f8","#fce7f3","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc"]}},gold:{start:"#fbbf24",end:"#f59e0b",name:"Golden Hour",theme:{primary:"#f59e0b",secondary:"#fbbf24",success:"#10b981",warning:"#d97706",danger:"#ef4444",cardTints:["#fffbeb","#fef3c7","#fed7aa","#fdba74","#fb923c","#f97316"]}},custom:{start:"#3b82f6",end:"#ec4899",name:"Custom",theme:{primary:"#3b82f6",secondary:"#8b5cf6",success:"#10b981",warning:"#f59e0b",danger:"#ef4444",cardTints:["#f0f9ff","#e0e7ff","#fdf2f8","#fef3c7","#fed7aa","#fdba74"]}}},bt=()=>{const{color1:P,color2:D,color3:U,color4:_}=i.customColors,K=(V,it)=>{const We=parseInt(V.replace("#",""),16),rt=Math.round(2.55*it),Me=Math.min(255,(We>>16)+rt),pe=Math.min(255,(We>>8&255)+rt),An=Math.min(255,(We&255)+rt);return"#"+(16777216+Me*65536+pe*256+An).toString(16).slice(1)};return{start:P,end:U,name:"Custom Rainbow",theme:{primary:P,secondary:D,success:U,warning:_,danger:U,cardTints:[K(P,85),K(D,70),K(U,85),K(_,70),K(P,40),K(D,25)]}}},Gt=P=>{const D=P||h||"#3b82f6",U=(it,We)=>{const rt=parseInt(it.replace("#",""),16),Me=Math.round(2.55*We),pe=Math.min(255,(rt>>16)+Me),An=Math.min(255,(rt>>8&255)+Me),Ge=Math.min(255,(rt&255)+Me);return"#"+(16777216+pe*65536+An*256+Ge).toString(16).slice(1)},_=(it,We)=>U(it,We),K=U(D,0),V=U(D,-20);return{start:K,end:V,name:"From Color Picker",theme:{primary:D,secondary:U(D,-15),success:"#22c55e",warning:"#f59e0b",danger:"#ef4444",cardTints:[_(D,85),_(D,70),_(D,60),_(D,50),_(D,40),_(D,30)]}}},et=v.useMemo(()=>{const P=i.selectedGradient==="custom"?bt():i.selectedGradient==="fromPicker"?Gt():ve[i.selectedGradient],D=(Ge,Qt=1)=>{const fe=Ge.replace("#",""),ct=parseInt(fe,16),Yt=ct>>16&255,Hr=ct>>8&255,Kt=ct&255;return`rgba(${Yt}, ${Hr}, ${Kt}, ${Qt})`},U=Ge=>{const Qt=Ge.replace("#",""),fe=parseInt(Qt,16);return{r:fe>>16&255,g:fe>>8&255,b:fe&255}},_=Ge=>Ge.toString(16).padStart(2,"0"),K=(Ge,Qt,fe=.5)=>{const ct=U(Ge),Yt=U(Qt),Hr=Math.round(ct.r*(1-fe)+Yt.r*fe),Kt=Math.round(ct.g*(1-fe)+Yt.g*fe),mo=Math.round(ct.b*(1-fe)+Yt.b*fe);return`#${_(Hr)}${_(Kt)}${_(mo)}`},V=Ge=>{const Qt=Ge.replace("#",""),fe=parseInt(Qt,16);let ct=fe>>16&255,Yt=fe>>8&255,Hr=fe&255;const Kt=Vr=>(Vr=Vr/255,Vr<=.03928?Vr/12.92:Math.pow((Vr+.055)/1.055,2.4)),mo=Kt(ct),Vd=Kt(Yt),Wd=Kt(Hr);return .2126*mo+.7152*Vd+.0722*Wd>.55?"#111827":"#ffffff"},it=P.start,We=P.end,rt=.35,Me=i.enableGradient?`linear-gradient(${i.direction}, ${D(it,rt)}, ${D(We,rt)})`:"none",pe=V(K(it,We,.5));return`
      /* ToggleBox Stylesheet - Theme: ${i.selectedGradient==="fromPicker"&&h?`Color Picker Base (${h})`:i.selectedGradient} */
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
        --tb-grad-start: ${it};
        --tb-grad-end: ${We};
        --tb-text-dark: #111827;
        --tb-text: #374151;
        --tb-radius: 9999px;
      }

      /* Individual Card Styles - Export Ready */
      .card-1 {
        background-color: ${t.card1.backgroundColor} !important;
        background-image: ${Me} !important;
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
        background-image: ${Me} !important;
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
        background-image: ${Me} !important;
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
        background-image: ${Me} !important;
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
        background-image: ${Me} !important;
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
        background-image: ${Me} !important;
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
    `},[t,n,o,i,u,ve,h]),Le=i.selectedGradient==="custom"?bt():i.selectedGradient==="fromPicker"?Gt():ve[i.selectedGradient],$=sc(o,{primary:n.primary.bg,primaryHover:n.primary.hover,secondary:n.secondary.bg,success:n.ok.bg,warning:(Ol=o.warning)==null?void 0:Ol.border,danger:n.delete.bg,neutral:"#e5e7eb",start:Le.start,end:Le.end}),O=v.useCallback(()=>{S(!1),y(null)},[]),k=v.useCallback(P=>{S(!1),y("Failed to load preview content"),console.error("Preview iframe error:",P)},[]),E=(P,D,U)=>{r(_=>({..._,[P]:{..._[P],[D]:U}}))},I=(P,D,U)=>{s(_=>({..._,[P]:{..._[P],[D]:U}}))},A=(P,D={})=>{const _=(P==="custom"?bt():P==="fromPicker"?Gt(D.base):ve[P]).theme;s({primary:{bg:_.primary,hover:_.secondary},secondary:{bg:"#6b7280",hover:"#374151"},delete:{bg:_.danger,hover:"#dc2626"},submit:{bg:"#8b5cf6",hover:"#7c3aed"},ok:{bg:"#22c55e",hover:"#16a34a"}}),a({error:{bg:"#fef2f2",border:_.danger,text:"#991b1b",icon:"🔥"},warning:{bg:"#fffbeb",border:_.warning,text:"#92400e",icon:"⚠️"},message:{bg:_.cardTints[0],border:_.primary,text:"#1e40af",icon:"💬"},success:{bg:"#f0fdf4",border:_.success,text:"#166534",icon:"✅"}});const K=_.cardTints&&_.cardTints.length===6?_.cardTints:[_.primary,hexToTint(_.primary,85),hexToTint(_.secondary||_.primary,70),hexToTint(_.primary,60),hexToTint(_.secondary||_.primary,50),hexToTint(_.primary,40)];r(V=>({card1:{...V.card1,backgroundColor:K[0],borderColor:_.primary},card2:{...V.card2,backgroundColor:K[1],borderColor:_.secondary||_.primary},card3:{...V.card3,backgroundColor:K[2],borderColor:_.primary},card4:{...V.card4,backgroundColor:K[3],borderColor:_.success||_.primary},card5:{...V.card5,backgroundColor:K[4],borderColor:_.warning||_.secondary||_.primary},card6:{...V.card6,backgroundColor:K[5],borderColor:_.secondary||_.primary}}))};v.useEffect(()=>{A(i.selectedGradient);const P=rg();P&&P.type==="button"&&P.target&&P.color&&I(P.target,"bg",P.color);const D=ng();D&&d(D)},[]),v.useEffect(()=>{i.selectedGradient==="fromPicker"&&h&&A("fromPicker",{base:h})},[h]);const se=(P,D)=>{c(U=>({...U,[P]:D})),P==="selectedGradient"&&A(D)},ye=(P,D)=>{g(U=>({...U,[P]:D}))},be=(P=!1)=>{if(P)return et;const D=new Blob([et],{type:"text/css"}),U=URL.createObjectURL(D),_=document.createElement("a");_.href=U,_.download="six-cards-stylesheet.css",_.click(),URL.revokeObjectURL(U)},tt=(P=!1)=>{var V;const D=`<!DOCTYPE html>
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
${sc(o,{primary:n.primary.bg,primaryHover:n.primary.hover,secondary:n.secondary.bg,success:n.ok.bg,warning:(V=o.warning)==null?void 0:V.border,danger:n.delete.bg,neutral:"#e5e7eb",start:Le.start,end:Le.end})}
    </div>
  </body>
</html>`;if(P)return D;const U=new Blob([D],{type:"text/html"}),_=URL.createObjectURL(U),K=document.createElement("a");K.href=_,K.download="index.html",K.click(),URL.revokeObjectURL(_)},Fn=async(P=!1)=>{var _;const U=`Integrate ToggleBox stylesheet (Theme: ${i.selectedGradient==="fromPicker"&&h?`From Color Picker (${h})`:((_=ve[i.selectedGradient])==null?void 0:_.name)||"Custom Theme"}).

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
`;if(P)return U;try{await navigator.clipboard.writeText(U),window.alert("Agent instructions copied to clipboard.")}catch(K){console.error("Clipboard copy failed",K)}},co=()=>be(!0),uo=()=>tt(!0),po=async()=>await Fn(!0),fo=()=>{b(!0)},Ad=()=>{T(!0)},Bd=async P=>{try{const D={css:co(),html:uo(),files:["styles.css","demo.html"]};await ig(P,D),setTimeout(()=>{ug(P)&&(R(!0),Ud())},3e3)}catch(D){throw D}},Ud=()=>{F==="css"?be():F==="html"?tt():F==="agent"&&Fn(),z(null)},Hd=t[p];return l.jsxs("div",{className:`six-cards-interactive ${e}`,"data-testid":"six-cards-interactive",children:[l.jsx("div",{className:"bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg shadow-lg mb-6",children:l.jsxs("div",{className:"flex items-start justify-between gap-4",children:[l.jsxs("div",{children:[l.jsx("h2",{className:"text-2xl font-bold mb-2",children:"🎨 Stylesheet Builder"}),l.jsx("p",{className:"text-indigo-100",children:"Build a cohesive stylesheet: define brand colors, buttons, cards, alerts, and form states. The 6 cards below are preview surfaces driven by your system colors."})]}),l.jsx(mg,{onExport:N?be:()=>{z("css"),fo()},onExportHtml:N?tt:()=>{z("html"),fo()},onBuyAIPrompt:Ad,submitStyle:{background:`linear-gradient(135deg, ${n.submit.bg}, ${n.submit.hover})`},onEmailRequired:N?null:fo})]})}),l.jsx("div",{className:"mb-6",children:l.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg shadow-sm border-2 border-blue-200",children:[l.jsx("h3",{className:"text-lg font-semibold mb-2 text-gray-800 flex items-center",children:"🎨 Card Background Gradient & Themes"}),l.jsx("div",{className:"mb-3 p-3 rounded-md bg-white/70 border border-blue-200 text-xs text-blue-900",children:"These controls color the six cards below. Toggle gradient on/off and pick a theme or your custom color."}),l.jsx("p",{className:"text-sm text-blue-700 mb-4 font-medium",children:"Choose a gradient theme to set cohesive colors for all cards, buttons, and alerts. Then fine-tune individual components below!"}),l.jsx(Jh,{presets:Object.fromEntries(Object.entries(ve).filter(([P])=>P!=="custom")),selectedKey:i.selectedGradient,onSelect:P=>se("selectedGradient",P),pickerBaseColor:h,inlinePicker:{onOpen:()=>$e(!0)}}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-medium text-gray-600 mb-1",children:"Gradient Direction"}),l.jsxs("select",{value:i.direction,onChange:P=>se("direction",P.target.value),className:"w-full text-xs border border-gray-300 rounded px-2 py-1","data-testid":"gradient-direction",children:[l.jsx("option",{value:"to right",children:"→ Left to Right"}),l.jsx("option",{value:"to left",children:"← Right to Left"}),l.jsx("option",{value:"to bottom",children:"↓ Top to Bottom"}),l.jsx("option",{value:"to top",children:"↑ Bottom to Top"}),l.jsx("option",{value:"135deg",children:"↘ Diagonal"}),l.jsx("option",{value:"45deg",children:"↗ Diagonal Alt"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-medium text-gray-600 mb-1",children:"Gradient Effect"}),l.jsxs("div",{className:"flex items-center space-x-2",children:[l.jsx("button",{onClick:()=>se("enableGradient",!0),className:`px-3 py-2 text-xs font-medium rounded transition-all ${i.enableGradient?"bg-green-600 text-white":"bg-gray-200 text-gray-600 hover:bg-gray-300"}`,"data-testid":"gradient-enable",children:"Yes"}),l.jsx("button",{onClick:()=>se("enableGradient",!1),className:`px-3 py-2 text-xs font-medium rounded transition-all ${i.enableGradient?"bg-gray-200 text-gray-600 hover:bg-gray-300":"bg-red-600 text-white"}`,"data-testid":"gradient-disable",children:"No"})]}),l.jsx("p",{className:"text-xs text-gray-500 mt-1",children:i.enableGradient?"Smooth gradient backgrounds":"Solid color backgrounds"})]})]})]})}),l.jsx(Xh,{theme:Le.theme,buttonStyles:n,alertStyles:o,currentGradient:Le,onUpdateButtonStyle:I}),re&&l.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[l.jsx("div",{className:"absolute inset-0 bg-black/40",onClick:()=>$e(!1)}),l.jsxs("div",{className:"relative bg-white rounded-lg shadow-xl border max-w-xl w-full p-4",children:[l.jsxs("div",{className:"flex items-center justify-between mb-3",children:[l.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"Pick a base color"}),l.jsx("button",{onClick:()=>$e(!1),className:"text-gray-500 hover:text-gray-700",children:"✕"})]}),l.jsx(Od,{value:h||"#3b82f6",onChange:P=>{d(P)},onColorChange:(P,D,U)=>{d(U)},property:"backgroundColor",backgroundColor:"#ffffff",showVisualPicker:!0,showSliders:!0,presets:["#3b82f6","#ef4444","#10b981","#f59e0b","#8b5cf6","#0ea5e9","#111827","#e5e7eb"]}),l.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[l.jsx("button",{className:"px-4 py-2 rounded border",onClick:()=>$e(!1),children:"Cancel"}),l.jsx("button",{className:"px-4 py-2 rounded text-white",style:{background:`linear-gradient(135deg, ${n.submit.bg}, ${n.submit.hover})`},onClick:()=>{A("fromPicker",{base:h}),c(P=>({...P,selectedGradient:"fromPicker"})),$e(!1)},children:"Use this color"})]})]})]}),l.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6",children:[l.jsxs("div",{className:"xl:col-span-2 bg-white p-6 rounded-lg shadow-sm border",children:[l.jsx("div",{className:"flex items-center mb-6",children:l.jsx("h3",{className:"text-lg font-semibold text-gray-800 flex items-center",children:"🎯 Individual Card Controls"})}),l.jsx("div",{className:"grid grid-cols-3 md:grid-cols-6 gap-2 mb-6",children:Object.keys(t).map((P,D)=>l.jsxs("button",{onClick:()=>f(P),className:`p-3 rounded-lg border-2 text-sm font-medium transition-all ${p===P?"border-indigo-500 bg-indigo-50 text-indigo-700":"border-gray-200 hover:border-gray-300 text-gray-700"}`,style:{backgroundColor:p===P?void 0:t[P].backgroundColor},"data-testid":`select-${P}`,children:["Card ",D+1]},P))}),l.jsx(gg,{selectedCard:p,card:Hd,update:(P,D)=>E(p,P,D)})]}),l.jsx("div",{className:"space-y-6",children:l.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[l.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-800 flex items-center",children:"⚙️ General Settings"}),l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{children:[l.jsxs("label",{className:"block text-sm font-medium text-gray-600 mb-1",children:["Font Size: ",u.fontSize,"px"]}),l.jsx("input",{type:"range",min:"12",max:"18",value:u.fontSize,onChange:P=>ye("fontSize",parseInt(P.target.value)),className:"w-full","data-testid":"general-font-size"})]}),l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:"text-sm font-medium text-gray-600",children:"Shadows"}),l.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[l.jsx("input",{type:"checkbox",checked:u.shadows,onChange:P=>ye("shadows",P.target.checked),className:"sr-only peer","data-testid":"general-shadows"}),l.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"})]})]}),l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:"text-sm font-medium text-gray-600",children:"Animations"}),l.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[l.jsx("input",{type:"checkbox",checked:u.animations,onChange:P=>ye("animations",P.target.checked),className:"sr-only peer","data-testid":"general-animations"}),l.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"})]})]})]})]})})]}),l.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("h3",{className:"text-lg font-semibold text-gray-800 flex items-center",children:"👀 Live Preview - All 6 Cards"}),w&&l.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[l.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-2"}),"Loading..."]})]}),l.jsx("div",{className:"border rounded-lg overflow-hidden bg-gray-50",children:l.jsx(io,{htmlContent:$,cssContent:et,height:"800px",onLoad:O,onError:k,allowScripts:!1,className:"w-full"})}),l.jsx("div",{className:"mt-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg",children:l.jsxs("p",{className:"text-sm text-indigo-700",children:[l.jsx("strong",{children:"🎯 Export Ready:"})," Your CSS includes 6 individual card classes (.card-1, .card-2, .card-3, .card-4, .card-5, .card-6) plus complete button system and alert components. Perfect for any project!"]})}),x&&l.jsx("div",{className:"mt-4 p-3 bg-red-50 border border-red-200 rounded-md",children:l.jsx("p",{className:"text-sm text-red-600",children:x})})]}),l.jsx(hg,{isOpen:m,onClose:()=>b(!1),onSubmit:Bd,title:"Get Your Custom Stylesheet"}),C&&l.jsx(fg,{onClose:()=>T(!1),agentInstructions:po(),amount:"49.00",itemName:"ToggleBox AI Prompt",itemDescription:"Get the tailored AI prompt for your custom stylesheet"})]})},vg=({className:e=""})=>{const[t,r]=v.useState(""),[n,s]=v.useState("default"),[o,a]=v.useState("desktop"),[i,c]=v.useState(!1),[u,g]=v.useState(null),p={default:{name:"Default Template",description:"Standard layout with cards, buttons, and text elements",content:Dl()},blog:{name:"Blog Layout",description:"Article-style layout with headings and paragraphs",content:`
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
      `}},f={mobile:{width:"375px",height:"667px",name:"Mobile (375px)"},tablet:{width:"768px",height:"1024px",name:"Tablet (768px)"},desktop:{width:"100%",height:"700px",name:"Desktop (Full)"}},x=v.useCallback(m=>{g(null),r(m)},[]),y=v.useCallback(()=>{c(!1),g(null)},[]),w=v.useCallback(m=>{c(!1),g("Failed to load preview content"),console.error("Preview iframe error:",m)},[]),S=()=>{const m=new Blob([t],{type:"text/css"}),b=URL.createObjectURL(m),C=document.createElement("a");C.href=b,C.download=`${n}-styles.css`,C.click(),URL.revokeObjectURL(b)},h=p[n],d=f[o];return l.jsxs("div",{className:`style-playground ${e}`,"data-testid":"style-playground",children:[l.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border mb-6",children:[l.jsx("h2",{className:"text-2xl font-semibold mb-2 text-gray-800",children:"CSS Style Playground"}),l.jsx("p",{className:"text-gray-600",children:"Experiment with different layouts and CSS styles in real-time. Choose a template and start styling!"})]}),l.jsx("div",{className:"bg-white p-6 rounded-lg shadow-sm border mb-6",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-lg font-medium text-gray-700 mb-3",children:"Template"}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:Object.entries(p).map(([m,b])=>l.jsxs("button",{onClick:()=>s(m),className:`p-3 text-left rounded-lg border-2 transition-colors ${n===m?"border-blue-500 bg-blue-50":"border-gray-200 hover:border-gray-300"}`,"data-testid":`template-${m}`,children:[l.jsx("div",{className:"font-medium text-sm text-gray-800",children:b.name}),l.jsx("div",{className:"text-xs text-gray-600 mt-1",children:b.description})]},m))})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-lg font-medium text-gray-700 mb-3",children:"Viewport Size"}),l.jsx("div",{className:"space-y-2",children:Object.entries(f).map(([m,b])=>l.jsx("button",{onClick:()=>a(m),className:`w-full p-3 text-left rounded-lg border transition-colors ${o===m?"border-blue-500 bg-blue-50 text-blue-700":"border-gray-200 hover:border-gray-300"}`,"data-testid":`viewport-${m}`,children:b.name},m))})]})]})}),l.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-6",children:[l.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("h3",{className:"text-lg font-medium text-gray-800",children:"CSS Editor"}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx("button",{onClick:S,disabled:!t.trim(),className:"px-3 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors","data-testid":"export-css-button",children:"Export CSS"}),l.jsx("button",{onClick:()=>r(""),className:"px-3 py-2 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors","data-testid":"clear-css-button",children:"Clear"})]})]}),l.jsx("textarea",{value:t,onChange:m=>x(m.target.value),placeholder:`/* Start styling your ${h.name.toLowerCase()} */
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
}`,className:"w-full h-96 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm resize-none","data-testid":"css-editor"}),u&&l.jsx("div",{className:"mt-3 p-3 bg-red-50 border border-red-200 rounded-md",children:l.jsx("p",{className:"text-sm text-red-600",children:u})})]}),l.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsxs("h3",{className:"text-lg font-medium text-gray-800",children:["Preview - ",h.name]}),i&&l.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[l.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-2"}),"Loading..."]})]}),l.jsx("div",{className:"border rounded-lg overflow-hidden mx-auto",style:{width:d.width,maxWidth:"100%"},children:l.jsx(io,{htmlContent:h.content,cssContent:t,height:d.height,onLoad:y,onError:w,className:"w-full"})}),l.jsx("div",{className:"mt-4 p-3 bg-blue-50 rounded-md",children:l.jsxs("p",{className:"text-xs text-blue-700",children:[l.jsx("strong",{children:"Tip:"})," Try different CSS properties on elements with classes like",l.jsx("code",{className:"bg-blue-100 px-1 rounded",children:".preview-card"}),",",l.jsx("code",{className:"bg-blue-100 px-1 rounded",children:".preview-button"}),", and",l.jsx("code",{className:"bg-blue-100 px-1 rounded",children:".preview-text"})," to see instant results."]})})]})]})]})};function yg(){const{token:e}=Km(),t=Pd(),[r,n]=v.useState("verifying"),[s,o]=v.useState(""),[a,i]=v.useState(null);v.useEffect(()=>{(async()=>{if(!e){n("error"),o("Invalid confirmation link");return}try{const x=Fd(e);if(x.success){const y=cg(e);y.success?(i(y.data),n("confirmed"),setTimeout(()=>{c(y.data)},1500)):(n("error"),o("Could not retrieve download data"))}else n("error"),o(x.error||"Invalid confirmation token")}catch{n("error"),o("An error occurred during confirmation")}})()},[e]);const c=f=>{if(f){if(f.css){const x=new Blob([f.css],{type:"text/css"});u(x,"six-cards-stylesheet.css")}if(f.html){const x=new Blob([f.html],{type:"text/html"});u(x,"index.html")}}},u=(f,x)=>{const y=URL.createObjectURL(f),w=document.createElement("a");w.href=y,w.download=x,w.click(),URL.revokeObjectURL(y)},g=()=>{t("/")},p=()=>{t("/interactive")};return r==="verifying"?l.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-md w-full p-8 text-center",children:[l.jsx("div",{className:"mb-6",children:l.jsx("div",{className:"mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center",children:l.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"})})}),l.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-2",children:"Confirming your email..."}),l.jsx("p",{className:"text-gray-600",children:"Please wait while we verify your download request."})]})}):r==="error"?l.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-md w-full p-8 text-center",children:[l.jsx("div",{className:"mb-6",children:l.jsx("div",{className:"mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center",children:l.jsx("span",{className:"text-2xl text-red-600",children:"❌"})})}),l.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-2",children:"Confirmation Failed"}),l.jsx("p",{className:"text-gray-600 mb-6",children:s}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{onClick:g,className:"flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",children:"Return Home"}),l.jsx("button",{onClick:p,className:"flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors",children:"Try Again"})]})]})}):r==="confirmed"?l.jsx("div",{className:"min-h-screen bg-gray-50 flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-white rounded-lg shadow-xl max-w-md w-full p-8 text-center",children:[l.jsx("div",{className:"mb-6",children:l.jsx("div",{className:"mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center",children:l.jsx("span",{className:"text-2xl",children:"✅"})})}),l.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-2",children:"Downloads Starting!"}),l.jsx("p",{className:"text-gray-600 mb-4",children:"Your custom CSS files are being downloaded now."}),a&&l.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 mb-6",children:[l.jsx("h3",{className:"font-medium text-gray-900 mb-2",children:"Files included:"}),l.jsxs("ul",{className:"text-sm text-gray-600 space-y-1",children:[l.jsx("li",{children:"• six-cards-stylesheet.css"}),l.jsx("li",{children:"• index.html (demo page)"}),l.jsx("li",{children:"• AI prompts available via separate purchase"})]})]}),l.jsxs("div",{className:"flex gap-3",children:[l.jsx("button",{onClick:g,className:"flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors",children:"Return Home"}),l.jsx("button",{onClick:()=>c(a),className:"flex-1 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors",children:"Download Again"})]})]})}):null}function bg(){const e=[{bg:"bg-gray-100",text:"text-gray-900",accent:"#111827",accentDark:"#000000"},{bg:"bg-blue-100",text:"text-blue-900",accent:"#2563eb",accentDark:"#1e3a8a"},{bg:"bg-green-100",text:"text-green-900",accent:"#16a34a",accentDark:"#14532d"},{bg:"bg-yellow-100",text:"text-yellow-900",accent:"#eab308",accentDark:"#854d0e"},{bg:"bg-pink-100",text:"text-pink-900",accent:"#db2777",accentDark:"#831843"},{bg:"bg-purple-100",text:"text-purple-900",accent:"#9333ea",accentDark:"#581c87"},{bg:"bg-orange-100",text:"text-orange-900",accent:"#ea580c",accentDark:"#7c2d12"},{bg:"bg-teal-100",text:"text-teal-900",accent:"#0d9488",accentDark:"#134e4a"}],[t,r]=v.useState(0),[n,s]=v.useState(!0),[o,a]=v.useState(0),[i,c]=v.useState(0);v.useEffect(()=>{if(!n)return;const x=setInterval(()=>{r(y=>(y+1)%e.length)},8e3);return()=>clearInterval(x)},[n,e.length]),v.useEffect(()=>{if(!n)return;const x=Date.now(),y=setInterval(()=>{const w=Date.now()-x+t*8e3,S=Math.min(w/(8e3*e.length)*100,100);a(S)},50);return()=>clearInterval(y)},[n,t]),v.useEffect(()=>{const x=setInterval(()=>{c(y=>(y+1)%e.length)},2500);return()=>clearInterval(x)},[]);const u=(x,y,w=.5)=>{const S=N=>{const R=N.replace("#",""),F=parseInt(R,16);return{r:F>>16&255,g:F>>8&255,b:F&255}},h=N=>N.toString(16).padStart(2,"0"),d=S(x),m=S(y),b=Math.round(d.r*(1-w)+m.r*w),C=Math.round(d.g*(1-w)+m.g*w),T=Math.round(d.b*(1-w)+m.b*w);return`#${h(b)}${h(C)}${h(T)}`},g=e[t],p=e[(t+1)%e.length],f=e[i];return l.jsxs("div",{className:`min-h-screen flex flex-col transition-colors duration-1000 ${g.bg} ${g.text} font-sans`,children:[l.jsxs("div",{className:"flex items-center justify-between px-12 py-4 border-b border-gray-200 relative",children:[e.map((x,y)=>l.jsx("div",{onClick:()=>{r(y),s(!1)},className:`w-10 h-10 rounded cursor-pointer border ${y===t?"ring-2 ring-offset-2 ring-gray-800":""} ${x.bg}`},y)),l.jsx("div",{onClick:()=>s(!0),className:"w-16 h-10 flex items-center justify-center rounded cursor-pointer border bg-black text-white text-xs font-medium",children:"Re-start"}),n&&l.jsx("div",{className:"absolute -bottom-2 left-0 w-full h-2 bg-gray-200 overflow-hidden",children:l.jsx("div",{className:"h-2 transition-[width] duration-100 linear",style:{width:`${o}%`,background:`linear-gradient(to right, ${g.accent}, ${p.accent})`}})})]}),l.jsx("p",{className:"text-center text-xs text-gray-500 mt-4",children:"Tip: Click a color to stop rotation. Use the black block to restart."}),l.jsxs("section",{className:"flex flex-col items-center justify-center text-center py-20 px-6",children:[l.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-4 tracking-tight",children:"Design your site’s color system in minutes"}),l.jsx("p",{className:"text-xl md:text-2xl opacity-80 mb-8",children:"Build a production‑ready stylesheet with six cards, button states, alerts, badges, forms and more — then export."}),l.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[l.jsx(tr,{to:"/interactive",className:"rounded-xl px-8 py-4 text-lg text-white",style:{backgroundColor:g.accentDark},children:"Try the Stylesheet Builder →"}),l.jsx(tr,{to:"/color-picker",className:"rounded-xl px-8 py-4 text-lg border",style:{borderColor:g.accentDark,color:g.accentDark},children:"Start with the Color Picker (free export)"})]}),l.jsx("div",{className:"mt-12 max-w-5xl w-full border rounded-xl shadow-sm bg-white",children:l.jsx("div",{className:"rounded-xl p-6",children:l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[l.jsxs("div",{className:"p-6 rounded-lg border text-left",children:[l.jsx("h3",{className:"font-semibold mb-1",children:"Six Card Surfaces"}),l.jsx("p",{className:"text-sm opacity-80",children:"Preview typography, spacing and gradients across six card variations."})]}),l.jsxs("div",{className:"p-6 rounded-lg border text-left",children:[l.jsx("h3",{className:"font-semibold mb-1",children:"Buttons & Alerts"}),l.jsx("p",{className:"text-sm opacity-80",children:"Primary, secondary, submit, ok, delete with hover states — plus alert styles."})]}),l.jsxs("div",{className:"p-6 rounded-lg border text-left",children:[l.jsx("h3",{className:"font-semibold mb-1",children:"Badges, Forms & Tabs"}),l.jsx("p",{className:"text-sm opacity-80",children:"Cohesive micro components that match your palette automatically."})]})]})})}),l.jsx("p",{className:"mt-4 text-sm opacity-70",children:"Color Picker lets you download a free HTML + CSS with your colors. For full component exports, use the Stylesheet Builder."})]}),l.jsxs("section",{className:"py-20 px-6 border-t border-gray-100",children:[l.jsx("h2",{className:"text-3xl font-semibold text-center mb-12",children:"Why teams pick ToggleBox"}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center",children:[{title:"🎨 LEGO Builder Architecture",desc:"Atomic components and clean CSS you can drop into any stack."},{title:"⚡ Live Preview",desc:"Everything updates as you tweak colors — no rebuilds required."},{title:"⬇️ One‑click Export",desc:"CSS + demo page ready for your repo. Optional AI integration guide."},{title:"🧪 Accessible by default",desc:"Automatic text contrast on cards; WCAG‑friendly choices."}].map((x,y)=>l.jsxs("div",{className:"p-6 rounded-xl shadow-md border text-white",style:{backgroundColor:y%2===0?g.accent:g.accentDark},children:[l.jsx("h3",{className:"font-medium text-lg mb-2",children:x.title}),l.jsx("p",{className:"opacity-90",children:x.desc})]},y))})]}),l.jsxs("section",{className:"py-20 px-6 bg-gray-50 border-t border-gray-100 text-center",children:[l.jsx("h2",{className:"text-3xl font-semibold mb-8",children:"See It in Action"}),l.jsx("div",{className:"max-w-4xl mx-auto border rounded-xl shadow-sm bg-white overflow-hidden",children:l.jsxs("div",{className:"p-6 text-left transition-colors duration-500",style:{borderColor:f.accent},children:[l.jsx("div",{className:"flex gap-6 border-b pb-3",style:{borderColor:u(f.accent,f.accentDark,.3)},children:["Overview","Stats","Settings"].map((x,y)=>l.jsxs("button",{className:`text-sm font-semibold pb-2 relative ${y===0?"":"text-gray-500"}`,style:y===0?{color:f.accent}:{},children:[x,y===0&&l.jsx("span",{className:"absolute left-0 right-0 -bottom-1 h-0.5",style:{background:`linear-gradient(90deg, ${f.accent}, ${f.accentDark})`}})]},x))}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-4",children:[l.jsxs("div",{className:"rounded-lg border p-4 shadow-sm transition-colors duration-500",style:{borderColor:u(f.accent,"#cccccc",.3)},children:[l.jsx("h3",{className:"font-semibold mb-1",children:"Demo Card"}),l.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Buttons, badges and progress all follow the active color."}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx("button",{className:"px-3 py-2 rounded text-white text-sm",style:{background:f.accentDark},children:"Primary"}),l.jsx("button",{className:"px-3 py-2 rounded text-sm",style:{color:f.accentDark,borderColor:f.accentDark,borderWidth:1,borderStyle:"solid"},children:"Secondary"})]})]}),l.jsxs("div",{className:"rounded-lg border p-4 shadow-sm transition-colors duration-500",style:{borderColor:u(f.accent,"#cccccc",.3)},children:[l.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[l.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-white",style:{background:f.accent},children:"New"}),l.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-white",style:{background:u(f.accent,"#22c55e",.4)},children:"Success"}),l.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-white",style:{background:u(f.accent,"#f59e0b",.4)},children:"Warning"})]}),l.jsx("div",{className:"w-full h-2 rounded bg-gray-200 overflow-hidden",children:l.jsx("div",{className:"h-2",style:{width:"66%",background:`linear-gradient(90deg, ${f.accent}, ${f.accentDark})`}})})]}),l.jsx("div",{className:"md:col-span-2 rounded-lg border p-4 shadow-sm transition-colors duration-500",style:{borderColor:u(f.accent,"#cccccc",.3)},children:l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[l.jsx("input",{className:"px-3 py-2 rounded border",placeholder:"Your email",style:{borderColor:u(f.accent,"#d1d5db",.3)}}),l.jsx("select",{className:"px-3 py-2 rounded border",style:{borderColor:u(f.accent,"#d1d5db",.3)},children:l.jsx("option",{children:"Pick an option"})}),l.jsx("button",{className:"px-4 py-2 rounded text-white",style:{background:`linear-gradient(135deg, ${f.accent}, ${f.accentDark})`},children:"Submit"})]})})]})]})}),l.jsx(tr,{to:"/interactive",className:"mt-8 inline-block rounded-xl px-8 py-4 text-lg text-white",style:{backgroundColor:g.accentDark},children:"Open Full Playground →"})]}),l.jsxs("section",{className:"py-20 px-6 text-center",children:[l.jsx("h2",{className:"text-4xl font-bold mb-6",children:"Every website starts with the right colors."}),l.jsx("div",{className:"flex flex-col md:flex-row gap-4 justify-center",children:l.jsx(tr,{to:"/interactive",className:"rounded-xl px-8 py-4 text-lg text-white",style:{backgroundColor:g.accentDark},children:"Start Free →"})})]}),l.jsxs("footer",{className:"py-10 px-6 bg-gray-900 text-gray-400 text-center text-sm",children:[l.jsx("p",{className:"mb-4",children:"ToggleBox — Real-time CSS Preview Engine"}),l.jsxs("div",{className:"flex gap-6 justify-center",children:[l.jsx("a",{href:"#",className:"hover:text-white",children:"About"}),l.jsx("a",{href:"#",className:"hover:text-white",children:"Docs"}),l.jsx("a",{href:"#",className:"hover:text-white",children:"GitHub"}),l.jsx("a",{href:"#",className:"hover:text-white",children:"Contact"})]})]})]})}function wg(){return l.jsx(yh,{children:l.jsxs("div",{className:"min-h-screen bg-gray-100",children:[l.jsx(Nh,{}),l.jsx("div",{className:"container mx-auto py-8",children:l.jsxs(dh,{children:[l.jsx(kt,{path:"/",element:l.jsx(bg,{})}),l.jsx(kt,{path:"/preview",element:l.jsx(Mh,{})}),l.jsx(kt,{path:"/interactive",element:l.jsx(xg,{})}),l.jsx(kt,{path:"/playground",element:l.jsx(vg,{})}),l.jsx(kt,{path:"/color-picker",element:l.jsx(Kh,{})}),l.jsx(kt,{path:"/template",element:l.jsx(Eh,{})}),l.jsx(kt,{path:"/confirm/:token",element:l.jsx(yg,{})})]})})]})})}Vo.createRoot(document.getElementById("root")).render(l.jsx(gc.StrictMode,{children:l.jsx(wg,{})}));
