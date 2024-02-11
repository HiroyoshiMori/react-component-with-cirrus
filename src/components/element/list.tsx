import React, {
    Fragment,
} from "react";
import {DdProps, DlItemProps, DtProps, LiProps, OlProps, ScriptProps, TemplateProps, TypeList} from "../@types";
import {convertDataSet, joinClasses} from "../common";
import {getCssFramework} from "../index";

export const List = (props: TypeList) => {
    const {
        element: Tag = 'ul',
        items: _,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...itemProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);
    const items = Array.isArray(props.items)
        ? props.items : [props.items];

    if (Tag === 'ol' && (props as OlProps).type && Array.isArray(classes)) {
        const styleClasses = getCssFramework().getDefaultStyleClass(
            'list', Tag, (props as OlProps).type
        );
        if (styleClasses.length > 0) {
            styleClasses.forEach((style) => {
                if (!classes.includes(style)) {
                    classes.push(style);
                }
            });
        }
    }

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
                            const itemList = items as DlItemProps[];
                            return (
                                <Fragment>
                                    {
                                        Array.isArray(itemList) && itemList.length > 0 && itemList.map((item: DlItemProps, idx: number) => {
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
                                        Array.isArray(itemList) && itemList.length > 0 && itemList.map((item: LiProps|ScriptProps|TemplateProps, idx: number) => (
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

export const ListItem = (props: LiProps|ScriptProps|TemplateProps) => {
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

export const DlItemList = (props: DlItemProps) => {
    const dtItem = props[0];
    const ddItem = props[1];

    return (
        <Fragment>
            <DItem items={dtItem} element={'dt'} />
            <DItem items={ddItem} element={'dd'} />
        </Fragment>
    )
};
export const DItem = (
    props: {
        element: 'dt'|'dd',
        items: DtProps|DtProps[]|DdProps|DdProps[],
    }
) => {
    const {
        element,
        items,
    } = props;
    if (Array.isArray(items)) {
        return (
            <Fragment>
                {
                    items.length > 0 && items.map((item, idx: number) => {
                        const {
                            children,
                            ...itemProps
                        } = item;
                        return (
                            <Fragment key={idx}>
                                <Item
                                    {...itemProps}
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
            ...itemProps
        } = items as DtProps | DdProps;
        return (
            <Fragment>
                <Item
                    {...itemProps}
                    element={element}
                >
                    {children}
                </Item>
            </Fragment>
        );
    }
};
export const Item = (props: DtProps | DdProps) => {
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
