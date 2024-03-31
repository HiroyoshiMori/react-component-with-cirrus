import {getCssFramework, LayoutButton} from "../../../components";
import {deIndent, linkInStoryBook} from "../../../utils";

export default {
    title: 'React Component/Layout/LayoutButton',
    component: LayoutButton,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The classic button, in different colors, sizes, and states',
    },
    argTypes: {
        element: {
            control: 'select',
            options: ['button', 'a', 'div'],
            type: {
                required: true,
            },
            description: deIndent(`
                            Element type which is extended for this layout component<br />
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
        name: {
            control: 'text',
            description: 'Name of button',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        children: {
            control: 'text',
            description: 'Label of button',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        colorType: {
            control: 'select',
            options: ['Default'].concat(getCssFramework().COLORS),
            mapping: {
                Default: undefined,
            },
            description: 'Color type of button',
            table: {
                type: {
                    summary: '"' + getCssFramework().COLORS.join('"|"') + '"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        size: {
            control: 'select',
            options: ['Default'].concat(getCssFramework().ALTERNATIVE_SIZES),
            mapping: {
                Default: undefined,
            },
            description: 'Size of button',
            table: {
                type: {
                    summary: '"' + getCssFramework().ALTERNATIVE_SIZES.join('"|"') + '"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
    },
};
/** Default layout button */
export const Default = {
    render: (args: any) => <LayoutButton
        element={'button'}
        {...args}
    >
        Layout Button
    </LayoutButton>,
};
/** Layout button by anchor */
export const AnchorButton = {
    ...Default,
    args: {
        element: 'a',
    },
};
/** Layout button by div */
export const DivButton = {
    ...Default,
    args: {
        element: 'div',
    },
};
