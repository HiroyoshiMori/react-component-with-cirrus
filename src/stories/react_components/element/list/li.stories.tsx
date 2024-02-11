import {
    ListItem,
} from "../../../../components";

export default {
    component: ListItem,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The List Item element',
    },
    decorators: [
        (Story: any) => (
            <ul>
                <Story />
            </ul>
        ),
    ],
};
/** Default list item */
export const Default = {
    render: (args: any) => <ListItem
        element={'li'}
        {...args}
    >
        This is list item content.
    </ListItem>
};
/** List item with value */
export const ListItemWithValue = {
    ...Default,
    args: {
        value: 100,
    },
};
/** List item with style classes */
export const ListItemWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** List item with additional attributes */
export const ListItemWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'List Item Label',
            'aria-placeholder': 'List Item Placeholder',
        },
    },
};
/** List item with datasets */
export const ListItemWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-li-id'],
            ['name', 'Data List item Name'],
        ]),
    },
};
