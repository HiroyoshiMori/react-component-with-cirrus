import React, {
    Fragment,
} from "react";
import {AreaProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Area = (props: AreaProps) => {
    const {
        element: _,
        alt,
        coords,
        ping = [],
        rel = [],
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
                ping={ping.join(' ')}
                rel={rel.join(' ')}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            />
        </Fragment>
    );
};
