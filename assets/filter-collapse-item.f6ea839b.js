import{a as j}from"./AppRoot.9161bc33.js";import{I as V}from"./arrow-left.01caf5a2.js";import{I as q}from"./edit.7daf2506.js";import{I as H}from"./delete.97a5a659.js";import{I as O}from"./release.fe894ced.js";import{a6 as s,aa as d,ad as t,a4 as U,a_ as W,bd as M,a9 as f,aC as R,a5 as i,ae as Z,aX as n,a$ as o,ah as E,a7 as p,ag as m,b0 as k,ab as K}from"./vendor.1c7e0fbb.js";import{s as X}from"./config.3c16c364.js";const G={},J={t:"1632575311693",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3931",width:"64",height:"64"},P=t("path",{d:"M362.666667 192m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z","p-id":"3932"},null,-1),Q=t("path",{d:"M661.333333 192m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z","p-id":"3933"},null,-1),Y=t("path",{d:"M362.666667 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z","p-id":"3934"},null,-1),x=t("path",{d:"M661.333333 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z","p-id":"3935"},null,-1),ee=t("path",{d:"M362.666667 832m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z","p-id":"3936"},null,-1),te=t("path",{d:"M661.333333 832m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z","p-id":"3937"},null,-1),ae=[P,Q,Y,x,ee,te];function ne(e,l){return s(),d("svg",J,ae)}var oe=j(G,[["render",ne]]);const se={},ie={t:"1639131683779",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3989",width:"64",height:"64"},le=t("path",{d:"M832.990625 494.253125","p-id":"3990"},null,-1),de=t("path",{d:"M567.659375 510.678125L894.134375 185.6375c15.440625-15.384375 15.525-40.275 0.16875-55.74375-15.384375-15.496875-40.246875-15.525-55.6875-0.16875L512.028125 454.821875 188.309375 129.865625C173.009375 114.48125 148.0625 114.425 132.65 129.78125 117.2375 145.165625 117.209375 170.1125 132.565625 185.553125l323.634375 324.871875L129.865625 835.26875c-15.440625 15.384375-15.525 40.275-0.16875 55.74375 7.678125 7.734375 17.803125 11.615625 27.928125 11.615625 10.040625 0 20.08125-3.825 27.759375-11.475l326.390625-324.928125 326.671875 327.909375C846.153125 901.896875 856.25 905.75 866.346875 905.75c10.06875 0 20.1375-3.853125 27.815625-11.503125 15.384375-15.384375 15.440625-40.275 0.084375-55.715625L567.659375 510.678125 567.659375 510.678125zM567.659375 510.678125","p-id":"3991"},null,-1),re=[le,de];function ce(e,l){return s(),d("svg",ie,re)}var ue=j(se,[["render",ce]]);const ge=Symbol("filterManagerInjectionKey"),fe=Symbol("filterConfigInjectionKey"),pe=U({name:"FilterCollapseItem",components:{IconArrowLeft:V,IconEdit:q,IconRelease:O,IconDelete:H,IconDrag:oe,IconClose:ue},props:{dataFilter:{type:Object,required:!0},draggable:{type:Boolean,default:!0},hasFeedback:{type:Boolean,default:!0},removable:Boolean,publish:Boolean,isNew:Boolean,index:Number,showTime:Boolean},setup(e){const l=W(),{usedFilters:A,editFilterName:L,removeFilter:D,saveFilter:T}=M(ge),{enabledFilters:_,onUsedChange:u,updateIndicator:y}=M(fe,{}),{dataStatus:w}=M(X,{}),b=f(null),h=f(e.isNew),r=f(e.isNew),F=f(e.isNew),c=f(e.isNew),C=f(!1),g=f(e.dataFilter.origin),I=R(()=>{if(!e.hasFeedback)return"";const a=w==null?void 0:w.value.filter;return a&&a.includes(`/${e.dataFilter.id}]`)?a:""}),B=R(()=>{var a;return(a=_==null?void 0:_.value[e.dataFilter.id])!=null?a:!1});return{panelRef:b,code:g,loading:C,editing:h,collapse:r,isOpened:F,isEdited:c,isEnabled:B,usedFilters:A,errMsg:I,switchEnabled:a=>{u(e.dataFilter.id,a)},editName:a=>{h.value=!1,L(a,e.dataFilter)},removeFilter:D,changeCode:a=>{a.value!=e.dataFilter.origin&&(c.value=!0)},updateCode:a=>{g.value=a.value},cancelEdit:()=>{e.isNew?D(0):(g.value=e.dataFilter.origin,c.value?c.value=!1:r.value=!1)},saveData:async()=>{if(!c.value){r.value=!1;return}try{C.value=!0,e.dataFilter.origin=g.value,e.dataFilter.code=`
          if (!data) {  return data; }
          return filter(...arguments);
          function filter(data) {
            ${g.value}
            return data;
          }
        `,await T(e.dataFilter),c.value=!1,l.success("\u6570\u636E\u8FC7\u6EE4\u5668\u5DF2\u4FDD\u5B58")}catch(a){l.error(a.message)}finally{C.value=!1}},toggleEditor:()=>{F.value=!0,r.value=!r.value},dragStart:a=>{const z=a.target.parentNode.parentNode.parentNode.parentElement,N=document.querySelector(".filter-dragging-wp");N.innerHTML="",N.appendChild(z.cloneNode(!0)),a.dataTransfer.setDragImage(N,30,15)},dragEnd:()=>{const a=document.querySelector(".filter-dragging-wp");a.innerHTML="",y(!1,e.index,b.value)},dragEnter:()=>{y(!0,e.index,b.value)}}}}),me={class:"panel-header"},he={class:"panel-title"},ve={class:"filter-title"},_e={class:"filter-name"},we=["title"],be={class:"action-wp --edit"},Fe={class:"filter-count"},Ce=t("div",{class:"filter-dot"},null,-1),Ee={key:1,class:"filter-dot"},ke={key:2,class:"filter-dot --none"},ye={class:"panel-content-wp"},De={class:"cp-wrap"},Ie=t("p",{title:"function filter(data) {",class:"fake-code --start"},[t("span",{class:"--keyword"},"function"),k(" filter(data) { ")],-1),Be=t("p",{class:"fake-code --end"},"}",-1),$e={class:"filter-actions"},Ne={key:0,class:"unsaved"},Me={key:1,class:"saved"};function je(e,l,A,L,D,T){const _=i("IconDrag"),u=i("n-icon"),y=i("n-checkbox"),w=i("new-input"),b=i("IconEdit"),h=i("g-tooltip-popover"),r=i("n-tooltip"),F=i("n-config-provider"),c=i("IconRelease"),C=i("IconDelete"),g=i("IconClose"),I=i("IconArrowLeft"),B=i("g-monaco-editor"),$=i("n-button"),S=i("n-collapse-transition");return s(),d("div",{ref:"panelRef",class:K(["collapse-panel-wp filter-item ds-panel-filter",{"--create":e.isNew,"--spread":e.collapse||e.isNew,"--draggable":e.draggable,"--unused":e.hasFeedback&&!e.isEnabled,"--error":!!e.errMsg}]),onDragenter:l[3]||(l[3]=(...v)=>e.dragEnter&&e.dragEnter(...v))},[t("div",me,[t("div",he,[t("div",ve,[e.draggable?(s(),d(Z,{key:0},[n(u,{draggable:"true",class:"drag-btn",onDragstart:e.dragStart,onDragend:e.dragEnd},{default:o(()=>[n(_)]),_:1},8,["onDragstart","onDragend"]),n(y,{checked:e.isEnabled,class:"enable-checkbox","onUpdate:checked":e.switchEnabled},null,8,["checked","onUpdate:checked"])],64)):E("",!0),t("div",_e,[e.editing?(s(),p(w,{key:0,"model-value":e.dataFilter.name,autofocus:!0,class:"filter-name-input",onChange:e.editName},null,8,["model-value","onChange"])):(s(),d("div",{key:1,class:"filter-name-text",title:e.dataFilter.name},m(e.dataFilter.name),9,we))]),t("div",be,[n(h,{content:"\u91CD\u547D\u540D"},{default:o(()=>[n(u,{class:"edit-btn",onClick:l[0]||(l[0]=v=>e.editing=!0)},{default:o(()=>[n(b)]),_:1})]),_:1})]),t("div",Fe,[!e.isNew&&e.usedFilters[e.dataFilter.id]?(s(),p(F,{key:0,"theme-overrides":{Tooltip:{arrowHeight:"8px",borderRadius:"2px",padding:"6px",color:"var(--datav-font-color)",textColor:"#000102"}},abstract:""},{default:o(()=>[n(r,{placement:"top",delay:500,style:{maxWidth:"240px"}},{trigger:o(()=>[t("span",null,m(e.usedFilters[e.dataFilter.id].names.length)+" \u4E2A\u7EC4\u4EF6\u6B63\u5728\u8C03\u7528",1)]),default:o(()=>[k(" "+m(e.usedFilters[e.dataFilter.id].names.join(", ")),1)]),_:1})]),_:1},8,["theme-overrides"])):E("",!0)]),t("div",{class:K(["action-wp",{"--flex":e.publish}])},[e.publish?(s(),p(h,{key:0,content:"\u521B\u5EFA\u4EE3\u7801\u7247\u6BB5"},{default:o(()=>[n(u,{class:"save-btn"},{default:o(()=>[n(c)]),_:1})]),_:1})):E("",!0),n(h,{content:"\u5220\u9664"},{default:o(()=>[n(u,{class:"del-btn",onClick:l[1]||(l[1]=v=>e.removeFilter(e.dataFilter.id))},{default:o(()=>[e.removable?(s(),p(C,{key:0})):(s(),p(g,{key:1}))]),_:1})]),_:1})],2),e.hasFeedback?(s(),d(Z,{key:1},[e.errMsg?(s(),p(F,{key:0,"theme-overrides":{Tooltip:{color:"var(--datav-error-color)"}},abstract:""},{default:o(()=>[n(r,{placement:"left",style:{maxWidth:"300px"}},{trigger:o(()=>[Ce]),default:o(()=>[k(" "+m(e.errMsg),1)]),_:1})]),_:1},8,["theme-overrides"])):(s(),d("div",Ee))],64)):(s(),d("div",ke))])]),t("div",{class:"toggle-btn",onClick:l[2]||(l[2]=(...v)=>e.toggleEditor&&e.toggleEditor(...v))},[n(u,{class:"toggle-icon"},{default:o(()=>[n(I)]),_:1})])]),e.isOpened?(s(),p(S,{key:0,show:e.collapse},{default:o(()=>[t("div",ye,[t("div",De,[Ie,n(B,{language:"javascript",code:e.code,height:180,"editor-class":"filter-editor",onChange:e.changeCode,onBlur:e.updateCode},null,8,["code","onChange","onBlur"]),Be,t("div",$e,[e.isEdited?(s(),d("div",Ne,"\u672A\u4FDD\u5B58")):e.showTime?(s(),d("div",Me,"\u4E0A\u6B21\u4FDD\u5B58: "+m(e.dataFilter.updateAt),1)):E("",!0),n($,{size:"tiny",focusable:!1,class:"bolder-btn",onClick:e.cancelEdit},{default:o(()=>[k(m(e.dataFilter.id===0?"\u53D6\u6D88":e.isEdited?"\u64A4\u9500":"\u53D6\u6D88"),1)]),_:1},8,["onClick"]),n($,{type:"primary",size:"tiny",loading:e.loading,focusable:!1,class:"bolder-btn",onClick:e.saveData},{default:o(()=>[k(m(e.dataFilter.id===0||e.isEdited?"\u4FDD\u5B58":"\u5B8C\u6210"),1)]),_:1},8,["loading","onClick"])])])])]),_:1},8,["show"])):E("",!0)],34)}var Xe=j(pe,[["render",je]]);export{Xe as F,fe as a,ge as f};
