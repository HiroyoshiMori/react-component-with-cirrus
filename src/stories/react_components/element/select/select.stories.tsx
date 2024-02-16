import {
    AUTOCOMPLETES,
    Select,
} from "../../../../components";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The &lt;select&gt; HTML element represents a control that provides a menu of options.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
 */
export default {
    title: 'React Component/Element/Select/Select',
    component: Select,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The HTML Select element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Select</code> component to render &lt;select&gt;',
            table: {
                type: {
                    summary: '"select"',
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
            description: 'Specifies the name of this select element',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        options: {
            control: 'object',
            description: deIndent(`
                            Options for this select element<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'OptGroupProps', 'React Component/Element/Select/OptGroupProps'
                        ) + ' / '
                        + linkInStoryBook(
                            'OptionProps', 'React Component/Element/Select/Option'
                        ) + ' / '
                        + linkInStoryBook(
                            'HrProps', 'React Component/Element/Break/Hr'
                        ),
            table: {
                type: {
                    summary: '(OptGroupProps|OptionProps|HrProps)[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        selectedValue: {
            control: 'text',
            description: 'Selected value of select element',
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
            description: 'Specifies what if any permission the user agent has to provide automated assistance '
                        + 'in filling out form field values, as well as guidance to the browser as to the type '
                        + 'of information expected in the field.',
            table: {
                type: {
                    summary: '"' + AUTOCOMPLETES.join('"|"') + '"',
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
        form: {
            control: 'text',
            description: 'Name of the select',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        multiple: {
            control: 'boolean',
            description: 'Indicates that multiple options can be selected in the list.',
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
            description: 'Indicates that an option with a non-empty string value must be selected',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        size: {
            control: {type: 'number', min: 0},
            description: 'Represents the number of rows in the list that should be visible at one time',
            table: {
                type: {
                    summary: 'number',
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
                    summary: 'SelectHTMLAttributes<HTMLSelectElement>',
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
/** Default select */
export const Default = {
    render: (args: any) => <Select
        options={[
            {value: 'option1', children: 'Option 1'},
            {is: 'optgroup', label: 'Option 2 Group', options: [
                    {value: 'option2-1', children: 'Option 2-1'},
                    {value: 'option2-2', children: 'Option 2-2'},
                    {value: 'option2-3', children: 'Option 2-3'},
                    {value: 'option2-4', children: 'Option 2-4'},
                ]},
            {children: 'Option 3'},
            {value: 'option4', children: 'Option 4'},
        ]}
        {...args}
    />,
};
/** Select with selectedValue */
export const SelectWithSelectedValue = {
    ...Default,
    args: {
        selectedValue: 'option2-2',
    },
};
/** Select with multiple/size */
export const SelectWithMultipleAndSize = {
    ...Default,
    args: {
        multiple: true,
        size: 3,
    },
};
/** Select with required */
export const SelectWithRequired = {
    ...Default,
    args: {
        required: true,
    },
};
/** Select with disabled */
export const SelectWithDisabled = {
    ...Default,
    args: {
        disabled: true,
    },
};
/** Select with other attributes */
export const SelectWithOtherAttributes = {
    ...Default,
    args: {
        form: 'form-name',
        autoComplete: 'on',
    },
};
/** Select with style classes */
export const SelectWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Select with additional attributes */
export const SelectWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Select Label',
            'aria-placeholder': 'Select Placeholder',
        },
    },
};
/** Select with datasets */
export const SelectWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-select-id'],
            ['name', 'Data Select Name'],
        ]),
    },
};
