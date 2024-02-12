import {Fragment} from "react";
import {
    Break,
    Container,
    Paragraph,
} from "../../../../components";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The side comment element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Paragraph>
                    This is test component.
                </Paragraph>
                <Break element={'hr'} />
                <Paragraph>
                    <Story />
                </Paragraph>
            </Fragment>
        )
    ]
};
/** Default small */
export const Default = {
    render: (args: any) => <Container
        element={'small'}
        inline={true}
        {...args}
    >
        The small content is here.
    </Container>,
};
/** Small with style classes */
export const SmallWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Small with additional attributes */
export const SmallWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Small Label',
            'aria-placeho.der': 'Small Placeholder',
        },
    },
};
/** Small with datasets */
export const SmallWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-small-id'],
            ['name', 'Data Small Name'],
        ]),
    },
};
