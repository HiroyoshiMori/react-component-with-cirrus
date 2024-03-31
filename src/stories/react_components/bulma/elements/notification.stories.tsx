import {Notification} from "../../../../frameworks/bulma";

export default {
    title: 'React Component/CSS Framework/Bulma/Elements/Notification',
    // TODO: add argTypes
    component: Notification,
    tags: ['autodocs'],
};
/** Default notification */
export const Default = {
    render: (args: any) => <Notification
        component={'notification'}
        {...args}
    >
        This text is within a notification.
    </Notification>
}