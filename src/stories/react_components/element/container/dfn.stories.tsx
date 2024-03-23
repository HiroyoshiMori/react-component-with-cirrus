import {Fragment} from "react";
import {
    Container, DfnProps,
    Paragraph,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;dfn&gt; HTML element indicates a term to be defined. The &lt;dfn&gt; element should be used in a
 * complete definition statement, where the ancestor &lt;p&gt; element, the &lt;dt&gt;/&lt;dd&gt; pairing,
 * or the nearest &lt;section&gt; ancestor of the &lt;dfn&gt; element, is considered to be the full definition
 * of the term.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn
 */
export default {
    title: 'React Component/Element/Container/Inline/Dfn',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Definition element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Paragraph element={'p'}>
                    A <Story /> is a date and time representation widely used in computing.
                </Paragraph>
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            type: {
                required: true,
            },
            description: 'Switcher for <code>Container</code> component to render &lt;dfn&gt;',
            table: {
                type: {
                    summary: '"dfn"',
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
            control: 'object',
            description: 'Content of element',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        title: {
            control: 'object',
            description: 'Store a specific semantic meaning when used with the &lt;abbr&gt; element',
            table: {
                type: {
                    summary: 'string',
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
                    summary: 'HTMLAttributes<HTMLLabelElement>',
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
/** Default definition */
export const Default = {
    render: (args: any) => <Container<DfnProps>
        element={'dfn'}
        {...args}
    >UNIX TIMESTAMP</Container>,
};
/** Definition with style classes */
export const DefinitionWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Definition with additional attributes */
export const DefinitionWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Definition Label',
            'aria-placeholder': 'Definition Placeholder',
        },
    },
};
/** Definition with datasets */
export const DefinitionWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-dfn-id'],
            ['name', 'Data dfn name'],
        ]),
    },
};
