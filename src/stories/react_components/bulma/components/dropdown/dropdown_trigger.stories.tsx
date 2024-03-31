import {Fragment} from "react";
import {AProps, DivProps, DropdownTrigger} from "../../../../../frameworks/bulma";
import {Container} from "../../../../../components";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Components/Dropdown/DropdownTrigger',
    component: DropdownTrigger,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The container for a button',
    },
    decorators: [
        (Story: any) => <Fragment>
            <Container<DivProps>
                element={'div'}
                classes={['dropdown']}
            >
                <Story />
                <Container<DivProps>
                    element={'div'}
                    classes={['dropdown-menu']}
                >
                    <Container<DivProps>
                        element={'div'}
                        classes={['dropdown-content']}
                    >
                        <Container<AProps>
                            element={'a'}
                            classes={['dropdown-item']}
                        >
                            Dropdown menu 1
                        </Container>
                    </Container>
                </Container>
            </Container>
        </Fragment>,
    ],
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>DropdownTrigger</code> component to render this component',
            table: {
                type: {
                    summary: '"dropdown-trigger"',
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
                            Element type which is extended for this component
                            👉 See:&nbsp;
                        `)
                + linkInStoryBook(
                    'DivProps', 'React Component/Element/Container/Block/Div'
                ),
            table: {
                type: {
                    summary: '"div"',
                },
            },
        },
        menuId: {
            control: 'text',
            description: 'Id for Dropdown menu',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, automatically generated',
                },
            },
        },
        button: {
            control: 'object',
            description: deIndent(`
                            Properties of button in dropdown trigger<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'ButtonProps', 'React Component/Element/Button'
                        ),
            table: {
                type: {
                    summary: 'Omit<ButtonProps, "children">',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        title: {
            control: 'object',
            description: deIndent(`
                            Properties for span for trigger title<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'SpanProps', 'React Component/Element/Container/Inline/Span'
                        ),
            table: {
                type: {
                    summary: 'SpanProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        icons: {
            control: 'object',
            description: deIndent(`
                            Icon property to show in dropdown trigger<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'IconsProps', 'React Component/Element/Icons'
                        ),
            table: {
                type: {
                    summary: 'IconsProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        isUp: {
            control: 'boolean',
            description: 'Make icon angle-up instead of angle-down, works only if property "icons" is undefined',
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
/** Default dropdown trigger */
export const Default = {
    render: (args: any) => <DropdownTrigger
        component={'dropdown-trigger'}
        element={'div'}
        title={{
            element: 'span',
            children: 'Dropdown Trigger',
        }}
        {...args}
    />,
};
/** Drop"up */
export const DropupTrigger = {
    ...Default,
    args: {
        isUp: true,
    },
};
