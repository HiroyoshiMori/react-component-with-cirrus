import {
    Fragment,
} from "react";
import {
    FigureAttributes,
    FigureClasses, FigureDatasets,
    FigureProps,
} from "../@types";
import {convertDataSet, initialize, initializeDatasets, joinClasses} from "../common";

export const Figure = (props: FigureProps) => {
    const {
        label,
        labelPosition = 'first',
        children,
    } = props;

    // Initialize
    const classes = initialize(
        props['classes'] as FigureClasses, [
            'figure', 'caption',
        ], []
    )
    const attributes = initialize(
        props['attributes'] as FigureAttributes, [
            'figure', 'caption',
        ], {}
    )
    const {datasets, datasetShown} = initializeDatasets(
        props['datasets'] as FigureDatasets, [
            'figure', 'caption',
        ], new Map()
    );

    return (
        <Fragment>
            <figure
                className={joinClasses(classes.figure)}
                {...attributes.figure}
                {...datasetShown.figure}
            >
                {
                    label && labelPosition !== 'last' && (
                        <figcaption
                            className={joinClasses(classes.caption)}
                            {...attributes.caption}
                            {...datasetShown.caption}
                        >
                            {label}
                        </figcaption>
                    )
                }
                {children}
                {
                    label && labelPosition === 'last' && (
                        <figcaption
                            className={joinClasses(classes.caption)}
                            {...attributes.caption}
                            {...datasetShown.caption}
                        >
                            {label}
                        </figcaption>
                    )
                }
            </figure>
        </Fragment>
    );
};
