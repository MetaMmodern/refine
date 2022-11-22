"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6562],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13552:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>d,default:()=>v,frontMatter:()=>u,metadata:()=>h,toc:()=>I});var i=n(87462),o=(n(67294),n(3905)),a=n(45377),r=n(5548),l=n(95654),s=n(16520),p=n(13532),c=n(2136),m=n(79881);const u={title:"How to use Material UI Select in React",description:"We'll discover the Material UI (MUI) select component with examples",slug:"material-ui-select-component",authors:"doro_onome",tags:["material-ui","react","mui","mui-select"],image:"/img/blog/2022-10-30-mui-select/social.png",hide_table_of_contents:!1},d=void 0,h={permalink:"/blog/material-ui-select-component",source:"@site/blog/2022-10-30-mui-select.md",title:"How to use Material UI Select in React",description:"We'll discover the Material UI (MUI) select component with examples",date:"2022-10-30T00:00:00.000Z",formattedDate:"October 30, 2022",tags:[{label:"material-ui",permalink:"/blog/tags/material-ui"},{label:"react",permalink:"/blog/tags/react"},{label:"mui",permalink:"/blog/tags/mui"},{label:"mui-select",permalink:"/blog/tags/mui-select"}],readingTime:9.29,hasTruncateMarker:!1,authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],frontMatter:{title:"How to use Material UI Select in React",description:"We'll discover the Material UI (MUI) select component with examples",slug:"material-ui-select-component",authors:"doro_onome",tags:["material-ui","react","mui","mui-select"],image:"/img/blog/2022-10-30-mui-select/social.png",hide_table_of_contents:!1},prevItem:{title:"What is Next.js getInitialProps and getServerSideProps?",permalink:"/blog/next-js-getinitialprops-and-getserversideprops"},nextItem:{title:"Understanding the React useRef Hook",permalink:"/blog/react-useref-hook-and-ref"},relatedPosts:[{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",permalink:"/blog/refine-invoice-generator",formattedDate:"March 1, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:13.925,date:"2022-03-01T00:00:00.000Z"},{title:"Create a Feedback Admin panel in 15 Minutes with Refine and Strapi",permalink:"/blog/create-a-feedback-admin-panel-with-refine-and-strapi",formattedDate:"October 4, 2021",authors:[{name:"Salih \xd6zdemir",title:"Software Developer",url:"https://github.com/salihozdemir",imageURL:"https://github.com/salihozdemir.png",key:"salih"}],readingTime:6.92,date:"2021-10-04T00:00:00.000Z"},{title:"React Props Explained with Examples",permalink:"/blog/react-props",formattedDate:"November 16, 2022",authors:[{name:"Chidume Nnamdi",title:"Software Engineer",url:"https://github.com/philipszdavido",imageURL:"https://github.com/philipszdavido.png",key:"chidume_nnamdi"}],readingTime:11.01,date:"2022-11-16T00:00:00.000Z"}],authorPosts:[{title:"A Guide on Material UI AutoComplete in React",permalink:"/blog/material-ui-autocomplete-component",formattedDate:"October 19, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:14.315,date:"2022-10-19T00:00:00.000Z"},{title:"Material UI button in React",permalink:"/blog/mui-button-in-react",formattedDate:"September 5, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:9.3,date:"2022-09-05T00:00:00.000Z"},{title:"MUI Icons in React",permalink:"/blog/mui-icons-in-react",formattedDate:"August 24, 2022",authors:[{name:"Doro Onome",title:"Software Developer",url:"https://github.com/Nomzy-kush",imageURL:"https://github.com/Nomzy-kush.png",key:"doro_onome"}],readingTime:10.06,date:"2022-08-24T00:00:00.000Z"}]},g={authorsImageUrls:[void 0]},I=[{value:"Introduction",id:"introduction",level:2},{value:"What is Material UI",id:"what-is-material-ui",level:2},{value:"Getting Started with Material UI Select",id:"getting-started-with-material-ui-select",level:2},{value:"The Option component",id:"the-option-component",level:2},{value:"Other MUI Select features",id:"other-mui-select-features",level:2},{value:"Indicator",id:"indicator",level:3},{value:"Decorator",id:"decorator",level:3},{value:"Grouped Options",id:"grouped-options",level:3},{value:"Clearing the Select field",id:"clearing-the-select-field",level:2},{value:"Accessibility",id:"accessibility",level:2},{value:"Building a Sign-up Form UI with React and MUI Select",id:"building-a-sign-up-form-ui-with-react-and-mui-select",level:2},{value:"Conclusion",id:"conclusion",level:2}],A=(f="PromotionBanner",function(e){return console.warn("Component "+f+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var f;const k={toc:I};function v(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Material UI provides a plethora of available styled components that assist developers in creating responsive and aesthetically pleasing web designs. One of these components is MUIs Select, which is an input field that showcases a list of customisable options. In this tutorial, we will deeply dive into ",(0,o.kt)("strong",{parentName:"p"},"Material UI Select"),", look at its prop possibilities, and highlight its features. We will also investigate a potential use case in a real-world application."),(0,o.kt)("p",null,"Steps we'll cover:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#what-is-material-ui"},"What is Material UI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#getting-started-with-material-ui-select"},"Getting Started with Material UI Select")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#the-option-component"},"The Option component")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#other-mui-select-features"},"Other MUI Select features"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#indicator"},"Indicator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#decorator"},"Decorator")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#grouped-options"},"Grouped Options")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#clearing-the-select-field"},"Clearing the Select field")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#accessibility"},"Accessibility")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#building-a-sign-up-form-ui-with-react-and-mui-select"},"Building a Sign-up Form UI with React and MUI Select"))),(0,o.kt)("h2",{id:"what-is-material-ui"},"What is Material UI"),(0,o.kt)("p",null,"Material UI is a React framework based on  ",(0,o.kt)("a",{parentName:"p",href:"https://material.io/design/introduction"},"Google's Material Design")," that contains all the tools required to create a web application. Material UI empowers developers to build desktop and mobile web apps for companies by leveraging widely available responsive components. Many developers now use Material UI to structure their projects since it simplifies and improves web design."),(0,o.kt)("p",null,"The following component categories are available in Material UI: Navigation components, Input components, Data Display components, and Surfaces components. 'Select' is an illustrative example of an Input component. "),(0,o.kt)("p",null,"You can add Material UI to your React project with the following commands:"),(0,o.kt)("p",null,"npm: ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install @mui/material @emotion/react @emotion/styled")),(0,o.kt)("p",null,"yarn: ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn add @mui/material @emotion/react @emotion/styled")," "),(0,o.kt)("h2",{id:"getting-started-with-material-ui-select"},"Getting Started with Material UI Select"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Material UI Select")," component displays a pop-up with a list of configurable options. It emulates the traditional ",(0,o.kt)("inlineCode",{parentName:"p"},"<Select></Select")," element in regular HTML. The built-in props in this component allow you to design interfaces that can be specific to your application's requirements."),(0,o.kt)("p",null,"Below is a simple illustration of how to use the Material UI Select component in your next React project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport Select from "@mui/joy/Select";\nimport Option from "@mui/joy/Option";\n\nexport default function topCarBrands() {\n  return (\n    <Select\n      defaultValue="Benz"\n      placeholder="Enter Car Brand"\n      sx={{\n        width: 200,\n        height: 50,\n      }}\n    >\n      <Option value="mercedes benz">Mercedes Benz</Option>\n      <Option value="tesla">Tesla</Option>\n      <Option value="rolls royce">Rolls Royce</Option>\n      <Option value="bugatti">Bugatti</Option>\n      <Option value="ferrari">Ferrari</Option>\n    </Select>\n  );\n}\n')),(0,o.kt)("p",null,"The code above showcases a ",(0,o.kt)("strong",{parentName:"p"},"Material UI Select")," input field with popular car brands as the option values. "),(0,o.kt)("p",null,"Here\u2019s the result:"),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{style:{alignSelf:"center",width:"300px"},src:a.Z,alt:"MUI select initial"})),(0,o.kt)("h2",{id:"the-option-component"},"The Option component"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Option")," component represents the choosable alternatives in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Select")," component. The selected option inherits the ",(0,o.kt)("inlineCode",{parentName:"p"},"color")," prop value from the ",(0,o.kt)("inlineCode",{parentName:"p"},"parent(Select)")," and, by default, uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"primary")," palette. It does not, however, inherit the Select ",(0,o.kt)("inlineCode",{parentName:"p"},"variant")," value."),(0,o.kt)("p",null,"Here\u2019s a simple illustration of how to combine them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport Avatar from "@mui/joy/Avatar";\nimport ListItemDecorator from "@mui/joy/ListItemDecorator";\nimport ListDivider from "@mui/joy/ListDivider";\nimport Select from "@mui/joy/Select";\nimport Option from "@mui/joy/Option";\n\nexport default function topCarBrands() {\n  return (\n    <Select\n      defaultValue="1"\n      componentsProps={{\n        listbox: {\n          sx: {\n            "--List-decorator-size": "45px",\n          },\n        },\n      }}\n      sx={{\n        "--List-decorator-size": "45px",\n        minWidth: 240,\n      }}\n    >\n      <Option value="1">\n        <ListItemDecorator>\n          <Avatar size="sm" />\n        </ListItemDecorator>\n        Chevrolet\n      </Option>\n      <ListDivider role="none" inset="startContent" />\n      <Option value="2">\n        <ListItemDecorator>\n          <Avatar size="sm" />\n        </ListItemDecorator>\n        Honda\n      </Option>\n      <ListDivider role="none" inset="startContent" />\n      <Option value="3">\n        <ListItemDecorator>\n          <Avatar size="sm" />\n        </ListItemDecorator>\n        Nissan\n      </Option>\n      <ListDivider role="none" inset="startContent" />\n      <Option value="4">\n        <ListItemDecorator>\n          <Avatar size="sm" />\n        </ListItemDecorator>\n        Ford\n      </Option>\n      <ListDivider role="none" inset="startContent" />\n      <Option value="5">\n        <ListItemDecorator>\n          <Avatar size="sm" />\n        </ListItemDecorator>\n        Fiat\n      </Option>\n    </Select>\n  );\n}\n')),(0,o.kt)("p",null,"The code above showcases a list of car brands as ",(0,o.kt)("inlineCode",{parentName:"p"},"<Option />")," values. The ",(0,o.kt)("inlineCode",{parentName:"p"},"ListItemDecorator")," component creates space between the avatars, while the ",(0,o.kt)("inlineCode",{parentName:"p"},"ListDivider")," serves as a visual separator. "),(0,o.kt)("p",null,"Here\u2019s the result:"),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{style:{alignSelf:"center",width:"300px"},src:c.Z,alt:"MUI select option"})),(0,o.kt)("hr",null),(0,o.kt)(A,{title:"Tired of repeating your form logic in every place you need it?",image:"/img/mui_banner.png",mdxType:"PromotionBanner"}),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"other-mui-select-features"},"Other MUI Select features"),(0,o.kt)("h3",{id:"indicator"},"Indicator"),(0,o.kt)("p",null,"You can modify the default indicator in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Select></Select>")," component by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"indicator")," prop. The value of the prop can be a string, array, component, or any other React element."),(0,o.kt)("p",null,"Consider the code below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import * as React from "react";\nimport Select, { selectClasses } from "@mui/joy/Select";\nimport Option from "@mui/joy/Option";\nimport KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";\n\nexport default function SelectIndicator() {\n  return (\n    <Select\n      placeholder="what\'s your favourite car?"\n      indicator={<KeyboardArrowDown />}\n      sx={{\n        width: 240,\n        [`& .${selectClasses.indicator}`]: {\n          transition: "0.2s",\n          [`&.${selectClasses.expanded}`]: {\n            transform: "rotate(-180deg)",\n          },\n        },\n      }}\n    >\n      <Option value="jeep">Jeep</Option>\n      <Option value="volkswagen">Volkswagen</Option>\n      <Option value="volvo">Volvo</Option>\n      <Option value="jaguar">Jaguar</Option>\n      <Option value="audi">Audi</Option>\n    </Select>\n  );\n}\n')),(0,o.kt)("p",null,"In the code above, we used the ",(0,o.kt)("inlineCode",{parentName:"p"},"indicator")," prop to replace the standard ",(0,o.kt)("inlineCode",{parentName:"p"},"UnfoldMoreIcon")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"KeyboardArrowDown")," icon for the Select options indicator symbol."),(0,o.kt)("p",null,"Here\u2019s the result:"),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{style:{alignSelf:"center",width:"300px"},src:p.Z,alt:"MUI select indicator"})),(0,o.kt)("h3",{id:"decorator"},"Decorator"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"startDecorator")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"endDecorator")," props to add supporting icons to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Select")," input field for more context and better emphasis. The ",(0,o.kt)("inlineCode",{parentName:"p"},"startDecorator")," places the icon at the beginning of the Select field, while the ",(0,o.kt)("inlineCode",{parentName:"p"},"endDecorator")," places the icon at the end. "),(0,o.kt)("p",null,"Here\u2019s an illustration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport Select from '@mui/joy/Select';\nimport Option from '@mui/joy/Option';\nimport Chip from '@mui/joy/Chip';\nimport AttachMoneyIcon from '@mui/icons-material/AttachMoney';\nimport AddCircleIcon from '@mui/icons-material/AddCircle';\n\nexport default function SelectDecorators() {\n  return (\n    <Select\n      placeholder=\"Select a Car\u2026\"\n      startDecorator={<AttachMoneyIcon />}\n      endDecorator={<AddCircleIcon />}\n      sx={{ width: 350 }}\n    >\n        <Option value=\"porsche\">Porsche</Option>\n        <Option value=\"lexus\">Lexus</Option>\n        <Option value=\"land rover\">Land Rover</Option>\n        <Option value=\"toyota\">Toyota</Option>\n        <Option value=\"toyota\">Bugatti</Option>\n    </Select>\n  );\n}\n")),(0,o.kt)("p",null,"The code above depicts a simple Select field with the start and end decorators represented by MUIs ",(0,o.kt)("inlineCode",{parentName:"p"},"AttachMoneyIcon")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AddCircleIcon"),", respectively."),(0,o.kt)("p",null,"Here\u2019s the result:"),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{style:{alignSelf:"center",width:"300px"},src:l.Z,alt:"MUI select decorator"})),(0,o.kt)("h3",{id:"grouped-options"},"Grouped Options"),(0,o.kt)("p",null,"Wrap the ",(0,o.kt)("inlineCode",{parentName:"p"},"Option")," component in the ",(0,o.kt)("inlineCode",{parentName:"p"},"<List />")," to group your ",(0,o.kt)("inlineCode",{parentName:"p"},"Select")," option values. With the ",(0,o.kt)("inlineCode",{parentName:"p"},"ListItem")," component, you can now provide the ",(0,o.kt)("inlineCode",{parentName:"p"},"Select")," field with an accompanying label, providing uniform height and the easy use of nested CSS variables."),(0,o.kt)("p",null,"Consider the code below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import * as React from 'react';\nimport Select from '@mui/joy/Select';\nimport Option, { optionClasses } from '@mui/joy/Option';\nimport Chip from '@mui/joy/Chip';\nimport List from '@mui/joy/List';\nimport ListItemDecorator, {\n  listItemDecoratorClasses,\n} from '@mui/joy/ListItemDecorator';\nimport ListDivider from '@mui/joy/ListDivider';\nimport ListItem from '@mui/joy/ListItem';\nimport Typography from '@mui/joy/Typography';\nimport Check from '@mui/icons-material/Check';\n\nexport default function Demo() {\n  const group = {\n    Land: ['Car', 'Truck', 'Train', 'Motorcycle', 'Bus'],\n    Water: ['Ship', 'Boat', 'Sub Marine'],\n    Air: ['Aeroplane', 'Jet', 'Helicopter'],\n  };\n  const colors = {\n    Land: 'neutral',\n    Water: 'primary',\n    Air: 'success',\n  };\n  return (\n    <Select\n      placeholder=\"Choose your transport mode\"\n      componentsProps={{\n        listbox: {\n          component: 'div',\n          sx: {\n            maxHeight: 240,\n            overflow: 'auto',\n            '--List-padding': '0px',\n          },\n        },\n      }}\n      sx={{ width: 350 }}\n    >\n      {Object.entries(group).map(([name, transports], index) => (\n        <React.Fragment key={name}>\n          {index !== 0 && <ListDivider role=\"none\" />}\n          <List\n            aria-labelledby={`select-group-${name}`}\n            sx={{ '--List-decorator-size': '28px' }}\n          >\n            <ListItem id={`select-group-${name}`} sticky>\n              <Typography level=\"body3\" textTransform=\"uppercase\" letterSpacing=\"md\">\n                {name} ({transports.length})\n              </Typography>\n            </ListItem>\n            {transports.map((transport) => (\n              <Option\n                key={transport}\n                value={transport}\n                label={\n                  <React.Fragment>\n                    <Chip\n                      size=\"sm\"\n                      color={colors[name]}\n                      sx={{ borderRadius: 'xs', mr: 1, ml: -0.5 }}\n                    >\n                      {name}\n                    </Chip>{' '}\n                    {transport}\n                  </React.Fragment>\n                }\n                sx={{\n                  [`&.${optionClasses.selected} .${listItemDecoratorClasses.root}`]:\n                    {\n                      opacity: 1,\n                    },\n                }}\n              >\n                <ListItemDecorator sx={{ opacity: 0 }}>\n                  <Check />\n                </ListItemDecorator>\n                {transport}\n              </Option>\n            ))}\n          </List>\n        </React.Fragment>\n      ))}\n    </Select>\n  );\n}\n")),(0,o.kt)("p",null,"The preceding code shows a ",(0,o.kt)("inlineCode",{parentName:"p"},"Select")," field with organised input values. As shown below, these values are represented by three modes of transportation (land, air, and water), each with its own set of values. These values are placed in an array that is mapped through to generate the output on the DOM."),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{style:{alignSelf:"center",width:"300px"},src:s.Z,alt:"MUI select grouped"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),": If you wish to specify the maximum height for a list of accessible ",(0,o.kt)("inlineCode",{parentName:"p"},"Select")," options, simply do so in the ",(0,o.kt)("inlineCode",{parentName:"p"},"listbox")," component to ensure proper keyboard navigation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<Select\n  optionProps={{\n    listbox: {\n      sx: {\n        maxHeight: 250,\n        overflow: 'auto', // to enable scrolling\n      }\n    }\n  }}\n>\n")),(0,o.kt)("br",null),(0,o.kt)("div",null,(0,o.kt)("a",{href:"https://discord.gg/refine"},(0,o.kt)("img",{src:"/img/discord_big_blue.png",alt:"discord banner"}))),(0,o.kt)("h2",{id:"clearing-the-select-field"},"Clearing the Select field"),(0,o.kt)("p",null,"You can clear the values in the ",(0,o.kt)("strong",{parentName:"p"},"MUI Select")," field just like any other input component. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"IconButton")," component as a Select decorator, then add the logic that clears the values."),(0,o.kt)("p",null,"Here\u2019s how:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState, useRef } from \'react\';\nimport Select from \'@mui/joy/Select\';\nimport Option from \'@mui/joy/Option\';\nimport IconButton from \'@mui/joy/IconButton\';\nimport CloseRounded from \'@mui/icons-material/CloseRounded\';\n\nexport default function SelectBasic() {\n  const [value, setValue] = useState(\'tesla\');\n  const action = useRef(null);\n  return (\n    <Select\n      action={action}\n      value={value}\n      placeholder="Favorite car"\n      onChange={(e, newValue) => setValue(newValue)}\n      {...(value && {\n        // When the user has selected a value, the button is displayed, and the select indicator is removed.\n        endDecorator: (\n          <IconButton\n            size="sm"\n            variant="plain"\n            color="neutral"\n            onMouseDown={(event) => {\n              // stops the popup from appearing when this button is clicked\n              event.stopPropagation();\n            }}\n            onClick={() => {\n              setValue(null);\n              action.current?.focusVisible();\n            }}\n          >\n            <CloseRounded />\n          </IconButton>\n        ),\n        indicator: null,\n      })}\n      sx={{ minWidth: 300 }}\n    >\n      <Option value="tesla">Tesla</Option>\n      <Option value="bmw">BMW</Option>\n      <Option value="bentley">Bentley</Option>\n      <Option value="bugatti">Bugatti</Option>\n    </Select>\n  );\n}\n')),(0,o.kt)("p",null,"Here\u2019s the result:"),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{style:{alignSelf:"center",width:"300px"},src:r.Z,alt:"MUI select clearing"})),(0,o.kt)("h2",{id:"accessibility"},"Accessibility"),(0,o.kt)("p",null,"To make ",(0,o.kt)("strong",{parentName:"p"},"MUI Select")," accessible, you must associate it with a ",(0,o.kt)("inlineCode",{parentName:"p"},"label"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"FormControl")," component automatically produces a unique id that ties the ",(0,o.kt)("inlineCode",{parentName:"p"},"Select")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"FormLabel")," component."),(0,o.kt)("p",null,"Consider the code below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<FormControl>\n      <FormLabel id=\"select-field-demo-label\" htmlFor=\"select-field-demo-button\">\n        {/* Define a random label */}\n      </FormLabel>\n      <Select\n        componentsProps={{\n          button: {\n            id: 'select-field-demo-button',\n            'aria-labelledby': 'select-field-demo-label select-field-demo-button',\n          },\n        }}\n      >\n         <Option>...</Option>\n      </Select>\n</FormControl>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note that"),": When making use of ",(0,o.kt)("inlineCode",{parentName:"p"},"FormControl")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"outlined")," variant of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Select")," component, you must provide a ",(0,o.kt)("inlineCode",{parentName:"p"},"label")," in two places: in the ",(0,o.kt)("inlineCode",{parentName:"p"},"InputLabel")," component and the ",(0,o.kt)("inlineCode",{parentName:"p"},"label")," prop of the Select component."),(0,o.kt)("h2",{id:"building-a-sign-up-form-ui-with-react-and-mui-select"},"Building a Sign-up Form UI with React and MUI Select"),(0,o.kt)("p",null,"You can use Material UI ",(0,o.kt)("inlineCode",{parentName:"p"},"Select")," for a wide range of purposes on a website, but nothing fully demonstrates its capabilities like a form component. For the sake of this tutorial, we will showcase the use of MUI ",(0,o.kt)("inlineCode",{parentName:"p"},"Select")," in a simple Sign-up form."),(0,o.kt)("p",null,"Here\u2019s the code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, { useState, useRef } from \'react\';\nimport Select from \'@mui/joy/Select\';\nimport Option from \'@mui/joy/Option\';\nimport IconButton from \'@mui/joy/IconButton\';\nimport CloseRounded from \'@mui/icons-material/CloseRounded\';\n\nexport default function SelectBasic() {\n  const [value, setValue] = useState(\'tesla\');\n  const action = useRef(null);\n  return (\n    <div>\n    <section className="login">\n        <div className="loginContainer">\n            <label>Name</label>\n            <input \n            type=\'text\'\n            autoFocus\n            required\n            />\n            <label>Email</label>\n            <input \n            type=\'email\'\n            required\n            />\n\n<label>Gender</label>\n    <Select\n      action={action}\n      value={value}\n      placeholder="What is your Gender?"\n      onChange={(e, newValue) => setValue(newValue)}\n      {...(value && {\n        // When the user has selected a value, the button is displayed, and the select indicator is removed.\n        endDecorator: (\n          <IconButton\n            size="sm"\n            variant="plain"\n            color="neutral"\n            backgroundColor=\'none\'\n            onMouseDown={(event) => {\n              // stops the popup from appearing when this button is clicked\n              event.stopPropagation();\n            }}\n            onClick={() => {\n              setValue(null);\n              action.current?.focusVisible();\n            }}\n          >\n            <CloseRounded />\n          </IconButton>\n        ),\n        indicator: null,\n      })}\n      sx={{ minWidth: 300, backgroundColor: \'#202124\' }}\n    >\n      <Option value="male">Male</Option>\n      <Option value="female">Female</Option>\n      <Option value="non-binary">Non-Binary</Option>\n      <Option value="other">Other</Option>\n      <Option value="no-answer">Prefer not to answer</Option>\n    </Select>\n\n    </div>\n        </section>\n        </div>\n  );\n}\n')),(0,o.kt)("p",null,"And the result:"),(0,o.kt)("div",{className:"centered-image"},(0,o.kt)("img",{style:{alignSelf:"center"},src:m.Z,alt:"MUI select option"})),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"This article covered the ",(0,o.kt)("strong",{parentName:"p"},"Material UI Select")," component, navigated its features, and highlighted its functionalities in a React application. We also investigated a use case by developing a Sign-up form UI in React with ",(0,o.kt)("strong",{parentName:"p"},"MUI Select"),". I hope you find this post helpful."))}v.isMDXComponent=!0},45377:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},5548:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mui-select-clearing-69e0d96f7bd2eb03a76cb9d44e02fef6.gif"},95654:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mui-select-decorator-44018c59702cbfd77a74f54b2a6b2537.gif"},16520:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mui-select-grouped-3226306c067a2fb5128182473ba5172c.gif"},13532:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mui-select-indicator-fd6398ff9c9142c5db60421212bc998c.gif"},2136:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mui-select-option-6c3b751f40697ab329630a578e3ede23.gif"},79881:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mui-select-result-9904bb4b8f47b28070cbd4aec1e12cc0.gif"}}]);