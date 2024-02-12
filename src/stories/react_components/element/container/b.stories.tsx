import {
    Container,
} from "../../../../components";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Bring Attention To element',
    },
};
// Default bold
const DefaultBold = {
    element: 'b',
    inline: 'true',
};

/** Default bold */
export const Default = {
    render: (args: any) => <Container
        {...DefaultBold}
        {...args}
    >
        Bold content
    </Container>
};
