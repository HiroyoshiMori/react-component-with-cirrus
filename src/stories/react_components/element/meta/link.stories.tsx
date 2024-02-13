import {Fragment} from "react";
import {
    Link,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;link&gt; HTML element specifies relationships between the current document and an external
 * resource. This element is most commonly used to link to stylesheets, but is also used to establish
 * site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices)
 * among other things.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
 */
export default {
    title: 'React Component/Element/Meta/Link',
    component: Link,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The External Resource Link element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                There is link &#x1f449;
                <Story />
                &#x1f448; element.
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Link</code> component to render &lt;link&gt;',
            table: {
                type: {
                    summary: 'iframe',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        itemProp: {
            control: 'none',
            type: {
                required: true,
            },
            description: 'Make this element flow content',
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
        rel: {
            control: 'text',
            description: 'Names a relationship of the linked document to the current document.',
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
            description: 'Define the type of the content linked to',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        href: {
            control: 'text',
            description: 'Specifies the URL of the linked resource',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        as: {
            control: 'select',
            options: [
                'Default',
                'audio', 'document', 'embed', 'fetch', 'font', 'image', 'object',
                'script', 'style', 'track', 'video', 'worker',
            ],
            mapping: {
                Default: undefined,
            },
            description: 'Specifies the type of content being loaded by the &lt;link&gt;, which is necessary '
                        + 'for request matching, application of correct content security policy, and setting of '
                        + 'correct Accept request header.<br />'
                        + 'Required when rel="preload" has been set on the &lt;link&gt; element, optional when '
                        + 'rel="modulepreload" has been set, and otherwise should not be used.',
            table: {
                type: {
                    summary: 'audio|document|embed|fetch|font|image|object|script|style|track|video|worker',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        crossOrigin: {
            control: 'select',
            options: [
                'Default', 'anonymous', 'use-credentials',
            ],
            mapping: {
                Default: undefined,
            },
            description: 'Indicates whether CORS must be used when fetching the resource.',
            table: {
                type: {
                    summary: 'anonymous|use-credentials',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        fetchpriority: {
            control: 'select',
            options: ['Default', 'high', 'low', 'auto'],
            mapping: {
                Default: undefined,
            },
            description: 'A hint of the relative priority to use when fetching a preloaded resource',
            table: {
                type: {
                    summary: 'high|low|auto',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        hrefLang: {
            control: 'text',
            description: 'Indicates the language of the linked resource',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        imageSize: {
            control: 'text',
            description: 'For rel=preload" and as="image" only, indicates to repload the appropriate resource '
                        + 'used by an <code>img</code> element with corresponding values for its <code>srcset</code> '
                        + 'and <code>sizes</code> attributes.',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        imageSrcset: {
            control: 'text',
            description: 'For rel="preload" and as="image" only, indicate to repload the appropriate resource '
                        + 'used by an <code>img</code> element with corresponding values for its <code>srcset</code> '
                        + 'and <code>sizes</code> attributes.',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        integrity: {
            control: 'text',
            description: 'A base64-encoded cryptographic hash of the resource (file) you\'re telling the browser to fetch',
            table: {
                type: {
                    summary: 'string',
                    detail: 'openssl dgst -sha384 -binary __FILE_PATH__ | openssl base64 -A'
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        mediaQuery: {
            control: 'object',
            description: 'Specifies the media that the linked resource applies to',
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
            control: 'select',
            options: [
                'Default',
                'no-referrer', 'no-referrer-when-downgrade',
                'origin', 'origin-when-cross-origin', 'unsafe-url',
            ],
            mapping: {
                Default: undefined,
            },
            description: 'Indicates which referrer to use when fetching the resource',
            table: {
                type: {
                    summary: 'no-referrer|no-referrer-when-downgrade|origin|origin-when-cross-origin|unsafe-url',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        sizes: {
            control: 'object',
            description: 'Defines the sizes of the icons for visual media contained in the resource',
            table: {
                type: {
                    summary: '"any"|[number, number]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        title: {
            control: 'text',
            description: 'Specifies apecial semantics on the &lt;link&gt;',
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
                    summary: 'LinkHTMLAttributes<HTMLLinkElement>',
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
/** Default Link */
export const Default = {
    render: (args: any) => <Link
        element={'link'}
        itemProp={true}
        rel={'StyleSheet'}
        type={'text/css'}
        href={'/assets/test.css'}
        {...args}
    />,
};
/** Link with as and hreflang */
export const LinkWithAsAndHreflang = {
    ...Default,
    args: {
        as: 'style',
        hrefLang: 'en_US',
    },
};
/** Link with size/title */
export const LinkWithSizeAndTitle = {
    ...Default,
    args: {
        rel: 'apple-touch-icon',
        sizes: [114, 114],
        href: '/assets/context.png',
        type: 'image/png',
        title: 'Touch Icon',
    },
};
/** Link with rel=preload and as=image for imageSize/imageSrcset */
export const LinkWithImageSizeAndImageSrcset = {
    ...Default,
    args: {
        rel: 'preload',
        as: 'image',
        type: undefined,  // no support when preload
        href: '/assets/file_example_PNG_1MB.png',
        imageSizes: '50vw',
        imageSrcset: [
            ['/assets/file_example_PNG_500kB.png', '320w'],
            ['/assets/file_example_PNG_2100kB.png', '1280w'],
        ],
    },
};
/** Link with media query */
export const LinkWithMediaQuery = {
    ...Default,
    args: {
        mediaQuery: ['min-width: 640px', 'max-width: 1280px'],
    },
};
/** Link with other attributes */
export const LinkWithOtherAttributes = {
    ...Default,
    args: {
        crossOrigin: 'anonymous',
        fetchpriority: 'auto',
        referrerPolicy: 'no-referrer',
        // openssl dgst -sha384 -binary /assets/test.css | openssl base64 -A
        integrity: 'sha384-HcA1xCFQhTIZK6joBGhcqaqVPjtfLrXrZUeFKLm+TEBZMoUlEp+ynByKupjVl3m7',
    },
};
/** Link with style classes */
export const LinkWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Link with additional attributes */
export const LinkWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Link Label',
            'aria-placeholder': 'Link Placeholder',
        },
    },
};
/** Link with datasets */
export const LinkWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-link-id'],
            ['name', 'Data Link Name'],
        ]),
    },
};
