import {
    AUTOCOMPLETES,
    Input,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * &lt;input&gt; elements of type <code>password</code> provide a way for the user to securely enter a password.
 *
 * The element is presented as a one-line plain text editor control in which the text is obscured so that it cannot
 * be read, usually by replacing each character with a symbol such as the asterisk ("*") or a dot ("•").
 * This character will vary depending on the user agent and operating system.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/password
 */
export default {
    title: 'React Component/Element/Input/Password',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - password',
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
            description: 'Switcher for <code>Input</code> component to render password',
            table: {
                type: {
                    summary: '"password"',
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
                    summary: 'string | number | boolean',
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
    }
};
/** Default password */
export const Default = {
    render: (args: any) => <Input
        type={'password'}
        {...args}
    />,
};
/** Password with placeholder */
export const PasswordWithPlaceholder = {
    ...Default,
    args: {
        placeholder: 'Please input password...',
    },
};
/** Password readonly */
export const PasswordReadonly = {
    ...Default,
    args: {
        defaultValue: 'TESTPASSWORD',
        readOnly: true,
    },
};
/** Password required */
export const PasswordRequired = {
    ...Default,
    args: {
        required: true,
    },
};
/** Password with other attributes */
export const PasswordWithOtherAttributes = {
    ...Default,
    args: {
        maxLength: 30,
        minLength: 10,
        pattern: '[0-9a-fA-F]{10,30}',
        size: 20,
    },
};
/** Password with style classes */
export const PasswordWithStyleCLasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Password with additional attributes */
export const PasswordWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Password Label',
            'aria-placeholder': 'Password Placeholder',
        },
    },
};
/** Password with datasets */
export const PasswordWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-password-id'],
            ['name', 'Data Password Name'],
        ]),
    },
};
