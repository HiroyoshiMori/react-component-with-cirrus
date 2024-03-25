import {Box, Modal} from "../../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The modal structure is very simple:
 *
 * - <code>modal</code>: The main container
 *   - <code>modal-background</code>: A transparent overlay that can act as a click target to close the modal
 *   - <code>modal-content</code>: A horizontally and vertically centered container, within a maximum width of 640px,
 *     in which you can include any content
 *   - <code>modal-close</code>: A simple cross located in the top right corner
 *
 *   See: https://bulma.io/documentation/components/modal/
 */
export default {
    title: 'React Component/CSS Framework/Bulma/Component/Modal',
    component: Modal,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A classic modal overlay, in which you can include any content you want',
    },
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>Modal</code> component to render this component',
            table: {
                type: {
                    summary: '"modal"',
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
        children: {
            control: 'text',
            description: 'Content body for this component',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        content: {
            control: 'object',
            if: {arg: 'card', exists: false},
            type: {
                required: true,
            },
            description: deIndent(`
                            Content of modal.<br />
                            Property "children" will be override by children of this component.<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'ModalContentProps',
                        'React Component/Css Framework/Bulma/Component/Modal/ModalContent'
                        ),
            table: {
                type: {
                    summary: 'ModalContentProps',
                },
            },
        },
        card: {
            control: 'object',
            if: {arg: 'content', exists: false},
            type: {
                required: true,
            },
            description: deIndent(`
                            Card content of modal<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'ModalCardProps',
                        'React Component/Css Framework/Bulma/Component/Modal/ModalCard'
                        ),
            table: {
                type: {
                    summary: 'ModalCardProps',
                },
            },
        },
    },
};
// Default Modal Card
const defaultModalCard = {
    component: 'modal',
    card: {
        head: {
            component: 'modal-card-head',
            title: {
                children: 'This is title with Modal Card',
            },
        },
        body: {
            component: 'modal-card-body',
        },
    },
};
/** Default Modal with content - with has-background-white to make background white */
export const Default = {
    render: (args: any) => <Modal
        component={'modal'}
        content={{
            component: 'modal-content',
            element: 'div',
        }}
        {...args}
    >
        <Box element={'div'}>
            This is content within Modal Content
        </Box>
    </Modal>,
};
/** Default Modal with card */
export const DefaultModalCard = {
    render: (args: any) => <Modal
        {...defaultModalCard}
        {...args}
    >
        This is content within Modal Card
    </Modal>,
};
/** Modal with card with footer */
export const ModalCardWithFooter = {
    ...DefaultModalCard,
    args: {
        card: {
            ...defaultModalCard.card,
            foot: {
                component: 'modal-card-foot',
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

