import React, {
    Fragment,
} from "react";
import {FormProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Form = (props: FormProps) => {
    const {
        element: _,
        children,
        acceptCharset: charsets = [],
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...formProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);
    const acceptCharset = charsets && Array.isArray(charsets)
        ? charsets.join(' ') : undefined;

    return (
        <Fragment>
            <form
                {...formProps}
                acceptCharset={acceptCharset}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </form>
        </Fragment>
    );
};
