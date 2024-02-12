import {
    CONTROLS_LIST,
    CROSS_ORIGINS,
    Media,
    PRELOADS,
} from "../../../../components";
import {deIndent} from "../../../../utils";
// @ts-ignore
import FileExampleMp4 from '../../../assets/file_example_MP4_480_1_5MG.mp4';
// @ts-ignore
import FileExampleWebm from '../../../assets/file_example_WEBM_480_900KB.webm';
// @ts-ignore
import AssetsImage from '../../../assets/assets.png';

/**
 * The &lt;video&gt; HTML element embeds a media player which supports video playback into the document.<br>
 * Credits: Media files are Copyright file-examples.com | https://file-examples.com/
 */
export default {
    title: 'React Component/Element/Embed/Video',
    component: Media,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Video Embed element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Media</code> component to render &lt;video&gt;',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: 'video',
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
        src: {
            control: 'text',
            description: 'URL of the video to embed',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        source: {
            control: 'object',
            description: '&lt;source&gt; properties in this element.',
            table: {
                type: {
                    summary: 'SourceSrcProps[]',
                    detail: deIndent(`
                            {
                                src: string;
                            }
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        children: {
            control: 'object',
            description: 'Children nodes in &lt;video&gt; element',
            table: {
                type: {
                    summary: 'ReactNode',
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
        autoPlay: {
            control: 'boolean',
            description: 'Indicates the video automatically begins',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        controls: {
            control: 'boolean',
            description: 'Show controls to allow the user to control video playback and etc.',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        controlsList: {
            control: 'object',
            description: 'List of controls to show for the video element',
            table: {
                type: {
                    summary: ['string'].concat(CONTROLS_LIST),
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
                'Default': undefined,
            },
            description: 'Indicates whether to use CORS to fetch the related video',
            table: {
                type: {
                    summary: CROSS_ORIGINS.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        disablePictureInPicture: {
            control: 'boolean',
            description: 'Prevent the browser from suggesting a Picture-in-Picture context menu or '
                        + 'to request Picture-in-Picture automatically in some cases',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        disableRemotePlayback: {
            control: 'boolean',
            description: 'Disable the capability of remote playback in devices that are attached '
                        + 'using wired and wireless technologies such as Miracast, Chromecast and DLNA',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        loop: {
            control: 'boolean',
            description: 'Automatically seek back to the start upon reaching the end of the video',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'boolean',
                },
            },
        },
        muted: {
            control: 'boolean',
            description: 'Indicate the default setting of the audio contained in the video',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        playsInline: {
            control: 'boolean',
            description: 'Indicate that the video is to be played "inline", that is within the element\'s playback area',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        poster: {
            control: 'text',
            description: 'URL for an image to be shown while the video is downloading',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        preload: {
            control: 'select',
            options: ['Default'].concat(PRELOADS),
            mapping: {
                'Default': undefined,
            },
            description: 'To provide a hint to the browser about what the author thinks will lead to '
                        + 'the best user experience regarding what content is loaded before the video is played',
            table: {
                type: {
                    summary: PRELOADS.join('|'),
                    detail: 'Empty string: Synonym of the auto',
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
                    summary: 'VideoHTMLAttributes<HTMLVideoElement>',
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
// Default video
const DefaultVideo = {
    element: 'video',
    src: FileExampleMp4,
    type: 'video/mp4',
    controls: true,
};

/** Default video */
export const Default = {
    render: (args: any) => <Media
        {...DefaultVideo}
        {...args}
    />,
};
/** Video with with and height */
export const VideoWithWidthAndHeight = {
    ...Default,
    args: {
        width: 338,
        height: 640,
    },
};
/** Video with children node */
export const VideoWithChildren = {
    render: (args: any) => <Media
        {...DefaultVideo}
        {...args}
    >
        This is Video Children elements.
    </Media>
};
/** Video with <source> */
export const VideoWithSource = {
    ...Default,
    args: {
        sources: [{
            src: FileExampleWebm,
            type: 'video/webm',
        }],
    },
};
/** Video with other attributes */
export const VideoWithOtherAttributes = {
    ...Default,
    args: {
        autoPlay: true,
        controlsList: ['nofullscreen', 'nodownload', 'noremoteplayback'],
        crossOrigin: 'anonymous',
        disablePictureInPicture: true,
        disableRemotePlayback: true,
        loop: true,
        muted: true,
        playsInline: true,
        poster: AssetsImage,
        preload: 'auto',
    },
};

/** Video with style classes */
export const VideoWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Video with additional attributes */
export const VideoWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Video Label',
            'aria-placeholder': 'Video Placeholder',
        },
    },
};
/** Video with datasets */
export const VideoWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'video-data-id'],
            ['name', 'Video Data Name'],
        ]),
    },
};
