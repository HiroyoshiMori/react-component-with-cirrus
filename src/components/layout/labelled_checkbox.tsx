import React, {
    Fragment,
} from "react";
import {
    getCssFramework,
    LabelledCheckboxProps,
} from "../index";
import {Input, Label} from "../element";
import {generateId, reactNodeToString} from "../../utils";
import {initialize} from "../common";

export const LabelledCheckbox = (props: LabelledCheckboxProps) => {
    const {
        children,
        checkbox: checkboxProps,
        currentValues,
        noDefaultClass = false,
        ...labelProps
    } = props;

    // Initialize
    if (checkboxProps?.id === undefined) {
        checkboxProps.id = labelProps.htmlFor ?? generateId();
        labelProps.htmlFor = checkboxProps.id;
    }
    if (checkboxProps?.value === undefined) {
        checkboxProps.value = reactNodeToString(children);
    }
    const labelClasses = initialize(
        labelProps?.classes, [],
        !noDefaultClass ? getCssFramework().getDefaultStyleClass(
            'labelled-checkbox', 'label', 'checkbox'
        ) : []
    );
    const inputClasses = initialize(
        checkboxProps?.classes, [],
        !noDefaultClass ? getCssFramework().getDefaultStyleClass(
            'labelled-checkbox', 'input', 'checkbox'
        ) : []
    );
    const checked = currentValues
        ? checkboxProps?.value
            ? currentValues.includes(checkboxProps.value)
            : currentValues.includes(reactNodeToString(children))
        : undefined

    return (
        <Fragment>
            <Label
                {...labelProps}
                classes={labelClasses}
            >
                <Input
                    {...checkboxProps}
                    type={'checkbox'}
                    checked={checked}
                    classes={inputClasses}
                />
                {typeof children === 'string' ? <Fragment>&nbsp;{children}</Fragment> : children}
            </Label>
        </Fragment>
    );
};
