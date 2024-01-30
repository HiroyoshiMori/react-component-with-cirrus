import React, {
    Fragment,
} from "react";
import {LinkProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Link = (props: LinkProps) => {
    const {
        element: elementType = 'link',
        itemProp,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...linkProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <link
                {...linkProps}
                itemProp={''}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            />
        </Fragment>
    );
};
