import {Fragment} from "react";
import {
    OptGroup,
} from "../../../../components";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The &lt;optgroup&gt; HTML element creates a grouping of options with a &lt;select&gt; element.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup
 */
export default {
    title: 'React Component/Element/Select/OptGroup',
    component: OptGroup,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Option Group element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <select>
                    <option>--- Please selection option ---</option>
                    <Story/>
                </select>
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>OptGroup</code> component to render &lt;optgroup&gt;',
            table: {
                type: {
                    summary: '"optgroup"',
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
        is: {
            control: 'none',
            type: {
                required: true,
            },
            description: 'Options in option group',
            table: {
                type: {
                    summary: 'optgroup',
                },
            },
        },
        label: {
            control: 'text',
            type: {
                required: true,
            },
            description: 'Option group label',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        options: {
            control: 'object',
            type: {
                required: true,
            },
            description: deIndent(`
                            Options in group<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'OptionProps', 'React Component/Element/Select/Option'
                        ),
            table: {
                type: {
                    summary: 'OptionProps[]',
                },
            },
        },
        disabled: {
            control: 'boolean',
            description: 'True if disable options in the group',
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
                    summary: 'OptgroupHTMLAttributes<HTMLOptGroupElement>',
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
/** Default option group */
export const Default = {
    render: (args: any) => <OptGroup
        is={'optgroup'}
        label={'Option Group'}
        options={[
            {value: 'option1', children: 'Option 1'},
            {value: 'option2', children: 'Option 2'},
            {children: 'Option 3'},
            {value: 'option4', children: 'Option 4'},
        ]}
        {...args}
    />,
};
/** Option group with disabled */
export const OptGroupWithDisabled = {
    ...Default,
    args: {
        disabled: true,
    },
};
/** Option group with style classes */
export const OptGroupWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Option group with additional attributes */
export const OptGroupWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Option Group Label',
            'aria-placeholder': 'Option Group Placeholder',
        },
    },
};
/** Option group with datasets */
export const OptGroupWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-optgroup-id'],
            ['name', 'Data Option Group Name'],
        ]),
    },
};
