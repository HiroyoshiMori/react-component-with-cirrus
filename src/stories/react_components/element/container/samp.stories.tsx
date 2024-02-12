import {Fragment} from "react";
import {
    Container,
} from "../../../../components";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Sample Output element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <p>Here is sample Kanji:</p>
                <Story />
            </Fragment>
        )
    ]
};
/** Default sample output */
export const Default = {
    render: (args: any) => <Container
        element={'samp'}
        {...args}
    >
        日本
    </Container>
};
/** Sample output with style classes */
export const SampleOutputWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Sample output with additional attributes */
export const SampleOutputWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Sample Output Label',
            'aria-placeholder': 'Sample Output Placeholder',
        },
    },
};
/** Sample output with datasets */
export const SampleOutputWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-samp-id'],
            ['name', 'Data Sample Output Name'],
        ]),
    },
};
