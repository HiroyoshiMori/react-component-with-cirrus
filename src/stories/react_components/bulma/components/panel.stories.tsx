import {Panel} from "../../../../frameworks/bulma";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The <code>panel</code> is a container for several types:
 *
 * - <code>panel-heading</code> as the first child
 * - <code>panel-tabs</code> for navigation
 * - <code>panel-block</code> which can contain other elements, like:
 *   - <code>control</code>
 *   - <code>input</code>
 *   - <code>button</code>
 *   - <code>panel-icon</code>
 *
 * See: https://bulma.io/documentation/components/panel/
 */
export default {
    title: 'React Component/CSS Framework/Bulma/Components/Panel',
    component: Panel,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A composable panel, for compact controls',
    },
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>Panel</code> component to render this component',
            table: {
                type: {
                    summary: '"panel"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        element: {
            control: 'select',
            type: {
                required: true,
            },
            description: deIndent(`
                            Element type which is extended for this component<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'Omit<DivProps, "children">', 'React Component/Element/Container/Block/Div'
                        ),
            table: {
                type: {
                    summary: '"div"',
                },
            },
        },
        heading: {
            control: 'object',
            description: deIndent(`
                            As the first child<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'PanelHeadingProps',
                        'React Component/Css Framework/Bulma/Components/Panel/PanelHeading'
                        ),
            table: {
                type: {
                    summary: 'PanelHeadingProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        contents: {
            control: 'object',
            description: deIndent(`
                            PanelTabsProps for navigation.<br />
                            PanelBlockProps to contain other elements.<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'PanelBlockProps',
                        'React Component/Css Framework/Bulma/Components/Panel/PanelBlock'
                        )
                        + ' / '
                        + linkInStoryBook(
                        'PanelTabsProps',
                        'React Component/Css Framework/Bulma/Components/Panel/PanelTabs'
                        ),
            table: {
                type: {
                    summary: '(PanelBlockProps|PanelTabsProps) | (PanelBlockProps|PanelTabsProps)[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
    },
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
                children: 'This is sentence within Block 2.',
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
                children: 'This is sentence within Block 2.',
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
