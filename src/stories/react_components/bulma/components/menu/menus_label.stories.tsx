import {AsideProps, Container, List, MenuLabel} from "../../../../../frameworks/bulma";
import {Fragment} from "react";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Component/Menu/MenuLabel',
    component: MenuLabel,
    tags:['autodocs'],
    parameters: {
        componentSubtitle: 'Informative menu-label labels',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Container<AsideProps>
                    element={'aside'}
                    classes={['menu']}
                >
                    <Story />
                    <List
                        element={'ul'}
                        classes={['menu-list']}
                        items={[
                            {element: 'li', children: 'Menu 1'},
                            {element: 'li', children: 'Menu 2'},
                        ]}
                    />
                </Container>
            </Fragment>
        ),
    ],
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>MenuLabel</code> component to render this component',
            table: {
                type: {
                    summary: '"menu-label"',
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
                        'PProps', 'React Component/Element/Container/Block/Paragraph'
                        ),
            table: {
                type: {
                    summary: '"p"',
                },
            },
        },
    },
};
/** Default menu label */
export const Default = {
    render: (args: any) => <MenuLabel
        component={'menu-label'}
        element={'p'}
        children={'This sentence is within menu-label'}
        {...args}
    />,
};
