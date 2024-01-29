import React, {
    Fragment,
} from "react";
import {AreaProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Area = (props: AreaProps) => {
    const {
        element: elementType = 'area',
        alt,
        coords,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <area
                {...restProps}
                alt={alt}
                coords={coords?.map((coordinates) => coordinates.join(',')).join(',')}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            />
        </Fragment>
    );
};
