import { IResourceComponentsProps, HttpError } from "@pankod/refine-core";

import { useSimpleList, List, useModalForm } from "@pankod/refine-antd";

import { List as AntdList } from "antd";

import { ICompany } from "interfaces";
import { CompanyItem, CreateCompany, EditCompany } from "components/company";

export const CompanyList: React.FC<IResourceComponentsProps> = () => {
    const { listProps } = useSimpleList<ICompany>({
        meta: { populate: ["logo"] },
    });

    const {
        modalProps: createModalProps,
        formProps: createFormProps,
        show: createShow,
    } = useModalForm<ICompany, HttpError, ICompany>({
        action: "create",
        meta: { populate: ["logo"] },
    });

    const {
        modalProps: editModalProps,
        formProps: editFormProps,
        show: editShow,
    } = useModalForm<ICompany, HttpError, ICompany>({
        action: "edit",
        meta: { populate: ["logo"] },
    });

    return (
        <>
            <List
                createButtonProps={{
                    onClick: () => {
                        createShow();
                    },
                }}
            >
                <AntdList
                    grid={{ gutter: 16 }}
                    {...listProps}
                    renderItem={(item) => (
                        <AntdList.Item>
                            <CompanyItem item={item} editShow={editShow} />
                        </AntdList.Item>
                    )}
                />
            </List>
            <CreateCompany
                modalProps={createModalProps}
                formProps={createFormProps}
            />
            <EditCompany
                modalProps={editModalProps}
                formProps={editFormProps}
            />
        </>
    );
};
