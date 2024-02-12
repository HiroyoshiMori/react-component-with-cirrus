import {CheckboxGroup} from "../../../../components";

export default {
    component: CheckboxGroup,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Grouped Checkbox component',
    },
};
/** Default checkbox group */
export const Default = {
    render: (args: any) => <CheckboxGroup
        name={'checkbox_group'}
        items={[
            {children: 'Checkbox 1', checkbox: {type: 'checkbox', name: 'checkbox_group', value: 'checkbox1'}},
            {children: 'Checkbox 2', checkbox: {type: 'checkbox', name: 'checkbox_group', value: 'checkbox2'}},
            {children: 'Checkbox 3', checkbox: {type: 'checkbox', name: 'checkbox_group'}},
            {children: 'Checkbox 4', checkbox: {type: 'checkbox', name: 'checkbox_group', value: 'checkbox4'}},
        ]}
        {...args}
    />,
};
/** Checkbox group with current values */
export const CheckboxGroupWithCurrentValues = {
    ...Default,
    args: {
        currentValues: ['checkbox2', 'checkbox4'],
    },
};
/** Checkbox group with current values compared with label */
export const CheckboxGroupWithCurrentValuesVsLabel = {
    ...Default,
    args: {
        currentValues: ['Checkbox 3'],
    },
};
/** Checkbox group with footnotes */
export const CheckboxGroupWithFootnotes = {
    ...Default,
    args: {
        footnotes: {
            element: 'span',
            children: 'There is footnotes.',
        },
    },
};
