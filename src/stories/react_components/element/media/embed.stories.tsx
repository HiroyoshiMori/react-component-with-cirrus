import {
    Media,
} from "../../../../components";
// @ts-ignore
import ExampleImage from '../../../assets/file_example_PNG_500kB.png';
// @ts-ignore
import FileExampleMp4 from '../../../assets/file_example_MP4_480_1_5MG.mp4';

export default {
    component: Media,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Embed External Content element',
    },
};
// Default embed
const DefaultEmbed = {
    element: 'embed',
    src: ExampleImage,
    type: 'image/png',
};
/** Default embed */
export const Default = {
    render: (args: any) => <Media
        {...DefaultEmbed}
        {...args}
    />,
};
/** Embed video */
export const EmbedVideo = {
    ...Default,
    args: {
        src: FileExampleMp4,
        type: 'video/mp4',
    },
};
/** Embed with style classes */
export const EmbedWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Embed with additional attributes */
export const EmbedWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Embed Label',
            'aria-placeholder': 'Embed Placeholder',
        },
    },
};
/** Embed with datasets */
export const EmbedWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-embed-id'],
            ['name', 'Data Embed Name'],
        ]),
    },
};
