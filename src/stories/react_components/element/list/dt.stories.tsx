import {
    DdProps,
    DItem,
    DtProps,
    List,
} from "../../../../components";

export default {
    component: DItem,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Description Term element',
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
