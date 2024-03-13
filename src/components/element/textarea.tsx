import {
    Fragment,
} from "react";
import {
    TextareaProps,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Textarea = (props: TextareaProps) => {
    const {
        element: _,
        cols,
        rows,
        maxLength,
        minLength,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <textarea
                {...restProps}
                cols={cols && cols > 1 ? cols : undefined}
                rows={rows && rows > 1 ? rows : undefined}
                maxLength={maxLength && maxLength > 0 ? maxLength : undefined}
                minLength={minLength && minLength > 0 ? minLength : undefined}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            />
        </Fragment>
    );
};
