import {Buttons} from "../../../components";
import {deIndent, linkInStoryBook} from "../../../utils";

/**
 * The <strong>button</strong> is an essential element of any design. It's meant to look and behave as an
 * interactive element of your page.
 *
 * See: https://bulma.io/documentation/elements/button/
 */
export default {
    title: 'React Component/Layout/Buttons',
    component: Buttons,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The classic button, in different colors, sizes, and states',
    },
    argTypes: {
        element: {
            control: 'none',
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
        items: {
            control: 'object',
            type: {
                require: true,
            },
            description: deIndent(`
                            Buttons included in this layout component.<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'LayoutButton', 'React Component/Layout/LayoutButton',
                        ),
            table: {
                type: {
                    summary: 'TypeButton | TypeButton[]',
                },
            },
        },
    },
};
/** Default button */
export const Default = {
    render: (args: any) => <Buttons
        element={'div'}
        items={{
            element: 'button',
            children: 'Button Label',
        }}
        {...args}
    />,
};
/** Button by anchor */
export const ButtonByAnchor = {
    ...Default,
    args: {
        items: {
            element: 'a',
            children: 'Anchor Button',
            href: '#anchor-button',
        },
    },
};
/** Button by division */
export const ButtonByDivision = {
    ...Default,
    args: {
        items: {
            element: 'div',
            children: 'Div Button',
        },
    },
};
/** Multiple buttons */
export const MultipleButtons = {
    ...Default,
    args: {
        items: [{
            element: 'button',
            children: 'Button Label',
        }, {
            element: 'a',
            children: 'Anchor Button',
            href: '#anchor-button',
        }, {
            element: 'div',
            children: 'Div Button',
        }],
    },
};
