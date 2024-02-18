import {Fragment} from "react";
import {ProgressProps} from "../@types";
import {convertDataSet, initialize, joinClasses} from "../common";
import {getCssFramework} from "../index";

export const Progress = (props: ProgressProps) => {
    const {
        element,
        children,
        max: maxValue,
        classes: _,
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    // Initialize
    const classes = initialize(
        props['classes'], [], getCssFramework().getDefaultStyleClass(
            'progress', element,
        )
    );
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
