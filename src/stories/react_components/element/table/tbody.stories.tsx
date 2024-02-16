import {Fragment} from "react";
import {Tbody} from "../../../../components";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The &lt;tbody&gt; element encapsulates a set of table rows (&lt;tr&gt; elements), indicating
 * that they comprise the body of a table's (main) data.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody
 */
export default {
    title: 'React Component/Element/Table/Tbody',
    component: Tbody,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Table Body element',
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
                    <Story/>
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
            description: 'Switcher for <code>Tbody</code> component to render &lt;tbody&gt;',
            table: {
                type: {
                    summary: '"tbody"',
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
                            Rows in table body<br />
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
/** Default table body */
export const Default = {
    render: (args: any) => <Tbody
        element={'tbody'}
        rows={[
            {
                element: 'tr', cells: [
                    {element: 'td', children: 'Cell 1-1'},
                    {element: 'td', children: 'Cell 1-2'},
                    {element: 'td', children: 'Cell 1-3'},
                    {element: 'td', children: 'Cell 1-4'},
                ],
            },
            {
                element: 'tr', cells: [
                    {element: 'td', children: 'Cell 2-1'},
                    {element: 'td', children: 'Cell 2-2'},
                    {element: 'td', children: 'Cell 2-3'},
                    {element: 'td', children: 'Cell 2-4'},
                ],
            }
        ]}
        {...args}
    />,
};
/** Table body with style classes */
export const TableBodyWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Table body with additional attributes */
export const TableBodyWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Table Body Label',
            'aria-placeholder': 'Table Body Placeholder',
        },
    },
};
/** Table body with datasets */
export const TableBodyWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-tbody-id'],
            ['name', 'Data Table Body Name'],
        ]),
    },
};
