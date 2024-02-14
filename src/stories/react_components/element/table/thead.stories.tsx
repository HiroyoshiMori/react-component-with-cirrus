import {Fragment} from "react";
import {THeadFoot} from "../../../../components";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The &lt;thead&gt; HTML element encapsulates a set of table rows (&lt;tr&gt; elements), indicating
 * that they comprise the head of a table with information about the table's columns.
 * This is usually is the form of column headers (&lt;th&gt; elements).
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead
 */
export default {
    title: 'React Component/Element/Table/Thead',
    component: THeadFoot,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Table Head element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <table>
                    <Story />
                    <tbody>
                    <tr>
                        <td>Cell 1-1</td>
                        <td>Cell 1-2</td>
                        <td>Cell 1-3</td>
                    </tr>
                    <tr>
                        <td>Cell 2-1</td>
                        <td>Cell 2-2</td>
                        <td>Cell 2-3</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <th id={'footer1'}>Foot 1</th>
                        <th id={'footer2'}>Foot 2</th>
                        <th id={'footer3'}>Foot 3</th>
                    </tr>
                    </tfoot>
                </table>
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            type: {
                required: true,
            },
            description: 'Switcher for <code>THeadFoot</code> component to render &lt;thead&gt;',
            table: {
                type: {
                    summary: 'thead',
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
        row: {
            control: 'object',
            type: {
                required: true,
            },
            description: deIndent(`
                            Rows in table head<br />
                            👉 See:&nbsp;
                        `)
                + linkInStoryBook(
                    'TheadRowProps which allows only ThProps as cells', 'React Component/Element/Table/Tr'
                ),
            table: {
                type: {
                    summary: 'TheadRowProps[]',
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
                    summary: 'HTMLAttributes<HTMLTableSectionElement>',
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
/** Default table head */
export const Default = {
    render: (args: any) => <THeadFoot
        element={'thead'}
        rows={[
            {
                element: 'tr',
                cells: [
                    {element: 'th', children: 'Head 1'},
                    {element: 'th', children: 'Head 2'},
                    {element: 'th', children: 'Head 3'},
                ],
            },
        ]}
        {...args}
    />,
};
/** Table head with style classes */
export const TableHeadWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Table head with additional attributes */
export const TableHeadWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Table Head Label',
            'aria-placeholder': 'Table Head Placeholder',
        },
    },
};
/** Table head with datasets */
export const TableHeadWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-thead-id'],
            ['name', 'Data Table Head Name'],
        ]),
    },
};


