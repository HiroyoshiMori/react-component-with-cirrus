import React, {
    Fragment,
} from "react";
import {
    FigcaptionProps,
    FigureProps,
} from "../@types";
import {
    convertDataSet,
    joinClasses,
} from "../common";

export const Figure = (props: FigureProps) => {
    const {
        element: _,
        caption,
        captionPosition = 'first',
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
            <figure
                {...restProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {
                    caption && captionPosition !== 'last'  ? (
                        <FigCaption {...caption} />
                    ) : <Fragment />
                }
                {children}
                {
                    caption && captionPosition === 'last' ? (
                        <FigCaption {...caption} />
                    ) : <Fragment />
                }
            </figure>
        </Fragment>
    );
};

export const FigCaption = (props: FigcaptionProps) => {
    const {
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restCaptionProps
    } = props;
    const datasetShown = convertDataSet(datasets);
    return (
        <figcaption
            {...restCaptionProps}
            className={joinClasses(classes)}
            {...attributes}
            {...datasetShown}
        >
            {children}
        </figcaption>
    );
};
