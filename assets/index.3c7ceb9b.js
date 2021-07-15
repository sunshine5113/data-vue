import{d as e,e as l,i as a,f as n,o as s,c as i,a as t,t as d,w as o,F as c,A as u,b as m,B as v,j as r,aJ as p,p as b,k as f,g as h,b0 as g,b1 as k,q as y,a_ as C}from"./index.04b1eeb0.js";import{_ as F}from"./config-title.4cf30702.js";import{_ as w}from"./empty-panel.b4ea6e6d.js";var j=e({name:"EventItem",props:{item:{type:Object,required:!0}},setup(e){const n=l(!0),s=l(e.item.enable),i=a("addField"),t=a("deleteField"),d=a("updateField"),o=a("toggleEnable");return{visible:n,isEnabled:s,addField:()=>{i(e.item.name)},deleteField:l=>{t(e.item.name,l)},updateField:(l,a,n)=>{l[a]=n;const s=e.item.fields.filter((e=>e.name)).map((e=>({name:e.name,map:e.map})));d(e.item.name,s)},onEnableChange:l=>{e.item.enable=l,o(e.item.name,l)}}}});const E={class:"event"},V={class:"event-text"},O=v(" 启用 "),_={key:0,class:"variables"},x={class:"variables-table"},P=t("thead",null,[t("tr",null,[t("th",{width:"80"},[t("span",null,"字段")]),t("th",{width:"110",style:{position:"relative"}},[t("span",null,"绑定到变量")]),t("th",{width:"110"},[t("span",null,"字段说明")])])],-1),I={class:"variables-tbody"},q={class:"variable-input"},K={class:"variable-input"},L={class:"variable-btn"},z={class:"variable-input"},A={class:"desc"},B={class:"add-variable"},J=v(" 新建一个字段 ");j.render=function(e,l,a,v,r,p){const b=n("el-checkbox"),f=n("g-input"),h=n("el-button");return s(),i("div",E,[t("div",{class:"events-title",onClick:l[2]||(l[2]=l=>e.visible=!e.visible)},[t("i",{class:["v-icon-arrow-right",e.visible?"events-down":"events-up"]},null,2),t("div",V,d(e.item.description),1),t(b,{modelValue:e.isEnabled,"onUpdate:modelValue":l[1]||(l[1]=l=>e.isEnabled=l),class:"enable-checkbox",onChange:e.onEnableChange},{default:o((()=>[O])),_:1},8,["modelValue","onChange"])]),e.visible?(s(),i("div",_,[t("table",x,[P,t("tbody",I,[(s(!0),i(c,null,u(e.item.fields,((l,a)=>(s(),i("tr",{key:a},[l.custom?(s(),i(c,{key:0},[t("td",q,[t(f,{"model-value":l.name,placeholder:"可自定义",class:"attr-input",onChange:a=>e.updateField(l,"name",a)},null,8,["model-value","onChange"])]),t("td",K,[t(f,{"model-value":l.map,placeholder:"可自定义",class:"attr-input",onChange:a=>e.updateField(l,"map",a)},null,8,["model-value","onChange"])]),t("td",L,[t("i",{class:"v-icon-delete delete-btn",onClick:l=>e.deleteField(a)},null,8,["onClick"])])],64)):(s(),i(c,{key:1},[t("td",null,d(l.name),1),t("td",z,[t(f,{"model-value":l.map,placeholder:"可自定义",class:"attr-input",onChange:a=>e.updateField(l,"map",a)},null,8,["model-value","onChange"])]),t("td",A,d(l.description),1)],64))])))),128))])]),t("div",B,[t(h,{size:"mini",icon:"v-icon-plus",onClick:e.addField},{default:o((()=>[J])),_:1},8,["onClick"])])])):m("",!0)])};var M=e({name:"InteractionPanel",components:{ConfigTitle:F,EmptyPanel:w,EventItem:j},setup(){const e=a("com"),n=l(!0),s=r((()=>Object.keys(e.value.events))),i=l([]);let t=l(p.pageConfig.variables.componentsView[e.value.id]);const d=(e,l,a,n=!1)=>({name:e,map:l||e,description:a,custom:n}),o=l=>{if(t.value||(t.value={}),!t.value[l]){const a=Object.keys(e.value.events[l].fields);t.value[l]={enable:!1,fields:k(a)}}};return b("addField",(e=>{const l=i.value.find((l=>l.name===e));l.fields.some((e=>""===e.name))||l.fields.push(d("","","",!0))})),b("deleteField",((l,a)=>{const n=i.value.find((e=>e.name===l)).fields.splice(a,1)[0].name;if(n){delete t.value[l].fields[n];const a=t.value[l];a.enable&&p.setPublishersView({id:e.value.id,keys:Object.entries(a.fields).map((e=>e[1]||e[0])),enable:!0})}})),b("updateField",((l,a)=>{o(l),t.value[l].fields=g(a,"name","map"),t.value[l].enable&&p.setPublishersView({id:e.value.id,keys:a.map((e=>e.map||e.name)),enable:!0})})),b("toggleEnable",((l,a)=>{o(l);const n=t.value[l];n.enable=a;const s=[];for(const e in n.fields)a&&!n.fields[e]&&(n.fields[e]=e),s.push(n.fields[e]);p.setPublishersView({id:e.value.id,keys:s,enable:a})})),f(t,(()=>{p.pageConfig.variables.componentsView[e.value.id]=t.value})),h((()=>{(()=>{const l=[];for(const[a,n]of Object.entries(e.value.events)){const e={name:a,description:n.description,enable:!1,fields:Object.entries(n.fields).map((([e,l])=>d(e,"",l.description)))};if(t.value){const l=t.value[a];if(l){e.enable=l.enable;for(const[a,n]of Object.entries(l.fields)){const l=e.fields.find((e=>e.name===a));l?l.map=n:e.fields.push(d(a,n,"",!0))}}}l.push(e)}i.value.push(...l)})()})),{com:e,eventKeys:s,visible:n,eventList:i}}});const T={class:"interaction-panle"},U={key:0},D={class:"com-events"},G=v(d("交互事件")),H={class:"extra"},N=v("教程"),Q={class:"event-list"};M.render=function(e,l,a,d,m,v){const r=n("config-title"),p=n("router-link"),b=n("event-item"),f=n("empty-panel");return s(),i("div",T,[t(r,{"com-name":e.com.name,"com-alias":e.com.alias},null,8,["com-name","com-alias"]),e.eventKeys.length>0?(s(),i("div",U,[t("div",D,[t("div",{class:"events-title",onClick:l[1]||(l[1]=l=>e.visible=!e.visible)},[t("div",null,[t("i",{class:["v-icon-arrow-right",e.visible?"events-down":"events-up"]},null,2),G]),t("span",H,[t(p,{to:{name:"MyCase"},target:"_blank",rel:"noopener noreferrer",class:"tutorial-link"},{default:o((()=>[N])),_:1})])]),y(t("div",Q,[(s(!0),i(c,null,u(e.eventList,(e=>(s(),i(b,{key:e.name,item:e},null,8,["item"])))),128))],512),[[C,e.visible]])])])):(s(),i(f,{key:1,content:"该组件没有交互事件"}))])};export default M;
