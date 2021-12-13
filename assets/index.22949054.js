var P=Object.defineProperty,T=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var g=(e,n,o)=>n in e?P(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,p=(e,n)=>{for(var o in n||(n={}))O.call(n,o)&&g(e,o,n[o]);if(h)for(var o of h(n))I.call(n,o)&&g(e,o,n[o]);return e},m=(e,n)=>T(e,E(n));import{c as x,o as v,a as b,r as M,i as N,s as l,d as y,b as a,T as z,e as R,f as H,g as F,h as C,j as K,k as X}from"./vendor.f0862039.js";const Y=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function o(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=o(i);fetch(i.href,r)}};Y();const q={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},D=b("path",{d:"M19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07c.53 8.54 7.36 15.36 15.89 15.89c1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z",fill:"currentColor"},null,-1),G=[D];function J(e,n){return v(),x("svg",q,G)}var w={name:"ic-round-call",render:J},Q="/vue3-video-call/assets/john_cena_call.87f37af2.mp4",U="/vue3-video-call/assets/ringtone.2162bb15.mp4",W="/vue3-video-call/assets/rock.6e21ceaa.gif";const Z={width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},ee=b("path",{d:"M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z",fill:"currentColor"},null,-1),te=[ee];function ne(e,n){return v(),x("svg",Z,te)}var oe={name:"ic-round-clear",render:ne};const k=Symbol(),ie=()=>({install(e){let n=0;const o=M([]),t=s=>{const c=m(p({id:++n},s),{isStarted:!1});return o.push(c),c},i=()=>o.length=0,r=s=>{const c=o.findIndex(S=>S.id===s);c>=0&&o.splice(c,1)};e.provide(k,{activeCalls:o,call:t,endCall:r,endCalls:i})}}),A=()=>N(k);function _(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!F(e)}const L="vue3-video-call",ae=`${L}-view`,re=`${L}-call-container`,f={active:Boolean},le=l("div",f)`
   display: block;
   position: fixed;
   left: 0;
   top: 0;
   width: 100%;
   height: 100%;
   z-index: 1500;
   pointer-events: ${({active:e})=>e?"all":"none"};
`,se=l.div`
   display: flex;
   height: 100%;
   width: 100%;
   flex-flow: column nowrap;
   margin-left: auto;
   align-items: flex-end;
   justify-content: flex-end;
   padding: 25px 25px 25px 0;
`,ce=l("div",f)`
   flex-shrink: 0;
   flex-grow: 0;
   margin-top: 20px;
   box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.239);
   width: ${e=>e.active?"800px":"450px"};
   height: ${e=>e.active?"500px":"300px"};
   background-color: #1b1b1b;
   overflow: hidden;
   border-radius: ${e=>e.active?"45px":"15px"};
   pointer-events: all;
   transition: all 0.5s;
   position: relative;
`,de=l.img`
   width: 100%;
   object-fit: contain;
   height: 100%;
   position: absolute;
   left: 0;
   right: 0;
`,ue=l("div",f)`
   position: absolute;
   top: 10px;
   left: 0;
   right: 0;
   margin: 0 auto;
   display: inline-block;
   width: 100%;
   font-size: ${e=>e.active?"20px":"16px"};
   transition: all 0.5s;
   max-width: calc(90% - 20px);
   border-radius: 10px;
   padding: 10px;
   backdrop-filter: blur(10px) saturate(1.8);
   background-color: #1d1d1d6f;
   color: #fafafa;
   font-family: Arial, Helvetica, sans-serif;
   font-weight: bold;
   text-align: center;
`,pe=l.div`
   width: 100%;
   height: 100%;
   display: flex;
   flex-flow: row wrap;
`,fe=l.div`
   width: auto;
   display: inline-block;
   align-self: flex-end;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 5px;
   margin-bottom: 20px;
   margin-left: 20px;
   background-color: rgba(37, 37, 37, 0.28);
   backdrop-filter: blur(15px) saturate(1.8);
   border-radius: 100px;
`,he={isAccept:Boolean},V=l("button",he)`
   background-color: transparent;
   border: none;
   outline: none;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 50px;
   height: 50px;
   border-radius: 50px;
   font-size: 30px;
   cursor: pointer;
   color: ${e=>e.isAccept?"#35c232":"#ce3925"};
   margin-right: ${e=>e.isAccept?"5px":0};
   transition: background-color 0.5s;

   &:hover {
      background-color: rgba(139, 139, 139, 0.293);
   }
`,ge=l.video`
   position: absolute;
   width: 100%;
   height: 100%;
   left: 0;
   top: 0;
`,$=[{transform:"translateX(100%)",opacity:0},{transform:"translateX(0%)",opacity:1}],d={duration:350,easing:"ease"},u=(e,n)=>(o,t)=>{if("animate"in o){const i=o.animate(e,n);i.onfinish=t}else t()},me=u($,d),xe=u([...$].reverse(),d),j=[{opacity:0},{opacity:1}],ve=u(j,d),be=u([...j].reverse(),d),ye=y({name:"VideoCallsView",inheritAttrs:!1,setup:()=>{const e=A();return p({handleAnimationEnter:me,handleAnimationLeave:xe,handlePictureEnter:ve,handlePictureLeave:be},e)},emits:{update:()=>!0},render(){let e;const n=()=>{let o;return a(R,{css:!1,onEnter:this.handleAnimationEnter,onLeave:this.handleAnimationLeave},_(o=this.activeCalls.map(t=>a(ce,{key:t.id,active:t.isStarted},{default:()=>[a(H,{css:!1,onEnter:this.handlePictureEnter,onLeave:this.handlePictureLeave},{default:()=>[t.isStarted?a(ge,{autoplay:!0,src:t.video},null):a(de,{src:t.image},null)]}),!t.isStarted&&a("audio",{autoplay:!0,loop:!0,src:t.ringtone},null),a(pe,null,{default:()=>[!t.isStarted&&a(ue,{active:t.isStarted},{default:()=>[t.title]}),a(fe,null,{default:()=>[!t.isStarted&&a(V,{onClick:()=>{var i;t.isStarted=!0,(i=t.onAccept)==null||i.call(t)},isAccept:!0},{default:()=>[a(w,null,null)]}),a(V,{onClick:()=>{var i;this.endCall(t.id),(i=t.onDeny)==null||i.call(t)},isAccept:!1},{default:()=>[a(oe,null,null)]})]})]})]})))?o:{default:()=>[o]})};return a(z,{to:"body"},{default:()=>[a(C,{theme:{}},{default:()=>[a(le,{active:this.activeCalls.length>0,class:ae},{default:()=>[a(se,{class:re},_(e=n())?e:{default:()=>[e]})]})]})]})}}),Ce=l.div`
   display: block;
   width: 100%;
   height: 100%;
   padding: 50px;
`,we=l.button`
   padding: 10px 15px;
   background-color: #1cca3c;
   color: white;
   font-family: Arial, Helvetica, sans-serif;
   border: none;
   font-size: 20px;
   border-radius: 15px;
   box-shadow: 0px 0px 5px 1px rgb(14, 14, 14, 0.2);
   display: inline-flex;
   align-items: center;
   cursor: pointer;

   &:hover {
      filter: brightness(0.9);
   }
`,ke=y({setup(){const e=A();return{call:()=>{e.call({image:W,video:Q,ringtone:U,title:"The Rock is Calling"})}}},render(){return a(C,{theme:{}},{default:()=>[a(Ce,null,{default:()=>[a(we,{onClick:this.call},{default:()=>[a(w,{style:{marginRight:"10px"}},null),K(" Call")]}),a(ye,null,null)]})]})}}),B=X(ke),Ae=ie();B.use(Ae);B.mount("#app");
