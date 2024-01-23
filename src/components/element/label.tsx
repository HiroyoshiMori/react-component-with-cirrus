import React, {
    Fragment,
} from "react";
import {
    LabelProps,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Label = (props: LabelProps) => {
    const {
        children,
        htmlFor,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <label
                htmlFor={htmlFor}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </label>
        </Fragment>
    );
};
