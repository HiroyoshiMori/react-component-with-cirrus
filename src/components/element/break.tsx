import React, {
    Fragment,
} from "react";
import {
    BreakProps,
} from "../@types";
import {
    convertDataSet,
} from "../../utils";

export const Break = (props: BreakProps) => {
    const {
        element,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    const Tag = element;
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <Tag
                className={classes.join(' ')}
                {...attributes}
                {...datasetShown}
            />
        </Fragment>
    );
};
