import React, {Fragment} from "react";
import {action} from "@storybook/addon-actions";
import {
    Input,
    Label,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * &lt;input&gt; elements of type <code>radio</code> are generally used in radio groups -- collections of radio buttons
 * describing a set of related options.
 *
 * Only one radio button in a given group can be selected at the same time. Radio buttons are typically rendered as a
 * small circles, which are filled or highlighted when selected.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
 */
export default {
    title: 'React Component/Element/Input/Radio',
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
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Input</code> component to render &lt;input&gt;',
            table: {
                type: {
                    summary: '"input"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        type: {
            control: 'none',
            type: {
                required: true,
            },
            description: 'Switcher for <code>Input</code> component to render radio',
            table: {
                type: {
                    summary: '"radio"',
                },
            },
        },
        id: {
            control: 'text',
            description: 'ID for element',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        value: {
            control: 'text',
            description: 'Value to be submitted when this radio is selected',
            table: {
                type: {
                    summary: 'string | number | boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        checked: {
            control: 'boolean',
            description: 'Indicates checked when initialized',
            table: {
                type: {
                    summary: 'boolean'
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        required: {
            control: 'boolean',
            description: 'Specifies that the user must fill in a value before submitting a form',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, treated as []',
                },
            },
        },
        attributes: {
            control: 'object',
            description: 'Additional attributes',
            table: {
                type: {
                    summary: 'InputHTMLAttributes<HTMLInputElement>',
                    detail: deIndent(`
                            e.g.,
                            { 'aria-label': 'This is Label' }
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, treated as {}',
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'Datasets. "data-" is added at the beginning of all keys',
            table: {
                type: {
                    summary: 'Map<string, string>',
                    detail: deIndent(`
                            e.g.,
                            new Map([
                                ['id', 'this-is-id'],
                                ['name', 'This is Name'],
                            ]);
                            => data-id="this-is-id" data-name="This is Name"
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, treated as new Map()'
                },
            },
        },
    },
};
// Default radio
const DefaultInput = {
    element: 'input',
    type: 'radio',
    id: 'radio',
    name: 'input_radio',
    value: 'radio1',
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
