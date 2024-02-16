import {Fragment} from "react";
import {Container} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;track&gt; HTML element is used as a child of the media elements, &lt;audio&gt; and &lt;video&gt;. It lets
 * you specify timed text tracks (or time-based data), for example to automatically handle subtitles.
 * The tracks are formatted in WebVTT format (.vtt files) -- Web Video Text Tracks.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
 */
export default {
    title: 'React Component/Element/Container/Block/Track',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Embed Text Track element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <video controls src={'/assets/file_example_WEBM_480_900KB.webm'}>
                    <Story />
                </video>
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;track&gt;',
            table: {
                type: {
                    summary: '"track"',
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
        src: {
            control: 'text',
            type: {
                required: true,
            },
            description: 'Specifies address of the track (.vtt file)',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        default: {
            control: 'boolean',
            description: 'Indicates that the track should be enabled unless the user\'s preferences indicate that '
                        + 'another track is more appropriate',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        kind: {
            control: 'select',
            options: [
                'Default',
                '"subtitles"', '"captions"', '"descriptions"', '"chapters"', '"metadata"',
            ],
            mapping: {
                Default: undefined,
            },
            description: 'Specifies how the text track is meant to be used.',
            table: {
                type: {
                    summary: '"subtitles"|"captions"|"descriptions"|"chapters"|"metadata"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        label: {
            control: 'text',
            description: 'Specifies a user-readable title of the text track which is used by the browser when '
                        + 'listing available text tracks.',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        srcLang: {
            control: 'text',
            description: 'Specifies the language of the track text data',
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
                },
            },
        },
        attributes: {
            control: 'object',
            description: 'Additional attributes',
            table: {
                type: {
                    summary: 'TrackHTMLAttributes<HTMLTrackElement>',
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
/** Default track */
export const Default = {
    render: (args: any) => <Container
        element={'track'}
        src={'/assets/test.vtt'}
        {...args}
    />,
};
/** Track with default */
export const TrackWithDefault = {
    ...Default,
    args: {
        default: true,
    },
};
/** Track with kind */
export const TrackWithKind = {
    ...Default,
    args: {
        kind: 'captions',
    },
};
/** Track with label/srcLang */
export const TrackWithLabelAndSrcLang = {
    ...Default,
    args: {
        label: 'Test Track',
        srcLang: 'en',
    },
};
/** Track with style classes */
export const TrackWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Track with additional attributes */
export const TrackWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Track Label',
            'aria-placeholder': 'Track Placeholder',
        },
    },
};
/** Track with datasets */
export const TrackWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-track-id'],
            ['name', 'Data Track Name'],
        ]),
    },
};
