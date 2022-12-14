"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99073],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(o),m=a,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return o?n.createElement(k,r(r({ref:t},p),{},{components:o})):n.createElement(k,r({ref:t},p))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=o[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},31459:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=o(87462),a=(o(67294),o(3905));const i={id:"mutation-mode",title:"Mutation Mode"},r=void 0,s={unversionedId:"guides-and-concepts/mutation-mode",id:"version-2.xx.xx/guides-and-concepts/mutation-mode",title:"Mutation Mode",description:"Overview",source:"@site/versioned_docs/version-2.xx.xx/guides-and-concepts/mutation-mode.md",sourceDirName:"guides-and-concepts",slug:"/guides-and-concepts/mutation-mode",permalink:"/docs/2.xx.xx/guides-and-concepts/mutation-mode",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/guides-and-concepts/mutation-mode.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1671005090,formattedLastUpdatedAt:"Dec 14, 2022",frontMatter:{id:"mutation-mode",title:"Mutation Mode"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"Strapi-v4",permalink:"/docs/2.xx.xx/guides-and-concepts/multi-tenancy/strapi-v4"},next:{title:"Custom Layout",permalink:"/docs/2.xx.xx/guides-and-concepts/custom-layout"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Modes",id:"modes",level:2},{value:"<code>pessimistic</code>",id:"pessimistic",level:3},{value:"<code>optimistic</code>",id:"optimistic",level:3},{value:"<code>undoable</code>",id:"undoable",level:3},{value:"Usage",id:"usage",level:2},{value:"Supported data hooks",id:"supported-data-hooks",level:3},{value:"Supported form hooks",id:"supported-form-hooks",level:3},{value:"Supported components",id:"supported-components",level:3},{value:"Live Codesandbox Example",id:"live-codesandbox-example",level:2}],p={toc:d};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Mutation mode determines which mode the mutation runs with. Mutations can run under three different modes: ",(0,a.kt)("inlineCode",{parentName:"p"},"pessimistic"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"optimistic")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"undoable"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Each mode corresponds to a different type of user experience."),(0,a.kt)("h2",{id:"modes"},"Modes"),(0,a.kt)("p",null,"We'll show usages of modes with editing a record examples."),(0,a.kt)("h3",{id:"pessimistic"},(0,a.kt)("inlineCode",{parentName:"h3"},"pessimistic")),(0,a.kt)("p",null,"The mutation runs immediately. Redirection and UI updates are executed after the mutation returns successfuly."),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/mutation-mode/pessimistic.gif",alt:"pessimistic mode"})),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When the user clicks on save button, request to the API happens directly and after successful response, list page updates with newly edited record.")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"optimistic"},(0,a.kt)("inlineCode",{parentName:"h3"},"optimistic")),(0,a.kt)("p",null,"The mutation is applied locally, redirection and UI updates are executed immediately as if the mutation is succesful. If mutation returns with error, UI updates to show data prior to the mutation."),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/mutation-mode/optimistic.gif",alt:"optimistic mode"})),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When the user clicks on save button, request to the API happens directly and list page updates with edited data immediately without waiting API response.")),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"undoable"},(0,a.kt)("inlineCode",{parentName:"h3"},"undoable")),(0,a.kt)("p",null,"The mutation is applied locally, redirection and UI updates are executed immediately as if the mutation is succesful. Waits for a customizable amount of timeout period before mutation is applied. During the timeout, mutation can be cancelled from the notification with an undo button and UI will revert back accordingly."),(0,a.kt)("br",null),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/mutation-mode/undoable.gif",alt:"undoable mode"})),(0,a.kt)("br",null),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When the user clicks on save button, request isn't sent to API immediately however list page updates with edited data. It waits for a period of time while the user can cancel the mutation. If the mutation is cancelled, locally applied edit is undone.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Mutation mode can be set application-wide in ",(0,a.kt)("a",{parentName:"p",href:"/docs/2.xx.xx/api-references/components/refine-config#mutationmode"},(0,a.kt)("inlineCode",{parentName:"a"},"<Refine>"))," component."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'<Refine ... mutationMode="optimistic" />\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Its default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"pessimistic"),".")),(0,a.kt)("br",null),(0,a.kt)("p",null,"It can also be set in supported ",(0,a.kt)("a",{parentName:"p",href:"https://docs-mu-doc-refine.pankod.com/docs/api-references/hooks/data/useUpdate#mutation-mode"},"data hooks")," and ",(0,a.kt)("a",{parentName:"p",href:"https://docs-mu-doc-refine.pankod.com/docs/api-references/hooks/form/useForm#properties"},"form hooks")," for fine-grained configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useUpdate } from "@pankod/refine";\n\nconst { mutate } = useUpdate();\n\nmutate({\n    resource: "categories",\n    id: "2",\n    values: { title: "New Category Title" },\n// highlight-next-line\n    mutationMode: "optimistic",\n});\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Mutation mode passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>")," will be overriden by the mutation mode passed to data or form hooks and components.")),(0,a.kt)("h3",{id:"supported-data-hooks"},"Supported data hooks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/2.xx.xx/api-references/hooks/data/useUpdate"},(0,a.kt)("inlineCode",{parentName:"a"},"useUpdate")," ","\u2192")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/2.xx.xx/api-references/hooks/data/useUpdateMany"},(0,a.kt)("inlineCode",{parentName:"a"},"useUpdateMany")," ","\u2192")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/2.xx.xx/api-references/hooks/data/useDelete"},(0,a.kt)("inlineCode",{parentName:"a"},"useDelete")," ","\u2192")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/2.xx.xx/api-references/hooks/data/useDeleteMany"},(0,a.kt)("inlineCode",{parentName:"a"},"useDeleteMany")," ","\u2192"))),(0,a.kt)("h3",{id:"supported-form-hooks"},"Supported form hooks"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/2.xx.xx/api-references/hooks/form/useForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useForm")," ","\u2192")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/2.xx.xx/api-references/hooks/form/useModalForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useModalForm")," ","\u2192")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/2.xx.xx/api-references/hooks/form/useDrawerForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useDrawerForm")," ","\u2192")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/2.xx.xx/api-references/hooks/form/useStepsForm"},(0,a.kt)("inlineCode",{parentName:"a"},"useStepsForm")," ","\u2192"))),(0,a.kt)("h3",{id:"supported-components"},"Supported components"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/2.xx.xx/api-references/components/buttons/delete-button"},(0,a.kt)("inlineCode",{parentName:"a"},"DeleteButton")," ","\u2192"))),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,a.kt)("iframe",{src:"https://codesandbox.io/embed/refine-example-mutation-mode-0m3y9?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-example-mutation-mode",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}c.isMDXComponent=!0}}]);