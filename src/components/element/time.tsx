import React, {
    Fragment,
} from "react";
import {
    TimeProps,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Time = (props: TimeProps) => {
    const {
        children,
        dateTime,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    // Initialize
    // TODO: Add datetime pattern later
    // see: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time#usage_notes
    // ... code here

    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <time
                dateTime={dateTime}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </time>
        </Fragment>
    );
};
