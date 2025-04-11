import{C as u,n as f,j as e,B as a,p as b,T as y,t as v,r as g}from"./index-BP3iGYre.js";import{S as w,K as S,P as T,V as D,a as k}from"./swiper-react-C7u7T8Ke.js";import{R as E,H as z,F as I}from"./RouterLink-BcrVbzmt.js";import{i as P,E as Y,j as F,D as R,S as B,Y as h}from"./ChessDataService-BAmi6wt3.js";import{u as p}from"./useNavigationService-CmyAV1gi.js";import{u as C,T as $,a as H,b as L,c as j,d as n,e as _}from"./TableRow-Bv9E0lgL.js";import{P as A}from"./Paper-BBgidAPj.js";const K=({id:o})=>{var m;const c=u(),x=C(c.breakpoints.down("sm")),{getFederationUrl:t}=p(),{t:s}=f(),{data:i,isLoading:d,error:l}=P({queryKey:["years",{id:o}],queryFn:async()=>await F.getYear(o)});return e.jsxs(a,{display:"flex",flexDirection:"column",flexGrow:"grow",marginBottom:4,sx:{overflow:"auto",height:"100%"},children:[d&&e.jsx(b,{}),l&&e.jsx(Y,{message:l.message}),!d&&!l&&i&&e.jsx($,{component:A,children:e.jsxs(H,{stickyHeader:!0,size:x?"small":"medium",children:[e.jsx(L,{children:e.jsxs(j,{children:[e.jsx(n,{align:"left",children:e.jsx(y,{children:s("federation")})}),e.jsx(n,{children:e.jsxs(a,{display:"flex",flexDirection:"column",alignItems:"center",children:[e.jsx(a,{sx:{display:{xs:"none",sm:"block"}},children:s("gold")}),e.jsx("img",{alt:s("gold"),width:"16",height:"16",src:"/gold.svg"})]})}),e.jsx(n,{children:e.jsxs(a,{display:"flex",flexDirection:"column",alignItems:"center",children:[e.jsx(a,{sx:{display:{xs:"none",sm:"block"}},children:s("silver")}),e.jsx("img",{alt:s("silver"),width:"16",height:"16",src:"/silver.svg"})]})}),e.jsx(n,{children:e.jsxs(a,{display:"flex",flexDirection:"column",alignItems:"center",children:[e.jsx(a,{sx:{display:{xs:"none",sm:"block"}},children:s("bronze")}),e.jsx("img",{alt:s("bronze"),width:"16",height:"16",src:"/bronze.svg"})]})}),e.jsx(n,{children:e.jsxs(a,{display:"flex",flexDirection:"column",alignItems:"center",children:[e.jsx(a,{sx:{display:{xs:"none",sm:"block"}},children:s("total")}),e.jsx("img",{alt:s("total"),width:"16",height:"16",src:"/total.svg"})]})})]})}),e.jsx(_,{children:(m=i.results)==null?void 0:m.map(r=>e.jsxs(j,{children:[e.jsx(n,{children:r.fed&&e.jsx(E,{to:t(r.fed),children:s(`federation_enum_short.${r.fed}`)})}),e.jsx(n,{align:"center",children:r.gold||0}),e.jsx(n,{align:"center",children:r.silver||0}),e.jsx(n,{align:"center",children:r.bronze||0}),e.jsx(n,{align:"center",children:(r.gold||0)+(r.silver||0)+(r.bronze||0)})]},r.fed))})]})})]})},N=()=>{const[o]=v(),{getYearUrl:c,navigateToYear:x}=p(),{t}=f(),s=parseInt(o.get("id")||"")||R,[i,d]=g.useState(s);return g.useEffect(()=>{s!=i&&x(i,!0)},[i]),e.jsxs(e.Fragment,{children:[e.jsx(B,{title:`${i} - ${t("medals_table")}`,description:t("year_description",{year:i}),url:c(i,!1)}),e.jsxs(a,{display:"flex",flexDirection:"column",height:"100vh",padding:2,gap:1,boxSizing:"border-box",overflow:"hidden",children:[e.jsx(z,{title:`${i} ${t("medals_table")}`}),e.jsx(a,{display:"flex",flexGrow:1,overflow:"hidden",height:"100%",children:e.jsx(w,{direction:"horizontal",initialSlide:h.indexOf(i),loop:!0,spaceBetween:10,slidesPerView:1,style:{width:"100%",height:"100%"},pagination:{clickable:!1},keyboard:{enabled:!0},onSlideChange:l=>{d(h[l.realIndex])},virtual:{enabled:!0},modules:[S,T,D],children:h.map(l=>e.jsx(k,{"aria-hidden":i!==l,children:e.jsx(a,{display:"flex",flexDirection:"column",overflow:"hidden",height:"100%",children:e.jsx(K,{id:l})})},l))})}),e.jsx(I,{})]})]})};export{N as default};
