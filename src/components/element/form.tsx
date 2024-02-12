import React, {
    Fragment,
} from "react";
import {FormProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Form = (props: FormProps) => {
    const {
        element: _,
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...formProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <form
                {...formProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </form>
        </Fragment>
    );
};
