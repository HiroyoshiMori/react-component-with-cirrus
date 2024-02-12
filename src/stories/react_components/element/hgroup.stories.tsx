import {
    HeadingGroup,
} from '../../../components';

export default {
    component: HeadingGroup,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Heading Group element',
    },
};
/** Default heading group */
export const Default = {
    render: (args: any) => <HeadingGroup
        heading={{
            element: 'heading',
            level: 1,
            children: 'Heading in Heading Group'
        }}
        paragraphs={[
            {element: 'p', children: 'Paragraph 1 in Heading Group.'},
            {element: 'p', children: 'Paragraph 2 in Heading Group.'},
            {element: 'p', children: 'Paragraph 3 in Heading Group.'},
            {element: 'p', children: 'Paragraph 4 in Heading Group.'},
        ]}
        {...args}
    />,
};
/** Heading group with style classes */
export const HeadingGroupWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Heading group with additional attributes */
export const HeadingGroupWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Heading Group Label',
            'aria-placeholder': 'Heading Group Placeholder',
        },
    },
};
/** Heading group with datasets */
export const HeadingGroupWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-heading-group-id'],
            ['name', 'Data Heading Group Name'],
        ]),
    },
};
