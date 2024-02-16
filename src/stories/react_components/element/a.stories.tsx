import {
    Anchor,
    TARGETS,
} from "../../../components";
import {deIndent} from "../../../utils";
import {action} from "@storybook/addon-actions";

/**
 * The &lt;a&gt; HTML element (or anchor element), with its <code>href</code> attribute, creates a hyperlink to we pages,
 * file, email addresses, locations in the same page, or anything else a URL can address.
 * Content within each &lt;a&gt; should indicate the link's destination. If the <code>href</code> attribute is present,
 * pressing the enter key while focused on the &lt;a&gt; element will activate it.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 */
export default {
    title: 'React Component/Element/Anchor',
    component: Anchor,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Anchor element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Anchor</code> component to render &lt;a&gt;',
            table: {
                type: {
                    summary: '"a"',
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
        href: {
            control: 'text',
            description: 'The URL that the hyperlink points to. Links are not restricted to HTTP-based URLs',
            table: {
                type: {
                    summary: 'string',
                    detail: deIndent(`
                            URL scheme supported by browswers:
                            - Sections of a page with document fragments
                            - Specific text portions with text fragments
                            - Pieces of media files with media fragments
                            - Telephone numbers with tel: URLs
                            - Email addresses with mailto: URLs
                            - SMS text messages with sms: URLs
                            - While web browsers may not support other URL schemes, websites can with registerProtocolHandler()
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        onClick: {
            action: 'clicked',
            description: 'Function which is called when user clicked',
            table: {
                type: {
                    summary: '(e: React.MouseEvent<HTMLAnchorElement>) => void',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        children: {
            control: 'object',
            description: 'Label for hypertext',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        hrefLang: {
            control: 'text',
            description: 'Hints at the human language of the linked URL. No built-in functionality. '
                        + 'Allowed values are the same as the global <code>lang</code> attribute',
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
            description: deIndent(`
                            Cause the browser to treat the linked URL as a download. Can be used with or without a <code>filename</code> value:
                            <span class="li">
                                Without a value, the browser will suggest a filename/extension, generated from various sources:
                                <span class="li">The Content-Disposition HTTP header</span>
                                <span class="li">The final segment in the URL path</span>
                                <span class="li">The media type (from the Content-Type header, the start of a data: URL, or Blob.type for a blob: URL)</span>
                            </span>
                            <span class="li">
                                filename: defining a value suggests it as the filename. &sol; and &bsol; characters are converted to underscores (_).
                                Filesystems may forbid other characters in filenames, so browsers will adjust the suggested name if necessary.
                            </span>
                    `),
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
            description: 'A space-separated list of URLs. When the link is followed, the browser will '
                        + 'send POST requests with the body <code>PING</code> to the URLs. Typically for tracking.',
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
            control: 'text',
            description: 'How much of the referrer',
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
            control: 'object',
            description: 'The relationship of the linked URL as space-separated link types',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        target: {
            control: 'text',
            description: 'Where to display the linked URL, as the name for a browsing context '
                        + '(a tab, window, or &lt;iframe&gt;).',
            table: {
                type: {
                    summary: '"' + TARGETS.join('"|"') + '"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        type: {
            control: 'text',
            description: 'Hints at the linked URL\'s format with a MIME type.',
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
                    summary: 'AnchorHTMLAttributes<HTMLAnchorElement>',
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

// Default anchor
const DefaultAnchor = {
    element: 'a',
    href: '#',
};

/** Default Anchor */
export const Default = {
    render: (args: any) => <Anchor
        {...DefaultAnchor}
        {...args}
    >
        Anchor Text
    </Anchor>,
};
/** Anchor with ping */
export const AnchorWithPing = {
    ...Default,
    args: {
        ping: ['https://one.example.com/', 'https://two.example.com/', 'https://three.example.com/'],
    },
};
/** Anchor with rel */
export const AnchorWithRel = {
    ...Default,
    args: {
        rel: ['rel-test1', 'rel-test2', 'rel-test3'],
    },
};
/** Anchor with other attributes */
export const AnchorWithOtherAttributes = {
    ...Default,
    args: {
        onClick: action('Clicked'),
        hrefLang: 'en_GB',
        download: true,
        referrerPolicy: 'no-referrer',
        target: '_blank',
        type: 'text/html',
    },
};
/** Anchor with style classes */
export const AnchorWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Anchor with additional attributes */
export const AnchorWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Anchor Label',
            'aria-placeholder': 'Anchor Placeholder',
        },
    },
};
/** Anchor with datasets */
export const AnchorWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-anchor-id'],
            ['name', 'Data Anchor Name'],
        ]),
    },
};
