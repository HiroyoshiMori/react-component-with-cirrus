import {Fragment} from "react";
import {Container, DivProps, ModalCardBody, ModalCardHead} from "../../../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Components/Modal/ModalCardHead',
    component: ModalCardHead,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A head of more classical modal.',
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
                        <Story />
                        <ModalCardBody
                            component={'modal-card-body'}
                            element={'section'}
                        >
                            This is sentence within modal card body.
                        </ModalCardBody>
                    </Container>
                </Container>
            </Fragment>
        ),
    ],
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>ModalCardHead</code> component to render this component',
            table: {
                type: {
                    summary: '"modal-card-head"',
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
        title: {
            control: 'object',
            type: {
                require: true,
            },
            description: deIndent(`
                            Title of more classical modal.<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'PProps', 'React Component/Element/Container/Block/P'
                        ),
            table: {
                type: {
                    summary: 'PProps',
                },
            },
        },
        close: {
            control: 'object',
            description: deIndent(`
                            Property of close button for more classical modal<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'ButtonProps', 'React Component/Element/Button'
                        ),
            table: {
                type: {
                    summary: 'Omit<ButtonProps, "children">',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
    },
};
/** Default modal head */
export const Default = {
    render: (args: any) => <ModalCardHead
        component={'modal-card-head'}
        element={'div'}
        title={{
            element: 'p',
            children: 'This is sentence within modal card head.'
        }}
        {...args}
    />,
};
