const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/AppLayout-DOkTWMNJ.js","assets/router-BYSQxZKn.js","assets/store-G8KRS_XG.js","assets/badge-tmxY4EBI.js","assets/bell-DMlTsy5e.js","assets/users-DCk7Xdvh.js","assets/bar-chart-3-CpnFIYNZ.js","assets/scan-line-CYg65NnY.js","assets/ticket-BvrPRk_N.js","assets/Dashboard-BIUELPRX.js","assets/card-LVqBwgsG.js","assets/map-pin-CTsXcjAO.js","assets/MyTickets-BkMs-qMs.js","assets/CrowdHeatmap-DG12syBR.js","assets/useGoogleMaps-DfaRR8I1.js","assets/Dashboard-DcXvd6Qy.js","assets/circle-check-Cy3opTx8.js","assets/EntryScanner-De4sY3jB.js","assets/rotate-ccw-BxZpNISW.js","assets/Dashboard-Dw5uwkpQ.js","assets/shield-check-HEynyGzy.js","assets/UserManagement-CLxc3TC9.js","assets/CrowdMonitor-U4jqZ7Ot.js","assets/CrowdHeatmapAdmin-C0bd1gh6.js"])))=>i.map(i=>d[i]);
import{r as A,a as Lc,u as S_,N as Za,O as tf,R as ke,b as Mc,c as nf,L as R_,d as P_,e as C_,f as k_}from"./router-BYSQxZKn.js";import{c as x_}from"./store-G8KRS_XG.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();var rf={exports:{}},Do={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N_=A,D_=Symbol.for("react.element"),O_=Symbol.for("react.fragment"),V_=Object.prototype.hasOwnProperty,L_=N_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M_={key:!0,ref:!0,__self:!0,__source:!0};function sf(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)V_.call(e,r)&&!M_.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:D_,type:t,key:i,ref:o,props:s,_owner:L_.current}}Do.Fragment=O_;Do.jsx=sf;Do.jsxs=sf;rf.exports=Do;var N=rf.exports,of,Dl=Lc;of=Dl.createRoot,Dl.hydrateRoot;let F_={data:""},U_=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||F_},z_=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,j_=/\/\*[^]*?\*\/|  +/g,Ol=/\n+/g,vn=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?vn(o,i):i+"{"+vn(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=vn(o,e?e.replace(/([^,])+/g,c=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,c):c?c+" "+u:u)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=vn.p?vn.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},Jt={},af=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+af(t[n]);return e}return t},$_=(t,e,n,r,s)=>{let i=af(t),o=Jt[i]||(Jt[i]=(u=>{let l=0,d=11;for(;l<u.length;)d=101*d+u.charCodeAt(l++)>>>0;return"go"+d})(i));if(!Jt[o]){let u=i!==t?t:(l=>{let d,p,m=[{}];for(;d=z_.exec(l.replace(j_,""));)d[4]?m.shift():d[3]?(p=d[3].replace(Ol," ").trim(),m.unshift(m[0][p]=m[0][p]||{})):m[0][d[1]]=d[2].replace(Ol," ").trim();return m[0]})(t);Jt[o]=vn(s?{["@keyframes "+o]:u}:u,n?"":"."+o)}let c=n&&Jt.g?Jt.g:null;return n&&(Jt.g=Jt[o]),((u,l,d,p)=>{p?l.data=l.data.replace(p,u):l.data.indexOf(u)===-1&&(l.data=d?u+l.data:l.data+u)})(Jt[o],e,r,c),o},B_=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let c=o(n),u=c&&c.props&&c.props.className||/^go/.test(c)&&c;o=u?"."+u:c&&typeof c=="object"?c.props?"":vn(c,""):c===!1?"":c}return r+s+(o??"")},"");function Oo(t){let e=this||{},n=t.call?t(e.p):t;return $_(n.unshift?n.raw?B_(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,U_(e.target),e.g,e.o,e.k)}let cf,Ja,Qa;Oo.bind({g:1});let nn=Oo.bind({k:1});function q_(t,e,n,r){vn.p=e,cf=t,Ja=n,Qa=r}function Un(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let c=Object.assign({},i),u=c.className||s.className;n.p=Object.assign({theme:Ja&&Ja()},c),n.o=/ *go\d+/.test(u),c.className=Oo.apply(n,r)+(u?" "+u:"");let l=t;return t[0]&&(l=c.as||t,delete c.as),Qa&&l[0]&&Qa(c),cf(l,c)}return s}}var W_=t=>typeof t=="function",no=(t,e)=>W_(t)?t(e):t,H_=(()=>{let t=0;return()=>(++t).toString()})(),uf=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),G_=20,Fc="default",lf=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return lf(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},Wi=[],hf={toasts:[],pausedAt:void 0,settings:{toastLimit:G_}},zt={},df=(t,e=Fc)=>{zt[e]=lf(zt[e]||hf,t),Wi.forEach(([n,r])=>{n===e&&r(zt[e])})},ff=t=>Object.keys(zt).forEach(e=>df(t,e)),K_=t=>Object.keys(zt).find(e=>zt[e].toasts.some(n=>n.id===t)),Vo=(t=Fc)=>e=>{df(e,t)},Z_={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},J_=(t={},e=Fc)=>{let[n,r]=A.useState(zt[e]||hf),s=A.useRef(zt[e]);A.useEffect(()=>(s.current!==zt[e]&&r(zt[e]),Wi.push([e,r]),()=>{let o=Wi.findIndex(([c])=>c===e);o>-1&&Wi.splice(o,1)}),[e]);let i=n.toasts.map(o=>{var c,u,l;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((c=t[o.type])==null?void 0:c.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((u=t[o.type])==null?void 0:u.duration)||(t==null?void 0:t.duration)||Z_[o.type],style:{...t.style,...(l=t[o.type])==null?void 0:l.style,...o.style}}});return{...n,toasts:i}},Q_=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||H_()}),ii=t=>(e,n)=>{let r=Q_(e,t,n);return Vo(r.toasterId||K_(r.id))({type:2,toast:r}),r.id},ze=(t,e)=>ii("blank")(t,e);ze.error=ii("error");ze.success=ii("success");ze.loading=ii("loading");ze.custom=ii("custom");ze.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Vo(e)(n):ff(n)};ze.dismissAll=t=>ze.dismiss(void 0,t);ze.remove=(t,e)=>{let n={type:4,toastId:t};e?Vo(e)(n):ff(n)};ze.removeAll=t=>ze.remove(void 0,t);ze.promise=(t,e,n)=>{let r=ze.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let i=e.success?no(e.success,s):void 0;return i?ze.success(i,{id:r,...n,...n==null?void 0:n.success}):ze.dismiss(r),s}).catch(s=>{let i=e.error?no(e.error,s):void 0;i?ze.error(i,{id:r,...n,...n==null?void 0:n.error}):ze.dismiss(r)}),t};var Y_=1e3,X_=(t,e="default")=>{let{toasts:n,pausedAt:r}=J_(t,e),s=A.useRef(new Map).current,i=A.useCallback((p,m=Y_)=>{if(s.has(p))return;let _=setTimeout(()=>{s.delete(p),o({type:4,toastId:p})},m);s.set(p,_)},[]);A.useEffect(()=>{if(r)return;let p=Date.now(),m=n.map(_=>{if(_.duration===1/0)return;let D=(_.duration||0)+_.pauseDuration-(p-_.createdAt);if(D<0){_.visible&&ze.dismiss(_.id);return}return setTimeout(()=>ze.dismiss(_.id,e),D)});return()=>{m.forEach(_=>_&&clearTimeout(_))}},[n,r,e]);let o=A.useCallback(Vo(e),[e]),c=A.useCallback(()=>{o({type:5,time:Date.now()})},[o]),u=A.useCallback((p,m)=>{o({type:1,toast:{id:p,height:m}})},[o]),l=A.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),d=A.useCallback((p,m)=>{let{reverseOrder:_=!1,gutter:D=8,defaultPosition:P}=m||{},I=n.filter(z=>(z.position||P)===(p.position||P)&&z.height),L=I.findIndex(z=>z.id===p.id),C=I.filter((z,G)=>G<L&&z.visible).length;return I.filter(z=>z.visible).slice(..._?[C+1]:[0,C]).reduce((z,G)=>z+(G.height||0)+D,0)},[n]);return A.useEffect(()=>{n.forEach(p=>{if(p.dismissed)i(p.id,p.removeDelay);else{let m=s.get(p.id);m&&(clearTimeout(m),s.delete(p.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:u,startPause:c,endPause:l,calculateOffset:d}}},ey=nn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ty=nn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ny=nn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,ry=Un("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${ey} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ty} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ny} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,sy=nn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,iy=Un("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${sy} 1s linear infinite;
`,oy=nn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ay=nn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,cy=Un("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${oy} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ay} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,uy=Un("div")`
  position: absolute;
`,ly=Un("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,hy=nn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,dy=Un("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${hy} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,fy=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?A.createElement(dy,null,e):e:n==="blank"?null:A.createElement(ly,null,A.createElement(iy,{...r}),n!=="loading"&&A.createElement(uy,null,n==="error"?A.createElement(ry,{...r}):A.createElement(cy,{...r})))},py=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,my=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,gy="0%{opacity:0;} 100%{opacity:1;}",_y="0%{opacity:1;} 100%{opacity:0;}",yy=Un("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,vy=Un("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ey=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=uf()?[gy,_y]:[py(n),my(n)];return{animation:e?`${nn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${nn(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},wy=A.memo(({toast:t,position:e,style:n,children:r})=>{let s=t.height?Ey(t.position||e||"top-center",t.visible):{opacity:0},i=A.createElement(fy,{toast:t}),o=A.createElement(vy,{...t.ariaProps},no(t.message,t));return A.createElement(yy,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):A.createElement(A.Fragment,null,i,o))});q_(A.createElement);var Ty=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=A.useCallback(o=>{if(o){let c=()=>{let u=o.getBoundingClientRect().height;r(t,u)};c(),new MutationObserver(c).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return A.createElement("div",{ref:i,className:e,style:n},s)},by=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:uf()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},Iy=Oo`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Di=16,Ay=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,toasterId:i,containerStyle:o,containerClassName:c})=>{let{toasts:u,handlers:l}=X_(n,i);return A.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:Di,left:Di,right:Di,bottom:Di,pointerEvents:"none",...o},className:c,onMouseEnter:l.startPause,onMouseLeave:l.endPause},u.map(d=>{let p=d.position||e,m=l.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:e}),_=by(p,m);return A.createElement(Ty,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Iy:"",style:_},d.type==="custom"?no(d.message,d):s?s(d):A.createElement(wy,{toast:d,position:p}))}))},Ca=ze;const Sy="modulepreload",Ry=function(t){return"/"+t},Vl={},Gt=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=Ry(u),u in Vl)return;Vl[u]=!0;const l=u.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const p=document.createElement("link");if(p.rel=l?"stylesheet":Sy,l||(p.as="script"),p.crossOrigin="",p.href=u,c&&p.setAttribute("nonce",c),document.head.appendChild(p),l)return new Promise((m,_)=>{p.addEventListener("load",m),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},Py={};function pf(t,e){let n;try{n=t()}catch{return}return{getItem:s=>{var i;const o=u=>u===null?null:JSON.parse(u,void 0),c=(i=n.getItem(s))!=null?i:null;return c instanceof Promise?c.then(o):o(c)},setItem:(s,i)=>n.setItem(s,JSON.stringify(i,void 0)),removeItem:s=>n.removeItem(s)}}const qs=t=>e=>{try{const n=t(e);return n instanceof Promise?n:{then(r){return qs(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return qs(r)(n)}}}},Cy=(t,e)=>(n,r,s)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:I=>I,version:0,merge:(I,L)=>({...L,...I}),...e},o=!1;const c=new Set,u=new Set;let l;try{l=i.getStorage()}catch{}if(!l)return t((...I)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...I)},r,s);const d=qs(i.serialize),p=()=>{const I=i.partialize({...r()});let L;const C=d({state:I,version:i.version}).then(z=>l.setItem(i.name,z)).catch(z=>{L=z});if(L)throw L;return C},m=s.setState;s.setState=(I,L)=>{m(I,L),p()};const _=t((...I)=>{n(...I),p()},r,s);let D;const P=()=>{var I;if(!l)return;o=!1,c.forEach(C=>C(r()));const L=((I=i.onRehydrateStorage)==null?void 0:I.call(i,r()))||void 0;return qs(l.getItem.bind(l))(i.name).then(C=>{if(C)return i.deserialize(C)}).then(C=>{if(C)if(typeof C.version=="number"&&C.version!==i.version){if(i.migrate)return i.migrate(C.state,C.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return C.state}).then(C=>{var z;return D=i.merge(C,(z=r())!=null?z:_),n(D,!0),p()}).then(()=>{L==null||L(D,void 0),o=!0,u.forEach(C=>C(D))}).catch(C=>{L==null||L(void 0,C)})};return s.persist={setOptions:I=>{i={...i,...I},I.getStorage&&(l=I.getStorage())},clearStorage:()=>{l==null||l.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>P(),hasHydrated:()=>o,onHydrate:I=>(c.add(I),()=>{c.delete(I)}),onFinishHydration:I=>(u.add(I),()=>{u.delete(I)})},P(),D||_},ky=(t,e)=>(n,r,s)=>{let i={storage:pf(()=>localStorage),partialize:P=>P,version:0,merge:(P,I)=>({...I,...P}),...e},o=!1;const c=new Set,u=new Set;let l=i.storage;if(!l)return t((...P)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...P)},r,s);const d=()=>{const P=i.partialize({...r()});return l.setItem(i.name,{state:P,version:i.version})},p=s.setState;s.setState=(P,I)=>{p(P,I),d()};const m=t((...P)=>{n(...P),d()},r,s);s.getInitialState=()=>m;let _;const D=()=>{var P,I;if(!l)return;o=!1,c.forEach(C=>{var z;return C((z=r())!=null?z:m)});const L=((I=i.onRehydrateStorage)==null?void 0:I.call(i,(P=r())!=null?P:m))||void 0;return qs(l.getItem.bind(l))(i.name).then(C=>{if(C)if(typeof C.version=="number"&&C.version!==i.version){if(i.migrate)return[!0,i.migrate(C.state,C.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return[!1,C.state];return[!1,void 0]}).then(C=>{var z;const[G,H]=C;if(_=i.merge(H,(z=r())!=null?z:m),n(_,!0),G)return d()}).then(()=>{L==null||L(_,void 0),_=r(),o=!0,u.forEach(C=>C(_))}).catch(C=>{L==null||L(void 0,C)})};return s.persist={setOptions:P=>{i={...i,...P},P.storage&&(l=P.storage)},clearStorage:()=>{l==null||l.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>D(),hasHydrated:()=>o,onHydrate:P=>(c.add(P),()=>{c.delete(P)}),onFinishHydration:P=>(u.add(P),()=>{u.delete(P)})},i.skipHydration||D(),_||m},xy=(t,e)=>"getStorage"in e||"serialize"in e||"deserialize"in e?((Py?"production":void 0)!=="production"&&console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),Cy(t,e)):ky(t,e),Ny=xy,Uc=x_()(Ny((t,e)=>({currentUser:null,userRole:null,isLoading:!0,get isLoggedIn(){return e().currentUser!==null},setUser:(n,r)=>t({currentUser:n,userRole:r,isLoading:!1}),clearAuth:()=>t({currentUser:null,userRole:null,isLoading:!1}),setLoading:n=>t({isLoading:n})}),{name:"stadiumsync-auth",storage:pf(()=>localStorage),partialize:t=>({currentUser:t.currentUser,userRole:t.userRole})})),Xe={HOME:"/",LOGIN:"/login",UNAUTHORIZED:"/unauthorized",ATTENDEE_DASHBOARD:"/attendee",ATTENDEE_TICKETS:"/attendee/tickets",ATTENDEE_HEATMAP:"/attendee/heatmap",STAFF_DASHBOARD:"/staff",STAFF_SCANNER:"/staff/scanner",ADMIN_DASHBOARD:"/admin",ADMIN_USERS:"/admin/users",ADMIN_CROWD:"/admin/crowd",ADMIN_HEATMAP:"/admin/heatmap"},Ws={attendee:Xe.ATTENDEE_DASHBOARD,staff:Xe.STAFF_DASHBOARD,admin:Xe.ADMIN_DASHBOARD};function ka({allowedRoles:t=[]}){const{currentUser:e,userRole:n,isLoggedIn:r}=Uc(),s=S_();return!r||!e?N.jsx(Za,{to:Xe.LOGIN,state:{from:s},replace:!0}):t.length>0&&n&&!t.includes(n)?N.jsx(Za,{to:Ws[n],replace:!0}):N.jsx(tf,{})}function mf(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(n=mf(t[e]))&&(r&&(r+=" "),r+=n)}else for(n in t)t[n]&&(r&&(r+=" "),r+=n);return r}function gf(){for(var t,e,n=0,r="",s=arguments.length;n<s;n++)(t=arguments[n])&&(e=mf(t))&&(r&&(r+=" "),r+=e);return r}const zc="-",Dy=t=>{const e=Vy(t),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:o=>{const c=o.split(zc);return c[0]===""&&c.length!==1&&c.shift(),_f(c,e)||Oy(o)},getConflictingClassGroupIds:(o,c)=>{const u=n[o]||[];return c&&r[o]?[...u,...r[o]]:u}}},_f=(t,e)=>{var o;if(t.length===0)return e.classGroupId;const n=t[0],r=e.nextPart.get(n),s=r?_f(t.slice(1),r):void 0;if(s)return s;if(e.validators.length===0)return;const i=t.join(zc);return(o=e.validators.find(({validator:c})=>c(i)))==null?void 0:o.classGroupId},Ll=/^\[(.+)\]$/,Oy=t=>{if(Ll.test(t)){const e=Ll.exec(t)[1],n=e==null?void 0:e.substring(0,e.indexOf(":"));if(n)return"arbitrary.."+n}},Vy=t=>{const{theme:e,prefix:n}=t,r={nextPart:new Map,validators:[]};return My(Object.entries(t.classGroups),n).forEach(([i,o])=>{Ya(o,r,i,e)}),r},Ya=(t,e,n,r)=>{t.forEach(s=>{if(typeof s=="string"){const i=s===""?e:Ml(e,s);i.classGroupId=n;return}if(typeof s=="function"){if(Ly(s)){Ya(s(r),e,n,r);return}e.validators.push({validator:s,classGroupId:n});return}Object.entries(s).forEach(([i,o])=>{Ya(o,Ml(e,i),n,r)})})},Ml=(t,e)=>{let n=t;return e.split(zc).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},Ly=t=>t.isThemeGetter,My=(t,e)=>e?t.map(([n,r])=>{const s=r.map(i=>typeof i=="string"?e+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,c])=>[e+o,c])):i);return[n,s]}):t,Fy=t=>{if(t<1)return{get:()=>{},set:()=>{}};let e=0,n=new Map,r=new Map;const s=(i,o)=>{n.set(i,o),e++,e>t&&(e=0,r=n,n=new Map)};return{get(i){let o=n.get(i);if(o!==void 0)return o;if((o=r.get(i))!==void 0)return s(i,o),o},set(i,o){n.has(i)?n.set(i,o):s(i,o)}}},yf="!",Uy=t=>{const{separator:e,experimentalParseClassName:n}=t,r=e.length===1,s=e[0],i=e.length,o=c=>{const u=[];let l=0,d=0,p;for(let I=0;I<c.length;I++){let L=c[I];if(l===0){if(L===s&&(r||c.slice(I,I+i)===e)){u.push(c.slice(d,I)),d=I+i;continue}if(L==="/"){p=I;continue}}L==="["?l++:L==="]"&&l--}const m=u.length===0?c:c.substring(d),_=m.startsWith(yf),D=_?m.substring(1):m,P=p&&p>d?p-d:void 0;return{modifiers:u,hasImportantModifier:_,baseClassName:D,maybePostfixModifierPosition:P}};return n?c=>n({className:c,parseClassName:o}):o},zy=t=>{if(t.length<=1)return t;const e=[];let n=[];return t.forEach(r=>{r[0]==="["?(e.push(...n.sort(),r),n=[]):n.push(r)}),e.push(...n.sort()),e},jy=t=>({cache:Fy(t.cacheSize),parseClassName:Uy(t),...Dy(t)}),$y=/\s+/,By=(t,e)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:s}=e,i=[],o=t.trim().split($y);let c="";for(let u=o.length-1;u>=0;u-=1){const l=o[u],{modifiers:d,hasImportantModifier:p,baseClassName:m,maybePostfixModifierPosition:_}=n(l);let D=!!_,P=r(D?m.substring(0,_):m);if(!P){if(!D){c=l+(c.length>0?" "+c:c);continue}if(P=r(m),!P){c=l+(c.length>0?" "+c:c);continue}D=!1}const I=zy(d).join(":"),L=p?I+yf:I,C=L+P;if(i.includes(C))continue;i.push(C);const z=s(P,D);for(let G=0;G<z.length;++G){const H=z[G];i.push(L+H)}c=l+(c.length>0?" "+c:c)}return c};function qy(){let t=0,e,n,r="";for(;t<arguments.length;)(e=arguments[t++])&&(n=vf(e))&&(r&&(r+=" "),r+=n);return r}const vf=t=>{if(typeof t=="string")return t;let e,n="";for(let r=0;r<t.length;r++)t[r]&&(e=vf(t[r]))&&(n&&(n+=" "),n+=e);return n};function Wy(t,...e){let n,r,s,i=o;function o(u){const l=e.reduce((d,p)=>p(d),t());return n=jy(l),r=n.cache.get,s=n.cache.set,i=c,c(u)}function c(u){const l=r(u);if(l)return l;const d=By(u,n);return s(u,d),d}return function(){return i(qy.apply(null,arguments))}}const Ee=t=>{const e=n=>n[t]||[];return e.isThemeGetter=!0,e},Ef=/^\[(?:([a-z-]+):)?(.+)\]$/i,Hy=/^\d+\/\d+$/,Gy=new Set(["px","full","screen"]),Ky=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,Zy=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Jy=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,Qy=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Yy=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Qt=t=>Dr(t)||Gy.has(t)||Hy.test(t),gn=t=>Zr(t,"length",ov),Dr=t=>!!t&&!Number.isNaN(Number(t)),xa=t=>Zr(t,"number",Dr),Is=t=>!!t&&Number.isInteger(Number(t)),Xy=t=>t.endsWith("%")&&Dr(t.slice(0,-1)),ie=t=>Ef.test(t),_n=t=>Ky.test(t),ev=new Set(["length","size","percentage"]),tv=t=>Zr(t,ev,wf),nv=t=>Zr(t,"position",wf),rv=new Set(["image","url"]),sv=t=>Zr(t,rv,cv),iv=t=>Zr(t,"",av),As=()=>!0,Zr=(t,e,n)=>{const r=Ef.exec(t);return r?r[1]?typeof e=="string"?r[1]===e:e.has(r[1]):n(r[2]):!1},ov=t=>Zy.test(t)&&!Jy.test(t),wf=()=>!1,av=t=>Qy.test(t),cv=t=>Yy.test(t),uv=()=>{const t=Ee("colors"),e=Ee("spacing"),n=Ee("blur"),r=Ee("brightness"),s=Ee("borderColor"),i=Ee("borderRadius"),o=Ee("borderSpacing"),c=Ee("borderWidth"),u=Ee("contrast"),l=Ee("grayscale"),d=Ee("hueRotate"),p=Ee("invert"),m=Ee("gap"),_=Ee("gradientColorStops"),D=Ee("gradientColorStopPositions"),P=Ee("inset"),I=Ee("margin"),L=Ee("opacity"),C=Ee("padding"),z=Ee("saturate"),G=Ee("scale"),H=Ee("sepia"),Y=Ee("skew"),b=Ee("space"),v=Ee("translate"),E=()=>["auto","contain","none"],R=()=>["auto","hidden","clip","visible","scroll"],S=()=>["auto",ie,e],w=()=>[ie,e],y=()=>["",Qt,gn],$=()=>["auto",Dr,ie],oe=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],ye=()=>["solid","dashed","dotted","double","none"],Pe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],De=()=>["start","end","center","between","around","evenly","stretch"],be=()=>["","0",ie],bt=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Qe=()=>[Dr,ie];return{cacheSize:500,separator:":",theme:{colors:[As],spacing:[Qt,gn],blur:["none","",_n,ie],brightness:Qe(),borderColor:[t],borderRadius:["none","","full",_n,ie],borderSpacing:w(),borderWidth:y(),contrast:Qe(),grayscale:be(),hueRotate:Qe(),invert:be(),gap:w(),gradientColorStops:[t],gradientColorStopPositions:[Xy,gn],inset:S(),margin:S(),opacity:Qe(),padding:w(),saturate:Qe(),scale:Qe(),sepia:be(),skew:Qe(),space:w(),translate:w()},classGroups:{aspect:[{aspect:["auto","square","video",ie]}],container:["container"],columns:[{columns:[_n]}],"break-after":[{"break-after":bt()}],"break-before":[{"break-before":bt()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...oe(),ie]}],overflow:[{overflow:R()}],"overflow-x":[{"overflow-x":R()}],"overflow-y":[{"overflow-y":R()}],overscroll:[{overscroll:E()}],"overscroll-x":[{"overscroll-x":E()}],"overscroll-y":[{"overscroll-y":E()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[P]}],"inset-x":[{"inset-x":[P]}],"inset-y":[{"inset-y":[P]}],start:[{start:[P]}],end:[{end:[P]}],top:[{top:[P]}],right:[{right:[P]}],bottom:[{bottom:[P]}],left:[{left:[P]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Is,ie]}],basis:[{basis:S()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ie]}],grow:[{grow:be()}],shrink:[{shrink:be()}],order:[{order:["first","last","none",Is,ie]}],"grid-cols":[{"grid-cols":[As]}],"col-start-end":[{col:["auto",{span:["full",Is,ie]},ie]}],"col-start":[{"col-start":$()}],"col-end":[{"col-end":$()}],"grid-rows":[{"grid-rows":[As]}],"row-start-end":[{row:["auto",{span:[Is,ie]},ie]}],"row-start":[{"row-start":$()}],"row-end":[{"row-end":$()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ie]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ie]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...De()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...De(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...De(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[C]}],px:[{px:[C]}],py:[{py:[C]}],ps:[{ps:[C]}],pe:[{pe:[C]}],pt:[{pt:[C]}],pr:[{pr:[C]}],pb:[{pb:[C]}],pl:[{pl:[C]}],m:[{m:[I]}],mx:[{mx:[I]}],my:[{my:[I]}],ms:[{ms:[I]}],me:[{me:[I]}],mt:[{mt:[I]}],mr:[{mr:[I]}],mb:[{mb:[I]}],ml:[{ml:[I]}],"space-x":[{"space-x":[b]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[b]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ie,e]}],"min-w":[{"min-w":[ie,e,"min","max","fit"]}],"max-w":[{"max-w":[ie,e,"none","full","min","max","fit","prose",{screen:[_n]},_n]}],h:[{h:[ie,e,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ie,e,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ie,e,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ie,e,"auto","min","max","fit"]}],"font-size":[{text:["base",_n,gn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",xa]}],"font-family":[{font:[As]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ie]}],"line-clamp":[{"line-clamp":["none",Dr,xa]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Qt,ie]}],"list-image":[{"list-image":["none",ie]}],"list-style-type":[{list:["none","disc","decimal",ie]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[t]}],"placeholder-opacity":[{"placeholder-opacity":[L]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[t]}],"text-opacity":[{"text-opacity":[L]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...ye(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Qt,gn]}],"underline-offset":[{"underline-offset":["auto",Qt,ie]}],"text-decoration-color":[{decoration:[t]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:w()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ie]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ie]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[L]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...oe(),nv]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",tv]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},sv]}],"bg-color":[{bg:[t]}],"gradient-from-pos":[{from:[D]}],"gradient-via-pos":[{via:[D]}],"gradient-to-pos":[{to:[D]}],"gradient-from":[{from:[_]}],"gradient-via":[{via:[_]}],"gradient-to":[{to:[_]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[c]}],"border-w-x":[{"border-x":[c]}],"border-w-y":[{"border-y":[c]}],"border-w-s":[{"border-s":[c]}],"border-w-e":[{"border-e":[c]}],"border-w-t":[{"border-t":[c]}],"border-w-r":[{"border-r":[c]}],"border-w-b":[{"border-b":[c]}],"border-w-l":[{"border-l":[c]}],"border-opacity":[{"border-opacity":[L]}],"border-style":[{border:[...ye(),"hidden"]}],"divide-x":[{"divide-x":[c]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[c]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[L]}],"divide-style":[{divide:ye()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...ye()]}],"outline-offset":[{"outline-offset":[Qt,ie]}],"outline-w":[{outline:[Qt,gn]}],"outline-color":[{outline:[t]}],"ring-w":[{ring:y()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[t]}],"ring-opacity":[{"ring-opacity":[L]}],"ring-offset-w":[{"ring-offset":[Qt,gn]}],"ring-offset-color":[{"ring-offset":[t]}],shadow:[{shadow:["","inner","none",_n,iv]}],"shadow-color":[{shadow:[As]}],opacity:[{opacity:[L]}],"mix-blend":[{"mix-blend":[...Pe(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Pe()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[u]}],"drop-shadow":[{"drop-shadow":["","none",_n,ie]}],grayscale:[{grayscale:[l]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[p]}],saturate:[{saturate:[z]}],sepia:[{sepia:[H]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[u]}],"backdrop-grayscale":[{"backdrop-grayscale":[l]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[L]}],"backdrop-saturate":[{"backdrop-saturate":[z]}],"backdrop-sepia":[{"backdrop-sepia":[H]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ie]}],duration:[{duration:Qe()}],ease:[{ease:["linear","in","out","in-out",ie]}],delay:[{delay:Qe()}],animate:[{animate:["none","spin","ping","pulse","bounce",ie]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[G]}],"scale-x":[{"scale-x":[G]}],"scale-y":[{"scale-y":[G]}],rotate:[{rotate:[Is,ie]}],"translate-x":[{"translate-x":[v]}],"translate-y":[{"translate-y":[v]}],"skew-x":[{"skew-x":[Y]}],"skew-y":[{"skew-y":[Y]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ie]}],accent:[{accent:["auto",t]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ie]}],"caret-color":[{caret:[t]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":w()}],"scroll-mx":[{"scroll-mx":w()}],"scroll-my":[{"scroll-my":w()}],"scroll-ms":[{"scroll-ms":w()}],"scroll-me":[{"scroll-me":w()}],"scroll-mt":[{"scroll-mt":w()}],"scroll-mr":[{"scroll-mr":w()}],"scroll-mb":[{"scroll-mb":w()}],"scroll-ml":[{"scroll-ml":w()}],"scroll-p":[{"scroll-p":w()}],"scroll-px":[{"scroll-px":w()}],"scroll-py":[{"scroll-py":w()}],"scroll-ps":[{"scroll-ps":w()}],"scroll-pe":[{"scroll-pe":w()}],"scroll-pt":[{"scroll-pt":w()}],"scroll-pr":[{"scroll-pr":w()}],"scroll-pb":[{"scroll-pb":w()}],"scroll-pl":[{"scroll-pl":w()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ie]}],fill:[{fill:[t,"none"]}],"stroke-w":[{stroke:[Qt,gn,xa]}],stroke:[{stroke:[t,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},lv=Wy(uv);function Nt(...t){return lv(gf(t))}function pN(t,e="en-US"){const n=typeof t=="string"?new Date(t):t;return new Intl.DateTimeFormat(e,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}).format(n)}function mN(t,e,n){return Math.min(Math.max(t,e),n)}function gN(t){return t>=90?"text-red-500":t>=70?"text-amber-400":"text-neon"}const hv={sm:"h-4 w-4 border-2",md:"h-8 w-8 border-2",lg:"h-12 w-12 border-4"};function ro({size:t="md",label:e="Loading…",className:n}){return N.jsxs("div",{role:"status",className:Nt("flex flex-col items-center gap-3",n),children:[N.jsx("div",{"aria-hidden":"true",className:Nt("animate-spin rounded-full border-navy-600 border-t-neon",hv[t])}),N.jsx("span",{className:"sr-only",children:e}),t==="lg"&&N.jsx("p",{className:"text-sm text-slate-400","aria-hidden":"true",children:e})]})}var oi=t=>t.type==="checkbox",Qn=t=>t instanceof Date,ft=t=>t==null;const Tf=t=>typeof t=="object";var Ne=t=>!ft(t)&&!Array.isArray(t)&&Tf(t)&&!Qn(t),dv=t=>Ne(t)&&t.target?oi(t.target)?t.target.checked:t.target.value:t,fv=(t,e)=>e.split(".").some((n,r,s)=>!isNaN(Number(n))&&t.has(s.slice(0,r).join("."))),pv=t=>{const e=t.constructor&&t.constructor.prototype;return Ne(e)&&e.hasOwnProperty("isPrototypeOf")},jc=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Ue(t){if(t instanceof Date)return new Date(t);const e=typeof FileList<"u"&&t instanceof FileList;if(jc&&(t instanceof Blob||e))return t;const n=Array.isArray(t);if(!n&&!(Ne(t)&&pv(t)))return t;const r=n?[]:Object.create(Object.getPrototypeOf(t));for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=Ue(t[s]));return r}var Lo=t=>/^\w*$/.test(t),Ae=t=>t===void 0,$c=t=>Array.isArray(t)?t.filter(Boolean):[],Bc=t=>$c(t.replace(/["|']|\]/g,"").split(/\.|\[/)),Z=(t,e,n)=>{if(!e||!Ne(t))return n;const r=(Lo(e)?[e]:Bc(e)).reduce((s,i)=>ft(s)?s:s[i],t);return Ae(r)||r===t?Ae(t[e])?n:t[e]:r},Ft=t=>typeof t=="boolean",St=t=>typeof t=="function",ge=(t,e,n)=>{let r=-1;const s=Lo(e)?[e]:Bc(e),i=s.length,o=i-1;for(;++r<i;){const c=s[r];let u=n;if(r!==o){const l=t[c];u=Ne(l)||Array.isArray(l)?l:isNaN(+s[r+1])?{}:[]}if(c==="__proto__"||c==="constructor"||c==="prototype")return;t[c]=u,t=t[c]}};const Sr={BLUR:"blur",FOCUS_OUT:"focusout",SUBMIT:"submit",TRIGGER:"trigger",VALID:"valid"},Rt={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},At={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Na="form",bf="root",mv=ke.createContext(null);mv.displayName="HookFormControlContext";var gv=(t,e,n,r=!0)=>{const s={defaultValues:e._defaultValues};for(const i in t)Object.defineProperty(s,i,{get:()=>{const o=i;return e._proxyFormState[o]!==Rt.all&&(e._proxyFormState[o]=!r||Rt.all),t[o]}});return s};const _v=typeof window<"u"?ke.useLayoutEffect:ke.useEffect;var dt=t=>typeof t=="string",yv=(t,e,n,r,s)=>dt(t)?(r&&e.watch.add(t),Z(n,t,s)):Array.isArray(t)?t.map(i=>(r&&e.watch.add(i),Z(n,i))):(r&&(e.watchAll=!0),n),Xa=t=>ft(t)||!Tf(t);function En(t,e,n=new WeakSet){if(Xa(t)||Xa(e))return Object.is(t,e);if(Qn(t)&&Qn(e))return Object.is(t.getTime(),e.getTime());const r=Object.keys(t),s=Object.keys(e);if(r.length!==s.length)return!1;if(n.has(t)||n.has(e))return!0;n.add(t),n.add(e);for(const i of r){const o=t[i];if(!s.includes(i))return!1;if(i!=="ref"){const c=e[i];if(Qn(o)&&Qn(c)||(Ne(o)||Array.isArray(o))&&(Ne(c)||Array.isArray(c))?!En(o,c,n):!Object.is(o,c))return!1}}return!0}const vv=ke.createContext(null);vv.displayName="HookFormContext";var qc=(t,e,n,r,s)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:s||!0}}:{},Ms=t=>Array.isArray(t)?t:[t],Fl=()=>{let t=[];return{get observers(){return t},next:s=>{for(const i of t)i.next&&i.next(s)},subscribe:s=>(t.push(s),{unsubscribe:()=>{t=t.filter(i=>i!==s)}}),unsubscribe:()=>{t=[]}}};function If(t,e){const n={};for(const r in t)if(t.hasOwnProperty(r)){const s=t[r],i=e[r];if(s&&Ne(s)&&i){const o=If(s,i);Ne(o)&&(n[r]=o)}else t[r]&&(n[r]=i)}return n}var ht=t=>Ne(t)&&!Object.keys(t).length,Wc=t=>t.type==="file",so=t=>{if(!jc)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},Af=t=>t.type==="select-multiple",Hc=t=>t.type==="radio",Ev=t=>Hc(t)||oi(t),Da=t=>so(t)&&t.isConnected;function wv(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=Ae(t)?r++:t[e[r++]];return t}function Tv(t){for(const e in t)if(t.hasOwnProperty(e)&&!Ae(t[e]))return!1;return!0}function Oe(t,e){const n=Array.isArray(e)?e:Lo(e)?[e]:Bc(e),r=n.length===1?t:wv(t,n),s=n.length-1,i=n[s];return r&&delete r[i],s!==0&&(Ne(r)&&ht(r)||Array.isArray(r)&&Tv(r))&&Oe(t,n.slice(0,-1)),t}var bv=t=>{for(const e in t)if(St(t[e]))return!0;return!1};function Sf(t){return Array.isArray(t)||Ne(t)&&!bv(t)}function ec(t,e={}){for(const n in t){const r=t[n];Sf(r)?(e[n]=Array.isArray(r)?[]:{},ec(r,e[n])):Ae(r)||(e[n]=!0)}return e}function Cs(t,e,n){n||(n=ec(e));for(const r in t){const s=t[r];if(Sf(s))Ae(e)||Xa(n[r])?n[r]=ec(s,Array.isArray(s)?[]:{}):Cs(s,ft(e)?{}:e[r],n[r]);else{const i=e[r];n[r]=!En(s,i)}}return n}const Ul={value:!1,isValid:!1},zl={value:!0,isValid:!0};var Rf=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!Ae(t[0].attributes.value)?Ae(t[0].value)||t[0].value===""?zl:{value:t[0].value,isValid:!0}:zl:Ul}return Ul},Pf=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>Ae(t)?t:e?t===""?NaN:t&&+t:n&&dt(t)?new Date(t):r?r(t):t;const jl={isValid:!1,value:null};var Cf=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,jl):jl;function $l(t){const e=t.ref;return Wc(e)?e.files:Hc(e)?Cf(t.refs).value:Af(e)?[...e.selectedOptions].map(({value:n})=>n):oi(e)?Rf(t.refs).value:Pf(Ae(e.value)?t.ref.value:e.value,t)}var Iv=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,Av=(t,e,n,r)=>{const s={};for(const i of t){const o=Z(e,i);o&&ge(s,i,o._f)}return{criteriaMode:n,names:[...t],fields:s,shouldUseNativeValidation:r}},io=t=>t instanceof RegExp,Ss=t=>Ae(t)?t:io(t)?t.source:Ne(t)?io(t.value)?t.value.source:t.value:t,Bl=t=>({isOnSubmit:!t||t===Rt.onSubmit,isOnBlur:t===Rt.onBlur,isOnChange:t===Rt.onChange,isOnAll:t===Rt.all,isOnTouch:t===Rt.onTouched});const ql="AsyncFunction";var Sv=t=>!!t&&!!t.validate&&!!(St(t.validate)&&t.validate.constructor.name===ql||Ne(t.validate)&&Object.values(t.validate).find(e=>e.constructor.name===ql)),Rv=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate),Wl=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length))));const Fs=(t,e,n,r)=>{for(const s of n||Object.keys(t)){const i=Z(t,s);if(i){const{_f:o,...c}=i;if(o){if(o.refs&&o.refs[0]&&e(o.refs[0],s)&&!r)return!0;if(o.ref&&e(o.ref,o.name)&&!r)return!0;if(Fs(c,e))break}else if(Ne(c)&&Fs(c,e))break}}};function Hl(t,e,n){const r=Z(t,n);if(r||Lo(n))return{error:r,name:n};const s=n.split(".");for(;s.length;){const i=s.join("."),o=Z(e,i),c=Z(t,i);if(o&&!Array.isArray(o)&&n!==i)return{name:n};if(c&&c.type)return{name:i,error:c};if(c&&c.root&&c.root.type)return{name:`${i}.root`,error:c.root};s.pop()}return{name:n}}var Pv=(t,e,n,r)=>{n(t);const{name:s,...i}=t;return ht(i)||Object.keys(i).length>=Object.keys(e).length||Object.keys(i).find(o=>e[o]===(!r||Rt.all))},Cv=(t,e,n)=>!t||!e||t===e||Ms(t).some(r=>r&&(n?r===e:r.startsWith(e)||e.startsWith(r))),kv=(t,e,n,r,s)=>s.isOnAll?!1:!n&&s.isOnTouch?!(e||t):(n?r.isOnBlur:s.isOnBlur)?!t:(n?r.isOnChange:s.isOnChange)?t:!0,xv=(t,e)=>!$c(Z(t,e)).length&&Oe(t,e),Nv=(t,e,n)=>{const r=Ms(Z(t,n));return ge(r,bf,e[n]),ge(t,n,r),t};function Gl(t,e,n="validate"){if(dt(t)||Array.isArray(t)&&t.every(dt)||Ft(t)&&!t)return{type:n,message:dt(t)?t:"",ref:e}}var Rr=t=>Ne(t)&&!io(t)?t:{value:t,message:""},Kl=async(t,e,n,r,s,i)=>{const{ref:o,refs:c,required:u,maxLength:l,minLength:d,min:p,max:m,pattern:_,validate:D,name:P,valueAsNumber:I,mount:L}=t._f,C=Z(n,P);if(!L||e.has(P))return{};const z=c?c[0]:o,G=w=>{s&&z.reportValidity&&(z.setCustomValidity(Ft(w)?"":w||""),z.reportValidity())},H={},Y=Hc(o),b=oi(o),v=Y||b,E=(I||Wc(o))&&Ae(o.value)&&Ae(C)||so(o)&&o.value===""||C===""||Array.isArray(C)&&!C.length,R=qc.bind(null,P,r,H),S=(w,y,$,oe=At.maxLength,ye=At.minLength)=>{const Pe=w?y:$;H[P]={type:w?oe:ye,message:Pe,ref:o,...R(w?oe:ye,Pe)}};if(i?!Array.isArray(C)||!C.length:u&&(!v&&(E||ft(C))||Ft(C)&&!C||b&&!Rf(c).isValid||Y&&!Cf(c).isValid)){const{value:w,message:y}=dt(u)?{value:!!u,message:u}:Rr(u);if(w&&(H[P]={type:At.required,message:y,ref:z,...R(At.required,y)},!r))return G(y),H}if(!E&&(!ft(p)||!ft(m))){let w,y;const $=Rr(m),oe=Rr(p);if(!ft(C)&&!isNaN(C)){const ye=o.valueAsNumber||C&&+C;ft($.value)||(w=ye>$.value),ft(oe.value)||(y=ye<oe.value)}else{const ye=o.valueAsDate||new Date(C),Pe=bt=>new Date(new Date().toDateString()+" "+bt),De=o.type=="time",be=o.type=="week";dt($.value)&&C&&(w=De?Pe(C)>Pe($.value):be?C>$.value:ye>new Date($.value)),dt(oe.value)&&C&&(y=De?Pe(C)<Pe(oe.value):be?C<oe.value:ye<new Date(oe.value))}if((w||y)&&(S(!!w,$.message,oe.message,At.max,At.min),!r))return G(H[P].message),H}if((l||d)&&!E&&(dt(C)||i&&Array.isArray(C))){const w=Rr(l),y=Rr(d),$=!ft(w.value)&&C.length>+w.value,oe=!ft(y.value)&&C.length<+y.value;if(($||oe)&&(S($,w.message,y.message),!r))return G(H[P].message),H}if(_&&!E&&dt(C)){const{value:w,message:y}=Rr(_);if(io(w)&&!C.match(w)&&(H[P]={type:At.pattern,message:y,ref:o,...R(At.pattern,y)},!r))return G(y),H}if(D){if(St(D)){const w=await D(C,n),y=Gl(w,z);if(y&&(H[P]={...y,...R(At.validate,y.message)},!r))return G(y.message),H}else if(Ne(D)){let w={};for(const y in D){if(!ht(w)&&!r)break;const $=Gl(await D[y](C,n),z,y);$&&(w={...$,...R(y,$.message)},G($.message),r&&(H[P]=w))}if(!ht(w)&&(H[P]={ref:z,...w},!r))return H}}return G(!0),H};const Dv={mode:Rt.onSubmit,reValidateMode:Rt.onChange,shouldFocusError:!0};function Ov(t={}){let e={...Dv,...t},n={submitCount:0,isDirty:!1,isReady:!1,isLoading:St(e.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1},r={},s=Ne(e.defaultValues)||Ne(e.values)?Ue(e.defaultValues||e.values)||{}:{},i=e.shouldUnregister?{}:Ue(s),o={action:!1,mount:!1,watch:!1,keepIsValid:!1},c={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set,registerName:new Set},u,l=0;const d={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},p={...d};let m={...p};const _={array:Fl(),state:Fl()},D=e.criteriaMode===Rt.all,P=T=>k=>{clearTimeout(l),l=setTimeout(T,k)},I=async T=>{if(!o.keepIsValid&&!e.disabled&&(p.isValid||m.isValid||T)){let k;e.resolver?(k=ht((await E()).errors),L()):k=await w({fields:r,onlyCheckValid:!0,eventType:Sr.VALID}),k!==n.isValid&&_.state.next({isValid:k})}},L=(T,k)=>{!e.disabled&&(p.isValidating||p.validatingFields||m.isValidating||m.validatingFields)&&((T||Array.from(c.mount)).forEach(O=>{O&&(k?ge(n.validatingFields,O,k):Oe(n.validatingFields,O))}),_.state.next({validatingFields:n.validatingFields,isValidating:!ht(n.validatingFields)}))},C=T=>{const k=Cs(s,i),O=Iv(T);ge(n.dirtyFields,O,Z(k,O))},z=(T,k=[],O,W,q=!0,j=!0)=>{if(W&&O&&!e.disabled){if(o.action=!0,j&&Array.isArray(Z(r,T))){const J=O(Z(r,T),W.argA,W.argB);q&&ge(r,T,J)}if(j&&Array.isArray(Z(n.errors,T))){const J=O(Z(n.errors,T),W.argA,W.argB);q&&ge(n.errors,T,J),xv(n.errors,T)}if((p.touchedFields||m.touchedFields)&&j&&Array.isArray(Z(n.touchedFields,T))){const J=O(Z(n.touchedFields,T),W.argA,W.argB);q&&ge(n.touchedFields,T,J)}(p.dirtyFields||m.dirtyFields)&&C(T),_.state.next({name:T,isDirty:$(T,k),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else ge(i,T,k)},G=(T,k)=>{ge(n.errors,T,k),_.state.next({errors:n.errors})},H=T=>{n.errors=T,_.state.next({errors:n.errors,isValid:!1})},Y=(T,k,O,W)=>{const q=Z(r,T);if(q){const j=Z(i,T,Ae(O)?Z(s,T):O);Ae(j)||W&&W.defaultChecked||k?ge(i,T,k?j:$l(q._f)):Pe(T,j),o.mount&&!o.action&&I()}},b=(T,k,O,W,q)=>{let j=!1,J=!1;const ae={name:T};if(!e.disabled){if(!O||W){(p.isDirty||m.isDirty)&&(J=n.isDirty,n.isDirty=ae.isDirty=$(),j=J!==ae.isDirty);const fe=En(Z(s,T),k);J=!!Z(n.dirtyFields,T),fe?Oe(n.dirtyFields,T):ge(n.dirtyFields,T,!0),ae.dirtyFields=n.dirtyFields,j=j||(p.dirtyFields||m.dirtyFields)&&J!==!fe}if(O){const fe=Z(n.touchedFields,T);fe||(ge(n.touchedFields,T,O),ae.touchedFields=n.touchedFields,j=j||(p.touchedFields||m.touchedFields)&&fe!==O)}j&&q&&_.state.next(ae)}return j?ae:{}},v=(T,k,O,W)=>{const q=Z(n.errors,T),j=(p.isValid||m.isValid)&&Ft(k)&&n.isValid!==k;if(e.delayError&&O?(u=P(()=>G(T,O)),u(e.delayError)):(clearTimeout(l),u=null,O?ge(n.errors,T,O):Oe(n.errors,T)),(O?!En(q,O):q)||!ht(W)||j){const J={...W,...j&&Ft(k)?{isValid:k}:{},errors:n.errors,name:T};n={...n,...J},_.state.next(J)}},E=async T=>(L(T,!0),await e.resolver(i,e.context,Av(T||c.mount,r,e.criteriaMode,e.shouldUseNativeValidation))),R=async T=>{const{errors:k}=await E(T);if(L(T),T)for(const O of T){const W=Z(k,O);W?ge(n.errors,O,W):Oe(n.errors,O)}else n.errors=k;return k},S=async({name:T,eventType:k})=>{if(t.validate){const O=await t.validate({formValues:i,formState:n,name:T,eventType:k});if(Ne(O))for(const W in O)O[W]&&un(`${Na}.${W}`,{message:dt(O.message)?O.message:"",type:At.validate});else dt(O)||!O?un(Na,{message:O||"",type:At.validate}):_r(Na);return O}return!0},w=async({fields:T,onlyCheckValid:k,name:O,eventType:W,context:q={valid:!0,runRootValidation:!1}})=>{if(t.validate&&(q.runRootValidation=!0,!await S({name:O,eventType:W})&&(q.valid=!1,k)))return q.valid;for(const j in T){const J=T[j];if(J){const{_f:ae,...fe}=J;if(ae){const He=c.array.has(ae.name),st=J._f&&Sv(J._f);st&&p.validatingFields&&L([ae.name],!0);const Ge=await Kl(J,c.disabled,i,D,e.shouldUseNativeValidation&&!k,He);if(st&&p.validatingFields&&L([ae.name]),Ge[ae.name]&&(q.valid=!1,k)||(!k&&(Z(Ge,ae.name)?He?Nv(n.errors,Ge,ae.name):ge(n.errors,ae.name,Ge[ae.name]):Oe(n.errors,ae.name)),t.shouldUseNativeValidation&&Ge[ae.name]))break}!ht(fe)&&await w({context:q,onlyCheckValid:k,fields:fe,name:j,eventType:W})}}return q.valid},y=()=>{for(const T of c.unMount){const k=Z(r,T);k&&(k._f.refs?k._f.refs.every(O=>!Da(O)):!Da(k._f.ref))&&ss(T)}c.unMount=new Set},$=(T,k)=>!e.disabled&&(T&&k&&ge(i,T,k),!En(Ot(),s)),oe=(T,k,O)=>yv(T,c,{...o.mount?i:Ae(k)?s:dt(T)?{[T]:k}:k},O,k),ye=T=>$c(Z(o.mount?i:s,T,e.shouldUnregister?Z(s,T,[]):[])),Pe=(T,k,O={})=>{const W=Z(r,T);let q=k;if(W){const j=W._f;j&&(!j.disabled&&ge(i,T,Pf(k,j)),q=so(j.ref)&&ft(k)?"":k,Af(j.ref)?[...j.ref.options].forEach(J=>J.selected=q.includes(J.value)):j.refs?oi(j.ref)?j.refs.forEach(J=>{(!J.defaultChecked||!J.disabled)&&(Array.isArray(q)?J.checked=!!q.find(ae=>ae===J.value):J.checked=q===J.value||!!q)}):j.refs.forEach(J=>J.checked=J.value===q):Wc(j.ref)?j.ref.value="":(j.ref.value=q,j.ref.type||_.state.next({name:T,values:Ue(i)})))}(O.shouldDirty||O.shouldTouch)&&b(T,q,O.shouldTouch,O.shouldDirty,!0),O.shouldValidate&&Dt(T)},De=(T,k,O)=>{for(const W in k){if(!k.hasOwnProperty(W))return;const q=k[W],j=T+"."+W,J=Z(r,j);(c.array.has(T)||Ne(q)||J&&!J._f)&&!Qn(q)?De(j,q,O):Pe(j,q,O)}},be=(T,k,O={})=>{const W=Z(r,T),q=c.array.has(T),j=Ue(k);ge(i,T,j),q?(_.array.next({name:T,values:Ue(i)}),(p.isDirty||p.dirtyFields||m.isDirty||m.dirtyFields)&&O.shouldDirty&&(C(T),_.state.next({name:T,dirtyFields:n.dirtyFields,isDirty:$(T,j)}))):W&&!W._f&&!ft(j)?De(T,j,O):Pe(T,j,O),Wl(T,c)?_.state.next({...n,name:T,values:Ue(i)}):_.state.next({name:o.mount?T:void 0,values:Ue(i)})},bt=async T=>{o.mount=!0;const k=T.target;let O=k.name,W=!0;const q=Z(r,O),j=fe=>{W=Number.isNaN(fe)||Qn(fe)&&isNaN(fe.getTime())||En(fe,Z(i,O,fe))},J=Bl(e.mode),ae=Bl(e.reValidateMode);if(q){let fe,He;const st=k.type?$l(q._f):dv(T),Ge=T.type===Sr.BLUR||T.type===Sr.FOCUS_OUT,cs=!Rv(q._f)&&!t.validate&&!e.resolver&&!Z(n.errors,O)&&!q._f.deps||kv(Ge,Z(n.touchedFields,O),n.isSubmitted,ae,J),It=Wl(O,c,Ge);ge(i,O,st),Ge?(!k||!k.readOnly)&&(q._f.onBlur&&q._f.onBlur(T),u&&u(0)):q._f.onChange&&q._f.onChange(T);const wr=b(O,st,Ge),Tr=!ht(wr)||It;if(!Ge&&_.state.next({name:O,type:T.type,values:Ue(i)}),cs)return(p.isValid||m.isValid)&&(e.mode==="onBlur"?Ge&&I():Ge||I()),Tr&&_.state.next({name:O,...It?{}:wr});if(!e.resolver&&t.validate&&await S({name:O,eventType:T.type}),!Ge&&It&&_.state.next({...n}),e.resolver){const{errors:us}=await E([O]);if(L([O]),j(st),W){const Wn=Hl(n.errors,r,O),ls=Hl(us,r,Wn.name||O);fe=ls.error,O=ls.name,He=ht(us)}}else L([O],!0),fe=(await Kl(q,c.disabled,i,D,e.shouldUseNativeValidation))[O],L([O]),j(st),W&&(fe?He=!1:(p.isValid||m.isValid)&&(He=await w({fields:r,onlyCheckValid:!0,name:O,eventType:T.type})));W&&(q._f.deps&&(!Array.isArray(q._f.deps)||q._f.deps.length>0)&&Dt(q._f.deps),v(O,He,fe,wr))}},Qe=(T,k)=>{if(Z(n.errors,k)&&T.focus)return T.focus(),1},Dt=async(T,k={})=>{let O,W;const q=Ms(T);if(e.resolver){const j=await R(Ae(T)?T:q);O=ht(j),W=T?!q.some(J=>Z(j,J)):O}else T?(W=(await Promise.all(q.map(async j=>{const J=Z(r,j);return await w({fields:J&&J._f?{[j]:J}:J,eventType:Sr.TRIGGER})}))).every(Boolean),!(!W&&!n.isValid)&&I()):W=O=await w({fields:r,name:T,eventType:Sr.TRIGGER});return _.state.next({...!dt(T)||(p.isValid||m.isValid)&&O!==n.isValid?{}:{name:T},...e.resolver||!T?{isValid:O}:{},errors:n.errors}),k.shouldFocus&&!W&&Fs(r,Qe,T?q:c.mount),W},Ot=(T,k)=>{let O={...o.mount?i:s};return k&&(O=If(k.dirtyFields?n.dirtyFields:n.touchedFields,O)),Ae(T)?O:dt(T)?Z(O,T):T.map(W=>Z(O,W))},Vt=(T,k)=>({invalid:!!Z((k||n).errors,T),isDirty:!!Z((k||n).dirtyFields,T),error:Z((k||n).errors,T),isValidating:!!Z(n.validatingFields,T),isTouched:!!Z((k||n).touchedFields,T)}),_r=T=>{const k=T?Ms(T):void 0;k==null||k.forEach(O=>Oe(n.errors,O)),k?k.forEach(O=>{_.state.next({name:O,errors:n.errors})}):_.state.next({errors:{}})},un=(T,k,O)=>{const W=(Z(r,T,{_f:{}})._f||{}).ref,q=Z(n.errors,T)||{},{ref:j,message:J,type:ae,...fe}=q;ge(n.errors,T,{...fe,...k,ref:W}),_.state.next({name:T,errors:n.errors,isValid:!1}),O&&O.shouldFocus&&W&&W.focus&&W.focus()},rs=(T,k)=>St(T)?_.state.subscribe({next:O=>"values"in O&&T(oe(void 0,k),O)}):oe(T,k,!0),yr=T=>_.state.subscribe({next:k=>{Cv(T.name,k.name,T.exact)&&Pv(k,T.formState||p,Ye,T.reRenderRoot)&&T.callback({values:{...i},...n,...k,defaultValues:s})}}).unsubscribe,yi=T=>(o.mount=!0,m={...m,...T.formState},yr({...T,formState:{...d,...T.formState}})),ss=(T,k={})=>{for(const O of T?Ms(T):c.mount)c.mount.delete(O),c.array.delete(O),k.keepValue||(Oe(r,O),Oe(i,O)),!k.keepError&&Oe(n.errors,O),!k.keepDirty&&Oe(n.dirtyFields,O),!k.keepTouched&&Oe(n.touchedFields,O),!k.keepIsValidating&&Oe(n.validatingFields,O),!e.shouldUnregister&&!k.keepDefaultValue&&Oe(s,O);_.state.next({values:Ue(i)}),_.state.next({...n,...k.keepDirty?{isDirty:$()}:{}}),!k.keepIsValid&&I()},vi=({disabled:T,name:k})=>{if(Ft(T)&&o.mount||T||c.disabled.has(k)){const q=c.disabled.has(k)!==!!T;T?c.disabled.add(k):c.disabled.delete(k),q&&o.mount&&!o.action&&I()}},vr=(T,k={})=>{let O=Z(r,T);const W=Ft(k.disabled)||Ft(e.disabled),q=!c.registerName.has(T)&&O&&!O._f.mount;return ge(r,T,{...O||{},_f:{...O&&O._f?O._f:{ref:{name:T}},name:T,mount:!0,...k}}),c.mount.add(T),O&&!q?vi({disabled:Ft(k.disabled)?k.disabled:e.disabled,name:T}):Y(T,!0,k.value),{...W?{disabled:k.disabled||e.disabled}:{},...e.progressive?{required:!!k.required,min:Ss(k.min),max:Ss(k.max),minLength:Ss(k.minLength),maxLength:Ss(k.maxLength),pattern:Ss(k.pattern)}:{},name:T,onChange:bt,onBlur:bt,ref:j=>{if(j){c.registerName.add(T),vr(T,k),c.registerName.delete(T),O=Z(r,T);const J=Ae(j.value)&&j.querySelectorAll&&j.querySelectorAll("input,select,textarea")[0]||j,ae=Ev(J),fe=O._f.refs||[];if(ae?fe.find(He=>He===J):J===O._f.ref)return;ge(r,T,{_f:{...O._f,...ae?{refs:[...fe.filter(Da),J,...Array.isArray(Z(s,T))?[{}]:[]],ref:{type:J.type,name:T}}:{ref:J}}}),Y(T,!1,void 0,J)}else O=Z(r,T,{}),O._f&&(O._f.mount=!1),(e.shouldUnregister||k.shouldUnregister)&&!(fv(c.array,T)&&o.action)&&c.unMount.add(T)}}},qn=()=>e.shouldFocusError&&Fs(r,Qe,c.mount),Ei=T=>{Ft(T)&&(_.state.next({disabled:T}),Fs(r,(k,O)=>{const W=Z(r,O);W&&(k.disabled=W._f.disabled||T,Array.isArray(W._f.refs)&&W._f.refs.forEach(q=>{q.disabled=W._f.disabled||T}))},0,!1))},wi=(T,k)=>async O=>{let W;O&&(O.preventDefault&&O.preventDefault(),O.persist&&O.persist());let q=Ue(i);if(_.state.next({isSubmitting:!0}),e.resolver){const{errors:j,values:J}=await E();L(),n.errors=j,q=Ue(J)}else await w({fields:r,eventType:Sr.SUBMIT});if(c.disabled.size)for(const j of c.disabled)Oe(q,j);if(Oe(n.errors,bf),ht(n.errors)){_.state.next({errors:{}});try{await T(q,O)}catch(j){W=j}}else k&&await k({...n.errors},O),qn(),setTimeout(qn);if(_.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:ht(n.errors)&&!W,submitCount:n.submitCount+1,errors:n.errors}),W)throw W},is=(T,k={})=>{Z(r,T)&&(Ae(k.defaultValue)?be(T,Ue(Z(s,T))):(be(T,k.defaultValue),ge(s,T,Ue(k.defaultValue))),k.keepTouched||Oe(n.touchedFields,T),k.keepDirty||(Oe(n.dirtyFields,T),n.isDirty=k.defaultValue?$(T,Ue(Z(s,T))):$()),k.keepError||(Oe(n.errors,T),p.isValid&&I()),_.state.next({...n}))},Er=(T,k={})=>{const O=T?Ue(T):s,W=Ue(O),q=ht(T),j=q?s:W;if(k.keepDefaultValues||(s=O),!k.keepValues){if(k.keepDirtyValues){const J=new Set([...c.mount,...Object.keys(Cs(s,i))]);for(const ae of Array.from(J)){const fe=Z(n.dirtyFields,ae),He=Z(i,ae),st=Z(j,ae);fe&&!Ae(He)?ge(j,ae,He):!fe&&!Ae(st)&&be(ae,st)}}else{if(jc&&Ae(T))for(const J of c.mount){const ae=Z(r,J);if(ae&&ae._f){const fe=Array.isArray(ae._f.refs)?ae._f.refs[0]:ae._f.ref;if(so(fe)){const He=fe.closest("form");if(He){He.reset();break}}}}if(k.keepFieldsRef)for(const J of c.mount)be(J,Z(j,J));else r={}}i=e.shouldUnregister?k.keepDefaultValues?Ue(s):{}:Ue(j),_.array.next({values:{...j}}),_.state.next({values:{...j}})}c={mount:k.keepDirtyValues?c.mount:new Set,unMount:new Set,array:new Set,registerName:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},o.mount=!p.isValid||!!k.keepIsValid||!!k.keepDirtyValues||!e.shouldUnregister&&!ht(j),o.watch=!!e.shouldUnregister,o.keepIsValid=!!k.keepIsValid,o.action=!1,k.keepErrors||(n.errors={}),_.state.next({submitCount:k.keepSubmitCount?n.submitCount:0,isDirty:q?!1:k.keepDirty?n.isDirty:!!(k.keepDefaultValues&&!En(T,s)),isSubmitted:k.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:q?{}:k.keepDirtyValues?k.keepDefaultValues&&i?Cs(s,i):n.dirtyFields:k.keepDefaultValues&&T?Cs(s,T):k.keepDirty?n.dirtyFields:{},touchedFields:k.keepTouched?n.touchedFields:{},errors:k.keepErrors?n.errors:{},isSubmitSuccessful:k.keepIsSubmitSuccessful?n.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:s})},os=(T,k)=>Er(St(T)?T(i):T,{...e.resetOptions,...k}),We=(T,k={})=>{const O=Z(r,T),W=O&&O._f;if(W){const q=W.refs?W.refs[0]:W.ref;q.focus&&setTimeout(()=>{q.focus(),k.shouldSelect&&St(q.select)&&q.select()})}},Ye=T=>{n={...n,...T}},Ti={control:{register:vr,unregister:ss,getFieldState:Vt,handleSubmit:wi,setError:un,_subscribe:yr,_runSchema:E,_updateIsValidating:L,_focusError:qn,_getWatch:oe,_getDirty:$,_setValid:I,_setFieldArray:z,_setDisabledField:vi,_setErrors:H,_getFieldArray:ye,_reset:Er,_resetDefaultValues:()=>St(e.defaultValues)&&e.defaultValues().then(T=>{os(T,e.resetOptions),_.state.next({isLoading:!1})}),_removeUnmounted:y,_disableForm:Ei,_subjects:_,_proxyFormState:p,get _fields(){return r},get _formValues(){return i},get _state(){return o},set _state(T){o=T},get _defaultValues(){return s},get _names(){return c},set _names(T){c=T},get _formState(){return n},get _options(){return e},set _options(T){e={...e,...T}}},subscribe:yi,trigger:Dt,register:vr,handleSubmit:wi,watch:rs,setValue:be,getValues:Ot,reset:os,resetField:is,clearErrors:_r,unregister:ss,setError:un,setFocus:We,getFieldState:Vt};return{...Ti,formControl:Ti}}function Vv(t={}){const e=ke.useRef(void 0),n=ke.useRef(void 0),[r,s]=ke.useState({isDirty:!1,isValidating:!1,isLoading:St(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:t.errors||{},disabled:t.disabled||!1,isReady:!1,defaultValues:St(t.defaultValues)?void 0:t.defaultValues});if(!e.current)if(t.formControl)e.current={...t.formControl,formState:r},t.defaultValues&&!St(t.defaultValues)&&t.formControl.reset(t.defaultValues,t.resetOptions);else{const{formControl:o,...c}=Ov(t);e.current={...c,formState:r}}const i=e.current.control;return i._options=t,_v(()=>{const o=i._subscribe({formState:i._proxyFormState,callback:()=>s({...i._formState}),reRenderRoot:!0});return s(c=>({...c,isReady:!0})),i._formState.isReady=!0,o},[i]),ke.useEffect(()=>i._disableForm(t.disabled),[i,t.disabled]),ke.useEffect(()=>{t.mode&&(i._options.mode=t.mode),t.reValidateMode&&(i._options.reValidateMode=t.reValidateMode)},[i,t.mode,t.reValidateMode]),ke.useEffect(()=>{t.errors&&(i._setErrors(t.errors),i._focusError())},[i,t.errors]),ke.useEffect(()=>{t.shouldUnregister&&i._subjects.state.next({values:i._getWatch()})},[i,t.shouldUnregister]),ke.useEffect(()=>{if(i._proxyFormState.isDirty){const o=i._getDirty();o!==r.isDirty&&i._subjects.state.next({isDirty:o})}},[i,r.isDirty]),ke.useEffect(()=>{var o;t.values&&!En(t.values,n.current)?(i._reset(t.values,{keepFieldsRef:!0,...i._options.resetOptions}),!((o=i._options.resetOptions)===null||o===void 0)&&o.keepIsValid||i._setValid(),n.current=t.values,s(c=>({...c}))):i._resetDefaultValues()},[i,t.values]),ke.useEffect(()=>{i._state.mount||(i._setValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),e.current.formState=ke.useMemo(()=>gv(r,i),[i,r]),e.current}const Zl=(t,e,n)=>{if(t&&"reportValidity"in t){const r=Z(n,e);t.setCustomValidity(r&&r.message||""),t.reportValidity()}},tc=(t,e)=>{for(const n in e.fields){const r=e.fields[n];r&&r.ref&&"reportValidity"in r.ref?Zl(r.ref,n,t):r&&r.refs&&r.refs.forEach(s=>Zl(s,n,t))}},Jl=(t,e)=>{e.shouldUseNativeValidation&&tc(t,e);const n={};for(const r in t){const s=Z(e.fields,r),i=Object.assign(t[r]||{},{ref:s&&s.ref});if(Lv(e.names||Object.keys(t),r)){const o=Object.assign({},Z(n,r));ge(o,"root",i),ge(n,r,o)}else ge(n,r,i)}return n},Lv=(t,e)=>{const n=Ql(e);return t.some(r=>Ql(r).match(`^${n}\\.\\d+`))};function Ql(t){return t.replace(/\]|\[/g,"")}function F(t,e,n){function r(c,u){if(c._zod||Object.defineProperty(c,"_zod",{value:{def:u,constr:o,traits:new Set},enumerable:!1}),c._zod.traits.has(t))return;c._zod.traits.add(t),e(c,u);const l=o.prototype,d=Object.keys(l);for(let p=0;p<d.length;p++){const m=d[p];m in c||(c[m]=l[m].bind(c))}}const s=(n==null?void 0:n.Parent)??Object;class i extends s{}Object.defineProperty(i,"name",{value:t});function o(c){var u;const l=n!=null&&n.Parent?new i:this;r(l,c),(u=l._zod).deferred??(u.deferred=[]);for(const d of l._zod.deferred)d();return l}return Object.defineProperty(o,"init",{value:r}),Object.defineProperty(o,Symbol.hasInstance,{value:c=>{var u,l;return n!=null&&n.Parent&&c instanceof n.Parent?!0:(l=(u=c==null?void 0:c._zod)==null?void 0:u.traits)==null?void 0:l.has(t)}}),Object.defineProperty(o,"name",{value:t}),o}class Or extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class kf extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}const xf={};function tr(t){return xf}function Nf(t){const e=Object.values(t).filter(r=>typeof r=="number");return Object.entries(t).filter(([r,s])=>e.indexOf(+r)===-1).map(([r,s])=>s)}function nc(t,e){return typeof e=="bigint"?e.toString():e}function Gc(t){return{get value(){{const e=t();return Object.defineProperty(this,"value",{value:e}),e}}}}function Kc(t){return t==null}function Zc(t){const e=t.startsWith("^")?1:0,n=t.endsWith("$")?t.length-1:t.length;return t.slice(e,n)}const Yl=Symbol("evaluating");function me(t,e,n){let r;Object.defineProperty(t,e,{get(){if(r!==Yl)return r===void 0&&(r=Yl,r=n()),r},set(s){Object.defineProperty(t,e,{value:s})},configurable:!0})}function hr(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0})}function zn(...t){const e={};for(const n of t){const r=Object.getOwnPropertyDescriptors(n);Object.assign(e,r)}return Object.defineProperties({},e)}function Xl(t){return JSON.stringify(t)}function Mv(t){return t.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const Df="captureStackTrace"in Error?Error.captureStackTrace:(...t)=>{};function oo(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}const Fv=Gc(()=>{var t;if(typeof navigator<"u"&&((t=navigator==null?void 0:navigator.userAgent)!=null&&t.includes("Cloudflare")))return!1;try{const e=Function;return new e(""),!0}catch{return!1}});function Hs(t){if(oo(t)===!1)return!1;const e=t.constructor;if(e===void 0||typeof e!="function")return!0;const n=e.prototype;return!(oo(n)===!1||Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")===!1)}function Of(t){return Hs(t)?{...t}:Array.isArray(t)?[...t]:t}const Uv=new Set(["string","number","symbol"]);function Mo(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function jn(t,e,n){const r=new t._zod.constr(e??t._zod.def);return(!e||n!=null&&n.parent)&&(r._zod.parent=t),r}function ne(t){const e=t;if(!e)return{};if(typeof e=="string")return{error:()=>e};if((e==null?void 0:e.message)!==void 0){if((e==null?void 0:e.error)!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function zv(t){return Object.keys(t).filter(e=>t[e]._zod.optin==="optional"&&t[e]._zod.optout==="optional")}function jv(t,e){const n=t._zod.def,r=n.checks;if(r&&r.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const i=zn(t._zod.def,{get shape(){const o={};for(const c in e){if(!(c in n.shape))throw new Error(`Unrecognized key: "${c}"`);e[c]&&(o[c]=n.shape[c])}return hr(this,"shape",o),o},checks:[]});return jn(t,i)}function $v(t,e){const n=t._zod.def,r=n.checks;if(r&&r.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const i=zn(t._zod.def,{get shape(){const o={...t._zod.def.shape};for(const c in e){if(!(c in n.shape))throw new Error(`Unrecognized key: "${c}"`);e[c]&&delete o[c]}return hr(this,"shape",o),o},checks:[]});return jn(t,i)}function Bv(t,e){if(!Hs(e))throw new Error("Invalid input to extend: expected a plain object");const n=t._zod.def.checks;if(n&&n.length>0){const i=t._zod.def.shape;for(const o in e)if(Object.getOwnPropertyDescriptor(i,o)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}const s=zn(t._zod.def,{get shape(){const i={...t._zod.def.shape,...e};return hr(this,"shape",i),i}});return jn(t,s)}function qv(t,e){if(!Hs(e))throw new Error("Invalid input to safeExtend: expected a plain object");const n=zn(t._zod.def,{get shape(){const r={...t._zod.def.shape,...e};return hr(this,"shape",r),r}});return jn(t,n)}function Wv(t,e){const n=zn(t._zod.def,{get shape(){const r={...t._zod.def.shape,...e._zod.def.shape};return hr(this,"shape",r),r},get catchall(){return e._zod.def.catchall},checks:[]});return jn(t,n)}function Hv(t,e,n){const s=e._zod.def.checks;if(s&&s.length>0)throw new Error(".partial() cannot be used on object schemas containing refinements");const o=zn(e._zod.def,{get shape(){const c=e._zod.def.shape,u={...c};if(n)for(const l in n){if(!(l in c))throw new Error(`Unrecognized key: "${l}"`);n[l]&&(u[l]=t?new t({type:"optional",innerType:c[l]}):c[l])}else for(const l in c)u[l]=t?new t({type:"optional",innerType:c[l]}):c[l];return hr(this,"shape",u),u},checks:[]});return jn(e,o)}function Gv(t,e,n){const r=zn(e._zod.def,{get shape(){const s=e._zod.def.shape,i={...s};if(n)for(const o in n){if(!(o in i))throw new Error(`Unrecognized key: "${o}"`);n[o]&&(i[o]=new t({type:"nonoptional",innerType:s[o]}))}else for(const o in s)i[o]=new t({type:"nonoptional",innerType:s[o]});return hr(this,"shape",i),i}});return jn(e,r)}function Nr(t,e=0){var n;if(t.aborted===!0)return!0;for(let r=e;r<t.issues.length;r++)if(((n=t.issues[r])==null?void 0:n.continue)!==!0)return!0;return!1}function Vf(t,e){return e.map(n=>{var r;return(r=n).path??(r.path=[]),n.path.unshift(t),n})}function Oi(t){return typeof t=="string"?t:t==null?void 0:t.message}function nr(t,e,n){var s,i,o,c,u,l;const r={...t,path:t.path??[]};if(!t.message){const d=Oi((o=(i=(s=t.inst)==null?void 0:s._zod.def)==null?void 0:i.error)==null?void 0:o.call(i,t))??Oi((c=e==null?void 0:e.error)==null?void 0:c.call(e,t))??Oi((u=n.customError)==null?void 0:u.call(n,t))??Oi((l=n.localeError)==null?void 0:l.call(n,t))??"Invalid input";r.message=d}return delete r.inst,delete r.continue,e!=null&&e.reportInput||delete r.input,r}function Jc(t){return Array.isArray(t)?"array":typeof t=="string"?"string":"unknown"}function Gs(...t){const[e,n,r]=t;return typeof e=="string"?{message:e,code:"custom",input:n,inst:r}:{...e}}const Lf=(t,e)=>{t.name="$ZodError",Object.defineProperty(t,"_zod",{value:t._zod,enumerable:!1}),Object.defineProperty(t,"issues",{value:e,enumerable:!1}),t.message=JSON.stringify(e,nc,2),Object.defineProperty(t,"toString",{value:()=>t.message,enumerable:!1})},Qc=F("$ZodError",Lf),Fo=F("$ZodError",Lf,{Parent:Error});function Kv(t,e=n=>n.message){const n={},r=[];for(const s of t.issues)s.path.length>0?(n[s.path[0]]=n[s.path[0]]||[],n[s.path[0]].push(e(s))):r.push(e(s));return{formErrors:r,fieldErrors:n}}function Zv(t,e=n=>n.message){const n={_errors:[]},r=s=>{for(const i of s.issues)if(i.code==="invalid_union"&&i.errors.length)i.errors.map(o=>r({issues:o}));else if(i.code==="invalid_key")r({issues:i.issues});else if(i.code==="invalid_element")r({issues:i.issues});else if(i.path.length===0)n._errors.push(e(i));else{let o=n,c=0;for(;c<i.path.length;){const u=i.path[c];c===i.path.length-1?(o[u]=o[u]||{_errors:[]},o[u]._errors.push(e(i))):o[u]=o[u]||{_errors:[]},o=o[u],c++}}};return r(t),n}const Uo=t=>(e,n,r,s)=>{const i=r?Object.assign(r,{async:!1}):{async:!1},o=e._zod.run({value:n,issues:[]},i);if(o instanceof Promise)throw new Or;if(o.issues.length){const c=new((s==null?void 0:s.Err)??t)(o.issues.map(u=>nr(u,i,tr())));throw Df(c,s==null?void 0:s.callee),c}return o.value},Jv=Uo(Fo),zo=t=>async(e,n,r,s)=>{const i=r?Object.assign(r,{async:!0}):{async:!0};let o=e._zod.run({value:n,issues:[]},i);if(o instanceof Promise&&(o=await o),o.issues.length){const c=new((s==null?void 0:s.Err)??t)(o.issues.map(u=>nr(u,i,tr())));throw Df(c,s==null?void 0:s.callee),c}return o.value},Qv=zo(Fo),jo=t=>(e,n,r)=>{const s=r?{...r,async:!1}:{async:!1},i=e._zod.run({value:n,issues:[]},s);if(i instanceof Promise)throw new Or;return i.issues.length?{success:!1,error:new(t??Qc)(i.issues.map(o=>nr(o,s,tr())))}:{success:!0,data:i.value}},Yv=jo(Fo),$o=t=>async(e,n,r)=>{const s=r?Object.assign(r,{async:!0}):{async:!0};let i=e._zod.run({value:n,issues:[]},s);return i instanceof Promise&&(i=await i),i.issues.length?{success:!1,error:new t(i.issues.map(o=>nr(o,s,tr())))}:{success:!0,data:i.value}},Xv=$o(Fo),eE=t=>(e,n,r)=>{const s=r?Object.assign(r,{direction:"backward"}):{direction:"backward"};return Uo(t)(e,n,s)},tE=t=>(e,n,r)=>Uo(t)(e,n,r),nE=t=>async(e,n,r)=>{const s=r?Object.assign(r,{direction:"backward"}):{direction:"backward"};return zo(t)(e,n,s)},rE=t=>async(e,n,r)=>zo(t)(e,n,r),sE=t=>(e,n,r)=>{const s=r?Object.assign(r,{direction:"backward"}):{direction:"backward"};return jo(t)(e,n,s)},iE=t=>(e,n,r)=>jo(t)(e,n,r),oE=t=>async(e,n,r)=>{const s=r?Object.assign(r,{direction:"backward"}):{direction:"backward"};return $o(t)(e,n,s)},aE=t=>async(e,n,r)=>$o(t)(e,n,r),cE=/^[cC][^\s-]{8,}$/,uE=/^[0-9a-z]+$/,lE=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,hE=/^[0-9a-vA-V]{20}$/,dE=/^[A-Za-z0-9]{27}$/,fE=/^[a-zA-Z0-9_-]{21}$/,pE=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,mE=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,eh=t=>t?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,gE=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,_E="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function yE(){return new RegExp(_E,"u")}const vE=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,EE=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,wE=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,TE=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,bE=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Mf=/^[A-Za-z0-9_-]*$/,IE=/^\+[1-9]\d{6,14}$/,Ff="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",AE=new RegExp(`^${Ff}$`);function Uf(t){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof t.precision=="number"?t.precision===-1?`${e}`:t.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${t.precision}}`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function SE(t){return new RegExp(`^${Uf(t)}$`)}function RE(t){const e=Uf({precision:t.precision}),n=["Z"];t.local&&n.push(""),t.offset&&n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const r=`${e}(?:${n.join("|")})`;return new RegExp(`^${Ff}T(?:${r})$`)}const PE=t=>{const e=t?`[\\s\\S]{${(t==null?void 0:t.minimum)??0},${(t==null?void 0:t.maximum)??""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)},CE=/^[^A-Z]*$/,kE=/^[^a-z]*$/,Kt=F("$ZodCheck",(t,e)=>{var n;t._zod??(t._zod={}),t._zod.def=e,(n=t._zod).onattach??(n.onattach=[])}),xE=F("$ZodCheckMaxLength",(t,e)=>{var n;Kt.init(t,e),(n=t._zod.def).when??(n.when=r=>{const s=r.value;return!Kc(s)&&s.length!==void 0}),t._zod.onattach.push(r=>{const s=r._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<s&&(r._zod.bag.maximum=e.maximum)}),t._zod.check=r=>{const s=r.value;if(s.length<=e.maximum)return;const o=Jc(s);r.issues.push({origin:o,code:"too_big",maximum:e.maximum,inclusive:!0,input:s,inst:t,continue:!e.abort})}}),NE=F("$ZodCheckMinLength",(t,e)=>{var n;Kt.init(t,e),(n=t._zod.def).when??(n.when=r=>{const s=r.value;return!Kc(s)&&s.length!==void 0}),t._zod.onattach.push(r=>{const s=r._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>s&&(r._zod.bag.minimum=e.minimum)}),t._zod.check=r=>{const s=r.value;if(s.length>=e.minimum)return;const o=Jc(s);r.issues.push({origin:o,code:"too_small",minimum:e.minimum,inclusive:!0,input:s,inst:t,continue:!e.abort})}}),DE=F("$ZodCheckLengthEquals",(t,e)=>{var n;Kt.init(t,e),(n=t._zod.def).when??(n.when=r=>{const s=r.value;return!Kc(s)&&s.length!==void 0}),t._zod.onattach.push(r=>{const s=r._zod.bag;s.minimum=e.length,s.maximum=e.length,s.length=e.length}),t._zod.check=r=>{const s=r.value,i=s.length;if(i===e.length)return;const o=Jc(s),c=i>e.length;r.issues.push({origin:o,...c?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:r.value,inst:t,continue:!e.abort})}}),Bo=F("$ZodCheckStringFormat",(t,e)=>{var n,r;Kt.init(t,e),t._zod.onattach.push(s=>{const i=s._zod.bag;i.format=e.format,e.pattern&&(i.patterns??(i.patterns=new Set),i.patterns.add(e.pattern))}),e.pattern?(n=t._zod).check??(n.check=s=>{e.pattern.lastIndex=0,!e.pattern.test(s.value)&&s.issues.push({origin:"string",code:"invalid_format",format:e.format,input:s.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:t,continue:!e.abort})}):(r=t._zod).check??(r.check=()=>{})}),OE=F("$ZodCheckRegex",(t,e)=>{Bo.init(t,e),t._zod.check=n=>{e.pattern.lastIndex=0,!e.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:e.pattern.toString(),inst:t,continue:!e.abort})}}),VE=F("$ZodCheckLowerCase",(t,e)=>{e.pattern??(e.pattern=CE),Bo.init(t,e)}),LE=F("$ZodCheckUpperCase",(t,e)=>{e.pattern??(e.pattern=kE),Bo.init(t,e)}),ME=F("$ZodCheckIncludes",(t,e)=>{Kt.init(t,e);const n=Mo(e.includes),r=new RegExp(typeof e.position=="number"?`^.{${e.position}}${n}`:n);e.pattern=r,t._zod.onattach.push(s=>{const i=s._zod.bag;i.patterns??(i.patterns=new Set),i.patterns.add(r)}),t._zod.check=s=>{s.value.includes(e.includes,e.position)||s.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:s.value,inst:t,continue:!e.abort})}}),FE=F("$ZodCheckStartsWith",(t,e)=>{Kt.init(t,e);const n=new RegExp(`^${Mo(e.prefix)}.*`);e.pattern??(e.pattern=n),t._zod.onattach.push(r=>{const s=r._zod.bag;s.patterns??(s.patterns=new Set),s.patterns.add(n)}),t._zod.check=r=>{r.value.startsWith(e.prefix)||r.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:r.value,inst:t,continue:!e.abort})}}),UE=F("$ZodCheckEndsWith",(t,e)=>{Kt.init(t,e);const n=new RegExp(`.*${Mo(e.suffix)}$`);e.pattern??(e.pattern=n),t._zod.onattach.push(r=>{const s=r._zod.bag;s.patterns??(s.patterns=new Set),s.patterns.add(n)}),t._zod.check=r=>{r.value.endsWith(e.suffix)||r.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:r.value,inst:t,continue:!e.abort})}}),zE=F("$ZodCheckOverwrite",(t,e)=>{Kt.init(t,e),t._zod.check=n=>{n.value=e.tx(n.value)}});class jE{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const r=e.split(`
`).filter(o=>o),s=Math.min(...r.map(o=>o.length-o.trimStart().length)),i=r.map(o=>o.slice(s)).map(o=>" ".repeat(this.indent*2)+o);for(const o of i)this.content.push(o)}compile(){const e=Function,n=this==null?void 0:this.args,s=[...((this==null?void 0:this.content)??[""]).map(i=>`  ${i}`)];return new e(...n,s.join(`
`))}}const $E={major:4,minor:3,patch:6},Be=F("$ZodType",(t,e)=>{var s;var n;t??(t={}),t._zod.def=e,t._zod.bag=t._zod.bag||{},t._zod.version=$E;const r=[...t._zod.def.checks??[]];t._zod.traits.has("$ZodCheck")&&r.unshift(t);for(const i of r)for(const o of i._zod.onattach)o(t);if(r.length===0)(n=t._zod).deferred??(n.deferred=[]),(s=t._zod.deferred)==null||s.push(()=>{t._zod.run=t._zod.parse});else{const i=(c,u,l)=>{let d=Nr(c),p;for(const m of u){if(m._zod.def.when){if(!m._zod.def.when(c))continue}else if(d)continue;const _=c.issues.length,D=m._zod.check(c);if(D instanceof Promise&&(l==null?void 0:l.async)===!1)throw new Or;if(p||D instanceof Promise)p=(p??Promise.resolve()).then(async()=>{await D,c.issues.length!==_&&(d||(d=Nr(c,_)))});else{if(c.issues.length===_)continue;d||(d=Nr(c,_))}}return p?p.then(()=>c):c},o=(c,u,l)=>{if(Nr(c))return c.aborted=!0,c;const d=i(u,r,l);if(d instanceof Promise){if(l.async===!1)throw new Or;return d.then(p=>t._zod.parse(p,l))}return t._zod.parse(d,l)};t._zod.run=(c,u)=>{if(u.skipChecks)return t._zod.parse(c,u);if(u.direction==="backward"){const d=t._zod.parse({value:c.value,issues:[]},{...u,skipChecks:!0});return d instanceof Promise?d.then(p=>o(p,c,u)):o(d,c,u)}const l=t._zod.parse(c,u);if(l instanceof Promise){if(u.async===!1)throw new Or;return l.then(d=>i(d,r,u))}return i(l,r,u)}}me(t,"~standard",()=>({validate:i=>{var o;try{const c=Yv(t,i);return c.success?{value:c.data}:{issues:(o=c.error)==null?void 0:o.issues}}catch{return Xv(t,i).then(u=>{var l;return u.success?{value:u.data}:{issues:(l=u.error)==null?void 0:l.issues}})}},vendor:"zod",version:1}))}),Yc=F("$ZodString",(t,e)=>{var n;Be.init(t,e),t._zod.pattern=[...((n=t==null?void 0:t._zod.bag)==null?void 0:n.patterns)??[]].pop()??PE(t._zod.bag),t._zod.parse=(r,s)=>{if(e.coerce)try{r.value=String(r.value)}catch{}return typeof r.value=="string"||r.issues.push({expected:"string",code:"invalid_type",input:r.value,inst:t}),r}}),Ie=F("$ZodStringFormat",(t,e)=>{Bo.init(t,e),Yc.init(t,e)}),BE=F("$ZodGUID",(t,e)=>{e.pattern??(e.pattern=mE),Ie.init(t,e)}),qE=F("$ZodUUID",(t,e)=>{if(e.version){const r={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(r===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=eh(r))}else e.pattern??(e.pattern=eh());Ie.init(t,e)}),WE=F("$ZodEmail",(t,e)=>{e.pattern??(e.pattern=gE),Ie.init(t,e)}),HE=F("$ZodURL",(t,e)=>{Ie.init(t,e),t._zod.check=n=>{try{const r=n.value.trim(),s=new URL(r);e.hostname&&(e.hostname.lastIndex=0,e.hostname.test(s.hostname)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:n.value,inst:t,continue:!e.abort})),e.protocol&&(e.protocol.lastIndex=0,e.protocol.test(s.protocol.endsWith(":")?s.protocol.slice(0,-1):s.protocol)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:n.value,inst:t,continue:!e.abort})),e.normalize?n.value=s.href:n.value=r;return}catch{n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort})}}}),GE=F("$ZodEmoji",(t,e)=>{e.pattern??(e.pattern=yE()),Ie.init(t,e)}),KE=F("$ZodNanoID",(t,e)=>{e.pattern??(e.pattern=fE),Ie.init(t,e)}),ZE=F("$ZodCUID",(t,e)=>{e.pattern??(e.pattern=cE),Ie.init(t,e)}),JE=F("$ZodCUID2",(t,e)=>{e.pattern??(e.pattern=uE),Ie.init(t,e)}),QE=F("$ZodULID",(t,e)=>{e.pattern??(e.pattern=lE),Ie.init(t,e)}),YE=F("$ZodXID",(t,e)=>{e.pattern??(e.pattern=hE),Ie.init(t,e)}),XE=F("$ZodKSUID",(t,e)=>{e.pattern??(e.pattern=dE),Ie.init(t,e)}),ew=F("$ZodISODateTime",(t,e)=>{e.pattern??(e.pattern=RE(e)),Ie.init(t,e)}),tw=F("$ZodISODate",(t,e)=>{e.pattern??(e.pattern=AE),Ie.init(t,e)}),nw=F("$ZodISOTime",(t,e)=>{e.pattern??(e.pattern=SE(e)),Ie.init(t,e)}),rw=F("$ZodISODuration",(t,e)=>{e.pattern??(e.pattern=pE),Ie.init(t,e)}),sw=F("$ZodIPv4",(t,e)=>{e.pattern??(e.pattern=vE),Ie.init(t,e),t._zod.bag.format="ipv4"}),iw=F("$ZodIPv6",(t,e)=>{e.pattern??(e.pattern=EE),Ie.init(t,e),t._zod.bag.format="ipv6",t._zod.check=n=>{try{new URL(`http://[${n.value}]`)}catch{n.issues.push({code:"invalid_format",format:"ipv6",input:n.value,inst:t,continue:!e.abort})}}}),ow=F("$ZodCIDRv4",(t,e)=>{e.pattern??(e.pattern=wE),Ie.init(t,e)}),aw=F("$ZodCIDRv6",(t,e)=>{e.pattern??(e.pattern=TE),Ie.init(t,e),t._zod.check=n=>{const r=n.value.split("/");try{if(r.length!==2)throw new Error;const[s,i]=r;if(!i)throw new Error;const o=Number(i);if(`${o}`!==i)throw new Error;if(o<0||o>128)throw new Error;new URL(`http://[${s}]`)}catch{n.issues.push({code:"invalid_format",format:"cidrv6",input:n.value,inst:t,continue:!e.abort})}}});function zf(t){if(t==="")return!0;if(t.length%4!==0)return!1;try{return atob(t),!0}catch{return!1}}const cw=F("$ZodBase64",(t,e)=>{e.pattern??(e.pattern=bE),Ie.init(t,e),t._zod.bag.contentEncoding="base64",t._zod.check=n=>{zf(n.value)||n.issues.push({code:"invalid_format",format:"base64",input:n.value,inst:t,continue:!e.abort})}});function uw(t){if(!Mf.test(t))return!1;const e=t.replace(/[-_]/g,r=>r==="-"?"+":"/"),n=e.padEnd(Math.ceil(e.length/4)*4,"=");return zf(n)}const lw=F("$ZodBase64URL",(t,e)=>{e.pattern??(e.pattern=Mf),Ie.init(t,e),t._zod.bag.contentEncoding="base64url",t._zod.check=n=>{uw(n.value)||n.issues.push({code:"invalid_format",format:"base64url",input:n.value,inst:t,continue:!e.abort})}}),hw=F("$ZodE164",(t,e)=>{e.pattern??(e.pattern=IE),Ie.init(t,e)});function dw(t,e=null){try{const n=t.split(".");if(n.length!==3)return!1;const[r]=n;if(!r)return!1;const s=JSON.parse(atob(r));return!("typ"in s&&(s==null?void 0:s.typ)!=="JWT"||!s.alg||e&&(!("alg"in s)||s.alg!==e))}catch{return!1}}const fw=F("$ZodJWT",(t,e)=>{Ie.init(t,e),t._zod.check=n=>{dw(n.value,e.alg)||n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:t,continue:!e.abort})}}),pw=F("$ZodUnknown",(t,e)=>{Be.init(t,e),t._zod.parse=n=>n}),mw=F("$ZodNever",(t,e)=>{Be.init(t,e),t._zod.parse=(n,r)=>(n.issues.push({expected:"never",code:"invalid_type",input:n.value,inst:t}),n)});function th(t,e,n){t.issues.length&&e.issues.push(...Vf(n,t.issues)),e.value[n]=t.value}const gw=F("$ZodArray",(t,e)=>{Be.init(t,e),t._zod.parse=(n,r)=>{const s=n.value;if(!Array.isArray(s))return n.issues.push({expected:"array",code:"invalid_type",input:s,inst:t}),n;n.value=Array(s.length);const i=[];for(let o=0;o<s.length;o++){const c=s[o],u=e.element._zod.run({value:c,issues:[]},r);u instanceof Promise?i.push(u.then(l=>th(l,n,o))):th(u,n,o)}return i.length?Promise.all(i).then(()=>n):n}});function ao(t,e,n,r,s){if(t.issues.length){if(s&&!(n in r))return;e.issues.push(...Vf(n,t.issues))}t.value===void 0?n in r&&(e.value[n]=void 0):e.value[n]=t.value}function jf(t){var r,s,i,o;const e=Object.keys(t.shape);for(const c of e)if(!((o=(i=(s=(r=t.shape)==null?void 0:r[c])==null?void 0:s._zod)==null?void 0:i.traits)!=null&&o.has("$ZodType")))throw new Error(`Invalid element at key "${c}": expected a Zod schema`);const n=zv(t.shape);return{...t,keys:e,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(n)}}function $f(t,e,n,r,s,i){const o=[],c=s.keySet,u=s.catchall._zod,l=u.def.type,d=u.optout==="optional";for(const p in e){if(c.has(p))continue;if(l==="never"){o.push(p);continue}const m=u.run({value:e[p],issues:[]},r);m instanceof Promise?t.push(m.then(_=>ao(_,n,p,e,d))):ao(m,n,p,e,d)}return o.length&&n.issues.push({code:"unrecognized_keys",keys:o,input:e,inst:i}),t.length?Promise.all(t).then(()=>n):n}const _w=F("$ZodObject",(t,e)=>{Be.init(t,e);const n=Object.getOwnPropertyDescriptor(e,"shape");if(!(n!=null&&n.get)){const c=e.shape;Object.defineProperty(e,"shape",{get:()=>{const u={...c};return Object.defineProperty(e,"shape",{value:u}),u}})}const r=Gc(()=>jf(e));me(t._zod,"propValues",()=>{const c=e.shape,u={};for(const l in c){const d=c[l]._zod;if(d.values){u[l]??(u[l]=new Set);for(const p of d.values)u[l].add(p)}}return u});const s=oo,i=e.catchall;let o;t._zod.parse=(c,u)=>{o??(o=r.value);const l=c.value;if(!s(l))return c.issues.push({expected:"object",code:"invalid_type",input:l,inst:t}),c;c.value={};const d=[],p=o.shape;for(const m of o.keys){const _=p[m],D=_._zod.optout==="optional",P=_._zod.run({value:l[m],issues:[]},u);P instanceof Promise?d.push(P.then(I=>ao(I,c,m,l,D))):ao(P,c,m,l,D)}return i?$f(d,l,c,u,r.value,t):d.length?Promise.all(d).then(()=>c):c}}),yw=F("$ZodObjectJIT",(t,e)=>{_w.init(t,e);const n=t._zod.parse,r=Gc(()=>jf(e)),s=m=>{var z;const _=new jE(["shape","payload","ctx"]),D=r.value,P=G=>{const H=Xl(G);return`shape[${H}]._zod.run({ value: input[${H}], issues: [] }, ctx)`};_.write("const input = payload.value;");const I=Object.create(null);let L=0;for(const G of D.keys)I[G]=`key_${L++}`;_.write("const newResult = {};");for(const G of D.keys){const H=I[G],Y=Xl(G),b=m[G],v=((z=b==null?void 0:b._zod)==null?void 0:z.optout)==="optional";_.write(`const ${H} = ${P(G)};`),v?_.write(`
        if (${H}.issues.length) {
          if (${Y} in input) {
            payload.issues = payload.issues.concat(${H}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${Y}, ...iss.path] : [${Y}]
            })));
          }
        }
        
        if (${H}.value === undefined) {
          if (${Y} in input) {
            newResult[${Y}] = undefined;
          }
        } else {
          newResult[${Y}] = ${H}.value;
        }
        
      `):_.write(`
        if (${H}.issues.length) {
          payload.issues = payload.issues.concat(${H}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Y}, ...iss.path] : [${Y}]
          })));
        }
        
        if (${H}.value === undefined) {
          if (${Y} in input) {
            newResult[${Y}] = undefined;
          }
        } else {
          newResult[${Y}] = ${H}.value;
        }
        
      `)}_.write("payload.value = newResult;"),_.write("return payload;");const C=_.compile();return(G,H)=>C(m,G,H)};let i;const o=oo,c=!xf.jitless,l=c&&Fv.value,d=e.catchall;let p;t._zod.parse=(m,_)=>{p??(p=r.value);const D=m.value;return o(D)?c&&l&&(_==null?void 0:_.async)===!1&&_.jitless!==!0?(i||(i=s(e.shape)),m=i(m,_),d?$f([],D,m,_,p,t):m):n(m,_):(m.issues.push({expected:"object",code:"invalid_type",input:D,inst:t}),m)}});function nh(t,e,n,r){for(const i of t)if(i.issues.length===0)return e.value=i.value,e;const s=t.filter(i=>!Nr(i));return s.length===1?(e.value=s[0].value,s[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:n,errors:t.map(i=>i.issues.map(o=>nr(o,r,tr())))}),e)}const vw=F("$ZodUnion",(t,e)=>{Be.init(t,e),me(t._zod,"optin",()=>e.options.some(s=>s._zod.optin==="optional")?"optional":void 0),me(t._zod,"optout",()=>e.options.some(s=>s._zod.optout==="optional")?"optional":void 0),me(t._zod,"values",()=>{if(e.options.every(s=>s._zod.values))return new Set(e.options.flatMap(s=>Array.from(s._zod.values)))}),me(t._zod,"pattern",()=>{if(e.options.every(s=>s._zod.pattern)){const s=e.options.map(i=>i._zod.pattern);return new RegExp(`^(${s.map(i=>Zc(i.source)).join("|")})$`)}});const n=e.options.length===1,r=e.options[0]._zod.run;t._zod.parse=(s,i)=>{if(n)return r(s,i);let o=!1;const c=[];for(const u of e.options){const l=u._zod.run({value:s.value,issues:[]},i);if(l instanceof Promise)c.push(l),o=!0;else{if(l.issues.length===0)return l;c.push(l)}}return o?Promise.all(c).then(u=>nh(u,s,t,i)):nh(c,s,t,i)}}),Ew=F("$ZodIntersection",(t,e)=>{Be.init(t,e),t._zod.parse=(n,r)=>{const s=n.value,i=e.left._zod.run({value:s,issues:[]},r),o=e.right._zod.run({value:s,issues:[]},r);return i instanceof Promise||o instanceof Promise?Promise.all([i,o]).then(([u,l])=>rh(n,u,l)):rh(n,i,o)}});function rc(t,e){if(t===e)return{valid:!0,data:t};if(t instanceof Date&&e instanceof Date&&+t==+e)return{valid:!0,data:t};if(Hs(t)&&Hs(e)){const n=Object.keys(e),r=Object.keys(t).filter(i=>n.indexOf(i)!==-1),s={...t,...e};for(const i of r){const o=rc(t[i],e[i]);if(!o.valid)return{valid:!1,mergeErrorPath:[i,...o.mergeErrorPath]};s[i]=o.data}return{valid:!0,data:s}}if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return{valid:!1,mergeErrorPath:[]};const n=[];for(let r=0;r<t.length;r++){const s=t[r],i=e[r],o=rc(s,i);if(!o.valid)return{valid:!1,mergeErrorPath:[r,...o.mergeErrorPath]};n.push(o.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function rh(t,e,n){const r=new Map;let s;for(const c of e.issues)if(c.code==="unrecognized_keys"){s??(s=c);for(const u of c.keys)r.has(u)||r.set(u,{}),r.get(u).l=!0}else t.issues.push(c);for(const c of n.issues)if(c.code==="unrecognized_keys")for(const u of c.keys)r.has(u)||r.set(u,{}),r.get(u).r=!0;else t.issues.push(c);const i=[...r].filter(([,c])=>c.l&&c.r).map(([c])=>c);if(i.length&&s&&t.issues.push({...s,keys:i}),Nr(t))return t;const o=rc(e.value,n.value);if(!o.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);return t.value=o.data,t}const ww=F("$ZodEnum",(t,e)=>{Be.init(t,e);const n=Nf(e.entries),r=new Set(n);t._zod.values=r,t._zod.pattern=new RegExp(`^(${n.filter(s=>Uv.has(typeof s)).map(s=>typeof s=="string"?Mo(s):s.toString()).join("|")})$`),t._zod.parse=(s,i)=>{const o=s.value;return r.has(o)||s.issues.push({code:"invalid_value",values:n,input:o,inst:t}),s}}),Tw=F("$ZodTransform",(t,e)=>{Be.init(t,e),t._zod.parse=(n,r)=>{if(r.direction==="backward")throw new kf(t.constructor.name);const s=e.transform(n.value,n);if(r.async)return(s instanceof Promise?s:Promise.resolve(s)).then(o=>(n.value=o,n));if(s instanceof Promise)throw new Or;return n.value=s,n}});function sh(t,e){return t.issues.length&&e===void 0?{issues:[],value:void 0}:t}const Bf=F("$ZodOptional",(t,e)=>{Be.init(t,e),t._zod.optin="optional",t._zod.optout="optional",me(t._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),me(t._zod,"pattern",()=>{const n=e.innerType._zod.pattern;return n?new RegExp(`^(${Zc(n.source)})?$`):void 0}),t._zod.parse=(n,r)=>{if(e.innerType._zod.optin==="optional"){const s=e.innerType._zod.run(n,r);return s instanceof Promise?s.then(i=>sh(i,n.value)):sh(s,n.value)}return n.value===void 0?n:e.innerType._zod.run(n,r)}}),bw=F("$ZodExactOptional",(t,e)=>{Bf.init(t,e),me(t._zod,"values",()=>e.innerType._zod.values),me(t._zod,"pattern",()=>e.innerType._zod.pattern),t._zod.parse=(n,r)=>e.innerType._zod.run(n,r)}),Iw=F("$ZodNullable",(t,e)=>{Be.init(t,e),me(t._zod,"optin",()=>e.innerType._zod.optin),me(t._zod,"optout",()=>e.innerType._zod.optout),me(t._zod,"pattern",()=>{const n=e.innerType._zod.pattern;return n?new RegExp(`^(${Zc(n.source)}|null)$`):void 0}),me(t._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),t._zod.parse=(n,r)=>n.value===null?n:e.innerType._zod.run(n,r)}),Aw=F("$ZodDefault",(t,e)=>{Be.init(t,e),t._zod.optin="optional",me(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>{if(r.direction==="backward")return e.innerType._zod.run(n,r);if(n.value===void 0)return n.value=e.defaultValue,n;const s=e.innerType._zod.run(n,r);return s instanceof Promise?s.then(i=>ih(i,e)):ih(s,e)}});function ih(t,e){return t.value===void 0&&(t.value=e.defaultValue),t}const Sw=F("$ZodPrefault",(t,e)=>{Be.init(t,e),t._zod.optin="optional",me(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>(r.direction==="backward"||n.value===void 0&&(n.value=e.defaultValue),e.innerType._zod.run(n,r))}),Rw=F("$ZodNonOptional",(t,e)=>{Be.init(t,e),me(t._zod,"values",()=>{const n=e.innerType._zod.values;return n?new Set([...n].filter(r=>r!==void 0)):void 0}),t._zod.parse=(n,r)=>{const s=e.innerType._zod.run(n,r);return s instanceof Promise?s.then(i=>oh(i,t)):oh(s,t)}});function oh(t,e){return!t.issues.length&&t.value===void 0&&t.issues.push({code:"invalid_type",expected:"nonoptional",input:t.value,inst:e}),t}const Pw=F("$ZodCatch",(t,e)=>{Be.init(t,e),me(t._zod,"optin",()=>e.innerType._zod.optin),me(t._zod,"optout",()=>e.innerType._zod.optout),me(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>{if(r.direction==="backward")return e.innerType._zod.run(n,r);const s=e.innerType._zod.run(n,r);return s instanceof Promise?s.then(i=>(n.value=i.value,i.issues.length&&(n.value=e.catchValue({...n,error:{issues:i.issues.map(o=>nr(o,r,tr()))},input:n.value}),n.issues=[]),n)):(n.value=s.value,s.issues.length&&(n.value=e.catchValue({...n,error:{issues:s.issues.map(i=>nr(i,r,tr()))},input:n.value}),n.issues=[]),n)}}),Cw=F("$ZodPipe",(t,e)=>{Be.init(t,e),me(t._zod,"values",()=>e.in._zod.values),me(t._zod,"optin",()=>e.in._zod.optin),me(t._zod,"optout",()=>e.out._zod.optout),me(t._zod,"propValues",()=>e.in._zod.propValues),t._zod.parse=(n,r)=>{if(r.direction==="backward"){const i=e.out._zod.run(n,r);return i instanceof Promise?i.then(o=>Vi(o,e.in,r)):Vi(i,e.in,r)}const s=e.in._zod.run(n,r);return s instanceof Promise?s.then(i=>Vi(i,e.out,r)):Vi(s,e.out,r)}});function Vi(t,e,n){return t.issues.length?(t.aborted=!0,t):e._zod.run({value:t.value,issues:t.issues},n)}const kw=F("$ZodReadonly",(t,e)=>{Be.init(t,e),me(t._zod,"propValues",()=>e.innerType._zod.propValues),me(t._zod,"values",()=>e.innerType._zod.values),me(t._zod,"optin",()=>{var n,r;return(r=(n=e.innerType)==null?void 0:n._zod)==null?void 0:r.optin}),me(t._zod,"optout",()=>{var n,r;return(r=(n=e.innerType)==null?void 0:n._zod)==null?void 0:r.optout}),t._zod.parse=(n,r)=>{if(r.direction==="backward")return e.innerType._zod.run(n,r);const s=e.innerType._zod.run(n,r);return s instanceof Promise?s.then(ah):ah(s)}});function ah(t){return t.value=Object.freeze(t.value),t}const xw=F("$ZodCustom",(t,e)=>{Kt.init(t,e),Be.init(t,e),t._zod.parse=(n,r)=>n,t._zod.check=n=>{const r=n.value,s=e.fn(r);if(s instanceof Promise)return s.then(i=>ch(i,n,r,t));ch(s,n,r,t)}});function ch(t,e,n,r){if(!t){const s={code:"custom",input:n,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(s.params=r._zod.def.params),e.issues.push(Gs(s))}}var uh;class Nw{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...n){const r=n[0];return this._map.set(e,r),r&&typeof r=="object"&&"id"in r&&this._idmap.set(r.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const n=this._map.get(e);return n&&typeof n=="object"&&"id"in n&&this._idmap.delete(n.id),this._map.delete(e),this}get(e){const n=e._zod.parent;if(n){const r={...this.get(n)??{}};delete r.id;const s={...r,...this._map.get(e)};return Object.keys(s).length?s:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function Dw(){return new Nw}(uh=globalThis).__zod_globalRegistry??(uh.__zod_globalRegistry=Dw());const ks=globalThis.__zod_globalRegistry;function Ow(t,e){return new t({type:"string",...ne(e)})}function Vw(t,e){return new t({type:"string",format:"email",check:"string_format",abort:!1,...ne(e)})}function lh(t,e){return new t({type:"string",format:"guid",check:"string_format",abort:!1,...ne(e)})}function Lw(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,...ne(e)})}function Mw(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...ne(e)})}function Fw(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...ne(e)})}function Uw(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...ne(e)})}function zw(t,e){return new t({type:"string",format:"url",check:"string_format",abort:!1,...ne(e)})}function jw(t,e){return new t({type:"string",format:"emoji",check:"string_format",abort:!1,...ne(e)})}function $w(t,e){return new t({type:"string",format:"nanoid",check:"string_format",abort:!1,...ne(e)})}function Bw(t,e){return new t({type:"string",format:"cuid",check:"string_format",abort:!1,...ne(e)})}function qw(t,e){return new t({type:"string",format:"cuid2",check:"string_format",abort:!1,...ne(e)})}function Ww(t,e){return new t({type:"string",format:"ulid",check:"string_format",abort:!1,...ne(e)})}function Hw(t,e){return new t({type:"string",format:"xid",check:"string_format",abort:!1,...ne(e)})}function Gw(t,e){return new t({type:"string",format:"ksuid",check:"string_format",abort:!1,...ne(e)})}function Kw(t,e){return new t({type:"string",format:"ipv4",check:"string_format",abort:!1,...ne(e)})}function Zw(t,e){return new t({type:"string",format:"ipv6",check:"string_format",abort:!1,...ne(e)})}function Jw(t,e){return new t({type:"string",format:"cidrv4",check:"string_format",abort:!1,...ne(e)})}function Qw(t,e){return new t({type:"string",format:"cidrv6",check:"string_format",abort:!1,...ne(e)})}function Yw(t,e){return new t({type:"string",format:"base64",check:"string_format",abort:!1,...ne(e)})}function Xw(t,e){return new t({type:"string",format:"base64url",check:"string_format",abort:!1,...ne(e)})}function eT(t,e){return new t({type:"string",format:"e164",check:"string_format",abort:!1,...ne(e)})}function tT(t,e){return new t({type:"string",format:"jwt",check:"string_format",abort:!1,...ne(e)})}function nT(t,e){return new t({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...ne(e)})}function rT(t,e){return new t({type:"string",format:"date",check:"string_format",...ne(e)})}function sT(t,e){return new t({type:"string",format:"time",check:"string_format",precision:null,...ne(e)})}function iT(t,e){return new t({type:"string",format:"duration",check:"string_format",...ne(e)})}function oT(t){return new t({type:"unknown"})}function aT(t,e){return new t({type:"never",...ne(e)})}function qf(t,e){return new xE({check:"max_length",...ne(e),maximum:t})}function co(t,e){return new NE({check:"min_length",...ne(e),minimum:t})}function Wf(t,e){return new DE({check:"length_equals",...ne(e),length:t})}function cT(t,e){return new OE({check:"string_format",format:"regex",...ne(e),pattern:t})}function uT(t){return new VE({check:"string_format",format:"lowercase",...ne(t)})}function lT(t){return new LE({check:"string_format",format:"uppercase",...ne(t)})}function hT(t,e){return new ME({check:"string_format",format:"includes",...ne(e),includes:t})}function dT(t,e){return new FE({check:"string_format",format:"starts_with",...ne(e),prefix:t})}function fT(t,e){return new UE({check:"string_format",format:"ends_with",...ne(e),suffix:t})}function Jr(t){return new zE({check:"overwrite",tx:t})}function pT(t){return Jr(e=>e.normalize(t))}function mT(){return Jr(t=>t.trim())}function gT(){return Jr(t=>t.toLowerCase())}function _T(){return Jr(t=>t.toUpperCase())}function yT(){return Jr(t=>Mv(t))}function vT(t,e,n){return new t({type:"array",element:e,...ne(n)})}function ET(t,e,n){return new t({type:"custom",check:"custom",fn:e,...ne(n)})}function wT(t){const e=TT(n=>(n.addIssue=r=>{if(typeof r=="string")n.issues.push(Gs(r,n.value,e._zod.def));else{const s=r;s.fatal&&(s.continue=!1),s.code??(s.code="custom"),s.input??(s.input=n.value),s.inst??(s.inst=e),s.continue??(s.continue=!e._zod.def.abort),n.issues.push(Gs(s))}},t(n.value,n)));return e}function TT(t,e){const n=new Kt({check:"custom",...ne(e)});return n._zod.check=t,n}function Hf(t){let e=(t==null?void 0:t.target)??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:t.processors??{},metadataRegistry:(t==null?void 0:t.metadata)??ks,target:e,unrepresentable:(t==null?void 0:t.unrepresentable)??"throw",override:(t==null?void 0:t.override)??(()=>{}),io:(t==null?void 0:t.io)??"output",counter:0,seen:new Map,cycles:(t==null?void 0:t.cycles)??"ref",reused:(t==null?void 0:t.reused)??"inline",external:(t==null?void 0:t.external)??void 0}}function nt(t,e,n={path:[],schemaPath:[]}){var d,p;var r;const s=t._zod.def,i=e.seen.get(t);if(i)return i.count++,n.schemaPath.includes(t)&&(i.cycle=n.path),i.schema;const o={schema:{},count:1,cycle:void 0,path:n.path};e.seen.set(t,o);const c=(p=(d=t._zod).toJSONSchema)==null?void 0:p.call(d);if(c)o.schema=c;else{const m={...n,schemaPath:[...n.schemaPath,t],path:n.path};if(t._zod.processJSONSchema)t._zod.processJSONSchema(e,o.schema,m);else{const D=o.schema,P=e.processors[s.type];if(!P)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${s.type}`);P(t,e,D,m)}const _=t._zod.parent;_&&(o.ref||(o.ref=_),nt(_,e,m),e.seen.get(_).isParent=!0)}const u=e.metadataRegistry.get(t);return u&&Object.assign(o.schema,u),e.io==="input"&&lt(t)&&(delete o.schema.examples,delete o.schema.default),e.io==="input"&&o.schema._prefault&&((r=o.schema).default??(r.default=o.schema._prefault)),delete o.schema._prefault,e.seen.get(t).schema}function Gf(t,e){var o,c,u,l;const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");const r=new Map;for(const d of t.seen.entries()){const p=(o=t.metadataRegistry.get(d[0]))==null?void 0:o.id;if(p){const m=r.get(p);if(m&&m!==d[0])throw new Error(`Duplicate schema id "${p}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);r.set(p,d[0])}}const s=d=>{var P;const p=t.target==="draft-2020-12"?"$defs":"definitions";if(t.external){const I=(P=t.external.registry.get(d[0]))==null?void 0:P.id,L=t.external.uri??(z=>z);if(I)return{ref:L(I)};const C=d[1].defId??d[1].schema.id??`schema${t.counter++}`;return d[1].defId=C,{defId:C,ref:`${L("__shared")}#/${p}/${C}`}}if(d[1]===n)return{ref:"#"};const _=`#/${p}/`,D=d[1].schema.id??`__schema${t.counter++}`;return{defId:D,ref:_+D}},i=d=>{if(d[1].schema.$ref)return;const p=d[1],{ref:m,defId:_}=s(d);p.def={...p.schema},_&&(p.defId=_);const D=p.schema;for(const P in D)delete D[P];D.$ref=m};if(t.cycles==="throw")for(const d of t.seen.entries()){const p=d[1];if(p.cycle)throw new Error(`Cycle detected: #/${(c=p.cycle)==null?void 0:c.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const d of t.seen.entries()){const p=d[1];if(e===d[0]){i(d);continue}if(t.external){const _=(u=t.external.registry.get(d[0]))==null?void 0:u.id;if(e!==d[0]&&_){i(d);continue}}if((l=t.metadataRegistry.get(d[0]))==null?void 0:l.id){i(d);continue}if(p.cycle){i(d);continue}if(p.count>1&&t.reused==="ref"){i(d);continue}}}function Kf(t,e){var o,c,u;const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");const r=l=>{const d=t.seen.get(l);if(d.ref===null)return;const p=d.def??d.schema,m={...p},_=d.ref;if(d.ref=null,_){r(_);const P=t.seen.get(_),I=P.schema;if(I.$ref&&(t.target==="draft-07"||t.target==="draft-04"||t.target==="openapi-3.0")?(p.allOf=p.allOf??[],p.allOf.push(I)):Object.assign(p,I),Object.assign(p,m),l._zod.parent===_)for(const C in p)C==="$ref"||C==="allOf"||C in m||delete p[C];if(I.$ref&&P.def)for(const C in p)C==="$ref"||C==="allOf"||C in P.def&&JSON.stringify(p[C])===JSON.stringify(P.def[C])&&delete p[C]}const D=l._zod.parent;if(D&&D!==_){r(D);const P=t.seen.get(D);if(P!=null&&P.schema.$ref&&(p.$ref=P.schema.$ref,P.def))for(const I in p)I==="$ref"||I==="allOf"||I in P.def&&JSON.stringify(p[I])===JSON.stringify(P.def[I])&&delete p[I]}t.override({zodSchema:l,jsonSchema:p,path:d.path??[]})};for(const l of[...t.seen.entries()].reverse())r(l[0]);const s={};if(t.target==="draft-2020-12"?s.$schema="https://json-schema.org/draft/2020-12/schema":t.target==="draft-07"?s.$schema="http://json-schema.org/draft-07/schema#":t.target==="draft-04"?s.$schema="http://json-schema.org/draft-04/schema#":t.target,(o=t.external)!=null&&o.uri){const l=(c=t.external.registry.get(e))==null?void 0:c.id;if(!l)throw new Error("Schema is missing an `id` property");s.$id=t.external.uri(l)}Object.assign(s,n.def??n.schema);const i=((u=t.external)==null?void 0:u.defs)??{};for(const l of t.seen.entries()){const d=l[1];d.def&&d.defId&&(i[d.defId]=d.def)}t.external||Object.keys(i).length>0&&(t.target==="draft-2020-12"?s.$defs=i:s.definitions=i);try{const l=JSON.parse(JSON.stringify(s));return Object.defineProperty(l,"~standard",{value:{...e["~standard"],jsonSchema:{input:uo(e,"input",t.processors),output:uo(e,"output",t.processors)}},enumerable:!1,writable:!1}),l}catch{throw new Error("Error converting schema to JSON.")}}function lt(t,e){const n=e??{seen:new Set};if(n.seen.has(t))return!1;n.seen.add(t);const r=t._zod.def;if(r.type==="transform")return!0;if(r.type==="array")return lt(r.element,n);if(r.type==="set")return lt(r.valueType,n);if(r.type==="lazy")return lt(r.getter(),n);if(r.type==="promise"||r.type==="optional"||r.type==="nonoptional"||r.type==="nullable"||r.type==="readonly"||r.type==="default"||r.type==="prefault")return lt(r.innerType,n);if(r.type==="intersection")return lt(r.left,n)||lt(r.right,n);if(r.type==="record"||r.type==="map")return lt(r.keyType,n)||lt(r.valueType,n);if(r.type==="pipe")return lt(r.in,n)||lt(r.out,n);if(r.type==="object"){for(const s in r.shape)if(lt(r.shape[s],n))return!0;return!1}if(r.type==="union"){for(const s of r.options)if(lt(s,n))return!0;return!1}if(r.type==="tuple"){for(const s of r.items)if(lt(s,n))return!0;return!!(r.rest&&lt(r.rest,n))}return!1}const bT=(t,e={})=>n=>{const r=Hf({...n,processors:e});return nt(t,r),Gf(r,t),Kf(r,t)},uo=(t,e,n={})=>r=>{const{libraryOptions:s,target:i}=r??{},o=Hf({...s??{},target:i,io:e,processors:n});return nt(t,o),Gf(o,t),Kf(o,t)},IT={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},AT=(t,e,n,r)=>{const s=n;s.type="string";const{minimum:i,maximum:o,format:c,patterns:u,contentEncoding:l}=t._zod.bag;if(typeof i=="number"&&(s.minLength=i),typeof o=="number"&&(s.maxLength=o),c&&(s.format=IT[c]??c,s.format===""&&delete s.format,c==="time"&&delete s.format),l&&(s.contentEncoding=l),u&&u.size>0){const d=[...u];d.length===1?s.pattern=d[0].source:d.length>1&&(s.allOf=[...d.map(p=>({...e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"?{type:"string"}:{},pattern:p.source}))])}},ST=(t,e,n,r)=>{n.not={}},RT=(t,e,n,r)=>{},PT=(t,e,n,r)=>{const s=t._zod.def,i=Nf(s.entries);i.every(o=>typeof o=="number")&&(n.type="number"),i.every(o=>typeof o=="string")&&(n.type="string"),n.enum=i},CT=(t,e,n,r)=>{if(e.unrepresentable==="throw")throw new Error("Custom types cannot be represented in JSON Schema")},kT=(t,e,n,r)=>{if(e.unrepresentable==="throw")throw new Error("Transforms cannot be represented in JSON Schema")},xT=(t,e,n,r)=>{const s=n,i=t._zod.def,{minimum:o,maximum:c}=t._zod.bag;typeof o=="number"&&(s.minItems=o),typeof c=="number"&&(s.maxItems=c),s.type="array",s.items=nt(i.element,e,{...r,path:[...r.path,"items"]})},NT=(t,e,n,r)=>{var l;const s=n,i=t._zod.def;s.type="object",s.properties={};const o=i.shape;for(const d in o)s.properties[d]=nt(o[d],e,{...r,path:[...r.path,"properties",d]});const c=new Set(Object.keys(o)),u=new Set([...c].filter(d=>{const p=i.shape[d]._zod;return e.io==="input"?p.optin===void 0:p.optout===void 0}));u.size>0&&(s.required=Array.from(u)),((l=i.catchall)==null?void 0:l._zod.def.type)==="never"?s.additionalProperties=!1:i.catchall?i.catchall&&(s.additionalProperties=nt(i.catchall,e,{...r,path:[...r.path,"additionalProperties"]})):e.io==="output"&&(s.additionalProperties=!1)},DT=(t,e,n,r)=>{const s=t._zod.def,i=s.inclusive===!1,o=s.options.map((c,u)=>nt(c,e,{...r,path:[...r.path,i?"oneOf":"anyOf",u]}));i?n.oneOf=o:n.anyOf=o},OT=(t,e,n,r)=>{const s=t._zod.def,i=nt(s.left,e,{...r,path:[...r.path,"allOf",0]}),o=nt(s.right,e,{...r,path:[...r.path,"allOf",1]}),c=l=>"allOf"in l&&Object.keys(l).length===1,u=[...c(i)?i.allOf:[i],...c(o)?o.allOf:[o]];n.allOf=u},VT=(t,e,n,r)=>{const s=t._zod.def,i=nt(s.innerType,e,r),o=e.seen.get(t);e.target==="openapi-3.0"?(o.ref=s.innerType,n.nullable=!0):n.anyOf=[i,{type:"null"}]},LT=(t,e,n,r)=>{const s=t._zod.def;nt(s.innerType,e,r);const i=e.seen.get(t);i.ref=s.innerType},MT=(t,e,n,r)=>{const s=t._zod.def;nt(s.innerType,e,r);const i=e.seen.get(t);i.ref=s.innerType,n.default=JSON.parse(JSON.stringify(s.defaultValue))},FT=(t,e,n,r)=>{const s=t._zod.def;nt(s.innerType,e,r);const i=e.seen.get(t);i.ref=s.innerType,e.io==="input"&&(n._prefault=JSON.parse(JSON.stringify(s.defaultValue)))},UT=(t,e,n,r)=>{const s=t._zod.def;nt(s.innerType,e,r);const i=e.seen.get(t);i.ref=s.innerType;let o;try{o=s.catchValue(void 0)}catch{throw new Error("Dynamic catch values are not supported in JSON Schema")}n.default=o},zT=(t,e,n,r)=>{const s=t._zod.def,i=e.io==="input"?s.in._zod.def.type==="transform"?s.out:s.in:s.out;nt(i,e,r);const o=e.seen.get(t);o.ref=i},jT=(t,e,n,r)=>{const s=t._zod.def;nt(s.innerType,e,r);const i=e.seen.get(t);i.ref=s.innerType,n.readOnly=!0},Zf=(t,e,n,r)=>{const s=t._zod.def;nt(s.innerType,e,r);const i=e.seen.get(t);i.ref=s.innerType};function hh(t,e){try{var n=t()}catch(r){return e(r)}return n&&n.then?n.then(void 0,e):n}function $T(t,e){for(var n={};t.length;){var r=t[0],s=r.code,i=r.message,o=r.path.join(".");if(!n[o])if("unionErrors"in r){var c=r.unionErrors[0].errors[0];n[o]={message:c.message,type:c.code}}else n[o]={message:i,type:s};if("unionErrors"in r&&r.unionErrors.forEach(function(d){return d.errors.forEach(function(p){return t.push(p)})}),e){var u=n[o].types,l=u&&u[r.code];n[o]=qc(o,e,n,s,l?[].concat(l,r.message):r.message)}t.shift()}return n}function BT(t,e){for(var n={};t.length;){var r=t[0],s=r.code,i=r.message,o=r.path.join(".");if(!n[o])if(r.code==="invalid_union"&&r.errors.length>0){var c=r.errors[0][0];n[o]={message:c.message,type:c.code}}else n[o]={message:i,type:s};if(r.code==="invalid_union"&&r.errors.forEach(function(d){return d.forEach(function(p){return t.push(p)})}),e){var u=n[o].types,l=u&&u[r.code];n[o]=qc(o,e,n,s,l?[].concat(l,r.message):r.message)}t.shift()}return n}function qT(t,e,n){if(n===void 0&&(n={}),function(r){return"_def"in r&&typeof r._def=="object"&&"typeName"in r._def}(t))return function(r,s,i){try{return Promise.resolve(hh(function(){return Promise.resolve(t[n.mode==="sync"?"parse":"parseAsync"](r,e)).then(function(o){return i.shouldUseNativeValidation&&tc({},i),{errors:{},values:n.raw?Object.assign({},r):o}})},function(o){if(function(c){return Array.isArray(c==null?void 0:c.issues)}(o))return{values:{},errors:Jl($T(o.errors,!i.shouldUseNativeValidation&&i.criteriaMode==="all"),i)};throw o}))}catch(o){return Promise.reject(o)}};if(function(r){return"_zod"in r&&typeof r._zod=="object"}(t))return function(r,s,i){try{return Promise.resolve(hh(function(){return Promise.resolve((n.mode==="sync"?Jv:Qv)(t,r,e)).then(function(o){return i.shouldUseNativeValidation&&tc({},i),{errors:{},values:n.raw?Object.assign({},r):o}})},function(o){if(function(c){return c instanceof Qc}(o))return{values:{},errors:Jl(BT(o.issues,!i.shouldUseNativeValidation&&i.criteriaMode==="all"),i)};throw o}))}catch(o){return Promise.reject(o)}};throw new Error("Invalid input: not a Zod schema")}const WT=F("ZodISODateTime",(t,e)=>{ew.init(t,e),Re.init(t,e)});function HT(t){return nT(WT,t)}const GT=F("ZodISODate",(t,e)=>{tw.init(t,e),Re.init(t,e)});function KT(t){return rT(GT,t)}const ZT=F("ZodISOTime",(t,e)=>{nw.init(t,e),Re.init(t,e)});function JT(t){return sT(ZT,t)}const QT=F("ZodISODuration",(t,e)=>{rw.init(t,e),Re.init(t,e)});function YT(t){return iT(QT,t)}const XT=(t,e)=>{Qc.init(t,e),t.name="ZodError",Object.defineProperties(t,{format:{value:n=>Zv(t,n)},flatten:{value:n=>Kv(t,n)},addIssue:{value:n=>{t.issues.push(n),t.message=JSON.stringify(t.issues,nc,2)}},addIssues:{value:n=>{t.issues.push(...n),t.message=JSON.stringify(t.issues,nc,2)}},isEmpty:{get(){return t.issues.length===0}}})},Tt=F("ZodError",XT,{Parent:Error}),eb=Uo(Tt),tb=zo(Tt),nb=jo(Tt),rb=$o(Tt),sb=eE(Tt),ib=tE(Tt),ob=nE(Tt),ab=rE(Tt),cb=sE(Tt),ub=iE(Tt),lb=oE(Tt),hb=aE(Tt),qe=F("ZodType",(t,e)=>(Be.init(t,e),Object.assign(t["~standard"],{jsonSchema:{input:uo(t,"input"),output:uo(t,"output")}}),t.toJSONSchema=bT(t,{}),t.def=e,t.type=e.type,Object.defineProperty(t,"_def",{value:e}),t.check=(...n)=>t.clone(zn(e,{checks:[...e.checks??[],...n.map(r=>typeof r=="function"?{_zod:{check:r,def:{check:"custom"},onattach:[]}}:r)]}),{parent:!0}),t.with=t.check,t.clone=(n,r)=>jn(t,n,r),t.brand=()=>t,t.register=(n,r)=>(n.add(t,r),t),t.parse=(n,r)=>eb(t,n,r,{callee:t.parse}),t.safeParse=(n,r)=>nb(t,n,r),t.parseAsync=async(n,r)=>tb(t,n,r,{callee:t.parseAsync}),t.safeParseAsync=async(n,r)=>rb(t,n,r),t.spa=t.safeParseAsync,t.encode=(n,r)=>sb(t,n,r),t.decode=(n,r)=>ib(t,n,r),t.encodeAsync=async(n,r)=>ob(t,n,r),t.decodeAsync=async(n,r)=>ab(t,n,r),t.safeEncode=(n,r)=>cb(t,n,r),t.safeDecode=(n,r)=>ub(t,n,r),t.safeEncodeAsync=async(n,r)=>lb(t,n,r),t.safeDecodeAsync=async(n,r)=>hb(t,n,r),t.refine=(n,r)=>t.check(sI(n,r)),t.superRefine=n=>t.check(iI(n)),t.overwrite=n=>t.check(Jr(n)),t.optional=()=>mh(t),t.exactOptional=()=>Wb(t),t.nullable=()=>gh(t),t.nullish=()=>mh(gh(t)),t.nonoptional=n=>Qb(t,n),t.array=()=>Ob(t),t.or=n=>Fb([t,n]),t.and=n=>zb(t,n),t.transform=n=>_h(t,Bb(n)),t.default=n=>Kb(t,n),t.prefault=n=>Jb(t,n),t.catch=n=>Xb(t,n),t.pipe=n=>_h(t,n),t.readonly=()=>nI(t),t.describe=n=>{const r=t.clone();return ks.add(r,{description:n}),r},Object.defineProperty(t,"description",{get(){var n;return(n=ks.get(t))==null?void 0:n.description},configurable:!0}),t.meta=(...n)=>{if(n.length===0)return ks.get(t);const r=t.clone();return ks.add(r,n[0]),r},t.isOptional=()=>t.safeParse(void 0).success,t.isNullable=()=>t.safeParse(null).success,t.apply=n=>n(t),t)),Jf=F("_ZodString",(t,e)=>{Yc.init(t,e),qe.init(t,e),t._zod.processJSONSchema=(r,s,i)=>AT(t,r,s);const n=t._zod.bag;t.format=n.format??null,t.minLength=n.minimum??null,t.maxLength=n.maximum??null,t.regex=(...r)=>t.check(cT(...r)),t.includes=(...r)=>t.check(hT(...r)),t.startsWith=(...r)=>t.check(dT(...r)),t.endsWith=(...r)=>t.check(fT(...r)),t.min=(...r)=>t.check(co(...r)),t.max=(...r)=>t.check(qf(...r)),t.length=(...r)=>t.check(Wf(...r)),t.nonempty=(...r)=>t.check(co(1,...r)),t.lowercase=r=>t.check(uT(r)),t.uppercase=r=>t.check(lT(r)),t.trim=()=>t.check(mT()),t.normalize=(...r)=>t.check(pT(...r)),t.toLowerCase=()=>t.check(gT()),t.toUpperCase=()=>t.check(_T()),t.slugify=()=>t.check(yT())}),db=F("ZodString",(t,e)=>{Yc.init(t,e),Jf.init(t,e),t.email=n=>t.check(Vw(fb,n)),t.url=n=>t.check(zw(pb,n)),t.jwt=n=>t.check(tT(Cb,n)),t.emoji=n=>t.check(jw(mb,n)),t.guid=n=>t.check(lh(fh,n)),t.uuid=n=>t.check(Lw(Li,n)),t.uuidv4=n=>t.check(Mw(Li,n)),t.uuidv6=n=>t.check(Fw(Li,n)),t.uuidv7=n=>t.check(Uw(Li,n)),t.nanoid=n=>t.check($w(gb,n)),t.guid=n=>t.check(lh(fh,n)),t.cuid=n=>t.check(Bw(_b,n)),t.cuid2=n=>t.check(qw(yb,n)),t.ulid=n=>t.check(Ww(vb,n)),t.base64=n=>t.check(Yw(Sb,n)),t.base64url=n=>t.check(Xw(Rb,n)),t.xid=n=>t.check(Hw(Eb,n)),t.ksuid=n=>t.check(Gw(wb,n)),t.ipv4=n=>t.check(Kw(Tb,n)),t.ipv6=n=>t.check(Zw(bb,n)),t.cidrv4=n=>t.check(Jw(Ib,n)),t.cidrv6=n=>t.check(Qw(Ab,n)),t.e164=n=>t.check(eT(Pb,n)),t.datetime=n=>t.check(HT(n)),t.date=n=>t.check(KT(n)),t.time=n=>t.check(JT(n)),t.duration=n=>t.check(YT(n))});function dh(t){return Ow(db,t)}const Re=F("ZodStringFormat",(t,e)=>{Ie.init(t,e),Jf.init(t,e)}),fb=F("ZodEmail",(t,e)=>{WE.init(t,e),Re.init(t,e)}),fh=F("ZodGUID",(t,e)=>{BE.init(t,e),Re.init(t,e)}),Li=F("ZodUUID",(t,e)=>{qE.init(t,e),Re.init(t,e)}),pb=F("ZodURL",(t,e)=>{HE.init(t,e),Re.init(t,e)}),mb=F("ZodEmoji",(t,e)=>{GE.init(t,e),Re.init(t,e)}),gb=F("ZodNanoID",(t,e)=>{KE.init(t,e),Re.init(t,e)}),_b=F("ZodCUID",(t,e)=>{ZE.init(t,e),Re.init(t,e)}),yb=F("ZodCUID2",(t,e)=>{JE.init(t,e),Re.init(t,e)}),vb=F("ZodULID",(t,e)=>{QE.init(t,e),Re.init(t,e)}),Eb=F("ZodXID",(t,e)=>{YE.init(t,e),Re.init(t,e)}),wb=F("ZodKSUID",(t,e)=>{XE.init(t,e),Re.init(t,e)}),Tb=F("ZodIPv4",(t,e)=>{sw.init(t,e),Re.init(t,e)}),bb=F("ZodIPv6",(t,e)=>{iw.init(t,e),Re.init(t,e)}),Ib=F("ZodCIDRv4",(t,e)=>{ow.init(t,e),Re.init(t,e)}),Ab=F("ZodCIDRv6",(t,e)=>{aw.init(t,e),Re.init(t,e)}),Sb=F("ZodBase64",(t,e)=>{cw.init(t,e),Re.init(t,e)}),Rb=F("ZodBase64URL",(t,e)=>{lw.init(t,e),Re.init(t,e)}),Pb=F("ZodE164",(t,e)=>{hw.init(t,e),Re.init(t,e)}),Cb=F("ZodJWT",(t,e)=>{fw.init(t,e),Re.init(t,e)}),kb=F("ZodUnknown",(t,e)=>{pw.init(t,e),qe.init(t,e),t._zod.processJSONSchema=(n,r,s)=>RT()});function ph(){return oT(kb)}const xb=F("ZodNever",(t,e)=>{mw.init(t,e),qe.init(t,e),t._zod.processJSONSchema=(n,r,s)=>ST(t,n,r)});function Nb(t){return aT(xb,t)}const Db=F("ZodArray",(t,e)=>{gw.init(t,e),qe.init(t,e),t._zod.processJSONSchema=(n,r,s)=>xT(t,n,r,s),t.element=e.element,t.min=(n,r)=>t.check(co(n,r)),t.nonempty=n=>t.check(co(1,n)),t.max=(n,r)=>t.check(qf(n,r)),t.length=(n,r)=>t.check(Wf(n,r)),t.unwrap=()=>t.element});function Ob(t,e){return vT(Db,t,e)}const Vb=F("ZodObject",(t,e)=>{yw.init(t,e),qe.init(t,e),t._zod.processJSONSchema=(n,r,s)=>NT(t,n,r,s),me(t,"shape",()=>e.shape),t.keyof=()=>jb(Object.keys(t._zod.def.shape)),t.catchall=n=>t.clone({...t._zod.def,catchall:n}),t.passthrough=()=>t.clone({...t._zod.def,catchall:ph()}),t.loose=()=>t.clone({...t._zod.def,catchall:ph()}),t.strict=()=>t.clone({...t._zod.def,catchall:Nb()}),t.strip=()=>t.clone({...t._zod.def,catchall:void 0}),t.extend=n=>Bv(t,n),t.safeExtend=n=>qv(t,n),t.merge=n=>Wv(t,n),t.pick=n=>jv(t,n),t.omit=n=>$v(t,n),t.partial=(...n)=>Hv(Qf,t,n[0]),t.required=(...n)=>Gv(Yf,t,n[0])});function Lb(t,e){const n={type:"object",shape:t??{},...ne(e)};return new Vb(n)}const Mb=F("ZodUnion",(t,e)=>{vw.init(t,e),qe.init(t,e),t._zod.processJSONSchema=(n,r,s)=>DT(t,n,r,s),t.options=e.options});function Fb(t,e){return new Mb({type:"union",options:t,...ne(e)})}const Ub=F("ZodIntersection",(t,e)=>{Ew.init(t,e),qe.init(t,e),t._zod.processJSONSchema=(n,r,s)=>OT(t,n,r,s)});function zb(t,e){return new Ub({type:"intersection",left:t,right:e})}const sc=F("ZodEnum",(t,e)=>{ww.init(t,e),qe.init(t,e),t._zod.processJSONSchema=(r,s,i)=>PT(t,r,s),t.enum=e.entries,t.options=Object.values(e.entries);const n=new Set(Object.keys(e.entries));t.extract=(r,s)=>{const i={};for(const o of r)if(n.has(o))i[o]=e.entries[o];else throw new Error(`Key ${o} not found in enum`);return new sc({...e,checks:[],...ne(s),entries:i})},t.exclude=(r,s)=>{const i={...e.entries};for(const o of r)if(n.has(o))delete i[o];else throw new Error(`Key ${o} not found in enum`);return new sc({...e,checks:[],...ne(s),entries:i})}});function jb(t,e){const n=Array.isArray(t)?Object.fromEntries(t.map(r=>[r,r])):t;return new sc({type:"enum",entries:n,...ne(e)})}const $b=F("ZodTransform",(t,e)=>{Tw.init(t,e),qe.init(t,e),t._zod.processJSONSchema=(n,r,s)=>kT(t,n),t._zod.parse=(n,r)=>{if(r.direction==="backward")throw new kf(t.constructor.name);n.addIssue=i=>{if(typeof i=="string")n.issues.push(Gs(i,n.value,e));else{const o=i;o.fatal&&(o.continue=!1),o.code??(o.code="custom"),o.input??(o.input=n.value),o.inst??(o.inst=t),n.issues.push(Gs(o))}};const s=e.transform(n.value,n);return s instanceof Promise?s.then(i=>(n.value=i,n)):(n.value=s,n)}});function Bb(t){return new $b({type:"transform",transform:t})}const Qf=F("ZodOptional",(t,e)=>{Bf.init(t,e),qe.init(t,e),t._zod.processJSONSchema=(n,r,s)=>Zf(t,n,r,s),t.unwrap=()=>t._zod.def.innerType});function mh(t){return new Qf({type:"optional",innerType:t})}const qb=F("ZodExactOptional",(t,e)=>{bw.init(t,e),qe.init(t,e),t._zod.processJSONSchema=(n,r,s)=>Zf(t,n,r,s),t.unwrap=()=>t._zod.def.innerType});function Wb(t){return new qb({type:"optional",innerType:t})}const Hb=F("ZodNullable",(t,e)=>{Iw.init(t,e),qe.init(t,e),t._zod.processJSONSchema=(n,r,s)=>VT(t,n,r,s),t.unwrap=()=>t._zod.def.innerType});function gh(t){return new Hb({type:"nullable",innerType:t})}const Gb=F("ZodDefault",(t,e)=>{Aw.init(t,e),qe.init(t,e),t._zod.processJSONSchema=(n,r,s)=>MT(t,n,r,s),t.unwrap=()=>t._zod.def.innerType,t.removeDefault=t.unwrap});function Kb(t,e){return new Gb({type:"default",innerType:t,get defaultValue(){return typeof e=="function"?e():Of(e)}})}const Zb=F("ZodPrefault",(t,e)=>{Sw.init(t,e),qe.init(t,e),t._zod.processJSONSchema=(n,r,s)=>FT(t,n,r,s),t.unwrap=()=>t._zod.def.innerType});function Jb(t,e){return new Zb({type:"prefault",innerType:t,get defaultValue(){return typeof e=="function"?e():Of(e)}})}const Yf=F("ZodNonOptional",(t,e)=>{Rw.init(t,e),qe.init(t,e),t._zod.processJSONSchema=(n,r,s)=>LT(t,n,r,s),t.unwrap=()=>t._zod.def.innerType});function Qb(t,e){return new Yf({type:"nonoptional",innerType:t,...ne(e)})}const Yb=F("ZodCatch",(t,e)=>{Pw.init(t,e),qe.init(t,e),t._zod.processJSONSchema=(n,r,s)=>UT(t,n,r,s),t.unwrap=()=>t._zod.def.innerType,t.removeCatch=t.unwrap});function Xb(t,e){return new Yb({type:"catch",innerType:t,catchValue:typeof e=="function"?e:()=>e})}const eI=F("ZodPipe",(t,e)=>{Cw.init(t,e),qe.init(t,e),t._zod.processJSONSchema=(n,r,s)=>zT(t,n,r,s),t.in=e.in,t.out=e.out});function _h(t,e){return new eI({type:"pipe",in:t,out:e})}const tI=F("ZodReadonly",(t,e)=>{kw.init(t,e),qe.init(t,e),t._zod.processJSONSchema=(n,r,s)=>jT(t,n,r,s),t.unwrap=()=>t._zod.def.innerType});function nI(t){return new tI({type:"readonly",innerType:t})}const rI=F("ZodCustom",(t,e)=>{xw.init(t,e),qe.init(t,e),t._zod.processJSONSchema=(n,r,s)=>CT(t,n)});function sI(t,e={}){return ET(rI,t,e)}function iI(t){return wT(t)}const oI=()=>{};var yh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},aI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ep={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,u=s+2<t.length,l=u?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|l>>6,_=l&63;u||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||l==null||p==null)throw new cI;const m=i<<2|c>>4;if(r.push(m),l!==64){const _=c<<4&240|l>>2;if(r.push(_),p!==64){const D=l<<6&192|p;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class cI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uI=function(t){const e=Xf(t);return ep.encodeByteArray(e,!0)},lo=function(t){return uI(t).replace(/\./g,"")},tp=function(t){try{return ep.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI=()=>lI().__FIREBASE_DEFAULTS__,dI=()=>{if(typeof process>"u"||typeof yh>"u")return;const t=yh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&tp(t[1]);return e&&JSON.parse(e)},qo=()=>{try{return oI()||hI()||dI()||fI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},np=t=>{var e,n;return(n=(e=qo())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},pI=t=>{const e=np(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},rp=()=>{var t;return(t=qo())==null?void 0:t.config},sp=t=>{var e;return(e=qo())==null?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...t};return[lo(JSON.stringify(n)),lo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _I(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function yI(){var e;const t=(e=qo())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function vI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function EI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function wI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TI(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function bI(){return!yI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function II(){try{return typeof indexedDB=="object"}catch{return!1}}function AI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=SI,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ai.prototype.create)}}class ai{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?RI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new cn(s,c,r)}}function RI(t,e){return t.replace(PI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const PI=/\{\$([^}]+)}/g;function CI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function rr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(vh(i)&&vh(o)){if(!rr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function vh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ns(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kI(t,e){const n=new xI(t,e);return n.subscribe.bind(n)}class xI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");NI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Oa),s.error===void 0&&(s.error=Oa),s.complete===void 0&&(s.complete=Oa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function NI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Oa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ip(t){return(await fetch(t,{credentials:"include"})).ok}class sr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DI=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new mI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VI(e))try{this.getOrInitializeService({instanceIdentifier:Jn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Jn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jn){return this.instances.has(e)}getOptions(e=Jn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:OI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jn){return this.component?this.component.multipleInstances?e:Jn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function OI(t){return t===Jn?void 0:t}function VI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new DI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const MI={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},FI=ue.INFO,UI={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},zI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=UI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xc{constructor(e){this.name=e,this._logLevel=FI,this._logHandler=zI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?MI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const jI=(t,e)=>e.some(n=>t instanceof n);let Eh,wh;function $I(){return Eh||(Eh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BI(){return wh||(wh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const op=new WeakMap,ic=new WeakMap,ap=new WeakMap,Va=new WeakMap,eu=new WeakMap;function qI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(An(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&op.set(n,t)}).catch(()=>{}),eu.set(e,t),e}function WI(t){if(ic.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ic.set(t,e)}let oc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ic.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ap.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return An(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function HI(t){oc=t(oc)}function GI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(La(this),e,...n);return ap.set(r,e.sort?e.sort():[e]),An(r)}:BI().includes(t)?function(...e){return t.apply(La(this),e),An(op.get(this))}:function(...e){return An(t.apply(La(this),e))}}function KI(t){return typeof t=="function"?GI(t):(t instanceof IDBTransaction&&WI(t),jI(t,$I())?new Proxy(t,oc):t)}function An(t){if(t instanceof IDBRequest)return qI(t);if(Va.has(t))return Va.get(t);const e=KI(t);return e!==t&&(Va.set(t,e),eu.set(e,t)),e}const La=t=>eu.get(t);function ZI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=An(o);return r&&o.addEventListener("upgradeneeded",u=>{r(An(o.result),u.oldVersion,u.newVersion,An(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}const JI=["get","getKey","getAll","getAllKeys","count"],QI=["put","add","delete","clear"],Ma=new Map;function Th(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ma.get(e))return Ma.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=QI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||JI.includes(n)))return;const i=async function(o,...c){const u=this.transaction(o,s?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&u.done]))[0]};return Ma.set(e,i),i}HI(t=>({...t,get:(e,n,r)=>Th(e,n)||t.get(e,n,r),has:(e,n)=>!!Th(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function XI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ac="@firebase/app",bh="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new Xc("@firebase/app"),eA="@firebase/app-compat",tA="@firebase/analytics-compat",nA="@firebase/analytics",rA="@firebase/app-check-compat",sA="@firebase/app-check",iA="@firebase/auth",oA="@firebase/auth-compat",aA="@firebase/database",cA="@firebase/data-connect",uA="@firebase/database-compat",lA="@firebase/functions",hA="@firebase/functions-compat",dA="@firebase/installations",fA="@firebase/installations-compat",pA="@firebase/messaging",mA="@firebase/messaging-compat",gA="@firebase/performance",_A="@firebase/performance-compat",yA="@firebase/remote-config",vA="@firebase/remote-config-compat",EA="@firebase/storage",wA="@firebase/storage-compat",TA="@firebase/firestore",bA="@firebase/ai",IA="@firebase/firestore-compat",AA="firebase",SA="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc="[DEFAULT]",RA={[ac]:"fire-core",[eA]:"fire-core-compat",[nA]:"fire-analytics",[tA]:"fire-analytics-compat",[sA]:"fire-app-check",[rA]:"fire-app-check-compat",[iA]:"fire-auth",[oA]:"fire-auth-compat",[aA]:"fire-rtdb",[cA]:"fire-data-connect",[uA]:"fire-rtdb-compat",[lA]:"fire-fn",[hA]:"fire-fn-compat",[dA]:"fire-iid",[fA]:"fire-iid-compat",[pA]:"fire-fcm",[mA]:"fire-fcm-compat",[gA]:"fire-perf",[_A]:"fire-perf-compat",[yA]:"fire-rc",[vA]:"fire-rc-compat",[EA]:"fire-gcs",[wA]:"fire-gcs-compat",[TA]:"fire-fst",[IA]:"fire-fst-compat",[bA]:"fire-vertex","fire-js":"fire-js",[AA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho=new Map,PA=new Map,uc=new Map;function Ih(t,e){try{t.container.addComponent(e)}catch(n){rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jr(t){const e=t.name;if(uc.has(e))return rn.debug(`There were multiple attempts to register component ${e}.`),!1;uc.set(e,t);for(const n of ho.values())Ih(n,t);for(const n of PA.values())Ih(n,t);return!0}function tu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function vt(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Sn=new ai("app","Firebase",CA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=SA;function cp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:cc,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Sn.create("bad-app-name",{appName:String(s)});if(n||(n=rp()),!n)throw Sn.create("no-options");const i=ho.get(s);if(i){if(rr(n,i.options)&&rr(r,i.config))return i;throw Sn.create("duplicate-app",{appName:s})}const o=new LI(s);for(const u of uc.values())o.addComponent(u);const c=new kA(n,r,o);return ho.set(s,c),c}function up(t=cc){const e=ho.get(t);if(!e&&t===cc&&rp())return cp();if(!e)throw Sn.create("no-app",{appName:t});return e}function Rn(t,e,n){let r=RA[t]??t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rn.warn(o.join(" "));return}jr(new sr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xA="firebase-heartbeat-database",NA=1,Ks="firebase-heartbeat-store";let Fa=null;function lp(){return Fa||(Fa=ZI(xA,NA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ks)}catch(n){console.warn(n)}}}}).catch(t=>{throw Sn.create("idb-open",{originalErrorMessage:t.message})})),Fa}async function DA(t){try{const n=(await lp()).transaction(Ks),r=await n.objectStore(Ks).get(hp(t));return await n.done,r}catch(e){if(e instanceof cn)rn.warn(e.message);else{const n=Sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rn.warn(n.message)}}}async function Ah(t,e){try{const r=(await lp()).transaction(Ks,"readwrite");await r.objectStore(Ks).put(e,hp(t)),await r.done}catch(n){if(n instanceof cn)rn.warn(n.message);else{const r=Sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rn.warn(r.message)}}}function hp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=1024,VA=30;class LA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new FA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Sh();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>VA){const o=UA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){rn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sh(),{heartbeatsToSend:r,unsentEntries:s}=MA(this._heartbeatsCache.heartbeats),i=lo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return rn.warn(n),""}}}function Sh(){return new Date().toISOString().substring(0,10)}function MA(t,e=OA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Rh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Rh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class FA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return II()?AI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await DA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ah(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Ah(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Rh(t){return lo(JSON.stringify({version:2,heartbeats:t})).length}function UA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(t){jr(new sr("platform-logger",e=>new YI(e),"PRIVATE")),jr(new sr("heartbeat",e=>new LA(e),"PRIVATE")),Rn(ac,bh,t),Rn(ac,bh,"esm2020"),Rn("fire-js","")}zA("");function dp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const jA=dp,fp=new ai("auth","Firebase",dp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fo=new Xc("@firebase/auth");function $A(t,...e){fo.logLevel<=ue.WARN&&fo.warn(`Auth (${Qr}): ${t}`,...e)}function Hi(t,...e){fo.logLevel<=ue.ERROR&&fo.error(`Auth (${Qr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(t,...e){throw ru(t,...e)}function kt(t,...e){return ru(t,...e)}function nu(t,e,n){const r={...jA(),[e]:n};return new ai("auth","Firebase",r).create(e,{appName:t.name})}function Pn(t){return nu(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function BA(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&wt(t,"argument-error"),nu(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ru(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return fp.create(t,...e)}function ee(t,e,...n){if(!t)throw ru(e,...n)}function Xt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Hi(e),new Error(e)}function sn(t,e){t||Xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lc(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function qA(){return Ph()==="http:"||Ph()==="https:"}function Ph(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qA()||EI()||"connection"in navigator)?navigator.onLine:!0}function HA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=_I()||wI()}get(){return WA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ZA=new li(3e4,6e4);function dr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function $n(t,e,n,r,s={}){return mp(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=ci({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const l={method:e,headers:u,...i};return vI()||(l.referrerPolicy="no-referrer"),t.emulatorConfig&&ui(t.emulatorConfig.host)&&(l.credentials="include"),pp.fetch()(await gp(t,t.config.apiHost,n,c),l)})}async function mp(t,e,n){t._canInitEmulator=!1;const r={...GA,...e};try{const s=new QA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Mi(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[u,l]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Mi(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Mi(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Mi(t,"user-disabled",o);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw nu(t,d,l);wt(t,d)}}catch(s){if(s instanceof cn)throw s;wt(t,"network-request-failed",{message:String(s)})}}async function Wo(t,e,n,r,s={}){const i=await $n(t,e,n,r,s);return"mfaPendingCredential"in i&&wt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function gp(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?su(t.config,s):`${t.config.apiScheme}://${s}`;return KA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function JA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class QA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(kt(this.auth,"network-request-failed")),ZA.get())})}}function Mi(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=kt(t,e,r);return s.customData._tokenResponse=n,s}function Ch(t){return t!==void 0&&t.enterprise!==void 0}class YA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return JA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function XA(t,e){return $n(t,"GET","/v2/recaptchaConfig",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eS(t,e){return $n(t,"POST","/v1/accounts:delete",e)}async function po(t,e){return $n(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tS(t,e=!1){const n=Je(t),r=await n.getIdToken(e),s=iu(r);ee(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Us(Ua(s.auth_time)),issuedAtTime:Us(Ua(s.iat)),expirationTime:Us(Ua(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ua(t){return Number(t)*1e3}function iu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Hi("JWT malformed, contained fewer than 3 sections"),null;try{const s=tp(n);return s?JSON.parse(s):(Hi("Failed to decode base64 JWT payload"),null)}catch(s){return Hi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function kh(t){const e=iu(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&nS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function nS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Us(this.lastLoginAt),this.creationTime=Us(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(t){var p;const e=t.auth,n=await t.getIdToken(),r=await Zs(t,po(e,{idToken:n}));ee(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const i=(p=s.providerUserInfo)!=null&&p.length?_p(s.providerUserInfo):[],o=iS(t.providerData,i),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),l=c?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new hc(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,d)}async function sS(t){const e=Je(t);await mo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function iS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function _p(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oS(t,e){const n=await mp(t,{},async()=>{const r=ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await gp(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return t.emulatorConfig&&ui(t.emulatorConfig.host)&&(u.credentials="include"),pp.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function aS(t,e){return $n(t,"POST","/v2/accounts:revokeToken",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=kh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await oS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Vr;return r&&(ee(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ee(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vr,this.toJSON())}_performRefresh(){return Xt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pt{constructor({uid:e,auth:n,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new rS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new hc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zs(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return tS(this,e)}reload(){return sS(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Pt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await mo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vt(this.auth.app))return Promise.reject(Pn(this.auth));const e=await this.getIdToken();return await Zs(this,eS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,s=n.email??void 0,i=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,u=n._redirectEventId??void 0,l=n.createdAt??void 0,d=n.lastLoginAt??void 0,{uid:p,emailVerified:m,isAnonymous:_,providerData:D,stsTokenManager:P}=n;ee(p&&P,e,"internal-error");const I=Vr.fromJSON(this.name,P);ee(typeof p=="string",e,"internal-error"),yn(r,e.name),yn(s,e.name),ee(typeof m=="boolean",e,"internal-error"),ee(typeof _=="boolean",e,"internal-error"),yn(i,e.name),yn(o,e.name),yn(c,e.name),yn(u,e.name),yn(l,e.name),yn(d,e.name);const L=new Pt({uid:p,auth:e,email:s,emailVerified:m,displayName:r,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:c,stsTokenManager:I,createdAt:l,lastLoginAt:d});return D&&Array.isArray(D)&&(L.providerData=D.map(C=>({...C}))),u&&(L._redirectEventId=u),L}static async _fromIdTokenResponse(e,n,r=!1){const s=new Vr;s.updateFromServerResponse(n);const i=new Pt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await mo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ee(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?_p(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Vr;c.updateFromIdToken(r);const u=new Pt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new hc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,l),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=new Map;function en(t){sn(t instanceof Function,"Expected a class definition");let e=xh.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xh.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yp.type="NONE";const Nh=yp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(t,e,n){return`firebase:${t}:${e}:${n}`}class Lr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Gi(this.userKey,s.apiKey,i),this.fullPersistenceKey=Gi("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await po(this.auth,{idToken:e}).catch(()=>{});return n?Pt._fromGetAccountInfoResponse(this.auth,n,e):null}return Pt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Lr(en(Nh),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||en(Nh);const o=Gi(r,e.config.apiKey,e.name);let c=null;for(const l of n)try{const d=await l._get(o);if(d){let p;if(typeof d=="string"){const m=await po(e,{idToken:d}).catch(()=>{});if(!m)break;p=await Pt._fromGetAccountInfoResponse(e,m,d)}else p=Pt._fromJSON(e,d);l!==i&&(c=p),i=l;break}}catch{}const u=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Lr(i,e,r):(i=u[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new Lr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Tp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ip(e))return"Blackberry";if(Ap(e))return"Webos";if(Ep(e))return"Safari";if((e.includes("chrome/")||wp(e))&&!e.includes("edge/"))return"Chrome";if(bp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vp(t=ct()){return/firefox\//i.test(t)}function Ep(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wp(t=ct()){return/crios\//i.test(t)}function Tp(t=ct()){return/iemobile/i.test(t)}function bp(t=ct()){return/android/i.test(t)}function Ip(t=ct()){return/blackberry/i.test(t)}function Ap(t=ct()){return/webos/i.test(t)}function ou(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cS(t=ct()){var e;return ou(t)&&!!((e=window.navigator)!=null&&e.standalone)}function uS(){return TI()&&document.documentMode===10}function Sp(t=ct()){return ou(t)||bp(t)||Ap(t)||Ip(t)||/windows phone/i.test(t)||Tp(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t,e=[]){let n;switch(t){case"Browser":n=Dh(ct());break;case"Worker":n=`${Dh(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Qr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const u=e(i);o(u)}catch(u){c(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hS(t,e={}){return $n(t,"GET","/v2/passwordPolicy",dr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=6;class fS{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??dS,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oh(this),this.idTokenSubscription=new Oh(this),this.beforeStateQueue=new lS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Lr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await po(this,{idToken:e}),r=await Pt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(vt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await mo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=HA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vt(this.app))return Promise.reject(Pn(this));const n=e?Je(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vt(this.app)?Promise.reject(Pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vt(this.app)?Promise.reject(Pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await hS(this),n=new fS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ai("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await aS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&en(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Lr.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&$A(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function fr(t){return Je(t)}class Oh{constructor(e){this.auth=e,this.observer=null,this.addObserver=kI(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ho={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mS(t){Ho=t}function Pp(t){return Ho.loadJS(t)}function gS(){return Ho.recaptchaEnterpriseScript}function _S(){return Ho.gapiScript}function yS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class vS{constructor(){this.enterprise=new ES}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ES{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const wS="recaptcha-enterprise",Cp="NO_RECAPTCHA";class TS{constructor(e){this.type=wS,this.auth=fr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{XA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const l=new YA(u);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(u=>{c(u)})})}function s(i,o,c){const u=window.grecaptcha;Ch(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(Cp)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new vS().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Ch(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=gS();u.length!==0&&(u+=c),Pp(u).then(()=>{s(c,i,o)}).catch(l=>{o(l)})}}).catch(c=>{o(c)})})}}async function Vh(t,e,n,r=!1,s=!1){const i=new TS(t);let o;if(s)o=Cp;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,l=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Lh(t,e,n,r,s){var i;if((i=t._getRecaptchaConfig())!=null&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Vh(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Vh(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(t,e){const n=tu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(rr(i,e??{}))return s;wt(s,"already-initialized")}return n.initialize({options:e})}function IS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(en);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function AS(t,e,n){const r=fr(t);ee(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=kp(e),{host:o,port:c}=SS(e),u=c===null?"":`:${c}`,l={url:`${i}//${o}${u}/`},d=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ee(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ee(rr(l,r.config.emulator)&&rr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ui(o)?ip(`${i}//${o}${u}`):RS()}function kp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function SS(t){const e=kp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Mh(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Mh(o)}}}function Mh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xt("not implemented")}_getIdTokenResponse(e){return Xt("not implemented")}_linkToIdToken(e,n){return Xt("not implemented")}_getReauthenticationResolver(e){return Xt("not implemented")}}async function PS(t,e){return $n(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CS(t,e){return Wo(t,"POST","/v1/accounts:signInWithPassword",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kS(t,e){return Wo(t,"POST","/v1/accounts:signInWithEmailLink",dr(t,e))}async function xS(t,e){return Wo(t,"POST","/v1/accounts:signInWithEmailLink",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js extends au{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Js(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Js(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lh(e,n,"signInWithPassword",CS);case"emailLink":return kS(e,{email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lh(e,r,"signUpPassword",PS);case"emailLink":return xS(e,{idToken:n,email:this._email,oobCode:this._password});default:wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mr(t,e){return Wo(t,"POST","/v1/accounts:signInWithIdp",dr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS="http://localhost";class ir extends au{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=n;if(!r||!s)return null;const o=new ir(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Mr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Mr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mr(e,n)}buildRequest(){const e={requestUri:NS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ci(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OS(t){const e=xs(Ns(t)).link,n=e?xs(Ns(e)).deep_link_id:null,r=xs(Ns(t)).deep_link_id;return(r?xs(Ns(r)).link:null)||r||n||e||t}class cu{constructor(e){const n=xs(Ns(e)),r=n.apiKey??null,s=n.oobCode??null,i=DS(n.mode??null);ee(r&&s&&i,"argument-error"),this.apiKey=r,this.operation=i,this.code=s,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=OS(e);try{return new cu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(){this.providerId=Yr.PROVIDER_ID}static credential(e,n){return Js._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=cu.parseLink(n);return ee(r,"argument-error"),Js._fromEmailAndCode(e,r.code,r.tenantId)}}Yr.PROVIDER_ID="password";Yr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Yr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi extends uu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends hi{constructor(){super("facebook.com")}static credential(e){return ir._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends hi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ir._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yt.credential(n,r)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends hi{constructor(){super("github.com")}static credential(e){return ir._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends hi{constructor(){super("twitter.com")}static credential(e,n){return ir._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.TWITTER_SIGN_IN_METHOD="twitter.com";bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Pt._fromIdTokenResponse(e,r,s),o=Fh(r);return new $r({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Fh(r);return new $r({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Fh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go extends cn{constructor(e,n,r,s){super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,go.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new go(e,n,r,s)}}function xp(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?go._fromErrorAndOperation(t,i,e,r):i})}async function VS(t,e,n=!1){const r=await Zs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $r._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS(t,e,n=!1){const{auth:r}=t;if(vt(r.app))return Promise.reject(Pn(r));const s="reauthenticate";try{const i=await Zs(t,xp(r,s,e,t),n);ee(i.idToken,r,"internal-error");const o=iu(i.idToken);ee(o,r,"internal-error");const{sub:c}=o;return ee(t.uid===c,r,"user-mismatch"),$r._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&wt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Np(t,e,n=!1){if(vt(t.app))return Promise.reject(Pn(t));const r="signIn",s=await xp(t,r,e),i=await $r._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function MS(t,e){return Np(fr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FS(t){const e=fr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function US(t,e,n){return vt(t.app)?Promise.reject(Pn(t)):MS(Je(t),Yr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&FS(t),r})}function zS(t,e,n,r){return Je(t).onIdTokenChanged(e,n,r)}function jS(t,e,n){return Je(t).beforeAuthStateChanged(e,n)}function $S(t,e,n,r){return Je(t).onAuthStateChanged(e,n,r)}function Uh(t){return Je(t).signOut()}const _o="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(_o,"1"),this.storage.removeItem(_o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=1e3,qS=10;class Op extends Dp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Sp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);uS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,qS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},BS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Op.type="LOCAL";const WS=Op;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp extends Dp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vp.type="SESSION";const Lp=Vp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Go(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async l=>l(n.origin,i)),u=await HS(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Go.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,u)=>{const l=lu("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===l)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(){return window}function KS(t){jt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function ZS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function QS(){return Mp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp="firebaseLocalStorageDb",YS=1,yo="firebaseLocalStorage",Up="fbase_key";class di{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ko(t,e){return t.transaction([yo],e?"readwrite":"readonly").objectStore(yo)}function XS(){const t=indexedDB.deleteDatabase(Fp);return new di(t).toPromise()}function dc(){const t=indexedDB.open(Fp,YS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(yo,{keyPath:Up})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(yo)?e(r):(r.close(),await XS(),e(await dc()))})})}async function zh(t,e,n){const r=Ko(t,!0).put({[Up]:e,value:n});return new di(r).toPromise()}async function eR(t,e){const n=Ko(t,!1).get(e),r=await new di(n).toPromise();return r===void 0?null:r.value}function jh(t,e){const n=Ko(t,!0).delete(e);return new di(n).toPromise()}const tR=800,nR=3;class zp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await dc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>nR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Go._getInstance(QS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await ZS(),!this.activeServiceWorker)return;this.sender=new GS(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await dc();return await zh(e,_o,"1"),await jh(e,_o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>zh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>eR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ko(s,!1).getAll();return new di(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zp.type="LOCAL";const rR=zp;new li(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(t,e){return e?en(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu extends au{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sR(t){return Np(t.auth,new hu(t),t.bypassAuthState)}function iR(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),LS(n,new hu(t),t.bypassAuthState)}async function oR(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),VS(n,new hu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sR;case"linkViaPopup":case"linkViaRedirect":return oR;case"reauthViaPopup":case"reauthViaRedirect":return iR;default:wt(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR=new li(2e3,1e4);async function cR(t,e,n){if(vt(t.app))return Promise.reject(kt(t,"operation-not-supported-in-this-environment"));const r=fr(t);BA(t,e,uu);const s=jp(r,n);return new Yn(r,"signInViaPopup",e,s).executeNotNull()}class Yn extends $p{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Yn.currentPopupAction&&Yn.currentPopupAction.cancel(),Yn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=lu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(kt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(kt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Yn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(kt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aR.get())};e()}}Yn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR="pendingRedirect",Ki=new Map;class lR extends $p{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ki.get(this.auth._key());if(!e){try{const r=await hR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ki.set(this.auth._key(),e)}return this.bypassAuthState||Ki.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hR(t,e){const n=pR(e),r=fR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function dR(t,e){Ki.set(t._key(),e)}function fR(t){return en(t._redirectPersistence)}function pR(t){return Gi(uR,t.config.apiKey,t.name)}async function mR(t,e,n=!1){if(vt(t.app))return Promise.reject(Pn(t));const r=fr(t),s=jp(r,e),o=await new lR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR=10*60*1e3;class _R{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Bp(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(kt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gR&&this.cachedEventUids.clear(),this.cachedEventUids.has($h(e))}saveEventToCache(e){this.cachedEventUids.add($h(e)),this.lastProcessedEventTime=Date.now()}}function $h(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Bp({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function yR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bp(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vR(t,e={}){return $n(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wR=/^https?/;async function TR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vR(t);for(const n of e)try{if(bR(n))return}catch{}wt(t,"unauthorized-domain")}function bR(t){const e=lc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!wR.test(n))return!1;if(ER.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=new li(3e4,6e4);function Bh(){const t=jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AR(t){return new Promise((e,n)=>{var s,i,o;function r(){Bh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bh(),n(kt(t,"network-request-failed"))},timeout:IR.get()})}if((i=(s=jt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((o=jt().gapi)!=null&&o.load)r();else{const c=yS("iframefcb");return jt()[c]=()=>{gapi.load?r():n(kt(t,"network-request-failed"))},Pp(`${_S()}?onload=${c}`).catch(u=>n(u))}}).catch(e=>{throw Zi=null,e})}let Zi=null;function SR(t){return Zi=Zi||AR(t),Zi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=new li(5e3,15e3),PR="__/auth/iframe",CR="emulator/auth/iframe",kR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NR(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?su(e,CR):`https://${t.config.authDomain}/${PR}`,r={apiKey:e.apiKey,appName:t.name,v:Qr},s=xR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ci(r).slice(1)}`}async function DR(t){const e=await SR(t),n=jt().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:NR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=kt(t,"network-request-failed"),c=jt().setTimeout(()=>{i(o)},RR.get());function u(){jt().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VR=500,LR=600,MR="_blank",FR="http://localhost";class qh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function UR(t,e,n,r=VR,s=LR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...OR,width:r.toString(),height:s.toString(),top:i,left:o},l=ct().toLowerCase();n&&(c=wp(l)?MR:n),vp(l)&&(e=e||FR,u.scrollbars="yes");const d=Object.entries(u).reduce((m,[_,D])=>`${m}${_}=${D},`,"");if(cS(l)&&c!=="_self")return zR(e||"",c),new qh(null);const p=window.open(e||"",c,d);ee(p,t,"popup-blocked");try{p.focus()}catch{}return new qh(p)}function zR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR="__/auth/handler",$R="emulator/auth/handler",BR=encodeURIComponent("fac");async function Wh(t,e,n,r,s,i){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Qr,eventId:s};if(e instanceof uu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",CI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof hi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const u=await t._getAppCheckToken(),l=u?`#${BR}=${encodeURIComponent(u)}`:"";return`${qR(t)}?${ci(c).slice(1)}${l}`}function qR({config:t}){return t.emulator?su(t,$R):`https://${t.authDomain}/${jR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="webStorageSupport";class WR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lp,this._completeRedirectFn=mR,this._overrideRedirectResult=dR}async _openPopup(e,n,r,s){var o;sn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const i=await Wh(e,n,r,lc(),s);return UR(e,i,lu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Wh(e,n,r,lc(),s);return KS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(sn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await DR(e),r=new _R(e);return n.register("authEvent",s=>(ee(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(za,{type:za},s=>{var o;const i=(o=s==null?void 0:s[0])==null?void 0:o[za];i!==void 0&&n(!!i),wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Sp()||Ep()||ou()}}const HR=WR;var Hh="@firebase/auth",Gh="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function ZR(t){jr(new sr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rp(t)},l=new pS(r,s,i,u);return IS(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jr(new sr("auth-internal",e=>{const n=fr(e.getProvider("auth").getImmediate());return(r=>new GR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(Hh,Gh,KR(t)),Rn(Hh,Gh,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=5*60,QR=sp("authIdTokenMaxAge")||JR;let Kh=null;const YR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>QR)return;const s=n==null?void 0:n.token;Kh!==s&&(Kh=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function XR(t=up()){const e=tu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bS(t,{popupRedirectResolver:HR,persistence:[rR,WS,Lp]}),r=sp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=YR(i.toString());jS(n,o,()=>o(n.currentUser)),zS(n,c=>o(c))}}const s=np("auth");return s&&AS(n,`http://${s}`),n}function e0(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}mS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=kt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",e0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});ZR("Browser");var Zh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cn,qp;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,v){function E(){}E.prototype=v.prototype,b.F=v.prototype,b.prototype=new E,b.prototype.constructor=b,b.D=function(R,S,w){for(var y=Array(arguments.length-2),$=2;$<arguments.length;$++)y[$-2]=arguments[$];return v.prototype[S].apply(R,y)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,v,E){E||(E=0);const R=Array(16);if(typeof v=="string")for(var S=0;S<16;++S)R[S]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(S=0;S<16;++S)R[S]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=b.g[0],E=b.g[1],S=b.g[2];let w=b.g[3],y;y=v+(w^E&(S^w))+R[0]+3614090360&4294967295,v=E+(y<<7&4294967295|y>>>25),y=w+(S^v&(E^S))+R[1]+3905402710&4294967295,w=v+(y<<12&4294967295|y>>>20),y=S+(E^w&(v^E))+R[2]+606105819&4294967295,S=w+(y<<17&4294967295|y>>>15),y=E+(v^S&(w^v))+R[3]+3250441966&4294967295,E=S+(y<<22&4294967295|y>>>10),y=v+(w^E&(S^w))+R[4]+4118548399&4294967295,v=E+(y<<7&4294967295|y>>>25),y=w+(S^v&(E^S))+R[5]+1200080426&4294967295,w=v+(y<<12&4294967295|y>>>20),y=S+(E^w&(v^E))+R[6]+2821735955&4294967295,S=w+(y<<17&4294967295|y>>>15),y=E+(v^S&(w^v))+R[7]+4249261313&4294967295,E=S+(y<<22&4294967295|y>>>10),y=v+(w^E&(S^w))+R[8]+1770035416&4294967295,v=E+(y<<7&4294967295|y>>>25),y=w+(S^v&(E^S))+R[9]+2336552879&4294967295,w=v+(y<<12&4294967295|y>>>20),y=S+(E^w&(v^E))+R[10]+4294925233&4294967295,S=w+(y<<17&4294967295|y>>>15),y=E+(v^S&(w^v))+R[11]+2304563134&4294967295,E=S+(y<<22&4294967295|y>>>10),y=v+(w^E&(S^w))+R[12]+1804603682&4294967295,v=E+(y<<7&4294967295|y>>>25),y=w+(S^v&(E^S))+R[13]+4254626195&4294967295,w=v+(y<<12&4294967295|y>>>20),y=S+(E^w&(v^E))+R[14]+2792965006&4294967295,S=w+(y<<17&4294967295|y>>>15),y=E+(v^S&(w^v))+R[15]+1236535329&4294967295,E=S+(y<<22&4294967295|y>>>10),y=v+(S^w&(E^S))+R[1]+4129170786&4294967295,v=E+(y<<5&4294967295|y>>>27),y=w+(E^S&(v^E))+R[6]+3225465664&4294967295,w=v+(y<<9&4294967295|y>>>23),y=S+(v^E&(w^v))+R[11]+643717713&4294967295,S=w+(y<<14&4294967295|y>>>18),y=E+(w^v&(S^w))+R[0]+3921069994&4294967295,E=S+(y<<20&4294967295|y>>>12),y=v+(S^w&(E^S))+R[5]+3593408605&4294967295,v=E+(y<<5&4294967295|y>>>27),y=w+(E^S&(v^E))+R[10]+38016083&4294967295,w=v+(y<<9&4294967295|y>>>23),y=S+(v^E&(w^v))+R[15]+3634488961&4294967295,S=w+(y<<14&4294967295|y>>>18),y=E+(w^v&(S^w))+R[4]+3889429448&4294967295,E=S+(y<<20&4294967295|y>>>12),y=v+(S^w&(E^S))+R[9]+568446438&4294967295,v=E+(y<<5&4294967295|y>>>27),y=w+(E^S&(v^E))+R[14]+3275163606&4294967295,w=v+(y<<9&4294967295|y>>>23),y=S+(v^E&(w^v))+R[3]+4107603335&4294967295,S=w+(y<<14&4294967295|y>>>18),y=E+(w^v&(S^w))+R[8]+1163531501&4294967295,E=S+(y<<20&4294967295|y>>>12),y=v+(S^w&(E^S))+R[13]+2850285829&4294967295,v=E+(y<<5&4294967295|y>>>27),y=w+(E^S&(v^E))+R[2]+4243563512&4294967295,w=v+(y<<9&4294967295|y>>>23),y=S+(v^E&(w^v))+R[7]+1735328473&4294967295,S=w+(y<<14&4294967295|y>>>18),y=E+(w^v&(S^w))+R[12]+2368359562&4294967295,E=S+(y<<20&4294967295|y>>>12),y=v+(E^S^w)+R[5]+4294588738&4294967295,v=E+(y<<4&4294967295|y>>>28),y=w+(v^E^S)+R[8]+2272392833&4294967295,w=v+(y<<11&4294967295|y>>>21),y=S+(w^v^E)+R[11]+1839030562&4294967295,S=w+(y<<16&4294967295|y>>>16),y=E+(S^w^v)+R[14]+4259657740&4294967295,E=S+(y<<23&4294967295|y>>>9),y=v+(E^S^w)+R[1]+2763975236&4294967295,v=E+(y<<4&4294967295|y>>>28),y=w+(v^E^S)+R[4]+1272893353&4294967295,w=v+(y<<11&4294967295|y>>>21),y=S+(w^v^E)+R[7]+4139469664&4294967295,S=w+(y<<16&4294967295|y>>>16),y=E+(S^w^v)+R[10]+3200236656&4294967295,E=S+(y<<23&4294967295|y>>>9),y=v+(E^S^w)+R[13]+681279174&4294967295,v=E+(y<<4&4294967295|y>>>28),y=w+(v^E^S)+R[0]+3936430074&4294967295,w=v+(y<<11&4294967295|y>>>21),y=S+(w^v^E)+R[3]+3572445317&4294967295,S=w+(y<<16&4294967295|y>>>16),y=E+(S^w^v)+R[6]+76029189&4294967295,E=S+(y<<23&4294967295|y>>>9),y=v+(E^S^w)+R[9]+3654602809&4294967295,v=E+(y<<4&4294967295|y>>>28),y=w+(v^E^S)+R[12]+3873151461&4294967295,w=v+(y<<11&4294967295|y>>>21),y=S+(w^v^E)+R[15]+530742520&4294967295,S=w+(y<<16&4294967295|y>>>16),y=E+(S^w^v)+R[2]+3299628645&4294967295,E=S+(y<<23&4294967295|y>>>9),y=v+(S^(E|~w))+R[0]+4096336452&4294967295,v=E+(y<<6&4294967295|y>>>26),y=w+(E^(v|~S))+R[7]+1126891415&4294967295,w=v+(y<<10&4294967295|y>>>22),y=S+(v^(w|~E))+R[14]+2878612391&4294967295,S=w+(y<<15&4294967295|y>>>17),y=E+(w^(S|~v))+R[5]+4237533241&4294967295,E=S+(y<<21&4294967295|y>>>11),y=v+(S^(E|~w))+R[12]+1700485571&4294967295,v=E+(y<<6&4294967295|y>>>26),y=w+(E^(v|~S))+R[3]+2399980690&4294967295,w=v+(y<<10&4294967295|y>>>22),y=S+(v^(w|~E))+R[10]+4293915773&4294967295,S=w+(y<<15&4294967295|y>>>17),y=E+(w^(S|~v))+R[1]+2240044497&4294967295,E=S+(y<<21&4294967295|y>>>11),y=v+(S^(E|~w))+R[8]+1873313359&4294967295,v=E+(y<<6&4294967295|y>>>26),y=w+(E^(v|~S))+R[15]+4264355552&4294967295,w=v+(y<<10&4294967295|y>>>22),y=S+(v^(w|~E))+R[6]+2734768916&4294967295,S=w+(y<<15&4294967295|y>>>17),y=E+(w^(S|~v))+R[13]+1309151649&4294967295,E=S+(y<<21&4294967295|y>>>11),y=v+(S^(E|~w))+R[4]+4149444226&4294967295,v=E+(y<<6&4294967295|y>>>26),y=w+(E^(v|~S))+R[11]+3174756917&4294967295,w=v+(y<<10&4294967295|y>>>22),y=S+(v^(w|~E))+R[2]+718787259&4294967295,S=w+(y<<15&4294967295|y>>>17),y=E+(w^(S|~v))+R[9]+3951481745&4294967295,b.g[0]=b.g[0]+v&4294967295,b.g[1]=b.g[1]+(S+(y<<21&4294967295|y>>>11))&4294967295,b.g[2]=b.g[2]+S&4294967295,b.g[3]=b.g[3]+w&4294967295}r.prototype.v=function(b,v){v===void 0&&(v=b.length);const E=v-this.blockSize,R=this.C;let S=this.h,w=0;for(;w<v;){if(S==0)for(;w<=E;)s(this,b,w),w+=this.blockSize;if(typeof b=="string"){for(;w<v;)if(R[S++]=b.charCodeAt(w++),S==this.blockSize){s(this,R),S=0;break}}else for(;w<v;)if(R[S++]=b[w++],S==this.blockSize){s(this,R),S=0;break}}this.h=S,this.o+=v},r.prototype.A=function(){var b=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);b[0]=128;for(var v=1;v<b.length-8;++v)b[v]=0;v=this.o*8;for(var E=b.length-8;E<b.length;++E)b[E]=v&255,v/=256;for(this.v(b),b=Array(16),v=0,E=0;E<4;++E)for(let R=0;R<32;R+=8)b[v++]=this.g[E]>>>R&255;return b};function i(b,v){var E=c;return Object.prototype.hasOwnProperty.call(E,b)?E[b]:E[b]=v(b)}function o(b,v){this.h=v;const E=[];let R=!0;for(let S=b.length-1;S>=0;S--){const w=b[S]|0;R&&w==v||(E[S]=w,R=!1)}this.g=E}var c={};function u(b){return-128<=b&&b<128?i(b,function(v){return new o([v|0],v<0?-1:0)}):new o([b|0],b<0?-1:0)}function l(b){if(isNaN(b)||!isFinite(b))return p;if(b<0)return I(l(-b));const v=[];let E=1;for(let R=0;b>=E;R++)v[R]=b/E|0,E*=4294967296;return new o(v,0)}function d(b,v){if(b.length==0)throw Error("number format error: empty string");if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(b.charAt(0)=="-")return I(d(b.substring(1),v));if(b.indexOf("-")>=0)throw Error('number format error: interior "-" character');const E=l(Math.pow(v,8));let R=p;for(let w=0;w<b.length;w+=8){var S=Math.min(8,b.length-w);const y=parseInt(b.substring(w,w+S),v);S<8?(S=l(Math.pow(v,S)),R=R.j(S).add(l(y))):(R=R.j(E),R=R.add(l(y)))}return R}var p=u(0),m=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-I(this).m();let b=0,v=1;for(let E=0;E<this.g.length;E++){const R=this.i(E);b+=(R>=0?R:4294967296+R)*v,v*=4294967296}return b},t.toString=function(b){if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(D(this))return"0";if(P(this))return"-"+I(this).toString(b);const v=l(Math.pow(b,6));var E=this;let R="";for(;;){const S=G(E,v).g;E=L(E,S.j(v));let w=((E.g.length>0?E.g[0]:E.h)>>>0).toString(b);if(E=S,D(E))return w+R;for(;w.length<6;)w="0"+w;R=w+R}},t.i=function(b){return b<0?0:b<this.g.length?this.g[b]:this.h};function D(b){if(b.h!=0)return!1;for(let v=0;v<b.g.length;v++)if(b.g[v]!=0)return!1;return!0}function P(b){return b.h==-1}t.l=function(b){return b=L(this,b),P(b)?-1:D(b)?0:1};function I(b){const v=b.g.length,E=[];for(let R=0;R<v;R++)E[R]=~b.g[R];return new o(E,~b.h).add(m)}t.abs=function(){return P(this)?I(this):this},t.add=function(b){const v=Math.max(this.g.length,b.g.length),E=[];let R=0;for(let S=0;S<=v;S++){let w=R+(this.i(S)&65535)+(b.i(S)&65535),y=(w>>>16)+(this.i(S)>>>16)+(b.i(S)>>>16);R=y>>>16,w&=65535,y&=65535,E[S]=y<<16|w}return new o(E,E[E.length-1]&-2147483648?-1:0)};function L(b,v){return b.add(I(v))}t.j=function(b){if(D(this)||D(b))return p;if(P(this))return P(b)?I(this).j(I(b)):I(I(this).j(b));if(P(b))return I(this.j(I(b)));if(this.l(_)<0&&b.l(_)<0)return l(this.m()*b.m());const v=this.g.length+b.g.length,E=[];for(var R=0;R<2*v;R++)E[R]=0;for(R=0;R<this.g.length;R++)for(let S=0;S<b.g.length;S++){const w=this.i(R)>>>16,y=this.i(R)&65535,$=b.i(S)>>>16,oe=b.i(S)&65535;E[2*R+2*S]+=y*oe,C(E,2*R+2*S),E[2*R+2*S+1]+=w*oe,C(E,2*R+2*S+1),E[2*R+2*S+1]+=y*$,C(E,2*R+2*S+1),E[2*R+2*S+2]+=w*$,C(E,2*R+2*S+2)}for(b=0;b<v;b++)E[b]=E[2*b+1]<<16|E[2*b];for(b=v;b<2*v;b++)E[b]=0;return new o(E,0)};function C(b,v){for(;(b[v]&65535)!=b[v];)b[v+1]+=b[v]>>>16,b[v]&=65535,v++}function z(b,v){this.g=b,this.h=v}function G(b,v){if(D(v))throw Error("division by zero");if(D(b))return new z(p,p);if(P(b))return v=G(I(b),v),new z(I(v.g),I(v.h));if(P(v))return v=G(b,I(v)),new z(I(v.g),v.h);if(b.g.length>30){if(P(b)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var E=m,R=v;R.l(b)<=0;)E=H(E),R=H(R);var S=Y(E,1),w=Y(R,1);for(R=Y(R,2),E=Y(E,2);!D(R);){var y=w.add(R);y.l(b)<=0&&(S=S.add(E),w=y),R=Y(R,1),E=Y(E,1)}return v=L(b,S.j(v)),new z(S,v)}for(S=p;b.l(v)>=0;){for(E=Math.max(1,Math.floor(b.m()/v.m())),R=Math.ceil(Math.log(E)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),w=l(E),y=w.j(v);P(y)||y.l(b)>0;)E-=R,w=l(E),y=w.j(v);D(w)&&(w=m),S=S.add(w),b=L(b,y)}return new z(S,b)}t.B=function(b){return G(this,b).h},t.and=function(b){const v=Math.max(this.g.length,b.g.length),E=[];for(let R=0;R<v;R++)E[R]=this.i(R)&b.i(R);return new o(E,this.h&b.h)},t.or=function(b){const v=Math.max(this.g.length,b.g.length),E=[];for(let R=0;R<v;R++)E[R]=this.i(R)|b.i(R);return new o(E,this.h|b.h)},t.xor=function(b){const v=Math.max(this.g.length,b.g.length),E=[];for(let R=0;R<v;R++)E[R]=this.i(R)^b.i(R);return new o(E,this.h^b.h)};function H(b){const v=b.g.length+1,E=[];for(let R=0;R<v;R++)E[R]=b.i(R)<<1|b.i(R-1)>>>31;return new o(E,b.h)}function Y(b,v){const E=v>>5;v%=32;const R=b.g.length-E,S=[];for(let w=0;w<R;w++)S[w]=v>0?b.i(w+E)>>>v|b.i(w+E+1)<<32-v:b.i(w+E);return new o(S,b.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,qp=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=l,o.fromString=d,Cn=o}).apply(typeof Zh<"u"?Zh:typeof self<"u"?self:typeof window<"u"?window:{});var Fi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wp,Ds,Hp,Ji,fc,Gp,Kp,Zp;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fi=="object"&&Fi];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var x=a[g];if(!(x in f))break e;f=f[x]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}s("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(a){return a||function(h){var f=[],g;for(g in h)Object.prototype.hasOwnProperty.call(h,g)&&f.push([g,h[g]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function c(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function u(a,h,f){return a.call.apply(a.bind,arguments)}function l(a,h,f){return l=u,l.apply(null,arguments)}function d(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function p(a,h){function f(){}f.prototype=h.prototype,a.Z=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(g,x,V){for(var B=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)B[ce-2]=arguments[ce];return h.prototype[x].apply(g,B)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function _(a){const h=a.length;if(h>0){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function D(a,h){for(let g=1;g<arguments.length;g++){const x=arguments[g];var f=typeof x;if(f=f!="object"?f:x?Array.isArray(x)?"array":f:"null",f=="array"||f=="object"&&typeof x.length=="number"){f=a.length||0;const V=x.length||0;a.length=f+V;for(let B=0;B<V;B++)a[f+B]=x[B]}else a.push(x)}}class P{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function I(a){o.setTimeout(()=>{throw a},0)}function L(){var a=b;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class C{constructor(){this.h=this.g=null}add(h,f){const g=z.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var z=new P(()=>new G,a=>a.reset());class G{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let H,Y=!1,b=new C,v=()=>{const a=Promise.resolve(void 0);H=()=>{a.then(E)}};function E(){for(var a;a=L();){try{a.h.call(a.g)}catch(f){I(f)}var h=z;h.j(a),h.h<100&&(h.h++,a.next=h.g,h.g=a)}Y=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function S(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}S.prototype.h=function(){this.defaultPrevented=!0};var w=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,h),o.removeEventListener("test",f,h)}catch{}return a}();function y(a){return/^[\s\xa0]*$/.test(a)}function $(a,h){S.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,h)}p($,S),$.prototype.init=function(a,h){const f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget,h||(f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement)),this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&$.Z.h.call(this)},$.prototype.h=function(){$.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var oe="closure_listenable_"+(Math.random()*1e6|0),ye=0;function Pe(a,h,f,g,x){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=x,this.key=++ye,this.da=this.fa=!1}function De(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function be(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function bt(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function Qe(a){const h={};for(const f in a)h[f]=a[f];return h}const Dt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ot(a,h){let f,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(f in g)a[f]=g[f];for(let V=0;V<Dt.length;V++)f=Dt[V],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function Vt(a){this.src=a,this.g={},this.h=0}Vt.prototype.add=function(a,h,f,g,x){const V=a.toString();a=this.g[V],a||(a=this.g[V]=[],this.h++);const B=un(a,h,g,x);return B>-1?(h=a[B],f||(h.fa=!1)):(h=new Pe(h,this.src,V,!!g,x),h.fa=f,a.push(h)),h};function _r(a,h){const f=h.type;if(f in a.g){var g=a.g[f],x=Array.prototype.indexOf.call(g,h,void 0),V;(V=x>=0)&&Array.prototype.splice.call(g,x,1),V&&(De(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function un(a,h,f,g){for(let x=0;x<a.length;++x){const V=a[x];if(!V.da&&V.listener==h&&V.capture==!!f&&V.ha==g)return x}return-1}var rs="closure_lm_"+(Math.random()*1e6|0),yr={};function yi(a,h,f,g,x){if(Array.isArray(h)){for(let V=0;V<h.length;V++)yi(a,h[V],f,g,x);return null}return f=os(f),a&&a[oe]?a.J(h,f,c(g)?!!g.capture:!1,x):ss(a,h,f,!1,g,x)}function ss(a,h,f,g,x,V){if(!h)throw Error("Invalid event type");const B=c(x)?!!x.capture:!!x;let ce=is(a);if(ce||(a[rs]=ce=new Vt(a)),f=ce.add(h,f,g,B,V),f.proxy)return f;if(g=vi(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)w||(x=B),x===void 0&&(x=!1),a.addEventListener(h.toString(),g,x);else if(a.attachEvent)a.attachEvent(Ei(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function vi(){function a(f){return h.call(a.src,a.listener,f)}const h=wi;return a}function vr(a,h,f,g,x){if(Array.isArray(h))for(var V=0;V<h.length;V++)vr(a,h[V],f,g,x);else g=c(g)?!!g.capture:!!g,f=os(f),a&&a[oe]?(a=a.i,V=String(h).toString(),V in a.g&&(h=a.g[V],f=un(h,f,g,x),f>-1&&(De(h[f]),Array.prototype.splice.call(h,f,1),h.length==0&&(delete a.g[V],a.h--)))):a&&(a=is(a))&&(h=a.g[h.toString()],a=-1,h&&(a=un(h,f,g,x)),(f=a>-1?h[a]:null)&&qn(f))}function qn(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[oe])_r(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(Ei(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=is(h))?(_r(f,a),f.h==0&&(f.src=null,h[rs]=null)):De(a)}}}function Ei(a){return a in yr?yr[a]:yr[a]="on"+a}function wi(a,h){if(a.da)a=!0;else{h=new $(h,this);const f=a.listener,g=a.ha||a.src;a.fa&&qn(a),a=f.call(g,h)}return a}function is(a){return a=a[rs],a instanceof Vt?a:null}var Er="__closure_events_fn_"+(Math.random()*1e9>>>0);function os(a){return typeof a=="function"?a:(a[Er]||(a[Er]=function(h){return a.handleEvent(h)}),a[Er])}function We(){R.call(this),this.i=new Vt(this),this.M=this,this.G=null}p(We,R),We.prototype[oe]=!0,We.prototype.removeEventListener=function(a,h,f,g){vr(this,a,h,f,g)};function Ye(a,h){var f,g=a.G;if(g)for(f=[];g;g=g.G)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new S(h,a);else if(h instanceof S)h.target=h.target||a;else{var x=h;h=new S(g,a),Ot(h,x)}x=!0;let V,B;if(f)for(B=f.length-1;B>=0;B--)V=h.g=f[B],x=as(V,g,!0,h)&&x;if(V=h.g=a,x=as(V,g,!0,h)&&x,x=as(V,g,!1,h)&&x,f)for(B=0;B<f.length;B++)V=h.g=f[B],x=as(V,g,!1,h)&&x}We.prototype.N=function(){if(We.Z.N.call(this),this.i){var a=this.i;for(const h in a.g){const f=a.g[h];for(let g=0;g<f.length;g++)De(f[g]);delete a.g[h],a.h--}}this.G=null},We.prototype.J=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},We.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function as(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();let x=!0;for(let V=0;V<h.length;++V){const B=h[V];if(B&&!B.da&&B.capture==f){const ce=B.listener,Fe=B.ha||B.src;B.fa&&_r(a.i,B),x=ce.call(Fe,g)!==!1&&x}}return x&&!g.defaultPrevented}function Ti(a,h){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=l(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(a,h||0)}function T(a){a.g=Ti(()=>{a.g=null,a.i&&(a.i=!1,T(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class k extends R{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:T(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function O(a){R.call(this),this.h=a,this.g={}}p(O,R);var W=[];function q(a){be(a.g,function(h,f){this.g.hasOwnProperty(f)&&qn(h)},a),a.g={}}O.prototype.N=function(){O.Z.N.call(this),q(this)},O.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var j=o.JSON.stringify,J=o.JSON.parse,ae=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function fe(){}function He(){}var st={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ge(){S.call(this,"d")}p(Ge,S);function cs(){S.call(this,"c")}p(cs,S);var It={},wr=null;function Tr(){return wr=wr||new We}It.Ia="serverreachability";function us(a){S.call(this,It.Ia,a)}p(us,S);function Wn(a){const h=Tr();Ye(h,new us(h))}It.STAT_EVENT="statevent";function ls(a,h){S.call(this,It.STAT_EVENT,a),this.stat=h}p(ls,S);function ut(a){const h=Tr();Ye(h,new ls(h,a))}It.Ja="timingevent";function Gu(a,h){S.call(this,It.Ja,a),this.size=h}p(Gu,S);function hs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},h)}function ds(){this.g=!0}ds.prototype.ua=function(){this.g=!1};function s_(a,h,f,g,x,V){a.info(function(){if(a.g)if(V){var B="",ce=V.split("&");for(let _e=0;_e<ce.length;_e++){var Fe=ce[_e].split("=");if(Fe.length>1){const Ke=Fe[0];Fe=Fe[1];const Mt=Ke.split("_");B=Mt.length>=2&&Mt[1]=="type"?B+(Ke+"="+Fe+"&"):B+(Ke+"=redacted&")}}}else B=null;else B=V;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+h+`
`+f+`
`+B})}function i_(a,h,f,g,x,V,B){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+h+`
`+f+`
`+V+" "+B})}function br(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+a_(a,f)+(g?" "+g:"")})}function o_(a,h){a.info(function(){return"TIMEOUT: "+h})}ds.prototype.info=function(){};function a_(a,h){if(!a.g)return h;if(!h)return null;try{const V=JSON.parse(h);if(V){for(a=0;a<V.length;a++)if(Array.isArray(V[a])){var f=V[a];if(!(f.length<2)){var g=f[1];if(Array.isArray(g)&&!(g.length<1)){var x=g[0];if(x!="noop"&&x!="stop"&&x!="close")for(let B=1;B<g.length;B++)g[B]=""}}}}return j(V)}catch{return h}}var bi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ku={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Zu;function ma(){}p(ma,fe),ma.prototype.g=function(){return new XMLHttpRequest},Zu=new ma;function fs(a){return encodeURIComponent(String(a))}function c_(a){var h=1;a=a.split(":");const f=[];for(;h>0&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function ln(a,h,f,g){this.j=a,this.i=h,this.l=f,this.S=g||1,this.V=new O(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Ju}function Ju(){this.i=null,this.g="",this.h=!1}var Qu={},ga={};function _a(a,h,f){a.M=1,a.A=Ai(Lt(h)),a.u=f,a.R=!0,Yu(a,null)}function Yu(a,h){a.F=Date.now(),Ii(a),a.B=Lt(a.A);var f=a.B,g=a.S;Array.isArray(g)||(g=[String(g)]),hl(f.i,"t",g),a.C=0,f=a.j.L,a.h=new Ju,a.g=Cl(a.j,f?h:null,!a.u),a.P>0&&(a.O=new k(l(a.Y,a,a.g),a.P)),h=a.V,f=a.g,g=a.ba;var x="readystatechange";Array.isArray(x)||(x&&(W[0]=x.toString()),x=W);for(let V=0;V<x.length;V++){const B=yi(f,x[V],g||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.J?Qe(a.J):{},a.u?(a.v||(a.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,h)):(a.v="GET",a.g.ea(a.B,a.v,null,h)),Wn(),s_(a.i,a.v,a.B,a.l,a.S,a.u)}ln.prototype.ba=function(a){a=a.target;const h=this.O;h&&fn(a)==3?h.j():this.Y(a)},ln.prototype.Y=function(a){try{if(a==this.g)e:{const ce=fn(this.g),Fe=this.g.ya(),_e=this.g.ca();if(!(ce<3)&&(ce!=3||this.g&&(this.h.h||this.g.la()||yl(this.g)))){this.K||ce!=4||Fe==7||(Fe==8||_e<=0?Wn(3):Wn(2)),ya(this);var h=this.g.ca();this.X=h;var f=u_(this);if(this.o=h==200,i_(this.i,this.v,this.B,this.l,this.S,ce,h),this.o){if(this.U&&!this.L){t:{if(this.g){var g,x=this.g;if((g=x.g?x.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(g)){var V=g;break t}}V=null}if(a=V)br(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,va(this,a);else{this.o=!1,this.m=3,ut(12),Hn(this),ps(this);break e}}if(this.R){a=!0;let Ke;for(;!this.K&&this.C<f.length;)if(Ke=l_(this,f),Ke==ga){ce==4&&(this.m=4,ut(14),a=!1),br(this.i,this.l,null,"[Incomplete Response]");break}else if(Ke==Qu){this.m=4,ut(15),br(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else br(this.i,this.l,Ke,null),va(this,Ke);if(Xu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ce!=4||f.length!=0||this.h.h||(this.m=1,ut(16),a=!1),this.o=this.o&&a,!a)br(this.i,this.l,f,"[Invalid Chunked Response]"),Hn(this),ps(this);else if(f.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Ra(B),B.P=!0,ut(11))}}else br(this.i,this.l,f,null),va(this,f);ce==4&&Hn(this),this.o&&!this.K&&(ce==4?Al(this.j,this):(this.o=!1,Ii(this)))}else I_(this.g),h==400&&f.indexOf("Unknown SID")>0?(this.m=3,ut(12)):(this.m=0,ut(13)),Hn(this),ps(this)}}}catch{}finally{}};function u_(a){if(!Xu(a))return a.g.la();const h=yl(a.g);if(h==="")return"";let f="";const g=h.length,x=fn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Hn(a),ps(a),"";a.h.i=new o.TextDecoder}for(let V=0;V<g;V++)a.h.h=!0,f+=a.h.i.decode(h[V],{stream:!(x&&V==g-1)});return h.length=0,a.h.g+=f,a.C=0,a.h.g}function Xu(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function l_(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?ga:(f=Number(h.substring(f,g)),isNaN(f)?Qu:(g+=1,g+f>h.length?ga:(h=h.slice(g,g+f),a.C=g+f,h)))}ln.prototype.cancel=function(){this.K=!0,Hn(this)};function Ii(a){a.T=Date.now()+a.H,el(a,a.H)}function el(a,h){if(a.D!=null)throw Error("WatchDog timer not null");a.D=hs(l(a.aa,a),h)}function ya(a){a.D&&(o.clearTimeout(a.D),a.D=null)}ln.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(o_(this.i,this.B),this.M!=2&&(Wn(),ut(17)),Hn(this),this.m=2,ps(this)):el(this,this.T-a)};function ps(a){a.j.I==0||a.K||Al(a.j,a)}function Hn(a){ya(a);var h=a.O;h&&typeof h.dispose=="function"&&h.dispose(),a.O=null,q(a.V),a.g&&(h=a.g,a.g=null,h.abort(),h.dispose())}function va(a,h){try{var f=a.j;if(f.I!=0&&(f.g==a||Ea(f.h,a))){if(!a.L&&Ea(f.h,a)&&f.I==3){try{var g=f.Ba.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)ki(f),Pi(f);else break e;Sa(f),ut(18)}}else f.xa=x[1],0<f.xa-f.K&&x[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=hs(l(f.Va,f),6e3));rl(f.h)<=1&&f.ta&&(f.ta=void 0)}else Kn(f,11)}else if((a.L||f.g==a)&&ki(f),!y(h))for(x=f.Ba.g.parse(h),h=0;h<x.length;h++){let _e=x[h];const Ke=_e[0];if(!(Ke<=f.K))if(f.K=Ke,_e=_e[1],f.I==2)if(_e[0]=="c"){f.M=_e[1],f.ba=_e[2];const Mt=_e[3];Mt!=null&&(f.ka=Mt,f.j.info("VER="+f.ka));const Zn=_e[4];Zn!=null&&(f.za=Zn,f.j.info("SVER="+f.za));const pn=_e[5];pn!=null&&typeof pn=="number"&&pn>0&&(g=1.5*pn,f.O=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const mn=a.g;if(mn){const Ni=mn.g?mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ni){var V=g.h;V.g||Ni.indexOf("spdy")==-1&&Ni.indexOf("quic")==-1&&Ni.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(wa(V,V.h),V.h=null))}if(g.G){const Pa=mn.g?mn.g.getResponseHeader("X-HTTP-Session-Id"):null;Pa&&(g.wa=Pa,ve(g.J,g.G,Pa))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),g=f;var B=a;if(g.na=Pl(g,g.L?g.ba:null,g.W),B.L){sl(g.h,B);var ce=B,Fe=g.O;Fe&&(ce.H=Fe),ce.D&&(ya(ce),Ii(ce)),g.g=B}else bl(g);f.i.length>0&&Ci(f)}else _e[0]!="stop"&&_e[0]!="close"||Kn(f,7);else f.I==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?Kn(f,7):Aa(f):_e[0]!="noop"&&f.l&&f.l.qa(_e),f.A=0)}}Wn(4)}catch{}}var h_=class{constructor(a,h){this.g=a,this.map=h}};function tl(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function nl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function rl(a){return a.h?1:a.g?a.g.size:0}function Ea(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function wa(a,h){a.g?a.g.add(h):a.h=h}function sl(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}tl.prototype.cancel=function(){if(this.i=il(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function il(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.G);return h}return _(a.i)}var ol=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function d_(a,h){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const g=a[f].indexOf("=");let x,V=null;g>=0?(x=a[f].substring(0,g),V=a[f].substring(g+1)):x=a[f],h(x,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function hn(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;a instanceof hn?(this.l=a.l,ms(this,a.j),this.o=a.o,this.g=a.g,gs(this,a.u),this.h=a.h,Ta(this,dl(a.i)),this.m=a.m):a&&(h=String(a).match(ol))?(this.l=!1,ms(this,h[1]||"",!0),this.o=_s(h[2]||""),this.g=_s(h[3]||"",!0),gs(this,h[4]),this.h=_s(h[5]||"",!0),Ta(this,h[6]||"",!0),this.m=_s(h[7]||"")):(this.l=!1,this.i=new vs(null,this.l))}hn.prototype.toString=function(){const a=[];var h=this.j;h&&a.push(ys(h,al,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ys(h,al,!0),"@"),a.push(fs(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(ys(f,f.charAt(0)=="/"?m_:p_,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",ys(f,__)),a.join("")},hn.prototype.resolve=function(a){const h=Lt(this);let f=!!a.j;f?ms(h,a.j):f=!!a.o,f?h.o=a.o:f=!!a.g,f?h.g=a.g:f=a.u!=null;var g=a.h;if(f)gs(h,a.u);else if(f=!!a.h){if(g.charAt(0)!="/")if(this.g&&!this.h)g="/"+g;else{var x=h.h.lastIndexOf("/");x!=-1&&(g=h.h.slice(0,x+1)+g)}if(x=g,x==".."||x==".")g="";else if(x.indexOf("./")!=-1||x.indexOf("/.")!=-1){g=x.lastIndexOf("/",0)==0,x=x.split("/");const V=[];for(let B=0;B<x.length;){const ce=x[B++];ce=="."?g&&B==x.length&&V.push(""):ce==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),g&&B==x.length&&V.push("")):(V.push(ce),g=!0)}g=V.join("/")}else g=x}return f?h.h=g:f=a.i.toString()!=="",f?Ta(h,dl(a.i)):f=!!a.m,f&&(h.m=a.m),h};function Lt(a){return new hn(a)}function ms(a,h,f){a.j=f?_s(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function gs(a,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);a.u=h}else a.u=null}function Ta(a,h,f){h instanceof vs?(a.i=h,y_(a.i,a.l)):(f||(h=ys(h,g_)),a.i=new vs(h,a.l))}function ve(a,h,f){a.i.set(h,f)}function Ai(a){return ve(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function _s(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ys(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,f_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function f_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var al=/[#\/\?@]/g,p_=/[#\?:]/g,m_=/[#\?]/g,g_=/[#\?@]/g,__=/#/g;function vs(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Gn(a){a.g||(a.g=new Map,a.h=0,a.i&&d_(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=vs.prototype,t.add=function(a,h){Gn(this),this.i=null,a=Ir(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function cl(a,h){Gn(a),h=Ir(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function ul(a,h){return Gn(a),h=Ir(a,h),a.g.has(h)}t.forEach=function(a,h){Gn(this),this.g.forEach(function(f,g){f.forEach(function(x){a.call(h,x,g,this)},this)},this)};function ll(a,h){Gn(a);let f=[];if(typeof h=="string")ul(a,h)&&(f=f.concat(a.g.get(Ir(a,h))));else for(a=Array.from(a.g.values()),h=0;h<a.length;h++)f=f.concat(a[h]);return f}t.set=function(a,h){return Gn(this),this.i=null,a=Ir(this,a),ul(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=ll(this,a),a.length>0?String(a[0]):h):h};function hl(a,h,f){cl(a,h),f.length>0&&(a.i=null,a.g.set(Ir(a,h),_(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(let g=0;g<h.length;g++){var f=h[g];const x=fs(f);f=ll(this,f);for(let V=0;V<f.length;V++){let B=x;f[V]!==""&&(B+="="+fs(f[V])),a.push(B)}}return this.i=a.join("&")};function dl(a){const h=new vs;return h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),h}function Ir(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function y_(a,h){h&&!a.j&&(Gn(a),a.i=null,a.g.forEach(function(f,g){const x=g.toLowerCase();g!=x&&(cl(this,g),hl(this,x,f))},a)),a.j=h}function v_(a,h){const f=new ds;if(o.Image){const g=new Image;g.onload=d(dn,f,"TestLoadImage: loaded",!0,h,g),g.onerror=d(dn,f,"TestLoadImage: error",!1,h,g),g.onabort=d(dn,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=d(dn,f,"TestLoadImage: timeout",!1,h,g),o.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function E_(a,h){const f=new ds,g=new AbortController,x=setTimeout(()=>{g.abort(),dn(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(V=>{clearTimeout(x),V.ok?dn(f,"TestPingServer: ok",!0,h):dn(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),dn(f,"TestPingServer: error",!1,h)})}function dn(a,h,f,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(f)}catch{}}function w_(){this.g=new ae}function ba(a){this.i=a.Sb||null,this.h=a.ab||!1}p(ba,fe),ba.prototype.g=function(){return new Si(this.i,this.h)};function Si(a,h){We.call(this),this.H=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}p(Si,We),t=Si.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=h,this.readyState=1,ws(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(h.body=a),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Es(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ws(this)),this.g&&(this.readyState=3,ws(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;fl(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function fl(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Es(this):ws(this),this.readyState==3&&fl(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,Es(this))},t.Na=function(a){this.g&&(this.response=a,Es(this))},t.ga=function(){this.g&&Es(this)};function Es(a){a.readyState=4,a.l=null,a.j=null,a.B=null,ws(a)}t.setRequestHeader=function(a,h){this.A.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function ws(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Si.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function pl(a){let h="";return be(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Ia(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=pl(f),typeof a=="string"?f!=null&&fs(f):ve(a,h,f))}function Ce(a){We.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}p(Ce,We);var T_=/^https?$/i,b_=["POST","PUT"];t=Ce.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Zu.g(),this.g.onreadystatechange=m(l(this.Ca,this));try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(V){ml(this,V);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)f.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const V of g.keys())f.set(V,g.get(V));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(V=>V.toLowerCase()=="content-type"),x=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(b_,h,void 0)>=0)||g||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,B]of f)this.g.setRequestHeader(V,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(V){ml(this,V)}};function ml(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.o=5,gl(a),Ri(a)}function gl(a){a.A||(a.A=!0,Ye(a,"complete"),Ye(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ye(this,"complete"),Ye(this,"abort"),Ri(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ri(this,!0)),Ce.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?_l(this):this.Xa())},t.Xa=function(){_l(this)};function _l(a){if(a.h&&typeof i<"u"){if(a.v&&fn(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ye(a,"readystatechange"),fn(a)==4){a.h=!1;try{const V=a.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=V===0){let B=String(a.D).match(ol)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),g=!T_.test(B?B.toLowerCase():"")}f=g}if(f)Ye(a,"complete"),Ye(a,"success");else{a.o=6;try{var x=fn(a)>2?a.g.statusText:""}catch{x=""}a.l=x+" ["+a.ca()+"]",gl(a)}}finally{Ri(a)}}}}function Ri(a,h){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,h||Ye(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function fn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return fn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),J(h)}};function yl(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function I_(a){const h={};a=(a.g&&fn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(y(a[g]))continue;var f=c_(a[g]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const V=h[x]||[];h[x]=V,V.push(f)}bt(h,function(g){return g.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ts(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function vl(a){this.za=0,this.i=[],this.j=new ds,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ts("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ts("baseRetryDelayMs",5e3,a),this.Za=Ts("retryDelaySeedMs",1e4,a),this.Ta=Ts("forwardChannelMaxRetries",2,a),this.va=Ts("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new tl(a&&a.concurrentRequestLimit),this.Ba=new w_,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=vl.prototype,t.ka=8,t.I=1,t.connect=function(a,h,f,g){ut(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.J=Pl(this,null,this.W),Ci(this)};function Aa(a){if(El(a),a.I==3){var h=a.V++,f=Lt(a.J);if(ve(f,"SID",a.M),ve(f,"RID",h),ve(f,"TYPE","terminate"),bs(a,f),h=new ln(a,a.j,h),h.M=2,h.A=Ai(Lt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=h.A,f=!0),f||(h.g=Cl(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Ii(h)}Rl(a)}function Pi(a){a.g&&(Ra(a),a.g.cancel(),a.g=null)}function El(a){Pi(a),a.v&&(o.clearTimeout(a.v),a.v=null),ki(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Ci(a){if(!nl(a.h)&&!a.m){a.m=!0;var h=a.Ea;H||v(),Y||(H(),Y=!0),b.add(h,a),a.D=0}}function A_(a,h){return rl(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=h.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=hs(l(a.Ea,a,h),Sl(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const x=new ln(this,this.j,a);let V=this.o;if(this.U&&(V?(V=Qe(V),Ot(V,this.U)):V=this.U),this.u!==null||this.R||(x.J=V,V=null),this.S)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,h>4096){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Tl(this,x,h),f=Lt(this.J),ve(f,"RID",a),ve(f,"CVER",22),this.G&&ve(f,"X-HTTP-Session-Id",this.G),bs(this,f),V&&(this.R?h="headers="+fs(pl(V))+"&"+h:this.u&&Ia(f,this.u,V)),wa(this.h,x),this.Ra&&ve(f,"TYPE","init"),this.S?(ve(f,"$req",h),ve(f,"SID","null"),x.U=!0,_a(x,f,null)):_a(x,f,h),this.I=2}}else this.I==3&&(a?wl(this,a):this.i.length==0||nl(this.h)||wl(this))};function wl(a,h){var f;h?f=h.l:f=a.V++;const g=Lt(a.J);ve(g,"SID",a.M),ve(g,"RID",f),ve(g,"AID",a.K),bs(a,g),a.u&&a.o&&Ia(g,a.u,a.o),f=new ln(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),h&&(a.i=h.G.concat(a.i)),h=Tl(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),wa(a.h,f),_a(f,g,h)}function bs(a,h){a.H&&be(a.H,function(f,g){ve(h,g,f)}),a.l&&be({},function(f,g){ve(h,g,f)})}function Tl(a,h,f){f=Math.min(a.i.length,f);const g=a.l?l(a.l.Ka,a.l,a):null;e:{var x=a.i;let ce=-1;for(;;){const Fe=["count="+f];ce==-1?f>0?(ce=x[0].g,Fe.push("ofs="+ce)):ce=0:Fe.push("ofs="+ce);let _e=!0;for(let Ke=0;Ke<f;Ke++){var V=x[Ke].g;const Mt=x[Ke].map;if(V-=ce,V<0)ce=Math.max(0,x[Ke].g-100),_e=!1;else try{V="req"+V+"_"||"";try{var B=Mt instanceof Map?Mt:Object.entries(Mt);for(const[Zn,pn]of B){let mn=pn;c(pn)&&(mn=j(pn)),Fe.push(V+Zn+"="+encodeURIComponent(mn))}}catch(Zn){throw Fe.push(V+"type="+encodeURIComponent("_badmap")),Zn}}catch{g&&g(Mt)}}if(_e){B=Fe.join("&");break e}}B=void 0}return a=a.i.splice(0,f),h.G=a,B}function bl(a){if(!a.g&&!a.v){a.Y=1;var h=a.Da;H||v(),Y||(H(),Y=!0),b.add(h,a),a.A=0}}function Sa(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=hs(l(a.Da,a),Sl(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,Il(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=hs(l(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ut(10),Pi(this),Il(this))};function Ra(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Il(a){a.g=new ln(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var h=Lt(a.na);ve(h,"RID","rpc"),ve(h,"SID",a.M),ve(h,"AID",a.K),ve(h,"CI",a.F?"0":"1"),!a.F&&a.ia&&ve(h,"TO",a.ia),ve(h,"TYPE","xmlhttp"),bs(a,h),a.u&&a.o&&Ia(h,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Ai(Lt(h)),f.u=null,f.R=!0,Yu(f,a)}t.Va=function(){this.C!=null&&(this.C=null,Pi(this),Sa(this),ut(19))};function ki(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Al(a,h){var f=null;if(a.g==h){ki(a),Ra(a),a.g=null;var g=2}else if(Ea(a.h,h))f=h.G,sl(a.h,h),g=1;else return;if(a.I!=0){if(h.o)if(g==1){f=h.u?h.u.length:0,h=Date.now()-h.F;var x=a.D;g=Tr(),Ye(g,new Gu(g,f)),Ci(a)}else bl(a);else if(x=h.m,x==3||x==0&&h.X>0||!(g==1&&A_(a,h)||g==2&&Sa(a)))switch(f&&f.length>0&&(h=a.h,h.i=h.i.concat(f)),x){case 1:Kn(a,5);break;case 4:Kn(a,10);break;case 3:Kn(a,6);break;default:Kn(a,2)}}}function Sl(a,h){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*h}function Kn(a,h){if(a.j.info("Error code "+h),h==2){var f=l(a.bb,a),g=a.Ua;const x=!g;g=new hn(g||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||ms(g,"https"),Ai(g),x?v_(g.toString(),f):E_(g.toString(),f)}else ut(2);a.I=0,a.l&&a.l.pa(h),Rl(a),El(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ut(2)):(this.j.info("Failed to ping google.com"),ut(1))};function Rl(a){if(a.I=0,a.ja=[],a.l){const h=il(a.h);(h.length!=0||a.i.length!=0)&&(D(a.ja,h),D(a.ja,a.i),a.h.i.length=0,_(a.i),a.i.length=0),a.l.oa()}}function Pl(a,h,f){var g=f instanceof hn?Lt(f):new hn(f);if(g.g!="")h&&(g.g=h+"."+g.g),gs(g,g.u);else{var x=o.location;g=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;const V=new hn(null);g&&ms(V,g),h&&(V.g=h),x&&gs(V,x),f&&(V.h=f),g=V}return f=a.G,h=a.wa,f&&h&&ve(g,f,h),ve(g,"VER",a.ka),bs(a,g),g}function Cl(a,h,f){if(h&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Aa&&!a.ma?new Ce(new ba({ab:f})):new Ce(a.ma),h.Fa(a.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function kl(){}t=kl.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function xi(){}xi.prototype.g=function(a,h){return new mt(a,h)};function mt(a,h){We.call(this),this.g=new vl(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(a?a["X-WebChannel-Client-Profile"]=h.sa:a={"X-WebChannel-Client-Profile":h.sa}),this.g.U=a,(a=h&&h.Qb)&&!y(a)&&(this.g.u=a),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!y(h)&&(this.g.G=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ar(this)}p(mt,We),mt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},mt.prototype.close=function(){Aa(this.g)},mt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=j(a),a=f);h.i.push(new h_(h.Ya++,a)),h.I==3&&Ci(h)},mt.prototype.N=function(){this.g.l=null,delete this.j,Aa(this.g),delete this.g,mt.Z.N.call(this)};function xl(a){Ge.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}p(xl,Ge);function Nl(){cs.call(this),this.status=1}p(Nl,cs);function Ar(a){this.g=a}p(Ar,kl),Ar.prototype.ra=function(){Ye(this.g,"a")},Ar.prototype.qa=function(a){Ye(this.g,new xl(a))},Ar.prototype.pa=function(a){Ye(this.g,new Nl)},Ar.prototype.oa=function(){Ye(this.g,"b")},xi.prototype.createWebChannel=xi.prototype.g,mt.prototype.send=mt.prototype.o,mt.prototype.open=mt.prototype.m,mt.prototype.close=mt.prototype.close,Zp=function(){return new xi},Kp=function(){return Tr()},Gp=It,fc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},bi.NO_ERROR=0,bi.TIMEOUT=8,bi.HTTP_ERROR=6,Ji=bi,Ku.COMPLETE="complete",Hp=Ku,He.EventType=st,st.OPEN="a",st.CLOSE="b",st.ERROR="c",st.MESSAGE="d",We.prototype.listen=We.prototype.J,Ds=He,Ce.prototype.listenOnce=Ce.prototype.K,Ce.prototype.getLastError=Ce.prototype.Ha,Ce.prototype.getLastErrorCode=Ce.prototype.ya,Ce.prototype.getStatus=Ce.prototype.ca,Ce.prototype.getResponseJson=Ce.prototype.La,Ce.prototype.getResponseText=Ce.prototype.la,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Fa,Wp=Ce}).apply(typeof Fi<"u"?Fi:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xr="12.12.0";function t0(t){Xr=t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=new Xc("@firebase/firestore");function Pr(){return or.logLevel}function K(t,...e){if(or.logLevel<=ue.DEBUG){const n=e.map(du);or.debug(`Firestore (${Xr}): ${t}`,...n)}}function on(t,...e){if(or.logLevel<=ue.ERROR){const n=e.map(du);or.error(`Firestore (${Xr}): ${t}`,...n)}}function ar(t,...e){if(or.logLevel<=ue.WARN){const n=e.map(du);or.warn(`Firestore (${Xr}): ${t}`,...n)}}function du(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Jp(t,r,n)}function Jp(t,e,n){let r=`FIRESTORE (${Xr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw on(r),new Error(r)}function pe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Jp(e,s,r)}function se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class n0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class r0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class s0{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){pe(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pe(typeof r.accessToken=="string",31837,{l:r}),new Qp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class i0{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class o0{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new i0(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Jh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class a0{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){pe(this.o===void 0,3512);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Jh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Jh(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=c0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function le(t,e){return t<e?-1:t>e?1:0}function pc(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const s=t.charAt(r),i=e.charAt(r);if(s!==i)return ja(s)===ja(i)?le(s,i):ja(s)?1:-1}return le(t.length,e.length)}const u0=55296,l0=57343;function ja(t){const e=t.charCodeAt(0);return e>=u0&&e<=l0}function Br(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="__name__";class Ut{constructor(e,n,r){n===void 0?n=0:n>e.length&&te(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&te(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ut.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ut?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Ut.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return le(e.length,n.length)}static compareSegments(e,n){const r=Ut.isNumericId(e),s=Ut.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Ut.extractNumericId(e).compare(Ut.extractNumericId(n)):pc(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Cn.fromString(e.substring(4,e.length-2))}}class we extends Ut{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new we(n)}static emptyPath(){return new we([])}}const h0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Ut{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return h0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qh}static keyField(){return new tt([Qh])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Q(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Q(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new Q(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(we.fromString(e))}static fromName(e){return new X(we.fromString(e).popFirst(5))}static empty(){return new X(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new we(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(t,e,n){if(!n)throw new Q(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function d0(t,e,n,r){if(e===!0&&r===!0)throw new Q(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Yh(t){if(!X.isDocumentKey(t))throw new Q(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xh(t){if(X.isDocumentKey(t))throw new Q(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Xp(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function pu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":te(12329,{type:typeof t})}function xn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Q(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pu(t);throw new Q(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t,e){const n={typeString:t};return e&&(n.value=e),n}function fi(t,e){if(!Xp(t))throw new Q(U.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new Q(U.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed=-62135596800,td=1e6;class Te{static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*td);return new Te(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Q(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ed)throw new Q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/td}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(fi(e,Te._jsonSchema))return new Te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ed;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Te._jsonSchemaVersion="firestore/timestamp/1.0",Te._jsonSchema={type:Le("string",Te._jsonSchemaVersion),seconds:Le("number"),nanoseconds:Le("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{static fromTimestamp(e){return new re(e)}static min(){return new re(new Te(0,0))}static max(){return new re(new Te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=-1;function f0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new Te(n+1,0):new Te(n,r));return new Dn(s,X.empty(),e)}function p0(t){return new Dn(t.readTime,t.key,Qs)}class Dn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Dn(re.min(),X.empty(),Qs)}static max(){return new Dn(re.max(),X.empty(),Qs)}}function m0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:le(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==g0)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let u=0;u<i;u++){const l=u;n(e[l]).next(d=>{o[l]=d,++c,c===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function y0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ts(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Zo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=-1;function Jo(t){return t==null}function vo(t){return t===0&&1/t==-1/0}function v0(t){return typeof t=="number"&&Number.isInteger(t)&&!vo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="";function E0(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=nd(e)),e=w0(t.get(n),e);return nd(e)}function w0(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case em:n+="";break;default:n+=i}}return n}function nd(t){return t+em+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Bn(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function tm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ui(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ui(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ui(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ui(this.root,e,this.comparator,!0)}}class Ui{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw te(27949);return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw te(57766)}get value(){throw te(16141)}get color(){throw te(16727)}get left(){throw te(29726)}get right(){throw te(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sd(this.data.getIterator())}getIteratorFrom(e){return new sd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof $e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new $e(this.comparator);return n.data=e,n}}class sd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Ct([])}unionWith(e){let n=new $e(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ct(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Br(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new nm("Invalid base64 string: "+i):i}}(e);return new rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const T0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function On(t){if(pe(!!t,39018),typeof t=="string"){let e=0;const n=T0.exec(t);if(pe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(t.seconds),nanos:xe(t.nanos)}}function xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vn(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="server_timestamp",sm="__type__",im="__previous_value__",om="__local_write_time__";function gu(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[sm])==null?void 0:r.stringValue)===rm}function Qo(t){const e=t.mapValue.fields[im];return gu(e)?Qo(e):e}function Ys(t){const e=On(t.mapValue.fields[om].timestampValue);return new Te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n,r,s,i,o,c,u,l,d,p){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=l,this.isUsingEmulator=d,this.apiKey=p}}const Eo="(default)";class Xs{constructor(e,n){this.projectId=e,this.database=n||Eo}static empty(){return new Xs("","")}get isDefaultDatabase(){return this.database===Eo}isEqual(e){return e instanceof Xs&&e.projectId===this.projectId&&e.database===this.database}}function I0(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Q(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xs(t.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const am="__type__",A0="__max__",zi={mapValue:{}},cm="__vector__",wo="value";function Ln(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gu(t)?4:R0(t)?9007199254740991:S0(t)?10:11:te(28295,{value:t})}function Wt(t,e){if(t===e)return!0;const n=Ln(t);if(n!==Ln(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ys(t).isEqual(Ys(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=On(s.timestampValue),c=On(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Vn(s.bytesValue).isEqual(Vn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return xe(s.geoPointValue.latitude)===xe(i.geoPointValue.latitude)&&xe(s.geoPointValue.longitude)===xe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return xe(s.integerValue)===xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=xe(s.doubleValue),c=xe(i.doubleValue);return o===c?vo(o)===vo(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return Br(t.arrayValue.values||[],e.arrayValue.values||[],Wt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(rd(o)!==rd(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!Wt(o[u],c[u])))return!1;return!0}(t,e);default:return te(52216,{left:t})}}function ei(t,e){return(t.values||[]).find(n=>Wt(n,e))!==void 0}function qr(t,e){if(t===e)return 0;const n=Ln(t),r=Ln(e);if(n!==r)return le(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return le(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=xe(i.integerValue||i.doubleValue),u=xe(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(t,e);case 3:return id(t.timestampValue,e.timestampValue);case 4:return id(Ys(t),Ys(e));case 5:return pc(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Vn(i),u=Vn(o);return c.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),u=o.split("/");for(let l=0;l<c.length&&l<u.length;l++){const d=le(c[l],u[l]);if(d!==0)return d}return le(c.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=le(xe(i.latitude),xe(o.latitude));return c!==0?c:le(xe(i.longitude),xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return od(t.arrayValue,e.arrayValue);case 10:return function(i,o){var m,_,D,P;const c=i.fields||{},u=o.fields||{},l=(m=c[wo])==null?void 0:m.arrayValue,d=(_=u[wo])==null?void 0:_.arrayValue,p=le(((D=l==null?void 0:l.values)==null?void 0:D.length)||0,((P=d==null?void 0:d.values)==null?void 0:P.length)||0);return p!==0?p:od(l,d)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===zi.mapValue&&o===zi.mapValue)return 0;if(i===zi.mapValue)return 1;if(o===zi.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),l=o.fields||{},d=Object.keys(l);u.sort(),d.sort();for(let p=0;p<u.length&&p<d.length;++p){const m=pc(u[p],d[p]);if(m!==0)return m;const _=qr(c[u[p]],l[d[p]]);if(_!==0)return _}return le(u.length,d.length)}(t.mapValue,e.mapValue);default:throw te(23264,{he:n})}}function id(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return le(t,e);const n=On(t),r=On(e),s=le(n.seconds,r.seconds);return s!==0?s:le(n.nanos,r.nanos)}function od(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=qr(n[s],r[s]);if(i)return i}return le(n.length,r.length)}function Wr(t){return mc(t)}function mc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=On(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Vn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=mc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${mc(n.fields[o])}`;return s+"}"}(t.mapValue):te(61005,{value:t})}function Qi(t){switch(Ln(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Qo(t);return e?16+Qi(e):16;case 5:return 2*t.stringValue.length;case 6:return Vn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Qi(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Bn(r.fields,(i,o)=>{s+=i.length+Qi(o)}),s}(t.mapValue);default:throw te(13486,{value:t})}}function gc(t){return!!t&&"integerValue"in t}function _u(t){return!!t&&"arrayValue"in t}function ad(t){return!!t&&"nullValue"in t}function cd(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Yi(t){return!!t&&"mapValue"in t}function S0(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[am])==null?void 0:r.stringValue)===cm}function zs(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Bn(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=zs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zs(t.arrayValue.values[n]);return e}return{...t}}function R0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===A0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.value=e}static empty(){return new gt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Yi(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zs(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=zs(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Yi(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Yi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Bn(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new gt(zs(this.value))}}function um(t){const e=[];return Bn(t.fields,(n,r)=>{const s=new tt([n]);if(Yi(r)){const i=um(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new at(e,0,re.min(),re.min(),re.min(),gt.empty(),0)}static newFoundDocument(e,n,r,s){return new at(e,1,n,re.min(),r,s,0)}static newNoDocument(e,n){return new at(e,2,n,re.min(),re.min(),gt.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,re.min(),re.min(),gt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=gt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e,n){this.position=e,this.inclusive=n}}function ud(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=qr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ld(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n="asc"){this.field=e,this.dir=n}}function P0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{}class je extends lm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new k0(e,n,r):n==="array-contains"?new D0(e,r):n==="in"?new O0(e,r):n==="not-in"?new V0(e,r):n==="array-contains-any"?new L0(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new x0(e,r):new N0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(qr(n,this.value)):n!==null&&Ln(this.value)===Ln(n)&&this.matchesComparison(qr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends lm{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new Ht(e,n)}matches(e){return hm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function hm(t){return t.op==="and"}function dm(t){return C0(t)&&hm(t)}function C0(t){for(const e of t.filters)if(e instanceof Ht)return!1;return!0}function _c(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+Wr(t.value);if(dm(t))return t.filters.map(e=>_c(e)).join(",");{const e=t.filters.map(n=>_c(n)).join(",");return`${t.op}(${e})`}}function fm(t,e){return t instanceof je?function(r,s){return s instanceof je&&r.op===s.op&&r.field.isEqual(s.field)&&Wt(r.value,s.value)}(t,e):t instanceof Ht?function(r,s){return s instanceof Ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&fm(o,s.filters[c]),!0):!1}(t,e):void te(19439)}function pm(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${Wr(n.value)}`}(t):t instanceof Ht?function(n){return n.op.toString()+" {"+n.getFilters().map(pm).join(" ,")+"}"}(t):"Filter"}class k0 extends je{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class x0 extends je{constructor(e,n){super(e,"in",n),this.keys=mm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class N0 extends je{constructor(e,n){super(e,"not-in",n),this.keys=mm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mm(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class D0 extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return _u(n)&&ei(n.arrayValue,this.value)}}class O0 extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ei(this.value.arrayValue,n)}}class V0 extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(ei(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ei(this.value.arrayValue,n)}}class L0 extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!_u(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ei(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Te=null}}function hd(t,e=null,n=[],r=[],s=null,i=null,o=null){return new M0(t,e,n,r,s,i,o)}function yu(t){const e=se(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>_c(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Jo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Wr(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Wr(r)).join(",")),e.Te=n}return e.Te}function vu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!P0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ld(t.startAt,e.startAt)&&ld(t.endAt,e.endAt)}function yc(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=u,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function F0(t,e,n,r,s,i,o,c){return new Yo(t,e,n,r,s,i,o,c)}function Xo(t){return new Yo(t)}function dd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function U0(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function z0(t){return t.collectionGroup!==null}function js(t){const e=se(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new $e(tt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(l=>{l.isInequality()&&(c=c.add(l.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new bo(i,r))}),n.has(tt.keyField().canonicalString())||e.Ee.push(new bo(tt.keyField(),r))}return e.Ee}function $t(t){const e=se(t);return e.Ie||(e.Ie=j0(e,js(t))),e.Ie}function j0(t,e){if(t.limitType==="F")return hd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new bo(s.field,i)});const n=t.endAt?new To(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new To(t.startAt.position,t.startAt.inclusive):null;return hd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function vc(t,e,n){return new Yo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ea(t,e){return vu($t(t),$t(e))&&t.limitType===e.limitType}function gm(t){return`${yu($t(t))}|lt:${t.limitType}`}function Cr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>pm(s)).join(", ")}]`),Jo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Wr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Wr(s)).join(",")),`Target(${r})`}($t(t))}; limitType=${t.limitType})`}function ta(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of js(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,u){const l=ud(o,c,u);return o.inclusive?l<=0:l<0}(r.startAt,js(r),s)||r.endAt&&!function(o,c,u){const l=ud(o,c,u);return o.inclusive?l>=0:l>0}(r.endAt,js(r),s))}(t,e)}function $0(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _m(t){return(e,n)=>{let r=!1;for(const s of js(t)){const i=B0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function B0(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(i,o,c){const u=o.data.field(i),l=c.data.field(i);return u!==null&&l!==null?qr(u,l):te(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return te(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Bn(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return tm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q0=new Se(X.comparator);function an(){return q0}const ym=new Se(X.comparator);function Os(...t){let e=ym;for(const n of t)e=e.insert(n.key,n);return e}function vm(t){let e=ym;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Xn(){return $s()}function Em(){return $s()}function $s(){return new pr(t=>t.toString(),(t,e)=>t.isEqual(e))}const W0=new Se(X.comparator),H0=new $e(X.comparator);function he(...t){let e=H0;for(const n of t)e=e.add(n);return e}const G0=new $e(le);function K0(){return G0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:vo(e)?"-0":e}}function wm(t){return{integerValue:""+t}}function Z0(t,e){return v0(e)?wm(e):Eu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(){this._=void 0}}function J0(t,e,n){return t instanceof Io?function(s,i){const o={fields:{[sm]:{stringValue:rm},[om]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&gu(i)&&(i=Qo(i)),i&&(o.fields[im]=i),{mapValue:o}}(n,e):t instanceof ti?bm(t,e):t instanceof ni?Im(t,e):function(s,i){const o=Tm(s,i),c=fd(o)+fd(s.Ae);return gc(o)&&gc(s.Ae)?wm(c):Eu(s.serializer,c)}(t,e)}function Q0(t,e,n){return t instanceof ti?bm(t,e):t instanceof ni?Im(t,e):n}function Tm(t,e){return t instanceof Ao?function(r){return gc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Io extends na{}class ti extends na{constructor(e){super(),this.elements=e}}function bm(t,e){const n=Am(e);for(const r of t.elements)n.some(s=>Wt(s,r))||n.push(r);return{arrayValue:{values:n}}}class ni extends na{constructor(e){super(),this.elements=e}}function Im(t,e){let n=Am(e);for(const r of t.elements)n=n.filter(s=>!Wt(s,r));return{arrayValue:{values:n}}}class Ao extends na{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function fd(t){return xe(t.integerValue||t.doubleValue)}function Am(t){return _u(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Y0(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ti&&s instanceof ti||r instanceof ni&&s instanceof ni?Br(r.elements,s.elements,Wt):r instanceof Ao&&s instanceof Ao?Wt(r.Ae,s.Ae):r instanceof Io&&s instanceof Io}(t.transform,e.transform)}class X0{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xi(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ra{}function Sm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Pm(t.key,tn.none()):new sa(t.key,t.data,tn.none());{const n=t.data,r=gt.empty();let s=new $e(tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new mr(t.key,r,new Ct(s.toArray()),tn.none())}}function eP(t,e,n){t instanceof sa?function(s,i,o){const c=s.value.clone(),u=md(s.fieldTransforms,i,o.transformResults);c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof mr?function(s,i,o){if(!Xi(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=md(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Rm(s)),u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Bs(t,e,n,r){return t instanceof sa?function(i,o,c,u){if(!Xi(i.precondition,o))return c;const l=i.value.clone(),d=gd(i.fieldTransforms,u,o);return l.setAll(d),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof mr?function(i,o,c,u){if(!Xi(i.precondition,o))return c;const l=gd(i.fieldTransforms,u,o),d=o.data;return d.setAll(Rm(i)),d.setAll(l),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Xi(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function tP(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Tm(r.transform,s||null);i!=null&&(n===null&&(n=gt.empty()),n.set(r.field,i))}return n||null}function pd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Br(r,s,(i,o)=>Y0(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class sa extends ra{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class mr extends ra{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Rm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function md(t,e,n){const r=new Map;pe(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,Q0(o,c,n[s]))}return r}function gd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,J0(i,o,e))}return r}class Pm extends ra{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nP extends ra{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&eP(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Em();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const u=Sm(o,c);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(re.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),he())}isEqual(e){return this.batchId===e.batchId&&Br(this.mutations,e.mutations,(n,r)=>pd(n,r))&&Br(this.baseMutations,e.baseMutations,(n,r)=>pd(n,r))}}class wu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){pe(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return W0}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new wu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve,de;function oP(t){switch(t){case U.OK:return te(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return te(15467,{code:t})}}function Cm(t){if(t===void 0)return on("GRPC error has no .code"),U.UNKNOWN;switch(t){case Ve.OK:return U.OK;case Ve.CANCELLED:return U.CANCELLED;case Ve.UNKNOWN:return U.UNKNOWN;case Ve.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case Ve.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case Ve.INTERNAL:return U.INTERNAL;case Ve.UNAVAILABLE:return U.UNAVAILABLE;case Ve.UNAUTHENTICATED:return U.UNAUTHENTICATED;case Ve.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case Ve.NOT_FOUND:return U.NOT_FOUND;case Ve.ALREADY_EXISTS:return U.ALREADY_EXISTS;case Ve.PERMISSION_DENIED:return U.PERMISSION_DENIED;case Ve.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case Ve.ABORTED:return U.ABORTED;case Ve.OUT_OF_RANGE:return U.OUT_OF_RANGE;case Ve.UNIMPLEMENTED:return U.UNIMPLEMENTED;case Ve.DATA_LOSS:return U.DATA_LOSS;default:return te(39323,{code:t})}}(de=Ve||(Ve={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=new Cn([4294967295,4294967295],0);function _d(t){const e=aP().encode(t),n=new qp;return n.update(e),new Uint8Array(n.digest())}function yd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Cn([n,r],0),new Cn([s,i],0)]}class Tu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Vs(`Invalid padding: ${n}`);if(r<0)throw new Vs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Vs(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=Cn.fromNumber(this.ge)}ye(e,n,r){let s=e.add(n.multiply(Cn.fromNumber(r)));return s.compare(cP)===1&&(s=new Cn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=_d(e),[r,s]=yd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);if(!this.we(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Tu(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=_d(e),[r,s]=yd(n);for(let i=0;i<this.hashCount;i++){const o=this.ye(r,s,i);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Vs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,pi.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ia(re.min(),s,new Se(le),an(),he())}}class pi{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new pi(r,n,he(),he(),he())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n,r,s){this.be=e,this.removedTargetIds=n,this.key=r,this.De=s}}class km{constructor(e,n){this.targetId=e,this.Ce=n}}class xm{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class vd{constructor(){this.ve=0,this.Fe=Ed(),this.Me=rt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=he(),n=he(),r=he();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:te(38017,{changeType:i})}}),new pi(this.Me,this.xe,e,n,r)}qe(){this.Oe=!1,this.Fe=Ed()}Ke(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,pe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class uP{constructor(e){this.Ge=e,this.ze=new Map,this.je=an(),this.Je=ji(),this.He=ji(),this.Ze=new Se(le)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:te(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,s)=>{this.rt(s)&&n(s)})}st(e){const n=e.targetId,r=e.Ce.count,s=this.ot(n);if(s){const i=s.target;if(yc(i))if(r===0){const o=new X(i.path);this.et(n,o,at.newNoDocument(o,re.min()))}else pe(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),u=c?this.ct(c,e,o):1;if(u!==0){this.it(n);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,l)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Vn(r).toUint8Array()}catch(u){if(u instanceof nm)return ar("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Tu(o,s,i)}catch(u){return ar(u instanceof Vs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(n,i,null),s++)}),s}Tt(e){const n=new Map;this.ze.forEach((i,o)=>{const c=this.ot(o);if(c){if(i.current&&yc(c.target)){const u=new X(c.target.path);this.Et(u).has(o)||this.It(o,u)||this.et(o,u,at.newNoDocument(u,e))}i.Be&&(n.set(o,i.ke()),i.qe())}});let r=he();this.He.forEach((i,o)=>{let c=!0;o.forEachWhile(u=>{const l=this.ot(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,o)=>o.setReadTime(e));const s=new ia(e,n,this.Ze,this.je,r);return this.je=an(),this.Je=ji(),this.He=ji(),this.Ze=new Se(le),s}Ye(e,n){if(!this.rt(e))return;const r=this.It(e,n.key)?2:0;this.nt(e).Ke(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const s=this.nt(e);this.It(e,n)?s.Ke(n,1):s.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new vd,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new $e(le),this.He=this.He.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new $e(le),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new vd),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}It(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function ji(){return new Se(X.comparator)}function Ed(){return new Se(X.comparator)}const lP={asc:"ASCENDING",desc:"DESCENDING"},hP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},dP={and:"AND",or:"OR"};class fP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ec(t,e){return t.useProto3Json||Jo(e)?e:{value:e}}function So(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Nm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function pP(t,e){return So(t,e.toTimestamp())}function Bt(t){return pe(!!t,49232),re.fromTimestamp(function(n){const r=On(n);return new Te(r.seconds,r.nanos)}(t))}function bu(t,e){return wc(t,e).canonicalString()}function wc(t,e){const n=function(s){return new we(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Dm(t){const e=we.fromString(t);return pe(Fm(e),10190,{key:e.toString()}),e}function Tc(t,e){return bu(t.databaseId,e.path)}function $a(t,e){const n=Dm(e);if(n.get(1)!==t.databaseId.projectId)throw new Q(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Q(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(Vm(n))}function Om(t,e){return bu(t.databaseId,e)}function mP(t){const e=Dm(t);return e.length===4?we.emptyPath():Vm(e)}function bc(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Vm(t){return pe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function wd(t,e,n){return{name:Tc(t,e),fields:n.value.mapValue.fields}}function gP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:te(39313,{state:l})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,d){return l.useProto3Json?(pe(d===void 0||typeof d=="string",58123),rt.fromBase64String(d||"")):(pe(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),rt.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(l){const d=l.code===void 0?U.UNKNOWN:Cm(l.code);return new Q(d,l.message||"")}(o);n=new xm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=$a(t,r.document.name),i=Bt(r.document.updateTime),o=r.document.createTime?Bt(r.document.createTime):re.min(),c=new gt({mapValue:{fields:r.document.fields}}),u=at.newFoundDocument(s,i,o,c),l=r.targetIds||[],d=r.removedTargetIds||[];n=new eo(l,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=$a(t,r.document),i=r.readTime?Bt(r.readTime):re.min(),o=at.newNoDocument(s,i),c=r.removedTargetIds||[];n=new eo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=$a(t,r.document),i=r.removedTargetIds||[];n=new eo([],i,s,null)}else{if(!("filter"in e))return te(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new iP(s,i),c=r.targetId;n=new km(c,o)}}return n}function _P(t,e){let n;if(e instanceof sa)n={update:wd(t,e.key,e.value)};else if(e instanceof Pm)n={delete:Tc(t,e.key)};else if(e instanceof mr)n={update:wd(t,e.key,e.data),updateMask:SP(e.fieldMask)};else{if(!(e instanceof nP))return te(16599,{dt:e.type});n={verify:Tc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof Io)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ti)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ni)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Ao)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw te(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:pP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te(27497)}(t,e.precondition)),n}function yP(t,e){return t&&t.length>0?(pe(e!==void 0,14353),t.map(n=>function(s,i){let o=s.updateTime?Bt(s.updateTime):Bt(i);return o.isEqual(re.min())&&(o=Bt(i)),new X0(o,s.transformResults||[])}(n,e))):[]}function vP(t,e){return{documents:[Om(t,e.path)]}}function EP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Om(t,s);const i=function(l){if(l.length!==0)return Mm(Ht.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(d=>function(m){return{field:kr(m.field),direction:bP(m.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Ec(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ft:n,parent:s}}function wP(t){let e=mP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){pe(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=Lm(p);return m instanceof Ht&&dm(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(D){return new bo(xr(D.field),function(I){switch(I){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(p){let m;return m=typeof p=="object"?p.value:p,Jo(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(p){const m=!!p.before,_=p.values||[];return new To(_,m)}(n.startAt));let l=null;return n.endAt&&(l=function(p){const m=!p.before,_=p.values||[];return new To(_,m)}(n.endAt)),F0(e,s,o,i,c,"F",u,l)}function TP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Lm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=xr(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=xr(n.unaryFilter.field);return je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xr(n.unaryFilter.field);return je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=xr(n.unaryFilter.field);return je.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return te(61313);default:return te(60726)}}(t):t.fieldFilter!==void 0?function(n){return je.create(xr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return te(58110);default:return te(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ht.create(n.compositeFilter.filters.map(r=>Lm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te(1026)}}(n.compositeFilter.op))}(t):te(30097,{filter:t})}function bP(t){return lP[t]}function IP(t){return hP[t]}function AP(t){return dP[t]}function kr(t){return{fieldPath:t.canonicalString()}}function xr(t){return tt.fromServerFormat(t.fieldPath)}function Mm(t){return t instanceof je?function(n){if(n.op==="=="){if(cd(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NAN"}};if(ad(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(cd(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NOT_NAN"}};if(ad(n.value))return{unaryFilter:{field:kr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kr(n.field),op:IP(n.op),value:n.value}}}(t):t instanceof Ht?function(n){const r=n.getFilters().map(s=>Mm(s));return r.length===1?r[0]:{compositeFilter:{op:AP(n.op),filters:r}}}(t):te(54877,{filter:t})}function SP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Fm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Um(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,n,r,s,i=re.min(),o=re.min(),c=rt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new In(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new In(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RP{constructor(e){this.yt=e}}function PP(t){const e=wP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CP{constructor(){this.bn=new kP}addToCollectionParentIndex(e,n){return this.bn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Dn.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Dn.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class kP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new $e(we.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new $e(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Td={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},zm=41943040;class pt{static withCacheSize(e){return new pt(e,pt.DEFAULT_COLLECTION_PERCENTILE,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pt.DEFAULT_COLLECTION_PERCENTILE=10,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,pt.DEFAULT=new pt(zm,pt.DEFAULT_COLLECTION_PERCENTILE,pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),pt.DISABLED=new pt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Hr(0)}static ar(){return new Hr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="LruGarbageCollector",xP=1048576;function Id([t,e],[n,r]){const s=le(t,n);return s===0?le(e,r):s}class NP{constructor(e){this.Pr=e,this.buffer=new $e(Id),this.Tr=0}Er(){return++this.Tr}Ir(e){const n=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Id(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class DP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){K(bd,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ts(n)?K(bd,"Ignoring IndexedDB error during garbage collection: ",n):await es(n)}await this.Ar(3e5)})}}class OP{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Zo.ce);const r=new NP(n);return this.Vr.forEachTarget(e,s=>r.Ir(s.sequenceNumber)).next(()=>this.Vr.mr(e,s=>r.Ir(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Td)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Td):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,s,i,o,c,u,l;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,c=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(l=Date.now(),Pr()<=ue.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${p} documents in `+(l-u)+`ms
Total Duration: ${l-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function VP(t,e){return new OP(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(){this.changes=new pr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Bs(r.mutation,s,Ct.empty(),Te.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,he()).next(()=>r))}getLocalViewOfDocuments(e,n,r=he()){const s=Xn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Os();return i.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Xn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,he()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=an();const o=$s(),c=function(){return $s()}();return n.forEach((u,l)=>{const d=r.get(l.key);s.has(l.key)&&(d===void 0||d.mutation instanceof mr)?i=i.insert(l.key,l):d!==void 0?(o.set(l.key,d.mutation.getFieldMask()),Bs(d.mutation,l,d.mutation.getFieldMask(),Te.now())):o.set(l.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((l,d)=>o.set(l,d)),n.forEach((l,d)=>c.set(l,new MP(d,o.get(l)??null))),c))}recalculateAndSaveOverlays(e,n){const r=$s();let s=new Se((o,c)=>o-c),i=he();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(u=>{const l=n.get(u);if(l===null)return;let d=r.get(u)||Ct.empty();d=c.applyToLocalView(l,d),r.set(u,d);const p=(s.get(c.batchId)||he()).add(u);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),l=u.key,d=u.value,p=Em();d.forEach(m=>{if(!i.has(m)){const _=Sm(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,p))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return U0(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):z0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Xn());let c=Qs,u=i;return o.next(l=>M.forEach(l,(d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{u=u.insert(d,m)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,u,l,he())).next(d=>({batchId:c,changes:vm(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let s=Os();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Os();return this.indexManager.getCollectionParents(e,i).next(c=>M.forEach(c,u=>{const l=function(p,m){return new Yo(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(d=>{d.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,l)=>{const d=l.getKey();o.get(d)===null&&(o=o.insert(d,at.newInvalidDocument(d)))});let c=Os();return o.forEach((u,l)=>{const d=i.get(u);d!==void 0&&Bs(d.mutation,l,Ct.empty(),Te.now()),ta(n,l)&&(c=c.insert(u,l))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return M.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Bt(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(s){return{name:s.name,query:PP(s.bundledQuery),readTime:Bt(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zP{constructor(){this.overlays=new Se(X.comparator),this.Lr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Xn();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.St(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Lr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Xn(),i=n.length+1,o=new X(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,l=u.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Se((l,d)=>l-d);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let d=i.get(l.largestBatchId);d===null&&(d=Xn(),i=i.insert(l.largestBatchId,d)),d.set(l.getKey(),l)}}const c=Xn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,d)=>c.set(l,d)),!(c.size()>=s)););return M.resolve(c)}St(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Lr.get(s.largestBatchId).delete(r.key);this.Lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new sP(n,r));let i=this.Lr.get(n);i===void 0&&(i=he(),this.Lr.set(n,i)),this.Lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(){this.kr=new $e(Ze.qr),this.Kr=new $e(Ze.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.kr=this.kr.add(r),this.Kr=this.Kr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ze(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new X(new we([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.Kr.forEachInRange([r,s],o=>{this.Wr(o),i.push(o.key)}),i}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const n=new X(new we([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=he();return this.Kr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Ze(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.Jr=n}static qr(e,n){return X.comparator(e.key,n.key)||le(e.Jr,n.Jr)}static Ur(e,n){return le(e.Jr,n.Jr)||X.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new $e(Ze.qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rP(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Hr=this.Hr.add(new Ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?mu:this.Yn-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.Hr.forEachInRange([r,s],o=>{const c=this.Zr(o.Jr);i.push(c)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new $e(le);return n.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([i,o],c=>{r=r.add(c.Jr)})}),M.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new X(i),0);let c=new $e(le);return this.Hr.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(c=c.add(u.Jr)),!0)},o),M.resolve(this.Yr(c))}Yr(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){pe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return M.forEach(n.mutations,s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Ze(n,0),s=this.Hr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e){this.ti=e,this.docs=function(){return new Se(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let r=an();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():at.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=an();const o=n.path,c=new X(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:l,value:{document:d}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||m0(p0(d),r)<=0||(s.has(d.key)||ta(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){te(9500)}ni(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new qP(this)}getSize(e){return M.resolve(this.size)}}class qP extends LP{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Mr.addEntry(e,s)):this.Mr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e){this.persistence=e,this.ri=new pr(n=>yu(n),vu),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.ii=0,this.si=new Iu,this.targetCount=0,this.oi=Hr._r()}forEachTarget(e,n){return this.ri.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),M.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Hr(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.lr(n),M.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ri.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ri.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n){this._i={},this.overlays={},this.ai=new Zo(0),this.ui=!1,this.ui=!0,this.ci=new jP,this.referenceDelegate=e(this),this.li=new WP(this),this.indexManager=new CP,this.remoteDocumentCache=function(s){return new BP(s)}(r=>this.referenceDelegate.hi(r)),this.serializer=new RP(n),this.Pi=new UP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new $P(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const s=new HP(this.ai.next());return this.referenceDelegate.Ti(),r(s).next(i=>this.referenceDelegate.Ei(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ii(e,n){return M.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class HP extends _0{constructor(e){super(),this.currentSequenceNumber=e}}class Au{constructor(e){this.persistence=e,this.Ri=new Iu,this.Ai=null}static Vi(e){return new Au(e)}get di(){if(this.Ai)return this.Ai;throw te(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(s=>this.di.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.di.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ei(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.di,r=>{const s=X.fromPath(r);return this.mi(e,s).next(i=>{i||n.removeEntry(s,re.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return M.or([()=>M.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ii(e,n)])}}class Ro{constructor(e,n){this.persistence=e,this.fi=new pr(r=>E0(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=VP(this,n)}static Vi(e,n){return new Ro(e,n)}Ti(){}Ei(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return M.forEach(this.fi,(r,s)=>this.wr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ni(e,o=>this.wr(e,o,n).next(c=>{c||(r++,i.removeEntry(o,re.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),M.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Qi(e.data.value)),n}wr(e,n,r){return M.or([()=>this.persistence.Ii(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.fi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Ts=r,this.Es=s}static Is(e,n){let r=he(),s=he();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Su(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return bI()?8:y0(ct())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.gs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ps(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new GP;return this.ys(e,n,o).next(c=>{if(i.result=c,this.As)return this.ws(e,n,o,c.size)})}).next(()=>i.result)}ws(e,n,r,s){return r.documentReadCount<this.Vs?(Pr()<=ue.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Cr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Pr()<=ue.DEBUG&&K("QueryEngine","Query:",Cr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ds*s?(Pr()<=ue.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Cr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,$t(n))):M.resolve())}gs(e,n){if(dd(n))return M.resolve(null);let r=$t(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=vc(n,null,"F"),r=$t(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=he(...i);return this.fs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const l=this.Ss(n,c);return this.bs(n,l,o,u.readTime)?this.gs(e,vc(n,null,"F")):this.Ds(e,l,n,u)}))})))}ps(e,n,r,s){return dd(n)||s.isEqual(re.min())?M.resolve(null):this.fs.getDocuments(e,r).next(i=>{const o=this.Ss(n,i);return this.bs(n,o,r,s)?M.resolve(null):(Pr()<=ue.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cr(n)),this.Ds(e,o,n,f0(s,Qs)).next(c=>c))})}Ss(e,n){let r=new $e(_m(e));return n.forEach((s,i)=>{ta(e,i)&&(r=r.add(i))}),r}bs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ys(e,n,r){return Pr()<=ue.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Cr(n)),this.fs.getDocumentsMatchingQuery(e,n,Dn.min(),r)}Ds(e,n,r,s){return this.fs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru="LocalStore",ZP=3e8;class JP{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.vs=new Se(le),this.Fs=new pr(i=>yu(i),vu),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new FP(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function QP(t,e,n,r){return new JP(t,e,n,r)}async function $m(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let u=he();for(const l of s){o.push(l.batchId);for(const d of l.mutations)u=u.add(d.key)}for(const l of i){c.push(l.batchId);for(const d of l.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(r,u).next(l=>({Ns:l,removedBatchIds:o,addedBatchIds:c}))})})}function YP(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.xs.newChangeBuffer({trackRemovals:!0});return function(c,u,l,d){const p=l.batch,m=p.keys();let _=M.resolve();return m.forEach(D=>{_=_.next(()=>d.getEntry(u,D)).next(P=>{const I=l.docVersions.get(D);pe(I!==null,48541),P.version.compareTo(I)<0&&(p.applyToRemoteDocument(P,l),P.isValidDocument()&&(P.setReadTime(l.commitVersion),d.addEntry(P)))})}),_.next(()=>c.mutationQueue.removeMutationBatch(u,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=he();for(let l=0;l<c.mutationResults.length;++l)c.mutationResults[l].transformResults.length>0&&(u=u.add(c.batch.mutations[l].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Bm(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function XP(t,e){const n=se(t),r=e.snapshotVersion;let s=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});s=n.vs;const c=[];e.targetChanges.forEach((d,p)=>{const m=s.get(p);if(!m)return;c.push(n.li.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.li.addMatchingKeys(i,d.addedDocuments,p)));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(rt.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),function(P,I,L){return P.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=ZP?!0:L.addedDocuments.size+L.modifiedDocuments.size+L.removedDocuments.size>0}(m,_,d)&&c.push(n.li.updateTargetData(i,_))});let u=an(),l=he();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(eC(i,o,e.documentUpdates).next(d=>{u=d.Bs,l=d.Ls})),!r.isEqual(re.min())){const d=n.li.getLastRemoteSnapshotVersion(i).next(p=>n.li.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return M.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,l)).next(()=>u)}).then(i=>(n.vs=s,i))}function eC(t,e,n){let r=he(),s=he();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=an();return n.forEach((c,u)=>{const l=i.get(c);u.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(re.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):K(Ru,"Ignoring outdated watch update for ",c,". Current version:",l.version," Watch version:",u.version)}),{Bs:o,Ls:s}})}function tC(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=mu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nC(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.li.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.li.allocateTargetId(r).next(o=>(s=new In(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.vs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function Ic(t,e,n){const r=se(t),s=r.vs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ts(o))throw o;K(Ru,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(s.target)}function Ad(t,e,n){const r=se(t);let s=re.min(),i=he();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,l,d){const p=se(u),m=p.Fs.get(d);return m!==void 0?M.resolve(p.vs.get(m)):p.li.getTargetData(l,d)}(r,o,$t(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next(u=>{i=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:re.min(),n?i:he())).next(c=>(rC(r,$0(e),c),{documents:c,ks:i})))}function rC(t,e,n){let r=t.Ms.get(e)||re.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.Ms.set(e,r)}class Sd{constructor(){this.activeTargetIds=K0()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sC{constructor(){this.vo=new Sd,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Sd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd="ConnectivityMonitor";class Pd{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){K(Rd,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){K(Rd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $i=null;function Ac(){return $i===null?$i=function(){return 268435456+Math.round(2147483648*Math.random())}():$i++,"0x"+$i.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="RestConnection",oC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class aC{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.$o=this.databaseId.database===Eo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Ac(),c=this.Qo(e,n.toUriEncodedString());K(Ba,`Sending RPC '${e}' ${o}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,s,i);const{host:l}=new URL(c),d=ui(l);return this.zo(e,c,u,r,d).then(p=>(K(Ba,`Received RPC '${e}' ${o}: `,p),p),p=>{throw ar(Ba,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p})}jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Xr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Qo(e,n){const r=oC[e];let s=`${this.Ko}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(s=`${s}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),s}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cC{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="WebChannelConnection",Rs=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(s){setTimeout(()=>{throw s},0)}})};class Fr extends aC{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Fr.c_){const e=Kp();Rs(e,Gp.STAT_EVENT,n=>{n.stat===fc.PROXY?K(it,"STAT_EVENT: detected buffering proxy"):n.stat===fc.NOPROXY&&K(it,"STAT_EVENT: detected no buffering proxy")}),Fr.c_=!0}}zo(e,n,r,s,i){const o=Ac();return new Promise((c,u)=>{const l=new Wp;l.setWithCredentials(!0),l.listenOnce(Hp.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ji.NO_ERROR:const p=l.getResponseJson();K(it,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Ji.TIMEOUT:K(it,`RPC '${e}' ${o} timed out`),u(new Q(U.DEADLINE_EXCEEDED,"Request time out"));break;case Ji.HTTP_ERROR:const m=l.getStatus();if(K(it,`RPC '${e}' ${o} failed with status:`,m,"response text:",l.getResponseText()),m>0){let _=l.getResponseJson();Array.isArray(_)&&(_=_[0]);const D=_==null?void 0:_.error;if(D&&D.status&&D.message){const P=function(L){const C=L.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(C)>=0?C:U.UNKNOWN}(D.status);u(new Q(P,D.message))}else u(new Q(U.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new Q(U.UNAVAILABLE,"Connection failed."));break;default:te(9055,{l_:e,streamId:o,h_:l.getLastErrorCode(),P_:l.getLastError()})}}finally{K(it,`RPC '${e}' ${o} completed.`)}});const d=JSON.stringify(s);K(it,`RPC '${e}' ${o} sending request:`,s),l.send(n,"POST",d,r,15)})}T_(e,n,r){const s=Ac(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const l=i.join("");K(it,`Creating RPC '${e}' stream ${s}: ${l}`,c);const d=o.createWebChannel(l,c);this.E_(d);let p=!1,m=!1;const _=new cC({Jo:D=>{m?K(it,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(p||(K(it,`Opening RPC '${e}' stream ${s} transport.`),d.open(),p=!0),K(it,`RPC '${e}' stream ${s} sending:`,D),d.send(D))},Ho:()=>d.close()});return Rs(d,Ds.EventType.OPEN,()=>{m||(K(it,`RPC '${e}' stream ${s} transport opened.`),_.i_())}),Rs(d,Ds.EventType.CLOSE,()=>{m||(m=!0,K(it,`RPC '${e}' stream ${s} transport closed`),_.o_(),this.I_(d))}),Rs(d,Ds.EventType.ERROR,D=>{m||(m=!0,ar(it,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),_.o_(new Q(U.UNAVAILABLE,"The operation could not be completed")))}),Rs(d,Ds.EventType.MESSAGE,D=>{var P;if(!m){const I=D.data[0];pe(!!I,16349);const L=I,C=(L==null?void 0:L.error)||((P=L[0])==null?void 0:P.error);if(C){K(it,`RPC '${e}' stream ${s} received error:`,C);const z=C.status;let G=function(b){const v=Ve[b];if(v!==void 0)return Cm(v)}(z),H=C.message;z==="NOT_FOUND"&&H.includes("database")&&H.includes("does not exist")&&H.includes(this.databaseId.database)&&ar(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),G===void 0&&(G=U.INTERNAL,H="Unknown error status: "+z+" with message "+C.message),m=!0,_.o_(new Q(G,H)),d.close()}else K(it,`RPC '${e}' stream ${s} received:`,I),_.__(I)}}),Fr.u_(),setTimeout(()=>{_.s_()},0),_}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return Zp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uC(t){return new Fr(t)}function qa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t){return new fP(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fr.c_=!1;class qm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=s,this.V_=i,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cd="PersistentStream";class Wm{constructor(e,n,r,s,i,o,c,u){this.Ci=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new qm(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(on(n.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===n&&this.G_(r,s)},r=>{e(()=>{const s=new Q(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return K(Cd,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(K(Cd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lC extends Wm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=gP(this.serializer,e),r=function(i){if(!("targetChange"in i))return re.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?re.min():o.readTime?Bt(o.readTime):re.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=bc(this.serializer),n.addTarget=function(i,o){let c;const u=o.target;if(c=yc(u)?{documents:vP(i,u)}:{query:EP(i,u).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Nm(i,o.resumeToken);const l=Ec(i,o.expectedCount);l!==null&&(c.expectedCount=l)}else if(o.snapshotVersion.compareTo(re.min())>0){c.readTime=So(i,o.snapshotVersion.toTimestamp());const l=Ec(i,o.expectedCount);l!==null&&(c.expectedCount=l)}return c}(this.serializer,e);const r=TP(this.serializer,e);r&&(n.labels=r),this.q_(n)}X_(e){const n={};n.database=bc(this.serializer),n.removeTarget=e,this.q_(n)}}class hC extends Wm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return pe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,pe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){pe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=yP(e.writeResults,e.commitTime),r=Bt(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=bc(this.serializer),this.q_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>_P(this.serializer,r))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{}class fC extends dC{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Q(U.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Wo(e,wc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(U.UNKNOWN,i.toString())})}jo(e,n,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.jo(e,wc(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Q(U.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function pC(t,e,n,r){return new fC(t,e,n,r)}class mC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(on(n),this.aa=!1):K("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="RemoteStore";class gC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=i,this.Aa.Mo(o=>{r.enqueueAndForget(async()=>{gr(this)&&(K(cr,"Restarting streams for network reachability change."),await async function(u){const l=se(u);l.Ia.add(4),await mi(l),l.Va.set("Unknown"),l.Ia.delete(4),await aa(l)}(this))})}),this.Va=new mC(r,s)}}async function aa(t){if(gr(t))for(const e of t.Ra)await e(!0)}async function mi(t){for(const e of t.Ra)await e(!1)}function Hm(t,e){const n=se(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),xu(n)?ku(n):ns(n).O_()&&Cu(n,e))}function Pu(t,e){const n=se(t),r=ns(n);n.Ea.delete(e),r.O_()&&Gm(n,e),n.Ea.size===0&&(r.O_()?r.L_():gr(n)&&n.Va.set("Unknown"))}function Cu(t,e){if(t.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ns(t).Z_(e)}function Gm(t,e){t.da.$e(e),ns(t).X_(e)}function ku(t){t.da=new uP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),At:e=>t.Ea.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ns(t).start(),t.Va.ua()}function xu(t){return gr(t)&&!ns(t).x_()&&t.Ea.size>0}function gr(t){return se(t).Ia.size===0}function Km(t){t.da=void 0}async function _C(t){t.Va.set("Online")}async function yC(t){t.Ea.forEach((e,n)=>{Cu(t,e)})}async function vC(t,e){Km(t),xu(t)?(t.Va.ha(e),ku(t)):t.Va.set("Unknown")}async function EC(t,e,n){if(t.Va.set("Online"),e instanceof xm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ea.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ea.delete(c),s.da.removeTarget(c))}(t,e)}catch(r){K(cr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Po(t,r)}else if(e instanceof eo?t.da.Xe(e):e instanceof km?t.da.st(e):t.da.tt(e),!n.isEqual(re.min()))try{const r=await Bm(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.da.Tt(o);return c.targetChanges.forEach((u,l)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.Ea.get(l);d&&i.Ea.set(l,d.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,l)=>{const d=i.Ea.get(u);if(!d)return;i.Ea.set(u,d.withResumeToken(rt.EMPTY_BYTE_STRING,d.snapshotVersion)),Gm(i,u);const p=new In(d.target,u,l,d.sequenceNumber);Cu(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){K(cr,"Failed to raise snapshot:",r),await Po(t,r)}}async function Po(t,e,n){if(!ts(e))throw e;t.Ia.add(1),await mi(t),t.Va.set("Offline"),n||(n=()=>Bm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K(cr,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await aa(t)})}function Zm(t,e){return e().catch(n=>Po(t,n,e))}async function ca(t){const e=se(t),n=Mn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:mu;for(;wC(e);)try{const s=await tC(e.localStore,r);if(s===null){e.Ta.length===0&&n.L_();break}r=s.batchId,TC(e,s)}catch(s){await Po(e,s)}Jm(e)&&Qm(e)}function wC(t){return gr(t)&&t.Ta.length<10}function TC(t,e){t.Ta.push(e);const n=Mn(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function Jm(t){return gr(t)&&!Mn(t).x_()&&t.Ta.length>0}function Qm(t){Mn(t).start()}async function bC(t){Mn(t).ra()}async function IC(t){const e=Mn(t);for(const n of t.Ta)e.ea(n.mutations)}async function AC(t,e,n){const r=t.Ta.shift(),s=wu.from(r,e,n);await Zm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ca(t)}async function SC(t,e){e&&Mn(t).Y_&&await async function(r,s){if(function(o){return oP(o)&&o!==U.ABORTED}(s.code)){const i=r.Ta.shift();Mn(r).B_(),await Zm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ca(r)}}(t,e),Jm(t)&&Qm(t)}async function kd(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),K(cr,"RemoteStore received new credentials");const r=gr(n);n.Ia.add(3),await mi(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await aa(n)}async function RC(t,e){const n=se(t);e?(n.Ia.delete(2),await aa(n)):e||(n.Ia.add(2),await mi(n),n.Va.set("Unknown"))}function ns(t){return t.ma||(t.ma=function(n,r,s){const i=se(n);return i.sa(),new lC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:_C.bind(null,t),Yo:yC.bind(null,t),t_:vC.bind(null,t),H_:EC.bind(null,t)}),t.Ra.push(async e=>{e?(t.ma.B_(),xu(t)?ku(t):t.Va.set("Unknown")):(await t.ma.stop(),Km(t))})),t.ma}function Mn(t){return t.fa||(t.fa=function(n,r,s){const i=se(n);return i.sa(),new hC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:bC.bind(null,t),t_:SC.bind(null,t),ta:IC.bind(null,t),na:AC.bind(null,t)}),t.Ra.push(async e=>{e?(t.fa.B_(),await ca(t)):(await t.fa.stop(),t.Ta.length>0&&(K(cr,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Nu(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Du(t,e){if(on("AsyncQueue",`${e}: ${t}`),ts(t))return new Q(U.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{static emptySet(e){return new Ur(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=Os(),this.sortedSet=new Se(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ur)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ur;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(){this.ga=new Se(X.comparator)}track(e){const n=e.doc.key,r=this.ga.get(n);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(n,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(n):e.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):te(63341,{Vt:e,pa:r}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal((n,r)=>{e.push(r)}),e}}class Gr{constructor(e,n,r,s,i,o,c,u,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Gr(e,n,Ur.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ea(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class CC{constructor(){this.queries=Nd(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const s=se(n),i=s.queries;s.queries=Nd(),i.forEach((o,c)=>{for(const u of c.Sa)u.onError(r)})})(this,new Q(U.ABORTED,"Firestore shutting down"))}}function Nd(){return new pr(t=>gm(t),ea)}async function Ym(t,e){const n=se(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new PC,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await n.onListen(s,!0);break;case 1:i.wa=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Du(o,`Initialization of query '${Cr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.Sa.push(e),e.va(n.onlineState),i.wa&&e.Fa(i.wa)&&Ou(n)}async function Xm(t,e){const n=se(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Sa.indexOf(e);o>=0&&(i.Sa.splice(o,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function kC(t,e){const n=se(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.Sa)c.Fa(s)&&(r=!0);o.wa=s}}r&&Ou(n)}function xC(t,e,n){const r=se(t),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(n);r.queries.delete(e)}function Ou(t){t.Ca.forEach(e=>{e.next()})}var Sc,Dd;(Dd=Sc||(Sc={})).Ma="default",Dd.Cache="cache";class eg{constructor(e,n,r){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Gr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=Gr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Sc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e){this.key=e}}class ng{constructor(e){this.key=e}}class NC{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=he(),this.mutatedKeys=he(),this.eu=_m(e),this.tu=new Ur(this.eu)}get nu(){return this.Za}ru(e,n){const r=n?n.iu:new xd,s=n?n.tu:this.tu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const m=s.get(d),_=ta(this.query,p)?p:null,D=!!m&&this.mutatedKeys.has(m.key),P=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let I=!1;m&&_?m.data.isEqual(_.data)?D!==P&&(r.track({type:3,doc:_}),I=!0):this.su(m,_)||(r.track({type:2,doc:_}),I=!0,(u&&this.eu(_,u)>0||l&&this.eu(_,l)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),I=!0):m&&!_&&(r.track({type:1,doc:m}),I=!0,(u||l)&&(c=!0)),I&&(_?(o=o.add(_),i=P?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:o,iu:r,bs:c,mutatedKeys:i}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort((d,p)=>function(_,D){const P=I=>{switch(I){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te(20277,{Vt:I})}};return P(_)-P(D)}(d.type,p.type)||this.eu(d.doc,p.doc)),this.ou(r),s=s??!1;const c=n&&!s?this._u():[],u=this.Ya.size===0&&this.current&&!s?1:0,l=u!==this.Xa;return this.Xa=u,o.length!==0||l?{snapshot:new Gr(this.query,e.tu,i,o,e.mutatedKeys,u===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new xd,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(n=>this.Za=this.Za.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Za=this.Za.delete(n)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=he(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new ng(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new tg(r))}),n}cu(e){this.Za=e.ks,this.Ya=he();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return Gr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Vu="SyncEngine";class DC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class OC{constructor(e){this.key=e,this.hu=!1}}class VC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new pr(c=>gm(c),ea),this.Eu=new Map,this.Iu=new Set,this.Ru=new Se(X.comparator),this.Au=new Map,this.Vu=new Iu,this.du={},this.mu=new Map,this.fu=Hr.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function LC(t,e,n=!0){const r=cg(t);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await rg(r,e,n,!0),s}async function MC(t,e){const n=cg(t);await rg(n,e,!0,!1)}async function rg(t,e,n,r){const s=await nC(t.localStore,$t(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await FC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Hm(t.remoteStore,s),c}async function FC(t,e,n,r,s){t.pu=(p,m,_)=>async function(P,I,L,C){let z=I.view.ru(L);z.bs&&(z=await Ad(P.localStore,I.query,!1).then(({documents:b})=>I.view.ru(b,z)));const G=C&&C.targetChanges.get(I.targetId),H=C&&C.targetMismatches.get(I.targetId)!=null,Y=I.view.applyChanges(z,P.isPrimaryClient,G,H);return Vd(P,I.targetId,Y.au),Y.snapshot}(t,p,m,_);const i=await Ad(t.localStore,e,!0),o=new NC(e,i.ks),c=o.ru(i.documents),u=pi.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(c,t.isPrimaryClient,u);Vd(t,n,l.au);const d=new DC(e,n,o);return t.Tu.set(e,d),t.Eu.has(n)?t.Eu.get(n).push(e):t.Eu.set(n,[e]),l.snapshot}async function UC(t,e,n){const r=se(t),s=r.Tu.get(e),i=r.Eu.get(s.targetId);if(i.length>1)return r.Eu.set(s.targetId,i.filter(o=>!ea(o,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ic(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Pu(r.remoteStore,s.targetId),Rc(r,s.targetId)}).catch(es)):(Rc(r,s.targetId),await Ic(r.localStore,s.targetId,!0))}async function zC(t,e){const n=se(t),r=n.Tu.get(e),s=n.Eu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Pu(n.remoteStore,r.targetId))}async function jC(t,e,n){const r=KC(t);try{const s=await function(o,c){const u=se(o),l=Te.now(),d=c.reduce((_,D)=>_.add(D.key),he());let p,m;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let D=an(),P=he();return u.xs.getEntries(_,d).next(I=>{D=I,D.forEach((L,C)=>{C.isValidDocument()||(P=P.add(L))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,D)).next(I=>{p=I;const L=[];for(const C of c){const z=tP(C,p.get(C.key).overlayedDocument);z!=null&&L.push(new mr(C.key,z,um(z.value.mapValue),tn.exists(!0)))}return u.mutationQueue.addMutationBatch(_,l,L,c)}).next(I=>{m=I;const L=I.applyToLocalDocumentSet(p,P);return u.documentOverlayCache.saveOverlays(_,I.batchId,L)})}).then(()=>({batchId:m.batchId,changes:vm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,u){let l=o.du[o.currentUser.toKey()];l||(l=new Se(le)),l=l.insert(c,u),o.du[o.currentUser.toKey()]=l}(r,s.batchId,n),await gi(r,s.changes),await ca(r.remoteStore)}catch(s){const i=Du(s,"Failed to persist write");n.reject(i)}}async function sg(t,e){const n=se(t);try{const r=await XP(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Au.get(i);o&&(pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.hu=!0:s.modifiedDocuments.size>0?pe(o.hu,14607):s.removedDocuments.size>0&&(pe(o.hu,42227),o.hu=!1))}),await gi(n,r,e)}catch(r){await es(r)}}function Od(t,e,n){const r=se(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Tu.forEach((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const u=se(o);u.onlineState=c;let l=!1;u.queries.forEach((d,p)=>{for(const m of p.Sa)m.va(c)&&(l=!0)}),l&&Ou(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $C(t,e,n){const r=se(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Au.get(e),i=s&&s.key;if(i){let o=new Se(X.comparator);o=o.insert(i,at.newNoDocument(i,re.min()));const c=he().add(i),u=new ia(re.min(),new Map,new Se(le),o,c);await sg(r,u),r.Ru=r.Ru.remove(i),r.Au.delete(e),Lu(r)}else await Ic(r.localStore,e,!1).then(()=>Rc(r,e,n)).catch(es)}async function BC(t,e){const n=se(t),r=e.batch.batchId;try{const s=await YP(n.localStore,e);og(n,r,null),ig(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await gi(n,s)}catch(s){await es(s)}}async function qC(t,e,n){const r=se(t);try{const s=await function(o,c){const u=se(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let d;return u.mutationQueue.lookupMutationBatch(l,c).next(p=>(pe(p!==null,37113),d=p.keys(),u.mutationQueue.removeMutationBatch(l,p))).next(()=>u.mutationQueue.performConsistencyCheck(l)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(l,d,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,d)).next(()=>u.localDocuments.getDocuments(l,d))})}(r.localStore,e);og(r,e,n),ig(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await gi(r,s)}catch(s){await es(s)}}function ig(t,e){(t.mu.get(e)||[]).forEach(n=>{n.resolve()}),t.mu.delete(e)}function og(t,e,n){const r=se(t);let s=r.du[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.du[r.currentUser.toKey()]=s}}function Rc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Eu.get(e))t.Tu.delete(r),n&&t.Pu.yu(r,n);t.Eu.delete(e),t.isPrimaryClient&&t.Vu.Gr(e).forEach(r=>{t.Vu.containsKey(r)||ag(t,r)})}function ag(t,e){t.Iu.delete(e.path.canonicalString());const n=t.Ru.get(e);n!==null&&(Pu(t.remoteStore,n),t.Ru=t.Ru.remove(e),t.Au.delete(n),Lu(t))}function Vd(t,e,n){for(const r of n)r instanceof tg?(t.Vu.addReference(r.key,e),WC(t,r)):r instanceof ng?(K(Vu,"Document no longer in limbo: "+r.key),t.Vu.removeReference(r.key,e),t.Vu.containsKey(r.key)||ag(t,r.key)):te(19791,{wu:r})}function WC(t,e){const n=e.key,r=n.path.canonicalString();t.Ru.get(n)||t.Iu.has(r)||(K(Vu,"New document in limbo: "+n),t.Iu.add(r),Lu(t))}function Lu(t){for(;t.Iu.size>0&&t.Ru.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new X(we.fromString(e)),r=t.fu.next();t.Au.set(r,new OC(n)),t.Ru=t.Ru.insert(n,r),Hm(t.remoteStore,new In($t(Xo(n.path)),r,"TargetPurposeLimboResolution",Zo.ce))}}async function gi(t,e,n){const r=se(t),s=[],i=[],o=[];r.Tu.isEmpty()||(r.Tu.forEach((c,u)=>{o.push(r.pu(u,e,n).then(l=>{var d;if((l||n)&&r.isPrimaryClient){const p=l?!l.fromCache:(d=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,p?"current":"not-current")}if(l){s.push(l);const p=Su.Is(u.targetId,l);i.push(p)}}))}),await Promise.all(o),r.Pu.H_(s),await async function(u,l){const d=se(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(l,m=>M.forEach(m.Ts,_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_)).next(()=>M.forEach(m.Es,_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))}catch(p){if(!ts(p))throw p;K(Ru,"Failed to update sequence numbers: "+p)}for(const p of l){const m=p.targetId;if(!p.fromCache){const _=d.vs.get(m),D=_.snapshotVersion,P=_.withLastLimboFreeSnapshotVersion(D);d.vs=d.vs.insert(m,P)}}}(r.localStore,i))}async function HC(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){K(Vu,"User change. New user:",e.toKey());const r=await $m(n.localStore,e);n.currentUser=e,function(i,o){i.mu.forEach(c=>{c.forEach(u=>{u.reject(new Q(U.CANCELLED,o))})}),i.mu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await gi(n,r.Ns)}}function GC(t,e){const n=se(t),r=n.Au.get(e);if(r&&r.hu)return he().add(r.key);{let s=he();const i=n.Eu.get(e);if(!i)return s;for(const o of i){const c=n.Tu.get(o);s=s.unionWith(c.view.nu)}return s}}function cg(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=sg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$C.bind(null,e),e.Pu.H_=kC.bind(null,e.eventManager),e.Pu.yu=xC.bind(null,e.eventManager),e}function KC(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qC.bind(null,e),e}class Co{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oa(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return QP(this.persistence,new KP,e.initialUser,this.serializer)}Cu(e){return new jm(Au.Vi,this.serializer)}Du(e){return new sC}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Co.provider={build:()=>new Co};class ZC extends Co{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){pe(this.persistence.referenceDelegate instanceof Ro,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new DP(r,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?pt.withCacheSize(this.cacheSizeBytes):pt.DEFAULT;return new jm(r=>Ro.Vi(r,n),this.serializer)}}class Pc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Od(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=HC.bind(null,this.syncEngine),await RC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new CC}()}createDatastore(e){const n=oa(e.databaseInfo.databaseId),r=uC(e.databaseInfo);return pC(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new gC(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Od(this.syncEngine,n,0),function(){return Pd.v()?new Pd:new iC}())}createSyncEngine(e,n){return function(s,i,o,c,u,l,d){const p=new VC(s,i,o,c,u,l);return d&&(p.gu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=se(s);K(cr,"RemoteStore shutting down."),i.Ia.add(5),await mi(i),i.Aa.shutdown(),i.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Pc.provider={build:()=>new Pc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):on("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn="FirestoreClient";class JC{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=fu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{K(Fn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K(Fn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Du(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wa(t,e){t.asyncQueue.verifyOperationInProgress(),K(Fn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await $m(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ld(t,e){t.asyncQueue.verifyOperationInProgress();const n=await QC(t);K(Fn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>kd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>kd(e.remoteStore,s)),t._onlineComponents=e}async function QC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K(Fn,"Using user provided OfflineComponentProvider");try{await Wa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ar("Error using user provided cache. Falling back to memory cache: "+n),await Wa(t,new Co)}}else K(Fn,"Using default OfflineComponentProvider"),await Wa(t,new ZC(void 0));return t._offlineComponents}async function lg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K(Fn,"Using user provided OnlineComponentProvider"),await Ld(t,t._uninitializedComponentsProvider._online)):(K(Fn,"Using default OnlineComponentProvider"),await Ld(t,new Pc))),t._onlineComponents}function YC(t){return lg(t).then(e=>e.syncEngine)}async function Cc(t){const e=await lg(t),n=e.eventManager;return n.onListen=LC.bind(null,e.syncEngine),n.onUnlisten=UC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=MC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=zC.bind(null,e.syncEngine),n}function XC(t,e,n,r){const s=new ug(r),i=new eg(e,s,n);return t.asyncQueue.enqueueAndForget(async()=>Ym(await Cc(t),i)),()=>{s.Nu(),t.asyncQueue.enqueueAndForget(async()=>Xm(await Cc(t),i))}}function ek(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,u,l){const d=new ug({next:m=>{d.Nu(),o.enqueueAndForget(()=>Xm(i,p));const _=m.docs.has(c);!_&&m.fromCache?l.reject(new Q(U.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&u&&u.source==="server"?l.reject(new Q(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(m)},error:m=>l.reject(m)}),p=new eg(Xo(c.path),d,{includeMetadataChanges:!0,qa:!0});return Ym(i,p)}(await Cc(t),t.asyncQueue,e,n,r)),r.promise}function tk(t,e){const n=new kn;return t.asyncQueue.enqueueAndForget(async()=>jC(await YC(t),e,n)),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk="ComponentProvider",Md=new Map;function rk(t,e,n,r,s){return new b0(t,e,n,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,hg(s.experimentalLongPollingOptions),s.useFetchStreams,s.isUsingEmulator,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="firestore.googleapis.com",Fd=!0;class Ud{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Q(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dg,this.ssl=Fd}else this.host=e.host,this.ssl=e.ssl??Fd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=zm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xP)throw new Q(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}d0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=hg(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Q(U.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ua{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ud({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ud(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new n0;switch(r.type){case"firstParty":return new o0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Md.get(n);r&&(K(nk,"Removing Datastore"),Md.delete(n),r.terminate())}(this),Promise.resolve()}}function sk(t,e,n,r={}){var l;t=xn(t,ua);const s=ui(e),i=t._getSettings(),o={...i,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;s&&ip(`https://${c}`),i.host!==dg&&i.host!==c&&ar("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!rr(u,o)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=ot.MOCK_USER;else{d=gI(r.mockUserToken,(l=t._app)==null?void 0:l.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new Q(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ot(m)}t._authCredentials=new r0(new Qp(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new la(this.firestore,e,this._query)}}class Me{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Me(this.firestore,e,this._key)}toJSON(){return{type:Me._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(fi(n,Me._jsonSchema))return new Me(e,r||null,new X(we.fromString(n.referencePath)))}}Me._jsonSchemaVersion="firestore/documentReference/1.0",Me._jsonSchema={type:Le("string",Me._jsonSchemaVersion),referencePath:Le("string")};class Nn extends la{constructor(e,n,r){super(e,n,Xo(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Me(this.firestore,null,new X(e))}withConverter(e){return new Nn(this.firestore,e,this._path)}}function vN(t,e,...n){if(t=Je(t),Yp("collection","path",e),t instanceof ua){const r=we.fromString(e,...n);return Xh(r),new Nn(t,null,r)}{if(!(t instanceof Me||t instanceof Nn))throw new Q(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return Xh(r),new Nn(t.firestore,null,r)}}function ik(t,e,...n){if(t=Je(t),arguments.length===1&&(e=fu.newId()),Yp("doc","path",e),t instanceof ua){const r=we.fromString(e,...n);return Yh(r),new Me(t,null,new X(r))}{if(!(t instanceof Me||t instanceof Nn))throw new Q(U.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return Yh(r),new Me(t.firestore,t instanceof Nn?t.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zd="AsyncQueue";class jd{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new qm(this,"async_queue_retry"),this._c=()=>{const r=qa();r&&K(zd,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const n=qa();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=qa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const n=new kn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Yu.push(e),this.lc()))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!ts(e))throw e;K(zd,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const n=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,on("INTERNAL UNHANDLED ERROR: ",$d(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=n,n}enqueueAfterDelay(e,n,r){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const s=Nu.createAndSchedule(this,e,n,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&te(47125,{Pc:$d(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ic(e){return this.Tc().then(()=>{this.tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()})}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function $d(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class ri extends ua{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new jd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new jd(e),this._firestoreClient=void 0,await e}}}function ok(t,e){const n=typeof t=="object"?t:up(),r=typeof t=="string"?t:Eo,s=tu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=pI("firestore");i&&sk(s,...i)}return s}function Mu(t){if(t._terminated)throw new Q(U.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ak(t),t._firestoreClient}function ak(t){var r,s,i,o;const e=t._freezeSettings(),n=rk(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(s=t._app)==null?void 0:s.options.apiKey,e);t._componentsProvider||(i=e.localCache)!=null&&i._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new JC(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Et(rt.fromBase64String(e))}catch(n){throw new Q(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Et(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Et._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(fi(e,Et._jsonSchema))return Et.fromBase64String(e.bytes)}}Et._jsonSchemaVersion="firestore/bytes/1.0",Et._jsonSchema={type:Le("string",Et._jsonSchemaVersion),bytes:Le("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Q(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Q(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Q(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:qt._jsonSchemaVersion}}static fromJSON(e){if(fi(e,qt._jsonSchema))return new qt(e.latitude,e.longitude)}}qt._jsonSchemaVersion="firestore/geoPoint/1.0",qt._jsonSchema={type:Le("string",qt._jsonSchemaVersion),latitude:Le("number"),longitude:Le("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:xt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(fi(e,xt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new xt(e.vectorValues);throw new Q(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}xt._jsonSchemaVersion="firestore/vectorValue/1.0",xt._jsonSchema={type:Le("string",xt._jsonSchemaVersion),vectorValues:Le("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=/^__.*__$/;class fg{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new mr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function pg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te(40011,{dataSource:t})}}class zu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new zu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.mc(e),r}fc(e){var s;const n=(s=this.path)==null?void 0:s.child(e),r=this.i({path:n,arrayElement:!1});return r.Ac(),r}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return xo(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(pg(this.dataSource)&&ck.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class uk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||oa(e)}I(e,n,r,s=!1){return new zu({dataSource:e,methodName:n,targetDoc:r,path:tt.emptyPath(),arrayElement:!1,hasConverter:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function lk(t){const e=t._freezeSettings(),n=oa(t._databaseId);return new uk(t._databaseId,!!e.ignoreUndefinedProperties,n)}class ha extends Uu{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.yc(`${this._methodName}() can only appear at the top level of your update data`):e.yc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ha}}function hk(t,e,n,r){const s=t.I(1,e,n);gg("Data must be an object, but it was:",s,r);const i=[],o=gt.empty();Bn(r,(u,l)=>{const d=_g(e,u,n);l=Je(l);const p=s.fc(d);if(l instanceof ha)i.push(d);else{const m=da(l,p);m!=null&&(i.push(d),o.set(d,m))}});const c=new Ct(i);return new fg(o,c,s.fieldTransforms)}function dk(t,e,n,r,s,i){const o=t.I(1,e,n),c=[ko(e,r,n)],u=[s];if(i.length%2!=0)throw new Q(U.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(ko(e,i[m])),u.push(i[m+1]);const l=[],d=gt.empty();for(let m=c.length-1;m>=0;--m)if(!mk(l,c[m])){const _=c[m];let D=u[m];D=Je(D);const P=o.fc(_);if(D instanceof ha)l.push(_);else{const I=da(D,P);I!=null&&(l.push(_),d.set(_,I))}}const p=new Ct(l);return new fg(d,p,o.fieldTransforms)}function da(t,e){if(mg(t=Je(t)))return gg("Unsupported field value:",e,t),fk(t,e);if(t instanceof Uu)return function(r,s){if(!pg(s.dataSource))throw s.yc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.yc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let u=da(c,s.gc(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Je(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Z0(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Te.fromDate(r);return{timestampValue:So(s.serializer,i)}}if(r instanceof Te){const i=new Te(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:So(s.serializer,i)}}if(r instanceof qt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Et)return{bytesValue:Nm(s.serializer,r._byteString)};if(r instanceof Me){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:bu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof xt)return function(o,c){const u=o instanceof xt?o.toArray():o;return{mapValue:{fields:{[am]:{stringValue:cm},[wo]:{arrayValue:{values:u.map(d=>{if(typeof d!="number")throw c.yc("VectorValues must only contain numeric values.");return Eu(c.serializer,d)})}}}}}}(r,s);if(Um(r))return r._toProto(s.serializer);throw s.yc(`Unsupported field value: ${pu(r)}`)}(t,e)}function fk(t,e){const n={};return tm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Bn(t,(r,s)=>{const i=da(s,e.dc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function mg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Te||t instanceof qt||t instanceof Et||t instanceof Me||t instanceof Uu||t instanceof xt||Um(t))}function gg(t,e,n){if(!mg(n)||!Xp(n)){const r=pu(n);throw r==="an object"?e.yc(t+" a custom object"):e.yc(t+" "+r)}}function ko(t,e,n){if((e=Je(e))instanceof Fu)return e._internalPath;if(typeof e=="string")return _g(t,e);throw xo("Field path arguments must be of type string or ",t,!1,void 0,n)}const pk=new RegExp("[~\\*/\\[\\]]");function _g(t,e,n){if(e.search(pk)>=0)throw xo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fu(...e.split("."))._internalPath}catch{throw xo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xo(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new Q(U.INVALID_ARGUMENT,c+t+u)}function mk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{convertValue(e,n="none"){switch(Ln(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw te(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Bn(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var r,s,i;const n=(i=(s=(r=e.fields)==null?void 0:r[wo].arrayValue)==null?void 0:s.values)==null?void 0:i.map(o=>xe(o.doubleValue));return new xt(n)}convertGeoPoint(e){return new qt(xe(e.latitude),xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Qo(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ys(e));default:return null}}convertTimestamp(e){const n=On(e);return new Te(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);pe(Fm(r),9688,{name:e});const s=new Xs(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||on(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg extends gk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Et(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Me(this.firestore,null,n)}}const Bd="@firebase/firestore",qd="4.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wd(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _k(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(ko("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class _k extends vg{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Q(U.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ls{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class er extends vg{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new to(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ko("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=er._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}er._jsonSchemaVersion="firestore/documentSnapshot/1.0",er._jsonSchema={type:Le("string",er._jsonSchemaVersion),bundleSource:Le("string","DocumentSnapshot"),bundleName:Le("string"),bundle:Le("string")};class to extends er{data(e={}){return super.data(e)}}class zr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ls(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new to(this._firestore,this._userDataWriter,r.key,r,new Ls(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Q(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const u=new to(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ls(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new to(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ls(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,d=-1;return c.type!==0&&(l=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:vk(c.type),doc:u,oldIndex:l,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=zr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=fu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function vk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te(61501,{type:t})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zr._jsonSchemaVersion="firestore/querySnapshot/1.0",zr._jsonSchema={type:Le("string",zr._jsonSchemaVersion),bundleSource:Le("string","QuerySnapshot"),bundleName:Le("string"),bundle:Le("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t){t=xn(t,Me);const e=xn(t.firestore,ri),n=Mu(e);return ek(n,t._key).then(r=>Eg(e,t,r))}function EN(t,e,n,...r){t=xn(t,Me);const s=xn(t.firestore,ri),i=lk(s);let o;return o=typeof(e=Je(e))=="string"||e instanceof Fu?dk(i,"updateDoc",t._key,e,n,r):hk(i,"updateDoc",t._key,e),wk(s,[o.toMutation(t._key,tn.exists(!0))])}function wN(t,...e){var l,d,p;t=Je(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Wd(e[r])||(n=e[r++]);const s={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Wd(e[r])){const m=e[r];e[r]=(l=m.next)==null?void 0:l.bind(m),e[r+1]=(d=m.error)==null?void 0:d.bind(m),e[r+2]=(p=m.complete)==null?void 0:p.bind(m)}let i,o,c;if(t instanceof Me)o=xn(t.firestore,ri),c=Xo(t._key.path),i={next:m=>{e[r]&&e[r](Eg(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=xn(t,la);o=xn(m.firestore,ri),c=m._query;const _=new yg(o);i={next:D=>{e[r]&&e[r](new zr(o,_,m,D))},error:e[r+1],complete:e[r+2]},yk(t._query)}const u=Mu(o);return XC(u,c,s,i)}function wk(t,e){const n=Mu(t);return tk(n,e)}function Eg(t,e,n){const r=n.docs.get(e._key),s=new yg(t);return new er(t,s,e._key,r,new Ls(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){t0(Qr),jr(new sr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new ri(new s0(r.getProvider("auth-internal")),new a0(o,r.getProvider("app-check-internal")),I0(o,s),o);return i={useFetchStreams:n,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Rn(Bd,qd,e),Rn(Bd,qd,"esm2020")})();var Tk="firebase",bk="12.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn(Tk,bk,"app");const Ik={apiKey:"AIzaSyBMWESt76Nvgy22V52nC61SwC114SdT0jY",authDomain:"stadiumsync-8baea.firebaseapp.com",projectId:"stadiumsync-8baea",storageBucket:"stadiumsync-8baea.firebasestorage.app",messagingSenderId:"479543376874",appId:"1:479543376874:web:dcab0aca9c3b6b24285093"},wg=cp(Ik),Ps=XR(wg),Ak=ok(wg),Tg=new Yt;Tg.setCustomParameters({prompt:"select_account"});async function Ha(t){const n=(await Ek(ik(Ak,"users",t.uid))).data(),r=(n==null?void 0:n.role)??"attendee",s={uid:t.uid,email:t.email??"",displayName:t.displayName??(n==null?void 0:n.displayName)??t.email??"User",role:r};return t.photoURL&&(s.photoURL=t.photoURL),s}function Hd(t){return{"auth/user-not-found":"No account found with that email address.","auth/wrong-password":"Incorrect password. Please try again.","auth/invalid-credential":"Invalid email or password.","auth/too-many-requests":"Too many failed attempts. Please try again later.","auth/popup-closed-by-user":"Sign-in popup was closed. Please try again.","auth/cancelled-popup-request":"Sign-in was cancelled.","auth/network-request-failed":"Network error. Check your connection and try again.","auth/email-already-in-use":"An account with that email already exists.","auth/user-disabled":"This account has been disabled. Contact support."}[t]??"An unexpected error occurred. Please try again."}const bg=A.createContext(null);function Sk({children:t}){const e=Mc(),{currentUser:n,userRole:r,isLoading:s,setUser:i,clearAuth:o,setLoading:c}=Uc();A.useEffect(()=>(c(!0),$S(Ps,async m=>{if(m)try{const _=await Ha(m);i(_,_.role)}catch{await Uh(Ps),o(),Ca.error("Could not load your profile. Please sign in again.",{id:"profile-fetch-error"})}else o()})),[]);const u=A.useCallback(async({email:p,password:m})=>{try{const{user:_}=await US(Ps,p,m),D=await Ha(_);i(D,D.role),e(Ws[D.role],{replace:!0})}catch(_){const D=_.code??"",P=Hd(D);throw Ca.error(P,{id:"login-error",role:"alert"}),_}},[e,i]),l=A.useCallback(async()=>{try{const{user:p}=await cR(Ps,Tg),m=await Ha(p);i(m,m.role),e(Ws[m.role],{replace:!0})}catch(p){const m=p.code??"";if(m==="auth/popup-closed-by-user"||m==="auth/cancelled-popup-request")return;const _=Hd(m);throw Ca.error(_,{id:"google-login-error"}),p}},[e,i]),d=A.useCallback(async()=>{await Uh(Ps),o(),e("/login",{replace:!0})},[o,e]);return s?N.jsx("div",{className:"flex h-screen items-center justify-center bg-navy-950","aria-live":"polite","aria-busy":"true",role:"status",children:N.jsx(ro,{size:"lg",label:"Loading your session…"})}):N.jsx(bg.Provider,{value:{currentUser:n,isLoading:s,isLoggedIn:n!==null,userRole:r,login:u,loginWithGoogle:l,logout:d},children:t})}function Ig(){const t=A.useContext(bg);if(!t)throw new Error("useAuth must be used within an AuthProvider");return t}function Gd(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function fa(...t){return e=>{let n=!1;const r=t.map(s=>{const i=Gd(s,e);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let s=0;s<r.length;s++){const i=r[s];typeof i=="function"?i():Gd(t[s],null)}}}}function ur(...t){return A.useCallback(fa(...t),t)}var Rk=Symbol.for("react.lazy"),No=nf[" use ".trim().toString()];function Pk(t){return typeof t=="object"&&t!==null&&"then"in t}function Ag(t){return t!=null&&typeof t=="object"&&"$$typeof"in t&&t.$$typeof===Rk&&"_payload"in t&&Pk(t._payload)}function Sg(t){const e=kk(t),n=A.forwardRef((r,s)=>{let{children:i,...o}=r;Ag(i)&&typeof No=="function"&&(i=No(i._payload));const c=A.Children.toArray(i),u=c.find(Nk);if(u){const l=u.props.children,d=c.map(p=>p===u?A.Children.count(l)>1?A.Children.only(null):A.isValidElement(l)?l.props.children:null:p);return N.jsx(e,{...o,ref:s,children:A.isValidElement(l)?A.cloneElement(l,void 0,d):null})}return N.jsx(e,{...o,ref:s,children:i})});return n.displayName=`${t}.Slot`,n}var Ck=Sg("Slot");function kk(t){const e=A.forwardRef((n,r)=>{let{children:s,...i}=n;if(Ag(s)&&typeof No=="function"&&(s=No(s._payload)),A.isValidElement(s)){const o=Ok(s),c=Dk(i,s.props);return s.type!==A.Fragment&&(c.ref=r?fa(r,o):o),A.cloneElement(s,c)}return A.Children.count(s)>1?A.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var xk=Symbol("radix.slottable");function Nk(t){return A.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===xk}function Dk(t,e){const n={...e};for(const r in e){const s=t[r],i=e[r];/^on[A-Z]/.test(r)?s&&i?n[r]=(...c)=>{const u=i(...c);return s(...c),u}:s&&(n[r]=s):r==="style"?n[r]={...s,...i}:r==="className"&&(n[r]=[s,i].filter(Boolean).join(" "))}return{...t,...n}}function Ok(t){var r,s;let e=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(s=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:s.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}const Kd=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,Zd=gf,ju=(t,e)=>n=>{var r;if((e==null?void 0:e.variants)==null)return Zd(t,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:s,defaultVariants:i}=e,o=Object.keys(s).map(l=>{const d=n==null?void 0:n[l],p=i==null?void 0:i[l];if(d===null)return null;const m=Kd(d)||Kd(p);return s[l][m]}),c=n&&Object.entries(n).reduce((l,d)=>{let[p,m]=d;return m===void 0||(l[p]=m),l},{}),u=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((l,d)=>{let{class:p,className:m,..._}=d;return Object.entries(_).every(D=>{let[P,I]=D;return Array.isArray(I)?I.includes({...i,...c}[P]):{...i,...c}[P]===I})?[...l,p,m]:l},[]);return Zd(t,o,u,n==null?void 0:n.class,n==null?void 0:n.className)},Vk=ju(["inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium","ring-offset-navy-950 transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2","disabled:pointer-events-none disabled:opacity-50","min-h-[44px] min-w-[44px]"],{variants:{variant:{default:"bg-neon text-navy-950 font-semibold hover:bg-neon-dark active:bg-neon-dark",secondary:"bg-navy-700 text-white hover:bg-navy-600 border border-navy-600",outline:"border border-neon text-neon bg-transparent hover:bg-neon/10",ghost:"text-slate-300 hover:bg-navy-800 hover:text-white",destructive:"bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500",link:"text-neon underline-offset-4 hover:underline min-h-0 min-w-0 p-0"},size:{default:"h-11 px-5 py-2",sm:"h-9 rounded px-3 text-xs",lg:"h-12 rounded-md px-8 text-base",icon:"h-11 w-11"}},defaultVariants:{variant:"default",size:"default"}}),Kr=A.forwardRef(({className:t,variant:e,size:n,asChild:r=!1,...s},i)=>{const o=r?Ck:"button";return N.jsx(o,{ref:i,className:Nt(Vk({variant:e,size:n,className:t})),...s})});Kr.displayName="Button";const kc=A.forwardRef(({className:t,type:e,...n},r)=>N.jsx("input",{type:e,ref:r,className:Nt("flex h-11 w-full rounded-md border border-navy-600 bg-navy-800 px-3 py-2","text-sm text-slate-100 placeholder:text-slate-500","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neon focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950","disabled:cursor-not-allowed disabled:opacity-50","file:border-0 file:bg-transparent file:text-sm file:font-medium",t),...n}));kc.displayName="Input";var Lk=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Mk=Lk.reduce((t,e)=>{const n=Sg(`Primitive.${e}`),r=A.forwardRef((s,i)=>{const{asChild:o,...c}=s,u=o?n:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),N.jsx(u,{...c,ref:i})});return r.displayName=`Primitive.${e}`,{...t,[e]:r}},{}),Fk="Label",Rg=A.forwardRef((t,e)=>N.jsx(Mk.label,{...t,ref:e,onMouseDown:n=>{var s;n.target.closest("button, input, select, textarea")||((s=t.onMouseDown)==null||s.call(t,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault())}}));Rg.displayName=Fk;var Pg=Rg;const Uk=ju("text-sm font-medium leading-none text-slate-200 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),xc=A.forwardRef(({className:t,...e},n)=>N.jsx(Pg,{ref:n,className:Nt(Uk(),t),...e}));xc.displayName=Pg.displayName;const zk=Lb({email:dh().min(1,"Email is required").email("Enter a valid email address"),password:dh().min(1,"Password is required").min(8,"Password must be at least 8 characters")});function jk(){return N.jsxs("svg",{"aria-hidden":"true",focusable:"false",width:"18",height:"18",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",children:[N.jsx("path",{d:"M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z",fill:"#4285F4"}),N.jsx("path",{d:"M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z",fill:"#34A853"}),N.jsx("path",{d:"M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z",fill:"#FBBC05"}),N.jsx("path",{d:"M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z",fill:"#EA4335"})]})}function $k(){return N.jsxs("div",{className:"relative my-5","aria-hidden":"true",children:[N.jsx("div",{className:"absolute inset-0 flex items-center",children:N.jsx("div",{className:"w-full border-t border-navy-700"})}),N.jsx("div",{className:"relative flex justify-center text-xs",children:N.jsx("span",{className:"bg-navy-900 px-2 text-slate-500",children:"or continue with"})})]})}function Bk(){const{login:t,loginWithGoogle:e}=Ig(),{currentUser:n,userRole:r}=Uc(),s=Mc(),[i,o]=A.useState(!1),c=A.useId(),u=A.useId(),l=A.useId(),{register:d,handleSubmit:p,formState:{errors:m,isSubmitting:_}}=Vv({resolver:qT(zk)});A.useEffect(()=>{n&&r&&s(Ws[r],{replace:!0})},[n,r,s]);const D=async L=>{try{await t(L)}catch{}},P=async()=>{o(!0);try{await e()}catch{}finally{o(!1)}},I=_||i;return N.jsx("div",{className:"flex min-h-screen items-center justify-center bg-navy-950 px-4",children:N.jsxs("main",{id:"main-content",className:"w-full max-w-sm focus-visible:outline-none",tabIndex:-1,"aria-label":"Sign in to StadiumSync",children:[N.jsxs("div",{className:"mb-8 text-center",children:[N.jsxs("h1",{className:"text-3xl font-bold tracking-tight",children:[N.jsx("span",{className:"text-white",children:"Stadium"}),N.jsx("span",{className:"text-neon",children:"Sync"})]}),N.jsx("p",{className:"mt-2 text-sm text-slate-400",children:"Sign in to access your dashboard"})]}),N.jsxs("div",{className:"rounded-xl border border-navy-700 bg-navy-900 p-8 shadow-xl",children:[N.jsx(Kr,{type:"button",variant:"outline",className:"flex w-full items-center justify-center gap-2 border-navy-600 bg-navy-800 text-slate-200 hover:bg-navy-700 focus-visible:ring-2 focus-visible:ring-neon",onClick:()=>void P(),disabled:I,"aria-label":"Sign in with Google","aria-busy":i,children:i?N.jsx(ro,{size:"sm",label:"Signing in with Google…"}):N.jsxs(N.Fragment,{children:[N.jsx(jk,{}),"Sign in with Google"]})}),N.jsx($k,{}),N.jsx("form",{id:l,onSubmit:L=>{p(D)(L)},noValidate:!0,"aria-label":"Email and password sign-in form",children:N.jsxs("div",{className:"space-y-5",children:[N.jsxs("div",{className:"space-y-1.5",children:[N.jsx(xc,{htmlFor:c,children:"Email address"}),N.jsx(kc,{id:c,type:"email",autoComplete:"email",placeholder:"you@example.com","aria-required":"true","aria-invalid":!!m.email,"aria-describedby":m.email?`${c}-error`:void 0,disabled:I,...d("email")}),m.email&&N.jsx("p",{id:`${c}-error`,role:"alert","aria-live":"polite",className:"text-xs text-red-400",children:m.email.message})]}),N.jsxs("div",{className:"space-y-1.5",children:[N.jsx(xc,{htmlFor:u,children:"Password"}),N.jsx(kc,{id:u,type:"password",autoComplete:"current-password",placeholder:"••••••••","aria-required":"true","aria-invalid":!!m.password,"aria-describedby":m.password?`${u}-error`:void 0,disabled:I,...d("password")}),m.password&&N.jsx("p",{id:`${u}-error`,role:"alert","aria-live":"polite",className:"text-xs text-red-400",children:m.password.message})]}),N.jsx(Kr,{type:"submit",className:"w-full",disabled:I,"aria-busy":_,children:_?N.jsx(ro,{size:"sm",label:"Signing in…"}):"Sign in"})]})})]}),N.jsx("p",{className:"mt-4 text-center text-xs text-slate-500",children:"Demo credentials vary by role. Contact your administrator."})]})})}/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var qk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=(t,e)=>{const n=A.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:c="",children:u,...l},d)=>A.createElement("svg",{ref:d,...qk,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${Wk(t)}`,c].join(" "),...l},[...e.map(([p,m])=>A.createElement(p,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=$u("Compass",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",key:"m9r19z"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=$u("ShieldOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",key:"1jlk70"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",key:"18rp1v"}]]);/**
 * @license lucide-react v0.363.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=$u("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function Zk(){const t=Mc(),{currentUser:e,userRole:n,logout:r}=Ig(),s=()=>{e&&n?t(Ws[n],{replace:!0}):t("/login",{replace:!0})};return N.jsxs("main",{id:"main-content",className:"flex min-h-screen flex-col items-center justify-center gap-6 bg-navy-950 px-4 text-center","aria-labelledby":"unauthorized-heading",tabIndex:-1,children:[N.jsx(Gk,{className:"h-16 w-16 text-red-500","aria-hidden":"true"}),N.jsxs("div",{children:[N.jsx("h1",{id:"unauthorized-heading",className:"text-2xl font-bold text-white",children:"Access Denied"}),N.jsx("p",{className:"mt-2 text-slate-400",children:"You don't have permission to view this page."})]}),N.jsxs("div",{className:"flex gap-3",children:[N.jsx(Kr,{onClick:s,children:"Go to my dashboard"}),N.jsx(Kr,{variant:"outline",onClick:()=>void r(),children:"Sign out"})]})]})}function Jd(){return N.jsxs("main",{id:"main-content",className:"flex min-h-screen flex-col items-center justify-center gap-6 bg-navy-950 px-4 text-center","aria-labelledby":"not-found-heading",tabIndex:-1,children:[N.jsx(Hk,{className:"h-16 w-16 text-neon animate-pulse-neon","aria-hidden":"true"}),N.jsxs("div",{children:[N.jsx("p",{className:"text-6xl font-extrabold text-neon","aria-hidden":"true",children:"404"}),N.jsx("h1",{id:"not-found-heading",className:"mt-2 text-2xl font-bold text-white",children:"Page not found"}),N.jsx("p",{className:"mt-2 text-slate-400",children:"The page you're looking for doesn't exist or has been moved."})]}),N.jsx(Kr,{asChild:!0,children:N.jsx(R_,{to:"/login",children:"Back to sign in"})})]})}function Jk(){return N.jsx(Sk,{children:N.jsx(tf,{})})}const Ga=A.lazy(()=>Gt(()=>import("./AppLayout-DOkTWMNJ.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),Qk=A.lazy(()=>Gt(()=>import("./Dashboard-BIUELPRX.js"),__vite__mapDeps([9,1,10,3,11,8,4,2]))),Yk=A.lazy(()=>Gt(()=>import("./MyTickets-BkMs-qMs.js"),__vite__mapDeps([12,1,10,3,11,2]))),Xk=A.lazy(()=>Gt(()=>import("./CrowdHeatmap-DG12syBR.js"),__vite__mapDeps([13,14,1,2]))),ex=A.lazy(()=>Gt(()=>import("./Dashboard-DcXvd6Qy.js"),__vite__mapDeps([15,1,10,3,7,16,5,2]))),tx=A.lazy(()=>Gt(()=>import("./EntryScanner-De4sY3jB.js"),__vite__mapDeps([17,1,10,3,7,16,18,2]))),nx=A.lazy(()=>Gt(()=>import("./Dashboard-Dw5uwkpQ.js"),__vite__mapDeps([19,1,10,3,5,8,20,6,2]))),rx=A.lazy(()=>Gt(()=>import("./UserManagement-CLxc3TC9.js"),__vite__mapDeps([21,1,10,3,20,2]))),sx=A.lazy(()=>Gt(()=>import("./CrowdMonitor-U4jqZ7Ot.js"),__vite__mapDeps([22,1,10,3,2]))),ix=A.lazy(()=>Gt(()=>import("./CrowdHeatmapAdmin-C0bd1gh6.js"),__vite__mapDeps([23,1,14,18,2]))),yt=N.jsx("div",{className:"flex h-screen items-center justify-center bg-navy-950","aria-live":"polite","aria-busy":"true",children:N.jsx(ro,{size:"lg",label:"Loading page…"})}),ox=P_([{element:N.jsx(Jk,{}),children:[{path:Xe.LOGIN,element:N.jsx(Bk,{})},{path:Xe.UNAUTHORIZED,element:N.jsx(Zk,{})},{path:"/404",element:N.jsx(Jd,{})},{path:Xe.HOME,element:N.jsx(Za,{to:Xe.LOGIN,replace:!0})},{element:N.jsx(ka,{allowedRoles:["attendee"]}),children:[{element:N.jsx(A.Suspense,{fallback:yt,children:N.jsx(Ga,{role:"attendee"})}),children:[{path:Xe.ATTENDEE_DASHBOARD,element:N.jsx(A.Suspense,{fallback:yt,children:N.jsx(Qk,{})})},{path:Xe.ATTENDEE_TICKETS,element:N.jsx(A.Suspense,{fallback:yt,children:N.jsx(Yk,{})})},{path:Xe.ATTENDEE_HEATMAP,element:N.jsx(A.Suspense,{fallback:yt,children:N.jsx(Xk,{})})}]}]},{element:N.jsx(ka,{allowedRoles:["staff"]}),children:[{element:N.jsx(A.Suspense,{fallback:yt,children:N.jsx(Ga,{role:"staff"})}),children:[{path:Xe.STAFF_DASHBOARD,element:N.jsx(A.Suspense,{fallback:yt,children:N.jsx(ex,{})})},{path:Xe.STAFF_SCANNER,element:N.jsx(A.Suspense,{fallback:yt,children:N.jsx(tx,{})})}]}]},{element:N.jsx(ka,{allowedRoles:["admin"]}),children:[{element:N.jsx(A.Suspense,{fallback:yt,children:N.jsx(Ga,{role:"admin"})}),children:[{path:Xe.ADMIN_DASHBOARD,element:N.jsx(A.Suspense,{fallback:yt,children:N.jsx(nx,{})})},{path:Xe.ADMIN_USERS,element:N.jsx(A.Suspense,{fallback:yt,children:N.jsx(rx,{})})},{path:Xe.ADMIN_CROWD,element:N.jsx(A.Suspense,{fallback:yt,children:N.jsx(sx,{})})},{path:Xe.ADMIN_HEATMAP,element:N.jsx(A.Suspense,{fallback:yt,children:N.jsx(ix,{})})}]}]},{path:"*",element:N.jsx(Jd,{})}]}]);function _t(t,e,{checkForDefaultPrevented:n=!0}={}){return function(s){if(t==null||t(s),n===!1||!s.defaultPrevented)return e==null?void 0:e(s)}}function Cg(t,e=[]){let n=[];function r(i,o){const c=A.createContext(o),u=n.length;n=[...n,o];const l=p=>{var L;const{scope:m,children:_,...D}=p,P=((L=m==null?void 0:m[t])==null?void 0:L[u])||c,I=A.useMemo(()=>D,Object.values(D));return N.jsx(P.Provider,{value:I,children:_})};l.displayName=i+"Provider";function d(p,m){var P;const _=((P=m==null?void 0:m[t])==null?void 0:P[u])||c,D=A.useContext(_);if(D)return D;if(o!==void 0)return o;throw new Error(`\`${p}\` must be used within \`${i}\``)}return[l,d]}const s=()=>{const i=n.map(o=>A.createContext(o));return function(c){const u=(c==null?void 0:c[t])||i;return A.useMemo(()=>({[`__scope${t}`]:{...c,[t]:u}}),[c,u])}};return s.scopeName=t,[r,ax(s,...e)]}function ax(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const r=t.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(i){const o=r.reduce((c,{useScope:u,scopeName:l})=>{const p=u(i)[`__scope${l}`];return{...c,...p}},{});return A.useMemo(()=>({[`__scope${e.scopeName}`]:o}),[o])}};return n.scopeName=e.scopeName,n}function Qd(t){const e=cx(t),n=A.forwardRef((r,s)=>{const{children:i,...o}=r,c=A.Children.toArray(i),u=c.find(lx);if(u){const l=u.props.children,d=c.map(p=>p===u?A.Children.count(l)>1?A.Children.only(null):A.isValidElement(l)?l.props.children:null:p);return N.jsx(e,{...o,ref:s,children:A.isValidElement(l)?A.cloneElement(l,void 0,d):null})}return N.jsx(e,{...o,ref:s,children:i})});return n.displayName=`${t}.Slot`,n}function cx(t){const e=A.forwardRef((n,r)=>{const{children:s,...i}=n;if(A.isValidElement(s)){const o=dx(s),c=hx(i,s.props);return s.type!==A.Fragment&&(c.ref=r?fa(r,o):o),A.cloneElement(s,c)}return A.Children.count(s)>1?A.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var ux=Symbol("radix.slottable");function lx(t){return A.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===ux}function hx(t,e){const n={...e};for(const r in e){const s=t[r],i=e[r];/^on[A-Z]/.test(r)?s&&i?n[r]=(...c)=>{const u=i(...c);return s(...c),u}:s&&(n[r]=s):r==="style"?n[r]={...s,...i}:r==="className"&&(n[r]=[s,i].filter(Boolean).join(" "))}return{...t,...n}}function dx(t){var r,s;let e=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(s=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:s.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}function fx(t){const e=t+"CollectionProvider",[n,r]=Cg(e),[s,i]=n(e,{collectionRef:{current:null},itemMap:new Map}),o=P=>{const{scope:I,children:L}=P,C=ke.useRef(null),z=ke.useRef(new Map).current;return N.jsx(s,{scope:I,itemMap:z,collectionRef:C,children:L})};o.displayName=e;const c=t+"CollectionSlot",u=Qd(c),l=ke.forwardRef((P,I)=>{const{scope:L,children:C}=P,z=i(c,L),G=ur(I,z.collectionRef);return N.jsx(u,{ref:G,children:C})});l.displayName=c;const d=t+"CollectionItemSlot",p="data-radix-collection-item",m=Qd(d),_=ke.forwardRef((P,I)=>{const{scope:L,children:C,...z}=P,G=ke.useRef(null),H=ur(I,G),Y=i(d,L);return ke.useEffect(()=>(Y.itemMap.set(G,{ref:G,...z}),()=>void Y.itemMap.delete(G))),N.jsx(m,{[p]:"",ref:H,children:C})});_.displayName=d;function D(P){const I=i(t+"CollectionConsumer",P);return ke.useCallback(()=>{const C=I.collectionRef.current;if(!C)return[];const z=Array.from(C.querySelectorAll(`[${p}]`));return Array.from(I.itemMap.values()).sort((Y,b)=>z.indexOf(Y.ref.current)-z.indexOf(b.ref.current))},[I.collectionRef,I.itemMap])}return[{Provider:o,Slot:l,ItemSlot:_},D,r]}function px(t){const e=mx(t),n=A.forwardRef((r,s)=>{const{children:i,...o}=r,c=A.Children.toArray(i),u=c.find(_x);if(u){const l=u.props.children,d=c.map(p=>p===u?A.Children.count(l)>1?A.Children.only(null):A.isValidElement(l)?l.props.children:null:p);return N.jsx(e,{...o,ref:s,children:A.isValidElement(l)?A.cloneElement(l,void 0,d):null})}return N.jsx(e,{...o,ref:s,children:i})});return n.displayName=`${t}.Slot`,n}function mx(t){const e=A.forwardRef((n,r)=>{const{children:s,...i}=n;if(A.isValidElement(s)){const o=vx(s),c=yx(i,s.props);return s.type!==A.Fragment&&(c.ref=r?fa(r,o):o),A.cloneElement(s,c)}return A.Children.count(s)>1?A.Children.only(null):null});return e.displayName=`${t}.SlotClone`,e}var gx=Symbol("radix.slottable");function _x(t){return A.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===gx}function yx(t,e){const n={...e};for(const r in e){const s=t[r],i=e[r];/^on[A-Z]/.test(r)?s&&i?n[r]=(...c)=>{const u=i(...c);return s(...c),u}:s&&(n[r]=s):r==="style"?n[r]={...s,...i}:r==="className"&&(n[r]=[s,i].filter(Boolean).join(" "))}return{...t,...n}}function vx(t){var r,s;let e=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(s=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:s.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var Ex=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Zt=Ex.reduce((t,e)=>{const n=px(`Primitive.${e}`),r=A.forwardRef((s,i)=>{const{asChild:o,...c}=s,u=o?n:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),N.jsx(u,{...c,ref:i})});return r.displayName=`Primitive.${e}`,{...t,[e]:r}},{});function kg(t,e){t&&Lc.flushSync(()=>t.dispatchEvent(e))}function lr(t){const e=A.useRef(t);return A.useEffect(()=>{e.current=t}),A.useMemo(()=>(...n)=>{var r;return(r=e.current)==null?void 0:r.call(e,...n)},[])}function wx(t,e=globalThis==null?void 0:globalThis.document){const n=lr(t);A.useEffect(()=>{const r=s=>{s.key==="Escape"&&n(s)};return e.addEventListener("keydown",r,{capture:!0}),()=>e.removeEventListener("keydown",r,{capture:!0})},[n,e])}var Tx="DismissableLayer",Nc="dismissableLayer.update",bx="dismissableLayer.pointerDownOutside",Ix="dismissableLayer.focusOutside",Yd,xg=A.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ng=A.forwardRef((t,e)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:s,onFocusOutside:i,onInteractOutside:o,onDismiss:c,...u}=t,l=A.useContext(xg),[d,p]=A.useState(null),m=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,_]=A.useState({}),D=ur(e,b=>p(b)),P=Array.from(l.layers),[I]=[...l.layersWithOutsidePointerEventsDisabled].slice(-1),L=P.indexOf(I),C=d?P.indexOf(d):-1,z=l.layersWithOutsidePointerEventsDisabled.size>0,G=C>=L,H=Sx(b=>{const v=b.target,E=[...l.branches].some(R=>R.contains(v));!G||E||(s==null||s(b),o==null||o(b),b.defaultPrevented||c==null||c())},m),Y=Rx(b=>{const v=b.target;[...l.branches].some(R=>R.contains(v))||(i==null||i(b),o==null||o(b),b.defaultPrevented||c==null||c())},m);return wx(b=>{C===l.layers.size-1&&(r==null||r(b),!b.defaultPrevented&&c&&(b.preventDefault(),c()))},m),A.useEffect(()=>{if(d)return n&&(l.layersWithOutsidePointerEventsDisabled.size===0&&(Yd=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),l.layersWithOutsidePointerEventsDisabled.add(d)),l.layers.add(d),Xd(),()=>{n&&l.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=Yd)}},[d,m,n,l]),A.useEffect(()=>()=>{d&&(l.layers.delete(d),l.layersWithOutsidePointerEventsDisabled.delete(d),Xd())},[d,l]),A.useEffect(()=>{const b=()=>_({});return document.addEventListener(Nc,b),()=>document.removeEventListener(Nc,b)},[]),N.jsx(Zt.div,{...u,ref:D,style:{pointerEvents:z?G?"auto":"none":void 0,...t.style},onFocusCapture:_t(t.onFocusCapture,Y.onFocusCapture),onBlurCapture:_t(t.onBlurCapture,Y.onBlurCapture),onPointerDownCapture:_t(t.onPointerDownCapture,H.onPointerDownCapture)})});Ng.displayName=Tx;var Ax="DismissableLayerBranch",Dg=A.forwardRef((t,e)=>{const n=A.useContext(xg),r=A.useRef(null),s=ur(e,r);return A.useEffect(()=>{const i=r.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),N.jsx(Zt.div,{...t,ref:s})});Dg.displayName=Ax;function Sx(t,e=globalThis==null?void 0:globalThis.document){const n=lr(t),r=A.useRef(!1),s=A.useRef(()=>{});return A.useEffect(()=>{const i=c=>{if(c.target&&!r.current){let u=function(){Og(bx,n,l,{discrete:!0})};const l={originalEvent:c};c.pointerType==="touch"?(e.removeEventListener("click",s.current),s.current=u,e.addEventListener("click",s.current,{once:!0})):u()}else e.removeEventListener("click",s.current);r.current=!1},o=window.setTimeout(()=>{e.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(o),e.removeEventListener("pointerdown",i),e.removeEventListener("click",s.current)}},[e,n]),{onPointerDownCapture:()=>r.current=!0}}function Rx(t,e=globalThis==null?void 0:globalThis.document){const n=lr(t),r=A.useRef(!1);return A.useEffect(()=>{const s=i=>{i.target&&!r.current&&Og(Ix,n,{originalEvent:i},{discrete:!1})};return e.addEventListener("focusin",s),()=>e.removeEventListener("focusin",s)},[e,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Xd(){const t=new CustomEvent(Nc);document.dispatchEvent(t)}function Og(t,e,n,{discrete:r}){const s=n.originalEvent.target,i=new CustomEvent(t,{bubbles:!1,cancelable:!0,detail:n});e&&s.addEventListener(t,e,{once:!0}),r?kg(s,i):s.dispatchEvent(i)}var Px=Ng,Cx=Dg,si=globalThis!=null&&globalThis.document?A.useLayoutEffect:()=>{},kx="Portal",Vg=A.forwardRef((t,e)=>{var c;const{container:n,...r}=t,[s,i]=A.useState(!1);si(()=>i(!0),[]);const o=n||s&&((c=globalThis==null?void 0:globalThis.document)==null?void 0:c.body);return o?C_.createPortal(N.jsx(Zt.div,{...r,ref:e}),o):null});Vg.displayName=kx;function xx(t,e){return A.useReducer((n,r)=>e[n][r]??n,t)}var Lg=t=>{const{present:e,children:n}=t,r=Nx(e),s=typeof n=="function"?n({present:r.isPresent}):A.Children.only(n),i=ur(r.ref,Dx(s));return typeof n=="function"||r.isPresent?A.cloneElement(s,{ref:i}):null};Lg.displayName="Presence";function Nx(t){const[e,n]=A.useState(),r=A.useRef(null),s=A.useRef(t),i=A.useRef("none"),o=t?"mounted":"unmounted",[c,u]=xx(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return A.useEffect(()=>{const l=Bi(r.current);i.current=c==="mounted"?l:"none"},[c]),si(()=>{const l=r.current,d=s.current;if(d!==t){const m=i.current,_=Bi(l);t?u("MOUNT"):_==="none"||(l==null?void 0:l.display)==="none"?u("UNMOUNT"):u(d&&m!==_?"ANIMATION_OUT":"UNMOUNT"),s.current=t}},[t,u]),si(()=>{if(e){let l;const d=e.ownerDocument.defaultView??window,p=_=>{const P=Bi(r.current).includes(CSS.escape(_.animationName));if(_.target===e&&P&&(u("ANIMATION_END"),!s.current)){const I=e.style.animationFillMode;e.style.animationFillMode="forwards",l=d.setTimeout(()=>{e.style.animationFillMode==="forwards"&&(e.style.animationFillMode=I)})}},m=_=>{_.target===e&&(i.current=Bi(r.current))};return e.addEventListener("animationstart",m),e.addEventListener("animationcancel",p),e.addEventListener("animationend",p),()=>{d.clearTimeout(l),e.removeEventListener("animationstart",m),e.removeEventListener("animationcancel",p),e.removeEventListener("animationend",p)}}else u("ANIMATION_END")},[e,u]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:A.useCallback(l=>{r.current=l?getComputedStyle(l):null,n(l)},[])}}function Bi(t){return(t==null?void 0:t.animationName)||"none"}function Dx(t){var r,s;let e=(r=Object.getOwnPropertyDescriptor(t.props,"ref"))==null?void 0:r.get,n=e&&"isReactWarning"in e&&e.isReactWarning;return n?t.ref:(e=(s=Object.getOwnPropertyDescriptor(t,"ref"))==null?void 0:s.get,n=e&&"isReactWarning"in e&&e.isReactWarning,n?t.props.ref:t.props.ref||t.ref)}var Ox=nf[" useInsertionEffect ".trim().toString()]||si;function Vx({prop:t,defaultProp:e,onChange:n=()=>{},caller:r}){const[s,i,o]=Lx({defaultProp:e,onChange:n}),c=t!==void 0,u=c?t:s;{const d=A.useRef(t!==void 0);A.useEffect(()=>{const p=d.current;p!==c&&console.warn(`${r} is changing from ${p?"controlled":"uncontrolled"} to ${c?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=c},[c,r])}const l=A.useCallback(d=>{var p;if(c){const m=Mx(d)?d(t):d;m!==t&&((p=o.current)==null||p.call(o,m))}else i(d)},[c,t,i,o]);return[u,l]}function Lx({defaultProp:t,onChange:e}){const[n,r]=A.useState(t),s=A.useRef(n),i=A.useRef(e);return Ox(()=>{i.current=e},[e]),A.useEffect(()=>{var o;s.current!==n&&((o=i.current)==null||o.call(i,n),s.current=n)},[n,s]),[n,r,i]}function Mx(t){return typeof t=="function"}var Fx=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),Ux="VisuallyHidden",Bu=A.forwardRef((t,e)=>N.jsx(Zt.span,{...t,ref:e,style:{...Fx,...t.style}}));Bu.displayName=Ux;var qu="ToastProvider",[Wu,zx,jx]=fx("Toast"),[Mg]=Cg("Toast",[jx]),[$x,pa]=Mg(qu),Fg=t=>{const{__scopeToast:e,label:n="Notification",duration:r=5e3,swipeDirection:s="right",swipeThreshold:i=50,children:o}=t,[c,u]=A.useState(null),[l,d]=A.useState(0),p=A.useRef(!1),m=A.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${qu}\`. Expected non-empty \`string\`.`),N.jsx(Wu.Provider,{scope:e,children:N.jsx($x,{scope:e,label:n,duration:r,swipeDirection:s,swipeThreshold:i,toastCount:l,viewport:c,onViewportChange:u,onToastAdd:A.useCallback(()=>d(_=>_+1),[]),onToastRemove:A.useCallback(()=>d(_=>_-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:m,children:o})})};Fg.displayName=qu;var Ug="ToastViewport",Bx=["F8"],Dc="toast.viewportPause",Oc="toast.viewportResume",zg=A.forwardRef((t,e)=>{const{__scopeToast:n,hotkey:r=Bx,label:s="Notifications ({hotkey})",...i}=t,o=pa(Ug,n),c=zx(n),u=A.useRef(null),l=A.useRef(null),d=A.useRef(null),p=A.useRef(null),m=ur(e,p,o.onViewportChange),_=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),D=o.toastCount>0;A.useEffect(()=>{const I=L=>{var z;r.length!==0&&r.every(G=>L[G]||L.code===G)&&((z=p.current)==null||z.focus())};return document.addEventListener("keydown",I),()=>document.removeEventListener("keydown",I)},[r]),A.useEffect(()=>{const I=u.current,L=p.current;if(D&&I&&L){const C=()=>{if(!o.isClosePausedRef.current){const Y=new CustomEvent(Dc);L.dispatchEvent(Y),o.isClosePausedRef.current=!0}},z=()=>{if(o.isClosePausedRef.current){const Y=new CustomEvent(Oc);L.dispatchEvent(Y),o.isClosePausedRef.current=!1}},G=Y=>{!I.contains(Y.relatedTarget)&&z()},H=()=>{I.contains(document.activeElement)||z()};return I.addEventListener("focusin",C),I.addEventListener("focusout",G),I.addEventListener("pointermove",C),I.addEventListener("pointerleave",H),window.addEventListener("blur",C),window.addEventListener("focus",z),()=>{I.removeEventListener("focusin",C),I.removeEventListener("focusout",G),I.removeEventListener("pointermove",C),I.removeEventListener("pointerleave",H),window.removeEventListener("blur",C),window.removeEventListener("focus",z)}}},[D,o.isClosePausedRef]);const P=A.useCallback(({tabbingDirection:I})=>{const C=c().map(z=>{const G=z.ref.current,H=[G,...nN(G)];return I==="forwards"?H:H.reverse()});return(I==="forwards"?C.reverse():C).flat()},[c]);return A.useEffect(()=>{const I=p.current;if(I){const L=C=>{var H,Y,b;const z=C.altKey||C.ctrlKey||C.metaKey;if(C.key==="Tab"&&!z){const v=document.activeElement,E=C.shiftKey;if(C.target===I&&E){(H=l.current)==null||H.focus();return}const w=P({tabbingDirection:E?"backwards":"forwards"}),y=w.findIndex($=>$===v);Ka(w.slice(y+1))?C.preventDefault():E?(Y=l.current)==null||Y.focus():(b=d.current)==null||b.focus()}};return I.addEventListener("keydown",L),()=>I.removeEventListener("keydown",L)}},[c,P]),N.jsxs(Cx,{ref:u,role:"region","aria-label":s.replace("{hotkey}",_),tabIndex:-1,style:{pointerEvents:D?void 0:"none"},children:[D&&N.jsx(Vc,{ref:l,onFocusFromOutsideViewport:()=>{const I=P({tabbingDirection:"forwards"});Ka(I)}}),N.jsx(Wu.Slot,{scope:n,children:N.jsx(Zt.ol,{tabIndex:-1,...i,ref:m})}),D&&N.jsx(Vc,{ref:d,onFocusFromOutsideViewport:()=>{const I=P({tabbingDirection:"backwards"});Ka(I)}})]})});zg.displayName=Ug;var jg="ToastFocusProxy",Vc=A.forwardRef((t,e)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...s}=t,i=pa(jg,n);return N.jsx(Bu,{tabIndex:0,...s,ref:e,style:{position:"fixed"},onFocus:o=>{var l;const c=o.relatedTarget;!((l=i.viewport)!=null&&l.contains(c))&&r()}})});Vc.displayName=jg;var _i="Toast",qx="toast.swipeStart",Wx="toast.swipeMove",Hx="toast.swipeCancel",Gx="toast.swipeEnd",$g=A.forwardRef((t,e)=>{const{forceMount:n,open:r,defaultOpen:s,onOpenChange:i,...o}=t,[c,u]=Vx({prop:r,defaultProp:s??!0,onChange:i,caller:_i});return N.jsx(Lg,{present:n||c,children:N.jsx(Jx,{open:c,...o,ref:e,onClose:()=>u(!1),onPause:lr(t.onPause),onResume:lr(t.onResume),onSwipeStart:_t(t.onSwipeStart,l=>{l.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:_t(t.onSwipeMove,l=>{const{x:d,y:p}=l.detail.delta;l.currentTarget.setAttribute("data-swipe","move"),l.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${d}px`),l.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${p}px`)}),onSwipeCancel:_t(t.onSwipeCancel,l=>{l.currentTarget.setAttribute("data-swipe","cancel"),l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:_t(t.onSwipeEnd,l=>{const{x:d,y:p}=l.detail.delta;l.currentTarget.setAttribute("data-swipe","end"),l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),l.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${d}px`),l.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${p}px`),u(!1)})})})});$g.displayName=_i;var[Kx,Zx]=Mg(_i,{onClose(){}}),Jx=A.forwardRef((t,e)=>{const{__scopeToast:n,type:r="foreground",duration:s,open:i,onClose:o,onEscapeKeyDown:c,onPause:u,onResume:l,onSwipeStart:d,onSwipeMove:p,onSwipeCancel:m,onSwipeEnd:_,...D}=t,P=pa(_i,n),[I,L]=A.useState(null),C=ur(e,$=>L($)),z=A.useRef(null),G=A.useRef(null),H=s||P.duration,Y=A.useRef(0),b=A.useRef(H),v=A.useRef(0),{onToastAdd:E,onToastRemove:R}=P,S=lr(()=>{var oe;(I==null?void 0:I.contains(document.activeElement))&&((oe=P.viewport)==null||oe.focus()),o()}),w=A.useCallback($=>{!$||$===1/0||(window.clearTimeout(v.current),Y.current=new Date().getTime(),v.current=window.setTimeout(S,$))},[S]);A.useEffect(()=>{const $=P.viewport;if($){const oe=()=>{w(b.current),l==null||l()},ye=()=>{const Pe=new Date().getTime()-Y.current;b.current=b.current-Pe,window.clearTimeout(v.current),u==null||u()};return $.addEventListener(Dc,ye),$.addEventListener(Oc,oe),()=>{$.removeEventListener(Dc,ye),$.removeEventListener(Oc,oe)}}},[P.viewport,H,u,l,w]),A.useEffect(()=>{i&&!P.isClosePausedRef.current&&w(H)},[i,H,P.isClosePausedRef,w]),A.useEffect(()=>(E(),()=>R()),[E,R]);const y=A.useMemo(()=>I?Zg(I):null,[I]);return P.viewport?N.jsxs(N.Fragment,{children:[y&&N.jsx(Qx,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite",children:y}),N.jsx(Kx,{scope:n,onClose:S,children:Lc.createPortal(N.jsx(Wu.ItemSlot,{scope:n,children:N.jsx(Px,{asChild:!0,onEscapeKeyDown:_t(c,()=>{P.isFocusedToastEscapeKeyDownRef.current||S(),P.isFocusedToastEscapeKeyDownRef.current=!1}),children:N.jsx(Zt.li,{tabIndex:0,"data-state":i?"open":"closed","data-swipe-direction":P.swipeDirection,...D,ref:C,style:{userSelect:"none",touchAction:"none",...t.style},onKeyDown:_t(t.onKeyDown,$=>{$.key==="Escape"&&(c==null||c($.nativeEvent),$.nativeEvent.defaultPrevented||(P.isFocusedToastEscapeKeyDownRef.current=!0,S()))}),onPointerDown:_t(t.onPointerDown,$=>{$.button===0&&(z.current={x:$.clientX,y:$.clientY})}),onPointerMove:_t(t.onPointerMove,$=>{if(!z.current)return;const oe=$.clientX-z.current.x,ye=$.clientY-z.current.y,Pe=!!G.current,De=["left","right"].includes(P.swipeDirection),be=["left","up"].includes(P.swipeDirection)?Math.min:Math.max,bt=De?be(0,oe):0,Qe=De?0:be(0,ye),Dt=$.pointerType==="touch"?10:2,Ot={x:bt,y:Qe},Vt={originalEvent:$,delta:Ot};Pe?(G.current=Ot,qi(Wx,p,Vt,{discrete:!1})):ef(Ot,P.swipeDirection,Dt)?(G.current=Ot,qi(qx,d,Vt,{discrete:!1}),$.target.setPointerCapture($.pointerId)):(Math.abs(oe)>Dt||Math.abs(ye)>Dt)&&(z.current=null)}),onPointerUp:_t(t.onPointerUp,$=>{const oe=G.current,ye=$.target;if(ye.hasPointerCapture($.pointerId)&&ye.releasePointerCapture($.pointerId),G.current=null,z.current=null,oe){const Pe=$.currentTarget,De={originalEvent:$,delta:oe};ef(oe,P.swipeDirection,P.swipeThreshold)?qi(Gx,_,De,{discrete:!0}):qi(Hx,m,De,{discrete:!0}),Pe.addEventListener("click",be=>be.preventDefault(),{once:!0})}})})})}),P.viewport)})]}):null}),Qx=t=>{const{__scopeToast:e,children:n,...r}=t,s=pa(_i,e),[i,o]=A.useState(!1),[c,u]=A.useState(!1);return eN(()=>o(!0)),A.useEffect(()=>{const l=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(l)},[]),c?null:N.jsx(Vg,{asChild:!0,children:N.jsx(Bu,{...r,children:i&&N.jsxs(N.Fragment,{children:[s.label," ",n]})})})},Yx="ToastTitle",Bg=A.forwardRef((t,e)=>{const{__scopeToast:n,...r}=t;return N.jsx(Zt.div,{...r,ref:e})});Bg.displayName=Yx;var Xx="ToastDescription",qg=A.forwardRef((t,e)=>{const{__scopeToast:n,...r}=t;return N.jsx(Zt.div,{...r,ref:e})});qg.displayName=Xx;var Wg="ToastAction",Hg=A.forwardRef((t,e)=>{const{altText:n,...r}=t;return n.trim()?N.jsx(Kg,{altText:n,asChild:!0,children:N.jsx(Hu,{...r,ref:e})}):(console.error(`Invalid prop \`altText\` supplied to \`${Wg}\`. Expected non-empty \`string\`.`),null)});Hg.displayName=Wg;var Gg="ToastClose",Hu=A.forwardRef((t,e)=>{const{__scopeToast:n,...r}=t,s=Zx(Gg,n);return N.jsx(Kg,{asChild:!0,children:N.jsx(Zt.button,{type:"button",...r,ref:e,onClick:_t(t.onClick,s.onClose)})})});Hu.displayName=Gg;var Kg=A.forwardRef((t,e)=>{const{__scopeToast:n,altText:r,...s}=t;return N.jsx(Zt.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...s,ref:e})});function Zg(t){const e=[];return Array.from(t.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&e.push(r.textContent),tN(r)){const s=r.ariaHidden||r.hidden||r.style.display==="none",i=r.dataset.radixToastAnnounceExclude==="";if(!s)if(i){const o=r.dataset.radixToastAnnounceAlt;o&&e.push(o)}else e.push(...Zg(r))}}),e}function qi(t,e,n,{discrete:r}){const s=n.originalEvent.currentTarget,i=new CustomEvent(t,{bubbles:!0,cancelable:!0,detail:n});e&&s.addEventListener(t,e,{once:!0}),r?kg(s,i):s.dispatchEvent(i)}var ef=(t,e,n=0)=>{const r=Math.abs(t.x),s=Math.abs(t.y),i=r>s;return e==="left"||e==="right"?i&&r>n:!i&&s>n};function eN(t=()=>{}){const e=lr(t);si(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(e)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[e])}function tN(t){return t.nodeType===t.ELEMENT_NODE}function nN(t){const e=[],n=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const s=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||s?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)e.push(n.currentNode);return e}function Ka(t){const e=document.activeElement;return t.some(n=>n===e?!0:(n.focus(),document.activeElement!==e))}var rN=Fg,Jg=zg,Qg=$g,Yg=Bg,Xg=qg,e_=Hg,t_=Hu;const sN=rN,n_=A.forwardRef(({className:t,...e},n)=>N.jsx(Jg,{ref:n,className:Nt("fixed bottom-4 right-4 z-[100] flex max-h-screen w-full max-w-[420px] flex-col gap-2 p-4",t),...e}));n_.displayName=Jg.displayName;const iN=ju(["group pointer-events-auto relative flex w-full items-center justify-between","space-x-4 overflow-hidden rounded-md border p-4 pr-8 shadow-lg","transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)]","data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none","data-[state=open]:animate-fade-in data-[state=closed]:opacity-0"],{variants:{variant:{default:"border-navy-600 bg-navy-800 text-slate-100",success:"border-emerald-600 bg-emerald-950 text-emerald-100",warning:"border-amber-600 bg-amber-950 text-amber-100",destructive:"border-red-600 bg-red-950 text-red-100"}},defaultVariants:{variant:"default"}}),oN=A.forwardRef(({className:t,variant:e,...n},r)=>N.jsx(Qg,{ref:r,className:Nt(iN({variant:e}),t),...n}));oN.displayName=Qg.displayName;const aN=A.forwardRef(({className:t,...e},n)=>N.jsx(e_,{ref:n,className:Nt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-navy-600","bg-transparent px-3 text-sm font-medium transition-colors","hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2","disabled:pointer-events-none disabled:opacity-50",t),...e}));aN.displayName=e_.displayName;const cN=A.forwardRef(({className:t,...e},n)=>N.jsx(t_,{ref:n,"aria-label":"Close notification",className:Nt("absolute right-2 top-2 rounded-md p-1 opacity-70 transition-opacity","hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-neon",t),"toast-close":"",...e,children:N.jsx(Kk,{className:"h-4 w-4","aria-hidden":"true"})}));cN.displayName=t_.displayName;const uN=A.forwardRef(({className:t,...e},n)=>N.jsx(Yg,{ref:n,className:Nt("text-sm font-semibold",t),...e}));uN.displayName=Yg.displayName;const lN=A.forwardRef(({className:t,...e},n)=>N.jsx(Xg,{ref:n,className:Nt("text-sm opacity-90",t),...e}));lN.displayName=Xg.displayName;function hN(){return N.jsxs(sN,{children:[N.jsx(k_,{router:ox}),N.jsx(n_,{}),N.jsx(Ay,{position:"top-right",toastOptions:{duration:5e3,style:{background:"#0f172a",color:"#e2e8f0",border:"1px solid #1e293b"},error:{iconTheme:{primary:"#f87171",secondary:"#0f172a"}},success:{iconTheme:{primary:"#34d399",secondary:"#0f172a"}}}})]})}const r_=document.getElementById("root");if(!r_)throw new Error("[StadiumSync] Root element #root not found. Check your index.html.");of(r_).render(N.jsx(A.StrictMode,{children:N.jsx(hN,{})}));export{Kr as B,kc as I,ro as L,Xe as R,Kk as X,Nt as a,xc as b,$u as c,mN as d,ju as e,pN as f,vN as g,wN as h,EN as i,N as j,ik as k,Ak as l,gN as o,Ig as u};
