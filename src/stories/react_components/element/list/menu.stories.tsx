import {
    Container,
    getCssFramework,
    List,
} from "../../../../components";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The &lt;menu&gt; HTML element is described in the HTML specification as a semantic alternative to &lt;ul&gt;,
 * but treated by browsers (and exposed through the accessibility tree) as no different than &lt;ul&gt;. It
 * represents an unordered list of items (which are represented by &lt;li&gt; elements).
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu
 */
export default {
    title: 'React Component/Element/List/Menu',
    component: List,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Menu element',
    },
    decorators: [
        (Story: any) => (
            <Container
                classes={getCssFramework().getDefaultStyleClass('content')}
            >
                <Story />
            </Container>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>List</code> component to render &lt;menu&gt;',
            table: {
                type: {
                    summary: 'menu',
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
                            Item of the menu<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'LiProps', 'React Component/Element/List/Li'
                        ),
            table: {
                type: {
                    summary: 'LiProps[]',
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
                    summary: 'MenuHTMLAttributes<HTMLMenuElement>',
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
/** Default menu */
export const Default = {
    render: (args: any) => <List
        element={'menu'}
        items={{
            element: 'li',
            children: 'Menu item',
        }}
        {...args}
    />,
};
/** Menu with multiple items */
export const MenuWithMultipleItems = {
    ...Default,
    args: {
        items: [
            {element: 'li', children: 'Menu item 1'},
            {element: 'li', children: 'Menu item 2'},
            {element: 'li', children: 'Menu item 3'},
            {element: 'li', children: 'Menu item 4'},
        ]
    }
}
/** Menu with style classes */
export const MenuWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Menu with additional attributes */
export const MenuWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Menu Label',
            'aria-placeholder': 'Menu Placeholder',
        },
    },
};
/** Menu with datasets */
export const MenuWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-menu-id'],
            ['name', 'Data Menu Name'],
        ]),
    },
};
