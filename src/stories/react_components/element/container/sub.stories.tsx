import {Container} from "../../../../components";
import {Fragment} from "react";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Subscript element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                H<Story>2</Story>O is water.
            </Fragment>
        ),
    ],
};
/** Default Subscript */
export const Default = {
    render: (args: any) => <Container
        element={'sub'}
        inline={true}
        {...args}
    >
        2
    </Container>
};
/** Subscript with style classes */
export const SubscriptWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Subscript with additional attributes */
export const SubscriptWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Subscript Label',
            'aria-placeholder': 'Subscript Placeholder',
        },
    },
};
/** Subscript with datasets */
export const SubscriptWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-sub-id'],
            ['name', 'Data Subscript Name'],
        ]),
    },
};
