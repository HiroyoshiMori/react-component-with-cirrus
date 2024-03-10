import {Modal} from "../../../../frameworks/bulma";

export default {
    component: Modal,
    tags: ['autodocs'],
};
// Default Modal Card
const defaultModalCard = {
    component: 'modal',
    card: {
        head: {
            component: 'modal-card-header',
            title: {
                children: 'This is title with Modal Card',
            },
        },
        body: {
            component: 'modal-card-body',
            children: 'This is content within Modal Card',
        },
    },
};
/** Default Modal with content - with has-background-white to make background white */
export const Default = {
    render: (args: any) => <Modal
        component={'modal'}
        content={{
            component: 'modal-content',
            children: 'This is content within Modal Content',
            close: {
                element: 'button',
            },
            classes: ['has-background-white'],
        }}
        {...args}
    />,
};
/** Default Modal with card */
export const DefaultModalCard = {
    render: (args: any) => <Modal
        {...defaultModalCard}
        {...args}
    />,
};
/** Modal with card with footer */
export const ModalCardWithFooter = {
    ...DefaultModalCard,
    args: {
        card: {
            ...defaultModalCard.card,
            foot: {
                component: 'modal-card-footer',
                ok: {
                    children: 'OK',
                },
                cancel: {
                    children: 'Cancel',
                },
            },
        },
    },
};

