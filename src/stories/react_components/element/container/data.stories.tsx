import {Fragment} from "react";
import {
    Container, DataProps,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;data&gt; HTML element links a given piece of content with a machine-readable translation. If the
 * content is time- or date-related, the &lt;time&gt; element must be used.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data
 */
export default {
    title: 'React Component/Element/Container/Inline/Data',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Data element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;data&gt;',
            table: {
                type: {
                    summary: '"data"',
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
        value: {
            control: 'text',
            description: 'Specifies the machine-readable translation of the content of the element',
            table: {
                type: {
                    summary: 'string | number',
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
                    summary: 'DataHTMLAttributes<HTMLDataElement>',
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
/** Default data */
export const Default = {
    render: (args: any) => <Fragment>
        <Container<DataProps>
            element={'data'}
            value={2.5}
            {...args}
        >1 inch</Container>
    </Fragment>,
};
/** Data with style classes */
export const DataWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Data with additional attributes */
export const DataWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Data Label',
            'aria-placeholder': 'Data Placeholder',
        },
    },
};
/** Data with datasets */
export const DataWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-data-id'],
            ['name', 'Data Data Name'],
        ]),
    },
};
