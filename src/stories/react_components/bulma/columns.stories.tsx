import {Columns} from "../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../utils";

/**
 * Building a <b>columns layout</b> with Bulma is very simple:
 * <ol>
 *     <li>Add a <code>column</code> container</li>
 *     <li>Add as many <code>column</code> elements as you want
 * </ol>
 *
 * Each column will have an <strong>equal width</strong>, no matter the number of columns.
 */
export default {
    title: 'React Component/CSS Framework/Bulma/Layout/Columns',
    component: Columns,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A simple way to build <code>responsive columns</code>',
    },
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>Columns</code> component to render &lt;columns&gt;',
            table: {
                type: {
                    summary: '"block"',
                },
            },
            defaultValue: {
                summary: 'undefined',
            },
        },
        element: {
            control: 'none',
            description: 'Switcher for <code>Columns</code> component to render with &lt;div&gt;',
            table: {
                type: {
                    summary: '"div"',
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
        columns: {
            control: 'object',
            type: {
                required: true,
            },
            // TODO: Add link to ColumnProps when created storybook for Column
            description: 'A list of column included',
            table: {
                type: {
                    summary: 'ColumnProps | ColumnProps[]',
                },
            },
        },
        commonClassesInChild: {
            control: 'object',
            description: 'Common style classes for child columns',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        additionalProps: {
            control: 'object',
            description: deIndent(`
                            Additional properties for div<br />
                            👉 See:&nbsp;
                        `)
                + linkInStoryBook(
                    'DivProps', 'React Component/Element/Container/Div'
                ),
            table: {
                type: {
                    summary: 'DivProps',
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
                    summary: 'HTMLAttributes<HTMLDivElement>',
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
/** Default columns */
export const Default = {
    render: (args: any) => <Columns
        component={'columns'}
        columns={[
            {component: 'column', children: 'Column 1'},
            {component: 'column', children: 'Column 2'},
            {component: 'column', children: 'Column 3'},
            {component: 'column', children: 'Column 4'},
        ]}
        {...args}
    />
}