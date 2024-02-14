import {Fragment} from "react";
import {TableRow} from "../../../../components";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The &lt;tr&gt; HTML element defines a row of cells in a table. The row's cells can then be
 * established using a mix of &lt;td&gt; (data cell) and &lt;th&gt; (header cell) elements.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr
 */
export default {
    title: 'React Component/Element/Table/Tr',
    component: TableRow,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Table Row element',
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
                    <Story />
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
            description: 'Switcher for <code>TableRow</code> component to render &lt;tr&gt;',
            table: {
                type: {
                    summary: 'tr',
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
        cells: {
            control: 'object',
            type: {
                required: true,
            },
            description: deIndent(`
                            Cells in this table row<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'TdProps', 'React Component/Element/Table/Td'
                        ) + ' / '
                        + linkInStoryBook(
                            'ThProps', 'React Component/Element/Table/Th'
                        ),
            table: {
                type: {
                    summary: '(TdProps | ThProps)[]',
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
                    summary: 'HTMLAttributes<HTMLTableRowElement>',
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
/** Default table row */
export const Default = {
    render: (args: any) => <TableRow
        element={'tr'}
        cells={[
            {element: 'td', children: 'Cell1'},
            {element: 'td', children: 'Cell2'},
            {element: 'td', children: 'Cell3'},
        ]}
        {...args}
    />,
};

/** Table row with style classes */
export const TableRowWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Table row with additional attributes */
export const TableRowWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Table Row Label',
            'aria-placeholder': 'Table Row Placeholder',
        },
    },
};
/** Table row with datasets */
export const TableRowWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-tr-id'],
            ['name', 'Data Table Row Name'],
        ]),
    },
};
