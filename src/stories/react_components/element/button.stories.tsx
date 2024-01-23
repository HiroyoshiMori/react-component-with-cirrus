import {Button, cssFramework, FORM_ENCTYPES, FORM_METHODS} from "../../../components";
import {deIndent} from "../../../utils";

/**
 * The &lt;button&gt; HTML element is an interactive element activated by a user with a mouse,
 * keyboard, finger, voice command, or other assistive technology.
 * Once activated, it then performs an action, such as submitting a form or opening a dialog.
 */
export default{
    title: 'React Component/Element/Button/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Button element',
    },
    argTypes: {
        element: {
            control: 'select',
            options: ['button', 'a', 'div'],
            description: 'Switcher for Button component',
            type:{
                required: true,
            },
            table: {
                type: {
                    summary: 'button|a|div',
                },
                defaultValue: {
                    summary: 'button',
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
            description: 'Name of element',
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
            control: 'object',
            description: 'Children node of element which will be button label',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        onClick: {
            action: 'clicked',
            description: 'Function which is called when user clicked',
            table: {
                type: {
                    summary: '(e: React.MouseEvent<HTMLButtonElement>) => void',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        colorType: {
            control: 'select',
            options: ['Default'].concat(cssFramework.COLORS),
            mapping: {
                Default: undefined,
            },
            table: {
                type: {
                    summary: cssFramework.COLORS.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        size: {
            control: 'select',
            options: ['Default', 'xs', 'sm', 'lg', 'xl'],
            mapping: {
                Default: undefined,
            },
            table: {
                type: {
                    summary: 'xs|sm|lg|xl',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        type: {
            if: {arg: 'element', eq: 'button'},
            control: 'select',
            options: ['Default', 'submit', 'reset', 'button'],
            mapping: {
                Default: undefined,
            },
            description: 'The default behavior of the button',
            table: {
                type: {
                    summary: 'submit|reset|button',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        value: {
            if: {arg: 'element', eq: 'button'},
            control: 'text',
            description: 'Defines the value associated with the button\s name when it\s submitted with the form data',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        disabled: {
            if: {arg: 'element', eq: 'button'},
            control: 'boolean',
            description: 'Prevent the user from interacting with the button',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        form: {
            if: {arg: 'element', eq: 'button'},
            control: 'text',
            description: 'The &lt;form&gt; element to associate the button with. Must be the <code>id</code> of '
                        + 'a <code>&lt;form&gt;</code> in the same document.',
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
            if: {arg: 'element', eq: 'button'},
            control: 'text',
            description: 'The URL that processes the information submitted by the button. '
                        + 'Overrides the action attribute of the button\s form owner. '
                        + 'Does nothing if there\s no form owner.',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        formEnctype: {
            if: {arg: 'element', eq: 'button'},
            control: 'select',
            options: ['Default'].concat(FORM_ENCTYPES),
            mapping: {
                Default: undefined,
            },
            description: 'Specified how to encode the form data that is submitted',
            table: {
                type: {
                    summary: FORM_ENCTYPES.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        formMethod: {
            if: {arg: 'element', eq: 'button'},
            control: 'select',
            options: ['Default'].concat(FORM_METHODS),
            mapping: {
                Default: undefined,
            },
            description: 'Specifies the HTTP method used to submit the form. '
                        + 'If specified, this attribute overrides the method attribute of the button\s form owner.',
            table: {
                type: {
                    summary: FORM_METHODS.join('|'),
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        formNoValidate: {
            if: {arg: 'element', eq: 'button'},
            control: 'boolean',
            description: 'Specifies that the form is not to be validated when it is submitted. '
                        + 'If specified, it overrides the novalidate attribute of the button\s form owner.',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        popoverTarget: {
            if: {arg: 'element', eq: 'button'},
            control: 'text',
            description: 'Turns a &lt;button&gt; element into a popover control button; '
                        + 'takes the ID of the popover element to control as its value.',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        popoverTargetAction: {
            if: {arg: 'element', eq: 'button'},
            control: 'select',
            options: ['Default', 'hide', 'show', 'toggle'],
            mapping: {
                Default: undefined,
            },
            description: 'Specified the action to be performed on a popover element being controlled '
                        + 'by a control &lt;button&gt;,',
            table: {
                type: {
                    summary: 'hide|show|toggle',
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
                    summary: 'ButtonHTMLAttributes<HTMLButtonElement> '
                            + '| AnchorHTMLAttributes<HTMLAnchorElement> '
                            + '| HTMLAttributes<HTMLDivElement>',
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

/** Default button */
export const Default = {
    render: (args: any) => <Button
        element='button'
        {...args}
    >
        This is button Label
    </Button>,
};
/** Button with element 'a' */
export const ButtonWithA = {
    ...Default,
    args: {
        element: 'a',
    },
};
/** Button with element 'div' */
export const ButtonWithDiv = {
    ...Default,
    args: {
        element: 'div',
    },
};
/** Button with style classes */
export const ButtonWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Button with additional attributes */
export const ButtonWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Button Label',
            'aria-placeholder': 'Button Placeholder',
        },
    },
};
/** Button with datasets */
export const ButtonWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'button-data-id'],
            ['name', 'Button Data Name'],
        ]),
    },
};
