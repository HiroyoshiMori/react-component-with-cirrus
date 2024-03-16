import {Columns} from "../../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * Building a <b>columns layout</b> with Bulma is very simple:
 *
 * <ol>
 *     <li>Add a <code>column</code> container</li>
 *     <li>Add as many <code>column</code> elements as you want</li>
 * </ol>
 *
 * Each column will have an <strong>equal width</strong>, no matter the number of columns.
 *
 * See: https://bulma.io/documentation/columns/basics/
 */
export default {
    title: 'React Component/CSS Framework/Bulma/Columns/Columns',
    component: Columns,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A simple way to build responsive columns',
    },
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>Columns</code> component to render this component',
            table: {
                type: {
                    summary: '"columns"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        element: {
            control: 'none',
            type: {
                required: true,
            },
            description: deIndent(`
                            Element type which is extended for this component
                            👉 See:&nbsp;
                        `)
                + linkInStoryBook(
                    'DivProps', 'React Component/Element/Container/Block/Div'
                ),
            table: {
                type: {
                    summary: '"div"',
                },
            },
        },
        columns: {
            control: 'object',
            type: {
                required: true,
            },
            // TODO: Add link to ColumnProps when created storybook for Column
            description: deIndent(
                        `A list of column included<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'ColumnProps', 'React Component/CSS Framework/Bulma/Columns/Column'
                        ),
            table: {
                type: {
                    summary: 'ColumnProps | ColumnProps[]',
                },
            },
        },
        commonClassesInChild: {
            control: 'object',
            description: 'Common style classes for child <code>Column</code> elements',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
    },
};
/** Default columns with single column */
export const DefaultWithSingleColumn = {
    render: (args: any) => <Columns
        component={'columns'}
        columns={{
            component: 'column',
            children: 'Column 1',
        }}
        {...args}
    />,
};
/** Default columns */
export const DefaultMultiColunns = {
    render: (args: any) => <Columns
        component={'columns'}
        columns={[
            {component: 'column', children: 'Column 1'},
            {component: 'column', children: 'Column 2'},
            {component: 'column', children: 'Column 3'},
            {component: 'column', children: 'Column 4'},
        ]}
        {...args}
    />,
};
/** Columns with common style classes */
export const ColumnsWithCommonStyleClasses = {
    ...DefaultMultiColunns,
    args: {
        commonClassesInChild: ['test-class1'],
    },
};

