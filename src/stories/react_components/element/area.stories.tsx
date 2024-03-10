import React, {Fragment} from "react";
import {
    Area, Figure,
    ImageMap, Media,
} from "../../../components";
import {deIndent} from "../../../utils";
// @ts-ignore
import ExampleImage from '../../assets/file_example_PNG_500kB.png';

/**
 * The &lt;area&gt; HTML element defines an area inside an image map that has predefined clickable areas.
 * An image map allows geometric areas on an image to be associated with hypertext links.
 * This element is used only within a &lt;map&gt; element.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area
 */
export default {
    title: 'React Component/Element/Embed/Area',
    component: Area,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Image Map Area element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Figure
                    element={'figure'}
                    caption={{
                        element: 'figcaption',
                        children: 'Area is placed at upper left quarter'
                    }}
                    captionPosition={'last'}
                >
                    <ImageMap
                        element={'map'}
                        name={'area_test'}
                    >
                        <Story />
                    </ImageMap>
                    <Media
                        element={'img'}
                        src={ExampleImage}
                        useMap={'#area_test'}
                    />
                </Figure>
            </Fragment>
        )
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Area</code> component to render &lt;area&gt;',
            table: {
                type: {
                    summary: '"area"',
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
        alt: {
            control: 'text',
            description: 'A text string alternative to display on browsers that do not display images.',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        coords: {
            control: 'object',
            description: deIndent(`
                        Details the coordinates of the shape attribute in size, shape, and placement of an &lt;area&gt;.
                        This attribute must be not be used if <code>shape</code> is set to <code>default</code>.
                        <span class="li">
                            <code>rect</code>: the value is <code>x1,y1,x2,y2</code>.
                            The value specifies the coordinates of the top-left and bottom-right
                             corner of the rectangle.
                        </span>
                        <span class="li">
                            <code>circle</code>: the value is <code>x,y,radius</code>.
                            Value specifies the coordinates of the circle center and the radius.
                        </span>
                        <span class="li">
                            <code>poly</code>: the value is <code>x1,y1,x2,y2,...,xn,yn</code>.
                            Value specifies the coordinates of the edges of the polygon.
                        </span>
                        The values are numbers of CSS pixels.
                    `),
            table: {
                type: {
                    summary: '([number, number][]) | [number, number, number]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        href: {
            control: 'text',
            description: 'The hyperlink target for the area',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        download: {
            control: 'boolean',
            description: 'Indicates that the author intends the hyperlink to be used for downloading a resource',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        ping: {
            control: 'object',
            description: 'Contains a space-separated list of URLs to which, when the hyperlink is followed, '
                        + 'POST requests with the body PING will be sent by the browser (in the background).',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        referrerPolicy: {
            control: "select",
            options: [
                'Default', "", "no-referrer", "no-referrer-when-downgrade", "origin", "origin-when-cross-origin",
                "same-origin", "strict-origin", "strict-origin-when-cross-origin", "unsafe-url"
            ],
            mapping: {
                'Default': undefined,
            },
            table: {
                type: {
                    summary: 'React.HTMLAttributeReferrerPolicy',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        rel: {
            control: 'object',
            description: 'Specifies the relationship to the target object to the link object.<br />'
                        + 'This value is a space-separated list of link types.',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        shape: {
            control: 'select',
            options: [undefined, 'rect', 'circle', 'poly', 'default'],
            description: 'The shape of the associated hot spot',
            table: {
                type: {
                    summary: 'react|circle|poly|default',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        target: {
            control: 'text',
            description: 'A keyword or author-defined name of the browsing context to display the linked resource',
            table: {
                type: {
                    summary: '"_self"|"_blank"|"_parent"|"_top"|string'
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
                    summary: 'AreaHTMLAttributes<HTMLAreaElement>',
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
// Default Area
const DefaultArea = {
    alt: 'Test area',
    coords: [[0, 0], [425, 283]],
    href: '#',
    shape: 'rect',
};

/** Default area */
export const Default = {
    render: (args: any) => <Area
        {...DefaultArea}
        {...args}
    />,
};
/** Area with other attributes */
export const AreaWithOtherAttributes = {
    ...Default,
    args: {
        download: true,
        ping: ['https://one.example.com/', 'https://two.example.com/'],
        referrerPolicy: 'no-referrer',
        rel: ['test-area1', 'test-area2'],
        target: '_blank',
    },
};
/** Area with style classes */
export const AreaWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Area with additional attributes */
export const AreaWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Area Label',
            'aria-placeholder': 'Area Placeholder',
        },
    },
};
/** Area with datasets */
export const AreaWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-area-id'],
            ['name', 'Data Area Name'],
        ]),
    },
};
