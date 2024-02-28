import {action} from "@storybook/addon-actions";
import {
    AUTOCOMPLETES,
    Input,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * &lt;input&gt; elements of type <code>tel</code> are used to let the user enter and edit a telephone number. Unlike
 * &lt;input type="email"&gt; and &lt;input type="url&gt;, the input value is not automatically validated to a
 * particular format before the form can be submitted, because formats for telephone numbers vary so much around
 * the world.
 *
 * See; https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/tel
 */
export default {
    title: 'React Component/Element/Input/Tel',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - tel',
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
            description: 'Switcher for <code>Input</code> component to render tel',
            table: {
                type: {
                    summary: '"tel"',
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
            control: 'text',
            description: 'Specifies value when initialized',
            table: {
                type: {
                    summary: 'string|number',
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
        maxLength: {
            control: {type: 'number', min: 0},
            description: 'Maximum string length (measured in UTF-16 code units) that the user can enter into '
                + 'the email input',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        minLength: {
            control: {type: 'number', min: 0},
            description: 'Minimum string length (measured in UTF-16 code units) that the user can enter into '
                + 'the email input',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        pattern: {
            control: 'text',
            description: 'Specified a regular expression that input\'s value must match for the value to pass '
                + 'constraint validation.',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
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
        size: {
            control: {type: 'number', min: 1},
            description: 'Indicates how many characters wide the input field should be',
            table: {
                type: {
                    summary: 'number',
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
/** Default tel */
export const Default = {
    render: (args: any) => <Input
        type={'tel'}
        placeholder={'Please input phone number'}
        onChange={action('tel changed')}
        {...args}
    />,
};
/** Tel with default value */
export const TelWithDefaultValue = {
    ...Default,
    args: {
        defaultValue: '1234-5678-9012',
    },
};
/** Tel with datalist */
export const TelWithDatalist = {
    ...Default,
    args: {
        datalist: ['1234-5678-9012', '1234-5678-9013'],
    },
};
/** Tel with list and datalist */
export const TelWithListAndDatalist = {
    ...Default,
    args: {
        list: 'tel-list',
        datalist: ['1234-5678-9012', '1234-5678-9013'],
    },
};
/** Tel with min/max length */
export const TelWithMinMaxLength = {
    ...Default,
    args: {
        minLength: 10,
        maxLength: 20,
    },
};
/** Tel with pattern */
export const TelWithPattern = {
    ...Default,
    args: {
        pattern: '(\\+?[0-9]{2,}-?)([0-9-]+)',
    },
};
/** Tel readonly */
export const TelReadOnly = {
    ...Default,
    args: {
        defaultValue: '1234-5678-9012',
        readOnly: true,
    },
};
/** Tel required */
export const TelRequired = {
    ...Default,
    args: {
        required: true,
    },
};
/** Tel with size */
export const TelWithSize = {
    ...Default,
    args: {
        size: 30,
    },
};
/** Tel with style classes */
export const TelWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Tel with additional attributes */
export const TelWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Tel Label',
            'aria-placeholder': 'Tel Placeholder',
        },
    },
};
/** Tel with datasets */
export const TelWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-tel-id'],
            ['name', 'Data Tel Name'],
        ]),
    },
};
