import {action} from "@storybook/addon-actions";
import {
    FORM_ENCTYPES, FORM_METHODS,
    Input, TARGETS,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * &lt;input&gt; elements of type <code>submit</code> are rendered as buttons. When the click event occurs (typically
 * because the user clicked the button), the user agent attempts to submit the form to the server.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/submit
 */
export default {
    title: 'React Component/Element/Input/Submit',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - submit',
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
            description: 'Switcher for <code>Input</code> component to render submit',
            table: {
                type: {
                    summary: '"submit"',
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
        formAction: {
            control: 'text',
            description: 'Indicating the URL to which to submit the data',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        formEncType: {
            control: 'select',
            options: ['Default'].concat(FORM_ENCTYPES),
            mapping: {
                Default: undefined,
            },
            description: 'Identifies the encoding method to use when submitting the form data to '
                + 'the server',
            table: {
                type: {
                    summary: '"' + FORM_ENCTYPES.join('"|"') + '"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        formMethod: {
            control: 'select',
            options: ['Default'].concat(FORM_METHODS),
            mapping: {
                Default: undefined,
            },
            description: 'Indicating the HTTP method to use when submitting the form\'s data;',
            table: {
                type: {
                    summary: '"' + FORM_METHODS.join('"|"') + '"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        formNoValidate: {
            control: 'boolean',
            description: 'Specifies that the form should not be validated before submission to the server',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        formTarget: {
            control: 'select',
            options: ['Default', 'others'].concat(TARGETS),
            mapping: {
                Default: undefined,
            },
            description: 'Specifies a name or keyword that indicates where to display the response received '
                + 'after submitting the form',
            table: {
                type: {
                    summary: '"' + TARGETS.join('"|"') + '"|string',
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
/** Default submit */
export const Default = {
    render: (args: any) => <Input
        type={'submit'}
        value={'Submit value'}
        onClick={action('submit clicked')}
        {...args}
    />,
};
/** Submit with other attributes */
export const SubmitWithOtherAttributes = {
    ...Default,
    args: {
        formAction: '#',
        formEncType: 'plain/text',
        formMethod: 'get',
        formNoValidate: true,
        formTarget: '_self',
    },
};
/** Submit with style classes */
export const SubmitWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Submit with additional attributes */
export const SubmitWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Submit Label',
            'aria-placeholder': 'Submit Placeholder',
        },
    },
};
/** Submit with datasets */
export const SubmitWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-submit-id'],
            ['name', 'Data Submit Name'],
        ]),
    },
};
