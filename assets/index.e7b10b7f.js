import{d as a,y as e,e as n,S as s,z as l,M as o,f as t,o as d,c as u,w as c,a as g,F as m,A as r,B as i,t as p}from"./index.666c5665.js";var f=a({name:"GLangSelect",setup(){const{t:a}=e({useScope:"global"}),t=n(Object.entries(s).map((([a,e])=>({key:a,name:e})))),d=n("zh-CN");return{languages:t,language:d,handleSetLanguage:async e=>{d.value=e,await l(e),o.success(a("g.Language switch successfully"))}}}});const y=g("div",null,[g("i",{class:"v-icon-international"})],-1);f.render=function(a,e,n,s,l,o){const f=t("el-dropdown-item"),w=t("el-dropdown-menu"),k=t("el-dropdown");return d(),u(k,{trigger:"click",onCommand:a.handleSetLanguage},{dropdown:c((()=>[g(w,null,{default:c((()=>[(d(!0),u(m,null,r(a.languages,(e=>(d(),u(f,{key:e.key,command:e.key,disabled:a.language===e.key},{default:c((()=>[i(p(e.name),1)])),_:2},1032,["command","disabled"])))),128))])),_:1})])),default:c((()=>[y])),_:1},8,["onCommand"])},f.install=a=>{a.component(f.name,f)};export default f;
