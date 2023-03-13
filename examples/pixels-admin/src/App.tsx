import React from "react";

import { GitHubBanner, Refine } from "@refinedev/core";
import {
    Layout,
    notificationProvider,
    ReadyPage,
    ErrorComponent,
} from "@refinedev/antd";
import { ConfigProvider } from "antd";
import { Title } from "./components/layout";
import { dataProvider, liveProvider } from "@refinedev/supabase";
import routerProvider from "@refinedev/react-router-v6/legacy";
import { supabaseClient } from "utility";
import "@refinedev/antd/dist/reset.css";

import {
    auditLogProvider,
    authProvider,
    accessControlProvider,
} from "providers";
import { CanvasList, UserList } from "pages";
import { AuthPage } from "pages/auth";

function App() {
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: "#3ecf8e",
                    colorText: "#80808a",
                    colorError: "#fa541c",
                    colorBgLayout: "#f0f2f5",
                    colorLink: "#3ecf8e",
                    colorLinkActive: "#3ecf8e",
                    colorLinkHover: "#3ecf8e",
                },
            }}
        >
            <GitHubBanner />
            <Refine
                auditLogProvider={auditLogProvider}
                dataProvider={dataProvider(supabaseClient)}
                liveProvider={liveProvider(supabaseClient)}
                legacyAuthProvider={authProvider}
                accessControlProvider={accessControlProvider}
                legacyRouterProvider={{
                    ...routerProvider,
                    routes: [
                        {
                            path: "/forgot-password",
                            element: <AuthPage type="forgotPassword" />,
                        },
                        {
                            path: "/update-password",
                            element: <AuthPage type="updatePassword" />,
                        },
                    ],
                }}
                resources={[
                    {
                        name: "users",
                        list: UserList,
                    },
                    {
                        name: "canvases",
                        list: CanvasList,
                    },
                ]}
                LoginPage={() => (
                    <AuthPage
                        type="login"
                        formProps={{
                            initialValues: {
                                email: "info@refine.dev",
                                password: "refine-supabase",
                            },
                        }}
                        registerLink={false}
                    />
                )}
                notificationProvider={notificationProvider}
                ReadyPage={ReadyPage}
                catchAll={<ErrorComponent />}
                Layout={Layout}
                Title={Title}
            />
        </ConfigProvider>
    );
}

export default App;
