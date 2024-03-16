import {
    Container,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;span&gt; HTML element is a generic inline container for phrasing content,
 * which does not inherently represent anything. It can be used to group elements for
 * styling purposes (using the class or id attributes), or because they share attribute
 * values, such as lang. It should be used only when no other semantic element in appropriate.
 * &lt;span&gt; is very much like a &lt;div&gt; element, but &lt;div&gt; is a block-level
 * element whereas a &lt;span&gt; is an inline-level element.
 */
export default {
    title: 'React Component/Element/Container/Inline/Span',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Content Span element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;span&gt;',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: '"span"',
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
// Default span property
const DefaultSpanProps = {
    element: 'span',
};

/** Default content span */
export const Default = {
    render: (args: any) => <Container
        {...DefaultSpanProps}
        {...args}
    >
        This is content span.
    </Container>,
};
/** Content span with style classes */
export const SpanWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Content span with additional attributes */
export const SpanWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Span Label',
            'aria-placeholder': 'Span Placeholder',
        },
    },
};
/** Content span with datasets */
export const SpanWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'span-data-id'],
            ['name', 'Span Data Name'],
        ]),
    },
};
