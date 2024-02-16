import React, {Fragment} from "react";
import {
    ImageMap,
    Media,
} from "../../../components";
// @ts-ignore
import ExampleImage from "../../assets/file_example_PNG_500kB.png";
import {deIndent, linkInStoryBook} from "../../../utils";

/**
 * The &lt;map&gt; element is used with &lt;area&gtl elements to define an image map
 * (a clickable link area).
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map
 */
export default {
    title: 'React Component/Element/Embed/Map',
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
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>ImageMap</code> component to render &lt;map&gt;',
            table: {
                type: {
                    summary: '"map"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        id: {
            control: 'text',
            description: 'ID for element',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        name: {
            control: 'text',
            type: {
                required: true,
            },
            description: 'A name so that it can be referenced',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        children: {
            control: 'object',
            description: 'Content of map',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        areas: {
            control: 'object',
            description: deIndent(`
                            Area definitions in the map<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'AreaProps', 'React Component/Element/Embed/Area'
                        ),
            table: {
                type: {
                    summary: 'AreaProps[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, treated as []',
                },
            },
        },
        attributes: {
            control: 'object',
            description: 'Additional attributes',
            table: {
                type: {
                    summary: 'MapHTMLAttributes<HTMLMapElement>',
                    detail: deIndent(`
                            e.g.,
                            { 'aria-label': 'This is Label' }
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, treated as {}',
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'Datasets. "data-" is added at the beginning of all keys',
            table: {
                type: {
                    summary: 'Map<string, string>',
                    detail: deIndent(`
                            e.g.,
                            new Map([
                                ['id', 'this-is-id'],
                                ['name', 'This is Name'],
                            ]);
                            => data-id="this-is-id" data-name="This is Name"
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, treated as new Map()'
                },
            },
        },
    },
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

