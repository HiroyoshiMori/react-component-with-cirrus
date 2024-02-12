import {Fragment} from "react";
import {
    Container,
} from "../../../../components";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Keyboard Input element',
    },
};
/** Default Keyboard Input */
export const Default = {
    render: (args: any) => <Fragment>
        Please press <Container
            element={'kbd'}
            inline={true}
            {...args}
        >Ctrl</Container>.
    </Fragment>,
};
/** Keyboard input with style classes */
export const KeyboardWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Keyboard input with additional attributes */
export const KeyboardWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Keyboard Input Label',
            'aria-placeholder': 'Keyboard Input Placeholder',
        },
    },
};
/** Keyboard input with datasets */
export const KeyboardWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-keyboard-id'],
            ['name', 'Data Keyboard Name'],
        ]),
    },
};
