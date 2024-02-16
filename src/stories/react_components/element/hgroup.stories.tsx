import {
    HeadingGroup,
} from '../../../components';
import {deIndent, linkInStoryBook} from "../../../utils";

/**
 * The &lt;hgroup&gt; HTML element represents a heading and related content.
 * It groups a single &lt;h1&gt;-&lt;h6&gt; element with one or more &lt;p&gt;.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup
 */
export default {
    title: 'React Component/Element/Headline/Heading Group',
    component: HeadingGroup,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Heading Group element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>HeadingGroup</code> component to render &lt;hgroup&gt;',
            table: {
                type: {
                    summary: '"hgroup"',
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
        heading: {
            control: 'object',
            type: {
                required: true,
            },
            description: deIndent(`
                            Heading of the content<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'HeadingProps', 'React Component/Element/Headline/Heading'
                        ),
            table: {
                type: {
                    summary: 'HeadingProps',
                },
            },
        },
        paragraphs: {
            control: 'object',
            type: {
                required: true,
            },
            description: deIndent(`
                            Paragraphs of the content<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'PProps', 'React Component/Element/Paragraph'
                        ),
            table: {
                type: {
                    summary: 'PProps[]',
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
/** Default heading group */
export const Default = {
    render: (args: any) => <HeadingGroup
        heading={{
            element: 'heading',
            level: 1,
            children: 'Heading in Heading Group'
        }}
        paragraphs={[
            {element: 'p', children: 'Paragraph 1 in Heading Group.'},
            {element: 'p', children: 'Paragraph 2 in Heading Group.'},
            {element: 'p', children: 'Paragraph 3 in Heading Group.'},
            {element: 'p', children: 'Paragraph 4 in Heading Group.'},
        ]}
        {...args}
    />,
};
/** Heading group with style classes */
export const HeadingGroupWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Heading group with additional attributes */
export const HeadingGroupWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Heading Group Label',
            'aria-placeholder': 'Heading Group Placeholder',
        },
    },
};
/** Heading group with datasets */
export const HeadingGroupWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-heading-group-id'],
            ['name', 'Data Heading Group Name'],
        ]),
    },
};
