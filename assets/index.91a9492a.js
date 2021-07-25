import{d as e,e as l,h as o,aR as a,a_ as n,aN as s,b1 as t,av as i,P as c,Q as d,f as r,l as m,o as u,c as v,a as y,F as b,g as h,n as k,aw as C,ay as p,t as w,b as g,R as B}from"./index.33f1ab50.js";import{u as M}from"./index.ec0e95dd.js";import"./dom.ad4043d1.js";var x=e({name:"LayerPanel",setup(){const e=l(!1),c=o((()=>a.layer.show)),d=o((()=>[...s.coms].reverse())),r=o((()=>s.selectedCom)),m=o((()=>!!r.value)),u=o((()=>{var e;return{enable:!!r.value,checked:null==(e=r.value)?void 0:e.locked}})),v=o((()=>{var e;return{enable:!!r.value,checked:null==(e=r.value)?void 0:e.hided}})),y=o((()=>({opacity:r.value?1:.3}))),b=e=>{r.value&&s.moveCom({id:r.value.id,moveType:e})},{showMenu:h}=M();return{showText:e,visiblePanel:c,descComs:d,enableBtnClass:m,enableLockBtnClass:u,enableHideBtnClass:v,enableBtnStyle:y,changeVisible:()=>{a.setPanelState({type:n.layer,value:!c.value})},selectCom:e=>{s.selectCom(e)},moveUp:()=>b(t.up),moveDown:()=>b(t.down),moveTop:()=>b(t.top),moveBottom:()=>b(t.bottom),lockCom:()=>{r.value&&(r.value.locked=!r.value.locked)},hideCom:()=>{r.value&&(r.value.hided=!r.value.hided)},toDeleteCom:()=>{const e=r.value;e&&i.confirmAsync("是否删除选中的1个组件",(()=>s.deleteCom(e)))},showMenu:h}}});const T=B();c("data-v-3e2c2731");const f={class:"layer-manager"},S={class:"layer-manager-top"},U=y("div",{class:"layer-num"},"图层",-1),V={class:"layer-layout"},D={class:"layer-toolbar layer-toolbar-top"},P={class:"layer-manager-wrap"},K={key:1,class:"layer-item-span"},_={class:"layer-item-text"},j={class:"layer-manager-thumbail"},L={key:1,class:"layer-item-span"},H={class:"layer-item-text"},R={class:"layer-thumbail-item"},A={class:"layer-toolbar layer-toolbar-bottom"};d();const F=T(((e,l,o,a,n,s)=>{const t=r("el-aside"),i=m("focus");return u(),v(t,{width:"auto",class:["layer-panel-wp",{"--hide":!e.visiblePanel}]},{default:T((()=>[y("div",f,[y("div",S,[U,y("div",V,[y("i",{title:"缩略图版",class:["v-icon-view-grid btn-icon",[{selected:!e.showText}]],onClick:l[1]||(l[1]=l=>e.showText=!1)},null,2),y("i",{title:"文字版",class:["v-icon-view-list btn-icon",[{selected:e.showText}]],onClick:l[2]||(l[2]=l=>e.showText=!0)},null,2),y("i",{title:"收起",class:"v-icon-back btn-icon",onClick:l[3]||(l[3]=(...l)=>e.changeVisible&&e.changeVisible(...l))})])]),y("div",D,[y("i",{title:"上移一层",class:["v-icon-move-up toolbar-icon standard",e.enableBtnClass],style:e.enableBtnStyle,onClick:l[4]||(l[4]=(...l)=>e.moveUp&&e.moveUp(...l))},null,6),y("i",{title:"下移一层",class:["v-icon-move-down toolbar-icon standard",e.enableBtnClass],style:e.enableBtnStyle,onClick:l[5]||(l[5]=(...l)=>e.moveDown&&e.moveDown(...l))},null,6),y("i",{title:"置顶",class:["v-icon-move-top toolbar-icon standard",e.enableBtnClass],style:e.enableBtnStyle,onClick:l[6]||(l[6]=(...l)=>e.moveTop&&e.moveTop(...l))},null,6),y("i",{title:"置底",class:["v-icon-move-bottom toolbar-icon standard",e.enableBtnClass],style:e.enableBtnStyle,onClick:l[7]||(l[7]=(...l)=>e.moveBottom&&e.moveBottom(...l))},null,6)]),y("div",P,[(u(!0),v(b,null,h(e.descComs,(o=>(u(),v(b,{key:o.id},[e.showText?(u(),v("div",{key:0,title:o.alias,class:["layer-manager-item",[{hided:o.hided,locked:o.locked,hovered:o.hovered,selected:o.selected}]],onMousedown:l=>e.selectCom(o.id),onMouseenter:e=>o.hovered=!0,onMouseleave:e=>o.hovered=!1,onContextmenu:l[8]||(l[8]=(...l)=>e.showMenu&&e.showMenu(...l))},[y("i",{class:o.icon},null,2),o.renameing?k((u(),v("input",{key:0,"onUpdate:modelValue":e=>o.alias=e,class:"layer-item-input",onBlur:e=>o.renameing=!1,onKeydown:p((e=>o.renameing=!1),["enter"])},null,40,["onUpdate:modelValue","onBlur","onKeydown"])),[[C,o.alias,void 0,{trim:!0}],[i]]):(u(),v("span",K,[y("span",_,w(o.alias),1)])),o.hided?(u(),v("i",{key:2,class:"v-icon-hide show-toggle-btn",onClick:e=>o.hided=!1},null,8,["onClick"])):g("",!0),o.locked?(u(),v("i",{key:3,class:"v-icon-lock show-toggle-btn",onClick:e=>o.locked=!1},null,8,["onClick"])):g("",!0)],42,["title","onMousedown","onMouseenter","onMouseleave"])):(u(),v("div",{key:1,title:o.alias,class:["layer-manager-item thumbail-wrap",[{hided:o.hided,locked:o.locked,hovered:o.hovered,selected:o.selected}]],onMousedown:l=>e.selectCom(o.id),onMouseenter:e=>o.hovered=!0,onMouseleave:e=>o.hovered=!1,onContextmenu:l[9]||(l[9]=(...l)=>e.showMenu&&e.showMenu(...l))},[y("div",{class:"layer-item-thumbail",alt:o.alias,style:`background-image: url(${o.img})`},null,12,["alt"]),y("div",j,[o.renameing?k((u(),v("input",{key:0,"onUpdate:modelValue":e=>o.alias=e,class:"layer-item-input",onBlur:e=>o.renameing=!1,onKeydown:p((e=>o.renameing=!1),["enter"])},null,40,["onUpdate:modelValue","onBlur","onKeydown"])),[[C,o.alias,void 0,{trim:!0}],[i]]):(u(),v("span",L,[y("span",H,w(o.alias),1)]))]),y("div",R,[o.hided?(u(),v("i",{key:0,class:"v-icon-hide show-toggle-btn",onClick:e=>o.hided=!1},null,8,["onClick"])):g("",!0),o.locked?(u(),v("i",{key:1,class:"v-icon-lock show-toggle-btn",onClick:e=>o.locked=!1},null,8,["onClick"])):g("",!0)])],42,["title","onMousedown","onMouseenter","onMouseleave"]))],64)))),128)),y("div",{class:"last-flex-item",onClick:l[10]||(l[10]=l=>e.selectCom(""))})]),y("div",A,[y("i",{title:"删除",class:["v-icon-delete toolbar-icon standard",e.enableBtnClass],style:e.enableBtnStyle,onClick:l[11]||(l[11]=(...l)=>e.toDeleteCom&&e.toDeleteCom(...l))},null,6),y("i",{title:"锁定",class:["v-icon-lock toolbar-icon standard",e.enableLockBtnClass],style:e.enableBtnStyle,onClick:l[12]||(l[12]=(...l)=>e.lockCom&&e.lockCom(...l))},null,6),y("i",{class:["v-icon-hide toolbar-icon standard",e.enableHideBtnClass],title:"隐藏",style:e.enableBtnStyle,onClick:l[13]||(l[13]=(...l)=>e.hideCom&&e.hideCom(...l))},null,6)])])])),_:1},8,["class"])}));x.render=F,x.__scopeId="data-v-3e2c2731";export default x;
