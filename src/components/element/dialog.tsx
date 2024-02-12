import React, {
    Fragment,
} from "react";
import {DialogProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Dialog = (props: DialogProps) => {
    const {
        element: _,
        open = true,
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...dialogProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <dialog
                {...dialogProps}
                open={open}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </dialog>
        </Fragment>
    );
};
