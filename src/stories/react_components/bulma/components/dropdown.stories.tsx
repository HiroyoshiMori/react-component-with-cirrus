import {Dropdown} from "../../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The <code>dropdown</code> component is a container for a dropdown button and a dropdown menu.
 *
 * - <code>dropdown</code>: The main container
 *   - <code>dropdown-trigger</code>: The container for a button
 *   - <code>dropdown-menu</code>: The toggable menu, hidden by default
 *     - <code>dropdown-content</code>: The dropdown box, with a white background and a shadow
 *     - <code>dropdown-divider</code>: A horizontal line to separate dropdown items
 */
export default {
    title: 'React Component/CSS Framework/Bulma/Component/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'An interactive dropdown menu for discoverable content',
    },
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>Dropdown</code> component to render this component',
            table: {
                type: {
                    summary: '"dropdown"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        element: {
            control: 'none',
            type: {
                required: true,
            },
            description: deIndent(`
                            Element type which is extended for this component
                            👉 See:&nbsp;
                        `)
                + linkInStoryBook(
                    'DivProps', 'React Component/Element/Container/Block/Div'
                ),
            table: {
                type: {
                    summary: '"div"',
                },
            },
        },
        trigger: {
            control: 'object',
            type: {
                required: true,
            },
            description: deIndent(`
                            Button which shown default<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'DropdownTriggerProps',
                            'React Component/CSS Framework/Bulma/Component/Dropdown/DropdownTrigger'
                        ),
            table: {
                type: {
                    summary: 'DropdownTriggerProps',
                },
            },
        },
        menus: {
            control: 'object',
            type: {
                required: true,
            },
            description: deIndent(`
                            The toggable menu, hidden by default<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'DropdownMenuProps',
                        'React Component/Css Framework/Bulma/Component/Dropdown/DropdownMenu'
                        ),
            table: {
                type: {
                    summary: 'DropdownMenuProps',
                },
            },
        },
        isUp: {
            control: 'boolean',
            description: 'Make dropdown Drop"up" instead of dropdown',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
    },
};
/** Default dropdown */
export const Default = {
    render: (args: any) => <Dropdown
        component={'dropdown'}
        element={'div'}
        trigger={{
            element: 'div',
            title: {
                element: 'span',
                children: 'Dropdown Title',
            },
            button: {
                element: 'button',
            },
        }}
        menus={{
            element: 'div',
            content: {
                element: 'div',
                items: {
                    element: 'a',
                    children: 'Dropdown Menu',
                },
            },
        }}
        {...args}
    />,
};
/** Dropup */
export const Dropup = {
    ...Default,
    args: {
        isUp: true,
    },
};
