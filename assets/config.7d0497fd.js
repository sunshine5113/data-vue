import{i as e,r as l}from"./select-options.e74df487.js";import{d as a,as as o,f as u,o as d,c as n,a as i,w as t,F as f,g,A as m,t as c,b as r}from"./index.3033f95e.js";var p=a({name:"VMainImgProp",props:{com:{type:Object,required:!0}},setup:a=>({config:o(a.com,"config"),imageTypes:e,repeatTypes:l})});const s={class:"setting-panel-gui"};p.render=function(e,l,a,o,p,V){const b=u("el-radio-button"),y=u("el-radio-group"),_=u("g-field"),v=u("g-upload-image"),U=u("g-color-picker"),k=u("g-select"),T=u("g-input-number"),I=u("g-input"),x=u("el-switch"),C=u("g-field-collapse");return d(),n("div",s,[i(_,{label:"图片类型"},{default:t((()=>[i(y,{modelValue:e.config.imageType,"onUpdate:modelValue":l[1]||(l[1]=l=>e.config.imageType=l)},{default:t((()=>[(d(!0),n(f,null,g(e.imageTypes,(e=>(d(),n(b,{key:e.id,label:e.id},{default:t((()=>[m(c(e.value),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),i(_,{label:"背景图"},{default:t((()=>[i(v,{modelValue:e.config.backgroundImage,"onUpdate:modelValue":l[2]||(l[2]=l=>e.config.backgroundImage=l)},null,8,["modelValue"])])),_:1}),"vector"===e.config.imageType?(d(),n(_,{key:0,label:"矢量图"},{default:t((()=>[i(v,{modelValue:e.config.vectorImage,"onUpdate:modelValue":l[3]||(l[3]=l=>e.config.vectorImage=l)},null,8,["modelValue"])])),_:1})):r("",!0),"vector"===e.config.imageType?(d(),n(_,{key:1,label:"填充色"},{default:t((()=>[i(U,{modelValue:e.config.vectorFill,"onUpdate:modelValue":l[4]||(l[4]=l=>e.config.vectorFill=l)},null,8,["modelValue"])])),_:1})):r("",!0),i(_,{label:"图片重复"},{default:t((()=>[i(k,{modelValue:e.config.repeat,"onUpdate:modelValue":l[5]||(l[5]=l=>e.config.repeat=l),data:e.repeatTypes},null,8,["modelValue","data"])])),_:1}),i(_,{label:"圆角"},{default:t((()=>[i(T,{modelValue:e.config.radius,"onUpdate:modelValue":l[6]||(l[6]=l=>e.config.radius=l),min:0,step:1,suffix:"px"},null,8,["modelValue"])])),_:1}),i(C,{tooltip:"点击图片区域可跳转至设定的超链接",label:"超链接配置"},{default:t((()=>[i(_,{level:2,label:"超链接"},{default:t((()=>[i(I,{modelValue:e.config.urlConfig.url,"onUpdate:modelValue":l[7]||(l[7]=l=>e.config.urlConfig.url=l)},null,8,["modelValue"])])),_:1}),i(_,{level:2,label:"是否打开新窗口"},{default:t((()=>[i(x,{modelValue:e.config.urlConfig.ifBlank,"onUpdate:modelValue":l[8]||(l[8]=l=>e.config.urlConfig.ifBlank=l)},null,8,["modelValue"])])),_:1})])),_:1}),i(_,{label:"手势光标"},{default:t((()=>[i(x,{modelValue:e.config.cursor,"onUpdate:modelValue":l[9]||(l[9]=l=>e.config.cursor=l)},null,8,["modelValue"])])),_:1})])};export default p;
