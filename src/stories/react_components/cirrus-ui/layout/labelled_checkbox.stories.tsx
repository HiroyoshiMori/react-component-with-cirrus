import {action} from "@storybook/addon-actions";
import {LabelledCheckbox} from "../../../../components/";

export default {
    component: LabelledCheckbox,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Labelled Checkbox component',
    },
};
/** Default labelled checkbox */
export const Default = {
    render: (args: any) => <LabelledCheckbox
        htmlFor={'labelled_checkbox'}
        checkbox={{
            element: 'input',
            type: 'checkbox',
            name: 'labelled_checkbox',
            value: 'checkbox_value1',
            onChange: action('onChange'),
        }}
        currentValues={['current_value1', 'current_value2']}
        {...args}
    >
        This is Labelled Checkbox
    </LabelledCheckbox>,
};
/** Checked labelled checkbox */
export const LabelledCheckboxChecked = {
    ...Default,
    args: {
        currentValues: ['checkbox_value1'],
    },
};
