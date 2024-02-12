import {
    Container,
    getCssFramework,
    List,
} from "../../../../components";

export default {
    component: List,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Ordered List element',
    },
    decorators: [
        (Story: any) => (
            <Container
                classes={getCssFramework().getDefaultStyleClass('content')}
            >
                <Story />
            </Container>
        )
    ]
};
/** Default ordered list */
export const Default = {
    render: (args: any) => <List
        element={'ol'}
        items={{
            element: 'li',
            children: 'List item',
        }}
        {...args}
    />,
};
/** Ordered list reversed */
export const OrderedListReversed = {
    ...Default,
    args: {
        items: [
            {element: 'li', children: 'List item 1'},
            {element: 'li', children: 'List item 2'},
            {element: 'li', children: 'List item 3'},
            {element: 'li', children: 'List item 4'},
        ],
        reversed: true,
    },
};
/** Ordered list with start */
export const OrderedListWithStart = {
    ...Default,
    args: {
        items: [
            {element: 'li', children: 'List item 1'},
            {element: 'li', children: 'List item 2'},
            {element: 'li', children: 'List item 3'},
            {element: 'li', children: 'List item 4'},
        ],
        start: 10,
    },
};
/** Ordered List with type */
export const OrderedListWithType = {
    ...Default,
    args: {
        items: [
            {element: 'li', children: 'List item 1'},
            {element: 'li', children: 'List item 2'},
            {element: 'li', children: 'List item 3'},
            {element: 'li', children: 'List item 4'},
        ],
        type: 'a',
    },
};
/** Ordered list with style classes */
export const OrderedListWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Ordered list with additional attributes */
export const OrderedListWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Ordered List Label',
            'aria-placeholder': 'Ordered List Placeholder',
        },
    },
};
/** Ordered list with datasets */
export const OrderedListWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-ol-id'],
            ['name', 'Data Ordered List Name'],
        ]),
    },
};
