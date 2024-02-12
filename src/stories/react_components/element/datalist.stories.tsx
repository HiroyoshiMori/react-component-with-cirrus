import {Fragment} from "react";
import {
    DataList,
    Input,
    Label,
} from "../../../components";
import {deIndent, linkInStoryBook} from "../../../utils";

/**
 * The &lt;datalist&gt; HTML element containers a set of &lt;option&gt; elements that represent the permissible
 * or recommended options available to choose from within other controls.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
 */
export default {
    title: 'React Component/Element/DataList',
    component: DataList,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The HTML Data List element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Label htmlFor={'input-id'}>
                    Choose a option:
                    <Input
                        id={'input-id'}
                        type={'text'}
                        list={'data-list'}
                    />
                </Label>
                <Story />
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>DataList</code> component to render &lt;datalist&gt;',
            table: {
                type: {
                    summary: 'datalist',
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
        children: {
            control: 'text',
            description: 'Content of component',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        options: {
            control: 'object',
            description: deIndent(`
                            Option elements which will be visible in the drop-down menu as candidacies<br >
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'OptionProps', 'React Component/Element/Select/Option'
                        ),
            table: {
                type: {
                    summary: 'OptionProps[]',
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
                    summary: 'HTMLAttributes<HTMLDataListElement>',
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
// Default datalist
const DefaultDatalist = {
    element: 'datalist',
    id: 'data-list',
    options: [
        {value: 'option1', children: 'Option 1'},
        {value: 'option2', children: 'Option 2'},
        {value: 'option3', children: 'Option 3'},
        {value: 'option4', children: 'Option 4'},
    ],
};

/** Default datalist */
export const Default = {
    render: (args: any) => <DataList
        {...DefaultDatalist}
        {...args}
    />,
};
/** Datalist with default value */
export const DataListWithDefaultValue = {
    ...Default,
    args: {
        defaultValue: 'option3',
    },
};
/** Datalist with style classes */
export const DatalistWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Datalist with additional attributes */
export const DatalistWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Datalist Label',
            'aria-placeholder': 'Datalist Placeholder',
        },
    },
};
/** Datalist with datasets */
export const DatalistWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-datalist-id'],
            ['name', 'Data Datalist Name'],
        ]),
    },
};
