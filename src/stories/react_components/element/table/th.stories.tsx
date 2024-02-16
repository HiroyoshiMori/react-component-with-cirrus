import {Fragment} from "react";
import {TableCell} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;th&gt; element defines a cell as the header of a group of table cells and may be used
 * as a child of the &lt;tr&gt; element. The exact nature of this group is defined by the scope
 * and headers attributes.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th
 */
export default {
    title: 'React Component/Element/Table/Th',
    component: TableCell,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Table Header element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <table>
                    <thead>
                    <tr>
                        <Story/>
                        <th id={'header1-2'}>Head 1-2</th>
                        <th id={'header1-3'}>Head 1-3</th>
                    </tr>
                    <tr>
                        <th id={'header2-1'}>Head 2-1</th>
                        <th id={'header2-2'}>Head 2-2</th>
                        <th id={'header2-3'}>Head 2-3</th>
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
            description: 'Switcher for <code>TableCell</code> component to render &lt;th&gt;',
            table: {
                type: {
                    summary: '"th"',
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
            description: 'Indicates how many columns the header cell spans or extends',
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
            description: 'Indicates how many rows the header cell spans or expands',
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
                        + 'the &lt;th&gt; elements that provide headings for this header cell.',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        abbr: {
            control: 'text',
            description: 'A short, abbreviated description of the header cell\'s content provided as '
                        + 'an alternative label to use for the header cell when referencing the cell '
                        + 'in other contexts.',
            table: {
                type: {
                    summary: 'string',
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
/** Default table header cell */
export const Default = {
    render: (args: any) => <TableCell
        element={'th'}
        id={'header1-1'}
        {...args}
    >
        Head 1-1
    </TableCell>,
};
/** Table header cell with colspan */
export const TableHeaderCellWithColSpan = {
    ...Default,
    args: {
        colSpan: 2,
    },
};
/** Table header cell with rowspan */
export const TableHeaderCellWithRowSpan = {
    ...Default,
    args: {
        rowSpan: 2,
    },
};
/** Table header cell with headers */
export const TableHeaderCellWithHeaders = {
    ...Default,
    args: {
        headers: ['header2-1', 'footer1'],
    },
};
/** Table header cell with style classes */
export const TableHeaderCellWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Table header cell with additional attributes */
export const TableHeaderCellWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Table Header Cell Label',
            'aria-placeholder': 'Table Header Cell Placeholder',
        },
    },
};
/** Table header cell with datasets */
export const TableHeaderCellWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-th-id'],
            ['name', 'Data Table Header Cell Name'],
        ]),
    },
};
