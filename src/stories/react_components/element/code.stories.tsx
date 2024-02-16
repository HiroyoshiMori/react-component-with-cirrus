import {
    Code,
} from "../../../components";
import {deIndent} from "../../../utils";

/**
 * The &lt;code&gt; HTML element displays its contents styled in a fashion intended to indicate that
 * the text is a short fragment of computer code.
 * By default, the content text is displayed using the user agent's default monospace font.
 */
export default {
    title: 'React Component/Element/Code',
    component: Code,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The inline Code element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Code</code> component to render &lt;code&gt;',
            table: {
                type: {
                    summary: '"code"',
                },
                defaultValue: {
                    summary: 'undefined',
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
        children: {
            control: 'object',
            description: 'Content of element',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        'data-lang': {
            control: 'text',
            description: 'Specify the language of the code block',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        dark: {
            control: 'boolean',
            description: 'Dark background',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        inline: {
            control: 'boolean',
            description: 'Display code within a paragraph',
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
                    summary: 'HTMLAttributes<HTMLElement>',
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
/** Default code */
export const Default = {
    render: (args: any) => <Code
        {...args}
    >
        console.log('hello');
    </Code>,
};
/** Code with data-lang */
export const CodeWithDataLang = {
    ...Default,
    args: {
        'data-lang': 'Javascript',
    },
};
/** Code in dark */
export const CodeInDark = {
    ...Default,
    args: {
        dark: true,
    },
};
/** Code inline */
export const CodeInline = {
    ...Default,
    args: {
        inline: true,
    },
};
/** Code with style classes */
export const CodeWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Code with additional attributes */
export const CodeWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Code Label',
            'aria-placeholder': 'Code Placeholder',
        },
    },
};
/** Code with datasets */
export const CodeWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'code-data-id'],
            ['name', 'Code Data Name'],
        ]),
    },
};
