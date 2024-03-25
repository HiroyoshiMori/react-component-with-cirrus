import {Fragment} from "react";
import {Box, Container, ModalContent} from "../../../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Component/Modal/ModalContent',
    component: ModalContent,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A horizontally and vertically centered container, with a maximum width of 640px, '
                            + 'in which you can include any content',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Container
                    element={'div'}
                    classes={['modal', 'is-active']}
                >
                    <Container element={'div'} classes={['modal-background']}></Container>
                    <Story />
                </Container>
            </Fragment>
        ),
    ],
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>ModalContent</code> component to render this component',
            table: {
                type: {
                    summary: '"modal-content"',
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
        close: {
            control: 'object',
            description: deIndent(`
                            Properties for close button which is located in the top right corner<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'Omit<ButtonProps, "children">', 'React Component/Element/Button'
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
/** Default modal content */
export const Default = {
    render: (args: any) => <ModalContent
        component={'modal-content'}
        element={'div'}
        close={{
            element: 'button'
        }}
        {...args}
    >
        <Box component={'box'} element={'div'}>
            This is sentence within modal content.
        </Box>
    </ModalContent>,
};
