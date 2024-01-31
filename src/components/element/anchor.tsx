import React, {
    Fragment,
} from "react";
import {AProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Anchor = (props: AProps) => {
    const {
        element: elementType = 'a',
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
                ping={ping?.join(' ')}
                rel={rel?.join(' ')}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </a>
        </Fragment>
    );
};
