import {Fragment} from "react";
import {Container, DivProps, DropdownContent, DropdownTrigger} from "../../../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Components/Dropdown/DropdownContent',
    component: DropdownContent,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The dropdown box, with a white background and a shadow',
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
                <Container<DivProps>
                    element={'div'}
                    classes={['dropdown-menu']}
                >
                    <Story />
                </Container>
            </Container>
        </Fragment>
    ],
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>DropdownContent</code> component to render this component',
            table: {
                type: {
                    summary: '"dropdown-content"',
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
        items: {
            control: 'object',
            type: {
                require: true,
            },
            description: deIndent(`
                            Item of the dropdown, which can be either be a <code>a</code> or a <code>div</code><br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'DropdownItemProps',
                        'React Component/Css Framework/Bulma/Components/Dropdown/DropdownItem'
                        )
                        + ' / '
                        + linkInStoryBook(
                        'DropdownDividerProps',
                        'React Component/Css Framework/Bulma/Components/Dropdown/DropdownDivider'
                        ),
            table: {
                type: {
                    summary: 'DropdownItemProps | (DropdownItemProps|DropdownDividerProps)[]',
                },
            },
        },
    },
};
/** Default dropdown content */
export const Default = {
    render: (args: any) => <DropdownContent
        component={'dropdown-content'}
        element={'div'}
        items={{
            element: 'a',
            children: 'Dropdown Menu Item',
        }}
        children={'test'}
        {...args}
    />,
};
/** Dropdown content with multiple items */
export const DropdownContentWithMultipleItems = {
    ...Default,
    args: {
        items: [{
            component: 'dropdown-item',
            element: 'a',
            children: 'Dropdown Menu Item',
        }, {
            component: 'dropdown-item',
            element: 'a',
            children: 'Dropdown Menu Item2',
            isActive: true,
        }, {
            component: 'dropdown-divider',
            element: 'hr',
        }, {
            component: 'dropdown-item',
            element: 'a',
            children: 'Dropdown Menu Item3',
        }],
    },
};
