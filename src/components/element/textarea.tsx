import React, {
    Fragment,
} from "react";
import {
    TextareaProps,
} from "../@types";
import {
    convertDataSet,
} from "../../utils";

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
                className={classes.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </textarea>
        </Fragment>
    );
};
