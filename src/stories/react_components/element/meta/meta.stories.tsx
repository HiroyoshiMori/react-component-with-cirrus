import {Fragment} from "react";
import {
    Meta,
} from "../../../../components";

export default {
    component: Meta,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The metadata element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                There is Meta &#x1f449;
                <Story />
                &#x1f448; element.
            </Fragment>
        ),
    ],
};
/** Default meta */
export const Default = {
    render: (args: any) => <Meta
        element={'meta'}
        itemProp={true}
        charSet={'UTF-8'}
        {...args}
    />,
};
/** Meta with http-equiv/content */
export const MetaWithHttpEquivAndContent = {
    ...Default,
    args: {
        httpEquiv: 'content-type',
        content: 'text/html',
    },
};
/** Meta with name */
export const MetaWithName = {
    ...Default,
    args: {
        name: 'test-meta',
    },
};
/** Meta with style classes */
export const MetaWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Meta with additional attributes */
export const MetaWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Meta Label',
            'aria-placeholder': 'Meta Placeholder',
        },
    },
};
/** Meta with datasets */
export const MetaWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-meta-id'],
            ['name', 'Data Meta Name'],
        ]),
    },
};
