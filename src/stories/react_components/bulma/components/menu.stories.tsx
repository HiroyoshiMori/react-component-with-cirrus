import {Menu} from "../../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The Bulma <code>menu</code> is a vertical navigation component that comprises:
 *
 * - The <code>menu</code> container
 * - Informative <code>menu-label</code> labels
 * - Interactive <code>menu-list</code> lists that can be nested up to 2 levels
 *
 * See: https://bulma.io/documentation/components/menu/
 */
export default {
    title: 'React Component/CSS Framework/Bulma/Component/Menu',
    component: Menu,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A simple menu, for any type of vertical navigation',
    },
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>Menu</code> component to render this component',
            table: {
                type: {
                    summary: '"menu"',
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
                        'AsideProps', 'React Component/Element/Container/Block/Aside'
                        ),
            table: {
                type: {
                    summary: '"aside"',
                },
            },
        },
        items: {
            control: 'object',
            description: deIndent(`
                            Informative <code>menu-label</code> labels or interactive <code>menu-list</code> lists
                            that can be nested up to 2 levels<be />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'MenusLabelProps',
                        'React Component/Css Framework/Bulma/Component/Menu/MenuLabel'
                        )
                        + ' / '
                        + linkInStoryBook(
                        'MenusListProps',
                        'React Component/Css Framework/Bulma/Component/Menu/MenuList'
                        ),
            table: {
                type: {
                    summary: 'MenusLabelListProps | MenusLabelListProps[]',
                    detail: deIndent(`
                                {
                                    label: MenusLabelProps,
                                    list: MenusListProps,
                                }
                            `)
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
    },
};
/** Default menu */
export const Default = {
    render: (args: any) => <Menu
        component={'menu'}
        items={[
            {
                label: {children: 'Menu 1'},
                list: {
                    items: {
                        label: {
                            element: 'a',
                            children: 'Menu 1-1',
                        },
                    },
                },
            },
            {
                label: {children: 'Menu 2'},
                list: {
                    items: [{
                        label: {
                            element: 'a',
                            children: 'Menu 2-1',
                        },
                    }, {
                        label: {
                            element: 'a',
                            children: 'Menu 2-2',
                        },
                    }],
                },
            },
        ]}
        {...args}
    />,
};
/** Menu with subMenu */
export const MenuWithSubMenu = {
    ...Default,
    args: {
        items: [
            {
                label: {children: 'Menu 1'},
                list: {
                    items: {
                        label: {
                            element: 'a',
                            children: 'Menu 1-1',
                        },
                        subLevel: {
                            element: 'ul',
                            items: {
                                children: 'Submenu 1-1-1'
                            }
                        }
                    },
                },
            },
        ],
    },
};
