import {Fragment} from "react";
import {
    DdProps,
    DlItemProps,
    DtProps,
    ListItemProps,
    OlProps, TypeContainer,
    TypeList
} from "../@types";
import {convertDataSet, joinClasses} from "../common";
import {getElement, getCssFramework} from "../index";

export const List = <T extends TypeContainer | string = string>(props: TypeList<T>) => {
    const {
        element: Tag = 'ul',
        items: _,
        noDefaultClass = false,
        commonClassesInItem = [] as string[],
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
        const styleClasses = !noDefaultClass ? getCssFramework().getDefaultStyleClass(
            'list', Tag, (props as OlProps).type
        ) : [];
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
                                        Array.isArray(itemList) && itemList.length > 0 && itemList.map(
                                            (item: DlItemProps, idx: number) => {
                                                const dtItems = Array.isArray(item[0])
                                                    ? item[0] : [item[0]];
                                                const ddItems = Array.isArray(item[1])
                                                    ? item[1] : [item[1]];
                                                dtItems.forEach((dtItem: DtProps, idx: number) => {
                                                    dtItems[idx].classes = Array.isArray(commonClassesInItem)
                                                        ? Array.isArray(dtItem.classes)
                                                            ? commonClassesInItem.concat(dtItem.classes)
                                                            : commonClassesInItem
                                                        : dtItem.classes;
                                                });
                                                ddItems.forEach((ddItem: DdProps, idx: number) => {
                                                    ddItems[idx].classes = Array.isArray(commonClassesInItem)
                                                        ? Array.isArray(ddItem.classes)
                                                            ? commonClassesInItem.concat(ddItem.classes)
                                                            : commonClassesInItem
                                                        : ddItem.classes;
                                                });

                                                return (
                                                    <Fragment key={idx}>
                                                        <DlItemList {...[dtItems, ddItems]} />
                                                    </Fragment>
                                                );
                                            }
                                        )
                                    }
                                </Fragment>
                            );
                        } else {
                            const itemList = items as ListItemProps[];
                            return (
                                <Fragment>
                                    {
                                        Array.isArray(itemList) && itemList.length > 0 && itemList.map(
                                            (item: ListItemProps, idx: number) => {
                                                item.classes = Array.isArray(commonClassesInItem)
                                                    ? Array.isArray(item.classes)
                                                        ? commonClassesInItem.concat(item.classes)
                                                        : commonClassesInItem
                                                    : item.classes;
                                                return (
                                                    <Fragment key={idx}>
                                                        <ListItem<T> {...item} />
                                                    </Fragment>
                                                );
                                            }
                                        )
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

export const ListItem = <T extends TypeContainer | string = string>(props: ListItemProps<T>) => {
    const {
        element: ItemTag = 'li',
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
            <ItemTag
                {...itemProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {
                    children && (typeof children === 'object') && Object.hasOwn(children, 'element')
                        ? function (items: T) {
                            const Component = getElement(items);
                            // @ts-ignore
                            return (<Component {...items} />);
                        }(children as T) : (
                            <Fragment>{children}</Fragment>
                        )
                }
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
