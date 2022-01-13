"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[53747],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},31262:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],u={id:"useResourceWithRoute",title:"useResourceWithRoute"},s=void 0,c={unversionedId:"api-references/hooks/resource/useResourceWithRoute",id:"api-references/hooks/resource/useResourceWithRoute",isDocsHomePage:!1,title:"useResourceWithRoute",description:"useResourceWithRoute is used to get the properties of a resource defined as a element of the resources. It returns a function and this function allows us to access the resource with the route option we gave to the resource.",source:"@site/docs/api-references/hooks/resource/useResourceWithRoute.md",sourceDirName:"api-references/hooks/resource",slug:"/api-references/hooks/resource/useResourceWithRoute",permalink:"/docs/next/api-references/hooks/resource/useResourceWithRoute",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-references/hooks/resource/useResourceWithRoute.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"useResourceWithRoute",title:"useResourceWithRoute"},sidebar:"someSidebar",previous:{title:"useResource",permalink:"/docs/next/api-references/hooks/resource/useResource"},next:{title:"useNavigation",permalink:"/docs/next/api-references/hooks/navigation/useNavigation"}},l=[{value:"API Reference",id:"api-reference",children:[{value:"Return value",id:"return-value",children:[{value:"Interfaces",id:"interfaces",children:[],level:4}],level:3}],level:2}],p={toc:l};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useResourceWithRoute")," is used to get the properties of a resource defined as a element of the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources"),". It returns a function and this function allows us to access the resource with the ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," option we gave to the resource."),(0,a.kt)("p",null,"The hook is used internal in ",(0,a.kt)("strong",{parentName:"p"},"refine"),". Normally you don't need this hook, but we export it as it may be useful for some use-cases."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { useResourceWithRoute } from "@pankod/refine";\n\nconst resourceWithRoute = useResourceWithRoute();\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"return-value"},"Return value"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resourceWithRoute"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(route: string) => IResourceItem"))))),(0,a.kt)("h4",{id:"interfaces"},"Interfaces"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface IResourceItem {\n    name: string;\n    label?: string;\n    route?: string;\n    icon?: ReactNode;\n    canCreate?: boolean;\n    canEdit?: boolean;\n    canShow?: boolean;\n    canDelete?: boolean;\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"canCreate"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"canShow")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"canEdit")," properties are defined automatically if the ",(0,a.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"edit")," components are defined on the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," property in ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>"),".")))}d.isMDXComponent=!0}}]);