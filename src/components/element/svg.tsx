import React, {
    Fragment,
} from "react";
import {SvgProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Svg = (props: SvgProps) => {
    const {
        element: _,
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...svgProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <svg
                {...svgProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </svg>
        </Fragment>
    );
};
