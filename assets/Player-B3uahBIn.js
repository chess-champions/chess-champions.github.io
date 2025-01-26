import{o as v,r as o,j as e,H as c,E as B,L as S,B as s,T as a}from"./index-BUtZeoCg.js";import{A as E,T as k,a as w,I as C,b as T,L as j}from"./ArrowBack-CM6n0C_-.js";import{j as $,C as D,k as l,S as F,l as x,m as f}from"./ChessDataService-DNjk51tF.js";const A=()=>{const[m]=v(),t=m.get("id"),[n,g]=o.useState(null),[p,b]=o.useState(!0),[h,y]=o.useState(null),d=$();return o.useEffect(()=>{t&&D.getPlayer(t).then(i=>{g(i)}).catch(()=>y("Failed to fetch player data")).finally(()=>b(!1))},[]),!t||h?e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsx("meta",{name:"robots",content:"noindex"})}),e.jsx(B,{message:h||"Player id is missing."})]}):p?e.jsxs(e.Fragment,{children:[e.jsx(c,{children:e.jsx("meta",{name:"robots",content:"noindex"})}),e.jsx(S,{})]}):e.jsxs(e.Fragment,{children:[e.jsxs(c,{children:[(n==null?void 0:n.name)&&e.jsx("title",{children:n==null?void 0:n.name}),e.jsx("meta",{name:"robots",content:"index, follow"})]}),e.jsxs(s,{display:"flex",flexDirection:"column",height:"100vh",children:[e.jsx(E,{position:"static",color:(n==null?void 0:n.gender)===null?"default":(n==null?void 0:n.gender)===l.Open?"primary":"secondary",children:e.jsxs(k,{children:[e.jsx(w,{title:"Back",children:e.jsx(C,{edge:"start",color:"inherit",onClick:()=>d.navigateBack(),"aria-label":"back",children:e.jsx(T,{})})}),e.jsx(a,{variant:"h6",component:"h1",children:n==null?void 0:n.name})]})}),e.jsx(s,{overflow:"auto",padding:{xs:2,md:2},children:e.jsxs(s,{display:"flex",flexDirection:"column",gap:{xs:1,md:2},children:[e.jsxs(s,{display:"grid",children:[(n==null?void 0:n.id)&&(n==null?void 0:n.fideName)&&e.jsxs(s,{display:"flex",children:[e.jsx(s,{flexBasis:"50%",children:e.jsx(a,{variant:"body1",children:"FIDE Id:"})}),e.jsx(s,{flexBasis:"50%",children:e.jsx(j,{href:`https://ratings.fide.com/profile/${n.id}`,variant:"body1",target:"_blank",rel:"noopener",children:n.id})})]}),(n==null?void 0:n.fed)&&e.jsxs(s,{display:"flex",children:[e.jsx(s,{flexBasis:"50%",children:e.jsx(a,{variant:"body1",children:"Federation:"})}),e.jsx(s,{flexBasis:"50%",children:e.jsx(j,{onClick:i=>{i.preventDefault(),d.navigateToFederation(F.encode(n.fed))},rel:"noopener",style:{cursor:"pointer"},children:n.fed})})]}),(n==null?void 0:n.yob)&&e.jsxs(s,{display:"flex",children:[e.jsx(s,{flexBasis:"50%",children:e.jsx(a,{variant:"body1",children:"Year of Birth:"})}),e.jsxs(s,{display:"flex",flexBasis:"50%",gap:1,children:[e.jsx(a,{variant:"body1",children:n.yob}),e.jsx(a,{variant:"body1",color:"textSecondary",children:`(${new Date().getFullYear()-n.yob} yrs.)`})]})]})]}),[...new Set(n==null?void 0:n.results.map(i=>i.rank))].map(i=>e.jsxs(s,{display:"flex",padding:2,gap:1,border:"1px solid #ddd",borderRadius:"8px",boxShadow:"0px 4px 6px rgba(63, 81, 181, 0.3)",bgcolor:i<=3?"white":"",children:[e.jsx(s,{flexGrow:"auto",children:e.jsxs(a,{variant:"body1",children:[i,"."]})}),e.jsx(s,{flex:1,children:n==null?void 0:n.results.filter(r=>r.rank===i).map((r,u)=>e.jsxs(s,{display:"flex",flexDirection:"row",onClick:()=>d.navigateToTournament(r.year,x[r.category],f[r.type],l[r.gender]),sx:{cursor:"pointer","&:hover":{backgroundColor:"#f9f9f9"},borderRadius:"4px"},children:[e.jsx(s,{flexGrow:1,children:e.jsx(a,{variant:"body1",sx:{cursor:"pointer","&:hover":{textDecoration:"underline"}},children:`${l[r.gender]}${r.category!==x.All?` ${x[r.category]}`:""} ${f[r.type]} ${r.year}`})}),e.jsx(s,{children:e.jsx(a,{variant:"body2",color:"textSecondary",children:`${n.yob?` ${r.year-n.yob} yrs.`:""}`})})]},u))})]},i))]})})]})]})};export{A as default};
