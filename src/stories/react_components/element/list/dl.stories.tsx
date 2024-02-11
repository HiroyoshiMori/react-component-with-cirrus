import {
    List,
} from "../../../../components";

export default {
    component: List,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Description List element',
    },
};
/** Default description list */
export const Default = {
    render: (args: any) => <List
        element={'dl'}
        items={[
            [
                {element: 'dt', children: 'Description Term'},
                {element: 'dd', children: 'Description Details'},
            ],
        ]}
        {...args}
    />,
};
/** Description list with style classes */
export const DescriptionListWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Description list with additional attributes */
export const DescriptionListWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Description List Label',
            'aria-placeholder': 'Description List Placeholder',
        },
    },
};
/** Description list with datasets */
export const DescriptionListWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-dl-id'],
            ['name', 'Data dl name'],
        ]),
    },
};
