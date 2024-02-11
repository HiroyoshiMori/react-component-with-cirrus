import {Fragment} from "react";
import {
    OptGroup,
} from "../../../../components";

export default {
    component: OptGroup,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Option Group element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <select>
                    <option>--- Please selection option ---</option>
                    <Story/>
                </select>
            </Fragment>
        ),
    ],
};
/** Default option group */
export const Default = {
    render: (args: any) => <OptGroup
        is={'optgroup'}
        label={'Option Group'}
        options={[
            {value: 'option1', children: 'Option 1'},
            {value: 'option2', children: 'Option 2'},
            {children: 'Option 3'},
            {value: 'option4', children: 'Option 4'},
        ]}
        {...args}
    />,
};
/** Option group with selected value */
export const OptGroupWithSelectedValue = {
    ...Default,
    args: {
        selectedValue: 'option2',
    },
};
/** Option group with disabled */
export const OptGroupWithDisabled = {
    ...Default,
    args: {
        disabled: true,
    },
};
/** Option group with style classes */
export const OptGroupWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Option group with additional attributes */
export const OptGroupWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Option Group Label',
            'aria-placeholder': 'Option Group Placeholder',
        },
    },
};
/** Option group with datasets */
export const OptGroupWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-optgroup-id'],
            ['name', 'Data Option Group Name'],
        ]),
    },
};
