import {Fragment} from "react";
import {Container, NavbarBrand, NavbarMenu, NavProps} from "../../../../../frameworks/bulma";
// @ts-ignore
import ExampleImage from '../../../../assets/assets.png';
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Component/Navbar/NavbarBrand',
    component: NavbarBrand,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A left side, always visible, which usually contains the logo and optionally some links '
                            + 'or icons',
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
                    <Story />
                    <NavbarMenu
                        component={'navbar-menu'}
                        element={'div'}
                        id={'navbarExample'}
                        start={{
                            component: 'navbar-item',
                            element: 'a',
                            href: '/#menu-1',
                            children: 'Menu 1',
                        }}
                    />
                </Container>
            </Fragment>
        ),
    ],
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>NavbarBrand</code> component to render this component',
            table: {
                type: {
                    summary: '"navbar-brand"',
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
        item: {
            control: 'object',
            description: deIndent(`
                            Properties for anchor which has image<br /> 
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'AProps', 'React Component/Element/Container/Inline/Anchor'
                        )
                        + ' / '
                        + linkInStoryBook(
                        'ImgProps', 'React Component/Element/Media/Img'
                        ),
            table: {
                type: {
                    summary: 'Omit<AProps, "children"> & {children: ImgProps}',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        burger: {
            control: 'object',
            description: deIndent(`
                            Properties for burger menu<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'ButtonProps', 'React Component/Element/Button'
                        ),
            table: {
                type: {
                    summary: 'ButtonProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
    },
};
/** Default navbar brand */
export const Default = {
    render: (args: any) => <NavbarBrand
        component={'navbar-brand'}
        element={'div'}
        item={{
            element: 'a',
            href: '/',
            children: {
                element: 'img',
                src: ExampleImage,
            },
        }}
        {...args}
    />,
};
/** Navbar brand with burger menu */
export const NavbarBrandWithBurger = {
    ...Default,
    args: {
        burger: {
            element: 'button',
            datasets: new Map([
                ['target', 'navbarExample'],
            ]),
        },
    },
};
