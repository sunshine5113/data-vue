var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,i=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&o(e,t,a[t]);if(l)for(var t of l(a))n.call(a,t)&&o(e,t,a[t]);return e},c=(e,l)=>a(e,t(l));import{d as r,r as d,e as p,aA as m,a1 as u,aB as f,az as b,M as g,aP as h,y as v,z as y,k as x,l as k,m as w,p as j,F as O,s as P,v as V,aq as C,A as _}from"./index.bfb02ff7.js";import{c as D}from"./index.69ee8bd9.js";import"./dom.1228cadc.js";var T=r({name:"ComponentsPanel",setup(){const e=d(""),a=d([]),t=p((()=>m.components.show)),l=p((()=>{const e=u(h),t={type:"all",name:"全部",icon:"v-icon-app"};return e.forEach((e=>{e.expand="",e.data.length>1?e.data.unshift(c(i({},t),{data:e.data.flatMap((e=>e.data))})):(e.expand="all",Object.assign(e.data[0],t))})),e.push({type:"favorite",name:"收藏",icon:"v-icon-favorite",data:[c(i({},t),{data:a.value})],expand:"all"}),e}));return{searchText:e,favoriteComs:a,visiblePanel:t,changeVisible:()=>{m.setPanelState({type:f.components,value:!t.value})},categories:l,toAddCom:(e,a)=>{if(a){const{pageConfig:a}=b,t=D(e);t.attr.x=Math.floor((a.width-t.attr.w)/2),t.attr.y=Math.floor((a.height-t.attr.h)/2),b.addCom(t)}else g.warning("正在开发中。。。")},dragStart:(e,a)=>{e.dataTransfer.setData("text",a);const t=e.target.childNodes[0];e.dataTransfer.setDragImage(t,t.clientWidth/2,t.clientHeight/2)}}}});const A=_();v("data-v-658714d7");const M={class:"components-panel"},S={class:"panel-title"},z=j("span",{class:"panel-text"},"组件列表",-1),I={class:"collpase-hd-text"},U={class:"menu-list"},E={class:"menu-item-text"},q={key:0,class:"favorite-empty"},B={class:"com-search-wp"};y();const F=A(((e,a,t,l,s,n)=>{const o=x("el-tooltip"),i=x("el-collapse-item"),c=x("el-collapse"),r=x("el-tab-pane"),d=x("el-tabs"),p=x("el-input"),m=x("el-aside");return k(),w(m,{width:"auto",class:["component-panel-wp",{"--hide":!e.visiblePanel}]},{default:A((()=>[j("div",M,[j("div",S,[z,j("i",{class:"v-icon-back close-btn",onClick:a[1]||(a[1]=(...a)=>e.changeVisible&&e.changeVisible(...a))})]),j(d,{"tab-position":"left"},{default:A((()=>[(k(!0),w(O,null,P(e.categories,(a=>(k(),w(r,{key:a.type},{label:A((()=>[j(o,{content:a.name,placement:"left",effect:"blue","open-delay":500,enterable:!1},{default:A((()=>[j("i",{class:["com-tab-icon",a.icon]},null,2)])),_:2},1032,["content"])])),default:A((()=>[j(c,{modelValue:a.expand,"onUpdate:modelValue":e=>a.expand=e,accordion:""},{default:A((()=>[(k(!0),w(O,null,P(a.data,(t=>(k(),w(i,{key:t.type,name:t.type},{title:A((()=>[j("i",{class:["collpase-hd-icon",t.icon]},null,2),j("span",I,V(t.name+" ("+t.data.length+")"),1)])),default:A((()=>[j("ul",U,[(k(!0),w(O,null,P(t.data,(a=>(k(),w("li",{key:a.name,title:a.alias,draggable:a.used,class:"menu-item",onDragstart:t=>e.dragStart(t,a.name),onClick:t=>e.toAddCom(a.name,a.used)},[j("div",{class:"menu-item-img",style:`background-image: url(${a.img});`},null,4),j("p",E,V(a.alias),1)],40,["title","draggable","onDragstart","onClick"])))),128))]),0===t.data.length?(k(),w(O,{key:0},["favorite"===a.type?(k(),w("div",q," 没有收藏组件 ")):C("",!0)],64)):C("",!0)])),_:2},1032,["name"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1024)))),128))])),_:1}),j("div",B,[j(p,{modelValue:e.searchText,"onUpdate:modelValue":a[2]||(a[2]=a=>e.searchText=a),placeholder:"搜索组件",size:"small",clearable:""},null,8,["modelValue"])])])])),_:1},8,["class"])}));T.render=F,T.__scopeId="data-v-658714d7";export default T;
