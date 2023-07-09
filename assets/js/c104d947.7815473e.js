"use strict";(self.webpackChunkanarchy_ai_github_io=self.webpackChunkanarchy_ai_github_io||[]).push([[72],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,f=c["".concat(l,".").concat(d)]||c[d]||p[d]||o;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5},i="Roadmap",s={unversionedId:"documentation/Roadmap",id:"documentation/Roadmap",title:"Roadmap",description:"Tasks for end of June and through July 2023",source:"@site/docs/documentation/Roadmap.md",sourceDirName:"documentation",slug:"/documentation/Roadmap",permalink:"/docs/documentation/Roadmap",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Bounty",permalink:"/docs/documentation/Bounty"},next:{title:"Careers",permalink:"/docs/documentation/Careers"}},l={},u=[{value:"Tasks for end of June and through July 2023",id:"tasks-for-end-of-june-and-through-july-2023",level:3},{value:"LLM-VM tasks",id:"llm-vm-tasks",level:4},{value:"Error handling",id:"error-handling",level:5},{value:"Agents",id:"agents",level:5},{value:"Documentation",id:"documentation",level:5},{value:"Parameter Management",id:"parameter-management",level:5},{value:"Instrumentation / Statistics",id:"instrumentation--statistics",level:5},{value:"Inference Determinism (more long term question,not immediate prioriity)",id:"inference-determinism-more-long-term-questionnot-immediate-prioriity",level:5},{value:"misc",id:"misc",level:5}],m={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"roadmap"},"Roadmap"),(0,r.kt)("h3",{id:"tasks-for-end-of-june-and-through-july-2023"},"Tasks for end of June and through July 2023"),(0,r.kt)("h4",{id:"llm-vm-tasks"},"LLM-VM tasks"),(0,r.kt)("h5",{id:"error-handling"},"Error handling"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Can cleanup in progress fine tunings when ctrl+c abort the local version of LLM-VM Feature/carter qol -- finetuning cancelation support and retry logic #23"),(0,r.kt)("li",{parentName:"ol"},"Can retry data synthesis when given malformed json results Feature/carter qol -- finetuning cancelation support and retry logic #23"),(0,r.kt)("li",{parentName:"ol"},"Maybe later should consider a more robust encoding rather than json, where mismatched brackets from unquoted responses identify more robust output format for data synthesis #29")),(0,r.kt)("h5",{id:"agents"},"Agents"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Get REBEL agent onto main branch LLM-VM/main Pull in agents from LLM-VM-add-agents branch #2"),(0,r.kt)("li",{parentName:"ol"},"Get Backward Chaining agent onto main branch LLM-VM/main Pull in agents from LLM-VM-add-agents branch #2"),(0,r.kt)("li",{parentName:"ol"},"Get all agents to use the optimizer endpoint, as opposed to the openai api Update agents to use optimizing completion API. #19"),(0,r.kt)("li",{parentName:"ol"},"Get Flat agent on LLM-VM/main Pull in agents from LLM-VM-add-agents branch #2"),(0,r.kt)("li",{parentName:"ol"},"Agent test suite Add agent test suites that actually work #20")),(0,r.kt)("h5",{id:"documentation"},"Documentation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Write documentation for LLM-VM on docusaurus. github pages style website + docusourus for entire anarchy project #22\nData Synthesis #3"),(0,r.kt)("li",{parentName:"ol"},"Add all the parameters"),(0,r.kt)("li",{parentName:"ol"},"Choose a more robust encoding for question answer response sets identify more robust output format for data synthesis #29"),(0,r.kt)("li",{parentName:"ol"},"K-shot support"),(0,r.kt)("li",{parentName:"ol"},"Prompt variation aka support alternative prompts, possibly with different defaults for each supported model"),(0,r.kt)("li",{parentName:"ol"},"Track number of actual responses vs requested"),(0,r.kt)("li",{parentName:"ol"},"Dedup handling",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"First exact repeat parameters "),(0,r.kt)("li",{parentName:"ol"},"then semantic vector comparisons?"))),(0,r.kt)("li",{parentName:"ol"},"Parameterize the diverse ways you might want to define exact matches or vector comparisions")),(0,r.kt)("h5",{id:"parameter-management"},"Parameter Management"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Documenting all the parameters and making sure they\u2019re sane parameter/configuration management and documentation #25")),(0,r.kt)("h5",{id:"instrumentation--statistics"},"Instrumentation / Statistics"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Keep track of detailed information about inference, data synthesis, response sizes, latency, quality Keep track of detailed information about inference, data synthesis, response sizes, latency, quality #26")),(0,r.kt)("h5",{id:"inference-determinism-more-long-term-questionnot-immediate-prioriity"},"Inference Determinism (more long term question,not immediate prioriity)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"What LLM flavors have explicit rng Seed being surfaces as optional input or something that can be part of the response metadata for reproducibility? What LLM flavors have explicit rng Seed being surfaces as optional input or something that can be part of the response metadata for reproducibility? () #27")),(0,r.kt)("h5",{id:"misc"},"misc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Maybe also something about managing/tracking fine tunings you\u2019ve generated track information about fine tunings that have been persisted, or at least what the base prompt and Q,A pair associated with it #28")))}p.isMDXComponent=!0}}]);