function Ld(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const s in n)if(s!=="default"&&!(s in e)){const o=Object.getOwnPropertyDescriptor(n,s);o&&Object.defineProperty(e,s,o.get?o:{enumerable:!0,get:()=>n[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();function Rd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ji={exports:{}},As={},Zi={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $n=Symbol.for("react.element"),Id=Symbol.for("react.portal"),zd=Symbol.for("react.fragment"),Md=Symbol.for("react.strict_mode"),Dd=Symbol.for("react.profiler"),Od=Symbol.for("react.provider"),Fd=Symbol.for("react.context"),Ad=Symbol.for("react.forward_ref"),Bd=Symbol.for("react.suspense"),Ud=Symbol.for("react.memo"),Hd=Symbol.for("react.lazy"),$a=Symbol.iterator;function Vd(e){return e===null||typeof e!="object"?null:(e=$a&&e[$a]||e["@@iterator"],typeof e=="function"?e:null)}var qi={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ec=Object.assign,tc={};function zr(e,t,r){this.props=e,this.context=t,this.refs=tc,this.updater=r||qi}zr.prototype.isReactComponent={};zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function rc(){}rc.prototype=zr.prototype;function zl(e,t,r){this.props=e,this.context=t,this.refs=tc,this.updater=r||qi}var Ml=zl.prototype=new rc;Ml.constructor=zl;ec(Ml,zr.prototype);Ml.isPureReactComponent=!0;var _a=Array.isArray,nc=Object.prototype.hasOwnProperty,Dl={current:null},sc={key:!0,ref:!0,__self:!0,__source:!0};function oc(e,t,r){var n,s={},o=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)nc.call(t,n)&&!sc.hasOwnProperty(n)&&(s[n]=t[n]);var i=arguments.length-2;if(i===1)s.children=r;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(n in i=e.defaultProps,i)s[n]===void 0&&(s[n]=i[n]);return{$$typeof:$n,type:e,key:o,ref:l,props:s,_owner:Dl.current}}function Wd(e,t){return{$$typeof:$n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Ol(e){return typeof e=="object"&&e!==null&&e.$$typeof===$n}function Gd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var La=/\/+/g;function ao(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Gd(""+e.key):t.toString(36)}function rs(e,t,r,n,s){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case $n:case Id:l=!0}}if(l)return l=e,s=s(l),e=n===""?"."+ao(l,0):n,_a(s)?(r="",e!=null&&(r=e.replace(La,"$&/")+"/"),rs(s,t,r,"",function(u){return u})):s!=null&&(Ol(s)&&(s=Wd(s,r+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(La,"$&/")+"/")+e)),t.push(s)),1;if(l=0,n=n===""?".":n+":",_a(e))for(var i=0;i<e.length;i++){o=e[i];var c=n+ao(o,i);l+=rs(o,t,r,c,s)}else if(c=Vd(e),typeof c=="function")for(e=c.call(e),i=0;!(o=e.next()).done;)o=o.value,c=n+ao(o,i++),l+=rs(o,t,r,c,s);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function On(e,t,r){if(e==null)return e;var n=[],s=0;return rs(e,n,"","",function(o){return t.call(r,o,s++)}),n}function Qd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var be={current:null},ns={transition:null},Yd={ReactCurrentDispatcher:be,ReactCurrentBatchConfig:ns,ReactCurrentOwner:Dl};function lc(){throw Error("act(...) is not supported in production builds of React.")}O.Children={map:On,forEach:function(e,t,r){On(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return On(e,function(){t++}),t},toArray:function(e){return On(e,function(t){return t})||[]},only:function(e){if(!Ol(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=zr;O.Fragment=zd;O.Profiler=Dd;O.PureComponent=zl;O.StrictMode=Md;O.Suspense=Bd;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yd;O.act=lc;O.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=ec({},e.props),s=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Dl.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)nc.call(t,c)&&!sc.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){i=Array(c);for(var u=0;u<c;u++)i[u]=arguments[u+2];n.children=i}return{$$typeof:$n,type:e.type,key:s,ref:o,props:n,_owner:l}};O.createContext=function(e){return e={$$typeof:Fd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Od,_context:e},e.Consumer=e};O.createElement=oc;O.createFactory=function(e){var t=oc.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Ad,render:e}};O.isValidElement=Ol;O.lazy=function(e){return{$$typeof:Hd,_payload:{_status:-1,_result:e},_init:Qd}};O.memo=function(e,t){return{$$typeof:Ud,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=ns.transition;ns.transition={};try{e()}finally{ns.transition=t}};O.unstable_act=lc;O.useCallback=function(e,t){return be.current.useCallback(e,t)};O.useContext=function(e){return be.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return be.current.useDeferredValue(e)};O.useEffect=function(e,t){return be.current.useEffect(e,t)};O.useId=function(){return be.current.useId()};O.useImperativeHandle=function(e,t,r){return be.current.useImperativeHandle(e,t,r)};O.useInsertionEffect=function(e,t){return be.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return be.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return be.current.useMemo(e,t)};O.useReducer=function(e,t,r){return be.current.useReducer(e,t,r)};O.useRef=function(e){return be.current.useRef(e)};O.useState=function(e){return be.current.useState(e)};O.useSyncExternalStore=function(e,t,r){return be.current.useSyncExternalStore(e,t,r)};O.useTransition=function(){return be.current.useTransition()};O.version="18.3.1";Zi.exports=O;var y=Zi.exports;const ac=Rd(y),Kd=Ld({__proto__:null,default:ac},[y]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xd=y,Jd=Symbol.for("react.element"),Zd=Symbol.for("react.fragment"),qd=Object.prototype.hasOwnProperty,ep=Xd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tp={key:!0,ref:!0,__self:!0,__source:!0};function ic(e,t,r){var n,s={},o=null,l=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)qd.call(t,n)&&!tp.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)s[n]===void 0&&(s[n]=t[n]);return{$$typeof:Jd,type:e,key:o,ref:l,props:s,_owner:ep.current}}As.Fragment=Zd;As.jsx=ic;As.jsxs=ic;Ji.exports=As;var a=Ji.exports,Do={},cc={exports:{}},Le={},uc={exports:{}},dc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,M){var k=T.length;T.push(M);e:for(;0<k;){var $=k-1>>>1,I=T[$];if(0<s(I,M))T[$]=M,T[k]=I,k=$;else break e}}function r(T){return T.length===0?null:T[0]}function n(T){if(T.length===0)return null;var M=T[0],k=T.pop();if(k!==M){T[0]=k;e:for(var $=0,I=T.length,U=I>>>1;$<U;){var de=2*($+1)-1,ke=T[de],E=de+1,z=T[E];if(0>s(ke,k))E<I&&0>s(z,ke)?(T[$]=z,T[E]=k,$=E):(T[$]=ke,T[de]=k,$=de);else if(E<I&&0>s(z,k))T[$]=z,T[E]=k,$=E;else break e}}return M}function s(T,M){var k=T.sortIndex-M.sortIndex;return k!==0?k:T.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,i=l.now();e.unstable_now=function(){return l.now()-i}}var c=[],u=[],g=1,m=null,h=3,v=!1,x=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(T){for(var M=r(u);M!==null;){if(M.callback===null)n(u);else if(M.startTime<=T)n(u),M.sortIndex=M.expirationTime,t(c,M);else break;M=r(u)}}function b(T){if(w=!1,p(T),!x)if(r(c)!==null)x=!0,ot(C);else{var M=r(u);M!==null&&Be(b,M.startTime-T)}}function C(T,M){x=!1,w&&(w=!1,f(L),L=-1),v=!0;var k=h;try{for(p(M),m=r(c);m!==null&&(!(m.expirationTime>M)||T&&!G());){var $=m.callback;if(typeof $=="function"){m.callback=null,h=m.priorityLevel;var I=$(m.expirationTime<=M);M=e.unstable_now(),typeof I=="function"?m.callback=I:m===r(c)&&n(c),p(M)}else n(c);m=r(c)}if(m!==null)var U=!0;else{var de=r(u);de!==null&&Be(b,de.startTime-M),U=!1}return U}finally{m=null,h=k,v=!1}}var P=!1,N=null,L=-1,F=5,D=-1;function G(){return!(e.unstable_now()-D<F)}function st(){if(N!==null){var T=e.unstable_now();D=T;var M=!0;try{M=N(!0,T)}finally{M?Je():(P=!1,N=null)}}else P=!1}var Je;if(typeof d=="function")Je=function(){d(st)};else if(typeof MessageChannel<"u"){var ar=new MessageChannel,Ar=ar.port2;ar.port1.onmessage=st,Je=function(){Ar.postMessage(null)}}else Je=function(){S(st,0)};function ot(T){N=T,P||(P=!0,Je())}function Be(T,M){L=S(function(){T(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,ot(C))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var M=3;break;default:M=h}var k=h;h=M;try{return T()}finally{h=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,M){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var k=h;h=T;try{return M()}finally{h=k}},e.unstable_scheduleCallback=function(T,M,k){var $=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?$+k:$):k=$,T){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=k+I,T={id:g++,callback:M,priorityLevel:T,startTime:k,expirationTime:I,sortIndex:-1},k>$?(T.sortIndex=k,t(u,T),r(c)===null&&T===r(u)&&(w?(f(L),L=-1):w=!0,Be(b,k-$))):(T.sortIndex=I,t(c,T),x||v||(x=!0,ot(C))),T},e.unstable_shouldYield=G,e.unstable_wrapCallback=function(T){var M=h;return function(){var k=h;h=M;try{return T.apply(this,arguments)}finally{h=k}}}})(dc);uc.exports=dc;var rp=uc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np=y,_e=rp;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pc=new Set,dn={};function sr(e,t){Er(e,t),Er(e+"Capture",t)}function Er(e,t){for(dn[e]=t,e=0;e<t.length;e++)pc.add(t[e])}var ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oo=Object.prototype.hasOwnProperty,sp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ra={},Ia={};function op(e){return Oo.call(Ia,e)?!0:Oo.call(Ra,e)?!1:sp.test(e)?Ia[e]=!0:(Ra[e]=!0,!1)}function lp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ap(e,t,r,n){if(t===null||typeof t>"u"||lp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function we(e,t,r,n,s,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=s,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ue[e]=new we(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ue[t]=new we(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ue[e]=new we(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ue[e]=new we(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ue[e]=new we(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ue[e]=new we(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ue[e]=new we(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ue[e]=new we(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ue[e]=new we(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fl=/[\-:]([a-z])/g;function Al(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fl,Al);ue[t]=new we(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fl,Al);ue[t]=new we(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fl,Al);ue[t]=new we(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ue[e]=new we(e,1,!1,e.toLowerCase(),null,!1,!1)});ue.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ue[e]=new we(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bl(e,t,r,n){var s=ue.hasOwnProperty(t)?ue[t]:null;(s!==null?s.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ap(t,r,s,n)&&(r=null),n||s===null?op(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):s.mustUseProperty?e[s.propertyName]=r===null?s.type===3?!1:"":r:(t=s.attributeName,n=s.attributeNamespace,r===null?e.removeAttribute(t):(s=s.type,r=s===3||s===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var vt=np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fn=Symbol.for("react.element"),cr=Symbol.for("react.portal"),ur=Symbol.for("react.fragment"),Ul=Symbol.for("react.strict_mode"),Fo=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),mc=Symbol.for("react.context"),Hl=Symbol.for("react.forward_ref"),Ao=Symbol.for("react.suspense"),Bo=Symbol.for("react.suspense_list"),Vl=Symbol.for("react.memo"),yt=Symbol.for("react.lazy"),hc=Symbol.for("react.offscreen"),za=Symbol.iterator;function Hr(e){return e===null||typeof e!="object"?null:(e=za&&e[za]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,io;function Jr(e){if(io===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);io=t&&t[1]||""}return`
`+io+e}var co=!1;function uo(e,t){if(!e||co)return"";co=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),o=n.stack.split(`
`),l=s.length-1,i=o.length-1;1<=l&&0<=i&&s[l]!==o[i];)i--;for(;1<=l&&0<=i;l--,i--)if(s[l]!==o[i]){if(l!==1||i!==1)do if(l--,i--,0>i||s[l]!==o[i]){var c=`
`+s[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=i);break}}}finally{co=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Jr(e):""}function ip(e){switch(e.tag){case 5:return Jr(e.type);case 16:return Jr("Lazy");case 13:return Jr("Suspense");case 19:return Jr("SuspenseList");case 0:case 2:case 15:return e=uo(e.type,!1),e;case 11:return e=uo(e.type.render,!1),e;case 1:return e=uo(e.type,!0),e;default:return""}}function Uo(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ur:return"Fragment";case cr:return"Portal";case Fo:return"Profiler";case Ul:return"StrictMode";case Ao:return"Suspense";case Bo:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mc:return(e.displayName||"Context")+".Consumer";case fc:return(e._context.displayName||"Context")+".Provider";case Hl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Vl:return t=e.displayName||null,t!==null?t:Uo(e.type)||"Memo";case yt:t=e._payload,e=e._init;try{return Uo(e(t))}catch{}}return null}function cp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uo(t);case 8:return t===Ul?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function zt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function up(e){var t=gc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var s=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(l){n=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function An(e){e._valueTracker||(e._valueTracker=up(e))}function vc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=gc(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function ms(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ho(e,t){var r=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Ma(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=zt(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function xc(e,t){t=t.checked,t!=null&&Bl(e,"checked",t,!1)}function Vo(e,t){xc(e,t);var r=zt(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Wo(e,t.type,r):t.hasOwnProperty("defaultValue")&&Wo(e,t.type,zt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Da(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Wo(e,t,r){(t!=="number"||ms(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Zr=Array.isArray;function wr(e,t,r,n){if(e=e.options,t){t={};for(var s=0;s<r.length;s++)t["$"+r[s]]=!0;for(r=0;r<e.length;r++)s=t.hasOwnProperty("$"+e[r].value),e[r].selected!==s&&(e[r].selected=s),s&&n&&(e[r].defaultSelected=!0)}else{for(r=""+zt(r),t=null,s=0;s<e.length;s++){if(e[s].value===r){e[s].selected=!0,n&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Go(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oa(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(j(92));if(Zr(r)){if(1<r.length)throw Error(j(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:zt(r)}}function yc(e,t){var r=zt(t.value),n=zt(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Fa(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function bc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qo(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?bc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bn,wc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,s){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bn=Bn||document.createElement("div"),Bn.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bn.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function pn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var tn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dp=["Webkit","ms","Moz","O"];Object.keys(tn).forEach(function(e){dp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),tn[t]=tn[e]})});function kc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||tn.hasOwnProperty(e)&&tn[e]?(""+t).trim():t+"px"}function Cc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,s=kc(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,s):e[r]=s}}var pp=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yo(e,t){if(t){if(pp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Ko(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xo=null;function Wl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jo=null,kr=null,Cr=null;function Aa(e){if(e=Rn(e)){if(typeof Jo!="function")throw Error(j(280));var t=e.stateNode;t&&(t=Ws(t),Jo(e.stateNode,e.type,t))}}function Sc(e){kr?Cr?Cr.push(e):Cr=[e]:kr=e}function jc(){if(kr){var e=kr,t=Cr;if(Cr=kr=null,Aa(e),t)for(e=0;e<t.length;e++)Aa(t[e])}}function Nc(e,t){return e(t)}function Ec(){}var po=!1;function Pc(e,t,r){if(po)return e(t,r);po=!0;try{return Nc(e,t,r)}finally{po=!1,(kr!==null||Cr!==null)&&(Ec(),jc())}}function fn(e,t){var r=e.stateNode;if(r===null)return null;var n=Ws(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(j(231,t,typeof r));return r}var Zo=!1;if(ft)try{var Vr={};Object.defineProperty(Vr,"passive",{get:function(){Zo=!0}}),window.addEventListener("test",Vr,Vr),window.removeEventListener("test",Vr,Vr)}catch{Zo=!1}function fp(e,t,r,n,s,o,l,i,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(g){this.onError(g)}}var rn=!1,hs=null,gs=!1,qo=null,mp={onError:function(e){rn=!0,hs=e}};function hp(e,t,r,n,s,o,l,i,c){rn=!1,hs=null,fp.apply(mp,arguments)}function gp(e,t,r,n,s,o,l,i,c){if(hp.apply(this,arguments),rn){if(rn){var u=hs;rn=!1,hs=null}else throw Error(j(198));gs||(gs=!0,qo=u)}}function or(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Tc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ba(e){if(or(e)!==e)throw Error(j(188))}function vp(e){var t=e.alternate;if(!t){if(t=or(e),t===null)throw Error(j(188));return t!==e?null:e}for(var r=e,n=t;;){var s=r.return;if(s===null)break;var o=s.alternate;if(o===null){if(n=s.return,n!==null){r=n;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===r)return Ba(s),e;if(o===n)return Ba(s),t;o=o.sibling}throw Error(j(188))}if(r.return!==n.return)r=s,n=o;else{for(var l=!1,i=s.child;i;){if(i===r){l=!0,r=s,n=o;break}if(i===n){l=!0,n=s,r=o;break}i=i.sibling}if(!l){for(i=o.child;i;){if(i===r){l=!0,r=o,n=s;break}if(i===n){l=!0,n=o,r=s;break}i=i.sibling}if(!l)throw Error(j(189))}}if(r.alternate!==n)throw Error(j(190))}if(r.tag!==3)throw Error(j(188));return r.stateNode.current===r?e:t}function $c(e){return e=vp(e),e!==null?_c(e):null}function _c(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=_c(e);if(t!==null)return t;e=e.sibling}return null}var Lc=_e.unstable_scheduleCallback,Ua=_e.unstable_cancelCallback,xp=_e.unstable_shouldYield,yp=_e.unstable_requestPaint,re=_e.unstable_now,bp=_e.unstable_getCurrentPriorityLevel,Gl=_e.unstable_ImmediatePriority,Rc=_e.unstable_UserBlockingPriority,vs=_e.unstable_NormalPriority,wp=_e.unstable_LowPriority,Ic=_e.unstable_IdlePriority,Bs=null,rt=null;function kp(e){if(rt&&typeof rt.onCommitFiberRoot=="function")try{rt.onCommitFiberRoot(Bs,e,void 0,(e.current.flags&128)===128)}catch{}}var Ye=Math.clz32?Math.clz32:jp,Cp=Math.log,Sp=Math.LN2;function jp(e){return e>>>=0,e===0?32:31-(Cp(e)/Sp|0)|0}var Un=64,Hn=4194304;function qr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function xs(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,s=e.suspendedLanes,o=e.pingedLanes,l=r&268435455;if(l!==0){var i=l&~s;i!==0?n=qr(i):(o&=l,o!==0&&(n=qr(o)))}else l=r&~s,l!==0?n=qr(l):o!==0&&(n=qr(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&s)&&(s=n&-n,o=t&-t,s>=o||s===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Ye(t),s=1<<r,n|=e[r],t&=~s;return n}function Np(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ep(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,s=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ye(o),i=1<<l,c=s[l];c===-1?(!(i&r)||i&n)&&(s[l]=Np(i,t)):c<=t&&(e.expiredLanes|=i),o&=~i}}function el(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zc(){var e=Un;return Un<<=1,!(Un&4194240)&&(Un=64),e}function fo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function _n(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ye(t),e[t]=r}function Pp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var s=31-Ye(r),o=1<<s;t[s]=0,n[s]=-1,e[s]=-1,r&=~o}}function Ql(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Ye(r),s=1<<n;s&t|e[n]&t&&(e[n]|=t),r&=~s}}var H=0;function Mc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Dc,Yl,Oc,Fc,Ac,tl=!1,Vn=[],Nt=null,Et=null,Pt=null,mn=new Map,hn=new Map,wt=[],Tp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ha(e,t){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":Pt=null;break;case"pointerover":case"pointerout":mn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hn.delete(t.pointerId)}}function Wr(e,t,r,n,s,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[s]},t!==null&&(t=Rn(t),t!==null&&Yl(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function $p(e,t,r,n,s){switch(t){case"focusin":return Nt=Wr(Nt,e,t,r,n,s),!0;case"dragenter":return Et=Wr(Et,e,t,r,n,s),!0;case"mouseover":return Pt=Wr(Pt,e,t,r,n,s),!0;case"pointerover":var o=s.pointerId;return mn.set(o,Wr(mn.get(o)||null,e,t,r,n,s)),!0;case"gotpointercapture":return o=s.pointerId,hn.set(o,Wr(hn.get(o)||null,e,t,r,n,s)),!0}return!1}function Bc(e){var t=Qt(e.target);if(t!==null){var r=or(t);if(r!==null){if(t=r.tag,t===13){if(t=Tc(r),t!==null){e.blockedOn=t,Ac(e.priority,function(){Oc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ss(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=rl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Xo=n,r.target.dispatchEvent(n),Xo=null}else return t=Rn(r),t!==null&&Yl(t),e.blockedOn=r,!1;t.shift()}return!0}function Va(e,t,r){ss(e)&&r.delete(t)}function _p(){tl=!1,Nt!==null&&ss(Nt)&&(Nt=null),Et!==null&&ss(Et)&&(Et=null),Pt!==null&&ss(Pt)&&(Pt=null),mn.forEach(Va),hn.forEach(Va)}function Gr(e,t){e.blockedOn===t&&(e.blockedOn=null,tl||(tl=!0,_e.unstable_scheduleCallback(_e.unstable_NormalPriority,_p)))}function gn(e){function t(s){return Gr(s,e)}if(0<Vn.length){Gr(Vn[0],e);for(var r=1;r<Vn.length;r++){var n=Vn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Nt!==null&&Gr(Nt,e),Et!==null&&Gr(Et,e),Pt!==null&&Gr(Pt,e),mn.forEach(t),hn.forEach(t),r=0;r<wt.length;r++)n=wt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<wt.length&&(r=wt[0],r.blockedOn===null);)Bc(r),r.blockedOn===null&&wt.shift()}var Sr=vt.ReactCurrentBatchConfig,ys=!0;function Lp(e,t,r,n){var s=H,o=Sr.transition;Sr.transition=null;try{H=1,Kl(e,t,r,n)}finally{H=s,Sr.transition=o}}function Rp(e,t,r,n){var s=H,o=Sr.transition;Sr.transition=null;try{H=4,Kl(e,t,r,n)}finally{H=s,Sr.transition=o}}function Kl(e,t,r,n){if(ys){var s=rl(e,t,r,n);if(s===null)Co(e,t,n,bs,r),Ha(e,n);else if($p(s,e,t,r,n))n.stopPropagation();else if(Ha(e,n),t&4&&-1<Tp.indexOf(e)){for(;s!==null;){var o=Rn(s);if(o!==null&&Dc(o),o=rl(e,t,r,n),o===null&&Co(e,t,n,bs,r),o===s)break;s=o}s!==null&&n.stopPropagation()}else Co(e,t,n,null,r)}}var bs=null;function rl(e,t,r,n){if(bs=null,e=Wl(n),e=Qt(e),e!==null)if(t=or(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Tc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return bs=e,null}function Uc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bp()){case Gl:return 1;case Rc:return 4;case vs:case wp:return 16;case Ic:return 536870912;default:return 16}default:return 16}}var Ct=null,Xl=null,os=null;function Hc(){if(os)return os;var e,t=Xl,r=t.length,n,s="value"in Ct?Ct.value:Ct.textContent,o=s.length;for(e=0;e<r&&t[e]===s[e];e++);var l=r-e;for(n=1;n<=l&&t[r-n]===s[o-n];n++);return os=s.slice(e,1<n?1-n:void 0)}function ls(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function Wa(){return!1}function Re(e){function t(r,n,s,o,l){this._reactName=r,this._targetInst=s,this.type=n,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(r=e[i],this[i]=r?r(o):o[i]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Wn:Wa,this.isPropagationStopped=Wa,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),t}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=Re(Mr),Ln=Z({},Mr,{view:0,detail:0}),Ip=Re(Ln),mo,ho,Qr,Us=Z({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qr&&(Qr&&e.type==="mousemove"?(mo=e.screenX-Qr.screenX,ho=e.screenY-Qr.screenY):ho=mo=0,Qr=e),mo)},movementY:function(e){return"movementY"in e?e.movementY:ho}}),Ga=Re(Us),zp=Z({},Us,{dataTransfer:0}),Mp=Re(zp),Dp=Z({},Ln,{relatedTarget:0}),go=Re(Dp),Op=Z({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Fp=Re(Op),Ap=Z({},Mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Bp=Re(Ap),Up=Z({},Mr,{data:0}),Qa=Re(Up),Hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Wp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Wp[e])?!!t[e]:!1}function Zl(){return Gp}var Qp=Z({},Ln,{key:function(e){if(e.key){var t=Hp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ls(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Vp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zl,charCode:function(e){return e.type==="keypress"?ls(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ls(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Yp=Re(Qp),Kp=Z({},Us,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ya=Re(Kp),Xp=Z({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zl}),Jp=Re(Xp),Zp=Z({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),qp=Re(Zp),ef=Z({},Us,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tf=Re(ef),rf=[9,13,27,32],ql=ft&&"CompositionEvent"in window,nn=null;ft&&"documentMode"in document&&(nn=document.documentMode);var nf=ft&&"TextEvent"in window&&!nn,Vc=ft&&(!ql||nn&&8<nn&&11>=nn),Ka=" ",Xa=!1;function Wc(e,t){switch(e){case"keyup":return rf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dr=!1;function sf(e,t){switch(e){case"compositionend":return Gc(t);case"keypress":return t.which!==32?null:(Xa=!0,Ka);case"textInput":return e=t.data,e===Ka&&Xa?null:e;default:return null}}function of(e,t){if(dr)return e==="compositionend"||!ql&&Wc(e,t)?(e=Hc(),os=Xl=Ct=null,dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Vc&&t.locale!=="ko"?null:t.data;default:return null}}var lf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ja(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!lf[e.type]:t==="textarea"}function Qc(e,t,r,n){Sc(n),t=ws(t,"onChange"),0<t.length&&(r=new Jl("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var sn=null,vn=null;function af(e){su(e,0)}function Hs(e){var t=mr(e);if(vc(t))return e}function cf(e,t){if(e==="change")return t}var Yc=!1;if(ft){var vo;if(ft){var xo="oninput"in document;if(!xo){var Za=document.createElement("div");Za.setAttribute("oninput","return;"),xo=typeof Za.oninput=="function"}vo=xo}else vo=!1;Yc=vo&&(!document.documentMode||9<document.documentMode)}function qa(){sn&&(sn.detachEvent("onpropertychange",Kc),vn=sn=null)}function Kc(e){if(e.propertyName==="value"&&Hs(vn)){var t=[];Qc(t,vn,e,Wl(e)),Pc(af,t)}}function uf(e,t,r){e==="focusin"?(qa(),sn=t,vn=r,sn.attachEvent("onpropertychange",Kc)):e==="focusout"&&qa()}function df(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Hs(vn)}function pf(e,t){if(e==="click")return Hs(t)}function ff(e,t){if(e==="input"||e==="change")return Hs(t)}function mf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Xe=typeof Object.is=="function"?Object.is:mf;function xn(e,t){if(Xe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var s=r[n];if(!Oo.call(t,s)||!Xe(e[s],t[s]))return!1}return!0}function ei(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ti(e,t){var r=ei(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ei(r)}}function Xc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jc(){for(var e=window,t=ms();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ms(e.document)}return t}function ea(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hf(e){var t=Jc(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Xc(r.ownerDocument.documentElement,r)){if(n!==null&&ea(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=r.textContent.length,o=Math.min(n.start,s);n=n.end===void 0?o:Math.min(n.end,s),!e.extend&&o>n&&(s=n,n=o,o=s),s=ti(r,o);var l=ti(r,n);s&&l&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gf=ft&&"documentMode"in document&&11>=document.documentMode,pr=null,nl=null,on=null,sl=!1;function ri(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;sl||pr==null||pr!==ms(n)||(n=pr,"selectionStart"in n&&ea(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),on&&xn(on,n)||(on=n,n=ws(nl,"onSelect"),0<n.length&&(t=new Jl("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=pr)))}function Gn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var fr={animationend:Gn("Animation","AnimationEnd"),animationiteration:Gn("Animation","AnimationIteration"),animationstart:Gn("Animation","AnimationStart"),transitionend:Gn("Transition","TransitionEnd")},yo={},Zc={};ft&&(Zc=document.createElement("div").style,"AnimationEvent"in window||(delete fr.animationend.animation,delete fr.animationiteration.animation,delete fr.animationstart.animation),"TransitionEvent"in window||delete fr.transitionend.transition);function Vs(e){if(yo[e])return yo[e];if(!fr[e])return e;var t=fr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Zc)return yo[e]=t[r];return e}var qc=Vs("animationend"),eu=Vs("animationiteration"),tu=Vs("animationstart"),ru=Vs("transitionend"),nu=new Map,ni="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){nu.set(e,t),sr(t,[e])}for(var bo=0;bo<ni.length;bo++){var wo=ni[bo],vf=wo.toLowerCase(),xf=wo[0].toUpperCase()+wo.slice(1);Dt(vf,"on"+xf)}Dt(qc,"onAnimationEnd");Dt(eu,"onAnimationIteration");Dt(tu,"onAnimationStart");Dt("dblclick","onDoubleClick");Dt("focusin","onFocus");Dt("focusout","onBlur");Dt(ru,"onTransitionEnd");Er("onMouseEnter",["mouseout","mouseover"]);Er("onMouseLeave",["mouseout","mouseover"]);Er("onPointerEnter",["pointerout","pointerover"]);Er("onPointerLeave",["pointerout","pointerover"]);sr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));sr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));sr("onBeforeInput",["compositionend","keypress","textInput","paste"]);sr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));sr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var en="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yf=new Set("cancel close invalid load scroll toggle".split(" ").concat(en));function si(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,gp(n,t,void 0,e),e.currentTarget=null}function su(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],s=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var l=n.length-1;0<=l;l--){var i=n[l],c=i.instance,u=i.currentTarget;if(i=i.listener,c!==o&&s.isPropagationStopped())break e;si(s,i,u),o=c}else for(l=0;l<n.length;l++){if(i=n[l],c=i.instance,u=i.currentTarget,i=i.listener,c!==o&&s.isPropagationStopped())break e;si(s,i,u),o=c}}}if(gs)throw e=qo,gs=!1,qo=null,e}function Q(e,t){var r=t[cl];r===void 0&&(r=t[cl]=new Set);var n=e+"__bubble";r.has(n)||(ou(t,e,2,!1),r.add(n))}function ko(e,t,r){var n=0;t&&(n|=4),ou(r,e,n,t)}var Qn="_reactListening"+Math.random().toString(36).slice(2);function yn(e){if(!e[Qn]){e[Qn]=!0,pc.forEach(function(r){r!=="selectionchange"&&(yf.has(r)||ko(r,!1,e),ko(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qn]||(t[Qn]=!0,ko("selectionchange",!1,t))}}function ou(e,t,r,n){switch(Uc(t)){case 1:var s=Lp;break;case 4:s=Rp;break;default:s=Kl}r=s.bind(null,t,r,e),s=void 0,!Zo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),n?s!==void 0?e.addEventListener(t,r,{capture:!0,passive:s}):e.addEventListener(t,r,!0):s!==void 0?e.addEventListener(t,r,{passive:s}):e.addEventListener(t,r,!1)}function Co(e,t,r,n,s){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var i=n.stateNode.containerInfo;if(i===s||i.nodeType===8&&i.parentNode===s)break;if(l===4)for(l=n.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;l=l.return}for(;i!==null;){if(l=Qt(i),l===null)return;if(c=l.tag,c===5||c===6){n=o=l;continue e}i=i.parentNode}}n=n.return}Pc(function(){var u=o,g=Wl(r),m=[];e:{var h=nu.get(e);if(h!==void 0){var v=Jl,x=e;switch(e){case"keypress":if(ls(r)===0)break e;case"keydown":case"keyup":v=Yp;break;case"focusin":x="focus",v=go;break;case"focusout":x="blur",v=go;break;case"beforeblur":case"afterblur":v=go;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ga;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Mp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Jp;break;case qc:case eu:case tu:v=Fp;break;case ru:v=qp;break;case"scroll":v=Ip;break;case"wheel":v=tf;break;case"copy":case"cut":case"paste":v=Bp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Ya}var w=(t&4)!==0,S=!w&&e==="scroll",f=w?h!==null?h+"Capture":null:h;w=[];for(var d=u,p;d!==null;){p=d;var b=p.stateNode;if(p.tag===5&&b!==null&&(p=b,f!==null&&(b=fn(d,f),b!=null&&w.push(bn(d,b,p)))),S)break;d=d.return}0<w.length&&(h=new v(h,x,null,r,g),m.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&r!==Xo&&(x=r.relatedTarget||r.fromElement)&&(Qt(x)||x[mt]))break e;if((v||h)&&(h=g.window===g?g:(h=g.ownerDocument)?h.defaultView||h.parentWindow:window,v?(x=r.relatedTarget||r.toElement,v=u,x=x?Qt(x):null,x!==null&&(S=or(x),x!==S||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=u),v!==x)){if(w=Ga,b="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Ya,b="onPointerLeave",f="onPointerEnter",d="pointer"),S=v==null?h:mr(v),p=x==null?h:mr(x),h=new w(b,d+"leave",v,r,g),h.target=S,h.relatedTarget=p,b=null,Qt(g)===u&&(w=new w(f,d+"enter",x,r,g),w.target=p,w.relatedTarget=S,b=w),S=b,v&&x)t:{for(w=v,f=x,d=0,p=w;p;p=ir(p))d++;for(p=0,b=f;b;b=ir(b))p++;for(;0<d-p;)w=ir(w),d--;for(;0<p-d;)f=ir(f),p--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=ir(w),f=ir(f)}w=null}else w=null;v!==null&&oi(m,h,v,w,!1),x!==null&&S!==null&&oi(m,S,x,w,!0)}}e:{if(h=u?mr(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var C=cf;else if(Ja(h))if(Yc)C=ff;else{C=df;var P=uf}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=pf);if(C&&(C=C(e,u))){Qc(m,C,r,g);break e}P&&P(e,h,u),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Wo(h,"number",h.value)}switch(P=u?mr(u):window,e){case"focusin":(Ja(P)||P.contentEditable==="true")&&(pr=P,nl=u,on=null);break;case"focusout":on=nl=pr=null;break;case"mousedown":sl=!0;break;case"contextmenu":case"mouseup":case"dragend":sl=!1,ri(m,r,g);break;case"selectionchange":if(gf)break;case"keydown":case"keyup":ri(m,r,g)}var N;if(ql)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else dr?Wc(e,r)&&(L="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(L="onCompositionStart");L&&(Vc&&r.locale!=="ko"&&(dr||L!=="onCompositionStart"?L==="onCompositionEnd"&&dr&&(N=Hc()):(Ct=g,Xl="value"in Ct?Ct.value:Ct.textContent,dr=!0)),P=ws(u,L),0<P.length&&(L=new Qa(L,e,null,r,g),m.push({event:L,listeners:P}),N?L.data=N:(N=Gc(r),N!==null&&(L.data=N)))),(N=nf?sf(e,r):of(e,r))&&(u=ws(u,"onBeforeInput"),0<u.length&&(g=new Qa("onBeforeInput","beforeinput",null,r,g),m.push({event:g,listeners:u}),g.data=N))}su(m,t)})}function bn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ws(e,t){for(var r=t+"Capture",n=[];e!==null;){var s=e,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=fn(e,r),o!=null&&n.unshift(bn(e,o,s)),o=fn(e,t),o!=null&&n.push(bn(e,o,s))),e=e.return}return n}function ir(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function oi(e,t,r,n,s){for(var o=t._reactName,l=[];r!==null&&r!==n;){var i=r,c=i.alternate,u=i.stateNode;if(c!==null&&c===n)break;i.tag===5&&u!==null&&(i=u,s?(c=fn(r,o),c!=null&&l.unshift(bn(r,c,i))):s||(c=fn(r,o),c!=null&&l.push(bn(r,c,i)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var bf=/\r\n?/g,wf=/\u0000|\uFFFD/g;function li(e){return(typeof e=="string"?e:""+e).replace(bf,`
`).replace(wf,"")}function Yn(e,t,r){if(t=li(t),li(e)!==t&&r)throw Error(j(425))}function ks(){}var ol=null,ll=null;function al(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var il=typeof setTimeout=="function"?setTimeout:void 0,kf=typeof clearTimeout=="function"?clearTimeout:void 0,ai=typeof Promise=="function"?Promise:void 0,Cf=typeof queueMicrotask=="function"?queueMicrotask:typeof ai<"u"?function(e){return ai.resolve(null).then(e).catch(Sf)}:il;function Sf(e){setTimeout(function(){throw e})}function So(e,t){var r=t,n=0;do{var s=r.nextSibling;if(e.removeChild(r),s&&s.nodeType===8)if(r=s.data,r==="/$"){if(n===0){e.removeChild(s),gn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=s}while(r);gn(t)}function Tt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ii(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Dr=Math.random().toString(36).slice(2),tt="__reactFiber$"+Dr,wn="__reactProps$"+Dr,mt="__reactContainer$"+Dr,cl="__reactEvents$"+Dr,jf="__reactListeners$"+Dr,Nf="__reactHandles$"+Dr;function Qt(e){var t=e[tt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[mt]||r[tt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ii(e);e!==null;){if(r=e[tt])return r;e=ii(e)}return t}e=r,r=e.parentNode}return null}function Rn(e){return e=e[tt]||e[mt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function Ws(e){return e[wn]||null}var ul=[],hr=-1;function Ot(e){return{current:e}}function Y(e){0>hr||(e.current=ul[hr],ul[hr]=null,hr--)}function W(e,t){hr++,ul[hr]=e.current,e.current=t}var Mt={},ve=Ot(Mt),je=Ot(!1),qt=Mt;function Pr(e,t){var r=e.type.contextTypes;if(!r)return Mt;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in r)s[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Ne(e){return e=e.childContextTypes,e!=null}function Cs(){Y(je),Y(ve)}function ci(e,t,r){if(ve.current!==Mt)throw Error(j(168));W(ve,t),W(je,r)}function lu(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var s in n)if(!(s in t))throw Error(j(108,cp(e)||"Unknown",s));return Z({},r,n)}function Ss(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mt,qt=ve.current,W(ve,e),W(je,je.current),!0}function ui(e,t,r){var n=e.stateNode;if(!n)throw Error(j(169));r?(e=lu(e,t,qt),n.__reactInternalMemoizedMergedChildContext=e,Y(je),Y(ve),W(ve,e)):Y(je),W(je,r)}var ct=null,Gs=!1,jo=!1;function au(e){ct===null?ct=[e]:ct.push(e)}function Ef(e){Gs=!0,au(e)}function Ft(){if(!jo&&ct!==null){jo=!0;var e=0,t=H;try{var r=ct;for(H=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}ct=null,Gs=!1}catch(s){throw ct!==null&&(ct=ct.slice(e+1)),Lc(Gl,Ft),s}finally{H=t,jo=!1}}return null}var gr=[],vr=0,js=null,Ns=0,ze=[],Me=0,er=null,ut=1,dt="";function Vt(e,t){gr[vr++]=Ns,gr[vr++]=js,js=e,Ns=t}function iu(e,t,r){ze[Me++]=ut,ze[Me++]=dt,ze[Me++]=er,er=e;var n=ut;e=dt;var s=32-Ye(n)-1;n&=~(1<<s),r+=1;var o=32-Ye(t)+s;if(30<o){var l=s-s%5;o=(n&(1<<l)-1).toString(32),n>>=l,s-=l,ut=1<<32-Ye(t)+s|r<<s|n,dt=o+e}else ut=1<<o|r<<s|n,dt=e}function ta(e){e.return!==null&&(Vt(e,1),iu(e,1,0))}function ra(e){for(;e===js;)js=gr[--vr],gr[vr]=null,Ns=gr[--vr],gr[vr]=null;for(;e===er;)er=ze[--Me],ze[Me]=null,dt=ze[--Me],ze[Me]=null,ut=ze[--Me],ze[Me]=null}var $e=null,Te=null,K=!1,Qe=null;function cu(e,t){var r=De(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function di(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,$e=e,Te=Tt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,$e=e,Te=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=er!==null?{id:ut,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=De(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,$e=e,Te=null,!0):!1;default:return!1}}function dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function pl(e){if(K){var t=Te;if(t){var r=t;if(!di(e,t)){if(dl(e))throw Error(j(418));t=Tt(r.nextSibling);var n=$e;t&&di(e,t)?cu(n,r):(e.flags=e.flags&-4097|2,K=!1,$e=e)}}else{if(dl(e))throw Error(j(418));e.flags=e.flags&-4097|2,K=!1,$e=e}}}function pi(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function Kn(e){if(e!==$e)return!1;if(!K)return pi(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!al(e.type,e.memoizedProps)),t&&(t=Te)){if(dl(e))throw uu(),Error(j(418));for(;t;)cu(e,t),t=Tt(t.nextSibling)}if(pi(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Te=Tt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Te=null}}else Te=$e?Tt(e.stateNode.nextSibling):null;return!0}function uu(){for(var e=Te;e;)e=Tt(e.nextSibling)}function Tr(){Te=$e=null,K=!1}function na(e){Qe===null?Qe=[e]:Qe.push(e)}var Pf=vt.ReactCurrentBatchConfig;function Yr(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(j(309));var n=r.stateNode}if(!n)throw Error(j(147,e));var s=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var i=s.refs;l===null?delete i[o]:i[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!r._owner)throw Error(j(290,e))}return e}function Xn(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fi(e){var t=e._init;return t(e._payload)}function du(e){function t(f,d){if(e){var p=f.deletions;p===null?(f.deletions=[d],f.flags|=16):p.push(d)}}function r(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function n(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function s(f,d){return f=Rt(f,d),f.index=0,f.sibling=null,f}function o(f,d,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<d?(f.flags|=2,d):p):(f.flags|=2,d)):(f.flags|=1048576,d)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function i(f,d,p,b){return d===null||d.tag!==6?(d=Lo(p,f.mode,b),d.return=f,d):(d=s(d,p),d.return=f,d)}function c(f,d,p,b){var C=p.type;return C===ur?g(f,d,p.props.children,b,p.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===yt&&fi(C)===d.type)?(b=s(d,p.props),b.ref=Yr(f,d,p),b.return=f,b):(b=fs(p.type,p.key,p.props,null,f.mode,b),b.ref=Yr(f,d,p),b.return=f,b)}function u(f,d,p,b){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Ro(p,f.mode,b),d.return=f,d):(d=s(d,p.children||[]),d.return=f,d)}function g(f,d,p,b,C){return d===null||d.tag!==7?(d=Zt(p,f.mode,b,C),d.return=f,d):(d=s(d,p),d.return=f,d)}function m(f,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Lo(""+d,f.mode,p),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Fn:return p=fs(d.type,d.key,d.props,null,f.mode,p),p.ref=Yr(f,null,d),p.return=f,p;case cr:return d=Ro(d,f.mode,p),d.return=f,d;case yt:var b=d._init;return m(f,b(d._payload),p)}if(Zr(d)||Hr(d))return d=Zt(d,f.mode,p,null),d.return=f,d;Xn(f,d)}return null}function h(f,d,p,b){var C=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:i(f,d,""+p,b);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Fn:return p.key===C?c(f,d,p,b):null;case cr:return p.key===C?u(f,d,p,b):null;case yt:return C=p._init,h(f,d,C(p._payload),b)}if(Zr(p)||Hr(p))return C!==null?null:g(f,d,p,b,null);Xn(f,p)}return null}function v(f,d,p,b,C){if(typeof b=="string"&&b!==""||typeof b=="number")return f=f.get(p)||null,i(d,f,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Fn:return f=f.get(b.key===null?p:b.key)||null,c(d,f,b,C);case cr:return f=f.get(b.key===null?p:b.key)||null,u(d,f,b,C);case yt:var P=b._init;return v(f,d,p,P(b._payload),C)}if(Zr(b)||Hr(b))return f=f.get(p)||null,g(d,f,b,C,null);Xn(d,b)}return null}function x(f,d,p,b){for(var C=null,P=null,N=d,L=d=0,F=null;N!==null&&L<p.length;L++){N.index>L?(F=N,N=null):F=N.sibling;var D=h(f,N,p[L],b);if(D===null){N===null&&(N=F);break}e&&N&&D.alternate===null&&t(f,N),d=o(D,d,L),P===null?C=D:P.sibling=D,P=D,N=F}if(L===p.length)return r(f,N),K&&Vt(f,L),C;if(N===null){for(;L<p.length;L++)N=m(f,p[L],b),N!==null&&(d=o(N,d,L),P===null?C=N:P.sibling=N,P=N);return K&&Vt(f,L),C}for(N=n(f,N);L<p.length;L++)F=v(N,f,L,p[L],b),F!==null&&(e&&F.alternate!==null&&N.delete(F.key===null?L:F.key),d=o(F,d,L),P===null?C=F:P.sibling=F,P=F);return e&&N.forEach(function(G){return t(f,G)}),K&&Vt(f,L),C}function w(f,d,p,b){var C=Hr(p);if(typeof C!="function")throw Error(j(150));if(p=C.call(p),p==null)throw Error(j(151));for(var P=C=null,N=d,L=d=0,F=null,D=p.next();N!==null&&!D.done;L++,D=p.next()){N.index>L?(F=N,N=null):F=N.sibling;var G=h(f,N,D.value,b);if(G===null){N===null&&(N=F);break}e&&N&&G.alternate===null&&t(f,N),d=o(G,d,L),P===null?C=G:P.sibling=G,P=G,N=F}if(D.done)return r(f,N),K&&Vt(f,L),C;if(N===null){for(;!D.done;L++,D=p.next())D=m(f,D.value,b),D!==null&&(d=o(D,d,L),P===null?C=D:P.sibling=D,P=D);return K&&Vt(f,L),C}for(N=n(f,N);!D.done;L++,D=p.next())D=v(N,f,L,D.value,b),D!==null&&(e&&D.alternate!==null&&N.delete(D.key===null?L:D.key),d=o(D,d,L),P===null?C=D:P.sibling=D,P=D);return e&&N.forEach(function(st){return t(f,st)}),K&&Vt(f,L),C}function S(f,d,p,b){if(typeof p=="object"&&p!==null&&p.type===ur&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Fn:e:{for(var C=p.key,P=d;P!==null;){if(P.key===C){if(C=p.type,C===ur){if(P.tag===7){r(f,P.sibling),d=s(P,p.props.children),d.return=f,f=d;break e}}else if(P.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===yt&&fi(C)===P.type){r(f,P.sibling),d=s(P,p.props),d.ref=Yr(f,P,p),d.return=f,f=d;break e}r(f,P);break}else t(f,P);P=P.sibling}p.type===ur?(d=Zt(p.props.children,f.mode,b,p.key),d.return=f,f=d):(b=fs(p.type,p.key,p.props,null,f.mode,b),b.ref=Yr(f,d,p),b.return=f,f=b)}return l(f);case cr:e:{for(P=p.key;d!==null;){if(d.key===P)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){r(f,d.sibling),d=s(d,p.children||[]),d.return=f,f=d;break e}else{r(f,d);break}else t(f,d);d=d.sibling}d=Ro(p,f.mode,b),d.return=f,f=d}return l(f);case yt:return P=p._init,S(f,d,P(p._payload),b)}if(Zr(p))return x(f,d,p,b);if(Hr(p))return w(f,d,p,b);Xn(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(r(f,d.sibling),d=s(d,p),d.return=f,f=d):(r(f,d),d=Lo(p,f.mode,b),d.return=f,f=d),l(f)):r(f,d)}return S}var $r=du(!0),pu=du(!1),Es=Ot(null),Ps=null,xr=null,sa=null;function oa(){sa=xr=Ps=null}function la(e){var t=Es.current;Y(Es),e._currentValue=t}function fl(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function jr(e,t){Ps=e,sa=xr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Se=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if(sa!==e)if(e={context:e,memoizedValue:t,next:null},xr===null){if(Ps===null)throw Error(j(308));xr=e,Ps.dependencies={lanes:0,firstContext:e}}else xr=xr.next=e;return t}var Yt=null;function aa(e){Yt===null?Yt=[e]:Yt.push(e)}function fu(e,t,r,n){var s=t.interleaved;return s===null?(r.next=r,aa(t)):(r.next=s.next,s.next=r),t.interleaved=r,ht(e,n)}function ht(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var bt=!1;function ia(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $t(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,B&2){var s=n.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),n.pending=t,ht(e,r)}return s=n.interleaved,s===null?(t.next=t,aa(n)):(t.next=s.next,s.next=t),n.interleaved=t,ht(e,r)}function as(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ql(e,r)}}function mi(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var s=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?s=o=l:o=o.next=l,r=r.next}while(r!==null);o===null?s=o=t:o=o.next=t}else s=o=t;r={baseState:n.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Ts(e,t,r,n){var s=e.updateQueue;bt=!1;var o=s.firstBaseUpdate,l=s.lastBaseUpdate,i=s.shared.pending;if(i!==null){s.shared.pending=null;var c=i,u=c.next;c.next=null,l===null?o=u:l.next=u,l=c;var g=e.alternate;g!==null&&(g=g.updateQueue,i=g.lastBaseUpdate,i!==l&&(i===null?g.firstBaseUpdate=u:i.next=u,g.lastBaseUpdate=c))}if(o!==null){var m=s.baseState;l=0,g=u=c=null,i=o;do{var h=i.lane,v=i.eventTime;if((n&h)===h){g!==null&&(g=g.next={eventTime:v,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var x=e,w=i;switch(h=t,v=r,w.tag){case 1:if(x=w.payload,typeof x=="function"){m=x.call(v,m,h);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,h=typeof x=="function"?x.call(v,m,h):x,h==null)break e;m=Z({},m,h);break e;case 2:bt=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,h=s.effects,h===null?s.effects=[i]:h.push(i))}else v={eventTime:v,lane:h,tag:i.tag,payload:i.payload,callback:i.callback,next:null},g===null?(u=g=v,c=m):g=g.next=v,l|=h;if(i=i.next,i===null){if(i=s.shared.pending,i===null)break;h=i,i=h.next,h.next=null,s.lastBaseUpdate=h,s.shared.pending=null}}while(!0);if(g===null&&(c=m),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=g,t=s.shared.interleaved,t!==null){s=t;do l|=s.lane,s=s.next;while(s!==t)}else o===null&&(s.shared.lanes=0);rr|=l,e.lanes=l,e.memoizedState=m}}function hi(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],s=n.callback;if(s!==null){if(n.callback=null,n=r,typeof s!="function")throw Error(j(191,s));s.call(n)}}}var In={},nt=Ot(In),kn=Ot(In),Cn=Ot(In);function Kt(e){if(e===In)throw Error(j(174));return e}function ca(e,t){switch(W(Cn,t),W(kn,e),W(nt,In),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qo(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qo(t,e)}Y(nt),W(nt,t)}function _r(){Y(nt),Y(kn),Y(Cn)}function hu(e){Kt(Cn.current);var t=Kt(nt.current),r=Qo(t,e.type);t!==r&&(W(kn,e),W(nt,r))}function ua(e){kn.current===e&&(Y(nt),Y(kn))}var X=Ot(0);function $s(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var No=[];function da(){for(var e=0;e<No.length;e++)No[e]._workInProgressVersionPrimary=null;No.length=0}var is=vt.ReactCurrentDispatcher,Eo=vt.ReactCurrentBatchConfig,tr=0,J=null,se=null,le=null,_s=!1,ln=!1,Sn=0,Tf=0;function me(){throw Error(j(321))}function pa(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Xe(e[r],t[r]))return!1;return!0}function fa(e,t,r,n,s,o){if(tr=o,J=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,is.current=e===null||e.memoizedState===null?Rf:If,e=r(n,s),ln){o=0;do{if(ln=!1,Sn=0,25<=o)throw Error(j(301));o+=1,le=se=null,t.updateQueue=null,is.current=zf,e=r(n,s)}while(ln)}if(is.current=Ls,t=se!==null&&se.next!==null,tr=0,le=se=J=null,_s=!1,t)throw Error(j(300));return e}function ma(){var e=Sn!==0;return Sn=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?J.memoizedState=le=e:le=le.next=e,le}function Ae(){if(se===null){var e=J.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=le===null?J.memoizedState:le.next;if(t!==null)le=t,se=e;else{if(e===null)throw Error(j(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},le===null?J.memoizedState=le=e:le=le.next=e}return le}function jn(e,t){return typeof t=="function"?t(e):t}function Po(e){var t=Ae(),r=t.queue;if(r===null)throw Error(j(311));r.lastRenderedReducer=e;var n=se,s=n.baseQueue,o=r.pending;if(o!==null){if(s!==null){var l=s.next;s.next=o.next,o.next=l}n.baseQueue=s=o,r.pending=null}if(s!==null){o=s.next,n=n.baseState;var i=l=null,c=null,u=o;do{var g=u.lane;if((tr&g)===g)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var m={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(i=c=m,l=n):c=c.next=m,J.lanes|=g,rr|=g}u=u.next}while(u!==null&&u!==o);c===null?l=n:c.next=i,Xe(n,t.memoizedState)||(Se=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){s=e;do o=s.lane,J.lanes|=o,rr|=o,s=s.next;while(s!==e)}else s===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function To(e){var t=Ae(),r=t.queue;if(r===null)throw Error(j(311));r.lastRenderedReducer=e;var n=r.dispatch,s=r.pending,o=t.memoizedState;if(s!==null){r.pending=null;var l=s=s.next;do o=e(o,l.action),l=l.next;while(l!==s);Xe(o,t.memoizedState)||(Se=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function gu(){}function vu(e,t){var r=J,n=Ae(),s=t(),o=!Xe(n.memoizedState,s);if(o&&(n.memoizedState=s,Se=!0),n=n.queue,ha(bu.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(r.flags|=2048,Nn(9,yu.bind(null,r,n,s,t),void 0,null),ae===null)throw Error(j(349));tr&30||xu(r,t,s)}return s}function xu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function yu(e,t,r,n){t.value=r,t.getSnapshot=n,wu(t)&&ku(e)}function bu(e,t,r){return r(function(){wu(t)&&ku(e)})}function wu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Xe(e,r)}catch{return!0}}function ku(e){var t=ht(e,1);t!==null&&Ke(t,e,1,-1)}function gi(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jn,lastRenderedState:e},t.queue=e,e=e.dispatch=Lf.bind(null,J,e),[t.memoizedState,e]}function Nn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=J.updateQueue,t===null?(t={lastEffect:null,stores:null},J.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Cu(){return Ae().memoizedState}function cs(e,t,r,n){var s=et();J.flags|=e,s.memoizedState=Nn(1|t,r,void 0,n===void 0?null:n)}function Qs(e,t,r,n){var s=Ae();n=n===void 0?null:n;var o=void 0;if(se!==null){var l=se.memoizedState;if(o=l.destroy,n!==null&&pa(n,l.deps)){s.memoizedState=Nn(t,r,o,n);return}}J.flags|=e,s.memoizedState=Nn(1|t,r,o,n)}function vi(e,t){return cs(8390656,8,e,t)}function ha(e,t){return Qs(2048,8,e,t)}function Su(e,t){return Qs(4,2,e,t)}function ju(e,t){return Qs(4,4,e,t)}function Nu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Eu(e,t,r){return r=r!=null?r.concat([e]):null,Qs(4,4,Nu.bind(null,t,e),r)}function ga(){}function Pu(e,t){var r=Ae();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&pa(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function Tu(e,t){var r=Ae();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&pa(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function $u(e,t,r){return tr&21?(Xe(r,t)||(r=zc(),J.lanes|=r,rr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Se=!0),e.memoizedState=r)}function $f(e,t){var r=H;H=r!==0&&4>r?r:4,e(!0);var n=Eo.transition;Eo.transition={};try{e(!1),t()}finally{H=r,Eo.transition=n}}function _u(){return Ae().memoizedState}function _f(e,t,r){var n=Lt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Lu(e))Ru(t,r);else if(r=fu(e,t,r,n),r!==null){var s=ye();Ke(r,e,n,s),Iu(r,t,n)}}function Lf(e,t,r){var n=Lt(e),s={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Lu(e))Ru(t,s);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,i=o(l,r);if(s.hasEagerState=!0,s.eagerState=i,Xe(i,l)){var c=t.interleaved;c===null?(s.next=s,aa(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}r=fu(e,t,s,n),r!==null&&(s=ye(),Ke(r,e,n,s),Iu(r,t,n))}}function Lu(e){var t=e.alternate;return e===J||t!==null&&t===J}function Ru(e,t){ln=_s=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Iu(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Ql(e,r)}}var Ls={readContext:Fe,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},Rf={readContext:Fe,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:vi,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,cs(4194308,4,Nu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return cs(4194308,4,e,t)},useInsertionEffect:function(e,t){return cs(4,2,e,t)},useMemo:function(e,t){var r=et();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=et();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=_f.bind(null,J,e),[n.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:gi,useDebugValue:ga,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=gi(!1),t=e[0];return e=$f.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=J,s=et();if(K){if(r===void 0)throw Error(j(407));r=r()}else{if(r=t(),ae===null)throw Error(j(349));tr&30||xu(n,t,r)}s.memoizedState=r;var o={value:r,getSnapshot:t};return s.queue=o,vi(bu.bind(null,n,o,e),[e]),n.flags|=2048,Nn(9,yu.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=et(),t=ae.identifierPrefix;if(K){var r=dt,n=ut;r=(n&~(1<<32-Ye(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Sn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Tf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},If={readContext:Fe,useCallback:Pu,useContext:Fe,useEffect:ha,useImperativeHandle:Eu,useInsertionEffect:Su,useLayoutEffect:ju,useMemo:Tu,useReducer:Po,useRef:Cu,useState:function(){return Po(jn)},useDebugValue:ga,useDeferredValue:function(e){var t=Ae();return $u(t,se.memoizedState,e)},useTransition:function(){var e=Po(jn)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:gu,useSyncExternalStore:vu,useId:_u,unstable_isNewReconciler:!1},zf={readContext:Fe,useCallback:Pu,useContext:Fe,useEffect:ha,useImperativeHandle:Eu,useInsertionEffect:Su,useLayoutEffect:ju,useMemo:Tu,useReducer:To,useRef:Cu,useState:function(){return To(jn)},useDebugValue:ga,useDeferredValue:function(e){var t=Ae();return se===null?t.memoizedState=e:$u(t,se.memoizedState,e)},useTransition:function(){var e=To(jn)[0],t=Ae().memoizedState;return[e,t]},useMutableSource:gu,useSyncExternalStore:vu,useId:_u,unstable_isNewReconciler:!1};function We(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function ml(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:Z({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ys={isMounted:function(e){return(e=e._reactInternals)?or(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ye(),s=Lt(e),o=pt(n,s);o.payload=t,r!=null&&(o.callback=r),t=$t(e,o,s),t!==null&&(Ke(t,e,s,n),as(t,e,s))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ye(),s=Lt(e),o=pt(n,s);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=$t(e,o,s),t!==null&&(Ke(t,e,s,n),as(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ye(),n=Lt(e),s=pt(r,n);s.tag=2,t!=null&&(s.callback=t),t=$t(e,s,n),t!==null&&(Ke(t,e,n,r),as(t,e,n))}};function xi(e,t,r,n,s,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,l):t.prototype&&t.prototype.isPureReactComponent?!xn(r,n)||!xn(s,o):!0}function zu(e,t,r){var n=!1,s=Mt,o=t.contextType;return typeof o=="object"&&o!==null?o=Fe(o):(s=Ne(t)?qt:ve.current,n=t.contextTypes,o=(n=n!=null)?Pr(e,s):Mt),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ys,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=o),t}function yi(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Ys.enqueueReplaceState(t,t.state,null)}function hl(e,t,r,n){var s=e.stateNode;s.props=r,s.state=e.memoizedState,s.refs={},ia(e);var o=t.contextType;typeof o=="object"&&o!==null?s.context=Fe(o):(o=Ne(t)?qt:ve.current,s.context=Pr(e,o)),s.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ml(e,t,o,r),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Ys.enqueueReplaceState(s,s.state,null),Ts(e,r,s,n),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Lr(e,t){try{var r="",n=t;do r+=ip(n),n=n.return;while(n);var s=r}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:s,digest:null}}function $o(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function gl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Mf=typeof WeakMap=="function"?WeakMap:Map;function Mu(e,t,r){r=pt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Is||(Is=!0,Nl=n),gl(e,t)},r}function Du(e,t,r){r=pt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var s=t.value;r.payload=function(){return n(s)},r.callback=function(){gl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){gl(e,t),typeof n!="function"&&(_t===null?_t=new Set([this]):_t.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function bi(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Mf;var s=new Set;n.set(t,s)}else s=n.get(t),s===void 0&&(s=new Set,n.set(t,s));s.has(r)||(s.add(r),e=Xf.bind(null,e,t,r),t.then(e,e))}function wi(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ki(e,t,r,n,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=pt(-1,1),t.tag=2,$t(r,t,1))),r.lanes|=1),e)}var Df=vt.ReactCurrentOwner,Se=!1;function xe(e,t,r,n){t.child=e===null?pu(t,null,r,n):$r(t,e.child,r,n)}function Ci(e,t,r,n,s){r=r.render;var o=t.ref;return jr(t,s),n=fa(e,t,r,n,o,s),r=ma(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,gt(e,t,s)):(K&&r&&ta(t),t.flags|=1,xe(e,t,n,s),t.child)}function Si(e,t,r,n,s){if(e===null){var o=r.type;return typeof o=="function"&&!Sa(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,Ou(e,t,o,n,s)):(e=fs(r.type,null,n,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&s)){var l=o.memoizedProps;if(r=r.compare,r=r!==null?r:xn,r(l,n)&&e.ref===t.ref)return gt(e,t,s)}return t.flags|=1,e=Rt(o,n),e.ref=t.ref,e.return=t,t.child=e}function Ou(e,t,r,n,s){if(e!==null){var o=e.memoizedProps;if(xn(o,n)&&e.ref===t.ref)if(Se=!1,t.pendingProps=n=o,(e.lanes&s)!==0)e.flags&131072&&(Se=!0);else return t.lanes=e.lanes,gt(e,t,s)}return vl(e,t,r,n,s)}function Fu(e,t,r){var n=t.pendingProps,s=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(br,Pe),Pe|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(br,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,W(br,Pe),Pe|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,W(br,Pe),Pe|=n;return xe(e,t,s,r),t.child}function Au(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function vl(e,t,r,n,s){var o=Ne(r)?qt:ve.current;return o=Pr(t,o),jr(t,s),r=fa(e,t,r,n,o,s),n=ma(),e!==null&&!Se?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,gt(e,t,s)):(K&&n&&ta(t),t.flags|=1,xe(e,t,r,s),t.child)}function ji(e,t,r,n,s){if(Ne(r)){var o=!0;Ss(t)}else o=!1;if(jr(t,s),t.stateNode===null)us(e,t),zu(t,r,n),hl(t,r,n,s),n=!0;else if(e===null){var l=t.stateNode,i=t.memoizedProps;l.props=i;var c=l.context,u=r.contextType;typeof u=="object"&&u!==null?u=Fe(u):(u=Ne(r)?qt:ve.current,u=Pr(t,u));var g=r.getDerivedStateFromProps,m=typeof g=="function"||typeof l.getSnapshotBeforeUpdate=="function";m||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==n||c!==u)&&yi(t,l,n,u),bt=!1;var h=t.memoizedState;l.state=h,Ts(t,n,l,s),c=t.memoizedState,i!==n||h!==c||je.current||bt?(typeof g=="function"&&(ml(t,r,g,n),c=t.memoizedState),(i=bt||xi(t,r,i,n,h,c,u))?(m||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),l.props=n,l.state=c,l.context=u,n=i):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,mu(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:We(t.type,i),l.props=u,m=t.pendingProps,h=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=Fe(c):(c=Ne(r)?qt:ve.current,c=Pr(t,c));var v=r.getDerivedStateFromProps;(g=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(i!==m||h!==c)&&yi(t,l,n,c),bt=!1,h=t.memoizedState,l.state=h,Ts(t,n,l,s);var x=t.memoizedState;i!==m||h!==x||je.current||bt?(typeof v=="function"&&(ml(t,r,v,n),x=t.memoizedState),(u=bt||xi(t,r,u,n,h,x,c)||!1)?(g||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,x,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,x,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=x),l.props=n,l.state=x,l.context=c,n=u):(typeof l.componentDidUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),n=!1)}return xl(e,t,r,n,o,s)}function xl(e,t,r,n,s,o){Au(e,t);var l=(t.flags&128)!==0;if(!n&&!l)return s&&ui(t,r,!1),gt(e,t,o);n=t.stateNode,Df.current=t;var i=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&l?(t.child=$r(t,e.child,null,o),t.child=$r(t,null,i,o)):xe(e,t,i,o),t.memoizedState=n.state,s&&ui(t,r,!0),t.child}function Bu(e){var t=e.stateNode;t.pendingContext?ci(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ci(e,t.context,!1),ca(e,t.containerInfo)}function Ni(e,t,r,n,s){return Tr(),na(s),t.flags|=256,xe(e,t,r,n),t.child}var yl={dehydrated:null,treeContext:null,retryLane:0};function bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uu(e,t,r){var n=t.pendingProps,s=X.current,o=!1,l=(t.flags&128)!==0,i;if((i=l)||(i=e!==null&&e.memoizedState===null?!1:(s&2)!==0),i?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),W(X,s&1),e===null)return pl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=n.children,e=n.fallback,o?(n=t.mode,o=t.child,l={mode:"hidden",children:l},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Js(l,n,0,null),e=Zt(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=bl(r),t.memoizedState=yl,e):va(t,l));if(s=e.memoizedState,s!==null&&(i=s.dehydrated,i!==null))return Of(e,t,l,n,i,s,r);if(o){o=n.fallback,l=t.mode,s=e.child,i=s.sibling;var c={mode:"hidden",children:n.children};return!(l&1)&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=Rt(s,c),n.subtreeFlags=s.subtreeFlags&14680064),i!==null?o=Rt(i,o):(o=Zt(o,l,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,l=e.child.memoizedState,l=l===null?bl(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~r,t.memoizedState=yl,n}return o=e.child,e=o.sibling,n=Rt(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function va(e,t){return t=Js({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Jn(e,t,r,n){return n!==null&&na(n),$r(t,e.child,null,r),e=va(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Of(e,t,r,n,s,o,l){if(r)return t.flags&256?(t.flags&=-257,n=$o(Error(j(422))),Jn(e,t,l,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,s=t.mode,n=Js({mode:"visible",children:n.children},s,0,null),o=Zt(o,s,l,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&$r(t,e.child,null,l),t.child.memoizedState=bl(l),t.memoizedState=yl,o);if(!(t.mode&1))return Jn(e,t,l,null);if(s.data==="$!"){if(n=s.nextSibling&&s.nextSibling.dataset,n)var i=n.dgst;return n=i,o=Error(j(419)),n=$o(o,n,void 0),Jn(e,t,l,n)}if(i=(l&e.childLanes)!==0,Se||i){if(n=ae,n!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(n.suspendedLanes|l)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,ht(e,s),Ke(n,e,s,-1))}return Ca(),n=$o(Error(j(421))),Jn(e,t,l,n)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=Jf.bind(null,e),s._reactRetry=t,null):(e=o.treeContext,Te=Tt(s.nextSibling),$e=t,K=!0,Qe=null,e!==null&&(ze[Me++]=ut,ze[Me++]=dt,ze[Me++]=er,ut=e.id,dt=e.overflow,er=t),t=va(t,n.children),t.flags|=4096,t)}function Ei(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),fl(e.return,t,r)}function _o(e,t,r,n,s){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:s}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=s)}function Hu(e,t,r){var n=t.pendingProps,s=n.revealOrder,o=n.tail;if(xe(e,t,n.children,r),n=X.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ei(e,r,t);else if(e.tag===19)Ei(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(W(X,n),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(r=t.child,s=null;r!==null;)e=r.alternate,e!==null&&$s(e)===null&&(s=r),r=r.sibling;r=s,r===null?(s=t.child,t.child=null):(s=r.sibling,r.sibling=null),_o(t,!1,s,r,o);break;case"backwards":for(r=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&$s(e)===null){t.child=s;break}e=s.sibling,s.sibling=r,r=s,s=e}_o(t,!0,r,null,o);break;case"together":_o(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function us(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),rr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,r=Rt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Rt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Ff(e,t,r){switch(t.tag){case 3:Bu(t),Tr();break;case 5:hu(t);break;case 1:Ne(t.type)&&Ss(t);break;case 4:ca(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,s=t.memoizedProps.value;W(Es,n._currentValue),n._currentValue=s;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(W(X,X.current&1),t.flags|=128,null):r&t.child.childLanes?Uu(e,t,r):(W(X,X.current&1),e=gt(e,t,r),e!==null?e.sibling:null);W(X,X.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Hu(e,t,r);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),W(X,X.current),n)break;return null;case 22:case 23:return t.lanes=0,Fu(e,t,r)}return gt(e,t,r)}var Vu,wl,Wu,Gu;Vu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};wl=function(){};Wu=function(e,t,r,n){var s=e.memoizedProps;if(s!==n){e=t.stateNode,Kt(nt.current);var o=null;switch(r){case"input":s=Ho(e,s),n=Ho(e,n),o=[];break;case"select":s=Z({},s,{value:void 0}),n=Z({},n,{value:void 0}),o=[];break;case"textarea":s=Go(e,s),n=Go(e,n),o=[];break;default:typeof s.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=ks)}Yo(r,n);var l;r=null;for(u in s)if(!n.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var i=s[u];for(l in i)i.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(dn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(i=s!=null?s[u]:void 0,n.hasOwnProperty(u)&&c!==i&&(c!=null||i!=null))if(u==="style")if(i){for(l in i)!i.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&i[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(dn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Q("scroll",e),o||i===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Gu=function(e,t,r,n){r!==n&&(t.flags|=4)};function Kr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function he(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags&14680064,n|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)r|=s.lanes|s.childLanes,n|=s.subtreeFlags,n|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Af(e,t,r){var n=t.pendingProps;switch(ra(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return he(t),null;case 1:return Ne(t.type)&&Cs(),he(t),null;case 3:return n=t.stateNode,_r(),Y(je),Y(ve),da(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Kn(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Qe!==null&&(Tl(Qe),Qe=null))),wl(e,t),he(t),null;case 5:ua(t);var s=Kt(Cn.current);if(r=t.type,e!==null&&t.stateNode!=null)Wu(e,t,r,n,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(j(166));return he(t),null}if(e=Kt(nt.current),Kn(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[tt]=t,n[wn]=o,e=(t.mode&1)!==0,r){case"dialog":Q("cancel",n),Q("close",n);break;case"iframe":case"object":case"embed":Q("load",n);break;case"video":case"audio":for(s=0;s<en.length;s++)Q(en[s],n);break;case"source":Q("error",n);break;case"img":case"image":case"link":Q("error",n),Q("load",n);break;case"details":Q("toggle",n);break;case"input":Ma(n,o),Q("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},Q("invalid",n);break;case"textarea":Oa(n,o),Q("invalid",n)}Yo(r,o),s=null;for(var l in o)if(o.hasOwnProperty(l)){var i=o[l];l==="children"?typeof i=="string"?n.textContent!==i&&(o.suppressHydrationWarning!==!0&&Yn(n.textContent,i,e),s=["children",i]):typeof i=="number"&&n.textContent!==""+i&&(o.suppressHydrationWarning!==!0&&Yn(n.textContent,i,e),s=["children",""+i]):dn.hasOwnProperty(l)&&i!=null&&l==="onScroll"&&Q("scroll",n)}switch(r){case"input":An(n),Da(n,o,!0);break;case"textarea":An(n),Fa(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=ks)}n=s,t.updateQueue=n,n!==null&&(t.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=bc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),r==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[tt]=t,e[wn]=n,Vu(e,t,!1,!1),t.stateNode=e;e:{switch(l=Ko(r,n),r){case"dialog":Q("cancel",e),Q("close",e),s=n;break;case"iframe":case"object":case"embed":Q("load",e),s=n;break;case"video":case"audio":for(s=0;s<en.length;s++)Q(en[s],e);s=n;break;case"source":Q("error",e),s=n;break;case"img":case"image":case"link":Q("error",e),Q("load",e),s=n;break;case"details":Q("toggle",e),s=n;break;case"input":Ma(e,n),s=Ho(e,n),Q("invalid",e);break;case"option":s=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},s=Z({},n,{value:void 0}),Q("invalid",e);break;case"textarea":Oa(e,n),s=Go(e,n),Q("invalid",e);break;default:s=n}Yo(r,s),i=s;for(o in i)if(i.hasOwnProperty(o)){var c=i[o];o==="style"?Cc(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&wc(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&pn(e,c):typeof c=="number"&&pn(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(dn.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Q("scroll",e):c!=null&&Bl(e,o,c,l))}switch(r){case"input":An(e),Da(e,n,!1);break;case"textarea":An(e),Fa(e);break;case"option":n.value!=null&&e.setAttribute("value",""+zt(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?wr(e,!!n.multiple,o,!1):n.defaultValue!=null&&wr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=ks)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return he(t),null;case 6:if(e&&t.stateNode!=null)Gu(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(j(166));if(r=Kt(Cn.current),Kt(nt.current),Kn(t)){if(n=t.stateNode,r=t.memoizedProps,n[tt]=t,(o=n.nodeValue!==r)&&(e=$e,e!==null))switch(e.tag){case 3:Yn(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Yn(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[tt]=t,t.stateNode=n}return he(t),null;case 13:if(Y(X),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Te!==null&&t.mode&1&&!(t.flags&128))uu(),Tr(),t.flags|=98560,o=!1;else if(o=Kn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[tt]=t}else Tr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;he(t),o=!1}else Qe!==null&&(Tl(Qe),Qe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||X.current&1?oe===0&&(oe=3):Ca())),t.updateQueue!==null&&(t.flags|=4),he(t),null);case 4:return _r(),wl(e,t),e===null&&yn(t.stateNode.containerInfo),he(t),null;case 10:return la(t.type._context),he(t),null;case 17:return Ne(t.type)&&Cs(),he(t),null;case 19:if(Y(X),o=t.memoizedState,o===null)return he(t),null;if(n=(t.flags&128)!==0,l=o.rendering,l===null)if(n)Kr(o,!1);else{if(oe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=$s(e),l!==null){for(t.flags|=128,Kr(o,!1),n=l.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return W(X,X.current&1|2),t.child}e=e.sibling}o.tail!==null&&re()>Rr&&(t.flags|=128,n=!0,Kr(o,!1),t.lanes=4194304)}else{if(!n)if(e=$s(l),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Kr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!K)return he(t),null}else 2*re()-o.renderingStartTime>Rr&&r!==1073741824&&(t.flags|=128,n=!0,Kr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(r=o.last,r!==null?r.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=re(),t.sibling=null,r=X.current,W(X,n?r&1|2:r&1),t):(he(t),null);case 22:case 23:return ka(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Pe&1073741824&&(he(t),t.subtreeFlags&6&&(t.flags|=8192)):he(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Bf(e,t){switch(ra(t),t.tag){case 1:return Ne(t.type)&&Cs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return _r(),Y(je),Y(ve),da(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ua(t),null;case 13:if(Y(X),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));Tr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Y(X),null;case 4:return _r(),null;case 10:return la(t.type._context),null;case 22:case 23:return ka(),null;case 24:return null;default:return null}}var Zn=!1,ge=!1,Uf=typeof WeakSet=="function"?WeakSet:Set,_=null;function yr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ee(e,t,n)}else r.current=null}function kl(e,t,r){try{r()}catch(n){ee(e,t,n)}}var Pi=!1;function Hf(e,t){if(ol=ys,e=Jc(),ea(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var s=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var l=0,i=-1,c=-1,u=0,g=0,m=e,h=null;t:for(;;){for(var v;m!==r||s!==0&&m.nodeType!==3||(i=l+s),m!==o||n!==0&&m.nodeType!==3||(c=l+n),m.nodeType===3&&(l+=m.nodeValue.length),(v=m.firstChild)!==null;)h=m,m=v;for(;;){if(m===e)break t;if(h===r&&++u===s&&(i=l),h===o&&++g===n&&(c=l),(v=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=v}r=i===-1||c===-1?null:{start:i,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(ll={focusedElem:e,selectionRange:r},ys=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,S=x.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:We(t.type,w),S);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(b){ee(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return x=Pi,Pi=!1,x}function an(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var s=n=n.next;do{if((s.tag&e)===e){var o=s.destroy;s.destroy=void 0,o!==void 0&&kl(t,r,o)}s=s.next}while(s!==n)}}function Ks(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Cl(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Qu(e){var t=e.alternate;t!==null&&(e.alternate=null,Qu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[wn],delete t[cl],delete t[jf],delete t[Nf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Yu(e){return e.tag===5||e.tag===3||e.tag===4}function Ti(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ks));else if(n!==4&&(e=e.child,e!==null))for(Sl(e,t,r),e=e.sibling;e!==null;)Sl(e,t,r),e=e.sibling}function jl(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(jl(e,t,r),e=e.sibling;e!==null;)jl(e,t,r),e=e.sibling}var ie=null,Ge=!1;function xt(e,t,r){for(r=r.child;r!==null;)Ku(e,t,r),r=r.sibling}function Ku(e,t,r){if(rt&&typeof rt.onCommitFiberUnmount=="function")try{rt.onCommitFiberUnmount(Bs,r)}catch{}switch(r.tag){case 5:ge||yr(r,t);case 6:var n=ie,s=Ge;ie=null,xt(e,t,r),ie=n,Ge=s,ie!==null&&(Ge?(e=ie,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ie.removeChild(r.stateNode));break;case 18:ie!==null&&(Ge?(e=ie,r=r.stateNode,e.nodeType===8?So(e.parentNode,r):e.nodeType===1&&So(e,r),gn(e)):So(ie,r.stateNode));break;case 4:n=ie,s=Ge,ie=r.stateNode.containerInfo,Ge=!0,xt(e,t,r),ie=n,Ge=s;break;case 0:case 11:case 14:case 15:if(!ge&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){s=n=n.next;do{var o=s,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&kl(r,t,l),s=s.next}while(s!==n)}xt(e,t,r);break;case 1:if(!ge&&(yr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(i){ee(r,t,i)}xt(e,t,r);break;case 21:xt(e,t,r);break;case 22:r.mode&1?(ge=(n=ge)||r.memoizedState!==null,xt(e,t,r),ge=n):xt(e,t,r);break;default:xt(e,t,r)}}function $i(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Uf),t.forEach(function(n){var s=Zf.bind(null,e,n);r.has(n)||(r.add(n),n.then(s,s))})}}function Ve(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var s=r[n];try{var o=e,l=t,i=l;e:for(;i!==null;){switch(i.tag){case 5:ie=i.stateNode,Ge=!1;break e;case 3:ie=i.stateNode.containerInfo,Ge=!0;break e;case 4:ie=i.stateNode.containerInfo,Ge=!0;break e}i=i.return}if(ie===null)throw Error(j(160));Ku(o,l,s),ie=null,Ge=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){ee(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xu(t,e),t=t.sibling}function Xu(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ve(t,e),qe(e),n&4){try{an(3,e,e.return),Ks(3,e)}catch(w){ee(e,e.return,w)}try{an(5,e,e.return)}catch(w){ee(e,e.return,w)}}break;case 1:Ve(t,e),qe(e),n&512&&r!==null&&yr(r,r.return);break;case 5:if(Ve(t,e),qe(e),n&512&&r!==null&&yr(r,r.return),e.flags&32){var s=e.stateNode;try{pn(s,"")}catch(w){ee(e,e.return,w)}}if(n&4&&(s=e.stateNode,s!=null)){var o=e.memoizedProps,l=r!==null?r.memoizedProps:o,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&o.type==="radio"&&o.name!=null&&xc(s,o),Ko(i,l);var u=Ko(i,o);for(l=0;l<c.length;l+=2){var g=c[l],m=c[l+1];g==="style"?Cc(s,m):g==="dangerouslySetInnerHTML"?wc(s,m):g==="children"?pn(s,m):Bl(s,g,m,u)}switch(i){case"input":Vo(s,o);break;case"textarea":yc(s,o);break;case"select":var h=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?wr(s,!!o.multiple,v,!1):h!==!!o.multiple&&(o.defaultValue!=null?wr(s,!!o.multiple,o.defaultValue,!0):wr(s,!!o.multiple,o.multiple?[]:"",!1))}s[wn]=o}catch(w){ee(e,e.return,w)}}break;case 6:if(Ve(t,e),qe(e),n&4){if(e.stateNode===null)throw Error(j(162));s=e.stateNode,o=e.memoizedProps;try{s.nodeValue=o}catch(w){ee(e,e.return,w)}}break;case 3:if(Ve(t,e),qe(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{gn(t.containerInfo)}catch(w){ee(e,e.return,w)}break;case 4:Ve(t,e),qe(e);break;case 13:Ve(t,e),qe(e),s=e.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(ba=re())),n&4&&$i(e);break;case 22:if(g=r!==null&&r.memoizedState!==null,e.mode&1?(ge=(u=ge)||g,Ve(t,e),ge=u):Ve(t,e),qe(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(_=e,g=e.child;g!==null;){for(m=_=g;_!==null;){switch(h=_,v=h.child,h.tag){case 0:case 11:case 14:case 15:an(4,h,h.return);break;case 1:yr(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){n=h,r=h.return;try{t=n,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){ee(n,r,w)}}break;case 5:yr(h,h.return);break;case 22:if(h.memoizedState!==null){Li(m);continue}}v!==null?(v.return=h,_=v):Li(m)}g=g.sibling}e:for(g=null,m=e;;){if(m.tag===5){if(g===null){g=m;try{s=m.stateNode,u?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(i=m.stateNode,c=m.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=kc("display",l))}catch(w){ee(e,e.return,w)}}}else if(m.tag===6){if(g===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(w){ee(e,e.return,w)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;g===m&&(g=null),m=m.return}g===m&&(g=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ve(t,e),qe(e),n&4&&$i(e);break;case 21:break;default:Ve(t,e),qe(e)}}function qe(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Yu(r)){var n=r;break e}r=r.return}throw Error(j(160))}switch(n.tag){case 5:var s=n.stateNode;n.flags&32&&(pn(s,""),n.flags&=-33);var o=Ti(e);jl(e,o,s);break;case 3:case 4:var l=n.stateNode.containerInfo,i=Ti(e);Sl(e,i,l);break;default:throw Error(j(161))}}catch(c){ee(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vf(e,t,r){_=e,Ju(e)}function Ju(e,t,r){for(var n=(e.mode&1)!==0;_!==null;){var s=_,o=s.child;if(s.tag===22&&n){var l=s.memoizedState!==null||Zn;if(!l){var i=s.alternate,c=i!==null&&i.memoizedState!==null||ge;i=Zn;var u=ge;if(Zn=l,(ge=c)&&!u)for(_=s;_!==null;)l=_,c=l.child,l.tag===22&&l.memoizedState!==null?Ri(s):c!==null?(c.return=l,_=c):Ri(s);for(;o!==null;)_=o,Ju(o),o=o.sibling;_=s,Zn=i,ge=u}_i(e)}else s.subtreeFlags&8772&&o!==null?(o.return=s,_=o):_i(e)}}function _i(e){for(;_!==null;){var t=_;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ge||Ks(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!ge)if(r===null)n.componentDidMount();else{var s=t.elementType===t.type?r.memoizedProps:We(t.type,r.memoizedProps);n.componentDidUpdate(s,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&hi(t,o,n);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}hi(t,l,r)}break;case 5:var i=t.stateNode;if(r===null&&t.flags&4){r=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var m=g.dehydrated;m!==null&&gn(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ge||t.flags&512&&Cl(t)}catch(h){ee(t,t.return,h)}}if(t===e){_=null;break}if(r=t.sibling,r!==null){r.return=t.return,_=r;break}_=t.return}}function Li(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var r=t.sibling;if(r!==null){r.return=t.return,_=r;break}_=t.return}}function Ri(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Ks(4,t)}catch(c){ee(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var s=t.return;try{n.componentDidMount()}catch(c){ee(t,s,c)}}var o=t.return;try{Cl(t)}catch(c){ee(t,o,c)}break;case 5:var l=t.return;try{Cl(t)}catch(c){ee(t,l,c)}}}catch(c){ee(t,t.return,c)}if(t===e){_=null;break}var i=t.sibling;if(i!==null){i.return=t.return,_=i;break}_=t.return}}var Wf=Math.ceil,Rs=vt.ReactCurrentDispatcher,xa=vt.ReactCurrentOwner,Oe=vt.ReactCurrentBatchConfig,B=0,ae=null,ne=null,ce=0,Pe=0,br=Ot(0),oe=0,En=null,rr=0,Xs=0,ya=0,cn=null,Ce=null,ba=0,Rr=1/0,it=null,Is=!1,Nl=null,_t=null,qn=!1,St=null,zs=0,un=0,El=null,ds=-1,ps=0;function ye(){return B&6?re():ds!==-1?ds:ds=re()}function Lt(e){return e.mode&1?B&2&&ce!==0?ce&-ce:Pf.transition!==null?(ps===0&&(ps=zc()),ps):(e=H,e!==0||(e=window.event,e=e===void 0?16:Uc(e.type)),e):1}function Ke(e,t,r,n){if(50<un)throw un=0,El=null,Error(j(185));_n(e,r,n),(!(B&2)||e!==ae)&&(e===ae&&(!(B&2)&&(Xs|=r),oe===4&&kt(e,ce)),Ee(e,n),r===1&&B===0&&!(t.mode&1)&&(Rr=re()+500,Gs&&Ft()))}function Ee(e,t){var r=e.callbackNode;Ep(e,t);var n=xs(e,e===ae?ce:0);if(n===0)r!==null&&Ua(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Ua(r),t===1)e.tag===0?Ef(Ii.bind(null,e)):au(Ii.bind(null,e)),Cf(function(){!(B&6)&&Ft()}),r=null;else{switch(Mc(n)){case 1:r=Gl;break;case 4:r=Rc;break;case 16:r=vs;break;case 536870912:r=Ic;break;default:r=vs}r=od(r,Zu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Zu(e,t){if(ds=-1,ps=0,B&6)throw Error(j(327));var r=e.callbackNode;if(Nr()&&e.callbackNode!==r)return null;var n=xs(e,e===ae?ce:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Ms(e,n);else{t=n;var s=B;B|=2;var o=ed();(ae!==e||ce!==t)&&(it=null,Rr=re()+500,Jt(e,t));do try{Yf();break}catch(i){qu(e,i)}while(!0);oa(),Rs.current=o,B=s,ne!==null?t=0:(ae=null,ce=0,t=oe)}if(t!==0){if(t===2&&(s=el(e),s!==0&&(n=s,t=Pl(e,s))),t===1)throw r=En,Jt(e,0),kt(e,n),Ee(e,re()),r;if(t===6)kt(e,n);else{if(s=e.current.alternate,!(n&30)&&!Gf(s)&&(t=Ms(e,n),t===2&&(o=el(e),o!==0&&(n=o,t=Pl(e,o))),t===1))throw r=En,Jt(e,0),kt(e,n),Ee(e,re()),r;switch(e.finishedWork=s,e.finishedLanes=n,t){case 0:case 1:throw Error(j(345));case 2:Wt(e,Ce,it);break;case 3:if(kt(e,n),(n&130023424)===n&&(t=ba+500-re(),10<t)){if(xs(e,0)!==0)break;if(s=e.suspendedLanes,(s&n)!==n){ye(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=il(Wt.bind(null,e,Ce,it),t);break}Wt(e,Ce,it);break;case 4:if(kt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,s=-1;0<n;){var l=31-Ye(n);o=1<<l,l=t[l],l>s&&(s=l),n&=~o}if(n=s,n=re()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Wf(n/1960))-n,10<n){e.timeoutHandle=il(Wt.bind(null,e,Ce,it),n);break}Wt(e,Ce,it);break;case 5:Wt(e,Ce,it);break;default:throw Error(j(329))}}}return Ee(e,re()),e.callbackNode===r?Zu.bind(null,e):null}function Pl(e,t){var r=cn;return e.current.memoizedState.isDehydrated&&(Jt(e,t).flags|=256),e=Ms(e,t),e!==2&&(t=Ce,Ce=r,t!==null&&Tl(t)),e}function Tl(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function Gf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var s=r[n],o=s.getSnapshot;s=s.value;try{if(!Xe(o(),s))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~ya,t&=~Xs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ye(t),n=1<<r;e[r]=-1,t&=~n}}function Ii(e){if(B&6)throw Error(j(327));Nr();var t=xs(e,0);if(!(t&1))return Ee(e,re()),null;var r=Ms(e,t);if(e.tag!==0&&r===2){var n=el(e);n!==0&&(t=n,r=Pl(e,n))}if(r===1)throw r=En,Jt(e,0),kt(e,t),Ee(e,re()),r;if(r===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wt(e,Ce,it),Ee(e,re()),null}function wa(e,t){var r=B;B|=1;try{return e(t)}finally{B=r,B===0&&(Rr=re()+500,Gs&&Ft())}}function nr(e){St!==null&&St.tag===0&&!(B&6)&&Nr();var t=B;B|=1;var r=Oe.transition,n=H;try{if(Oe.transition=null,H=1,e)return e()}finally{H=n,Oe.transition=r,B=t,!(B&6)&&Ft()}}function ka(){Pe=br.current,Y(br)}function Jt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,kf(r)),ne!==null)for(r=ne.return;r!==null;){var n=r;switch(ra(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Cs();break;case 3:_r(),Y(je),Y(ve),da();break;case 5:ua(n);break;case 4:_r();break;case 13:Y(X);break;case 19:Y(X);break;case 10:la(n.type._context);break;case 22:case 23:ka()}r=r.return}if(ae=e,ne=e=Rt(e.current,null),ce=Pe=t,oe=0,En=null,ya=Xs=rr=0,Ce=cn=null,Yt!==null){for(t=0;t<Yt.length;t++)if(r=Yt[t],n=r.interleaved,n!==null){r.interleaved=null;var s=n.next,o=r.pending;if(o!==null){var l=o.next;o.next=s,n.next=l}r.pending=n}Yt=null}return e}function qu(e,t){do{var r=ne;try{if(oa(),is.current=Ls,_s){for(var n=J.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}_s=!1}if(tr=0,le=se=J=null,ln=!1,Sn=0,xa.current=null,r===null||r.return===null){oe=1,En=t,ne=null;break}e:{var o=e,l=r.return,i=r,c=t;if(t=ce,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,g=i,m=g.tag;if(!(g.mode&1)&&(m===0||m===11||m===15)){var h=g.alternate;h?(g.updateQueue=h.updateQueue,g.memoizedState=h.memoizedState,g.lanes=h.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=wi(l);if(v!==null){v.flags&=-257,ki(v,l,i,o,t),v.mode&1&&bi(o,u,t),t=v,c=u;var x=t.updateQueue;if(x===null){var w=new Set;w.add(c),t.updateQueue=w}else x.add(c);break e}else{if(!(t&1)){bi(o,u,t),Ca();break e}c=Error(j(426))}}else if(K&&i.mode&1){var S=wi(l);if(S!==null){!(S.flags&65536)&&(S.flags|=256),ki(S,l,i,o,t),na(Lr(c,i));break e}}o=c=Lr(c,i),oe!==4&&(oe=2),cn===null?cn=[o]:cn.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=Mu(o,c,t);mi(o,f);break e;case 1:i=c;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(_t===null||!_t.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=Du(o,i,t);mi(o,b);break e}}o=o.return}while(o!==null)}rd(r)}catch(C){t=C,ne===r&&r!==null&&(ne=r=r.return);continue}break}while(!0)}function ed(){var e=Rs.current;return Rs.current=Ls,e===null?Ls:e}function Ca(){(oe===0||oe===3||oe===2)&&(oe=4),ae===null||!(rr&268435455)&&!(Xs&268435455)||kt(ae,ce)}function Ms(e,t){var r=B;B|=2;var n=ed();(ae!==e||ce!==t)&&(it=null,Jt(e,t));do try{Qf();break}catch(s){qu(e,s)}while(!0);if(oa(),B=r,Rs.current=n,ne!==null)throw Error(j(261));return ae=null,ce=0,oe}function Qf(){for(;ne!==null;)td(ne)}function Yf(){for(;ne!==null&&!xp();)td(ne)}function td(e){var t=sd(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?rd(e):ne=t,xa.current=null}function rd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Bf(r,t),r!==null){r.flags&=32767,ne=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{oe=6,ne=null;return}}else if(r=Af(r,t,Pe),r!==null){ne=r;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);oe===0&&(oe=5)}function Wt(e,t,r){var n=H,s=Oe.transition;try{Oe.transition=null,H=1,Kf(e,t,r,n)}finally{Oe.transition=s,H=n}return null}function Kf(e,t,r,n){do Nr();while(St!==null);if(B&6)throw Error(j(327));r=e.finishedWork;var s=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Pp(e,o),e===ae&&(ne=ae=null,ce=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||qn||(qn=!0,od(vs,function(){return Nr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Oe.transition,Oe.transition=null;var l=H;H=1;var i=B;B|=4,xa.current=null,Hf(e,r),Xu(r,e),hf(ll),ys=!!ol,ll=ol=null,e.current=r,Vf(r),yp(),B=i,H=l,Oe.transition=o}else e.current=r;if(qn&&(qn=!1,St=e,zs=s),o=e.pendingLanes,o===0&&(_t=null),kp(r.stateNode),Ee(e,re()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)s=t[r],n(s.value,{componentStack:s.stack,digest:s.digest});if(Is)throw Is=!1,e=Nl,Nl=null,e;return zs&1&&e.tag!==0&&Nr(),o=e.pendingLanes,o&1?e===El?un++:(un=0,El=e):un=0,Ft(),null}function Nr(){if(St!==null){var e=Mc(zs),t=Oe.transition,r=H;try{if(Oe.transition=null,H=16>e?16:e,St===null)var n=!1;else{if(e=St,St=null,zs=0,B&6)throw Error(j(331));var s=B;for(B|=4,_=e.current;_!==null;){var o=_,l=o.child;if(_.flags&16){var i=o.deletions;if(i!==null){for(var c=0;c<i.length;c++){var u=i[c];for(_=u;_!==null;){var g=_;switch(g.tag){case 0:case 11:case 15:an(8,g,o)}var m=g.child;if(m!==null)m.return=g,_=m;else for(;_!==null;){g=_;var h=g.sibling,v=g.return;if(Qu(g),g===u){_=null;break}if(h!==null){h.return=v,_=h;break}_=v}}}var x=o.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}_=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,_=l;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:an(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,_=f;break e}_=o.return}}var d=e.current;for(_=d;_!==null;){l=_;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,_=p;else e:for(l=d;_!==null;){if(i=_,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:Ks(9,i)}}catch(C){ee(i,i.return,C)}if(i===l){_=null;break e}var b=i.sibling;if(b!==null){b.return=i.return,_=b;break e}_=i.return}}if(B=s,Ft(),rt&&typeof rt.onPostCommitFiberRoot=="function")try{rt.onPostCommitFiberRoot(Bs,e)}catch{}n=!0}return n}finally{H=r,Oe.transition=t}}return!1}function zi(e,t,r){t=Lr(r,t),t=Mu(e,t,1),e=$t(e,t,1),t=ye(),e!==null&&(_n(e,1,t),Ee(e,t))}function ee(e,t,r){if(e.tag===3)zi(e,e,r);else for(;t!==null;){if(t.tag===3){zi(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(_t===null||!_t.has(n))){e=Lr(r,e),e=Du(t,e,1),t=$t(t,e,1),e=ye(),t!==null&&(_n(t,1,e),Ee(t,e));break}}t=t.return}}function Xf(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ye(),e.pingedLanes|=e.suspendedLanes&r,ae===e&&(ce&r)===r&&(oe===4||oe===3&&(ce&130023424)===ce&&500>re()-ba?Jt(e,0):ya|=r),Ee(e,t)}function nd(e,t){t===0&&(e.mode&1?(t=Hn,Hn<<=1,!(Hn&130023424)&&(Hn=4194304)):t=1);var r=ye();e=ht(e,t),e!==null&&(_n(e,t,r),Ee(e,r))}function Jf(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),nd(e,r)}function Zf(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,s=e.memoizedState;s!==null&&(r=s.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(j(314))}n!==null&&n.delete(t),nd(e,r)}var sd;sd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||je.current)Se=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Se=!1,Ff(e,t,r);Se=!!(e.flags&131072)}else Se=!1,K&&t.flags&1048576&&iu(t,Ns,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;us(e,t),e=t.pendingProps;var s=Pr(t,ve.current);jr(t,r),s=fa(null,t,n,e,s,r);var o=ma();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ne(n)?(o=!0,Ss(t)):o=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ia(t),s.updater=Ys,t.stateNode=s,s._reactInternals=t,hl(t,n,e,r),t=xl(null,t,n,!0,o,r)):(t.tag=0,K&&o&&ta(t),xe(null,t,s,r),t=t.child),t;case 16:n=t.elementType;e:{switch(us(e,t),e=t.pendingProps,s=n._init,n=s(n._payload),t.type=n,s=t.tag=em(n),e=We(n,e),s){case 0:t=vl(null,t,n,e,r);break e;case 1:t=ji(null,t,n,e,r);break e;case 11:t=Ci(null,t,n,e,r);break e;case 14:t=Si(null,t,n,We(n.type,e),r);break e}throw Error(j(306,n,""))}return t;case 0:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:We(n,s),vl(e,t,n,s,r);case 1:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:We(n,s),ji(e,t,n,s,r);case 3:e:{if(Bu(t),e===null)throw Error(j(387));n=t.pendingProps,o=t.memoizedState,s=o.element,mu(e,t),Ts(t,n,null,r);var l=t.memoizedState;if(n=l.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){s=Lr(Error(j(423)),t),t=Ni(e,t,n,r,s);break e}else if(n!==s){s=Lr(Error(j(424)),t),t=Ni(e,t,n,r,s);break e}else for(Te=Tt(t.stateNode.containerInfo.firstChild),$e=t,K=!0,Qe=null,r=pu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Tr(),n===s){t=gt(e,t,r);break e}xe(e,t,n,r)}t=t.child}return t;case 5:return hu(t),e===null&&pl(t),n=t.type,s=t.pendingProps,o=e!==null?e.memoizedProps:null,l=s.children,al(n,s)?l=null:o!==null&&al(n,o)&&(t.flags|=32),Au(e,t),xe(e,t,l,r),t.child;case 6:return e===null&&pl(t),null;case 13:return Uu(e,t,r);case 4:return ca(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=$r(t,null,n,r):xe(e,t,n,r),t.child;case 11:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:We(n,s),Ci(e,t,n,s,r);case 7:return xe(e,t,t.pendingProps,r),t.child;case 8:return xe(e,t,t.pendingProps.children,r),t.child;case 12:return xe(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,s=t.pendingProps,o=t.memoizedProps,l=s.value,W(Es,n._currentValue),n._currentValue=l,o!==null)if(Xe(o.value,l)){if(o.children===s.children&&!je.current){t=gt(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var i=o.dependencies;if(i!==null){l=o.child;for(var c=i.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=pt(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?c.next=c:(c.next=g.next,g.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),fl(o.return,r,t),i.lanes|=r;break}c=c.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(j(341));l.lanes|=r,i=l.alternate,i!==null&&(i.lanes|=r),fl(l,r,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}xe(e,t,s.children,r),t=t.child}return t;case 9:return s=t.type,n=t.pendingProps.children,jr(t,r),s=Fe(s),n=n(s),t.flags|=1,xe(e,t,n,r),t.child;case 14:return n=t.type,s=We(n,t.pendingProps),s=We(n.type,s),Si(e,t,n,s,r);case 15:return Ou(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,s=t.pendingProps,s=t.elementType===n?s:We(n,s),us(e,t),t.tag=1,Ne(n)?(e=!0,Ss(t)):e=!1,jr(t,r),zu(t,n,s),hl(t,n,s,r),xl(null,t,n,!0,e,r);case 19:return Hu(e,t,r);case 22:return Fu(e,t,r)}throw Error(j(156,t.tag))};function od(e,t){return Lc(e,t)}function qf(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function De(e,t,r,n){return new qf(e,t,r,n)}function Sa(e){return e=e.prototype,!(!e||!e.isReactComponent)}function em(e){if(typeof e=="function")return Sa(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Hl)return 11;if(e===Vl)return 14}return 2}function Rt(e,t){var r=e.alternate;return r===null?(r=De(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function fs(e,t,r,n,s,o){var l=2;if(n=e,typeof e=="function")Sa(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case ur:return Zt(r.children,s,o,t);case Ul:l=8,s|=8;break;case Fo:return e=De(12,r,t,s|2),e.elementType=Fo,e.lanes=o,e;case Ao:return e=De(13,r,t,s),e.elementType=Ao,e.lanes=o,e;case Bo:return e=De(19,r,t,s),e.elementType=Bo,e.lanes=o,e;case hc:return Js(r,s,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fc:l=10;break e;case mc:l=9;break e;case Hl:l=11;break e;case Vl:l=14;break e;case yt:l=16,n=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=De(l,r,t,s),t.elementType=e,t.type=n,t.lanes=o,t}function Zt(e,t,r,n){return e=De(7,e,n,t),e.lanes=r,e}function Js(e,t,r,n){return e=De(22,e,n,t),e.elementType=hc,e.lanes=r,e.stateNode={isHidden:!1},e}function Lo(e,t,r){return e=De(6,e,null,t),e.lanes=r,e}function Ro(e,t,r){return t=De(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tm(e,t,r,n,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fo(0),this.expirationTimes=fo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fo(0),this.identifierPrefix=n,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ja(e,t,r,n,s,o,l,i,c){return e=new tm(e,t,r,i,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=De(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},ia(o),e}function rm(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cr,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function ld(e){if(!e)return Mt;e=e._reactInternals;e:{if(or(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ne(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var r=e.type;if(Ne(r))return lu(e,r,t)}return t}function ad(e,t,r,n,s,o,l,i,c){return e=ja(r,n,!0,e,s,o,l,i,c),e.context=ld(null),r=e.current,n=ye(),s=Lt(r),o=pt(n,s),o.callback=t??null,$t(r,o,s),e.current.lanes=s,_n(e,s,n),Ee(e,n),e}function Zs(e,t,r,n){var s=t.current,o=ye(),l=Lt(s);return r=ld(r),t.context===null?t.context=r:t.pendingContext=r,t=pt(o,l),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=$t(s,t,l),e!==null&&(Ke(e,s,l,o),as(e,s,l)),l}function Ds(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mi(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Na(e,t){Mi(e,t),(e=e.alternate)&&Mi(e,t)}function nm(){return null}var id=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ea(e){this._internalRoot=e}qs.prototype.render=Ea.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));Zs(e,t,null,null)};qs.prototype.unmount=Ea.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;nr(function(){Zs(null,e,null,null)}),t[mt]=null}};function qs(e){this._internalRoot=e}qs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Fc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<wt.length&&t!==0&&t<wt[r].priority;r++);wt.splice(r,0,e),r===0&&Bc(e)}};function Pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function eo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Di(){}function sm(e,t,r,n,s){if(s){if(typeof n=="function"){var o=n;n=function(){var u=Ds(l);o.call(u)}}var l=ad(t,n,e,0,null,!1,!1,"",Di);return e._reactRootContainer=l,e[mt]=l.current,yn(e.nodeType===8?e.parentNode:e),nr(),l}for(;s=e.lastChild;)e.removeChild(s);if(typeof n=="function"){var i=n;n=function(){var u=Ds(c);i.call(u)}}var c=ja(e,0,!1,null,null,!1,!1,"",Di);return e._reactRootContainer=c,e[mt]=c.current,yn(e.nodeType===8?e.parentNode:e),nr(function(){Zs(t,c,r,n)}),c}function to(e,t,r,n,s){var o=r._reactRootContainer;if(o){var l=o;if(typeof s=="function"){var i=s;s=function(){var c=Ds(l);i.call(c)}}Zs(t,l,e,s)}else l=sm(r,t,e,s,n);return Ds(l)}Dc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=qr(t.pendingLanes);r!==0&&(Ql(t,r|1),Ee(t,re()),!(B&6)&&(Rr=re()+500,Ft()))}break;case 13:nr(function(){var n=ht(e,1);if(n!==null){var s=ye();Ke(n,e,1,s)}}),Na(e,1)}};Yl=function(e){if(e.tag===13){var t=ht(e,134217728);if(t!==null){var r=ye();Ke(t,e,134217728,r)}Na(e,134217728)}};Oc=function(e){if(e.tag===13){var t=Lt(e),r=ht(e,t);if(r!==null){var n=ye();Ke(r,e,t,n)}Na(e,t)}};Fc=function(){return H};Ac=function(e,t){var r=H;try{return H=e,t()}finally{H=r}};Jo=function(e,t,r){switch(t){case"input":if(Vo(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var s=Ws(n);if(!s)throw Error(j(90));vc(n),Vo(n,s)}}}break;case"textarea":yc(e,r);break;case"select":t=r.value,t!=null&&wr(e,!!r.multiple,t,!1)}};Nc=wa;Ec=nr;var om={usingClientEntryPoint:!1,Events:[Rn,mr,Ws,Sc,jc,wa]},Xr={findFiberByHostInstance:Qt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lm={bundleType:Xr.bundleType,version:Xr.version,rendererPackageName:Xr.rendererPackageName,rendererConfig:Xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$c(e),e===null?null:e.stateNode},findFiberByHostInstance:Xr.findFiberByHostInstance||nm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!es.isDisabled&&es.supportsFiber)try{Bs=es.inject(lm),rt=es}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=om;Le.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pa(t))throw Error(j(200));return rm(e,t,null,r)};Le.createRoot=function(e,t){if(!Pa(e))throw Error(j(299));var r=!1,n="",s=id;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ja(e,1,!1,null,null,r,!1,n,s),e[mt]=t.current,yn(e.nodeType===8?e.parentNode:e),new Ea(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=$c(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return nr(e)};Le.hydrate=function(e,t,r){if(!eo(t))throw Error(j(200));return to(null,e,t,!0,r)};Le.hydrateRoot=function(e,t,r){if(!Pa(e))throw Error(j(405));var n=r!=null&&r.hydratedSources||null,s=!1,o="",l=id;if(r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=ad(t,null,e,1,r??null,s,!1,o,l),e[mt]=t.current,yn(e),n)for(e=0;e<n.length;e++)r=n[e],s=r._getVersion,s=s(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,s]:t.mutableSourceEagerHydrationData.push(r,s);return new qs(t)};Le.render=function(e,t,r){if(!eo(t))throw Error(j(200));return to(null,e,t,!1,r)};Le.unmountComponentAtNode=function(e){if(!eo(e))throw Error(j(40));return e._reactRootContainer?(nr(function(){to(null,null,e,!1,function(){e._reactRootContainer=null,e[mt]=null})}),!0):!1};Le.unstable_batchedUpdates=wa;Le.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!eo(r))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return to(e,t,r,!1,n)};Le.version="18.3.1-next-f1338f8080-20240426";function cd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cd)}catch(e){console.error(e)}}cd(),cc.exports=Le;var am=cc.exports,Oi=am;Do.createRoot=Oi.createRoot,Do.hydrateRoot=Oi.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pn(){return Pn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Pn.apply(this,arguments)}var jt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(jt||(jt={}));const Fi="popstate";function im(e){e===void 0&&(e={});function t(n,s){let{pathname:o,search:l,hash:i}=n.location;return $l("",{pathname:o,search:l,hash:i},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function r(n,s){return typeof s=="string"?s:Os(s)}return um(t,r,null,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ud(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function cm(){return Math.random().toString(36).substr(2,8)}function Ai(e,t){return{usr:e.state,key:e.key,idx:t}}function $l(e,t,r,n){return r===void 0&&(r=null),Pn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Or(t):t,{state:r,key:t&&t.key||n||cm()})}function Os(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function Or(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function um(e,t,r,n){n===void 0&&(n={});let{window:s=document.defaultView,v5Compat:o=!1}=n,l=s.history,i=jt.Pop,c=null,u=g();u==null&&(u=0,l.replaceState(Pn({},l.state,{idx:u}),""));function g(){return(l.state||{idx:null}).idx}function m(){i=jt.Pop;let S=g(),f=S==null?null:S-u;u=S,c&&c({action:i,location:w.location,delta:f})}function h(S,f){i=jt.Push;let d=$l(w.location,S,f);u=g()+1;let p=Ai(d,u),b=w.createHref(d);try{l.pushState(p,"",b)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;s.location.assign(b)}o&&c&&c({action:i,location:w.location,delta:1})}function v(S,f){i=jt.Replace;let d=$l(w.location,S,f);u=g();let p=Ai(d,u),b=w.createHref(d);l.replaceState(p,"",b),o&&c&&c({action:i,location:w.location,delta:0})}function x(S){let f=s.location.origin!=="null"?s.location.origin:s.location.href,d=typeof S=="string"?S:Os(S);return d=d.replace(/ $/,"%20"),te(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let w={get action(){return i},get location(){return e(s,l)},listen(S){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Fi,m),c=S,()=>{s.removeEventListener(Fi,m),c=null}},createHref(S){return t(s,S)},createURL:x,encodeLocation(S){let f=x(S);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:v,go(S){return l.go(S)}};return w}var Bi;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Bi||(Bi={}));function dm(e,t,r){return r===void 0&&(r="/"),pm(e,t,r)}function pm(e,t,r,n){let s=typeof t=="string"?Or(t):t,o=Ir(s.pathname||"/",r);if(o==null)return null;let l=dd(e);fm(l);let i=null;for(let c=0;i==null&&c<l.length;++c){let u=Sm(o);i=km(l[c],u)}return i}function dd(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let s=(o,l,i)=>{let c={relativePath:i===void 0?o.path||"":i,caseSensitive:o.caseSensitive===!0,childrenIndex:l,route:o};c.relativePath.startsWith("/")&&(te(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let u=It([n,c.relativePath]),g=r.concat(c);o.children&&o.children.length>0&&(te(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),dd(o.children,t,g,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:bm(u,o.index),routesMeta:g})};return e.forEach((o,l)=>{var i;if(o.path===""||!((i=o.path)!=null&&i.includes("?")))s(o,l);else for(let c of pd(o.path))s(o,l,c)}),t}function pd(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,s=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return s?[o,""]:[o];let l=pd(n.join("/")),i=[];return i.push(...l.map(c=>c===""?o:[o,c].join("/"))),s&&i.push(...l),i.map(c=>e.startsWith("/")&&c===""?"/":c)}function fm(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:wm(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const mm=/^:[\w-]+$/,hm=3,gm=2,vm=1,xm=10,ym=-2,Ui=e=>e==="*";function bm(e,t){let r=e.split("/"),n=r.length;return r.some(Ui)&&(n+=ym),t&&(n+=gm),r.filter(s=>!Ui(s)).reduce((s,o)=>s+(mm.test(o)?hm:o===""?vm:xm),n)}function wm(e,t){return e.length===t.length&&e.slice(0,-1).every((n,s)=>n===t[s])?e[e.length-1]-t[t.length-1]:0}function km(e,t,r){let{routesMeta:n}=e,s={},o="/",l=[];for(let i=0;i<n.length;++i){let c=n[i],u=i===n.length-1,g=o==="/"?t:t.slice(o.length)||"/",m=_l({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},g),h=c.route;if(!m)return null;Object.assign(s,m.params),l.push({params:s,pathname:It([o,m.pathname]),pathnameBase:Pm(It([o,m.pathnameBase])),route:h}),m.pathnameBase!=="/"&&(o=It([o,m.pathnameBase]))}return l}function _l(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=Cm(e.path,e.caseSensitive,e.end),s=t.match(r);if(!s)return null;let o=s[0],l=o.replace(/(.)\/+$/,"$1"),i=s.slice(1);return{params:n.reduce((u,g,m)=>{let{paramName:h,isOptional:v}=g;if(h==="*"){let w=i[m]||"";l=o.slice(0,o.length-w.length).replace(/(.)\/+$/,"$1")}const x=i[m];return v&&!x?u[h]=void 0:u[h]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function Cm(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),ud(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,i,c)=>(n.push({paramName:i,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),n]}function Sm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ud(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ir(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function jm(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:s=""}=typeof e=="string"?Or(e):e;return{pathname:r?r.startsWith("/")?r:Nm(r,t):t,search:Tm(n),hash:$m(s)}}function Nm(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function Io(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Em(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function fd(e,t){let r=Em(e);return t?r.map((n,s)=>s===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function md(e,t,r,n){n===void 0&&(n=!1);let s;typeof e=="string"?s=Or(e):(s=Pn({},e),te(!s.pathname||!s.pathname.includes("?"),Io("?","pathname","search",s)),te(!s.pathname||!s.pathname.includes("#"),Io("#","pathname","hash",s)),te(!s.search||!s.search.includes("#"),Io("#","search","hash",s)));let o=e===""||s.pathname==="",l=o?"/":s.pathname,i;if(l==null)i=r;else{let m=t.length-1;if(!n&&l.startsWith("..")){let h=l.split("/");for(;h[0]==="..";)h.shift(),m-=1;s.pathname=h.join("/")}i=m>=0?t[m]:"/"}let c=jm(s,i),u=l&&l!=="/"&&l.endsWith("/"),g=(o||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||g)&&(c.pathname+="/"),c}const It=e=>e.join("/").replace(/\/\/+/g,"/"),Pm=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Tm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$m=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function _m(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const hd=["post","put","patch","delete"];new Set(hd);const Lm=["get",...hd];new Set(Lm);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tn(){return Tn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Tn.apply(this,arguments)}const ro=y.createContext(null),gd=y.createContext(null),At=y.createContext(null),no=y.createContext(null),lr=y.createContext({outlet:null,matches:[],isDataRoute:!1}),vd=y.createContext(null);function Rm(e,t){let{relative:r}=t===void 0?{}:t;zn()||te(!1);let{basename:n,navigator:s}=y.useContext(At),{hash:o,pathname:l,search:i}=so(e,{relative:r}),c=l;return n!=="/"&&(c=l==="/"?n:It([n,l])),s.createHref({pathname:c,search:i,hash:o})}function zn(){return y.useContext(no)!=null}function Mn(){return zn()||te(!1),y.useContext(no).location}function xd(e){y.useContext(At).static||y.useLayoutEffect(e)}function Im(){let{isDataRoute:e}=y.useContext(lr);return e?Qm():zm()}function zm(){zn()||te(!1);let e=y.useContext(ro),{basename:t,future:r,navigator:n}=y.useContext(At),{matches:s}=y.useContext(lr),{pathname:o}=Mn(),l=JSON.stringify(fd(s,r.v7_relativeSplatPath)),i=y.useRef(!1);return xd(()=>{i.current=!0}),y.useCallback(function(u,g){if(g===void 0&&(g={}),!i.current)return;if(typeof u=="number"){n.go(u);return}let m=md(u,JSON.parse(l),o,g.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:It([t,m.pathname])),(g.replace?n.replace:n.push)(m,g.state,g)},[t,n,l,o,e])}function so(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=y.useContext(At),{matches:s}=y.useContext(lr),{pathname:o}=Mn(),l=JSON.stringify(fd(s,n.v7_relativeSplatPath));return y.useMemo(()=>md(e,JSON.parse(l),o,r==="path"),[e,l,o,r])}function Mm(e,t){return Dm(e,t)}function Dm(e,t,r,n){zn()||te(!1);let{navigator:s}=y.useContext(At),{matches:o}=y.useContext(lr),l=o[o.length-1],i=l?l.params:{};l&&l.pathname;let c=l?l.pathnameBase:"/";l&&l.route;let u=Mn(),g;if(t){var m;let S=typeof t=="string"?Or(t):t;c==="/"||(m=S.pathname)!=null&&m.startsWith(c)||te(!1),g=S}else g=u;let h=g.pathname||"/",v=h;if(c!=="/"){let S=c.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(S.length).join("/")}let x=dm(e,{pathname:v}),w=Um(x&&x.map(S=>Object.assign({},S,{params:Object.assign({},i,S.params),pathname:It([c,s.encodeLocation?s.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:It([c,s.encodeLocation?s.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),o,r,n);return t&&w?y.createElement(no.Provider,{value:{location:Tn({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:jt.Pop}},w):w}function Om(){let e=Gm(),t=_m(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),r?y.createElement("pre",{style:s},r):null,null)}const Fm=y.createElement(Om,null);class Am extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?y.createElement(lr.Provider,{value:this.props.routeContext},y.createElement(vd.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Bm(e){let{routeContext:t,match:r,children:n}=e,s=y.useContext(ro);return s&&s.static&&s.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=r.route.id),y.createElement(lr.Provider,{value:t},n)}function Um(e,t,r,n){var s;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var o;if(!r)return null;if(r.errors)e=r.matches;else if((o=n)!=null&&o.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let l=e,i=(s=r)==null?void 0:s.errors;if(i!=null){let g=l.findIndex(m=>m.route.id&&(i==null?void 0:i[m.route.id])!==void 0);g>=0||te(!1),l=l.slice(0,Math.min(l.length,g+1))}let c=!1,u=-1;if(r&&n&&n.v7_partialHydration)for(let g=0;g<l.length;g++){let m=l[g];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(u=g),m.route.id){let{loaderData:h,errors:v}=r,x=m.route.loader&&h[m.route.id]===void 0&&(!v||v[m.route.id]===void 0);if(m.route.lazy||x){c=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((g,m,h)=>{let v,x=!1,w=null,S=null;r&&(v=i&&m.route.id?i[m.route.id]:void 0,w=m.route.errorElement||Fm,c&&(u<0&&h===0?(Ym("route-fallback"),x=!0,S=null):u===h&&(x=!0,S=m.route.hydrateFallbackElement||null)));let f=t.concat(l.slice(0,h+1)),d=()=>{let p;return v?p=w:x?p=S:m.route.Component?p=y.createElement(m.route.Component,null):m.route.element?p=m.route.element:p=g,y.createElement(Bm,{match:m,routeContext:{outlet:g,matches:f,isDataRoute:r!=null},children:p})};return r&&(m.route.ErrorBoundary||m.route.errorElement||h===0)?y.createElement(Am,{location:r.location,revalidation:r.revalidation,component:w,error:v,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var yd=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(yd||{}),bd=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(bd||{});function Hm(e){let t=y.useContext(ro);return t||te(!1),t}function Vm(e){let t=y.useContext(gd);return t||te(!1),t}function Wm(e){let t=y.useContext(lr);return t||te(!1),t}function wd(e){let t=Wm(),r=t.matches[t.matches.length-1];return r.route.id||te(!1),r.route.id}function Gm(){var e;let t=y.useContext(vd),r=Vm(),n=wd();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function Qm(){let{router:e}=Hm(yd.UseNavigateStable),t=wd(bd.UseNavigateStable),r=y.useRef(!1);return xd(()=>{r.current=!0}),y.useCallback(function(s,o){o===void 0&&(o={}),r.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,Tn({fromRouteId:t},o)))},[e,t])}const Hi={};function Ym(e,t,r){Hi[e]||(Hi[e]=!0)}function Km(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Gt(e){te(!1)}function Xm(e){let{basename:t="/",children:r=null,location:n,navigationType:s=jt.Pop,navigator:o,static:l=!1,future:i}=e;zn()&&te(!1);let c=t.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:c,navigator:o,static:l,future:Tn({v7_relativeSplatPath:!1},i)}),[c,i,o,l]);typeof n=="string"&&(n=Or(n));let{pathname:g="/",search:m="",hash:h="",state:v=null,key:x="default"}=n,w=y.useMemo(()=>{let S=Ir(g,c);return S==null?null:{location:{pathname:S,search:m,hash:h,state:v,key:x},navigationType:s}},[c,g,m,h,v,x,s]);return w==null?null:y.createElement(At.Provider,{value:u},y.createElement(no.Provider,{children:r,value:w}))}function Jm(e){let{children:t,location:r}=e;return Mm(Ll(t),r)}new Promise(()=>{});function Ll(e,t){t===void 0&&(t=[]);let r=[];return y.Children.forEach(e,(n,s)=>{if(!y.isValidElement(n))return;let o=[...t,s];if(n.type===y.Fragment){r.push.apply(r,Ll(n.props.children,o));return}n.type!==Gt&&te(!1),!n.props.index||!n.props.children||te(!1);let l={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=Ll(n.props.children,o)),r.push(l)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fs(){return Fs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Fs.apply(this,arguments)}function kd(e,t){if(e==null)return{};var r={},n=Object.keys(e),s,o;for(o=0;o<n.length;o++)s=n[o],!(t.indexOf(s)>=0)&&(r[s]=e[s]);return r}function Zm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function qm(e,t){return e.button===0&&(!t||t==="_self")&&!Zm(e)}const eh=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],th=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],rh="6";try{window.__reactRouterVersion=rh}catch{}const nh=y.createContext({isTransitioning:!1}),sh="startTransition",Vi=Kd[sh];function oh(e){let{basename:t,children:r,future:n,window:s}=e,o=y.useRef();o.current==null&&(o.current=im({window:s,v5Compat:!0}));let l=o.current,[i,c]=y.useState({action:l.action,location:l.location}),{v7_startTransition:u}=n||{},g=y.useCallback(m=>{u&&Vi?Vi(()=>c(m)):c(m)},[c,u]);return y.useLayoutEffect(()=>l.listen(g),[l,g]),y.useEffect(()=>Km(n),[n]),y.createElement(Xm,{basename:t,children:r,location:i.location,navigationType:i.action,navigator:l,future:n})}const lh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ah=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xt=y.forwardRef(function(t,r){let{onClick:n,relative:s,reloadDocument:o,replace:l,state:i,target:c,to:u,preventScrollReset:g,viewTransition:m}=t,h=kd(t,eh),{basename:v}=y.useContext(At),x,w=!1;if(typeof u=="string"&&ah.test(u)&&(x=u,lh))try{let p=new URL(window.location.href),b=u.startsWith("//")?new URL(p.protocol+u):new URL(u),C=Ir(b.pathname,v);b.origin===p.origin&&C!=null?u=C+b.search+b.hash:w=!0}catch{}let S=Rm(u,{relative:s}),f=ch(u,{replace:l,state:i,target:c,preventScrollReset:g,relative:s,viewTransition:m});function d(p){n&&n(p),p.defaultPrevented||f(p)}return y.createElement("a",Fs({},h,{href:x||S,onClick:w||o?n:d,ref:r,target:c}))}),Wi=y.forwardRef(function(t,r){let{"aria-current":n="page",caseSensitive:s=!1,className:o="",end:l=!1,style:i,to:c,viewTransition:u,children:g}=t,m=kd(t,th),h=so(c,{relative:m.relative}),v=Mn(),x=y.useContext(gd),{navigator:w,basename:S}=y.useContext(At),f=x!=null&&uh(h)&&u===!0,d=w.encodeLocation?w.encodeLocation(h).pathname:h.pathname,p=v.pathname,b=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;s||(p=p.toLowerCase(),b=b?b.toLowerCase():null,d=d.toLowerCase()),b&&S&&(b=Ir(b,S)||b);const C=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let P=p===d||!l&&p.startsWith(d)&&p.charAt(C)==="/",N=b!=null&&(b===d||!l&&b.startsWith(d)&&b.charAt(d.length)==="/"),L={isActive:P,isPending:N,isTransitioning:f},F=P?n:void 0,D;typeof o=="function"?D=o(L):D=[o,P?"active":null,N?"pending":null,f?"transitioning":null].filter(Boolean).join(" ");let G=typeof i=="function"?i(L):i;return y.createElement(Xt,Fs({},m,{"aria-current":F,className:D,ref:r,style:G,to:c,viewTransition:u}),typeof g=="function"?g(L):g)});var Rl;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Rl||(Rl={}));var Gi;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Gi||(Gi={}));function ih(e){let t=y.useContext(ro);return t||te(!1),t}function ch(e,t){let{target:r,replace:n,state:s,preventScrollReset:o,relative:l,viewTransition:i}=t===void 0?{}:t,c=Im(),u=Mn(),g=so(e,{relative:l});return y.useCallback(m=>{if(qm(m,r)){m.preventDefault();let h=n!==void 0?n:Os(u)===Os(g);c(e,{replace:h,state:s,preventScrollReset:o,relative:l,viewTransition:i})}},[u,c,g,n,s,r,e,o,l,i])}function uh(e,t){t===void 0&&(t={});let r=y.useContext(nh);r==null&&te(!1);let{basename:n}=ih(Rl.useViewTransitionState),s=so(e,{relative:t.relative});if(!r.isTransitioning)return!1;let o=Ir(r.currentLocation.pathname,n)||r.currentLocation.pathname,l=Ir(r.nextLocation.pathname,n)||r.nextLocation.pathname;return _l(s.pathname,l)!=null||_l(s.pathname,o)!=null}function Qi(e){return`px-4 py-2 rounded-md font-medium transition-colors ${e?"bg-blue-600 text-white":"text-gray-600 hover:text-gray-800"}`}function dh(){return a.jsx("nav",{className:"w-full bg-white border-b",children:a.jsxs("div",{className:"container mx-auto flex items-center justify-between py-4 px-4",children:[a.jsx(Xt,{to:"/",className:"text-2xl font-bold text-gray-800",children:"ToggleBox"}),a.jsxs("div",{className:"bg-white rounded-lg p-1",children:[a.jsx(Wi,{to:"/interactive",className:({isActive:e})=>Qi(e),children:"🎨 Stylesheet Builder"}),a.jsx(Wi,{to:"/color-picker",className:({isActive:e})=>Qi(e),children:"Color Picker"})]})]})})}const ph=()=>a.jsxs("div",{"data-testid":"html-template",className:"preview-template p-6 max-w-4xl mx-auto bg-white",children:[a.jsxs("section",{className:"mb-8",children:[a.jsx("h1",{className:"preview-heading text-3xl font-bold mb-4 text-gray-900",children:"Main Heading - Typography Showcase"}),a.jsx("h2",{className:"preview-subheading text-2xl font-semibold mb-3 text-gray-800",children:"Secondary Heading - Web Design Elements"}),a.jsx("h3",{className:"text-xl font-medium mb-3 text-gray-700",children:"Third Level Heading - Visual Hierarchy"}),a.jsx("h4",{className:"text-lg font-medium mb-2 text-gray-600",children:"Fourth Level Heading - Content Structure"}),a.jsx("h5",{className:"text-base font-medium mb-2 text-gray-600",children:"Fifth Level Heading - Detail Organization"}),a.jsx("h6",{className:"text-sm font-medium mb-2 text-gray-500",children:"Sixth Level Heading - Fine Print"})]}),a.jsxs("section",{className:"mb-8",children:[a.jsx("p",{className:"preview-text text-base leading-relaxed mb-4 text-gray-700",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This paragraph demonstrates how text flows and wraps in different container widths. Typography is the art and technique of arranging type to make written language legible, readable, and appealing when displayed."}),a.jsx("p",{className:"preview-text text-base leading-relaxed mb-4 text-gray-700",children:"The quick brown fox jumps over the lazy dog. This sentence contains every letter of the alphabet and is commonly used for font testing. Special characters include: © 2024 ToggleBox™, user@example.com, $129.99, 50% off, and symbols like &, @, #, %, and *."}),a.jsx("p",{className:"preview-text text-base leading-relaxed mb-4 text-gray-600","data-testid":"responsive-text",children:a.jsx("span",{className:"text-sm md:text-base lg:text-lg",children:"This paragraph demonstrates responsive typography with different sizes across screen widths. It showcases how text can adapt to various viewport dimensions while maintaining readability."})})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"flex flex-wrap gap-4 mb-4",children:[a.jsx("button",{className:"preview-button px-4 py-2 rounded-md font-medium transition-colors bg-blue-600 text-white hover:bg-blue-700",children:"Primary Button"}),a.jsx("button",{className:"preview-button px-4 py-2 rounded-md font-medium transition-colors bg-gray-200 text-gray-800 hover:bg-gray-300",children:"Secondary Button"}),a.jsx("button",{className:"preview-button px-4 py-2 rounded-md font-medium transition-colors border border-blue-600 text-blue-600 hover:bg-blue-50",children:"Outline Button"})]})}),a.jsx("section",{className:"mb-8",children:a.jsxs("form",{className:"bg-gray-50 p-6 rounded-lg",children:[a.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-800",children:"Sample Form"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4",children:[a.jsxs("div",{children:[a.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email Address"}),a.jsx("input",{type:"email",id:"email",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"your@email.com"})]}),a.jsxs("div",{children:[a.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-1",children:"Password"}),a.jsx("input",{type:"password",id:"password",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"••••••••"})]})]}),a.jsxs("div",{className:"mb-4",children:[a.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-1",children:"Message"}),a.jsx("textarea",{id:"message",rows:"4",className:"w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500",placeholder:"Your message here..."})]}),a.jsx("button",{type:"submit",className:"preview-button px-6 py-2 rounded-md font-medium transition-colors bg-green-600 text-white hover:bg-green-700",children:"Submit Form"})]})}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3 text-gray-800",children:"Unordered List"}),a.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-700",children:[a.jsx("li",{children:"First list item with standard content"}),a.jsx("li",{children:"Second item demonstrating list styling"}),a.jsxs("li",{children:["Third item with ",a.jsx("strong",{children:"bold text"})," and ",a.jsx("em",{children:"emphasis"})]}),a.jsxs("li",{children:["Fourth item containing a ",a.jsx("a",{href:"#",className:"text-blue-600 hover:underline",children:"hyperlink example"})]})]})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-semibold mb-3 text-gray-800",children:"Ordered List"}),a.jsxs("ol",{className:"list-decimal list-inside space-y-2 text-gray-700",children:[a.jsx("li",{children:"First numbered item"}),a.jsx("li",{children:"Second numbered item"}),a.jsx("li",{children:"Third item with nested content"}),a.jsx("li",{children:"Fourth item completing the sequence"})]})]})]})}),a.jsxs("section",{className:"mb-8",children:[a.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-800",children:"Responsive Card Grid"}),a.jsxs("div",{"data-testid":"responsive-grid",className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[a.jsxs("div",{"data-testid":"card-1",className:"preview-card p-4 rounded-lg shadow-sm border bg-white",children:[a.jsx("h4",{className:"font-semibold mb-2 text-gray-800",children:"Card Title One"}),a.jsx("p",{className:"text-gray-600 text-sm",children:"This card demonstrates responsive layout behavior and shadow effects."})]}),a.jsxs("div",{"data-testid":"card-2",className:"preview-card p-4 rounded-lg shadow-sm border bg-white",children:[a.jsx("h4",{className:"font-semibold mb-2 text-gray-800",children:"Card Title Two"}),a.jsx("p",{className:"text-gray-600 text-sm",children:"Each card adapts to different screen sizes while maintaining consistent spacing."})]}),a.jsxs("div",{"data-testid":"card-3",className:"preview-card p-4 rounded-lg shadow-sm border bg-white",children:[a.jsx("h4",{className:"font-semibold mb-2 text-gray-800",children:"Card Title Three"}),a.jsx("p",{className:"text-gray-600 text-sm",children:"The grid system demonstrates mobile-first responsive design principles."})]})]})]}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{"data-testid":"gradient-showcase",className:"bg-gradient-to-r from-purple-500 to-pink-500 p-8 rounded-lg text-white text-center",children:[a.jsx("h3",{className:"text-xl font-bold mb-2",children:"Gradient Background Demonstration"}),a.jsx("p",{className:"text-purple-100",children:"This section showcases gradient backgrounds that can be dynamically modified for color, direction, and stop points in the CSS preview engine."})]})}),a.jsx("section",{className:"mb-8",children:a.jsxs("div",{className:"bg-gray-100 p-6 rounded-lg",children:[a.jsx("h3",{className:"text-lg font-semibold mb-3 text-gray-800",children:"Additional Typography Testing"}),a.jsxs("p",{className:"text-gray-700 mb-3",children:[a.jsx("strong",{children:"Bold text"}),", ",a.jsx("em",{children:"italic text"}),", ",a.jsx("u",{children:"underlined text"}),",",a.jsx("span",{className:"line-through",children:"strikethrough text"}),", and",a.jsx("code",{className:"bg-gray-200 px-1 rounded font-mono",children:"inline code"}),"."]}),a.jsx("blockquote",{className:"border-l-4 border-blue-500 pl-4 italic text-gray-600",children:'"This blockquote demonstrates how quoted content appears with custom styling and proper semantic markup for accessibility and SEO."'})]})})]});class Il{static sanitizeHtml(t){return!t||typeof t!="string"?"":t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"").replace(/\son\w+\s*=\s*["'][^"']*["']/gi,"").replace(/\son\w+\s*=\s*[^>\s]+/gi,"").replace(/javascript:/gi,"")}static sanitizeCss(t){return!t||typeof t!="string"?"":t.replace(/@import\s+[^;]+;?/gi,"").replace(/expression\s*\([^)]*\)/gi,"").replace(/javascript:/gi,"").replace(/vbscript:/gi,"").replace(/behavior\s*:/gi,"").replace(/-moz-binding/gi,"")}static createSecureDocument(t,r){const n=this.sanitizeHtml(t),s=this.sanitizeCss(r);return`
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
    `}}const fh=({htmlContent:e,cssContent:t,sanitizer:r=Il})=>{const[n,s]=y.useState(null),[o,l]=y.useState(!1),i=y.useMemo(()=>{try{if(s(null),l(!0),!e&&!t)return r.createErrorDocument("No content to display");const m=r.validateHtmlSecurity(e||""),h=r.validateCssSecurity(t||"");m.isSecure||console.warn("HTML security violations detected:",m.violations),h.isSecure||console.warn("CSS security violations detected:",h.violations);const v=r.createSecureDocument(m.sanitizedContent,h.sanitizedContent);return l(!1),v}catch(m){return console.error("Error generating iframe content:",m),s(m.message),l(!1),r.createErrorDocument("Failed to generate content")}},[e,t,r]),c=y.useMemo(()=>{try{return`data:text/html;charset=utf-8,${encodeURIComponent(i)}`}catch(m){return console.error("Error encoding iframe content:",m),s("Failed to encode content"),"data:text/html;charset=utf-8,"+encodeURIComponent(Il.createErrorDocument("Failed to encode content"))}},[i]),u=y.useCallback(()=>{s(null),l(!0),setTimeout(()=>l(!1),100)},[]),g=y.useCallback(()=>{const m=r.validateHtmlSecurity(e||""),h=r.validateCssSecurity(t||"");return{isSecure:m.isSecure&&h.isSecure,htmlViolations:m.violations,cssViolations:h.violations,totalViolations:m.violations.length+h.violations.length}},[e,t,r]);return{iframeSrc:c,isLoading:o,error:n,refreshContent:u,getSecurityInfo:g,secureContent:i}},mh=()=>{const e=y.useCallback(r=>{if(!r||typeof r!="string")return{isValid:!1,error:"HTML content must be a non-empty string"};const n=[/<script/i,/on\w+\s*=/i,/javascript:/i,/<iframe/i,/<embed/i,/<object/i];for(const s of n)if(s.test(r))return{isValid:!1,error:`Content contains potentially unsafe patterns: ${s}`};return{isValid:!0,error:null}},[]),t=y.useCallback(r=>!r||typeof r!="string"?r:r.replace(/@import\s+[^;]+;?/gi,"").replace(/expression\s*\([^)]*\)/gi,"").replace(/javascript:/gi,"").replace(/vbscript:/gi,""),[]);return{validateContent:e,updateCss:t}},Cd=y.forwardRef(({src:e,className:t="",height:r="600px",allowScripts:n=!1,onLoad:s,onError:o,loading:l=!1,error:i=null,title:c="ToggleBox CSS Preview - Secure Sandbox Environment",style:u={}},g)=>{const m=y.useRef(null),h=g||m;y.useEffect(()=>{const d=h.current;if(!d)return;const p=()=>{s==null||s()},b=C=>{console.warn("IframeRenderer: Failed to load content",C),o==null||o(C)};return d.addEventListener("load",p),d.addEventListener("error",b),()=>{d.removeEventListener("load",p),d.removeEventListener("error",b)}},[s,o,h]);const v={width:"100%",height:r,border:"none",borderRadius:"8px",boxShadow:"0 2px 8px rgba(0, 0, 0, 0.1)",backgroundColor:"#ffffff",transition:"opacity 0.2s ease",...u},x={position:"relative",display:"inline-block",width:"100%"},w={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:10,display:l?"block":"none"},S={position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.9)",display:i?"flex":"none",alignItems:"center",justifyContent:"center",flexDirection:"column",zIndex:20,borderRadius:"8px",border:"2px dashed #dc2626"},f=n?"allow-same-origin allow-scripts":"allow-same-origin";return a.jsxs("div",{className:`iframe-preview-container ${t}`.trim(),style:x,children:[a.jsx("div",{style:w,children:a.jsxs("div",{className:"loading-spinner",children:[a.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"}),a.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"Loading preview..."})]})}),a.jsx("div",{style:S,children:a.jsxs("div",{className:"text-center p-6",children:[a.jsx("div",{className:"text-red-500 text-4xl mb-2",children:"⚠️"}),a.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-1",children:"Preview Error"}),a.jsx("p",{className:"text-sm text-gray-600 mb-3",children:i}),a.jsx("button",{onClick:()=>window.location.reload(),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm",children:"Retry"})]})}),a.jsx("iframe",{ref:h,"data-testid":"preview-iframe",title:c,src:e,sandbox:f,style:{...v,opacity:l||i?.5:1},loading:"lazy",referrerPolicy:"no-referrer",allow:"",credentialless:""})]})});Cd.displayName="IframeRenderer";const hh=({htmlContent:e="",cssContent:t="",className:r="",height:n="600px",onLoad:s,onError:o,allowScripts:l=!1,showLoadingState:i=!0,showErrorState:c=!0,customSanitizer:u=Il})=>{const{iframeSrc:g,isLoading:m,error:h,getSecurityInfo:v}=fh({htmlContent:e,cssContent:t,sanitizer:u});mh();const x=()=>{const S=v();S.totalViolations>0&&console.warn("Security violations detected in preview content:",S),s==null||s()},w=S=>{console.error("IframePreview error:",S),o==null||o(S)};return h&&!c&&console.error("IframePreview: Critical error occurred but error display is disabled:",h),a.jsxs("div",{className:"iframe-preview-wrapper",children:[a.jsx(Cd,{src:g,height:n,allowScripts:l,onLoad:x,onError:w,loading:i&&m,error:c?h:null,className:r}),!1]})},oo=({htmlContent:e="",cssContent:t="",className:r="",height:n="600px",onLoad:s,onError:o,allowScripts:l=!1})=>a.jsx(hh,{htmlContent:e,cssContent:t,className:r,height:n,onLoad:s,onError:o,allowScripts:l,showLoadingState:!0,showErrorState:!0});class gh{constructor(){this.template=null,this.components=null,this.options={}}setTemplate(t){return this.template=t,this}withComponents(t){return this.components=t,this}withOptions(t){return this.options={...this.options,...t},this}build(){if(!this.template||!this.components)throw new Error("Template and ComponentLibrary must be set before building");const t=this.getTemplateConfig(this.template);return this.components.render(t,this.options)}getTemplateConfig(t){const r={sample:{sections:["hero","typography","buttons","forms","lists","cards","gradient"],layout:"standard",defaultOptions:{title:"Main Heading - Typography Showcase",subtitle:"Web Design Elements - Visual Hierarchy",showButtons:!0,cardCount:3,showActions:!1,showValidation:!0}},sixCards:{sections:["hero","alerts","cards","buttons"],layout:"showcase",defaultOptions:{title:"Six Cards Interactive Demo",subtitle:"Real-time CSS Styling with Live Preview",cardCount:6,showActions:!0,showVariants:!0,containerClass:"preview-template p-6 max-w-6xl mx-auto bg-white"}},professional:{sections:["hero","alerts","cards","forms","buttons"],layout:"professional",defaultOptions:{title:"Professional Dashboard Demo",subtitle:"Advanced UI Components with Interactive Styling",cardCount:4,showActions:!0,showVariants:!0,showValidation:!0,containerClass:"preview-template p-8 max-w-7xl mx-auto bg-white"}},minimal:{sections:["hero","buttons","cards"],layout:"minimal",defaultOptions:{title:"Minimal Preview",subtitle:"",cardCount:2,showActions:!1,showVariants:!1,containerClass:"preview-template p-4 max-w-3xl mx-auto bg-white"}},typography:{sections:["typography","lists"],layout:"standard",defaultOptions:{containerClass:"preview-template p-6 max-w-4xl mx-auto bg-white typography-focus"}},forms:{sections:["hero","forms","buttons"],layout:"standard",defaultOptions:{title:"Form Components Demo",subtitle:"Interactive Form Elements and Validation",showValidation:!0,showVariants:!1}},alerts:{sections:["hero","alerts","buttons"],layout:"standard",defaultOptions:{title:"Alert Components Showcase",subtitle:"Different alert types and styling options"}}},n=r[t];return n?{...n,defaultOptions:{...n.defaultOptions,...this.options}}:(console.warn(`Template "${t}" not found, using "sample" template`),r.sample)}getAvailableTemplates(){return["sample","sixCards","professional","minimal","typography","forms","alerts"]}getTemplateDescription(t){return{sample:"Comprehensive showcase with all component types",sixCards:"Interactive demo focused on card layouts",professional:"Advanced UI components for dashboard-style layouts",minimal:"Simple preview with essential components",typography:"Text-focused template for typography testing",forms:"Form elements and validation showcase",alerts:"Alert components with different states and styles"}[t]||"Template description not available"}reset(){return this.template=null,this.components=null,this.options={},this}validateTemplate(t){const r=this.getTemplateConfig(t),n=[];return(!r.sections||!Array.isArray(r.sections))&&n.push("Template must have a sections array"),r.sections&&r.sections.length===0&&n.push("Template must have at least one section"),r.layout||n.push("Template must specify a layout"),{isValid:n.length===0,errors:n}}}class vh{constructor(){this.components={hero:this.createHeroComponent,typography:this.createTypographyComponent,buttons:this.createButtonsComponent,cards:this.createCardsComponent,forms:this.createFormsComponent,alerts:this.createAlertsComponent,lists:this.createListsComponent,gradient:this.createGradientComponent}}render(t,r={}){const{sections:n,layout:s}=t,o=n.map(l=>{const i=this.components[l.replace("-showcase","").replace("cards-","cards").replace("buttons-system","buttons")];return i?i.call(this,r):""}).filter(Boolean);return this.wrapInLayout(o.join(`
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
    `}wrapInLayout(t,r="standard",n={}){const{containerClass:s="preview-template p-6 max-w-4xl mx-auto bg-white"}=n,o={standard:`<div data-testid="html-template" class="${s}">${t}</div>`,showcase:`<div data-testid="html-template" class="${s} showcase-layout">${t}</div>`,professional:`<div data-testid="html-template" class="${s} professional-layout">${t}</div>`,minimal:`<div data-testid="html-template" class="${s} minimal-layout">${t}</div>`};return o[r]||o.standard}}class xh{constructor(){this.builder=new gh,this.components=new vh}generateContent(t,r={}){try{return this.builder.setTemplate(t).withComponents(this.components).withOptions(r).build()}catch(n){return console.error("Content generation failed:",n),this.generateFallbackContent(n.message)}}generateSampleHtmlContent(t={}){return this.generateContent("sample",t)}generateSixCardsContent(t={},r={}){return this.generateContent("sixCards",{...r,alertStyles:t})}generateProContent(t={},r={}){return this.generateContent("professional",{...r,alertStyles:t})}generateMinimalContent(t={}){return this.generateContent("minimal",t)}generateTypographyContent(t={}){return this.generateContent("typography",t)}generateFormContent(t={}){return this.generateContent("forms",t)}generateAlertContent(t={}){return this.generateContent("alerts",t)}generateCustomContent(t,r={}){const n={sections:t,layout:r.layout||"standard",defaultOptions:r};return this.components.render(n,r)}getAvailableTemplates(){return this.builder.getAvailableTemplates()}getTemplateDescription(t){return this.builder.getTemplateDescription(t)}validateContent(t){return bh(t)}generateFallbackContent(t="Content generation failed"){return`
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
    `}reset(){return this.builder.reset(),this}}const yh=e=>!e||typeof e!="string"?"":e.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,"").replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi,"").replace(/<embed\b[^>]*>/gi,"").replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi,"").replace(/\son\w+\s*=\s*["'][^"']*["']/gi,"").replace(/\son\w+\s*=\s*[^>\s]+/gi,"").replace(/javascript:/gi,"").replace(/data:(?!image\/)/gi,""),bh=e=>{const t=[{pattern:/<script/i,description:"Script tags"},{pattern:/on\w+\s*=/i,description:"Event handlers"},{pattern:/javascript:/i,description:"JavaScript protocols"},{pattern:/<iframe/i,description:"Iframe elements"},{pattern:/<embed/i,description:"Embed elements"},{pattern:/<object/i,description:"Object elements"},{pattern:/data:(?!image\/)/i,description:"Non-image data URLs"}],r=[];for(const{pattern:n,description:s}of t)n.test(e)&&r.push(s);return{isSecure:r.length===0,violations:r,sanitizedContent:r.length>0?yh(e):e}},wh=new xh,kh=e=>wh.generateSampleHtmlContent(e),Ta=()=>kh(),Ch=({initialCss:e="",className:t=""})=>{const[r,n]=y.useState(e),[s,o]=y.useState(!1),[l,i]=y.useState(null),c=Ta(),u=y.useCallback(v=>{i(null),n(v)},[]),g=y.useCallback(()=>{o(!1),i(null)},[]),m=y.useCallback(v=>{o(!1),i("Failed to load preview content"),console.error("Preview iframe error:",v)},[]),h={default:"",colorful:`
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
    `};return a.jsxs("div",{className:`preview-demo ${t}`,"data-testid":"preview-demo",children:[a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border mb-6",children:[a.jsx("h2",{className:"text-xl font-semibold mb-4 text-gray-800",children:"Real-time CSS Preview Demo"}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[a.jsxs("div",{children:[a.jsx("label",{htmlFor:"css-editor",className:"block text-sm font-medium text-gray-700 mb-2",children:"CSS Editor"}),a.jsx("textarea",{id:"css-editor","data-testid":"css-editor",value:r,onChange:v=>u(v.target.value),placeholder:"Enter your CSS here to see real-time changes...",className:"w-full h-64 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm",style:{resize:"vertical"}})]}),a.jsx("div",{children:a.jsxs("fieldset",{children:[a.jsx("legend",{className:"block text-sm font-medium text-gray-700 mb-2",children:"CSS Presets"}),a.jsx("div",{className:"space-y-2",children:Object.entries(h).map(([v,x])=>a.jsxs("button",{onClick:()=>u(x),className:"w-full px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors text-left capitalize","data-testid":`preset-${v}`,children:[v," Theme"]},v))}),a.jsxs("div",{className:"mt-4 p-3 bg-gray-50 rounded-md",children:[a.jsx("p",{className:"text-xs text-gray-600",children:a.jsx("strong",{children:"Try these features:"})}),a.jsxs("ul",{className:"text-xs text-gray-600 mt-1 space-y-1",children:[a.jsx("li",{children:"• Change colors using .preview-heading, .preview-text"}),a.jsx("li",{children:"• Style buttons with .preview-button"}),a.jsx("li",{children:"• Modify cards using .preview-card"}),a.jsx("li",{children:"• Update the main container with .preview-template"})]})]})]})})]}),l&&a.jsx("div",{className:"mt-4 p-3 bg-red-50 border border-red-200 rounded-md",children:a.jsx("p",{className:"text-sm text-red-600",children:l})})]}),a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-800",children:"Live Preview"}),s&&a.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[a.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-2"}),"Loading..."]})]}),a.jsx("div",{className:"border rounded-lg overflow-hidden",children:a.jsx(oo,{htmlContent:c,cssContent:r,height:"600px",onLoad:g,onError:m,allowScripts:!1,className:"w-full"})}),a.jsx("div",{className:"mt-4 p-3 bg-blue-50 rounded-md",children:a.jsxs("p",{className:"text-xs text-blue-700",children:[a.jsx("strong",{children:"Security Note:"})," This preview is rendered in a sandboxed iframe with restricted permissions. All content is isolated from the parent document to prevent XSS attacks."]})})]})]})},ts=(e,t,r)=>{if(!Ph(e,t,r))throw new Error("Invalid HSV values");e=e/60,t=t/100,r=r/100;const n=r*t,s=n*(1-Math.abs(e%2-1)),o=r-n;let l=0,i=0,c=0;return e>=0&&e<1?(l=n,i=s,c=0):e>=1&&e<2?(l=s,i=n,c=0):e>=2&&e<3?(l=0,i=n,c=s):e>=3&&e<4?(l=0,i=s,c=n):e>=4&&e<5?(l=s,i=0,c=n):e>=5&&e<6&&(l=n,i=0,c=s),{r:Math.round((l+o)*255),g:Math.round((i+o)*255),b:Math.round((c+o)*255)}},Sh=(e,t,r)=>{if(!Fr(e,t,r))throw new Error("Invalid RGB values");e/=255,t/=255,r/=255;const n=Math.max(e,t,r),s=Math.min(e,t,r),o=n-s;let l=0;o!==0&&(n===e?l=(t-r)/o%6:n===t?l=(r-e)/o+2:l=(e-t)/o+4),l=Math.round(l*60),l<0&&(l+=360);const i=n===0?0:Math.round(o/n*100),c=Math.round(n*100);return{h:l,s:i,v:c}},Sd=(e,t,r)=>{if(!Fr(e,t,r))throw new Error("Invalid RGB values");const n=s=>{const o=Math.round(s).toString(16);return o.length===1?"0"+o:o};return`#${n(e)}${n(t)}${n(r)}`.toUpperCase()},jd=e=>{if(!Nd(e))throw new Error("Invalid HEX color format");e=e.replace("#",""),e.length===3&&(e=e.split("").map(s=>s+s).join(""));const t=parseInt(e.substring(0,2),16),r=parseInt(e.substring(2,4),16),n=parseInt(e.substring(4,6),16);return{r:t,g:r,b:n}},jh=(e,t,r)=>{if(!Fr(e,t,r))throw new Error("Invalid RGB values");e/=255,t/=255,r/=255;const n=Math.max(e,t,r),s=Math.min(e,t,r),o=n-s;let l=0,i=0;const c=(n+s)/2;return o!==0&&(i=c>.5?o/(2-n-s):o/(n+s),n===e?l=(t-r)/o+(t<r?6:0):n===t?l=(r-e)/o+2:l=(e-t)/o+4,l/=6),{h:Math.round(l*360),s:Math.round(i*100),l:Math.round(c*100)}},Nh=(e,t,r)=>{if(!Th(e,t,r))throw new Error("Invalid HSL values");e/=360,t/=100,r/=100;const n=(i,c,u)=>(u<0&&(u+=1),u>1&&(u-=1),u<1/6?i+(c-i)*6*u:u<1/2?c:u<2/3?i+(c-i)*(2/3-u)*6:i);let s,o,l;if(t===0)s=o=l=r;else{const i=r<.5?r*(1+t):r+t-r*t,c=2*r-i;s=n(c,i,e+1/3),o=n(c,i,e),l=n(c,i,e-1/3)}return{r:Math.round(s*255),g:Math.round(o*255),b:Math.round(l*255)}},Yi=(e,t,r)=>{if(!Fr(e,t,r))throw new Error("Invalid RGB values");const n=[e,t,r].map(s=>(s=s/255,s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4)));return .2126*n[0]+.7152*n[1]+.0722*n[2]},Eh=(e,t)=>{const r=Yi(e.r,e.g,e.b),n=Yi(t.r,t.g,t.b),s=Math.max(r,n),o=Math.min(r,n);return(s+.05)/(o+.05)},zo=(e,t="AA",r="normal")=>{var o;const s=(o={AA:{normal:4.5,large:3},AAA:{normal:7,large:4.5}}[t])==null?void 0:o[r];return s?e>=s:!1},Fr=(e,t,r)=>[e,t,r].every(n=>typeof n=="number"&&n>=0&&n<=255&&Number.isInteger(n)),Ph=(e,t,r)=>typeof e=="number"&&e>=0&&e<=360&&typeof t=="number"&&t>=0&&t<=100&&typeof r=="number"&&r>=0&&r<=100,Th=(e,t,r)=>typeof e=="number"&&e>=0&&e<=360&&typeof t=="number"&&t>=0&&t<=100&&typeof r=="number"&&r>=0&&r<=100,Nd=e=>{if(typeof e!="string")return!1;const t=e.replace("#","");return/^[0-9A-Fa-f]{3}$|^[0-9A-Fa-f]{6}$/.test(t)},Mo=e=>{if(typeof e!="string")return null;if(e=e.trim(),e.startsWith("#")||/^[0-9A-Fa-f]{3,6}$/.test(e))try{return jd(e)}catch{return null}const t=e.match(/rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i);if(t){const[,n,s,o]=t.map(Number);return Fr(n,s,o)?{r:n,g:s,b:o}:null}const r=e.match(/hsl\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)/i);if(r){const[,n,s,o]=r.map(Number);try{return Nh(n,s,o)}catch{return null}}return null};function $h({hsv:e,disabled:t,onMouseDown:r,onKeyDown:n,onLightnessChange:s,wheelRef:o}){return a.jsxs("div",{className:"visual-color-picker","data-testid":"visual-color-picker",children:[a.jsx("div",{ref:o,className:"color-wheel","data-testid":"color-wheel",onMouseDown:r,onKeyDown:n,tabIndex:t?-1:0,role:"slider","aria-label":"Color wheel - use arrow keys to adjust hue and saturation","aria-valuemin":"0","aria-valuemax":"360","aria-valuenow":e.h,style:{width:"200px",height:"200px",borderRadius:"50%",background:`conic-gradient(
            hsl(0, 100%, 50%),
            hsl(60, 100%, 50%),
            hsl(120, 100%, 50%),
            hsl(180, 100%, 50%),
            hsl(240, 100%, 50%),
            hsl(300, 100%, 50%),
            hsl(360, 100%, 50%)
          )`,cursor:t?"not-allowed":"pointer",position:"relative",margin:"20px auto"},children:a.jsx("div",{className:"color-wheel-pointer",style:{position:"absolute",width:"12px",height:"12px",borderRadius:"50%",border:"2px solid white",boxShadow:"0 0 4px rgba(0,0,0,0.5)",transform:"translate(-50%, -50%)",left:`${50+e.s/100*50*Math.cos(e.h*Math.PI/180)}%`,top:`${50+e.s/100*50*Math.sin(e.h*Math.PI/180)}%`,pointerEvents:"none"}})}),a.jsxs("div",{className:"lightness-slider-container",children:[a.jsx("label",{htmlFor:"lightness-slider",className:"slider-label",children:"Lightness"}),a.jsx("input",{id:"lightness-slider",type:"range",min:"0",max:"100",value:e.v,onChange:l=>s(l.target.value),disabled:t,className:"lightness-slider","data-testid":"lightness-slider","aria-label":"Lightness slider",style:{width:"200px",background:`linear-gradient(to right, 
              hsl(${e.h}, ${e.s}%, 0%), 
              hsl(${e.h}, ${e.s}%, 100%))`}})]})]})}function Ki({mode:e,values:t,disabled:r,onNumber:n,onSlider:s}){const o=e==="RGB"?[{key:"r",label:"Red",min:0,max:255,sliderClass:"red-slider"},{key:"g",label:"Green",min:0,max:255,sliderClass:"green-slider"},{key:"b",label:"Blue",min:0,max:255,sliderClass:"blue-slider"}]:[{key:"h",label:"Hue",min:0,max:360,sliderClass:"hue-slider"},{key:"s",label:"Saturation",min:0,max:100,sliderClass:"saturation-slider"},{key:"v",label:"Value",min:0,max:100,sliderClass:"value-slider"}];return a.jsx("div",{className:`${e.toLowerCase()}-inputs color-input-group`,children:o.map(({key:l,label:i,min:c,max:u,sliderClass:g})=>a.jsxs("div",{className:`${e.toLowerCase()}-input-item`,children:[a.jsx("label",{className:"color-input-label",children:i}),a.jsx("input",{type:"number",min:c,max:u,value:t[l],onChange:m=>n(l,m.target.value),disabled:r,className:"color-input color-input-small"}),a.jsx("input",{type:"range",min:c,max:u,value:t[l],onChange:m=>s(l.toUpperCase(),m.target.value,e),disabled:r,className:`color-slider ${g}`,"aria-label":`${i} slider`})]},l))})}function _h({presets:e=[],disabled:t,onSelect:r}){return e.length?a.jsxs("div",{className:"color-presets",children:[a.jsx("div",{className:"presets-label",children:"Presets"}),a.jsx("div",{className:"presets-grid",children:e.map((n,s)=>a.jsx("button",{className:"preset-color",onClick:()=>r(n),disabled:t,style:{backgroundColor:n},title:n,"aria-label":`Select preset color ${n}`},s))})]}):null}function Lh(e){return y.useMemo(()=>{const t=Sd(e.r,e.g,e.b),r=Sh(e.r,e.g,e.b),n=jh(e.r,e.g,e.b);return{hex:t,hsv:r,hsl:n,rgb:e}},[e])}function Rh({info:e}){if(!e)return null;const{contrastRatio:t,wcagAA:r,wcagAALarge:n,wcagAAA:s}=e;return a.jsxs("div",{className:"accessibility-info",children:[a.jsx("div",{className:"accessibility-title",children:"Accessibility"}),a.jsxs("div",{className:"contrast-info",children:[a.jsxs("span",{children:["Contrast Ratio: ",t,":1"]}),a.jsxs("div",{className:"wcag-compliance",children:[a.jsxs("span",{className:r?"wcag-pass":"wcag-fail",children:["WCAG AA: ",r?"✓":"✗"]}),a.jsxs("span",{className:n?"wcag-pass":"wcag-fail",children:["AA Large: ",n?"✓":"✗"]}),a.jsxs("span",{className:s?"wcag-pass":"wcag-fail",children:["WCAG AAA: ",s?"✓":"✗"]})]})]})]})}const Ed=({value:e="#000000",onChange:t,onColorChange:r,property:n,backgroundColor:s,showVisualPicker:o=!0,showSliders:l=!0,presets:i=[],className:c="",disabled:u=!1})=>{const[g,m]=y.useState("HEX"),[h,v]=y.useState(""),[x,w]=y.useState(()=>Mo(e)||{r:0,g:0,b:0}),[S,f]=y.useState(e),d=y.useRef(null),p=y.useRef(!1),b=y.useCallback(k=>{if(!k||typeof k!="string")return console.warn("ColorPicker: Invalid color value provided"),{r:0,g:0,b:0};const $=Mo(k);return $||(console.warn("ColorPicker: Could not parse color value:",k),{r:0,g:0,b:0})},[]);y.useEffect(()=>{const k=b(e);w(k),f(e),v("")},[e,b]);const C=Lh(x),P=y.useMemo(()=>{if(!s)return null;const k=Mo(s);if(!k)return null;const $=Eh(x,k);return{contrastRatio:$.toFixed(2),wcagAA:zo($,"AA","normal"),wcagAALarge:zo($,"AA","large"),wcagAAA:zo($,"AAA","normal")}},[x,s]),N=y.useCallback((k,$=!1)=>{if(!$&&!Fr(k.r,k.g,k.b)){v("Invalid color values");return}w(k),v("");const I=Sd(k.r,k.g,k.b);f(I),t==null||t(I),r==null||r(k,n,I)},[t,r,n]),L=y.useCallback(k=>{try{let $=k.trim();if($.startsWith("#")&&($=$.substring(1)),$.length===3&&($=$.split("").map(U=>U+U).join("")),$="#"+$,!Nd($)){v("Invalid HEX color format");return}const I=jd($);N(I)}catch{v("Invalid HEX color")}},[N]),F=y.useCallback((k,$)=>{const I=parseInt($,10);if(isNaN(I)||I<0||I>255){v(`${k} value must be between 0 and 255`);return}const U={...x,[k]:I};N(U)},[x,N]),D=y.useCallback((k,$)=>{const I=parseInt($,10);let U=!1;if(k==="h"?(U=!isNaN(I)&&I>=0&&I<=360,U||v("Hue must be between 0 and 360")):(U=!isNaN(I)&&I>=0&&I<=100,U||v(`${k==="s"?"Saturation":"Value"} must be between 0 and 100`)),!U)return;const ke={...C.hsv,[k]:I},E=ts(ke.h,ke.s,ke.v);N(E)},[C.hsv,N]),G=y.useCallback(k=>{if(u)return;const $=k.currentTarget.getBoundingClientRect(),I=$.width/2,U=$.height/2,de=k.clientX-$.left-I,ke=k.clientY-$.top-U,E=Math.atan2(ke,de),z=Math.min(Math.sqrt(de*de+ke*ke),I),A=(E*180/Math.PI+360)%360,R=Math.min(z/I*100,100),q=C.hsv,V=ts(A,R,q.v);N(V)},[u,C.hsv,N]),st=y.useCallback(k=>{if(u)return;const $=C.hsv,I=ts($.h,$.s,parseInt(k,10));N(I)},[u,C.hsv,N]),Je=y.useCallback((k,$,I)=>{u||(I==="RGB"?F(k.toLowerCase(),$):I==="HSV"&&D(k.toLowerCase(),$))},[u,F,D]),ar=y.useCallback(k=>{if(u)return;const $=b(k);N($,!0)},[u,b,N]),Ar=y.useCallback(k=>{u||(p.current=!0,G(k))},[u,G]),ot=y.useCallback(k=>{!p.current||u||G(k)},[u,G]),Be=y.useCallback(()=>{p.current=!1},[]),T=y.useCallback(k=>{if(u)return;const{key:$}=k;let U={...C.hsv};switch($){case"ArrowLeft":U.h=(U.h-5+360)%360;break;case"ArrowRight":U.h=(U.h+5)%360;break;case"ArrowUp":U.s=Math.min(U.s+5,100);break;case"ArrowDown":U.s=Math.max(U.s-5,0);break;default:return}k.preventDefault();const de=ts(U.h,U.s,U.v);N(de)},[u,C.hsv,N]);y.useEffect(()=>{const k=I=>ot(I),$=()=>Be();return p.current&&(document.addEventListener("mousemove",k),document.addEventListener("mouseup",$)),()=>{document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",$)}},[ot,Be]);const M=()=>{switch(g){case"HEX":return a.jsxs("div",{className:"color-input-group",children:[a.jsx("label",{htmlFor:"hex-input",className:"color-input-label",children:"HEX"}),a.jsx("input",{id:"hex-input",type:"text",value:S,onChange:k=>{f(k.target.value),L(k.target.value)},disabled:u,className:"color-input",placeholder:"#000000",maxLength:7})]});case"RGB":return a.jsx(Ki,{mode:"RGB",values:x,disabled:u,onNumber:(k,$)=>F(k,$),onSlider:Je});case"HSV":return a.jsx(Ki,{mode:"HSV",values:C.hsv,disabled:u,onNumber:(k,$)=>D(k,$),onSlider:Je});default:return null}};return a.jsxs("div",{className:`color-picker ${c} ${u?"color-picker-disabled":""}`,role:"group","aria-label":"Color picker",children:[a.jsxs("div",{className:"color-picker-header",children:[a.jsx("div",{className:"color-preview","data-testid":"color-preview",style:{backgroundColor:`rgb(${x.r}, ${x.g}, ${x.b})`,border:"2px solid #ddd",borderRadius:"4px",width:"60px",height:"40px",display:"inline-block",marginRight:"12px"},"aria-label":`Current color: ${C.hex}`}),a.jsx("div",{className:"input-mode-tabs",children:["HEX","RGB","HSV"].map(k=>a.jsx("button",{onClick:()=>m(k),disabled:u,className:`input-mode-tab ${g===k?"active":""}`,"aria-pressed":g===k,children:k},k))})]}),h&&a.jsx("div",{className:"color-error",role:"alert",children:h}),a.jsxs("div",{className:"color-picker-body",children:[o&&a.jsx($h,{hsv:C.hsv,disabled:u,onMouseDown:Ar,onKeyDown:T,onLightnessChange:st,wheelRef:d}),a.jsx("div",{className:"color-inputs",children:M()}),a.jsx(_h,{presets:i,disabled:u,onSelect:ar}),a.jsx(Rh,{info:P})]})]})},Ih=()=>{const[e,t]=y.useState({textColor:"#000000",backgroundColor:"#ffffff",borderColor:"#cccccc"}),[r,n]=y.useState("textColor"),s=y.useCallback((c,u,g)=>{u&&e.hasOwnProperty(u)&&t(m=>({...m,[u]:g}))},[e]),o=y.useCallback(c=>{t(u=>({...u,[r]:c}))},[r]),l=y.useCallback(()=>`
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
    `,[e]),i={textColor:"Text Color",backgroundColor:"Background Color",borderColor:"Accent Color"};return a.jsxs("div",{className:"color-picker-demo",children:[a.jsxs("div",{className:"demo-header",children:[a.jsx("h2",{children:"Color Picker"}),a.jsx("p",{children:"Create a background, text and accent palette. Download a free HTML + CSS with your colors. For full components (cards, buttons, badges, tabs), head to the Stylesheet Builder."})]}),a.jsxs("div",{className:"demo-layout",children:[a.jsxs("div",{className:"demo-controls",children:[a.jsxs("div",{className:"property-selector",children:[a.jsx("h3",{children:"Select Property to Modify:"}),a.jsx("div",{className:"property-buttons",children:Object.entries(i).map(([c,u])=>a.jsx("button",{onClick:()=>n(c),className:`property-btn ${r===c?"active":""}`,style:{backgroundColor:r===c?e[c]:"transparent",color:r===c?"white":e[c],border:`2px solid ${e[c]}`},children:u},c))})]}),a.jsxs("div",{className:"color-picker-container",children:[a.jsx("h3",{children:"Color Picker:"}),a.jsx(Ed,{value:e[r],onChange:o,onColorChange:s,property:r,backgroundColor:r==="textColor"?e.backgroundColor:"#ffffff",showVisualPicker:!0,showSliders:!0,presets:["#FF0000","#00FF00","#0000FF","#FFFF00","#FF00FF","#00FFFF","#000000","#808080","#FFFFFF"]})]}),a.jsxs("div",{className:"current-colors",children:[a.jsx("h3",{children:"Current Colors:"}),a.jsx("div",{className:"color-swatches",children:Object.entries(e).map(([c,u])=>a.jsxs("div",{className:"color-swatch-item",children:[a.jsx("div",{className:"color-swatch",style:{backgroundColor:u},title:u}),a.jsx("span",{className:"color-label",children:i[c]}),a.jsx("span",{className:"color-value",children:u})]},c))})]})]}),a.jsxs("div",{className:"demo-preview",children:[a.jsx("h3",{children:"Live Preview:"}),a.jsx(oo,{htmlContent:Ta(),cssContent:l(),height:"600px"})]})]})]})},Xi=(e={},t={})=>{var o,l,i,c;const r=t.primary||"#3b82f6",n=t.primaryHover||"#2563eb";t.secondary,t.success,t.warning,t.danger;const s=t.neutral||"#e5e7eb";return t.start,t.end,`
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
  `};function zh({theme:e,buttonStyles:t,alertStyles:r,currentGradient:n,onUpdateButtonStyle:s}){var v,x,w,S,f,d;const o=((v=t==null?void 0:t.primary)==null?void 0:v.bg)||(e==null?void 0:e.primary),l=((x=t==null?void 0:t.primary)==null?void 0:x.hover)||(e==null?void 0:e.secondary),i=((w=t==null?void 0:t.secondary)==null?void 0:w.bg)||(e==null?void 0:e.secondary),c=((S=t==null?void 0:t.ok)==null?void 0:S.bg)||(e==null?void 0:e.success),u=e==null?void 0:e.warning,g=((f=t==null?void 0:t.delete)==null?void 0:f.bg)||(e==null?void 0:e.danger),m=(e==null?void 0:e.cardTints)&&(e==null?void 0:e.cardTints[1])||"#e5e7eb",h=[{key:"primary",label:"Primary",color:o},{key:"secondary",label:"Secondary",color:i},{key:"ok",label:"Success",color:c},{key:"submit",label:"Submit",color:((d=t==null?void 0:t.submit)==null?void 0:d.bg)||"#3b82f6"},{key:"delete",label:"Danger",color:g}];return a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border mb-6",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-800 mb-4",children:"🎨 Color System Preview"}),a.jsxs("div",{className:"mb-6",children:[a.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"Buttons"}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:h.map(p=>{var b,C;return a.jsxs("div",{className:"flex items-center justify-between gap-3 p-3 rounded border",children:[a.jsx("button",{className:"px-4 py-2 rounded-md text-white font-medium flex-1 text-left",style:{background:((b=t==null?void 0:t[p.key])==null?void 0:b.bg)||p.color},children:p.label}),s&&a.jsx("input",{type:"color",className:"w-10 h-10 rounded border cursor-pointer",value:((C=t==null?void 0:t[p.key])==null?void 0:C.bg)||p.color,onChange:P=>s(p.key,"bg",P.target.value),title:`${p.label} color`})]},p.key)})})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"Badges"}),a.jsxs("div",{className:"flex flex-wrap gap-2",children:[a.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-white",style:{background:o},children:"New"}),a.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-white",style:{background:c},children:"Success"}),a.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-white",style:{background:u},children:"Warning"}),a.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-white",style:{background:g},children:"Error"}),a.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-gray-700",style:{background:m},children:"Neutral"})]})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"Form Controls"}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[a.jsx("input",{className:"px-3 py-2 rounded-md border",placeholder:"Input",style:{borderColor:"#d1d5db"}}),a.jsx("select",{className:"px-3 py-2 rounded-md border",style:{borderColor:"#d1d5db"},children:a.jsx("option",{children:"Select"})}),a.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-700",children:[a.jsx("input",{type:"checkbox",className:"w-4 h-4"})," Checkbox"]}),a.jsxs("div",{className:"flex items-center gap-2 text-sm text-gray-700",children:[a.jsx("input",{type:"radio",name:"r",className:"w-4 h-4"})," Radio"]})]}),a.jsxs("div",{className:"text-xs text-gray-500 mt-2",children:["Focus color uses your primary (",o,")."]})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"Tabs"}),a.jsxs("div",{className:"flex gap-4 border-b",children:[a.jsx("button",{className:"pb-2 text-sm font-medium",style:{borderBottom:`2px solid ${o}`,color:o},children:"Active"}),a.jsx("button",{className:"pb-2 text-sm text-gray-600",children:"Tab"}),a.jsx("button",{className:"pb-2 text-sm text-gray-600",children:"Tab"})]})]}),a.jsxs("div",{className:"mb-6",children:[a.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"Progress"}),a.jsx("div",{className:"w-full h-2 rounded bg-gray-200 overflow-hidden",children:a.jsx("div",{className:"h-2",style:{width:"60%",background:`linear-gradient(90deg, ${(n==null?void 0:n.start)||o}, ${(n==null?void 0:n.end)||l})`}})})]}),a.jsxs("div",{children:[a.jsx("div",{className:"text-sm font-medium text-gray-700 mb-2",children:"Links"}),a.jsx("a",{href:"#",className:"text-sm",style:{color:o},children:"Link example"})]})]})}function Mh({presets:e={},selectedKey:t,onSelect:r,pickerBaseColor:n,inlinePicker:s}){return a.jsx("div",{className:"mb-6",children:a.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2 mb-4",children:[Object.entries(e).map(([o,l])=>a.jsx("button",{onClick:()=>r(o),className:`p-3 rounded text-xs font-medium text-white text-center transition-all ${t===o?"ring-4 ring-white ring-offset-2 transform scale-105":"hover:scale-105"}`,style:{background:`linear-gradient(135deg, ${l.start}, ${l.end})`},title:`${l.name} Theme`,"data-testid":`gradient-${o}`,children:l.name},o)),n?a.jsx("button",{onClick:()=>r("fromPicker"),className:`p-3 rounded text-xs font-medium text-white text-center transition-all ${t==="fromPicker"?"ring-4 ring-white ring-offset-2 transform scale-105":"hover:scale-105"}`,style:{background:n},title:"Use base color from Color Picker","data-testid":"gradient-from-picker",children:"From Color Picker"}):s?a.jsx("button",{onClick:s.onOpen,className:"p-3 rounded text-xs font-medium text-center transition-all bg-blue-100 text-blue-700 hover:bg-blue-200",title:"Open color picker","data-testid":"gradient-from-picker-inline",children:"Try the color picker"}):a.jsx(Xt,{to:"/color-picker",className:"p-3 rounded text-xs font-medium text-center transition-all bg-blue-100 text-blue-700 hover:bg-blue-200",title:"Try the color picker","data-testid":"gradient-from-picker-link",children:"Try the color picker"})]})})}const Dh=e=>{try{return localStorage.getItem(e)}catch{return null}},Oh=e=>{try{localStorage.removeItem(e)}catch{}},Pd=e=>{const t=Dh(e);return t!==null&&Oh(e),t},Fh="togglebox_transfer",Ah="togglebox_theme_color",Bh=()=>{const e=Pd(Fh);if(!e)return null;try{return JSON.parse(e)}catch{return null}},Uh=()=>Pd(Ah),Td={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},Hh=()=>{try{const e=typeof import.meta<"u"&&Td||{};return!!(e.VITE_PAYFAST_MERCHANT_ID&&e.VITE_PAYFAST_MERCHANT_KEY)}catch{return!1}},Vh=async({amount:e,itemName:t,itemDescription:r,customerEmail:n,returnUrl:s,cancelUrl:o,notifyUrl:l})=>{const i=typeof import.meta<"u"&&Td||{},c="https://www.payfast.co.za/eng/process",u={merchant_id:i.VITE_PAYFAST_MERCHANT_ID||"",merchant_key:i.VITE_PAYFAST_MERCHANT_KEY||"",amount:Number(e).toFixed(2),item_name:t,item_description:r,return_url:s||i.VITE_PAYFAST_RETURN_URL||`${window.location.origin}/?pf=return`,cancel_url:o||i.VITE_PAYFAST_CANCEL_URL||`${window.location.origin}/?pf=cancel`,notify_url:l||i.VITE_PAYFAST_NOTIFY_URL||`${window.location.origin}/api/payfast/itn`,email_address:n||""},g=m=>{const h=document.createElement("form");h.method="POST",h.action=c,Object.entries(m).forEach(([v,x])=>{if(x==null||x==="")return;const w=document.createElement("input");w.type="hidden",w.name=v,w.value=String(x),h.appendChild(w)}),document.body.appendChild(h),h.submit(),document.body.removeChild(h)};try{const m=await fetch("/api/payfast/signature",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(u)});if(m.ok){const h=await m.json().catch(()=>({}));h&&h.signature&&(u.signature=h.signature)}}catch{}g(u)};function Wh({onExport:e,onExportHtml:t,onCopyAgentInstructions:r,submitStyle:n,locked:s=!1,onUnlock:o}){return a.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e&&!s&&a.jsx("button",{onClick:e,className:"px-4 py-2 text-white rounded-md transition-colors font-medium hover:opacity-90",style:n,"data-testid":"export-css-button",children:"📥 Export CSS"}),t&&!s&&a.jsx("button",{onClick:t,className:"px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 transition-colors font-medium","data-testid":"export-demo-html-button",children:"📄 Download demo index.html"}),r&&!s&&a.jsx("button",{onClick:r,className:"px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 transition-colors font-medium","data-testid":"copy-agent-instructions",children:"🤖 Copy agent instructions"}),s&&a.jsx("button",{onClick:o,className:"px-4 py-2 rounded-md bg-amber-500 text-white hover:bg-amber-600 transition-colors font-semibold","data-testid":"unlock-paywall",children:"🔓 Unlock exports ($10) + AI guide (+$5)"})]})}function Gh({selectedCard:e,card:t,update:r}){return a.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[a.jsxs("h4",{className:"font-medium text-gray-800 mb-4",children:["Editing: Card ",e.slice(-1)," (.",e.replace("card","card-"),")",a.jsx("span",{className:"ml-2 text-sm text-gray-500",children:"After changing a color, click off the card to see it update. Then scroll down to the preview for other changes."})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:"Background Color"}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"color",value:t.backgroundColor,onChange:n=>r("backgroundColor",n.target.value),className:"w-12 h-8 rounded border cursor-pointer"}),a.jsx("input",{type:"text",value:t.backgroundColor,onChange:n=>r("backgroundColor",n.target.value),className:"flex-1 px-2 py-1 text-sm border border-gray-300 rounded"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:"Border Color"}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("input",{type:"color",value:t.borderColor,onChange:n=>r("borderColor",n.target.value),className:"w-12 h-8 rounded border cursor-pointer"}),a.jsx("input",{type:"text",value:t.borderColor,onChange:n=>r("borderColor",n.target.value),className:"flex-1 px-2 py-1 text-sm border border-gray-300 rounded"})]})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:["Border Radius: ",t.borderRadius,"px"]}),a.jsx("input",{type:"range",min:"0",max:"24",value:t.borderRadius,onChange:n=>r("borderRadius",parseInt(n.target.value)),className:"w-full"})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:["Padding: ",t.padding,"px"]}),a.jsx("input",{type:"range",min:"8",max:"32",value:t.padding,onChange:n=>r("padding",parseInt(n.target.value)),className:"w-full"})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:["Shadow: ",t.shadow,"px"]}),a.jsx("input",{type:"range",min:"0",max:"12",value:t.shadow,onChange:n=>r("shadow",parseInt(n.target.value)),className:"w-full"})]}),a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm font-medium text-gray-600 mb-2",children:["Border Width: ",t.borderWidth,"px"]}),a.jsx("input",{type:"range",min:"0",max:"4",value:t.borderWidth,onChange:n=>r("borderWidth",parseInt(n.target.value)),className:"w-full"})]})]})]})}const Qh=({className:e=""})=>{var ke;const[t,r]=y.useState({card1:{backgroundColor:"#ffffff",borderRadius:8,padding:16,shadow:2,borderWidth:1,borderColor:"#e5e7eb"},card2:{backgroundColor:"#f8fafc",borderRadius:12,padding:20,shadow:4,borderWidth:0,borderColor:"#e5e7eb"},card3:{backgroundColor:"#eff6ff",borderRadius:16,padding:24,shadow:6,borderWidth:2,borderColor:"#3b82f6"},card4:{backgroundColor:"#f0fdf4",borderRadius:8,padding:18,shadow:3,borderWidth:1,borderColor:"#10b981"},card5:{backgroundColor:"#fef2f2",borderRadius:10,padding:22,shadow:5,borderWidth:2,borderColor:"#ef4444"},card6:{backgroundColor:"#faf5ff",borderRadius:14,padding:20,shadow:4,borderWidth:1,borderColor:"#8b5cf6"}}),[n,s]=y.useState({primary:{bg:"#3b82f6",hover:"#2563eb"},secondary:{bg:"#6b7280",hover:"#374151"},delete:{bg:"#ef4444",hover:"#dc2626"},submit:{bg:"#059669",hover:"#047857"},ok:{bg:"#10b981",hover:"#059669"}}),[o,l]=y.useState({error:{bg:"#fef2f2",border:"#fecaca",text:"#991b1b",icon:"🔥"},warning:{bg:"#fffbeb",border:"#fed7aa",text:"#92400e",icon:"⚠️"},message:{bg:"#eff6ff",border:"#bfdbfe",text:"#1e40af",icon:"💬"},success:{bg:"#f0fdf4",border:"#bbf7d0",text:"#166534",icon:"✅"}}),[i,c]=y.useState({selectedGradient:"ocean",direction:"to right",enableGradient:!0,customColors:{color1:"#3b82f6",color2:"#8b5cf6",color3:"#ec4899",color4:"#f59e0b"}}),[u,g]=y.useState({fontSize:14,shadows:!0,animations:!0}),[m,h]=y.useState("card1"),[v,x]=y.useState(null),[w,S]=y.useState(!1),[f,d]=y.useState(null),[p,b]=y.useState(!1),[C,P]=y.useState(!1),N={ocean:{start:"#0ea5e9",end:"#3b82f6",name:"Ocean Blue",theme:{primary:"#3b82f6",secondary:"#0ea5e9",success:"#06b6d4",warning:"#f59e0b",danger:"#ef4444",cardTints:["#f0f9ff","#eff6ff","#dbeafe","#bfdbfe","#93c5fd","#60a5fa"]}},sunset:{start:"#f59e0b",end:"#ef4444",name:"Sunset Orange",theme:{primary:"#f59e0b",secondary:"#ef4444",success:"#10b981",warning:"#fbbf24",danger:"#dc2626",cardTints:["#fefbeb","#fef3c7","#fed7aa","#fdba74","#fb923c","#f97316"]}},forest:{start:"#10b981",end:"#059669",name:"Forest Green",theme:{primary:"#10b981",secondary:"#059669",success:"#06d6a0",warning:"#f59e0b",danger:"#ef4444",cardTints:["#f0fdf4","#dcfce7","#bbf7d0","#86efac","#4ade80","#22c55e"]}},purple:{start:"#8b5cf6",end:"#a855f7",name:"Purple Dream",theme:{primary:"#8b5cf6",secondary:"#a855f7",success:"#10b981",warning:"#f59e0b",danger:"#ef4444",cardTints:["#faf5ff","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc","#a855f7"]}},pink:{start:"#ec4899",end:"#be185d",name:"Pink Passion",theme:{primary:"#ec4899",secondary:"#be185d",success:"#10b981",warning:"#f59e0b",danger:"#dc2626",cardTints:["#fdf2f8","#fce7f3","#fbcfe8","#f9a8d4","#f472b6","#ec4899"]}},dark:{start:"#374151",end:"#111827",name:"Dark Mode",theme:{primary:"#6366f1",secondary:"#8b5cf6",success:"#10b981",warning:"#f59e0b",danger:"#ef4444",cardTints:["#f9fafb","#f3f4f6","#e5e7eb","#d1d5db","#9ca3af","#6b7280"]}},rainbow:{start:"#f43f5e",end:"#8b5cf6",name:"Rainbow",theme:{primary:"#f43f5e",secondary:"#8b5cf6",success:"#10b981",warning:"#f59e0b",danger:"#ef4444",cardTints:["#fdf2f8","#fce7f3","#f3e8ff","#e9d5ff","#d8b4fe","#c084fc"]}},gold:{start:"#fbbf24",end:"#f59e0b",name:"Golden Hour",theme:{primary:"#f59e0b",secondary:"#fbbf24",success:"#10b981",warning:"#d97706",danger:"#ef4444",cardTints:["#fffbeb","#fef3c7","#fed7aa","#fdba74","#fb923c","#f97316"]}},custom:{start:"#3b82f6",end:"#ec4899",name:"Custom",theme:{primary:"#3b82f6",secondary:"#8b5cf6",success:"#10b981",warning:"#f59e0b",danger:"#ef4444",cardTints:["#f0f9ff","#e0e7ff","#fdf2f8","#fef3c7","#fed7aa","#fdba74"]}}},L=()=>{const{color1:E,color2:z,color3:A,color4:R}=i.customColors,q=(V,lt)=>{const Ue=parseInt(V.replace("#",""),16),Ze=Math.round(2.55*lt),Ie=Math.min(255,(Ue>>16)+Ze),pe=Math.min(255,(Ue>>8&255)+Ze),Dn=Math.min(255,(Ue&255)+Ze);return"#"+(16777216+Ie*65536+pe*256+Dn).toString(16).slice(1)};return{start:E,end:A,name:"Custom Rainbow",theme:{primary:E,secondary:z,success:A,warning:R,danger:A,cardTints:[q(E,85),q(z,70),q(A,85),q(R,70),q(E,40),q(z,25)]}}},F=E=>{const z=E||f||"#3b82f6",A=(lt,Ue)=>{const Ze=parseInt(lt.replace("#",""),16),Ie=Math.round(2.55*Ue),pe=Math.min(255,(Ze>>16)+Ie),Dn=Math.min(255,(Ze>>8&255)+Ie),He=Math.min(255,(Ze&255)+Ie);return"#"+(16777216+pe*65536+Dn*256+He).toString(16).slice(1)},R=(lt,Ue)=>A(lt,Ue),q=A(z,0),V=A(z,-20);return{start:q,end:V,name:"From Color Picker",theme:{primary:z,secondary:A(z,-15),success:"#22c55e",warning:"#f59e0b",danger:"#ef4444",cardTints:[R(z,85),R(z,70),R(z,60),R(z,50),R(z,40),R(z,30)]}}},D=y.useMemo(()=>{const E=i.selectedGradient==="custom"?L():i.selectedGradient==="fromPicker"?F():N[i.selectedGradient],z=(He,Bt=1)=>{const fe=He.replace("#",""),at=parseInt(fe,16),Ut=at>>16&255,Br=at>>8&255,Ht=at&255;return`rgba(${Ut}, ${Br}, ${Ht}, ${Bt})`},A=He=>{const Bt=He.replace("#",""),fe=parseInt(Bt,16);return{r:fe>>16&255,g:fe>>8&255,b:fe&255}},R=He=>He.toString(16).padStart(2,"0"),q=(He,Bt,fe=.5)=>{const at=A(He),Ut=A(Bt),Br=Math.round(at.r*(1-fe)+Ut.r*fe),Ht=Math.round(at.g*(1-fe)+Ut.g*fe),lo=Math.round(at.b*(1-fe)+Ut.b*fe);return`#${R(Br)}${R(Ht)}${R(lo)}`},V=He=>{const Bt=He.replace("#",""),fe=parseInt(Bt,16);let at=fe>>16&255,Ut=fe>>8&255,Br=fe&255;const Ht=Ur=>(Ur=Ur/255,Ur<=.03928?Ur/12.92:Math.pow((Ur+.055)/1.055,2.4)),lo=Ht(at),$d=Ht(Ut),_d=Ht(Br);return .2126*lo+.7152*$d+.0722*_d>.55?"#111827":"#ffffff"},lt=E.start,Ue=E.end,Ze=.35,Ie=i.enableGradient?`linear-gradient(${i.direction}, ${z(lt,Ze)}, ${z(Ue,Ze)})`:"none",pe=V(q(lt,Ue,.5));return`
      /* ToggleBox Stylesheet - Theme: ${i.selectedGradient==="fromPicker"&&f?`Color Picker Base (${f})`:i.selectedGradient} */
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
        --tb-grad-end: ${Ue};
        --tb-text-dark: #111827;
        --tb-text: #374151;
        --tb-radius: 9999px;
      }

      /* Individual Card Styles - Export Ready */
      .card-1 {
        background-color: ${t.card1.backgroundColor} !important;
        background-image: ${Ie} !important;
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
        background-image: ${Ie} !important;
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
        background-image: ${Ie} !important;
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
        background-image: ${Ie} !important;
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
        background-image: ${Ie} !important;
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
        background-image: ${Ie} !important;
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
        background: ${i.enableGradient?`linear-gradient(${i.direction}, ${E.start}, ${E.end})`:E.start} !important;
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
    `},[t,n,o,i,u,N,f]),G=i.selectedGradient==="custom"?L():i.selectedGradient==="fromPicker"?F():N[i.selectedGradient],st=Xi(o,{primary:n.primary.bg,primaryHover:n.primary.hover,secondary:n.secondary.bg,success:n.ok.bg,warning:(ke=o.warning)==null?void 0:ke.border,danger:n.delete.bg,neutral:"#e5e7eb",start:G.start,end:G.end}),Je=y.useCallback(()=>{S(!1),x(null)},[]),ar=y.useCallback(E=>{S(!1),x("Failed to load preview content"),console.error("Preview iframe error:",E)},[]),Ar=(E,z,A)=>{r(R=>({...R,[E]:{...R[E],[z]:A}}))},ot=(E,z,A)=>{s(R=>({...R,[E]:{...R[E],[z]:A}}))},Be=(E,z={})=>{const R=(E==="custom"?L():E==="fromPicker"?F(z.base):N[E]).theme;s({primary:{bg:R.primary,hover:R.secondary},secondary:{bg:"#6b7280",hover:"#374151"},delete:{bg:R.danger,hover:"#dc2626"},submit:{bg:"#8b5cf6",hover:"#7c3aed"},ok:{bg:"#22c55e",hover:"#16a34a"}}),l({error:{bg:"#fef2f2",border:R.danger,text:"#991b1b",icon:"🔥"},warning:{bg:"#fffbeb",border:R.warning,text:"#92400e",icon:"⚠️"},message:{bg:R.cardTints[0],border:R.primary,text:"#1e40af",icon:"💬"},success:{bg:"#f0fdf4",border:R.success,text:"#166534",icon:"✅"}});const q=R.cardTints&&R.cardTints.length===6?R.cardTints:[R.primary,hexToTint(R.primary,85),hexToTint(R.secondary||R.primary,70),hexToTint(R.primary,60),hexToTint(R.secondary||R.primary,50),hexToTint(R.primary,40)];r(V=>({card1:{...V.card1,backgroundColor:q[0],borderColor:R.primary},card2:{...V.card2,backgroundColor:q[1],borderColor:R.secondary||R.primary},card3:{...V.card3,backgroundColor:q[2],borderColor:R.primary},card4:{...V.card4,backgroundColor:q[3],borderColor:R.success||R.primary},card5:{...V.card5,backgroundColor:q[4],borderColor:R.warning||R.secondary||R.primary},card6:{...V.card6,backgroundColor:q[5],borderColor:R.secondary||R.primary}}))};y.useEffect(()=>{Be(i.selectedGradient);const E=Bh();E&&E.type==="button"&&E.target&&E.color&&ot(E.target,"bg",E.color);const z=Uh();z&&d(z)},[]),y.useEffect(()=>{i.selectedGradient==="fromPicker"&&f&&Be("fromPicker",{base:f})},[f]);const T=(E,z)=>{c(A=>({...A,[E]:z})),E==="selectedGradient"&&Be(z)},M=(E,z)=>{g(A=>({...A,[E]:z}))},k=()=>{const E=new Blob([D],{type:"text/css"}),z=URL.createObjectURL(E),A=document.createElement("a");A.href=z,A.download="six-cards-stylesheet.css",A.click(),URL.revokeObjectURL(z)},$=()=>{var q;const E=`<!DOCTYPE html>
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
${Xi(o,{primary:n.primary.bg,primaryHover:n.primary.hover,secondary:n.secondary.bg,success:n.ok.bg,warning:(q=o.warning)==null?void 0:q.border,danger:n.delete.bg,neutral:"#e5e7eb",start:G.start,end:G.end})}
    </div>
  </body>
</html>`,z=new Blob([E],{type:"text/html"}),A=URL.createObjectURL(z),R=document.createElement("a");R.href=A,R.download="index.html",R.click(),URL.revokeObjectURL(A)},I=async()=>{var A;const z=`Integrate ToggleBox stylesheet (Theme: ${i.selectedGradient==="fromPicker"&&f?`From Color Picker (${f})`:((A=N[i.selectedGradient])==null?void 0:A.name)||"Custom Theme"}).

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
`;try{await navigator.clipboard.writeText(z),window.alert("Agent instructions copied to clipboard.")}catch(R){console.error("Clipboard copy failed",R)}},U=()=>{if(Hh())Vh({amount:10,itemName:"ToggleBox CSS Export",itemDescription:"Unlock stylesheet export"});else{if(!window.confirm("Unlock CSS + Demo export for $10? Click Cancel to abort."))return;window.confirm("Add AI Instructions unlock for +$5? Click OK to include, Cancel to skip."),b(!0)}},de=t[m];return a.jsxs("div",{className:`six-cards-interactive ${e}`,"data-testid":"six-cards-interactive",children:[a.jsx("div",{className:"bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg shadow-lg mb-6",children:a.jsxs("div",{className:"flex items-start justify-between gap-4",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl font-bold mb-2",children:"🎨 Stylesheet Builder"}),a.jsx("p",{className:"text-indigo-100",children:"Build a cohesive stylesheet: define brand colors, buttons, cards, alerts, and form states. The 6 cards below are preview surfaces driven by your system colors."})]}),a.jsx(Wh,{onExport:k,onExportHtml:$,onCopyAgentInstructions:I,submitStyle:{background:`linear-gradient(135deg, ${n.submit.bg}, ${n.submit.hover})`},locked:!p,onUnlock:U})]})}),a.jsx("div",{className:"mb-6",children:a.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg shadow-sm border-2 border-blue-200",children:[a.jsx("h3",{className:"text-lg font-semibold mb-2 text-gray-800 flex items-center",children:"🎨 Card Background Gradient & Themes"}),a.jsx("div",{className:"mb-3 p-3 rounded-md bg-white/70 border border-blue-200 text-xs text-blue-900",children:"These controls color the six cards below. Toggle gradient on/off and pick a theme or your custom color."}),a.jsx("p",{className:"text-sm text-blue-700 mb-4 font-medium",children:"Choose a gradient theme to set cohesive colors for all cards, buttons, and alerts. Then fine-tune individual components below!"}),a.jsx(Mh,{presets:Object.fromEntries(Object.entries(N).filter(([E])=>E!=="custom")),selectedKey:i.selectedGradient,onSelect:E=>T("selectedGradient",E),pickerBaseColor:f,inlinePicker:{onOpen:()=>P(!0)}}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-medium text-gray-600 mb-1",children:"Gradient Direction"}),a.jsxs("select",{value:i.direction,onChange:E=>T("direction",E.target.value),className:"w-full text-xs border border-gray-300 rounded px-2 py-1","data-testid":"gradient-direction",children:[a.jsx("option",{value:"to right",children:"→ Left to Right"}),a.jsx("option",{value:"to left",children:"← Right to Left"}),a.jsx("option",{value:"to bottom",children:"↓ Top to Bottom"}),a.jsx("option",{value:"to top",children:"↑ Bottom to Top"}),a.jsx("option",{value:"135deg",children:"↘ Diagonal"}),a.jsx("option",{value:"45deg",children:"↗ Diagonal Alt"})]})]}),a.jsxs("div",{children:[a.jsx("label",{className:"block text-xs font-medium text-gray-600 mb-1",children:"Gradient Effect"}),a.jsxs("div",{className:"flex items-center space-x-2",children:[a.jsx("button",{onClick:()=>T("enableGradient",!0),className:`px-3 py-2 text-xs font-medium rounded transition-all ${i.enableGradient?"bg-green-600 text-white":"bg-gray-200 text-gray-600 hover:bg-gray-300"}`,"data-testid":"gradient-enable",children:"Yes"}),a.jsx("button",{onClick:()=>T("enableGradient",!1),className:`px-3 py-2 text-xs font-medium rounded transition-all ${i.enableGradient?"bg-gray-200 text-gray-600 hover:bg-gray-300":"bg-red-600 text-white"}`,"data-testid":"gradient-disable",children:"No"})]}),a.jsx("p",{className:"text-xs text-gray-500 mt-1",children:i.enableGradient?"Smooth gradient backgrounds":"Solid color backgrounds"})]})]})]})}),a.jsx(zh,{theme:G.theme,buttonStyles:n,alertStyles:o,currentGradient:G,onUpdateButtonStyle:ot}),C&&a.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[a.jsx("div",{className:"absolute inset-0 bg-black/40",onClick:()=>P(!1)}),a.jsxs("div",{className:"relative bg-white rounded-lg shadow-xl border max-w-xl w-full p-4",children:[a.jsxs("div",{className:"flex items-center justify-between mb-3",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:"Pick a base color"}),a.jsx("button",{onClick:()=>P(!1),className:"text-gray-500 hover:text-gray-700",children:"✕"})]}),a.jsx(Ed,{value:f||"#3b82f6",onChange:E=>{d(E)},onColorChange:(E,z,A)=>{d(A)},property:"backgroundColor",backgroundColor:"#ffffff",showVisualPicker:!0,showSliders:!0,presets:["#3b82f6","#ef4444","#10b981","#f59e0b","#8b5cf6","#0ea5e9","#111827","#e5e7eb"]}),a.jsxs("div",{className:"mt-4 flex items-center justify-end gap-2",children:[a.jsx("button",{className:"px-4 py-2 rounded border",onClick:()=>P(!1),children:"Cancel"}),a.jsx("button",{className:"px-4 py-2 rounded text-white",style:{background:`linear-gradient(135deg, ${n.submit.bg}, ${n.submit.hover})`},onClick:()=>{Be("fromPicker",{base:f}),c(E=>({...E,selectedGradient:"fromPicker"})),P(!1)},children:"Use this color"})]})]})]}),a.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6",children:[a.jsxs("div",{className:"xl:col-span-2 bg-white p-6 rounded-lg shadow-sm border",children:[a.jsx("div",{className:"flex items-center mb-6",children:a.jsx("h3",{className:"text-lg font-semibold text-gray-800 flex items-center",children:"🎯 Individual Card Controls"})}),a.jsx("div",{className:"grid grid-cols-3 md:grid-cols-6 gap-2 mb-6",children:Object.keys(t).map((E,z)=>a.jsxs("button",{onClick:()=>h(E),className:`p-3 rounded-lg border-2 text-sm font-medium transition-all ${m===E?"border-indigo-500 bg-indigo-50 text-indigo-700":"border-gray-200 hover:border-gray-300 text-gray-700"}`,style:{backgroundColor:m===E?void 0:t[E].backgroundColor},"data-testid":`select-${E}`,children:["Card ",z+1]},E))}),a.jsx(Gh,{selectedCard:m,card:de,update:(E,z)=>Ar(m,E,z)})]}),a.jsx("div",{className:"space-y-6",children:a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[a.jsx("h3",{className:"text-lg font-semibold mb-4 text-gray-800 flex items-center",children:"⚙️ General Settings"}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{children:[a.jsxs("label",{className:"block text-sm font-medium text-gray-600 mb-1",children:["Font Size: ",u.fontSize,"px"]}),a.jsx("input",{type:"range",min:"12",max:"18",value:u.fontSize,onChange:E=>M("fontSize",parseInt(E.target.value)),className:"w-full","data-testid":"general-font-size"})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-sm font-medium text-gray-600",children:"Shadows"}),a.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[a.jsx("input",{type:"checkbox",checked:u.shadows,onChange:E=>M("shadows",E.target.checked),className:"sr-only peer","data-testid":"general-shadows"}),a.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"})]})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-sm font-medium text-gray-600",children:"Animations"}),a.jsxs("label",{className:"relative inline-flex items-center cursor-pointer",children:[a.jsx("input",{type:"checkbox",checked:u.animations,onChange:E=>M("animations",E.target.checked),className:"sr-only peer","data-testid":"general-animations"}),a.jsx("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"})]})]})]})]})})]}),a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("h3",{className:"text-lg font-semibold text-gray-800 flex items-center",children:"👀 Live Preview - All 6 Cards"}),w&&a.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[a.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-2"}),"Loading..."]})]}),a.jsx("div",{className:"border rounded-lg overflow-hidden bg-gray-50",children:a.jsx(oo,{htmlContent:st,cssContent:D,height:"800px",onLoad:Je,onError:ar,allowScripts:!1,className:"w-full"})}),a.jsx("div",{className:"mt-4 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg",children:a.jsxs("p",{className:"text-sm text-indigo-700",children:[a.jsx("strong",{children:"🎯 Export Ready:"})," Your CSS includes 6 individual card classes (.card-1, .card-2, .card-3, .card-4, .card-5, .card-6) plus complete button system and alert components. Perfect for any project!"]})}),v&&a.jsx("div",{className:"mt-4 p-3 bg-red-50 border border-red-200 rounded-md",children:a.jsx("p",{className:"text-sm text-red-600",children:v})})]})]})},Yh=({className:e=""})=>{const[t,r]=y.useState(""),[n,s]=y.useState("default"),[o,l]=y.useState("desktop"),[i,c]=y.useState(!1),[u,g]=y.useState(null),m={default:{name:"Default Template",description:"Standard layout with cards, buttons, and text elements",content:Ta()},blog:{name:"Blog Layout",description:"Article-style layout with headings and paragraphs",content:`
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
      `}},h={mobile:{width:"375px",height:"667px",name:"Mobile (375px)"},tablet:{width:"768px",height:"1024px",name:"Tablet (768px)"},desktop:{width:"100%",height:"700px",name:"Desktop (Full)"}},v=y.useCallback(p=>{g(null),r(p)},[]),x=y.useCallback(()=>{c(!1),g(null)},[]),w=y.useCallback(p=>{c(!1),g("Failed to load preview content"),console.error("Preview iframe error:",p)},[]),S=()=>{const p=new Blob([t],{type:"text/css"}),b=URL.createObjectURL(p),C=document.createElement("a");C.href=b,C.download=`${n}-styles.css`,C.click(),URL.revokeObjectURL(b)},f=m[n],d=h[o];return a.jsxs("div",{className:`style-playground ${e}`,"data-testid":"style-playground",children:[a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border mb-6",children:[a.jsx("h2",{className:"text-2xl font-semibold mb-2 text-gray-800",children:"CSS Style Playground"}),a.jsx("p",{className:"text-gray-600",children:"Experiment with different layouts and CSS styles in real-time. Choose a template and start styling!"})]}),a.jsx("div",{className:"bg-white p-6 rounded-lg shadow-sm border mb-6",children:a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-medium text-gray-700 mb-3",children:"Template"}),a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:Object.entries(m).map(([p,b])=>a.jsxs("button",{onClick:()=>s(p),className:`p-3 text-left rounded-lg border-2 transition-colors ${n===p?"border-blue-500 bg-blue-50":"border-gray-200 hover:border-gray-300"}`,"data-testid":`template-${p}`,children:[a.jsx("div",{className:"font-medium text-sm text-gray-800",children:b.name}),a.jsx("div",{className:"text-xs text-gray-600 mt-1",children:b.description})]},p))})]}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-medium text-gray-700 mb-3",children:"Viewport Size"}),a.jsx("div",{className:"space-y-2",children:Object.entries(h).map(([p,b])=>a.jsx("button",{onClick:()=>l(p),className:`w-full p-3 text-left rounded-lg border transition-colors ${o===p?"border-blue-500 bg-blue-50 text-blue-700":"border-gray-200 hover:border-gray-300"}`,"data-testid":`viewport-${p}`,children:b.name},p))})]})]})}),a.jsxs("div",{className:"grid grid-cols-1 xl:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsx("h3",{className:"text-lg font-medium text-gray-800",children:"CSS Editor"}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{onClick:S,disabled:!t.trim(),className:"px-3 py-2 text-sm bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors","data-testid":"export-css-button",children:"Export CSS"}),a.jsx("button",{onClick:()=>r(""),className:"px-3 py-2 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors","data-testid":"clear-css-button",children:"Clear"})]})]}),a.jsx("textarea",{value:t,onChange:p=>v(p.target.value),placeholder:`/* Start styling your ${f.name.toLowerCase()} */
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
}`,className:"w-full h-96 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm resize-none","data-testid":"css-editor"}),u&&a.jsx("div",{className:"mt-3 p-3 bg-red-50 border border-red-200 rounded-md",children:a.jsx("p",{className:"text-sm text-red-600",children:u})})]}),a.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-sm border",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsxs("h3",{className:"text-lg font-medium text-gray-800",children:["Preview - ",f.name]}),i&&a.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[a.jsx("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-2"}),"Loading..."]})]}),a.jsx("div",{className:"border rounded-lg overflow-hidden mx-auto",style:{width:d.width,maxWidth:"100%"},children:a.jsx(oo,{htmlContent:f.content,cssContent:t,height:d.height,onLoad:x,onError:w,className:"w-full"})}),a.jsx("div",{className:"mt-4 p-3 bg-blue-50 rounded-md",children:a.jsxs("p",{className:"text-xs text-blue-700",children:[a.jsx("strong",{children:"Tip:"})," Try different CSS properties on elements with classes like",a.jsx("code",{className:"bg-blue-100 px-1 rounded",children:".preview-card"}),",",a.jsx("code",{className:"bg-blue-100 px-1 rounded",children:".preview-button"}),", and",a.jsx("code",{className:"bg-blue-100 px-1 rounded",children:".preview-text"})," to see instant results."]})})]})]})]})};function Kh(){const e=[{bg:"bg-gray-100",text:"text-gray-900",accent:"#111827",accentDark:"#000000"},{bg:"bg-blue-100",text:"text-blue-900",accent:"#2563eb",accentDark:"#1e3a8a"},{bg:"bg-green-100",text:"text-green-900",accent:"#16a34a",accentDark:"#14532d"},{bg:"bg-yellow-100",text:"text-yellow-900",accent:"#eab308",accentDark:"#854d0e"},{bg:"bg-pink-100",text:"text-pink-900",accent:"#db2777",accentDark:"#831843"},{bg:"bg-purple-100",text:"text-purple-900",accent:"#9333ea",accentDark:"#581c87"},{bg:"bg-orange-100",text:"text-orange-900",accent:"#ea580c",accentDark:"#7c2d12"},{bg:"bg-teal-100",text:"text-teal-900",accent:"#0d9488",accentDark:"#134e4a"}],[t,r]=y.useState(0),[n,s]=y.useState(!0),[o,l]=y.useState(0),[i,c]=y.useState(0);y.useEffect(()=>{if(!n)return;const v=setInterval(()=>{r(x=>(x+1)%e.length)},8e3);return()=>clearInterval(v)},[n,e.length]),y.useEffect(()=>{if(!n)return;const v=Date.now(),x=setInterval(()=>{const w=Date.now()-v+t*8e3,S=Math.min(w/(8e3*e.length)*100,100);l(S)},50);return()=>clearInterval(x)},[n,t]),y.useEffect(()=>{const v=setInterval(()=>{c(x=>(x+1)%e.length)},2500);return()=>clearInterval(v)},[]);const u=(v,x,w=.5)=>{const S=N=>{const L=N.replace("#",""),F=parseInt(L,16);return{r:F>>16&255,g:F>>8&255,b:F&255}},f=N=>N.toString(16).padStart(2,"0"),d=S(v),p=S(x),b=Math.round(d.r*(1-w)+p.r*w),C=Math.round(d.g*(1-w)+p.g*w),P=Math.round(d.b*(1-w)+p.b*w);return`#${f(b)}${f(C)}${f(P)}`},g=e[t],m=e[(t+1)%e.length],h=e[i];return a.jsxs("div",{className:`min-h-screen flex flex-col transition-colors duration-1000 ${g.bg} ${g.text} font-sans`,children:[a.jsxs("div",{className:"flex items-center justify-between px-12 py-4 border-b border-gray-200 relative",children:[e.map((v,x)=>a.jsx("div",{onClick:()=>{r(x),s(!1)},className:`w-10 h-10 rounded cursor-pointer border ${x===t?"ring-2 ring-offset-2 ring-gray-800":""} ${v.bg}`},x)),a.jsx("div",{onClick:()=>s(!0),className:"w-16 h-10 flex items-center justify-center rounded cursor-pointer border bg-black text-white text-xs font-medium",children:"Re-start"}),n&&a.jsx("div",{className:"absolute -bottom-2 left-0 w-full h-2 bg-gray-200 overflow-hidden",children:a.jsx("div",{className:"h-2 transition-[width] duration-100 linear",style:{width:`${o}%`,background:`linear-gradient(to right, ${g.accent}, ${m.accent})`}})})]}),a.jsx("p",{className:"text-center text-xs text-gray-500 mt-4",children:"Tip: Click a color to stop rotation. Use the black block to restart."}),a.jsxs("section",{className:"flex flex-col items-center justify-center text-center py-20 px-6",children:[a.jsx("h1",{className:"text-4xl md:text-6xl font-bold mb-4 tracking-tight",children:"Design your site’s color system in minutes"}),a.jsx("p",{className:"text-xl md:text-2xl opacity-80 mb-8",children:"Build a production‑ready stylesheet with six cards, button states, alerts, badges, forms and more — then export."}),a.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[a.jsx(Xt,{to:"/interactive",className:"rounded-xl px-8 py-4 text-lg text-white",style:{backgroundColor:g.accentDark},children:"Try the Stylesheet Builder →"}),a.jsx(Xt,{to:"/color-picker",className:"rounded-xl px-8 py-4 text-lg border",style:{borderColor:g.accentDark,color:g.accentDark},children:"Start with the Color Picker (free export)"})]}),a.jsx("div",{className:"mt-12 max-w-5xl w-full border rounded-xl shadow-sm bg-white",children:a.jsx("div",{className:"rounded-xl p-6",children:a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[a.jsxs("div",{className:"p-6 rounded-lg border text-left",children:[a.jsx("h3",{className:"font-semibold mb-1",children:"Six Card Surfaces"}),a.jsx("p",{className:"text-sm opacity-80",children:"Preview typography, spacing and gradients across six card variations."})]}),a.jsxs("div",{className:"p-6 rounded-lg border text-left",children:[a.jsx("h3",{className:"font-semibold mb-1",children:"Buttons & Alerts"}),a.jsx("p",{className:"text-sm opacity-80",children:"Primary, secondary, submit, ok, delete with hover states — plus alert styles."})]}),a.jsxs("div",{className:"p-6 rounded-lg border text-left",children:[a.jsx("h3",{className:"font-semibold mb-1",children:"Badges, Forms & Tabs"}),a.jsx("p",{className:"text-sm opacity-80",children:"Cohesive micro components that match your palette automatically."})]})]})})}),a.jsx("p",{className:"mt-4 text-sm opacity-70",children:"Color Picker lets you download a free HTML + CSS with your colors. For full component exports, use the Stylesheet Builder."})]}),a.jsxs("section",{className:"py-20 px-6 border-t border-gray-100",children:[a.jsx("h2",{className:"text-3xl font-semibold text-center mb-12",children:"Why teams pick ToggleBox"}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center",children:[{title:"🎨 LEGO Builder Architecture",desc:"Atomic components and clean CSS you can drop into any stack."},{title:"⚡ Live Preview",desc:"Everything updates as you tweak colors — no rebuilds required."},{title:"⬇️ One‑click Export",desc:"CSS + demo page ready for your repo. Optional AI integration guide."},{title:"🧪 Accessible by default",desc:"Automatic text contrast on cards; WCAG‑friendly choices."}].map((v,x)=>a.jsxs("div",{className:"p-6 rounded-xl shadow-md border text-white",style:{backgroundColor:x%2===0?g.accent:g.accentDark},children:[a.jsx("h3",{className:"font-medium text-lg mb-2",children:v.title}),a.jsx("p",{className:"opacity-90",children:v.desc})]},x))})]}),a.jsxs("section",{className:"py-20 px-6 bg-gray-50 border-t border-gray-100 text-center",children:[a.jsx("h2",{className:"text-3xl font-semibold mb-8",children:"See It in Action"}),a.jsx("div",{className:"max-w-4xl mx-auto border rounded-xl shadow-sm bg-white overflow-hidden",children:a.jsxs("div",{className:"p-6 text-left transition-colors duration-500",style:{borderColor:h.accent},children:[a.jsx("div",{className:"flex gap-6 border-b pb-3",style:{borderColor:u(h.accent,h.accentDark,.3)},children:["Overview","Stats","Settings"].map((v,x)=>a.jsxs("button",{className:`text-sm font-semibold pb-2 relative ${x===0?"":"text-gray-500"}`,style:x===0?{color:h.accent}:{},children:[v,x===0&&a.jsx("span",{className:"absolute left-0 right-0 -bottom-1 h-0.5",style:{background:`linear-gradient(90deg, ${h.accent}, ${h.accentDark})`}})]},v))}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mt-4",children:[a.jsxs("div",{className:"rounded-lg border p-4 shadow-sm transition-colors duration-500",style:{borderColor:u(h.accent,"#cccccc",.3)},children:[a.jsx("h3",{className:"font-semibold mb-1",children:"Demo Card"}),a.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"Buttons, badges and progress all follow the active color."}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{className:"px-3 py-2 rounded text-white text-sm",style:{background:h.accentDark},children:"Primary"}),a.jsx("button",{className:"px-3 py-2 rounded text-sm",style:{color:h.accentDark,borderColor:h.accentDark,borderWidth:1,borderStyle:"solid"},children:"Secondary"})]})]}),a.jsxs("div",{className:"rounded-lg border p-4 shadow-sm transition-colors duration-500",style:{borderColor:u(h.accent,"#cccccc",.3)},children:[a.jsxs("div",{className:"flex flex-wrap gap-2 mb-4",children:[a.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-white",style:{background:h.accent},children:"New"}),a.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-white",style:{background:u(h.accent,"#22c55e",.4)},children:"Success"}),a.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full text-white",style:{background:u(h.accent,"#f59e0b",.4)},children:"Warning"})]}),a.jsx("div",{className:"w-full h-2 rounded bg-gray-200 overflow-hidden",children:a.jsx("div",{className:"h-2",style:{width:"66%",background:`linear-gradient(90deg, ${h.accent}, ${h.accentDark})`}})})]}),a.jsx("div",{className:"md:col-span-2 rounded-lg border p-4 shadow-sm transition-colors duration-500",style:{borderColor:u(h.accent,"#cccccc",.3)},children:a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[a.jsx("input",{className:"px-3 py-2 rounded border",placeholder:"Your email",style:{borderColor:u(h.accent,"#d1d5db",.3)}}),a.jsx("select",{className:"px-3 py-2 rounded border",style:{borderColor:u(h.accent,"#d1d5db",.3)},children:a.jsx("option",{children:"Pick an option"})}),a.jsx("button",{className:"px-4 py-2 rounded text-white",style:{background:`linear-gradient(135deg, ${h.accent}, ${h.accentDark})`},children:"Submit"})]})})]})]})}),a.jsx(Xt,{to:"/interactive",className:"mt-8 inline-block rounded-xl px-8 py-4 text-lg text-white",style:{backgroundColor:g.accentDark},children:"Open Full Playground →"})]}),a.jsxs("section",{className:"py-20 px-6 text-center",children:[a.jsx("h2",{className:"text-4xl font-bold mb-6",children:"Every website starts with the right colors."}),a.jsx("div",{className:"flex flex-col md:flex-row gap-4 justify-center",children:a.jsx(Xt,{to:"/interactive",className:"rounded-xl px-8 py-4 text-lg text-white",style:{backgroundColor:g.accentDark},children:"Start Free →"})})]}),a.jsxs("footer",{className:"py-10 px-6 bg-gray-900 text-gray-400 text-center text-sm",children:[a.jsx("p",{className:"mb-4",children:"ToggleBox — Real-time CSS Preview Engine"}),a.jsxs("div",{className:"flex gap-6 justify-center",children:[a.jsx("a",{href:"#",className:"hover:text-white",children:"About"}),a.jsx("a",{href:"#",className:"hover:text-white",children:"Docs"}),a.jsx("a",{href:"#",className:"hover:text-white",children:"GitHub"}),a.jsx("a",{href:"#",className:"hover:text-white",children:"Contact"})]})]})]})}function Xh(){return a.jsx(oh,{children:a.jsxs("div",{className:"min-h-screen bg-gray-100",children:[a.jsx(dh,{}),a.jsx("div",{className:"container mx-auto py-8",children:a.jsxs(Jm,{children:[a.jsx(Gt,{path:"/",element:a.jsx(Kh,{})}),a.jsx(Gt,{path:"/preview",element:a.jsx(Ch,{})}),a.jsx(Gt,{path:"/interactive",element:a.jsx(Qh,{})}),a.jsx(Gt,{path:"/playground",element:a.jsx(Yh,{})}),a.jsx(Gt,{path:"/color-picker",element:a.jsx(Ih,{})}),a.jsx(Gt,{path:"/template",element:a.jsx(ph,{})})]})})]})})}Do.createRoot(document.getElementById("root")).render(a.jsx(ac.StrictMode,{children:a.jsx(Xh,{})}));
