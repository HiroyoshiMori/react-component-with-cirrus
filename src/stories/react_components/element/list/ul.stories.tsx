import {
    Container, DivProps,
    getCssFramework,
    List,
} from "../../../../components";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The &lt;ul&gt; HTML element represents an unordered list of items, typically rendered as bulleted list.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul
 */
export default {
    title: 'React Component/Element/List/Ul',
    component: List,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Unordered List element',
    },
    decorators: [
        (Story: any) => (
            <Container<DivProps>
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
            description: 'Switcher for <code>List</code> component to render &lt;ul&gt;',
            table: {
                type: {
                    summary: '"ul"',
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
        commonClassesInItem: {
            control: 'object',
            description: 'Common style classes for child items',
            table: {
                type: {
                    summary: 'string[]',
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
                    summary: 'HTMLAttributes<HTMLUListElement>',
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
/** Default unordered list */
export const Default = {
    render: (args: any) => <List
        element={'ul'}
        items={{
            element: 'li',
            children: 'List item',
        }}
        {...args}
    />,
};
/** Unordered list with multiple items */
export const UnorderedListWithMultipleItems = {
    ...Default,
    args: {
        items: [
            {element: 'li', children: 'List item 1'},
            {element: 'li', children: 'List item 2'},
            {element: 'li', children: 'List item 3'},
            {element: 'li', children: 'List item 4'},
        ]
    }
}
/** Unordered list with common style classes for child items */
export const UnorderedListWithCommonStyleClasses = {
    ...Default,
    args: {
        items: [
            {element: 'li', children: 'List item 1'},
            {element: 'li', children: 'List item 2'},
            {element: 'li', children: 'List item 3'},
            {element: 'li', children: 'List item 4'},
        ],
        commonClassesInItem: ['test-common-1'],
    }
}
/** Unordered list with style classes */
export const UnorderedListWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Unordered list with additional attributes */
export const UnorderedListWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Unordered List Label',
            'aria-placeholder': 'Unordered List Placeholder',
        },
    },
};
/** Unordered list with datasets */
export const UnorderedListWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-ul-id'],
            ['name', 'Data Unordered List Name'],
        ]),
    },
};
