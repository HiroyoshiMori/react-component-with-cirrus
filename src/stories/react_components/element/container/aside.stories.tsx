import {Fragment} from "react";
import {
    AsideProps,
    Container,
    Paragraph,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;aside&gt; HTML element represents a portion of a document whose content is only indirectly
 * related to the document's main content. Asides are frequently presented as sidebars or call-out boxes.
 */
export default {
    title: 'React Component/Element/Container/Block/Aside',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Aside element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Paragraph element={'p'}>This is paragraph which is written before aside contents.</Paragraph>
                <Story />
                <Paragraph element={'p'}>This is paragraph which is written after aside contents.</Paragraph>
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;aside&gt;',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: '"aside"',
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
// Default aside property
const DefaultAsideProps = {
    element: 'aside',
};

/** Default aside */
export const Default = {
    render: (args: any) => <Container<AsideProps>
        {...DefaultAsideProps}
        {...args}
    >
        This is aside content.
    </Container>,
};
/** Aside with style classes */
export const AsideWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Aside with additional attributes */
export const AsideWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Aside Label',
            'aria-placeholder': 'Aside Placeholder',
        },
    },
};
/** Aside with datasets */
export const AsideWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'aside-data-id'],
            ['name', 'Aside Data Name'],
        ]),
    },
};
