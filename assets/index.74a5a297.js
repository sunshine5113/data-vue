import{d as t,e,h as a,L as o,H as n,aN as r,aQ as i,au as s,aU as c,o as d,c as l,a as m,b as u,F as g,g as h,aV as p}from"./index.eb663447.js";import{o as b,s as f}from"./dom.db9d876e.js";import{g as v}from"./screen.34b60bc2.js";var y=t({name:"Preview",props:{screenId:{type:[String,Number],required:!0}},setup(t){const d=e(!0),l=a((()=>r.pageConfig)),m=a((()=>r.coms)),u=a((()=>{const t=l.value.styleFilterParams;let e="";return t.enable&&(e=`hue-rotate(${t.hue}deg) contrast(${t.contrast}%) opacity(${t.opacity}%) saturate(${t.saturate}%) brightness(${t.brightness}%)`),e})),g=t=>{switch(t.zoomMode){case c.auto:((t,e)=>{const a=document.documentElement.clientWidth/t,o=document.documentElement.clientHeight/e;f(document.body,{transform:`scale(${a}, ${o})`,transformOrigin:"left top",backgroundSize:"100% 100%"})})(t.width,t.height);break;case c.width:(t=>{const e=document.documentElement.clientWidth/t;f(document.body,{transform:`scale(${e})`,transformOrigin:"left top",backgroundSize:"100%"})})(t.width);break;case c.height:((t,e)=>{const a=document.documentElement.clientWidth,o=document.documentElement.clientHeight/e,n=(a-t*o)/2;f(document.body,{transform:`scale(${o})`,transformOrigin:"left top",backgroundSize:t/a*o*100+"% 100%",backgroundPosition:`${n.toFixed(3)}px top`,marginLeft:`${n.toFixed(3)}px`})})(t.width,t.height);break;case c.full:((t,e)=>{const a=document.documentElement.clientWidth,o=document.documentElement.clientHeight/e,n=(a-t*o)/2;f(document.body,{transform:`scale(${o})`,transformOrigin:"left top",backgroundSize:t/a*o*100+"% 100%",backgroundPosition:`${n.toFixed(3)}px top`}),document.documentElement.style.overflowX="scroll"})(t.width,t.height);break;default:f(document.body,{overflow:"hidden",position:"relative"})}},h=o();return n((async()=>{try{const a=await v(+t.screenId);if(!a)throw new Error("404");r.setEditorOption({screen:a.screen,config:a.config,coms:a.coms,variables:a.variables}),e=a.config,document.title=r.screen.name,document.querySelector('meta[name="viewport"]').setAttribute("content",`width=${e.width}`),f(document.documentElement,{overflowX:"hidden",overflowY:"visible"}),f(document.body,{width:`${e.width}px`,height:`${e.height}px`,backgroundImage:`url(${l.value.bgimage})`,backgroundColor:l.value.bgcolor}),g(e),i.setFilterOption({dataFilters:a.dataFilters}),setTimeout((()=>{d.value=!1}),500),b(window,"resize",(()=>{g(l.value)}))}catch(a){h.replace({name:"NotFound",params:{catchAll:"error"}})}var e})),{cdn:"//files.pengxiaotian.com",LOGO:s.logo,loading:d,pageConfig:l,coms:m,styleFilter:u}}});const w={target:"_blank",href:"javascript:;"},$={key:0,href:"/",target:"_blank",class:"datav-watermark"},k={class:"scene"};y.render=function(t,e,a,o,n,r){return d(),l(g,null,[m("div",{id:"datav-loading",style:{background:"rgb(15, 42, 66)",display:t.loading?"block":"none"}},[m("a",w,[m("img",{class:"datav-logo",src:`${t.cdn}/datav/datav-loading.gif`},null,8,["src"])])],4),m("div",{class:"datav-layout",style:{visibility:t.loading?"hidden":"visible"}},[t.pageConfig.useWatermark?(d(),l("a",$,[m("img",{src:t.LOGO},null,8,["src"])])):u("",!0),m("div",k,[(d(!0),l(g,null,h(t.coms,(e=>(d(),l("div",{key:e.id,style:{left:e.attr.x+"px",top:e.attr.y+"px",width:e.attr.w+"px",height:e.attr.h+"px",opacity:e.attr.opacity,transform:`rotate(${e.attr.deg}deg) ${e.attr.filpH?"scaleX(-1)":""} ${e.attr.filpV?"scaleY(-1)":""}`,filter:t.styleFilter},class:"-datav-com absolute"},[(d(),l(p(e.name),{com:e},null,8,["com"]))],4)))),128))])],4)],64)};export default y;
