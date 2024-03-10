import {Title} from "../../../../frameworks/bulma";

export default {
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
