import {Fragment} from "react";
import {
    Meta,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;meta&gt; HTML element represents metadata that cannot be represented by other HTML meta-related
 * elements, like &lt;base&gt;, &lt;link&gt;, &lt;script&gt;, &ltlstyle&gt; or &lt;title&gt;.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
 */
export default {
    title: 'React Component/Element/Meta/Meta',
    component: Meta,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The metadata element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                There is Meta &#x1f449;
                <Story />
                &#x1f448; element.
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Meta</code> component to render &lt;meta&gt;',
            table: {
                type: {
                    summary: 'meta',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        itemProp: {
            control: 'none',
            type: {
                required: true,
            },
            description: 'Make this element flow content',
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
        charSet: {
            control: 'text',
            description: 'Declares the document\'s character encoding',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        content: {
            control: 'text',
            description: 'Contains the value for the http-equiv or name attributes, depending on which is used',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        httpEquiv: {
            control: 'select',
            options: [
                'Default',
                'content-security-policy', 'content-type', 'default-style',
                'x-ua-compatible', 'refresh',
            ],
            mapping: {
                Default: undefined,
            },
            description: 'Defines a pragma directive',
            table: {
                type: {
                    summary: 'content-security-policy|content-type|default-style|x-ua-compatible|refresh',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        name: {
            control: 'text',
            description: 'Provide document metadata in terms of name-value pairs',
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
                    summary: 'MetaHTMLAttributes<HTMLMetaElement>',
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
/** Default meta */
export const Default = {
    render: (args: any) => <Meta
        element={'meta'}
        itemProp={true}
        charSet={'UTF-8'}
        {...args}
    />,
};
/** Meta with http-equiv/content */
export const MetaWithHttpEquivAndContent = {
    ...Default,
    args: {
        httpEquiv: 'content-type',
        content: 'text/html',
    },
};
/** Meta with name */
export const MetaWithName = {
    ...Default,
    args: {
        name: 'test-meta',
    },
};
/** Meta with style classes */
export const MetaWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Meta with additional attributes */
export const MetaWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Meta Label',
            'aria-placeholder': 'Meta Placeholder',
        },
    },
};
/** Meta with datasets */
export const MetaWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-meta-id'],
            ['name', 'Data Meta Name'],
        ]),
    },
};
