import {Menu} from "../../../../frameworks/bulma";

export default {
    component: Menu,
    tags: ['autodocs'],
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
                            inline: true,
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
                            inline: true,
                            children: 'Menu 2-1',
                        },
                    }, {
                        label: {
                            element: 'a',
                            inline: true,
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
                            inline: true,
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
