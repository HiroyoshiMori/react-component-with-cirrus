import React, {
    Fragment,
} from "react";
import {OutputProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Output = (props: OutputProps) => {
    const {
        element: _,
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...outputProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <output
                {...outputProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </output>
        </Fragment>
    );
};
