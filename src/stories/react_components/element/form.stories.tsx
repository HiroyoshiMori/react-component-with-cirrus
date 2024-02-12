import {
    Form,
} from "../../../components";
import {deIndent} from "../../../utils";

/**
 * The &lt;form&gt; element represents a document section containing interactive controls
 * for submitting information.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
 */
export default {
    title: 'React Component/Element/Form',
    component: Form,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Form element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Form</code> component to render &lt;form&gt;',
            table: {
                type: {
                    summary: 'form',
                },
                defaultValue: {
                    summary: 'undefined',
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
        name: {
            control: 'text',
            description: 'The name of the form',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        action: {
            control: 'text',
            description: deIndent(`
                        The URL that processes the form submission. This value can be overridden by a formation
                        attribute on a &lt;button&gt;, &lt;input type="submit"&gt;, or &lt;input type="image"&gt;
                        element. This attribute is ignored when method="dialog" is set.
                    `),
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        method: {
            control: 'select',
            options: ['Default', 'post', 'get', 'dialog'],
            mapping: {
                Default: undefined,
            },
            description: 'The HTTP method to submit the form with',
            table: {
                type: {
                    summary: 'post|get|dialog',
                },
                defaultValue: {
                    summary :'undefined',
                },
            },
        },
        children: {
            control: 'text',
            description: 'Content of the form',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        acceptCharset: {
            control: 'object',
            description: 'A list of character encodings the server accepts.',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        autoCapitalize: {
            control: 'boolean',
            description: 'Controls whether inputted text is automatically capitalized and, if so, in what manner',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        autoComplete: {
            control: 'select',
            options: ['Default', 'on', 'off'],
            mapping: {
                Default: undefined,
            },
            description: deIndent(
                    `Indicates whether input elements can be default have their values automatically
                         completed by the browser
                    `),
            table: {
                type: {
                    summary: 'on|off',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        rel: {
            control: 'radio',
            options: ['Default', 'external', 'nofollow', 'opener', 'noopener', 'noreferrer'],
            mapping: {
                Default: undefined,
            },
            description: 'Controls the annotations and what kinds of links the form creates',
            table: {
                type: {
                    summary: 'external|nofollow|opener|noopener|noreferrer',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        encType: {
            control: 'select',
            options: ['Default', 'application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'],
            mapping: {
                Default: 'undefined',
            },
            description: 'enctype is the MIME type of the form submission',
            table: {
                type: {
                    summary: 'application/x-www-form-urlencoded|multipart/form-data|text/plain',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        noValidate: {
            control: 'boolean',
            description: deIndent(`
                        Indicates that the form shouldn't be validated when submitted. If this attribute is not
                        set (and therefore the form is validated), it can be overridden by a formnovalidate attribute
                        on a &lt;button&gt;, &lt;input type="submit"&gt;, or &lt;input type="image"&gt; element
                        belonging to the form.
                    `),
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        target: {
            control: 'select',
            options: ['Default', '_self', '_blank', '_parent', '_top', 'string'],
            mapping: {
                Default: undefined,
            },
            description: 'Indicates where to display the response after submitting the form.',
            table: {
                type: {
                    summary: '_self|_blank|_parent|_top|string',
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
                    summary: 'FormHTMLAttributes<HTMLFormElement>',
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
