import {Fragment} from "react";
import {
    DataList,
    Input,
    Label,
} from "../../../components";

export default {
    component: DataList,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The HTML Data List element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Label htmlFor={'input-id'}>
                    Choose a option:
                    <Input
                        id={'input-id'}
                        type={'text'}
                        list={'data-list'}
                    />
                </Label>
                <Story />
            </Fragment>
        ),
    ]
};
// Default datalist
const DefaultDatalist = {
    element: 'datalist',
    id: 'data-list',
    options: [
        {value: 'option1', children: 'Option 1'},
        {value: 'option2', children: 'Option 2'},
        {value: 'option3', children: 'Option 3'},
        {value: 'option4', children: 'Option 4'},
    ],
};

/** Default datalist */
export const Default = {
    render: (args: any) => <DataList
        {...DefaultDatalist}
        {...args}
    />,
};
/** Datalist with style classes */
export const DatalistWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Datalist with additional attributes */
export const DatalistWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Datalist Label',
            'aria-placeholder': 'Datalist Placeholder',
        },
    },
};
/** Datalist with datasets */
export const DatalistWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-datalist-id'],
            ['name', 'Data Datalist Name'],
        ]),
    },
};
