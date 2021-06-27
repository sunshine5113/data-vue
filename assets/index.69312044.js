var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,o=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,i=(e,a)=>{for(var t in a||(a={}))n.call(a,t)&&o(e,t,a[t]);if(l)for(var t of l(a))s.call(a,t)&&o(e,t,a[t]);return e},c=(e,l)=>a(e,t(l));import{d as r,r as d,e as p,aA as m,a1 as u,aB as f,az as b,M as g,aP as v,y as h,z as y,k,l as x,m as C,p as P,v as w,F as j,s as O,aq as _,A as T}from"./index.21d9dc82.js";import{c as V}from"./index.1e12131a.js";import"./dom.1228cadc.js";var D=r({name:"ComponentsPanel",setup(){const e=d(""),a=d([]),t=p((()=>m.components.show)),l=p((()=>{const e=u(v),t={type:"all",name:"全部",icon:"v-icon-view-grid"};return e.forEach((e=>{e.expand="",e.data.length>1?e.data.unshift(c(i({},t),{data:e.data.flatMap((e=>e.data))})):(e.expand="all",Object.assign(e.data[0],t))})),e.push({type:"favorite",name:"收藏",icon:"v-icon-favorite",data:[c(i({},t),{data:a.value})],expand:"all"}),e}));return{searchText:e,favoriteComs:a,visiblePanel:t,categories:l,changeVisible:()=>{m.setPanelState({type:f.components,value:!t.value})},handleTabClick:()=>{t.value||m.setPanelState({type:f.components,value:!0})},toAddCom:(e,a)=>{if(a){const{pageConfig:a}=b,t=V(e);t.attr.x=Math.floor((a.width-t.attr.w)/2),t.attr.y=Math.floor((a.height-t.attr.h)/2),b.addCom(t)}else g.warning("正在开发中。。。")},dragStart:(e,a)=>{e.dataTransfer.setData("text",a);const t=e.target.childNodes[0];e.dataTransfer.setDragImage(t,t.clientWidth/2,t.clientHeight/2)}}}});const S=T();h("data-v-0fc8e4a4");const A={class:"components-panel"},M={class:"panel-title"},I={class:"panel-text"},z=P("i",{title:"搜索",class:"v-icon-search btn-icon"},null,-1),E={class:"collpase-hd-text"},U={class:"menu-list"},q={class:"menu-item-text"},B={key:0,class:"favorite-empty"};y();const F=S(((e,a,t,l,n,s)=>{const o=k("el-tooltip"),i=k("el-collapse-item"),c=k("el-collapse"),r=k("el-tab-pane"),d=k("el-tabs"),p=k("el-aside");return x(),C(p,{width:"auto",class:["component-panel-wp",{"--hide":!e.visiblePanel}]},{default:S((()=>[P("div",A,[P("div",M,[P("span",I,w(e.visiblePanel?"全部组件":"组件"),1),P(o,{content:"搜索",placement:"top",effect:"blue","open-delay":500,enterable:!1},{default:S((()=>[z])),_:1}),P(o,{content:"收起",placement:"top",effect:"blue","open-delay":500,enterable:!1},{default:S((()=>[P("i",{title:"收起",class:"v-icon-back btn-icon",onClick:a[1]||(a[1]=(...a)=>e.changeVisible&&e.changeVisible(...a))})])),_:1})]),P(d,{"tab-position":"left",onTabClick:e.handleTabClick},{default:S((()=>[(x(!0),C(j,null,O(e.categories,(a=>(x(),C(r,{key:a.type},{label:S((()=>[P(o,{content:a.name,placement:"right",effect:"blue","open-delay":500,enterable:!1},{default:S((()=>[P("i",{class:["com-tab-icon",a.icon]},null,2)])),_:2},1032,["content"])])),default:S((()=>[P(c,{modelValue:a.expand,"onUpdate:modelValue":e=>a.expand=e,accordion:""},{default:S((()=>[(x(!0),C(j,null,O(a.data,(t=>(x(),C(i,{key:t.type,name:t.type},{title:S((()=>[P("i",{class:["collpase-hd-icon",t.icon]},null,2),P("span",E,w(t.name+" ("+t.data.length+")"),1)])),default:S((()=>[P("ul",U,[(x(!0),C(j,null,O(t.data,(a=>(x(),C("li",{key:a.name,title:a.alias,draggable:a.used,class:"menu-item",onDragstart:t=>e.dragStart(t,a.name),onClick:t=>e.toAddCom(a.name,a.used)},[P("div",{class:"menu-item-img",style:`background-image: url(${a.img});`},null,4),P("p",q,w(a.alias),1)],40,["title","draggable","onDragstart","onClick"])))),128))]),0===t.data.length?(x(),C(j,{key:0},["favorite"===a.type?(x(),C("div",B," 没有收藏组件 ")):_("",!0)],64)):_("",!0)])),_:2},1032,["name"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1024)))),128))])),_:1},8,["onTabClick"])])])),_:1},8,["class"])}));D.render=F,D.__scopeId="data-v-0fc8e4a4";export default D;
