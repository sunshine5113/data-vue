import{d as t,u as a,U as e,r as s,o as n,c as i,a as o,F as r,b as l,w as c,e as d,t as h,f as v,g,h as u,i as p,j as m,p as A,k as w,l as x}from"./index.1be12e4a.js";import"./editor.worker.3eb73e22.js";var b=t({name:"NavHeader",props:{isFixed:{type:Boolean,default:!1}},setup(){const{name:t,avatar:s,doLogout:n}=e(),i=a();return{userName:t,avatar:s,logout:()=>{n().then((()=>{i.push({name:"Login"})}))}}}});const y={class:"logo"},M={class:"top-tip"},f=o("strong",{class:"tip-strong"},"公告",-1),C={class:"datav-marquee"},k={class:"content"},D=d(" 1. DataV 仅支持谷歌 Chrome 浏览器版本 60 以上。2. DataV 基于 Vue 3.x 开发。3. 项目地址："),P=o("a",{href:"https://github.com/pengxiaotian/datav-vue",target:"_blank",class:"project-href"},"https://github.com/pengxiaotian/datav-vue",-1),F=o("span",{class:"content-space"},null,-1),B={class:"user"},H={class:"header-item"},N={class:"user-link-wrap"},R=o("img",{src:"data:image/png;base64,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"},null,-1),W={class:"user-link"},L=o("i",{class:"el-icon-caret-bottom"},null,-1),Y=d(" 退出 "),T=o("div",{class:"datav-nav"},[o("div",{class:"header-img"},[o("img",{class:"nav-img-text",src:"/assets/nav-img-text.9f23973c.png"}),o("div",{class:"nav-img"})])],-1);b.render=function(t,a,e,v,g,u){const p=s("el-avatar"),m=s("g-drop-list-item"),A=s("g-drop-list"),w=s("g-drop-list-popover");return n(),i("div",null,[o("div",{class:"datav-hearder",style:{background:t.isFixed?"#171b22":""}},[o("div",y,[o("div",M,[f,o("div",C,[o("span",k,[(n(),i(r,null,l(2,(t=>(n(),i(r,{key:t},[D,P,F],64)))),64))])])])]),o("div",B,[o("div",H,[o(w,null,{droplist:c((()=>[o(A,null,{default:c((()=>[o(m,{icon:"v-icon-logout",onClick:t.logout},{default:c((()=>[Y])),_:1},8,["onClick"])])),_:1})])),default:c((()=>[o("span",N,[o(p,{size:20,src:t.avatar+"?imageView2/1/w/80/h/80"},{default:c((()=>[R])),_:1},8,["src"]),o("span",W,[d(h(t.userName)+" ",1),L])])])),_:1})])])],4),T])};class O{constructor(t,a,e=0){this.j=.85,this.k=10,this.l=4,this.pattern=null,this.tabWidthList=[],this.tabHeight=0,this.opt={currentIndex:0,nextIndex:1,speed:1,timer:0,width:200,height:100,animating:!1,curDisX:0,distance:0},this.canvas=document.getElementById(t),this.tabs=document.querySelectorAll(a);const{opt:s}=this;this.calcTabs(),this.initCanvas(this.canvas,s.width,s.height),this.createPattern(this.canvas),this.startDraw(0),this.toggle(e)}initCanvas(t,a,e){const s=t.getContext("2d"),{devicePixelRatio:n}=window;t.width=a*n,t.height=e*n,t.style.width=a+"px",t.style.height=e+"px",s.scale(n,n)}calcTabs(){const{opt:t,tabs:a}=this,e=[];let s=0;a.forEach((t=>{e.push(s),s+=t.offsetWidth})),e[0]=-20,e.push(s),this.tabWidthList=e,this.tabHeight=a[0].offsetHeight+0,t.height=this.tabHeight+20,t.width=window.innerWidth}createPattern(t){const a=document.createElement("canvas");a.width=140,a.height=63,a.style.width="140px",a.style.height="63px";const e=a.getContext("2d");e.scale(1,1),e.lineWidth=.4;for(let s=3,n=.8,i=1;30>i;i++)e.strokeStyle="RGBA(22, 120, 160, "+n+")",e.beginPath(),e.moveTo(0,i*s),e.lineTo(140,i*s),e.stroke(),e.closePath(),10<i&&(n-=.1);this.pattern=t.getContext("2d").createPattern(a,"repeat-x")}calcAVGSpeed(t){const{l:a,j:e,k:s}=this;let n=(a*e*t+s*(1-e)*t)/(s*a*20);return n=Math.max(Math.abs(n),2.5)*Math.sign(n),n}getCurSpeed(t,a){const{l:e,j:s,k:n,opt:i}=this;return Math.abs(t)>Math.abs(s*a)?e*i.speed:n*i.speed}calCurve(t,a,e,s,n,i){t.bezierCurveTo(a+i,e,s-i,n,s,n)}drawHightlight(t){const{opt:a}=this,e=this.canvas.getContext("2d");e.clearRect(0,0,2*a.width,2*a.height),e.shadowColor="rgba(36, 131, 255, 1)",e.shadowBlur=5,e.strokeStyle="#004CB3",e.lineWidth=.8,e.fillStyle="none",this.draw(e,!1);const s=e.createLinearGradient(0,0,a.width,a.height),n=t-.3;s.addColorStop(Math.min(1,Math.max(0,0+n)),"rgba(0,0,0,0)"),s.addColorStop(Math.min(1,Math.max(0,0+n+.1)),"#8ed6ff"),s.addColorStop(Math.min(1,0+n+.3),"#8ed6ff"),s.addColorStop(Math.min(1,0+n+.3+.1),"rgba(0,0,0,0)"),s.addColorStop(1,"rgba(0,0,0,0)"),e.lineWidth=1.5,e.strokeStyle=s,e.fillStyle=this.pattern,this.draw(e,!0)}startDraw(t){this.drawHightlight(t),this.opt.timer=requestAnimationFrame((()=>{this.startDraw((t+.005)%1.6)}))}draw(t,a){const{opt:e,tabWidthList:s,tabHeight:n}=this,i=e.currentIndex,o=n,r=.5;let l=0;if(t.beginPath(),t.moveTo(-50,e.height+10),t.lineTo(-50,o+r),e.animating){const t=this.getCurSpeed(e.curDisX,e.distance);l=Math.min(Math.abs(e.distance),Math.abs(e.curDisX+t))*Math.sign(t)}if(t.lineTo(0+s[i]+l-20,o+r),this.calCurve(t,0+s[i]+l-20,o+r,0+s[i]+l+20,3,20),e.animating){const a=s[e.nextIndex+1]-s[e.nextIndex];t.lineTo(0+s[i]+a+l-20,3),this.calCurve(t,0+s[i]+a+l-20,3,0+s[i]+a+l+20,o+r,20)}else t.lineTo(0+s[i+1]+l-20,3),this.calCurve(t,0+s[i+1]+l-20,3,0+s[i+1]+l+20,o+r,20);t.lineTo(e.width+10,o+r),t.lineTo(e.width+10,e.height+10),t.closePath(),t.stroke(),a&&t.fill(),a&&e.animating&&(e.curDisX=l,Math.abs(l)>=Math.abs(e.distance)&&(e.animating=!1,e.currentIndex=e.nextIndex))}toggle(t){const{opt:a,tabWidthList:e}=this;t===a.currentIndex||!e||!e.length||a.animating&&t===a.nextIndex||(a.animating=!0,a.distance=e[t]-e[a.currentIndex],a.speed=this.calcAVGSpeed(a.distance),a.curDisX=0,a.nextIndex=t)}resize(){const{opt:t}=this;t.timer&&cancelAnimationFrame(t.timer),this.calcTabs(),this.initCanvas(this.canvas,t.width,t.height),this.startDraw(0)}}var S=t({name:"NavMain",props:{navs:{type:Array,required:!0}},emits:["change"],setup(t,a){const e=v(),s=g(0);let n=null;const i=u((()=>{n&&n.resize()}),500);return p((()=>{const a=t.navs.find((t=>t.key===e.name));s.value=a?a.id:0,n=new O("nav-canvas",".nav-main .nav-span",s.value),window.addEventListener("resize",i)})),m((()=>{window.removeEventListener("resize",i)})),{toggleNav:t=>{n&&(s.value=t.id,n.toggle(t.id),a.emit("change",t))},activeNav:s}}});const V=x();A("data-v-659da5cc");const E={class:"nav-main"},I=o("canvas",{id:"nav-canvas",style:{position:"absolute","z-index":"-1",left:"0"}},null,-1);w();const K=V(((t,a,e,s,c,v)=>(n(),i("div",E,[I,(n(!0),i(r,null,l(t.navs,(a=>(n(),i("span",{key:a.id,class:"nav-span"},[o("a",{class:["nav-link",{"nav-active":t.activeNav===a.id}],onClick:e=>t.toggleNav(a)},[o("i",{class:`v-icon-${a.icon} nav-icon`},null,2),d(h(a.name),1)],10,["onClick"])])))),128))]))));S.render=K,S.__scopeId="data-v-659da5cc";var z=t({name:"Home",components:{NavHeader:b,NavMain:S},setup(){const t=g(null),e=g(!1),s=g([{id:0,key:"MyProject",name:"我的可视化",icon:"layer"},{id:1,key:"MyData",name:"我的数据",icon:"my-data"},{id:2,key:"MyCom",name:"我的组件",icon:"my-com"},{id:3,key:"MyCase",name:"教程",icon:"tutorial"}]),n=a(),i=()=>{e.value=t.value.$el.offsetTop>200};return p((()=>{window.addEventListener("scroll",i)})),m((()=>{window.removeEventListener("scroll",i)})),{navMainRef:t,isFixed:e,navs:s,onNavChange:t=>{n.push({name:t.key})}}}});const U=x();A("data-v-571748a1");const j={class:"datav"},G=o("div",{class:"nav-shadow"},null,-1),J={class:"datav-main"},X={class:"datav-content"};w();const Z=U(((t,a,e,r,l,c)=>{const d=s("nav-header"),h=s("nav-main"),v=s("router-view");return n(),i("div",j,[o(d,{"is-fixed":t.isFixed},null,8,["is-fixed"]),o(h,{ref:"navMainRef",navs:t.navs,style:{background:t.isFixed?"#171b22":""},onChange:t.onNavChange},null,8,["navs","style","onChange"]),G,o("div",J,[o("div",X,[o(v)])])])}));z.render=Z,z.__scopeId="data-v-571748a1";export default z;
