import {Fragment} from "react";
import {
    Container,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;kbd&gt; HTML element represents a span of inline text denoting textual user input from a
 * keyboard, voice input, or any other text entry device. By convention, the user agent defaults to
 * rendering the contents of a &lt;kbd&gt; element using its default monospace font, although this is
 * not mandated by the HTML standard.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd
 */
export default {
    title: 'React Component/Element/Container/Inline/Kbd',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Keyboard Input element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;kbd&gt;',
            table: {
                type: {
                    summary: '"kbd"',
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
/** Default Keyboard Input */
export const Default = {
    render: (args: any) => <Fragment>
        Please press <Container
            element={'kbd'}
            inline={true}
            {...args}
        >Ctrl</Container>.
    </Fragment>,
};
/** Keyboard input with style classes */
export const KeyboardWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Keyboard input with additional attributes */
export const KeyboardWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Keyboard Input Label',
            'aria-placeholder': 'Keyboard Input Placeholder',
        },
    },
};
/** Keyboard input with datasets */
export const KeyboardWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-keyboard-id'],
            ['name', 'Data Keyboard Name'],
        ]),
    },
};
