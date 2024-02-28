import {Panel} from "../../../frameworks/bulma";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";

export default {
    component: Panel,
    tags: ['autodocs'],
};
// Default panel data
const defaultPanel = {
    component: 'panel',
    heading: {
        element: 'p',
        children: 'Panel Heading',
    },
    contents: {
        component: 'panel-block',
        element: 'div',
        children: 'This is sentence within Panel block',
    },
};

/** Default Panel */
export const Default = {
    render: (args: any) => <Panel
        {...defaultPanel}
        {...args}
    />,
};
/** Panel with multiple blocks */
export const PanelWithMultipleBlocks = {
    ...Default,
    args: {
        contents: [
            { component: 'panel-block', element: 'div', children: 'This is sentence within Block 1.'},
            {
                component: 'panel-block',
                element: 'a',
                label: 'This is sentence within Block 2.',
                href: '/',
                icon: {
                    icon: icon({name: 'check'}),
                }
            },
            {
                component: 'panel-block',
                element: 'label',
                children: 'This is sentence within Block 3.',
                checkbox: {
                    element: 'input',
                    type: 'checkbox',
                },
            },
            { component: 'panel-block', element: 'div', children: 'This is sentence within Block 4.'},
        ],
    },
};
/** Panel with tabs (1 tab) */
export const PanelWIthTab = {
    ...Default,
    args: {
        contents: {
            component: 'panel-tabs',
            items: {
                element: 'a',
                children: 'Tab 1',
            },
        },
    },
};
/** Panel with tabs (multiple tabs) */
export const PanelWIthMultipleTabs = {
    ...Default,
    args: {
        contents: {
            component: 'panel-tabs',
            items: [{
                element: 'a',
                children: 'Tab 1',
            }, {
                element: 'a',
                children: 'Tab 2',
            }, {
                element: 'a',
                children: 'Tab 3',
            }, {
                element: 'a',
                children: 'Tab 4',
            }],
        },
    },
};
/** Panel with block and tabs */
export const PanelWithBlockAndTabs = {
    ...Default,
    args: {
        contents: [
            {
                component: 'panel-tabs',
                items: [{
                    element: 'a',
                    children: 'Tab 1',
                }, {
                    element: 'a',
                    children: 'Tab 2',
                }, {
                    element: 'a',
                    children: 'Tab 3',
                    isActive: true,
                }, {
                    element: 'a',
                    children: 'Tab 4',
                }],
            },
            { component: 'panel-block', element: 'div', children: 'This is sentence within Block 1.'},
            {
                component: 'panel-block',
                element: 'a',
                label: 'This is sentence within Block 2.',
                href: '/',
                icon: {
                    icon: icon({name: 'check'}),
                }
            },
            {
                component: 'panel-block',
                element: 'label',
                children: 'This is sentence within Block 3.',
                checkbox: {
                    element: 'input',
                    type: 'checkbox',
                },
            },
            { component: 'panel-block', element: 'div', children: 'This is sentence within Block 4.'},
        ],
    },
};
