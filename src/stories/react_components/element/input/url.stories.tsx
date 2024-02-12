import {action} from "@storybook/addon-actions";
import {
    Input,
} from "../../../../components";

export default {
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - text',
    },
};
/** Default URL */
export const Default = {
    render: (args: any) => <Input
        type={'url'}
        placeholder={'Please input URL...'}
        onChange={action('URL changed')}
        {...args}
    />,
};
/** URL with datalist */
export const UrlWithDatalist = {
    ...Default,
    args: {
        datalist: ['http://www1.example.com', 'http://www2.example.com'],
    },
};
/** URL with list and datalist */
export const UrlWithListAndDatalist = {
    ...Default,
    args: {
        list: 'url-id',
        datalist: ['http://www3,example.com', 'http://www4.example.com'],
    },
};
/** URL with min/max length */
export const UrlWithMinMaxLength = {
    ...Default,
    args: {
        minLength: 5,
        maxLength: 50,
    },
};
/** URL with pattern */
export const UrlWithPattern = {
    ...Default,
    args: {
        pattern: 'https?:\\/\\/.+',
    },
};
/** URL readonly */
export const UrlReadOnly = {
    ...Default,
    args: {
        defaultValue: 'http://www.example.com',
        readOnly: true,
    },
};
/** URL required */
export const UrlRequired = {
    ...Default,
    args: {
        required: true,
    },
};
/** URL with style classes */
export const UrlWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** URL with additional attributes */
export const UrlWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'URL Label',
            'aria-placeholder': 'URL Placeholder',
        },
    },
};
/** URL with datasets */
export const UrlWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-url-id'],
            ['name', 'Data URL Name'],
        ]),
    },
};
