import {Fragment} from "react";
import {
    ColGroup, ColProps,
} from "../../../../components";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The &lt;colgroup&gt; HTML element defines a group of columns within a table
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup
 */
export default {
    title: 'React Component/Element/Table/ColGroup',
    component: ColGroup,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Table Column Group element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <table>
                    <Story/>
                    <tbody>
                    <tr>
                        <td>Table cell1-1 content</td>
                        <td>Table cell1-2 content</td>
                        <td>Table cell1-3 content</td>
                        <td>Table cell1-4 content</td>
                    </tr>
                    <tr>
                        <td>Table cell2-1 content</td>
                        <td>Table cell2-2 content</td>
                        <td>Table cell2-3 content</td>
                        <td>Table cell2-4 content</td>
                    </tr>
                    </tbody>
                </table>
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>ColGroup</code> component to render &lt;colgroup&gt;',
            table: {
                type: {
                    summary: '"colgroup"',
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
        span: {
            control: {type: 'number', min: 1},
            description: 'specifies the number of consecutive columns the &lt;colgroup&gt; element spans.',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        cols: {
            control: 'object',
            description: deIndent(`
                            Columns in this group<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'ColProps', 'React Component/Element/Table/Col'
                        ),
            table: {
                type: {
                    summary: 'ColProps[]',
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
                    summary: 'ColgroupHTMLAttributes<HTMLTableColElement>',
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
/** Default Colgroup */
export const Default = {
    render: (args: any) => <ColGroup
        element={'colgroup'}
        cols={[
            {element: 'col'},
            {element: 'col'},
            {element: 'col'},
            {element: 'col'},
        ]}
        {...args}
    />,
};
/** Colgroup with span */
export const ColGroupWithSpan = {
    render: () => <Fragment>
        <ColGroup element={'colgroup'} cols={[{element: 'col'} as ColProps]} />
        <ColGroup element={'colgroup'} span={2} cols={[{element: 'col'} as ColProps, {element: 'col'} as ColProps]} />
        <ColGroup element={'colgroup'} cols={[{element: 'col'} as ColProps]} />
    </Fragment>,
};
/** Colgroup with style classes */
export const ColGroupWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Colgroup with additional attributes */
export const ColGroupWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'ColGroup Label',
            'aria-placeholder': 'ColGroup Placeholder',
        },
    },
};
/** Colgroup with datasets */
export const ColGroupWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-colgroup-id'],
            ['name', 'Data ColGroup Name'],
        ]),
    },
};
