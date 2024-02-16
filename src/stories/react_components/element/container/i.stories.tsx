import {Fragment} from "react";
import {
    Container,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;i&gt; HTML element represents a range of text that is set off from the normal text for some
 * reason, such as idiomatic text, technical terms, taxonomic designations, amon others.
 * Historically, these have been presented using italicized type, which is the original source of the
 * &lt;i&gt; naming of this element.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i
 */
export default {
    title: 'React Component/Element/Container/Inline/I',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Idiomatic element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;i&gt;',
            table: {
                type: {
                    summary: '"i"',
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
export const Default = {
    render: (args: any) => <Fragment>
        I think it's good to have <Container
            element={'i'}
            inline={true}
            {...args}
        >
            variable which show milli-seconds from 1st of the year.
        </Container>
    </Fragment>,
};
/** Idiomatic with style classes */
export const IdiomaticWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Idiomatic with additional attributes */
export const IdiomaticWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Idiomatic Label',
            'aria-attributes': 'Idiomatic Placeholder',
        },
    },
};
/** Idiomatic with datasets */
export const IdiomaticWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-idiomatic-id'],
            ['name', 'Data Idiomatic Name'],
        ]),
    },
};
