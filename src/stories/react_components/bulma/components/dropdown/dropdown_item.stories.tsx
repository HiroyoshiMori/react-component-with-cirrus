import {Fragment} from "react";
import {Container, DivProps, DropdownItem, DropdownTrigger} from "../../../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Component/Dropdown/DropdownItem',
    component: DropdownItem,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Each single item of the dropdown, which can either be a a or a div',
    },
    decorators: [
        (Story: any) => <Fragment>
            <Container<DivProps>
                element={'div'}
                classes={['dropdown']}
            >
                <DropdownTrigger
                    component={'dropdown-trigger'}
                    element={'div'}
                    title={{element: 'span', children: 'Dropdown trigger'}}
                />
                <Container
                    element={'div'}
                    classes={['dropdown-menu']}
                >
                    <Container<DivProps>
                        element={'div'}
                        classes={['dropdown-content']}
                    >
                        <Story />
                    </Container>
                </Container>
            </Container>
        </Fragment>
    ],
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>DropdownItem</code> component to render this component',
            table: {
                type: {
                    summary: '"dropdown-item"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        element: {
            control: 'select',
            options: ['Default', 'a', 'div'],
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
                        'DivProps', 'React Component/Element/Container/Block/Div'
                        ),
            table: {
                type: {
                    summary: '"a" | "div"',
                },
            },
        },
        isActive: {
            control: 'boolean',
            description: 'Indicate item is active',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
    },
};
/** Default dropdown item */
export const Default = {
    render: (args: any) => <DropdownItem
        component={'dropdown-item'}
        element={'a'}
        children={'Dropdown menu'}
        {...args}
    />,
};
/** Dropdown item isActive */
export const ActiveDropdownItem = {
    ...Default,
    args: {
        isActive: true,
    },
};
/** Dropdown item with div */
export const DropdownItemWIthDiv = {
    ...Default,
    args: {
        element: 'div',
    },
};
