import{v as e}from"./index.c84dd937.js";async function t(t){await e.get("/screen",{params:{screenId:t}});try{const e=localStorage.getItem("DataV-Preview");if(e)return JSON.parse(e)}catch(r){localStorage.removeItem("DataV-Preview")}return null}function r(t){return localStorage.setItem("DataV-Preview",JSON.stringify(t)),e.post("/screen",t)}export{t as g,r as s};
