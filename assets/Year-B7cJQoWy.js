import{o as v,r as j,j as e,H as m,E as g,B as o,T as y,L as S}from"./index-z3KT8Wrr.js";import{S as f,j as T,l as w,f as B,C as k}from"./NavigationService-DPGglOxI.js";import{S as E,P as C,K as P,a as Y}from"./swiper-react-CLetgN37.js";import{A as D,T as I,a as L,I as z,b as A,L as F}from"./ArrowBack-CWPjRm_7.js";import{Y as G}from"./filters-oRQ2Q8R5.js";import{T as H,a as K,b as R,c as p,d as n,e as q}from"./TableRow-BxS3nzfq.js";const x=G.map(l=>f.encode(l.toString())),U=()=>{const[l]=v(),t=T(),[i,b]=j.useState(()=>l.get("id"));if(!i)return e.jsxs(e.Fragment,{children:[e.jsx(m,{children:e.jsx("meta",{name:"robots",content:"noindex"})}),e.jsx(g,{message:"Year id is missing."})]});const{data:r,isLoading:c,error:s}=w({queryKey:["years",{id:i}],queryFn:async()=>await k.getYear(i)});return j.useEffect(()=>{t.navigateToYear(i,!0)},[i]),e.jsxs(e.Fragment,{children:[e.jsxs(m,{children:[r&&e.jsx("title",{children:r.name}),c||s?e.jsx("meta",{name:"robots",content:"noindex"}):e.jsx("meta",{name:"robots",content:"index, follow"})]}),e.jsxs(o,{display:"flex",flexDirection:"column",height:"100vh",children:[e.jsx(D,{position:"static",color:"default",children:e.jsxs(I,{children:[e.jsx(L,{title:"Back",children:e.jsx(z,{edge:"start",color:"inherit",onClick:()=>t.navigateBack(),"aria-label":"back",children:e.jsx(A,{})})}),e.jsx(y,{variant:"h6",component:"h1",children:r==null?void 0:r.name})]})}),e.jsx(o,{display:"flex",flexGrow:1,overflow:"auto",padding:{xs:2,md:2},children:e.jsx(E,{direction:"horizontal",initialSlide:x.indexOf(i),loop:!0,spaceBetween:10,slidesPerView:1,pagination:{clickable:!0},keyboard:{enabled:!0},onSlideChangeTransitionEnd:d=>{b(x[d.realIndex])},modules:[C,P],children:x.map(d=>{var h;return e.jsx(Y,{children:e.jsx(o,{display:"flex",flexDirection:"column",sx:{overflow:"hidden",height:"100%"},children:e.jsxs(o,{display:"flex",flexDirection:"column",flexGrow:"grow",marginBottom:4,sx:{overflow:"auto",height:"100%"},children:[c&&e.jsx(S,{}),s&&e.jsx(g,{message:s.message}),!c&&!s&&r&&e.jsx(H,{component:B,children:e.jsxs(K,{children:[e.jsx(R,{children:e.jsxs(p,{children:[e.jsx(n,{}),e.jsx(n,{align:"center",children:"Gold"}),e.jsx(n,{align:"center",children:"Silver"}),e.jsx(n,{align:"center",children:"Bronze"}),e.jsx(n,{align:"center",children:"Total"})]})}),e.jsx(q,{children:(h=r.results)==null?void 0:h.map(a=>e.jsxs(p,{children:[e.jsx(n,{children:e.jsx(F,{onClick:u=>{u.preventDefault(),t.navigateToFederation(f.encode(a.fed))},rel:"noopener",style:{cursor:"pointer"},children:a.fed})}),e.jsx(n,{align:"center",children:a.gold||0}),e.jsx(n,{align:"center",children:a.silver||0}),e.jsx(n,{align:"center",children:a.bronze||0}),e.jsx(n,{align:"center",children:(a.gold||0)+(a.silver||0)+(a.bronze||0)})]},a.fed))})]})})]})})},d)})})})]})]})};export{U as default};
