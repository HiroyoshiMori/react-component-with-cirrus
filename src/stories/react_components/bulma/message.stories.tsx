import {Message} from "../../../frameworks/bulma";

export default {
    component: Message,
    tags: ['autodocs'],
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
            children: 'This is message body within Message component',
        }}
        {...args}
    />,
};
