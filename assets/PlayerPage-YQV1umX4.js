import{t as B,n as T,j as e,H as _,E as m,r as d,L as w,B as s,T as a}from"./index-Cm7s6-6c.js";import{A as S,T as D,a as L,I as C,b as E,L as f}from"./ArrowBack-BM78T9q8.js";import{l as P,m as F,S as I,k as A,n as G}from"./NavigationService-Bbpx5yat.js";const H=()=>{const[u]=B(),c=P(),{t:o,i18n:x}=T(),l=parseInt(u.get("id")??"")||null;if(!l)return e.jsxs(e.Fragment,{children:[e.jsx(_,{children:e.jsx("meta",{name:"robots",content:"noindex"})}),e.jsx(m,{message:"Player id is missing."})]});const{data:r,isLoading:b,error:h}=F({queryKey:["players",{id:l}],queryFn:async()=>await G.getPlayer(l)}),p=d.useMemo(()=>(x.resolvedLanguage==="uk"?r==null?void 0:r.name_uk:r==null?void 0:r.name_en)||(r==null?void 0:r.name_uk)||(r==null?void 0:r.name_en)||"",[r,x.resolvedLanguage]),v=d.useMemo(()=>o("player_description"),[o]),g=d.useMemo(()=>`/players?id=${l}`,[l]);if(h)return e.jsx(m,{message:h.message});if(b)return e.jsx(w,{});const $=(i,n,t,k)=>{const y=o(`game_enum.${t}`),j=o(`gender_category.${k}.${n}`);return j?`${i} ${y} - ${j}`:`${i} ${y}`};return e.jsxs(e.Fragment,{children:[e.jsx(I,{title:p,description:v,url:g,canonicalUrl:g}),e.jsxs(s,{display:"flex",flexDirection:"column",height:"100vh",children:[e.jsx(S,{position:"static",color:(r==null?void 0:r.gender)===null?"default":(r==null?void 0:r.gender)===A.Open?"primary":"secondary",children:e.jsxs(D,{children:[e.jsx(L,{title:"Back",children:e.jsx(C,{edge:"start",color:"inherit",onClick:()=>c.navigateBack(),"aria-label":"back",children:e.jsx(E,{})})}),e.jsx(a,{variant:"h6",component:"h1",children:p})]})}),e.jsx(s,{overflow:"auto",padding:{xs:2,md:2},children:e.jsxs(s,{display:"flex",flexDirection:"column",gap:{xs:1,md:2},children:[e.jsxs(s,{display:"grid",children:[(r==null?void 0:r.id)&&r.id>0&&e.jsxs(s,{display:"flex",children:[e.jsx(s,{flexBasis:"50%",children:e.jsxs(a,{variant:"body1",children:[o("fide"),":"]})}),e.jsx(s,{flexBasis:"50%",children:e.jsx(f,{href:`https://ratings.fide.com/profile/${r.id}`,variant:"body1",target:"_blank",rel:"noopener",children:r.id})})]}),(r==null?void 0:r.fed)&&e.jsxs(s,{display:"flex",children:[e.jsx(s,{flexBasis:"50%",children:e.jsxs(a,{variant:"body1",children:[o("federation"),":"]})}),e.jsx(s,{flexBasis:"50%",children:e.jsx(f,{onClick:i=>{i.preventDefault(),c.navigateToFederation(r.fed)},rel:"noopener",style:{cursor:"pointer"},children:o(`federation_enum_short.${r.fed}`)})})]}),(r==null?void 0:r.yob)&&e.jsxs(s,{display:"flex",children:[e.jsx(s,{flexBasis:"50%",children:e.jsxs(a,{variant:"body1",children:[o("year_of_birth"),":"]})}),e.jsxs(s,{display:"flex",flexBasis:"50%",gap:1,children:[e.jsx(a,{variant:"body1",children:r.yob}),e.jsx(a,{variant:"body1",color:"textSecondary",children:`(${new Date().getFullYear()-r.yob} ${o("years")})`})]})]})]}),[...new Set(r==null?void 0:r.results.map(i=>i.rank))].map(i=>e.jsxs(s,{display:"flex",padding:2,gap:1,border:"1px solid #ddd",borderRadius:"8px",boxShadow:"0px 4px 6px rgba(63, 81, 181, 0.3)",bgcolor:i<=3?"white":"",children:[e.jsx(s,{flexGrow:"auto",children:e.jsxs(a,{variant:"body1",children:[i,"."]})}),e.jsx(s,{flex:1,children:r==null?void 0:r.results.filter(n=>n.rank===i).map((n,t)=>e.jsxs(s,{display:"flex",flexDirection:"row",onClick:()=>c.navigateToTournament(n.year,n.category,n.game,n.gender),sx:{cursor:"pointer","&:hover":{backgroundColor:"#f9f9f9"},borderRadius:"4px"},children:[e.jsx(s,{flexGrow:1,children:e.jsx(a,{variant:"body1",sx:{cursor:"pointer","&:hover":{textDecoration:"underline"}},children:$(n.year,n.category,n.game,n.gender)})}),e.jsx(s,{children:e.jsx(a,{variant:"body2",color:"textSecondary",children:`${r.yob?` ${n.year-r.yob} ${o("years")}`:""}`})})]},t))})]},i))]})})]})]})};export{H as default};
