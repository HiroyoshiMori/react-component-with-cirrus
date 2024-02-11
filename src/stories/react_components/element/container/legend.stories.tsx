import {
    Container,
    Input,
    Label,
} from "../../../../components";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Field Set Legend element',
    },
    decorators: [
        (Story: any) => (
            <fieldset>
                <Story />
                <Label>
                    <Input
                        type={'radio'}
                    />
                    Sample radio
                </Label>
            </fieldset>
        )
    ]
};
/** Default legend */
export const Default = {
    render: (args: any) => <Container
        element={'legend'}
        {...args}
    >
        Legend contents
    </Container>,
};
/** Legend with style classes */
export const LegendWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Legend with additional attributes */
export const LegendWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Legend Label',
            'aria-placeholder': 'Legend Placeholder',
        },
    },
};
/** Legend with datasets */
export const LegendWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-legend-id'],
            ['name', 'Data Legend Name'],
        ]),
    },
};
