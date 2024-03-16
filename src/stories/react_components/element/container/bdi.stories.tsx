import {
    Container,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;bdt&gt; HTML element tells the browser's bidirectional algorithm to treat the text it contains in isolation
 * from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know
 * the directionality of the text being inserted.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi
 */
export default {
    title: 'React Component/Element/Container/Inline/Bdi',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Bidirectional Isolate element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;bdi&gt;',
            table: {
                type: {
                    summary: '"bdi"',
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
// Default bdi
const DefaultBdi = {
    element: 'bdi',
};

/** Default bdi */
export const Default = {
    render: (args: any) => <Container
        {...DefaultBdi}
        {...args}
    >
        Bdi content
    </Container>,
};
