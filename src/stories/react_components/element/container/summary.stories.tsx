import {Fragment} from "react";
import {
    Container, SummaryProps,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;summary&gt; HTML element specifies a summary, caption, or legend for a &lt;details&gt; element's
 * disclosure box. Clicking the &lt;summary&gt; element toggles the state of the parent &lt;details&gt; element
 * open and closed.
 */
export default {
    title: 'React Component/Element/Container/Block/Summary',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Disclosure Summary element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <details>
                    <Story />
                    This is details content.
                </details>
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;summary&gt;',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: '"summary"',
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
// Default summary property
const DefaultSummaryProps = {
    element: 'summary',
};

/** Default summary */
export const Default = {
    render: (args: any) => <Container<SummaryProps>
        {...DefaultSummaryProps}
        {...args}
    >
        This is summary.
    </Container>,
};
/** Summary with style classes */
export const SummaryWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Summary with additional attributes */
export const SummaryWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Summary Label',
            'aria-placeholder': 'Summary Placeholder',
        },
    },
};
/** Summary with datasets */
export const SummaryWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'summary-data-id'],
            ['name', 'Summary Data Name'],
        ]),
    },
};
