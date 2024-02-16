import {Fragment} from "react";
import {
    Container,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;samp&gt; HTML element is used to enclose inline text which represents sample (or quoted)
 * output from a computer program. Its contents are typically rendered using the browser's default
 * monospaced font (such as Courier or Lucida Console).
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/samp
 */
export default {
    title: 'React Component/Element/Container/Inline/Samp',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Sample Output element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <p>Here is sample Kanji:</p>
                <Story />
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;samp&gt;',
            table: {
                type: {
                    summary: '"samp"',
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
/** Default sample output */
export const Default = {
    render: (args: any) => <Container
        element={'samp'}
        {...args}
    >
        日本
    </Container>
};
/** Sample output with style classes */
export const SampleOutputWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Sample output with additional attributes */
export const SampleOutputWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Sample Output Label',
            'aria-placeholder': 'Sample Output Placeholder',
        },
    },
};
/** Sample output with datasets */
export const SampleOutputWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-samp-id'],
            ['name', 'Data Sample Output Name'],
        ]),
    },
};
