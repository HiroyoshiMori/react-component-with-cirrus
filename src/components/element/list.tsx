import React, {
    Fragment,
} from "react";
import {DdProps, DtProps, LiProps, ScriptProps, TemplateProps, TypeList} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const List = (props: TypeList) => {
    const {
        element: Tag = 'ul',
        items = [],
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...itemProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <Tag
                {...itemProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {
                    items && function() {
                        if (Tag === 'dl') {
                            const itemList = items as [DtProps|DtProps[], DdProps|DdProps[]][];
                            return (
                                <Fragment>
                                    {
                                        itemList.length > 0 && itemList.map((item: [DtProps|DtProps[], DdProps|DdProps[]], idx: number) => {
                                            return (
                                                <Fragment key={idx}>
                                                    <DlItemList {...item} />
                                                </Fragment>
                                            );
                                        })
                                    }
                                </Fragment>
                            );
                        } else {
                            const itemList = items as (LiProps | ScriptProps | TemplateProps)[];
                            return (
                                <Fragment>
                                    {
                                        itemList.length > 0 && itemList.map((item: LiProps|ScriptProps|TemplateProps, idx: number) => (
                                            <Fragment key={idx}>
                                                <ListItem {...item} />
                                            </Fragment>
                                        ))
                                    }
                                </Fragment>
                            );
                        }
                    }()
                }
            </Tag>
        </Fragment>
    );
};

const ListItem = (props: LiProps|ScriptProps|TemplateProps) => {
    const {
        element: ItemTag = 'li',
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...itemProps
    } = props;
    const datasetShown = convertDataSet(datasets);
    return (
        <Fragment>
            <ItemTag
                {...itemProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </ItemTag>
        </Fragment>
    );
};

const DlItemList = (props: [DtProps|DtProps[], DdProps|DdProps[]]) => {
    const [dtItem, ddItem] = props;

    return (
        <Fragment>
            <DItem {...dtItem} element={'dt'} />
            <DItem {...ddItem} element={'dd'} />
        </Fragment>
    )
};
const DItem = (
    props: (DtProps | DtProps[] | DdProps | DdProps[]),
    element: 'dt'|'dd'
) => {
    if (Array.isArray(props)) {
        return (
            <Fragment>
                {
                    props.length > 0 && props.map((item, idx: number) => {
                        const {
                            children,
                            ...dtItemProps
                        } = item;
                        return (
                            <Fragment key={idx}>
                                <Item
                                    {...dtItemProps}
                                    element={element}
                                >
                                    {children}
                                </Item>
                            </Fragment>
                        );
                    })
                }
            </Fragment>
        );
    } else {
        const {
            children,
            ...dtItemProps
        } = props;
        return (
            <Fragment>
                <Item
                    {...dtItemProps}
                    element={element}
                >
                    {children}
                </Item>
            </Fragment>
        );
    }
};
const Item = (props: DtProps | DdProps) => {
    const {
        element: Tag = 'dd',
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...itemProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <Tag
                {...itemProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </Tag>
        </Fragment>
    );
};
