import {Container} from "../../../../components";
import {Fragment} from "react";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Variable element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                The volume of box is <Story /> x <var>w</var> x <var>h</var>.
            </Fragment>
        ),
    ],
};
/** Default variable */
export const Default = {
    render: (args: any) => <Container
        element={'var'}
        inline={true}
        {...args}
    >
        l
    </Container>,
};
/** Variable with style classes */
export const VariableWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Variable with additional attributes */
export const VariableWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Variable Label',
            'aria-placeholder': 'Variable Placeholder',
        },
    },
};
/** Variable with datasets */
export const VariableWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-var-id'],
            ['name', 'Data Variable Name'],
        ]),
    },
};
