import React, {
    Fragment,
} from "react";
import {
    CaptionProps, ColGroupProps, ColProps,
    TableProps, TbodyProps, TfootProps, TheadProps, TheadRowProps, TrProps,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Table = (props: TableProps) => {
    const {
        element: _,
        caption,
        colgroup,
        thead,
        tfoot,
        tbody,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <table
                {...restProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {
                    caption && (
                        <Caption {...caption} />
                    )
                }
                {
                    Array.isArray(colgroup) && colgroup.length > 0 && colgroup.map(
                        (colgroup, idx: number) => (
                            <ColGroup key={idx} {...colgroup} />
                        )
                    )
                }
                {
                    thead && (
                        <THeadFoot
                            {...thead}
                            element={'thead'}
                        />
                    )
                }
                <Tbody {...tbody} />
                {
                    tfoot && (
                        <THeadFoot
                            {...tfoot}
                            element={'tfoot'}
                        />
                    )
                }
            </table>
        </Fragment>
    )
};

export const Caption = (props: CaptionProps) => {
    const {
        element: _,
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...captionProps
    } = props;
    const datasetShown = convertDataSet(datasets);
    return (
        <Fragment>
            <caption
                {...captionProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </caption>
        </Fragment>
    );
};

export const ColGroup = (props: ColGroupProps) => {
    const {
        element: _,
        span,
        cols = [],
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...colGroupProps
    } = props;
    const datasetShown = convertDataSet(datasets);
    return (
        <Fragment>
            <colgroup
                {...colGroupProps}
                span={span}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {
                    Array.isArray(cols) && cols.length > 0 && cols.map(
                        (col, idx: number) => <Col key={idx} {...col} />
                    )
                }
            </colgroup>
        </Fragment>
    );
};

export const Col = (props: ColProps) => {
    const {
        element: _,
        span,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...colsProps
    } = props;
    const datasetShown = convertDataSet(datasets);
    return (
        <Fragment>
            <col
                {...colsProps}
                span={span}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            />
        </Fragment>
    );
};

export const THeadFoot = (props: TheadProps | TfootProps) => {
    const {
        element: Tag,
        rows = [],
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...itemProps
    } = props;
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
                Array.isArray(rows) && rows.length > 0 && rows.map((row, idx: number) => (
                    <TableRow key={idx} {...row} />
                ))
            }
            </Tag>
        </Fragment>
    );
};

export const Tbody = (props: TbodyProps[] | TrProps | TrProps[]) => {
    if (Array.isArray(props)) {
        return (
            <Fragment>
                {
                    props.map((row, idx: number) => {
                        const isTbody = Object.hasOwn(row, 'rows');
                        if (isTbody) {
                            const {
                                element: _,
                                rows = [],
                                classes = [],
                                attributes = {},
                                datasets = new Map(),
                                ...TbodyProps
                            } = row as TbodyProps;
                            const datasetShown = convertDataSet(datasets);
                            return (
                                <Fragment key={idx}>
                                    <tbody
                                        {...TbodyProps}
                                        className={joinClasses(classes)}
                                        {...attributes}
                                        {...datasetShown}
                                    >
                                    {
                                        Array.isArray(rows) && rows.length > 0 && rows.map((data, idx: number) => (
                                            <Fragment key={idx}>
                                                <TableRow
                                                    {...data}
                                                />
                                            </Fragment>
                                        ))
                                    }
                                    </tbody>
                                </Fragment>
                            );
                        } else {
                            return (
                                <TableRow key={idx}
                                          {...row as TrProps}
                                />
                            );
                        }
                    })
                }
            </Fragment>
        );
    } else {
        return (
            <TableRow
                {...(props as TrProps)}
            />
        );
    }
};

export const TableRow = (props: TrProps | TheadRowProps) => {
    const {
        element: _,
        cells = [],
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <tr
                {...restProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {
                    Array.isArray(cells) && cells.length > 0 && cells.map((cell, idx: number) => {
                        const {
                            element: Tag = 'td',
                            children,
                            classes = [],
                            attributes = {},
                            datasets = new Map(),
                            ...cellProps
                        } = cell;
                        const datasetShown = convertDataSet(datasets);
                        return (
                            <Fragment key={idx}>
                                <Tag
                                    {...cellProps}
                                    className={joinClasses(classes)}
                                    {...attributes}
                                    {...datasetShown}
                                >
                                    {children}
                                </Tag>
                            </Fragment>
                        );
                    })
                }
            </tr>
        </Fragment>
    );
};
