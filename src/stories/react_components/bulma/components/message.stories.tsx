import {Message} from "../../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The Bulma <code>message</code> is a multi-part component:
 *
 * - The <code>message</code> container
 * - The optional <code>message-header</code> that can hold a title and a <code>delete</code> element
 * - The <code>message-body</code> for the longer body of the message
 *
 * See: https://bulma.io/documentation/components/message/
 */
export default {
    title: 'React Component/CSS Framework/Bulma/Component/Message',
    component: Message,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Colored message block, to emphasize part of your page',
    },
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>Message</code> component to render this component',
            table: {
                type: {
                    summary: '"message"',
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
                        'Article', 'React Component/Element/Container/Block/Article'
                        ),
            table: {
                type: {
                    summary: '"article"',
                },
            },
        },
        children: {
            control: 'text',
            description: 'Content of this message',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        header: {
            control: 'object',
            description: deIndent(`
                            Message part<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'MessageHeaderProps',
                        'React Component/Css Framework/Bulma/Component/Message/MessageHeader'
                        ),
            table: {
                type: {
                    summary: 'MessageHeaderProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        body: {
            control: 'object',
            type: {
                required: true,
            },
            description: deIndent(`
                            Message part<br />
                            Property "children" will be override by children of this component.<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'MessageBodyProps',
                        'React Component/Css Framework/Bulma/Component/Message/MessageBody'
                        ),
            table: {
                type: {
                    summary: 'MessageBodyProps',
                },
            },
        },
    },
};
/** Default message */
export const Default = {
    render: (args: any) => <Message
        component={'message'}
        header={{
            component: 'message-header',
            label: {
                children: 'Message Label',
            },
            close: {},
        }}
        body={{
            component: 'message-body',
        }}
        {...args}
    >
        This is message body within Message component
    </Message>,
};
