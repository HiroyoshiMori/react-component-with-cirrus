import {Fragment} from "react";
import {
    Container,
} from "../../../../components";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Data element',
    },
};
/** Default data */
export const Default = {
    render: (args: any) => <Fragment>
        <Container
            element={'data'}
            inline={true}
            value={2.5}
            {...args}
        >1 inch</Container>
    </Fragment>,
};
/** Data with style classes */
export const DataWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Data with additional attributes */
export const DataWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Data Label',
            'aria-placeholder': 'Data Placeholder',
        },
    },
};
/** Data with datasets */
export const DataWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-data-id'],
            ['name', 'Data Data Name'],
        ]),
    },
};
