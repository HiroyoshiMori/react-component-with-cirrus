import {
    Container,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;div&gt; HTML element is a generic container for flow content,
 * It has no effect on the content or layout until styled in some way in using CSS
 * (e.g., styling is directly applied to it, or some kind of layout model like Flexbox
 * is applied to it parent element).
 */
export default {
    title: 'React Component/Element/Container/Block/Div',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Content Division element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;div&gt;',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: '"div"',
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
            control: 'object',
            description: 'Content of element',
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
                    summary: 'HTMLAttributes<HTMLDivElement>',
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
// Default division property
const DefaultDivProps = {
    element: 'div',
};

/** Default content division */
export const Default = {
    render: (args: any) => <Container
        {...DefaultDivProps}
        {...args}
    >
        This is content division.
    </Container>,
};
/** Content division with style classes */
export const DivWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Content division with additional attributes */
export const DivWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Division Label',
            'aria-placeholder': 'Division Placeholder',
        },
    },
};
/** Content division with datasets */
export const DivWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'div-data-id'],
            ['name', 'Division Data Name'],
        ]),
    },
};
