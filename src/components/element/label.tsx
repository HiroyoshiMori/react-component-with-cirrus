import {
    Fragment,
} from "react";
import {
    LabelProps,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Label = (props: LabelProps) => {
    const {
        element: _,
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <label
                {...restProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </label>
        </Fragment>
    );
};
