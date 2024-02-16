import {action} from "@storybook/addon-actions";
import {
    AUTOCOMPLETES,
    Input,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * &lt;input&gt; elements of type <code>text</code> create basic single-line text fields.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text
 */
export default {
    title: 'React Component/Element/Input/Text',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - text',
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
            description: 'Switcher for <code>Input</code> component to render text',
            table: {
                type: {
                    summary: '"text"',
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
        dir: {
            control: 'select',
            options: ['Default', 'auto', 'ltr', 'rtl'],
            mapping: {
                Default: undefined,
            },
            description: 'Indicates the directionality of the element\'s text',
            table: {
                type: {
                    summary: '"auto" | "ltr" | "rtl"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        dirname: {
            control: 'text',
            description: 'The name of form field to use for sending the element\'s directionality in form submission',
            table: {
                type: {
                    summary: 'string',
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
        spellCheck: {
            control: 'radio',
            options: ['Default', 'true', 'false', ''],
            mapping: {
                Default: undefined,
            },
            description: 'Indicates whether to enable spell checking for an element.',
            table: {
                type: {
                    summary: '"true"|"false"|""',
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
/** Default text */
export const Default = {
    render: (args: any) => <Input
        type={'text'}
        placeholder={'Please input text...'}
        onChange={action('text changed')}
        {...args}
    />,
};
/** Text with dir */
export const TextWithDir = {
    ...Default,
    args: {
        dir: 'ltr',
        dirname: 'text-dir',
    },
};
/** Text with datalist */
export const TextWithDatalist = {
    ...Default,
    args: {
        datalist: ['Test 1', 'Test 2', 'Test 3'],
    },
};
/** Text with list/datalist */
export const TextWithListAndDatalist = {
    ...Default,
    args: {
        list: 'text-list',
        datalist: ['TestList 1', 'TestList 2', 'TestList 3'],
    },
};
/** Text with min/max length */
export const TextWithMinMaxLength = {
    ...Default,
    args: {
        minLength: 3,
        maxLength: 20,
    },
};
/** Text with pattern */
export const TextWithPattern = {
    ...Default,
    args: {
        pattern: 'test-[0-9A-Za-z]+',
    },
};
/** Text readonly */
export const TextReadOnly = {
    ...Default,
    args: {
        defaultValue: 'Test Keyword',
        readOnly: true,
    },
};
/** Text required */
export const TextRequired = {
    ...Default,
    args: {
        required: true,
    },
};
/** Text with size */
export const TextWithSize = {
    ...Default,
    args: {
        size: 30,
    },
};
/** Text with style classes */
export const TextWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Text with additional attributes */
export const TextWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Text Label',
            'aria-placeholder': 'Text Placeholder',
        },
    },
};
/** Text with datasets */
export const TextWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-text-id'],
            ['name', 'Data Text Name'],
        ]),
    },
};
