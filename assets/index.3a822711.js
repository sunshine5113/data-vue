var e=Object.defineProperty,t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,n,o)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[n]=o,a=(e,a)=>{for(var r in a||(a={}))n.call(a,r)&&s(e,r,a[r]);if(t)for(var r of t(a))o.call(a,r)&&s(e,r,a[r]);return e};import{d as r,h as i,aI as l,C as c,D as d,o as u,c as h,a as m,b as p,E as v,e as y,b2 as f,K as g,N as x,t as w,b3 as b,f as M,r as L,F as $,g as S,q as C,aN as R,aJ as k,aR as E}from"./index.3038f72e.js";import{c as T}from"./index.ad74eb16.js";import{a as z,o as P,b as G}from"./dom.95c48c6b.js";import{u as I}from"./index.5d725fc6.js";import"./templates.5580a514.js";import"./data.9bba0136.js";import"./basic-bar.c78f6f1a.js";import"./word-cloud.16012e5b.js";var j=r({name:"AlignLine",setup:()=>({alignLine:i((()=>l.alignLine)),canvas:i((()=>l.canvas))})});const X=v();c("data-v-104f54e8");const D={key:0,class:"ident-line-wp"};d();const O=X(((e,t,n,o,s,a)=>e.alignLine.enable&&e.alignLine.show?(u(),h("div",D,[m("div",{class:"ident-line x-line",style:{width:`${e.canvas.width}px`,top:`${e.alignLine.top}px`}},null,4),m("div",{class:"ident-line x-line",style:{width:`${e.canvas.width}px`,top:`${e.alignLine.horizontal}px`}},null,4),m("div",{class:"ident-line x-line",style:{width:`${e.canvas.width}px`,top:`${e.alignLine.bottom}px`}},null,4),m("div",{class:"ident-line y-line",style:{height:`${e.canvas.height}px`,left:`${e.alignLine.left}px`}},null,4),m("div",{class:"ident-line y-line",style:{height:`${e.canvas.height}px`,left:`${e.alignLine.vertical}px`}},null,4),m("div",{class:"ident-line y-line",style:{height:`${e.canvas.height}px`,left:`${e.alignLine.right}px`}},null,4)])):p("",!0)));j.render=O,j.__scopeId="data-v-104f54e8";const W=e=>`${e}px`,B=(e,t,n,o)=>{const s=null!=e?e:document.createElement("canvas");s.width=t*o,s.height=n*o,s.style.width=W(t),s.style.height=W(n);const a=s.getContext("2d");return a&&a.setTransform(o,0,0,o,0,0),s},Y=(e,t,n,o)=>{var s,a;const r=parseFloat(e.style.transform.match(/(?<=X\()(.+)/gi)[0]),{height:i,scale:l,offset:c}=t;let d=0;d="TB"==t.direction?n-((null==(s=e.parentElement)?void 0:s.offsetLeft)||0)-r:o-((null==(a=e.parentElement)?void 0:a.offsetTop)||0)-r,d=d-i+t.indicatorLineWidth;return{coor:Math.floor((d-c)/l),dist:d}},_=class{constructor(e,t,n,o=0){this.el=e,this.options=t,this.coor=-1,this.constructGuide(n,o)}constructGuide(e,t){const{el:n}=this,o=document.createElement("div");o.title="双击删除参考线",z(o,"ruler-line"),this.guideLine=o;const{coor:s}=this;this.setLine(e,t),e&&this.coorChange("add",this.coor,s);let a=n.querySelector(".lines-wrapper");a||(a=document.createElement("div"),z(a,"lines-wrapper"),n.appendChild(a)),a.appendChild(o),P(o,"mousedown",this.moving.bind(this)),P(o,"dblclick",this.dblclick.bind(this))}moving(e){_.isMoveing=!0;const{options:t}=this;e.preventDefault(),e.stopPropagation();const{coor:n}=this,o=e=>{"TB"===t.direction?document.body.style.cursor="ew-resize":document.body.style.cursor="ns-resize",this.setLine(e)},s=()=>{_.isMoveing=!1,document.body.style.cursor="",G(document,"mousemove",o),G(document,"mouseup",s);const{coor:e}=this;e<0?this.coorChange("delete",n,n):this.coorChange("update",e,n)};P(document,"mousemove",o),P(document,"mouseup",s)}setLine(e,t=0){const{el:n,options:o,guideLine:s}=this,a=e?Y(n,o,e.clientX,e.clientY):((e,t)=>{const{scale:n,offset:o}=t;return{coor:e,dist:parseFloat((e*n+o).toFixed(3))}})(t,o);"TB"===o.direction?s.style.left=W(a.dist):s.style.top=W(a.dist),s.innerHTML=`\n      <div class="line-action">\n        <span class="line-value">${a.coor}</span>\n      </div>`,this.coor=a.coor}dblclick(e){e.preventDefault(),e.stopPropagation(),this.destroy()}coorChange(e,t,n){const{options:o}=this;o.coorChange&&o.coorChange(e,t,n)}show(){this.guideLine.style.display="block"}hide(){this.guideLine.style.display="none"}destroy(){const{guideLine:e,coor:t}=this;this.coorChange("delete",t,t),G(e,"mousedown",this.moving.bind(this)),G(e,"dblclick",this.dblclick.bind(this)),e.remove()}};let A=_;A.isMoveing=!1;class q{constructor(e,t){this.ruler={width:0,height:0},this.guideLines=[],this.options={direction:"TB",width:1e3,height:20,bgColor:"#0e1013",fontFamily:"sans-serif",fontSize:"10px",fontColor:"#90a0ae",strokeStyle:"rgba(161, 174, 179, 0.8)",lineWidth:.5,indicatorLineWidth:1,scale:1,offset:40,ratio:2},this.el=e,this.options=a(a({},this.options),t),this.constructRuler()}constructRuler(){const{el:e,options:t}=this,{direction:n,width:o,height:s,ratio:a}=t,r="TB"===n?Math.max(e.offsetWidth,o):Math.max(e.offsetHeight,o),i=s;this.ruler.width=r,this.ruler.height=i;const l=B(null,r,i,a);z(l,"canvas-ruler"),e.appendChild(l),this.canvas=l,this.ctx=l.getContext("2d"),this.drawRuler(),P(l,"mouseenter",this.constructIndicator.bind(this)),P(l,"mousedown",this.createGuideLine.bind(this))}drawRuler(){const{ctx:e,options:t,ruler:n}=this,{width:o,height:s}=n;e.beginPath(),e.fillStyle=t.bgColor,e.fillRect(0,0,o,s),e.closePath(),e.beginPath(),e.font=`${t.fontSize} ${t.fontFamily}`,e.textAlign="left",e.fillStyle=t.fontColor,e.strokeStyle=t.strokeStyle,e.lineWidth=t.lineWidth,this.drawPoints(),e.stroke()}drawPoints(){const{ctx:e,options:t,ruler:n}=this,{width:o,height:s}=n,{offset:a,scale:r}=t,i=s/1.5,l=s/1.2;for(let c=0;c<=o;c+=1){const t=c-a;if(t<0)continue;let n=-1,o=-1;t%50==0?(n=Math.floor(t/r),o=0):t%25==0?o=i:t%5==0&&(o=l),o>=0&&(e.moveTo(c+.5,s+.5),e.lineTo(c+.5,o),n>-1&&e.fillText(`${n}`,c+2.5,s/1.5))}}constructIndicator(e){if(A.isMoveing)return;const{el:t,options:n,canvas:o}=this,s=document.createElement("div"),a=document.createElement("span");z(s,"ruler-indicator"),z(a,"indicator-value"),s.appendChild(a),this.indicator=s,this.indicatorValue=a,t.appendChild(s);const r=e=>{const o=Y(t,n,e.clientX,e.clientY);s.style.left=W(o.dist),a.textContent=`${o.coor}`};r(e);const i=e=>{r(e)},l=()=>{G(o,"mousemove",i),G(o,"mouseout",l),s.remove()};P(o,"mousemove",i),P(o,"mouseout",l)}createGuideLine(e){e.preventDefault(),e.stopPropagation();const{el:t,options:n}=this;this.guideLines.push(new A(t,n,e))}setGuideLines(e){const{el:t,options:n}=this;e.forEach((e=>{this.guideLines.push(new A(t,n,null,e))}))}setSize(e,t,n){const{el:o,options:s}=this;s.width=e,s.height=t,s.scale=n;const{direction:a,width:r,height:i,ratio:l}=s,c="TB"===a?Math.max(o.offsetWidth,r):Math.max(o.offsetHeight,r),d=i;this.ruler.width=c,this.ruler.height=d,B(this.canvas,c,d,l),this.drawRuler(),this.guideLines.forEach((e=>e.setLine(null,e.coor)))}setScale(e){this.options.scale=e,this.drawRuler(),this.guideLines.forEach((e=>e.setLine(null,e.coor)))}toggleGuide(e){const t=e?"show":"hide";this.guideLines.forEach((e=>e[t]()))}clearGuides(){this.guideLines.forEach((e=>e.destroy())),this.guideLines=[]}destroy(){const{el:e,canvas:t}=this;this.clearGuides(),G(t,"mouseenter",this.constructIndicator.bind(this)),G(t,"mousedown",this.createGuideLine.bind(this)),e.remove()}}var F=r({name:"Ruler",setup(){const e=y(null),t=y(null),n=y(null),o=y(null),s=y(!0),a=y(0),r=y(0),i=document.documentElement.clientWidth;f((()=>{if(e.value&&t.value){const{canvas:s,guideLine:a}=l,r=Math.max(s.width,i);n.value?n.value.setSize(r,20,s.scale):(n.value=new q(e.value,{direction:"TB",width:r,scale:s.scale,coorChange:(e,t,n)=>{"add"===e?a.h.push(t):"update"===e&&t!==n?(a.h=a.h.filter((e=>e!==n)),a.h.push(t)):"delete"===e&&(a.h=a.h.filter((e=>e!==t)))}}),n.value.setGuideLines(a.h)),o.value?o.value.setSize(s.height,20,s.scale):(o.value=new q(t.value,{direction:"LR",width:s.height,scale:s.scale,coorChange:(e,t,n)=>{"add"===e?a.v.push(t):"update"===e&&t!==n?(a.v=a.v.filter((e=>e!==n)),a.v.push(t)):"delete"===e&&(a.v=a.v.filter((e=>e!==t)))}}),o.value.setGuideLines(a.v))}}));const c=e=>{const t=e.target;a.value=t.scrollLeft,r.value=t.scrollTop};return g((()=>{const e=document.getElementById("canvas-wp");null==e||e.addEventListener("scroll",c)})),x((()=>{const e=document.getElementById("canvas-wp");null==e||e.removeEventListener("scroll",c)})),{visible:s,hRulerWpRef:e,vRulerWpRef:t,toggleGuides:()=>{n.value&&o.value&&(s.value=!s.value,n.value.toggleGuide(s.value),o.value.toggleGuide(s.value))},vScroll:r,hScroll:a}}});const Z={class:"canvas-ruler-wp"};F.render=function(e,t,n,o,s,a){return u(),h("div",Z,[m("div",{ref:"hRulerWpRef",class:"ruler-wrapper h-container",style:`transform: translateX(-${e.hScroll}px);`},null,4),m("div",{ref:"vRulerWpRef",class:"ruler-wrapper v-container",style:`transform: rotate(90deg) translateX(-${e.vScroll}px);`},null,4),m("div",{title:"切换参考线",class:"ruler-corner",onClick:t[1]||(t[1]=(...t)=>e.toggleGuides&&e.toggleGuides(...t))},[m("i",{class:"v-icon-line-"+(e.visible?"show":"hide"),style:{"z-index":"10"}},null,2)])])};const H=[{direction:"lt",angle:0},{direction:"t",angle:45},{direction:"rt",angle:90},{direction:"r",angle:135},{direction:"rb",angle:180},{direction:"b",angle:225},{direction:"lb",angle:270},{direction:"l",angle:315}],N=[{start:338,end:23,cursor:"nwse-resize"},{start:23,end:68,cursor:"ns-resize"},{start:68,end:113,cursor:"nesw-resize"},{start:113,end:158,cursor:"ew-resize"},{start:158,end:203,cursor:"nwse-resize"},{start:203,end:248,cursor:"ns-resize"},{start:248,end:293,cursor:"nesw-resize"},{start:293,end:338,cursor:"ew-resize"}];function V(e,t,n){const o=n*Math.PI/180;return{x:(e.x-t.x)*Math.cos(o)-(e.y-t.y)*Math.sin(o)+t.x,y:(e.x-t.x)*Math.sin(o)+(e.y-t.y)*Math.cos(o)+t.y}}const J=(e,t,n,o,s,r)=>{const i=a({},n.attr),c=Object.create(null);let d,u,h;if("stretch"===r){const t={x:(i.x+i.w/2)*o,y:(i.y+i.h/2)*o};d=document.getElementById("canvas-coms").getBoundingClientRect(),u={x:e.clientX-d.left,y:e.clientY-d.top},h={x:t.x-(u.x-t.x),y:t.y-(u.y-t.y)}}const m=m=>{if(t)if("normal"===r)!function(e,t,n,o,s,a){"t"===e?(a.h=Math.round(t.h+(n.y-o.y)/s),a.y=Math.round(t.y+(o.y-n.y)/s)):"rt"===e?(a.h=Math.round(t.h+(n.y-o.y)/s),a.w=Math.round(t.w+(n.x-o.x)/s),a.x=Math.round(t.x+(o.x-n.x)/s),a.y=Math.round(t.y+(o.y-n.y)/s)):"r"===e?a.w=Math.round(t.w+(o.x-n.x)/s):"rb"===e?(a.h=Math.round(t.h+(o.y-n.y)/s),a.w=Math.round(t.w+(o.x-n.x)/s)):"b"===e?a.h=Math.round(t.h+(o.y-n.y)/s):"lb"===e?(a.h=Math.round(t.h+(o.y-n.y)/s),a.w=Math.round(t.w+(n.x-o.x)/s),a.x=Math.round(t.x+(o.x-n.x)/s)):"l"===e?(a.w=Math.round(t.w+(n.x-o.x)/s),a.x=Math.round(t.x+(o.x-n.x)/s)):"lt"===e&&(a.h=Math.round(t.h+(n.y-o.y)/s),a.w=Math.round(t.w+(n.x-o.x)/s),a.x=Math.round(t.x+(o.x-n.x)/s),a.y=Math.round(t.y+(o.y-n.y)/s))}(t,i,{x:e.clientX,y:e.clientY},{x:m.clientX,y:m.clientY},o,c);else{const e={x:m.clientX-d.left,y:m.clientY-d.top};1===t.length?function(e,t,n,o,s,a,r){const i=V(o,n,-t.deg);if("t"===e||"b"===e){const e=V({x:n.x,y:i.y},n,t.deg),o=Math.sqrt((e.x-s.x)**2+(e.y-s.y)**2);if(o>0){const n={x:e.x-(e.x-s.x)/2,y:e.y+(s.y-e.y)/2};r.h=Math.round(o/a),r.x=Math.round(n.x/a-t.w/2),r.y=Math.round((n.y-o/2)/a)}}if("l"===e||"r"===e){const e=V({x:i.x,y:n.y},n,t.deg),o=Math.sqrt((e.x-s.x)**2+(e.y-s.y)**2);if(o>0){const n={x:e.x-(e.x-s.x)/2,y:e.y+(s.y-e.y)/2};r.w=Math.round(o/a),r.x=Math.round((n.x-o/2)/a),r.y=Math.round(n.y/a-t.h/2)}}}(t,i,u,e,h,o,c):function(e,t,n,o,s,a){const r=(l=o,{x:(i=n).x+(l.x-i.x)/2,y:i.y+(l.y-i.y)/2});var i,l;const c=V(o,r,-t.deg),d=V(n,r,-t.deg);"l"===e[0]?(a.x=Math.round(d.x/s),a.w=Math.round((c.x-d.x)/s)):"r"===e[0]&&(a.x=Math.round(c.x/s),a.w=Math.round((d.x-c.x)/s)),"t"===e[1]?(a.y=Math.round(d.y/s),a.h=Math.round((c.y-d.y)/s)):"b"===e[1]&&(a.y=Math.round(c.y/s),a.h=Math.round((d.y-c.y)/s))}(t,i,e,h,o,c)}else c.x=i.x+Math.round((m.clientX-e.clientX)/o/s)*s,c.y=i.y+Math.round((m.clientY-e.clientY)/o/s)*s;n.attr=a(a({},n.attr),c),l.calcAlignLine(n)},p=()=>{G(document,"mousemove",m),G(document,"mouseup",p),l.hideAlignLine(n.id)};P(document,"mousemove",m),P(document,"mouseup",p)};var K=r({name:"ReferLine",props:{attr:{type:Object,required:!0},scale:{type:Number,required:!0}},setup:e=>({topLineStyle:i((()=>({height:`${e.attr.y+60/e.scale}px`,borderLeftWidth:.9/e.scale+"px"}))),leftLineStyle:i((()=>({width:`${e.attr.x+60/e.scale}px`,borderTopWidth:.9/e.scale+"px"}))),accountStyle:i((()=>({fontSize:12/e.scale+"px",top:`-${6/e.scale}px`,left:`-${6/e.scale}px`})))})});const Q=v();c("data-v-1e73c419");const U={class:"nav-line"};d();const ee=Q(((e,t,n,o,s,a)=>(u(),h("div",U,[m("div",{class:"nav-line-top",style:e.topLineStyle},null,4),m("div",{class:"nav-line-left",style:e.leftLineStyle},null,4),m("div",{class:"nav-line-account",style:e.accountStyle},w(e.attr.x)+", "+w(e.attr.y),5)]))));K.render=ee,K.__scopeId="data-v-1e73c419";var te=r({name:"DatavTransform",components:{ReferLine:K},props:{com:{type:Object,required:!0}},setup(e){const t=b(),n=i((()=>l.referLine)),o=i((()=>l.canvas.scale)),s=i((()=>({selected:e.com.selected,hided:e.com.hided,locked:e.com.locked}))),a=i((()=>({top:0,left:0,width:`${e.com.attr.w}px`,height:`${e.com.attr.h}px`,transform:`translate(${e.com.attr.x}px, ${e.com.attr.y}px)`}))),r=i((()=>({display:e.com.hided?"none":"block"}))),c=i((()=>({hided:!e.com.selected||e.com.locked}))),d=i((()=>({cursor:"move",transform:`rotate(${e.com.attr.deg}deg)`}))),u=i((()=>{const{hided:t,attr:n}=e.com,o=l.pageConfig.styleFilterParams;let s="";return o.enable&&(s=`hue-rotate(${o.hue}deg) contrast(${o.contrast}%) opacity(${o.opacity}%) saturate(${o.saturate}%) brightness(${o.brightness}%)`),{display:t?"none":"block",transform:`scaleX(${n.filpH?-1:1}) scaleY(${n.filpV?-1:1}) rotateZ(360deg)`,filter:s}})),h=i((()=>({width:`${e.com.attr.w}px`,height:`${e.com.attr.h}px`}))),m=i((()=>(e=>{const t=(e+360)%360,n={};let o=-1;return H.forEach((e=>{const s=(e.angle+t)%360,a=N.length;for(;0<a;){o=(o+1)%a;const t=N[o];if(s<23||s>=338){n[e.direction]="nwse-resize";break}if(t.start<=s&&s<t.end){n[e.direction]=t.cursor;break}}})),n})(e.com.attr.deg))),p=i((()=>{const e=`scale(${1/o.value}, ${1/o.value})`;return{t:{name:"top",style:{cursor:m.value.t,transform:e}},rt:{name:"top-right",style:{cursor:m.value.rt},rotateStyle:{"transform-origin":"25% 75%",transform:e}},r:{name:"right",style:{cursor:m.value.r,transform:e}},rb:{name:"bottom-right",style:{cursor:m.value.rb},rotateStyle:{"transform-origin":"25% 25%",transform:e}},b:{name:"bottom",style:{cursor:m.value.b,transform:e}},lb:{name:"bottom-left",style:{cursor:m.value.lb},rotateStyle:{"transform-origin":"75% 25%",transform:e}},l:{name:"left",style:{cursor:m.value.l,transform:e}},lt:{name:"top-left",style:{cursor:m.value.lt},rotateStyle:{"transform-origin":"75% 75%",transform:e}}}})),v=()=>{e.com.selected||l.selectCom(e.com.id)},{showMenu:y}=I();return{referLine:n,scale:o,transformClass:s,transformStyle:a,hideStyle:r,handlerClass:c,handlerStyle:d,comStyle:u,wrapperStyle:h,points:p,onEnter:()=>{e.com.hovered=!0},onLeave:()=>{e.com.hovered=!1},onMove:t=>{v(),((e,t,n,o)=>{J(e,null,t,n,o,null)})(t,e.com,o.value,l.pageConfig.grid)},onZoom:(t,n)=>{v(),((e,t,n,o)=>{const s=l.isNormalResizeMode?"normal":"stretch";J(e,t,n,o,0,s)})(t,n,e.com,o.value)},onRotate:n=>{((e,t,n)=>{const o=t.getBoundingClientRect(),s=o.left+o.width/2,a=o.top+o.height/2,r=180*Math.atan2(a-e.clientY,s-e.clientX)/Math.PI-n.attr.deg,i=e=>{const t=180*Math.atan2(a-e.clientY,s-e.clientX)/Math.PI-r,o=Math.round(t%360);n.attr.deg=o<0?o+360:o},l=()=>{G(document,"mousemove",i),G(document,"mouseup",l)};P(document,"mousemove",i),P(document,"mouseup",l)})(n,t.vnode.el,e.com)},showMenu:y}}});const ne=v();c("data-v-4ce0c696");const oe=m("div",{class:"transform-bg"},null,-1);d();const se=ne(((e,t,n,o,s,a)=>{const r=M("refer-line");return u(),h("div",{class:["datav-transform",e.transformClass],style:e.transformStyle},[e.referLine.enable&&e.com.selected?(u(),h(r,{key:0,attr:e.com.attr,scale:e.scale},null,8,["attr","scale"])):p("",!0),m("div",{class:["datav-scale",{hovered:e.com.hovered}],style:e.hideStyle,onMouseenter:t[3]||(t[3]=(...t)=>e.onEnter&&e.onEnter(...t)),onMouseleave:t[4]||(t[4]=(...t)=>e.onLeave&&e.onLeave(...t)),onMousedown:t[5]||(t[5]=C(((...t)=>e.onMove&&e.onMove(...t)),["prevent","stop"]))},[m("div",{class:["transform-handler",e.handlerClass],style:e.handlerStyle},[m("div",{class:"datav-com",style:e.comStyle},[L(e.$slots,"default",{},void 0,!0),m("div",{class:"datav-wrapper-event-disable",style:e.wrapperStyle,onContextmenu:t[1]||(t[1]=(...t)=>e.showMenu&&e.showMenu(...t))},null,36)],4),(u(!0),h($,null,S(e.points,((n,o)=>(u(),h($,{key:o},[n.rotateStyle?(u(),h("i",{key:0,class:`${n.name}-handler`,"data-html2canvas-ignore":""},[m("span",{class:"rotate-handler",style:n.rotateStyle,onMousedown:t[2]||(t[2]=C(((...t)=>e.onRotate&&e.onRotate(...t)),["prevent","stop"]))},[m("span",{class:"control-point",style:n.style,onMousedown:C((t=>e.onZoom(t,o)),["prevent","stop"])},null,44,["onMousedown"])],36)],2)):(u(),h("i",{key:1,class:`${n.name}-handler`,"data-html2canvas-ignore":""},[m("span",{class:"control-point",style:n.style,onMousedown:C((t=>e.onZoom(t,o)),["prevent","stop"])},null,44,["onMousedown"])],2))],64)))),128)),oe],6)],38)],6)}));te.render=se,te.__scopeId="data-v-4ce0c696";var ae=r({name:"CanvasMain",components:{AlignLine:j,Ruler:F,DatavTransform:te},setup(){const e=i((()=>l.canvas)),t=i((()=>l.pageConfig));return{coms:i((()=>l.coms)),screenShotStyle:i((()=>({width:`${e.value.width}px`,height:`${e.value.height}px`}))),canvasPanelStyle:i((()=>({position:"absolute",width:`${t.value.width}px`,height:`${t.value.height}px`,transform:`scale(${e.value.scale}) translate(0px, 0px)`,backgroundImage:`url(${t.value.bgimage})`,backgroundColor:t.value.bgcolor}))),dropToAddCom:async e=>{e.preventDefault();try{const t=e.dataTransfer.getData("text");if(t){R.addLoading();let n=T(t);const{scale:o}=l.canvas,s=(e.clientX-R.getPanelOffsetLeft)/o,a=(e.clientY-R.getPanelOffsetTop)/o;n.attr.x=Math.round(s-n.attr.w/2),n.attr.y=Math.round(a-n.attr.h/2),await l.addCom(n),l.selectCom(n.id),R.removeLoading(),n.apis.source&&(await n.loadData(),k.datavComponents[n.id].$DATAV_requestData())}}catch{}},cancelSelectCom:()=>{l.selectCom()},dragOver:e=>{e.preventDefault(),e.stopPropagation(),e.dataTransfer.dropEffect="copy"}}}});const re=v();c("data-v-751b39d2");const ie=m("div",{class:"thumbnail"},null,-1);d();const le=re(((e,t,n,o,s,a)=>{const r=M("align-line"),i=M("ruler"),l=M("datav-transform"),c=M("el-main");return u(),h(c,{class:"canvas-main"},{default:re((()=>[m("div",{id:"canvas-wp",class:"canvas-panel-wrap",onMousedown:t[3]||(t[3]=C(((...t)=>e.cancelSelectCom&&e.cancelSelectCom(...t)),["stop"]))},[m("div",{class:"screen-shot",style:e.screenShotStyle},[m(r),m(i),m("div",{id:"canvas-coms",class:"canvas-panel",style:e.canvasPanelStyle,onDragover:t[1]||(t[1]=(...t)=>e.dragOver&&e.dragOver(...t)),onDrop:t[2]||(t[2]=(...t)=>e.dropToAddCom&&e.dropToAddCom(...t))},[(u(!0),h($,null,S(e.coms,(e=>(u(),h(l,{key:e.id,com:e},{default:re((()=>[(u(),h(E(e.name),{com:e,style:{transform:"translateZ(0px)",opacity:e.attr.opacity}},null,8,["com","style"]))])),_:2},1032,["com"])))),128))],36)],4)],32),ie])),_:1})}));ae.render=le,ae.__scopeId="data-v-751b39d2";export default ae;
