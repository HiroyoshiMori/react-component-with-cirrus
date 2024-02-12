import {Textarea} from "../../../components";
import {deIndent} from "../../../utils";

/**
 * The &lt;textarea&gt; HTML element represents a multi-line plain-text editing control,
 * useful when you want to allow users to enter a sizeable amount of free-form text,
 * for example a comment on a review or feedback form.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
 */
export default {
    title: 'React Component/Element/Textarea',
    component: Textarea,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Textarea element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Textarea</code> component to render &lt;textarea&gt;',
            table: {
                type: {
                    summary: 'textarea',
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
            description: 'The name of the control',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        defaultValue: {
            control: 'text',
            description: 'Default value which is put in the textarea',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        cols: {
            control: {type: 'number', min: 1},
            description: 'The visible width of the text control, in average character widths. Default value is 20.',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        rows: {
            control: {type: 'number', min: 1},
            description: 'The number of visible text lines for the control. Default value is 2.',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        placeholder: {
            control: 'text',
            description: 'A hint to the user of what can be entered in the control',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        readOnly: {
            control: 'boolean',
            description: 'Indicates that the user cannot modify the value of the control',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
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
        disabled: {
            control: 'boolean',
            description: 'Indicates that the user cannot interact with the control',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        maxLength: {
            control: {type: 'number', min: 0},
            description: 'The maximum string length (measured in UTF-16 code units) that the user can enter',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        minLength: {
            control: {type: 'number', min: 0},
            description: 'The minimum string length (measured in UTF-16 code units) required '
                        + 'that the user should enter.',
            table: {
                type: {
                    summary: 'number',
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
            description: 'Indicates whether the value of the control can be automatically completed by the browser',
            table: {
                type: {
                    summary: 'on|off',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        dir: {
            control: 'select',
            options: ['Default', 'auto', 'ltr', 'rtl'],
            mapping: {
                Default: undefined,
            },
            description: 'Indicates the directionality of the element\'s text',
            table: {
                type: {
                    summary: 'auto|ltr|rtl',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        dirname: {
            control: 'text',
            description: 'The name of form field to use for sending the element\'s directionality in form submission',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        form: {
            control: 'string',
            description: 'The form element that the &lt;textarea&gt; element is associated with (its "form owner")',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        wrap: {
            control: 'select',
            options: ['Default', 'hard', 'soft'],
            mapping: {
                Default: undefined,
            },
            description: 'Indicates how the control should wrap the value for form submission',
            table: {
                type: {
                    summary: 'hard|soft',
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
                    summary: 'TextareaHTMLAttributes<HTMLTextAreaElement>',
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
        dirname: 'textarea-dir',
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
