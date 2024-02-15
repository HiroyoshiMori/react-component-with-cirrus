import {Fragment} from "react";
import {
    AUTOCOMPLETES,
    Input,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * &lt;input&gt; elements of type <code>hidden</code> let web developer's include data that cannot be seen or modified
 * by users when a form is submitted. For example, the ID of the content that is currently being ordered or edited, or
 * a unique security token. Hidden inputs are completely invisible in the rendered page, and there is no way to make
 * it visible in the page's content.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden
 */
export default {
    title: 'React Component/Element/Input/Hidden',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - hidden',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                Hidden element is here.
                <Story />
            </Fragment>
        ),
    ],
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
            description: 'Switcher for <code>Input</code> component to render hidden',
            table: {
                type: {
                    summary: 'hidden',
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
        autoComplete: {
            control: 'select',
            options: ['Default'].concat(AUTOCOMPLETES),
            mapping: {
                Default: undefined,
            },
            table: {
                type: {
                    summary: 'on|off|name|honorific-prefix|given-name|additional-name|family-name|honorific-suffix'
                        + '|nickname|email|username|new-password|current-password|one-time-code|organization-title'
                        + '|organization|street-address|shipping|billing|address-line1|address-line2|address-line3'
                        + '|address-level4|address-level3|address-level2|address-level1|country|country-name'
                        + '|postal-code|cc-name|cc-given-name|cc-additional-name|cc-family-name|cc-number|cc-exp'
                        + '|cc-exp-month|cc-exp-year|cc-csc|cc-type|transaction-currency|transaction-amount'
                        + '|language|bday|bday-day|bday-month|bday-year|sex|tel|tel-country-code|tel-national'
                        + '|tel-area-code|tel-local|tel-extension|impp|url|photo|webauthn',
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
/** Default hidden */
export const Default = {
    render: (args: any) => <Input
        type={'hidden'}
        name={'input_hidden'}
        value={'HiddenValue'}
        {...args}
    />,
};
/** Hidden with style classes */
export const HiddenWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Hidden with additional attributes */
export const HiddenWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Hidden Label',
            'aria-placeholder': 'Hidden Placeholder',
        },
    },
};
/** Hidden with datasets */
export const HiddenWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-hidden-id'],
            ['name', 'Data Hidden Name'],
        ]),
    },
};
