import {Fragment} from "react";
import {Style} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;style&gt; HTML element contains style information for a document, or part of a document.
 * It contains CSS, which is applied to the contents of the document containing the &lt;style&gt; element.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style
 */
export default {
    title: 'React Component/Element/Meta/Style',
    component: Style,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Style Information element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                There is style &#x1f449;
                <Story />
                &#x1f448; element.
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Style</code> component to render &lt;style&gt;',
            table: {
                type: {
                    summary: '"style"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        scoped: {
            control: 'none',
            type: {
                required: true,
            },
            description: 'Indicate element as scoped',
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
            description: 'Content of this element',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        mediaQuery: {
            control: 'object',
            description: 'Defines which media the style should be applied to',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        nonce: {
            control: 'text',
            description: 'A cryptographic nonce (humber used once) used to allow inline styles in '
                        + 'a style-src Content-Security-Policy',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        title: {
            control: 'text',
            description: 'Specifies alternative stylesheet sets',
            table: {
                type: {
                    summary: 'string',
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
                    summary: 'StyleHTMLAttributes<HTMLStyleElement>',
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
/** Default style */
export const Default = {
    render: (args: any) => <Style
        element={'style'}
        scoped={true}
        {...args}
    >{`
        .test-class1 {
            font-size: 1rem;
        }
    `}</Style>,
};
/** Style with media query */
export const StyleWithMediaQuery = {
    ...Default,
    args: {
        mediaQuery: ['min-width: 600px', 'max-width: 1280px'],
    },
};
/** Style with title */
export const StyleWithTitle = {
    ...Default,
    args: {
        title: 'Style Sheet Test',
    },
};
/** Style with nonce */
export const StyleWithNonce = {
    ...Default,
    args: {
        nonce: 'TEST CSP TOKEN',
    },
};
/** Style with style classes */
export const StyleWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Style with additional attributes */
export const StyleWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Style Label',
            'aria-placeholder': 'Style Placeholder',
        },
    },
};
/** Style with datasets */
export const StyleWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-style-id'],
            ['name', 'Data Style Name'],
        ]),
    },
};
