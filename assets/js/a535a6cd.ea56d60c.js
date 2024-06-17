"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27906],{91153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var i=n(24246),s=n(71670);const r={sidebar_position:2},o="Extending infrastructure",a={id:"api/plugin-methods/extend-infrastructure",title:"Extending infrastructure",description:"Docusaurus has some infrastructure like hot reloading, CLI, and swizzling, that can be extended by external plugins.",source:"@site/docs/api/plugin-methods/extend-infrastructure.mdx",sourceDirName:"api/plugin-methods",slug:"/api/plugin-methods/extend-infrastructure",permalink:"/docs/api/plugin-methods/extend-infrastructure",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/api/plugin-methods/extend-infrastructure.mdx",tags:[],version:"current",lastUpdatedBy:"S\xe9bastien Lorber",lastUpdatedAt:1718641778e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"api",previous:{title:"Lifecycle APIs",permalink:"/docs/api/plugin-methods/lifecycle-apis"},next:{title:"I18n lifecycles",permalink:"/docs/api/plugin-methods/i18n-lifecycles"}},c={},d=[{value:"<code>getPathsToWatch()</code>",id:"getPathsToWatch",level:2},{value:"<code>extendCli(cli)</code>",id:"extendCli",level:2},{value:"<code>getThemePath()</code>",id:"getThemePath",level:2},{value:"<code>getTypeScriptThemePath()</code>",id:"getTypeScriptThemePath",level:2},{value:"<code>getSwizzleComponentList()</code>",id:"getSwizzleComponentList",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"extending-infrastructure",children:"Extending infrastructure"}),"\n",(0,i.jsx)(t.p,{children:"Docusaurus has some infrastructure like hot reloading, CLI, and swizzling, that can be extended by external plugins."}),"\n",(0,i.jsx)(t.h2,{id:"getPathsToWatch",children:(0,i.jsx)(t.code,{children:"getPathsToWatch()"})}),"\n",(0,i.jsxs)(t.p,{children:["Specifies the paths to watch for plugins and themes. The paths are watched by the dev server so that the plugin lifecycles are reloaded when contents in the watched paths change. Note that the plugins and themes modules are initially called with ",(0,i.jsx)(t.code,{children:"context"})," and ",(0,i.jsx)(t.code,{children:"options"})," from Node, which you may use to find the necessary directory information about the site."]}),"\n",(0,i.jsx)(t.p,{children:"Use this for files that are consumed server-side, because theme files are automatically watched by Webpack dev server."}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',children:"import path from 'path';\n\nexport default function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // highlight-start\n    getPathsToWatch() {\n      const contentPath = path.resolve(context.siteDir, options.path);\n      return [`${contentPath}/**/*.{ts,tsx}`];\n    },\n    // highlight-end\n  };\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"extendCli",children:(0,i.jsx)(t.code,{children:"extendCli(cli)"})}),"\n",(0,i.jsxs)(t.p,{children:["Register an extra command to enhance the CLI of Docusaurus. ",(0,i.jsx)(t.code,{children:"cli"})," is a ",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/commander/v/5.1.0",children:"commander"})," object."]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"The commander version matters! We use commander v5, and make sure you are referring to the right version documentation for available APIs."})}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:'title="docusaurus-plugin/src/index.js"',children:"export default function (context, options) {\n  return {\n    name: 'docusaurus-plugin',\n    // highlight-start\n    extendCli(cli) {\n      cli\n        .command('roll')\n        .description('Roll a random number between 1 and 1000')\n        .action(() => {\n          console.log(Math.floor(Math.random() * 1000 + 1));\n        });\n    },\n    // highlight-end\n  };\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"getThemePath",children:(0,i.jsx)(t.code,{children:"getThemePath()"})}),"\n",(0,i.jsxs)(t.p,{children:["Returns the path to the directory where the theme components can be found. When your users call ",(0,i.jsx)(t.code,{children:"swizzle"}),", ",(0,i.jsx)(t.code,{children:"getThemePath"})," is called and its returned path is used to find your theme components. Relative paths are resolved against the folder containing the entry point."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, your ",(0,i.jsx)(t.code,{children:"getThemePath"})," can be:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:'title="my-theme/src/index.js"',children:"export default function (context, options) {\n  return {\n    name: 'my-theme',\n    // highlight-start\n    getThemePath() {\n      return './theme';\n    },\n    // highlight-end\n  };\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"getTypeScriptThemePath",children:(0,i.jsx)(t.code,{children:"getTypeScriptThemePath()"})}),"\n",(0,i.jsxs)(t.p,{children:["Similar to ",(0,i.jsx)(t.code,{children:"getThemePath()"}),", it should return the path to the directory where the source code of TypeScript theme components can be found. This path is purely for swizzling TypeScript theme components, and theme components under this path will ",(0,i.jsx)(t.strong,{children:"not"})," be resolved by Webpack. Therefore, it is not a replacement for ",(0,i.jsx)(t.code,{children:"getThemePath()"}),". Typically, you can make the path returned by ",(0,i.jsx)(t.code,{children:"getTypeScriptThemePath()"})," be your source directory, and make the path returned by ",(0,i.jsx)(t.code,{children:"getThemePath()"})," be the compiled JavaScript output."]}),"\n",(0,i.jsxs)(t.admonition,{type:"tip",children:[(0,i.jsx)(t.p,{children:"For TypeScript theme authors: you are strongly advised to make your compiled output as human-readable as possible. Only strip type annotations and don't transpile any syntaxes, because they will be handled by Webpack's Babel loader based on the targeted browser versions."}),(0,i.jsx)(t.p,{children:"You should also format these files with Prettier. Remember\u2014JS files can and will be directly consumed by your users."})]}),"\n",(0,i.jsx)(t.p,{children:"Example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:'title="my-theme/src/index.js"',children:"export default function (context, options) {\n  return {\n    name: 'my-theme',\n    // highlight-start\n    getThemePath() {\n      // Where compiled JavaScript output lives\n      return '../lib/theme';\n    },\n    getTypeScriptThemePath() {\n      // Where TypeScript source code lives\n      return '../src/theme';\n    },\n    // highlight-end\n  };\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"getSwizzleComponentList",children:(0,i.jsx)(t.code,{children:"getSwizzleComponentList()"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"This is a static method, not attached to any plugin instance."})}),"\n",(0,i.jsxs)(t.p,{children:["Returns a list of stable components that are considered safe for swizzling. These components will be swizzlable without ",(0,i.jsx)(t.code,{children:"--danger"}),". All components are considered unstable by default. If an empty array is returned, all components are considered unstable. If ",(0,i.jsx)(t.code,{children:"undefined"})," is returned, all components are considered stable."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:'title="my-theme/src/index.js"',children:"export function getSwizzleComponentList() {\n  return [\n    'CodeBlock',\n    'DocSidebar',\n    'Footer',\n    'NotFound',\n    'SearchBar',\n    'hooks/useTheme',\n    'prism-include-languages',\n  ];\n}\n"})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},71670:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var i=n(27378);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);