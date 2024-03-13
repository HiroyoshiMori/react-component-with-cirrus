import {
    Fragment,
} from "react";
import {OptionProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Option = (props: OptionProps) => {
    const {
        element: _,
        value,
        label,
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
            <option
                {...restProps}
                value={value ?? children}
                label={label ?? (children ? undefined : value)}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </option>
        </Fragment>
    );
};
