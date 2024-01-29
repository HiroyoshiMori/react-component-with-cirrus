import React, {
    Fragment,
} from "react";
import {OptionProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Option = (props: OptionProps) => {
    const {
        value,
        label,
        children,
        selected = false,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <option
                {...restProps}
                value={value ?? children}
                label={label ?? value ?? children}
                selected={selected}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </option>
        </Fragment>
    );
};
