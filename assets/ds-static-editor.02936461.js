import{d as a,ae as t,k as o,l as n,m as e,p as s}from"./index.21d9dc82.js";var d=a({name:"DsStaticEditor",setup(){const a=t("apiDataConfig");return{apiDataConfig:a,updateData:t=>{a.value.config.data=t.value}}}});const r={class:"ds-wrapper ds-static"};d.render=function(a,t,d,i,u,c){const p=o("g-monaco-editor");return n(),e("div",r,[s(p,{language:"json","auto-format":!0,code:a.apiDataConfig.config.data,onBlur:a.updateData},null,8,["code","onBlur"])])};export default d;
