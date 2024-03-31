import {FormFile} from "../../../../frameworks/bulma";

export default {
    title: 'React Component/CSS Framework/Bulma/Form/FormFile',
    // TODO: add argTypes
    component: FormFile,
    tags: ['autodocs'],
};
/** Default file */
export const Default = {
    render: (args: any) => <FormFile
        component={'form-file'}
        element={'div'}
        label={'Choose a file...'}
        file={{
            element: 'input',
            type: 'file'
        }}
        {...args}
    />,
};
/** File with file name */
export const FileWithFileName = {
    ...Default,
    args: {
        fileName: 'selected-file-name-is-here.png',
    },
};
/** File with file name expanded */
export const FileWithFileNameExpanded = {
    ...Default,
    args: {
        isExpanded: true,
        fileName: 'selected-file-name-is-here.png',
    },
};
/** Boxed file with file name */
export const BoxedFileWithFileName = {
    ...Default,
    args: {
        isBoxed: true,
        fileName: 'selected-file-name-is-here.png',
    },
};
