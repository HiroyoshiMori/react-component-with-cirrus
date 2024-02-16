import {Fragment} from "react";
import {Container} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;strong&gt; HTML element indicates that its contents have strong importance, seriousness, or
 * urgency. Browsers typically renders the contents in bold type.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong
 */
export default {
    title: 'React Component/Element/Container/Inline/Strong',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Media or Image Source element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                This is <Story /> which I'd like to emphasize.
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;strong&gt;',
            table: {
                type: {
                    summary: '"strong"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        inline: {
            control: 'none',
            type: {
                require: true,
            },
            description: 'Switcher for <code>Container</code> component to render inline element',
            table: {
                type: {
                    summary: 'true',
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
/** Default strong */
export const Default = {
    render: (args: any) => <Container
        element={'strong'}
        inline={true}
        {...args}
    >
        keyword
    </Container>,
};
/** Strong with style classes */
export const StrongWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Strong with additional attributes */
export const StrongWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Strong Label',
            'aria-placeholder': 'Strong Placeholder',
        },
    },
};
/** Strong with datasets */
export const StrongWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-strong-id'],
            ['name', 'Data Strong Name'],
        ]),
    },
};
