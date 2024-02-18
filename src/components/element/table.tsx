import React, {
    Fragment,
} from "react";
import {
    CaptionProps, ColGroupProps, ColProps,
    TableProps, TbodyProps, TdProps, TfootProps, TheadProps, TheadRowProps, ThProps, TrProps,
} from "../@types";
import {convertDataSet, initialize, joinClasses} from "../common";
import {getCssFramework} from "../index";

export const Table = (props: TableProps) => {
    const {
        element,
        caption,
        colgroup,
        thead,
        tfoot,
        tbody,
        noDefaultClass = false,
        classes: _,
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    // Initialize
    const classes = initialize(
        props['classes'], [],
        !noDefaultClass ? getCssFramework().getDefaultStyleClass(
            'table', element
        ) : []
    );
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
                    colgroup && Array.isArray(colgroup) && colgroup.length > 0 && colgroup.map(
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
                {
                    tbody && Array.isArray(tbody) ? tbody.map((tbody: TbodyProps|TrProps, idx: number) => {
                        return (Object.hasOwn(tbody, 'rows'))
                            ? <Tbody key={idx} {...(tbody as TbodyProps)} element={'tbody'} />
                            : <TableRow key={idx} {...(tbody as TrProps)} element={'tr'} />;
                    }) : function() {
                        return (Object.hasOwn(tbody, 'rows'))
                            ? <Tbody {...(tbody as TbodyProps)} element={'tbody'} />
                            : <TableRow {...(tbody as TrProps)} element={'tr'} />;
                    }()
                }
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

export const Tbody = (props: TbodyProps) => {
    const {
        element: _,
        rows = [],
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...TbodyProps
    } = props;

    // initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
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
                    Array.isArray(cells) && cells.length > 0 && cells.map((cell, idx: number) => (
                        <Fragment key={idx}>
                            <TableCell {...cell} />
                        </Fragment>
                    ))
                }
            </tr>
        </Fragment>
    );
};

export const TableCell = (props: ThProps | TdProps) => {
    const {
        element: Tag = 'td',
        children,
        colSpan,
        rowSpan,
        headers = [],
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...cellProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <Tag
                {...cellProps}
                colSpan={colSpan && colSpan > 0 ? colSpan : undefined}
                rowSpan={rowSpan && rowSpan > 0 ? rowSpan : undefined}
                headers={headers && Array.isArray(headers) && headers.length > 0 ? headers.join(' ') : undefined}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </Tag>
        </Fragment>
    );
}
