import {
    Dialog,
} from "../../../components";

export default {
    component: Dialog,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Dialog element',
    },
};
/** Default dialog */
export const Default = {
    render: (args: any) => <Dialog
        element={'dialog'}
        open={true}
        {...args}
    >
        Dialog content
    </Dialog>,
};
/** Dialog with style classes */
export const DialogWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Dialog with additional attributes */
export const DialogWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Dialog Label',
            'aria-placeholder': 'Dialog Placeholder',
        },
    },
};
/** Dialog with datasets */
export const DialogWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-dialog-id'],
            ['name', 'Data dialog name'],
        ]),
    },
};
