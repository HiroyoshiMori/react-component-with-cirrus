import {Fragment} from "react";
import {Container, DivProps, ModalCard} from "../../../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Components/Modal/ModalCard',
    component: ModalCard,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A more classic modal, with a head, a body and a foot, use the modal-card',
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
                    <Story />
                </Container>
            </Fragment>
        ),
    ],
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>ModalCard</code> component to render this component',
            table: {
                type: {
                    summary: '"modal-card"',
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
        head: {
            control: 'object',
            type: {
                require: true,
            },
            description: deIndent(`
                            Header part for modal card<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'ModalCardHeadProps',
                        'React Component/Css Framework/Bulma/Components/Modal/ModalCardHead'
                        ),
            table: {
                type: {
                    summary: 'ModalCardHead',
                },
            },
        },
        body: {
            control: 'object',
            type: {
                require: true,
            },
            description: deIndent(`
                            Content for modal card<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'ModalCardBodyProps',
                        'React Component/Css Framework/Bulma/Components/Modal/ModalCardBody'
                        ),
            table: {
                type: {
                    summary: 'ModalCardBody',
                },
            },
        },
        foot: {
            control: 'object',
            description: deIndent(`
                            Footer part for modal card<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'ModalCardFootProps',
                        'React Component/Css Framework/Bulma/Components/Modal/ModalCardFoot'
                        ),
            table: {
                type: {
                    summary: 'ModalCardFoot',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
    },
};
/** Default modal card */
export const Default = {
    render: (args: any) => <ModalCard
        component={'modal-card'}
        element={'div'}
        head={{
            element: 'div',
            title: {
                element: 'p',
                children: 'This is sentence within modal card header',
            },
        }}
        body={{
            element: 'section',
        }}
        {...args}
    >
        This is sentence within modal card body.
    </ModalCard>,
};
/** Modal card with footer */
export const ModalCardWithFooter = {
    ...Default,
    args: {
        foot: {
            element: 'footer',
            ok: {
                element: 'button',
            },
            cancel: {
                element: 'button',
            },
        },
    },
};
