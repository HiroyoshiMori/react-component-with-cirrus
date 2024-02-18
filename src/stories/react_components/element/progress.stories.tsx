import {Progress} from "../../../components";

export default {
    component: Progress,
    tags: ['autodocs'],
};
/** Default progress */
export const Default = {
    render: (args: any) => <Progress
        element={'progress'}
        max={100}
        {...args}
    >
        Progress content
    </Progress>,
};
/** Progress with value */
export const ProgressWithValue = {
    ...Default,
    args: {
        value: 10,
    },
};
/** Progress with style classes */
export const ProgressWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Progress with additional attributes */
export const ProgressWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Progress Label',
            'aria-placeholder': 'Progress Placeholder',
        },
    },
};
/** Progress with datasets */
export const ProgressWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-progress-id'],
            ['name', 'Data Progress Name'],
        ]),
    },
};
