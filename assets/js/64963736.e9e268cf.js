"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[78309],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},20196:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"useForm",title:"useForm"},d=void 0,p={unversionedId:"api-references/hooks/form/useForm",id:"version-2.xx.xx/api-references/hooks/form/useForm",isDocsHomePage:!1,title:"useForm",description:"useForm is used to manage forms. It uses Ant Design Form data scope management under the hood and returns the required props for managing the form actions.",source:"@site/versioned_docs/version-2.xx.xx/api-references/hooks/form/useForm.md",sourceDirName:"api-references/hooks/form",slug:"/api-references/hooks/form/useForm",permalink:"/docs/api-references/hooks/form/useForm",editUrl:"https://github.com/pankod/refine/tree/master/documentation/versioned_docs/version-2.xx.xx/api-references/hooks/form/useForm.md",tags:[],version:"2.xx.xx",lastUpdatedBy:"Umut \xd6zdemir",lastUpdatedAt:1638966437,formattedLastUpdatedAt:"12/8/2021",frontMatter:{id:"useForm",title:"useForm"},sidebar:"version-2.xx.xx/someSidebar",previous:{title:"usePublish",permalink:"/docs/api-references/hooks/live/usePublish"},next:{title:"useModalForm",permalink:"/docs/api-references/hooks/form/useModalForm"}},s=[{value:"Usage",id:"usage",children:[],level:2},{value:"Actions",id:"actions",children:[{value:"<code>action: &quot;edit&quot;</code>",id:"action-edit",children:[],level:3},{value:"<code>action: &quot;create&quot;</code>",id:"action-create",children:[],level:3},{value:"Clone mode",id:"clone-mode",children:[],level:3}],level:2},{value:"API Reference",id:"api-reference",children:[{value:"Properties",id:"properties",children:[],level:3},{value:"Return values",id:"return-values",children:[],level:3},{value:"Type Parameters",id:"type-parameters",children:[],level:3}],level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",children:[],level:2}],m={toc:s};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," is used to manage forms. It uses Ant Design ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/form/"},"Form")," data scope management under the hood and returns the required props for managing the form actions."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"We'll show the basic usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," by adding an editing form."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/posts/edit.tsx"',title:'"pages/posts/edit.tsx"'},'// highlight-next-line\nimport { Edit, Form, Input, useForm, Select } from "@pankod/refine";\n\nexport const PostEdit: React.FC = () => {\n// highlight-next-line\n    const { formProps, saveButtonProps } = useForm<IPost>();\n\n    return (\n// highlight-next-line\n        <Edit saveButtonProps={saveButtonProps}>\n// highlight-next-line\n            <Form {...formProps} layout="vertical">\n                <Form.Item label="Title" name="title">\n                    <Input />\n                </Form.Item>\n                <Form.Item label="Status" name="status">\n                    <Select\n                        options={[\n                            {\n                                label: "Published",\n                                value: "published",\n                            },\n                            {\n                                label: "Draft",\n                                value: "draft",\n                            },\n                            {\n                                label: "Rejected",\n                                value: "rejected",\n                            },\n                        ]}\n                    />\n                </Form.Item>\n            </Form>\n        </Edit>\n    );\n};\n\ninterface IPost {\n    id: string;\n    title: string;\n    status: "published" | "draft" | "rejected";\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const { formProps, saveButtonProps } = useForm<IPost>();\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"formProps")," includes all necessary values to manage Ant Design ",(0,i.kt)("a",{parentName:"p",href:"https://ant.design/components/form/"},"Form")," components."),(0,i.kt)("p",null,"In the example if you navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"/posts/edit/1234")," it will manage the data of the post with id of ",(0,i.kt)("inlineCode",{parentName:"p"},"1234")," in an editing context. See ",(0,i.kt)("a",{parentName:"p",href:"#actions"},"Actions")," on how ",(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," determines this is an editing context."),(0,i.kt)("p",null,"Since this is an edit form it will fill the form with the data of the post with id of ",(0,i.kt)("inlineCode",{parentName:"p"},"1234")," and then the form will be ready to edit further and submit the changes."),(0,i.kt)("p",null,"Submit functionality is provided by ",(0,i.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," which includes all of the necessary props for a button to submit a form including automatically updating loading states."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," accepts type parameters for the record in use and for the response type of the mutation. ",(0,i.kt)("inlineCode",{parentName:"p"},"IPost")," in the example represents the record to edit. It is also used as the default type for mutation response."),(0,i.kt)("h2",{id:"actions"},"Actions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," can handle edit, create and clone actions."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"By default it determines the action from route. In the example, the route is ",(0,i.kt)("inlineCode",{parentName:"p"},"/posts/edit/1234")," thus this is an editing form."))),(0,i.kt)("p",null,"It can take an ",(0,i.kt)("inlineCode",{parentName:"p"},"action")," parameter for the situations where it isn't possible to determine the action from route i.e. using a form in a modal, using a custom route."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'const { formProps, saveButtonProps } = useForm({ action: "edit" });\n')),(0,i.kt)("h3",{id:"action-edit"},(0,i.kt)("inlineCode",{parentName:"h3"},'action: "edit"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'action: "edit"')," is used for editing an existing record. Form will initially be filled with the data of the record."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," uses ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-references/hooks/data/useUpdate"},(0,i.kt)("inlineCode",{parentName:"a"},"useUpdate"))," under the hood for mutations on edit mode."),(0,i.kt)("h3",{id:"action-create"},(0,i.kt)("inlineCode",{parentName:"h3"},'action: "create"')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},'action: "create"'),"is used for creating a new record that didn't exist before."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," uses ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-references/hooks/data/useCreate"},(0,i.kt)("inlineCode",{parentName:"a"},"useCreate"))," under the hood for mutations on create mode."),(0,i.kt)("h3",{id:"clone-mode"},"Clone mode"),(0,i.kt)("p",null,"When creating a new record, ",(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," can initialize the form with the data of an existing record."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," works on clone mode when a route has a ",(0,i.kt)("inlineCode",{parentName:"p"},"clone")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," parameters like this ",(0,i.kt)("inlineCode",{parentName:"p"},"{{resourceName}}/clone/1234"),".\nAlternatively, if route doesn't have those parameters, action can be set with ",(0,i.kt)("inlineCode",{parentName:"p"},'action: "clone"')," and id can be set with ",(0,i.kt)("inlineCode",{parentName:"p"},"setCloneId"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const { setCloneId } = useForm();\n")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you want to show a form in a modal or drawer where necessary route params might not be there you can use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-references/hooks/form/useModalForm"},"useModalForm")," or the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-references/hooks/form/useDrawerForm"},"useDrawerForm")," hook."))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"<CloneButton>")," can be used to navigate to a clone route with an id like this ",(0,i.kt)("inlineCode",{parentName:"p"},"{{resourceName}}/clone/1234"),"."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"<CloneButton recordItemId={record.id} />\n")),(0,i.kt)("p",{parentName:"div"},"Also the ",(0,i.kt)("inlineCode",{parentName:"p"},"clone")," method from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-references/hooks/navigation/useNavigation"},(0,i.kt)("inlineCode",{parentName:"a"},"useNavigation"))," hook can be used as well."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'const { clone } = useNavigation();\n\n<Button onClick={() => clone("posts", record.id)} />\n')))),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"action"),(0,i.kt)("td",{parentName:"tr",align:null},"Type of the form mode"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"edit"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"create"')),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"resource"),(0,i.kt)("td",{parentName:"tr",align:null},"Resource name for API data interactions"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onMutationSuccess"),(0,i.kt)("td",{parentName:"tr",align:null},"Called when a ",(0,i.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},"mutation")," is successful"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(data: UpdateResponse<M>, variables: any, context: any) => void")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onMutationError"),(0,i.kt)("td",{parentName:"tr",align:null},"Called when a ",(0,i.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},"mutation")," encounters an error"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"(error: any, variables: any, context: any) => void")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mutationMode"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/guides-and-concepts/mutation-mode"},"Determines when mutations are executed")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},' "pessimistic')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"optimistic')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"undoable"')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"pessimistic"'),"*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"submitOnEnter"),(0,i.kt)("td",{parentName:"tr",align:null},"Listens ",(0,i.kt)("inlineCode",{parentName:"td"},"Enter")," key press to submit form"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"warnWhenUnsavedChanges"),(0,i.kt)("td",{parentName:"tr",align:null},"Shows notification when unsaved changes exist"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"),"*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"redirect"),(0,i.kt)("td",{parentName:"tr",align:null},"Page to redirect after a succesfull mutation"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},' "show')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"edit')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"list"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"list"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"undoableTimeout"),(0,i.kt)("td",{parentName:"tr",align:null},"Duration to wait before executing mutations when ",(0,i.kt)("inlineCode",{parentName:"td"},'mutationMode = "undoable"')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"5000"),"*")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"successNotification"),(0,i.kt)("td",{parentName:"tr",align:null},"Successful Mutation notification"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#successerrornotification"},(0,i.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,i.kt)("td",{parentName:"tr",align:null},'"Successfully created ',(0,i.kt)("inlineCode",{parentName:"td"},"resource"),'" or "Successfully updated ',(0,i.kt)("inlineCode",{parentName:"td"},"resource"),'"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"errorNotification"),(0,i.kt)("td",{parentName:"tr",align:null},"Unsuccessful Mutation notification"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#successerrornotification"},(0,i.kt)("inlineCode",{parentName:"a"},"SuccessErrorNotification"))),(0,i.kt)("td",{parentName:"tr",align:null},'"There was an error creating ',(0,i.kt)("inlineCode",{parentName:"td"},"resource")," (status code: ",(0,i.kt)("inlineCode",{parentName:"td"},"statusCode"),')" or "Error when updating ',(0,i.kt)("inlineCode",{parentName:"td"},"resource")," (status code: ",(0,i.kt)("inlineCode",{parentName:"td"},"statusCode"),')"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metaData"),(0,i.kt)("td",{parentName:"tr",align:null},"Metadata query for ",(0,i.kt)("inlineCode",{parentName:"td"},"dataProvider")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#metadataquery"},(0,i.kt)("inlineCode",{parentName:"a"},"MetaDataQuery"))),(0,i.kt)("td",{parentName:"tr",align:null},"{}")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api-references/providers/live-provider#usage-in-a-hook"},"liveMode")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to update data automatically (",(0,i.kt)("inlineCode",{parentName:"td"},'"auto"'),") or not (",(0,i.kt)("inlineCode",{parentName:"td"},'"manual"'),') if a related live event is received. The "off" value is used to avoid creating a subscription.'),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#livemodeprops"},(0,i.kt)("inlineCode",{parentName:"a"},'"auto"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"a"},'"manual"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"a"},'"off"'))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"off"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"liveParams"),(0,i.kt)("td",{parentName:"tr",align:null},"Params to pass to ",(0,i.kt)("inlineCode",{parentName:"td"},"liveProvider"),"'s ",(0,i.kt)("inlineCode",{parentName:"td"},"subscribe")," method if ",(0,i.kt)("inlineCode",{parentName:"td"},"liveMode")," is enabled."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#livemodeprops"},(0,i.kt)("inlineCode",{parentName:"a"},"{ ids?: string[]; [key: string]: any; }"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onLiveEvent"),(0,i.kt)("td",{parentName:"tr",align:null},"Callback to handle all related live events of this hook."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#livemodeprops"},(0,i.kt)("inlineCode",{parentName:"a"},"(event: LiveEvent) => void"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"*"),": These props have default values in ",(0,i.kt)("inlineCode",{parentName:"p"},"RefineContext")," and can also be set on ",(0,i.kt)("strong",{parentName:"p"},"<",(0,i.kt)("a",{parentName:"strong",href:"/docs/api-references/components/refine-config"},"Refine"),">")," component. ",(0,i.kt)("inlineCode",{parentName:"p"},"useForm")," will use what is passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"<Refine>")," as default but a local value will override it.")),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"return-values"},"Return values"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"form"),(0,i.kt)("td",{parentName:"tr",align:null},"Ant Design form instance"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#FormInstance"},(0,i.kt)("inlineCode",{parentName:"a"},"FormInstance"))),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"formProps"),(0,i.kt)("td",{parentName:"tr",align:null},"Ant Design form props"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://ant.design/components/form/#Form"},(0,i.kt)("inlineCode",{parentName:"a"},"FormProps"))),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"saveButtonProps"),(0,i.kt)("td",{parentName:"tr",align:null},"Props for a submit button"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{ disabled: boolean; onClick: () => void; loading?:boolean; }")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"queryResult"),(0,i.kt)("td",{parentName:"tr",align:null},"Result of the query of a record"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,i.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<T>"))),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mutationResult"),(0,i.kt)("td",{parentName:"tr",align:null},"Result of the mutation triggered by submitting the form"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useMutation"},(0,i.kt)("inlineCode",{parentName:"a"},"UseMutationResult<T>"))),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"formLoading"),(0,i.kt)("td",{parentName:"tr",align:null},"Loading state of form request"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"cloneId"),(0,i.kt)("td",{parentName:"tr",align:null},"Record id for clone action"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"string"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"number"')),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"setCloneId"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"cloneId")," setter"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction<")," ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined>>")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"editId"),(0,i.kt)("td",{parentName:"tr",align:null},"Record id for edit action"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"string"')," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},'"number"')),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"setEditId"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"editId")," setter"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction<")," ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined>>")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Desription"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TData"),(0,i.kt)("td",{parentName:"tr",align:null},"Result data of the query that extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#baserecord"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TError"),(0,i.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,i.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"/docs/api-references/interfaceReferences#httperror"},(0,i.kt)("inlineCode",{parentName:"a"},"HttpError")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TVariables"),(0,i.kt)("td",{parentName:"tr",align:null},"Values for params."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{}"))))),(0,i.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,i.kt)("iframe",{src:"https://codesandbox.io/embed/refine-use-form-example-vn13r?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"refine-use-form-example",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}u.isMDXComponent=!0}}]);