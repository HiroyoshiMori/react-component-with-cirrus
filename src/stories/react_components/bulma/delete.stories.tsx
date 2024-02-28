import {Delete} from "../../../frameworks/bulma";

export default {
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
