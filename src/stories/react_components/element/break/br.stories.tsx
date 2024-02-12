import {Fragment} from "react";
import {
    Break,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;br&gt; HTML element produces a line break in text (carriage-return)
 */
export default {
    title: 'React Component/Element/Break/Br',
    component: Break,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Line Break element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                This is pre-sentence.
                <Story />
                This is post-sentence.
            </Fragment>
        )
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Break</code> component to render &lt;br&gt;',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: 'br',
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
                    summary: 'HTMLAttributes<HTMLBRElement>',
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
/** Default line break */
export const Default = {
    render: (args: any) => <Break
        element={'br'}
        {...args}
    />,
};
/** Line break with style classes */
export const BrWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Line break with additional attributes */
export const BrWithAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Br Label',
            'aria-placeholder': 'Br Placeholder',
        },
    },
};
/** Line break with datasets */
export const BrWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'br-data-id'],
            ['name', 'Br Data Name'],
        ]),
    },
};
