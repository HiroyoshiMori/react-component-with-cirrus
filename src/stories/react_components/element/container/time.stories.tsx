import {Fragment} from "react";
import {
    Container, TimeProps,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;time&gt; HTML element represents a specific period in time. It may include the <code>datetime</code> attribute
 * to transfer dates into machine-readable format, allowing for better search engine results or
 * custom features such as reminders.
 */
export default {
    title: 'React Component/Element/Container/Inline/Time',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The (Date) Time element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                UNIX Timestamp starts from <Story />
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;time&gt;',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: '"time"',
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
        dateTime: {
            control: 'text',
            description: 'Store machine-readable date',
            table: {
                type: {
                    summary: 'string',
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
                    summary: 'TimeHTMLAttributes<HTMLTimeElement>',
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
// Default time property
const DefaultTimeProps = {
    element: 'time',
};

/** Default time */
export const Default = {
    render: (args: any) => <Container<TimeProps>
        {...DefaultTimeProps}
        {...args}
    >
        January 1st, 1970 00:00:00
    </Container>,
};
/** Time with datetime attribute */
export const TimeWithDateTimeAttribute = {
    ...Default,
    args: {
        dateTime: '1970-01-01 00:00:00',
    },
};
/** Time with style classes */
export const TimeWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Time with additional attributes */
export const TimeWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Time Label',
            'aria-placeholder': 'Time Placeholder',
        },
    },
};
/** Time with datasets */
export const TimeWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'time-data-id'],
            ['name', 'Time Data Name'],
        ]),
    },
};
