"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[89387],{25728:(e,t,n)=>{n.d(t,{Z:()=>r});let r="/**\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nimport type {SidebarsConfig} from '@docusaurus/plugin-content-docs';\n\nconst sidebars: SidebarsConfig = {\n  docs: [\n    'introduction',\n    {\n      type: 'category',\n      label: 'Getting Started',\n      link: {\n        type: 'generated-index',\n      },\n      collapsed: false,\n      items: [\n        'installation',\n        'configuration',\n        'playground',\n        'typescript-support',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Guides',\n      link: {\n        type: 'generated-index',\n        title: 'Docusaurus Guides',\n        description:\n          \"Let's learn about the most important Docusaurus concepts!\",\n        keywords: ['guides'],\n        image: '/img/docusaurus.png',\n      },\n      items: [\n        'guides/creating-pages',\n        {\n          type: 'category',\n          label: 'Docs',\n          link: {\n            type: 'doc',\n            id: 'guides/docs/introduction',\n          },\n          items: [\n            'guides/docs/create-doc',\n            {\n              type: 'category',\n              label: 'Sidebar',\n              link: {\n                type: 'doc',\n                id: 'guides/docs/sidebar/index',\n              },\n              items: [\n                'guides/docs/sidebar/items',\n                'guides/docs/sidebar/autogenerated',\n                'guides/docs/sidebar/multiple-sidebars',\n              ],\n            },\n            'guides/docs/versioning',\n            'guides/docs/multi-instance',\n          ],\n        },\n        'blog',\n        {\n          type: 'category',\n          label: 'Markdown Features',\n          link: {\n            type: 'doc',\n            id: 'guides/markdown-features/introduction',\n          },\n          items: [\n            'guides/markdown-features/react',\n            'guides/markdown-features/tabs',\n            'guides/markdown-features/code-blocks',\n            'guides/markdown-features/admonitions',\n            'guides/markdown-features/toc',\n            'guides/markdown-features/assets',\n            'guides/markdown-features/links',\n            'guides/markdown-features/plugins',\n            'guides/markdown-features/math-equations',\n            'guides/markdown-features/diagrams',\n            'guides/markdown-features/head-metadata',\n          ],\n        },\n        'styling-layout',\n        'swizzling',\n        'static-assets',\n        'search',\n        'browser-support',\n        'seo',\n        'using-plugins',\n        'deployment',\n        {\n          type: 'category',\n          label: 'Internationalization',\n          link: {type: 'doc', id: 'i18n/introduction'},\n          items: [\n            {\n              type: 'doc',\n              id: 'i18n/tutorial',\n              label: 'Tutorial',\n            },\n            {\n              type: 'doc',\n              id: 'i18n/git',\n              label: 'Using Git',\n            },\n            {\n              type: 'doc',\n              id: 'i18n/crowdin',\n              label: 'Using Crowdin',\n            },\n          ],\n        },\n        'guides/whats-next',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Advanced Guides',\n      link: {type: 'doc', id: 'advanced/index'},\n      items: [\n        'advanced/architecture',\n        'advanced/plugins',\n        'advanced/routing',\n        'advanced/ssg',\n        'advanced/client',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Upgrading',\n      link: {\n        type: 'doc',\n        id: 'migration/index',\n      },\n      items: [\n        'migration/v3',\n        // TODO do we want to keep upgrade docs for older Docusaurus versions?\n        // It contains links to docs of current version :/\n        {\n          type: 'category',\n          label: 'To Docusaurus v2',\n          items: [\n            'migration/v2/migration-overview',\n            'migration/v2/migration-automated',\n            'migration/v2/migration-manual',\n            'migration/v2/migration-versioned-sites',\n            'migration/v2/migration-translated-sites',\n          ],\n        },\n      ],\n    },\n  ],\n  api: [\n    'cli',\n    'docusaurus-core',\n    {\n      type: 'autogenerated',\n      dirName: 'api',\n    },\n  ],\n};\n\nexport default sidebars;\n"},24239:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(24246);n(27378);var o=n(40624),s=n(97298),i=n(41428),c=n(7812),a=n(64149),l=n(36712),d=n(52615);let u={cardContainer:"cardContainer_Uewx",cardTitle:"cardTitle_dwRT",cardDescription:"cardDescription_mCBT"};function b({href:e,children:t}){return(0,r.jsx)(i.Z,{href:e,className:(0,o.Z)("card padding--lg",u.cardContainer),children:t})}function p({href:e,icon:t,title:n,description:s}){return(0,r.jsxs)(b,{href:e,children:[(0,r.jsxs)(d.Z,{as:"h2",className:(0,o.Z)("text--truncate",u.cardTitle),title:n,children:[t," ",n]}),s&&(0,r.jsx)("p",{className:(0,o.Z)("text--truncate",u.cardDescription),title:s,children:s})]})}function f({item:e}){var t;let n=(0,s.LM)(e),o=function(){let{selectMessage:e}=(0,c.c)();return t=>e(t,(0,l.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,r.jsx)(p,{href:n,icon:"\u{1F5C3}\uFE0F",title:e.label,description:null!==(t=e.description)&&void 0!==t?t:o(e.items.length)}):null}function g({item:e}){var t,n;let o=(0,a.Z)(e.href)?"\u{1F4C4}\uFE0F":"\u{1F517}",i=(0,s.xz)(null!==(t=e.docId)&&void 0!==t?t:void 0);return(0,r.jsx)(p,{href:e.href,icon:o,title:e.label,description:null!==(n=e.description)&&void 0!==n?n:null==i?void 0:i.description})}function h({item:e}){switch(e.type){case"link":return(0,r.jsx)(g,{item:e});case"category":return(0,r.jsx)(f,{item:e});default:throw Error(`unknown item type ${JSON.stringify(e)}`)}}function m({className:e}){let t=(0,s.jA)();return(0,r.jsx)(j,{items:t.items,className:e})}function j(e){let{items:t,className:n}=e;if(!t)return(0,r.jsx)(m,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({},e));let i=(0,s.MN)(t);return(0,r.jsx)("section",{className:(0,o.Z)("row",n),children:i.map((e,t)=>(0,r.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,r.jsx)(h,{item:e})},t))})}},7812:(e,t,n)=>{n.d(t,{c:()=>a});var r=n(27378),o=n(4423);let s=["zero","one","two","few","many","other"];function i(e){return s.filter(t=>e.includes(t))}let c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function a(){let e=function(){let{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)(()=>{try{return function(e){let t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".
Docusaurus will fallback to the default (English) implementation.
Error: ${t.message}
`),c}},[e])}();return{selectMessage:(t,n)=>(function(e,t,n){let r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);let o=n.select(t);return r[Math.min(n.pluralForms.indexOf(o),r.length-1)]})(n,t,e)}}},94544:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(24246);n(27378);var o=n(29088);function s({children:e,fallback:t}){return(0,o.Z)()?(0,r.jsx)(r.Fragment,{children:null==e?void 0:e()}):null!=t?t:null}},38112:(e,t,n)=>{n.d(t,{Z:()=>ec});var r,o,s,i={};n.r(i),n.d(i,{ButtonExample:()=>N});var c=n(24246),a=n(27378),l=n(40624),d=n(29088),u=n(32711),b=n(36712),p=n(4423),f=n(94544),g=n(30691),h=n(78844),m=n(73919);function j(){let{prism:e}=(0,m.L)(),{colorMode:t}=(0,h.I)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var y=n(88941);function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}function v({children:e}){return(0,c.jsx)("div",{className:(0,l.Z)("playgroundHeader_Tvsk"),children:e})}function x(){return(0,c.jsx)("div",{children:"Loading..."})}function w(){return(0,c.jsx)(f.Z,{fallback:(0,c.jsx)(x,{}),children:()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(y.Z,{fallback:e=>(0,c.jsx)(g.Ac,O({},e)),children:(0,c.jsx)(u.i5,{})}),(0,c.jsx)(u.IF,{})]})})}function P(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(v,{children:(0,c.jsx)(b.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks",children:"Result"})}),(0,c.jsx)("div",{className:"playgroundPreview_mApW",children:(0,c.jsx)(w,{})})]})}function k(){let e=(0,d.Z)();return(0,c.jsx)(u.uz,{className:"playgroundEditor_TySg"},String(e))}function S(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(v,{children:(0,c.jsx)(b.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks",children:"Live Editor"})}),(0,c.jsx)(k,{})]})}let B=e=>`${e};`;function C(e){var t,n,r,o,{children:s,transformCode:i}=e,a=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["children","transformCode"]);let{siteConfig:{themeConfig:l}}=(0,p.Z)(),{liveCodeBlock:{playgroundPosition:d}}=l,b=j(),f=null!==(o=null===(r=a.metastring)||void 0===r?void 0:r.includes("noInline"))&&void 0!==o&&o;return(0,c.jsx)("div",{className:"playgroundContainer_6Ior",children:(0,c.jsx)(u.nu,(t=O({code:null==s?void 0:s.replace(/\n$/,""),noInline:f,transformCode:null!=i?i:B,theme:b},a),n=n={children:"top"===d?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(P,{}),(0,c.jsx)(S,{})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(S,{}),(0,c.jsx)(P,{})]})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}),t))})}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}function N(e){var t,n;return(0,c.jsx)("button",(t=D({type:"button"},e),n=n={style:D({backgroundColor:"white",color:"black",border:"solid red",borderRadius:20,padding:10,cursor:"pointer"},e.style)},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}),t))}let E=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({React:a},a,i);var I=n(89583),L=n(6324),T=n.n(L);let Z=RegExp("title=(?<quote>[\"'])(?<title>.*?)\\1"),_=RegExp("\\{(?<range>[\\d,-]+)\\}"),A={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"<!--",end:"-->"}},F=(r=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({},A),o=o={lua:{start:"--",end:""},wasm:{start:"\\;\\;",end:""},tex:{start:"%",end:""},vb:{start:"['\u2018\u2019]",end:""},vbnet:{start:"(?:_\\s*)?['\u2018\u2019]",end:""},rem:{start:"[Rr][Ee][Mm]\\b",end:""},f90:{start:"!",end:""},ml:{start:"\\(\\*",end:"\\*\\)"},cobol:{start:"\\*>",end:""}},Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}),r),$=Object.keys(A);function M(e,t){let n=e.map(e=>{let{start:n,end:r}=F[e];return`(?:${n}\\s*(${t.flatMap(e=>{var t,n;return[e.line,null===(t=e.block)||void 0===t?void 0:t.start,null===(n=e.block)||void 0===n?void 0:n.end].filter(Boolean)}).join("|")})\\s*${r})`}).join("|");return RegExp(`^\\s*(?:${n})\\s*$`)}function z(e){var t,n,{as:r}=e,o=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["as"]);let s=function(e){let t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach(([e,r])=>{let o=t[e];o&&"string"==typeof r&&(n[o]=r)}),n}(j());return(0,c.jsx)(r,(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({},o),n=n={style:s,className:(0,l.Z)(o.className,"codeBlockContainer_jDV4",I.k.common.codeBlock)},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}),t))}let R={codeBlockContent:"codeBlockContent_vx7S",codeBlockTitle:"codeBlockTitle_bdru",codeBlock:"codeBlock_Gebt",codeBlockStandalone:"codeBlockStandalone_i_cY",codeBlockLines:"codeBlockLines_FJaf",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_FU9Q",buttonGroup:"buttonGroup_cUGO"};function H({children:e,className:t}){return(0,c.jsx)(z,{as:"pre",tabIndex:0,className:(0,l.Z)(R.codeBlockStandalone,"thin-scrollbar",t),children:(0,c.jsx)("code",{className:R.codeBlockLines,children:e})})}var W=n(51114);let G={attributes:!0,characterData:!0,childList:!0,subtree:!0};var U=n(26101);let V={codeLine:"codeLine_qRmp",codeLineNumber:"codeLineNumber_dS_J",codeLineContent:"codeLineContent_XF5l"};function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}function Q({line:e,classNames:t,showLineNumbers:n,getLineProps:r,getTokenProps:o}){var s,i;1===e.length&&"\n"===e[0].content&&(e[0].content="");let a=r({line:e,className:(0,l.Z)(t,n&&V.codeLine)}),d=e.map((e,t)=>(0,c.jsx)("span",q({},o({token:e})),t));return(0,c.jsxs)("span",(s=q({},a),i=i={children:[n?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("span",{className:V.codeLineNumber}),(0,c.jsx)("span",{className:V.codeLineContent,children:d})]}):d,(0,c.jsx)("br",{})]},Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(i)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(i)).forEach(function(e){Object.defineProperty(s,e,Object.getOwnPropertyDescriptor(i,e))}),s))}var J=n(34370);function X(e){var t,n;return(0,c.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({viewBox:"0 0 24 24"},e),n=n={children:(0,c.jsx)("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}),t))}function Y(e){var t,n;return(0,c.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({viewBox:"0 0 24 24"},e),n=n={children:(0,c.jsx)("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}),t))}let K={copyButtonCopied:"copyButtonCopied_OkN_",copyButtonIcons:"copyButtonIcons_OqsO",copyButtonIcon:"copyButtonIcon_PgCn",copyButtonSuccessIcon:"copyButtonSuccessIcon_bsQG"};function ee({code:e,className:t}){let[n,r]=(0,a.useState)(!1),o=(0,a.useRef)(void 0),s=(0,a.useCallback)(()=>{(0,J.Z)(e),r(!0),o.current=window.setTimeout(()=>{r(!1)},1e3)},[e]);return(0,a.useEffect)(()=>()=>window.clearTimeout(o.current),[]),(0,c.jsx)("button",{type:"button","aria-label":n?(0,b.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,b.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,b.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,l.Z)("clean-btn",t,K.copyButton,n&&K.copyButtonCopied),onClick:s,children:(0,c.jsxs)("span",{className:K.copyButtonIcons,"aria-hidden":"true",children:[(0,c.jsx)(X,{className:K.copyButtonIcon}),(0,c.jsx)(Y,{className:K.copyButtonSuccessIcon})]})})}function et(e){var t,n;return(0,c.jsx)("svg",(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({viewBox:"0 0 24 24"},e),n=n={children:(0,c.jsx)("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}),t))}let en={wordWrapButtonIcon:"wordWrapButtonIcon_MQXS",wordWrapButtonEnabled:"wordWrapButtonEnabled_TBIH"};function er({className:e,onClick:t,isEnabled:n}){let r=(0,b.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return(0,c.jsx)("button",{type:"button",onClick:t,className:(0,l.Z)("clean-btn",e,n&&en.wordWrapButtonEnabled),"aria-label":r,title:r,children:(0,c.jsx)(et,{className:en.wordWrapButtonIcon,"aria-hidden":"true"})})}function eo({children:e,className:t="",metastring:n,title:r,showLineNumbers:o,language:s}){var i,d,u,b;let{prism:{defaultLanguage:p,magicComments:f}}=(0,m.L)(),g=null==(d=null!==(i=null!=s?s:function(e){let t=e.split(" ").find(e=>e.startsWith("language-"));return null==t?void 0:t.replace(/language-/,"")}(t))&&void 0!==i?i:p)?void 0:d.toLowerCase(),h=j(),y=function(){let[e,t]=(0,a.useState)(!1),[n,r]=(0,a.useState)(!1),o=(0,a.useRef)(null),s=(0,a.useCallback)(()=>{let n=o.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t(e=>!e)},[o,e]),i=(0,a.useCallback)(()=>{let{scrollWidth:e,clientWidth:t}=o.current;r(e>t||o.current.querySelector("code").hasAttribute("style"))},[o]);return!function(e,t){let[n,r]=(0,a.useState)(),o=(0,a.useCallback)(()=>{var t;r(null===(t=e.current)||void 0===t?void 0:t.closest("[role=tabpanel][hidden]"))},[e,r]);(0,a.useEffect)(()=>{o()},[o]),function(e,t,n=G){let r=(0,W.zX)(t),o=(0,W.Ql)(n);(0,a.useEffect)(()=>{let t=new MutationObserver(r);return e&&t.observe(e,o),()=>t.disconnect()},[e,r,o])}(n,e=>{e.forEach(e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),o())})},{attributes:!0,characterData:!1,childList:!1,subtree:!1})}(o,i),(0,a.useEffect)(()=>{i()},[e,i]),(0,a.useEffect)(()=>(window.addEventListener("resize",i,{passive:!0}),()=>{window.removeEventListener("resize",i)}),[i]),{codeBlockRef:o,isEnabled:e,isCodeScrollable:n,toggle:s}}(),O=(null!==(b=null==n?void 0:null===(u=n.match(Z))||void 0===u?void 0:u.groups.title)&&void 0!==b?b:"")||r,{lineClassNames:v,code:x}=function(e,t){let n=e.replace(/\n$/,""),{language:r,magicComments:o,metastring:s}=t;if(s&&_.test(s)){let e=s.match(_).groups.range;if(0===o.length)throw Error(`A highlight range has been given in code block's metastring (\`\`\` ${s}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);let t=o[0].className;return{lineClassNames:Object.fromEntries(T()(e).filter(e=>e>0).map(e=>[e-1,[t]])),code:n}}if(void 0===r)return{lineClassNames:{},code:n};let i=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return M(["js","jsBlock"],t);case"jsx":case"tsx":return M(["js","jsBlock","jsx"],t);case"html":return M(["js","jsBlock","html"],t);case"python":case"py":case"bash":return M(["bash"],t);case"markdown":case"md":return M(["html","jsx","bash"],t);case"tex":case"latex":case"matlab":return M(["tex"],t);case"lua":case"haskell":case"sql":return M(["lua"],t);case"wasm":return M(["wasm"],t);case"vb":case"vba":case"visual-basic":return M(["vb","rem"],t);case"vbnet":return M(["vbnet","rem"],t);case"batch":return M(["rem"],t);case"basic":return M(["rem","f90"],t);case"fsharp":return M(["js","ml"],t);case"ocaml":case"sml":return M(["ml"],t);case"fortran":return M(["f90"],t);case"cobol":return M(["cobol"],t);default:return M($,t)}}(r,o),c=n.split("\n"),a=Object.fromEntries(o.map(e=>[e.className,{start:0,range:""}])),l=Object.fromEntries(o.filter(e=>e.line).map(({className:e,line:t})=>[t,e])),d=Object.fromEntries(o.filter(e=>e.block).map(({className:e,block:t})=>[t.start,e])),u=Object.fromEntries(o.filter(e=>e.block).map(({className:e,block:t})=>[t.end,e]));for(let e=0;e<c.length;){let t=c[e].match(i);if(!t){e+=1;continue}let n=t.slice(1).find(e=>void 0!==e);l[n]?a[l[n]].range+=`${e},`:d[n]?a[d[n]].start=e:u[n]&&(a[u[n]].range+=`${a[u[n]].start}-${e-1},`),c.splice(e,1)}n=c.join("\n");let b={};return Object.entries(a).forEach(([e,{range:t}])=>{T()(t).forEach(t=>{var n;null!==(n=b[t])&&void 0!==n||(b[t]=[]),b[t].push(e)})}),{lineClassNames:b,code:n}}(e,{metastring:n,language:g,magicComments:f}),w=null!=o?o:!!(null==n?void 0:n.includes("showLineNumbers"));return(0,c.jsxs)(z,{as:"div",className:(0,l.Z)(t,g&&!t.includes(`language-${g}`)&&`language-${g}`),children:[O&&(0,c.jsx)("div",{className:R.codeBlockTitle,children:O}),(0,c.jsxs)("div",{className:R.codeBlockContent,children:[(0,c.jsx)(U.y$,{theme:h,code:x,language:null!=g?g:"text",children:({className:e,style:t,tokens:n,getLineProps:r,getTokenProps:o})=>(0,c.jsx)("pre",{tabIndex:0,ref:y.codeBlockRef,className:(0,l.Z)(e,R.codeBlock,"thin-scrollbar"),style:t,children:(0,c.jsx)("code",{className:(0,l.Z)(R.codeBlockLines,w&&R.codeBlockLinesWithNumbering),children:n.map((e,t)=>(0,c.jsx)(Q,{line:e,getLineProps:r,getTokenProps:o,classNames:v[t],showLineNumbers:w},t))})})}),(0,c.jsxs)("div",{className:R.buttonGroup,children:[(y.isEnabled||y.isCodeScrollable)&&(0,c.jsx)(er,{className:R.codeButton,onClick:()=>y.toggle(),isEnabled:y.isEnabled}),(0,c.jsx)(ee,{className:R.codeButton,code:x})]})]})]})}function es(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}let ei=(s=function(e){var t,n,{children:r}=e,o=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["children"]);let s=(0,d.Z)(),i=a.Children.toArray(r).some(e=>(0,a.isValidElement)(e))?r:Array.isArray(r)?r.join(""):r,l="string"==typeof i?eo:H;return(0,c.jsx)(l,(t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({},o),n=n={children:i},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}),t),String(s))},function(e){return e.live?(0,c.jsx)(C,es({scope:E},e)):(0,c.jsx)(s,es({},e))});function ec(e){return(0,c.jsx)(ei,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){var r;r=n[t],t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r})}return e}({},e))}},14898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=n(24246),o=n(71670),s=n(24239),i=n(38112);let c={slug:"/sidebar"},a="Sidebar",l={id:"guides/docs/sidebar/index",title:"Sidebar",description:"Creating a sidebar is useful to:",source:"@site/docs/guides/docs/sidebar/index.mdx",sourceDirName:"guides/docs/sidebar",slug:"/sidebar",permalink:"/docs/sidebar",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/docs/sidebar/index.mdx",tags:[],version:"current",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1724431482e3,frontMatter:{slug:"/sidebar"},sidebar:"docs",previous:{title:"Create a doc",permalink:"/docs/create-doc"},next:{title:"Sidebar items",permalink:"/docs/sidebar/items"}},d={},u=[{value:"Default sidebar",id:"default-sidebar",level:2},{value:"Sidebar object",id:"sidebar-object",level:2},{value:"Theme configuration",id:"theme-configuration",level:2},{value:"Hideable sidebar",id:"hideable-sidebar",level:3},{value:"Auto-collapse sidebar categories",id:"auto-collapse-sidebar-categories",level:3},{value:"Passing custom props",id:"passing-custom-props",level:2},{value:"Sidebar Breadcrumbs",id:"sidebar-breadcrumbs",level:2},{value:"Complex sidebars example",id:"complex-sidebars-example",level:2}];function b(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"sidebar",children:"Sidebar"})}),"\n",(0,r.jsx)(t.p,{children:"Creating a sidebar is useful to:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Group multiple ",(0,r.jsx)(t.strong,{children:"related documents"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Display a sidebar"})," on each of those documents"]}),"\n",(0,r.jsxs)(t.li,{children:["Provide ",(0,r.jsx)(t.strong,{children:"paginated navigation"}),", with next/previous button"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"To use sidebars on your Docusaurus site:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Define a file that exports a dictionary of ",(0,r.jsx)(t.a,{href:"#sidebar-object",children:"sidebar objects"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["Pass this object into the ",(0,r.jsx)(t.code,{children:"@docusaurus/plugin-docs"})," plugin directly or via ",(0,r.jsx)(t.code,{children:"@docusaurus/preset-classic"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          sidebarPath: './sidebars.js',\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,r.jsx)(t.p,{children:"This section serves as an overview of miscellaneous features of the doc sidebar. In the following sections, we will more systematically introduce the following concepts:"}),"\n","\n",(0,r.jsx)(s.Z,{}),"\n",(0,r.jsx)(t.h2,{id:"default-sidebar",children:"Default sidebar"}),"\n",(0,r.jsxs)(t.p,{children:["If the ",(0,r.jsx)(t.code,{children:"sidebarPath"})," is unspecified, Docusaurus ",(0,r.jsx)(t.a,{href:"/docs/sidebar/autogenerated",children:"automatically generates a sidebar"})," for you, by using the filesystem structure of the ",(0,r.jsx)(t.code,{children:"docs"})," folder:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    {\n      type: 'autogenerated',\n      dirName: '.', // generate sidebar from the docs folder (or versioned_docs/<version>)\n    },\n  ],\n};\n"})}),"\n",(0,r.jsx)(t.p,{children:"You can also define your sidebars explicitly."}),"\n",(0,r.jsx)(t.h2,{id:"sidebar-object",children:"Sidebar object"}),"\n",(0,r.jsx)(t.p,{children:"A sidebar at its crux is a hierarchy of categories, doc links, and other hyperlinks."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"type Sidebar =\n  // Normal syntax\n  | SidebarItem[]\n  // Shorthand syntax\n  | {[categoryLabel: string]: SidebarItem[]};\n"})}),"\n",(0,r.jsx)(t.p,{children:"For example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="sidebars.js"',children:"export default {\n  mySidebar: [\n    {\n      type: 'category',\n      label: 'Getting Started',\n      items: [\n        {\n          type: 'doc',\n          id: 'doc1',\n        },\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Docusaurus',\n      items: [\n        {\n          type: 'doc',\n          id: 'doc2',\n        },\n        {\n          type: 'doc',\n          id: 'doc3',\n        },\n      ],\n    },\n    {\n      type: 'link',\n      label: 'Learn more',\n      href: 'https://example.com',\n    },\n  ],\n};\n"})}),"\n",(0,r.jsxs)(t.p,{children:["This is a sidebars file that exports one sidebar, called ",(0,r.jsx)(t.code,{children:"mySidebar"}),". It has three top-level items: two categories and one external link. Within each category, there are a few doc links."]}),"\n",(0,r.jsxs)(t.p,{children:["A sidebars file can contain ",(0,r.jsx)(t.a,{href:"/docs/sidebar/multiple-sidebars",children:(0,r.jsx)(t.strong,{children:"multiple sidebar objects"})}),", identified by their object keys."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"type SidebarsFile = {\n  [sidebarID: string]: Sidebar;\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"theme-configuration",children:"Theme configuration"}),"\n",(0,r.jsx)(t.h3,{id:"hideable-sidebar",children:"Hideable sidebar"}),"\n",(0,r.jsxs)(t.p,{children:["By enabling the ",(0,r.jsx)(t.code,{children:"themeConfig.docs.sidebar.hideable"})," option, you can make the entire sidebar hideable, allowing users to better focus on the content. This is especially useful when content is consumed on medium-sized screens (e.g. tablets)."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    // highlight-start\n    docs: {\n      sidebar: {\n        hideable: true,\n      },\n    },\n    // highlight-end\n  },\n};\n"})}),"\n",(0,r.jsx)(t.h3,{id:"auto-collapse-sidebar-categories",children:"Auto-collapse sidebar categories"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"themeConfig.docs.sidebar.autoCollapseCategories"})," option would collapse all sibling categories when expanding one category. This saves the user from having too many categories open and helps them focus on the selected section."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    // highlight-start\n    docs: {\n      sidebar: {\n        autoCollapseCategories: true,\n      },\n    },\n    // highlight-end\n  },\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"passing-custom-props",children:"Passing custom props"}),"\n",(0,r.jsxs)(t.p,{children:["To pass in custom props to a sidebar item, add the optional ",(0,r.jsx)(t.code,{children:"customProps"})," object to any of the items. This is useful to apply site customizations by swizzling React components rendering sidebar items."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:"{\n  type: 'doc',\n  id: 'doc1',\n  // highlight-start\n  customProps: {\n    badges: ['new', 'green'],\n    featured: true,\n  },\n  // highlight-end\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"sidebar-breadcrumbs",children:"Sidebar Breadcrumbs"}),"\n",(0,r.jsx)(t.p,{children:'By default, breadcrumbs are rendered at the top, using the "sidebar path" of the current page.'}),"\n",(0,r.jsx)(t.p,{children:"This behavior can be disabled with plugin options:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          // highlight-next-line\n          breadcrumbs: false,\n        },\n      },\n    ],\n  ],\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"complex-sidebars-example",children:"Complex sidebars example"}),"\n",(0,r.jsx)(t.p,{children:"A real-world example from the Docusaurus site:"}),"\n","\n",(0,r.jsx)(i.Z,{language:"js",title:"sidebars.js",children:n(25728).Z.split("\n").map(e=>!["//","/*","*"].some(t=>e.trim().startsWith(t))&&e).filter(Boolean).join("\n")})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}}}]);