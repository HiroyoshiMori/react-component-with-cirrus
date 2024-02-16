import {Fragment} from "react";
import {
    Container,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;em&gt; HTML element marks text that has stress emphasis. The &lt;em&gt; element can be nested,
 * with each level of nesting indicating a greater degree of emphasis.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em
 */
export default {
    title: 'React Component/Element/Container/Inline/Em',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Emphasis element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;em&gt;',
            table: {
                type: {
                    summary: '"em"',
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
/** Default Emphasis */
export const Default = {
    render: (args: any) => <Fragment>
        UNIX timestamp start from <Container
            element={'em'}
            inline={true}
            {...args}
        >1970-01-01 00:00:00</Container>
    </Fragment>,
};
/** Emphasis with style classes */
export const EmphasisWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Emphasis with additional attributes */
export const EmphasisWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Emphasis Label',
            'aria-placeholder': 'Emphasis Placeholder',
        },
    },
};
/** Emphasis with datasets */
export const EmphasisWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-em-id'],
            ['name', 'Data Em Name'],
        ]),
    },
};
