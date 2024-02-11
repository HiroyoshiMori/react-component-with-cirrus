import {action} from "@storybook/addon-actions";
import {
    Input,
} from "../../../../components";

export default {
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - submit',
    },
};
/** Default submit */
export const Default = {
    render: (args: any) => <Input
        type={'submit'}
        value={'Submit value'}
        onClick={action('submit clicked')}
        {...args}
    />,
};
/** Submit with other attributes */
export const SubmitWithOtherAttributes = {
    ...Default,
    args: {
        formAction: '#',
        formEncType: 'plain/text',
        formMethod: 'get',
        formNoValidate: true,
        formTarget: '_self',
    },
};
/** Submit with style classes */
export const SubmitWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Submit with additional attributes */
export const SubmitWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Submit Label',
            'aria-placeholder': 'Submit Placeholder',
        },
    },
};
/** Submit with datasets */
export const SubmitWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-submit-id'],
            ['name', 'Data Submit Name'],
        ]),
    },
};
