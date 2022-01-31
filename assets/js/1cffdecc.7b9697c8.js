"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6029],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,g=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?r.createElement(g,i(i({ref:n},c),{},{components:t})):r.createElement(g,i({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},55457:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return v},contentTitle:function(){return k},metadata:function(){return h},toc:function(){return w},default:function(){return y}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=t(98042),s=t(64015),l=t(55247),p=t(58395),c=t(71927),d=t(27494),m=t(31413),u=t(52659),g=["components"],v={id:"appwrite",title:"Appwrite"},k=void 0,h={unversionedId:"guides-and-concepts/data-provider/appwrite",id:"guides-and-concepts/data-provider/appwrite",isDocsHomePage:!1,title:"Appwrite",description:"Introduction",source:"@site/docs/guides-and-concepts/data-provider/appwrite.md",sourceDirName:"guides-and-concepts/data-provider",slug:"/guides-and-concepts/data-provider/appwrite",permalink:"/docs/next/guides-and-concepts/data-provider/appwrite",editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/guides-and-concepts/data-provider/appwrite.md",tags:[],version:"current",lastUpdatedBy:"Pratham",lastUpdatedAt:1643617276,formattedLastUpdatedAt:"1/31/2022",frontMatter:{id:"appwrite",title:"Appwrite"},sidebar:"someSidebar",previous:{title:"Strapi-v4",permalink:"/docs/next/guides-and-concepts/data-provider/strapi-v4"},next:{title:"SSR-Next.js",permalink:"/docs/next/guides-and-concepts/ssr-nextjs"}},w=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Setup",id:"setup",children:[],level:2},{value:"Usage",id:"usage",children:[{value:"Appwrite Client",id:"appwrite-client",children:[],level:3},{value:"Authprovider",id:"authprovider",children:[],level:3}],level:2},{value:"Create Collections",id:"create-collections",children:[{value:"Permissions",id:"permissions",children:[],level:3}],level:2},{value:"Login page\u200b",id:"login-page",children:[],level:2},{value:"List Page",id:"list-page",children:[],level:2},{value:"Create Page",id:"create-page",children:[],level:2},{value:"Edit Page",id:"edit-page",children:[],level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],f={toc:w};function y(e){var n=e.components,t=(0,a.Z)(e,g);return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," and ",(0,o.kt)("a",{parentName:"p",href:"https://appwrite.io/"},"Appwrite")," work in harmony, offering you quick development options. You can use your data (API, Database) very simply by using ",(0,o.kt)("strong",{parentName:"p"},"refine"),"'s Appwrite data provider."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://appwrite.io/"},"Appwrite")," version >= 0.12 is required"))),(0,o.kt)("p",null,"You can only focus on your UI as we can handle your data quickly and simply."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This guide has been prepared assuming you know the basics of ",(0,o.kt)("strong",{parentName:"p"},"refine"),". If you haven't learned these basics yet, we recommend reading the ",(0,o.kt)("a",{parentName:"p",href:"https://refine.dev/docs/"},"Tutorial"),"."))),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @pankod/refine-appwrite\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"It is very simple to use and consists of two steps. First, define your Appwrite project id and then give it to the dataprovider."),(0,o.kt)("h3",{id:"appwrite-client"},"Appwrite Client"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="appwriteClient.ts"',title:'"appwriteClient.ts"'},'import { Appwrite } from "@pankod/refine-appwrite";\n\nconst APPWRITE_URL = "http://localhost/v1";\n//highlight-start\nconst APPWRITE_PROJECT = "YOUR_APPWRITE_PROJECT_ID";\n//highlight-end\n\nconst appwriteClient = new Appwrite();\n\nappwriteClient.setEndpoint(APPWRITE_URL).setProject(APPWRITE_PROJECT);\n\nexport appwriteClient;\n')),(0,o.kt)("h3",{id:"authprovider"},"Authprovider"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="authProvider.ts"',title:'"authProvider.ts"'},'import { AuthProvider } from "@pankod/refine";\n\nimport appwriteClient from "./appwriteClient";\n\nexport const authProvider: AuthProvider = {\n    login: ({ email, password }) => {\n        return appwriteClient.account.createSession(email, password);\n    },\n    logout: async () => {\n        await appwriteClient.account.deleteSession("current");\n\n        return "/";\n    },\n    checkError: () => Promise.resolve(),\n    checkAuth: async () => {\n        const session = await appwriteClient.account.getSession("current");\n\n        if (session) {\n            return Promise.resolve();\n        }\n\n        return Promise.reject();\n    },\n    getPermissions: () => Promise.resolve(),\n    getUserIdentity: async () => {\n        const user = await appwriteClient.account.get();\n\n        if (user) {\n            return user;\n        }\n    },\n};\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Refine, AuthProvider } from "@pankod/refine";\n//highlight-start\nimport { dataProvider } from "@pankod/refine-appwrite";\n//highlight-end\nimport routerProvider from "@pankod/refine-react-router";\n\n//highlight-start\nimport appwriteClient from "./appwriteClient";\nimport authProvider from "./authProvider";\n//highlight-end\n\nconst App: React.FC = () => {\n    return (\n        <Refine\n        //highlight-start\n            dataProvider={dataProvider(appwriteClient)}\n            authProvider={authProvider}\n        //highlight-end    \n            routerProvider={routerProvider}\n        />\n    );\n};\n')),(0,o.kt)("h2",{id:"create-collections"},"Create Collections"),(0,o.kt)("p",null,"We created two collections on Appwrite Database as ",(0,o.kt)("inlineCode",{parentName:"p"},"posts")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"categories")," and added a relation between them."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Category Collection"),": "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Title: text")),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:s.Z,alt:"category"})),(0,o.kt)("br",null),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Post Collection"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Title: text"),(0,o.kt)("li",{parentName:"ul"},"CategoryId: text"),(0,o.kt)("li",{parentName:"ul"},"Content: text"),(0,o.kt)("li",{parentName:"ul"},"Images: wilcard")),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:i.Z,alt:"posts"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Then we need to create an appwrite user to be able to login with ",(0,o.kt)("strong",{parentName:"p"},"refine"),"."),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:l.Z,alt:"user"})),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"permissions"},"Permissions"),(0,o.kt)("p",null,"In order to list posts and categories, you need to give read and write permission by Appwrite."),(0,o.kt)("p",null,"Example: ",(0,o.kt)("inlineCode",{parentName:"p"},"Post Collection Permissons")),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:u.Z,alt:"permission"})),(0,o.kt)("br",null),(0,o.kt)("p",null,'We indicate that the read and write permission is open to everyone by giving the "*" parameter.'),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://appwrite.io/docs/permissions"},"Refer to the Appwrite Permissions documentation for detailed information.\u2192")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#create-page"},"Check out how you can use permissions when creating posts with ",(0,o.kt)("strong",{parentName:"a"},"refine")," \u2192")),(0,o.kt)("h2",{id:"login-page"},"Login page\u200b"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"refine")," default login screen allows you to login with username. Appwrite allows login with email, therefore we need to override the login page."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show Code"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/login.tsx"',title:'"pages/login.tsx"'},'import React from "react";\nimport {\n    Row,\n    Col,\n    AntdLayout,\n    Card,\n    Typography,\n    Form,\n    Input,\n    Button,\n    Checkbox,\n} from "@pankod/refine";\nimport "./styles.css";\n\nimport { useLogin } from "@pankod/refine";\n\nconst { Text, Title } = Typography;\n\nexport interface ILoginForm {\n    username: string;\n    password: string;\n    remember: boolean;\n}\n\nexport const Login: React.FC = () => {\n    const [form] = Form.useForm<ILoginForm>();\n\n    const { mutate: login } = useLogin<ILoginForm>();\n\n    const CardTitle = (\n        <Title level={3} className="title">\n            Sign in your account\n        </Title>\n    );\n\n    return (\n        <AntdLayout className="layout">\n            <Row\n                justify="center"\n                align="middle"\n                style={{\n                    height: "100vh",\n                }}\n            >\n                <Col xs={22}>\n                    <div className="container">\n                        <div className="imageContainer">\n                            <img src="./refine.svg" alt="Refine Logo" />\n                        </div>\n                        <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>\n                            <Form<ILoginForm>\n                                layout="vertical"\n                                form={form}\n                                onFinish={(values) => {\n                                    login(values);\n                                }}\n                                requiredMark={false}\n                            >\n                                <Form.Item\n                                    name="email"\n                                    label="Email"\n                                    rules={[{ required: true, type: "email" }]}\n                                >\n                                    <Input size="large" placeholder="Email" />\n                                </Form.Item>\n                                <Form.Item\n                                    name="password"\n                                    label="Password"\n                                    rules={[{ required: true }]}\n                                    style={{ marginBottom: "12px" }}\n                                >\n                                    <Input\n                                        type="password"\n                                        placeholder="\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf\u25cf"\n                                        size="large"\n                                    />\n                                </Form.Item>\n                                <div style={{ marginBottom: "12px" }}>\n                                    <Form.Item\n                                        name="remember"\n                                        valuePropName="checked"\n                                        noStyle\n                                    >\n                                        <Checkbox\n                                            style={{\n                                                fontSize: "12px",\n                                            }}\n                                        >\n                                            Remember me\n                                        </Checkbox>\n                                    </Form.Item>\n\n                                    <a\n                                        style={{\n                                            float: "right",\n                                            fontSize: "12px",\n                                        }}\n                                        href="#"\n                                    >\n                                        Forgot password?\n                                    </a>\n                                </div>\n                                <Button\n                                    type="primary"\n                                    size="large"\n                                    htmlType="submit"\n                                    block\n                                >\n                                    Sign in\n                                </Button>\n                            </Form>\n                            <div style={{ marginTop: 8 }}>\n                                <Text style={{ fontSize: 12 }}>\n                                    Don\u2019t have an account?{" "}\n                                    <a href="#" style={{ fontWeight: "bold" }}>\n                                        Sign up\n                                    </a>\n                                </Text>\n                            </div>\n                        </Card>\n                    </div>\n                </Col>\n            </Row>\n        </AntdLayout>\n    );\n};\n')))),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:p.Z,alt:"login"})),(0,o.kt)("br",null),(0,o.kt)("p",null,"Now we can login with the user we created by Appwrite. We can then list, create and edit posts."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"refine")," resource name must be the same as Appwrite Collection ID. You can change your label with resource options."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const App: React.FC = () => {\n    return (\n        <Refine\n            dataProvider={dataProvider(appwriteClient)}\n            authProvider={authProvider}\n            routerProvider={routerProvider}\n            LoginPage={Login}\n            resources={[\n                {\n                    //highlight-start\n                    name: "61bc3660648a6",\n                    //highlight-end\n                    options: {\n                        //highlight-start\n                        label: "Post",\n                        //highlight-end\n                    },\n                },\n            ]}\n        />\n    );\n};\n\nexport default App;\n')))),(0,o.kt)("h2",{id:"list-page"},"List Page"),(0,o.kt)("p",null,"Now that we've created our collections, we can create and list documents. Let's list the posts and categories that we have created by Appwrite with ",(0,o.kt)("strong",{parentName:"p"},"refine"),"."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show Code"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n    List,\n    Table,\n    TextField,\n    useTable,\n    IResourceComponentsProps,\n    Space,\n    EditButton,\n    ShowButton,\n    useMany,\n    getDefaultSortOrder,\n} from "@pankod/refine";\n\nimport { IPost, ICategory } from "interfaces";\n\nexport const PostsList: React.FC<IResourceComponentsProps> = () => {\n    const { tableProps, sorter } = useTable<IPost>({\n        initialSorter: [\n            {\n                field: "id",\n                order: "asc",\n            },\n        ],\n    });\n\n    const categoryIds =\n        tableProps?.dataSource?.map((item) => item.categoryId) ?? [];\n    const { data, isLoading } = useMany<ICategory>({\n        resource: "61bc4afa9ee2c",\n        ids: categoryIds,\n        queryOptions: {\n            enabled: categoryIds.length > 0,\n        },\n    });\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column\n                    dataIndex="id"\n                    title="ID"\n                    sorter\n                    defaultSortOrder={getDefaultSortOrder("id", sorter)}\n                />\n                <Table.Column dataIndex="title" title="Title" sorter />\n                <Table.Column\n                    dataIndex="categoryId"\n                    title="Category"\n                    render={(value) => {\n                        if (isLoading) {\n                            return <TextField value="Loading..." />;\n                        }\n\n                        return (\n                            <TextField\n                                value={\n                                    data?.data.find((item) => item.id === value)\n                                        ?.title\n                                }\n                            />\n                        );\n                    }}\n                />\n                <Table.Column<IPost>\n                    title="Actions"\n                    dataIndex="actions"\n                    render={(_, record) => (\n                        <Space>\n                            <EditButton\n                                hideText\n                                size="small"\n                                recordItemId={record.id}\n                            />\n                            <ShowButton\n                                hideText\n                                size="small"\n                                recordItemId={record.id}\n                            />\n                        </Space>\n                    )}\n                />\n            </Table>\n        </List>\n    );\n};\n')))),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:c.Z,alt:"list"})),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"create-page"},"Create Page"),(0,o.kt)("p",null,"We can now create posts and set categories from our ",(0,o.kt)("strong",{parentName:"p"},"refine")," UI."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show Code"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useState } from "react";\nimport {\n    Create,\n    Form,\n    Input,\n    IResourceComponentsProps,\n    Select,\n    Upload,\n    useForm,\n    useSelect,\n    RcFile,\n} from "@pankod/refine";\n\nimport ReactMarkdown from "react-markdown";\nimport ReactMde from "react-mde";\n\nimport "react-mde/lib/styles/css/react-mde-all.css";\n\nimport { IPost, ICategory } from "interfaces";\nimport { appwriteClient, normalizeFile } from "utility";\n\nexport const PostsCreate: React.FC<IResourceComponentsProps> = () => {\n    const { formProps, saveButtonProps } = useForm<IPost>();\n\n    const { selectProps: categorySelectProps } = useSelect<ICategory>({\n        resource: "61bc4afa9ee2c",\n        optionLabel: "title",\n        optionValue: "id",\n    });\n\n    const [selectedTab, setSelectedTab] =\n        useState<"write" | "preview">("write");\n\n    return (\n        <Create saveButtonProps={saveButtonProps}>\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item\n                    label="Category"\n                    name="categoryId"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Select {...categorySelectProps} />\n                </Form.Item>\n                <Form.Item\n                    label="Content"\n                    name="content"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <ReactMde\n                        selectedTab={selectedTab}\n                        onTabChange={setSelectedTab}\n                        generateMarkdownPreview={(markdown) =>\n                            Promise.resolve(\n                                <ReactMarkdown>{markdown}</ReactMarkdown>,\n                            )\n                        }\n                    />\n                </Form.Item>\n                <Form.Item label="Images">\n                    <Form.Item\n                        name="images"\n                        valuePropName="fileList"\n                        normalize={normalizeFile}\n                        noStyle\n                    >\n                        <Upload.Dragger\n                            name="file"\n                            listType="picture"\n                            multiple\n                            customRequest={async ({\n                                file,\n                                onError,\n                                onSuccess,\n                            }) => {\n                                try {\n                                    const rcFile = file as RcFile;\n\n                                    const { $id } =\n                                        await appwriteClient.storage.createFile(\n                                            rcFile,\n                                        );\n\n                                    const url =\n                                        appwriteClient.storage.getFileView($id);\n\n                                    onSuccess?.({ url }, new XMLHttpRequest());\n                                } catch (error) {\n                                    onError?.(new Error("Upload Error"));\n                                }\n                            }}\n                        >\n                            <p className="ant-upload-text">\n                                Drag &amp; drop a file in this area\n                            </p>\n                        </Upload.Dragger>\n                    </Form.Item>\n                </Form.Item>\n            </Form>\n        </Create>\n    );\n};\n')))),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:d.Z,alt:"create"})),(0,o.kt)("br",null),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"As we mentioned above, we need permissions to list or create documents in Appwrite. By default, Read Access and Write Access are public when creating documents from ",(0,o.kt)("strong",{parentName:"p"},"refine")," UI."),(0,o.kt)("p",{parentName:"div"},"If you want to restrict permissions and only allow specific users, you need to specify it in metaData."),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'const { formProps, saveButtonProps } = useForm<IPost>({\n    metaData: {\n        writeAccess: ["User ID, Team ID, or Role"],\n        readAccess: ["User ID, Team ID, or Role"] \n    }\n});\n')))),(0,o.kt)("h2",{id:"edit-page"},"Edit Page"),(0,o.kt)("p",null,"You can edit the posts and categories we have created update your data."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Show Code"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState } from "react";\nimport {\n    Edit,\n    Form,\n    Input,\n    IResourceComponentsProps,\n    RcFile,\n    Select,\n    Upload,\n    useForm,\n    useSelect,\n} from "@pankod/refine";\n\nimport ReactMarkdown from "react-markdown";\nimport ReactMde from "react-mde";\n\nimport "react-mde/lib/styles/css/react-mde-all.css";\n\nimport { IPost, ICategory } from "interfaces";\nimport { appwriteClient, normalizeFile } from "utility";\n\nexport const PostsEdit: React.FC<IResourceComponentsProps> = () => {\n    const { formProps, saveButtonProps, queryResult } = useForm<IPost>();\n\n    const postData = queryResult?.data?.data;\n    const { selectProps: categorySelectProps } = useSelect<ICategory>({\n        resource: "61bc4afa9ee2c",\n        defaultValue: postData?.categoryId,\n        optionLabel: "title",\n        optionValue: "id",\n    });\n\n    const [selectedTab, setSelectedTab] =\n        useState<"write" | "preview">("write");\n\n    return (\n        <Edit saveButtonProps={saveButtonProps}>\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n                <Form.Item\n                    label="Category"\n                    name="categoryId"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Select {...categorySelectProps} />\n                </Form.Item>\n                <Form.Item\n                    label="Content"\n                    name="content"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <ReactMde\n                        selectedTab={selectedTab}\n                        onTabChange={setSelectedTab}\n                        generateMarkdownPreview={(markdown) =>\n                            Promise.resolve(\n                                <ReactMarkdown>{markdown}</ReactMarkdown>,\n                            )\n                        }\n                    />\n                </Form.Item>\n                <Form.Item label="Images">\n                    <Form.Item\n                        name="images"\n                        valuePropName="fileList"\n                        normalize={normalizeFile}\n                        noStyle\n                    >\n                        <Upload.Dragger\n                            name="file"\n                            listType="picture"\n                            multiple\n                            customRequest={async ({\n                                file,\n                                onError,\n                                onSuccess,\n                            }) => {\n                                try {\n                                    const rcFile = file as RcFile;\n\n                                    const { $id } =\n                                        await appwriteClient.storage.createFile(\n                                            rcFile,\n                                        );\n\n                                    const url =\n                                        appwriteClient.storage.getFileView($id);\n\n                                    onSuccess?.({ url }, new XMLHttpRequest());\n                                } catch (error) {\n                                    onError?.(new Error("Upload Error"));\n                                }\n                            }}\n                        >\n                            <p className="ant-upload-text">\n                                Drag &amp; drop a file in this area\n                            </p>\n                        </Upload.Dragger>\n                    </Form.Item>\n                </Form.Item>\n            </Form>\n        </Edit>\n    );\n};\n')))),(0,o.kt)("div",{class:"img-container"},(0,o.kt)("div",{class:"window"},(0,o.kt)("div",{class:"control red"}),(0,o.kt)("div",{class:"control orange"}),(0,o.kt)("div",{class:"control green"})),(0,o.kt)("img",{src:m.Z,alt:"edit"})),(0,o.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,o.kt)("p",null,"Username: ",(0,o.kt)("inlineCode",{parentName:"p"},"demo@refine.dev")),(0,o.kt)("p",null,"Password: ",(0,o.kt)("inlineCode",{parentName:"p"},"demodemo")),(0,o.kt)("iframe",{src:"https://codesandbox.io/embed/refine-appwrite-example-kuzqr?autoresize=1&fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.tsx&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-appwrite-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}y.isMDXComponent=!0},64015:function(e,n,t){n.Z=t.p+"assets/images/category-48fdb8e185141c26de89c05334204ba4.png"},27494:function(e,n,t){n.Z=t.p+"assets/images/create-5d8d26a520026caee31e7c4c74089544.gif"},31413:function(e,n,t){n.Z=t.p+"assets/images/edit-7fb1274754914e98a58cacd48d7c07d9.png"},71927:function(e,n,t){n.Z=t.p+"assets/images/list-05d4662b728f5de39eec567805bd43a3.png"},58395:function(e,n,t){n.Z=t.p+"assets/images/login-a512f371fe906473eaab8b744e76102c.png"},52659:function(e,n,t){n.Z=t.p+"assets/images/permission-efd9947a136d0a7cc41127c1385dcbbe.png"},98042:function(e,n,t){n.Z=t.p+"assets/images/posts-dc852d5be9d4eb381bcce72a098c4ed8.png"},55247:function(e,n,t){n.Z=t.p+"assets/images/user-839975d4bce27901cbc599b1e88eaafe.png"}}]);