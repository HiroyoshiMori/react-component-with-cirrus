import {
    Container,
} from "../../../../components";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Strikethrough element',
    },
};
/** Default strikethrough */
export const Default = {
    render: (args: any) => <Container
        element={'s'}
        {...args}
    >
        This is strikethrough content.
    </Container>
};
/** Strikethrough with style classes */
export const StrikethroughWIthStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Strikethrough with additional attributes */
export const StrikethroughWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Strikethrough Label',
            'aria-placeholder': 'Strikethrough Placeholder',
        },
    },
};
/** Strikethrough with datasets */
export const StrikethroughWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-s-id'],
            ['name', 'Data Strikethrough Name'],
        ]),
    },
};
