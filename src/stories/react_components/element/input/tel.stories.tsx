import {action} from "@storybook/addon-actions";
import {
    Input,
} from "../../../../components";

export default {
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - tel',
    },
};
/** Default tel */
export const Default = {
    render: (args: any) => <Input
        type={'tel'}
        placeholder={'Please input phone number'}
        onChange={action('tel changed')}
        {...args}
    />,
};
/** Tel with default value */
export const TelWithDefaultValue = {
    ...Default,
    args: {
        defaultValue: '1234-5678-9012',
    },
};
/** Tel with datalist */
export const TelWithDatalist = {
    ...Default,
    args: {
        datalist: ['1234-5678-9012', '1234-5678-9013'],
    },
};
/** Tel with list and datalist */
export const TelWithListAndDatalist = {
    ...Default,
    args: {
        list: 'tel-list',
        datalist: ['1234-5678-9012', '1234-5678-9013'],
    },
};
/** Tel with min/max length */
export const TelWithMinMaxLength = {
    ...Default,
    args: {
        minLength: 10,
        maxLength: 20,
    },
};
/** Tel with pattern */
export const TelWithPattern = {
    ...Default,
    args: {
        pattern: '(\\+?[0-9]{2,}-?)([0-9-]+)',
    },
};
/** Tel readonly */
export const TelReadOnly = {
    ...Default,
    args: {
        defaultValue: '1234-5678-9012',
        readOnly: true,
    },
};
/** Tel required */
export const TelRequired = {
    ...Default,
    args: {
        required: true,
    },
};
/** Tel with size */
export const TelWithSize = {
    ...Default,
    args: {
        size: 30,
    },
};
/** Tel with style classes */
export const TelWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Tel with additional attributes */
export const TelWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Tel Label',
            'aria-placeholder': 'Tel Placeholder',
        },
    },
};
/** Tel with datasets */
export const TelWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-tel-id'],
            ['name', 'Data Tel Name'],
        ]),
    },
};
