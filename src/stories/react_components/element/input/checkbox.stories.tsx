import React, {Fragment} from "react";
import {action} from "@storybook/addon-actions";
import {
    Input,
    Label,
} from "../../../../components";

export default {
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - checkbox',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Label
                    htmlFor={'checkbox'}
                >
                    <Story />
                    Checkbox
                </Label>
            </Fragment>
        ),
    ],
};
// Default checkbox
const DefaultInput = {
    element: 'input',
    type: 'checkbox',
    id: 'checkbox',
    name: 'input_checkbox',
    onChanged: action('checkbox changed'),
};

/** Default checkbox */
export const Default = {
    render: (args: any) => <Input
        {...DefaultInput}
        {...args}
    />,
};
/** Checked checkbox */
export const CheckboxChecked = {
    ...Default,
    args: {
        checked: true,
    },
};
/** Required checkbox */
export const CheckboxRequired = {
    ...Default,
    args: {
        required: true,
    },
};
/** Checkbox with style classes */
export const CheckboxWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Checkbox with additional attributes */
export const CheckboxWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Checkbox Label',
            'aria-placeholder': 'Checkbox Placeholder',
        },
    },
};
/** Checkbox with datasets */
export const CheckboxWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-checkbox-id'],
            ['name', 'Data Checbox Name'],
        ]),
    },
};
