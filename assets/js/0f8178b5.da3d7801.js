"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[28600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.createContext({}),c=function(e){var t=o.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=a,d=p["".concat(m,".").concat(g)]||p[g]||s[g]||i;return n?o.createElement(d,r(r({ref:t},u),{},{components:n})):o.createElement(d,r({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));n(81045),n(84381),n(15342),n(2838),n(30374),n(21786);const i={title:"Material UI button in React",description:"A complete guide on using Material UI (MUI) button in a React app",slug:"mui-button-in-react",authors:"doro_onome",tags:["material-ui","react","mui","mui-button"],image:"/img/blog/2022-09-05-mui-button/social.png",hide_table_of_contents:!1},r=void 0,l={permalink:"/blog/mui-button-in-react",source:"@site/blog/2022-09-05-mui-button.md",title:"Material UI button in React",description:"A complete guide on using Material UI (MUI) button in a React app",date:"2022-09-05T00:00:00.000Z",formattedDate:"September 5, 2022",tags:[{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"react",permalink:"/blog/tags/react"},{label:"mui",permalink:"/blog/tags/mui"},{label:"mui-button",permalink:"/blog/tags/mui-button"}],readingTime:9.96,hasTruncateMarker:!0,authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],frontMatter:{title:"Material UI button in React",description:"A complete guide on using Material UI (MUI) button in a React app",slug:"mui-button-in-react",authors:"doro_onome",tags:["material-ui","react","mui","mui-button"],image:"/img/blog/2022-09-05-mui-button/social.png",hide_table_of_contents:!1},prevItem:{title:"How to become a modern Node.js developer?",permalink:"/blog/node-js-developer-skills"},nextItem:{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component"},relatedPosts:[{title:"Introduction to Next.js Link component with examples",permalink:"/blog/next-js-link-component",formattedDate:"September 4, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://pbs.twimg.com/profile_images/1476736258340794392/p7d1de3k_400x400.jpg",key:"michael"}],readingTime:9.48,date:"2022-09-04T00:00:00.000Z"},{title:"Building a CRUD app with Material UI and Strapi in React",permalink:"/blog/build-admin-panel-with-material-ui-and-strapi",formattedDate:"July 21, 2022",authors:[{name:"Necati \xd6zmen",title:"Software Developer",url:"https://github.com/necatiozmen",description:"Feeling irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:17.495,date:"2022-07-21T00:00:00.000Z"},{title:"Let's Build an App to Manage Your Hackathons with Refine",permalink:"/blog/manage-hackathons-with-refine",formattedDate:"October 4, 2021",authors:[{name:"Muharrem Kocadere",title:"Frontend Developer",url:"https://github.com/mhrrmk",imageURL:"https://github.com/mhrrmk.png",key:"muharrem"}],readingTime:3.245,date:"2021-10-04T00:00:00.000Z"}],authorPosts:[{title:"Material UI Grid System in React",permalink:"/blog/material-ui-grid",formattedDate:"September 18, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:13.135,date:"2022-09-18T00:00:00.000Z"},{title:"MUI Icons in React",permalink:"/blog/mui-icons-in-react",formattedDate:"August 24, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:10.785,date:"2022-08-24T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},c=[{value:"Introduction",id:"introduction",level:2}],u={toc:c};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Material UI is a dynamic React library because it provides numerous component infrastructures for responsive web design. One such essential component is the ",(0,a.kt)("inlineCode",{parentName:"p"},"Button"),". "),(0,a.kt)("p",null,"In this article, we will deeply explore the MUI ",(0,a.kt)("inlineCode",{parentName:"p"},"Button")," component, its variants, and the different ways it can be used in a React application."))}s.isMDXComponent=!0},81045:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/buttonSize-f793c944c5288230674e446170f88e14.png"},84381:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/final-65b3811389e736727259876cce9802aa.gif"},15342:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/loadingButton-8551dfb7a1111ba5dfad04bc89ad01e8.gif"},2838:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/mainComponent-208e1687c5dcd673cc0bb9c67e27c310.png"},30374:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/navbar-5410ac79a653c92c0bb1c5207594de98.gif"},21786:(e,t,n)=>{n.p}}]);