import {Fragment} from "react";
import {
    Container,
    Paragraph,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;int&gt; HTML element represents a range of text that has been added to a document. You can use
 * the &lt;del&gt: to similarly represent a range of text that has been deleted from document.
 */
export default {
    title: 'React Component/Element/Container/Inline/Ins',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Inserted Text element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;ins&gt;',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: '"ins"',
                },
            },
        },
        inline: {
            control: 'boolean',
            description: 'Indicate inline-level element',
            type: {
                required: true,
            },
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
            control: 'object',
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
// Default inserted text property
const DefaultInsProps = {
    element: 'ins',
    inline: true,
};

/** Default inserted text */
export const Default = {
    render: (args: any) => <Fragment>
        <Paragraph>
            UNIX Timestamp starts from <br />
            <del>
                <Paragraph>January 1st, 2000 00:00:00</Paragraph>
            </del>
            <Container
                {...DefaultInsProps}
                {...args}
            >
                <Paragraph>January 1st, 1970 00:00:00</Paragraph>
            </Container>
        </Paragraph>
    </Fragment>,
};
/** Inserted text with cite and datetime attributes */
export const InsWithCiteAndDateTimeAttributes = {
    ...Default,
    args: {
        cite: 'https://en.wikipedia.org/wiki/Unix_time',
        dateTime: '1970-01-01 00:00:00',
    },
};
/** Inserted text with style classes */
export const InsWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Inserted text with additional attributes */
export const InsWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Inserted text Label',
            'aria-placeholder': 'Inserted text Placeholder',
        },
    },
};
/** Inserted text with datasets */
export const InsWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'ins-data-id'],
            ['name', 'Inserted text Data Name'],
        ]),
    },
};
