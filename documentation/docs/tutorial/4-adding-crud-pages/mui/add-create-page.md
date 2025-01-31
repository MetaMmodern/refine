---
id: add-create-page
title: 4. Adding Create Page
tutorial:
    order: 0
    prev: tutorial/adding-crud-pages/{preferredUI}/add-show-page
    next: tutorial/adding-crud-pages/{preferredUI}/add-delete-feature
---

Create page is the page where you can create the record. In this tutorial, we will create the create page for the `blog_posts` resource.

## Creating Create Page

First, let's create our file under the `src/pages/blog-posts` folder. We will name it `create.tsx`. Then, we will copy the create page code generated by Inferencer and paste it into the file.

To copy the code and paste it into the file, follow the steps below:

1. Navigate to the <a href="http://localhost:3000/blog-posts" rel="noopener noreferrer nofollow">localhost:3000/blog-posts</a> in your browser.

2. To open the create page, click the "Create" button in the top right corner of the table.

3. On the create page, click on the "Show Code" button in the bottom right corner of the page.

4. You can see the create page code generated by Inferencer. Click on the "Copy" button to copy the code.

5. Paste the code into the you created, `create.tsx` file.

You can see the create page code generated by Inferencer below:

```tsx live previewOnly previewHeight=600px url=http://localhost:3000/blog-posts/create
setInitialRoutes(["/blog-posts/create"]);

import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { Refine } from "@refinedev/core";
import { MuiInferencer } from "@refinedev/inferencer/mui";
import {
    ErrorComponent,
    Layout,
    LightTheme,
    notificationProvider,
    RefineSnackbarProvider,
} from "@refinedev/mui";
import routerBindings, {
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";

import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={LightTheme}>
            <CssBaseline />
            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
            <RefineSnackbarProvider>
                <BrowserRouter>
                    <Refine
                        routerProvider={routerBindings}
                        dataProvider={dataProvider(
                            "https://api.fake-rest.refine.dev",
                        )}
                        notificationProvider={notificationProvider}
                        resources={[
                            {
                                name: "blog_posts",
                                list: "/blog-posts",
                                show: "/blog-posts/show/:id",
                                create: "/blog-posts/create",
                                edit: "/blog-posts/edit/:id",
                            },
                        ]}
                        options={{
                            syncWithLocation: true,
                            warnWhenUnsavedChanges: true,
                        }}
                    >
                        <Routes>
                            <Route
                                element={
                                    <Layout>
                                        <Outlet />
                                    </Layout>
                                }
                            >
                                <Route
                                    index
                                    element={
                                        <NavigateToResource resource="blog_posts" />
                                    }
                                />

                                <Route path="blog-posts">
                                    <Route index element={<MuiInferencer />} />
                                    <Route
                                        path="show/:id"
                                        element={<MuiInferencer />}
                                    />
                                    <Route
                                        path="edit/:id"
                                        element={<MuiInferencer />}
                                    />
                                    <Route
                                        path="create"
                                        element={<MuiInferencer />}
                                    />
                                </Route>

                                <Route path="*" element={<ErrorComponent />} />
                            </Route>
                        </Routes>
                        <UnsavedChangesNotifier />
                    </Refine>
                </BrowserRouter>
            </RefineSnackbarProvider>
        </ThemeProvider>
    );
};

render(<App />);
```

Instead of coding the create page component from scratch, Inferencer've created the required code base on API response, so that we can customize.

## Understanding the Create Component

We will go through the create page components and hooks one by one.

