import {
    Dialog,
} from "../../../components";
import {deIndent} from "../../../utils";

/**
 * The &lt;dialog%gt; HTML element represents a modal or non-modal dialog box or other interactive
 * component, such as a dismissible alert, inspector or sub-window.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
 */
export default {
    title: 'React Component/Element/Dialog',
    component: Dialog,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Dialog element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Dialog</code> component to render &lt;dialog&gt;',
            table: {
                type: {
                    summary: 'dialog',
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
            description: 'Content of component',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        open: {
            control: 'boolean',
            description: 'Indicates that the dialog box is active and is available for interaction.',
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
                    summary: 'DialogHTMLAttributes<HTMLDialogElement>',
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
/** Default dialog */
export const Default = {
    render: (args: any) => <Dialog
        element={'dialog'}
        open={true}
        {...args}
    >
        Dialog content
    </Dialog>,
};
/** Dialog with style classes */
export const DialogWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Dialog with additional attributes */
export const DialogWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Dialog Label',
            'aria-placeholder': 'Dialog Placeholder',
        },
    },
};
/** Dialog with datasets */
export const DialogWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-dialog-id'],
            ['name', 'Data dialog name'],
        ]),
    },
};
