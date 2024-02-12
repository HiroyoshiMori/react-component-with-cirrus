import {Fragment} from "react";
import {
    Code,
    Container,
    Details,
    Heading,
    Paragraph,
} from "../../../../components";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Web Component Slot element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Details summary={{
                    element: 'summary',
                    children: (
                        <Fragment>
                            <Code>
                                &lt;<Story />&gt;
                            </Code>
                            <Container
                                element={'span'}
                                inline={true}
                            >
                                <slot name={'description'}>NEED DESCRIPTION</slot>
                            </Container>
                        </Fragment>
                    )
                }}>
                    <Container>
                        <Heading level={4}>
                            Attributes
                        </Heading>
                        <slot name={'attributes'}>
                            <Paragraph>None</Paragraph>
                        </slot>
                    </Container>
                </Details>
            </Fragment>
        )
    ]
};
/** Default slot */
export const Default = {
    render: (args: any) => <Container
        element={'slot'}
        {...args}
    >
        NEED NAME
    </Container>,
};
/** Slot with style classes */
export const SlotWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Slot with additional attributes */
export const SlotWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Slot Label',
            'aria-placeholder': 'Slot Placeholder',
        },
    },
};
/** Slot with datasets */
export const SlotWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-slot-id'],
            ['name', 'Data Slot Name'],
        ]),
    },
};
