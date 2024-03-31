import {Fragment} from "react";
import {Container, NavbarBrand, NavbarMenu, NavProps} from "../../../../../frameworks/bulma";
// @ts-ignore
import ExampleImage from '../../../../assets/assets.png';
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Components/Navbar/NavbarMenu',
    component: NavbarMenu,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A right side, hidden on touch devices, visible on desktop',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Container<NavProps>
                    element={'nav'}
                    classes={['navbar']}
                    attributes={{
                        role: 'navigation',
                        'aria-label': 'navigation',
                    }}
                >
                    <NavbarBrand
                        component={'navbar-brand'}
                        element={'div'}
                        item={{
                            element: 'a',
                            children: {
                                element: 'img',
                                src: ExampleImage,
                            },
                        }}
                        burger={{
                            element: 'button',
                        }}
                    />
                    <Story />
                </Container>
            </Fragment>
        ),
    ],
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>NavbarMenu</code> component to render this component',
            table: {
                type: {
                    summary: '"navbar-menu"',
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
                        'Omit<DivProps, "children">', 'React Component/Element/Container/Block/Div'
                        ),
            table: {
                type: {
                    summary: '"div"',
                },
            },
        },
        start: {
            control: 'object',
            description: deIndent(`
                            The left part of the menu, which appears next to the navbar brand on desktop<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'NavbarItemProps',
                        'React Component/Css Framework/Bulma/Components/Modal/NavbarItem'
                        ),
            table: {
                type: {
                    summary: 'NavbarItemProps | NavbarItemProps[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        end: {
            control: 'object',
            description: deIndent(`
                            The right part of the menu, which appears at the end of the navbar<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'NavbarItemProps',
                        'React Component/Css Framework/Bulma/Components/Modal/NavbarItem'
                        ),
            table: {
                type: {
                    summary: 'NavbarItemProps | NavbarItemProps[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
    },
};
/** Default navbar menu */
export const Default = {
    render: (args: any) => <NavbarMenu
        component={'navbar-menu'}
        element={'div'}
        start={{
            component: 'navbar-item',
            element: 'a',
            children: 'Left Menu 1',
        }}
        {...args}
    />,
};
/** Navbar menu with multi start items */
export const NavbarMenuWithMultiStartItems = {
    ...Default,
    args: {
        start: [{
            component: 'navbar-item',
            element: 'a',
            children: 'Left Menu 1',
        }, {
            component: 'navbar-item',
            element: 'a',
            children: 'Left Menu 2',
        }, {
            component: 'navbar-item',
            element: 'a',
            children: 'Left Menu 3',
        }],
    },
};
/** Navbar menu with end item */
export const NavbarMenuWithEndItem = {
    ...Default,
    args: {
        end: {
            component: 'navbar-item',
            element: 'a',
            children: 'Right Menu 1',
        },
    },
};
/** Navbar menu with multi end items */
export const NavbarWithMultiEndItems = {
    ...Default,
    args: {
        end: [{
            component: 'navbar-item',
            element: 'a',
            children: 'Right Menu 1',
        }, {
            component: 'navbar-item',
            element: 'a',
            children: 'Right Menu 2',
        }, {
            component: 'navbar-item',
            element: 'a',
            children: 'Right Menu 3',
        }],
    },
};
