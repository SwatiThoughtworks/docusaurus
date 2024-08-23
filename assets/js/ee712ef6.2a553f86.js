"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64569],{61132:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(24246);r(27378);var a=r(40624);function o({children:e,hidden:t,className:r}){return(0,n.jsx)("div",{role:"tabpanel",className:(0,a.Z)("tabItem_pnkT",r),hidden:t,children:e})}},97555:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(24246),a=r(27378),o=r(40624),i=r(75527),l=r(3620),s=r(44479),c=r(62821),u=r(52196),d=r(53589);function h(e){var t,r;return null!==(r=null===(t=a.Children.toArray(e).filter(e=>"\n"!==e).map(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){let{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))||void 0===t?void 0:t.filter(Boolean))&&void 0!==r?r:[]}function p({value:e,tabValues:t}){return t.some(t=>t.value===e)}var b=r(29088);function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}function m(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}),e}function v({className:e,block:t,selectedValue:r,selectValue:a,tabValues:l}){let s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{let t=e.currentTarget,n=l[s.indexOf(t)].value;n!==r&&(c(t),a(n))},d=e=>{var t,r;let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{let r=s.indexOf(e.currentTarget)+1;n=null!==(t=s[r])&&void 0!==t?t:s[0];break}case"ArrowLeft":{let t=s.indexOf(e.currentTarget)-1;n=null!==(r=s[t])&&void 0!==r?r:s[s.length-1]}}null==n||n.focus()};return(0,n.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},e),children:l.map(({value:e,label:t,attributes:a})=>(0,n.jsx)("li",m(f({role:"tab",tabIndex:r===e?0:-1,"aria-selected":r===e,ref:e=>s.push(e),onKeyDown:d,onClick:u},a),{className:(0,o.Z)("tabs__item","tabItem_AQgk",null==a?void 0:a.className,{"tabs__item--active":r===e}),children:null!=t?t:e}),e))})}function g({lazy:e,children:t,selectedValue:r}){let i=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){let e=i.find(e=>e.props.value===r);return e?(0,a.cloneElement)(e,{className:(0,o.Z)("margin-top--md",e.props.className)}):null}return(0,n.jsx)("div",{className:"margin-top--md",children:i.map((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))})}function y(e){let t=function(e){let{defaultValue:t,queryString:r=!1,groupId:n}=e,o=function(e){let{values:t,children:r}=e;return(0,a.useMemo)(()=>{let e=null!=t?t:h(r).map(({props:{value:e,label:t,attributes:r,default:n}})=>({value:e,label:t,attributes:r,default:n}));return!function(e){let t=(0,u.lx)(e,(e,t)=>e.value===t.value);if(t.length>0)throw Error(`Docusaurus error: Duplicate values "${t.map(e=>e.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e},[t,r])}(e),[i,b]=(0,a.useState)(()=>(function({defaultValue:e,tabValues:t}){var r;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!p({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(e=>e.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let n=null!==(r=t.find(e=>e.default))&&void 0!==r?r:t[0];if(!n)throw Error("Unexpected error: 0 tabValues");return n.value})({defaultValue:t,tabValues:o})),[f,m]=function({queryString:e=!1,groupId:t}){let r=(0,l.k6)(),n=function({queryString:e=!1,groupId:t}){if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:e,groupId:t});return[(0,c._X)(n),(0,a.useCallback)(e=>{var t,a;if(!n)return;let o=new URLSearchParams(r.location.search);o.set(n,e),r.replace((t=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){var n;n=r[t],t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n})}return e}({},r.location),a=a={search:o.toString()},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):(function(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r.push.apply(r,n)}return r})(Object(a)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}),t))},[n,r])]}({queryString:r,groupId:n}),[v,g]=function({groupId:e}){let t=e?`docusaurus.tab.${e}`:null,[r,n]=(0,d.Nk)(t);return[r,(0,a.useCallback)(e=>{t&&n.set(e)},[t,n])]}({groupId:n}),y=(()=>{let e=null!=f?f:v;return p({value:e,tabValues:o})?e:null})();return(0,s.Z)(()=>{y&&b(y)},[y]),{selectedValue:i,selectValue:(0,a.useCallback)(e=>{if(!p({value:e,tabValues:o}))throw Error(`Can't select invalid tab value=${e}`);b(e),m(e),g(e)},[m,g,o]),tabValues:o}}(e);return(0,n.jsxs)("div",{className:(0,o.Z)("tabs-container","tabList_Qoir"),children:[(0,n.jsx)(v,f({},t,e)),(0,n.jsx)(g,f({},t,e))]})}function j(e){let t=(0,b.Z)();return(0,n.jsx)(y,m(f({},e),{children:h(e.children)}),String(t))}},17674:(e,t,r)=>{r.d(t,{Z:()=>n});let n=r.p+"assets/images/architecture-5b7220912f5cfdff40a7728233abb902.png"},24833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(24246),a=r(71670);r(97555),r(61132);var o=r(47257);let i={description:"How Docusaurus works to build your app"},l="Architecture",s={id:"advanced/architecture",title:"Architecture",description:"How Docusaurus works to build your app",source:"@site/docs/advanced/architecture.mdx",sourceDirName:"advanced",slug:"/advanced/architecture",permalink:"/docs/advanced/architecture",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/advanced/architecture.mdx",tags:[],version:"current",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1724431482e3,frontMatter:{description:"How Docusaurus works to build your app"},sidebar:"docs",previous:{title:"Advanced Tutorials",permalink:"/docs/advanced/"},next:{title:"Plugins",permalink:"/docs/advanced/plugins"}},c={},u=[];function d(e){let t={a:"a",code:"code",h1:"h1",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"architecture",children:"Architecture"})}),"\n","\n",(0,n.jsx)(o.Z,{children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Architecture overview",src:r(17674).Z+"",width:"2228",height:"2007"})})}),"\n",(0,n.jsx)(t.p,{children:"This diagram shows how Docusaurus works to build your app. Plugins each collect their content and emit JSON data; themes provide layout components which receive the JSON data as route modules. The bundler bundles all the components and emits a server bundle and a client bundle."}),"\n",(0,n.jsx)(t.p,{children:"Although you (either plugin authors or site creators) are writing JavaScript all the time, bear in mind that the JS is actually run in different environments:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["All plugin lifecycle methods are run in Node. Therefore, until we support ES Modules in our codebase, plugin source code must be provided as ES modules that can be imported, or CommonJS that can be ",(0,n.jsx)(t.code,{children:"require"}),"'d."]}),"\n",(0,n.jsx)(t.li,{children:"The theme code is built with Webpack. They can be provided as ESM\u2014following React conventions."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Plugin code and theme code never directly import each other: they only communicate through protocols (in our case, through JSON temp files and calls to ",(0,n.jsx)(t.code,{children:"addRoute"}),"). A useful mental model is to imagine that the plugins are not written in JavaScript, but in another language like Rust. The only way to interact with plugins for the user is through ",(0,n.jsx)(t.code,{children:"docusaurus.config.js"}),", which itself is run in Node (hence you can use ",(0,n.jsx)(t.code,{children:"require"})," and pass callbacks as plugin options)."]}),"\n",(0,n.jsxs)(t.p,{children:["During bundling, the config file itself is serialized and bundled, allowing the theme to access config options like ",(0,n.jsx)(t.code,{children:"themeConfig"})," or ",(0,n.jsx)(t.code,{children:"baseUrl"})," through ",(0,n.jsx)(t.a,{href:"/docs/docusaurus-core#useDocusaurusContext",children:(0,n.jsx)(t.code,{children:"useDocusaurusContext()"})}),". However, the ",(0,n.jsx)(t.code,{children:"siteConfig"})," object only contains ",(0,n.jsx)(t.strong,{children:"serializable values"})," (values that are preserved after ",(0,n.jsx)(t.code,{children:"JSON.stringify()"}),"). Functions, regexes, etc. would be lost on the client side. The ",(0,n.jsx)(t.code,{children:"themeConfig"})," is designed to be entirely serializable."]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);