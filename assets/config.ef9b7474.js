import{a as d,K as p}from"./AppRoot.9161bc33.js";import{a4 as f,aD as _,a5 as n,aa as b,aX as a,a$ as i,a6 as V}from"./vendor.1c7e0fbb.js";const v=f({name:"VDecorationProp",props:{com:{type:Object,required:!0}},setup(e){const o=_(e.com,"config"),t=[];for(const l in p){const m=p[l];t.push({id:l,name:l,src:m.url})}return{config:o,images:t}}}),C={class:"setting-panel-gui"};function $(e,o,t,l,m,y){const r=n("g-select-image"),c=n("g-field"),u=n("g-slider"),g=n("g-field-collapse");return V(),b("div",C,[a(g,{label:"\u5168\u5C40"},{default:i(()=>[a(c,{level:2,label:"\u88C5\u9970\u5143\u7D20"},{default:i(()=>[a(r,{modelValue:e.config.global.img,"onUpdate:modelValue":o[0]||(o[0]=s=>e.config.global.img=s),images:e.images},null,8,["modelValue","images"])]),_:1}),a(c,{level:2,label:"\u900F\u660E\u5EA6"},{default:i(()=>[a(u,{modelValue:e.config.global.opacity,"onUpdate:modelValue":o[1]||(o[1]=s=>e.config.global.opacity=s),min:0,max:1,step:.1},null,8,["modelValue","step"])]),_:1})]),_:1})])}var E=d(v,[["render",$]]);export{E as default};
