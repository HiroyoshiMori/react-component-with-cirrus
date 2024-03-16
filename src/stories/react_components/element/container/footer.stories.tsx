import {
    Container,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;footer&gt; HTML element represents a footer for its nearest ancestor sectioning content or
 * sectioning root element A &lt;footer&gt; typically contains information about the author of the section,
 * copyright data or links to related documents.
 */
export default {
    title: 'React Component/Element/Container/Block/Footer',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Footer element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;footer&gt;',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: '"footer"',
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
// Default footer property
const DefaultFooterProps = {
    element: 'footer',
};

/** Default footer */
export const Default = {
    render: (args: any) => <Container
        {...DefaultFooterProps}
        {...args}
    >
        This is footer contents.
    </Container>,
};
/** Footer with style classes */
export const FooterWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Footer with additional attributes */
export const FooterWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Footer Label',
            'aria-placeholder': 'Footer Placeholder',
        },
    },
};
/** Footer with datasets */
export const FooterWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'footer-data-id'],
            ['name', 'Footer Data Name'],
        ]),
    },
};
