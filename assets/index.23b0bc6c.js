import{a4 as l,a8 as p,ab as i,a2 as W,a$ as Y,bd as q,a7 as J,aF as y,a3 as u,bi as O,a_ as s,b0 as d,a9 as v,aa as m,ac as L,ad as Q,b7 as R,bb as X,bc as Z,aN as U,bf as z,ai as P,ae as H,a5 as f,af as w}from"./vendor.97d7e3b4.js";import{b as A,H as K,E as b,W as x,Y as g}from"./App.718241ee.js";import{I as ee}from"./warning.3f7e1d33.js";import{I as oe}from"./delete.6ed582c9.js";import{I as se}from"./back.e9298ebe.js";import{I as ne,a as te,b as ae,c as le,d as ie}from"./lock.f428a3d9.js";import{I as de}from"./hide.49b8dfbe.js";import{I as ce}from"./view-grid.2c511712.js";import{u as re}from"./index.382e1d7e.js";import"./dom.6b90dd47.js";const ue={},ve={t:"1639130612954",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3985",width:"64",height:"64"},pe=i("path",{d:"M116.4921875 116.4921875l0 186.12132317 791.015625 0 0-186.12132317-791.015625 0zM860.9774817 256.08317987l-697.9549634 0 0-93.06066158 697.95496341 0 0 93.06066158zM116.4921875 581.79549619l791.015625 0 0-186.12132317-791.015625 0 0 186.12132317zM163.0225183 442.20450381l697.9549634 0 0 93.06066158-697.95496341 0 0-93.06066158zM116.4921875 860.9774817l791.015625 1e-8 0-186.12132317-791.015625 0 0 186.12132317zM163.0225183 721.38648933l697.9549634 0 0 93.0606616-697.95496341 0 0-93.0606616z","p-id":"3986"},null,-1),me=[pe];function ye(o,c){return l(),p("svg",ve,me)}var he=A(ue,[["render",ye]]);const Ce=W({name:"LayerPanel",components:{IconViewList:he,IconViewGrid:ce,IconBack:se,IconMoveUp:ne,IconMoveDown:te,IconMoveTop:ae,IconMoveBottom:le,IconLock:ie,IconHide:de,IconDelete:oe},setup(){const o=Y(),c=q(),F=J(!1),M=y(()=>K.layer.show),j=y(()=>[...b.coms].reverse()),t=y(()=>b.selectedCom),B=y(()=>!!t.value),a=y(()=>{var r;return{enable:!!t.value,checked:(r=t.value)==null?void 0:r.locked}}),I=y(()=>{var r;return{enable:!!t.value,checked:(r=t.value)==null?void 0:r.hided}}),$=y(()=>({opacity:t.value?1:.3})),D=()=>{K.setPanelState({type:x.layer,value:!M.value})},E=r=>{b.selectCom(r)},h=r=>{t.value&&b.moveCom({id:t.value.id,moveType:r})},T=()=>h(g.up),V=()=>h(g.down),C=()=>h(g.top),k=()=>h(g.bottom),S=()=>{t.value&&(t.value.locked=!t.value.locked)},_=()=>{t.value&&(t.value.hided=!t.value.hided)},e=()=>{const r=t.value;if(r){const N=c.create({content:"\u662F\u5426\u5220\u9664\u9009\u4E2D\u76841\u4E2A\u7EC4\u4EF6",negativeText:"\u53D6\u6D88",positiveText:"\u786E\u5B9A",iconPlacement:"top",icon:()=>R(ee),onPositiveClick:async()=>{N.loading=!0;try{await b.deleteCom(r)}catch(G){o.error(G.message)}}})}},{showMenu:n}=re();return{showText:F,visiblePanel:M,descComs:j,enableBtnClass:B,enableLockBtnClass:a,enableHideBtnClass:I,enableBtnStyle:$,changeVisible:D,selectCom:E,moveUp:T,moveDown:V,moveTop:C,moveBottom:k,lockCom:S,hideCom:_,toDeleteCom:e,showMenu:n}}}),ke=o=>(X("data-v-01769368"),o=o(),Z(),o),be={class:"layer-manager"},_e={class:"layer-manager-top"},fe=ke(()=>i("div",{class:"layer-num"},"\u56FE\u5C42",-1)),we={class:"layer-layout"},ge={class:"layer-toolbar layer-toolbar-top"},Me={class:"layer-manager-wrap"},Be=["title","onMousedown","onMouseenter","onMouseleave"],Ie=["onUpdate:modelValue","onBlur","onKeydown"],$e={key:1,class:"layer-item-span"},De={class:"layer-item-text"},Ee=["title","onMousedown","onMouseenter","onMouseleave"],Te=["alt"],Ve={class:"layer-manager-thumbail"},Se=["onUpdate:modelValue","onBlur","onKeydown"],Fe={key:1,class:"layer-item-span"},je={class:"layer-item-text"},Le={class:"layer-thumbail-item"},Ue={class:"layer-toolbar layer-toolbar-bottom"};function ze(o,c,F,M,j,t){const B=u("IconViewGrid"),a=u("n-icon"),I=u("IconViewList"),$=u("IconBack"),D=u("IconMoveUp"),E=u("IconMoveDown"),h=u("IconMoveTop"),T=u("IconMoveBottom"),V=u("g-com-icon"),C=u("IconHide"),k=u("IconLock"),S=u("IconDelete"),_=O("focus");return l(),p("div",{class:v(["g-aside layer-panel-wp",{"--hide":!o.visiblePanel}])},[i("div",be,[i("div",_e,[fe,i("div",we,[s(a,{title:"\u7F29\u7565\u56FE\u7248",class:v(["btn-icon",{selected:!o.showText}]),onClick:c[0]||(c[0]=e=>o.showText=!1)},{default:d(()=>[s(B)]),_:1},8,["class"]),s(a,{title:"\u6587\u5B57\u7248",class:v(["btn-icon",{selected:o.showText}]),onClick:c[1]||(c[1]=e=>o.showText=!0)},{default:d(()=>[s(I)]),_:1},8,["class"]),s(a,{title:"\u6536\u8D77",class:"btn-icon",onClick:o.changeVisible},{default:d(()=>[s($)]),_:1},8,["onClick"])])]),i("div",ge,[s(a,{title:"\u4E0A\u79FB\u4E00\u5C42",class:v(["toolbar-icon standard",o.enableBtnClass]),style:m(o.enableBtnStyle),onClick:o.moveUp},{default:d(()=>[s(D)]),_:1},8,["class","style","onClick"]),s(a,{title:"\u4E0B\u79FB\u4E00\u5C42",class:v(["toolbar-icon standard",o.enableBtnClass]),style:m(o.enableBtnStyle),onClick:o.moveDown},{default:d(()=>[s(E)]),_:1},8,["class","style","onClick"]),s(a,{title:"\u7F6E\u9876",class:v(["toolbar-icon standard",o.enableBtnClass]),style:m(o.enableBtnStyle),onClick:o.moveTop},{default:d(()=>[s(h)]),_:1},8,["class","style","onClick"]),s(a,{title:"\u7F6E\u5E95",class:v(["toolbar-icon standard",o.enableBtnClass]),style:m(o.enableBtnStyle),onClick:o.moveBottom},{default:d(()=>[s(T)]),_:1},8,["class","style","onClick"])]),i("div",Me,[(l(!0),p(L,null,Q(o.descComs,e=>(l(),p(L,{key:e.id},[o.showText?(l(),p("div",{key:0,title:e.alias,class:v(["layer-manager-item",[{hided:e.hided,locked:e.locked,hovered:e.hovered,selected:e.selected}]]),onMousedown:n=>o.selectCom(e.id),onMouseenter:n=>e.hovered=!0,onMouseleave:n=>e.hovered=!1,onContextmenu:c[2]||(c[2]=(...n)=>o.showMenu&&o.showMenu(...n))},[s(V,{icon:e.icon},null,8,["icon"]),e.renameing?U((l(),p("input",{key:0,"onUpdate:modelValue":n=>e.alias=n,class:"layer-item-input",onBlur:n=>e.renameing=!1,onKeydown:P(n=>e.renameing=!1,["enter"])},null,40,Ie)),[[z,e.alias,void 0,{trim:!0}],[_]]):(l(),p("span",$e,[i("span",De,H(e.alias),1)])),e.hided?(l(),f(a,{key:2,class:"show-toggle-btn",onClick:n=>e.hided=!1},{default:d(()=>[s(C)]),_:2},1032,["onClick"])):w("",!0),e.locked?(l(),f(a,{key:3,class:"show-toggle-btn",onClick:n=>e.locked=!1},{default:d(()=>[s(k)]),_:2},1032,["onClick"])):w("",!0)],42,Be)):(l(),p("div",{key:1,title:e.alias,class:v(["layer-manager-item thumbail-wrap",[{hided:e.hided,locked:e.locked,hovered:e.hovered,selected:e.selected}]]),onMousedown:n=>o.selectCom(e.id),onMouseenter:n=>e.hovered=!0,onMouseleave:n=>e.hovered=!1,onContextmenu:c[3]||(c[3]=(...n)=>o.showMenu&&o.showMenu(...n))},[i("div",{class:"layer-item-thumbail",alt:e.alias,style:m(`background-image: url(${e.img})`)},null,12,Te),i("div",Ve,[e.renameing?U((l(),p("input",{key:0,"onUpdate:modelValue":n=>e.alias=n,class:"layer-item-input",onBlur:n=>e.renameing=!1,onKeydown:P(n=>e.renameing=!1,["enter"])},null,40,Se)),[[z,e.alias,void 0,{trim:!0}],[_]]):(l(),p("span",Fe,[i("span",je,H(e.alias),1)]))]),i("div",Le,[e.hided?(l(),f(a,{key:0,class:"show-toggle-btn",onClick:n=>e.hided=!1},{default:d(()=>[s(C)]),_:2},1032,["onClick"])):w("",!0),e.locked?(l(),f(a,{key:1,class:"show-toggle-btn",onClick:n=>e.locked=!1},{default:d(()=>[s(k)]),_:2},1032,["onClick"])):w("",!0)])],42,Ee))],64))),128)),i("div",{class:"last-flex-item",onClick:c[4]||(c[4]=e=>o.selectCom(""))})]),i("div",Ue,[s(a,{title:"\u5220\u9664",class:v(["toolbar-icon standard",o.enableBtnClass]),style:m(o.enableBtnStyle),onClick:o.toDeleteCom},{default:d(()=>[s(S)]),_:1},8,["class","style","onClick"]),s(a,{title:"\u9501\u5B9A",class:v(["toolbar-icon standard",o.enableLockBtnClass]),style:m(o.enableBtnStyle),onClick:o.lockCom},{default:d(()=>[s(k)]),_:1},8,["class","style","onClick"]),s(a,{title:"\u9690\u85CF",class:v(["toolbar-icon standard",o.enableHideBtnClass]),style:m(o.enableBtnStyle),onClick:o.hideCom},{default:d(()=>[s(C)]),_:1},8,["class","style","onClick"])])])],2)}var Oe=A(Ce,[["render",ze],["__scopeId","data-v-01769368"]]);export{Oe as default};
