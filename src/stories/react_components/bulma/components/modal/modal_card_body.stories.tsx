import {Fragment} from "react";
import {Container, DivProps, ModalCardBody, ModalCardHead} from "../../../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Component/Modal/ModalCardBody',
    component: ModalCardBody,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A content of more classical modal.',
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
                        <Story />
                    </Container>
                </Container>
            </Fragment>
        ),
    ],
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>ModalCardBody</code> component to render this component',
            table: {
                type: {
                    summary: '"modal-card-body"',
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
                        'SectionProps', 'React Component/Element/Container/Block/Section'
                        ),
            table: {
                type: {
                    summary: '"section"',
                },
            },
        },
        children: {
            control: 'text',
            description: 'Content of more classical modal',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
    },
};
/** Default modal card body */
export const Default = {
    render: (args: any) => <ModalCardBody
        component={'modal-card-body'}
        element={'section'}
    >
        This is sentence within modal card body.
    </ModalCardBody>,
};
