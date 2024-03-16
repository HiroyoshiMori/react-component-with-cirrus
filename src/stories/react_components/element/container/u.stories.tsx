import {Container} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;u&gt; HTML element represents a span of inline text which should be rendered in a way that
 * indicates that it has a non-textual annotation. This is rendered by default as a simple solid underline,
 * but may be altered using CSS.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/u
 */
export default {
    title: 'React Component/Element/Container/Inline/U',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Unarticulated Annotation (Underline) element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;u&gt;',
            table: {
                type: {
                    summary: '"u"',
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
/** Default underline */
export const Default = {
    render: (args: any) => <Container
        element={'u'}
        {...args}
    >
        This sentence has underline.
    </Container>,
};
/** Underline with style classes */
export const UnderlineWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Underline with additional attributes */
export const UnderlineWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Underline Label',
            'aria-placeholder': 'Underline Placeholder',
        },
    },
};
/** Underline with datasets */
export const UnderlineWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-u-id'],
            ['name', 'Data Underline Name'],
        ]),
    },
};
