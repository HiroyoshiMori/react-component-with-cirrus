import {
    CONTROLS_LIST,
    CROSS_ORIGINS,
    Media,
    PRELOADS,
} from "../../../../components";
import {deIndent} from "../../../../utils";
// @ts-ignore
import ExampleAudioMp3 from '../../../assets/file_example_MP3_700KB.mp3';
// @ts-ignore
import ExampleAudioOgg from '../../../assets/file_example_OOG_1MG.ogg';

/**
 * The &lt;audio&gt; HTML element is used embed sound content in documents.<br>
 * It contain one or more audio sources, represented using the <code>src</code> attribute
 * or the &lt;source&gt; element.<br>
 * Credits: Media files are Copyright file-examples.com | https://file-examples.com/
 */
export default {
    title: 'React Component/Element/Media/Audio',
    component: Media,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Embed Audio element',
    },
    argTypes: {
        element: {
            control: 'none',
            type: {
                required: true,
            },
            description: 'Switcher for <code>Media</code> component to render &lt;audio&gt;',
            table: {
                type: {
                    summary: '"audio"',
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
            description: 'URL of the audio to embed',
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
            description: 'Children nodes in &lt;audio&gt; element',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        autoPlay: {
            control: 'boolean',
            description: 'Indicates the audio automatically begins',
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
            description: 'Show controls to allow the user to control audio playback and etc.',
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
            description: 'List of controls to show for the audio element',
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
            description: 'Indicates whether to use CORS to fetch the related audio',
            table: {
                type: {
                    summary: '"' + CROSS_ORIGINS.join('"|"') + '"',
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
            description: 'Automatically seek back to the start upon reaching the end of the audio',
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
            description: 'Indicate the default setting of the audio contained in the audio',
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
            description: 'Indicate that the audio is to be played "inline", that is within the element\'s playback area',
            table: {
                type: {
                    summary: 'boolean',
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
                + 'the best user experience regarding what content is loaded before the audio is played',
            table: {
                type: {
                    summary: '"' + PRELOADS.join('"|"') + '"',
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
                    summary: 'AudioHTMLAttributes<HTMLAudioElement>',
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
// Default audio
const DefaultAudio = {
    element: 'audio',
    src: ExampleAudioMp3,
    controls: true,
    attributes: {
        style: {
            width: 500,
            height: 100,
            border: '1px solid #999',
        },
    },
};

/**
 * Default audio<br>
 * With special tricks for style attributes
 */
export const Default = {
    render: (args: any) => <Media
        {...DefaultAudio}
        {...args}
    />,
};
/** Audio with children */
export const AudioWithChildren = {
    render: (args: any) => <Media
        {...DefaultAudio}
        {...args}
    >
        This is Audio Children elements.
    </Media>,
};
/** Audio with Source */
export const AudioWithSource = {
    ...Default,
    args: {
        sources: [{
            src: ExampleAudioMp3,
            type: 'audio/mp3',
        }, {
            src: ExampleAudioOgg,
            type: 'audio/ogg',
        }],
    },
};
/** Audio with other attributes */
export const AudioWithOtherAttributes = {
    ...Default,
    args: {
        controlsList: ['nodownload', 'nofullscreen', 'noremoteplayback'],
        crossOrigin: 'anonymous',
        disableRemotePlayback: true,
        loop: true,
        muted: true,
        playsInline: true,
        preload: 'auto',
    },
};
/** Audio with style classes */
export const AudioWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Audio with additional attributes */
export const AudioWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Audio Label',
            'aria-placeholder': 'Audio Placeholder',
        },
    },
};
/** Audio with datasets */
export const AudioWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'audio-data-id'],
            ['name', 'Audio Data Name'],
        ]),
    },
};
