import {Fragment} from "react";
import {ProgressProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Progress = (props: ProgressProps) => {
    const {
        element: _,
        children,
        max: maxValue,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <progress
                {...restProps}
                max={maxValue}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </progress>
        </Fragment>
    );
};
