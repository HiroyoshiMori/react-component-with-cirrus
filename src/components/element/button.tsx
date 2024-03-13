import {
    Fragment,
} from "react";
import {
    ButtonProps,
} from "../@types";
import {convertDataSet, initialize, joinClasses} from "../common";
import {getCssFramework} from "../index";

export const Button = (props: ButtonProps) => {
    const {
        element = 'button',
        children,
        onClick,
        noDefaultClass = false,
        classes: _classes,
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);
    const classes = initialize(
        props['classes'], [],
        !noDefaultClass
            ? getCssFramework().getDefaultStyleClass('button', element)
            : []
    );

    return (
        <Fragment>
            <button
                {...restProps}
                onClick={onClick}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </button>
        </Fragment>
    );
};
