import {
    AUTOCOMPLETES,
    Input,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * &lt;input&gt; elements of type <code>color</code> provide a user interface element that lets a user specify a color,
 * either by using a visual color picker interface or by entering the color into a text field in <code>#rrggbb</code>
 * hexadecimal format.
 *
 * Only simple colors (without alpha channel) are allowed though CSS colors has more formats, e.g., color names,
 * functional notations and a hexadecimal format with an alpha channel.
 *
 * The element's presentation may vary substantially from one browser and/or platform to another -- it might be a
 * simple textual input that automatically validates to ensure that the color information is entered in the proper
 * format, or a platform-standard color picker, or some kind of custom color picker window.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color
 */
export default {
    title: 'React Component/Element/Input/Color',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - color',
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
            description: 'Switcher for <code>Input</code> component to render color',
            table: {
                type: {
                    summary: '"color"',
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
            control: 'text',
            description: 'Color picked when initialized',
            table: {
                type: {
                    summary: 'string | number',
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
        onChange: {
            action: 'changed',
            summary: 'Function called when value is changed',
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
/** Default color select */
export const Default = {
    render: (args: any) => <Input
        type={'color'}
        name={'input_color'}
        {...args}
    />,
};
/** Color select with list & datalist */
export const ColorWithListAndDatalist = {
    ...Default,
    args: {
        list: 'color-list',
        datalist: [
            '#000000', '#FF0000', '#00FF00', '#0000FF',
        ],
    },
};
/** Color select with datalist */
export const ColorWithDatalist = {
    ...Default,
    args: {
        datalist: [
            '#000000', '#FF0000', '#00FF00', '#0000FF',
        ],
    },
};
/** Color select with style classes */
export const ColorWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Color select with additional attributes */
export const ColorWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Input Color Label',
            'aria-placeholder': 'Input Color Placehodler',
        },
    },
};
/** Color select with datasets */
export const ColorWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-color-id'],
            ['name', 'Data Color Name'],
        ]),
    },
};
