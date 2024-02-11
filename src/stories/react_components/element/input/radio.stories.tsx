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
        componentSubtitle: 'The Input (Form Input) element - radio',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Label
                    htmlFor={'radio'}
                >
                    <Story />
                    Radio
                </Label>
            </Fragment>
        ),
    ],
};
// Default radio
const DefaultInput = {
    element: 'input',
    type: 'radio',
    id: 'radio',
    name: 'input_radio',
    onChange: action('radio changed'),
};
/** Default radio */
export const Default = {
    render: (args: any) => <Input
        {...DefaultInput}
        {...args}
    />,
};
/** Checked radio */
export const RadioChecked = {
    ...Default,
    args: {
        checked: true,
    },
};
/** Required radio */
export const RadioRequired = {
    ...Default,
    args: {
        required: true,
    },
};
/** Radio with style classes */
export const RadioWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Radio with additional attributes */
export const RadioWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Radio Label',
            'aria-placeholder': 'Radio Placeholder',
        },
    },
};
/** Radio with datasets */
export const RadioWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-radio-id'],
            ['name', 'Data Radio Name'],
        ]),
    },
};
