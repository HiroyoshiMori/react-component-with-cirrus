import {Fragment} from "react";
import {
    Rt,
} from "../../../../components";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The &lt;rt&gt; element specifies the ruby text component of a ruby annotation, which is used to
 * provide pronunciation, transiation, or transliteration information for East Asian typography.
 * The &lt;rt&gt; element must always be contained within a &lt;ruby&gt; element.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt
 */
export default {
    title: 'React Component/Element/Ruby/Rt',
    component: Rt,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Ruby Text element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <ruby>
                    <Story/>
                    本
                    <rp>(</rp>
                    <rt>Hon</rt>
                    <rp>)</rp>
                </ruby> is meaning of Japan.
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Rt</code> component to render &lt;rt&gt;',
            table: {
                type: {
                    summary: '"rt"',
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
        label: {
            control: 'text',
            type: {
                required: true,
            },
            description: 'Text component which is annotated by ruby annotation',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        children: {
            control: 'text',
            description: 'The ruby annotation to provide pronunciation, translation, or transliteration information',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        useRp: {
            control: 'boolean',
            description: 'Indicates ruby parenthesis fallback',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        preParenthesis: {
            control: 'object',
            description: deIndent(`
                            The content of ruby parenthesis fallback placed before ruby annotation<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'RtProps', 'React Component/Element/Ruby/Rt'
                        ),
            table: {
                type: {
                    summary: 'RpProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        postParenthesis: {
            control: 'object',
            description: deIndent(`
                            The content of ruby parenthesis fallback placed after ruby annotation<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'RpProps', 'React Component/Element/Ruby/Rp'
                        ),
            table: {
                type: {
                    summary: 'RpProps',
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
/** Default ruby text */
export const Default = {
    render: (args: any) => <Rt
        element={'rt'}
        label={'日'}
        {...args}
    >
        Ni
    </Rt>
};
/** Ruby text with ruby fallback parenthesis */
export const RubyTextWithParenthesis = {
    ...Default,
    args: {
        useRp: true,
        preParenthesis: {
            element: 'rp',
            children: '(',
        },
        postParenthesis: {
            element: 'rp',
            children: ')',
        },
    },
};
/** Ruby text with style classes */
export const RubyTextWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Ruby text with additional attributes */
export const RubyTextWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Ruby Text Label',
            'aria-placeholder': 'Ruby Text Placeholder',
        },
    },
};
/** Ruby text with datasets */
export const RubyTextWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-rt-id'],
            ['name', 'Data Ruby Text Name'],
        ]),
    },
};
