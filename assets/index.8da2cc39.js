import{d as a,aD as e,a5 as s,a4 as t,g as n,aj as o,p as c,k as l,r as m,o as r,c as i,a as p,F as d,b as u,l as v}from"./index.ecb37744.js";import{l as f}from"./index.bf43271e.js";import{_ as y}from"./config-title.b7b77716.js";import{_ as j}from"./empty-panel.67d16b3d.js";import"./editor.worker.3eb73e22.js";import"./dom.1228cadc.js";var _=a({name:"DataCenterPanel",components:{ConfigTitle:y,EmptyPanel:j,SourcePanel:f((()=>e((()=>import("./source-panel.8ad10f4f.js")),["/assets/source-panel.8ad10f4f.js","/assets/source-panel.5cc9ec9b.css","/assets/index.ecb37744.js","/assets/index.a41e9195.css","/assets/editor.worker.3eb73e22.js","/assets/index.bf43271e.js","/assets/index.a2edeca8.css","/assets/dom.1228cadc.js"])))},setup(){const a=s("com"),e=t((()=>Object.keys(a.value.apis))),c=n(e.value[0]);return o("changePanel",(a=>{c.value=c.value===a?"":a})),{activeName:c,com:a,dataKeys:e}}});const b=v();c("data-v-71eed504");const g={class:"data-center-panel"},k={class:"scroll-container"};l();const P=b(((a,e,s,t,n,o)=>{const c=m("config-title"),l=m("source-panel"),v=m("empty-panel");return r(),i("div",g,[p(c,{"com-name":a.com.name,"com-alias":a.com.alias},null,8,["com-name","com-alias"]),p("div",k,[a.dataKeys.length>0?(r(!0),i(d,{key:0},u(a.dataKeys,(e=>(r(),i(l,{key:e,"api-name":e,"active-name":a.activeName,collapse:a.dataKeys.length>1},null,8,["api-name","active-name","collapse"])))),128)):(r(),i(v,{key:1,content:"该组件不需要配置数据"}))])])}));_.render=P,_.__scopeId="data-v-71eed504";export default _;
