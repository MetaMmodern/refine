"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[47331],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),h=r,u=m["".concat(s,".").concat(h)]||m[h]||d[h]||n;return a?i.createElement(u,o(o({ref:t},p),{},{components:a})):i.createElement(u,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},78946:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=a(87462),r=(a(67294),a(3905));a(25236),a(77186),a(39198),a(97124),a(26388),a(19654);const n={title:"Create a Feedback Admin panel in 15 Minutes with Refine and Strapi",description:"We will quickly create an api with Strapi and then develop its frontend with refine. Thus, let's see how an admin panel can be created in a very short time with the perfect harmony of Strapi and refine.",slug:"create-a-feedback-admin-panel-with-refine-and-strapi",authors:"salih",tags:["refine","strapi","react","tutorial"],image:"/img/placeholder.png",hide_table_of_contents:!1},o=void 0,l={permalink:"/blog/create-a-feedback-admin-panel-with-refine-and-strapi",source:"@site/blog/2021-10-4-feedback-admin-panel.md",title:"Create a Feedback Admin panel in 15 Minutes with Refine and Strapi",description:"We will quickly create an api with Strapi and then develop its frontend with refine. Thus, let's see how an admin panel can be created in a very short time with the perfect harmony of Strapi and refine.",date:"2021-10-04T00:00:00.000Z",formattedDate:"October 4, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"strapi",permalink:"/blog/tags/strapi"},{label:"react",permalink:"/blog/tags/react"},{label:"tutorial",permalink:"/blog/tags/tutorial"}],readingTime:6.92,hasTruncateMarker:!0,authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],frontMatter:{title:"Create a Feedback Admin panel in 15 Minutes with Refine and Strapi",description:"We will quickly create an api with Strapi and then develop its frontend with refine. Thus, let's see how an admin panel can be created in a very short time with the perfect harmony of Strapi and refine.",slug:"create-a-feedback-admin-panel-with-refine-and-strapi",authors:"salih",tags:["refine","strapi","react","tutorial"],image:"/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"Build Fast and Customizable Admin Panel with NestJS",permalink:"/blog/customizable-admin-panel-with-nestjs"},nextItem:{title:"Let's Build an App to Manage Your Hackathons with Refine",permalink:"/blog/manage-hackathons-with-refine"},relatedPosts:[{title:"OTP Authentication with Supabase and Twilio in React",permalink:"/blog/supabase-twilio-otp-authentication-in-react",formattedDate:"September 22, 2022",authors:[{name:"Vijit Ail",title:"Software Engineer",url:"https://github.com/vijitail",imageURL:"https://github.com/vijitail.png",key:"vijit_ail"}],readingTime:12.735,date:"2022-09-22T00:00:00.000Z"},{title:"When to use dangerouslySetInnerHTML in React?",permalink:"/blog/use-react-dangerouslysetinnerhtml",formattedDate:"September 25, 2022",authors:[{name:"Clara Ekekenta",title:"Software Engineer",imageURL:"/img/generic-profile.png",key:"clara_ekekenta"}],readingTime:5.27,date:"2022-09-25T00:00:00.000Z"},{title:"Redirect in React Router V6 with Navigate Component",permalink:"/blog/navigate-react-router-redirect",formattedDate:"September 29, 2022",authors:[{name:"Joseph Mawa",title:"Web Developer",url:"https://github.com/nibble0101",imageURL:"https://media-exp1.licdn.com/dms/image/C4E03AQHSDUpc44g0WA/profile-displayphoto-shrink_800_800/0/1610367557179?e=1667433600&v=beta&t=ZKdvXFLajKeMPl16UvLAEudKGgpLq4cVjqI2iFhDmTI",key:"joseph_mawa"}],readingTime:3.805,date:"2022-09-29T00:00:00.000Z"}],authorPosts:[{title:"Top React Component Libraries and Frameworks Every Developer Should Know",permalink:"/blog/top-react-component-libraries-and-frameworks-every-developer-should-know",formattedDate:"April 29, 2022",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:4.92,date:"2022-04-29T00:00:00.000Z"},{title:"Build internal tools using Low-Code with Refine, React-based framework",permalink:"/blog/build-internal-tools-using-low-code-with-refine",formattedDate:"February 21, 2022",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:9.62,date:"2022-02-21T00:00:00.000Z"}]},s={authorsImageUrls:[void 0]},c=[],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this article, we will create a panel where we can manage the feedback we receive from our web application."))}d.isMDXComponent=!0},26388:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/feedback_overview-4f106a6e2168de120c8515650ed6486a.gif"},97124:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/feedbacks-cbf0031d025ac4675922a412c1de0f67.png"},25236:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/refine_welcome-beb3ac2bb7997c105d3b0b9f5b5aa31b.png"},39198:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/signin-443c944fcf58c292f0d6a9c1df0f209f.png"},77186:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/strapi_content-834329c2279e3efd6af695c62080db0b.png"},19654:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/widgets-633825e7766658e3d8cba9a253429fa6.gif"}}]);