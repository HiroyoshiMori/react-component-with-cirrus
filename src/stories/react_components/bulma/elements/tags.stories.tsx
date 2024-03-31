import {Tags} from "../../../../frameworks/bulma";

export default {
    title: 'React Component/CSS Framework/Bulma/Elements/Tags',
    // TODO: add argTypes
    component: Tags,
    tags: ['autodocs'],
};
/** Default tags */
export const Default = {
    render: (args: any) => <Tags
        component={'tags'}
        element={'div'}
        tags={[
            {element: 'span', children: 'Tag 1'},
            {element: 'span', children: 'Tag 2'},
            {element: 'a', children: 'Tag 3 with A'},
            {element: 'span', children: 'Tag 4'},
        ]}
        {...args}
    />,
};
