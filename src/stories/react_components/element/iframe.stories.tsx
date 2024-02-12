import {
    Iframe,
} from "../../../components";
import {deIndent} from "../../../utils";

/**
 * The &lt;iframe&gt; HTML element represents a nested browsing context, embedding another
 * HTML page into the current one.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
 */
export default {
    title: 'React Component/Element/Iframe',
    component: Iframe,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Inline Frame element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Iframe</code> component to render &lt;iframe&gt;',
            table: {
                type: {
                    summary: 'iframe',
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
        title: {
            control: 'text',
            type: {
                required: true,
            },
            description: 'Description of the embedded content',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        src: {
            control: 'text',
            description: 'The URL of the page to embed. Use a value of <code>about:blank</code> to embed an empty page.',
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
            description: 'The width of the frame in CSS pixels. Default is 300.',
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
            description: 'The height of the frame in CSS pixels. Default is 150.',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        allow: {
            control: 'object',
            description: 'Specifies a Permissions Policy for the &lt;iframe&gt;',
            table: {
                type: {
                    summary: '*|()|self|src|string[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        allowFullscreen: {
            control: 'boolean',
            description: 'Set <code>true</code> if the &lt;iframe&gt; can activate fullscreen mode',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        loading: {
            control: 'select',
            options: ['Default', 'eager', 'lazy'],
            mapping: {
                Default: undefined,
            },
            description: 'Defer loading of the iframe until it reaches a calculated distance from the visual viewport',
            table: {
                type: {
                    summary: 'eager|lazy',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        name: {
            control: 'string',
            description: 'A targetable name for the embedded browsing context',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        referrerPolicy: {
            control: 'select',
            options: [
                'Default',
                'no-referrer', 'no-referrer-when-downgrade',
                'origin', 'origin-when-cross-origin',
                'same-origin', 'strict-origin', 'strict-origin-when-cross-origin',
                'unsafe-url',
            ],
            mapping: {
                Default: undefined,
            },
            description: 'Indicates which referrer to send when fetching the frame\'s resource:<br />'
                        + 'Default:strict-origin-when-cross-origin ',
            table: {
                type: {
                    summary: 'no-referrer|no-referrer-when-downgrade|origin|origin-when-cross-origin'
                            + '|same-origin|strict-origin|strict-origin-when-cross-origin|unsafe-url',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        sandbox: {
            control: 'select',
            options: [
                'Default',
                'allow-downloads', 'allow-downloads-without-user-activation',
                'allow-forms', 'allow-modals', 'allow-orientation-lock',
                'allow-pointer-lock', 'allow-popups', 'allow-popups-to-escape-sandbox',
                'allow-presentation', 'allow-same-origin', 'allow-scripts',
                'allow-storage-access-by-user-activation', 'allow-top-navigation',
                'allow-top-navigation-by-user-activation',
                'allow-top-navigation-to-custom-protocols',
            ],
            mapping: {
                Default: undefined,
            },
            description: 'Controls the restriction applied to the content embedded in the &lt;iframe&gt;.',
            table: {
                type: {
                    summary: 'allow-downloads|allow-downloads-without-user-activation|allow-forms|allow-modals'
                            + '|allow-orientation-lock|allow-pointer-lock|allow-popups|allow-popups-to-escape-sandbox'
                            + '|allow-presentation|allow-same-origin|allow-scripts'
                            + '|allow-storage-access-by-user-activation|allow-top-navigation'
                            + '|allow-top-navigation-by-user-activation|allow-top-navigation-to-custom-protocols',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        srcDoc: {
            control: 'text',
            description: 'Inline HTML to embed, overriding the src attributes.',
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
                    summary: 'IframeHTMLAttributes<HTMLIFrameElement>',
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
// default iframe src
const srcUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6481.436048626816!2d139.74770396857255!3d35.68394448988785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0b19763daf%3A0xd8f25ad45d307110!2z44CSMTAwLTAwMDE!5e0!3m2!1sja!2sjp!4v1706964577391!5m2!1sja!2sjp';

/** Default iframe */
export const Default = {
    render: (args: any) => <Iframe
        title={'iframe example'}
        src={srcUrl}
        width={600}
        height={450}
        {...args}
    />,
};
/** iframe with other attributes */
export const IframeWithOtherAttributes = {
    ...Default,
    args: {
        allow: '*',
        allowFullScreen: true,
        loading: 'lazy',
        name: 'iframe_example',
        referrerPolicy: 'origin',
        sandbox: 'allow-same-origin',
        srcDoc: 'This is srcDoc content which overrides src attribute. Do you see this sentence?',
    },
};
/** iframe with style classes */
export const IframeWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** iframe with additional attributes */
export const IframeWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Iframe Label',
            'aria-placeholder': 'Iframe Placeholder',
        },
    },
};
/** iframe with datasets */
export const IframeWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-iframe-id'],
            ['name', 'Data iframe Name'],
        ]),
    },
};
