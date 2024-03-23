import {Fragment} from "react";
import {
    BdoProps,
    Container,
    Paragraph,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;bdo&gt; HTML element overrides the current directionality of text, so that the text within is
 * rendered in different direction.
 */
export default {
    title: 'React Component/Element/Container/Inline/Bdo',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Bidirectional Text Override element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Paragraph element={'p'}>
                    UNIX Timestamp starts from <br />
                    <Story />
                </Paragraph>
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;bdo&gt;',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: '"bdo"',
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
        dir: {
            control: 'radio',
            options: ['Default', 'auto', 'ltr', 'rtl'],
            mapping: {
                Default: undefined,
            },
            description: 'Store the direction in which text should be rendered in this element\'s contents',
            table: {
                type: {
                    summary: '"auto" | "ltr" | "rtl"',
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
                    summary: 'HTMLAttributes<HTMLModElement>',
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
// Default bidirectional text property
const DefaultBdoProps = {
    element: 'bdo',
};

/** Default bidirectional text */
export const Default = {
    render: (args: any) => <Container<BdoProps>
        {...DefaultBdoProps}
        {...args}
    >
        <Paragraph element={'p'}>January 1st, 2000 00:00:00</Paragraph>
    </Container>,
};
/** Bidirectional text with cite and datetime attributes */
export const BdoWithCiteAndDateTimeAttributes = {
    ...Default,
    args: {
        dir: 'rtl',
    },
};
/** Bidirectional text with style classes */
export const BdoWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Bidirectional text with additional attributes */
export const BdoWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Bidirectional text Label',
            'aria-placeholder': 'Bidirectional text Placeholder',
        },
    },
};
/** Bidirectional text with datasets */
export const BdoWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'bdo-data-id'],
            ['name', 'Bidirectional text Data Name'],
        ]),
    },
};
