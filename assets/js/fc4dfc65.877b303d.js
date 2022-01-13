"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[71669],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19021:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={id:"useTitle",title:"useTitle"},l=void 0,p={unversionedId:"api-references/hooks/refine/useTitle",id:"version-1.0.xx/api-references/hooks/refine/useTitle",isDocsHomePage:!1,title:"useTitle",description:"useTitle returns a component that calls the ` passed to the `. In this way, it becomes easier for us to access this component in various parts of the application.",source:"@site/versioned_docs/version-1.0.xx/api-references/hooks/refine/useTitle.md",sourceDirName:"api-references/hooks/refine",slug:"/api-references/hooks/refine/useTitle",permalink:"/docs/1.0.xx/api-references/hooks/refine/useTitle",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-1.0.xx/api-references/hooks/refine/useTitle.md",tags:[],version:"1.0.xx",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"useTitle",title:"useTitle"},sidebar:"version-1.0.xx/someSidebar",previous:{title:"useRadioGroup",permalink:"/docs/1.0.xx/api-references/hooks/field/useRadioGroup"},next:{title:"useTranslate",permalink:"/docs/1.0.xx/api-references/hooks/translate/useTranslate"}},c=[{value:"Usage",id:"usage",children:[],level:2}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useTitle")," returns a component that calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Title>")," passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Refine>"),". In this way, it becomes easier for us to access this component in various parts of the application."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Normally refine provides a default title. If we want to build a custom title instead of default one that comes with ",(0,i.kt)("strong",{parentName:"p"},"refine"),", we need to overwrite it like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx" {10-15}',title:'"src/App.tsx"',"{10-15}":!0},'import { Refine } from "@pankod/refine";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nimport "@pankod/refine/dist/styles.min.css";\n\nexport const App: React.FC = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            Title={({ collapsed }) => (\n                <div>\n                    {collapsed && <img src="./logo" alt="Logo" />}\n                    <span>Custom Title</span>\n                </div>\n            )}\n        />\n    );\n};\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This ",(0,i.kt)("inlineCode",{parentName:"p"},"<Title>")," we created is used in the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Sider>")," that refine provides by default."))),(0,i.kt)("br",null),(0,i.kt)("p",null,"Now ",(0,i.kt)("inlineCode",{parentName:"p"},"useTitle")," will provides us to access to the ",(0,i.kt)("inlineCode",{parentName:"p"},"<Title>")," component from various parts of the application, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/components/customSider" {1,5,15}',title:'"src/components/customSider"',"{1,5,15}":!0},'import { AntdLayout, useTitle } from "@pankod/refine";\n\nexport const CustomSider: React.FC = () => {\n    const [collapsed, setCollapsed] = React.useState(false);\n    const Title = useTitle();\n\n    return (\n        <AntdLayout.Sider\n            collapsible\n            breakpoint="md"\n            collapsed={collapsed}\n            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n        >\n            <Title collapsed={collapsed} />\n            ...\n        </AntdLayout.Sider>\n    );\n};\n')))}d.isMDXComponent=!0}}]);