import {
    Container,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;b&gt; HTML element is used to draw the reader's attention to the element's contents, which are
 * not otherwise granted special importance. This was formerly known as the Boldface element, and most
 * browsers still draw the text in boldface. However, you should not use &lt;b&gt; for styling text or
 * granting importance. If you wish to create boldface text, you should use the CSS font-weight property.
 * If you wish to indicate an element is of special importance, you should use the &lt;strong&gt; element.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/b
 */
export default {
    title: 'React Component/Element/Container/Inline/B',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Bring Attention To element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;b&gt;',
            table: {
                type: {
                    summary: '"b"',
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
// Default bold
const DefaultBold = {
    element: 'b',
};

/** Default bold */
export const Default = {
    render: (args: any) => <Container
        {...DefaultBold}
        {...args}
    >
        Bold content
    </Container>
};
/** Bold with style classes */
export const BoldWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Bold with additional attributes */
export const BoldWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Bold Label',
            'aria-placeholder': 'Bold Placeholder',
        },
    },
};
/** Bold with datasets */
export const BoldWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-b-id'],
            ['name', 'Data Bold Name'],
        ]),
    },
};
