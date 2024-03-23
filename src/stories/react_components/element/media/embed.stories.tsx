import {
    EmbedProps,
    Media,
} from "../../../../components";
// @ts-ignore
import ExampleImage from '../../../assets/file_example_PNG_500kB.png';
// @ts-ignore
import FileExampleMp4 from '../../../assets/file_example_MP4_480_1_5MG.mp4';
import {deIndent} from "../../../../utils";

/**
 * The &lt;embed&gt; HTML element embeds external content at the specified point in the document.
 * This content is provided by an external application or other source of interactive content such
 * as a browser plugin.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed
 */
export default {
    title: 'React Component/Element/Media/Embed',
    component: Media,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Embed External Content element',
    },
    argTypes: {
        element: {
            control: 'none',
            type: {
                required: true,
            },
            description: 'Switcher for <code>Embed</code> component to render &lt;embed&gt;',
            table: {
                type: {
                    summary: '"embed"',
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
            description: 'The URL of the resource being embedded',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        type: {
            control: 'text',
            description: 'The MIME type to use to select the plugin to instantiate',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        title: {
            control: 'text',
            description: 'Specifies title of the external content',
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
            control: {type: 'number', min: 1},
            description: 'The displayed width of the resource, in CSS pixel',
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
            description: 'The displayed height of the resource, in CSS pixel',
            table: {
                type: {
                    summary: 'number',
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
                    summary: 'EmbedHTMLAttributes<HTMLEmbedElement>',
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
    }
};
// Default embed
const DefaultEmbed = {
    element: 'embed',
    src: ExampleImage,
    type: 'image/png',
};
/** Default embed */
export const Default = {
    render: (args: any) => <Media<EmbedProps>
        {...DefaultEmbed}
        {...args}
    />,
};
/** Embed video */
export const EmbedVideo = {
    ...Default,
    args: {
        src: FileExampleMp4,
        type: 'video/mp4',
    },
};
/** Embed with style classes */
export const EmbedWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Embed with additional attributes */
export const EmbedWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Embed Label',
            'aria-placeholder': 'Embed Placeholder',
        },
    },
};
/** Embed with datasets */
export const EmbedWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-embed-id'],
            ['name', 'Data Embed Name'],
        ]),
    },
};
