import {Fragment} from "react";
import {
    Source,
} from "../../../../components";
// @ts-ignore
import ExampleImage from '../../../assets/assets.png';
// @ts-ignore
import ExampleImage2 from '../../../assets/file_example_PNG_1MB.png';
import {deIndent} from "../../../../utils";

/**
 * The &lt;source&gt; HTML element specifies one or more media resources for the &lt;picture&gt;,
 * &lt;audio&gt;, and &lt;video&gt; elements. It is a void element, which means that it has no content
 * and does not require a closing tag. This element is commonly used to offer the same media content
 * in multiple file formats in order to provide compatibility with a broad range of browsers given
 * their differing support for image file formats and media file formats.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source
 */
export default {
    title: 'React Component/Element/Embed/Source',
    component: Source,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Media or Image Source element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Source</code> component to render &lt;source&gt;',
            table: {
                type: {
                    summary: 'source',
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
        type: {
            control: 'text',
            description: 'Specifies the MIME media type of the image or other media type, optionally including '
                        + 'a codecs parameter',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        media: {
            control: 'object',
            description: 'Specifies the media query for the resource\'s intended media',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        width: {
            control: {type: 'number', min: 1},
            description: 'Specifies the intrinsic width of the image in pixels. Only allowed in &lt;picture&gt;',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        height: {
            control: {type: 'number', min: 1},
            description: 'Specifies the intrinsic height of the image in pixels. Only allowed in &lt;picture&gt;',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        src: {
            control: 'text',
            if: {arg: 'srcSet', exists: false},
            type: {
                required: true,
            },
            description: 'Specifies the URL of the media resource. Required in &lt;audio&gt; or &lt;video&gt;. '
                        + 'Not allowed in &lt;audio&gt;.',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        srcSet: {
            control: 'object',
            if: {arg: 'src', exists: false},
            type: {
                required: true,
            },
            description: 'Specifies list of one or more image URLs and their descriptors. Required in &lt;picture&gt;.'
                        + 'Not allowed in &lt;audio&gt; or &lt;video&gt;.',
            table: {
                type: {
                    summary: 'SrcSetInSourceProps[]',
                    detail: deIndent(`
                            {
                                mediaSize?: number|string,
                                src: string,
                            }
                        `)
                },
            },
        },
        sizes: {
            control: 'object',
            if: {arg: 'srcSet', exists: true},
            description: deIndent(`
                        Specifies a list of source sizes that describe the final rendered width of the image. 
                        Allowed in only &lt;picture&gt;.
                        Note: <code>sizes</code> will take effect only if width descriptors area provided with <code>srcset</code>, not pixel density descriptors.
                        (i.e., <code>200w</code> should be used instead of <code>2x</code>).
                    `),
            table: {
                type: {
                    summary: 'SourceSizesProps[]',
                    detail: deIndent(`
                            {
                                mediaQuery: string[],
                                size: number | string,
                            }
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        defaultSize: {
            control: 'text',
            if: {arg: 'srcSet', exists: true},
            description: deIndent(`
                            Default resource size.
                            a width descriptor -- a positive integer directly followed by <code>w</code>>, such as 300w;
                            OR
                            a pixel density descriptor, followed by an <code>x</code> (such as 2x) to serve a high-res image for high-DPI screens;
                            
                            When number is provided, added "w" by automatically.
                        `),
            table: {
                type: {
                    summary: 'number|string',
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
                    summary: 'SourceHTMLAttributes<HTMLSourceElement>',
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
// Default source with src
const DefaultSource = {
    element: 'source',
    src: '/assets/file_example_WEBM_480_900KB.webm',
};
// Default source with srcset
const DefaultSourceSet = {
    element: 'source',
    srcSet: [
        { src: ExampleImage2, mediaSize: '640w' },
    ],
    media: ['min-width: 300px'],
    sizes: [
        {
            mediaQuery: ['max-width: 640px'],
            size: 50,
        },
        {
            mediaQuery: ['max-width: 1200px'],
            size: 30,
        },
    ],
    defaultSize: 10,
};

/** Default source */
export const Default = {
    render: (args: any) => <Fragment>
        <video controls>
            <Source
                {...DefaultSource}
                {...args}
            />
        </video>
    </Fragment>,
};
/** Source with srcset */
export const SourceWithSrcset = {
    render: (args: any) => <Fragment>
        <picture>
            <Source
                {...DefaultSourceSet}
                {...args}
            />
            <img src={ExampleImage} alt={'1MB'}/>
        </picture>
    </Fragment>
    ,
};
/** Source with other attributes */
export const SourceWithOtherAttributes = {
    ...Default,
    args: {
        type: 'video/webm',
        media: ['min-width: 300px', 'max-width: 2048px'],
        width: 600,
        height: 300,
    }
};
/** Source with srcset and other attributes */
export const SourceWithSrcSetAndOtherAttributes = {
    ...SourceWithSrcset,
    args: {
        type: 'image/png',
        width: 600,
        height: 300,
    }
};
/** Source with style classes */
export const SourceWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Source with additional attributes */
export const SourceWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Source Label',
            'aria-placeholder': 'Source Placeholder',
        },
    },
};
/** Source with datasets */
export const SourceWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-source-id'],
            ['name', 'Data Source Name'],
        ]),
    },
};
