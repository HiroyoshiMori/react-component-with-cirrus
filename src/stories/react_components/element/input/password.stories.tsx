import {
    Input,
} from "../../../../components";

export default {
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - password',
    },
};
/** Default password */
export const Default = {
    render: (args: any) => <Input
        type={'password'}
        {...args}
    />,
};
/** Password with placeholder */
export const PasswordWithPlaceholder = {
    ...Default,
    args: {
        placeholder: 'Please input password...',
    },
};
/** Password readonly */
export const PasswordReadonly = {
    ...Default,
    args: {
        defaultValue: 'TESTPASSWORD',
        readOnly: true,
    },
};
/** Password required */
export const PasswordRequired = {
    ...Default,
    args: {
        required: true,
    },
};
/** Password with other attributes */
export const PasswordWithOtherAttributes = {
    ...Default,
    args: {
        maxLength: 30,
        minLength: 10,
        pattern: '[0-9a-fA-F]{10,30}',
        size: 20,
    },
};
/** Password with style classes */
export const PasswordWithStyleCLasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Password with additional attributes */
export const PasswordWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Password Label',
            'aria-placeholder': 'Password Placeholder',
        },
    },
};
/** Password with datasets */
export const PasswordWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-password-id'],
            ['name', 'Data Password Name'],
        ]),
    },
};
