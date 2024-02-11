import {Fragment} from "react";
import {
    Input,
} from "../../../../components";

export default {
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - hidden',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                Hidden element is here.
                <Story />
            </Fragment>
        ),
    ],
};
/** Default hidden */
export const Default = {
    render: (args: any) => <Input
        type={'hidden'}
        name={'input_hidden'}
        value={'HiddenValue'}
        {...args}
    />,
};
/** Hidden with style classes */
export const HiddenWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Hidden with additional attributes */
export const HiddenWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Hidden Label',
            'aria-placeholder': 'Hidden Placeholder',
        },
    },
};
/** Hidden with datasets */
export const HiddenWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-hidden-id'],
            ['name', 'Data Hidden Name'],
        ]),
    },
};
