import React, {
    Fragment,
} from "react";
import {IframeProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Iframe = (props: IframeProps) => {
    const {
        element: elementType = 'iframe',
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...iframeProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <iframe
                {...iframeProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            ></iframe>
        </Fragment>
    );
};
