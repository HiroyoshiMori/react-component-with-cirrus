import {
    ArticleProps,
    Container,
    Heading,
    Paragraph,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;article&gt; HTML element represents a self-contained composition in a document, page,
 * application, or site, which is intended to be independently distributable or resusable (e.g.,
 * in syndication). Examples include: a forum post, a magazine or newspaper article, or a blog entry,
 * a product card, a user-submitted comment, an interactive widget or gadget, or any other independent
 * item of content.
 */
export default {
    title: 'React Component/Element/Container/Block/Article',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Article Contents element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;article&gt;',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: '"article"',
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
            control: 'object',
            description: 'Content of element',
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
                    summary: 'HTMLAttributes<HTMLDivElement>',
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
// Default article property
const DefaultArticleProps = {
    element: 'article',
};

/** Default article contents */
export const Default = {
    render: (args: any) => <Container<ArticleProps>
        {...DefaultArticleProps}
        {...args}
    >
        <Heading element={'heading'} level={1}>Example contents</Heading>
        <Container
            element='article'
        >
            <Heading element={'heading'} level={2}>Example title</Heading>
            <Paragraph element={'p'}>Example 1</Paragraph>
        </Container>
    </Container>,
};
/** Article contents with style classes */
export const ArticleWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Article contents with additional attributes */
export const ArticleWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Article Label',
            'aria-placeholder': 'Article Placeholder',
        },
    },
};
/** Article contents with datasets */
export const ArticleWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'article-data-id'],
            ['name', 'Article Data Name'],
        ]),
    },
};
