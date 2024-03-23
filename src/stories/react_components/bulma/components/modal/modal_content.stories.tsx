import {Box, Container, ModalContent} from "../../../../../frameworks/bulma";
import {Fragment} from "react";

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
