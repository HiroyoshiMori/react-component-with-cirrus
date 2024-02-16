import {
    DdProps,
    DItem,
    DtProps,
    List,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;dd&gt; HTML element provides the description, definition, or value for the preceding
 * term (&lt;dt&gtl) in a description list (&lt;dl&gt;).
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd
 */
export default {
    title: 'React Component/Element/List/Dd',
    component: DItem,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Description Details element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>DItem</code> component to render &lt;dd&gt;',
            table: {
                type: {
                    summary: '"dd"',
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
            description: 'The description, definition, or value',
            table: {
                type: {
                    summary: 'ReactNode',
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
// Default description details */
const DefaultDd: [DtProps, DdProps] = [
    {
        element: 'dt',
        children: 'Description Term',
    } as DtProps,
    {
        element: 'dd',
        children: 'Description Details',
    } as DdProps
];
// Multi Description details */
const MultiDd: [DtProps, DdProps[]] = [
    {
        element: 'dt',
        children: 'Description Term',
    } as DtProps,
    [
        {
            element: 'dd',
            children: 'Description Details 1',
        } as DdProps,
        {
            element: 'dd',
            children: 'Description Details 2',
        } as DdProps,
        {
            element: 'dd',
            children: 'Description Details 3',
        } as DdProps,
        {
            element: 'dd',
            children: 'Description Details 4',
        } as DdProps,
    ],
];
// Description details with style classes */
const DdWithClasses: [DtProps, DdProps] = [
    {
        element: 'dt',
        children: 'Description Term',
    } as DtProps,
    {
        element: 'dd',
        children: 'Description Details',
        classes: ['test-class1', 'test-class2'],
    } as DdProps
];
// Description details with additional attributes */
const DdWithAttributes: [DtProps, DdProps] = [
    {
        element: 'dt',
        children: 'Description Term',
    } as DtProps,
    {
        element: 'dd',
        children: 'Description Details',
        attributes: {
            'aria-label': 'Dd Label',
            'aria-placeholder': 'Dd Placeholder',
        },
    } as DdProps
];
// Description details with datasets */
const DdWithDatasets: [DtProps, DdProps] = [
    {
        element: 'dt',
        children: 'Description Term',
    } as DtProps,
    {
        element: 'dd',
        children: 'Description Details',
        datasets: new Map([
            ['id', 'data-dd-id'],
            ['name', 'Data dd Name'],
        ]),
    } as DdProps
];
// Multi Description details with style classes */
const MultiDdWithClasses: [DtProps, DdProps[]] = [
    {
        element: 'dt',
        children: 'Description Term',
    } as DtProps,
    [
        {
            element: 'dd',
            children: 'Description Details 1',
            classes: ['test-class1-1', 'test-class1-2'],
        } as DdProps,
        {
            element: 'dd',
            children: 'Description Details 2',
            classes: ['test-class2-1', 'test-class2-2'],
        } as DdProps,
        {
            element: 'dd',
            children: 'Description Details 3',
            classes: ['test-class3-1', 'test-class3-2'],
        } as DdProps,
        {
            element: 'dd',
            children: 'Description Details 4',
            classes: ['test-class4-1', 'test-class4-2'],
        } as DdProps,
    ],
];
// Multi Description details with additional attributes */
const MultiDdWithAttributes: [DtProps, DdProps[]] = [
    {
        element: 'dt',
        children: 'Description Term',
    } as DtProps,
    [
        {
            element: 'dd',
            children: 'Description Details 1',
            attributes: {
                'aria-label': 'Dd Label 1',
                'aria-placeholder': 'Dd Placeholder 1',
            },
        } as DdProps,
        {
            element: 'dd',
            children: 'Description Details 2',
            attributes: {
                'aria-label': 'Dd Label 2',
                'aria-placeholder': 'Dd Placeholder 2',
            },
        } as DdProps,
        {
            element: 'dd',
            children: 'Description Details 3',
            attributes: {
                'aria-label': 'Dd Label 3',
                'aria-placeholder': 'Dd Placeholder 3',
            },
        } as DdProps,
        {
            element: 'dd',
            children: 'Description Details 4',
            attributes: {
                'aria-label': 'Dd Label 4',
                'aria-placeholder': 'Dd Placeholder 4',
            },
        } as DdProps,
    ],
];
// Multi Description details with datasets */
const MultiDdWithDatasets: [DtProps, DdProps[]] = [
    {
        element: 'dt',
        children: 'Description Term',
    } as DtProps,
    [
        {
            element: 'dd',
            children: 'Description Details 1',
            datasets: new Map([
                ['id', 'data-dd-id1'],
                ['name', 'Data dd Name1'],
            ]),
        } as DdProps,
        {
            element: 'dd',
            children: 'Description Details 2',
            datasets: new Map([
                ['id', 'data-dd-id2'],
                ['name', 'Data dd Name2'],
            ]),
        } as DdProps,
        {
            element: 'dd',
            children: 'Description Details 3',
            datasets: new Map([
                ['id', 'data-dd-id3'],
                ['name', 'Data dd Name3'],
            ]),
        } as DdProps,
        {
            element: 'dd',
            children: 'Description Details 4',
            datasets: new Map([
                ['id', 'data-dd-id4'],
                ['name', 'Data dd Name4'],
            ]),
        } as DdProps,
    ],
];

/** Default description details */
export const Default = {
    render: (args: any) => <List
        element={'dl'}
        items={[DefaultDd]}
        {...args}
    />,
};
/** Multi description details */
export const MultiDescriptionDetails = {
    ...Default,
    args: {
        items: [
            MultiDd,
        ],
    },
};
/** Description details with style classes */
export const DescriptionDetailsWithStyleClasses = {
    ...Default,
    args: {
        items: [
            DdWithClasses,
        ],
    },
};
/** Description details with additional attributes */
export const DescriptionDetailsWithAdditionalAttributes = {
    ...Default,
    args: {
        items: [
            DdWithAttributes,
        ],
    },
};
/** Description details with datasets */
export const DescriptionDetailsWithDatasets = {
    ...Default,
    args: {
        items: [
            DdWithDatasets,
        ],
    },
};
/** Multi description details with style classes */
export const MultiDescriptionDetailsWithStyleClasses = {
    ...MultiDescriptionDetails,
    args: {
        items: [
            MultiDdWithClasses,
        ],
    },
};
/** Multi description details with additional attributes */
export const MultiDescriptionDetailsWithAdditionalAttributes = {
    ...MultiDescriptionDetails,
    args: {
        items: [
            MultiDdWithAttributes,
        ],
    },
};
/** Multi description details with datasets */
export const MultiDescriptionDetailsWithDatasets = {
    ...MultiDescriptionDetails,
    args: {
        items: [
            MultiDdWithDatasets,
        ],
    },
};
