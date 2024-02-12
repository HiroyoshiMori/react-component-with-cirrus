import {Fragment} from "react";
import {
    Option,
} from "../../../../components";

export default {
    component: Option,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The HTML Option element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <select>
                    <option>--- Please selection option ---</option>
                    <Story />
                </select>
            </Fragment>
        ),
    ],
};
/** Default option */
export const Default = {
    render: (args: any) => <Option
        name={'option_name'}
        {...args}
    >
        This is Option
    </Option>,
};
/** Option with Value */
export const OptionWithValue = {
    ...Default,
    args: {
        value: 'option_value',
    },
};
/** Option with label */
export const OptionWithLabel = {
    ...Default,
    args: {
        label: 'Option Label',
    },
};
/** Option selected */
export const OptionSelected = {
    ...Default,
    args: {
        selected: true,
    },
};
/** Option disabled */
export const OptionDisabled = {
    ...Default,
    args: {
        disabled: true,
    },
};
/** Option with style classes */
export const OptionWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Option with additional attributes */
export const OptionWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Option Label',
            'aria-placeholder': 'Option Placeholder',
        },
    },
};
/** Option with datasets */
export const OptionWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-option-id'],
            ['name', 'Data Option Name'],
        ]),
    },
};
