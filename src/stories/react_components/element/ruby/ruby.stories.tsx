import {Fragment} from "react";
import {
    Ruby,
} from "../../../../components";

export default {
    component: Ruby,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Ruby Annotation element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Story/> is meaning of Japan.
            </Fragment>
        ),
    ],
};
/** Default ruby annotation */
export const Default = {
    render: (args: any) => <Ruby
        element={'ruby'}
        items={[
            { element: 'rt', label: '日', children: 'Ni' },
            { element: 'rt', label: '本', children: 'Hon' },
        ]}
        {...args}
    />,
};
/** Ruby annotation with style classes */
export const RubyAnnotationWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Ruby annotation with additional attributes */
export const RubyAnnotationWithAdditionalAttribytes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Ruby Annotation Label',
            'aria-placeholder': 'Ruby Annotation Placeholder',
        },
    },
};
/** Ruby annotation with datasets */
export const RubyAnnotationWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-ruby-id'],
            ['name', 'Data Ruby Annotation Name'],
        ]),
    },
};
