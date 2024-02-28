import {Block} from "../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../utils";

/**
 * The <code>block</code> element is a simple <b>spacer tool</b>. It allows <b>sibling</b> HTML elements to
 * have a consistent margin between them.
 *
 * See: https://bulma.io/documentation/elements/block/
 */
export default {
    title: 'React Component/CSS Framework/Bulma/Layout/Block',
    component: Block,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Bulma\'s most basic spacer <code>block</code>',
    },
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>Block</code> component to render &lt;block&gt;',
            table: {
                type: {
                    summary: '"block"',
                },
            },
            defaultValue: {
                summary: 'undefined',
            },
        },
        element: {
            control: 'none',
            description: 'Switcher for <code>Block</code> component to render with &lt;div&gt;',
            table: {
                type: {
                    summary: '"div"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        id: {
            control: 'text',
            description: 'ID for element',
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
            description: 'Content of this element',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        additionalProps: {
            control: 'object',
            description: deIndent(`
                            Additional properties for div<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'DivProps', 'React Component/Element/Container/Div'
                        ),
            table: {
                type: {
                    summary: 'DivProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, treated as []',
                },
            },
        },
        attributes: {
            control: 'object',
            description: 'Additional attributes',
            table: {
                type: {
                    summary: 'HTMLAttributes<HTMLDivElement>',
                    detail: deIndent(`
                            e.g.,
                            { 'aria-label': 'This is Label' }
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, treated as {}',
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'Datasets. "data-" is added at the beginning of all keys',
            table: {
                type: {
                    summary: 'Map<string, string>',
                    detail: deIndent(`
                            e.g.,
                            new Map([
                                ['id', 'this-is-id'],
                                ['name', 'This is Name'],
                            ]);
                            => data-id="this-is-id" data-name="This is Name"
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, treated as new Map()'
                },
            },
        },
    },
};
/** Default block */
export const Default = {
    render: (args: any) => <Block
        component={'block'}
        {...args}
    >
        This text is within a block.
    </Block>,
};
