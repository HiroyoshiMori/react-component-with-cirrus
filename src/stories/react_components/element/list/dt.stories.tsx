import {
    DdProps,
    DItem,
    DtProps,
    List,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;dt&gt; element specifies a term in a description or definition list, and as such must be
 * used in a &lt;dl&gt; element. It is usually followed by a &lt;dd&gtl element; however, multiple
 * &lt;dt&gt; elements in a row indicate several terms that are all defined by the immediate next
 * &lt:dd&gt; element.
 *
 * The subsequent &lt;dd&gt: (Description Details) element provides the definition or other related
 * text associated with the term specified using &lt;dt&gt;
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt
 */
export default {
    title: 'React Component/Element/List/Dt',
    component: DItem,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Description Term element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>DItem</code> component to render &lt;dt&gt;',
            table: {
                type: {
                    summary: 'dt',
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
            description: 'Term content to be described, defined',
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
// Default description term */
const DefaultDt: [DtProps, DdProps] = [
    {
        element: 'dt',
        children: 'Description Term',
    } as DtProps,
    {
        element: 'dd',
        children: 'Description Details is here',
    } as DdProps
];
// Multi Description terms */
const MultiDt: [DtProps[], DdProps] = [
    [
        {
            element: 'dt',
            children: 'Description Term 1',
        } as DtProps,
        {
            element: 'dt',
            children: 'Description Term 2',
        } as DtProps,
        {
            element: 'dt',
            children: 'Description Term 3',
        } as DtProps,
        {
            element: 'dt',
            children: 'Description Term 4',
        } as DtProps,
    ],
    {
        element: 'dd',
        children: 'Description Details is here',
    } as DdProps,
];
// Default description term with style classes */
const DefaultDtWithClasses: [DtProps, DdProps] = [
    {
        element: 'dt',
        children: 'Description Term',
        classes: ['test-class1', 'test-class2'],
    } as DtProps,
    {
        element: 'dd',
        children: 'Description Details is here',
    } as DdProps
];
// Default description term with additional attributes */
const DefaultDtWithAttributes: [DtProps, DdProps] = [
    {
        element: 'dt',
        children: 'Description Term',
        attributes: {
            'aria-label': 'Dt Label',
            'aria-placeholder': 'Dt Placeholder',
        },
    } as DtProps,
    {
        element: 'dd',
        children: 'Description Details is here',
    } as DdProps
];
// Default description term with datasets */
const DefaultDtWithDatasets: [DtProps, DdProps] = [
    {
        element: 'dt',
        children: 'Description Term',
        datasets: new Map([
            ['id', 'data-dt-id'],
            ['name', 'Data dt name'],
        ]),
    } as DtProps,
    {
        element: 'dd',
        children: 'Description Details is here',
    } as DdProps
];
// Multi Description terms with style classes */
const MultiDtWithClasses: [DtProps[], DdProps] = [
    [
        {
            element: 'dt',
            children: 'Description Term 1',
            classes: ['test-class1-1', 'test-class-1-2'],
        } as DtProps,
        {
            element: 'dt',
            children: 'Description Term 2',
            classes: ['test-class2-1', 'test-class-2-2'],
        } as DtProps,
        {
            element: 'dt',
            children: 'Description Term 3',
            classes: ['test-class3-1', 'test-class-3-2'],
        } as DtProps,
        {
            element: 'dt',
            children: 'Description Term 4',
            classes: ['test-class4-1', 'test-class-4-2'],
        } as DtProps,
    ],
    {
        element: 'dd',
        children: 'Description Details is here',
    } as DdProps,
];
// Multi Description terms with additional attributes */
const MultiDtWithAttributes: [DtProps[], DdProps] = [
    [
        {
            element: 'dt',
            children: 'Description Term 1',
            attributes: {
                'aria-label': 'Dt Label 1',
                'aria-placeholder': 'Dt Placeholder 1',
            },
        } as DtProps,
        {
            element: 'dt',
            children: 'Description Term 2',
            attributes: {
                'aria-label': 'Dt Label 2',
                'aria-placeholder': 'Dt Placeholder 2',
            },
        } as DtProps,
        {
            element: 'dt',
            children: 'Description Term 3',
            attributes: {
                'aria-label': 'Dt Label 3',
                'aria-placeholder': 'Dt Placeholder 3',
            },
        } as DtProps,
        {
            element: 'dt',
            children: 'Description Term 4',
            attributes: {
                'aria-label': 'Dt Label 4',
                'aria-placeholder': 'Dt Placeholder 4',
            },
        } as DtProps,
    ],
    {
        element: 'dd',
        children: 'Description Details is here',
    } as DdProps,
];
// Multi Description terms with datasets */
const MultiDtWithDatasets: [DtProps[], DdProps] = [
    [
        {
            element: 'dt',
            children: 'Description Term 1',
            datasets: new Map([
                ['id', 'data-dt-id-1'],
                ['name', 'Data dt name 1'],
            ]),
        } as DtProps,
        {
            element: 'dt',
            children: 'Description Term 2',
            datasets: new Map([
                ['id', 'data-dt-id-2'],
                ['name', 'Data dt name 2'],
            ]),
        } as DtProps,
        {
            element: 'dt',
            children: 'Description Term 3',
            datasets: new Map([
                ['id', 'data-dt-id-3'],
                ['name', 'Data dt name 3'],
            ]),
        } as DtProps,
        {
            element: 'dt',
            children: 'Description Term 4',
            datasets: new Map([
                ['id', 'data-dt-id-4'],
                ['name', 'Data dt name 4'],
            ]),
        } as DtProps,
    ],
    {
        element: 'dd',
        children: 'Description Details is here',
    } as DdProps,
];

/** Default description term */
export const Default = {
    render: (args: any) => <List
        element={'dl'}
        items={[DefaultDt]}
        {...args}
    />,
};
/** Multi description terms */
export const MultiDescriptionTerm = {
    ...Default,
    args: {
        items: [
            MultiDt,
        ],
    },
};
/** Description term with style classes */
export const DescriptionTermWithStyleClasses = {
    ...Default,
    args: {
        items: [
            DefaultDtWithClasses,
        ],
    },
};
/** Description term with additional attributes */
export const DescriptionTermWithAdditionalAttributes = {
    ...Default,
    args: {
        items: [
            DefaultDtWithAttributes,
        ],
    },
};
/** Description term with datasets */
export const DescriptionTermWithDatasets = {
    ...Default,
    args: {
        items: [
            DefaultDtWithDatasets,
        ],
    },
};
/** Description term with style classes */
export const MultiDescriptionTermWithStyleClasses = {
    ...Default,
    args: {
        items: [
            MultiDtWithClasses,
        ],
    },
};
/** Description term with additional attributes */
export const MultiDescriptionTermWithAdditionalAttributes = {
    ...Default,
    args: {
        items: [
            MultiDtWithAttributes,
        ],
    },
};
/** Description term with datasets */
export const MultiDescriptionTermWithDatasets = {
    ...Default,
    args: {
        items: [
            MultiDtWithDatasets,
        ],
    },
};
