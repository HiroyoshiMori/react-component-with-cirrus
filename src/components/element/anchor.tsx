import React, {
    Fragment,
} from "react";
import {AProps} from "../@types";
import {convertDataSet} from "../common";

export const Anchor = (props: AProps) => {
    const {
        element: elementType = 'a',
        inline,
        children,
        ping,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <a
                {...restProps}
                ping={ping?.join(', ')}
            >
                {children}
            </a>
        </Fragment>
    );
};
