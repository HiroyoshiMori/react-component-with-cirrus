import React, {
    Fragment,
} from "react";
import {
    ParagraphProps,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";

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
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </p>
        </Fragment>
    );
};
