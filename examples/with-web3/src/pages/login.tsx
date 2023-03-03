import { useLogin } from "@pankod/refine-core";

import { Layout as AntdLayout, Button, Row, Col } from "antd";
import Icon from "@ant-design/icons";

export const Login: React.FC = () => {
    const { mutate: login, isLoading } = useLogin({
        v3LegacyAuthProviderCompatible: true,
    });

    return (
        <AntdLayout
            style={{
                background: `radial-gradient(50% 50% at 50% 50%, #63386A 0%, #310438 100%)`,
                backgroundSize: "cover",
            }}
        >
            <Row
                justify="center"
                align="middle"
                style={{
                    height: "100vh",
                }}
            >
                <Col xs={22}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "28px",
                        }}
                    >
                        <img src="./refine.svg" alt="Refine" />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button
                            type="primary"
                            size="large"
                            icon={
                                <Icon
                                    component={() => (
                                        <img
                                            alt={"ethereum.png"}
                                            src="./ethereum.png"
                                        />
                                    )}
                                />
                            }
                            loading={isLoading}
                            onClick={() => login({})}
                        >
                            SIGN-IN WITH ETHEREUM
                        </Button>
                    </div>
                </Col>
            </Row>
        </AntdLayout>
    );
};
