import React, {
    Fragment,
} from "react";
import {
    DetailsAttributes,
    DetailsClasses, DetailsDatasets,
    DetailsProps,
} from "../@types";
import {initialize, initializeDatasets} from "../common";

export const Details = (props: DetailsProps) => {
    const {
        children,
        open = true,
        summary,
    } = props;

    // Initialize
    const classes = initialize(
        props['classes'] as DetailsClasses, [
            'details', 'summary',
        ], []
    );
    const attributes = initialize(
        props['attributes'] as DetailsAttributes, [
            'details', 'summary',
        ], {}
    );
    const {datasetShown} = initializeDatasets(
        props['datasets'] as DetailsDatasets, [
            'details', 'summary',
        ], new Map()
    );

    return (
        <Fragment>
            <details
                open={open}
                className={classes.details?.join(' ')}
                {...attributes.details}
                {...datasetShown.details}
            >
                { summary && (
                    <Fragment>
                        <summary
                            className={classes.summary?.join(' ')}
                            {...attributes.summary}
                            {...datasetShown.summary}
                        >
                            {summary}
                        </summary>
                    </Fragment>
                )}
                {children}
            </details>
        </Fragment>
    );
};
