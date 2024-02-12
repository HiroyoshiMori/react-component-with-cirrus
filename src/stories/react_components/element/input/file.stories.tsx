import {
    Input,
} from "../../../../components";

export default {
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - file',
    },
};
/** Default file */
export const Default = {
    render: (args: any) => <Input
        type={'file'}
        name={'input_file'}
        {...args}
    />,
};
/** File with accept */
export const FileWithAccept = {
    ...Default,
    args: {
        accept: ['.doc', '.docx', '.xml', 'application/msword'],
    },
};
/** File with capture */
export const FileWithCapture = {
    ...Default,
    args: {
        capture: 'user',
    },
};
/** File with multiple */
export const FileWithMultiple = {
    ...Default,
    args: {
        multiple: true,
    },
};
/** File with required */
export const FileWithRequired = {
    ...Default,
    args: {
        required: true,
    },
};
/** File with style classes */
export const FileWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** File with additional attributes */
export const FileWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'File Label',
            'aria-placeholder': 'File Placeholder',
        },
    },
};
/** File with datasets */
export const FileWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-file-id'],
            ['name', 'Data File Name'],
        ]),
    },
};

