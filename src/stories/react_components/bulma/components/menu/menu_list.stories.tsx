import {Fragment} from "react";
import {AsideProps, Container, MenuList, Paragraph} from "../../../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Component/Menu/MenuList',
    component: MenuList,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Interactive menu-list lists that can be nested up to 2 levels',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Container<AsideProps>
                    element={'aside'}
                    classes={['menu']}
                >
                    <Paragraph
                        element={'p'}
                        classes={['menu-label']}
                    >
                        This sentence is within menu-label
                    </Paragraph>
                    <Story />
                </Container>
            </Fragment>
        ),
    ],
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>MenuList</code> component to render this component',
            table: {
                type: {
                    summary: '"menu-list"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        element: {
            control: 'none',
            type: {
                required: true,
            },
            description: deIndent(`
                            Element type which is extended for this component<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'Omit<UlProps, "items">', 'React Component/Element/List/Ul'
                        ),
            table: {
                type: {
                    summary: '"ul"',
                },
            },
        },
        items: {
            control: 'object',
            type: {
                require: true,
            },
            description: deIndent(`
                            Menu items<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'AProps', 'React Component/Element/Container/Inline/Anchor'
                        )
                        + ' / '
                        + linkInStoryBook(
                        'UlProps', 'React Component/Element/List/Ul'
                        ),
            table: {
                type: {
                    summary: 'MenusListItemProps | MenusListItemProps[]',
                    detail: deIndent(`
                                type MenuListItemProps = {
                                    component?: 'menu-item',
                                    label: AProps,
                                    subLevel?: UlProps,
                                }
                            `),
                },
            },
        },
        commonClassesInItem: {
            control: 'object',
            description: 'Common style classes for items',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
    },
};
/** Default menu list */
export const Default = {
    render: (args: any) => <MenuList
        element={'ul'}
        items={{
            component: 'menu-item',
            label: {
                element: 'a',
                children: 'Menu List Item',
            },
        }}
        {...args}
    />,
};
/** Menu list with multiple items */
export const MenuListWithMultipleItems = {
    ...Default,
    args: {
        items: [
            {
                component: 'menu-item',
                label: {
                    element: 'a',
                    children: 'Menu List Item 1',
                },
            },
            {
                component: 'menu-item',
                label: {
                    element: 'a',
                    children: 'Menu List Item 2',
                },
            },
            {
                component: 'menu-item',
                label: {
                    element: 'a',
                    children: 'Menu List Item 3',
                },
            },
        ],
    },
};
/** Menu list with sub levels */
export const MenuListWithSubLevels = {
    ...Default,
    args: {
        items: {
            component: 'menu-item',
            label: {
                element: 'a',
                children: 'Menu List Item',
            },
            subLevel: {
                element: 'ul',
                items: [{
                    element: 'li',
                    children: 'Sub Level 1',
                }, {
                    element: 'li',
                    children: 'Sub Level 2',
                },{
                    element: 'li',
                    children: 'Sub Level 3',
                }],
            },
        },
    },
};
/** Menu list with common style classes */
export const MenuListWithCommonStyleClasses = {
    ...Default,
    args: {
        items: [
            {
                component: 'menu-item',
                label: {
                    element: 'a',
                    children: 'Menu List Item 1',
                },
            },
            {
                component: 'menu-item',
                label: {
                    element: 'a',
                    children: 'Menu List Item 2',
                },
            },
            {
                component: 'menu-item',
                label: {
                    element: 'a',
                    children: 'Menu List Item 3',
                },
            },
        ],
        commonClassesInItem: ['test-class1'],
    },
};
/** Menu list with sub levels with common style classes for sub-levels */
export const MenuListWithSubLevelsWithCommonStyleClasses = {
    ...Default,
    args: {
        items: {
            component: 'menu-item',
            label: {
                element: 'a',
                children: 'Menu List Item',
            },
            subLevel: {
                element: 'ul',
                items: [{
                    element: 'li',
                    children: 'Sub Level 1',
                }, {
                    element: 'li',
                    children: 'Sub Level 2',
                },{
                    element: 'li',
                    children: 'Sub Level 3',
                }],
                commonClassesInItem: ['test-ul-class1'],
            },
        },
    },
};
