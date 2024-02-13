import {Fragment} from "react";
import {
    Script,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;script&gt; HTML element is used to embed executable code or data; this is typically used to
 * embed or refer to JavaScript code.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
 */
export default {
    title: 'React Component/Element/Meta/Script',
    component: Script,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Script element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                There is script &#x1f449;
                <Story />
                &#x1f448; element.
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Script</code> component to render &lt;script&gt;',
            table: {
                type: {
                    summary: 'script',
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
            control: 'text',
            description: 'Script code',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        async: {
            control: 'boolean',
            description: 'Indicate that the classic script will be fetched in parallel to parsing and '
                        + 'evaluated as soon as it is available',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        crossOrigin: {
            control: 'select',
            options: [
                'Default', 'anonymous', 'use-credentials',
            ],
            mapping: {
                Default: undefined,
            },
            description: 'Indicates whether CORS must be used when fetching the resource.',
            table: {
                type: {
                    summary: 'anonymous|use-credentials',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        defer: {
            control: 'boolean',
            description: 'Indicate to a browser that the script is meant to be executed after the document has been parsed',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        fetchpriority: {
            control: 'select',
            options: ['Default', 'high', 'low', 'auto'],
            mapping: {
                Default: undefined,
            },
            description: 'A hint of the relative priority to use when fetching a preloaded resource',
            table: {
                type: {
                    summary: 'high|low|auto',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        integrity: {
            control: 'text',
            description: 'A base64-encoded cryptographic hash of the resource (file) you\'re telling the browser to fetch',
            table: {
                type: {
                    summary: 'string',
                    detail: 'openssl dgst -sha384 -binary __FILE_PATH__ | openssl base64 -A'
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        noModule: {
            control: 'boolean',
            description: 'Indicate that the script should not be executed in browsers that support ES modules',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        referrerPolicy: {
            control: 'select',
            options: [
                'Default',
                'no-referrer', 'no-referrer-when-downgrade',
                'origin', 'origin-when-cross-origin', 'unsafe-url',
            ],
            mapping: {
                Default: undefined,
            },
            description: 'Indicates which referrer to use when fetching the resource',
            table: {
                type: {
                    summary: 'no-referrer|no-referrer-when-downgrade|origin|origin-when-cross-origin|unsafe-url',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        src: {
            control: 'text',
            description: 'Specifies the URI of an external script; this can be used as an alternative to '
                        + 'embedding a script directly within a document',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        type: {
            control: 'text',
            description: 'Indicates the type of script represented',
            table: {
                type: {
                    summary: 'string',
                },
                description: {
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
                    summary: 'ScriptHTMLAttributes<HTMLScriptElement>',
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
/** Default script */
export const Default = {
    render: (args: any) => <Script
        element={'script'}
        type={'text/javascript'}
        {...args}
    >
        console.log('This is message shown in console window.');
    </Script>,
};
/** Script with Async */
export const ScriptWithAsync = {
    ...Default,
    args: {
        async: true,
    },
};
/** Script with src/integrity */
export const ScriptWithSrcAndIntegrity = {
    ...Default,
    args: {
        src: '/assets/test.js',
        // openssl dgst -sha384 -binary /assets/test.js | openssl base64 -A
        integrity: 'sha384-MglQDwQHgBUybYG7BXgdYYCX6CRBfGUCCi0M/bu35dBDINHb77EIr7ShNMbSpcdf',
    },
};
/** Script with other attributes */
export const ScriptWithOtherAttributes = {
    ...Default,
    args: {
        crossOrigin: '*',
        defer: true,
        fetchpriority: 'low',
        noModule: true,
        referrerPolicy: 'no-referrer',
    },
};
/** Script with style classes */
export const ScriptWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Script with additional attributes */
export const ScriptWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Script Label',
            'aria-placeholder': 'Script Placeholder',
        },
    },
};
/** Script with datasets */
export const ScriptWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-script-id'],
            ['name', 'Data Script Name'],
        ]),
    },
};
