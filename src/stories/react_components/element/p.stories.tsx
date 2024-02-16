import {
    Paragraph,
} from "../../../components";
import {deIndent} from "../../../utils";

/**
 * The &lt;p&gt; HTML element represents a paragraph.
 * Paragraphs are usually represented in visual media as blocks of text separated from adjacent
 * blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural
 * grouping of related content, such as images or form fields
 */
export default {
    title: 'React Component/Element/Paragraph/Paragraph',
    component: Paragraph,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Paragraph element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Paragraph</code> component to render &lt;p&gt;',
            table: {
                type: {
                    summary: '"p"|"paragraph"',
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
            }
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
                    summary: 'HTMLAttributes<HTMLParagraphElement>',
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
/** Default paragraph */
export const Default = {
    render: (args: any) => <Paragraph
        {...args}
    >
        This is sample sentence.<br />
        This is sample sentence.<br />
    </Paragraph>
}
/** Paragraph with style classes */
export const ParagraphWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Paragraph with additional attributes */
export const ParagraphWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Paragraph Label',
            'aria-placeholder': 'Paragraph Placeholder',
        },
    },
};
/** Paragraph with datasets */
export const ParagraphWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'paragraph-data-id'],
            ['name', 'Paragraph Data Name'],
        ]),
    },
};
