import {
    Iframe,
} from "../../../components";

export default {
    component: Iframe,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Inline Frame element',
    },
};
// default iframe src
const srcUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6481.436048626816!2d139.74770396857255!3d35.68394448988785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c0b19763daf%3A0xd8f25ad45d307110!2z44CSMTAwLTAwMDE!5e0!3m2!1sja!2sjp!4v1706964577391!5m2!1sja!2sjp';

/** Default iframe */
export const Default = {
    render: (args: any) => <Iframe
        title={'iframe example'}
        src={srcUrl}
        width={600}
        height={450}
        {...args}
    />,
};
/** iframe with other attributes */
export const IframeWithOtherAttributes = {
    ...Default,
    args: {
        allow: '*',
        allowFullScreen: true,
        loading: 'lazy',
        name: 'iframe_example',
        referrerPolicy: 'origin',
        sandbox: 'allow-same-origin',
        srcDoc: 'This is srcDoc content which overrides src attribute. Do you see this sentence?',
    },
};
/** iframe with style classes */
export const IframeWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** iframe with additional attributes */
export const IframeWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Iframe Label',
            'aria-placeholder': 'Iframe Placeholder',
        },
    },
};
/** iframe with datasets */
export const IframeWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-iframe-id'],
            ['name', 'Data iframe Name'],
        ]),
    },
};
