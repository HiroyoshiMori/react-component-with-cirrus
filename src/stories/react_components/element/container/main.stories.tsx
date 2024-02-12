import {
    Container,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;main&gt; HTML element represents the document content of the &lt;body&gt; of a document.
 * The main content area consists that is directly related to or expands upon the central topic of
 * a document, or the central functionality of an application.
 */
export default {
    title: 'React Component/Element/Container/Block/Main',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Main element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;main&gt;',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: '"main"',
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
// Default main property
const DefaultMainProps = {
    element: 'main',
    inline: false,
};

/** Default main */
export const Default = {
    render: (args: any) => <Container
        {...DefaultMainProps}
        {...args}
    >
        This is main contents of this document.
    </Container>,
};
/** Main with style classes */
export const MainWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Main with additional attributes */
export const MainWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Main Label',
            'aria-placeholder': 'Main Placeholder',
        },
    },
};
/** Main with datasets */
export const MainWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'main-data-id'],
            ['name', 'Main Data Name'],
        ]),
    },
};
