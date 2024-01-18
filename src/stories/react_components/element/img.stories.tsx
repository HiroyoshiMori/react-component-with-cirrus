import React from "react";
import {CROSS_ORIGINS, DECODINGS, FETCH_POLICIES, LOADINGS, Media, REFERRER_POLICIES} from "../../../components";
import {deIndent} from "../../../utils";
// @ts-ignore
import AssetsImage from '../../assets/assets.png';
// @ts-ignore
import ContextImage from '../../assets/context.png';
// @ts-ignore
import StylingImage from '../../assets/styling.png';

export default {
    title: 'React Component/Element/Media/Img',
    component: Media,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Image Embed element',
        docs: {
            description: {
                component: 'The <img> HTML element embeds an image into the document.',
            },
        },
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for Media component to render <img>',
            type: {
                required: true,
            },
            table: {
                defaultValue: {
                    summary: 'img',
                },
            },
        },
        id: {
            control: 'text',
            description: 'ID for element',
            type: {
                required: false,
            },
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        src: {
            control: 'text',
            description: 'The image URL',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        alt: {
            control: 'text',
            description: 'Text that can replace the image in the page',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        width: {
            control: {type: 'number', min: 0},
            description: 'The intrinsic width of the image in pixels',
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
            control: {type: 'number', min: 0},
            description: 'The intrinsic height of the image in pixels',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        imageSizes: {
            control: 'object',
            description: 'One or more sets of possible image size/sources',
            table: {
                type: {
                    summary: 'ImageSizesProps',
                    detail: deIndent(`
                            {
                                srcSet?: ({
                                    mediaQuery: string[],
                                    mediaSize: number | string,
                                    src: string,
                                } as ImageSrcSetProps)[],
                                defaultSize?: number | string,
                            }
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        crossOrigin: {
            control: 'select',
            options: ['Default'].concat(CROSS_ORIGINS),
            mapping: {
                Default: undefined,
            },
            description: 'Indicates if the fetching image must be done using a CORS',
            table: {
                type: {
                    summary: CROSS_ORIGINS.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        decoding: {
            control: 'select',
            options: ['Default'].concat(DECODINGS),
            mapping: {
                'Default': undefined,
            },
            description: 'A hint to the browser as to whether it should perform image decoding along with',
            table: {
                type: {
                    summary: DECODINGS.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        elementTiming: {
            control: 'text',
            description: 'Marks the image for observation by the PerformanceElementTiming',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        fetchPolicy: {
            control: 'select',
            options: ['Default'].concat(FETCH_POLICIES),
            mapping: {
                'Default': undefined,
            },
            description: 'A hit of the relative priority to use when fetching the image',
            table: {
                type: {
                    summary: FETCH_POLICIES.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        isMap: {
            control: 'boolean',
            description: 'Indicates that the image is part of a server-side map',
            table: {
                type: 'boolean',
            },
            defaultValue: {
                summary: 'undefined',
                detail: 'treated as false'
            },
        },
        loading: {
            control: 'select',
            options: ['Default'].concat(LOADINGS),
            mapping: {
                'Default': undefined,
            },
            description: 'Indicates how the browser should load the image',
            table: {
                type: {
                    summary: LOADINGS.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        referrerPolicy: {
            control: 'select',
            options: ['Default'].concat(REFERRER_POLICIES),
            mapping: {
                'Default': undefined,
            },
            description: 'Indicates which referrer to use when fetching the resource',
            table: {
                type: {
                    summary: REFERRER_POLICIES.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        useMap: {
            control: 'text',
            description: 'THe partial URL of an image map associated with the element',
            table: {
                type: {
                    summary: 'string',
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
                }
            },
        },
        attributes: {
            control: 'object',
            description: 'Additional attributes',
            table: {
                type: {
                    summary: 'HTMLAttributes<HTMLImageElement>',
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
                }
            }
        }
    },
};
// Default image property
const imgDefaultProps = {
    element: 'img',
    src: AssetsImage,
};
// Image with srcset without media query
const imgSrcSetProps = {
    ...imgDefaultProps,
    imageSizes: {
        srcSet: [{
            mediaSize: '2.0x',
            src: ContextImage,
        }, {
            mediaSize: '1.5x',
            src: StylingImage,
        }],
    },
};
// Image with srcset with media query
const imgSrcSetWithQueryProps = {
    ...imgDefaultProps,
    imageSizes: {
        srcSet: [{
            mediaQuery: ['max-width: 600px', 'min-width: 400px'],
            mediaSize: '0.5x',
            src: ContextImage,
        }, {
            mediaQuery: ['max-width: 400px'],
            mediaSize: '1.5x',
            src: StylingImage,
        }],
    },
};
// Image with srcset and with default size (used by sizes)
const imgSrcSetSizesProps = {
    ...imgSrcSetProps,
    imageSizes: {
        ...imgSrcSetProps.imageSizes,
        defaultSize: 800,
    },
};

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------
/** Default Image */
export const DefaultImage = {
    render: (args: any) => {
        console.debug('viewport: ' + Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
        return (<Media
            {...imgDefaultProps}
            {...args}
        />);
    },
};
/** Image with ID */
export const ImageWithID = {
    ...DefaultImage,
    args: {
        id: 'image-id',
    },
};
/** Image with Alt */
export const ImageWithAlt = {
    ...DefaultImage,
    args: {
        alt: 'Alternative Text',
    },
};
/** Image with width/height */
export const ImageWithWidthAndHeight = {
    ...DefaultImage,
    args: {
        width: 400,
        height: 200,
    },
};
/** Image with srcset w/o sizes w/media query.<br>
  * No media query will be used because no "sizes"
  */
export const ImageWithSrcsetAndMediaQuery = {
    args: imgSrcSetWithQueryProps
};
/** Image with srcset w/o sizes and media query */
export const ImageWithSrcset = {
    args: imgSrcSetProps
};
/** Image with srcset/sizes */
export const ImageWithSrcsetAndSizes = {
    args: imgSrcSetSizesProps
};
/** Image with other attributes */
export const ImageWithOtherAttributes = {
    ...DefaultImage,
    args: {
        crossOrigin: 'anonymous',
        decoding: 'sync',
        elementTiming: 'test-timing',
        fetchPolicy: 'low',
        isMap: false,
        loading: 'lazy',
        referrerPolicy: 'same-origin',
        useMap: '',
    },
};

/** Image with style classes */
export const ImageWithStyleClasses = {
    ...DefaultImage,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Image with additional attributes */
export const ImageWithAttributes = {
    ...DefaultImage,
    args: {
        attributes: {
            'aria-label': 'Image Label',
            'aria-placeholder': 'Image Placeholder',
        },
    },
};
/** Image with datasets */
export const ImageWithDatasets = {
    ...DefaultImage,
    args: {
        datasets: new Map([
            ['id', 'image-data-id'],
            ['name', 'Image Data Name'],
        ]),
    },
};
