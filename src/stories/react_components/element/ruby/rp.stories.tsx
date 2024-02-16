import {Fragment} from "react";
import {
    Rp,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;rp&gt; HTML element is used to provide fall-back parentheses for browsers that do not support
 * display of ruby annotations using the &lt;ruby&gt; element.
 * One &lt;rp&gt; element should enclose each of opening and closing parentheses that wrap the
 * &lt;rt&gt; element that contains the annotation's text.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp
 */
export default {
    title: 'React Component/Element/Ruby/Rp',
    component: Rp,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Ruby Fallback Parenthesis element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <ruby>
                    日
                    <Story/>
                    <rt>Ni</rt>
                    <rp>)</rp>
                    本
                    <rp>(</rp>
                    <rt>Hon</rt>
                    <rp>)</rp>
                </ruby> is meaning of Japan.
            </Fragment>
        ),
    ],
    argTyps: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Rp</code> component to render &lt;rp&gt;',
            table: {
                type: {
                    summary: '"rp"',
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
        children: {
            control: 'text',
            description: 'Opening or closing parentheses',
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
    }
};
/** Default ruby parenthesis */
export const Default = {
    render: (args: any) => <Rp
        element={'rp'}
        {...args}
    >
        (
    </Rp>,
};
/** Ruby parenthesis with style classes */
export const RpWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Ruby parenthesis with additional attributes */
export const RpWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Ruby Parenthesis Label',
            'aria-placeholder': 'Ruby Parenthesis Placeholder',
        },
    },
};
/** Ruby parenthesis with datasets */
export const RpWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-rp-id'],
            ['name', 'Data Ruby Parenthesis Name'],
        ]),
    },
};
