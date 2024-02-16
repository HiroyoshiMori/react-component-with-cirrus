import {
    Label,
} from "../../../components";
import {deIndent} from "../../../utils";

/**
 * The &lt;label&gt; HTML element represents a caption for an item in a user interface.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
 */
export default {
    title: 'React Component/Element/Label',
    component: Label,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Label element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Label</code> component to render &lt;label&gt;',
            table: {
                type: {
                    summary: '"label"',
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
        children: {
            control: 'text',
            description: 'Caption content',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        htmlFor: {
            control: 'text',
            description: 'A single id of a labelable form-related element in the same document as the &lt;label&gt;.',
            table: {
                type: {
                    summary: 'string',
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
                    summary: 'LabelHTMLAttributes<HTMLLabelElement>',
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
/** Default label */
export const Default = {
    render: (args: any) => <Label
        {...args}
    >
        This is label contents
    </Label>,
};
/** Label with for */
export const LabelWithFor = {
    ...Default,
    args: {
        htmlFor: 'test-label',
    },
};
/** Label with style classes */
export const LabelWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Label with additional attributes */
export const LabelWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Label Label',
            'aria-placeholder': 'Label Placeholder',
        },
    },
};
/** Label with datasets */
export const LabelWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-label-id'],
            ['name', 'Data Label Name'],
        ]),
    },
};
