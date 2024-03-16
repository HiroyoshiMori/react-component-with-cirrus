import {Container} from "../../../../components";
import {Fragment} from "react";
import {deIndent} from "../../../../utils";

/**
 * The &lt;sup&gt; HTML element specifies inline text which is to be displayed as superscript for solely
 * typographical reasons. Superscripts are usually rendered with a raised baseline using small text.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/sup
 */
export default {
    title: 'React Component/Element/Container/Inline/Sup',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Superscript element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                2<Story /> is 8.
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;sup&gt;',
            table: {
                type: {
                    summary: '"sup"',
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
/** Default superscript */
export const Default = {
    render: (args: any) => <Container
        element={'sup'}
        {...args}
    >
        3
    </Container>,
};
/** Superscript with style classes */
export const SuperscriptWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Superscript with additional attributes */
export const SuperscriptWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Superscript Label',
            'aria-placeholder': 'Superscript Placeholder',
        },
    },
};
/** Superscript with datasets */
export const SuperscriptWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-sup-id'],
            ['name', 'Data Superscript Name'],
        ]),
    },
};
