import {
    Container, PreProps,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;pre&gt; HTML element represents preformatted text which is to be presented exactly as written
 * in the HTML file. The text is typically rendered using a non-proportional, or monospaced, font.
 * Whitespace inside this element is displayed as written.
 * By default, &lt;pre&gt; is a block-level element.
 */
export default {
    title: 'React Component/Element/Container/Block/Pre',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Preformatted Text element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;pre&gt;',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: '"pre"',
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
// Default pre property
const DefaultPreProps = {
    element: 'pre',
};

/** Default preformatted text */
export const Default = {
    render: (args: any) => <Container<PreProps>
        {...DefaultPreProps}
        {...args}
    >
        This is preformatted text contents.{"\n"}
        This sentence has         some repeated whitespaces.
    </Container>,
};
/** Preformatted text with style classes */
export const PreWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Preformatted text with additional attributes */
export const PreWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Preformatted Label',
            'aria-placeholder': 'Preformatted Placeholder',
        },
    },
};
/** Preformatted text with datasets */
export const PreWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'pre-data-id'],
            ['name', 'Preformatted Data Name'],
        ]),
    },
};
