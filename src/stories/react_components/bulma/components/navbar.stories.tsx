import {Navbar} from "../../../../frameworks/bulma";
// @ts-ignore
import ExamplePicture from '../../../assets/assets.png';
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The <code>navbar</code> component is a responsive and versatile horizontal navigation bar with the following
 * structure:
 *
 * - <code>navbar</code>: The main container
 *   - <code>navbar-brand</code>: The left side, <strong>always visible</strong>, which usually contains the logo and
 *     optionally some links or icons
 *     - <code>navbar-burger</code>: The hamburger icon, which toggles the navbar menu on touch devices
 *   - <code>navbar-menu</code>: The right side, hidden on touch devices, visible on desktop
 *     - <code>navbar-start</code>: The left part of the menu, which appears next to the navbar brand on desktop
 *     - <code>navbar-end</code>: The right part of the menu, which appears at the end of the navbar
 *       - <code>navbar-item</code>: Each single item of the navbar, which can either be an <code>a</code> or
 *         a <code>div</code>
 *         - <code>navbar-link</code>: A link as the sibling of a dropdown, with an arrow
 *         - <code>navbar-dropdown</code>: The dropdown menu, which can include navbar items and dividers
 *           - <code>navbar-divider</code>: A horizontal line to separate navbar items
 *
 * See: https://bulma.io/documentation/components/navbar/
 */
export default {
    title: 'React Component/CSS Framework/Bulma/Component/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A responsive horizontal navbar that can support images, links, buttons, and dropdowns',
    },
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>Navbar</code> component to render this component',
            table: {
                type: {
                    summary: '"navbar"',
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
                        'Omit<NavProps, "children">', 'React Component/Element/Container/Block/Nav'
                        ),
            table: {
                type: {
                    summary: '"nav"',
                },
            },
        },
        brand: {
            control: 'object',
            description: deIndent(`
                            The left side, always visible, which usually contains the logo and optionally
                            some links or icons<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'NavbarBrandProps',
                        'React Component/Css Framework/Bulma/Component/Modal/NavbarBrand'
                        ),
            table: {
                type: {
                    summary: 'NavbarBrandProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        menu: {
            control: 'object',
            description: deIndent(`
                            The right side, hidden on touch devices, visible on desktop<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'NavbarMenuProps',
                        'React Component/Css Framework/Bulma/Component/Modal/NavbarMenu'
                        ),
            table: {
                type: {
                    summary: 'NavbarMenuProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
    },
};
// Default navbar
const defaultNavbar = {
    component: 'navbar',
    menu: {
        component: 'navbar-menu',
        id: 'navbarBasicExample',
        start: {
            component: 'navbar-item',
            element: 'a',
            children: 'Menu 1',
        },
    },
};

/** Default navbar */
export const Default = {
    render: (args: any) => <Navbar
        {...defaultNavbar}
        {...args}
    />,
};
/** Navbar with multiple menus in start */
export const NavbarWithMultiMenusInStart = {
    ...Default,
    args: {
        menu: {
            ...defaultNavbar.menu,
            start: [
                {element: 'a', children: 'Menu 1'},
                {element: 'a', children: 'Menu 2'},
                {element: 'a', children: 'Menu 3'},
                {element: 'a', children: 'Menu 4'},
            ],
        },
    },
};
/** Navbar with multiple menus in start and end */
export const NavbarWithMultiMenusInStartAndEnd = {
    ...defaultNavbar,
    args: {
        menu: {
            ...defaultNavbar.menu,
            start: [
                {element: 'a', children: 'Menu 1-1'},
                {element: 'a', children: 'Menu 1-2'},
                {element: 'a', children: 'Menu 1-3'},
                {element: 'a', children: 'Menu 1-4'},
            ],
            end: [
                {element: 'a', children: 'Menu 2-1'},
                {element: 'a', children: 'Menu 2-2'},
                {element: 'a', children: 'Menu 2-3'},
                {element: 'a', children: 'Menu 2-4'},
            ],
        },
    },
};
/** Navbar with brand and multiple menus in start and end */
export const NavbarWithBrandAndMultiMenusInStartAndEnd = {
    ...defaultNavbar,
    args: {
        brand: {
            item: {
                element: 'a',
                children: {
                    element: 'img',
                    src: ExamplePicture,
                },
                href: '#',
            },
            burger: {
                element: 'button'
            },
        },
        menu: {
            ...defaultNavbar.menu,
            start: [
                {element: 'a', children: 'Menu 1-1'},
                {element: 'a', children: 'Menu 1-2'},
                {
                    element: 'div',
                    hasDropdown: true,
                    label: {element: 'a', children: 'Menu 1-3'},
                    items: [{
                        element: 'a', children: 'SubMenu 1-3-1',
                    }, {
                        element: 'hr',
                    }, {
                        element: 'a', children: 'SubMenu 1-3-2',
                    }]
                },
                {element: 'a', children: 'Menu 1-4'},
            ],
            end: [
                {element: 'a', children: 'Menu 2-1'},
                {element: 'a', children: 'Menu 2-2'},
                {element: 'a', children: 'Menu 2-3'},
                {element: 'a', children: 'Menu 2-4'},
            ],
        },
    },
};
/** Navbar with multiple menus in start and buttons in end */
export const NavbarWithMultiMenusInStartAndButtonsInEnd = {
    ...defaultNavbar,
    args: {
        menu: {
            ...defaultNavbar.menu,
            start: [
                {element: 'a', children: 'Menu 1-1'},
                {element: 'a', children: 'Menu 1-2'},
                {element: 'a', children: 'Menu 1-3'},
                {element: 'a', children: 'Menu 1-4'},
            ],
            end: {
                element: 'div',
                items: [
                    {element: 'button', children: 'Button A'},
                    {element: 'button', children: 'Button B'},
                ],
            },
        },
    },
};
