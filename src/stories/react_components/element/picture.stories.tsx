import React from "react";
import {Media} from "../../../components";
// @ts-ignore
import AssetsImage from '../../assets/assets.png';
// @ts-ignore
import ContextImage from '../../assets/context.png';
// @ts-ignore
import StylingImage from '../../assets/styling.png';
import {deIndent} from "../../../utils";

export default {
    component: Media,
    tags: ['autodocs'],
    title: 'React Component/Element/Media/Picture',
    parameters: {
        componentSubtitle: 'The Picture element',
        docs: {
            description: {
                component: 'The <picture> HTML element contains zero or more <source> elements and one <img> element '
                        + 'to offer alternative versions of an image for different display/device scenarios.',
            },
        },
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for Media component to render <picture>',
            type: {
                required: true,
            },
            table: {
                defaultValue: {
                    summary: 'picture',
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
        img: {
            control: 'text',
            description: '<img> property in this element',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        sources: {
            control: 'object',
            description: '<source> properties in this element.',
            table: {
                type: {
                    summary: 'SourceSrcsetProps[]',
                    detail: deIndent(`
                            {
                                id?: string,
                                type?: string,
                                media?: string,
                                width?: number,
                                height?: number,
                                media?: string[],
                                srcSet: string,
                                sizes: number | string,
                                classes?: string[],
                                attributes?: SourceHTMLAttributes<HTMLSourceElement>,
                                datasets?: Map<string, string>,
                            }
                        `),
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
                    summary: 'HTMLAttributes<HTMLPictureElement>',
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
// Default picture property
const pictureProps = {
    element: 'picture',
    id: 'picture-id',
    source: [{
        media: ['max-width: 600px', 'min-width: 400px'],
        srcset: ContextImage,
        sizes: '100w',
    }, {
        media: ['max-width: 400px'],
        srcset: StylingImage,
        sizes: '90w',
    }],
    img: {
        element: 'img',
        src: AssetsImage,
    },
    classes: ['test-class'],
    attributes: {'aria-label': 'Label Text'},
    datasets: new Map([
        ['id', 'picture-id'], ['name', 'Picture Name'],
    ]),
};

/** Default picture */
export const DefaultPicture = {
    render: (args: any) => <Media
        {...pictureProps}
        {...args}
    />,
};
/** Picture with ID */
export const PictureWithID = {
    ...DefaultPicture,
    args: {
        id: 'picture-id',
    },
};

/** Picture with style classes */
export const PictureWithClasses = {
    ...DefaultPicture,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Picture with additional attributes */
export const PictureWIthAttributes = {
    ...DefaultPicture,
    args: {
        attributes: {
            'aria-label': 'Picture Label',
            'aria-placeholder': 'Picture Placeholder',
        },
    },
};
/** Picture with datasets */
export const PictureWithDatasets = {
    ...DefaultPicture,
    args: {
        datasets: new Map([
            ['id', 'picture-data-id'],
            ['name', 'Picture Data Name'],
        ]),
    },
};

