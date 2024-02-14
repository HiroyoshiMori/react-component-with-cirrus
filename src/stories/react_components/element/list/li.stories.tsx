import {
    ListItem,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;li&gt; HTML element is used to represent an item in a list. It must be contained in a parent
 * element: an ordered list (&lt;ol&gt;), an unordered list (&lt;ul&gt;), or a menu (&lt;menu&gt;). In
 * menus and unordered lists, list items are usually displayed using bullet points. In ordered lists,
 * they are usually displayed with an ascending counter on the left, such as a number or letter.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
 */
export default {
    title: 'React Component/Element/List/Li',
    component: ListItem,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The List Item element',
    },
    decorators: [
        (Story: any) => (
            <ul>
                <Story />
            </ul>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>ListItem</code> component to render &lt;li&gt;',
            table: {
                type: {
                    summary: 'li',
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
            description: 'Content of item in a list',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        value: {
            control: 'number',
            description: 'Indicates the current ordinal value of the list item as defined by the &lt;ol&gt; element',
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
                    summary: 'LiHTMLAttributes<HTMLLIElement>',
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
/** Default list item */
export const Default = {
    render: (args: any) => <ListItem
        element={'li'}
        {...args}
    >
        This is list item content.
    </ListItem>
};
/** List item with value */
export const ListItemWithValue = {
    ...Default,
    args: {
        value: 100,
    },
};
/** List item with style classes */
export const ListItemWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** List item with additional attributes */
export const ListItemWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'List Item Label',
            'aria-placeholder': 'List Item Placeholder',
        },
    },
};
/** List item with datasets */
export const ListItemWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-li-id'],
            ['name', 'Data List item Name'],
        ]),
    },
};
