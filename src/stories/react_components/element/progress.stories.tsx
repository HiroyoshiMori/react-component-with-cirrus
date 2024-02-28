import {Progress} from "../../../components";
import {deIndent} from "../../../utils";

/**
 * The &lt;progress&gt; HTML element displays an indicator showing the completion progress of a task,
 * typically displayed as a progress bar.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress
 */
export default {
    title: 'React Component/Element/Progress',
    component: Progress,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Progress Indicator element',
    },
    argTypes: {
        element: {
            control: 'none',
            type: {
                required: true,
            },
            description: 'Switcher for <code>Progress</code> component to render &lt;progress&gt;',
            table: {
                type: {
                    summary: '"progress"',
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
        max: {
            control: {type: 'number', min: 0},
            type: {
                required: true,
            },
            description: 'Specifies how much work the task indicated by the <code>progress</code> element requires',
            table: {
                type: {
                    summary: 'number',
                },
            },
        },
        value: {
            control: {type: 'number', min: 0},
            description: 'Specifies how much of the task that has been completed',
            table: {
                type: {
                    summary: 'number',
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
                    summary: 'ProgressHTMLAttributes<HTMLProgressElement>',
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
/** Default progress */
export const Default = {
    render: (args: any) => <Progress
        element={'progress'}
        max={100}
        {...args}
    >
        Progress content
    </Progress>,
};
/** Progress with value */
export const ProgressWithValue = {
    ...Default,
    args: {
        value: 10,
    },
};
/** Progress with style classes */
export const ProgressWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Progress with additional attributes */
export const ProgressWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Progress Label',
            'aria-placeholder': 'Progress Placeholder',
        },
    },
};
/** Progress with datasets */
export const ProgressWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-progress-id'],
            ['name', 'Data Progress Name'],
        ]),
    },
};
