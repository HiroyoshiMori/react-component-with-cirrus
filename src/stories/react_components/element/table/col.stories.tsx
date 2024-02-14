import {Fragment} from "react";
import {
    Col,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The %lt;col&gt; HTML element defines one or more columns in a column group represented by its parent
 * &lt;colgroup&gt; element. The &lt;col&gt; element is only valid as a child of a &lt;colgroup&gt;
 * element that has no span attribute defined.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col
 */
export default {
    title: 'React Component/Element/Table/Col',
    component: Col,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Table Column element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <table>
                    <colgroup>
                        <Story/>
                    </colgroup>
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
            description: 'Switcher for <code>Col</code> component to render &lt;col&gt;',
            table: {
                type: {
                    summary: 'col',
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
            description: 'Specifies the number of consecutive columns the &lt;col&gt; element spans.',
            table: {
                type: {
                    summary: 'number',
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
                    summary: 'ColHTMLAttributes<HTMLTableColElement>',
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
// Default col
const DefaultCol1 = {
    element: 'col',
};
const DefaultCol2 = {
    element: 'col',
};
const DefaultCol3 = {
    element: 'col',
};
const DefaultCol4 = {
    element: 'col',
};

/** Default col */
export const Default = {
    render: (args: any[]) => <Fragment>
        <Col
            {...DefaultCol1}
            {...args[0]}
        />
        <Col
            {...DefaultCol2}
            {...args[1]}
        />
        <Col
            {...DefaultCol3}
            {...args[2]}
        />
        <Col
            {...DefaultCol4}
            {...args[3]}
        />
    </Fragment>,
};
/** Col with Span */
export const ColWithSpan = {
    render: (args: any[]) => <Fragment>
        <Col
            {...DefaultCol1}
            {...args[0]}
        />
        <Col
            {...DefaultCol2}
            {...args[1]}
        />
        <Col
            {...DefaultCol3}
            {...args[2]}
        />
    </Fragment>,
    args: [{
    }, {
        span: 2,
    }, {
    }],
};
/** Col with style classes */
export const ColWithStyleClasses = {
    ...Default,
    args: [
        {
            classes: ['test-class1', 'test-class2'],
        },
    ],
};
/** Col with additional attributes */
export const ColWithAdditionalAttributes = {
    ...Default,
    args: [
        {
            attributes: {
                'aria-label': 'Col Label',
                'aria-placeholder': 'Col Placeholder',
            },
        },
    ],
};
/** Col with datasets */
export const ColWithDatasets = {
    ...Default,
    args: [
        {
            datasets: new Map([
                ['id', 'data-col-id'],
                ['name', 'Data Col Name'],
            ]),
        },
    ],
};

