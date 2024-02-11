import {
    Container,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;section&gt; HTML element represents a generic standalone section of a document, which doesn't
 * have a more specific semantic element to represent it. Section should always have a heading, with
 * very few exceptions.
 */
export default {
    title: 'React Component/Element/Container/Block/Section',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Generic Section element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;section&gt;',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: '"section"',
                },
            },
        },
        inline: {
            control: 'boolean',
            description: 'Indicate inline-level element',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: 'false',
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
// Default section property
const DefaultSectionProps = {
    element: 'section',
    inline: false,
};

/** Default section */
export const Default = {
    render: (args: any) => <Container
        {...DefaultSectionProps}
        {...args}
    >
        This is generic section contents.
    </Container>,
};
/** Section with style classes */
export const SectionWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Section with additional attributes */
export const SectionWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Section Label',
            'aria-placeholder': 'Section Placeholder',
        },
    },
};
/** Section with datasets */
export const SectionWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'section-data-id'],
            ['name', 'Section Data Name'],
        ]),
    },
};
