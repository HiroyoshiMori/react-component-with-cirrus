import {Delete} from "../../../../frameworks/bulma";

export default {
    title: 'React Component/CSS Framework/Bulma/Elements/Delete',
    // TODO: add argTypes
    component: Delete,
    tags: ['autodocs'],
};
/** Default delete button */
export const Default = {
    render: (args: any) => <Delete
        component={'delete'}
        {...args}
    />,
};
