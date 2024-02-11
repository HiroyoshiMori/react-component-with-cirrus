import {Fragment} from "react";
import {
    ColGroup,
} from "../../../../components";

export default {
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
    render: (args: any) => <Fragment>
        <ColGroup cols={[{}]} />
        <ColGroup span={2} cols={[{}, {}]} />
        <ColGroup cols={[{}]} />
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
