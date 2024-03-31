import {Title} from "../../../../frameworks/bulma";

export default {
    title: 'React Component/CSS Framework/Bulma/Elements/Title',
    // TODO: add argTypes
    component: Title,
    tags: ['autodocs'],
};
/** Default title */
export const Default = {
    render: (args: any) => <Title
        {...args}
    >
        Title
    </Title>,
};
