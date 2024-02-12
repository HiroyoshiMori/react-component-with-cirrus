import {
    Container,
} from "../../../../components";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Bidirectional Isolate element',
    },
};
// Default bdi
const DefaultBdi = {
    element: 'bdi',
    inline: true,
};

/** Default bdi */
export const Default = {
    render: (args: any) => <Container
        {...DefaultBdi}
        {...args}
    >
        Bdi content
    </Container>,
};
