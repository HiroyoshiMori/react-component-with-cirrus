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
                There is NoScript &#x1f449;
                <Story />
                &#x1f448; element.
            </Fragment>
        )
    ]
};
/** Default noscript */
export const Default = {
    render: (args: any) => <Container
        element={'noscript'}
        {...args}
    >
        Show this content when script is disabled.
    </Container>,
};
/** NoScript with style classes */
export const NoScriptWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** NoScript with additional attributes */
export const NoScriptWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'NoScript Label',
            'aria-placeholder': 'NoScript Placeholder',
        },
    },
};
/** NoScript with datasets */
export const NoScriptWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-noscript-id'],
            ['name', 'Data NoScript Name'],
        ]),
    },
};
