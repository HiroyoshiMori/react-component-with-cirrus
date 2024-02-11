import {Fragment} from "react";
import {
    Source,
} from "../../../../components";
// @ts-ignore
import ExampleImage from '../../../assets/assets.png';
// @ts-ignore
import ExampleImage2 from '../../../assets/file_example_PNG_1MB.png';

export default {
    component: Source,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Media or Image Source element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <picture>
                    <Story />
                    <img src={ExampleImage} alt={'1MB'} />
                </picture>
            </Fragment>
        ),
    ],
};
// Default source with src
const DefaultSource = {
    element: 'source',
    src: ExampleImage,
};
// Default source with srcset
const DefaultSourceSet = {
    element: 'source',
    srcSet: [
        { src: ExampleImage2, mediaSize: '640w' },
    ],
    media: ['min-width: 1024px'],
    defaultSize: '50vw',
};

/** Default source */
export const Default = {
    render: (args: any) => <Source
        {...DefaultSource}
        {...args}
    />,
};
/** Source with srcset */
export const SourceWithSrcset = {
    render: (args: any) => <Source
        {...DefaultSourceSet}
        {...args}
    />,
}