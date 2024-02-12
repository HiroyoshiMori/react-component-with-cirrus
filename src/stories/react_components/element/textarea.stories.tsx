import {Textarea} from "../../../components";

export default {
    component: Textarea,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Textarea element',
    },
};
/** Default textarea */
export const Default = {
    render: (args: any) => <Textarea
        element={'textarea'}
        defaultValue={'This is textarea content...'}
        {...args}
    />,
};
/** Textarea with cols/rows */
export const TextareaWithColsAndRows = {
    ...Default,
    args: {
        cols: 80,
        rows: 10,
    },
};
/** Textarea with placeholder */
export const TextareaWithPlaceholder = {
    ...Default,
    args: {
        placeholder: 'Please input sentence here.',
    },
};
/** Textarea with readonly */
export const TextareaWithReadOnly = {
    ...Default,
    args: {
        readOnly: true,
    },
};
/** Textarea with required */
export const TextareaWithRequired = {
    ...Default,
    args: {
        required: true,
    },
};
/** Textarea with disabled */
export const TextareaWithDisabled = {
    ...Default,
    args: {
        disabled: true,
    },
};
/** Textarea with other attributes */
export const TextareaWithOtherAttributes = {
    ...Default,
    args: {
        maxLength: 100,
        minLength: 10,
        autoCapitalize: 'sentence',
        autoComplete: 'on',
        dir: 'ltr',
        dirName: 'textarea-dir',
        form: 'test-form',
        wrap: 'soft',
    },
};
/** Textarea with style classes */
export const TextareaWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Textarea with additional attributes */
export const TextareaWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Textarea Label',
            'aria-placeholder': 'Textarea Placeholder',
        },
    },
};
/** Textarea with datasets */
export const TextareaWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-textarea-id'],
            ['name', 'Data Textarea Name'],
        ]),
    },
};
