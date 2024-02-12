import {Fragment} from "react";
import {
    Container,
} from "../../../../components";

export default {
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
        )
    ]
};
/** Default meter */
export const Default = {
    render: (args: any) => <Container
        element={'meter'}
        inline={true}
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
/** Meter with low/high */
export const MeterWithLowAndHigh = {
    ...Default,
    args: {
        ...MeterWithValueAndMinAndMax.args,
        low: 30,
        high: 60,
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
