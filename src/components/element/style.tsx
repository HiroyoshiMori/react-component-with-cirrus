import {
    Fragment,
} from "react";
import {StyleProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";
import {sprintf} from "sprintf-js";

export const Style = (props: StyleProps) => {
    const {
        element: _,
        scoped,
        children,
        mediaQuery = [],
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...styleProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);
    const media = (mediaQuery && Array.isArray(mediaQuery) && mediaQuery.length > 0)
        ? sprintf('(%s)', mediaQuery.join(') and ('))
        : undefined;

    return (
        <Fragment>
            <style
                {...styleProps}
                scoped={true}
                media={media}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </style>
        </Fragment>
    );
};
