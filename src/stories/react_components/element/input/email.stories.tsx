import {
    Input,
} from "../../../../components";

export default {
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - email',
    },
};
/** Default email */
export const Default = {
    render: (args: any) => <Input
        type={'email'}
        name={'input_email'}
        placeholder={'Please input email address'}
        {...args}
    />,
};
/** Email with min/max length */
export const EmailWithMinMaxLength = {
    ...Default,
    args: {
        minLength: 3,
        maxLength: 20,
    },
};
/** Email with multiple */
export const EmailWithMultiple = {
    ...Default,
    args: {
        multiple: true,
    },
};
/** Email with pattern */
export const EmailWtihPattern = {
    ...Default,
    args: {
        pattern: '.+@sciprtlab\\.tokyo',
    },
};
/** Email with readonly */
export const EmailWithReadonly = {
    ...Default,
    args: {
        defaultValue: 'test1@example.com',
        readOnly: true,
    },
};
/** Email with required */
export const EmailWithRequired = {
    ...Default,
    args: {
        required: true,
    },
};
/** Email with size */
export const EmailWithSize = {
    ...Default,
    args: {
        size: 100,
    },
};
/** Email with datalist */
export const EmailWithDatalist = {
    ...Default,
    args: {
        datalist: ['test1@example.com', 'test2@example.com', 'test3.example.com'],
    },
};
/** Email with list and datalist */
export const EmailWithListAndDatalist = {
    ...Default,
    args: {
        list: 'email-list',
        datalist: ['test1@example.com', 'test2@example.com', 'test3.example.com'],
    },
};
/** Email with style classes */
export const EmailWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Email with additional attributes */
export const EmailWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Email Label',
            'aria-placeholder': 'Email Placeholder',
        },
    },
};
/** Email with datasets */
export const EmailWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-email-id'],
            ['name', 'Data Email Name'],
        ]),
    },
};
