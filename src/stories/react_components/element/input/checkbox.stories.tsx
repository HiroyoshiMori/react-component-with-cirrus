import React, {Fragment} from "react";
import {action} from "@storybook/addon-actions";
import {
    Input,
    Label,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * &lt;input&gt; elements of type <code>checkbox</code> area rendered by default as boxes that are checked (ticked) when
 * activated, like you might see in an official government paper form. The exact appearance depends upon the operating
 * system configuration under which the browser is running. Generally this is a square but it may have rounded corners.
 * A checkbox allows you to select single values for submission in a form (or not).
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
 */
export default {
    title: 'React Component/Element/Input/Checkbox',
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
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Input</code> component to render &lt;input&gt;',
            table: {
                type: {
                    summary: 'input',
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
            description: 'Switcher for <code>Input</code> component to render checkbox',
            table: {
                type: {
                    summary: 'checkbox',
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
        checked: {
            control: 'boolean',
            description: 'Indicates checked when initialized',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        required: {
            control: 'boolean',
            description: 'Indicates value of the element must be submitted',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        onChange: {
            action: 'changed',
            description: 'Function called when value is changed',
            table: {
                type: {
                    summary: 'function',
                    detail: '(e: React.ChangeEvent<HTMLInputElement>) => void',
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
// Default checkbox
const DefaultInput = {
    element: 'input',
    type: 'checkbox',
    id: 'checkbox',
    name: 'input_checkbox',
    value: 'checkbox1',
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
