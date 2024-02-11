import {Fragment} from "react";
import {
    Container,
} from "../../../../components";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Emphasis element',
    },
};
/** Default Emphasis */
export const Default = {
    render: (args: any) => <Fragment>
        UNIX timestamp start from <Container
            element={'em'}
            inline={true}
            {...args}
        >1970-01-01 00:00:00</Container>
    </Fragment>,
};
/** Emphasis with style classes */
export const EmphasisWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Emphasis with additional attributes */
export const EmphasisWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Emphasis Label',
            'aria-placeholder': 'Emphasis Placeholder',
        },
    },
};
/** Emphasis with datasets */
export const EmphasisWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-em-id'],
            ['name', 'Data Em Name'],
        ]),
    },
};
