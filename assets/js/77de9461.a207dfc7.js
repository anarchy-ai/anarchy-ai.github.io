"use strict";(self.webpackChunkanarchy_ai_github_io=self.webpackChunkanarchy_ai_github_io||[]).push([[974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},i="Projects",c={unversionedId:"documentation/Projects",id:"documentation/Projects",title:"Projects",description:"LLM-VM",source:"@site/docs/documentation/Projects.md",sourceDirName:"documentation",slug:"/documentation/Projects",permalink:"/docs/documentation/Projects",draft:!1,editUrl:"https://github.com/anarchy-ai/anarchy-ai.github.io/docs/documentation/Projects.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Mission",permalink:"/docs/documentation/Mission"},next:{title:"Organization",permalink:"/docs/documentation/Organization"}},s={},l=[{value:"LLM-VM",id:"llm-vm",level:3},{value:"chat.dev",id:"chatdev",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"projects"},"Projects"),(0,o.kt)("h3",{id:"llm-vm"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/Anarchy-AI/LLM-VM"},"LLM-VM")),(0,o.kt)("p",null,"The LLM-VM is an LLM agnostic JIT for natural language.  Specifically, it uses LLMs to convert conversational natural language into a dynamic series of LLM and IO commands.\nYou provide the underlying provider(s), actions (APIs, code-hooks) and their descriptions, data-sources (PDFs, websites...), and the LLM-VM will take care of load-balancing, fine-tuning, natural language compilation and tool-selection."),(0,o.kt)("h3",{id:"chatdev"},(0,o.kt)("a",{parentName:"h3",href:"https://chat.dev/"},"chat.dev")),(0,o.kt)("p",null,"This is our managed hosting service for the LLM-VM.  Here you can create an optimized LLM endpoint with access to your APIs and data."))}d.isMDXComponent=!0}}]);