import {action} from "@storybook/addon-actions";
import {
    AUTOCOMPLETES,
    Input,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * &lt;input&gt; elements of type <code>url</code> are used to let the user enter and edit a URL.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url
 */
export default {
    title: 'React Component/Element/Input/Url',
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
            description: 'Switcher for <code>Input</code> component to render url',
            table: {
                type: {
                    summary: '"url"',
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
/** Default URL */
export const Default = {
    render: (args: any) => <Input
        type={'url'}
        placeholder={'Please input URL...'}
        onChange={action('URL changed')}
        {...args}
    />,
};
/** URL with datalist */
export const UrlWithDatalist = {
    ...Default,
    args: {
        datalist: ['http://www1.example.com', 'http://www2.example.com'],
    },
};
/** URL with list and datalist */
export const UrlWithListAndDatalist = {
    ...Default,
    args: {
        list: 'url-id',
        datalist: ['http://www3,example.com', 'http://www4.example.com'],
    },
};
/** URL with min/max length */
export const UrlWithMinMaxLength = {
    ...Default,
    args: {
        minLength: 5,
        maxLength: 50,
    },
};
/** URL with pattern */
export const UrlWithPattern = {
    ...Default,
    args: {
        pattern: 'https?:\\/\\/.+',
    },
};
/** URL readonly */
export const UrlReadOnly = {
    ...Default,
    args: {
        defaultValue: 'http://www.example.com',
        readOnly: true,
    },
};
/** URL required */
export const UrlRequired = {
    ...Default,
    args: {
        required: true,
    },
};
/** URL with spell check */
export const UrlWithSpellCheck = {
    ...Default,
    args: {
        spellCheck: "true",
    },
};
/** URL with style classes */
export const UrlWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** URL with additional attributes */
export const UrlWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'URL Label',
            'aria-placeholder': 'URL Placeholder',
        },
    },
};
/** URL with datasets */
export const UrlWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-url-id'],
            ['name', 'Data URL Name'],
        ]),
    },
};
