import {Fragment} from "react";
import {Container, DivProps, DropdownDivider, DropdownItem, DropdownTrigger} from "../../../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Component/Dropdown/DropdownDivider',
    component: DropdownDivider,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A horizontal line to separate dropdown items',
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
                    <Container<DivProps>
                        element={'div'}
                        classes={['dropdown-content']}
                    >
                        <DropdownItem element={'a'} children={'Dropdown Menu 1'} />
                        <DropdownItem element={'a'} children={'Dropdown Menu 2'} />
                        <Story />
                        <DropdownItem element={'a'} children={'Dropdown Menu 3'} />
                    </Container>
                </Container>
            </Container>
        </Fragment>
    ],
    argTypes: {
        component: {
            control: 'none',
            type: {
                required: true,
            },
            description: 'Switcher for <code>DropdownDivider</code> component to render this component',
            table: {
                type: {
                    summary: '"dropdown-divider"',
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
                    'HrProps', 'React Component/Element/Break/Hr'
                ),
            table: {
                type: {
                    summary: '"hr"',
                },
            },
        },
    }
};
/** Default dropdown divider */
export const Default = {
    render: (args: any) => <DropdownDivider
        component={'dropdown-divider'}
        element={'hr'}
        {...args}
    />,
};
