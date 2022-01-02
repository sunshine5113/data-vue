import{f as F,a as b,j as V}from"./select-options.6e3026f4.js";import{b as B}from"./App.7eee7745.js";import{a3 as C,aH as E,aG as v,a4 as d,a9 as y,aZ as n,b1 as o,a5 as S}from"./vendor.0227b33d.js";const U=C({name:"VNumberTitleFlopProp",props:{com:{type:Object,required:!0}},setup(e){const u=E(e.com,"config"),p=v(()=>[{id:"top",value:"\u6807\u9898\u5728\u4E0A"},{id:"left",value:"\u6807\u9898\u5728\u5DE6"},{id:"bottom",value:"\u6807\u9898\u5728\u4E0B"}]);return{config:u,arrangements:p,fontFamilys:F,fontWeights:b,justifyContents:V}}}),D={class:"setting-panel-gui"};function A(e,u,p,W,j,z){const a=d("g-select"),t=d("g-field"),f=d("g-slider"),m=d("g-field-collapse"),s=d("g-input"),i=d("g-input-number"),r=d("g-color-picker"),g=d("n-switch");return S(),y("div",D,[n(m,{label:"\u5168\u5C40"},{default:o(()=>[n(t,{level:2,tooltip:"\u8BF7\u9009\u62E9\u60A8\u7CFB\u7EDF\u6709\u7684\u5B57\u4F53\uFF0C\u5982\u679C\u60A8\u7CFB\u7EDF\u65E0\u6B64\u5B57\u4F53\uFF0C\u6807\u9898\u5C06\u4F1A\u663E\u793A\u9ED8\u8BA4\u5B57\u4F53",label:"\u5B57\u4F53"},{default:o(()=>[n(a,{modelValue:e.config.global.fontFamily,"onUpdate:modelValue":u[0]||(u[0]=l=>e.config.global.fontFamily=l),data:e.fontFamilys},null,8,["modelValue","data"])]),_:1}),n(t,{level:2,label:"\u6392\u5217\u65B9\u5F0F"},{default:o(()=>[n(a,{modelValue:e.config.global.arrangement,"onUpdate:modelValue":u[1]||(u[1]=l=>e.config.global.arrangement=l),data:e.arrangements},null,8,["modelValue","data"])]),_:1}),n(t,{level:2,label:"\u95F4\u9694"},{default:o(()=>[n(f,{modelValue:e.config.global.distance,"onUpdate:modelValue":u[2]||(u[2]=l=>e.config.global.distance=l),min:-100,max:500,step:.5,suffix:"px"},null,8,["modelValue","step"])]),_:1})]),_:1}),n(m,{label:"\u6807\u9898"},{default:o(()=>[n(t,{level:2,tooltip:"\u652F\u6301\u4ECE\u6570\u636E\u4E2D\u83B7\u53D6\u6807\u9898\u5185\u5BB9\uFF0C\u8BE6\u89C1\u6570\u636E\u9762\u677F",label:"\u6807\u9898\u540D"},{default:o(()=>[n(s,{modelValue:e.config.title.content,"onUpdate:modelValue":u[3]||(u[3]=l=>e.config.title.content=l)},null,8,["modelValue"])]),_:1}),n(t,{level:2,label:"\u6587\u672C\u6837\u5F0F","is-flat":!0},{default:o(()=>[n(i,{modelValue:e.config.title.textStyle.fontSize,"onUpdate:modelValue":u[4]||(u[4]=l=>e.config.title.textStyle.fontSize=l),min:12,max:100,step:1,suffix:"px",inline:"inline",label:"\u5B57\u53F7"},null,8,["modelValue"]),n(r,{modelValue:e.config.title.textStyle.color,"onUpdate:modelValue":u[5]||(u[5]=l=>e.config.title.textStyle.color=l),inline:"inline",label:"\u5B57\u4F53\u989C\u8272"},null,8,["modelValue"]),n(a,{modelValue:e.config.title.textStyle.fontWeight,"onUpdate:modelValue":u[6]||(u[6]=l=>e.config.title.textStyle.fontWeight=l),data:e.fontWeights,inline:"inline",label:"\u5B57\u4F53\u7C97\u7EC6"},null,8,["modelValue","data"]),n(a,{modelValue:e.config.title.textStyle.textAlign,"onUpdate:modelValue":u[7]||(u[7]=l=>e.config.title.textStyle.textAlign=l),data:e.justifyContents,inline:"inline",label:"\u5BF9\u9F50\u65B9\u5F0F"},null,8,["modelValue","data"])]),_:1})]),_:1}),n(m,{label:"\u7FFB\u724C\u5668"},{default:o(()=>[n(t,{level:2,tooltip:"\u8BF7\u9009\u62E9\u60A8\u7CFB\u7EDF\u6709\u7684\u5B57\u4F53\uFF0C\u5982\u679C\u60A8\u7CFB\u7EDF\u65E0\u6B64\u5B57\u4F53\uFF0C\u6807\u9898\u5C06\u4F1A\u663E\u793A\u9ED8\u8BA4\u5B57\u4F53",label:"\u5B57\u4F53"},{default:o(()=>[n(a,{modelValue:e.config.counter.fontFamily,"onUpdate:modelValue":u[8]||(u[8]=l=>e.config.counter.fontFamily=l),data:e.fontFamilys},null,8,["modelValue","data"])]),_:1}),n(t,{level:2,label:"\u6C34\u5E73\u5BF9\u9F50"},{default:o(()=>[n(a,{modelValue:e.config.counter.justifyContent,"onUpdate:modelValue":u[9]||(u[9]=l=>e.config.counter.justifyContent=l),data:e.justifyContents},null,8,["modelValue","data"])]),_:1}),n(t,{level:2,label:"\u95F4\u8DDD","is-flat":!0},{default:o(()=>[n(i,{modelValue:e.config.counter.margin.preNum,"onUpdate:modelValue":u[10]||(u[10]=l=>e.config.counter.margin.preNum=l),min:-1e3,max:1e3,step:1,suffix:"px",inline:"inline",label:"\u524D\u7F00-\u6570\u5B57"},null,8,["modelValue"]),n(i,{modelValue:e.config.counter.margin.numSuff,"onUpdate:modelValue":u[11]||(u[11]=l=>e.config.counter.margin.numSuff=l),min:-1e3,max:1e3,step:1,suffix:"px",inline:"inline",label:"\u6570\u5B57-\u540E\u7F00"},null,8,["modelValue"])]),_:1}),n(m,{label:"\u524D\u7F00"},{default:o(()=>[n(t,{level:2,label:"\u5185\u5BB9"},{default:o(()=>[n(s,{modelValue:e.config.counter.prefix.content,"onUpdate:modelValue":u[12]||(u[12]=l=>e.config.counter.prefix.content=l)},null,8,["modelValue"])]),_:1}),n(t,{level:2,label:"\u6587\u672C\u6837\u5F0F","is-flat":!0},{default:o(()=>[n(i,{modelValue:e.config.counter.prefix.textStyle.fontSize,"onUpdate:modelValue":u[13]||(u[13]=l=>e.config.counter.prefix.textStyle.fontSize=l),min:12,max:100,step:1,suffix:"px",inline:"inline",label:"\u5B57\u53F7"},null,8,["modelValue"]),n(r,{modelValue:e.config.counter.prefix.textStyle.color,"onUpdate:modelValue":u[14]||(u[14]=l=>e.config.counter.prefix.textStyle.color=l),inline:"inline",label:"\u5B57\u4F53\u989C\u8272"},null,8,["modelValue"]),n(a,{modelValue:e.config.counter.prefix.textStyle.fontWeight,"onUpdate:modelValue":u[15]||(u[15]=l=>e.config.counter.prefix.textStyle.fontWeight=l),data:e.fontWeights,inline:"inline-single",label:"\u5B57\u4F53\u7C97\u7EC6"},null,8,["modelValue","data"])]),_:1})]),_:1}),n(m,{label:"\u540E\u7F00"},{default:o(()=>[n(t,{level:2,label:"\u5185\u5BB9"},{default:o(()=>[n(s,{modelValue:e.config.counter.suffix.content,"onUpdate:modelValue":u[16]||(u[16]=l=>e.config.counter.suffix.content=l)},null,8,["modelValue"])]),_:1}),n(t,{level:2,label:"\u6587\u672C\u6837\u5F0F","is-flat":!0},{default:o(()=>[n(i,{modelValue:e.config.counter.suffix.textStyle.fontSize,"onUpdate:modelValue":u[17]||(u[17]=l=>e.config.counter.suffix.textStyle.fontSize=l),min:12,max:100,step:1,suffix:"px",inline:"inline",label:"\u5B57\u53F7"},null,8,["modelValue"]),n(r,{modelValue:e.config.counter.suffix.textStyle.color,"onUpdate:modelValue":u[18]||(u[18]=l=>e.config.counter.suffix.textStyle.color=l),inline:"inline",label:"\u5B57\u4F53\u989C\u8272"},null,8,["modelValue"]),n(a,{modelValue:e.config.counter.suffix.textStyle.fontWeight,"onUpdate:modelValue":u[19]||(u[19]=l=>e.config.counter.suffix.textStyle.fontWeight=l),data:e.fontWeights,inline:"inline-single",label:"\u5B57\u4F53\u7C97\u7EC6"},null,8,["modelValue","data"])]),_:1})]),_:1})]),_:1}),n(m,{label:"\u6570\u5B57"},{default:o(()=>[n(m,{label:"\u6587\u672C\u6837\u5F0F"},{default:o(()=>[n(t,{level:2,label:"\u5B57\u53F7"},{default:o(()=>[n(i,{modelValue:e.config.numbers.textStyle.fontSize,"onUpdate:modelValue":u[20]||(u[20]=l=>e.config.numbers.textStyle.fontSize=l),min:12,max:100,step:1,suffix:"px"},null,8,["modelValue"])]),_:1}),n(t,{level:2,label:"\u5B57\u4F53\u989C\u8272"},{default:o(()=>[n(r,{modelValue:e.config.numbers.textStyle.color,"onUpdate:modelValue":u[21]||(u[21]=l=>e.config.numbers.textStyle.color=l)},null,8,["modelValue"])]),_:1}),n(t,{level:2,label:"\u5B57\u4F53\u7C97\u7EC6"},{default:o(()=>[n(a,{modelValue:e.config.numbers.textStyle.fontWeight,"onUpdate:modelValue":u[22]||(u[22]=l=>e.config.numbers.textStyle.fontWeight=l),data:e.fontWeights},null,8,["modelValue","data"])]),_:1})]),_:1}),n(t,{level:2,label:"\u6570\u5B57\u95F4\u9694"},{default:o(()=>[n(f,{modelValue:e.config.numbers.marginRight,"onUpdate:modelValue":u[23]||(u[23]=l=>e.config.numbers.marginRight=l),min:0,max:10,step:.5},null,8,["modelValue","step"])]),_:1}),n(t,{level:2,tooltip:"\u6CE8\u610F\uFF1A\u5B57\u4F53\u989C\u8272\u4E3A\u6E10\u53D8\u8272\u65F6\uFF0C\u5B57\u4F53\u80CC\u666F\u8272\u5C06\u4F1A\u5931\u6548\u3002",label:"\u80CC\u666F\u8272"},{default:o(()=>[n(r,{modelValue:e.config.numbers.bgColor,"onUpdate:modelValue":u[24]||(u[24]=l=>e.config.numbers.bgColor=l)},null,8,["modelValue"])]),_:1}),n(t,{level:2,label:"\u80CC\u666F\u5706\u89D2"},{default:o(()=>[n(f,{modelValue:e.config.numbers.bgRadius,"onUpdate:modelValue":u[25]||(u[25]=l=>e.config.numbers.bgRadius=l),min:0,max:1e3,step:1},null,8,["modelValue"])]),_:1}),n(t,{level:2,label:"\u5206\u9694\u7B26\u80CC\u666F"},{default:o(()=>[n(g,{value:e.config.numbers.bgSeparating,"onUpdate:value":u[26]||(u[26]=l=>e.config.numbers.bgSeparating=l)},null,8,["value"])]),_:1}),n(t,{level:2,label:"\u9ED8\u8BA4\u4F4D\u6570"},{default:o(()=>[n(f,{modelValue:e.config.numbers.digit,"onUpdate:modelValue":u[27]||(u[27]=l=>e.config.numbers.digit=l),min:0,max:100,step:1},null,8,["modelValue"])]),_:1}),n(t,{level:2,label:"\u5C0F\u6570\u70B9\u4F4D\u6570"},{default:o(()=>[n(f,{modelValue:e.config.numbers.decimal,"onUpdate:modelValue":u[28]||(u[28]=l=>e.config.numbers.decimal=l),min:0,max:8,step:1},null,8,["modelValue"])]),_:1}),n(t,{level:2,label:"\u9664\u6570"},{default:o(()=>[n(i,{modelValue:e.config.numbers.divisor,"onUpdate:modelValue":u[29]||(u[29]=l=>e.config.numbers.divisor=l),step:1},null,8,["modelValue"])]),_:1}),n(t,{level:2,label:"\u5343\u4F4D\u5206\u9694\u7B26"},{default:o(()=>[n(g,{value:e.config.numbers.separatingChart,"onUpdate:value":u[30]||(u[30]=l=>e.config.numbers.separatingChart=l)},null,8,["value"])]),_:1}),n(t,{level:2,tooltip:"\u5206\u9694\u7B26\u6700\u957F\u4E00\u4F4D\uFF0C\u8D85\u51FA\u4E00\u4F4D\u53D6\u7B2C\u4E00\u4F4D\uFF0C\u65E0\u6CD5\u4EE5\u6570\u5B57\u4E3A\u5206\u9694\u7B26",label:"\u5343\u4F4D\u5206\u9694\u7B26\u7B26\u53F7"},{default:o(()=>[n(s,{modelValue:e.config.numbers.separatingSymbol,"onUpdate:modelValue":u[31]||(u[31]=l=>e.config.numbers.separatingSymbol=l)},null,8,["modelValue"])]),_:1}),n(t,{level:2,tooltip:"\u5206\u9694\u7B26\u6700\u957F\u4E00\u4F4D\uFF0C\u8D85\u51FA\u4E00\u4F4D\u53D6\u7B2C\u4E00\u4F4D\uFF0C\u65E0\u6CD5\u4EE5\u6570\u5B57\u4E3A\u5206\u9694\u7B26",label:"\u5C0F\u6570\u5206\u9694\u7B26\u7B26\u53F7"},{default:o(()=>[n(s,{modelValue:e.config.numbers.decimalSymbol,"onUpdate:modelValue":u[32]||(u[32]=l=>e.config.numbers.decimalSymbol=l)},null,8,["modelValue"])]),_:1}),n(t,{level:2,label:"\u5B9A\u5BBD"},{default:o(()=>[n(i,{modelValue:e.config.numbers.fixedWidth,"onUpdate:modelValue":u[33]||(u[33]=l=>e.config.numbers.fixedWidth=l),min:0,max:100,step:1},null,8,["modelValue"])]),_:1}),n(t,{level:2,label:"\u5F00\u542F\u52A8\u753B"},{default:o(()=>[n(g,{value:e.config.numbers.animation,"onUpdate:value":u[34]||(u[34]=l=>e.config.numbers.animation=l)},null,8,["value"])]),_:1}),n(t,{level:2,label:"\u52A8\u753B\u65F6\u957F"},{default:o(()=>[n(i,{modelValue:e.config.numbers.duration,"onUpdate:modelValue":u[35]||(u[35]=l=>e.config.numbers.duration=l),min:0,step:500,suffix:"ms"},null,8,["modelValue"])]),_:1})]),_:1})])}var $=B(U,[["render",A]]);export{$ as default};
