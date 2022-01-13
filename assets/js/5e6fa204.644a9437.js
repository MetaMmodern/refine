"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[27728],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},17815:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"useMenu",title:"useMenu"},l=void 0,u={unversionedId:"api-references/hooks/resource/useMenu",id:"api-references/hooks/resource/useMenu",isDocsHomePage:!1,title:"useMenu",description:"useMenu is used to get menu items of the default sidebar. These items include a link to dashboard page (if it exists) and links to the user defined resources (passed as children to ``).",source:"@site/docs/api-references/hooks/resource/useMenu.md",sourceDirName:"api-references/hooks/resource",slug:"/api-references/hooks/resource/useMenu",permalink:"/docs/next/api-references/hooks/resource/useMenu",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/api-references/hooks/resource/useMenu.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1636468358,formattedLastUpdatedAt:"11/9/2021",frontMatter:{id:"useMenu",title:"useMenu"},sidebar:"someSidebar",previous:{title:"useSimpleList",permalink:"/docs/next/api-references/hooks/show/useSimpleList"},next:{title:"useResource",permalink:"/docs/next/api-references/hooks/resource/useResource"}},d=[{value:"Usage",id:"usage",children:[{value:"Recreating the Default Sider Menu",id:"recreating-the-default-sider-menu",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Return values",id:"return-values",children:[{value:"Interfaces",id:"interfaces",children:[],level:4}],level:3}],level:2}],p={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useMenu")," is used to get menu items of the default sidebar. These items include a link to dashboard page (if it exists) and links to the user defined resources (passed as children to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>"),").\nThis hook can also be used to build custom menus, which is also used by default sidebar to show menu items."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { selectedKey, menuItems } = useMenu();\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"menuItems")," is a list of style agnostic menu items. Each of them has a key."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"selectedKey")," is the key of the resource user is viewing at the moment. Its inferred from the route.")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"recreating-the-default-sider-menu"},"Recreating the Default Sider Menu"),(0,o.kt)("p",null,"We will show you how to use ",(0,o.kt)("inlineCode",{parentName:"p"},"useMenu")," to create a custom sider menu that is identical to default sider menu."),(0,o.kt)("p",null,"First we define ",(0,o.kt)("inlineCode",{parentName:"p"},"<CustomMenu>"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/CustomMenu.tsx"',title:'"src/CustomMenu.tsx"'},'import { useState, CSSProperties } from "react";\nimport {\n    AntdLayout,\n    Menu,\n    Grid,\n    Link,\n// highlight-next-line\n    useMenu,\n    useTitle,\n} from "@pankod/refine";\n\nexport const CustomMenu: React.FC = () => {\n    const Title = useTitle();\n// highlight-next-line\n    const { menuItems, selectedKey } = useMenu();\n\n    const [collapsed, setCollapsed] = useState<boolean>(false);\n\n    const breakpoint = Grid.useBreakpoint();\n    const isMobile = !breakpoint.lg;\n\n    return (\n        <AntdLayout.Sider\n            collapsible\n            collapsed={collapsed}\n            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n            collapsedWidth={isMobile ? 0 : 80}\n            breakpoint="lg"\n            style={isMobile ? antLayoutSiderMobile : antLayoutSider}\n        >\n            <Title collapsed={collapsed} />\n// highlight-start\n            <Menu selectedKeys={[selectedKey]} mode="inline">\n                {menuItems.map(({ icon, route, label }) => (\n                    <Menu.Item key={route} icon={icon}>\n                        <Link to={route}>{label}</Link>\n                    </Menu.Item>\n                ))}\n            </Menu>\n// highlight-end\n        </AntdLayout.Sider>\n    );\n};\n\nconst antLayoutSider: CSSProperties = {\n    position: "relative",\n};\nconst antLayoutSiderMobile: CSSProperties = {\n    position: "fixed",\n    height: "100vh",\n    zIndex: 999,\n};\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useMenu")," hook is used to get style agnostic menu items. We render these items in the body of the sider. We get the ",(0,o.kt)("inlineCode",{parentName:"p"},"Title")," component with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useTitle")," hook."),(0,o.kt)("br",null),(0,o.kt)("p",null,"We can override the default sider and show the custom menu we implemented in its place by passing a the custom component to ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>"),"s ",(0,o.kt)("inlineCode",{parentName:"p"},"Sider")," prop:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine } from "@pankod/refine";\nimport dataProvider from "@pankod/refine-simple-rest";\nimport "@pankod/refine/dist/styles.min.css";\n\nimport { PostList } from "pages/posts";\n\n// highlight-next-line\nimport { CustomMenu } from "./CustomMenu";\n\nconst API_URL = "https://api.fake-rest.refine.dev";\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider(API_URL)}\n// highlight-next-line\n            Sider={CustomMenu}\n            resources={[{ name: "posts", list: PostList }]}\n        />\n    );\n};\n\nexport default App;\n')),(0,o.kt)("br",null),(0,o.kt)("p",null,"We can also add a logout button:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/CustomMenu.tsx"',title:'"src/CustomMenu.tsx"'},'import { useState, CSSProperties } from "react";\nimport {\n    AntdLayout,\n    Menu,\n    Link,\n    Grid,\n// highlight-start\n    Icons,\n    useNavigation,\n    useLogout,\n// highlight-end\n    useMenu,\n    useTitle,\n} from "@pankod/refine";\n\nexport const CustomMenu: React.FC = () => {\n    const Title = useTitle();\n    const { menuItems, selectedKey } = useMenu();\n\n    const [collapsed, setCollapsed] = useState<boolean>(false);\n\n    const breakpoint = Grid.useBreakpoint();\n    const isMobile = !breakpoint.lg;\n\n// highlight-start\n    const { mutate: logout } = useLogout();\n    const { push } = useNavigation();\n// highlight-end\n\n    return (\n        <AntdLayout.Sider\n            collapsible\n            collapsed={collapsed}\n            onCollapse={(collapsed: boolean): void => setCollapsed(collapsed)}\n            collapsedWidth={isMobile ? 0 : 80}\n            breakpoint="lg"\n            style={isMobile ? antLayoutSiderMobile : antLayoutSider}\n        >\n            <Title collapsed={collapsed} />\n            <Menu\n                selectedKeys={[selectedKey]}\n                mode="inline"\n// highlight-start\n                onClick={({ key }) => {\n                    if (key === "logout") {\n                        logout();\n                        return;\n                    }\n\n                    push(key as string);\n                }}\n// highlight-end\n            >\n                {menuItems.map(({ icon, route, label }) => (\n                    <Menu.Item key={route} icon={icon}>\n                        <Link to={route}>{label}</Link>\n                    </Menu.Item>\n                ))}\n\n// highlight-start\n                <Menu.Item key="logout" icon={<Icons.LogoutOutlined />}>\n                    Logout\n// highlight-end\n                </Menu.Item>\n            </Menu>\n        </AntdLayout.Sider>\n    );\n};\n\nconst antLayoutSider: CSSProperties = {\n    position: "relative",\n};\nconst antLayoutSiderMobile: CSSProperties = {\n    position: "fixed",\n    height: "100vh",\n    zIndex: 999,\n};\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useLogout")," provides the logout functionality. We also have a ",(0,o.kt)("inlineCode",{parentName:"p"},"push")," function from ",(0,o.kt)("inlineCode",{parentName:"p"},"useNavigation")," for directing users to homepage after logging out."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"useLogout")," hook can only be used if the ",(0,o.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api-references/providers/auth-provider"},"Refer to authProvider docs for more detailed information. ","\u2192"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"/docs/next/api-references/hooks/auth/useLogout"},"Refer to useLogout docs for more detailed information. ","\u2192")))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can further customize the Sider and its appearance.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://ant.design/components/layout/#Layout.Sider"},"Refer to Ant Design docs for more detailed information about Sider. ","\u2192")))),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"return-values"},"Return values"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"selectedKey"),(0,o.kt)("td",{parentName:"tr",align:null},"Key of the resource the user is viewing at the moment"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"string"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"menuItems"),(0,o.kt)("td",{parentName:"tr",align:null},"List of keys and routes and some metadata of resources and also the dashboard if exists"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#interfaces"},(0,o.kt)("inlineCode",{parentName:"a"},"IMenuItem[]")))))),(0,o.kt)("h4",{id:"interfaces"},"Interfaces"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface IResourceItem {\n    name: string;\n    label?: string;\n    route?: string;\n    icon?: ReactNode;\n}\n\ntype IMenuItem = IResourceItem & {\n    key: string;\n};\n")))}c.isMDXComponent=!0}}]);