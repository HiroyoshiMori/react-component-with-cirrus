import {Fragment} from "react";
import {Container, DivProps, NavbarBrand, NavbarItem, NavProps} from "../../../../../frameworks/bulma";
// @ts-ignore
import ExampleImage from '../../../../assets/assets.png';
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Component/Navbar/NavbarItem',
    component: NavbarItem,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Each single item of the navbar, which can either be an a or an div',
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
                    <Container<DivProps>
                        element={'div'}
                        id={'navbarExample'}
                        classes={['navbar-menu']}
                    >
                        <Container<DivProps>
                            element={'div'}
                            classes={['navbar-start']}
                        >
                            <Story />
                        </Container>
                    </Container>
                </Container>

            </Fragment>
        ),
    ],
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>NavbarItem</code> component to render this component',
            table: {
                type: {
                    summary: '"navbar-item"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        element: {
            control: 'select',
            options: ['Default', 'a', 'div', 'button'],
            mapping: {
                Default: undefined,
            },
            type: {
                required: true,
            },
            description: deIndent(`
                            Element type which is extended for this component<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'AProps', 'React Component/Element/Container/Inline/Anchor'
                        )
                        + ' / '
                        + linkInStoryBook(
                        'Omit<DivProps, "children">', 'React Component/Element/Container/Block/Div'
                        )
                        + ' / '
                        + linkInStoryBook(
                        'ButtonProps', 'React Component/Element/Button'
                        ),
            table: {
                type: {
                    summary: '"a" | "div" | "button"',
                },
            },
        },
        children: {
            control: 'text',
            if: {arg: 'element', neq: 'div'},
            description: 'Content of navbar item',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        hasDropdown: {
            control: 'none',
            if: {arg: 'element', eq: 'div'},
            type: {
                require: true,
            },
            description: 'Indicate has dropdown menu',
            table: {
                type: {
                    summary: 'true',
                },
            },
        },
        label: {
            control: 'object',
            if: {arg: 'element', eq: 'div'},
            type: {
                require: true,
            },
            description: deIndent(`
                            Label for dropdown menu<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'AProps', 'React Component/Element/Container/Inline/Anchor'
                        ),
            table: {
                type: {
                    summary: 'AProps',
                },
            },
        },
        items: {
            control: 'object',
            if: {arg: 'element', eq: 'div'},
            description: deIndent(`
                            Sub menus of dropdown<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'AProps', 'React Component/Element/Container/Inline/Anchor'
                        )
                        + ' / '
                        + linkInStoryBook(
                        'HrProps', 'React Component/Element/Break/Hr'
                        ),
            table: {
                type: {
                    summary: '(AProps|HrProps)|(AProps|HrProps)[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
    },
};
/** Default navbar item with element a */
export const DefaultAnchor = {
    render: (args: any) => <NavbarItem
        component={'navbar-item'}
        element={'a'}
        {...args}
    >
        Anchor Menu 1
    </NavbarItem>,
};
/** Default navbar item with dropdown */
export const DefaultDropdown = {
    render: (args: any) => <NavbarItem
        component={'navbar-item'}
        element={'div'}
        hasDropdown={true}
        label={{
            element: 'a',
            children: 'Dropdown Menu 1',
        }}
        items={{
            element: 'a',
            children: 'Menu 1-1',
        }}
        {...args}
    />,
};
/** Default navbar item with element button */
export const DefaultButton = {
    render: (args: any) => <NavbarItem
        component={'navbar-item'}
        element={'button'}
        classes={['is-primary']}
        {...args}
    >
        Button Menu 1
    </NavbarItem>,
};
