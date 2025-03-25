import{r as c,u as ct,a as J,j as d,g as oe,b as V,c as re,d as H,s as z,e as se,f as Ae,m as tt,h as nt,i as ot,k as dt,l as xe,R as me,n as Z,B as K,o as ye,L as ut,T as A,p as ft,q as pt,t as mt,G as be}from"./index-BY2ZpzLm.js";import{P as ht,S as gt,K as xt,a as bt,V as vt,b as yt}from"./swiper-react-8C0k9ZXJ.js";import{u as Le,C as Et,G as Pt,a as Rt}from"./useNavigationService-Bz_ZlZNs.js";import{T as Tt,g as rt,a as Be,r as Ct,u as ne,o as W,e as St,P as wt,G as Mt,b as kt,c as _e,d as he,C as It,f as jt,h as Lt,S as Nt,i as $t,E as Ft,j as Ot,Y as fe,D as Dt,k as Se,l as At,m as Bt,n as _t,p as Gt,L as Ut}from"./ChessDataService-RvTYR6lJ.js";import{o as Q,d as Kt,a as Ge,L as zt,P as le}from"./Link-CwxqOqVM.js";function Ue(...e){return e.reduce((t,n)=>n==null?t:function(...s){t.apply(this,s),n.apply(this,s)},()=>{})}function st(e=window){const t=e.document.documentElement.clientWidth;return e.innerWidth-t}function Ht(e){return typeof e=="string"}const Wt={entering:{opacity:1},entered:{opacity:1}},Yt=c.forwardRef(function(t,n){const o=ct(),s={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:i,appear:l=!0,children:a,easing:m,in:g,onEnter:E,onEntered:b,onEntering:C,onExit:p,onExited:x,onExiting:k,style:S,timeout:h=s,TransitionComponent:f=Tt,...r}=t,u=c.useRef(null),P=J(u,rt(a),n),w=I=>T=>{if(I){const v=u.current;T===void 0?I(v):I(v,T)}},M=w(C),R=w((I,T)=>{Ct(I);const v=Be({style:S,timeout:h,easing:m},{mode:"enter"});I.style.webkitTransition=o.transitions.create("opacity",v),I.style.transition=o.transitions.create("opacity",v),E&&E(I,T)}),y=w(b),L=w(k),$=w(I=>{const T=Be({style:S,timeout:h,easing:m},{mode:"exit"});I.style.webkitTransition=o.transitions.create("opacity",T),I.style.transition=o.transitions.create("opacity",T),p&&p(I)}),D=w(x),B=I=>{i&&i(u.current,I)};return d.jsx(f,{appear:l,in:g,nodeRef:u,onEnter:R,onEntered:y,onEntering:M,onExit:$,onExited:D,onExiting:L,addEndListener:B,timeout:h,...r,children:(I,T)=>c.cloneElement(a,{style:{opacity:0,visibility:I==="exited"&&!g?"hidden":void 0,...Wt[I],...S,...a.props.style},ref:P,...T})})});function Vt(e){return oe("MuiBackdrop",e)}V("MuiBackdrop",["root","invisible"]);const qt=e=>{const{ownerState:t,...n}=e;return n},Xt=e=>{const{classes:t,invisible:n}=e;return se({root:["root",n&&"invisible"]},Vt,t)},Qt=z("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]}),Jt=c.forwardRef(function(t,n){const o=re({props:t,name:"MuiBackdrop"}),{children:s,className:i,component:l="div",invisible:a=!1,open:m,components:g={},componentsProps:E={},slotProps:b={},slots:C={},TransitionComponent:p,transitionDuration:x,...k}=o,S={...o,component:l,invisible:a},h=Xt(S),f={transition:p,root:g.Root,...C},r={...E,...b},u={slots:f,slotProps:r},[P,w]=ne("root",{elementType:Qt,externalForwardedProps:u,className:H(h.root,i),ownerState:S}),[M,R]=ne("transition",{elementType:Yt,externalForwardedProps:u,ownerState:S}),y=qt(R);return d.jsx(M,{in:m,timeout:x,...k,...y,children:d.jsx(P,{"aria-hidden":!0,...w,classes:h,ref:n,children:s})})});function Zt(e){const t=W(e);return t.body===e?Q(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function pe(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function Ke(e){return parseInt(Q(e).getComputedStyle(e).paddingRight,10)||0}function en(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].includes(e.tagName),o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||o}function ze(e,t,n,o,s){const i=[t,n,...o];[].forEach.call(e.children,l=>{const a=!i.includes(l),m=!en(l);a&&m&&pe(l,s)})}function we(e,t){let n=-1;return e.some((o,s)=>t(o)?(n=s,!0):!1),n}function tn(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(Zt(o)){const l=st(Q(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${Ke(o)+l}px`;const a=W(o).querySelectorAll(".mui-fixed");[].forEach.call(a,m=>{n.push({value:m.style.paddingRight,property:"padding-right",el:m}),m.style.paddingRight=`${Ke(m)+l}px`})}let i;if(o.parentNode instanceof DocumentFragment)i=W(o).body;else{const l=o.parentElement,a=Q(o);i=(l==null?void 0:l.nodeName)==="HTML"&&a.getComputedStyle(l).overflowY==="scroll"?l:o}n.push({value:i.style.overflow,property:"overflow",el:i},{value:i.style.overflowX,property:"overflow-x",el:i},{value:i.style.overflowY,property:"overflow-y",el:i}),i.style.overflow="hidden"}return()=>{n.forEach(({value:i,el:l,property:a})=>{i?l.style.setProperty(a,i):l.style.removeProperty(a)})}}function nn(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class on{constructor(){this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&pe(t.modalRef,!1);const s=nn(n);ze(n,t.mount,t.modalRef,s,!0);const i=we(this.containers,l=>l.container===n);return i!==-1?(this.containers[i].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:s}),o)}mount(t,n){const o=we(this.containers,i=>i.modals.includes(t)),s=this.containers[o];s.restore||(s.restore=tn(s,n))}remove(t,n=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const s=we(this.containers,l=>l.modals.includes(t)),i=this.containers[s];if(i.modals.splice(i.modals.indexOf(t),1),this.modals.splice(o,1),i.modals.length===0)i.restore&&i.restore(),t.modalRef&&pe(t.modalRef,n),ze(i.container,t.mount,t.modalRef,i.hiddenSiblings,!1),this.containers.splice(s,1);else{const l=i.modals[i.modals.length-1];l.modalRef&&pe(l.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}const rn=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function sn(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function an(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function ln(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||an(e))}function cn(e){const t=[],n=[];return Array.from(e.querySelectorAll(rn)).forEach((o,s)=>{const i=sn(o);i===-1||!ln(o)||(i===0?t.push(o):n.push({documentOrder:s,tabIndex:i,node:o}))}),n.sort((o,s)=>o.tabIndex===s.tabIndex?o.documentOrder-s.documentOrder:o.tabIndex-s.tabIndex).map(o=>o.node).concat(t)}function dn(){return!0}function un(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:s=!1,getTabbable:i=cn,isEnabled:l=dn,open:a}=e,m=c.useRef(!1),g=c.useRef(null),E=c.useRef(null),b=c.useRef(null),C=c.useRef(null),p=c.useRef(!1),x=c.useRef(null),k=J(rt(t),x),S=c.useRef(null);c.useEffect(()=>{!a||!x.current||(p.current=!n)},[n,a]),c.useEffect(()=>{if(!a||!x.current)return;const r=W(x.current);return x.current.contains(r.activeElement)||(x.current.hasAttribute("tabIndex")||x.current.setAttribute("tabIndex","-1"),p.current&&x.current.focus()),()=>{s||(b.current&&b.current.focus&&(m.current=!0,b.current.focus()),b.current=null)}},[a]),c.useEffect(()=>{if(!a||!x.current)return;const r=W(x.current),u=M=>{S.current=M,!(o||!l()||M.key!=="Tab")&&r.activeElement===x.current&&M.shiftKey&&(m.current=!0,E.current&&E.current.focus())},P=()=>{var y,L;const M=x.current;if(M===null)return;if(!r.hasFocus()||!l()||m.current){m.current=!1;return}if(M.contains(r.activeElement)||o&&r.activeElement!==g.current&&r.activeElement!==E.current)return;if(r.activeElement!==C.current)C.current=null;else if(C.current!==null)return;if(!p.current)return;let R=[];if((r.activeElement===g.current||r.activeElement===E.current)&&(R=i(x.current)),R.length>0){const $=!!((y=S.current)!=null&&y.shiftKey&&((L=S.current)==null?void 0:L.key)==="Tab"),D=R[0],B=R[R.length-1];typeof D!="string"&&typeof B!="string"&&($?B.focus():D.focus())}else M.focus()};r.addEventListener("focusin",P),r.addEventListener("keydown",u,!0);const w=setInterval(()=>{r.activeElement&&r.activeElement.tagName==="BODY"&&P()},50);return()=>{clearInterval(w),r.removeEventListener("focusin",P),r.removeEventListener("keydown",u,!0)}},[n,o,s,l,a,i]);const h=r=>{b.current===null&&(b.current=r.relatedTarget),p.current=!0,C.current=r.target;const u=t.props.onFocus;u&&u(r)},f=r=>{b.current===null&&(b.current=r.relatedTarget),p.current=!0};return d.jsxs(c.Fragment,{children:[d.jsx("div",{tabIndex:a?0:-1,onFocus:f,ref:g,"data-testid":"sentinelStart"}),c.cloneElement(t,{ref:k,onFocus:h}),d.jsx("div",{tabIndex:a?0:-1,onFocus:f,ref:E,"data-testid":"sentinelEnd"})]})}function fn(e){return typeof e=="function"?e():e}function pn(e){return e?e.props.hasOwnProperty("in"):!1}const He=()=>{},ve=new on;function mn(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:o=!1,closeAfterTransition:s=!1,onTransitionEnter:i,onTransitionExited:l,children:a,onClose:m,open:g,rootRef:E}=e,b=c.useRef({}),C=c.useRef(null),p=c.useRef(null),x=J(p,E),[k,S]=c.useState(!g),h=pn(a);let f=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(f=!1);const r=()=>W(C.current),u=()=>(b.current.modalRef=p.current,b.current.mount=C.current,b.current),P=()=>{ve.mount(u(),{disableScrollLock:o}),p.current&&(p.current.scrollTop=0)},w=Ae(()=>{const T=fn(t)||r().body;ve.add(u(),T),p.current&&P()}),M=()=>ve.isTopModal(u()),R=Ae(T=>{C.current=T,T&&(g&&M()?P():p.current&&pe(p.current,f))}),y=c.useCallback(()=>{ve.remove(u(),f)},[f]);c.useEffect(()=>()=>{y()},[y]),c.useEffect(()=>{g?w():(!h||!s)&&y()},[g,y,h,s,w]);const L=T=>v=>{var F;(F=T.onKeyDown)==null||F.call(T,v),!(v.key!=="Escape"||v.which===229||!M())&&(n||(v.stopPropagation(),m&&m(v,"escapeKeyDown")))},$=T=>v=>{var F;(F=T.onClick)==null||F.call(T,v),v.target===v.currentTarget&&m&&m(v,"backdropClick")};return{getRootProps:(T={})=>{const v=St(e);delete v.onTransitionEnter,delete v.onTransitionExited;const F={...v,...T};return{role:"presentation",...F,onKeyDown:L(F),ref:x}},getBackdropProps:(T={})=>{const v=T;return{"aria-hidden":!0,...v,onClick:$(v),open:g}},getTransitionProps:()=>{const T=()=>{S(!1),i&&i()},v=()=>{S(!0),l&&l(),s&&y()};return{onEnter:Ue(T,(a==null?void 0:a.props.onEnter)??He),onExited:Ue(v,(a==null?void 0:a.props.onExited)??He)}},rootRef:x,portalRef:R,isTopModal:M,exited:k,hasTransition:h}}function hn(e){return oe("MuiModal",e)}V("MuiModal",["root","hidden","backdrop"]);const gn=e=>{const{open:t,exited:n,classes:o}=e;return se({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},hn,o)},xn=z("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(tt(({theme:e})=>({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0,variants:[{props:({ownerState:t})=>!t.open&&t.exited,style:{visibility:"hidden"}}]}))),bn=z(Jt,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),vn=c.forwardRef(function(t,n){const o=re({name:"MuiModal",props:t}),{BackdropComponent:s=bn,BackdropProps:i,classes:l,className:a,closeAfterTransition:m=!1,children:g,container:E,component:b,components:C={},componentsProps:p={},disableAutoFocus:x=!1,disableEnforceFocus:k=!1,disableEscapeKeyDown:S=!1,disablePortal:h=!1,disableRestoreFocus:f=!1,disableScrollLock:r=!1,hideBackdrop:u=!1,keepMounted:P=!1,onBackdropClick:w,onClose:M,onTransitionEnter:R,onTransitionExited:y,open:L,slotProps:$={},slots:D={},theme:B,...I}=o,T={...o,closeAfterTransition:m,disableAutoFocus:x,disableEnforceFocus:k,disableEscapeKeyDown:S,disablePortal:h,disableRestoreFocus:f,disableScrollLock:r,hideBackdrop:u,keepMounted:P},{getRootProps:v,getBackdropProps:F,getTransitionProps:_,portalRef:Ee,isTopModal:Pe,exited:ie,hasTransition:ge}=mn({...T,rootRef:n}),Y={...T,exited:ie},G=gn(Y),q={};if(g.props.tabIndex===void 0&&(q.tabIndex="-1"),ge){const{onEnter:N,onExited:X}=_();q.onEnter=N,q.onExited=X}const ae={...I,slots:{root:C.Root,backdrop:C.Backdrop,...D},slotProps:{...p,...$}},[Re,Te]=ne("root",{elementType:xn,externalForwardedProps:ae,getSlotProps:v,additionalProps:{ref:n,as:b},ownerState:Y,className:H(a,G==null?void 0:G.root,!Y.open&&Y.exited&&(G==null?void 0:G.hidden))}),[Ce,j]=ne("backdrop",{elementType:s,externalForwardedProps:ae,additionalProps:i,getSlotProps:N=>F({...N,onClick:X=>{w&&w(X),N!=null&&N.onClick&&N.onClick(X)}}),className:H(i==null?void 0:i.className,G==null?void 0:G.backdrop),ownerState:Y}),O=J(i==null?void 0:i.ref,j.ref);return!P&&!L&&(!ge||ie)?null:d.jsx(wt,{ref:Ee,container:E,disablePortal:h,children:d.jsxs(Re,{...Te,children:[!u&&s?d.jsx(Ce,{...j,ref:O}):null,d.jsx(un,{disableEnforceFocus:k,disableAutoFocus:x,disableRestoreFocus:f,isEnabled:Pe,open:L,children:c.cloneElement(g,q)})]})})}),Ie=c.createContext({});function yn(e){return oe("MuiList",e)}V("MuiList",["root","padding","dense","subheader"]);const En=e=>{const{classes:t,disablePadding:n,dense:o,subheader:s}=e;return se({root:["root",!n&&"padding",o&&"dense",s&&"subheader"]},yn,t)},Pn=z("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>e.subheader,style:{paddingTop:0}}]}),Rn=c.forwardRef(function(t,n){const o=re({props:t,name:"MuiList"}),{children:s,className:i,component:l="ul",dense:a=!1,disablePadding:m=!1,subheader:g,...E}=o,b=c.useMemo(()=>({dense:a}),[a]),C={...o,component:l,dense:a,disablePadding:m},p=En(C);return d.jsx(Ie.Provider,{value:b,children:d.jsxs(Pn,{as:l,className:H(p.root,i),ref:n,ownerState:C,...E,children:[g,s]})})}),We=V("MuiListItemIcon",["root","alignItemsFlexStart"]),Ye=V("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);function Me(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function Ve(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function it(e,t){if(t===void 0)return!0;let n=e.innerText;return n===void 0&&(n=e.textContent),n=n.trim().toLowerCase(),n.length===0?!1:t.repeating?n[0]===t.keys[0]:n.startsWith(t.keys.join(""))}function ce(e,t,n,o,s,i){let l=!1,a=s(e,t,t?n:!1);for(;a;){if(a===e.firstChild){if(l)return!1;l=!0}const m=o?!1:a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||!it(a,i)||m)a=s(e,a,n);else return a.focus(),!0}return!1}const Tn=c.forwardRef(function(t,n){const{actions:o,autoFocus:s=!1,autoFocusItem:i=!1,children:l,className:a,disabledItemsFocusable:m=!1,disableListWrap:g=!1,onKeyDown:E,variant:b="selectedMenu",...C}=t,p=c.useRef(null),x=c.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});nt(()=>{s&&p.current.focus()},[s]),c.useImperativeHandle(o,()=>({adjustStyleForScrollbar:(r,{direction:u})=>{const P=!p.current.style.width;if(r.clientHeight<p.current.clientHeight&&P){const w=`${st(Q(r))}px`;p.current.style[u==="rtl"?"paddingLeft":"paddingRight"]=w,p.current.style.width=`calc(100% + ${w})`}return p.current}}),[]);const k=r=>{const u=p.current,P=r.key;if(r.ctrlKey||r.metaKey||r.altKey){E&&E(r);return}const M=W(u).activeElement;if(P==="ArrowDown")r.preventDefault(),ce(u,M,g,m,Me);else if(P==="ArrowUp")r.preventDefault(),ce(u,M,g,m,Ve);else if(P==="Home")r.preventDefault(),ce(u,null,g,m,Me);else if(P==="End")r.preventDefault(),ce(u,null,g,m,Ve);else if(P.length===1){const R=x.current,y=P.toLowerCase(),L=performance.now();R.keys.length>0&&(L-R.lastTime>500?(R.keys=[],R.repeating=!0,R.previousKeyMatched=!0):R.repeating&&y!==R.keys[0]&&(R.repeating=!1)),R.lastTime=L,R.keys.push(y);const $=M&&!R.repeating&&it(M,R);R.previousKeyMatched&&($||ce(u,M,!1,m,Me,R))?r.preventDefault():R.previousKeyMatched=!1}E&&E(r)},S=J(p,n);let h=-1;c.Children.forEach(l,(r,u)=>{if(!c.isValidElement(r)){h===u&&(h+=1,h>=l.length&&(h=-1));return}r.props.disabled||(b==="selectedMenu"&&r.props.selected||h===-1)&&(h=u),h===u&&(r.props.disabled||r.props.muiSkipListHighlight||r.type.muiSkipListHighlight)&&(h+=1,h>=l.length&&(h=-1))});const f=c.Children.map(l,(r,u)=>{if(u===h){const P={};return i&&(P.autoFocus=!0),r.props.tabIndex===void 0&&b==="selectedMenu"&&(P.tabIndex=0),c.cloneElement(r,P)}return r});return d.jsx(Rn,{role:"menu",ref:S,className:a,onKeyDown:k,tabIndex:s?0:-1,...C,children:f})});function Cn(e){return oe("MuiPopover",e)}V("MuiPopover",["root","paper"]);function qe(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function Xe(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function Qe(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function ke(e){return typeof e=="function"?e():e}const Sn=e=>{const{classes:t}=e;return se({root:["root"],paper:["paper"]},Cn,t)},wn=z(vn,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),at=z(ht,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Mn=c.forwardRef(function(t,n){const o=re({props:t,name:"MuiPopover"}),{action:s,anchorEl:i,anchorOrigin:l={vertical:"top",horizontal:"left"},anchorPosition:a,anchorReference:m="anchorEl",children:g,className:E,container:b,elevation:C=8,marginThreshold:p=16,open:x,PaperProps:k={},slots:S={},slotProps:h={},transformOrigin:f={vertical:"top",horizontal:"left"},TransitionComponent:r=Mt,transitionDuration:u="auto",TransitionProps:{onEntering:P,...w}={},disableScrollLock:M=!1,...R}=o,y=(h==null?void 0:h.paper)??k,L=c.useRef(),$={...o,anchorOrigin:l,anchorReference:m,elevation:C,marginThreshold:p,externalPaperSlotProps:y,transformOrigin:f,TransitionComponent:r,transitionDuration:u,TransitionProps:w},D=Sn($),B=c.useCallback(()=>{if(m==="anchorPosition")return a;const j=ke(i),N=(j&&j.nodeType===1?j:W(L.current).body).getBoundingClientRect();return{top:N.top+qe(N,l.vertical),left:N.left+Xe(N,l.horizontal)}},[i,l.horizontal,l.vertical,a,m]),I=c.useCallback(j=>({vertical:qe(j,f.vertical),horizontal:Xe(j,f.horizontal)}),[f.horizontal,f.vertical]),T=c.useCallback(j=>{const O={width:j.offsetWidth,height:j.offsetHeight},N=I(O);if(m==="none")return{top:null,left:null,transformOrigin:Qe(N)};const X=B();let ee=X.top-N.vertical,te=X.left-N.horizontal;const Ne=ee+O.height,$e=te+O.width,Fe=Q(ke(i)),Oe=Fe.innerHeight-p,De=Fe.innerWidth-p;if(p!==null&&ee<p){const U=ee-p;ee-=U,N.vertical+=U}else if(p!==null&&Ne>Oe){const U=Ne-Oe;ee-=U,N.vertical+=U}if(p!==null&&te<p){const U=te-p;te-=U,N.horizontal+=U}else if($e>De){const U=$e-De;te-=U,N.horizontal+=U}return{top:`${Math.round(ee)}px`,left:`${Math.round(te)}px`,transformOrigin:Qe(N)}},[i,m,B,I,p]),[v,F]=c.useState(x),_=c.useCallback(()=>{const j=L.current;if(!j)return;const O=T(j);O.top!==null&&j.style.setProperty("top",O.top),O.left!==null&&(j.style.left=O.left),j.style.transformOrigin=O.transformOrigin,F(!0)},[T]);c.useEffect(()=>(M&&window.addEventListener("scroll",_),()=>window.removeEventListener("scroll",_)),[i,M,_]);const Ee=(j,O)=>{P&&P(j,O),_()},Pe=()=>{F(!1)};c.useEffect(()=>{x&&_()}),c.useImperativeHandle(s,()=>x?{updatePosition:()=>{_()}}:null,[x,_]),c.useEffect(()=>{if(!x)return;const j=Kt(()=>{_()}),O=Q(i);return O.addEventListener("resize",j),()=>{j.clear(),O.removeEventListener("resize",j)}},[i,x,_]);let ie=u;u==="auto"&&!r.muiSupportAuto&&(ie=void 0);const ge=b||(i?W(ke(i)).body:void 0),Y={slots:S,slotProps:{...h,paper:y}},[G,q]=ne("paper",{elementType:at,externalForwardedProps:Y,additionalProps:{elevation:C,className:H(D.paper,y==null?void 0:y.className),style:v?y.style:{...y.style,opacity:0}},ownerState:$}),[ae,{slotProps:Re,...Te}]=ne("root",{elementType:wn,externalForwardedProps:Y,additionalProps:{slotProps:{backdrop:{invisible:!0}},container:ge,open:x},ownerState:$,className:H(D.root,E)}),Ce=J(L,q.ref);return d.jsx(ae,{...Te,...!Ht(ae)&&{slotProps:Re,disableScrollLock:M},...R,ref:n,children:d.jsx(r,{appear:!0,in:x,onEntering:Ee,onExited:Pe,timeout:ie,...w,children:d.jsx(G,{...q,ref:Ce,children:g})})})});function kn(e){return oe("MuiMenu",e)}V("MuiMenu",["root","paper","list"]);const In={vertical:"top",horizontal:"right"},jn={vertical:"top",horizontal:"left"},Ln=e=>{const{classes:t}=e;return se({root:["root"],paper:["paper"],list:["list"]},kn,t)},Nn=z(Mn,{shouldForwardProp:e=>ot(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),$n=z(at,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),Fn=z(Tn,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),On=c.forwardRef(function(t,n){const o=re({props:t,name:"MuiMenu"}),{autoFocus:s=!0,children:i,className:l,disableAutoFocusItem:a=!1,MenuListProps:m={},onClose:g,open:E,PaperProps:b={},PopoverClasses:C,transitionDuration:p="auto",TransitionProps:{onEntering:x,...k}={},variant:S="selectedMenu",slots:h={},slotProps:f={},...r}=o,u=kt(),P={...o,autoFocus:s,disableAutoFocusItem:a,MenuListProps:m,onEntering:x,PaperProps:b,transitionDuration:p,TransitionProps:k,variant:S},w=Ln(P),M=s&&!a&&E,R=c.useRef(null),y=(v,F)=>{R.current&&R.current.adjustStyleForScrollbar(v,{direction:u?"rtl":"ltr"}),x&&x(v,F)},L=v=>{v.key==="Tab"&&(v.preventDefault(),g&&g(v,"tabKeyDown"))};let $=-1;c.Children.map(i,(v,F)=>{c.isValidElement(v)&&(v.props.disabled||(S==="selectedMenu"&&v.props.selected||$===-1)&&($=F))});const D=h.paper??$n,B=f.paper??b,I=_e({elementType:h.root,externalSlotProps:f.root,ownerState:P,className:[w.root,l]}),T=_e({elementType:D,externalSlotProps:B,ownerState:P,className:w.paper});return d.jsx(Nn,{onClose:g,anchorOrigin:{vertical:"bottom",horizontal:u?"right":"left"},transformOrigin:u?In:jn,slots:{paper:D,root:h.root},slotProps:{root:I,paper:T},open:E,ref:n,transitionDuration:p,TransitionProps:{onEntering:y,...k},ownerState:P,...r,classes:C,children:d.jsx(Fn,{onKeyDown:L,actions:R,autoFocus:s&&($===-1||a),autoFocusItem:M,variant:S,...m,className:H(w.list,m.className),children:i})})});function Dn(e){return oe("MuiMenuItem",e)}const de=V("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]),An=(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,n.divider&&t.divider,!n.disableGutters&&t.gutters]},Bn=e=>{const{disabled:t,dense:n,divider:o,disableGutters:s,selected:i,classes:l}=e,m=se({root:["root",n&&"dense",t&&"disabled",!s&&"gutters",o&&"divider",i&&"selected"]},Dn,l);return{...l,...m}},_n=z(dt,{shouldForwardProp:e=>ot(e)||e==="classes",name:"MuiMenuItem",slot:"Root",overridesResolver:An})(tt(({theme:e})=>({...e.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${de.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:xe(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${de.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:xe(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${de.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:xe(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:xe(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${de.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${de.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},[`& + .${Ge.root}`]:{marginTop:e.spacing(1),marginBottom:e.spacing(1)},[`& + .${Ge.inset}`]:{marginLeft:52},[`& .${Ye.root}`]:{marginTop:0,marginBottom:0},[`& .${Ye.inset}`]:{paddingLeft:36},[`& .${We.root}`]:{minWidth:36},variants:[{props:({ownerState:t})=>!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>!t.dense,style:{[e.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:({ownerState:t})=>t.dense,style:{minHeight:32,paddingTop:4,paddingBottom:4,...e.typography.body2,[`& .${We.root} svg`]:{fontSize:"1.25rem"}}}]}))),Gn=c.forwardRef(function(t,n){const o=re({props:t,name:"MuiMenuItem"}),{autoFocus:s=!1,component:i="li",dense:l=!1,divider:a=!1,disableGutters:m=!1,focusVisibleClassName:g,role:E="menuitem",tabIndex:b,className:C,...p}=o,x=c.useContext(Ie),k=c.useMemo(()=>({dense:l||x.dense||!1,disableGutters:m}),[x.dense,l,m]),S=c.useRef(null);nt(()=>{s&&S.current&&S.current.focus()},[s]);const h={...o,dense:k.dense,divider:a,disableGutters:m},f=Bn(o),r=J(S,n);let u;return o.disabled||(u=b!==void 0?b:-1),d.jsx(Ie.Provider,{value:k,children:d.jsx(_n,{ref:r,role:E,tabIndex:u,component:i,focusVisibleClassName:H(f.focusVisible,g),className:H(f.root,C),...p,ownerState:h,classes:f})})}),Un=({category:e,setCategory:t})=>{const n=he(),{t:o}=Z();return d.jsx(K,{display:"flex",flexDirection:"column",flexGrow:1,children:It.map(s=>d.jsx(ye,{variant:s===e?"contained":"text",color:n,onClick:()=>t(s),children:o(`category_enum_short.${s}`)},s))})},Kn=me.memo(Un),zn=({game:e,setGame:t})=>{const n=he(),{t:o}=Z();return d.jsx(K,{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:{xs:0,md:1},children:jt.map(s=>d.jsx(ye,{variant:s===e?"contained":"text",color:n,onClick:()=>t(s),children:o(`game_enum_short.${s}`)},s))})},Hn=me.memo(zn),Wn=({gender:e,setGender:t})=>{const n=he(),{t:o}=Z();return d.jsx(K,{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:{xs:0,md:1},children:Lt.map(s=>d.jsx(ye,{variant:s===e?"contained":"text",color:n,onClick:()=>t(s),children:o(`gender_enum_short.${s}`)},s))})},Yn=me.memo(Wn),Vn=({year:e,category:t,game:n,gender:o})=>{const{t:s}=Z(),{getTournamentUrl:i}=Le(),l=c.useMemo(()=>s(`gender_category.${o}.${t}`),[o,t,s]),a=c.useMemo(()=>{const E=s(`game_enum.${n}`);return l?`${e} ${E} - ${l}`:`${e} ${E}`},[e,n,l,s]),m=c.useMemo(()=>s("description",{game:s(`game_enum2.${n}`),gender_category:s(`gender_category_full.${o}.${t}`),year:e}),[e,t,n,o,s]),g=c.useMemo(()=>i(e,t,n,o,!1),[e,t,n,o]);return d.jsx(Nt,{title:a,description:m,url:g})},qn=({result:e})=>{const{t,i18n:n}=Z(),{getPlayerUrl:o}=Le(),s=he(),i=(n.resolvedLanguage=="uk"?e.name_uk:e.name_en)||e.name_uk||e.name_en;return d.jsx(ut,{to:o(e.id),style:{textDecoration:"none",color:"inherit"},children:d.jsxs(K,{padding:2,gap:{xs:1,md:2},display:"flex",border:"1px solid #ddd",boxShadow:"0px 4px 6px rgba(63, 81, 181, 0.3)",bgcolor:e.rank<=3?"white":"",sx:{cursor:"pointer"},children:[d.jsx(K,{children:d.jsxs(A,{variant:"body1",children:[e.rank,"."]})}),d.jsxs(K,{flexGrow:1,children:[d.jsx(A,{variant:"body1",children:i}),e.club&&d.jsx(A,{variant:"body2",color:"textSecondary",paddingLeft:1,children:e.club}),e.coach1&&d.jsx(A,{variant:"body2",color:"textSecondary",paddingLeft:2,children:e.coach1}),e.coach2&&d.jsx(A,{variant:"body2",color:"textSecondary",paddingLeft:3,children:e.coach2}),e.notes&&d.jsx(A,{variant:"body2",color:"textSecondary",paddingLeft:1,children:e.notes})]}),d.jsxs(K,{children:[e.fed&&d.jsx(A,{variant:"body2",color:s,textAlign:"right",children:t(`federation_enum_short.${e.fed}`)}),e.points&&d.jsx(A,{variant:"body2",color:"textSecondary",textAlign:"right",children:e.points})]})]})})},Xn=({tournament:e})=>{var s;const{t,i18n:n}=Z(),o=d.jsx(A,{component:"h3",variant:"body2",color:"textSecondary",align:"center",sx:e.id&&e.id>=0?{"&:hover":{textDecoration:"underline"}}:{},children:[e.type?t(`type_enum.${e.type}`):null,n.resolvedLanguage==="uk"?e.location_uk:e.location_en,e.date||null].filter(Boolean).join(", ")});return d.jsxs(K,{display:"flex",flexDirection:"column",gap:1,children:[e.id&&e.id>=0?d.jsx(zt,{href:`https://chess-results.com/tnr${e.id}.aspx?art=1`,target:"_blank",rel:"noopener",style:{textDecoration:"none",color:"inherit"},children:o}):o,((e.round??0)>0&&(e.round??0)<(e.rounds||1/0)||e.missedResults)&&d.jsxs(A,{component:"h4",variant:"body2",color:"textSecondary",align:"center",children:[t("rankAfterRound",{round:e.round??0}),e.missedResults?` (${t("missingResults",{count:e.missedResults})})`:""]}),(s=e.results)==null?void 0:s.map((i,l)=>d.jsx(qn,{result:i},`${e.id}_${l}`))]})},Qn=({year:e,category:t,game:n,gender:o})=>{const{data:s,isLoading:i,error:l}=$t({queryKey:["tournaments",{year:e,category:t,game:n,gender:o}],queryFn:async()=>await Ot.getTournaments(e,t,n,o)});return d.jsxs(K,{display:"flex",flexDirection:"column",flexGrow:1,marginBottom:4,sx:{overflow:"auto",height:"100%"},children:[i&&d.jsx(ft,{}),l&&d.jsx(Ft,{message:l.message}),!i&&!l&&s&&s.map((a,m)=>d.jsx(Xn,{tournament:a},`${e}_${m}`))]})};function ue(e){if(typeof window>"u")return e;const t=c.useRef(null);return c.useLayoutEffect(()=>{t.current=e}),c.useCallback((...n)=>{var o;(o=t.current)===null||o===void 0||o.call(t,...n)},[])}const Je={};function Jn(e,t){Je[e]||(Je[e]=!0,console.error("[material-ui-popup-state] WARNING",t))}const Zn={isOpen:!1,setAnchorElUsed:!1,anchorEl:void 0,anchorPosition:void 0,hovered:!1,focused:!1,_openEventType:null,_childPopupState:null,_deferNextOpen:!1,_deferNextClose:!1},Ze=pt,eo="useId"in Ze?()=>Ze.useId():()=>{};function to({parentPopupState:e,popupId:t=eo(),variant:n,disableAutoFocus:o}){const s=c.useRef(!0);c.useEffect(()=>(s.current=!0,()=>{s.current=!1}),[]);const[i,l]=c.useState(Zn),a=c.useCallback(f=>{s.current&&l(f)},[]),m=c.useCallback(f=>a(r=>({...r,setAnchorElUsed:!0,anchorEl:f??void 0})),[]),g=ue(f=>(i.isOpen?C(f):E(f),i)),E=ue(f=>{const r=f instanceof Element?void 0:f,u=f instanceof Element?f:(f==null?void 0:f.currentTarget)instanceof Element?f.currentTarget:void 0;if((r==null?void 0:r.type)==="touchstart"){a(y=>({...y,_deferNextOpen:!0}));return}const P=r==null?void 0:r.clientX,w=r==null?void 0:r.clientY,M=typeof P=="number"&&typeof w=="number"?{left:P,top:w}:void 0,R=y=>{if(!f&&!y.setAnchorElUsed&&n!=="dialog"&&Jn("missingEventOrAnchorEl","eventOrAnchorEl should be defined if setAnchorEl is not used"),e){if(!e.isOpen)return y;setTimeout(()=>e._setChildPopupState(h))}const L={...y,isOpen:!0,anchorPosition:M,hovered:(r==null?void 0:r.type)==="mouseover"||y.hovered,focused:(r==null?void 0:r.type)==="focus"||y.focused,_openEventType:r==null?void 0:r.type};return y.setAnchorElUsed||(r!=null&&r.currentTarget?L.anchorEl=r==null?void 0:r.currentTarget:u&&(L.anchorEl=u)),L};a(y=>y._deferNextOpen?(setTimeout(()=>a(R),0),{...y,_deferNextOpen:!1}):R(y))}),b=f=>{const{_childPopupState:r}=f;return setTimeout(()=>{r==null||r.close(),e==null||e._setChildPopupState(null)}),{...f,isOpen:!1,hovered:!1,focused:!1}},C=ue(f=>{const r=f instanceof Element?void 0:f;if((r==null?void 0:r.type)==="touchstart"){a(u=>({...u,_deferNextClose:!0}));return}a(u=>u._deferNextClose?(setTimeout(()=>a(b),0),{...u,_deferNextClose:!1}):b(u))}),p=c.useCallback((f,r)=>{f?E(r):C(r)},[]),x=ue(f=>{const{relatedTarget:r}=f;a(u=>u.hovered&&!(r instanceof Element&&je(r,h))?u.focused?{...u,hovered:!1}:b(u):u)}),k=ue(f=>{if(!f)return;const{relatedTarget:r}=f;a(u=>u.focused&&!(r instanceof Element&&je(r,h))?u.hovered?{...u,focused:!1}:b(u):u)}),S=c.useCallback(f=>a(r=>({...r,_childPopupState:f})),[]),h={...i,setAnchorEl:m,popupId:t??void 0,variant:n,open:E,close:C,toggle:g,setOpen:p,onBlur:k,onMouseLeave:x,disableAutoFocus:o??!!(i.hovered||i.focused),_setChildPopupState:S};return h}function no({isOpen:e,popupId:t,variant:n}){return{...n==="popover"?{"aria-haspopup":!0,"aria-controls":e?t:void 0}:n==="popper"?{"aria-describedby":e?t:void 0}:void 0}}function oo(e){return{...no(e),onClick:e.open,onTouchStart:e.open}}function ro({isOpen:e,anchorEl:t,anchorPosition:n,close:o,popupId:s,onMouseLeave:i,disableAutoFocus:l,_openEventType:a}){return{id:s,anchorEl:t,anchorPosition:n,anchorReference:a==="contextmenu"?"anchorPosition":"anchorEl",open:e,onClose:o,onMouseLeave:i,...l&&{autoFocus:!1,disableAutoFocusItem:!0,disableAutoFocus:!0,disableEnforceFocus:!0,disableRestoreFocus:!0}}}function so(e,{popupId:t}){if(!t)return null;const n=typeof e.getRootNode=="function"?e.getRootNode():document;return typeof n.getElementById=="function"?n.getElementById(t):null}function je(e,t){const{anchorEl:n,_childPopupState:o}=t;return et(n,e)||et(so(e,t),e)||o!=null&&je(e,o)}function et(e,t){if(!e)return!1;for(;t;){if(t===e)return!0;t=t.parentElement}return!1}function lt({children:e,popupId:t,variant:n,parentPopupState:o,disableAutoFocus:s}){const i=to({popupId:t,variant:n,parentPopupState:o,disableAutoFocus:s}),l=e(i);return l??null}lt.propTypes={children:le.func.isRequired,popupId:le.string,variant:le.oneOf(["popover","popper"]).isRequired,parentPopupState:le.object,disableAutoFocus:le.bool};const io=({year:e,setYear:t})=>{const n=he();return d.jsx(lt,{variant:"popover",popupId:"year-menu",children:o=>d.jsxs(me.Fragment,{children:[d.jsx(ye,{variant:"contained",color:n,...oo(o),children:e}),d.jsx(On,{...ro(o),children:fe.map(s=>d.jsx(Gn,{selected:s===e,onClick:()=>{o.close(),setTimeout(()=>{t(s)},50)},children:s},s))})]})})},ao=me.memo(io),mo=()=>{const[e]=mt(),{navigateToTournament:t}=Le(),{t:n}=Z(),o=parseInt(e.get("year")||"")||Dt,s=Se.stringToEnum(e.get("category"),Et)||At,i=Se.stringToEnum(e.get("game"),Pt)||Bt,l=Se.stringToEnum(e.get("gender"),Rt)||_t,[a,m]=c.useState(o),[g,E]=c.useState(s),[b,C]=c.useState(i),[p,x]=c.useState(l),k=c.useRef(null),S=c.useMemo(()=>n(`gender_category.${p}.${g}`),[g,p,n]);c.useEffect(()=>{(o!=a||s!=g||i!=b||l!=p)&&t(a,g,b,p,!0)},[a,g,b,p]);const h=c.useCallback(f=>{var r,u;(u=(r=k.current)==null?void 0:r.swiper)==null||u.slideToLoop(fe.indexOf(f))},[]);return d.jsxs(d.Fragment,{children:[d.jsx(Vn,{year:a,category:g,game:b,gender:p}),d.jsx(Gt,{gender:p,children:d.jsxs(be,{container:!0,spacing:{xs:1,md:2},padding:2,overflow:"hidden",height:"100%",children:[d.jsxs(be,{container:!0,direction:"column",gap:{xs:1,md:2},size:"auto",overflow:"auto",children:[d.jsx(ao,{year:a,setYear:h}),d.jsx(Kn,{category:g,setCategory:E}),d.jsx(Ut,{})]}),d.jsxs(be,{container:!0,direction:"column",size:"grow",overflow:"hidden",height:"100%",children:[d.jsx(Yn,{gender:p,setGender:x}),d.jsx(be,{size:"grow",overflow:"hidden",height:"100%",children:d.jsx(gt,{ref:k,direction:"horizontal",initialSlide:fe.indexOf(a),loop:!0,spaceBetween:10,slidesPerView:1,style:{width:"100%",height:"100%"},pagination:{clickable:!1},keyboard:{enabled:!0},onSlideChange:f=>{m(fe[f.realIndex])},virtual:{enabled:!0},modules:[xt,bt,vt],children:fe.map(f=>d.jsx(yt,{"aria-hidden":a!==f,children:d.jsxs(K,{display:"flex",flexDirection:"column",gap:{xs:1,md:2},overflow:"hidden",height:"100%",children:[d.jsxs(K,{children:[d.jsxs(A,{variant:"h5",component:"h1",align:"center",children:[n(`game_enum.${b}`)," ",f]}),d.jsx(A,{variant:"h6",component:"h2",align:"center",color:"textSecondary",children:S})]}),d.jsx(Qn,{year:f,category:g,game:b,gender:p})]})},f))})}),d.jsx(Hn,{game:b,setGame:C})]})]})})]})};export{mo as default};
