"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[80046],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,c=u["".concat(d,".").concat(k)]||u[k]||s[k]||l;return n?a.createElement(c,o(o({ref:t},m),{},{components:n})):a.createElement(c,o({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={id:"useModalForm",title:"useModalForm"},o=void 0,i={unversionedId:"api-references/hooks/form/useModalForm",id:"version-2.xx.xx/api-references/hooks/form/useModalForm",title:"useModalForm",description:"useModalForm hook allows you to manage a form within a modal. It returns Ant Design Form and Modal components props.",source:"@site/versioned_docs/version-2.xx.xx/api-references/hooks/form/useModalForm.md",sourceDirName:"api-references/hooks/form",slug:"/api-references/hooks/form/useModalForm",permalink:"/docs/2.xx.xx/api-references/hooks/form/useModalForm",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/hooks/form/useModalForm.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"Ali Emir \u015een",lastUpdatedAt:1671005090,formattedLastUpdatedAt:"Dec 14, 2022",frontMatter:{id:"useModalForm",title:"useModalForm"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"useForm",permalink:"/docs/2.xx.xx/api-references/hooks/form/useForm"},next:{title:"useDrawerForm",permalink:"/docs/2.xx.xx/api-references/hooks/form/useDrawerForm"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Create Modal",id:"create-modal",level:3},{value:"Edit Modal",id:"edit-modal",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3},{value:"Return Value",id:"return-value",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Live Codesandbox Example",id:"live-codesandbox-example",level:2}],m={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useModalForm")," hook allows you to manage a form within a modal. It returns Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/form/"},"Form")," and ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/modal/"},"Modal")," components props."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { useModalForm } from "@pankod/refine";\n\nconst { modalProps, formProps } = useModalForm<IPost>({\n    action: "create", // or "edit"\n});\n')),(0,r.kt)("p",null,"All we have to do is to pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"modalProps")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Modal>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"formProps")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Form>")," components."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"We'll show two examples, one for creating and one for editing a post. Let's see how ",(0,r.kt)("inlineCode",{parentName:"p"},"useModalForm")," is used in both."),(0,r.kt)("h3",{id:"create-modal"},"Create Modal"),(0,r.kt)("p",null,"In this example, we will show you how to create a record with ",(0,r.kt)("inlineCode",{parentName:"p"},"useModalForm"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'import { useModalForm, Modal, Form, Create, Radio, List, Input } from "@pankod/refine";\n\nexport const PostList: React.FC = () => {\n// highlight-start\n    const { modalProps, formProps, show } = useModalForm<IPost>({\n        action: "create",\n    });\n// highlight-end\n\n    return (\n        <>\n            <List\n// highlight-start\n                createButtonProps={{\n                    onClick: () => {\n                        show();\n                    },\n                }}\n// highlight-end\n            >\n                ...\n            </List>\n// highlight-start\n            <Modal {...modalProps}>\n                <Form {...formProps} layout="vertical">\n                    <Form.Item label="Title" name="title">\n                        <Input />\n                    </Form.Item>\n                    <Form.Item label="Status" name="status">\n                        <Radio.Group>\n                            <Radio value="draft">Draft</Radio>\n                            <Radio value="published">Published</Radio>\n                            <Radio value="rejected">Rejected</Radio>\n                        </Radio.Group>\n                    </Form.Item>\n                </Form>\n            </Modal>\n// highlight-end\n        </>\n    );\n};\n\ninterface IPost {\n    id: string;\n    title: string;\n    status: "published" | "draft" | "rejected";\n}\n')),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"createButtonProps")," allows us to create and manage a button above the table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"    createButtonProps={{\n        onClick: () => {\n            show();\n        },\n    }}\n")),(0,r.kt)("p",null,"This code block makes ",(0,r.kt)("inlineCode",{parentName:"p"},"<Modal>")," appear when you click the button."),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/hooks/useModalForm/create.gif",alt:"Create modal action"})),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"edit-modal"},"Edit Modal"),(0,r.kt)("p",null,"Let's learn how to add editing capabilities to records that will be opening form in Modal by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," prop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/list.tsx"',title:'"pages/posts/list.tsx"'},'import {\n    useModalForm,\n    Modal,\n    Form,\n    Create,\n    Radio,\n    List,\n    Table,\n    EditButton,\n    Input\n} from "@pankod/refine";\n\nexport const PostList: React.FC = () => {\n    const {\n        modalProps,\n        formProps,\n        show,\n        editId,\n    } = useModalForm<IPost>({\n// highlight-next-line\n        action: "edit",\n    });\n\n    return (\n        <>\n            <List>\n                <Table>\n                    ...\n                    <Table.Column<IPost>\n                        title="Actions"\n                        dataIndex="actions"\n                        key="actions"\n                        render={(_value, record) => (\n// highlight-next-line\n                            <EditButton onClick={() => show(record.id)} />\n                        )}\n                    />\n                </Table>\n            </List>\n            <Modal {...modalProps}>\n// highlight-next-line\n                <Form {...formProps} layout="vertical">\n                    <Form.Item label="Title" name="title">\n                        <Input />\n                    </Form.Item>\n                    <Form.Item label="Status" name="status">\n                        <Radio.Group>\n                            <Radio value="draft">Draft</Radio>\n                            <Radio value="published">Published</Radio>\n                            <Radio value="rejected">Rejected</Radio>\n                        </Radio.Group>\n                    </Form.Item>\n                </Form>\n            </Modal>\n        </>\n    );\n};\n\ninterface IPost {\n    id: string;\n    title: string;\n    status: "published" | "draft" | "rejected";\n}\n')),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"refine")," doesn't automatically add a edit button to the each record in ",(0,r.kt)("inlineCode",{parentName:"p"},"<PostList>")," which opens edit form in ",(0,r.kt)("inlineCode",{parentName:"p"},"<Modal>")," when clicked."),(0,r.kt)("p",{parentName:"admonition"},"So, we have to put the edit buttons on our list. In that way, ",(0,r.kt)("inlineCode",{parentName:"p"},"<Edit>")," form in ",(0,r.kt)("inlineCode",{parentName:"p"},"<Modal>")," can fetch data by the record ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),"."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'<Table.Column<IPost>\n    title="Actions"\n    dataIndex="actions"\n    key="actions"\n    render={(_value, record) => <EditButton onClick={() => show(record.id)} />}\n/>\n'))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Don't forget to pass the record id to ",(0,r.kt)("inlineCode",{parentName:"p"},"show")," to fetch the record data. This is necessary for both edit and clone forms.")),(0,r.kt)("div",{class:"img-container"},(0,r.kt)("div",{class:"window"},(0,r.kt)("div",{class:"control red"}),(0,r.kt)("div",{class:"control orange"}),(0,r.kt)("div",{class:"control green"})),(0,r.kt)("img",{src:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/hooks/useModalForm/edit.gif",alt:"Edit modal action"})),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"action ",(0,r.kt)("div",{className:" required"},"Required")),(0,r.kt)("td",{parentName:"tr",align:null},"Type of form mode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"edit"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"create"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"create"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoSubmitClose"),(0,r.kt)("td",{parentName:"tr",align:null},"Close modal after submission"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"form"),(0,r.kt)("td",{parentName:"tr",align:null},"Ant Design form instance"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#FormInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"FormInstance<TVariables>"))),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mutationMode"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/guides-and-concepts/mutation-mode"},"Determines when mutations are executed"),". If not explicitly configured, it is read from the mutation mode configuration of the resource in current route"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"pessimistic"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"optimistic"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"undoable"')),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onMutationError"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a ",(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},"mutation")," encounters an error"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(error: TError, variables: TVariables, context: any) => void")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onMutationSuccess"),(0,r.kt)("td",{parentName:"tr",align:null},"Called when a ",(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},"mutation")," is successful"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(data: TData, variables: TVariables, context: any) => void")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redirect"),(0,r.kt)("td",{parentName:"tr",align:null},"Page to redirect after a succesfull mutation"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},' "show')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"edit')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},'"list"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"false")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"list"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"submit"),(0,r.kt)("td",{parentName:"tr",align:null},"Submit the form"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(values?: TVariables) => Promise<TData>")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"submitOnEnter"),(0,r.kt)("td",{parentName:"tr",align:null},"Listens ",(0,r.kt)("inlineCode",{parentName:"td"},"Enter")," key press to submit form"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"undoableTimeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Duration to wait before executing mutations when ",(0,r.kt)("inlineCode",{parentName:"td"},'mutationMode = "undoable"')),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"5000"),"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"warnWhenUnsavedChanges"),(0,r.kt)("td",{parentName:"tr",align:null},"Shows notification when unsaved changes exist"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"),"*")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"successNotification"),(0,r.kt)("td",{parentName:"tr",align:null},"Successful Mutation notification"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#successerrornotification"},(0,r.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,r.kt)("td",{parentName:"tr",align:null},'"Successfully created ',(0,r.kt)("inlineCode",{parentName:"td"},"resource"),'" or "Successfully updated ',(0,r.kt)("inlineCode",{parentName:"td"},"resource"),'"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"errorNotification"),(0,r.kt)("td",{parentName:"tr",align:null},"Unsuccessful Mutation notification"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#successerrornotification"},(0,r.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,r.kt)("td",{parentName:"tr",align:null},'"There was an error creating ',(0,r.kt)("inlineCode",{parentName:"td"},"resource")," (status code: ",(0,r.kt)("inlineCode",{parentName:"td"},"statusCode"),')" or "Error when updating ',(0,r.kt)("inlineCode",{parentName:"td"},"resource")," (status code: ",(0,r.kt)("inlineCode",{parentName:"td"},"statusCode"),')"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"metaData"),(0,r.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,r.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#metadataquery"},(0,r.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,r.kt)("td",{parentName:"tr",align:null},"{}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/providers/live-provider#usage-in-a-hook"},"liveMode")),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to update data automatically (",(0,r.kt)("inlineCode",{parentName:"td"},'"auto"'),") or not (",(0,r.kt)("inlineCode",{parentName:"td"},'"manual"'),') if a related live event is received. The "off" value is used to avoid creating a subscription.'),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#livemodeprops"},(0,r.kt)("inlineCode",{parentName:"a"},'"auto"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"a"},'"manual"')," ","|"," ",(0,r.kt)("inlineCode",{parentName:"a"},'"off"'))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"off"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"liveParams"),(0,r.kt)("td",{parentName:"tr",align:null},"Params to pass to ",(0,r.kt)("inlineCode",{parentName:"td"},"liveProvider"),"'s ",(0,r.kt)("inlineCode",{parentName:"td"},"subscribe")," method if ",(0,r.kt)("inlineCode",{parentName:"td"},"liveMode")," is enabled."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#livemodeprops"},(0,r.kt)("inlineCode",{parentName:"a"},"{ ids?: string[]; [key: string]: any; }"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onLiveEvent"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback to handle all related live events of this hook."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#livemodeprops"},(0,r.kt)("inlineCode",{parentName:"a"},"(event: LiveEvent) => void"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"*"),": These props have default values in ",(0,r.kt)("inlineCode",{parentName:"p"},"RefineContext")," and can also be set on ",(0,r.kt)("strong",{parentName:"p"},"<",(0,r.kt)("a",{parentName:"strong",href:"/docs/2.xx.xx/api-references/components/refine-config"},"Refine"),">")," component. ",(0,r.kt)("inlineCode",{parentName:"p"},"useModalForm")," will use what is passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"<Refine>")," as default but a local value will override it.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"**"),": If not explicitly configured, default value of ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect")," depends on which ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," used. If ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"create"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect"),"s default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," (created resources edit page). If ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"edit")," instead, ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect"),"s default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"list"),".")),(0,r.kt)("h3",{id:"return-value"},"Return Value"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"show"),(0,r.kt)("td",{parentName:"tr",align:null},"A function that can open the modal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(id?: string) => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"formProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Ant Design form props"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#Form"},(0,r.kt)("inlineCode",{parentName:"a"},"FormProps")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"modalProps"),(0,r.kt)("td",{parentName:"tr",align:null},"Props for managed modal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ant.design/components/modal/#API"},(0,r.kt)("inlineCode",{parentName:"a"},"ModalProps")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"formLoading"),(0,r.kt)("td",{parentName:"tr",align:null},"Loading status of form"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"submit"),(0,r.kt)("td",{parentName:"tr",align:null},"Submit method, the parameter is the value of the form fields"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"() => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"visible"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the modal dialog is visible or not"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"close"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify a function that can close the modal"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"() => void"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultFormValuesLoading"),(0,r.kt)("td",{parentName:"tr",align:null},"DefaultFormValues loading status of form"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"form"),(0,r.kt)("td",{parentName:"tr",align:null},"Ant Design form instance"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#FormInstance"},(0,r.kt)("inlineCode",{parentName:"a"},"FormInstance<TVariables>")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"editId"),(0,r.kt)("td",{parentName:"tr",align:null},"Record id for edit action"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setEditId"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"editId")," setter"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction<")," ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined>>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"queryResult"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the query of a record"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,r.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData }>")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mutationResult"),(0,r.kt)("td",{parentName:"tr",align:null},"Result of the mutation triggered by submitting the form"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,r.kt)("inlineCode",{parentName:"a"},"UseMutationResult<"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"},"{ data: TData },"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"},"TError,"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"}," { resource: string; values: TVariables; },"),(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"a"}," unknown>")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"setCloneId"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"cloneId")," setter"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction<")," ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"undefined>>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cloneId"),(0,r.kt)("td",{parentName:"tr",align:null},"Record id for clone action"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Desription"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TData"),(0,r.kt)("td",{parentName:"tr",align:null},"Result data of the query that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#baserecord"},(0,r.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TError"),(0,r.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/2.xx.xx/api-references/interfaceReferences#httperror"},(0,r.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,r.kt)("td",{parentName:"tr",align:null},"Values for params."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,r.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,r.kt)("iframe",{src:"https://codesandbox.io/embed/refine-use-modal-form-example-syf77?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-use-modal-form-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}s.isMDXComponent=!0}}]);