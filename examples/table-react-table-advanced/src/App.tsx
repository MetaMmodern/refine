import { GitHubBanner, Refine } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";
import routerProvider from "@refinedev/react-router-v6/legacy";

import { PostList } from "pages/posts";

const API_URL = "https://api.fake-rest.refine.dev";

const App: React.FC = () => {
    return (
        <>
            <GitHubBanner />
            <Refine
                legacyRouterProvider={routerProvider}
                dataProvider={dataProvider(API_URL)}
                resources={[
                    {
                        name: "posts",
                        list: PostList,
                    },
                ]}
            />
        </>
    );
};

export default App;
