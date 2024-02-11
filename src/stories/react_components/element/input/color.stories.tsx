import {
    Input,
} from "../../../../components";

export default {
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - color',
    },
};
/** Default color select */
export const Default = {
    render: (args: any) => <Input
        type={'color'}
        name={'input_color'}
        {...args}
    />,
};
/** Color select with list & datalist */
export const ColorWithListAndDatalist = {
    ...Default,
    args: {
        list: 'color-list',
        datalist: [
            '#000000', '#FF0000', '#00FF00', '#0000FF',
        ],
    },
};
/** Color select with datalist */
export const ColorWithDatalist = {
    ...Default,
    args: {
        datalist: [
            '#000000', '#FF0000', '#00FF00', '#0000FF',
        ],
    },
};
/** Color select with style classes */
export const ColorWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Color select with additional attributes */
export const ColorWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Input Color Label',
            'aria-placeholder': 'Input Color Placehodler',
        },
    },
};
/** Color select with datasets */
export const ColorWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-color-id'],
            ['name', 'Data Color Name'],
        ]),
    },
};
