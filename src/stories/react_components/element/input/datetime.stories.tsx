import {
    Input,
} from "../../../../components";

export default {
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - date/datetime-local/month/time/week',
    },
};
/** Default date */
export const Default = {
    render: (args: any) => <Input
        type={'date'}
        name={'input_date'}
        {...args}
    />,
};
/** Default datetime-local */
export const DefaultDateTimeLocal = {
    ...Default,
    args: {
        type: 'datetime-local',
    },
};
/** Default month */
export const DefaultMonth = {
    ...Default,
    args: {
        type: 'month',
    },
};
/** Default time */
export const DefaultTime = {
    ...Default,
    args: {
        type: 'time',
    },
};
/** Default week */
export const DefaultWeek = {
    ...Default,
    args: {
        type: 'week',
    },
};
/** Date with min/max */
export const DateWithMinMax = {
    ...Default,
    args: {
        min: '2023-01-01',
        max: '2024-12-31',
    },
};
/** Date with readonly */
export const DateWithReadonly = {
    ...Default,
    args: {
        defaultValue: '2024-01-01',
        readOnly: true,
    },
};
/** Date with required */
export const DateWithRequired = {
    ...Default,
    args: {
        required: true,
    },
};
/** Date with step */
export const DateWithStep = {
    ...Default,
    args: {
        step: 7,
    },
};
/** Date with list and datalist */
export const DateWithListAndDatalist = {
    ...Default,
    args: {
        list: 'date-selection',
        datalist: ['2024-01-01', '2023-12-01', '2023-11-01'],
    },
};
/** Date with datalist */
export const DateWithDatalist = {
    ...Default,
    args: {
        datalist: ['2024-01-01', '2023-12-01', '2023-11-01'],
    },
};
/** Date with style classes */
export const DateWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Date with additional attributes */
export const DateWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Input Date Label',
            'aria-placeholder': 'Input Date Placeholder',
        },
    },
};
/** Date with datasets */
export const DateWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-date-id'],
            ['name', 'Data Date Name'],
        ]),
    },
};
