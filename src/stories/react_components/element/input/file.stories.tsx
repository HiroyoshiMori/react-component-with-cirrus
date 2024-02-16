import {
    Input,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * &lt;input&gt; elements with <code>type="file"</code> let the user choose one or more files from their device storage.
 * Once chosen, the files can be uploaded to a server using form submission, or manipulated using JavaScript code and
 * the File API.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file
 */
export default {
    title: 'React Component/Element/Input/File',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - file',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Input</code> component to render &lt;input&gt;',
            table: {
                type: {
                    summary: '"input"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        type: {
            control: 'none',
            type: {
                required: true,
            },
            description: 'Switcher for <code>Input</code> component to render file',
            table: {
                type: {
                    summary: '"file"',
                },
            },
        },
        id: {
            control: 'text',
            description: 'ID for element',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        accept: {
            control: 'object',
            description: 'Specifies a list of unique file type specifiers which the file input should accept',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        capture: {
            control: 'radio',
            options: ['Default', 'user', 'environment'],
            mapping: {
                Default: undefined,
            },
            description: 'Specifies which camera to use for capture of image or video data',
            table: {
                type: {
                    summary: 'user|environment',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        multiple: {
            control: 'boolean',
            description: 'Specifies that the file input allows the user to select more than one file',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undeinfed',
                },
            },
        },
        required: {
            control: 'boolean',
            description: 'Specifies that the user must fill in a value before submitting a form',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, treated as []',
                },
            },
        },
        attributes: {
            control: 'object',
            description: 'Additional attributes',
            table: {
                type: {
                    summary: 'InputHTMLAttributes<HTMLInputElement>',
                    detail: deIndent(`
                            e.g.,
                            { 'aria-label': 'This is Label' }
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, treated as {}',
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'Datasets. "data-" is added at the beginning of all keys',
            table: {
                type: {
                    summary: 'Map<string, string>',
                    detail: deIndent(`
                            e.g.,
                            new Map([
                                ['id', 'this-is-id'],
                                ['name', 'This is Name'],
                            ]);
                            => data-id="this-is-id" data-name="This is Name"
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, treated as new Map()'
                },
            },
        },
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

