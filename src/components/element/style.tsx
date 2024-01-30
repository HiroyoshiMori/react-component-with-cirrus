import React, {
    Fragment,
} from "react";
import {StyleProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Style = (props: StyleProps) => {
    const {
        element: elementType = 'style',
        scoped,
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...styleProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <style
                {...styleProps}
                scoped={true}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </style>
        </Fragment>
    );
};
