"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1784],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||a;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59972:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),c=["components"],i={id:"useResource",title:"useResource"},u=void 0,s={unversionedId:"api-references/hooks/resource/useResource",id:"api-references/hooks/resource/useResource",isDocsHomePage:!1,title:"useResource",description:"useResource is used to get resources that are defined as property of the `` component.",source:"@site/docs/api-references/hooks/resource/useResource.md",sourceDirName:"api-references/hooks/resource",slug:"/api-references/hooks/resource/useResource",permalink:"/docs/next/api-references/hooks/resource/useResource",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-references/hooks/resource/useResource.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"useResource",title:"useResource"},sidebar:"someSidebar",previous:{title:"useMenu",permalink:"/docs/next/api-references/hooks/resource/useMenu"},next:{title:"useResourceWithRoute",permalink:"/docs/next/api-references/hooks/resource/useResourceWithRoute"}},p=[{value:"API Reference",id:"api-reference",children:[{value:"Return value",id:"return-value",children:[{value:"Interfaces",id:"interfaces",children:[],level:4}],level:3}],level:2}],l={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useResource")," is used to get ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," that are defined as property of the ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { useResource } from "@pankod/refine";\n\nconst resources = useResource();\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"return-value"},"Return value"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Resources"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#interfaces"},(0,a.kt)("inlineCode",{parentName:"a"},"IResourceItem[]")))))),(0,a.kt)("h4",{id:"interfaces"},"Interfaces"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface IResourceItem {\n    name: string;\n    label?: string;\n    route?: string;\n    icon?: ReactNode;\n    canCreate?: boolean;\n    canEdit?: boolean;\n    canShow?: boolean;\n    canDelete?: boolean;\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"canCreate"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"canShow")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"canEdit")," properties are defined automatically if the ",(0,a.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"show")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"edit")," components are defined on the ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," property in ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>"),".")))}d.isMDXComponent=!0}}]);