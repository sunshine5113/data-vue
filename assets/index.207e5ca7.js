import{d as a,aG as e,aI as s,ae as t,e as n,r as o,ao as c,y as l,z as m,k as i,l as r,m as p,p as d,F as u,s as v,A as f}from"./index.bfb02ff7.js";import{_ as y}from"./config-title.4261f5ad.js";import{_}from"./empty-panel.a783e58e.js";var g=a({name:"DataCenterPanel",components:{ConfigTitle:y,EmptyPanel:_,SourcePanel:e((()=>s((()=>import("./source-panel.564e0afc.js")),["/assets/source-panel.564e0afc.js","/assets/source-panel.b2661707.css","/assets/index.bfb02ff7.js","/assets/index.c4e125b2.css"])))},setup(){const a=t("com"),e=n((()=>Object.keys(a.value.apis))),s=o(e.value[0]);return c("changePanel",(a=>{s.value=s.value===a?"":a})),{activeName:s,com:a,dataKeys:e}}});const j=f();l("data-v-71eed504");const k={class:"data-center-panel"},P={class:"scroll-container"};m();const K=j(((a,e,s,t,n,o)=>{const c=i("config-title"),l=i("source-panel"),m=i("empty-panel");return r(),p("div",k,[d(c,{"com-name":a.com.name,"com-alias":a.com.alias},null,8,["com-name","com-alias"]),d("div",P,[a.dataKeys.length>0?(r(!0),p(u,{key:0},v(a.dataKeys,(e=>(r(),p(l,{key:e,"api-name":e,"active-name":a.activeName,collapse:a.dataKeys.length>1},null,8,["api-name","active-name","collapse"])))),128)):(r(),p(m,{key:1,content:"该组件不需要配置数据"}))])])}));g.render=K,g.__scopeId="data-v-71eed504";export default g;
