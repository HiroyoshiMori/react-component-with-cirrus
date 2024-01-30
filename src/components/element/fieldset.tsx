import React, {
    Fragment,
} from "react";
import {FieldsetProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";
import {Container} from "./container";

export const Fieldset = (props: FieldsetProps) => {
    const {
        element: elementType = 'fieldset',
        caption,
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...fieldsetProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <fieldset
                {...fieldsetProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {
                    caption && (
                        <Container
                            {...caption}
                            element={'legend'}
                        />
                    )
                }
                {children}
            </fieldset>
        </Fragment>
    )
}