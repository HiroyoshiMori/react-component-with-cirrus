import {Navbar} from "../../../../frameworks/bulma";
// @ts-ignore
import ExamplePicture from '../../../assets/assets.png';

export default {
    component: Navbar,
    tags: ['autodocs'],
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
/** Navbar with multiple menus in start and buttons in end */
export const NavbarWithMultiMenusInStartAndButtonsInEnd = {
    ...defaultNavbar,
    args: {
        menu: {
            ...defaultNavbar.menu,
            start: [
                {element: 'a', children: 'Menu 1-2'},
                {element: 'a', children: 'Menu 1-3'},
                {element: 'a', children: 'Menu 1-4'},
                {element: 'a', children: 'Menu 1-1'},
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
