import {Container} from "../../../../components";
import {Fragment} from "react";
import {deIndent} from "../../../../utils";

/**
 * The &lt;sub&gt; HTML element specifies inline text which should be displayed as subscript for solely
 * typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sub
 */
export default {
    title: 'React Component/Element/Container/Inline/Sub',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Subscript element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                H<Story>2</Story>O is water.
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;sub&gt;',
            table: {
                type: {
                    summary: '"sub"',
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
/** Default Subscript */
export const Default = {
    render: (args: any) => <Container
        element={'sub'}
        inline={true}
        {...args}
    >
        2
    </Container>
};
/** Subscript with style classes */
export const SubscriptWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Subscript with additional attributes */
export const SubscriptWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Subscript Label',
            'aria-placeholder': 'Subscript Placeholder',
        },
    },
};
/** Subscript with datasets */
export const SubscriptWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-sub-id'],
            ['name', 'Data Subscript Name'],
        ]),
    },
};
