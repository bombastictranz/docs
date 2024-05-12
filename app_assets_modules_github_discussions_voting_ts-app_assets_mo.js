"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_discussions_voting_ts-app_assets_modules_github_has-interactions_ts-d3be73"],{27280:(e,t,n)=>{var o=n(80810),r=n(36071);let i=async(e,t,n,o)=>{let r=new FormData;return!0===o&&r.append("upvote","true"),await fetch(e,{body:"delete"===n?"":r,method:n,mode:"same-origin",headers:{"Scoped-CSRF-Token":t}})},u=class VoteCountElement{getLabel(){return this.voteCountElement?.getAttribute("data-upvote-label")||""}getText(){return this.voteCountElement?.textContent||""}constructor(e){this.voteCountElement=e}},a=class VoteFormElement{isUpvoted(){let e=this.voteForm.getAttribute("data-upvoted");return"true"===e}getCsrfDeleteInputValue(){let e=this.voteForm.querySelector(".js-data-url-delete-csrf");return e?e.value:""}getCsrfPutInputValue(){let e=this.voteForm.querySelector(".js-data-url-put-csrf");return e?e.value:""}simulateUpvote(){this.voteForm.setAttribute("data-upvoted","true"),this.voteForm.getAttribute("data-new-upvote")&&(this.voteForm.querySelector(".js-upvote-button")?.classList.add("user-has-reacted","color-bg-accent"),this.voteForm.querySelector(".js-upvote-button")?.classList.remove("color-fg-muted")),this.voteForm.classList.add("is-upvoted"),this.voteButton?.setAttribute("aria-label",this.upvotedCountElement.getLabel()),this.voteButton?.setAttribute("aria-pressed","true"),(0,o.x)(`${this.upvotedCountElement.getText()} Upvotes`)}simulateUpvoteDeletion(){this.voteForm.setAttribute("data-upvoted","false"),this.voteForm.getAttribute("data-new-upvote")&&(this.voteForm.querySelector(".js-upvote-button")?.classList.remove("user-has-reacted","color-bg-accent"),this.voteForm.querySelector(".js-upvote-button")?.classList.add("color-fg-muted")),this.voteForm.classList.remove("is-upvoted"),this.voteButton?.setAttribute("aria-label",this.defaultVoteCountElement.getLabel()),this.voteButton?.setAttribute("aria-pressed","false"),(0,o.x)(`${this.defaultVoteCountElement.getText()} Upvotes`)}displayUpVoteError(e){let t=this.voteForm.querySelector(".js-upvote-error");t instanceof HTMLElement&&(t.textContent=e,t.hidden=!1)}hideVoteErrors(){let e=this.voteForm.querySelector(".js-upvote-error");e instanceof HTMLElement&&(e.hidden=!0)}constructor(e){this.voteForm=e,this.voteButton=this.voteForm.querySelector(".js-upvote-button"),this.defaultVoteCountElement=new u(e.querySelector(".js-default-vote-count")),this.upvotedCountElement=new u(e.querySelector(".js-upvoted-vote-count")),this.url=this.voteForm.getAttribute("data-url")||""}},s=class Upvote{animateUpvote(e){e?this.voteFormElement.simulateUpvoteDeletion():this.voteFormElement.simulateUpvote()}animateUpvoteUndo(e){e?this.voteFormElement.simulateUpvote():this.voteFormElement.simulateUpvoteDeletion()}async click(){this.voteFormElement.hideVoteErrors();let e=this.voteFormElement.isUpvoted(),t=e?this.voteFormElement.getCsrfDeleteInputValue():this.voteFormElement.getCsrfPutInputValue(),n=e?"delete":"put";this.animateUpvote(e);let o=await i(this.voteFormElement.url,t,n,!e);if(!o.ok&&422===o.status){let t=await o.json();this.voteFormElement.displayUpVoteError(t.error),this.animateUpvoteUndo(e)}}constructor(e){this.voteFormElement=e}};(0,r.N7)(".js-upvote-button",e=>{if(!(e instanceof HTMLElement)||!(e.closest(".discussion-vote-form") instanceof HTMLElement))return;let t=new s(new a(e.closest(".discussion-vote-form")));e.addEventListener("click",async()=>{await t.click()})})},97390:(e,t,n)=>{let o,r,i;n.d(t,{M:()=>s,T:()=>l});var u=n(14840),a=n(80702);function s(e,t=!1,n=!1){var s;return!n&&l(e)||function(e,t){let n=o instanceof Element?o:e&&e.ownerDocument&&e.ownerDocument.activeElement?e.ownerDocument.activeElement:null;if(null===n||t&&n===e)return!1;let r=n===e&&(0,a.sw)(n);if(r)return!0;let s=e.contains(n)&&!function(e){if(e instanceof u.Z)return!0;let t=e instanceof HTMLAnchorElement||e instanceof HTMLButtonElement,n=e.parentElement?.classList.contains("task-list-item");if(t&&n)return!0;if(!(i instanceof Element))return!1;let o=e.closest(c);if(!o)return!1;let r=i.closest(c);return o===r}(n);if(s)return!0;let l=i instanceof Element&&e.contains(i)&&!!i.closest("details[open] > summary");return l}(e,t)||(s=e).matches(":active:enabled")||s.contains(r)||!!(e.closest(".is-dirty")||e.querySelector(".is-dirty"))}function l(e){for(let t of e.querySelectorAll("input, textarea"))if((t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&function(e){if(e instanceof HTMLInputElement&&("checkbox"===e.type||"radio"===e.type)){if(e.checked!==e.defaultChecked)return!0}else if(e.value!==e.defaultValue)return!0;return!1}(t))return!0;return!1}document.addEventListener("mousedown",function(e){r=e.target},!0),document.addEventListener("mouseup",function(e){r=null,i=e.target},!0),document.addEventListener("contextmenu",function(e){r=null,i=e.target},!0),document.addEventListener("dragend",function(){r=null},!0);let c="a[href], button"},40578:(e,t,n)=>{let o;function r(){if(!o)throw Error("Client env was requested before it was loaded. This likely means you are attempting to use client env at the module level in SSR, which is not supported. Please move your client env usage into a function.");return o}function i(){return o?.locale??"en-US"}n.d(t,{Kd:()=>i,dU:()=>r}),function(){if("undefined"!=typeof document){let e=document.getElementById("client-env");if(e)try{o=JSON.parse(e.textContent||"")}catch(e){console.error("Error parsing client-env",e)}}}()},87274:(e,t,n)=>{n.d(t,{C:()=>i,x:()=>r});var o=n(71207);let r=o.n4?.readyState==="interactive"||o.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{o.n4?.addEventListener("DOMContentLoaded",()=>{e()})}),i=o.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{o.iG?.addEventListener("load",e)})},18515:(e,t,n)=>{n.d(t,{$:()=>l,c:()=>s});var o=n(15205),r=n(40578),i=n(71207);function u(){let e=(0,r.dU)().featureFlags,t=e.map(e=>e.toUpperCase());return new Set(t)}let a=i.W6?u:(0,o.Z)(u);function s(e){return a().has(e.toUpperCase())}let l={isFeatureEnabled:s}},80702:(e,t,n)=>{n.d(t,{Bt:()=>i,DN:()=>a,KL:()=>c,Se:()=>u,qC:()=>m,sw:()=>s});var o=n(31347);function r(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:n}))}function i(e,t){t&&(function(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}(e,t),(0,o.j)(t)),r(e,"submit",!0)&&e.submit()}function u(e,t){if("boolean"==typeof t){if(e instanceof HTMLInputElement)e.checked=t;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}r(e,"change",!1)}function a(e,t){for(let n in t){let o=t[n],r=e.elements.namedItem(n);r instanceof HTMLInputElement?r.value=o:r instanceof HTMLTextAreaElement&&(r.value=o)}}function s(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),n=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==n&&"reset"!==n||e.isContentEditable}function l(e){return new URLSearchParams(e)}function c(e,t){let n=new URLSearchParams(e.search),o=l(t);for(let[e,t]of o)n.append(e,t);return n.toString()}function m(e){return l(new FormData(e)).toString()}},31347:(e,t,n)=>{function o(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let n=r(t);if(e.name){let o=e.matches("input[type=submit]")?"Submit":"",r=e.value||o;n||((n=document.createElement("input")).type="hidden",n.classList.add("js-submit-button-value"),t.prepend(n)),n.name=e.name,n.value=r}else n&&n.remove()}function r(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}n.d(t,{j:()=>o,u:()=>r})},79697:(e,t,n)=>{let o;n.d(t,{YT:()=>f,qP:()=>d,yM:()=>v});var r=n(88149),i=n(86058),u=n(56363),a=n(43786);let{getItem:s}=(0,u.Z)("localStorage"),l="dimension_",c=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,r.n)("octolytics");delete e.baseContext,o=new i.R(e)}catch(e){}function m(e){let t=(0,r.n)("octolytics").baseContext||{};if(t)for(let[e,n]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(l)&&(t[e.replace(l,"")]=n,delete t[e]);let n=document.querySelector("meta[name=visitor-payload]");if(n){let e=JSON.parse(atob(n.content));Object.assign(t,e)}let o=new URLSearchParams(window.location.search);for(let[e,n]of o)c.includes(e.toLowerCase())&&(t[e]=n);return t.staff=(0,a.B)().toString(),Object.assign(t,e)}function f(e){o?.sendPageView(m(e))}function d(e,t={}){let n=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,r=n?{service:n}:{};for(let[e,n]of Object.entries(t))null!=n&&(r[e]=`${n}`);if(o){let t=e||"unknown";m(r),o.sendEvent(t,m(r))}}function v(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},54508:(e,t,n)=>{n.d(t,{A:()=>a,k:()=>u});var o=n(15205),r=n(71207);let i=(0,o.Z)(function(){return r.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}),u=(0,o.Z)(function(){return"enterprise"===i()}),a="webpack-react-next"},56363:(e,t,n)=>{n.d(t,{Z:()=>u,_:()=>a});var o=n(71207),r=n(43786);let i=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function u(e,t={throwQuotaErrorsOnSet:!1},n=o.iG,u=e=>e,a=e=>e){let s;try{if(!n)throw Error();s=n[e]||new i}catch{s=new i}let{throwQuotaErrorsOnSet:l}=t;function c(e){t.sendCacheStats&&(0,r.b)({incrementKey:e})}function m(e){try{if(s.removeItem(e),t.ttl){let t=`${e}:expiry`;s.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let n=s.getItem(e);if(!n)return null;let o=`${e}:expiry`,r=Number(s.getItem(o));if(r&&t>r)return m(e),m(o),c("SAFE_STORAGE_VALUE_EXPIRED"),null;return c("SAFE_STORAGE_VALUE_WITHIN_TTL"),u(n)}catch(e){return null}},setItem:function(e,n,o=new Date().getTime()){try{if(s.setItem(e,a(n)),t.ttl){let n=`${e}:expiry`,r=o+t.ttl;s.setItem(n,r.toString())}}catch(e){if(l&&e instanceof Error&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:m,clear:s.clear,key:s.key,get length(){return s.length}}}function a(e){return u(e,{throwQuotaErrorsOnSet:!1},o.iG,JSON.parse,JSON.stringify)}},65706:(e,t,n)=>{n.d(t,{LS:()=>i,cl:()=>u,rV:()=>r});var o=n(56363);let{getItem:r,setItem:i,removeItem:u}=(0,o.Z)("sessionStorage")},58374:(e,t,n)=>{n.d(t,{Ak:()=>y,CI:()=>S,Gj:()=>p,J$:()=>w,Nb:()=>L,Nt:()=>b,OE:()=>h,U6:()=>f,Wl:()=>E,XL:()=>m,jN:()=>r,pS:()=>d,sj:()=>v,vu:()=>T,wG:()=>F,wP:()=>g});var o=n(65706);let r="reload",i="soft-nav:fail",u="soft-nav:fail-referrer",a="soft-nav:referrer",s="soft-nav:marker",l="soft-nav:react-app-name",c="soft-nav:latest-mechanism";function m(){(0,o.LS)(s,"0"),(0,o.cl)(a),(0,o.cl)(i),(0,o.cl)(u),(0,o.cl)(l),(0,o.cl)(c)}function f(e){(0,o.LS)(s,e)}function d(){(0,o.LS)(s,"0")}function v(){let e=(0,o.rV)(s);return e&&"0"!==e}function p(){return(0,o.rV)(s)}function h(){return!!E()}function E(){return(0,o.rV)(i)}function y(e){(0,o.LS)(i,e||r),(0,o.LS)(u,window.location.href)}function b(){(0,o.LS)(a,window.location.href)}function g(){return(0,o.rV)(a)||document.referrer}function w(){let e=L();e?(0,o.LS)(l,e):(0,o.cl)(l)}function S(){return(0,o.rV)(l)}function L(){return document.querySelector('meta[name="ui"]')?"ui":document.querySelector("react-app")?.getAttribute("app-name")}function T(e){(0,o.LS)(c,e)}function F(){return(0,o.rV)(c)}},71207:(e,t,n)=>{n.d(t,{Qg:()=>o.Qg,W6:()=>o.W6,cF:()=>o.cF,iG:()=>r.iG,n4:()=>r.n4,ssrSafeLocation:()=>r.jX,zu:()=>r.zu});var o=n(60327),r=n(66199)},66199:(e,t,n)=>{n.d(t,{iG:()=>r,jX:()=>u,n4:()=>o,zu:()=>i});let o="undefined"==typeof document?void 0:document,r="undefined"==typeof window?void 0:window,i="undefined"==typeof history?void 0:history,u="undefined"==typeof location?{pathname:"",origin:"",search:"",hash:""}:location},60327:(e,t,n)=>{n.d(t,{Qg:()=>i,W6:()=>r,cF:()=>u});var o=n(66199);let r=void 0===o.n4,i=!r;function u(){return!!r||!!o.n4.querySelector('react-app[data-ssr="true"]')}},43786:(e,t,n)=>{n.d(t,{B:()=>f,b:()=>s});var o=n(71207),r=n(87274),i=n(54508),u=n(18515);let a=[];function s(e,t=!1,n=1){if(!0!==(0,u.c)("BROWSER_STATS_DISABLED")){if(n<0||n>1)throw RangeError("Sampling probability must be between 0 and 1");void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=!!o.n4?.head?.querySelector('meta[name="user-login"]')?.content,e.staff=f(),e.bundler=i.A,Math.random()<n&&a.push(e),t?m():c()}}let l=null;async function c(){await r.C,null==l&&(l=window.requestIdleCallback(m))}function m(){if(l=null,!a.length)return;let e=o.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!e)return;let t=function(e){let t=[],n=e.map(e=>JSON.stringify(e));for(;n.length>0;)t.push(function(e){let t=e.shift(),n=[t],o=t.length;for(;e.length>0&&o<=65536;){let t=e[0].length;if(o+t<=65536){let r=e.shift();n.push(r),o+=t}else break}return n}(n));return t}(a);for(let n of t)!function(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}(e,`{"stats": [${n.join(",")}] }`);a=[]}function f(){return!!o.n4?.head?.querySelector('meta[name="user-staff"]')?.content}o.n4?.addEventListener("pagehide",m),o.n4?.addEventListener("visibilitychange",m)}}]);
//# sourceMappingURL=app_assets_modules_github_discussions_voting_ts-app_assets_modules_github_has-interactions_ts-d3be73-2741114ef49c.js.map