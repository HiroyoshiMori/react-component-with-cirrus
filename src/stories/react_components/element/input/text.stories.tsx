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
/** Default text */
export const Default = {
    render: (args: any) => <Input
        type={'text'}
        placeholder={'Please input text...'}
        onChange={action('text changed')}
        {...args}
    />,
};
/** Text with dir */
export const TextWithDir = {
    ...Default,
    args: {
        dir: 'ltr',
        dirName: 'text-dir',
    },
};
/** Text with datalist */
export const TextWithDatalist = {
    ...Default,
    args: {
        datalist: ['Test 1', 'Test 2', 'Test 3'],
    },
};
/** Text with list/datalist */
export const TextWithListAndDatalist = {
    ...Default,
    args: {
        list: 'text-list',
        datalist: ['TestList 1', 'TestList 2', 'TestList 3'],
    },
};
/** Text with min/max length */
export const TextWithMinMaxLength = {
    ...Default,
    args: {
        minLength: 3,
        maxLength: 20,
    },
};
/** Text with pattern */
export const TextWithPattern = {
    ...Default,
    args: {
        pattern: 'test-[0-9A-Za-z]+',
    },
};
/** Text readonly */
export const TextReadOnly = {
    ...Default,
    args: {
        defaultValue: 'Test Keyword',
        readOnly: true,
    },
};
/** Text required */
export const TextRequired = {
    ...Default,
    args: {
        required: true,
    },
};
/** Text with size */
export const TextWithSize = {
    ...Default,
    args: {
        size: 30,
    },
};
/** Text with style classes */
export const TextWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Text with additional attributes */
export const TextWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Text Label',
            'aria-placeholder': 'Text Placeholder',
        },
    },
};
/** Text with datasets */
export const TextWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-text-id'],
            ['name', 'Data Text Name'],
        ]),
    },
};
