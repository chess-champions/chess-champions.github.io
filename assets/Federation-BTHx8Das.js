import{o as u,r as j,j as e,H as y,B as o,T as b,L as v,E as T}from"./index-CHSZ_C4n.js";import{S as g,k as S,l as w,f as B,C as k}from"./NavigationService-B_U2Aw_a.js";import{S as C,P as E,K as P,a as D}from"./pagination-B_XdhNeH.js";import{A as F,T as I,a as L,I as z,b as A,L as G}from"./ArrowBack-B1mkpYo5.js";import{T as H,a as K,b as q,c as m,d as a,e as R}from"./TableRow-Dmh-VyhO.js";const l=["КИЇ","АРК","ВІН","ВОЛ","ДНІ","ДОН","ЖИТ","ЗАК","ЗАП","І-Ф","КИО","КІР","ЛУГ","ЛЬВ","МИК","ОДЕ","ПОЛ","РІВ","СУМ","ТЕР","ХАР","ХЕР","ХМЕ","ЧНІ","ЧНО","ЧРК"].map(t=>g.encode(t)),Y=()=>{const[t]=u(),c=S(),[i,p]=j.useState(()=>t.get("id")||l[0]),{data:r,isLoading:d,error:s}=w({queryKey:["federations",{id:i}],queryFn:async()=>await k.getFederation(i)});return j.useEffect(()=>{c.navigateToFederation(i,!0)},[i]),e.jsxs(e.Fragment,{children:[e.jsxs(y,{children:[r&&e.jsx("title",{children:r.name}),d||s?e.jsx("meta",{name:"robots",content:"noindex"}):e.jsx("meta",{name:"robots",content:"index, follow"})]}),e.jsxs(o,{display:"flex",flexDirection:"column",height:"100vh",children:[e.jsx(F,{position:"static",color:"success",children:e.jsxs(I,{children:[e.jsx(L,{title:"Back",children:e.jsx(z,{edge:"start",color:"inherit",onClick:()=>c.navigateBack(),"aria-label":"back",children:e.jsx(A,{})})}),e.jsx(b,{variant:"h6",component:"h1",children:r==null?void 0:r.name})]})}),e.jsx(o,{display:"flex",flexGrow:1,overflow:"auto",padding:{xs:2,md:2},children:e.jsx(C,{direction:"horizontal",initialSlide:l.indexOf(i),loop:!0,spaceBetween:10,slidesPerView:1,pagination:{clickable:!0,dynamicBullets:!0,dynamicMainBullets:10},keyboard:{enabled:!0},onSlideChangeTransitionEnd:x=>{p(l[x.realIndex])},modules:[E,P],children:l.map(x=>{var h;return e.jsx(D,{children:e.jsx(o,{display:"flex",flexDirection:"column",sx:{overflow:"hidden",height:"100%"},children:e.jsxs(o,{display:"flex",flexDirection:"column",flexGrow:"grow",marginBottom:4,sx:{overflow:"auto",height:"100%"},children:[d&&e.jsx(v,{}),s&&e.jsx(T,{message:s.message}),!d&&!s&&r&&e.jsx(H,{component:B,children:e.jsxs(K,{children:[e.jsx(q,{children:e.jsxs(m,{children:[e.jsx(a,{}),e.jsx(a,{align:"center",children:"Gold"}),e.jsx(a,{align:"center",children:"Silver"}),e.jsx(a,{align:"center",children:"Bronze"}),e.jsx(a,{align:"center",children:"Total"})]})}),e.jsx(R,{children:(h=r.results)==null?void 0:h.map(n=>e.jsxs(m,{children:[e.jsx(a,{children:e.jsx(G,{onClick:f=>{f.preventDefault(),c.navigateToYear(g.encode(n.year.toString()))},rel:"noopener",style:{cursor:"pointer"},children:n.year})}),e.jsx(a,{align:"center",children:n.gold||0}),e.jsx(a,{align:"center",children:n.silver||0}),e.jsx(a,{align:"center",children:n.bronze||0}),e.jsx(a,{align:"center",children:(n.gold||0)+(n.silver||0)+(n.bronze||0)})]},n.year))})]})})]})})},x)})})})]})]})};export{Y as default};
