import { Refine } from "@pankod/refine-core";
import {
    Layout,
    ErrorComponent,
    ReadyPage,
    notificationProvider,
    LightTheme,
} from "@pankod/refine-mantine";
import { NotificationsProvider } from "@mantine/notifications";
import { MantineProvider, Global } from "@mantine/core";
import { MantineInferencer } from "@pankod/refine-inferencer/mantine";
import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6/legacy";

const App: React.FC = () => {
    return (
        <MantineProvider theme={LightTheme} withNormalizeCSS withGlobalStyles>
            <Global styles={{ body: { WebkitFontSmoothing: "auto" } }} />
            <NotificationsProvider position="top-right">
                <Refine
                    legacyRouterProvider={routerProvider}
                    dataProvider={dataProvider(
                        "https://api.fake-rest.refine.dev",
                    )}
                    notificationProvider={notificationProvider}
                    ReadyPage={ReadyPage}
                    catchAll={<ErrorComponent />}
                    Layout={Layout}
                    resources={[
                        {
                            name: "samples",
                            list: MantineInferencer,
                            edit: MantineInferencer,
                            show: MantineInferencer,
                            create: MantineInferencer,
                            canDelete: true,
                        },
                        {
                            name: "categories",
                            list: MantineInferencer,
                            edit: MantineInferencer,
                            show: MantineInferencer,
                            create: MantineInferencer,
                            canDelete: true,
                        },
                        {
                            name: "users",
                            list: MantineInferencer,
                            edit: MantineInferencer,
                            show: MantineInferencer,
                            create: MantineInferencer,
                            canDelete: true,
                        },
                    ]}
                />
            </NotificationsProvider>
        </MantineProvider>
    );
};

export default App;
