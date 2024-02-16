import {Container} from "../../../../components";
import {Fragment} from "react";
import {deIndent} from "../../../../utils";

/**
 * The &lt;var&gt; HTML element represents the name of a variable in a mathematical expression or a
 * programming context. It's typically presented using an italicized version of the current typeface,
 * although that behavior is browser-dependent.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var
 */
export default {
    title: 'React Component/Element/Container/Inline/Var',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Variable element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                The volume of box is <Story /> x <var>w</var> x <var>h</var>.
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;var&gt;',
            table: {
                type: {
                    summary: '"var"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        inline: {
            control: 'none',
            type: {
                require: true,
            },
            description: 'Switcher for <code>Container</code> component to render inline element',
            table: {
                type: {
                    summary: 'true',
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
            description: 'Content of component',
            table: {
                type: {
                    summary: 'ReactNode',
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
                    summary: 'HTMLAttributes<HTMLElement>',
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
/** Default variable */
export const Default = {
    render: (args: any) => <Container
        element={'var'}
        inline={true}
        {...args}
    >
        l
    </Container>,
};
/** Variable with style classes */
export const VariableWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Variable with additional attributes */
export const VariableWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Variable Label',
            'aria-placeholder': 'Variable Placeholder',
        },
    },
};
/** Variable with datasets */
export const VariableWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-var-id'],
            ['name', 'Data Variable Name'],
        ]),
    },
};
