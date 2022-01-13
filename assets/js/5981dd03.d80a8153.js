"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99073],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,k=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?o.createElement(k,r(r({ref:t},c),{},{components:n})):o.createElement(k,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},31459:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=n(40401),s=n(85894),l=n(60523),d=["components"],c={id:"mutation-mode",title:"Mutation Mode"},u=void 0,p={unversionedId:"guides-and-concepts/mutation-mode",id:"version-2.xx.xx/guides-and-concepts/mutation-mode",isDocsHomePage:!1,title:"Mutation Mode",description:"Overview",source:"@site/versioned_docs/version-2.xx.xx/guides-and-concepts/mutation-mode.md",sourceDirName:"guides-and-concepts",slug:"/guides-and-concepts/mutation-mode",permalink:"/docs/guides-and-concepts/mutation-mode",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/guides-and-concepts/mutation-mode.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"mutation-mode",title:"Mutation Mode"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Multitenancy",permalink:"/docs/guides-and-concepts/multi-tenancy"},next:{title:"Custom Layout",permalink:"/docs/guides-and-concepts/custom-layout"}},m=[{value:"Overview",id:"overview",children:[],level:2},{value:"Modes",id:"modes",children:[{value:"<code>pessimistic</code>",id:"pessimistic",children:[],level:3},{value:"<code>optimistic</code>",id:"optimistic",children:[],level:3},{value:"<code>undoable</code>",id:"undoable",children:[],level:3}],level:2},{value:"Usage",id:"usage",children:[{value:"Supported data hooks",id:"supported-data-hooks",children:[],level:3},{value:"Supported form hooks",id:"supported-form-hooks",children:[],level:3},{value:"Supported components",id:"supported-components",children:[],level:3}],level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],k={toc:m};function f(e){var t=e.components,n=(0,a.Z)(e,d);return(0,i.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Mutation mode determines which mode the mutation runs with. Mutations can run under three different modes: ",(0,i.kt)("inlineCode",{parentName:"p"},"pessimistic"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"optimistic")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"undoable"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Each mode corresponds to a different type of user experience."),(0,i.kt)("h2",{id:"modes"},"Modes"),(0,i.kt)("p",null,"We'll show usages of modes with editing a record examples."),(0,i.kt)("h3",{id:"pessimistic"},(0,i.kt)("inlineCode",{parentName:"h3"},"pessimistic")),(0,i.kt)("p",null,"The mutation runs immediately. Redirection and UI updates are executed after the mutation returns successfuly."),(0,i.kt)("br",null),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:r.Z,alt:"pessimistic mode"})),(0,i.kt)("br",null),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When the user clicks on save button, request to the API happens directly and after successful response, list page updates with newly edited record.")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"optimistic"},(0,i.kt)("inlineCode",{parentName:"h3"},"optimistic")),(0,i.kt)("p",null,"The mutation is applied locally, redirection and UI updates are executed immediately as if the mutation is succesful. If mutation returns with error, UI updates to show data prior to the mutation."),(0,i.kt)("br",null),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:s.Z,alt:"optimistic mode"})),(0,i.kt)("br",null),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When the user clicks on save button, request to the API happens directly and list page updates with edited data immediately without waiting API response.")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"undoable"},(0,i.kt)("inlineCode",{parentName:"h3"},"undoable")),(0,i.kt)("p",null,"The mutation is applied locally, redirection and UI updates are executed immediately as if the mutation is succesful. Waits for a customizable amount of timeout period before mutation is applied. During the timeout, mutation can be cancelled from the notification with an undo button and UI will revert back accordingly."),(0,i.kt)("br",null),(0,i.kt)("div",{class:"img-container"},(0,i.kt)("div",{class:"window"},(0,i.kt)("div",{class:"control red"}),(0,i.kt)("div",{class:"control orange"}),(0,i.kt)("div",{class:"control green"})),(0,i.kt)("img",{src:l.Z,alt:"undoable mode"})),(0,i.kt)("br",null),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"When the user clicks on save button, request isn't sent to API immediately however list page updates with edited data. It waits for a period of time while the user can cancel the mutation. If the mutation is cancelled, locally applied edit is undone.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Mutation mode can be set application-wide in ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-references/components/refine-config#mutationmode"},(0,i.kt)("inlineCode",{parentName:"a"},"<Refine>"))," component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'<Refine ... mutationMode="optimistic" />\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Its default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"pessimistic"),".")),(0,i.kt)("br",null),(0,i.kt)("p",null,"It can also be set in supported ",(0,i.kt)("a",{parentName:"p",href:"https://docs-mu-doc-refine.pankod.com/docs/api-references/hooks/data/useUpdate#mutation-mode"},"data hooks")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docs-mu-doc-refine.pankod.com/docs/api-references/hooks/form/useForm#properties"},"form hooks")," for fine-grained configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useUpdate } from "@pankod/refine";\n\nconst { mutate } = useUpdate();\n\nmutate({\n    resource: "categories",\n    id: "2",\n    values: { title: "New Category Title" },\n// highlight-next-line\n    mutationMode: "optimistic",\n});\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Mutation mode passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"<Refine>")," will be overriden by the mutation mode passed to data or form hooks and components.")),(0,i.kt)("h3",{id:"supported-data-hooks"},"Supported data hooks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api-references/hooks/data/useUpdate"},(0,i.kt)("inlineCode",{parentName:"a"},"useUpdate")," ","\u2192")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api-references/hooks/data/useUpdateMany"},(0,i.kt)("inlineCode",{parentName:"a"},"useUpdateMany")," ","\u2192")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api-references/hooks/data/useDelete"},(0,i.kt)("inlineCode",{parentName:"a"},"useDelete")," ","\u2192")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api-references/hooks/data/useDeleteMany"},(0,i.kt)("inlineCode",{parentName:"a"},"useDeleteMany")," ","\u2192"))),(0,i.kt)("h3",{id:"supported-form-hooks"},"Supported form hooks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api-references/hooks/form/useForm"},(0,i.kt)("inlineCode",{parentName:"a"},"useForm")," ","\u2192")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api-references/hooks/form/useModalForm"},(0,i.kt)("inlineCode",{parentName:"a"},"useModalForm")," ","\u2192")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api-references/hooks/form/useDrawerForm"},(0,i.kt)("inlineCode",{parentName:"a"},"useDrawerForm")," ","\u2192")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api-references/hooks/form/useStepsForm"},(0,i.kt)("inlineCode",{parentName:"a"},"useStepsForm")," ","\u2192"))),(0,i.kt)("h3",{id:"supported-components"},"Supported components"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api-references/components/buttons/delete-button"},(0,i.kt)("inlineCode",{parentName:"a"},"DeleteButton")," ","\u2192"))),(0,i.kt)("br",null),(0,i.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/refine-example-mutation-mode-0m3y9?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-example-mutation-mode",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}f.isMDXComponent=!0},85894:function(e,t,n){t.Z=n.p+"assets/images/optimistic-1baea0c446d95190b82e5adf9a3e32cf.gif"},40401:function(e,t,n){t.Z=n.p+"assets/images/pessimistic-e52b490c804dadebf779a77fe9f3e343.gif"},60523:function(e,t,n){t.Z=n.p+"assets/images/undoable-5805642a1d8210bb06f822556b2dd457.gif"}}]);