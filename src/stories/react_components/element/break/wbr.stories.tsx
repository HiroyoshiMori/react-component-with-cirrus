import {Fragment} from "react";
import {
    Break,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;wbr&gt; HTML element represents a word break opportunity — a position within text where the browser
 * may optionally break a line, though its line-breaking rules would not otherwise create a break at that location.
 */
export default {
    title: 'React Component/Element/Break/Wbr',
    component: Break,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Line Break Opportunity element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                This is longlonglonglonglonglonglonglonglonglonglonglonglonglonglong<Story />longlonglonglonglonglonglonglonglonglonglonglong word.
            </Fragment>
        )
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Break</code> component to render &lt;wbr&gt;',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: 'wbr',
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
/** Default line break opportunity */
export const Default = {
    render: (args: any) => <Break
        element={'wbr'}
        {...args}
    />,
};
/** Line break opportunity with style classes */
export const WbrWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Line break opportunity with additional attributes */
export const WbrWithAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Wbr Label',
            'aria-placeholder': 'Wbr Placeholder',
        },
    },
};
/** Line break opportunity with datasets */
export const WbrWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'wbr-data-id'],
            ['name', 'Wbr Data Name'],
        ]),
    },
};
