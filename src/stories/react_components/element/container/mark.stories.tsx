import {Fragment} from "react";
import {
    Container,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;mark&gt; HTML element represents text which is <b>marked</b> or <b>highlighted</b> for reference or notation
 * purposes due to the marked passenger's relevance in the enclosing context.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark
 */
export default {
    title: 'React Component/Element/Container/Inline/Mark',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Mark Text element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                This sentence has <Story /> words.
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;mark&gt;',
            table: {
                type: {
                    summary: '"mark"',
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
/** Default mark */
export const Default = {
    render: (args: any) => <Container
        element={'mark'}
        {...args}
    >
        MARKED
    </Container>,
};
/** Marked text with style classes */
export const MarkedTextWithStyleClassed = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Marked text with additional attributes */
export const MarkedTextWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Marked Label',
            'aria-placeholder': 'Marked Placeholder',
        },
    },
};
/** Marked text with datasets */
export const MarkedTextWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-mark-id'],
            ['name', 'Data Mark Name'],
        ]),
    },
};
