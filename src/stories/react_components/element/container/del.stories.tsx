import {Fragment} from "react";
import {
    Container,
    Paragraph,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;del&gt; HTML element represents a range of text that has been deleted from a document.
 * This can be use when rendering "track changes" or source code diff information, for example. The
 * the &lt;ins&gt: element can be used for the opposite purpose: to indicate text that has been added
 * to the document.
 */
export default {
    title: 'React Component/Element/Container/Inline/Del',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Deleted Text element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;del&gt;',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: '"del"',
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
        cite: {
            control: 'text',
            description: 'Store URI of a resource that explains the change',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        dateTime: {
            control: 'text',
            description: 'Store machine-readable date',
            table: {
                type: {
                    summary: 'string',
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
// Default deleted text property
const DefaultDelProps = {
    element: 'del',
};

/** Default deleted text */
export const Default = {
    render: (args: any) => <Fragment>
        <Paragraph element={'p'}>
            UNIX Timestamp starts from <br />
            <Container
                {...DefaultDelProps}
                {...args}
            >
                <Paragraph element={'p'}>January 1st, 2000 00:00:00</Paragraph>
            </Container>
            <ins>
                <Paragraph element={'p'}>January 1st, 1970 00:00:00</Paragraph>
            </ins>
        </Paragraph>
    </Fragment>,
};
/** Deleted text with cite and datetime attributes */
export const DelWithCiteAndDateTimeAttributes = {
    ...Default,
    args: {
        cite: 'https://en.wikipedia.org/wiki/Unix_time',
        dateTime: '1970-01-01 00:00:00',
    },
};
/** Deleted text with style classes */
export const DelWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Deleted text with additional attributes */
export const DelWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Deleted text Label',
            'aria-placeholder': 'Deleted text Placeholder',
        },
    },
};
/** Deleted text with datasets */
export const DelWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'del-data-id'],
            ['name', 'Deleted text Data Name'],
        ]),
    },
};