-   `<Create/>` is a **refine** component that is used to presentation purposes like showing the title of the page, save button etc.

    [Refer to the `<Create/>` documentation for more information &#8594](/docs/api-reference/mui/components/basic-views/create)

-   `useForm` hook, imported from `@refinedev/react-hook-form` package, has been developed by using the **React Hook Form** and `useForm` hook imported from `@refinedev/core` package.

    It provides all the features of the `useForm` hook from `@refinedev/core` package as well as the `useForm` hook from **React Hook Form**.

    It also provides the `saveButtonProps` prop that we can pass to the submit button of the form.

    When you use `useForm` in the edit page,it sends the form data to `dataProvider`'s `create` method when the form is submitted.

    [Refer to the **@refinedev/react-hook-form** `useForm` documentation for more information &#8594](/docs/packages/documentation/react-hook-form/useForm/)

    [Refer to the **React Hook Form** documentation for more information &#8594](https://react-hook-form.com/)

-   All other components provided by **Material UI** are used to display the form fields.

    [Refer to the **Material UI** documentation for more information &#8594](https://mui.com/)

### Handling Relationships

In the edit page, we may need to select a record from another resource. For example, we may need to select a category from the `categories` resource to assign the blog post to the category. In this case, we can use the `useAutocomplete` hook provided by **refine**. This hook fetches the data by passing the params to the `dataProvider`'s `getList` method. Then, it returns the necessary props for the `<Autocomplete/>` component.

[Refer to the `useAutocomplete` documentation for more information &#8594](/docs/api-reference/mui/hooks/useAutocomplete/)

[Refer to the **Material UI** `<Autocomplete/>` documentation for more information &#8594](https://mui.com/material-ui/react-autocomplete/)

In the auto-generated create page code, Inferencer used the `useAutocomplete` hook to select a category from the `categories` resource like below:

```tsx
const { selectProps: categorySelectProps } = useAutocomplete({
    resource: "categories",
});
```

## Adding the Create Page to the App

Now that we have created the create page, we need to add it to the `App.tsx` file.

1. Open `src/App.tsx` file on your editor.

2. Import the created `BlogPostCreate` component.

3. Replace the `MuiInferencer` component with the `BlogPostCreate` component.

```tsx title="src/App.tsx"
import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { Refine } from "@refinedev/core";
import {
    ErrorComponent,
    Layout,
    LightTheme,
    notificationProvider,
    RefineSnackbarProvider,
} from "@refinedev/mui";
import routerBindings, {
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import { BlogPostEdit } from "pages/blog-posts/edit";
import { BlogPostList } from "pages/blog-posts/list";
import { BlogPostShow } from "pages/blog-posts/show";
//highlight-next-line
import { BlogPostCreate } from "pages/blog-posts/create";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={LightTheme}>
            <CssBaseline />
            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
            <RefineSnackbarProvider>
                <BrowserRouter>
                    <Refine
                        routerProvider={routerBindings}
                        dataProvider={dataProvider(
                            "https://api.fake-rest.refine.dev",
                        )}
                        notificationProvider={notificationProvider}
                        resources={[
                            {
                                name: "blog_posts",
                                list: "/blog-posts",
                                show: "/blog-posts/show/:id",
                                // highlight-next-line
                                create: "/blog-posts/create",
                                edit: "/blog-posts/edit/:id",
                            },
                        ]}
                        options={{
                            syncWithLocation: true,
                            warnWhenUnsavedChanges: true,
                        }}
                    >
                        <Routes>
                            <Route
                                element={
                                    <Layout>
                                        <Outlet />
                                    </Layout>
                                }
                            >
                                <Route
                                    index
                                    element={
                                        <NavigateToResource resource="blog_posts" />
                                    }
                                />

                                <Route path="blog-posts">
                                    <Route index element={<BlogPostList />} />
                                    <Route
                                        path="show/:id"
                                        element={<BlogPostShow />}
                                    />
                                    <Route
                                        path="edit/:id"
                                        element={<BlogPostEdit />}
                                    />
                                    {/* highlight-start */}
                                    <Route
                                        path="create"
                                        element={<BlogPostCreate />}
                                    />
                                    {/* highlight-end */}
                                </Route>

                                <Route path="*" element={<ErrorComponent />} />
                            </Route>
                        </Routes>

                        <UnsavedChangesNotifier />
                    </Refine>
                </BrowserRouter>
            </RefineSnackbarProvider>
        </ThemeProvider>
    );
};
export default App;
```

Now, we can see the create page in the browser at <a href="http://localhost:3000/blog-posts/create" rel="noopener noreferrer nofollow">localhost:3000/blog-posts/create</a>

<br/>
<br/>

<Checklist>

<ChecklistItem id="add-create-page-mui">
I added the create page to the app.
</ChecklistItem>
<ChecklistItem id="add-create-page-mui-2">
I understood the create page components and hooks.
</ChecklistItem>
<ChecklistItem id="add-create-page-mui-3">
I understood the relationship handling.
</ChecklistItem>

</Checklist>
