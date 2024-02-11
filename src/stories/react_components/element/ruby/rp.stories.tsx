import {Fragment} from "react";
import {
    Rp,
} from "../../../../components";

export default {
    component: Rp,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Ruby Fallback Parenthesis element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <ruby>
                    日
                    <Story/>
                    <rt>Ni</rt>
                    <rp>)</rp>
                    本
                    <rp>(</rp>
                    <rt>Hon</rt>
                    <rp>)</rp>
                </ruby> is meaning of Japan.
            </Fragment>
        ),
    ],
};
/** Default ruby parenthesis */
export const Default = {
    render: (args: any) => <Rp
        element={'rp'}
        {...args}
    >
        (
    </Rp>,
};
/** Ruby parenthesis with style classes */
export const RpWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Ruby parenthesis with additional attributes */
export const RpWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Ruby Parenthesis Label',
            'aria-placeholder': 'Ruby Parenthesis Placeholder',
        },
    },
};
/** Ruby parenthesis with datasets */
export const RpWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-rp-id'],
            ['name', 'Data Ruby Parenthesis Name'],
        ]),
    },
};
