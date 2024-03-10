import {Fragment} from "react";
import {
    Input,
    Output,
} from "../../../components";
import {deIndent} from "../../../utils";

/**
 * The &lt;output&gt; HTML element is a container element into which a site or app can inject the results
 * of a calculation or the outcome of a user action
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output
 */
export default {
    title: 'React Component/Element/Output',
    component: Output,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The HTML Select element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <form id={'test_form'} onInput={() => {
                    const a = document.getElementById('a') as HTMLInputElement;
                    const b = document.getElementById('b') as HTMLInputElement;
                    const result = document.getElementById('result') as HTMLOutputElement;
                    result.value = (parseInt(a.value) + parseInt(b.value)).toString();
                }}>
                    <Input element={'input'} type={'number'} id={'a'} defaultValue={50}/>
                    + <Input element={'input'} type={'number'} id={'b'} defaultValue={100}/>
                    = <Story/>
                </form>
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Output</code> component to render &lt;output&gt;',
            table: {
                type: {
                    summary: '"output"',
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
            description: 'Content of output',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        htmlFor: {
            control: 'object',
            description: 'A list of other element\'s ids, indicating that those elements '
                        + 'contributed input values to (or otherwise affected) the calculation.',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        form: {
            control: 'text',
            description: 'The &lt;form&gt; element to associate the output with (its form owner).',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        name: {
            control: 'text',
            description: 'Name used in the form.elements API.',
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
                    summary: 'OutputHTMLAttributes<HTMLOutputElement>',
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
/** Default output */
export const Default = {
    render: (args: any) => <Output
        id={'result'}
        name={'result'}
        htmlFor={['a', 'b']}
        form={'test_form'}
        {...args}
    >
        150
    </Output>,
};
/** Output with style classes */
export const OutputWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Output with additional attributes */
export const OutputWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Output Label',
            'aria-placeholder': 'Output Placeholder',
        },
    },
};
/** Output with datasets */
export const OutputWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-output-id'],
            ['name', 'Data Output Name'],
        ]),
    },
};
