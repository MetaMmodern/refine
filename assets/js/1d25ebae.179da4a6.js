"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[32312],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,b=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return n?r.createElement(b,s(s({ref:t},u),{},{components:n})):r.createElement(b,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},94196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"How to use TypeScript Partial Type?",description:"We'll explain the TypeScript Partial utility type with examples",slug:"typescript-partial-utility-type",authors:"abdullah_numan",tags:["typescript","typescript-partial","typescript-utility-types"],image:"/img/blog/2022-10-10-typescript-partial/social.png",hide_table_of_contents:!1},s=void 0,l={permalink:"/blog/typescript-partial-utility-type",source:"@site/blog/2022-10-10-typescript-partial.md",title:"How to use TypeScript Partial Type?",description:"We'll explain the TypeScript Partial utility type with examples",date:"2022-10-10T00:00:00.000Z",formattedDate:"October 10, 2022",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"typescript-partial",permalink:"/blog/tags/typescript-partial"},{label:"typescript-utility-types",permalink:"/blog/tags/typescript-utility-types"}],readingTime:3.985,hasTruncateMarker:!1,authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],frontMatter:{title:"How to use TypeScript Partial Type?",description:"We'll explain the TypeScript Partial utility type with examples",slug:"typescript-partial-utility-type",authors:"abdullah_numan",tags:["typescript","typescript-partial","typescript-utility-types"],image:"/img/blog/2022-10-10-typescript-partial/social.png",hide_table_of_contents:!1},prevItem:{title:"Why you should prefer using pnpm over npm and yarn?",permalink:"/blog/pnpm-vs-npm-and-yarn"},nextItem:{title:"Creating a Responsive React Navbar with Tailwind CSS",permalink:"/blog/react-navbar-responsive-tailwind"},relatedPosts:[{title:"A Guide on TypeScript Omit Type",permalink:"/blog/typescript-omit-utility-type",formattedDate:"October 3, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:3.525,date:"2022-10-03T00:00:00.000Z"},{title:"A Detailed Guide on TypeScript Pick Type",permalink:"/blog/typescript-pick-utility-type",formattedDate:"September 30, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:6.55,date:"2022-09-30T00:00:00.000Z"},{title:"A Guide for Next.js with TypeScript",permalink:"/blog/next-js-with-typescript",formattedDate:"September 12, 2022",authors:[{name:"Michael Hungbo",title:"Software Developer",url:"https://github.com/Mich45",imageURL:"https://github.com/Mich45.png",key:"michael"}],readingTime:7.345,date:"2022-09-12T00:00:00.000Z"}],authorPosts:[{title:"How to Use Tailwind CSS Grid",permalink:"/blog/tailwind-grid",formattedDate:"October 21, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.57,date:"2022-10-21T00:00:00.000Z"},{title:"Error Handling With try, catch and finally Blocks in JavaScript",permalink:"/blog/javascript-try-catch-finally",formattedDate:"November 22, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:10.43,date:"2022-11-22T00:00:00.000Z"},{title:"A Definitive guide on JavaScript every() Method",permalink:"/blog/javascript-every-method",formattedDate:"November 2, 2022",authors:[{name:"Abdullah Numan",title:"Fullstack Developer",url:"https://github.com/anewman15/",imageURL:"https://github.com/anewman15.png",key:"abdullah_numan"}],readingTime:9.685,date:"2022-11-02T00:00:00.000Z"}]},o={authorsImageUrls:[void 0]},p=[{value:"Introduction",id:"introduction",level:2},{value:"Optional Registration Scenario",id:"optional-registration-scenario",level:2},{value:"Enter TypeScript <code>Partial&lt;Type&gt;</code>",id:"enter-typescript-partialtype",level:2},{value:"With Interfaces",id:"with-interfaces",level:2},{value:"Conclusion",id:"conclusion",level:2}],u=(m="PromotionBanner",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var m;const c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In this article, we discuss object type transformations in TypeScript using ",(0,a.kt)("inlineCode",{parentName:"p"},"Partial<>"),". This is the third part of the series titled ",(0,a.kt)("a",{parentName:"p",href:"https://refine.dev/blog/typescript-omit-utility-type/"},"TypeScript Utility Type Series"),"."),(0,a.kt)("p",null,"In the previous post, we went through an example where we derived a ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscriber")," type by omitting a property from the base type, ",(0,a.kt)("inlineCode",{parentName:"p"},"SuperbUser"),", with ",(0,a.kt)("inlineCode",{parentName:"p"},"Omit<>"),"."),(0,a.kt)("p",null,"In this post, we will consider an example of ",(0,a.kt)("strong",{parentName:"p"},"TypeScript ",(0,a.kt)("inlineCode",{parentName:"strong"},"Partial<>"))," by modifying our ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscriber")," type to assume a more realistic scenario."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#optional-registration-scenario"},"Optional Registration Scenario")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#enter-typescript-partialtype"},"Enter TypeScript ",(0,a.kt)("inlineCode",{parentName:"a"},"Partial<Type>"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#with-interfaces"},"Partial with Interfaces"))),(0,a.kt)("h2",{id:"optional-registration-scenario"},"Optional Registration Scenario"),(0,a.kt)("p",null,"For our blog, we would have ",(0,a.kt)("inlineCode",{parentName:"p"},"GuestUser"),"s who are not allowed to like or comment on a post. We would allow registered ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscriber"),"s to like and comment. So, the scenario goes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("inlineCode",{parentName:"li"},"GuestUser")," must register with their ",(0,a.kt)("inlineCode",{parentName:"li"},"email")," and become a ",(0,a.kt)("inlineCode",{parentName:"li"},"Subscriber"),"."),(0,a.kt)("li",{parentName:"ul"},"they receive a link to set their password in an email sent to their ",(0,a.kt)("inlineCode",{parentName:"li"},"email"),"."),(0,a.kt)("li",{parentName:"ul"},"they are able to set their ",(0,a.kt)("inlineCode",{parentName:"li"},"password"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"firstName")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"lastName")," afterwards.")),(0,a.kt)("p",null,"In such a scenario, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscriber")," type we derived previously, which effectively has the shape below, does not deliver our needs the way we want:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'type Subscriber = {\n  userId: number,\n  macAddress: string,\n  username: string,\n  email: string,\n  password: string,\n  firstName: string,\n  lastName: string,\n};\n\nconst subscriber: Subscriber = {\n  userId: 4,\n  macAddress: \'a:5ub:mach1ne\',\n  username: \'sub_user\',\n  email: \'sub_user@gmail.com\'\n};\n\nconsole.log(subscriber);\n/*\nFrom TypeScript Error:\n"Type \'{ userId: number; macAddress: string; username: string; email: string; }\' is missing the following properties from type \'Subscriber\': password, firstName, lastName"\n\nFrom console:\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com"\n}\n*/\n')),(0,a.kt)("p",null,"TypeScript complains about the inconformity of ",(0,a.kt)("inlineCode",{parentName:"p"},"subscriber")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscriber")," type. This is because it sets all the fields to be ",(0,a.kt)("strong",{parentName:"p"},"required")," by default. If we set ",(0,a.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"firstName")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"lastName")," to optional manually, it is happy:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'type Subscriber = {\n  userId: number,\n  macAddress: string,\n  username: string,\n  email: string,\n  password?: string,\n  firstName?: string,\n  lastName?: string,\n};\n\nconst subscriber: Subscriber = {\n  userId: 4,\n  macAddress: \'a:5ub:mach1ne\',\n  username: \'sub_user\',\n  email: \'sub_user@gmail.com\'\n};\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com"\n}\n*/\n')),(0,a.kt)("p",null,"But this comes with the overhead of defining ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscriber")," manually in the first place and additionally then setting individual optional properties. In real APIs, it's not a good idea to define a shape manually."),(0,a.kt)("hr",null),(0,a.kt)(u,{title:"Small dev teams love this React framework!",image:"/img/generic_banner.png",mdxType:"PromotionBanner"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"enter-typescript-partialtype"},"Enter TypeScript ",(0,a.kt)("inlineCode",{parentName:"h2"},"Partial<Type>")),(0,a.kt)("p",null,"We want to remove the hassle and do this much more comfortably from the type returned from ",(0,a.kt)("inlineCode",{parentName:"p"},"Omit<>"),". So what we want to do is set all the properties of the returned type to be optional with ",(0,a.kt)("inlineCode",{parentName:"p"},"Partial<Type>"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type SuperbUser = {\n  userId: number,\n  macAddress: string,\n  username: string,\n  email: string,\n  password: string,\n  firstName: string,\n  lastName: string,\n  roles: ('Admin' | 'Editor' | 'Author')[]\n};\n\ntype Subscriber = Partial<Omit<SuperbUser, 'roles'>>;\n\nconst subscriber: Subscriber = {\n  userId: 4,\n  macAddress: 'a:5ub:mach1ne',\n  username: 'sub_user',\n  email: 'sub_user@gmail.com'\n};\n\nconsole.log(subscriber);\n/*\n{\n  \"userId\": 4,\n  \"macAddress\": \"a:5ub:mach1ne\",\n  \"username\": \"sub_user\",\n  \"email\": \"sub_user@gmail.com\"\n}\n*/\n")),(0,a.kt)("p",null,"No complains, which is great!"),(0,a.kt)("p",null,"So, we are now free to set values for ",(0,a.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"firstName")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"lastName"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'subscriber.password = \'12345678\';\nsubscriber.firstName = \'Abdullah\';\nsubscriber.lastName = \'Numan\';\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com",\n  "password": "12345678",\n  "firstName": "Abdullah",\n  "lastName": "Numan"\n}\n*/\n')),(0,a.kt)("p",null,"But, like before, TypeScript complains again if we add the properties that disrupts the shape of ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscriber"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"subscriber.roles = ['Reader', 'Commenter'];\n\nconsole.log(subscriber);\n// Property 'roles' does not exist on type 'Partial<Omit<SuperbUser, \"roles\">>'.\n")),(0,a.kt)("p",null,"So, the benefits of using TypeScript to derive a partial type includes its support for partial assignment of the object's properties that is allowed by JavaScript and not allowed by default TypeScript. It also warns about possible undesired assignments to the partial."),(0,a.kt)("br",null),(0,a.kt)("div",null,(0,a.kt)("a",{href:"https://discord.gg/refine"},(0,a.kt)("img",{src:"/img/discord_big_blue.png",alt:"discord banner"}))),(0,a.kt)("h2",{id:"with-interfaces"},"With Interfaces"),(0,a.kt)("p",null,"We get the same result if we use an interface for our base ",(0,a.kt)("inlineCode",{parentName:"p"},"SuperbUser")," type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'interface SuperbUser {\n  userId: number;\n  macAddress: string;\n  username: string;\n  email: string;\n  password: string;\n  firstName: string;\n  lastName: string;\n  roles: (\'Admin\' | \'Editor\' | \'Author\')[]\n};\n\ntype Subscriber = Partial<Omit<SuperbUser, \'roles\'>>;\n\nconst subscriber: Subscriber = {\n  userId: 4,\n  macAddress: \'a:5ub:mach1ne\',\n  username: \'sub_user\',\n  email: \'sub_user@gmail.com\'\n};\n\nsubscriber.password = \'12345678\';\nsubscriber.firstName = \'Abdullah\';\nsubscriber.lastName = \'Numan\';\n\nconsole.log(subscriber);\n/*\n{\n  "userId": 4,\n  "macAddress": "a:5ub:mach1ne",\n  "username": "sub_user",\n  "email": "sub_user@gmail.com",\n  "password": "12345678",\n  "firstName": "Abdullah",\n  "lastName": "Numan"\n}\n*/\n')),(0,a.kt)("p",null,"We can also refactor the return type from ",(0,a.kt)("inlineCode",{parentName:"p"},"Omit<>")," into an intermediary type, ",(0,a.kt)("inlineCode",{parentName:"p"},"StrictSubscriber"),", and pass it as the argument of ",(0,a.kt)("strong",{parentName:"p"},"TypeScript Partial"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type StrictSubscriber = Omit<SuperbUser, 'roles'>;\ntype Subscriber = Partial<StrictSubscriber>;\n")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"In this post, we covered partial object transformations with using the utility transformer ",(0,a.kt)("strong",{parentName:"p"},"Partial"),". We found out that it is preferable to setting certain properties of a type to optional manually, especially when dealing with types returned from APIs."))}d.isMDXComponent=!0}}]);