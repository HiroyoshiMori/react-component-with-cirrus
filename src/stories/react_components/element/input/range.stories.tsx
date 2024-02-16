import {action} from "@storybook/addon-actions";
import {
    AUTOCOMPLETES,
    Input,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * &lt;input&gt; elements of type <code>range</code> let the user specify a numeric value which must be no less than a
 * given value, and no more than another given value. The precise value, however, is not considered important. This is
 * typically represented using a slider or dial control rather than a text entry box like the <code>number</code> input
 * type.
 *
 * Because this kind of widget is imprecise, it should only be used if the control's exact value isn't important.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range
 */
export default {
    title: 'React Component/Element/Input/Range',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - range',
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
            description: 'Switcher for <code>Input</code> component to render range',
            table: {
                type: {
                    summary: '"range"',
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
        defaultValue: {
            control: 'number',
            description: 'Specifies value when initialized',
            table: {
                type: {
                    summary: 'number',
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
                    summary: '"' + AUTOCOMPLETES.join('"|"') + '"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        list: {
            control: 'string',
            description: 'The id of a &lt;datalist&gt; element located in the same document',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        datalist: {
            control: 'object',
            description: 'A list of predefined values to the user for this input',
            table: {
                type: {
                    summary: 'string[]',
                },
            },
        },
        max: {
            control: 'number',
            description: 'The largest number to accept',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        min: {
            control: 'number',
            description: 'The smallest number to accept',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        step: {
            control: {type: 'number', min: 1},
            description: 'Specifies the granularity that the value must adhere to, or the special value any',
            table: {
                type: {
                    summary: 'number | "any"',
                },
                defaultVale: {
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
        onChange: {
            action: 'changed',
            description: 'Function called when value is changed',
            table: {
                type: {
                    summary: 'function',
                    detail: '(e: React.ChangeEvent<HTMLInputElement>) => void',
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
/** Default range */
export const Default = {
    render: (args: any) => <Input
        type={'range'}
        defaultValue={''}
        onChange={(e) => {
            console.debug('value is: ' + e.target.value);
            action('range changed');
        }}
        {...args}
    />,
};
/** Range with datalist */
export const RangeWithDatalist = {
    ...Default,
    args: {
        datalist: [10, 20, 30],
    },
};
/** Range with list and datalist */
export const RangeWithListAndDatalist = {
    ...Default,
    args: {
        list: 'range-list',
        datalist: [5, 15, 25],
    },
};
/** Range with min/max */
export const RangeWithMinMax = {
    ...Default,
    args: {
        min: 10,
        max: 100,
    },
};
/** Range with step */
export const RangeWithStep = {
    ...Default,
    args: {
        step: 10,
    },
};
/** Range with style classes */
export const RangeWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Range with additional attributes */
export const RangeWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Range Label',
            'aria-placeholder': 'Range Placeholder',
        },
    },
};
/** Range with datasets */
export const RangeWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-range-id'],
            ['name', 'Data Range Name'],
        ]),
    },
};
