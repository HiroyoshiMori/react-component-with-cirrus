import {
    AUTOCOMPLETES,
    Input,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * <ul>
 *     <li>
 *         &lt;input&gt; elements of <code>type="date"</code><br />
 *         Create input fields that let the user enter a date, either with a textbox that validates the input
 *         or a special date picker interface.<br />
 *         <br />
 *         The resulting value includes the year, month, and day, but not the time. The time and datetime-local
 *         input types support time and date+time input.<br />
 *         <br />
 *         See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date
 *     </li>
 *     <li>
 *         &lt;input&gt; elements of <code>type="datetime-local"</code><br />
 *         Create input controls that let the user easily enter both a date and a time, including the year,
 *         month, and day as well as the time in hours and minutes.<br />
 *         <br />
 *         See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local
 *     </li>
 *     <li>
 *         &lt;input&gt; element of <code>type="month"</code><br />
 *         Create input fields that let the user enter a month and year allowing a month and year to be
 *         easily entered. The value is a string whose value is in the format "YYYY-MM", where YYYY is the
 *         four-digit year and MM is the month number.<br />
 *         <br />
 *         See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/month
 *     </li>
 *     <li>
 *         &lt;input&gt; element of <code>type="time"</code><br />
 *         Create input fields designed to let the user easily enter a time (hours and minutes, and optionally
 *         seconds).<br />
 *         <br />
 *         The control's user interface varies from browser to browser; see Browser compatibility for further
 *         details. In unsupported browsers, the control degrades gracefully to &lt;input type="text"&gt;.<br />
 *         <br />
 *         See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/time
 *     </li>
 *     <li>
 *         &lt;input&gt; element of <code>type="week"</code><br />
 *         Create input fields allowing easy entry of a year plus the ISO 8601 week number during that year
 *         (i.e., week 1 to 52 or 53).<br />
 *         <br />
 *         See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/week<br />
 *         See: https://en.wikipedia.org/wiki/ISO_8601#Week_dates
 *     </li>
 * </ul>
 */
export default {
    title: 'React Component/Element/Input/Date&Time',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - date/datetime-local/month/time/week',
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
            description: 'Switcher for <code>Input</code> component to render date/datetime-local/month/time/week',
            table: {
                type: {
                    summary: 'date|datetime-local|month|time|week',
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
            description: 'Specifies value when initialized',
            table: {
                type: {
                    summary: 'string',
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
        max: {
            control: 'text',
            description: 'The latest date/time to accept. Format must be the same as value',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        min: {
            control: 'text',
            description: 'The earliest date/time to accept. Format must be the same as value',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        pattern: {
            control: 'text',
            description: 'Format which browser may use when submit. Be sure even if you set this attribute, '
                        + 'you MUST validate when received.',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
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
/** Default date */
export const Default = {
    render: (args: any) => <Input
        type={'date'}
        name={'input_date'}
        {...args}
    />,
};
/** Default datetime-local */
export const DefaultDateTimeLocal = {
    ...Default,
    args: {
        type: 'datetime-local',
    },
};
/** Default month */
export const DefaultMonth = {
    ...Default,
    args: {
        type: 'month',
    },
};
/** Default time */
export const DefaultTime = {
    ...Default,
    args: {
        type: 'time',
    },
};
/** Default week */
export const DefaultWeek = {
    ...Default,
    args: {
        type: 'week',
    },
};
/** Date with min/max */
export const DateWithMinMax = {
    ...Default,
    args: {
        min: '2023-01-01',
        max: '2024-12-31',
    },
};
/** Date with readonly */
export const DateWithReadonly = {
    ...Default,
    args: {
        defaultValue: '2024-01-01',
        readOnly: true,
    },
};
/** Date with required */
export const DateWithRequired = {
    ...Default,
    args: {
        required: true,
    },
};
/** Date with step */
export const DateWithStep = {
    ...Default,
    args: {
        step: 7,
    },
};
/** Date with list and datalist */
export const DateWithListAndDatalist = {
    ...Default,
    args: {
        list: 'date-selection',
        datalist: ['2024-01-01', '2023-12-01', '2023-11-01'],
    },
};
/** Date with datalist */
export const DateWithDatalist = {
    ...Default,
    args: {
        datalist: ['2024-01-01', '2023-12-01', '2023-11-01'],
    },
};
/** Date with style classes */
export const DateWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Date with additional attributes */
export const DateWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Input Date Label',
            'aria-placeholder': 'Input Date Placeholder',
        },
    },
};
/** Date with datasets */
export const DateWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-date-id'],
            ['name', 'Data Date Name'],
        ]),
    },
};
