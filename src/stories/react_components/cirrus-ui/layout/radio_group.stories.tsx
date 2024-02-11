import {RadioGroup} from "../../../../components/cirrus-ui";

export default {
    component: RadioGroup,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Grouped Radio component',
    },
};
/** Default radio group */
export const Default = {
    render: (args: any) => <RadioGroup
        name={'radio_group'}
        items={[
            {children: 'Radio 1', radio: {type: 'radio', name: 'radio_group', value: 'radio1'}},
            {children: 'Radio 2', radio: {type: 'radio', name: 'radio_group', value: 'radio2'}},
            {children: 'Radio 3', radio: {type: 'radio', name: 'radio_group'}},
            {children: 'Radio 4', radio: {type: 'radio', name: 'radio_group', value: 'radio4'}},
        ]}
        {...args}
    />,
};
/** Radio group with current value */
export const RadioGroupWithCurrentValue = {
    ...Default,
    args: {
        currentValue: 'radio2',
    },
};
/** Radio group with current value compared with label */
export const RadioGroupWithCurrentValueVsLabel = {
    ...Default,
    args: {
        currentValue: 'Radio 3',
    },
};
/** Radio group with footnotes */
export const RadioGroupWithFootnotes = {
    ...Default,
    args: {
        footnotes: {
            element: 'span',
            children: 'There is footnotes.',
        },
    },
};
