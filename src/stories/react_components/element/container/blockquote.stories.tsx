import {
    Fragment,
} from "react";
import {
    AProps, BlockQuoteProps,
    CiteProps,
    Container,
    Figure,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;blockquote&gt; HTML element indicates that the enclosed text is an extended quotation. Usually
 * this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the
 * quotation may be given using the <code>cite</code> attribute, while text representation of the source
 * can be given using the &lt;site&gt; element.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
 */
export default {
    title: 'React Component/Element/Container/Block/Blockquote',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Block Quotation element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Figure element={'figure'}>
                    <Story />
                    <Container<CiteProps>
                        element={'cite'}
                    >
                        <Container<AProps>
                            element={'a'}
                            href={'https://en.wiktionary.org/wiki/%E7%82%BA%E3%81%9B%E3%81%B0%E6%88%90%E3%82%8B'}
                            target={'cite-window'}
                        >Waka</Container>,
                        a genre of Japanese poetry,
                    </Container>
                    read by&nbsp;
                    <Container<AProps>
                        element={'a'}
                        href={'https://en.wikipedia.org/wiki/Uesugi_Harunori'}
                        target={'cite-window'}
                    >
                        Youzan Uesugi
                    </Container>
                </Figure>
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;blockquote&gt;',
            table: {
                type: {
                    summary: '"blockquote"',
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
        children: {
            control: 'text',
            description: 'Content of component',
            table: {
                type: {
                    summary: 'ReactNode',
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
                    summary: 'BlockquoteHTMLAttributes<HTMLQuoteElement>',
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
// Default blockquote
const DefaultBlockQuote = {
    element: 'blockquote',
};
/** Default blockquote */
export const Default = {
    render: (args: any) => <Container<BlockQuoteProps>
        {...DefaultBlockQuote}
        {...args}
    >
        為せば成る　為さねば成らぬ　何事も　成らぬは人の為さぬなりけり<br />
        If you do something, it will happen. If you don't do something, it will not happen.<br />
        If something doesn't happen, it's because it's not for people.
    </Container>,
};
/** Blockquote with style classes */
export const BlockQuoteWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Blockquote with additional attributes */
export const BlockquoteWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Block Quote Label',
            'aria-placeholder': 'Block Quote Placeholder',
        },
    },
};
/** Blockquote with datasets */
export const BlockquoteWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-blockquote-id'],
            ['name', 'Data Blockquote Name'],
        ]),
    },
};
