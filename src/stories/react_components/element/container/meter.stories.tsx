import {Fragment} from "react";
import {
    Container, MeterProps,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;meter&gt; HTML element represents either a scalar value within a known range or a fractional value.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter
 */
export default {
    title: 'React Component/Element/Container/Inline/Meter',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The HTML Meter element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                Progress Level:
                <Story />
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;meter&gt;',
            table: {
                type: {
                    summary: '"meter"',
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
        value: {
            control: 'number',
            description: 'The current numeric value',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        min: {
            control: 'number',
            description: 'The lower numeric bound of the measured range',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        max: {
            control: 'number',
            description: 'The upper numeric bound of the measured range.',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        low: {
            control: 'number',
            description: 'The upper numeric bound of the low end of the measured range.',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        high: {
            control: 'number',
            description: 'The lower numeric bound of the high end of the measured range',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        optimum: {
            control: 'number',
            description: 'Indicates the optimal numeric value',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        form: {
            control: 'text',
            description: 'Explicitly set a &lt;form&gt; owner for the &lt;meter&gt; element',
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
                    summary: 'MeterHTMLAttributes<HTMLMeterElement>',
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
/** Default meter */
export const Default = {
    render: (args: any) => <Container<MeterProps>
        element={'meter'}
        {...args}
    >
        at 50/100 maybe
    </Container>
};
/** Meter with value */
export const MeterWithValue = {
    ...Default,
    args: {
        value: 50,
    },
};
/** Meter with min/max */
export const MeterWithValueAndMinAndMax = {
    ...Default,
    args: {
        ...MeterWithValue.args,
        min: 0,
        max: 100,
    },
};
/** Meter with opposite value in min/max */
export const MeterWithWrongMinAndMax = {
    ...Default,
    args: {
        ...MeterWithValue.args,
        min: 100,
        max: 0,
    },
};
 /** Meter with low/high */
export const MeterWithLowAndHigh = {
    ...Default,
    args: {
        ...MeterWithValueAndMinAndMax.args,
        low: 30,
        high: 60,
    },
};
/** Meter with opposite low/high */
export const MeterWithWrongLowAndHigh = {
    ...Default,
    args: {
        ...MeterWithValueAndMinAndMax.args,
        low: -10,
        high: 200,
    },
};
/** Meter with opposite low/high (2) */
export const MeterWithWrongLowAndHigh2 = {
    ...Default,
    args: {
        ...MeterWithValueAndMinAndMax.args,
        low: 60,
        high: 20,
    },
};
/** Meter with optimum */
export const MeterWithOptimum = {
    ...Default,
    args: {
        ...MeterWithLowAndHigh.args,
        optimum: 80,
    },
};
/** Meter with wrong optimum */
export const MeterWithWrongOptimum = {
    ...Default,
    args: {
        ...MeterWithLowAndHigh.args,
        optimum: -10,
    },
};
/** Meter with style classes */
export const MeterWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Meter with additional attributes */
export const MeterWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Meter Label',
            'aria-placeholder': 'Meter Placeholder',
        },
    },
};
/** Meter with datasets */
export const MeterWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-meter-id'],
            ['name', 'Data Meter Name'],
        ]),
    },
};
