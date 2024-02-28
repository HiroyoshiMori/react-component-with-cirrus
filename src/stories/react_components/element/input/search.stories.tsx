import {
    AUTOCOMPLETES,
    Input,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * &lt;input&gt; elements of type <code>search</code> are text fields designed for the user to enter search queries
 * into. These are functionally identical to text inputs, but may be styled differently by the user agent.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search
 */
export default {
    title: 'React Component/Element/Input/Search',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - search',
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
            description: 'Switcher for <code>Input</code> component to render search',
            table: {
                type: {
                    summary: '"search"',
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
/** Default search */
export const Default = {
    render: (args: any) => <Input
        type={'search'}
        placeholder={'Input search keyword...'}
        {...args}
    />,
};
/** Search with dir */
export const SearchWithDir = {
    ...Default,
    args: {
        dir: 'auto',
        dirname: 'test-dirname',
    },
};
/** Search with datalist */
export const SearchWithDatalist = {
    ...Default,
    args: {
        datalist: ['keyword 1', 'keyword 2', 'keyword 3'],
    },
};
/** Search with list and datalist */
export const SearchWithListAndDatalist = {
    ...Default,
    args: {
        list: 'search-list',
        datalist: ['Keyword 1', 'Keyword 2', 'Keyword 3'],
    },
};
/** Search with min/max length */
export const SearchWithMinMaxLength = {
    ...Default,
    args: {
        minLength: 3,
        maxLength: 30,
    },
};
/** Search with pattern */
export const SearchWithPattern = {
    ...Default,
    args: {
        pattern: '[0-9a-zA-Z]+',
    },
};
/** Search with readonly */
export const SearchWithReadonly = {
    ...Default,
    args: {
        defaultValue: 'Test Keyword',
        readOnly: true,
    },
};
/** Search with required */
export const SearchWithRequired = {
    ...Default,
    args: {
        required: true,
    },
};
/** Search with style classes */
export const SearchWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Search with additional attributes */
export const SearchWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Search Label',
            'aria-placeholder': 'Search Placeholder',
        },
    },
};
/** Search with datasets */
export const SearchWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-search-id'],
            ['name', 'Data Search Name'],
        ]),
    },
};
