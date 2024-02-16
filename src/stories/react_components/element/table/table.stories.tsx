import {Table} from "../../../../components";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The &lt;table&gt; HTML element represents tabular data -- That is, information
 * presented in a two-dimensional table comprised of rows and columns of cells
 * containing data.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
 */
export default {
    title: 'React Component/Element/Table/Table',
    component: Table,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Table element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Table</code> component to render &lt;table&gt;',
            table: {
                type: {
                    summary: '"table"',
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
        caption: {
            control: 'text',
            description: deIndent(
                        `Caption, title, of the table<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'CaptionProps', 'React Component/Element/Table/Caption'
                        ),
            table: {
                type: {
                    summary: 'CaptionProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        colgroup: {
            control: 'object',
            description: deIndent(`
                            Column groups of the table<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'ColGroupProps', 'React Component/Element/Table/ColGroup'
                        ),
            table: {
                type: {
                    summary: 'ColGroupProps[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        thead: {
            control: 'object',
            description: deIndent(`
                            Table head of the table<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'TheadProps', 'React Component/Element/Table/Thead'
                        ),
            table: {
                type: {
                    summary: 'TheadProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        tfoot: {
            control: 'object',
            description: deIndent(`
                            Table foot of the table<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'TfootProps', 'React Component/Element/Table/Tfoot'
                        ),
            table: {
                type: {
                    summary: 'TfootProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        tbody: {
            control: 'object',
            type: {
                required: true,
            },
            description: deIndent(`
                            Body, main, of the table<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'TbodyProps', 'React Component/Element/Table/Tbody'
                        ) + ' / '
                        + linkInStoryBook(
                            'TrProps', 'React Component/Element/Table/Tr'
                        ),
            table: {
                type: {
                    summary: 'TbodyProps | TbodyProps[] | TrProps | TrProps[]',
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
                    summary: 'TableHTMLAttributes<HTMLTableElement>',
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
/** Default table */
export const Default = {
    render: (args: any) => <Table
        element={'table'}
        tbody={{
            element: 'tr',
            cells: [
                {element: 'td', children: 'Cell1'},
                {element: 'td', children: 'Cell2'},
                {element: 'td', children: 'Cell3'},
                {element: 'td', children: 'Cell4'},
            ],
        }}
        {...args}
    />,
};
/** Table with multiple table rows */
export const TableWithMultipleRows = {
    ...Default,
    args: {
        tbody: [
            {
                element: 'tr',
                cells: [
                    {element: 'th', children: 'Head1-1'},
                    {element: 'th', children: 'Head1-2'},
                    {element: 'th', children: 'Head1-3'},
                    {element: 'th', children: 'Head1-4'},
                ],
            },
            {
                element: 'tr',
                cells: [
                    {element: 'td', children: 'Cell2-1'},
                    {element: 'td', children: 'Cell2-2'},
                    {element: 'td', children: 'Cell2-3'},
                    {element: 'td', children: 'Cell2-4'},
                ],
            },
            {
                element: 'tr',
                cells: [
                    {element: 'td', children: 'Cell3-1'},
                    {element: 'td', children: 'Cell3-2'},
                    {element: 'td', children: 'Cell3-3'},
                    {element: 'td', children: 'Cell3-4'},
                ],
            },
        ],
    },
};
/** Table with Caption */
export const TableWithCaption = {
    ...Default,
    args: {
        caption: {
            element: 'caption',
            children: 'Table Caption',
        },
    },
};
/** Table with column group */
export const TableWithColumnGroup = {
    ...Default,
    args: {
        colgroup: [{
            element: 'colgroup',
            cols: [
                {element: 'col'},
                {element: 'col', span: 2},
                {element: 'col'},
            ],
        }],
    },
};
/** Table with table head */
export const TableWithHead = {
    ...Default,
    args: {
        thead: {
            element: 'thead',
            rows: [{
                element: 'tr',
                cells: [
                    {element: 'th', children: 'Head 1'},
                    {element: 'th', children: 'Head 2'},
                    {element: 'th', children: 'Head 3'},
                    {element: 'th', children: 'Head 4'},
                ],
            }],
        },
    },
};
/** Table with table foot */
export const TableWithFoot = {
    ...Default,
    args: {
        tfoot: {
            element: 'tfoot',
            rows: [{
                element: 'tr',
                cells: [
                    {element: 'th', children: 'Foot Head 1'},
                    {element: 'td', children: 'Foot Cell 2'},
                    {element: 'td', children: 'Foot Cell 3'},
                    {element: 'td', children: 'Foot Cell 4'},
                ],
            }],
        },
    },
};
/** Table with style classes */
export const TableWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Table with additional attributes */
export const TableWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Table Label',
            'aria-placeholder': 'Table Placeholder',
        },
    },
};
/** Table with datasets */
export const TableWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-table-id'],
            ['name', 'Data Table Name'],
        ]),
    },
};
