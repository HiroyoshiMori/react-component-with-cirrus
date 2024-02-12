import React, {
    Fragment,
} from "react";
import {AProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Anchor = (props: AProps) => {
    const {
        element: _,
        children,
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
            <a
                {...restProps}
                ping={Array.isArray(ping) ? ping?.join(' ') : undefined}
                rel={Array.isArray(rel) ? rel?.join(' ') : undefined}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </a>
        </Fragment>
    );
};
