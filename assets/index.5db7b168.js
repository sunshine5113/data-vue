import{a4 as H,a9 as V,bj as w,aC as W,b8 as N,aj as P,aa as m,ad as c,ac as f,ah as B,ae as $,af as I,a6 as d,a7 as L,bk as X}from"./vendor.1c7e0fbb.js";import{a as j,E as A,x as M,w as Y,H as q,g as G,Z as h}from"./AppRoot.9161bc33.js";import{o as R,s as r}from"./dom.6d6c7f4f.js";import{g as T}from"./screen.00a0fa57.js";const Z="//files.pengxiaotian.com",D=H({name:"Preview",props:{screenId:{type:[String,Number],required:!0}},setup(s){const b=A(),u=M(),p=Y(),v=q(),g=V(!0),{pageConfig:o}=w(u),{coms:k}=w(p),_=W(()=>{const e=o.value.styleFilterParams;let t="";return e.enable&&(t=`hue-rotate(${e.hue}deg) contrast(${e.contrast}%) opacity(${e.opacity}%) saturate(${e.saturate}%) brightness(${e.brightness}%)`),t}),S=(e,t)=>{const n=document.documentElement.clientWidth,l=document.documentElement.clientHeight,a=n/e,i=l/t;r(document.body,{transform:`scale(${a}, ${i})`,transformOrigin:"left top",backgroundSize:"100% 100%"})},E=e=>{const t=document.documentElement.clientWidth/e;r(document.body,{transform:`scale(${t})`,transformOrigin:"left top",backgroundSize:"100%"})},x=(e,t)=>{const n=document.documentElement.clientWidth,a=document.documentElement.clientHeight/t,i=(n-e*a)/2;r(document.body,{transform:`scale(${a})`,transformOrigin:"left top",backgroundSize:`${e/n*a*100}% 100%`,backgroundPosition:`${i.toFixed(3)}px top`,marginLeft:`${i.toFixed(3)}px`})},z=(e,t)=>{const n=document.documentElement.clientWidth,a=document.documentElement.clientHeight/t,i=(n-e*a)/2;r(document.body,{transform:`scale(${a})`,transformOrigin:"left top",backgroundSize:`${e/n*a*100}% 100%`,backgroundPosition:`${i.toFixed(3)}px top`}),document.documentElement.style.overflowX="scroll"},F=()=>{r(document.body,{overflow:"hidden",position:"relative"})},y=e=>{switch(e.zoomMode){case h.auto:S(e.width,e.height);break;case h.width:E(e.width);break;case h.height:x(e.width,e.height);break;case h.full:z(e.width,e.height);break;default:F();break}},C=e=>{document.title=u.screen.name,document.querySelector('meta[name="viewport"]').setAttribute("content",`width=${e.width}`),r(document.documentElement,{overflowX:"hidden",overflowY:"visible"}),r(document.body,{width:`${e.width}px`,height:`${e.height}px`,backgroundImage:`url(${o.value.bgimage})`,backgroundColor:o.value.bgcolor}),y(e)},O=N();return P(async()=>{var e;try{const t=await T(+s.screenId);if(t){u.setEditorOption({screen:t.screen,config:t.config}),C(t.config),p.setComs(t.coms);const{componentsView:n,publishersView:l,subscribersView:a}=t.variables;v.$patch({componentsView:n,publishersView:l,subscribersView:a}),b.$patch({dataFilters:(e=t.dataFilters)!=null?e:[]}),setTimeout(()=>{g.value=!1},500),R(window,"resize",()=>{y(o.value)})}else throw new Error("404")}catch{O.replace({name:"NotFound",params:{catchAll:"error"}})}}),{cdn:Z,LOGO:G.logo,loading:g,pageConfig:o,coms:k,styleFilter:_}}}),J={target:"_blank",href:"javascript:;"},K=["src"],Q={key:0,href:"/",target:"_blank",class:"datav-watermark"},U=["src"],ee={class:"scene"};function te(s,b,u,p,v,g){return d(),m($,null,[c("div",{id:"datav-loading",style:f({background:"rgb(15, 42, 66)",display:s.loading?"block":"none"})},[c("a",J,[c("img",{class:"datav-logo",src:`${s.cdn}/datav/datav-loading.gif`},null,8,K)])],4),c("div",{class:"datav-layout",style:f({visibility:s.loading?"hidden":"visible"})},[s.pageConfig.useWatermark?(d(),m("a",Q,[c("img",{src:s.LOGO},null,8,U)])):B("",!0),c("div",ee,[(d(!0),m($,null,I(s.coms,o=>(d(),m("div",{key:o.id,style:f({left:o.attr.x+"px",top:o.attr.y+"px",width:o.attr.w+"px",height:o.attr.h+"px",opacity:o.attr.opacity,transform:`rotate(${o.attr.deg}deg) ${o.attr.filpH?"scaleX(-1)":""} ${o.attr.filpV?"scaleY(-1)":""}`,filter:s.styleFilter}),class:"-datav-com absolute"},[(d(),L(X(o.name),{com:o},null,8,["com"]))],4))),128))])],4)],64)}var re=j(D,[["render",te]]);export{re as default};
