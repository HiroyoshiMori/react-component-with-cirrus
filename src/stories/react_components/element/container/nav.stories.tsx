import {
    Container,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;nav&gt; HTML element represents a section of a page whose purpose is to provide navigation links,
 * either within the current document or to the other documents. Common examples of navigation sections are
 * menus, tables of contents, and indexes.
 */
export default {
    title: 'React Component/Element/Container/Block/Nav',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Navigation Section element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;nav&gt;',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: '"nav"',
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
// Default navigation property
const DefaultNavProps = {
    element: 'nav',
};

// TODO: Later use Menu component to render menus in Nav
/** Default navigation */
export const Default = {
    render: (args: any) => <Container
        {...DefaultNavProps}
        {...args}
    >
        This is navigation contents.
    </Container>,
};
/** Navigation with style classes */
export const NavWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Navigation with additional attributes */
export const NavWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Navigation Label',
            'aria-placeholder': 'Navigation Placeholder',
        },
    },
};
/** Navigation with datasets */
export const NavWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'nav-data-id'],
            ['name', 'Navigation Data Name'],
        ]),
    },
};
