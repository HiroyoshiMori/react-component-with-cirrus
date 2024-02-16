import {Fragment} from "react";
import {TableCell} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;td&gt; element defines a cell of a table that contains data and may be used as a child
 * of the &lt;tr&gt; element.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td
 */
export default {
    title: 'React Component/Element/Table/Td',
    component: TableCell,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Table Data Cell element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <table>
                    <thead>
                    <tr>
                        <th id={'header1'}>Head 1</th>
                        <th id={'header2'}>Head 2</th>
                        <th id={'header3'}>Head 3</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <Story/>
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
    argType: {
        element: {
            control: 'none',
            description: 'Switcher for <code>TableCell</code> component to render &lt;td&gt;',
            table: {
                type: {
                    summary: '"td"',
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
            description: 'Content of this element',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        colSpan: {
            control: {type: 'number', min: 1},
            description: 'Indicates how many columns the data cell spans or extends',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        rowSpan: {
            control: {type: 'number', min: 1},
            description: 'Indicates how many rows the data cell spans or expands',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        headers: {
            control: 'object',
            description: 'Contains a list of each corresponding to the <code>id</code> attribute of '
                        + 'the &lt;th&gt; elements that provide headings for this table cell.',
            table: {
                type: {
                    summary: 'string[]',
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
                    summary: 'TdHTMLAttributes<HTMLTableCellElement>',
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
    }
};
/** Default table cell */
export const Default = {
    render: (args: any) => <TableCell
        element={'td'}
        {...args}
    >
        Cell 1-1
    </TableCell>,
};
/** Table cell with colspan */
export const TableCellWithColSpan = {
    ...Default,
    args: {
        colSpan: 2,
    },
};
/** Table cell with rowspan */
export const TableCellWithRowSpan = {
    ...Default,
    args: {
        rowSpan: 2,
    },
};
/** Table cell with headers */
export const TableCellWithHeaders = {
    ...Default,
    args: {
        headers: ['header1', 'footer1'],
    },
};
/** Table cell with style classes */
export const TableCellWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Table cell with additional attributes */
export const TableCellWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Table Cell Label',
            'aria-placeholder': 'Table Cell Placeholder',
        },
    },
};
/** Table cell with datasets */
export const TableCellWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-td-id'],
            ['name', 'Data Table Cell Name'],
        ]),
    },
};
