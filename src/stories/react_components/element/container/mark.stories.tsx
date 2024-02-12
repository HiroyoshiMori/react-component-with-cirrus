import {Fragment} from "react";
import {
    Container,
} from "../../../../components";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Mark Text element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                This sentence has <Story /> words.
            </Fragment>
        )
    ]
};
/** Default mark */
export const Default = {
    render: (args: any) => <Container
        element={'mark'}
        inline={true}
        {...args}
    >
        MARKED
    </Container>,
};
/** Marked text with style classes */
export const MarkedTextWithStyleClassed = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Marked text with additional attributes */
export const MarkedTextWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Marked Label',
            'aria-placeholder': 'Marked Placeholder',
        },
    },
};
/** Marked text with datasets */
export const MarkedTextWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-mark-id'],
            ['name', 'Data Mark Name'],
        ]),
    },
};
