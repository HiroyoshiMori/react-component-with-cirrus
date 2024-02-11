import {Fragment} from "react";
import {
    Rt,
} from "../../../../components";

export default {
    component: Rt,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Ruby Text element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <ruby>
                    <Story/>
                    本
                    <rp>(</rp>
                    <rt>Hon</rt>
                    <rp>)</rp>
                </ruby> is meaning of Japan.
            </Fragment>
        ),
    ],
};
/** Default ruby text */
export const Default = {
    render: (args: any) => <Rt
        element={'rt'}
        label={'日'}
        {...args}
    >
        Ni
    </Rt>
};
/** Ruby text with ruby fallback parenthesis */
export const RubyTextWithParenthesis = {
    ...Default,
    args: {
        useRp: true,
        preParenthesis: {
            element: 'rp',
            children: '(',
        },
        postParenthesis: {
            element: 'rp',
            children: ')',
        },
    },
};
/** Ruby text with style classes */
export const RubyTextWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Ruby text with additional attributes */
export const RubyTextWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Ruby Text Label',
            'aria-placeholder': 'Ruby Text Placeholder',
        },
    },
};
/** Ruby text with datasets */
export const RubyTextWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-rt-id'],
            ['name', 'Data Ruby Text Name'],
        ]),
    },
};
