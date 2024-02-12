import React, {Fragment} from "react";
import {
    ImageMap,
    Media,
} from "../../../components";
// @ts-ignore
import ExampleImage from "../../assets/file_example_PNG_500kB.png";

export default {
    component: ImageMap,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Image Map element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Story />
                <Media
                    element={'img'}
                    src={ExampleImage}
                    useMap={'#map_test'}
                />
            </Fragment>
        )
    ]
};
/** Default image map */
export const Default = {
    render: (args: any) => <ImageMap
        name={'map_test'}
        areas={[
            {
                alt: 'Test area 1',
                coords: [[0, 0], [212, 283]],
                href: '#test1',
                shape: 'rect',
            },
            {
                alt: 'Test area 2',
                coords: [[213, 0], [425, 283]],
                href: '#test2',
                shape: 'rect',
            },
        ]}
        {...args}
    >
    </ImageMap>
};
/** Image map with style classes */
export const ImageMapWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Image map with additional attributes */
export const ImageMapWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Image Map Label',
            'aria-placeholder': 'Image Map Placeholder',
        },
    },
};
/** Image map with datasets */
export const ImageMapWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-map-id'],
            ['name', 'Data Map Name'],
        ]),
    },
};

