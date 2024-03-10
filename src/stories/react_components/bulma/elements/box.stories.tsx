import {Box} from "../../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The <b>box</b> element is a simple container with a white background, some padding, and a box shadow.
 */
export default {
    title: 'React Component/CSS Framework/Bulma/Elements/Box',
    component: Box,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A white <code>box</code> to contain other elements',
    },
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>Box</code> component to render &lt;box&gt;',
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
            description: 'Switcher for <code>Box</code> component to render with &lt;div&gt; or &lt;form&gt;',
            table: {
                type: {
                    summary: '"div"|"form"',
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, treated as "div"'
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
                            Additional properties for div/form<br />
                            👉 See:&nbsp;
                        `)
                + linkInStoryBook(
                    'DivProps', 'React Component/Element/Container/Div'
                ) + ' / '
                + linkInStoryBook(
                    'FormProps', 'React Component/Element/Form'
                ),
            table: {
                type: {
                    summary: 'DivProps|FormProps',
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
                    summary: 'HTMLAttributes<HTMLDivElement> | FormHTMLAttributes<HTMLFormElement>',
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
/** Default box */
export const Default = {
    render: (args: any) => <Box
        component={'box'}
        {...args}
    >
        This text is within a box.
    </Box>,
};
