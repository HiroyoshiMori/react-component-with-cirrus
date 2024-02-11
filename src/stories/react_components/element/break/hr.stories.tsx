import {Fragment} from "react";
import {
    Break,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;hr&gt; HTML element represents a thematic break between paragraph-level element:
 * for example, a change of scene in story, or a shift of topic within a section.
 */
export default {
    title: 'React Component/Element/Break/Hr',
    component: Break,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Thematic Break (Horizontal Rule) element',
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
            description: 'Switcher for <code>Break</code> component to render &lt;hr&gt;',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: 'hr',
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
                    summary: '[]',
                },
            },
        },
        attributes: {
            control: 'object',
            description: 'Additional attributes',
            table: {
                type: {
                    summary: 'HTMLAttributes<HTMLHRElement>',
                    detail: deIndent(`
                            e.g.,
                            { 'aria-label': 'This is Label' }
                        `),
                },
                defaultValue: {
                    summary: '{}',
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
                    summary: 'new Map()',
                    detail: 'When undefined, treated as new Map()'
                },
            },
        },
    },
};
/** Default thematic break */
export const Default = {
    render: (args: any) => <Break
        element={'hr'}
        {...args}
    />,
};
/** Thematic break with style classes */
export const HrWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Thematic break with additional attributes */
export const HrWithAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Hr Label',
            'aria-placeholder': 'Hr Placeholder',
        },
    },
};
/** Thematic break with datasets */
export const HrWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'hr-data-id'],
            ['name', 'Hr Data Name'],
        ]),
    },
};
