import React, {
    Fragment,
} from "react";
import {
    FormInputProps,
    InputAttributes,
    InputClasses,
    InputDatasets,
} from "../@types";
import {
    Input,
    Label,
} from "../element";
import {
    initialize,
    initializeDatasets,
} from "../common";
import {
    generateId,
    mergeDatasets,
    mergeHtmlAttributes,
    mergeStyleClasses,
} from "../../utils";

export const FormInput = (props: FormInputProps) => {
    const {
        label,
        inputProps,
        footnotes,
    } = props;

    // Initialize
    const classes = initialize(
        props['classes'] as InputClasses, [
            'div', 'label', 'input', 'footnotes',
        ], [], (k) => {
            let defaultValue;
            switch (k) {
                case 'footnotes': defaultValue = ['info']; break;
            }
            return defaultValue;
        });
    const attributes = initialize(
        props['attributes'] as InputAttributes, [
            'div', 'label', 'input', 'footnotes',
        ], {}
    );
    const {datasets, datasetShown} = initializeDatasets(
        props['datasets'] as InputDatasets, [
            'div', 'label', 'input', 'footnotes',
        ], new Map()
    );
    if (props.inputProps.id === undefined) {
        props.inputProps.id = generateId();
    }
    props.inputProps.classes = mergeStyleClasses(
        classes.input, props.inputProps.classes
    );
    props.inputProps.attributes = mergeHtmlAttributes(
        attributes.input, props.inputProps.attributes
    );
    props.inputProps.datasets = mergeDatasets(
        datasets.input, props.inputProps.datasets
    );

    return (
        <Fragment>
            <div
                className={classes.div?.join(' ')}
                {...attributes.div}
                {...datasetShown.div}
            >
                { label && (
                    <Label
                        htmlFor={props.inputProps.id}
                        className={classes.label?.join(' ')}
                        {...attributes.label}
                        {...datasetShown.label}
                    >
                        {label}
                    </Label>
                )}
                { inputProps && (
                    <Input
                        {...inputProps}
                    />
                )}
                { footnotes && (
                    <span
                        className={classes.footnotes?.join(' ')}
                        {...attributes.footnotes}
                        {...datasetShown.footnotes}
                    >
                        {footnotes}
                    </span>
                )}
            </div>
        </Fragment>
    );
};
