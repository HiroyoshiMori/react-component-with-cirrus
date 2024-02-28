import {action} from "@storybook/addon-actions";
import {
    AUTOCOMPLETES,
    Input,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * &lt;input&gt; elements of type <code>number</code> are used to let the user enter a number. They include built-in
 * validation to reject non-numerical entries.
 *
 * The browser may opt to provide stepper arrows to let the user increase and decrease the value using their mouse or
 * by tapping with a fingertip.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number
 */
export default {
    title: 'React Component/Element/Input/Number',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - number',
    },
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
            description: 'Switcher for <code>Input</code> component to render number',
            table: {
                type: {
                    summary: '"number"',
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
        defaultValue: {
            control: 'number',
            description: 'Specifies value when initialized',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        autoComplete: {
            control: 'select',
            options: ['Default'].concat(AUTOCOMPLETES),
            mapping: {
                Default: undefined,
            },
            table: {
                type: {
                    summary: '"' + AUTOCOMPLETES.join('"|"') + '"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        list: {
            control: 'string',
            description: 'The id of a &lt;datalist&gt; element located in the same document',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        datalist: {
            control: 'object',
            description: 'A list of predefined values to the user for this input',
            table: {
                type: {
                    summary: 'string[]',
                },
            },
        },
        max: {
            control: 'number',
            description: 'The largest number to accept',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        min: {
            control: 'number',
            description: 'The smallest number to accept',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        step: {
            control: {type: 'number', min: 1},
            description: 'Specifies the granularity that the value must adhere to, or the special value any',
            table: {
                type: {
                    summary: 'number | "any"',
                },
                defaultVale: {
                    summary: 'undefined',
                },
            },
        },
        placeholder: {
            control: 'text',
            description: 'Provides a brief hint to the user as to what kind of information is expected '
                + 'in the field',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        readOnly: {
            control: 'boolean',
            description: 'Indicates that the user cannot modify the value of the control',
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
/** Default number */
export const Default = {
    render: (args: any) => <Input
        type={'number'}
        placeholder={'Please input number'}
        {...args}
    />,
};
/** Number with datalist */
export const NumberWithDatalist = {
    ...Default,
    args: {
        datalist: [1, 10, 100, 1000],
    },
};
/** Number with List and Datalist */
export const NumberWithListAndDatalist = {
    ...Default,
    args: {
        list: 'number-list',
        datalist: [2, 20, 200, 2000],
    },
};
/** Number with min/max */
export const NumberWithMinMax = {
    ...Default,
    args: {
        min: 10,
        max: 20,
    },
};
/** Number with step */
export const NumberWithStep = {
    ...Default,
    args: {
        step: 10,
    },
};
/** Number with readonly */
export const NumberWithReadonly = {
    ...Default,
    args: {
        value: 100,
        readOnly: true,
    },
};
/** Number with required */
export const NumberWithRequired = {
    ...Default,
    args: {
        required: true,
    },
};
/** Number with onChange */
export const NumberWithOnChange = {
    ...Default,
    args: {
        onChange: action('onChange'),
    },
};
/** Number with style classes */
export const NumberWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Number with additional attributes */
export const NumberWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Number Label',
            'aria-placeholder': 'Number Placeholder',
        },
    },
};
/** Number with datasets */
export const NumberWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-number-id'],
            ['name', 'Data Number Name'],
        ]),
    },
};
