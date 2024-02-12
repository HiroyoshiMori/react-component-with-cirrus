import {
    Label,
} from "../../../components";

export default {
    component: Label,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Label element',
    },
};
/** Default label */
export const Default = {
    render: (args: any) => <Label
        {...args}
    >
        This is label contents
    </Label>,
};
/** Label with for */
export const LabelWithFor = {
    ...Default,
    args: {
        htmlFor: 'test-label',
    },
};
/** Label with style classes */
export const LabelWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Label with additional attributes */
export const LabelWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Label Label',
            'aria-placeholder': 'Label Placeholder',
        },
    },
};
/** Label with datasets */
export const LabelWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-label-id'],
            ['name', 'Data Label Name'],
        ]),
    },
};
