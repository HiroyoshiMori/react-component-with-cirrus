import {Container} from "../../../../components";
import {Fragment} from "react";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Superscript element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                2<Story /> is 8.
            </Fragment>
        ),
    ],
};
/** Default superscript */
export const Default = {
    render: (args: any) => <Container
        element={'sup'}
        inline={true}
        {...args}
    >
        3
    </Container>,
};
/** Superscript with style classes */
export const SuperscriptWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Superscript with additional attributes */
export const SuperscriptWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Superscript Label',
            'aria-placeholder': 'Superscript Placeholder',
        },
    },
};
/** Superscript with datasets */
export const SuperscriptWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-sup-id'],
            ['name', 'Data Superscript Name'],
        ]),
    },
};
