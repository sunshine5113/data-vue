import{d as a,aP as e,aE as s,i as t,h as n,e as c,p as o,P as l,Q as m,f as i,o as p,c as r,a as d,F as u,g as v,R as y}from"./index.b20965e1.js";import{_ as f}from"./config-title.53288344.js";import{_}from"./empty-panel.7d8a6804.js";var g=a({name:"DataCenterPanel",components:{ConfigTitle:f,EmptyPanel:_,SourcePanel:e((()=>s((()=>import("./source-panel.6910f431.js")),["/assets/source-panel.6910f431.js","/assets/source-panel.4e0abe4e.css","/assets/index.b20965e1.js","/assets/index.fbc9cb84.css","/assets/filter-collapse-panel.cce21939.js"])))},setup(){const a=t("com"),e=n((()=>Object.keys(a.value.apis))),s=c(e.value[0]);return o("changePanel",(a=>{s.value=s.value===a?"":a})),{activeName:s,com:a,dataKeys:e}}});const P=y();l("data-v-44ac5b88");const j={class:"data-center-panel"},b={class:"scroll-container"};m();const h=P(((a,e,s,t,n,c)=>{const o=i("config-title"),l=i("source-panel"),m=i("empty-panel");return p(),r("div",j,[d(o,{"com-name":a.com.name,"com-alias":a.com.alias},null,8,["com-name","com-alias"]),d("div",b,[a.dataKeys.length>0?(p(!0),r(u,{key:0},v(a.dataKeys,(e=>(p(),r(l,{key:e,"api-name":e,"active-name":a.activeName,collapse:a.dataKeys.length>1},null,8,["api-name","active-name","collapse"])))),128)):(p(),r(m,{key:1,content:"该组件不需要配置数据"}))])])}));g.render=h,g.__scopeId="data-v-44ac5b88";export default g;
