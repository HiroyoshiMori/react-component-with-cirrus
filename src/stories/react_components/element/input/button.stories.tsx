import {Fragment} from "react";
import {action} from "@storybook/addon-actions";
import {
    Container,
    Input,
} from "../../../../components";

export default {
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - button',
    },
};
/** Default input button */
export const Default = {
    render: (args: any) => <Input
        type={'button'}
        name={'input_button'}
        value={'Button Label'}
        onClick={action('clicked')}
        {...args}
    />,
};
/** Input button with other attributes */
export const ButtonWithOtherAttributes = {
    render: (args: any) => <Fragment>
        <Input
            type={'button'}
            value={'Button Label'}
            {...args}
        />
        <Container
            element={'div'}
            popover={'auto'}
            id={'popover'}
        >
            This is popover content.
        </Container>
    </Fragment>,
    args: {
        popovertarget: 'popover',
        popovertargetaction: 'toggle',
    },
};
/** Input button with style classes */
export const ButtonWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Input button with additional attributes */
export const ButtonWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Input Button Label',
            'aria-placeholder': 'Input Button Placeholder',
        },
    },
};
/** Input button with datasets */
export const ButtonWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-button-id'],
            ['name', 'Data Button Name'],
        ]),
    },
};
