import{x as E,b as D,g as F,y as C,l as p,r as w,c as $,u as j,j as q,s as M,d as N,v as V,e as U,T as I,m as z,z as B,A as k}from"./index-BY2ZpzLm.js";import{o as H}from"./ChessDataService-RvTYR6lJ.js";var h={exports:{}},b,R;function Y(){if(R)return b;R=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return b=e,b}var g,P;function G(){if(P)return g;P=1;var e=Y();function t(){}function o(){}return o.resetWarningCache=t,g=function(){function r(a,u,d,y,v,c){if(c!==e){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}r.isRequired=r;function n(){return r}var s={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:n,element:r,elementType:r,instanceOf:n,node:r,objectOf:n,oneOf:n,oneOfType:n,shape:n,exact:n,checkPropTypes:o,resetWarningCache:t};return s.PropTypes=s,s},g}var S;function J(){return S||(S=1,h.exports=G()()),h.exports}var K=J();const ne=E(K);function se(e,t=166){let o;function r(...n){const s=()=>{e.apply(this,n)};clearTimeout(o),o=setTimeout(s,t)}return r.clear=()=>{clearTimeout(o)},r}function ae(e){return H(e).defaultView||window}function ie(e){return F("MuiDivider",e)}const le=D("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);function Q(e){return F("MuiLink",e)}const X=D("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),Z=({theme:e,ownerState:t})=>{const o=t.color,r=C(e,`palette.${o}`,!1)||t.color,n=C(e,`palette.${o}Channel`);return"vars"in e&&n?`rgba(${n} / 0.4)`:p(r,.4)},L={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},ee=e=>{const{classes:t,component:o,focusVisible:r,underline:n}=e,s={root:["root",`underline${V(n)}`,o==="button"&&"button",r&&"focusVisible"]};return U(s,Q,t)},re=M(I,{name:"MuiLink",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[`underline${V(o.underline)}`],o.component==="button"&&t.button]}})(z(({theme:e})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:t,ownerState:o})=>t==="always"&&o.color!=="inherit",style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(e.palette).filter(B()).map(([t])=>({props:{underline:"always",color:t},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette[t].mainChannel} / 0.4)`:p(e.palette[t].main,.4)}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:p(e.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.secondaryChannel} / 0.4)`:p(e.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(e.vars||e).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${X.focusVisible}`]:{outline:"auto"}}}]}))),ce=w.forwardRef(function(t,o){const r=$({props:t,name:"MuiLink"}),n=j(),{className:s,color:a="primary",component:u="a",onBlur:d,onFocus:y,TypographyClasses:v,underline:c="always",variant:i="inherit",sx:f,...x}=r,[W,T]=w.useState(!1),A=l=>{k(l.target)||T(!1),d&&d(l)},O=l=>{k(l.target)&&T(!0),y&&y(l)},m={...r,color:a,component:u,focusVisible:W,underline:c,variant:i},_=ee(m);return q.jsx(re,{color:a,className:N(_.root,s),classes:v,component:u,onBlur:A,onFocus:O,ref:o,ownerState:m,variant:i,...x,sx:[...L[a]===void 0?[{color:a}]:[],...Array.isArray(f)?f:[f]],style:{...x.style,...c==="always"&&a!=="inherit"&&!L[a]&&{"--Link-underlineColor":Z({theme:n,ownerState:m})}}})});export{ce as L,ne as P,le as a,se as d,ie as g,ae as o};
