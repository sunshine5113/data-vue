import{a as s,ao as t}from"./index.5063c078.js";const e=function(s,t,e,a=!1){s&&t&&e&&s.addEventListener(t,e,a)},a=function(s,t,e){s&&t&&e&&s.removeEventListener(t,e,!1)};function n(s,t){if(!s||!t)return!1;if(-1!==t.indexOf(" "))throw new Error("className should not contain space.");return s.classList?s.classList.contains(t):(" "+s.className+" ").indexOf(" "+t+" ")>-1}function c(s,t){if(!s)return;let e=s.className;const a=(t||"").split(" ");for(let c=0,i=a.length;c<i;c++){const t=a[c];t&&(s.classList?s.classList.add(t):n(s,t)||(e+=" "+t))}s.classList||(s.className=e)}function i(s,t){if(!s||!t)return;const e=t.split(" ");let a=" "+s.className+" ";for(let c=0,i=e.length;c<i;c++){const t=e[c];t&&(s.classList?s.classList.remove(t):n(s,t)&&(a=a.replace(" "+t+" "," ")))}s.classList||(s.className=(a||"").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g,""))}function o(e,a,n){e&&a&&(s(a)?Object.keys(a).forEach((s=>{o(e,s,a[s])})):(a=t(a),e.style[a]=n))}export{c as a,a as b,e as o,i as r,o as s};
