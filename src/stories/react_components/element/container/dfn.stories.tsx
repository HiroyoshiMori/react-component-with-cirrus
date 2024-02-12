import {Fragment} from "react";
import {
    Container,
    Paragraph,
} from "../../../../components";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Definition element',
    },
};
/** Default definition */
export const Default = {
    render: (args: any) => <Fragment>
        <Paragraph>
            A <Container
            element={'dfn'}
            {...args}
        >UNIX TIMESTAMP</Container> is a date and time representation widely used in computing.
        </Paragraph>
    </Fragment>
};
/** Definition with style classes */
export const DefinitionWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Definition with additional attributes */
export const DefinitionWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Definition Label',
            'aria-placeholder': 'Definition Placeholder',
        },
    },
};
/** Definition with datasets */
export const DefinitionWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-dfn-id'],
            ['name', 'Data dfn name'],
        ]),
    },
};
