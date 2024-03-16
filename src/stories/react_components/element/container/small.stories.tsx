import {Fragment} from "react";
import {
    Break,
    Container,
    Paragraph,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;small&gt; HTML element represents side-comments and small print, like copyright and legal text,
 * independent of its styled presentation. By default, it renders text within it one font-size smaller,
 * such as from <code>small</code> to <code>x-small</code>.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small
 */
export default {
    title: 'React Component/Element/Container/Inline/Small',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The side comment element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Paragraph element={'p'}>
                    This is test component.
                </Paragraph>
                <Break element={'hr'} />
                <Paragraph element={'p'}>
                    <Story />
                </Paragraph>
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;small&gt;',
            table: {
                type: {
                    summary: '"small"',
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
/** Default small */
export const Default = {
    render: (args: any) => <Container
        element={'small'}
        {...args}
    >
        The small content is here.
    </Container>,
};
/** Small with style classes */
export const SmallWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Small with additional attributes */
export const SmallWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Small Label',
            'aria-placeholder': 'Small Placeholder',
        },
    },
};
/** Small with datasets */
export const SmallWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-small-id'],
            ['name', 'Data Small Name'],
        ]),
    },
};
