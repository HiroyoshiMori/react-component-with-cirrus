import {Fragment} from "react";
import {THeadFoot} from "../../../../components";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The &lt;tfoot&gt; HTML element encapsulates a set of table rows (&lt;tr&gt; elements), indicating
 * that they comprise the foot of a table with information about the table's columns.
 * This is usually a summary of the columns, e.g., a sum of the given numbers in a column.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot
 */
export default {
    title: 'React Component/Element/Table/Tfoot',
    component: THeadFoot,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Table Foot element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <table>
                    <thead>
                    <tr>
                        <th id={'header1'}>Head1</th>
                        <th id={'header2'}>Head2</th>
                        <th id={'header3'}>Head3</th>
                    </tr>
                    </thead>
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
                    <Story />
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
            description: 'Switcher for <code>THeadFoot</code> component to render &lt;tfoot&gt;',
            table: {
                type: {
                    summary: '"tfoot"',
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
                            Rows in table foot<br />
                            👉 See:&nbsp;
                        `)
                + linkInStoryBook(
                    'TrProps', 'React Component/Element/Table/Tr'
                ),
            table: {
                type: {
                    summary: 'TrProps[]',
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
/** Default table foot */
export const Default = {
    render: (args: any) => <THeadFoot
        element={'tfoot'}
        rows={[
            {
                element: 'tr',
                cells: [
                    {element: 'th', children: 'Foot 1'},
                    {element: 'td', children: 'Foot Cell 2'},
                    {element: 'td', children: 'Foot Cell 3'},
                ],
            },
        ]}
        {...args}
    />,
};
/** Table foot with style classes */
export const TableFootWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Table foot with additional attributes */
export const TableFootWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Table Foot Label',
            'aria-placeholder': 'Table Foot Placeholder',
        },
    },
};
/** Table foot with datasets */
export const TableFootWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-foot-id'],
            ['name', 'Data Table Foot Name'],
        ]),
    },
};


