import {Fragment} from "react";
import {
    Container,
} from "../../../../components";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Idiomatic element',
    },
};
export const Default = {
    render: (args: any) => <Fragment>
        I think it's good to have <Container
            element={'i'}
            inline={true}
            {...args}
        >
            variable which show milli-seconds from 1st of the year.
        </Container>
    </Fragment>,
};
/** Idiomatic with style classes */
export const IdiomaticWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Idiomatic with additional attributes */
export const IdiomaticWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Idiomatic Label',
            'aria-attributes': 'Idiomatic Placeholder',
        },
    },
};
/** Idiomatic with datasets */
export const IdiomaticWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-idiomatic-id'],
            ['name', 'Data Idiomatic Name'],
        ]),
    },
};
