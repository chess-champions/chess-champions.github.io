import{o as y,r as s,j as e,H as w,B as c,T as B,L as C,E as k}from"./index-CcDEah1p.js";import{S as E,P as D,K as F,a as I}from"./pagination-Bh5JbVRf.js";import{A as P,T as L,a as $,I as z,b as A,L as G}from"./ArrowBack-CrkFOApj.js";import{S as b,j as H,C as K,f as R}from"./ChessDataService-DJTw6fGV.js";import{T as M,a as N,b as O,c as f,d as r,e as V}from"./TableRow-CdfIsq-4.js";const d=["КИЇ","АРК","ВІН","ВОЛ","ДНІ","ДОН","ЖИТ","ЗАК","ЗАП","І-Ф","КИО","ЛУГ","ЛЬВ","МИК","ОДЕ","ПОЛ","РІВ","СУМ","ТЕР","ХАР","ХЕР","ХМЕ","ЧНІ","ЧНО","ЧРК"].map(x=>b.encode(x)),W=()=>{const[x]=y(),[h,S]=s.useState(()=>x.get("id")||d[0]),[j,m]=s.useState(null),[i,v]=s.useState({}),[g,u]=s.useState(!1),[t,p]=s.useState(null),o=H();return s.useEffect(()=>{let n=h,a=`${n}`;i[a]?(m(i[a].name),p(null),o.navigateToFederation(n,!0)):(u(!0),m(null),p(null),K.getFederation(n).then(l=>{m(l.name),v(T=>({...T,[`${a}`]:l}))}).catch(()=>p("Failed to fetch federation data")).finally(()=>{u(!1),o.navigateToFederation(n,!0)}))},[h]),e.jsxs(e.Fragment,{children:[e.jsxs(w,{children:[j&&e.jsx("title",{children:`${j} - Chess Champions`}),g||t?e.jsx("meta",{name:"robots",content:"noindex"}):e.jsx("meta",{name:"robots",content:"index, follow"})]}),e.jsxs(c,{display:"flex",flexDirection:"column",height:"100vh",children:[e.jsx(P,{position:"static",color:"success",children:e.jsxs(L,{children:[e.jsx($,{title:"Back",children:e.jsx(z,{edge:"start",color:"inherit",onClick:()=>o.navigateBack(),"aria-label":"back",children:e.jsx(A,{})})}),e.jsx(B,{variant:"h6",children:j})]})}),e.jsx(c,{display:"flex",flexGrow:1,overflow:"auto",padding:{xs:2,md:2},children:e.jsx(E,{direction:"horizontal",initialSlide:d.indexOf(h),loop:!0,spaceBetween:10,slidesPerView:1,pagination:{clickable:!0,dynamicBullets:!0,dynamicMainBullets:10},keyboard:{enabled:!0},onSlideChangeTransitionEnd:n=>{const a=d[n.realIndex];S(a)},modules:[D,F],children:d.map(n=>e.jsx(I,{children:e.jsx(c,{display:"flex",flexDirection:"column",sx:{overflow:"hidden",height:"100%"},children:e.jsxs(c,{display:"flex",flexDirection:"column",flexGrow:"grow",marginBottom:4,sx:{overflow:"auto",height:"100%"},children:[g&&e.jsx(C,{}),t&&e.jsx(k,{message:t}),!g&&!t&&i[`${n}`]&&e.jsx(M,{component:R,children:e.jsxs(N,{children:[e.jsx(O,{children:e.jsxs(f,{children:[e.jsx(r,{}),e.jsx(r,{align:"center",children:"Gold"}),e.jsx(r,{align:"center",children:"Silver"}),e.jsx(r,{align:"center",children:"Bronze"}),e.jsx(r,{align:"center",children:"Total"})]})}),e.jsx(V,{children:i[`${n}`].results.map(a=>e.jsxs(f,{children:[e.jsx(r,{children:e.jsx(G,{onClick:l=>{l.preventDefault(),o.navigateToYear(b.encode(a.year.toString()))},rel:"noopener",style:{cursor:"pointer"},children:a.year})}),e.jsx(r,{align:"center",children:a.gold||0}),e.jsx(r,{align:"center",children:a.silver||0}),e.jsx(r,{align:"center",children:a.bronze||0}),e.jsx(r,{align:"center",children:(a.gold||0)+(a.silver||0)+(a.bronze||0)})]},a.year))})]})})]})})},n))})})]})]})};export{W as default};
