import {
    Input,
} from "../../../../components";

export default {
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - search',
    },
};
/** Default search */
export const Default = {
    render: (args: any) => <Input
        type={'search'}
        placeholder={'Input search keyword...'}
        {...args}
    />,
};
/** Search with dir */
export const SearchWithDir = {
    ...Default,
    args: {
        dir: 'auto',
        dirname: 'test-dirname',
    },
};
/** Search with datalist */
export const SearchWithDatalist = {
    ...Default,
    args: {
        datalist: ['keyword 1', 'keyword 2', 'keyword 3'],
    },
};
/** Search with list and datalist */
export const SearchWithListAndDatalist = {
    ...Default,
    args: {
        list: 'search-list',
        datalist: ['Keyword 1', 'Keyword 2', 'Keyword 3'],
    },
};
/** Search with min/max length */
export const SearchWithMinMaxLength = {
    ...Default,
    args: {
        minLength: 3,
        maxLength: 30,
    },
};
/** Search with pattern */
export const SearchWithPattern = {
    ...Default,
    args: {
        pattern: '[0-9a-zA-Z]+',
    },
};
/** Search with readonly */
export const SearchWithReadonly = {
    ...Default,
    args: {
        defaultValue: 'Test Keyword',
        readOnly: true,
    },
};
/** Search with required */
export const SearchWithRequired = {
    ...Default,
    args: {
        required: true,
    },
};
/** Search with style classes */
export const SearchWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Search with additional attributes */
export const SearchWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Search Label',
            'aria-placeholder': 'Search Placeholder',
        },
    },
};
/** Search with datasets */
export const SearchWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-search-id'],
            ['name', 'Data Search Name'],
        ]),
    },
};
