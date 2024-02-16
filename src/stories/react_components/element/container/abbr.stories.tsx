import {Fragment} from "react";
import {
    Container,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;abbr&gt; HTML element represents an abbreviation or acronym.
 */
export default {
    title: 'React Component/Element/Container/Inline/Abbr',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Abbreviation element',
    },
    argTypes: {
        element: {
            control: 'none',
            type: {
                required: true,
            },
            description: 'Switcher for <code>Container</code> component to render &lt;abbr&gt;',
            table: {
                type: {
                    summary: '"abbr"',
                },
            },
        },
        inline: {
            control: 'none',
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
        title: {
            control: 'object',
            description: 'Store a specific semantic meaning when used with the &lt;abbr&gt; element',
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
                    summary: 'HTMLAttributes<HTMLLabelElement>',
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
// Default abbreviation property
const DefaultAbbrProps = {
    element: 'abbr',
    inline: true,
};

/** Default abbreviation */
export const Default = {
    render: (args: any) => <Fragment>
        <Container
            {...DefaultAbbrProps}
            {...args}
        >
            CSS
        </Container> (Cascade Style Sheet)
    </Fragment>,
};
/** Abbreviation with cite and datetime attributes */
export const AbbrWithCiteAndDateTimeAttributes = {
    ...Default,
    args: {
        title: 'Cascade Style Sheet',
    },
};
/** Abbreviation with style classes */
export const AbbrWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Abbreviation with additional attributes */
export const AbbrWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Abbreviation Label',
            'aria-placeholder': 'Abbreviation Placeholder',
        },
    },
};
/** Abbreviation with datasets */
export const AbbrWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'abbr-data-id'],
            ['name', 'Abbreviation Data Name'],
        ]),
    },
};
