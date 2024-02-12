import {Fragment} from "react";
import {Container} from "../../../../components";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Content Template element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                There is template &#x1f449;
                <Story />
                &#x1f448; element.
            </Fragment>
        ),
    ],
};
/** Default template */
export const Default = {
    render: (args: any) => <Container
        element={'template'}
        {...args}
    >
        This content would be used by Javascript code.
    </Container>
};
/** Template with shadowrootmode */
export const TemplateWithShadowRootMode = {
    ...Default,
    args: {
        shadowRootMode: 'open',
    },
};
/** Template with style classes */
export const TemplateWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Template with additional attributes */
export const TemplateWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Template Label',
            'aria-placeholder': 'Template Placeholder',
        },
    },
};
/** Template with datasets */
export const TemplateWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-template-id'],
            ['name', 'Data Template Name'],
        ]),
    },
};
