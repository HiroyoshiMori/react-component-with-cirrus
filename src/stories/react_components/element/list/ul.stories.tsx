import {
    Container,
    getCssFramework,
    List,
} from "../../../../components";

export default {
    component: List,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Unordered List element',
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
/** Default unordered list */
export const Default = {
    render: (args: any) => <List
        element={'ul'}
        items={{
            element: 'li',
            children: 'List item',
        }}
        {...args}
    />,
};
/** Unordered list with multiple items */
export const UnorderedListWithMultipleItems = {
    ...Default,
    args: {
        items: [
            {element: 'li', children: 'List item 1'},
            {element: 'li', children: 'List item 2'},
            {element: 'li', children: 'List item 3'},
            {element: 'li', children: 'List item 4'},
        ]
    }
}
/** Unordered list with style classes */
export const UnorderedListWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Unordered list with additional attributes */
export const UnorderedListWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Unordered List Label',
            'aria-placeholder': 'Unordered List Placeholder',
        },
    },
};
/** Unordered list with datasets */
export const UnorderedListWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-ul-id'],
            ['name', 'Data Unordered List Name'],
        ]),
    },
};
