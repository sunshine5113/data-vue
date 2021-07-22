import{l as e,r as l}from"./select-options.77d443b4.js";import{b as a,i as o,p as d}from"./bg-box.2a5a5534.js";import{d as i,ax as t,f as u,o as n,c as r,a as m,w as f,F as s,g,z as b,t as c,b as p}from"./index.fbe2df72.js";var V=i({name:"VBgBoxProp",props:{com:{type:Object,required:!0}},setup:i=>({config:t(i.com,"config"),lineStyles:e,repeatTypes:l,borderTypes:a,imageTypes:o,presetImages:d})});const y={class:"setting-panel-gui"};V.render=function(e,l,a,o,d,i){const t=u("g-input-number"),V=u("g-field"),U=u("g-color-picker"),_=u("g-field-collapse"),v=u("el-radio-button"),x=u("el-radio-group"),I=u("g-select"),h=u("g-upload-image"),k=u("g-input"),w=u("el-switch");return n(),r("div",y,[m(V,{tooltip:"当应用渐变边框或图片边框时，圆角失效",label:"圆角"},{default:f((()=>[m(t,{modelValue:e.config.borderRadius,"onUpdate:modelValue":l[1]||(l[1]=l=>e.config.borderRadius=l),min:0,max:100,step:1,suffix:"px"},null,8,["modelValue"])])),_:1}),m(_,{label:"填充",mode:"layout","default-layout":"horizontal",features:["vertical","horizontal","copy","add","remove"],list:e.config.fills,min:0,max:5,"default-new-value":"{}"},{default:f((e=>[m(V,{label:"填充",tooltip:"",level:2,"is-flat":!0},{default:f((()=>[m(U,{modelValue:e.item.fill,"onUpdate:modelValue":l=>e.item.fill=l,"is-inline":"",label:"填充"},null,8,["modelValue","onUpdate:modelValue"]),m(t,{modelValue:e.item.opacity,"onUpdate:modelValue":l=>e.item.opacity=l,min:0,max:100,step:1,suffix:"%","is-inline":"",label:"透明度"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:1},8,["list"]),m(_,{modelValue:e.config.border.show,"onUpdate:modelValue":l[15]||(l[15]=l=>e.config.border.show=l),toggle:!0,label:"边框"},{default:f((()=>[m(V,{level:2,label:"边框类型"},{default:f((()=>[m(x,{modelValue:e.config.border.type,"onUpdate:modelValue":l[2]||(l[2]=l=>e.config.border.type=l)},{default:f((()=>[(n(!0),r(s,null,g(e.borderTypes,(e=>(n(),r(v,{key:e.id,label:e.id},{default:f((()=>[b(c(e.value),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),"flat"===e.config.border.type?(n(),r(V,{key:0,level:2,label:"边框配置","is-flat":!0},{default:f((()=>[m(t,{modelValue:e.config.border.flat.width,"onUpdate:modelValue":l[3]||(l[3]=l=>e.config.border.flat.width=l),min:0,max:100,step:1,suffix:"px","is-inline":"",label:"粗细"},null,8,["modelValue"]),m(I,{modelValue:e.config.border.flat.style,"onUpdate:modelValue":l[4]||(l[4]=l=>e.config.border.flat.style=l),data:e.lineStyles,"is-inline":"",label:"样式"},null,8,["modelValue","data"]),m(U,{modelValue:e.config.border.flat.color,"onUpdate:modelValue":l[5]||(l[5]=l=>e.config.border.flat.color=l),"is-inline":"",label:"颜色"},null,8,["modelValue"])])),_:1})):p("",!0),"linearGradient"===e.config.border.type?(n(),r(_,{key:1,label:"边框配置"},{default:f((()=>[m(V,{level:2,label:"粗细"},{default:f((()=>[m(t,{modelValue:e.config.border.linearGradient.width,"onUpdate:modelValue":l[6]||(l[6]=l=>e.config.border.linearGradient.width=l),min:0,max:100,step:1,suffix:"px"},null,8,["modelValue"])])),_:1}),m(_,{label:"渐变色"},{default:f((()=>[m(V,{level:2,label:"角度"},{default:f((()=>[m(t,{modelValue:e.config.border.linearGradient.color.angle,"onUpdate:modelValue":l[7]||(l[7]=l=>e.config.border.linearGradient.color.angle=l),min:0,max:360,step:1,suffix:"deg"},null,8,["modelValue"])])),_:1}),m(_,{label:"节点",mode:"layout","default-layout":"horizontal",features:["vertical","horizontal","copy","add","remove"],list:e.config.border.linearGradient.color.stops,min:0,max:100,"default-new-value":"{}"},{default:f((e=>[m(V,{label:"节点",tooltip:"",level:2,"is-flat":!0},{default:f((()=>[m(t,{modelValue:e.item.offset,"onUpdate:modelValue":l=>e.item.offset=l,min:0,max:100,step:1,"is-inline":"",label:"位置"},null,8,["modelValue","onUpdate:modelValue"]),m(U,{modelValue:e.item.color,"onUpdate:modelValue":l=>e.item.color=l,"is-inline":"",label:"颜色"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:1},8,["list"])])),_:1})])),_:1})):p("",!0),"image"===e.config.border.type?(n(),r(V,{key:2,level:2,label:"配置方式"},{default:f((()=>[m(x,{modelValue:e.config.border.imageType,"onUpdate:modelValue":l[8]||(l[8]=l=>e.config.border.imageType=l)},{default:f((()=>[(n(!0),r(s,null,g(e.imageTypes,(e=>(n(),r(v,{key:e.id,label:e.id},{default:f((()=>[b(c(e.value),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1})):p("",!0),"image"===e.config.border.type&&"preset"===e.config.border.imageType?(n(),r(V,{key:3,level:2,label:"边框配置"},{default:f((()=>[m(I,{modelValue:e.config.border.presetImage,"onUpdate:modelValue":l[9]||(l[9]=l=>e.config.border.presetImage=l),data:e.presetImages},null,8,["modelValue","data"])])),_:1})):p("",!0),"image"===e.config.border.type&&"custom"===e.config.border.imageType?(n(),r(V,{key:4,level:2,label:"自定义边框","is-flat":!0},{default:f((()=>[m(h,{modelValue:e.config.border.customImage.source,"onUpdate:modelValue":l[10]||(l[10]=l=>e.config.border.customImage.source=l),"is-inline":"",label:"图片"},null,8,["modelValue"]),m(k,{modelValue:e.config.border.customImage.slice,"onUpdate:modelValue":l[11]||(l[11]=l=>e.config.border.customImage.slice=l),"is-inline":"",label:"切片"},null,8,["modelValue"]),m(k,{modelValue:e.config.border.customImage.width,"onUpdate:modelValue":l[12]||(l[12]=l=>e.config.border.customImage.width=l),"is-inline":"",label:"宽度"},null,8,["modelValue"]),m(k,{modelValue:e.config.border.customImage.outset,"onUpdate:modelValue":l[13]||(l[13]=l=>e.config.border.customImage.outset=l),"is-inline":"",label:"外扩"},null,8,["modelValue"]),m(I,{modelValue:e.config.border.customImage.repeat,"onUpdate:modelValue":l[14]||(l[14]=l=>e.config.border.customImage.repeat=l),data:e.repeatTypes,"is-inline":"",label:"平铺类型"},null,8,["modelValue","data"])])),_:1})):p("",!0)])),_:1},8,["modelValue"]),m(_,{label:"滤镜"},{default:f((()=>[m(V,{level:2,label:"模糊"},{default:f((()=>[m(k,{modelValue:e.config.filter.blur,"onUpdate:modelValue":l[16]||(l[16]=l=>e.config.filter.blur=l)},null,8,["modelValue"])])),_:1})])),_:1}),m(_,{label:"背景过滤器"},{default:f((()=>[m(V,{level:2,label:"磨玻璃模糊"},{default:f((()=>[m(k,{modelValue:e.config.backdropFilter.blur,"onUpdate:modelValue":l[17]||(l[17]=l=>e.config.backdropFilter.blur=l)},null,8,["modelValue"])])),_:1})])),_:1}),m(_,{tooltip:"点击图片区域可跳转至设定的超链接",label:"超链接配置"},{default:f((()=>[m(V,{level:2,label:"超链接"},{default:f((()=>[m(k,{modelValue:e.config.urlConfig.url,"onUpdate:modelValue":l[18]||(l[18]=l=>e.config.urlConfig.url=l)},null,8,["modelValue"])])),_:1}),m(V,{level:2,label:"是否新打开窗口"},{default:f((()=>[m(w,{modelValue:e.config.urlConfig.ifBlank,"onUpdate:modelValue":l[19]||(l[19]=l=>e.config.urlConfig.ifBlank=l)},null,8,["modelValue"])])),_:1})])),_:1})])};export default V;
