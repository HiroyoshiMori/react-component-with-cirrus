import {action} from "@storybook/addon-actions";
import {
    Input,
} from "../../../../components";
// @ts-ignore
import ExampleImage from '../../../assets/context.png';

export default {
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - image',
    },
};
/** Default image */
export const Default = {
    render: (args: any) => <Input
        type={'image'}
        src={ExampleImage}
        alt={'Submit Image'}
        onClick={action('clicked')}
        {...args}
    />,
};
/** Image with width/height */
export const ImageWithWidthHeight = {
    ...Default,
    args: {
        width: 145,
        height: 65,
    },
};
/** Image with other attributes */
export const ImageWithOtherAttributes = {
    ...Default,
    args: {
        formAction: '#',
        formEncType: 'multipart/form-data',
        formMethod: 'get',
        formNoValidate: true,
        formTarget: '_self',
    },
};
/** Image with style classes */
export const ImageWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Image with additional attributes */
export const ImageWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Image Label',
            'aria-placeholder': 'Image Placeholder',
        },
    },
};
/** Image with datasets */
export const ImageWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-image-id'],
            ['name', 'Data Image Name'],
        ]),
    },
};
