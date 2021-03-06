import{a6 as i,aa as r,ad as e,a4 as R,aC as f,ae as N,ab as S,ag as y,ba as M,bb as K,af as X,ah as z,a9 as V,bd as P,bg as J,a5 as n,a7 as T,a$ as c,aX as a,b0 as B,aK as st,aL as at}from"./vendor.1c7e0fbb.js";import{a as I,a3 as m,B as O,_ as L,F as Q,a4 as W,a5 as Y,a6 as q,a7 as ot,$ as Z,a8 as H}from"./AppRoot.9161bc33.js";import{I as nt}from"./arrow-right.8edff304.js";import{I as it}from"./search.2fe14001.js";import{c as x,b as tt,s as ut,a as lt}from"./config.3c16c364.js";const ct={},dt={t:"1639131563580",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4137",width:"64",height:"64"},rt=e("path",{d:"M250.52 209.31999969A398.44000031 398.44000031 0 0 1 512 111.99999969c220.92 0 400.00000031 179.08000031 400.00000031 400.00000031 0 85.44-26.80000031 164.64-72.40000031 229.60000031L711.99999969 512h120A319.99999969 319.99999969 0 0 0 290.40000031 281.12l-39.88000031-71.80000031z m522.96 605.36000062A398.44000031 398.44000031 0 0 1 512 912.00000031C291.08 912.00000031 111.99999969 732.92 111.99999969 512c0-85.44 26.80000031-164.64 72.40000031-229.60000031L312.00000031 512H192.00000031a319.99999969 319.99999969 0 0 0 541.59999938 230.88l39.88000031 71.80000031z","p-id":"4138"},null,-1),pt=[rt];function _t(t,o){return i(),r("svg",dt,pt)}var et=I(ct,[["render",_t]]);const mt=R({name:"DisplayApiStatus",props:{status:{type:String,default:m.incomplete},loadingText:{type:String,default:"\u5339\u914D\u4E2D"},successText:{type:String,default:"\u5339\u914D\u6210\u529F"},failedText:{type:String,default:"\u672A\u627E\u5230\u5B57\u6BB5"},completedText:{type:String,default:"\u914D\u7F6E\u5B8C\u6210"},incompleteText:{type:String,default:"\u914D\u7F6E\u672A\u5B8C\u6210"},optional:{type:Boolean,default:!1}},setup(t){const o=f(()=>t.status===m.loading?t.loadingText:t.status===m.success?t.successText:t.status===m.completed?t.completedText:t.optional?"\u53EF\u9009":t.status===m.failed?t.failedText:t.status===m.incomplete?t.incompleteText:t.status);return{apiStatus:m,statusText:o}}}),G=t=>(M("data-v-6993cc60"),t=t(),K(),t),ft=G(()=>e("i",{class:"status-icon validating"},null,-1)),ht=G(()=>e("i",{class:"status-icon validating"},null,-1)),vt=G(()=>e("i",{class:"status-icon validating"},null,-1)),gt={key:2,class:"status-icon --success"},bt={class:"status-text"};function yt(t,o,g,D,b,E){return i(),r("div",null,[t.status===t.apiStatus.loading?(i(),r(N,{key:0},[ft,ht,vt],64)):t.status===t.apiStatus.success||t.status===t.apiStatus.completed?(i(),r("i",{key:1,class:S(["status-icon",`--${t.status}`])},null,2)):t.optional?(i(),r("i",gt)):(i(),r("i",{key:3,class:S(["status-icon",`--${t.status}`])},null,2)),e("span",bt,y(t.statusText),1)])}var Dt=I(mt,[["render",yt],["__scopeId","data-v-6993cc60"]]);const Et=R({name:"FieldGrid",props:{fields:{type:Object}}}),j=t=>(M("data-v-6cbbbc1e"),t=t(),K(),t),wt={key:0,class:"field-wp"},Ct=j(()=>e("div",{class:"field-info"},"\u6570\u636E\u76F8\u5E94\u7ED3\u679C\u5E94\u4E3A\u5217\u8868\uFF0C\u5217\u8868\u5143\u7D20\u5305\u542B\u5982\u4E0B\u5B57\u6BB5",-1)),$t={class:"field-grid"},St=j(()=>e("div",{class:"field-item field-title"},"\u5B57\u6BB5",-1)),Bt=j(()=>e("div",{class:"field-item field-title"},"\u6620\u5C04",-1)),kt=j(()=>e("div",{class:"field-item field-title"},"\u8BF4\u660E",-1)),At={class:"field-item"},Ft={class:"field-item"},It={class:"field-item"};function Tt(t,o,g,D,b,E){return t.fields?(i(),r("div",wt,[Ct,e("div",$t,[St,Bt,kt,(i(!0),r(N,null,X(t.fields,(l,u)=>(i(),r(N,{key:u},[e("div",At,y(u),1),e("div",Ft,y(l.map||"-"),1),e("div",It,y(l.description||"-"),1)],64))),128))])])):z("",!0)}var Nt=I(Et,[["render",Tt],["__scopeId","data-v-6cbbbc1e"]]);const Pt=R({name:"SourceDrawer",components:{IconSearch:it,IconRefresh:et,FieldGrid:Nt,FilterPanel:O(()=>L(()=>import("./filter-panel.829b8f1e.js"),["assets/filter-panel.829b8f1e.js","assets/filter-panel.210b03d9.css","assets/AppRoot.9161bc33.js","assets/AppRoot.6c3f2524.css","assets/vendor.1c7e0fbb.js","assets/plus.af9fc8ff.js","assets/filter-collapse-item.f6ea839b.js","assets/arrow-left.01caf5a2.js","assets/edit.7daf2506.js","assets/delete.97a5a659.js","assets/release.fe894ced.js","assets/config.3c16c364.js"])),DsStaticEditor:O(()=>L(()=>import("./ds-static-editor.5f99ab7f.js"),["assets/ds-static-editor.5f99ab7f.js","assets/config.3c16c364.js","assets/AppRoot.9161bc33.js","assets/AppRoot.6c3f2524.css","assets/vendor.1c7e0fbb.js"])),DsApiEditor:O(()=>L(()=>import("./ds-api-editor.4819b24a.js"),["assets/ds-api-editor.4819b24a.js","assets/ds-api-editor.3a546c51.css","assets/AppRoot.9161bc33.js","assets/AppRoot.6c3f2524.css","assets/vendor.1c7e0fbb.js","assets/config.3c16c364.js"]))},setup(){const t=Q(),o=W(),g=V(!1),D=V(!1),b=q,E=Object.entries(Y()).map(([s,_])=>({value:s,label:_})),l=()=>{g.value=!0},u=P(x),{apiName:d,apiConfig:h,apiDataConfig:p}=P(tt),v=f(()=>{var _;const s=t.dataStatusMap[u.value.id];return s?(_=s[d])!=null?_:{}:{}}),w=f(()=>{const s=t.originMap[u.value.id];return s?s[d]:""}),A=s=>{switch(s){case q.api:ot(p.value.config);break}},F=f(()=>{const s=o.dataMap[u.value.id];return s?s[d]:""}),C=async()=>{await Z(u.value.id,d,h.value,p.value)};return J(ut,{dataStatus:v,refreshData:C}),{visible:g,visiblePreview:D,apiType:b,datasources:E,apiConfig:h,apiDataConfig:p,dataStatus:v,dataOrign:w,resData:F,open:l,changeSource:A,refreshData:C}}}),Rt=e("p",{class:"source-drawer-title"},"\u8BBE\u7F6E\u6570\u636E\u6E90",-1),jt={class:"datasource-selector"},Ut=e("label",{class:"datasource-selector-title"},"\u6570\u636E\u6E90\u7C7B\u578B",-1),Ot={class:"datasource-select"},Lt={class:"datav-new-select-wp"},Vt={class:"ds-response-btn"},Mt=B(" \u9884\u89C8\u6570\u636E\u6E90\u8FD4\u56DE\u7ED3\u679C "),Kt={class:"ds-preview-content"},zt=e("span",{class:"use-filter-text"},"\u6570\u636E\u8FC7\u6EE4\u5668",-1),Gt=e("span",{class:"tutorial-popup"},"\u6559\u7A0B",-1),qt=e("span",null,"\u6570\u636E\u54CD\u5E94\u7ED3\u679C",-1),Ht={class:"data-response"};function Xt(t,o,g,D,b,E){const l=n("n-select"),u=n("ds-static-editor"),d=n("ds-api-editor"),h=n("IconSearch"),p=n("n-icon"),v=n("g-monaco-editor"),w=n("n-popover"),A=n("n-checkbox"),F=n("filter-panel"),C=n("field-grid"),s=n("IconRefresh"),_=n("n-drawer-content"),U=n("n-drawer");return i(),T(U,{show:t.visible,"onUpdate:show":o[3]||(o[3]=$=>t.visible=$),width:"500px","trap-focus":!1,class:"source-drawer",to:"#edit-main-wp"},{default:c(()=>[a(_,{closable:""},{header:c(()=>[Rt]),default:c(()=>[e("div",{class:S(["step-title",{"--error":!!t.dataStatus.api}])}," \u6570\u636E\u6E90 ",2),e("div",jt,[Ut,e("div",Ot,[e("div",Lt,[a(l,{value:t.apiDataConfig.type,"onUpdate:value":[o[0]||(o[0]=$=>t.apiDataConfig.type=$),t.changeSource],options:t.datasources,filterable:"",class:"datav-new-select"},null,8,["value","options","onUpdate:value"])])])]),t.apiDataConfig.type===t.apiType.static?(i(),T(u,{key:0})):t.apiDataConfig.type===t.apiType.api?(i(),T(d,{key:1})):z("",!0),a(w,{show:t.visiblePreview,"onUpdate:show":o[1]||(o[1]=$=>t.visiblePreview=$),placement:"left",width:400,class:"editor-popover",style:{"--n-color":"#0000"}},{trigger:c(()=>[e("div",Vt,[a(p,{class:"refresh-btn"},{default:c(()=>[a(h)]),_:1}),Mt])]),default:c(()=>[e("div",Kt,[a(v,{language:"json","read-only":!0,"auto-format":!0,height:180,code:t.dataOrign},null,8,["code"])])]),_:1},8,["show"]),e("div",{class:S(["step-title",{"--error":!!t.dataStatus.filter}])},[a(A,{checked:t.apiDataConfig.config.useFilter,"onUpdate:checked":o[2]||(o[2]=$=>t.apiDataConfig.config.useFilter=$),class:"use-filter-btn"},null,8,["checked"]),zt,Gt],2),a(F),a(C,{fields:t.apiConfig.fields},null,8,["fields"]),e("div",{class:S(["step-title",{"--error":!!t.dataStatus.api||!!t.dataStatus.filter}])},[qt,a(p,{class:"refresh-btn",onClick:t.refreshData},{default:c(()=>[a(s)]),_:1},8,["onClick"])],2),e("div",Ht,[a(v,{language:"json","read-only":!0,"auto-format":!0,code:t.resData},null,8,["code"])])]),_:1})]),_:1},8,["show"])}var Jt=I(Pt,[["render",Xt]]);const Qt=R({name:"SourcePanel",components:{DisplayApiStatus:Dt,SourceDrawer:Jt,IconArrowRight:nt,IconRefresh:et},props:{apiName:{type:String,required:!0},activeName:String,collapse:Boolean},setup(t){const o=Q(),g=W(),D=f(()=>t.apiName===t.activeName),b=V(null),E=Y(),l=P(x),u=f(()=>l.value.apis[t.apiName]),d=f(()=>l.value.apiData[t.apiName]);J(tt,{apiName:t.apiName,apiConfig:u,apiDataConfig:d});const h=f(()=>{const s=g.dataMap[l.value.id];return s?s[t.apiName]:""}),p=f(()=>{const s=o.fieldStatusMap[l.value.id];return s?s[t.apiName]:{}}),v=f(()=>{const s=Object.values(p.value);return s.includes(H.loading)?m.loading:s.includes(H.failed)?m.incomplete:m.completed}),w=P(lt);return{visible:D,sourceDrawerRef:b,datasources:E,com:l,apiConfig:u,apiDataConfig:d,fieldsStatus:p,totalStatus:v,datav_data:h,toggle:()=>{t.collapse&&w(t.apiName)},openSourceDrawer:()=>{var s;(s=b.value)==null||s.open()},refreshData:()=>{Z(l.value.id,t.apiName,u.value,d.value)}}}}),k=t=>(M("data-v-7e792657"),t=t(),K(),t),Wt={class:"api-editor-title"},Yt={class:"api-status success"},Zt={class:"attr-source-wp"},xt={class:"data-attr-table-container"},te={class:"data-attr-table"},ee=k(()=>e("thead",{class:"table-head"},[e("tr",{class:"table-head-row"},[e("th",{class:"th-item column-item attr-name"}," \u5B57\u6BB5 "),e("th",{class:"th-item column-item attr-value"}," \u6620\u5C04 "),e("th",{class:"th-item column-item attr-status"}," \u72B6\u6001 ")])],-1)),se={class:"table-body"},ae={class:"column-item attr-name"},oe={class:"ellipsis2"},ne={class:"column-item attr-value"},ie={class:"column-item attr-status"},ue={key:1,class:"table-body-row"},le=k(()=>e("td",{class:"column-item attr-name"},[e("span",null,"\u4EFB\u610F")],-1)),ce=k(()=>e("td",{class:"column-item attr-value"},null,-1)),de={class:"column-item attr-status"},re={class:"data-source"},pe=k(()=>e("div",{class:"data-result-title"}," \u6570\u636E\u54CD\u5E94\u7ED3\u679C ",-1)),_e={class:"auto-update-config"},me=B(" \u81EA\u52A8\u66F4\u65B0\u9009\u9879 "),fe=B(" \u79D2\u4E00\u6B21 "),he={class:"data-flow-wp"},ve={class:"ds-line"},ge={class:"ds-title"},be={class:"ds-type-text"},ye=B(" \u914D\u7F6E\u6570\u636E\u6E90 "),De={class:"ds-line mt5"},Ee=k(()=>e("span",null,"\u6570\u636E\u54CD\u5E94\u7ED3\u679C ( \u53EA\u8BFB ) ",-1)),we=B(" \u5237\u65B0\u6570\u636E "),Ce={class:"ds-dots"},$e=k(()=>e("span",{class:"ds-dot"},null,-1)),Se=k(()=>e("span",{class:"ds-dot"},null,-1)),Be={class:"data-response"};function ke(t,o,g,D,b,E){const l=n("IconArrowRight"),u=n("n-icon"),d=n("display-api-status"),h=n("n-tooltip"),p=n("new-input"),v=n("n-checkbox"),w=n("n-button"),A=n("IconRefresh"),F=n("g-monaco-editor"),C=n("source-drawer");return i(),r("div",{class:S(["api-editor",{"--disable-fold":!t.collapse,"--fold":t.collapse&&t.visible}])},[e("div",Wt,[e("div",{class:"api-desc ellipsis2",onClick:o[0]||(o[0]=(...s)=>t.toggle&&t.toggle(...s))},[t.collapse?(i(),T(u,{key:0,class:"api-fold-icon"},{default:c(()=>[a(l)]),_:1})):z("",!0),B(" "+y(t.apiConfig.description||"\u6570\u636E\u63A5\u53E3"),1)]),e("div",Yt,[a(d,{status:t.totalStatus,"success-text":"\u914D\u7F6E\u5B8C\u6210"},null,8,["status"])])]),st(e("div",Zt,[e("div",xt,[e("table",te,[ee,e("tbody",se,[Object.keys(t.apiConfig.fields).length>0?(i(!0),r(N,{key:0},X(t.apiConfig.fields,(s,_)=>(i(),r("tr",{key:_,class:"table-body-row"},[e("td",ae,[a(h,{placement:"left"},{trigger:c(()=>[e("span",oe,y(_),1)]),default:c(()=>[B(" "+y(s.description),1)]),_:2},1024)]),e("td",ne,[a(p,{"model-value":s.map,placeholder:"\u53EF\u81EA\u5B9A\u4E49",class:"attr-input",onChange:U=>s.map=U},null,8,["model-value","onChange"])]),e("td",ie,[a(d,{status:t.fieldsStatus[_],optional:s.optional},null,8,["status","optional"])])]))),128)):(i(),r("tr",ue,[le,ce,e("td",de,[a(d,{status:"completed"})])]))])])]),e("div",re,[pe,e("div",_e,[a(v,{checked:t.apiConfig.useAutoUpdate,"onUpdate:checked":o[1]||(o[1]=s=>t.apiConfig.useAutoUpdate=s),class:"auto-update-checkbox"},{default:c(()=>[me]),_:1},8,["checked"]),a(p,{"model-value":t.apiConfig.autoUpdate,type:"number",disabled:!t.apiConfig.useAutoUpdate,class:"update-interval-input",onChange:o[2]||(o[2]=s=>t.apiConfig.autoUpdate=s)},null,8,["model-value","disabled"]),fe]),e("div",he,[e("div",ve,[e("div",ge,[e("span",be,y(t.datasources[t.apiDataConfig.type]),1)]),a(w,{size:"tiny",class:"ds-action-btn",onClick:t.openSourceDrawer},{default:c(()=>[ye]),_:1},8,["onClick"])]),e("div",De,[Ee,a(h,{placement:"left"},{trigger:c(()=>[a(u,{class:"refresh-btn",onClick:t.refreshData},{default:c(()=>[a(A)]),_:1},8,["onClick"])]),default:c(()=>[we]),_:1})]),e("div",Ce,[e("span",{class:S(["ds-dot",[t.totalStatus==="completed"?"active":"error"]])},null,2),$e,Se])]),e("div",Be,[a(F,{language:"json","read-only":!0,"auto-format":!0,code:t.datav_data,height:250,"full-screen-title":"\u6570\u636E\u54CD\u5E94\u7ED3\u679C"},null,8,["code"])])])],512),[[at,t.visible]]),a(C,{ref:"sourceDrawerRef"},null,512)],2)}var Pe=I(Qt,[["render",ke],["__scopeId","data-v-7e792657"]]);export{Pe as default};
