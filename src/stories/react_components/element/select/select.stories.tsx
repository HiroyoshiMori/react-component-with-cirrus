import {
    Select,
} from "../../../../components";

export default {
    component: Select,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The HTML Select element',
    },
};
/** Default select */
export const Default = {
    render: (args: any) => <Select
        options={[
            {value: 'option1', children: 'Option 1'},
            {is: 'optgroup', label: 'Option 2 Group', options: [
                    {value: 'option2-1', children: 'Option 2-1'},
                    {value: 'option2-2', children: 'Option 2-2'},
                    {value: 'option2-3', children: 'Option 2-3'},
                    {value: 'option2-4', children: 'Option 2-4'},
                ]},
            {children: 'Option 3'},
            {value: 'option4', children: 'Option 4'},
        ]}
        {...args}
    />,
};
/** Select with selectedValue */
export const SelectWithSelectedValue = {
    ...Default,
    args: {
        selectedValue: 'option2-2',
    },
};
/** Select with multiple/size */
export const SelectWithMultipleAndSize = {
    ...Default,
    args: {
        multiple: true,
        size: 3,
    },
};
/** Select with required */
export const SelectWithRequired = {
    ...Default,
    args: {
        required: true,
    },
};
/** Select with disabled */
export const SelectWithDisabled = {
    ...Default,
    args: {
        disabled: true,
    },
};
/** Select with other attributes */
export const SelectWithOtherAttributes = {
    ...Default,
    args: {
        form: 'form-name',
        autoComplete: 'on',
    },
};
/** Select with style classes */
export const SelectWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Select with additional attributes */
export const SelectWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Select Label',
            'aria-placeholder': 'Select Placeholder',
        },
    },
};
/** Select with datasets */
export const SelectWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-select-id'],
            ['name', 'Data Select Name'],
        ]),
    },
};
