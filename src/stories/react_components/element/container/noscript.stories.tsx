import {Fragment} from "react";
import {
    Container,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;noscript&gt; HTML element defines a section of HTML to be inserted if a script type on the page
 * is unsupported or if scripting is currently turned off in the browser.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript
 */
export default {
    title: 'React Component/Element/Container/Block/Noscript',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The HTML Meter element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                There is NoScript &#x1f449;
                <Story />
                &#x1f448; element.
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;noscript&gt;',
            table: {
                type: {
                    summary: '"noscript"',
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
/** Default noscript */
export const Default = {
    render: (args: any) => <Container
        element={'noscript'}
        {...args}
    >
        Show this content when script is disabled.
    </Container>,
};
/** NoScript with style classes */
export const NoScriptWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** NoScript with additional attributes */
export const NoScriptWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'NoScript Label',
            'aria-placeholder': 'NoScript Placeholder',
        },
    },
};
/** NoScript with datasets */
export const NoScriptWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-noscript-id'],
            ['name', 'Data NoScript Name'],
        ]),
    },
};
