"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[3841],{4137:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),i=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=i(n),c=a,d=k["".concat(m,".").concat(c)]||k[c]||u[c]||l;return n?r.createElement(d,p(p({ref:t},s),{},{components:n})):r.createElement(d,p({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=k;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var i=2;i<l;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2383:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var r=n(7462),a=(n(7294),n(4137));const l={title:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u044b \u043d\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u0445",sidebar_position:4},p=void 0,o={unversionedId:"guides/take-screenshot",id:"guides/take-screenshot",title:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u044b \u043d\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u0445",description:"\u0421\u043a\u0440\u0438\u043d\u0448\u043e\u0442 \u2014 \u044d\u0442\u043e \u0441\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 \u0432\u0430\u0448\u0435\u0433\u043e \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430 \u0438\u043b\u0438 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043b\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b/\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/current/guides/take-screenshot.md",sourceDirName:"guides",slug:"/guides/take-screenshot",permalink:"/KnowledgeBase/ru/guides/take-screenshot",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/guides/take-screenshot.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u044b \u043d\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u0445",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u041a\u0430\u043a \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0443\u044e \u0440\u0430\u0431\u043e\u0442\u0443 \u0441\u0430\u0439\u0442\u0430",permalink:"/KnowledgeBase/ru/guides/report-website"},next:{title:"\u0420\u0435\u043a\u043b\u0430\u043c\u043d\u043e\u0435 \u041f\u041e & \u0432\u0438\u0440\u0443\u0441\u044b",permalink:"/KnowledgeBase/ru/guides/adware"}},m={},i=[{value:"Android",id:"android",level:3},{value:"iOS",id:"ios",level:3},{value:"Windows",id:"windows",level:3},{value:"macOS",id:"mac",level:3}],s={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u0421\u043a\u0440\u0438\u043d\u0448\u043e\u0442 \u2014 \u044d\u0442\u043e \u0441\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 \u0432\u0430\u0448\u0435\u0433\u043e \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430 \u0438\u043b\u0438 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043c\u043e\u0436\u043d\u043e \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u043b\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b/\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),(0,a.kt)("p",null,"\u0418\u043d\u043e\u0433\u0434\u0430 \u0441\u043b\u0443\u0436\u0431\u0430 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442 (\u0438\u043b\u0438 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u044b) \u0434\u043b\u044f \u043b\u0443\u0447\u0448\u0435\u0433\u043e \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f. \u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u0432\u0441\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0435 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u043e\u0432 \u043d\u0430 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430\u0445 \u0438 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445 \u043d\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u0430\u0445."),(0,a.kt)("h3",{id:"android"},"Android"),(0,a.kt)("p",null,"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442 \u043d\u0430 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u0445 Android \u043c\u043e\u0436\u043d\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0441\u043f\u043e\u0441\u043e\u0431\u0430\u043c\u0438, \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043c\u043e\u0434\u0435\u043b\u0438 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0438 \u0435\u0433\u043e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044f."),(0,a.kt)("p",null,"\u041d\u0430 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 Android \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0430\u044f \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044f \u0434\u043b\u044f \u0441\u043d\u044f\u0442\u0438\u044f \u0441\u043d\u0438\u043c\u043a\u043e\u0432 \u044d\u043a\u0440\u0430\u043d\u0430:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0423\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u043e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043a\u043d\u043e\u043f\u043a\u0438 ",(0,a.kt)("em",{parentName:"strong"},"\u0423\u043c\u0435\u043d\u044c\u0448\u0435\u043d\u0438\u0435 \u0433\u0440\u043e\u043c\u043a\u043e\u0441\u0442\u0438")," \u0438 ",(0,a.kt)("em",{parentName:"strong"},"\u041f\u0438\u0442\u0430\u043d\u0438\u0435")," \u0432 \u0442\u0435\u0447\u0435\u043d\u0438\u0435 1-2 \u0441\u0435\u043a\u0443\u043d\u0434"))),(0,a.kt)("p",null,"\u0412\u0430\u0448\u0435 Android-\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0437\u0430\u0445\u0432\u0430\u0442\u0438\u0442 \u0432\u0435\u0441\u044c \u044d\u043a\u0440\u0430\u043d \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442 \u0435\u0433\u043e \u0432 \u0432\u0438\u0434\u0435 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u0443\u044e \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u0432 \u043f\u0430\u043f\u043a\u0435 \u0421\u043a\u0440\u0438\u043d\u0448\u043e\u0442 \u0432 \u0413\u0430\u043b\u0435\u0440\u0435\u0435."),(0,a.kt)("p",null,"\u041a\u0430\u043a \u0443\u0436\u0435 \u0431\u044b\u043b\u043e \u0441\u043a\u0430\u0437\u0430\u043d\u043e, \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438 \u043a\u043d\u043e\u043f\u043e\u043a, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0438\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430, \u043c\u043e\u0433\u0443\u0442 \u043e\u0442\u043b\u0438\u0447\u0430\u0442\u044c\u0441\u044f \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430. \u041d\u0438\u0436\u0435 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u044b \u0434\u0440\u0443\u0433\u0438\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u044b\u0435 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u041e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u043d\u0430\u0436\u0430\u0442\u0438\u0435 \u0438 \u0443\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u043a\u043d\u043e\u043f\u043e\u043a ",(0,a.kt)("em",{parentName:"strong"},"\u0414\u043e\u043c\u043e\u0439")," \u0438 ",(0,a.kt)("em",{parentName:"strong"},"\u041f\u0438\u0442\u0430\u043d\u0438\u0435"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u041e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0435 \u043d\u0430\u0436\u0430\u0442\u0438\u0435 \u0438 \u0443\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435 \u043a\u043d\u043e\u043f\u043e\u043a ",(0,a.kt)("em",{parentName:"strong"},"\u041d\u0430\u0437\u0430\u0434")," \u0438 ",(0,a.kt)("em",{parentName:"strong"},"\u0414\u043e\u043c\u043e\u0439")))),(0,a.kt)("p",null,"\u041d\u0430 Android 8 \u0438 \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0437\u0434\u043d\u0438\u0445 \u0432\u0435\u0440\u0441\u0438\u044f\u0445 \u0432\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0434\u0440\u0443\u0433\u0438\u0445 \u043c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0439, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0440\u043e\u0432\u0435\u0434\u044f \u0440\u0435\u0431\u0440\u043e\u043c \u043b\u0430\u0434\u043e\u043d\u0438 \u043e\u0442 \u043b\u0435\u0432\u043e\u0433\u043e \u0434\u043e \u043f\u0440\u0430\u0432\u043e\u0433\u043e \u043a\u0440\u0430\u044f \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430, \u0438 \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442 (\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 Samsung). \u0418\u043b\u0438 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u044d\u0442\u043e, \u043f\u0440\u043e\u0432\u0435\u0434\u044f \u0442\u0440\u0435\u043c\u044f \u043f\u0430\u043b\u044c\u0446\u0430\u043c\u0438 \u0441\u0432\u0435\u0440\u0445\u0443 \u0432\u043d\u0438\u0437 (\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 OnePlus) \u0438 \u0442. \u0434."),(0,a.kt)("p",null,"\u0423\u0437\u043d\u0430\u0439\u0442\u0435 \u043e \u0434\u0440\u0443\u0433\u0438\u0445 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430\u0445 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u043e\u0432 \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u0445 \u0432\u0430\u0448\u0435\u0433\u043e \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430."),(0,a.kt)("p",null,"\u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u043e\u0432 \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a ",(0,a.kt)("em",{parentName:"p"},"Screenshot Easy"),", ",(0,a.kt)("em",{parentName:"p"},"Screenshot Snap"),", ",(0,a.kt)("em",{parentName:"p"},"Screenshot Ultimate")," \u0438 \u0434\u0440\u0443\u0433\u0438\u0435."),(0,a.kt)("h3",{id:"ios"},"iOS"),(0,a.kt)("p",null,"\u0412\u0441\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u043d\u0430 \u0431\u0430\u0437\u0435 iOS (\u0437\u0430 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0441\u043e\u0432\u0441\u0435\u043c \u0440\u0430\u043d\u043d\u0438\u0445 \u0432\u0435\u0440\u0441\u0438\u0439) \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u044b, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 \u0441\u0440\u0435\u0434\u0441\u0442\u0432\u0430."),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442 \u043d\u0430 iOS-\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435, \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0435\u0439:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u041e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0438 ",(0,a.kt)("em",{parentName:"strong"},"Sleep/Wake")," \u0438 ",(0,a.kt)("em",{parentName:"strong"},"\u0414\u043e\u043c\u043e\u0439"),", \u0430 \u0437\u0430\u0442\u0435\u043c \u0441\u0440\u0430\u0437\u0443 \u043e\u0442\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0438\u0445"))),(0,a.kt)("p",null,"\u0414\u043b\u044f iPhone X \u0438 \u0431\u043e\u043b\u0435\u0435 \u043f\u043e\u0437\u0434\u043d\u0438\u0445 \u0432\u0435\u0440\u0441\u0438\u0439:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u041e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0438 ",(0,a.kt)("em",{parentName:"strong"},"Sleep/Wake")," \u0438 ",(0,a.kt)("em",{parentName:"strong"},"\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435 \u0433\u0440\u043e\u043c\u043a\u043e\u0441\u0442\u0438"),", \u0430 \u0437\u0430\u0442\u0435\u043c \u0441\u0440\u0430\u0437\u0443 \u043e\u0442\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u0438\u0445"))),(0,a.kt)("p",null,"\u0412\u0430\u0448\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u0437\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u0443\u0435\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0433\u043e \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442 \u0435\u0433\u043e \u043a\u0430\u043a \u0444\u043e\u0442\u043e. \u0412\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u0435\u0433\u043e \u0432 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u043e\u043c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438 ",(0,a.kt)("em",{parentName:"p"},"\u0424\u043e\u0442\u043e"),"."),(0,a.kt)("h3",{id:"windows"},"Windows"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442 \u044d\u043a\u0440\u0430\u043d\u0430 \u0432\u0430\u0448\u0435\u0433\u043e \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 ",(0,a.kt)("em",{parentName:"strong"},"PrtScn")))),(0,a.kt)("p",null,"\u041d\u0430 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u043e\u0443\u0442\u0431\u0443\u043a\u0430\u0445 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c \u043a\u043b\u0430\u0432\u0438\u0448\u0443 ",(0,a.kt)("em",{parentName:"p"},"Fn"),", \u0430 \u0437\u0430\u0442\u0435\u043c \u043d\u0430\u0436\u0438\u043c\u0430\u0442\u044c ",(0,a.kt)("em",{parentName:"p"},"PrtScn"),"."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u041e\u0431\u0440\u0430\u0442\u0438\u0442\u0435 \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435: \u043a\u043b\u0430\u0432\u0438\u0448\u0430 PrtScn (Print Screen) \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u043e-\u0440\u0430\u0437\u043d\u043e\u043c\u0443 \u043e\u0431\u043e\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u043d\u0430 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430\u0445 \u2014 PrntScrn, PrtScn, PrtScr \u0438\u043b\u0438 PrtSc.")),(0,a.kt)("p",null,"Windows \u0437\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u0443\u0435\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0433\u043e \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0441\u043a\u043e\u043f\u0438\u0440\u0443\u0435\u0442 \u0435\u0433\u043e \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430."),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043d\u0438\u043c\u043e\u043a \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044e:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 ",(0,a.kt)("em",{parentName:"strong"},"Alt")," \u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 ",(0,a.kt)("em",{parentName:"strong"},"PrtScn")," (\u0438\u043b\u0438 ",(0,a.kt)("em",{parentName:"strong"},"Fn + Alt + PrtScn ")," \u043d\u0430 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u043d\u043e\u0443\u0442\u0431\u0443\u043a\u0430\u0445)"))),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u044d\u043a\u0440\u0430\u043d\u0430, \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0435\u0439:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\u041e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0438 "),"Win",(0,a.kt)("em",{parentName:"strong"}," (\u043a\u043d\u043e\u043f\u043a\u0430 Windows) \u0438 "),"Shift",(0,a.kt)("em",{parentName:"strong"},", \u0430 \u0437\u0430\u0442\u0435\u043c \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 "),"S**"))),(0,a.kt)("p",null,"\u041f\u043e\u0441\u043b\u0435 \u0442\u043e\u0433\u043e, \u043a\u0430\u043a \u0432\u044b \u0441\u0434\u0435\u043b\u0430\u0435\u0442\u0435 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442, \u043e\u043d \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 \u0431\u0443\u0444\u0435\u0440\u0435 \u043e\u0431\u043c\u0435\u043d\u0430. \u0412\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0435\u0433\u043e \u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442, \u0441 \u043a\u043e\u0442\u043e\u0440\u044b\u043c \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044e ",(0,a.kt)("em",{parentName:"p"},"Ctrl + V"),". \u0418\u043b\u0438, \u0435\u0441\u043b\u0438 \u0432\u0430\u043c \u043d\u0443\u0436\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442 \u043a\u0430\u043a \u0444\u0430\u0439\u043b, \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0443\u044e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443 ",(0,a.kt)("strong",{parentName:"p"},"Paint")," (\u0438\u043b\u0438 \u043b\u044e\u0431\u0443\u044e \u0434\u0440\u0443\u0433\u0443\u044e, \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0443\u044e \u0441 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f\u043c\u0438). \u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u0442\u0443 \u0436\u0435 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044e \u043a\u043d\u043e\u043f\u043e\u043a \u0438\u043b\u0438 \u043a\u043b\u0438\u043a\u043d\u0443\u0432 \u043a\u043d\u043e\u043f\u043a\u0443 ",(0,a.kt)("em",{parentName:"p"},"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c")," \u0432 \u043b\u0435\u0432\u043e\u043c \u0432\u0435\u0440\u0445\u043d\u0435\u043c \u0443\u0433\u043b\u0443 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b, \u0430 \u0437\u0430\u0442\u0435\u043c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0435\u0433\u043e."),(0,a.kt)("p",null,"\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b Windows 8 \u0438 10 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0431\u044b\u0441\u0442\u0440\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u044b \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0438 ",(0,a.kt)("em",{parentName:"p"},"Win + PrtScn"),". \u041a\u0430\u043a \u0442\u043e\u043b\u044c\u043a\u043e \u0432\u044b \u043d\u0430\u0436\u043c\u0435\u0442\u0435 \u044d\u0442\u0438 \u043a\u043d\u043e\u043f\u043a\u0438, \u0441\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430 \u0431\u0443\u0434\u0435\u0442 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d \u0432 \u0432\u0438\u0434\u0435 \u0444\u0430\u0439\u043b\u0430 \u0432 \u0432\u0430\u0448\u0435\u0439 \u043f\u0430\u043f\u043a\u0435 ",(0,a.kt)("em",{parentName:"p"},"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438")," \u2192 ",(0,a.kt)("em",{parentName:"p"},"\u041f\u0430\u043f\u043a\u0430 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u043e\u0432"),"."),(0,a.kt)("p",null,"\u0421\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0442\u0430\u043a\u0436\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0430 ",(0,a.kt)("em",{parentName:"p"},"\u041d\u043e\u0436\u043d\u0438\u0446\u044b")," \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u0442\u0441\u044f \u0438\u0437 \u043c\u0435\u043d\u044e ",(0,a.kt)("em",{parentName:"p"},"\u041f\u0443\u0441\u043a > \u0412\u0441\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b > \u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435"),". \u041d\u043e\u0436\u043d\u0438\u0446\u044b \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442 \u043b\u044e\u0431\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u044d\u043a\u0440\u0430\u043d\u0430 \u0438\u043b\u0438 \u0432\u0441\u0435\u0433\u043e \u044d\u043a\u0440\u0430\u043d\u0430 \u0446\u0435\u043b\u0438\u043a\u043e\u043c. \u041f\u043e\u0441\u043b\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u0430 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0434\u0430\u043d\u043d\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0435\u0433\u043e \u0432 \u043b\u044e\u0431\u043e\u0439 \u043f\u0430\u043f\u043a\u0435 \u0432\u0430\u0448\u0435\u0433\u043e \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u0430."),(0,a.kt)("p",null,"\u041a\u0440\u043e\u043c\u0435 \u0442\u043e\u0433\u043e, \u0432\u044b \u0432\u0441\u0435\u0433\u0434\u0430 \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c\u0438 \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u043e\u0432, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440: ",(0,a.kt)("strong",{parentName:"p"},"PicPick"),", ",(0,a.kt)("strong",{parentName:"p"},"Nimbus Screenshot"),", ",(0,a.kt)("strong",{parentName:"p"},"Screenshot Captor"),", ",(0,a.kt)("strong",{parentName:"p"},"Snipaste"),", ",(0,a.kt)("strong",{parentName:"p"},"Monosnap")," \u0438 \u0434\u0440. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0432\u0430\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0435\u0433\u043e \u043d\u0430 \u0432\u0430\u0448 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440."),(0,a.kt)("h3",{id:"mac"},"macOS"),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442 \u043d\u0430 Mac, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044e:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\u041e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0435 \u043a\u043b\u0430\u0432\u0438\u0448 ")),"\u2318 Cmd + Shift + 3",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},";")))),(0,a.kt)("p",null,"\u0412\u0430\u0448 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u0437\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u0443\u0435\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0433\u043e \u044d\u043a\u0440\u0430\u043d\u0430 \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442 \u0435\u0433\u043e \u043d\u0430 \u0440\u0430\u0431\u043e\u0447\u0435\u043c \u0441\u0442\u043e\u043b\u0435."),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043d\u0438\u043c\u043e\u043a \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043e\u043a\u043d\u0430, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044e:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u041e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0435 \u043a\u043b\u0430\u0432\u0438\u0448 ",(0,a.kt)("em",{parentName:"strong"},"\u2318 Cmd + Shift + 4 + \u041f\u0440\u043e\u0431\u0435\u043b"),".  \u0423\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u044c \u043c\u044b\u0448\u0438 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u0441\u044f \u043d\u0430 \u0437\u043d\u0430\u0447\u043e\u043a \u043a\u0430\u043c\u0435\u0440\u044b. \u0429\u0451\u043b\u043a\u043d\u0438\u0442\u0435 \u043f\u043e \u043e\u043a\u043d\u0443, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0445\u0432\u0430\u0442\u0438\u0442\u044c \u0435\u0433\u043e. \u0427\u0442\u043e\u0431\u044b \u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u0430, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 ",(0,a.kt)("em",{parentName:"strong"},"Esc")))),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u044d\u043a\u0440\u0430\u043d\u0430, \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u0439 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0435\u0439:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\u041e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0435 \u043a\u043b\u0430\u0432\u0438\u0448 ")),"\u2318 Cmd + Shift + 4",(0,a.kt)("strong",{parentName:"li"},"**"),". \u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u043f\u0435\u0440\u0435\u043a\u0440\u0435\u0441\u0442\u0438\u0435, \u0447\u0442\u043e\u0431\u044b \u0432\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u043d\u0443\u0436\u043d\u0443\u044e \u043e\u0431\u043b\u0430\u0441\u0442\u044c. \u041e\u0442\u043f\u0443\u0441\u0442\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u043c\u0438\u0448\u0438 \u0438\u043b\u0438 \u0442\u0440\u0435\u043a\u043f\u0430\u0434\u0430, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043d\u0438\u043c\u043e\u043a \u044d\u043a\u0440\u0430\u043d\u0430, \u0434\u043b\u044f \u043e\u0442\u043c\u0435\u043d\u044b \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 ",(0,a.kt)("em",{parentName:"li"},"Esc"),".")),(0,a.kt)("p",null,"\u0427\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442 ",(0,a.kt)("em",{parentName:"p"},"Touch Bar")," (\u043d\u0430 MacBook Pro), \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0443\u044e \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044e:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"\u041e\u0434\u043d\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0441\u043e\u0447\u0435\u0442\u0430\u043d\u0438\u0435 \u043a\u043b\u0430\u0432\u0438\u0448 ")),"\u2318 Cmd + Shift + 6",(0,a.kt)("strong",{parentName:"li"},"**"))),(0,a.kt)("p",null,"\u0412\u0430\u0448 \u043a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440 \u0437\u0430\u0444\u0438\u043a\u0441\u0438\u0440\u0443\u0435\u0442 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0433\u043e ",(0,a.kt)("em",{parentName:"p"},"Touch Bar")," \u0438 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442 \u0435\u0433\u043e \u043a\u0430\u043a \u0444\u0430\u0439\u043b \u043d\u0430 \u0432\u0430\u0448\u0435\u043c \u0440\u0430\u0431\u043e\u0447\u0435\u043c \u0441\u0442\u043e\u043b\u0435."),(0,a.kt)("p",null,"\u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442 \u0432 \u0431\u0443\u0444\u0435\u0440 \u043e\u0431\u043c\u0435\u043d\u0430 \u0432\u043c\u0435\u0441\u0442\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 ",(0,a.kt)("em",{parentName:"p"},"Ctrl ")," \u0432\u043c\u0435\u0441\u0442\u0435 \u0441 \u043b\u044e\u0431\u043e\u0439 \u0438\u0437 \u0432\u044b\u0448\u0435\u043f\u0435\u0440\u0435\u0447\u0438\u0441\u043b\u0435\u043d\u043d\u044b\u0445 \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u0439. \u0417\u0430\u0442\u0435\u043c \u0432\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442 (\u0438\u0437 \u0431\u0443\u0444\u0435\u0440\u0430 \u043e\u0431\u043c\u0435\u043d\u0430) \u0432 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u0438\u043b\u0438 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0432\u044b \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u0443\u0435\u0442\u0435, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043a\u043e\u043c\u0431\u0438\u043d\u0430\u0446\u0438\u044e ",(0,a.kt)("em",{parentName:"p"},"Cmd + V"),"."),(0,a.kt)("p",null,"\u0412\u044b \u0442\u0430\u043a\u0436\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,a.kt)("strong",{parentName:"p"},"Preview")," \u0438 \u0432\u044b\u0431\u0440\u0430\u0432 ",(0,a.kt)("strong",{parentName:"p"},"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442")," (\u0432\u044b\u0431\u0440\u0430\u043d\u043d\u043e\u0439 \u0437\u043e\u043d\u044b, \u043e\u043a\u043d\u0430 \u0438\u043b\u0438 \u0432\u0441\u0435\u0433\u043e \u044d\u043a\u0440\u0430\u043d\u0430). \u041f\u043e\u043b\u044c\u0437\u0443\u044f\u0441\u044c ",(0,a.kt)("strong",{parentName:"p"},"Preview")," \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u0444\u0430\u0439\u043b\u044b \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0430\u0445 JPG, TIFF, PDF \u0438 \u0434\u0440."))}u.isMDXComponent=!0}}]);