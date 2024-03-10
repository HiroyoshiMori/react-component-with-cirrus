import {
    Container,
    Input,
    Label,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;legend&gt; HTML element represents a caption for the content of its parent &lt;fieldset&gt;
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend
 */
export default {
    title: 'React Component/Element/Container/Block/Legend',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Field Set Legend element',
    },
    decorators: [
        (Story: any) => (
            <fieldset>
                <Story />
                <Label element={'label'}>
                    <Input
                        element={'input'}
                        type={'radio'}
                    />
                    Sample radio
                </Label>
            </fieldset>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;legend&gt;',
            table: {
                type: {
                    summary: '"legend"',
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
                    summary: 'HTMLAttributes<HTMLLegendElement>',
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
/** Default legend */
export const Default = {
    render: (args: any) => <Container
        element={'legend'}
        {...args}
    >
        Legend contents
    </Container>,
};
/** Legend with style classes */
export const LegendWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Legend with additional attributes */
export const LegendWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Legend Label',
            'aria-placeholder': 'Legend Placeholder',
        },
    },
};
/** Legend with datasets */
export const LegendWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-legend-id'],
            ['name', 'Data Legend Name'],
        ]),
    },
};
