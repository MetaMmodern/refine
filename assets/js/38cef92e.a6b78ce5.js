"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[16843],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return a?n.createElement(k,o(o({ref:t},u),{},{components:a})):n.createElement(k,o({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},49406:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"useCustom",title:"useCustom",siderbar_label:"useCustom"},s=void 0,p={unversionedId:"api-references/hooks/data/useCustom",id:"api-references/hooks/data/useCustom",isDocsHomePage:!1,title:"useCustom",description:"useCustom is a modified version of react-query's useQuery used for custom requests.",source:"@site/docs/api-references/hooks/data/useCustom.md",sourceDirName:"api-references/hooks/data",slug:"/api-references/hooks/data/useCustom",permalink:"/docs/next/api-references/hooks/data/useCustom",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-references/hooks/data/useCustom.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"useCustom",title:"useCustom",siderbar_label:"useCustom"},sidebar:"someSidebar",previous:{title:"useMany",permalink:"/docs/next/api-references/hooks/data/useMany"},next:{title:"useApiUrl",permalink:"/docs/next/api-references/hooks/data/useApiUrl"}},u=[{value:"Features",id:"features",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3},{value:"API",id:"api",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Type Parameters",id:"type-parameters",children:[],level:3},{value:"Return value",id:"return-value",children:[],level:3}],level:2}],d={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useCustom")," is a modified version of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useQuery"},(0,i.kt)("inlineCode",{parentName:"a"},"useQuery"))," used for custom requests."),(0,i.kt)("p",null,"It uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"custom")," method from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api-references/providers/data-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"<Refine>"),"."),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"attention")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"useCustom")," should ",(0,i.kt)("strong",{parentName:"p"},"not")," be used when creating, updating or deleting a resource. To do these; ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api-references/hooks/data/useCreate"},"useCreate"),", ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api-references/hooks/data/useUpdate"},"useUpdate")," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/next/api-references/hooks/data/useDelete"},"useDelete")," hooks should be used instead.",(0,i.kt)("br",{parentName:"p"}),"\n","This is because ",(0,i.kt)("inlineCode",{parentName:"p"},"useCustom"),", unlike other data hooks, does not ",(0,i.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/guides/query-invalidation"},"invalidate queries")," and therefore will not update the application state either.",(0,i.kt)("br",{parentName:"p"}),"\n","If you have to use ",(0,i.kt)("inlineCode",{parentName:"p"},"useCustom")," for mutation operations, you can manually manage the application state with the ",(0,i.kt)("inlineCode",{parentName:"p"},"queryResult"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"refetch")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"remove")," methods returned from the hooks that you use."))),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can send a request to any link, using any of the methods (",(0,i.kt)("inlineCode",{parentName:"li"},"get, delete, head, options, post, put, patch"),")."),(0,i.kt)("li",{parentName:"ul"},"You can send comprehensive requests to resources with ",(0,i.kt)("inlineCode",{parentName:"li"},"Sort")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Filter")," parameters.")),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Let's make a use case. Lets say that we need to verify that the header in the post resource is unique. For this, we have an end-point similar to the one below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="https://api.fake-rest.refine.dev/posts/unique-check?title=Foo bar"',title:'"https://api.fake-rest.refine.dev/posts/unique-check?title','bar"':!0},'{\n    "isAvailable": true\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useCustom, useApiUrl } from "@pankod/refine";\n\ninterface PostUniqueCheckResponse {\n    isAvailable: boolean;\n}\n\nconst apiUrl = useApiUrl();\n\n// highlight-start\nconst { data, isLoading } = useCustom<PostUniqueCheckResponse>({\n    url: `${apiUrl}/posts-unique-check`,\n    method: "get",\n    config: {\n        query: {\n            title: "Foo bar",\n        },\n    },\n});\n// highlight-end\n')),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"url ",(0,i.kt)("div",{className:"required"},"Required")),(0,i.kt)("td",{parentName:"tr",align:null},"URL"),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"method ",(0,i.kt)("div",{className:"required"},"Required")),(0,i.kt)("td",{parentName:"tr",align:null},"Method"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"get"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"delete"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"head"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"options"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"post"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"put"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"patch"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"config"),(0,i.kt)("td",{parentName:"tr",align:null},"Query Params"),(0,i.kt)("td",{parentName:"tr",align:null},"{ sort?: ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api-references/interfaceReferences#crudsorting"},"CrudSorting"),"; filters?: ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api-references/interfaceReferences#crudfilters"},(0,i.kt)("inlineCode",{parentName:"a"},"CrudFilters")),"; payload?: {}; query?: {} }")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"queryOptions"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},"useQuery Options")),(0,i.kt)("td",{parentName:"tr",align:null},"object")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metaData"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,i.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api-references/interfaceReferences#metadataquery"},(0,i.kt)("inlineCode",{parentName:"a"},"MetaDataQuery")))))),(0,i.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Desription"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TData"),(0,i.kt)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api-references/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api-references/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api-references/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TError"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/next/api-references/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api-references/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/next/api-references/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TQuery"),(0,i.kt)("td",{parentName:"tr",align:null},"Values for query params."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TQuery")),(0,i.kt)("td",{parentName:"tr",align:null},"unknown")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TPayload"),(0,i.kt)("td",{parentName:"tr",align:null},"Values for params."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TPayload")),(0,i.kt)("td",{parentName:"tr",align:null},"unknown")))),(0,i.kt)("h3",{id:"return-value"},"Return value"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Result of the ",(0,i.kt)("inlineCode",{parentName:"td"},"react-query"),"'s useQuery"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,i.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<CustomResponse<TData>, TError>")))))))}m.isMDXComponent=!0}}]);