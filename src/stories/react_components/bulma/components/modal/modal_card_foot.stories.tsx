import {Fragment} from "react";
import {Container, DivProps, ModalCardBody, ModalCardFoot, ModalCardHead} from "../../../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Components/Modal/ModalCardFoot',
    component: ModalCardFoot,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A footer of more classical modal.',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Container<DivProps>
                    element={'div'}
                    classes={['modal', 'is-active']}
                >
                    <Container<DivProps>
                        element={'div'}
                        classes={['modal-background']}
                    />
                    <Container<DivProps>
                        element={'div'}
                        classes={['modal-card']}
                    >
                        <ModalCardHead
                            component={'modal-card-head'}
                            element={'div'}
                            title={{
                                element: 'p',
                                children: 'This is sentence within modal card head.',
                            }}
                        />
                        <ModalCardBody
                            component={'modal-card-body'}
                            element={'section'}
                        >
                            This is sentence within modal card body.
                        </ModalCardBody>
                        <Story />
                    </Container>
                </Container>
            </Fragment>
        ),
    ],
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>ModalCardFoot</code> component to render this component',
            table: {
                type: {
                    summary: '"modal-card-foot"',
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
                        'Omit<FooterProps, "children">', 'React Component/Element/Container/Block/Footer'
                        ),
            table: {
                type: {
                    summary: '"footer"',
                },
            },
        },
        ok: {
            control: 'object',
            description: deIndent(`
                            Property of ok button for more classical modal<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'ButtonProps', 'React Component/Element/Button'
                        ),
            table: {
                type: {
                    summary: 'ButtonProps & {children: ReactNode;}',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        cancel: {
            control: 'object',
            description: deIndent(`
                            Property of cancel button for more classical modal<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'ButtonProps', 'React Component/Element/Button'
                        ),
            table: {
                type: {
                    summary: 'ButtonProps & {children: ReactNode;}',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
    },
};
/** Default modal card foot */
export const Default = {
    render: (args: any) => <ModalCardFoot
        component={'modal-card-foot'}
        element={'div'}
        {...args}
    />,
};
/** Modal card foot with ok button */
export const ModalCardFootWithOk = {
    ...Default,
    args: {
        ok: {
            element: 'button',
        },
    },
};
/** Modal card foot with cancel button */
export const ModalCardFootWithCancel = {
    ...Default,
    args: {
        cancel: {
            element: 'button',
        },
    },
};
/** Modal card foot with ok/cancel button */
export const ModalCardFootWithOkCancel = {
    ...Default,
    args: {
        ok: {
            element: 'button',
        },
        cancel: {
            element: 'button',
        },
    },
};
