import React, {
    Fragment,
} from "react";
import {
    getCssFramework,
    LabelledRadioProps,
} from "../index";
import {Input, Label} from "../element";
import {generateId, reactNodeToString} from "../../utils";
import {initialize} from "../common";

export const LabelledRadio = (props: LabelledRadioProps) => {
    const {
        children,
        radio: radioProps,
        currentValue,
        noDefaultClass = false,
        ...labelProps
    } = props;

    // Initialize
    if (radioProps?.id === undefined) {
        radioProps.id = labelProps.htmlFor ?? generateId();
        labelProps.htmlFor = radioProps.id;
    }
    if (radioProps?.value === undefined) {
        radioProps.value = reactNodeToString(children);
    }
    const labelClasses = initialize(
        labelProps?.classes, [],
        !noDefaultClass ? getCssFramework().getDefaultStyleClass(
            'labelled-radio', 'label', 'radio'
        ) : []
    );
    const inputClasses = initialize(
        radioProps?.classes, [],
        !noDefaultClass ? getCssFramework().getDefaultStyleClass(
            'labelled-radio', 'input', 'radio'
        ) : []
    );
    const checked = currentValue
        ? radioProps?.value
            ? currentValue === radioProps.value
            : currentValue === reactNodeToString(children)
        : undefined

    return (
        <Fragment>
            <Label
                {...labelProps}
                classes={labelClasses}
            >
                <Input
                    {...radioProps}
                    type={'radio'}
                    checked={checked}
                    classes={inputClasses}
                />
                {typeof children === 'string' ? <Fragment>&nbsp;{children}</Fragment> : children}
            </Label>
        </Fragment>
    );
};
