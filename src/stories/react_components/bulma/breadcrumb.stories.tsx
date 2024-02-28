import {Breadcrumb} from "../../../frameworks/bulma";

/**
 * The Bulma <b>breadcrumb</b> is a simple navigation component that only requires a <code>breadcrumb</code> container
 * and a <code>ul</code> list. The dividers are automatically created in the content of the <code>::before</code>
 * pseudo-element of <code>li</code> tags.
 *
 * You can inform the current page using the <code>is-active</code> modifier in a <code>li</code> tag. It will disable
 * the navigation of inner links.
 *
 * See: https://bulma.io/documentation/components/breadcrumb/
 */
export default {
    title: 'React Component/CSS Framework/Bulma/Component/Breadcrumb',
    component: Breadcrumb,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A simple <b>breadcrumb</b> component to improve your navigation experience',
    },
};
/** Default breadcrumb */
export const Default = {
    render: (args: any) => <Breadcrumb
        items={[
            {element: 'a', children: 'React Component'},
            {element: 'a', children: 'Bulma'},
            {element: 'a', children: 'Components'},
            {element: 'a', children: 'Breadcrumb'},
        ]}
        {...args}
    />,
};
