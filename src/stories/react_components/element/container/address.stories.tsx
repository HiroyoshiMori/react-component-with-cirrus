import {
    AddressProps,
    Container,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;address&gt; HTML element indicates that the enclosed HTML provides contact
 * information for a person or people, or for an organization.
 */
export default {
    title: 'React Component/Element/Container/Block/Address',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Contact Address element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;address&gt;',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: '"address"',
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
                    summary: 'HTMLAttributes<HTMLDivElement>',
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
// Default address property
const DefaultAddressProps = {
    element: 'address',
};

/** Default contact address */
export const Default = {
    render: (args: any) => <Container<AddressProps>
        {...DefaultAddressProps}
        {...args}
    >
        <a href="mailto: example@example.com">example@example.com</a><br />
        <a href="tel:+1 206 555 0100">+1 (206) 555-0100</a>
    </Container>,
};
/** Contact address with style classes */
export const AddressWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Contact address with additional attributes */
export const AddressWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Address Label',
            'aria-placeholder': 'Address Placeholder',
        },
    },
};
/** Contact address with datasets */
export const AddressWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'address-data-id'],
            ['name', 'Address Data Name'],
        ]),
    },
};
