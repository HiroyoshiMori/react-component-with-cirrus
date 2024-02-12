import {action} from "@storybook/addon-actions";
import {
    Input,
} from "../../../../components";

export default {
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - range',
    },
};
/** Default range */
export const Default = {
    render: (args: any) => <Input
        type={'range'}
        defaultValue={''}
        onChange={(e) => {
            console.debug('value is: ' + e.target.value);
            action('range changed');
        }}
        {...args}
    />,
};
/** Range with datalist */
export const RangeWithDatalist = {
    ...Default,
    args: {
        datalist: [10, 20, 30],
    },
};
/** Range with list and datalist */
export const RangeWithListAndDatalist = {
    ...Default,
    args: {
        list: 'range-list',
        datalist: [5, 15, 25],
    },
};
/** Range with min/max */
export const RangeWithMinMax = {
    ...Default,
    args: {
        min: 10,
        max: 100,
    },
};
/** Range with step */
export const RangeWithStep = {
    ...Default,
    args: {
        step: 10,
    },
};
/** Range with style classes */
export const RangeWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Range with additional attributes */
export const RangeWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Range Label',
            'aria-placeholder': 'Range Placeholder',
        },
    },
};
/** Range with datasets */
export const RangeWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-range-id'],
            ['name', 'Data Range Name'],
        ]),
    },
};
