import {Fragment} from "react";
import {
    Col,
} from "../../../../components";

export default {
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

