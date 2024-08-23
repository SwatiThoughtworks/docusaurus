"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[72468],{61132:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(24246);t(27378);var a=t(40624);function o({children:e,hidden:r,className:t}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_pnkT",t),hidden:r,children:e})}},97555:(e,r,t)=>{t.d(r,{Z:()=>y});var n=t(24246),a=t(27378),o=t(40624),i=t(75527),s=t(3620),l=t(44479),u=t(62821),c=t(52196),d=t(53589);function m(e){var r,t;return null!==(t=null===(r=a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){let{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===r?void 0:r.filter(Boolean))&&void 0!==t?t:[]}function p({value:e,tabValues:r}){return r.some(r=>r.value===e)}var h=t(29088);function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){var n;n=t[r],r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n})}return e}function b(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t.push.apply(t,n)}return t})(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}),e}function v({className:e,block:r,selectedValue:t,selectValue:a,tabValues:s}){let l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{let r=e.currentTarget,n=s[l.indexOf(r)].value;n!==t&&(u(r),a(n))},d=e=>{var r,t;let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{let t=l.indexOf(e.currentTarget)+1;n=null!==(r=l[t])&&void 0!==r?r:l[0];break}case"ArrowLeft":{let r=l.indexOf(e.currentTarget)-1;n=null!==(t=l[r])&&void 0!==t?t:l[l.length-1]}}null==n||n.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},e),children:s.map(({value:e,label:r,attributes:a})=>(0,n.jsx)("li",b(f({role:"tab",tabIndex:t===e?0:-1,"aria-selected":t===e,ref:e=>l.push(e),onKeyDown:d,onClick:c},a),{className:(0,o.Z)("tabs__item","tabItem_AQgk",null==a?void 0:a.className,{"tabs__item--active":t===e}),children:null!=r?r:e}),e))})}function g({lazy:e,children:r,selectedValue:t}){let i=(Array.isArray(r)?r:[r]).filter(Boolean);if(e){let e=i.find(e=>e.props.value===t);return e?(0,a.cloneElement)(e,{className:(0,o.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:i.map((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==t}))})}function j(e){let r=function(e){let{defaultValue:r,queryString:t=!1,groupId:n}=e,o=function(e){let{values:r,children:t}=e;return(0,a.useMemo)(()=>{let e=null!=r?r:m(t).map(({props:{value:e,label:r,attributes:t,default:n}})=>({value:e,label:r,attributes:t,default:n}));return!function(e){let r=(0,c.lx)(e,(e,r)=>e.value===r.value);if(r.length>0)throw Error(`Docusaurus error: Duplicate values "${r.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[r,t])}(e),[i,h]=(0,a.useState)(()=>(function({defaultValue:e,tabValues:r}){var t;if(0===r.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:r}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${r.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let n=null!==(t=r.find(e=>e.default))&&void 0!==t?t:r[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:r,tabValues:o})),[f,b]=function({queryString:e=!1,groupId:r}){let t=(0,s.k6)(),n=function({queryString:e=!1,groupId:r}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!r)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:e,groupId:r});return[(0,u._X)(n),(0,a.useCallback)(e=>{var r,a;if(!n)return;let o=new URLSearchParams(t.location.search);o.set(n,e),t.replace((r=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.forEach(function(r){var n;n=t[r],r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n})}return e}({},t.location),a=a={search:o.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):(function(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t.push.apply(t,n)}return t})(Object(a)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))}),r))},[n,t])]}({queryString:t,groupId:n}),[v,g]=function({groupId:e}){let r=e?`docusaurus.tab.${e}`:null,[t,n]=(0,d.Nk)(r);return[t,(0,a.useCallback)(e=>{r&&n.set(e)},[r,n])]}({groupId:n}),j=(()=>{let e=null!=f?f:v;return p({value:e,tabValues:o})?e:null})();return(0,l.Z)(()=>{j&&h(j)},[j]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!p({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);h(e),b(e),g(e)},[b,g,o]),tabValues:o}}(e);return(0,n.jsxs)("div",{className:(0,o.Z)("tabs-container","tabList_Qoir"),children:[(0,n.jsx)(v,f({},r,e)),(0,n.jsx)(g,f({},r,e))]})}function y(e){let r=(0,h.Z)();return(0,n.jsx)(j,b(f({},e),{children:m(e.children)}),String(r))}},74356:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var n=t(24246),a=t(71670),o=t(97555),i=t(61132);let s={sidebar_position:5,slug:"/api/themes/@docusaurus/theme-mermaid"},l="\u{1F4E6} theme-mermaid",u={id:"api/themes/theme-mermaid",title:"\u{1F4E6} theme-mermaid",description:"This theme provides a @theme/Mermaid component that is powered by mermaid. You can read more on diagrams documentation.",source:"@site/docs/api/themes/theme-mermaid.mdx",sourceDirName:"api/themes",slug:"/api/themes/@docusaurus/theme-mermaid",permalink:"/docs/api/themes/@docusaurus/theme-mermaid",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/themes/theme-mermaid.mdx",tags:[],version:"current",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1724431482e3,sidebarPosition:5,frontMatter:{sidebar_position:5,slug:"/api/themes/@docusaurus/theme-mermaid"},sidebar:"api",previous:{title:"\u{1F4E6} theme-search-algolia",permalink:"/docs/api/themes/@docusaurus/theme-search-algolia"},next:{title:"\u{1F4E6} create-docusaurus",permalink:"/docs/api/misc/create-docusaurus"}},c={},d=[{value:"Configuration",id:"configuration",level:2}];function m(e){let r={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"-theme-mermaid",children:"\u{1F4E6} theme-mermaid"})}),"\n",(0,n.jsxs)(r.p,{children:["This theme provides a ",(0,n.jsx)(r.code,{children:"@theme/Mermaid"})," component that is powered by ",(0,n.jsx)(r.a,{href:"https://mermaid-js.github.io/",children:"mermaid"}),". You can read more on ",(0,n.jsx)(r.a,{href:"/docs/markdown-features/diagrams",children:"diagrams"})," documentation."]}),"\n",(0,n.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,n.jsx)(i.Z,{value:"npm",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"npm install --save @docusaurus/theme-mermaid\n"})})}),(0,n.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"yarn add @docusaurus/theme-mermaid\n"})})}),(0,n.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"pnpm add @docusaurus/theme-mermaid\n"})})})]}),"\n",(0,n.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themes: ['@docusaurus/theme-mermaid'],\n  // In order for Mermaid code blocks in Markdown to work,\n  // you also need to enable the Remark plugin with this option\n  markdown: {\n    mermaid: true,\n  },\n};\n"})})]})}function p(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},71670:(e,r,t)=>{t.d(r,{Z:()=>s,a:()=>i});var n=t(27378);let a={},o=n.createContext(a);function i(e){let r=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);