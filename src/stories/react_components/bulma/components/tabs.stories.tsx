import {Tabs} from "../../../../frameworks/bulma";

export default {
    component: Tabs,
    tags: ['autodocs'],
};
/** Default tabs */
export const Default = {
    render: (args: any) => <Tabs
        component={'tabs'}
        items={{
            component: 'tab-item',
            children: 'Tab 1',
        }}
        {...args}
    />,
};
/** Multiple tabs */
export const MultipleTabs = {
    ...Default,
    args: {
        items: [
            {children: 'Tab 1'},
            {children: 'Tab 2'},
            {children: 'Tab 3', isActive: true},
            {children: 'Tab 4'},
        ],
    },
};
