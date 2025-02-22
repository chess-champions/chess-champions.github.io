import{v as B,n as _,j as e,H as k,E as y,r as T,q as w,B as s,T as a,L}from"./index-j1Dpuvjw.js";import{A as S,T as D,a as P,I as E,b as C,R as F}from"./RouterLink-DuSB_Zu6.js";import{j as R,S as I,C as q}from"./ChessDataService-Ck3_ZlNS.js";import{u as A,a as G}from"./useNavigationService-CK2XNMO3.js";import{L as U}from"./Link-CgLhsmaK.js";const Q=()=>{const[p]=B(),{getTournamentUrl:j,getPlayerUrl:f,getFederationUrl:m,navigateBack:u}=A(),{t:i,i18n:d}=_(),l=parseInt(p.get("id")??"")||null;if(!l)return e.jsxs(e.Fragment,{children:[e.jsx(k,{children:e.jsx("meta",{name:"robots",content:"noindex"})}),e.jsx(y,{message:"Player id is missing."})]});const{data:r,isLoading:b,error:c}=R({queryKey:["players",{id:l}],queryFn:async()=>await q.getPlayer(l)}),x=T.useMemo(()=>(d.resolvedLanguage==="uk"?r==null?void 0:r.name_uk:r==null?void 0:r.name_en)||(r==null?void 0:r.name_uk)||(r==null?void 0:r.name_en)||"",[r,d.resolvedLanguage]);if(c)return e.jsx(y,{message:c.message});if(b)return e.jsx(w,{});const v=(o,n,t,$)=>{const h=i(`game_enum_short.${t}`),g=i(`gender_category.${$}.${n}`);return g?`${o} ${h} - ${g}`:`${o} ${h}`};return e.jsxs(e.Fragment,{children:[e.jsx(I,{title:x,description:i("player_description"),url:f(l,!1)}),e.jsxs(s,{display:"flex",flexDirection:"column",height:"100vh",children:[e.jsx(S,{position:"static",color:(r==null?void 0:r.gender)===null?"default":(r==null?void 0:r.gender)===G.Open?"primary":"secondary",children:e.jsxs(D,{children:[e.jsx(P,{title:"Back",children:e.jsx(E,{edge:"start",color:"inherit",onClick:()=>u(),"aria-label":"back",children:e.jsx(C,{})})}),e.jsx(a,{variant:"h6",component:"h1",children:x})]})}),e.jsx(s,{overflow:"auto",padding:{xs:2,md:2},children:e.jsxs(s,{display:"flex",flexDirection:"column",gap:{xs:1,md:2},children:[e.jsxs(s,{display:"grid",children:[(r==null?void 0:r.id)&&r.id>0&&e.jsxs(s,{display:"flex",children:[e.jsx(s,{flexBasis:"50%",children:e.jsxs(a,{variant:"body1",children:[i("fide"),":"]})}),e.jsx(s,{flexBasis:"50%",children:e.jsx(U,{href:`https://ratings.fide.com/profile/${r.id}`,variant:"body1",target:"_blank",rel:"noopener",children:r.id})})]}),(r==null?void 0:r.fed)&&e.jsxs(s,{display:"flex",children:[e.jsx(s,{flexBasis:"50%",children:e.jsxs(a,{variant:"body1",children:[i("federation"),":"]})}),e.jsx(s,{flexBasis:"50%",children:e.jsx(F,{to:m(r.fed),children:i(`federation_enum_short.${r.fed}`)})})]}),(r==null?void 0:r.yob)&&e.jsxs(s,{display:"flex",children:[e.jsx(s,{flexBasis:"50%",children:e.jsxs(a,{variant:"body1",children:[i("year_of_birth"),":"]})}),e.jsxs(s,{display:"flex",flexBasis:"50%",gap:1,children:[e.jsx(a,{variant:"body1",children:r.yob}),e.jsx(a,{variant:"body1",color:"textSecondary",children:`(${new Date().getFullYear()-r.yob} ${i("years")})`})]})]})]}),[...new Set(r==null?void 0:r.results.map(o=>o.rank))].map(o=>e.jsxs(s,{display:"flex",padding:2,gap:1,border:"1px solid #ddd",borderRadius:"8px",boxShadow:"0px 4px 6px rgba(63, 81, 181, 0.3)",bgcolor:o<=3?"white":"",children:[e.jsx(s,{flexGrow:"auto",children:e.jsxs(a,{variant:"body1",children:[o,"."]})}),e.jsx(s,{flex:1,children:r==null?void 0:r.results.filter(n=>n.rank===o).map((n,t)=>e.jsx(L,{to:j(n.year,n.category,n.game,n.gender),style:{textDecoration:"none",color:"inherit"},children:e.jsxs(s,{display:"flex",flexDirection:"row",sx:{"&:hover":{backgroundColor:"#f9f9f9"},borderRadius:"4px"},children:[e.jsx(s,{flexGrow:1,children:e.jsx(a,{variant:"body1",sx:{"&:hover":{textDecoration:"underline"}},children:v(n.year,n.category,n.game,n.gender)})}),e.jsx(s,{children:e.jsx(a,{variant:"body2",color:"textSecondary",children:`${r.yob?` ${n.year-r.yob} ${i("years")}`:""}`})})]})},t))})]},o))]})})]})]})};export{Q as default};
