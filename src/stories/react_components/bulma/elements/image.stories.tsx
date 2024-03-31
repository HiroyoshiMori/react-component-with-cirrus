import {Image} from "../../../../frameworks/bulma";
// @ts-ignore
import ExampleImage from '../../../assets/file_example_PNG_500kB.png';

export default {
    title: 'React Component/CSS Framework/Bulma/Elements/Image',
    // TODO: add argTypes
    component: Image,
    tags: ['autodocs'],
};
/** Default image */
export const Default = {
    render: (args: any) => <Image
        component={'image'}
        image={{
            element: 'img',
            src: ExampleImage
        }}
        {...args}
    />,
};
