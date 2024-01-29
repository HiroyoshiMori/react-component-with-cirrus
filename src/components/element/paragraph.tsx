import React, {
    Fragment,
} from "react";
import {
    PProps,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Paragraph = (props: PProps) => {
    const {
        element: elementType = 'p',
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    const datasetShown = convertDataSet(datasets);
    return (
        <Fragment>
            <p
                {...restProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </p>
        </Fragment>
    );
};
