import React, {Fragment} from "react";
import {action} from "@storybook/addon-actions";
import {
    Button,
    Container,
    FORM_ENCTYPES,
    FORM_METHODS,
} from "../../../components";
import {deIndent} from "../../../utils";

/**
 * The &lt;button&gt; HTML element is an interactive element activated by a user with a mouse,
 * keyboard, finger, voice command, or other assistive technology.
 * Once activated, it then performs an action, such as submitting a form or opening a dialog.
 */
export default{
    title: 'React Component/Element/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Button element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <form id={'form-id'}>
                </form>
                <Story />
                <Container
                    element={'div'}
                    popover={'auto'}
                    id={'popover'}
                >
                    This is popover content.
                </Container>
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for Button component',
            type:{
                required: true,
            },
            table: {
                type: {
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
        type: {
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
            control: 'text',
            description: 'Defines the value associated with the button\'s name when it\'s submitted with the form data',
            table: {
                type: {
                    summary: 'string | number | boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        disabled: {
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
            control: 'text',
            description: 'The URL that processes the information submitted by the button. '
                        + 'Overrides the action attribute of the button\'s form owner. '
                        + 'Does nothing if there\'s no form owner.',
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
            if: {arg: 'type', eq: 'submit'},
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
            if: {arg: 'type', eq: 'submit'},
            control: 'select',
            options: ['Default'].concat(FORM_METHODS),
            mapping: {
                Default: undefined,
            },
            description: 'Specifies the HTTP method used to submit the form. '
                        + 'If specified, this attribute overrides the method attribute of the button\'s form owner.',
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
            if: {arg: 'type', eq: 'submit'},
            control: 'boolean',
            description: 'Specifies that the form is not to be validated when it is submitted. '
                        + 'If specified, it overrides the novalidate attribute of the button\'s form owner.',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        popovertarget: {
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
        popovertargetaction: {
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
        onClick={action('clicked')}
        {...args}
    >
        This is button Label
    </Button>,
};
/** Button with disabled */
export const ButtonDisabled = {
    ...Default,
    args: {
        disabled: true,
    },
};
/** Button with type and value */
export const ButtonWithTypeValue = {
    ...Default,
    args: {
        type: 'button',
        name: 'button_name',
        value: 'Button Value',
        onClick: undefined,
    },
};
/** Button with popover */
export const ButtonWithPopover = {
    ...Default,
    args: {
        popovertarget: 'popover',
        popovertargetaction: 'toggle',
    },
};
/** Button with other attributes */
export const ButtonWithOtherAttributes = {
    ...Default,
    args: {
        type: 'submit',
        form: 'form-id',
        formAction: './test_form',
        formEncType: 'multipart/form-data',
        formMethod: 'get',
        formNoValidate: true,
        formTarget: '_self',
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
