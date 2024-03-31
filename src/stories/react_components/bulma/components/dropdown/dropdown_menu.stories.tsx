import {Container, DivProps, DropdownMenu, DropdownTrigger} from "../../../../../frameworks/bulma";
import {Fragment} from "react";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Components/Dropdown/DropdownMenu',
    component: DropdownMenu,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The toggable menu, hidden by default',
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
                <Story />
            </Container>
        </Fragment>
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
        content: {
            control: 'object',
            type: {
                required: true,
            },
            description: deIndent(`
                            Content of this dropdown menu<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'DropdownContentProps',
                        'React Component/Css Framework/Bulma/Components/Dropdown/DropdownContent'
                        ),
            table: {
                type: {
                    summary: 'DropdownContent',
                },
            },
        },
    },
};
/** Default dropdown menu */
export const Default = {
    render: (args: any) => <DropdownMenu
        component={'dropdown-menu'}
        element={'div'}
        content={{
            element: 'div',
            items: {
                element: 'a',
                children: 'Dropdown Menu',
            },
        }}
        {...args}
    />,
}