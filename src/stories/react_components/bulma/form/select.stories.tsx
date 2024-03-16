import {FormSelect} from "../../../../frameworks/bulma";

export default {
    component: FormSelect,
    tags: ['autodocs'],
};
/** Default select */
export const Default = {
    render: (args: any) => <FormSelect
        component={'form-select'}
        element={'div'}
        select={{
            element: 'select',
            options: [
                {element: 'option', children: '---- Please select ----', value: ''},
                {element: 'option', children: 'Option 1'},
                {element: 'option', children: 'Option 2'},
            ],
        }}
        {...args}
    />,
};
/** Select with selected value */
export const SelectWithSelectedValue = {
    ...Default,
    args: {
        selectedValue: 'Option 1',
    },
};
/** Select with multiple */
export const SelectWithMultiple = {
    ...Default,
    args: {
        multiple: true,
        size: 5,
    },
};
/** Select with element size */
export const SelectWithElementSize = {
    ...Default,
    args: {
        elementSize: 'large',
    },
};
/** Select with element state */
export const SelectWithElementState = {
    ...Default,
    args: {
        elementState: 'focus',
    },
};
export const SelectWithElementColor = {
    ...Default,
    args: {
        elementColor: 'primary',
    },
};
