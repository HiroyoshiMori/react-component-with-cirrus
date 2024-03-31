import {ArticleProps, CardHeader, Container, DivProps} from "../../../../../frameworks/bulma";
import {Fragment} from "react";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Components/Card/CardHeader',
    component: CardHeader,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A left-aligned bold text',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Container<ArticleProps>
                    element={'article'}
                    classes={['card']}
                >
                    <Story />
                    <Container<DivProps>
                        element={'div'}
                        classes={['card-content']}
                    >
                        This is sentence within card content.
                    </Container>
                </Container>
            </Fragment>
        )
    ],
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>CardHeader</code> component to render this component',
            table: {
                type: {
                    summary: '"card-header"',
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
                            'HeaderProps', 'React Component/Element/Container/Block/Header'
                        ),
            table: {
                type: {
                    summary: '"header"',
                },
            },
        },
        title: {
            control: 'object',
            description: deIndent(`
                            Title for card<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'PProps', 'React Component/Element/Container/Block/Paragraph'
                        ),
            table: {
                type: {
                    summary: 'PProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        button: {
            control: 'object',
            description: deIndent(`
                            Properties for button in card header<br />
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
    },
};
/** Default card header */
export const Default = {
    render: (args: any) => <CardHeader
        component={'card-header'}
        element={'header'}
        title={{
            element: 'p',
            children: 'This is sentence within card header',
        }}
        {...args}
    />,
};
