import{n as h,j as e,B as n,T as l,L as j,v as m,H as p,E as f,r as u,q as b}from"./index-F0uqVnjk.js";import{i as v,S as $,C as _}from"./ChessDataService-C5cnGQYN.js";import{R as w,H as L}from"./RouterLink-CmjoKme4.js";import{u as y}from"./useNavigationService-BkdOuPKe.js";import{L as P}from"./Link-FTE1xTEX.js";const S=({data:s})=>{const{getFederationUrl:x}=y(),{t:o}=h();return e.jsxs(n,{display:"grid",children:[(s==null?void 0:s.id)&&s.id>0&&e.jsxs(n,{display:"flex",children:[e.jsx(n,{flexBasis:"50%",children:e.jsxs(l,{variant:"body1",children:[o("fide"),":"]})}),e.jsx(n,{flexBasis:"50%",children:e.jsx(P,{href:`https://ratings.fide.com/profile/${s.id}`,variant:"body1",target:"_blank",rel:"noopener",children:s.id})})]}),(s==null?void 0:s.fed)&&e.jsxs(n,{display:"flex",children:[e.jsx(n,{flexBasis:"50%",children:e.jsxs(l,{variant:"body1",children:[o("federation"),":"]})}),e.jsx(n,{flexBasis:"50%",children:e.jsx(w,{to:x(s.fed),children:o(`federation_enum_short.${s.fed}`)})})]}),(s==null?void 0:s.yob)&&e.jsxs(n,{display:"flex",children:[e.jsx(n,{flexBasis:"50%",children:e.jsxs(l,{variant:"body1",children:[o("year_of_birth"),":"]})}),e.jsxs(n,{display:"flex",flexBasis:"50%",gap:1,children:[e.jsx(l,{variant:"body1",children:s.yob}),e.jsx(l,{variant:"body1",color:"textSecondary",children:`(${new Date().getFullYear()-s.yob} ${o("years")})`})]})]})]})},B=({data:s})=>{const{t:x}=h(),{getTournamentUrl:o}=y(),a=(i,r,c,d)=>{const t=x(`game_enum_short.${c}`),g=x(`gender_category.${d}.${r}`);return g?`${i} ${t} - ${g}`:`${i} ${t}`};return e.jsx(e.Fragment,{children:[...new Set(s==null?void 0:s.results.map(i=>i.rank))].map(i=>e.jsxs(n,{display:"flex",padding:2,gap:1,border:"1px solid #ddd",borderRadius:"8px",boxShadow:"0px 4px 6px rgba(63, 81, 181, 0.3)",bgcolor:i<=3?"white":"",children:[e.jsx(n,{flexGrow:"auto",children:e.jsxs(l,{variant:"body1",children:[i,"."]})}),e.jsx(n,{flex:1,children:s==null?void 0:s.results.filter(r=>r.rank===i).map((r,c)=>e.jsx(j,{to:o(r.year,r.category,r.game,r.gender),style:{textDecoration:"none",color:"inherit"},children:e.jsxs(n,{display:"flex",flexDirection:"row",sx:{"&:hover":{backgroundColor:"#f9f9f9"},borderRadius:"4px"},children:[e.jsx(n,{flexGrow:1,children:e.jsx(l,{variant:"body1",sx:{"&:hover":{textDecoration:"underline"}},children:a(r.year,r.category,r.game,r.gender)})}),e.jsx(n,{children:e.jsx(l,{variant:"body2",color:"textSecondary",children:`${s.yob?` ${r.year-s.yob} ${x("years")}`:""}`})})]})},c))})]},i))})},E=()=>{const[s]=m(),{getPlayerUrl:x}=y(),{t:o,i18n:a}=h(),i=parseInt(s.get("id")??"")||null;if(!i)return e.jsxs(e.Fragment,{children:[e.jsx(p,{children:e.jsx("meta",{name:"robots",content:"noindex"})}),e.jsx(f,{message:"Player id is missing."})]});const{data:r,isLoading:c,error:d}=v({queryKey:["players",{id:i}],queryFn:async()=>await _.getPlayer(i)}),t=u.useMemo(()=>(a.resolvedLanguage==="uk"?r==null?void 0:r.name_uk:r==null?void 0:r.name_en)||(r==null?void 0:r.name_uk)||(r==null?void 0:r.name_en)||"",[r,a.resolvedLanguage]);return d?e.jsx(f,{message:d.message}):c?e.jsx(b,{}):e.jsxs(e.Fragment,{children:[e.jsx($,{title:t,description:o("player_description"),url:x(i,!1)}),e.jsxs(n,{display:"flex",flexDirection:"column",height:"100vh",children:[e.jsx(L,{title:t}),e.jsx(n,{overflow:"auto",padding:{xs:2,md:2},children:e.jsxs(n,{display:"flex",flexDirection:"column",gap:{xs:1,md:2},children:[e.jsx(S,{data:r}),e.jsx(B,{data:r})]})})]})]})};export{E as default};
