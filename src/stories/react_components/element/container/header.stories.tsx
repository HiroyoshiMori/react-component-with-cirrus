import {
    Container, HeaderProps,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;header&gt; HTML element represents introductory content, typically a group of introductory or
 * navigational aids. It may contain some heading elements but also a logo, a search form, an author name,
 * and other elements.
 */
export default {
    title: 'React Component/Element/Container/Block/Header',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Header element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;header&gt;',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: '"header"',
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
// Default header property
const DefaultHeaderProps = {
    element: 'header',
};

/** Default header */
export const Default = {
    render: (args: any) => <Container<HeaderProps>
        {...DefaultHeaderProps}
        {...args}
    >
        This is header contents.
    </Container>,
};
/** Header with style classes */
export const HeaderWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Header with additional attributes */
export const HeaderWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Header Label',
            'aria-placeholder': 'Header Placeholder',
        },
    },
};
/** Header with datasets */
export const HeaderWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'header-data-id'],
            ['name', 'Header Data Name'],
        ]),
    },
};
