import{d as e,r as a,ae as l,e as t,M as i,k as n,l as d,m as r,p as s,F as o,aq as c,v as u,q as g,ag as p,aY as v,t as f}from"./index.62424731.js";var m=e({name:"FilterCollapsePanel",props:{dataFilter:{type:Object,required:!0},draggable:{type:Boolean,default:!0},hasFeedback:{type:Boolean,default:!0},removable:Boolean,publish:Boolean,isNew:Boolean,index:Number,showTime:Boolean},setup(e){const n=a(null),d=a(e.isNew),r=a(e.isNew),s=a(e.isNew),o=a(e.isNew),c=a(!1),u=a(e.dataFilter.origin),g=l("dataStatus",null),p=t((()=>{let a="";const l=null==g?void 0:g.value.errFilter;return l&&l[e.dataFilter.id]&&(a=l[e.dataFilter.id]),a})),v=l("usedFilters"),f=l("enabledFilters",null),m=l("onUsedChange",null),F=l("editFilterName"),b=l("removeFilter"),h=l("saveFilter"),k=l("updateIndicator",null),y=t((()=>{var a;return null!=(a=null==f?void 0:f.value[e.dataFilter.id])&&a}));return{panelRef:n,code:u,loading:c,editing:d,collapse:r,isOpened:s,isEdited:o,isEnabled:y,usedFilters:v,errMsg:p,switchEnabled:a=>{m(e.dataFilter.id,a)},editName:a=>{d.value=!1,F(a,e.dataFilter)},removeFilter:b,changeCode:a=>{a.value!=e.dataFilter.origin&&(o.value=!0)},updateCode:e=>{u.value=e.value},cancelEdit:()=>{e.isNew?b(0):(u.value=e.dataFilter.origin,o.value?o.value=!1:r.value=!1)},saveData:async()=>{if(o.value)try{c.value=!0,e.dataFilter.origin=u.value,e.dataFilter.code=`\n          if (!data) {  return data; }\n          return filter(...arguments);\n          function filter(data) {\n            ${u.value}\n            return data;\n          }\n        `,await h(e.dataFilter),o.value=!1,i.success("数据过滤器已保存")}catch(a){i.error(i.format(a))}finally{c.value=!1}else r.value=!1},toggleEditor:()=>{s.value=!0,r.value=!r.value},dragStart:e=>{const a=e.target.parentNode.parentNode.parentNode.parentElement,l=document.querySelector(".filter-dragging-wp");l.innerHTML="",l.appendChild(a.cloneNode(!0)),e.dataTransfer.setDragImage(l,30,15)},dragEnd:()=>{document.querySelector(".filter-dragging-wp").innerHTML="",k(!1,e.index,n.value)},dragEnter:()=>{k(!0,e.index,n.value)}}}});const F={class:"panel-header"},b={class:"panel-title"},h={class:"filter-title"},k={class:"filter-name"},y={class:"action-wp --edit"},w={class:"filter-count"},E=s("i",{class:"v-icon-release save-btn"},null,-1),C=s("div",{class:"filter-dot"},null,-1),N={key:1,class:"filter-dot"},x={key:2,class:"filter-dot --none"},_=s("i",{class:"el-icon-arrow-right toggle-icon"},null,-1),B={class:"panel-content-wp"},M={class:"cp-wrap"},D=s("p",{title:"function filter(data) {",class:"fake-code --start"},[s("span",{class:"--keyword"},"function"),f(" filter(data) { ")],-1),S=s("p",{class:"fake-code --end"},"}",-1),q={class:"filter-actions"},T={key:0,class:"unsaved"},j={key:1,class:"saved"};m.render=function(e,a,l,t,i,m){const O=n("el-checkbox"),z=n("g-input"),H=n("g-tooltip-popover"),I=n("el-tooltip"),L=n("g-monaco-editor"),R=n("el-button"),$=n("el-collapse-transition");return d(),r("div",{ref:"panelRef",class:["collapse-panel-wp filter-item ds-panel-filter",{"--create":e.isNew,"--spread":e.collapse||e.isNew,"--draggable":e.draggable,"--unused":e.hasFeedback&&!e.isEnabled,"--error":!!e.errMsg}],onDragenter:a[6]||(a[6]=(...a)=>e.dragEnter&&e.dragEnter(...a))},[s("div",F,[s("div",b,[s("div",h,[e.draggable?(d(),r(o,{key:0},[s("i",{class:"v-icon-drag drag-btn",draggable:"true",onDragstart:a[1]||(a[1]=(...a)=>e.dragStart&&e.dragStart(...a)),onDragend:a[2]||(a[2]=(...a)=>e.dragEnd&&e.dragEnd(...a))},null,32),s(O,{"model-value":e.isEnabled,class:"enable-checkbox",onChange:e.switchEnabled},null,8,["model-value","onChange"])],64)):c("",!0),s("div",k,[e.editing?(d(),r(z,{key:0,"model-value":e.dataFilter.name,autofocus:!0,class:"filter-name-input",onChange:e.editName},null,8,["model-value","onChange"])):(d(),r("div",{key:1,class:"filter-name-text",title:e.dataFilter.name},u(e.dataFilter.name),9,["title"]))]),s("div",y,[s(H,{content:"重命名"},{default:g((()=>[s("i",{class:"v-icon-edit edit-btn",onClick:a[3]||(a[3]=a=>e.editing=!0)})])),_:1})]),s("div",w,[!e.isNew&&e.usedFilters[e.dataFilter.id]?(d(),r(I,{key:0,content:e.usedFilters[e.dataFilter.id].names.join(", "),effect:"blue",enterable:!1,placement:"top","open-delay":500,"popper-class":"filter-dep-info"},{default:g((()=>[s("span",null,u(e.usedFilters[e.dataFilter.id].names.length)+" 个组件正在调用",1)])),_:1},8,["content"])):c("",!0)]),s("div",{class:["action-wp",{"--flex":e.publish}]},[e.publish?(d(),r(H,{key:0,content:"创建代码片段"},{default:g((()=>[E])),_:1})):c("",!0),s(H,{content:"删除"},{default:g((()=>[s("i",{class:`v-icon-${e.removable?"delete":"close"} del-btn`,onClick:a[4]||(a[4]=a=>e.removeFilter(e.dataFilter.id))},null,2)])),_:1})],2),e.hasFeedback?(d(),r(o,{key:1},[e.errMsg?(d(),r(I,{key:0,content:e.errMsg,effect:"blue",enterable:!1,placement:"left","popper-class":"is-error"},{default:g((()=>[C])),_:1},8,["content"])):(d(),r("div",N))],64)):(d(),r("div",x))])]),s("div",{class:"toggle-btn",onClick:a[5]||(a[5]=(...a)=>e.toggleEditor&&e.toggleEditor(...a))},[_])]),e.isOpened?(d(),r($,{key:0},{default:g((()=>[p(s("div",B,[s("div",M,[D,s(L,{language:"javascript",code:e.code,height:180,"editor-class":"filter-editor",onChange:e.changeCode,onBlur:e.updateCode},null,8,["code","onChange","onBlur"]),S,s("div",q,[e.isEdited?(d(),r("div",T,"未保存")):e.showTime?(d(),r("div",j,"上次保存: "+u(e.dataFilter.updateAt),1)):c("",!0),s(R,{size:"mini",class:"bolder-btn",onClick:e.cancelEdit},{default:g((()=>[f(u(0===e.dataFilter.id?"取消":e.isEdited?"撤销":"取消"),1)])),_:1},8,["onClick"]),s(R,{type:"primary",size:"mini",class:"bolder-btn",loading:e.loading,onClick:e.saveData},{default:g((()=>[f(u(0===e.dataFilter.id||e.isEdited?"保存":"完成"),1)])),_:1},8,["loading","onClick"])])])],512),[[v,e.collapse]])])),_:1})):c("",!0)],34)};export{m as _};
