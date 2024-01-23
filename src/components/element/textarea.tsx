import React, {
    Fragment,
} from "react";
import {
    TextareaProps,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Textarea = (props: TextareaProps) => {
    const {
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <textarea
                {...props}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </textarea>
        </Fragment>
    );
};
