import{d as e,aK as a,az as t,h as l,p as n,aN as s,aI as o,C as c,D as i,f as d,o as _,c as f,a as p,E as r}from"./index.76b85017.js";var u=e({name:"ConfigPanel",components:{PageConfig:a((()=>t((()=>import("./page-config.0e8f5f13.js")),["/assets/page-config.0e8f5f13.js","/assets/page-config.69361705.css","/assets/index.76b85017.js","/assets/index.82b97920.css","/assets/qiniu.a4f2f89e.js"]))),SettingPanel:a((()=>t((()=>import("./setting-panel.fa33b53c.js")),["/assets/setting-panel.fa33b53c.js","/assets/setting-panel.14d87943.css","/assets/index.76b85017.js","/assets/index.82b97920.css","/assets/config-title.7380809e.js","/assets/config-title.9336ab86.css"]))),DataCenterPanel:a((()=>t((()=>import("./index.60ca79e9.js")),["/assets/index.60ca79e9.js","/assets/index.1e687938.css","/assets/index.76b85017.js","/assets/index.82b97920.css","/assets/config-title.7380809e.js","/assets/config-title.9336ab86.css","/assets/empty-panel.6766288e.js","/assets/empty-panel.ca321ed2.css"]))),InteractionPanel:a((()=>t((()=>import("./index.dca690ea.js")),["/assets/index.dca690ea.js","/assets/index.54e6a962.css","/assets/index.76b85017.js","/assets/index.82b97920.css","/assets/config-title.7380809e.js","/assets/config-title.9336ab86.css","/assets/empty-panel.6766288e.js","/assets/empty-panel.ca321ed2.css"])))},setup(){const e=l((()=>s.config.show)),a=l((()=>o.selectedCom));return n("com",a),{visiblePanel:e,selectedCom:a}}});const m=r();c("data-v-79f587b9");const g={class:"config-manager"},b=p("i",{class:"v-icon-setting"},null,-1),y=p("i",{class:"v-icon-cloud"},null,-1),P=p("i",{class:"v-icon-interact"},null,-1);i();const C=m(((e,a,t,l,n,s)=>{const o=d("page-config"),c=d("el-tooltip"),i=d("setting-panel"),r=d("el-tab-pane"),u=d("data-center-panel"),C=d("interaction-panel"),v=d("el-tabs"),E=d("el-aside");return _(),f(E,{width:"auto",class:["config-panel-wp",{"--hide":!e.visiblePanel}]},{default:m((()=>[p("div",g,[e.selectedCom?(_(),f(v,{key:1,type:"card",stretch:!0},{default:m((()=>[p(r,null,{label:m((()=>[p(c,{effect:"blue","open-delay":500,content:"配置"},{default:m((()=>[b])),_:1})])),default:m((()=>[p(i,{key:e.selectedCom.id})])),_:1}),p(r,{lazy:""},{label:m((()=>[p(c,{effect:"blue","open-delay":500,content:"数据"},{default:m((()=>[y])),_:1})])),default:m((()=>[p(u,{key:e.selectedCom.id})])),_:1}),p(r,{lazy:""},{label:m((()=>[p(c,{effect:"blue","open-delay":500,content:"交互"},{default:m((()=>[P])),_:1})])),default:m((()=>[p(C,{key:e.selectedCom.id})])),_:1})])),_:1})):(_(),f(o,{key:0}))])])),_:1},8,["class"])}));u.render=C,u.__scopeId="data-v-79f587b9";export default u;
