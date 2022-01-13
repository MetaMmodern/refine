"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99233],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},79246:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={id:"useNavigation",title:"useNavigation"},p=void 0,s={unversionedId:"api-references/hooks/navigation/useNavigation",id:"api-references/hooks/navigation/useNavigation",isDocsHomePage:!1,title:"useNavigation",description:"refine uses routerProvider and comes with all redirects out of the box. It allows you to manage your routing operations in refine. Using this hook, you can manage all the routing operations of your application very easily.",source:"@site/docs/api-references/hooks/navigation/useNavigation.md",sourceDirName:"api-references/hooks/navigation",slug:"/api-references/hooks/navigation/useNavigation",permalink:"/docs/next/api-references/hooks/navigation/useNavigation",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-references/hooks/navigation/useNavigation.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"useNavigation",title:"useNavigation"},sidebar:"someSidebar",previous:{title:"useResourceWithRoute",permalink:"/docs/next/api-references/hooks/resource/useResourceWithRoute"},next:{title:"useImport",permalink:"/docs/next/api-references/hooks/import-export/useImport"}},d=[{value:"Usage",id:"usage",children:[],level:3},{value:"List",id:"list",children:[{value:"Create",id:"create",children:[],level:3},{value:"Edit",id:"edit",children:[],level:3},{value:"Show",id:"show",children:[],level:3},{value:"Clone",id:"clone",children:[],level:3},{value:"Push, Replace and GoBack",id:"push-replace-and-goback",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Return values",id:"return-values",children:[{value:"Interface",id:"interface",children:[],level:4}],level:3}],level:2}],u={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"refine")," uses ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/providers/router-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"routerProvider"))," and comes with all redirects out of the box. It allows you to manage your routing operations in refine. Using this hook, you can manage all the routing operations of your application very easily."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useNavigation } from "@pankod/refine";\n\nconst { create, edit, clone, show, list, push, replace, goBack } = useNavigation();\n')),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"useNavigation")," uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"useHistory")," of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/api-references/providers/router-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"routerProvider")),"."))),(0,r.kt)("h3",{id:"usage"},"Usage"),(0,r.kt)("p",null,"We will make a button for each method to use."),(0,r.kt)("h2",{id:"list"},"List"),(0,r.kt)("p",null,"Let's imagine that we have a post list and we want to be redirected to this page. To do this we will use the list hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    Button,\n// highlight-next-line\n    useNavigation,\n} from "@pankod/refine";\n\nexport const MyListButton = () => {\n// highlight-next-line\n    const { list } = useNavigation();\n\n    return (\n        <Button\n            onClick={(): void =>\n// highlight-next-line\n                list("posts")\n            }\n        >\n            Navigate to Post List Page\n        </Button>\n    );\n};\n')),(0,r.kt)("h3",{id:"create"},"Create"),(0,r.kt)("p",null,"If we want to go to the post creation page to create a new post, we can use the create hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    Button,\n// highlight-next-line\n    useNavigation,\n} from "@pankod/refine";\n\nexport const MyCreateButton = () => {\n// highlight-next-line\n    const { create } = useNavigation();\n\n    return (\n        <Button\n            onClick={(): void =>\n// highlight-next-line\n                create("posts")\n            }\n        >\n            Navigate to Create Page\n        </Button>\n    );\n};\n')),(0,r.kt)("h3",{id:"edit"},"Edit"),(0,r.kt)("p",null,"Let's see what we should do if we want to go to the editing page of one of our posts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    Button,\n// highlight-next-line\n    useNavigation,\n} from "@pankod/refine";\n\nexport const MyEditButton = () => {\n// highlight-next-line\n    const { edit } = useNavigation();\n\n    return (\n        <Button\n            onClick={(): void =>\n// highlight-next-line\n                edit("posts", "1")\n            }\n        >\n            Navigate to Edit Page\n        </Button>\n    );\n};\n')),(0,r.kt)("p",null,"We used the ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," to navigate to the post edit page, but you can see the differences in using it. ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," requires the id property from us and clicking the button will trigger the edit method of useNavigation and then redirect the app to ",(0,r.kt)("inlineCode",{parentName:"p"},"/posts/edit/1")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Attention")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There is something we should pay attention to here. We need to give the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of which post we want to edit."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You can also give a ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," property to the methods. You can look here to see the ",(0,r.kt)("a",{parentName:"p",href:"#properties"},"properties.")))),(0,r.kt)("h3",{id:"show"},"Show"),(0,r.kt)("p",null,"If you want to show the detail of your posts you can use show and you need ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," for show."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    Button,\n// highlight-next-line\n    useNavigation,\n} from "@pankod/refine";\n\nexport const MyShowButton = () => {\n// highlight-next-line\n    const { show } = useNavigation();\n\n    return (\n        <Button\n            onClick={(): void =>\n// highlight-next-line\n                show("posts", "1")\n            }\n        >\n            Navigate to Show Page\n        </Button>\n    );\n};\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Attention")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There is something we should pay attention to here. We need to give the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of which post we want to show."))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If you want to return to previous page. You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"goBack")," hook."))),(0,r.kt)("h3",{id:"clone"},"Clone"),(0,r.kt)("p",null,"If we have the resources to clone a post and we want to go to this page, we will use ",(0,r.kt)("inlineCode",{parentName:"p"},"clone")," with a record id."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    Button,\n// highlight-next-line\n    useNavigation,\n} from "@pankod/refine";\n\nexport const MyCloneButton = () => {\n// highlight-next-line\n    const { clone } = useNavigation();\n\n    return (\n        <Button\n            onClick={(): void =>\n// highlight-next-line\n                clone("posts", "1")\n            }\n        >\n            Navigate to Clone Page\n        </Button>\n    );\n};\n')),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Attention")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"There is something we should pay attention to here. We need to give the ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of which post we want to clone."))),(0,r.kt)("h3",{id:"push-replace-and-goback"},"Push, Replace and GoBack"),(0,r.kt)("p",null,"If we do not want to use the above methods and want to redirect ourselves, we should use ",(0,r.kt)("inlineCode",{parentName:"p"},"push")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"replace")," methods and also we can use ",(0,r.kt)("inlineCode",{parentName:"p"},"goBack")," to return to previous page. You can check out the differences between them ",(0,r.kt)("a",{parentName:"p",href:"#return-values"},"here"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    Button,\n// highlight-next-line\n    useNavigation,\n} from "@pankod/refine";\n\nexport const MyHistoryButtons = () => {\n// highlight-next-line\n    const { push, replace, goBack } = useNavigation();\n\n    return (\n        <>\n            <Button\n                onClick={(): void =>\n// highlight-next-line\n                    push("posts")\n                }\n            >\n                Push to posts Page\n            </Button>\n            <Button\n                onClick={(): void =>\n// highlight-next-line\n                    replace("posts")\n                }\n            >\n                Replaces to posts Page\n            </Button>\n            <Button\n                onClick={(): void =>\n// highlight-next-line\n                    goBack()\n                }\n            >\n                Go back to previous Page\n            </Button>\n        </>\n    );\n};\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource ",(0,r.kt)("div",{className:"required"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"Redirect the app to the given resource name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"type"),(0,r.kt)("td",{parentName:"tr",align:null},"It is ",(0,r.kt)("a",{parentName:"td",href:"/docs/next/api-references/providers/router-provider"},(0,r.kt)("inlineCode",{parentName:"a"},"routerProvider"))," history types"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"push"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"It is used to append to the end of the path"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h3",{id:"return-values"},"Return values"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"create"),(0,r.kt)("td",{parentName:"tr",align:null},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"td"},"create page")," of your resource"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(resource: string, type:")," ",(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")," ",(0,r.kt)("inlineCode",{parentName:"td"},") => void "))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"list"),(0,r.kt)("td",{parentName:"tr",align:null},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"td"},"list page")," of your resource"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(resource: string, type:")," ",(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")," ",(0,r.kt)("inlineCode",{parentName:"td"},") => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"edit"),(0,r.kt)("td",{parentName:"tr",align:null},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"td"},"edit page")," of your resource"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(resource: string, type:")," ",(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")," ",(0,r.kt)("inlineCode",{parentName:"td"},", id: string) => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clone"),(0,r.kt)("td",{parentName:"tr",align:null},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"td"},"clone page")," of your resource"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(resource: string, type:")," ",(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")," ",(0,r.kt)("inlineCode",{parentName:"td"},", id: string) => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show"),(0,r.kt)("td",{parentName:"tr",align:null},"Navigate to ",(0,r.kt)("inlineCode",{parentName:"td"},"show page")," of your resource"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(resource: string, type:")," ",(0,r.kt)("a",{parentName:"td",href:"#interface"},"HistoryType")," ",(0,r.kt)("inlineCode",{parentName:"td"},", id: string) => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"push"),(0,r.kt)("td",{parentName:"tr",align:null},"Pushes a new entry onto the history stack"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(path: string, state?: unknown ) => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"replace"),(0,r.kt)("td",{parentName:"tr",align:null},"Replaces the current entry on the history stack"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(path: string, state?: unknown ) => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"goBack"),(0,r.kt)("td",{parentName:"tr",align:null},"Equivalent to go previous stack"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"() => void"))))),(0,r.kt)("h4",{id:"interface"},"Interface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="History Type"',title:'"History','Type"':!0},'export type HistoryType = "push" | "replace";\n')))}c.isMDXComponent=!0}}]);