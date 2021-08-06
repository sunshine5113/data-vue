import{f as l,e,a,c as i,t as o,l as n,d as t,h as d,v as u,g as m,o as s,k as f,m as g,n as x}from"./select-options.e8f9d870.js";import{a as V}from"./basic-bar.c78f6f1a.js";import{d as p,as as c,h as b,f as y,o as r,c as A,a as U,w as h,F as _,g as v,A as S,t as L,b as w}from"./index.3038f72e.js";import"./data.9bba0136.js";var k=p({name:"VBasicBarProp",props:{com:{type:Object,required:!0}},setup(p){const y=c(p.com,"config"),r=b((()=>i.filter((l=>"value"!==l.id))));return{config:y,xAxisTypes:r,handleAddSeriesItem:()=>new V(`系列${y.value.series.length+1}`),fontFamilys:l,echartsLablePositions:e,fontWeights:a,axisTypes:i,titleLocations:o,lineStyles:n,timeFormats:t,hAligns:d,valueFormats:u,legendLocations:m,orients:s,legendIcons:f,fillTypes:g,animationEasings:x}}});const W={class:"setting-panel-gui"};k.render=function(l,e,a,i,o,n){const t=y("g-select"),d=y("g-field"),u=y("g-input-number"),m=y("g-slider"),s=y("g-select-suggest"),f=y("g-color-picker"),g=y("g-field-collapse"),x=y("el-radio-button"),V=y("el-radio-group"),p=y("g-input"),c=y("el-switch"),b=y("g-select-shape");return r(),A("div",W,[U(g,{label:"全局"},{default:h((()=>[U(d,{level:2,tooltip:"请选择您系统有的字体，如果您系统无此字体，标题将会显示默认字体",label:"字体"},{default:h((()=>[U(t,{modelValue:l.config.global.fontFamily,"onUpdate:modelValue":e[1]||(e[1]=e=>l.config.global.fontFamily=e),data:l.fontFamilys},null,8,["modelValue","data"])])),_:1}),U(d,{level:2,label:"边距","is-flat":!0},{default:h((()=>[U(u,{modelValue:l.config.global.margin.top,"onUpdate:modelValue":e[2]||(e[2]=e=>l.config.global.margin.top=e),min:-1e3,max:1e3,step:1,suffix:"px",inline:"inline",label:"顶部"},null,8,["modelValue"]),U(u,{modelValue:l.config.global.margin.bottom,"onUpdate:modelValue":e[3]||(e[3]=e=>l.config.global.margin.bottom=e),min:-1e3,max:1e3,step:1,suffix:"px",inline:"inline",label:"底部"},null,8,["modelValue"]),U(u,{modelValue:l.config.global.margin.left,"onUpdate:modelValue":e[4]||(e[4]=e=>l.config.global.margin.left=e),min:-1e3,max:1e3,step:1,suffix:"px",inline:"inline",label:"左侧"},null,8,["modelValue"]),U(u,{modelValue:l.config.global.margin.right,"onUpdate:modelValue":e[5]||(e[5]=e=>l.config.global.margin.right=e),min:-1e3,max:1e3,step:1,suffix:"px",inline:"inline",label:"右侧"},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"组内间距"},{default:h((()=>[U(m,{modelValue:l.config.global.innerPadding,"onUpdate:modelValue":e[6]||(e[6]=e=>l.config.global.innerPadding=e),min:-1e3,max:1e3,step:1,suffix:"px"},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"组间间距"},{default:h((()=>[U(m,{modelValue:l.config.global.outerPadding,"onUpdate:modelValue":e[7]||(e[7]=e=>l.config.global.outerPadding=e),min:-1e3,max:1e3,step:1,suffix:"px"},null,8,["modelValue"])])),_:1}),U(d,{level:2,tooltip:"不设时自适应，可以是绝对值例如 40 或者百分数例如 60%。",label:"柱子宽度"},{default:h((()=>[U(s,{modelValue:l.config.global.barWidth,"onUpdate:modelValue":e[8]||(e[8]=e=>l.config.global.barWidth=e),data:["auto"]},null,8,["modelValue"])])),_:1}),U(g,{modelValue:l.config.global.background.show,"onUpdate:modelValue":e[10]||(e[10]=e=>l.config.global.background.show=e),toggle:!0,label:"背景色"},{default:h((()=>[U(d,{level:2,label:"颜色"},{default:h((()=>[U(f,{modelValue:l.config.global.background.color,"onUpdate:modelValue":e[9]||(e[9]=e=>l.config.global.background.color=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"])])),_:1}),U(g,{modelValue:l.config.label.show,"onUpdate:modelValue":e[17]||(e[17]=e=>l.config.label.show=e),toggle:!0,label:"柱子标注"},{default:h((()=>[U(d,{level:2,label:"位置"},{default:h((()=>[U(t,{modelValue:l.config.label.position,"onUpdate:modelValue":e[11]||(e[11]=e=>l.config.label.position=e),data:l.echartsLablePositions},null,8,["modelValue","data"])])),_:1}),U(d,{level:2,label:"文本样式","is-flat":!0},{default:h((()=>[U(u,{modelValue:l.config.label.textStyle.fontSize,"onUpdate:modelValue":e[12]||(e[12]=e=>l.config.label.textStyle.fontSize=e),min:12,max:100,step:1,suffix:"px",inline:"inline",label:"字号"},null,8,["modelValue"]),U(f,{modelValue:l.config.label.textStyle.color,"onUpdate:modelValue":e[13]||(e[13]=e=>l.config.label.textStyle.color=e),inline:"inline",label:"颜色"},null,8,["modelValue"]),U(t,{modelValue:l.config.label.textStyle.fontWeight,"onUpdate:modelValue":e[14]||(e[14]=e=>l.config.label.textStyle.fontWeight=e),data:l.fontWeights,inline:"inline",label:"字体粗细"},null,8,["modelValue","data"])])),_:1}),U(d,{level:2,label:"水平偏移"},{default:h((()=>[U(m,{modelValue:l.config.label.offsetX,"onUpdate:modelValue":e[15]||(e[15]=e=>l.config.label.offsetX=e),min:-1e3,max:1e3,step:1},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"垂直偏移"},{default:h((()=>[U(m,{modelValue:l.config.label.offsetY,"onUpdate:modelValue":e[16]||(e[16]=e=>l.config.label.offsetY=e),min:-1e3,max:1e3,step:1},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),U(g,{modelValue:l.config.xAxis.show,"onUpdate:modelValue":e[51]||(e[51]=e=>l.config.xAxis.show=e),toggle:!0,label:"X轴"},{default:h((()=>[U(d,{level:2,label:"类型"},{default:h((()=>[U(V,{modelValue:l.config.xAxis.type,"onUpdate:modelValue":e[18]||(e[18]=e=>l.config.xAxis.type=e)},{default:h((()=>[(r(!0),A(_,null,v(l.xAxisTypes,(l=>(r(),A(x,{key:l.id,label:l.id},{default:h((()=>[S(L(l.value),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),U(g,{modelValue:l.config.xAxis.title.show,"onUpdate:modelValue":e[26]||(e[26]=e=>l.config.xAxis.title.show=e),toggle:!0,label:"轴标题"},{default:h((()=>[U(d,{level:2,label:"标题显示"},{default:h((()=>[U(p,{modelValue:l.config.xAxis.title.name,"onUpdate:modelValue":e[19]||(e[19]=e=>l.config.xAxis.title.name=e)},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"位置"},{default:h((()=>[U(t,{modelValue:l.config.xAxis.title.location,"onUpdate:modelValue":e[20]||(e[20]=e=>l.config.xAxis.title.location=e),data:l.titleLocations},null,8,["modelValue","data"])])),_:1}),U(d,{level:2,label:"展示方式","is-flat":!0},{default:h((()=>[U(u,{modelValue:l.config.xAxis.title.display.rotate,"onUpdate:modelValue":e[21]||(e[21]=e=>l.config.xAxis.title.display.rotate=e),min:0,max:360,step:1,suffix:"度",inline:"inline",label:"旋转"},null,8,["modelValue"]),U(u,{modelValue:l.config.xAxis.title.display.offset,"onUpdate:modelValue":e[22]||(e[22]=e=>l.config.xAxis.title.display.offset=e),min:-1e3,max:1e3,step:1,suffix:"px",inline:"inline",label:"偏移"},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"文本样式","is-flat":!0},{default:h((()=>[U(u,{modelValue:l.config.xAxis.title.textStyle.fontSize,"onUpdate:modelValue":e[23]||(e[23]=e=>l.config.xAxis.title.textStyle.fontSize=e),min:12,max:100,step:1,suffix:"px",inline:"inline",label:"字号"},null,8,["modelValue"]),U(f,{modelValue:l.config.xAxis.title.textStyle.color,"onUpdate:modelValue":e[24]||(e[24]=e=>l.config.xAxis.title.textStyle.color=e),inline:"inline",label:"颜色"},null,8,["modelValue"]),U(t,{modelValue:l.config.xAxis.title.textStyle.fontWeight,"onUpdate:modelValue":e[25]||(e[25]=e=>l.config.xAxis.title.textStyle.fontWeight=e),data:l.fontWeights,inline:"inline",label:"字体粗细"},null,8,["modelValue","data"])])),_:1})])),_:1},8,["modelValue"]),U(g,{modelValue:l.config.xAxis.axisLine.show,"onUpdate:modelValue":e[30]||(e[30]=e=>l.config.xAxis.axisLine.show=e),toggle:!0,label:"轴线"},{default:h((()=>[U(d,{level:2,label:"类型"},{default:h((()=>[U(t,{modelValue:l.config.xAxis.axisLine.type,"onUpdate:modelValue":e[27]||(e[27]=e=>l.config.xAxis.axisLine.type=e),data:l.lineStyles},null,8,["modelValue","data"])])),_:1}),U(d,{level:2,label:"粗细"},{default:h((()=>[U(u,{modelValue:l.config.xAxis.axisLine.width,"onUpdate:modelValue":e[28]||(e[28]=e=>l.config.xAxis.axisLine.width=e),min:0,max:100,step:1,suffix:"px"},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"颜色"},{default:h((()=>[U(f,{modelValue:l.config.xAxis.axisLine.color,"onUpdate:modelValue":e[29]||(e[29]=e=>l.config.xAxis.axisLine.color=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),U(g,{modelValue:l.config.xAxis.axisTick.show,"onUpdate:modelValue":e[34]||(e[34]=e=>l.config.xAxis.axisTick.show=e),toggle:!0,label:"轴刻度"},{default:h((()=>[U(d,{level:2,label:"类型"},{default:h((()=>[U(t,{modelValue:l.config.xAxis.axisTick.type,"onUpdate:modelValue":e[31]||(e[31]=e=>l.config.xAxis.axisTick.type=e),data:l.lineStyles},null,8,["modelValue","data"])])),_:1}),U(d,{level:2,label:"粗细"},{default:h((()=>[U(u,{modelValue:l.config.xAxis.axisTick.width,"onUpdate:modelValue":e[32]||(e[32]=e=>l.config.xAxis.axisTick.width=e),min:0,max:100,step:1,suffix:"px"},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"颜色"},{default:h((()=>[U(f,{modelValue:l.config.xAxis.axisTick.color,"onUpdate:modelValue":e[33]||(e[33]=e=>l.config.xAxis.axisTick.color=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),U(g,{modelValue:l.config.xAxis.axisLabel.show,"onUpdate:modelValue":e[44]||(e[44]=e=>l.config.xAxis.axisLabel.show=e),toggle:!0,label:"轴标签"},{default:h((()=>["time"===l.config.xAxis.type?(r(),A(d,{key:0,level:2,tooltip:"时间请参照 YYYY/MM/DD HH:mm:ss",label:"显示格式"},{default:h((()=>[U(t,{modelValue:l.config.xAxis.axisLabel.timeFormat,"onUpdate:modelValue":e[35]||(e[35]=e=>l.config.xAxis.axisLabel.timeFormat=e),data:l.timeFormats},null,8,["modelValue","data"])])),_:1})):w("",!0),U(d,{level:2,label:"两端留白"},{default:h((()=>[U(c,{modelValue:l.config.xAxis.axisLabel.boundaryGap,"onUpdate:modelValue":e[36]||(e[36]=e=>l.config.xAxis.axisLabel.boundaryGap=e)},null,8,["modelValue"])])),_:1}),U(d,{level:2,tooltip:"默认会采用标签不重叠的策略间隔显示标签，可以设置成 0 强制显示所有标签。",label:"间隔"},{default:h((()=>[U(s,{modelValue:l.config.xAxis.axisLabel.interval,"onUpdate:modelValue":e[37]||(e[37]=e=>l.config.xAxis.axisLabel.interval=e),data:["auto","0","1","2"]},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"展示方式","is-flat":!0},{default:h((()=>[U(u,{modelValue:l.config.xAxis.axisLabel.display.rotate,"onUpdate:modelValue":e[38]||(e[38]=e=>l.config.xAxis.axisLabel.display.rotate=e),min:0,max:100,step:1,suffix:"度",inline:"inline",label:"旋转"},null,8,["modelValue"]),U(u,{modelValue:l.config.xAxis.axisLabel.display.margin,"onUpdate:modelValue":e[39]||(e[39]=e=>l.config.xAxis.axisLabel.display.margin=e),min:-1e3,max:1e3,step:1,suffix:"px",inline:"inline",label:"偏移"},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"对齐方式"},{default:h((()=>[U(t,{modelValue:l.config.xAxis.axisLabel.align,"onUpdate:modelValue":e[40]||(e[40]=e=>l.config.xAxis.axisLabel.align=e),data:l.hAligns},null,8,["modelValue","data"])])),_:1}),U(d,{level:2,label:"文本样式","is-flat":!0},{default:h((()=>[U(u,{modelValue:l.config.xAxis.axisLabel.textStyle.fontSize,"onUpdate:modelValue":e[41]||(e[41]=e=>l.config.xAxis.axisLabel.textStyle.fontSize=e),min:12,max:100,step:1,suffix:"px",inline:"inline",label:"字号"},null,8,["modelValue"]),U(f,{modelValue:l.config.xAxis.axisLabel.textStyle.color,"onUpdate:modelValue":e[42]||(e[42]=e=>l.config.xAxis.axisLabel.textStyle.color=e),inline:"inline",label:"颜色"},null,8,["modelValue"]),U(t,{modelValue:l.config.xAxis.axisLabel.textStyle.fontWeight,"onUpdate:modelValue":e[43]||(e[43]=e=>l.config.xAxis.axisLabel.textStyle.fontWeight=e),data:l.fontWeights,inline:"inline",label:"字体粗细"},null,8,["modelValue","data"])])),_:1})])),_:1},8,["modelValue"]),U(g,{modelValue:l.config.xAxis.grid.show,"onUpdate:modelValue":e[50]||(e[50]=e=>l.config.xAxis.grid.show=e),toggle:!0,label:"网格线"},{default:h((()=>[U(d,{level:2,label:"线型样式","is-flat":!0},{default:h((()=>[U(t,{modelValue:l.config.xAxis.grid.line.type,"onUpdate:modelValue":e[45]||(e[45]=e=>l.config.xAxis.grid.line.type=e),data:l.lineStyles,inline:"inline",label:"类型"},null,8,["modelValue","data"]),U(u,{modelValue:l.config.xAxis.grid.line.width,"onUpdate:modelValue":e[46]||(e[46]=e=>l.config.xAxis.grid.line.width=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"粗细"},null,8,["modelValue"]),U(f,{modelValue:l.config.xAxis.grid.line.color,"onUpdate:modelValue":e[47]||(e[47]=e=>l.config.xAxis.grid.line.color=e),inline:"inline-single",label:"颜色"},null,8,["modelValue"]),"dashed"===l.config.xAxis.grid.line.type?(r(),A(u,{key:0,modelValue:l.config.xAxis.grid.line.dashedLength,"onUpdate:modelValue":e[48]||(e[48]=e=>l.config.xAxis.grid.line.dashedLength=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"长度"},null,8,["modelValue"])):w("",!0),"dashed"===l.config.xAxis.grid.line.type?(r(),A(u,{key:1,modelValue:l.config.xAxis.grid.line.dashedSpace,"onUpdate:modelValue":e[49]||(e[49]=e=>l.config.xAxis.grid.line.dashedSpace=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"间距"},null,8,["modelValue"])):w("",!0)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),U(g,{modelValue:l.config.yAxis.show,"onUpdate:modelValue":e[86]||(e[86]=e=>l.config.yAxis.show=e),toggle:!0,label:"Y轴"},{default:h((()=>[U(d,{level:2,label:"显示范围","is-flat":!0},{default:h((()=>[U(s,{modelValue:l.config.yAxis.extent.min,"onUpdate:modelValue":e[52]||(e[52]=e=>l.config.yAxis.extent.min=e),data:["auto","dataMin"],inline:"inline",label:"最小值"},null,8,["modelValue"]),U(s,{modelValue:l.config.yAxis.extent.max,"onUpdate:modelValue":e[53]||(e[53]=e=>l.config.yAxis.extent.max=e),data:["auto","dataMax"],inline:"inline",label:"最大值"},null,8,["modelValue"])])),_:1}),U(d,{level:2,tooltip:"这是个预估值，实际显示会做调整，可以设置成 0 强制显示所有标签。",label:"标签数量"},{default:h((()=>[U(u,{modelValue:l.config.yAxis.splitNumber,"onUpdate:modelValue":e[54]||(e[54]=e=>l.config.yAxis.splitNumber=e),min:0,max:100,step:1},null,8,["modelValue"])])),_:1}),U(g,{modelValue:l.config.yAxis.title.show,"onUpdate:modelValue":e[62]||(e[62]=e=>l.config.yAxis.title.show=e),toggle:!0,label:"轴标题"},{default:h((()=>[U(d,{level:2,label:"标题显示"},{default:h((()=>[U(p,{modelValue:l.config.yAxis.title.name,"onUpdate:modelValue":e[55]||(e[55]=e=>l.config.yAxis.title.name=e)},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"位置"},{default:h((()=>[U(t,{modelValue:l.config.yAxis.title.location,"onUpdate:modelValue":e[56]||(e[56]=e=>l.config.yAxis.title.location=e),data:l.titleLocations},null,8,["modelValue","data"])])),_:1}),U(d,{level:2,label:"展示方式","is-flat":!0},{default:h((()=>[U(u,{modelValue:l.config.yAxis.title.display.rotate,"onUpdate:modelValue":e[57]||(e[57]=e=>l.config.yAxis.title.display.rotate=e),min:0,max:360,step:1,suffix:"度",inline:"inline",label:"旋转"},null,8,["modelValue"]),U(u,{modelValue:l.config.yAxis.title.display.offset,"onUpdate:modelValue":e[58]||(e[58]=e=>l.config.yAxis.title.display.offset=e),min:-1e3,max:1e3,step:1,suffix:"px",inline:"inline",label:"偏移"},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"文本样式","is-flat":!0},{default:h((()=>[U(u,{modelValue:l.config.yAxis.title.textStyle.fontSize,"onUpdate:modelValue":e[59]||(e[59]=e=>l.config.yAxis.title.textStyle.fontSize=e),min:12,max:100,step:1,suffix:"px",inline:"inline",label:"字号"},null,8,["modelValue"]),U(f,{modelValue:l.config.yAxis.title.textStyle.color,"onUpdate:modelValue":e[60]||(e[60]=e=>l.config.yAxis.title.textStyle.color=e),inline:"inline",label:"颜色"},null,8,["modelValue"]),U(t,{modelValue:l.config.yAxis.title.textStyle.fontWeight,"onUpdate:modelValue":e[61]||(e[61]=e=>l.config.yAxis.title.textStyle.fontWeight=e),data:l.fontWeights,inline:"inline",label:"字体粗细"},null,8,["modelValue","data"])])),_:1})])),_:1},8,["modelValue"]),U(g,{modelValue:l.config.yAxis.axisLine.show,"onUpdate:modelValue":e[66]||(e[66]=e=>l.config.yAxis.axisLine.show=e),toggle:!0,label:"轴线"},{default:h((()=>[U(d,{level:2,label:"类型"},{default:h((()=>[U(t,{modelValue:l.config.yAxis.axisLine.type,"onUpdate:modelValue":e[63]||(e[63]=e=>l.config.yAxis.axisLine.type=e),data:l.lineStyles},null,8,["modelValue","data"])])),_:1}),U(d,{level:2,label:"粗细"},{default:h((()=>[U(u,{modelValue:l.config.yAxis.axisLine.width,"onUpdate:modelValue":e[64]||(e[64]=e=>l.config.yAxis.axisLine.width=e),min:0,max:100,step:1,suffix:"px"},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"颜色"},{default:h((()=>[U(f,{modelValue:l.config.yAxis.axisLine.color,"onUpdate:modelValue":e[65]||(e[65]=e=>l.config.yAxis.axisLine.color=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),U(g,{modelValue:l.config.yAxis.axisTick.show,"onUpdate:modelValue":e[70]||(e[70]=e=>l.config.yAxis.axisTick.show=e),toggle:!0,label:"轴刻度"},{default:h((()=>[U(d,{level:2,label:"类型"},{default:h((()=>[U(t,{modelValue:l.config.yAxis.axisTick.type,"onUpdate:modelValue":e[67]||(e[67]=e=>l.config.yAxis.axisTick.type=e),data:l.lineStyles},null,8,["modelValue","data"])])),_:1}),U(d,{level:2,label:"粗细"},{default:h((()=>[U(u,{modelValue:l.config.yAxis.axisTick.width,"onUpdate:modelValue":e[68]||(e[68]=e=>l.config.yAxis.axisTick.width=e),min:0,max:100,step:1,suffix:"px"},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"颜色"},{default:h((()=>[U(f,{modelValue:l.config.yAxis.axisTick.color,"onUpdate:modelValue":e[69]||(e[69]=e=>l.config.yAxis.axisTick.color=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),U(g,{modelValue:l.config.yAxis.axisLabel.show,"onUpdate:modelValue":e[79]||(e[79]=e=>l.config.yAxis.axisLabel.show=e),toggle:!0,label:"轴标签"},{default:h((()=>[U(d,{level:2,tooltip:"整数参照 d, 浮点参照 .1f",label:"显示格式"},{default:h((()=>[U(t,{modelValue:l.config.yAxis.axisLabel.valueFormat,"onUpdate:modelValue":e[71]||(e[71]=e=>l.config.yAxis.axisLabel.valueFormat=e),data:l.valueFormats},null,8,["modelValue","data"])])),_:1}),U(d,{level:2,label:"两端间距"},{default:h((()=>[U(u,{modelValue:l.config.yAxis.axisLabel.boundaryGap,"onUpdate:modelValue":e[72]||(e[72]=e=>l.config.yAxis.axisLabel.boundaryGap=e),min:0,max:100,step:1,suffix:"%"},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"展示方式","is-flat":!0},{default:h((()=>[U(u,{modelValue:l.config.yAxis.axisLabel.display.rotate,"onUpdate:modelValue":e[73]||(e[73]=e=>l.config.yAxis.axisLabel.display.rotate=e),min:0,max:360,step:1,suffix:"度",inline:"inline",label:"旋转"},null,8,["modelValue"]),U(u,{modelValue:l.config.yAxis.axisLabel.display.margin,"onUpdate:modelValue":e[74]||(e[74]=e=>l.config.yAxis.axisLabel.display.margin=e),min:-1e3,max:1e3,step:1,suffix:"px",inline:"inline",label:"偏移"},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"对齐方式"},{default:h((()=>[U(t,{modelValue:l.config.yAxis.axisLabel.align,"onUpdate:modelValue":e[75]||(e[75]=e=>l.config.yAxis.axisLabel.align=e),data:l.hAligns},null,8,["modelValue","data"])])),_:1}),U(d,{level:2,label:"文本样式","is-flat":!0},{default:h((()=>[U(u,{modelValue:l.config.yAxis.axisLabel.textStyle.fontSize,"onUpdate:modelValue":e[76]||(e[76]=e=>l.config.yAxis.axisLabel.textStyle.fontSize=e),min:12,max:100,step:1,suffix:"px",inline:"inline",label:"字号"},null,8,["modelValue"]),U(f,{modelValue:l.config.yAxis.axisLabel.textStyle.color,"onUpdate:modelValue":e[77]||(e[77]=e=>l.config.yAxis.axisLabel.textStyle.color=e),inline:"inline",label:"颜色"},null,8,["modelValue"]),U(t,{modelValue:l.config.yAxis.axisLabel.textStyle.fontWeight,"onUpdate:modelValue":e[78]||(e[78]=e=>l.config.yAxis.axisLabel.textStyle.fontWeight=e),data:l.fontWeights,inline:"inline",label:"字体粗细"},null,8,["modelValue","data"])])),_:1})])),_:1},8,["modelValue"]),U(g,{modelValue:l.config.yAxis.grid.show,"onUpdate:modelValue":e[85]||(e[85]=e=>l.config.yAxis.grid.show=e),toggle:!0,label:"网格线"},{default:h((()=>[U(d,{level:2,label:"线型样式","is-flat":!0},{default:h((()=>[U(t,{modelValue:l.config.yAxis.grid.line.type,"onUpdate:modelValue":e[80]||(e[80]=e=>l.config.yAxis.grid.line.type=e),data:l.lineStyles,inline:"inline",label:"类型"},null,8,["modelValue","data"]),U(u,{modelValue:l.config.yAxis.grid.line.width,"onUpdate:modelValue":e[81]||(e[81]=e=>l.config.yAxis.grid.line.width=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"粗细"},null,8,["modelValue"]),U(f,{modelValue:l.config.yAxis.grid.line.color,"onUpdate:modelValue":e[82]||(e[82]=e=>l.config.yAxis.grid.line.color=e),inline:"inline-single",label:"颜色"},null,8,["modelValue"]),"dashed"===l.config.yAxis.grid.line.type?(r(),A(u,{key:0,modelValue:l.config.yAxis.grid.line.dashedLength,"onUpdate:modelValue":e[83]||(e[83]=e=>l.config.yAxis.grid.line.dashedLength=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"长度"},null,8,["modelValue"])):w("",!0),"dashed"===l.config.yAxis.grid.line.type?(r(),A(u,{key:1,modelValue:l.config.yAxis.grid.line.dashedSpace,"onUpdate:modelValue":e[84]||(e[84]=e=>l.config.yAxis.grid.line.dashedSpace=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"间距"},null,8,["modelValue"])):w("",!0)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),U(g,{modelValue:l.config.tooltip.show,"onUpdate:modelValue":e[99]||(e[99]=e=>l.config.tooltip.show=e),toggle:!0,label:"提示框"},{default:h((()=>[U(g,{label:"文本样式"},{default:h((()=>[U(d,{level:2,label:"字号"},{default:h((()=>[U(u,{modelValue:l.config.tooltip.textStyle.fontSize,"onUpdate:modelValue":e[87]||(e[87]=e=>l.config.tooltip.textStyle.fontSize=e),min:12,max:100,step:1,suffix:"px"},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"颜色"},{default:h((()=>[U(f,{modelValue:l.config.tooltip.textStyle.color,"onUpdate:modelValue":e[88]||(e[88]=e=>l.config.tooltip.textStyle.color=e)},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"字体粗细"},{default:h((()=>[U(t,{modelValue:l.config.tooltip.textStyle.fontWeight,"onUpdate:modelValue":e[89]||(e[89]=e=>l.config.tooltip.textStyle.fontWeight=e),data:l.fontWeights},null,8,["modelValue","data"])])),_:1})])),_:1}),U(g,{label:"弹框背景"},{default:h((()=>[U(d,{level:2,label:"背景边距","is-flat":!0},{default:h((()=>[U(u,{modelValue:l.config.tooltip.background.padding.h,"onUpdate:modelValue":e[90]||(e[90]=e=>l.config.tooltip.background.padding.h=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"水平"},null,8,["modelValue"]),U(u,{modelValue:l.config.tooltip.background.padding.v,"onUpdate:modelValue":e[91]||(e[91]=e=>l.config.tooltip.background.padding.v=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"垂直"},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"背景色"},{default:h((()=>[U(f,{modelValue:l.config.tooltip.background.color,"onUpdate:modelValue":e[92]||(e[92]=e=>l.config.tooltip.background.color=e)},null,8,["modelValue"])])),_:1})])),_:1}),U(g,{modelValue:l.config.tooltip.pointer.show,"onUpdate:modelValue":e[98]||(e[98]=e=>l.config.tooltip.pointer.show=e),toggle:!0,label:"轴指示器"},{default:h((()=>[U(d,{level:2,label:"线型样式","is-flat":!0},{default:h((()=>[U(t,{modelValue:l.config.tooltip.pointer.line.type,"onUpdate:modelValue":e[93]||(e[93]=e=>l.config.tooltip.pointer.line.type=e),data:l.lineStyles,inline:"inline",label:"类型"},null,8,["modelValue","data"]),U(u,{modelValue:l.config.tooltip.pointer.line.width,"onUpdate:modelValue":e[94]||(e[94]=e=>l.config.tooltip.pointer.line.width=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"粗细"},null,8,["modelValue"]),U(f,{modelValue:l.config.tooltip.pointer.line.color,"onUpdate:modelValue":e[95]||(e[95]=e=>l.config.tooltip.pointer.line.color=e),inline:"inline-single",label:"颜色"},null,8,["modelValue"]),"dashed"===l.config.tooltip.pointer.line.type?(r(),A(u,{key:0,modelValue:l.config.tooltip.pointer.line.dashedLength,"onUpdate:modelValue":e[96]||(e[96]=e=>l.config.tooltip.pointer.line.dashedLength=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"长度"},null,8,["modelValue"])):w("",!0),"dashed"===l.config.tooltip.pointer.line.type?(r(),A(u,{key:1,modelValue:l.config.tooltip.pointer.line.dashedSpace,"onUpdate:modelValue":e[97]||(e[97]=e=>l.config.tooltip.pointer.line.dashedSpace=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"间距"},null,8,["modelValue"])):w("",!0)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),U(g,{modelValue:l.config.legend.show,"onUpdate:modelValue":e[117]||(e[117]=e=>l.config.legend.show=e),toggle:!0,label:"图例"},{default:h((()=>[U(d,{level:2,label:"位置"},{default:h((()=>[U(t,{modelValue:l.config.legend.position,"onUpdate:modelValue":e[100]||(e[100]=e=>l.config.legend.position=e),data:l.legendLocations},null,8,["modelValue","data"])])),_:1}),U(d,{level:2,label:"布局方式"},{default:h((()=>[U(V,{modelValue:l.config.legend.orient,"onUpdate:modelValue":e[101]||(e[101]=e=>l.config.legend.orient=e)},{default:h((()=>[(r(!0),A(_,null,v(l.orients,(l=>(r(),A(x,{key:l.id,label:l.id},{default:h((()=>[S(L(l.value),1)])),_:2},1032,["label"])))),128))])),_:1},8,["modelValue"])])),_:1}),U(d,{level:2,label:"文本样式","is-flat":!0},{default:h((()=>[U(u,{modelValue:l.config.legend.textStyle.fontSize,"onUpdate:modelValue":e[102]||(e[102]=e=>l.config.legend.textStyle.fontSize=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"字号"},null,8,["modelValue"]),U(f,{modelValue:l.config.legend.textStyle.color,"onUpdate:modelValue":e[103]||(e[103]=e=>l.config.legend.textStyle.color=e),inline:"inline",label:"颜色"},null,8,["modelValue"]),U(t,{modelValue:l.config.legend.textStyle.fontWeight,"onUpdate:modelValue":e[104]||(e[104]=e=>l.config.legend.textStyle.fontWeight=e),data:l.fontWeights,inline:"inline-single",label:"字体粗细"},null,8,["modelValue","data"])])),_:1}),U(g,{modelValue:l.config.legend.symbol.show,"onUpdate:modelValue":e[109]||(e[109]=e=>l.config.legend.symbol.show=e),toggle:!0,label:"图例图标"},{default:h((()=>[U(d,{level:2,label:"图标"},{default:h((()=>[U(b,{modelValue:l.config.legend.symbol.icon,"onUpdate:modelValue":e[105]||(e[105]=e=>l.config.legend.symbol.icon=e),shapes:l.legendIcons},null,8,["modelValue","shapes"])])),_:1}),U(d,{level:2,label:"宽度"},{default:h((()=>[U(u,{modelValue:l.config.legend.symbol.width,"onUpdate:modelValue":e[106]||(e[106]=e=>l.config.legend.symbol.width=e),min:0,max:100,step:1,suffix:"px"},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"高度"},{default:h((()=>[U(u,{modelValue:l.config.legend.symbol.height,"onUpdate:modelValue":e[107]||(e[107]=e=>l.config.legend.symbol.height=e),min:0,max:100,step:1,suffix:"px"},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"间隔"},{default:h((()=>[U(u,{modelValue:l.config.legend.symbol.gap,"onUpdate:modelValue":e[108]||(e[108]=e=>l.config.legend.symbol.gap=e),min:-1e3,max:1e3,step:1,suffix:"px"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"]),U(g,{modelValue:l.config.legend.page.enabled,"onUpdate:modelValue":e[116]||(e[116]=e=>l.config.legend.page.enabled=e),toggle:!0,label:"翻页功能"},{default:h((()=>[U(d,{level:2,label:"容器尺寸","is-flat":!0},{default:h((()=>[U(u,{modelValue:l.config.legend.page.size.width,"onUpdate:modelValue":e[110]||(e[110]=e=>l.config.legend.page.size.width=e),min:0,max:1e3,step:1,suffix:"px",inline:"inline",label:"宽度"},null,8,["modelValue"]),U(u,{modelValue:l.config.legend.page.size.height,"onUpdate:modelValue":e[111]||(e[111]=e=>l.config.legend.page.size.height=e),min:0,max:1e3,step:1,suffix:"px",inline:"inline",label:"高度"},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"翻页按钮","is-flat":!0},{default:h((()=>[U(u,{modelValue:l.config.legend.page.button.size,"onUpdate:modelValue":e[112]||(e[112]=e=>l.config.legend.page.button.size=e),min:0,max:100,step:1,suffix:"px",inline:"inline",label:"尺寸"},null,8,["modelValue"]),U(f,{modelValue:l.config.legend.page.button.color,"onUpdate:modelValue":e[113]||(e[113]=e=>l.config.legend.page.button.color=e),inline:"inline",label:"颜色"},null,8,["modelValue"]),U(f,{modelValue:l.config.legend.page.button.inactiveColor,"onUpdate:modelValue":e[114]||(e[114]=e=>l.config.legend.page.button.inactiveColor=e),inline:"inline-single",label:"禁用颜色"},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"页码颜色"},{default:h((()=>[U(f,{modelValue:l.config.legend.page.pageNumColor,"onUpdate:modelValue":e[115]||(e[115]=e=>l.config.legend.page.pageNumColor=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["modelValue"]),U(g,{label:"系列",mode:"layout","default-layout":"horizontal",features:["vertical","horizontal","copy","add","remove"],list:l.config.series,min:1,max:5,tab:"系列","add-item":l.handleAddSeriesItem},{default:h((e=>[U(d,{level:2,label:"系列名称"},{default:h((()=>[U(p,{modelValue:e.item.name,"onUpdate:modelValue":l=>e.item.name=l},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),U(g,{label:"颜色配置"},{default:h((()=>[U(d,{level:2,label:"填充类型"},{default:h((()=>[U(V,{modelValue:e.item.color.type,"onUpdate:modelValue":l=>e.item.color.type=l},{default:h((()=>[(r(!0),A(_,null,v(l.fillTypes,(l=>(r(),A(x,{key:l.id,label:l.id},{default:h((()=>[S(L(l.value),1)])),_:2},1032,["label"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue"])])),_:2},1024),"solid"===e.item.color.type?(r(),A(d,{key:0,level:2,label:"颜色"},{default:h((()=>[U(f,{modelValue:e.item.color.value,"onUpdate:modelValue":l=>e.item.color.value=l},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)):w("",!0),"gradient"===e.item.color.type?(r(),A(d,{key:1,level:2,label:"开始颜色"},{default:h((()=>[U(f,{modelValue:e.item.color.from,"onUpdate:modelValue":l=>e.item.color.from=l},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)):w("",!0),"gradient"===e.item.color.type?(r(),A(d,{key:2,level:2,label:"结束颜色"},{default:h((()=>[U(f,{modelValue:e.item.color.to,"onUpdate:modelValue":l=>e.item.color.to=l},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)):w("",!0)])),_:2},1024)])),_:1},8,["list","add-item"]),U(g,{modelValue:l.config.animation.enabled,"onUpdate:modelValue":e[121]||(e[121]=e=>l.config.animation.enabled=e),toggle:!0,label:"动画"},{default:h((()=>[U(d,{level:2,label:"持续时间"},{default:h((()=>[U(u,{modelValue:l.config.animation.duration,"onUpdate:modelValue":e[118]||(e[118]=e=>l.config.animation.duration=e),min:0,step:100,suffix:"ms"},null,8,["modelValue"])])),_:1}),U(d,{level:2,label:"缓动效果"},{default:h((()=>[U(t,{modelValue:l.config.animation.easing,"onUpdate:modelValue":e[119]||(e[119]=e=>l.config.animation.easing=e),data:l.animationEasings},null,8,["modelValue","data"])])),_:1}),U(d,{level:2,label:"延迟"},{default:h((()=>[U(u,{modelValue:l.config.animation.delay,"onUpdate:modelValue":e[120]||(e[120]=e=>l.config.animation.delay=e),min:0,step:100,suffix:"ms"},null,8,["modelValue"])])),_:1})])),_:1},8,["modelValue"])])};export default k;
