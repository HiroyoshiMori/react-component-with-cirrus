import {
    Form,
} from "../../../components";

export default {
    component: Form,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Form element',
    },
};
/** Default form */
export const Default = {
    render: (args: any) => <Form
        element={'form'}
        {...args}
    >
        Form content
    </Form>,
};
/** Form with other attributes */
export const FormWithOtherAttributes = {
    ...Default,
    args: {
        action: '#',
        method: 'option',
        acceptCharset: 'ja_JP',
        autoCapitalize: true,
        autoComplete: 'on',
        rel: 'opener',
        encType: 'application/x-www-form-urlencoded',
        noValidate: true,
        target: '_self',
    },
};
/** Form with style classes */
export const FormWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Form with additional attributes */
export const FormWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Form Label',
            'aria-placeholder': 'Form Placeholder',
        },
    },
};
/** Form with datasets */
export const FormWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-form-id'],
            ['name', 'Data Form Name'],
        ]),
    },
};
