"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},18768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={id:"csv-import",title:"CSV Import"},i=void 0,s={unversionedId:"advanced-tutorials/import-export/csv-import",id:"advanced-tutorials/import-export/csv-import",title:"CSV Import",description:"You can easily import CSV files for any resource by using refine's customizable useImport hook, optionally with ` component. useImport hook returns the necessary props for ` component. refine uses Papa Parse parser under the hood to parse CSV files.",source:"@site/docs/advanced-tutorials/import-export/csv-import.md",sourceDirName:"advanced-tutorials/import-export",slug:"/advanced-tutorials/import-export/csv-import",permalink:"/docs/advanced-tutorials/import-export/csv-import",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/advanced-tutorials/import-export/csv-import.md",tags:[],version:"current",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1671005090,formattedLastUpdatedAt:"Dec 14, 2022",frontMatter:{id:"csv-import",title:"CSV Import"},sidebar:"someSidebar",previous:{title:"CSV Export",permalink:"/docs/advanced-tutorials/import-export/csv-export"},next:{title:"Live / Realtime",permalink:"/docs/advanced-tutorials/real-time"}},p={},c=[{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],l=(d="StackblitzExample",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const m={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can easily import CSV files for any resource by using ",(0,a.kt)("strong",{parentName:"p"},"refine"),"'s customizable ",(0,a.kt)("inlineCode",{parentName:"p"},"useImport")," hook, optionally with ",(0,a.kt)("inlineCode",{parentName:"p"},"<ImportButton>")," component. ",(0,a.kt)("inlineCode",{parentName:"p"},"useImport")," hook returns the necessary props for ",(0,a.kt)("inlineCode",{parentName:"p"},"<ImportButton>")," component. ",(0,a.kt)("strong",{parentName:"p"},"refine")," uses ",(0,a.kt)("a",{parentName:"p",href:"https://www.papaparse.com/"},"Papa Parse")," parser under the hood to parse CSV files."),(0,a.kt)("p",null,"You can call the ",(0,a.kt)("inlineCode",{parentName:"p"},"useImport")," hook and add an ",(0,a.kt)("inlineCode",{parentName:"p"},"<ImportButton>")," with properties returned from ",(0,a.kt)("inlineCode",{parentName:"p"},"useImport"),"\xa0on a list page, configured with a mapping function to format the files data into API's data. When the button gets triggered, it creates the imported resources using ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider#create"},(0,a.kt)("inlineCode",{parentName:"a"},"create"))," or ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider#createmany"},(0,a.kt)("inlineCode",{parentName:"a"},"createMany"))," ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider"},"dataProvider")," methods under the hood."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Let's look at an example of adding a custom import button:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'import { useMany } from "@pankod/refine-core";\nimport {\n    List,\n    useTable,\n    // highlight-start\n    useImport,\n    ImportButton,\n    // highlight-end\n} from "@pankod/refine-antd";\n\nexport const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    const categoryIds =\n        tableProps?.dataSource?.map((item) => item.category.id) ?? [];\n    const { data, isLoading } = useMany<ICategory>({\n        resource: "categories",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    // highlight-next-line\n    const importProps = useImport<IPostFile>();\n\n    return (\n        <List\n            // highlight-start\n            pageHeaderProps={{\n                extra: <ImportButton {...importProps} />,\n            }}\n            // highlight-end\n        >\n            ...\n        </List>\n    );\n};\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n\ninterface IPostFile {\n    id: number;\n    title: string;\n    content: string;\n    userId: number;\n    categoryId: number;\n    status: "published" | "draft" | "rejected";\n}\n\ninterface IPost {\n    id: number;\n    title: string;\n    content: string;\n    status: "published" | "draft" | "rejected";\n    category: { id: number };\n}\n')),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/csv-import/import-button.png",alt:"Import button"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"We should map CSV data into ",(0,a.kt)("inlineCode",{parentName:"p"},"Post")," data. Assume that this is the CSV file content we have:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csv",metastring:'title="dummy.csv"',title:'"dummy.csv"'},'"title","content","status","categoryId","userId"\n"dummy title 1","dummy content 1","rejected","3","8"\n"dummy title 2","dummy content 2","draft","44","8"\n"dummy title 3","cummy content 3","published","41","10"\n')),(0,a.kt)("p",null,"It has 3 entries. We should map ",(0,a.kt)("inlineCode",{parentName:"p"},"categoryId"),"\xa0to ",(0,a.kt)("inlineCode",{parentName:"p"},"category.id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"userId")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"user.id"),". Since these are objects, we store any relational data as their id in CSV."),(0,a.kt)("p",null,"This would make our ",(0,a.kt)("inlineCode",{parentName:"p"},"useImport")," call look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/pages/posts/list.tsx"',title:'"/src/pages/posts/list.tsx"'},'export const PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    const categoryIds =\n        tableProps?.dataSource?.map((item) => item.category.id) ?? [];\n    const { data, isLoading } = useMany<ICategory>({\n        resource: "categories",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    // highlight-start\n    const importProps = useImport<IPostFile>({\n        mapData: (item) => {\n            return {\n                title: item.title,\n                content: item.content,\n                status: item.status,\n                category: {\n                    id: item.categoryId,\n                },\n                user: {\n                    id: item.userId,\n                },\n            };\n        },\n    });\n    // highlight-end\n\n    return <></>;\n};\n')),(0,a.kt)("p",null,"And it's done. When you click on the button and provide a CSV file of the headers ",(0,a.kt)("inlineCode",{parentName:"p"},'"title"'),",",(0,a.kt)("inlineCode",{parentName:"p"},'"content"'),",",(0,a.kt)("inlineCode",{parentName:"p"},'"status"'),",",(0,a.kt)("inlineCode",{parentName:"p"},'"categoryId"')," and ",(0,a.kt)("inlineCode",{parentName:"p"},'"userId"'),", it should be mapped and imported. Mapped data is the request payload. Either as part of an array or by itself as part of every request. In our example, it fires ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," request/requests like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="POST https://api.fake-rest.refine.dev/posts"',title:'"POST','https://api.fake-rest.refine.dev/posts"':!0},'{\n    "title": "dummy title 1",\n    "content": "dummy content 1",\n    "status": "rejected",\n    "category": {\n        "id": "3"\n    },\n    "user": {\n        "id": "8"\n    }\n}\n')),(0,a.kt)("div",{class:"img-container"},(0,a.kt)("div",{class:"window"},(0,a.kt)("div",{class:"control red"}),(0,a.kt)("div",{class:"control orange"}),(0,a.kt)("div",{class:"control green"})),(0,a.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/guides-and-concepts/csv-import/importing.gif",alt:"Importing CSV"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Depending on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/import-export/useImport#api-reference"},(0,a.kt)("inlineCode",{parentName:"a"},"batchSize"))," option, posts can get sent one by one or as batches. By default, all records are sent in one ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/data-provider#createmany"},(0,a.kt)("inlineCode",{parentName:"a"},"createMany"))," call."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)(l,{path:"import-export-antd",mdxType:"StackblitzExample"}))}u.isMDXComponent=!0}}]);