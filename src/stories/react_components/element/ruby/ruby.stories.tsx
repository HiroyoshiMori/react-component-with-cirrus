import {Fragment, HTMLAttributes} from "react";
import {
    Ruby,
} from "../../../../components";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The &lt;ruby&gt; element represents small annotations that are rendered above, below, or next to
 * base text, usually used for showing the pronunciation of East Asian characters. It can also be used
 * for annotating other kinds of text, but this usage is less common.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby
 */
export default {
    title: 'React Component/Element/Ruby/Ruby',
    component: Ruby,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Ruby Annotation element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Story/> is meaning of Japan.
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Ruby</code> component to render &lt;ruby&gt;',
            table: {
                type: {
                    summary: 'ruby',
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
        items: {
            control: 'object',
            type: {
                required: true,
            },
            description: deIndent(`
                            Ruby text components of a ruby annotation<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'RtProps', 'React Component/Element/Ruby/Rt'
                        ),
            table: {
                type: {
                    summary: 'RtProps[]',
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
/** Default ruby annotation */
export const Default = {
    render: (args: any) => <Ruby
        element={'ruby'}
        items={[
            { element: 'rt', label: '日', children: 'Ni' },
            { element: 'rt', label: '本', children: 'Hon' },
        ]}
        {...args}
    />,
};
/** Ruby annotation with style classes */
export const RubyAnnotationWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Ruby annotation with additional attributes */
export const RubyAnnotationWithAdditionalAttribytes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Ruby Annotation Label',
            'aria-placeholder': 'Ruby Annotation Placeholder',
        },
    },
};
/** Ruby annotation with datasets */
export const RubyAnnotationWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-ruby-id'],
            ['name', 'Data Ruby Annotation Name'],
        ]),
    },
};
