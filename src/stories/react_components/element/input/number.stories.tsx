import {action} from "@storybook/addon-actions";
import {
    Input,
} from "../../../../components";

export default {
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - number',
    },
};
/** Default number */
export const Default = {
    render: (args: any) => <Input
        type={'number'}
        placeholder={'Please input number'}
        {...args}
    />,
};
/** Number with datalist */
export const NumberWithDatalist = {
    ...Default,
    args: {
        datalist: [1, 10, 100, 1000],
    },
};
/** Number with List and Datalist */
export const NumberWithListAndDatalist = {
    ...Default,
    args: {
        list: 'number-list',
        datalist: [2, 20, 200, 2000],
    },
};
/** Number with min/max */
export const NumberWithMinMax = {
    ...Default,
    args: {
        min: 10,
        max: 20,
    },
};
/** Number with step */
export const NumberWithStep = {
    ...Default,
    args: {
        step: 10,
    },
};
/** Number with readonly */
export const NumberWithReadonly = {
    ...Default,
    args: {
        value: 100,
        readOnly: true,
    },
};
/** Number with required */
export const NumberWithRequired = {
    ...Default,
    args: {
        required: true,
    },
};
/** Number with onChange */
export const NumberWithOnChange = {
    ...Default,
    args: {
        onChange: action('onChange'),
    },
};
/** Number with style classes */
export const NumberWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Number with additional attributes */
export const NumberWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Number Label',
            'aria-placeholder': 'Number Placeholder',
        },
    },
};
/** Number with datasets */
export const NumberWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-number-id'],
            ['name', 'Data Number Name'],
        ]),
    },
};
