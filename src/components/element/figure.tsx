import React, {
    Fragment,
} from "react";
import {
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
                    caption && captionPosition !== 'last' && function() {
                        const {
                            children,
                            classes = [],
                            attributes = {},
                            datasets = new Map(),
                            ...restCaptionProps
                        } = caption;
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
                    }()
                }
                {children}
                {
                    caption && captionPosition === 'last' && function() {
                        const {
                            children,
                            classes = [],
                            attributes = {},
                            datasets = new Map(),
                            ...restCaptionProps
                        } = caption;
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
                    }()
                }
            </figure>
        </Fragment>
    );
};
