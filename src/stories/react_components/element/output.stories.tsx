import {Fragment} from "react";
import {
    Input,
    Output,
} from "../../../components";

export default {
    component: Output,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The HTML Select element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <form id={'test_form'} onInput={() => {
                    const a = document.getElementById('a') as HTMLInputElement;
                    const b = document.getElementById('b') as HTMLInputElement;
                    const result = document.getElementById('result') as HTMLOutputElement;
                    result.value = (parseInt(a.value) + parseInt(b.value)).toString();
                }}>
                    <Input type={'number'} id={'a'} defaultValue={50}/>
                    + <Input type={'number'} id={'b'} defaultValue={100}/>
                    = <Story/>
                </form>
            </Fragment>
        )
    ]
};
/** Default output */
export const Default = {
    render: (args: any) => <Output
        id={'result'}
        name={'result'}
        for={'a b'}
        form={'test_form'}
        {...args}
    >
        150
    </Output>,
};
/** Output with style classes */
export const OutputWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Output with additional attributes */
export const OutputWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Output Label',
            'aria-placeholder': 'Output Placeholder',
        },
    },
};
/** Output with datasets */
export const OutputWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-output-id'],
            ['name', 'Data Output Name'],
        ]),
    },
};
