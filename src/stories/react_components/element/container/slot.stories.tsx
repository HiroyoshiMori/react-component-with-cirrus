import {Fragment} from "react";
import {
    Code,
    Container,
    Details,
    Heading,
    Paragraph,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;slot&gt; HTML element -- part of the Web Components technology suite -- is a placeholder inside
 * a web component that you can fill with your own markup, which lets you create separate DOM trees and
 * present them together.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot
 */
export default {
    title: 'React Component/Element/Container/Block/Slot',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Web Component Slot element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Details element={'details'} summary={{
                    element: 'summary',
                    children: (
                        <Fragment>
                            <Code element={'code'}>
                                &lt;<Story />&gt;
                            </Code>
                            <Container
                                element={'span'}
                            >
                                <slot name={'description'}>NEED DESCRIPTION</slot>
                            </Container>
                        </Fragment>
                    )
                }}>
                    <Container element={'div'}>
                        <Heading element={'heading'} level={4}>
                            Attributes
                        </Heading>
                        <slot name={'attributes'}>
                            <Paragraph element={'p'}>None</Paragraph>
                        </slot>
                    </Container>
                </Details>
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;slot&gt;',
            table: {
                type: {
                    summary: '"slot"',
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
            description: 'Content of component',
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
                    summary: 'SlotHTMLAttributes<HTMLSlotElement>',
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
/** Default slot */
export const Default = {
    render: (args: any) => <Container
        element={'slot'}
        {...args}
    >
        NEED NAME
    </Container>,
};
/** Slot with style classes */
export const SlotWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Slot with additional attributes */
export const SlotWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Slot Label',
            'aria-placeholder': 'Slot Placeholder',
        },
    },
};
/** Slot with datasets */
export const SlotWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-slot-id'],
            ['name', 'Data Slot Name'],
        ]),
    },
};
