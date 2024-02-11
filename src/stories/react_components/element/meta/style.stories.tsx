import {Fragment} from "react";
import {Style} from "../../../../components";

export default {
    component: Style,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Style Information element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                There is style &#x1f449;
                <Story />
                &#x1f448; element.
            </Fragment>
        ),
    ],
};
/** Default style */
export const Default = {
    render: (args: any) => <Style
        element={'style'}
        scoped={true}
        {...args}
    >{`
        .test-class1 {
            font-size: 1rem;
        }
    `}</Style>,
};
/** Style with media query */
export const StyleWithMediaQuery = {
    ...Default,
    args: {
        mediaQuery: ['min-width: 600px', 'max-width: 1280px'],
    },
};
/** Style with title */
export const StyleWithTitle = {
    ...Default,
    args: {
        title: 'Style Sheet Test',
    },
};
/** Style with nonce */
export const StyleWithNonce = {
    ...Default,
    args: {
        nonce: 'TEST CSP TOKEN',
    },
};
/** Style with style classes */
export const StyleWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Style with additional attributes */
export const StyleWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Style Label',
            'aria-placeholder': 'Style Placeholder',
        },
    },
};
/** Style with datasets */
export const StyleWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-style-id'],
            ['name', 'Data Style Name'],
        ]),
    },
};
