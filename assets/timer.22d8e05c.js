var s=Object.defineProperty;var e=(i,t,a)=>t in i?s(i,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[t]=a;var o=(i,t,a)=>(e(i,typeof t!="symbol"?t+"":t,a),a);import{a0 as r,R as n}from"./AppRoot.9161bc33.js";import"./vendor.1c7e0fbb.js";class m extends r{constructor(){super("Timer",{w:300,h:56});o(this,"config",{iconStyle:{show:!0,size:1.2,color:"rgba(93,245,244,1)",marginRight:6},time:{textStyle:{fontFamily:"Microsoft Yahei",fontSize:18,color:"#fff",fontWeight:"normal"},format:"YYYY-MM-DD HH:mm:ss",duration:1e3,horizontal:"center",vertical:"center"}});o(this,"apis");o(this,"apiData");o(this,"events");o(this,"actions");this.initData()}initData(){return this.apis={},this.apiData={},this.events={},this.actions={},this}async loadData(){try{const t="",a=await n(this.id,t);this.apiData.source.config.data=JSON.stringify(a.data)}catch(t){throw t}}}export{m as Timer,m as default};
