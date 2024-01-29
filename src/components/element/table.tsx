import React, {
    Fragment,
} from "react";
import {
    TableProps, TbodyProps, TheadRowProps, TrProps,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Table = (props: TableProps) => {
    const {
        element: elementType = 'table',
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
                    caption && function() {
                        const {
                            element: elementType = 'caption',
                            children,
                            classes = [],
                            attributes = {},
                            datasets = new Map(),
                            ...itemProps
                        } = caption;
                        const datasetShown = convertDataSet(datasets);
                        return (
                            <Fragment>
                                <caption
                                    {...itemProps}
                                    className={joinClasses(classes)}
                                    {...attributes}
                                    {...datasetShown}
                                >
                                    {children}
                                </caption>
                            </Fragment>
                        );
                    }()
                }
                {
                    colgroup && colgroup.length > 0 && colgroup.map((colgrp, idx: number) => {
                        const {
                            element: elementType = 'colgroup',
                            span,
                            cols = [],
                            classes = [],
                            attributes = {},
                            datasets = new Map(),
                            ...itemProps
                        } = colgrp;
                        return (
                            <Fragment key={idx}>
                                <colgroup
                                    {...itemProps}
                                    span={span}
                                    className={joinClasses(classes)}
                                    {...attributes}
                                    {...datasetShown}
                                >
                                    {
                                        cols && cols.length > 0 && cols.map((col, idx: number) => {
                                            const {
                                                element: elementType = 'col',
                                                span,
                                                classes = [],
                                                attributes = {},
                                                datasets = new Map(),
                                                ...colsProps
                                            } = col;
                                            return (
                                                <Fragment key={idx}>
                                                    <col
                                                        {...colsProps}
                                                        span={span}
                                                        className={joinClasses(classes)}
                                                        {...attributes}
                                                        {...datasetShown}
                                                    />
                                                </Fragment>
                                            );
                                        })
                                    }
                                </colgroup>
                            </Fragment>
                        );
                    })
                }
                {
                    thead && function() {
                        const {
                            element: elementType = 'thead',
                            rows = [],
                            classes = [],
                            attributes = {},
                            datasets = new Map(),
                            ...itemProps
                        } = thead;
                        const datasetShown = convertDataSet(datasets);
                        return (
                            <Fragment>
                                <thead
                                    {...itemProps}
                                    className={joinClasses(classes)}
                                    {...attributes}
                                    {...datasetShown}
                                >
                                {
                                    rows && rows.length > 0 && rows.map((row, idx: number) => (
                                        <TableRow key={idx} {...row} />
                                    ))
                                }
                                </thead>
                            </Fragment>
                        );
                    }()
                }
                <Tbody {...tbody} />
                {
                    tfoot && function() {
                        const {
                            element: elementType = 'tfoot',
                            rows = [],
                            classes = [],
                            attributes = {},
                            datasets = new Map(),
                            ...itemProps
                        } = tfoot;
                        const datasetShown = convertDataSet(datasets);
                        return (
                            <Fragment>
                                <tfoot
                                    {...itemProps}
                                    className={joinClasses(classes)}
                                    {...attributes}
                                    {...datasetShown}
                                >
                                {
                                    rows && rows.length > 0 && rows.map((row, idx: number) => (
                                        <TableRow key={idx} {...row} />
                                    ))
                                }
                                </tfoot>
                            </Fragment>
                        );
                    }()
                }
            </table>
        </Fragment>
    )
};

const TableRow = (props: TrProps | TheadRowProps) => {
    const {
        element: elementType = 'tr',
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
                    cells && cells.length > 0 && cells.map((cell, idx: number) => {
                        const {
                            element: Tag = 'td',
                            children,
                            classes = [],
                            attributes = {},
                            datasets = new Map(),
                            ...cellProps
                        } = cell;
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

const Tbody = (props: TbodyProps[] | TrProps | TrProps[]) => {
    if (Array.isArray(props)) {
        return props && props.length > 0 && props.map((row, idx: number) => {
            const isTbody = Object.hasOwn(row, 'rows');
            if (isTbody) {
                const {
                    element: elementType = 'tbody',
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
                            rows && rows.length > 0 && rows.map((data, idx: number) => (
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
        });
    } else {
        return (
            <TableRow
                {...(props as TrProps)}
            />
        );
    }
};
