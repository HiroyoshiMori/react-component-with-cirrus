import {action} from "@storybook/addon-actions";
import {LabelledRadio} from "../../../../components/cirrus-ui";

export default {
    component: LabelledRadio,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Labelled Radio component',
    },
};
/** Default labelled radio */
export const Default = {
    render: (args: any) => <LabelledRadio
        htmlFor={'labelled_radio'}
        radio={{
            element: 'input',
            type: 'radio',
            name: 'labelled_radio',
            value: 'radio_value1',
            onChange: action('onChange'),
        }}
        currentValue={'current_value'}
        {...args}
    >
        This is Labelled Radio
    </LabelledRadio>,
};
/** Checked labelled radio */
export const LabelledRadioChecked = {
    ...Default,
    args: {
        currentValue: 'radio_value1',
    },
};
