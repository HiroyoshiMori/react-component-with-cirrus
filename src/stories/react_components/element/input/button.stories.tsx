import {Fragment} from "react";
import {action} from "@storybook/addon-actions";
import {
    Container,
    Input,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * &lt;input&gt; elements of type <code>button</code> are rendered as simple push buttons, which can be programmed
 * to control custom functionality anywhere on a webpage as required when assigned an event handler function
 * (typically for the click event).
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button
 */
export default {
    title: 'React Component/Element/Input/Button',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - button',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Input</code> component to render &lt;input&gt;',
            table: {
                type: {
                    summary: 'input',
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
            description: 'Switcher for <code>Input</code> component to render button',
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
        popovertarget: {
            control: 'text',
            description: 'Turn an &lt;input type="button"&gt; element into a popover control button',
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
            control: 'select',
            options: ['Default', 'hide', 'show', 'toggle'],
            mapping: {
                Default: undefined,
            },
            description: 'Specifies the action to be performed on a popover element being controlled by '
                        + 'a controlled by a control &lt;input type="button"&gt;.',
            table: {
                type: {
                    summary: 'hide|show|toggle',
                },
            },
        },
        onClick: {
            action: 'clicked',
            description: 'Function to be called when button is clicked',
            table: {
                type: {
                    summary: 'function',
                    detail: '(e: React.MouseEvent<HTMLButtonElement>) => void',
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
/** Default input button */
export const Default = {
    render: (args: any) => <Input
        type={'button'}
        name={'input_button'}
        value={'Button Label'}
        onClick={action('clicked')}
        {...args}
    />,
};
/** Input button with other attributes */
export const ButtonWithOtherAttributes = {
    render: (args: any) => <Fragment>
        <Input
            type={'button'}
            value={'Button Label'}
            {...args}
        />
        <Container
            element={'div'}
            popover={'auto'}
            id={'popover'}
        >
            This is popover content.
        </Container>
    </Fragment>,
    args: {
        popovertarget: 'popover',
        popovertargetaction: 'toggle',
    },
};
/** Input button with style classes */
export const ButtonWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Input button with additional attributes */
export const ButtonWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Input Button Label',
            'aria-placeholder': 'Input Button Placeholder',
        },
    },
};
/** Input button with datasets */
export const ButtonWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-button-id'],
            ['name', 'Data Button Name'],
        ]),
    },
};
