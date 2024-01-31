import React, {
    Fragment,
} from "react";
import {
    TextareaProps,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Textarea = (props: TextareaProps) => {
    const {
        element: _,
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <textarea
                {...restProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </textarea>
        </Fragment>
    );
};
