import {Fragment} from "react";
import {Container} from "../../../../components";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Embed Text Track element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <video controls src={'/assets/file_example_WEBM_480_900KB.webm'}>
                    <Story />
                </video>
            </Fragment>
        ),
    ],
};
/** Default track */
export const Default = {
    render: (args: any) => <Container
        element={'track'}
        src={'/assets/test.vtt'}
        {...args}
    />,
};
/** Track with default */
export const TrackWithDefault = {
    ...Default,
    args: {
        default: true,
    },
};
/** Track with kind */
export const TrackWithKind = {
    ...Default,
    args: {
        kind: 'captions',
    },
};
/** Track with label/srcLang */
export const TrackWithLabelAndSrcLang = {
    ...Default,
    args: {
        label: 'Test Track',
        srcLang: 'en',
    },
};
/** Track with style classes */
export const TrackWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Track with additional attributes */
export const TrackWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Track Label',
            'aria-placeholder': 'Track Placeholder',
        },
    },
};
/** Track with datasets */
export const TrackWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-track-id'],
            ['name', 'Data Track Name'],
        ]),
    },
};
