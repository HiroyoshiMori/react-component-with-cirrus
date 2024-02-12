import {Fragment} from "react";
import {Container} from "../../../../components";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Media or Image Source element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                This is <Story /> which I'd like to emphasize.
            </Fragment>
        ),
    ],
};
/** Default strong */
export const Default = {
    render: (args: any) => <Container
        element={'strong'}
        inline={true}
        {...args}
    >
        keyword
    </Container>,
};
/** Strong with style classes */
export const StrongWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Strong with additional attributes */
export const StrongWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Strong Label',
            'aria-placeholder': 'Strong Placeholder',
        },
    },
};
/** Strong with datasets */
export const StrongWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-strong-id'],
            ['name', 'Data Strong Name'],
        ]),
    },
};
