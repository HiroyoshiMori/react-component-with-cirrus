import {Fragment} from "react";
import {
    Fieldset,
    RadioGroup,
} from "../../../components";

export default {
    component: Fieldset,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Field Set element',
    },
};
// Default fieldset
const DefaultFieldset = {
    element: 'fieldset',
};

/** Default fieldset */
export const Default = {
    render: (args: any) => <Fragment>
        <Fieldset
            {...DefaultFieldset}
            {...args}
        >
            <RadioGroup items={[
                {children: 'Radio 1', radio: {type: 'radio', name: 'radio_group', value: 'radio1'}},
                {children: 'Radio 2', radio: {type: 'radio', name: 'radio_group', value: 'radio2'}},
                {children: 'Radio 3', radio: {type: 'radio', name: 'radio_group', value: 'radio3'}},
                {children: 'Radio 4', radio: {type: 'radio', name: 'radio_group', value: 'radio4'}},
            ]} />
        </Fieldset>
    </Fragment>
};
/** Fieldset with caption */
export const FieldsetWithCaption = {
    ...Default,
    args: {
        caption: {
            element: 'legend',
            children: 'Fieldset Caption',
        },
    },
};
/** Fieldset with other attributes */
export const FieldsetWithOtherAttributes = {
    ...Default,
    args: {
        disabled: true,
        form: 'test-form',
        name: 'fieldset_name',
    },
};
/** Fieldset with style classes */
export const FieldsetWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Fieldset with additional attributes */
export const FieldsetWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Fieldset Label',
            'aria-placeholder': 'Fieldset Placeholder',
        },
    },
};
/** Fieldset with datasets */
export const FieldsetWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-fieldset-id'],
            ['name', 'Data Fieldset Name'],
        ]),
    },
};
