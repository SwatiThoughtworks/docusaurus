"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[42931],{94544:(e,r,n)=>{n.d(r,{Z:()=>o});var t=n(24246);n(27378);var s=n(29088);function o({children:e,fallback:r}){return(0,s.Z)()?(0,t.jsx)(t.Fragment,{children:null==e?void 0:e()}):null!=r?r:null}},87048:(e,r,n)=>{n.d(r,{CW:()=>j,FS:()=>v,Fr:()=>f,Hc:()=>O,I1:()=>p,SR:()=>b,UM:()=>x,Zl:()=>y,mC:()=>d,mq:()=>g,rv:()=>w});var t=n(24246),s=n(27378),o=n(56953),i=n(92053),c=n(36712),l=n(41428),a=n(38112);let u=s.createContext(null);function d({children:e}){let[r,n]=(0,s.useState)(null),o=(0,s.useRef)(!0);return(0,s.useEffect)(()=>(o.current=!0,()=>{o.current=!1}),[]),(0,s.useEffect)(()=>{fetch("https://registry.npmjs.org/@docusaurus/core").then(e=>e.json()).then(e=>{if(!o.current)return;let r=Object.keys(e.versions).at(-1),t=e.time[r];n({name:r,time:t})})},[]),(0,t.jsx)(u.Provider,{value:r,children:e})}function h(){var e,r;let n=null===(e=(0,o.J)("default").preferredVersion)||void 0===e?void 0:e.name,t=(0,i.gB)("default"),s=(null!==(r=t.find(e=>"current"!==e.name))&&void 0!==r?r:t[0]).name;return n&&"current"!==n?n:s}function p(){let e=(0,s.useContext)(u);return e?(0,t.jsx)("span",{children:(0,t.jsx)(c.Z,{description:"The hint text for the current canary version tag.",values:{canaryVersionName:(0,t.jsx)("b",{children:e.name})},children:"Current: {canaryVersionName}"})}):(0,t.jsx)("span",{children:(0,t.jsx)(c.Z,{description:"An example canary version tag when the actual version can't be fetched.",children:"Example: 0.0.0-4922"})})}function b(){let e=h();return(0,t.jsx)("span",{children:e})}function j(){return(0,t.jsx)("span",{children:3})}function f(){return(0,t.jsx)("span",{children:2})}function m({branch:e}){return(0,t.jsx)(l.Z,{to:`https://github.com/facebook/docusaurus/tree/${e}`,children:(0,t.jsx)("code",{children:e})})}function y(){return(0,t.jsx)(m,{branch:"docusaurus-v2"})}function g(){return(0,t.jsx)(m,{branch:"main"})}function x({children:e}){return(0,s.useContext)(u)?null:e}function v({children:e}){return(0,s.useContext)(u)?e:null}function O(){var e,r;let n=null!==(r=null===(e=(0,s.useContext)(u))||void 0===e?void 0:e.name)&&void 0!==r?r:"0.0.0-4922",o=h();return(0,t.jsx)(a.Z,{language:"diff",children:`-  "@docusaurus/core": "^${o}",
-  "@docusaurus/preset-classic": "^${o}",
+  "@docusaurus/core": "${n}",
+  "@docusaurus/preset-classic": "${n}",
`})}function w(){var e;let r=null===(e=(0,s.useContext)(u))||void 0===e?void 0:e.time;return r?(0,t.jsx)(c.Z,{values:{time:(0,t.jsx)("b",{children:new Date(r).toLocaleString()})},children:"The latest canary version that's available on npm is published at {time}."}):null}},38112:(e,r,n)=>{n.d(r,{Z:()=>ec});var t,s,o,i={};n.r(i),n.d(i,{ButtonExample:()=>C});var c=n(24246),l=n(27378),a=n(40624),u=n(29088),d=n(32711),h=n(36712),p=n(4423),b=n(94544),j=n(30691),f=n(78844),m=n(73919);function y(){let{prism:e}=(0,m.L)(),{colorMode:r}=(0,f.I)(),n=e.theme,t=e.darkTheme||n;return"dark"===r?t:n}var g=n(88941);function x(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}function v({children:e}){return(0,c.jsx)("div",{className:(0,a.Z)("playgroundHeader_Tvsk"),children:e})}function O(){return(0,c.jsx)("div",{children:"Loading..."})}function w(){return(0,c.jsx)(b.Z,{fallback:(0,c.jsx)(O,{}),children:()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(g.Z,{fallback:e=>(0,c.jsx)(j.Ac,x({},e)),children:(0,c.jsx)(d.i5,{})}),(0,c.jsx)(d.IF,{})]})})}function P(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(v,{children:(0,c.jsx)(h.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,c.jsx)("div",{className:"playgroundPreview_mApW",children:(0,c.jsx)(w,{})})]})}function k(){let e=(0,u.Z)();return(0,c.jsx)(d.uz,{className:"playgroundEditor_TySg"},String(e))}function S(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(v,{children:(0,c.jsx)(h.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,c.jsx)(k,{})]})}let D=e=>`${e};`;function I(e){var r,n,t,s,{children:o,transformCode:i}=e,l=function(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,["children","transformCode"]);let{siteConfig:{themeConfig:a}}=(0,p.Z)(),{liveCodeBlock:{playgroundPosition:u}}=a,h=y(),b=null!==(s=null===(t=l.metastring)||void 0===t?void 0:t.includes("noInline"))&&void 0!==s&&s;return(0,c.jsx)("div",{className:"playgroundContainer_6Ior",children:(0,c.jsx)(d.nu,(r=x({code:null==o?void 0:o.replace(/\n$/,""),noInline:b,transformCode:null!=i?i:D,theme:h},l),n=n={children:"top"===u?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(P,{}),(0,c.jsx)(S,{})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(S,{}),(0,c.jsx)(P,{})]})},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}),r))})}function B(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}function C(e){var r,n;return(0,c.jsx)("button",(r=B({type:"button"},e),n=n={style:B({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}),r))}let E=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}({React:l},l,i);var A=n(89583),N=n(6324),T=n.n(N);let L=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),Z=RegExp("\\{(?<range>[\\d,-]+)\\}"),z={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"<!--",end:"-->"}},_=(t=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}({},z),s=s={lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(s)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}),t),R=Object.keys(z);function W(e,r){let n=e.map(e=>{let{start:n,end:t}=_[e];return`(?:${n}\\s*(${r.flatMap(e=>{var r,n;return[e.line,null===(r=e.block)||void 0===r?void 0:r.start,null===(n=e.block)||void 0===n?void 0:n.end].filter(Boolean)}).join("|")})\\s*${t})`}).join("|");return RegExp(`^\\s*(?:${n})\\s*$`)}function M(e){var r,n,{as:t}=e,s=function(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,["as"]);let o=function(e){let r={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach(([e,t])=>{let s=r[e];s&&"string"==typeof t&&(n[s]=t)}),n}(y());return(0,c.jsx)(t,(r=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}({},s),n=n={style:o,className:(0,a.Z)(s.className,"codeBlockContainer_jDV4",A.k.common.codeBlock)},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}),r))}let $={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function F({children:e,className:r}){return(0,c.jsx)(M,{as:"pre",tabIndex:0,className:(0,a.Z)($.codeBlockStandalone,"thin-scrollbar",r),children:(0,c.jsx)("code",{className:$.codeBlockLines,children:e})})}var V=n(51114);let H={attributes:!0,characterData:!0,childList:!0,subtree:!0};var q=n(26101);let U={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function G(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}function Q({line:e,classNames:r,showLineNumbers:n,getLineProps:t,getTokenProps:s}){var o,i;1===e.length&&"\n"===e[0].content&&(e[0].content="");let l=t({line:e,className:(0,a.Z)(r,n&&U.codeLine)}),u=e.map((e,r)=>(0,c.jsx)("span",G({},s({token:e})),r));return(0,c.jsxs)("span",(o=G({},l),i=i={children:[n?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{className:U.codeLineNumber}),(0,c.jsx)("span",{className:U.codeLineContent,children:u})]}):u,(0,c.jsx)("br",{})]},Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(i)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(i)).forEach(function(e){Object.defineProperty(o,e,Object.getOwnPropertyDescriptor(i,e))}),o))}var Y=n(34370);function J(e){var r,n;return(0,c.jsx)("svg",(r=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}({viewBox:"0 0 24 24"},e),n=n={children:(0,c.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}),r))}function X(e){var r,n;return(0,c.jsx)("svg",(r=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}({viewBox:"0 0 24 24"},e),n=n={children:(0,c.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}),r))}let K={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ee({code:e,className:r}){let[n,t]=(0,l.useState)(!1),s=(0,l.useRef)(void 0),o=(0,l.useCallback)(()=>{(0,Y.Z)(e),t(!0),s.current=window.setTimeout(()=>{t(!1)},1e3)},[e]);return(0,l.useEffect)(()=>()=>window.clearTimeout(s.current),[]),(0,c.jsx)("button",{type:"button","aria-label":n?(0,h.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,h.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,h.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,a.Z)("clean-btn",r,K.copyButton,n&&K.copyButtonCopied),onClick:o,children:(0,c.jsxs)("span",{className:K.copyButtonIcons,"aria-hidden":"true",children:[(0,c.jsx)(J,{className:K.copyButtonIcon}),(0,c.jsx)(X,{className:K.copyButtonSuccessIcon})]})})}function er(e){var r,n;return(0,c.jsx)("svg",(r=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}({viewBox:"0 0 24 24"},e),n=n={children:(0,c.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}),r))}let en={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function et({className:e,onClick:r,isEnabled:n}){let t=(0,h.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,c.jsx)("button",{type:"button",onClick:r,className:(0,a.Z)("clean-btn",e,n&&en.wordWrapButtonEnabled),"aria-label":t,title:t,children:(0,c.jsx)(er,{className:en.wordWrapButtonIcon,"aria-hidden":"true"})})}function es({children:e,className:r="",metastring:n,title:t,showLineNumbers:s,language:o}){var i,u,d,h;let{prism:{defaultLanguage:p,magicComments:b}}=(0,m.L)(),j=null==(u=null!==(i=null!=o?o:function(e){let r=e.split(" ").find(e=>e.startsWith("language-"));return null==r?void 0:r.replace(/language-/,"")}(r))&&void 0!==i?i:p)?void 0:u.toLowerCase(),f=y(),g=function(){let[e,r]=(0,l.useState)(!1),[n,t]=(0,l.useState)(!1),s=(0,l.useRef)(null),o=(0,l.useCallback)(()=>{let n=s.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),r(e=>!e)},[s,e]),i=(0,l.useCallback)(()=>{let{scrollWidth:e,clientWidth:r}=s.current;t(e>r||s.current.querySelector("code").hasAttribute("style"))},[s]);return!function(e,r){let[n,t]=(0,l.useState)(),s=(0,l.useCallback)(()=>{var r;t(null===(r=e.current)||void 0===r?void 0:r.closest("[role=tabpanel][hidden]"))},[e,t]);(0,l.useEffect)(()=>{s()},[s]),function(e,r,n=H){let t=(0,V.zX)(r),s=(0,V.Ql)(n);(0,l.useEffect)(()=>{let r=new MutationObserver(t);return e&&r.observe(e,s),()=>r.disconnect()},[e,t,s])}(n,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(r(),s())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(s,i),(0,l.useEffect)(()=>{i()},[e,i]),(0,l.useEffect)(()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)}),[i]),{codeBlockRef:s,isEnabled:e,isCodeScrollable:n,toggle:o}}(),x=(null!==(h=null==n?void 0:null===(d=n.match(L))||void 0===d?void 0:d.groups.title)&&void 0!==h?h:"")||t,{lineClassNames:v,code:O}=function(e,r){let n=e.replace(/\n$/,""),{language:t,magicComments:s,metastring:o}=r;if(o&&Z.test(o)){let e=o.match(Z).groups.range;if(0===s.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${o}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let r=s[0].className;return{lineClassNames:Object.fromEntries(T()(e).filter(e=>e>0).map(e=>[e-1,[r]])),code:n}}if(void 0===t)return{lineClassNames:{},code:n};let i=function(e,r){switch(e){case"js":case"javascript":case"ts":case"typescript":return W(["js","jsBlock"],r);case"jsx":case"tsx":return W(["js","jsBlock","jsx"],r);case"html":return W(["js","jsBlock","html"],r);case"python":case"py":case"bash":return W(["bash"],r);case"markdown":case"md":return W(["html","jsx","bash"],r);case"tex":case"latex":case"matlab":return W(["tex"],r);case"lua":case"haskell":case"sql":return W(["lua"],r);case"wasm":return W(["wasm"],r);case"vb":case"vba":case"visual-basic":return W(["vb","rem"],r);case"vbnet":return W(["vbnet","rem"],r);case"batch":return W(["rem"],r);case"basic":return W(["rem","f90"],r);case"fsharp":return W(["js","ml"],r);case"ocaml":case"sml":return W(["ml"],r);case"fortran":return W(["f90"],r);case"cobol":return W(["cobol"],r);default:return W(R,r)}}(t,s),c=n.split("\n"),l=Object.fromEntries(s.map(e=>[e.className,{start:0,range:""}])),a=Object.fromEntries(s.filter(e=>e.line).map(({className:e,line:r})=>[r,e])),u=Object.fromEntries(s.filter(e=>e.block).map(({className:e,block:r})=>[r.start,e])),d=Object.fromEntries(s.filter(e=>e.block).map(({className:e,block:r})=>[r.end,e]));for(let e=0;e<c.length;){let r=c[e].match(i);if(!r){e+=1;continue}let n=r.slice(1).find(e=>void 0!==e);a[n]?l[a[n]].range+=`${e},`:u[n]?l[u[n]].start=e:d[n]&&(l[d[n]].range+=`${l[d[n]].start}-${e-1},`),c.splice(e,1)}n=c.join("\n");let h={};return Object.entries(l).forEach(([e,{range:r}])=>{T()(r).forEach(r=>{var n;null!==(n=h[r])&&void 0!==n||(h[r]=[]),h[r].push(e)})}),{lineClassNames:h,code:n}}(e,{metastring:n,language:j,magicComments:b}),w=null!=s?s:!!(null==n?void 0:n.includes("showLineNumbers"));return(0,c.jsxs)(M,{as:"div",className:(0,a.Z)(r,j&&!r.includes(`language-${j}`)&&`language-${j}`),children:[x&&(0,c.jsx)("div",{className:$.codeBlockTitle,children:x}),(0,c.jsxs)("div",{className:$.codeBlockContent,children:[(0,c.jsx)(q.y$,{theme:f,code:O,language:null!=j?j:"text",children:({className:e,style:r,tokens:n,getLineProps:t,getTokenProps:s})=>(0,c.jsx)("pre",{tabIndex:0,ref:g.codeBlockRef,className:(0,a.Z)(e,$.codeBlock,"thin-scrollbar"),style:r,children:(0,c.jsx)("code",{className:(0,a.Z)($.codeBlockLines,w&&$.codeBlockLinesWithNumbering),children:n.map((e,r)=>(0,c.jsx)(Q,{line:e,getLineProps:t,getTokenProps:s,classNames:v[r],showLineNumbers:w},r))})})}),(0,c.jsxs)("div",{className:$.buttonGroup,children:[(g.isEnabled||g.isCodeScrollable)&&(0,c.jsx)(et,{className:$.codeButton,onClick:()=>g.toggle(),isEnabled:g.isEnabled}),(0,c.jsx)(ee,{className:$.codeButton,code:O})]})]})]})}function eo(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}let ei=(o=function(e){var r,n,{children:t}=e,s=function(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,["children"]);let o=(0,u.Z)(),i=l.Children.toArray(t).some(e=>(0,l.isValidElement)(e))?t:Array.isArray(t)?t.join(""):t,a="string"==typeof i?es:F;return(0,c.jsx)(a,(r=function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}({},s),n=n={children:i},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):(function(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n.push.apply(n,t)}return n})(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))}),r),String(o))},function(e){return e.live?(0,c.jsx)(I,eo({scope:E},e)):(0,c.jsx)(o,eo({},e))});function ec(e){return(0,c.jsx)(ei,function(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.forEach(function(r){var t;t=n[r],r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t})}return e}({},e))}},82430:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=n(24246),s=n(71670),o=n(87048);let i={},c="Release process",l={id:"release-process",title:"Release process",description:"Let's see how Docusaurus handles versioning, releases and breaking changes.",source:"@site/community/5-release-process.mdx",sourceDirName:".",slug:"/release-process",permalink:"/community/release-process",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/community/5-release-process.mdx",tags:[],version:"current",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1724431482e3,sidebarPosition:5,frontMatter:{},sidebar:"community",previous:{title:"Canary releases",permalink:"/community/canary"}},a={},u=[{value:"Semantic versioning",id:"semantic-versioning",level:2},{value:"Major versions",id:"major-versions",level:3},{value:"Minor versions",id:"minor-versions",level:3},{value:"Patch versions",id:"patch-versions",level:3},{value:"Versions",id:"versions",level:2},{value:"Stable version",id:"stable-version",level:3},{value:"Next version",id:"next-version",level:3},{value:"Public API surface",id:"public-api-surface",level:2},{value:"Core public API",id:"core-public-api",level:3},{value:"Theming public API",id:"theming-public-api",level:3}];function d(e){let r={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"release-process",children:"Release process"})}),"\n",(0,t.jsxs)(r.p,{children:["Let's see how Docusaurus handles ",(0,t.jsx)(r.strong,{children:"versioning, releases and breaking changes"}),"."]}),"\n",(0,t.jsx)(r.admonition,{type:"info",children:(0,t.jsx)(r.p,{children:"This topic is particularly important for highly customized sites that may have difficulties to upgrade."})}),"\n",(0,t.jsx)(r.h2,{id:"semantic-versioning",children:"Semantic versioning"}),"\n",(0,t.jsxs)(r.p,{children:["Docusaurus versioning is based on the ",(0,t.jsx)(r.code,{children:"major.minor.patch"})," scheme and respects ",(0,t.jsx)(r.a,{href:"https://semver.org/",children:"Semantic Versioning"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Respecting Semantic Versioning is important for multiple reasons:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["It ",(0,t.jsx)(r.strong,{children:"guarantees simple minor version upgrades"}),", as long as you only use the ",(0,t.jsx)(r.a,{href:"/community/release-process#public-api-surface",children:"public API"})]}),"\n",(0,t.jsx)(r.li,{children:"It follows front-end ecosystem conventions"}),"\n",(0,t.jsx)(r.li,{children:"A new major version is an opportunity to thoroughly document breaking changes"}),"\n",(0,t.jsx)(r.li,{children:"A new major/minor version is an opportunity to communicate new features through a blog post"}),"\n"]}),"\n",(0,t.jsxs)(r.admonition,{type:"note",children:[(0,t.jsxs)(r.p,{children:["Releasing Docusaurus 2.0 took a very long time. From now on, Docusaurus will ",(0,t.jsx)(r.strong,{children:"release new major versions more regularly"}),". In practice, you can expect a new major version every 2\u20134 months."]}),(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"https://tom.preston-werner.com/2022/05/23/major-version-numbers-are-not-sacred.html",children:"Major version numbers are not sacred"}),", but we still group breaking changes together and avoid releasing major versions too often."]})]}),"\n",(0,t.jsx)(r.h3,{id:"major-versions",children:"Major versions"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"major"})," version number is incremented on ",(0,t.jsx)(r.strong,{children:"every breaking change"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Whenever a new major version is released, we publish:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["a blog post with feature highlights, major bug fixes, ",(0,t.jsx)(r.strong,{children:"breaking changes, and upgrade instructions"}),"."]}),"\n",(0,t.jsx)(r.li,{children:"an exhaustive changelog entry"}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["Read our ",(0,t.jsx)(r.a,{href:"#public-api-surface",children:"public API surface"})," section to clearly understand what we consider as a breaking change."]})}),"\n",(0,t.jsx)(r.h3,{id:"minor-versions",children:"Minor versions"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"minor"})," version number is incremented on every significant retro-compatible change."]}),"\n",(0,t.jsx)(r.p,{children:"Whenever a new minor version is released, we publish:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"a blog post with a list of feature highlights and major bug fixes"}),"\n",(0,t.jsx)(r.li,{children:"an exhaustive changelog entry"}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["If you only use our ",(0,t.jsx)(r.a,{href:"#public-api-surface",children:"public API surface"}),", you should be able to upgrade in no time!"]})}),"\n",(0,t.jsx)(r.h3,{id:"patch-versions",children:"Patch versions"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"patch"})," version number is incremented on bugfixes releases."]}),"\n",(0,t.jsx)(r.p,{children:"Whenever a new patch version is released, we publish:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"an exhaustive changelog entry"}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"versions",children:"Versions"}),"\n","\n",(0,t.jsx)(r.p,{children:"The Docusaurus team is usually working on 2 major versions at the same time:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsxs)(r.strong,{children:["Docusaurus ",(0,t.jsx)(o.Fr,{})]}),": the ",(0,t.jsx)(r.strong,{children:"stable"})," version, on the ",(0,t.jsx)(o.Zl,{})," branch"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsxs)(r.strong,{children:["Docusaurus ",(0,t.jsx)(o.CW,{})]}),": the ",(0,t.jsx)(r.strong,{children:"next"})," version, on the ",(0,t.jsx)(o.mq,{})," branch"]}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{type:"note",children:(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(o.Zl,{})," branch is created just before releasing the first v",(0,t.jsx)(o.Fr,{})," release candidate."]})}),"\n",(0,t.jsx)(r.h3,{id:"stable-version",children:"Stable version"}),"\n",(0,t.jsxs)(r.p,{children:["The stable version (v",(0,t.jsx)(o.Fr,{}),", on ",(0,t.jsx)(o.Zl,{}),") is recommended for most Docusaurus users."]}),"\n",(0,t.jsxs)(r.p,{children:["We regularly backport retro-compatible features, bug and security fixes from ",(0,t.jsx)(o.mq,{})," to ",(0,t.jsx)(o.Zl,{})," with ",(0,t.jsx)(r.code,{children:"git cherry-pick"})," to make them available to those not ready for the next version."]}),"\n",(0,t.jsxs)(r.admonition,{type:"info",children:[(0,t.jsxs)(r.p,{children:["After a new stable version has been released, the former stable version will continue to receive support only for ",(0,t.jsx)(r.strong,{children:"major security issues"})," for ",(0,t.jsx)(r.strong,{children:"3 months"}),". Otherwise, all features will be frozen and non-critical bugs will not be fixed."]}),(0,t.jsx)(r.p,{children:"It is recommended to upgrade within that time frame to the new stable version."})]}),"\n",(0,t.jsx)(r.h3,{id:"next-version",children:"Next version"}),"\n",(0,t.jsxs)(r.p,{children:["The next version (v",(0,t.jsx)(o.CW,{}),", on ",(0,t.jsx)(o.mq,{}),") is the version the Docusaurus team is currently working on."]}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(o.mq,{})," branch is the ",(0,t.jsx)(r.strong,{children:"default target branch"})," for all pull requests, including core team and external contributions."]}),"\n",(0,t.jsxs)(r.p,{children:["This version is recommended for ",(0,t.jsx)(r.strong,{children:"early adopters"})," that want to use the latest Docusaurus features as soon as possible. It is also a good way to help us by reporting bugs and giving some feedback."]}),"\n",(0,t.jsx)(r.p,{children:"There are 3 ways to use the next version:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["with an ",(0,t.jsx)(r.code,{children:"alpha"}),", ",(0,t.jsx)(r.code,{children:"beta"})," or ",(0,t.jsx)(r.code,{children:"rc"})," pre-release"]}),"\n",(0,t.jsxs)(r.li,{children:["with the ",(0,t.jsx)(r.code,{children:"@next"})," npm dist tag for the latest pre-release"]}),"\n",(0,t.jsxs)(r.li,{children:["with a ",(0,t.jsx)(r.a,{href:"/community/canary",children:"canary release"})," for the very latest features"]}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsx)(r.p,{children:"The next version passes all our automated tests and is used by the Docusaurus site itself. It is relatively safe: don't be afraid to give it a try."})}),"\n",(0,t.jsxs)(r.admonition,{type:"warning",children:[(0,t.jsx)(r.p,{children:"Breaking changes can happen on the next version: detailed upgrade instructions are available in the changelog and pull requests."}),(0,t.jsxs)(r.p,{children:["At the ",(0,t.jsx)(r.code,{children:"beta"})," and ",(0,t.jsx)(r.code,{children:"rc"})," (release candidate) phases, we avoid introducing major breaking changes."]})]}),"\n",(0,t.jsx)(r.h2,{id:"public-api-surface",children:"Public API surface"}),"\n",(0,t.jsxs)(r.p,{children:["Docusaurus commits to respecting Semantic Versioning. This means that whenever changes occur in Docusaurus public APIs and break backward compatibility, we will increment the ",(0,t.jsx)(r.code,{children:"major"})," version number."]}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.p,{children:["Docusaurus guarantees public API retro-compatibility across ",(0,t.jsx)(r.code,{children:"minor"})," versions. Unless you use internal APIs, ",(0,t.jsx)(r.code,{children:"minor"})," version upgrades should be easy."]})}),"\n",(0,t.jsx)(r.p,{children:"We will outline what accounts as the public API surface."}),"\n",(0,t.jsx)(r.h3,{id:"core-public-api",children:"Core public API"}),"\n",(0,t.jsx)(r.p,{children:"\u2705 Our public API includes:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Docusaurus config"}),"\n",(0,t.jsx)(r.li,{children:"Docusaurus client APIs"}),"\n",(0,t.jsx)(r.li,{children:"Docusaurus CLI"}),"\n",(0,t.jsx)(r.li,{children:"Preset options"}),"\n",(0,t.jsx)(r.li,{children:"Plugin options"}),"\n",(0,t.jsx)(r.li,{children:"Plugin lifecycle APIs"}),"\n",(0,t.jsx)(r.li,{children:"Theme config"}),"\n",(0,t.jsx)(r.li,{children:"Core plugins route component props"}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"@docusaurus/types"})," TypeScript types","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"We still retain the freedom to make types stricter (which may break type-checking)."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["\u274C Our public API ",(0,t.jsx)(r.strong,{children:"excludes"}),":"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Docusaurus config ",(0,t.jsx)(r.code,{children:"future"})]}),"\n",(0,t.jsxs)(r.li,{children:["All features prefixed by ",(0,t.jsx)(r.code,{children:"experimental_"})," or ",(0,t.jsx)(r.code,{children:"unstable_"})]}),"\n",(0,t.jsxs)(r.li,{children:["All features prefixed by ",(0,t.jsx)(r.code,{children:"v<MajorVersion>_"})," (",(0,t.jsx)(r.code,{children:"v6_"})," ",(0,t.jsx)(r.code,{children:"v7_"}),", etc.)"]}),"\n"]}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsx)(r.p,{children:"For non-theme APIs, any documented API is considered public (and will be stable); any undocumented API is considered internal."})}),"\n",(0,t.jsxs)(r.p,{children:['An API being "stable" means if you increment the patch or minor version of your Docusaurus installation without any other change, running ',(0,t.jsx)(r.code,{children:"docusaurus start"})," or ",(0,t.jsx)(r.code,{children:"docusaurus build"})," should not throw an error."]}),"\n",(0,t.jsx)(r.h3,{id:"theming-public-api",children:"Theming public API"}),"\n",(0,t.jsx)(r.p,{children:"Docusaurus has a very flexible theming system:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"You can use custom CSS"}),"\n",(0,t.jsxs)(r.li,{children:["You can ",(0,t.jsx)(r.a,{href:"/docs/swizzling",children:"swizzle"})," any React theme component"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"This system also implicitly creates a very large API surface. To be able to move fast and improve Docusaurus, we can't guarantee retro-compatibility."}),"\n",(0,t.jsx)(r.p,{children:"\u2705 Our public theming API includes:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:(0,t.jsx)(r.a,{href:"/docs/styling-layout#theme-class-names",children:"Theme class names"})}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/docs/styling-layout#styling-your-site-with-infima",children:"Infima"})," class names and CSS variables"]}),"\n",(0,t.jsxs)(r.li,{children:["React components that are ",(0,t.jsx)(r.a,{href:"/docs/swizzling#what-is-safe-to-swizzle",children:"safe to swizzle"})]}),"\n",(0,t.jsx)(r.li,{children:"The theme user experience"}),"\n",(0,t.jsx)(r.li,{children:"Browser support"}),"\n"]}),"\n",(0,t.jsxs)(r.admonition,{type:"tip",children:[(0,t.jsx)(r.p,{children:"You may not be able to achieve your site customization through this public API."}),(0,t.jsxs)(r.p,{children:["In this case, please ",(0,t.jsx)(r.a,{href:"https://github.com/facebook/docusaurus/discussions/5468",children:"report your customization use case"})," and we will figure out how to expand our public API."]})]}),"\n",(0,t.jsxs)(r.p,{children:["\u274C Our public theming API ",(0,t.jsx)(r.strong,{children:"excludes"}),":"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"The DOM structure"}),"\n",(0,t.jsxs)(r.li,{children:["CSS module class names with a hash suffix (usually targeted with ",(0,t.jsx)(r.code,{children:"[class*='myClassName']"})," selectors)"]}),"\n",(0,t.jsxs)(r.li,{children:["React components that are ",(0,t.jsx)(r.a,{href:"/docs/swizzling#what-is-safe-to-swizzle",children:"unsafe or forbidden to swizzle"})]}),"\n",(0,t.jsxs)(r.li,{children:["React components that import from ",(0,t.jsx)(r.code,{children:"@docusaurus/theme-common/internal"})]}),"\n",(0,t.jsx)(r.li,{children:"The exact visual appearance of the theme"}),"\n"]}),"\n",(0,t.jsxs)(r.admonition,{type:"note",children:[(0,t.jsxs)(r.p,{children:["When ",(0,t.jsx)(r.a,{href:"/docs/swizzling",children:"swizzling"})," safe components, you might encounter components that import undocumented APIs from ",(0,t.jsx)(r.code,{children:"@docusaurus/theme-common"})," (without the ",(0,t.jsx)(r.code,{children:"/internal"})," subpath)."]}),(0,t.jsx)(r.p,{children:'We still maintain retro-compatibility on those APIs (hence they are marked as "safe"), but we don\'t encourage a direct usage.'})]})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);