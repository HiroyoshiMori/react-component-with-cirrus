import {Fragment} from "react";
import {
    Option,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;option&gt; HTML element is used to define an item contained in a &lt;select&gt;,
 * an &lt;optgroup&gt;, or a &lt;datalist&gt; element. As such, &lt;option&gt; can represent
 * menu items in popups and other lists of items in an HTML document.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option
 */
export default {
    title: 'React Component/Element/Select/Option',
    component: Option,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The HTML Option element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <select>
                    <option>--- Please selection option ---</option>
                    <Story />
                </select>
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Option</code> component to render &lt;option&gt;',
            table: {
                type: {
                    summary: 'option',
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
            description: 'Name of option',
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
            type: {
                required: true,
            },
            description: 'text content of option, when value is not set, this value is used as value of option',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        value: {
            control: 'text',
            description: 'The value to be submitted with the form',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        label: {
            control: 'text',
            description: 'The label indicating the meaning of the option',
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
            control: 'boolean',
            description: 'Indicate this option is not checkable',
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
                    summary: 'OptionHTMLAttributes<HTMLOptionElement>',
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
/** Default option */
export const Default = {
    render: (args: any) => <Option
        name={'option_name'}
        {...args}
    >
        This is Option
    </Option>,
};
/** Option with Value */
export const OptionWithValue = {
    ...Default,
    args: {
        value: 'option_value',
    },
};
/** Option with label */
export const OptionWithLabel = {
    ...Default,
    args: {
        label: 'Option Label',
    },
};
/** Option selected */
export const OptionSelected = {
    ...Default,
    args: {
        selected: true,
    },
};
/** Option disabled */
export const OptionDisabled = {
    ...Default,
    args: {
        disabled: true,
    },
};
/** Option with style classes */
export const OptionWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Option with additional attributes */
export const OptionWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Option Label',
            'aria-placeholder': 'Option Placeholder',
        },
    },
};
/** Option with datasets */
export const OptionWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-option-id'],
            ['name', 'Data Option Name'],
        ]),
    },
};
