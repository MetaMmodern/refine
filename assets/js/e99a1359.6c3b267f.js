"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[62469],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93444:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={title:"Build Access Control Mechanism using Permify",description:"In this article, I will explain how to build an Access Control n Refine using Permify; an authorization API that helps you to create any kind of authorization system easily with its panel.",slug:"build-access-control-permify",authors:"ege",tags:["rbac","permissions","open-source","react","access","authorization","keystone","role","refine","abac"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-05-21-build-access-control-permify/social.jpg",hide_table_of_contents:!1},i=void 0,s={permalink:"/blog/build-access-control-permify",source:"@site/blog/2022-05-23-build-access-control-permify.md",title:"Build Access Control Mechanism using Permify",description:"In this article, I will explain how to build an Access Control n Refine using Permify; an authorization API that helps you to create any kind of authorization system easily with its panel.",date:"2022-05-23T00:00:00.000Z",formattedDate:"May 23, 2022",tags:[{label:"rbac",permalink:"/blog/tags/rbac"},{label:"permissions",permalink:"/blog/tags/permissions"},{label:"open-source",permalink:"/blog/tags/open-source"},{label:"react",permalink:"/blog/tags/react"},{label:"access",permalink:"/blog/tags/access"},{label:"authorization",permalink:"/blog/tags/authorization"},{label:"keystone",permalink:"/blog/tags/keystone"},{label:"role",permalink:"/blog/tags/role"},{label:"refine",permalink:"/blog/tags/refine"},{label:"abac",permalink:"/blog/tags/abac"}],readingTime:5.475,hasTruncateMarker:!0,authors:[{name:"Ege Ayt\u0131n",title:"Software Developer",url:"https://github.com/EgeAytin",imageURL:"https://github.com/EgeAytin.png",key:"ege"}],frontMatter:{title:"Build Access Control Mechanism using Permify",description:"In this article, I will explain how to build an Access Control n Refine using Permify; an authorization API that helps you to create any kind of authorization system easily with its panel.",slug:"build-access-control-permify",authors:"ege",tags:["rbac","permissions","open-source","react","access","authorization","keystone","role","refine","abac"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-05-21-build-access-control-permify/social.jpg",hide_table_of_contents:!1},prevItem:{title:"We\u2019ve raised $1M in Seed Funding! \ud83d\ude80 \ud83d\ude80 \ud83d\ude80",permalink:"/blog/weve-raised-dollar1m-seed-funding"},nextItem:{title:"Best Open-Source Headless CMS to Try for Your Next Application",permalink:"/blog/open-source-headless-cms"},relatedPosts:[{title:"Build low-code, customizable and authorization ready (accesscontrol) admin panel with NestJS.",permalink:"/blog/how-to-access-control-with-nestjs",formattedDate:"February 21, 2022",authors:[{name:"Y\u0131ld\u0131ray \xdcnl\xfc",title:"Software Developer",url:"https://github.com/yildirayunlu",imageURL:"https://github.com/yildirayunlu.png",key:"yildiray"}],readingTime:3.19,date:"2022-02-21T00:00:00.000Z"},{title:"Material UI Grid System in React",permalink:"/blog/material-ui-grid",formattedDate:"September 18, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:13.13,date:"2022-09-18T00:00:00.000Z"},{title:"Material UI button in React",permalink:"/blog/mui-button-in-react",formattedDate:"September 5, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.04,date:"2022-09-05T00:00:00.000Z"}],authorPosts:[]},l={authorsImageUrls:[void 0]},c=[{value:"Build Access Control Mechanism using Permify",id:"build-access-control-mechanism-using-permify",level:2},{value:"Introduction",id:"introduction",level:3},{value:"Step 1: Setup the Permify in Refine application",id:"step-1-setup-the-permify-in-refine-application",level:3},{value:"Step 2: Create a access control mechanism in Refine Access Control Provider",id:"step-2-create-a-access-control-mechanism-in-refine-access-control-provider",level:3},{value:"Step 3: Run application &amp; Create Resources",id:"step-3-run-application--create-resources",level:3},{value:"Step 4: Define access control rules &amp; options on Permify",id:"step-4-define-access-control-rules--options-on-permify",level:3},{value:"Step 5: Creating rule sets (Options)",id:"step-5-creating-rule-sets-options",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"Refine Permify Live CodeSandbox Example",id:"refine-permify-live-codesandbox-example",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"build-access-control-mechanism-using-permify"},"Build Access Control Mechanism using Permify"),(0,o.kt)("p",null,"In this article, we will examine how to build an Access Control mechanism in Refine using Permify; an authorization as a service that helps you to create any kind of authorization system easily with its panel."),(0,o.kt)("h3",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"As an overview, we will:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Setup Permify to refine application"),(0,o.kt)("li",{parentName:"ul"},"Create a access control mechanism in Refine Access Control Provider"),(0,o.kt)("li",{parentName:"ul"},"Define access control rules & options on Permify Panel to check user accesses.")),(0,o.kt)("h3",{id:"step-1-setup-the-permify-in-refine-application"},"Step 1: Setup the Permify in Refine application"),(0,o.kt)("p",null,"First let's create a demo react application using refine. You can follow the ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/ui-frameworks/antd/tutorial/"},"tutorial to create a simple")," admin panel for a CMS-like application. "),(0,o.kt)("p",null,"If you're application is ready, lets create a free instant account at Permify from ",(0,o.kt)("a",{parentName:"p",href:"https://panel.permify.co/auth/registration"},"here"),". "),(0,o.kt)("p",null,"Then, we need to  install permify js package to our app with following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"npm install @permify/permify-service-js\n")),(0,o.kt)("p",null,"And initialize permify client with workspace id and public token which can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://panel.permify.co/settings/workspace"},"Workspace Settings")," section. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'//initialize permify client\nconst permify = new PermifyClient({\n workspace_id: "workspace_id",\n public_key: "public_token"\n});\n')),(0,o.kt)("p",null,"Before diving into more; if you\u2019re using your API rather than refine\u2019s test API, you need to complete the setup for your backend as well."),(0,o.kt)("p",null,"On the server side you just need to match your users and resources. You can follow the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.permify.co/docs/getting-started"},"Getting Started")," on Permify docs."),(0,o.kt)("p",null,"If you\u2019re using refine\u2019s demo API, create a data folder and add sample users there. We will use the ",(0,o.kt)("strong",{parentName:"p"},"Header")," layout component to change logged in sample users. "),(0,o.kt)("p",null,"Check out the example demo environment for the data folder and full UI layer. "),(0,o.kt)("h3",{id:"step-2-create-a-access-control-mechanism-in-refine-access-control-provider"},"Step 2: Create a access control mechanism in Refine Access Control Provider"),(0,o.kt)("p",null,"Refine provides an agnostic API via the ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/core/providers/accessControl-provider/"},"accessControlProvider")," to manage access control throughout your app. "),(0,o.kt)("p",null,"Lets create a mechanism in our Access Control Provider using Permify client\u2019s ",(0,o.kt)("strong",{parentName:"p"},"isAuthorized")," function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'accessControlProvider={{\n can: async ({ resource, action, params }) => {\n   if (action === "delete" || action === "edit" || action === "show") {\n     return Promise.resolve({\n       can: await permify.isAuthorized(\n         user.id,\n         resource,\n         action,\n         params.id.toString(),\n         resource\n       )\n     });\n   }\n \n   return Promise.resolve({\n     can: await permify.isAuthorized(user.id, resource, action)\n   });\n }\n}}\n')),(0,o.kt)("p",null,"With this set up, each access request can be captured by Permify and returns a decision according to your pre-defined rules and conditions on the Permify Panel. "),(0,o.kt)("h3",{id:"step-3-run-application--create-resources"},"Step 3: Run application & Create Resources"),(0,o.kt)("p",null,"Run the application and then open your ",(0,o.kt)("a",{parentName:"p",href:"https://panel.permify.co/access-control/policies"},"Policies")," section on the Permify Panel to see created policies."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"isAuthorized")," function works in the first or create methodology. As an example, if the action is  ",(0,o.kt)("strong",{parentName:"p"},"create")," and resource is ",(0,o.kt)("strong",{parentName:"p"},"posts")," it will automatically create its policy."),(0,o.kt)("p",null,"Since it's newly created and no rules attached, it will return a true to access request. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," If you\u2019re testing this access mechanism without creating resources beforehand on Permify. You won\u2019t see the policies for ",(0,o.kt)("strong",{parentName:"p"},"delete"),", ",(0,o.kt)("strong",{parentName:"p"},"show")," and ",(0,o.kt)("strong",{parentName:"p"},"edit")," actions since these are unique resource items related so that these fields are hidden. "),(0,o.kt)("p",null,"To create resources use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.permify.co/docs/api-reference/resource/create/"},"createResource")," request on your backend."),(0,o.kt)("p",null,"For testing purposes, let\u2019s create resource from Panel with entering refine ",(0,o.kt)("strong",{parentName:"p"},"params.id")," as ",(0,o.kt)("strong",{parentName:"p"},"resource.id")," and ",(0,o.kt)("strong",{parentName:"p"},"type")," as ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"resource name"))," as shown below"),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-05-21-build-access-control-permify/create_resource.png",alt:"create_resource"}),(0,o.kt)("h3",{id:"step-4-define-access-control-rules--options-on-permify"},"Step 4: Define access control rules & options on Permify"),(0,o.kt)("p",null,"Now we\u2019ll define some rules and rule sets (options) to check specific conditions on access requests on resources."),(0,o.kt)("p",null,"Let's say we have ",(0,o.kt)("strong",{parentName:"p"},"\u201cadmin\u201d")," and ",(0,o.kt)("strong",{parentName:"p"},"\u201ceditor\u201d")," role and the basic access conditions are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users with admin role can access everywhere"),(0,o.kt)("li",{parentName:"ul"},"Users with an editor role only edit or delete specific content if he/she is the owner of the resource.")),(0,o.kt)("p",null,"Let\u2019s create rules for these comparisons. Open ",(0,o.kt)("a",{parentName:"p",href:"https://panel.permify.co/access-control/rules"},"Rules Section")," and click ",(0,o.kt)("strong",{parentName:"p"},"Create Rule")," button"),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-05-21-build-access-control-permify/create_rule.png",alt:"create_rule"}),(0,o.kt)("p",null,"We can create an ",(0,o.kt)("strong",{parentName:"p"},"is-editor")," rule to check the editor role as same as checking admin. "),(0,o.kt)("p",null,"As an overview you can create a role checking rule with a statement "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"\u201crole_name\u201d === user.roles[].guard_name\n")),(0,o.kt)("p",null,"Alternatively you can create rules using or modifying ",(0,o.kt)("strong",{parentName:"p"},"rule templates"),". For our example we need to create a resource owner rule. "),(0,o.kt)("p",null,"Click use a template button and choose ",(0,o.kt)("strong",{parentName:"p"},"is Owner")," rule template for checking whether user is owner of the resource."),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-05-21-build-access-control-permify/rule_template.png",alt:"rule_template"}),(0,o.kt)("p",null,"Then let's attach these rules to our policies in order to meet with our access conditions defined above. After editing ",(0,o.kt)("strong",{parentName:"p"},"policies")," your table should look like this"),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-05-21-build-access-control-permify/policy_table.png",alt:"policy_table"}),(0,o.kt)("p",null,"Before testing these policies, let's set the owner of the test resource (params.id === 1000) as our editor rule user. "),(0,o.kt)("p",null,"Open up ",(0,o.kt)("a",{parentName:"p",href:"https://panel.permify.co/customers/resources"},"Resources Section")," and change the attributes object of ",(0,o.kt)("strong",{parentName:"p"},"post item 1000")," as follows:"),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-05-21-build-access-control-permify/edit_owner_id_attribute.png",alt:"edit_owner_id_attribute"}),(0,o.kt)("p",null,"Now let's run the application again to see results for both roles."),(0,o.kt)("h3",{id:"step-5-creating-rule-sets-options"},"Step 5: Creating rule sets (Options)"),(0,o.kt)("p",null,"There are times when authorization structure conditions can\u2019t be straight forward as we demonstrated. "),(0,o.kt)("p",null,"Sometimes business needs force you to check multiple complex rules or rule sets. "),(0,o.kt)("p",null,"To demonstrade that lets add a custom role to create ",(0,o.kt)("strong",{parentName:"p"},"rule sets (Options)")," on Permify."),(0,o.kt)("p",null,"Lets say"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Users with an editor role can edit any post if he/she is in working hours.")),(0,o.kt)("p",null,"Basically if the user is in working hours approximately (8:00 am to 6.00 pm) users with an editor role can access edit of any given resource."),(0,o.kt)("p",null,"Firstly we need to create a rule to check whether user perform access checks in working hours or not. Create this rule like below: "),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-05-21-build-access-control-permify/create_rule_working_hours.png",alt:"create_rule_working_hours"}),(0,o.kt)("p",null,"Also we need to check that the user should have an editor role to access content. There is the point where rule sets(options) come up. Lets create an option from option section as follows: "),(0,o.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-05-21-build-access-control-permify/create_option.png",alt:"create_option"}),(0,o.kt)("p",null,"Now add this rule to our edit policy and test the results with running our app. "),(0,o.kt)("p",null,"Select the Editor role and you should see edit button disabled when you're performing that action outside the time interval we have determined (8:00 am to 6.00 pm)"),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In this article, we create a couple access check examples using Permify. "),(0,o.kt)("p",null,"We mostly focused on the client side using refine access control provider hence Permify is a full stack solution which you can implement your authorization logic for every layer of your application from backend to frontend. "),(0,o.kt)("p",null,"So, if you are looking for an access control mechanism, you can create any kind of role or attribute based authorization structures easily with Permify. "),(0,o.kt)("h2",{id:"refine-permify-live-codesandbox-example"},"Refine Permify Live CodeSandbox Example"),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/github/Permify/permify-refine?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"access-control-permify-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}u.isMDXComponent=!0}}]);