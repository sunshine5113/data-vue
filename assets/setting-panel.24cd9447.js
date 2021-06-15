import{H as e,J as a,ad as l,P as t,Q as o,R as n,T as s,W as i,X as c,$ as d,L as u,N as m,aN as r}from"./index.0a866c7e.js";import{_ as p}from"./config-title.799fc9d4.js";import"./editor.worker.3eb73e22.js";import"./index.c453466d.js";import"./dom.1228cadc.js";var f=e({name:"BasicSetting",props:{attr:{type:Object,required:!0}},setup(e){const t=a([]);return l((()=>{e.attr.filpV&&t.value.push("v"),e.attr.filpH&&t.value.push("h")})),{filps:t,onFilpChange:a=>{t.value=[...a],e.attr.filpV=a.includes("v"),e.attr.filpH=a.includes("h")}}}});const g=d();t("data-v-8e14b31a");const V={class:"basic-setting-wp"},h=c("i",{class:"v-icon-flip-v"},null,-1),b=c("i",{class:"v-icon-flip-h"},null,-1);o();const v=g(((e,a,l,t,o,d)=>{const u=n("g-input-number"),m=n("g-field"),r=n("el-checkbox-button"),p=n("el-tooltip"),f=n("el-checkbox-group"),v=n("el-slider");return s(),i("div",V,[c(m,{label:"图表尺寸"},{default:g((()=>[c(u,{modelValue:e.attr.w,"onUpdate:modelValue":a[1]||(a[1]=a=>e.attr.w=a),min:0,max:8888},null,8,["modelValue"]),c(u,{modelValue:e.attr.h,"onUpdate:modelValue":a[2]||(a[2]=a=>e.attr.h=a),min:0,max:8888},null,8,["modelValue"])])),_:1}),c(m,{label:"图表位置"},{default:g((()=>[c(u,{modelValue:e.attr.x,"onUpdate:modelValue":a[3]||(a[3]=a=>e.attr.x=a)},null,8,["modelValue"]),c(u,{modelValue:e.attr.y,"onUpdate:modelValue":a[4]||(a[4]=a=>e.attr.y=a)},null,8,["modelValue"])])),_:1}),c(m,{label:"旋转角度"},{default:g((()=>[c(u,{modelValue:e.attr.deg,"onUpdate:modelValue":a[5]||(a[5]=a=>e.attr.deg=a),min:0,max:360,step:1},null,8,["modelValue"]),c(f,{modelValue:e.filps,"onUpdate:modelValue":a[6]||(a[6]=a=>e.filps=a),size:"mini",onChange:e.onFilpChange},{default:g((()=>[c(p,{effect:"blue",content:"垂直翻转",enterable:!1},{default:g((()=>[c(r,{label:"v"},{default:g((()=>[h])),_:1})])),_:1}),c(p,{effect:"blue",content:"水平翻转",enterable:!1},{default:g((()=>[c(r,{label:"h"},{default:g((()=>[b])),_:1})])),_:1})])),_:1},8,["modelValue","onChange"])])),_:1}),c(m,{label:"透明度"},{default:g((()=>[c(v,{modelValue:e.attr.opacity,"onUpdate:modelValue":a[7]||(a[7]=a=>e.attr.opacity=a),min:0,max:1,step:.05,"show-tooltip":!1,"show-input":"","input-size":"mini",class:"g-slider"},null,8,["modelValue","step"])])),_:1})])}));f.render=v,f.__scopeId="data-v-8e14b31a";var _=e({name:"SettingPanel",components:{ConfigTitle:p,BasicSetting:f},setup:()=>({toSearch:()=>{m.warning("正在开发中。。。")},com:u("com")})});const x=d();t("data-v-10255652");const w={class:"setting-panel"},y=c("i",{class:"el-icon-search search-icon"},null,-1),U=c("span",null,"搜索配置",-1),j={class:"setting-panel-content"},k={class:"scroll-container"};o();const C=x(((e,a,l,t,o,d)=>{const u=n("config-title"),m=n("basic-setting");return s(),i("div",w,[c(u,{"com-name":e.com.name,"com-alias":e.com.alias},{default:x((()=>[c("div",{class:"search-config",onClick:a[1]||(a[1]=(...a)=>e.toSearch&&e.toSearch(...a))},[y,U])])),_:1},8,["com-name","com-alias"]),c("div",j,[c("div",k,[c(m,{key:`${e.com.id}'_basic-setting`,attr:e.com.attr},null,8,["attr"]),(s(),i(r(e.com.name+"Prop"),{key:e.com.id,com:e.com},null,8,["com"]))])])])}));_.render=C,_.__scopeId="data-v-10255652";export default _;
