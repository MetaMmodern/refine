import { GitHubBanner, Refine } from "@refinedev/core";
import {
    notificationProvider,
    Layout,
    ReadyPage,
    ErrorComponent,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";
import routerProvider from "@refinedev/react-router-v6/legacy";
import dataProvider from "@refinedev/simple-rest";
import PostCreate from "pages/PostCreate";
import PostEdit from "pages/PostEdit";
import PostList from "pages/PostList";

function App() {
    return (
        <>
            <GitHubBanner />
            <Refine
                notificationProvider={notificationProvider}
                Layout={Layout}
                ReadyPage={ReadyPage}
                catchAll={<ErrorComponent />}
                legacyRouterProvider={routerProvider}
                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
                resources={[
                    {
                        name: "users",
                        list: PostList,
                        create: PostCreate,
                        edit: PostEdit,
                    },
                ]}
            />
        </>
    );
}

export default App;
