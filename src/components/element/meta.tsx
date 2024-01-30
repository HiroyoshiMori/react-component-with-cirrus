import React, {
    Fragment,
} from "react";
import {MetaProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Meta = (props: MetaProps) => {
    const {
        element: elementType = 'meta',
        itemProp,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...metaProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <meta
                {...metaProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            />
        </Fragment>
    );
};
