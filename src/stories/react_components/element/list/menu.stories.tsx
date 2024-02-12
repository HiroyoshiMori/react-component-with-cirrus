import {
    Container,
    getCssFramework,
    List,
} from "../../../../components";

export default {
    component: List,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Menu element',
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
/** Default menu */
export const Default = {
    render: (args: any) => <List
        element={'menu'}
        items={{
            element: 'li',
            children: 'Menu item',
        }}
        {...args}
    />,
};
/** Menu with multiple items */
export const MenuWithMultipleItems = {
    ...Default,
    args: {
        items: [
            {element: 'li', children: 'Menu item 1'},
            {element: 'li', children: 'Menu item 2'},
            {element: 'li', children: 'Menu item 3'},
            {element: 'li', children: 'Menu item 4'},
        ]
    }
}
/** Menu with style classes */
export const MenuWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Menu with additional attributes */
export const MenuWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Menu Label',
            'aria-placeholder': 'Menu Placeholder',
        },
    },
};
/** Menu with datasets */
export const MenuWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-menu-id'],
            ['name', 'Data Menu Name'],
        ]),
    },
};
