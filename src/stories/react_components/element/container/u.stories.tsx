import {Container} from "../../../../components";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Unarticulated Annotation (Underline) element',
    },
};
/** Default underline */
export const Default = {
    render: (args: any) => <Container
        element={'u'}
        inline={true}
        {...args}
    >
        This sentence has underline.
    </Container>,
};
/** Underline with style classes */
export const UnderlineWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Underline with additional attributes */
export const UnderlineWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Underline Label',
            'aria-placeholder': 'Underline Placeholder',
        },
    },
};
/** Underline with datasets */
export const UnderlineWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-u-id'],
            ['name', 'Data Underline Name'],
        ]),
    },
};
