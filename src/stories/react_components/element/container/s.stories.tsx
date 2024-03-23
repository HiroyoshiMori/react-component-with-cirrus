import {
    Container, SProps,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;s&gt; HTML element renders text with a strikethrough, or a line through it. Use the &lt;s&gt; element
 * to represent things that are no longer relevant or no longer accurate. However, &lt;s&gt; is not appropriate
 * when indicating document edits; for that, use the &lt;del&gt; and &lt;ins&gt; element, as appropriate.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s
 */
export default {
    title: 'React Component/Element/Container/Inline/S',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Strikethrough element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;s&gt;',
            table: {
                type: {
                    summary: '"s"',
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
            description: 'Content of component',
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
/** Default strikethrough */
export const Default = {
    render: (args: any) => <Container<SProps>
        element={'s'}
        {...args}
    >
        This is strikethrough content.
    </Container>
};
/** Strikethrough with style classes */
export const StrikethroughWIthStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Strikethrough with additional attributes */
export const StrikethroughWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Strikethrough Label',
            'aria-placeholder': 'Strikethrough Placeholder',
        },
    },
};
/** Strikethrough with datasets */
export const StrikethroughWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-s-id'],
            ['name', 'Data Strikethrough Name'],
        ]),
    },
};
