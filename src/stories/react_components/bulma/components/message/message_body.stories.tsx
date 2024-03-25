import {Container, MessageBody, MessageHeader} from "../../../../../frameworks/bulma";
import {Fragment} from "react";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Component/Message/MessageBody',
    component: MessageBody,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'For the longer body of the message',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Container
                    element={'div'}
                    classes={['message']}
                >
                    <MessageHeader
                        element={'div'}
                        label={{
                            element: 'p',
                            children: 'This is sentence within message header',
                        }}
                        close={{
                            element: 'button',
                        }}
                        classes={['message-header']}
                    />
                    <Story />
                </Container>
            </Fragment>
        ),
    ],
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>MessageBody</code> component to render this component',
            table: {
                type: {
                    summary: '"message-body"',
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
    },
};
/** Default message body */
export const Default = {
    render: (args: any) => <MessageBody
        component={'message-body'}
        element={'div'}
        {...args}
    >
        This is sentence within message body.
    </MessageBody>,
};
