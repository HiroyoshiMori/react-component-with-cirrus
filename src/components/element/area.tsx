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
        ping,
        rel,
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
                coords={
                    Array.isArray(coords) ? coords?.map(
                        (coordinates) => Array.isArray(coordinates)
                            ? coordinates.join(',')
                            : coordinates
                    ).join(',') : undefined
                }
                ping={Array.isArray(ping) ? ping?.join(' ') : undefined}
                rel={Array.isArray(rel) ? rel?.join(' ') : undefined}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            />
        </Fragment>
    );
};
