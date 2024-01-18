import React, {
    Fragment,
} from "react";
import {
    ParagraphProps,
} from "../@types";
import {convertDataSet} from "../../utils";

export const Paragraph = (props: ParagraphProps) => {
    const {
        id,
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    const datasetShown = convertDataSet(datasets);
    return (
        <Fragment>
            <p
                id={id}
                className={classes.join(' ')}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </p>
        </Fragment>
    );
};
