import {Fragment} from "react";
import {Container, TemplateProps} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;template&gt; HTML element serves as a mechanism for holding HTML fragments, which can
 * either be used later via JavaScript or generated immediately into shadow DOM.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template
 */
export default {
    title: 'React Component/Element/Container/Block/Template',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Content Template element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                There is template &#x1f449;
                <Story />
                &#x1f448; element.
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;template&gt;',
            table: {
                type: {
                    summary: '"template"',
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
                    summary: 'HTMLAttributes<HTMLTemplateElement>',
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
/** Default template */
export const Default = {
    render: (args: any) => <Container<TemplateProps>
        element={'template'}
        {...args}
    >
        This content would be used by Javascript code.
    </Container>
};
/** Template with shadowrootmode */
export const TemplateWithShadowRootMode = {
    ...Default,
    args: {
        shadowRootMode: 'open',
    },
};
/** Template with style classes */
export const TemplateWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Template with additional attributes */
export const TemplateWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Template Label',
            'aria-placeholder': 'Template Placeholder',
        },
    },
};
/** Template with datasets */
export const TemplateWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-template-id'],
            ['name', 'Data Template Name'],
        ]),
    },
};
