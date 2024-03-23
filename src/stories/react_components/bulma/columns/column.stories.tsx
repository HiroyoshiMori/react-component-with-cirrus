import {Fragment} from "react";
import {Column, Container, DivProps} from "../../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * Column used in Columns
 */
export default {
    title: 'React Component/CSS Framework/Bulma/Columns/Column',
    component: Column,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A simple column to build responsive columns',
    },
    decorators: [
        (Story: any) => <Fragment>
            <Container<DivProps>
                element={'div'}
                classes={['columns']}
            >
                <Story />
            </Container>
        </Fragment>,
    ],
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>Column</code> component to render this component',
            table: {
                type: {
                    summary: '"column"',
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
        children: {
            control: 'text',
            description: 'Content of column',
            table: {
                type: {
                    summary: 'ReactNode | TypeContainer',
                },
            },
        },
    },
};
/** Default column */
export const Default = {
    render: (args: any) => <Column
        component={'column'}
        children={'Column 1'}
        {...args}
    />,
};

