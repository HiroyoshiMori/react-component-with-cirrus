import {Fragment} from "react";
import {Container, DivProps, MessageHeader} from "../../../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Components/Message/MessageHeader',
    component: MessageHeader,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The opitional message-header that can hold a title and a delete element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Container<DivProps>
                    element={'div'}
                    classes={['message']}
                >
                    <Story />
                    <Container<DivProps>
                        element={'div'}
                        classes={['message-body']}
                    >
                        This sentence is within message body.
                    </Container>
                </Container>
            </Fragment>
        ),
    ],
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>MessageHeader</code> component to render this component',
            table: {
                type: {
                    summary: '"message-header"',
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
                        'DivProps', 'React Component/Element/Container/Block/Div'
                        ),
            table: {
                type: {
                    summary: '"div"',
                },
            },
        },
        label: {
            control: 'object',
            type: {
                require: true,
            },
            description: deIndent(`
                            Title of message component<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'PProps', 'React Component/Element/Container/Block/Paragraph'
                        ),
            table: {
                type: {
                    summary: 'PProps',
                },
            },
        },
        close: {
            control: 'object',
            type: {
                require: true,
            },
            description: deIndent(`
                            Delete element of message component<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'Omit<ButtonProps, "children">', 'React Component/Element/Container/Block/Div'
                        ),
            table: {
                type: {
                    summary: 'Omit<ButtonProps, "children">',
                },
            },
        },
    },
};
/** Default message header */
export const Default = {
    render: (args: any) => <MessageHeader
        compnent={'message-header'}
        element={'div'}
        label={{
            element: 'p',
            children: 'This sentence is within message header',
        }}
        close={{
            element: 'button',
        }}
        {...args}
    />,
};
