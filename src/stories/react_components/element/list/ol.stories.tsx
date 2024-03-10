import {
    Container,
    getCssFramework,
    List,
} from "../../../../components";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The &lt;ol&gt; HTML element represents an ordered list of items -- typically rendered as a numbered list.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
 */
export default {
    title: 'React Component/Element/List/Ol',
    component: List,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Ordered List element',
    },
    decorators: [
        (Story: any) => (
            <Container
                element={'div'}
                classes={getCssFramework().getDefaultStyleClass('content')}
            >
                <Story />
            </Container>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            type: {
                required: true,
            },
            description: 'Switcher for <code>List</code> component to render &lt;ol&gt;',
            table: {
                type: {
                    summary: '"ol"',
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
        items: {
            control: 'object',
            description: deIndent(`
                            Item of the list<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'LilProps', 'React Component/Element/List/Li'
                        ) + ' / '
                        + linkInStoryBook(
                            'ScriptProps', 'React Component/Element/Script'
                        ) + ' / '
                        + linkInStoryBook(
                            'TemplateProps', 'React Component/Element/Container/Template'
                        ),
            table: {
                type: {
                    summary: deIndent(`
                                (
                                    LiProps
                                    | ScriptProps & {element: 'script'}
                                    | TemplateProps & {element: 'template'}
                                )[]
                            `),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        reversed: {
            control: 'boolean',
            description: 'Specifies that the list\'s items are in reverse order',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        start: {
            control: 'number',
            description: 'An integer to start counting for the list items',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        type: {
            control: 'radio',
            options: ['Default', 'a', 'A', 'i', 'I', '1'],
            mapping: {
                Default: undefined,
            },
            description: 'The numbering type',
            table: {
                type: {
                    summary: 'a|A|i|I|1',
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
                    summary: 'OlHTMLAttributes<HTMLOListElement>',
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
/** Default ordered list */
export const Default = {
    render: (args: any) => <List
        element={'ol'}
        items={{
            element: 'li',
            children: 'List item',
        }}
        {...args}
    />,
};
/** Ordered list reversed */
export const OrderedListReversed = {
    ...Default,
    args: {
        items: [
            {element: 'li', children: 'List item 1'},
            {element: 'li', children: 'List item 2'},
            {element: 'li', children: 'List item 3'},
            {element: 'li', children: 'List item 4'},
        ],
        reversed: true,
    },
};
/** Ordered list with start */
export const OrderedListWithStart = {
    ...Default,
    args: {
        items: [
            {element: 'li', children: 'List item 1'},
            {element: 'li', children: 'List item 2'},
            {element: 'li', children: 'List item 3'},
            {element: 'li', children: 'List item 4'},
        ],
        start: 10,
    },
};
/** Ordered List with type */
export const OrderedListWithType = {
    ...Default,
    args: {
        items: [
            {element: 'li', children: 'List item 1'},
            {element: 'li', children: 'List item 2'},
            {element: 'li', children: 'List item 3'},
            {element: 'li', children: 'List item 4'},
        ],
        type: 'a',
    },
};
/** Ordered list with style classes */
export const OrderedListWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Ordered list with additional attributes */
export const OrderedListWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Ordered List Label',
            'aria-placeholder': 'Ordered List Placeholder',
        },
    },
};
/** Ordered list with datasets */
export const OrderedListWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-ol-id'],
            ['name', 'Data Ordered List Name'],
        ]),
    },
};
