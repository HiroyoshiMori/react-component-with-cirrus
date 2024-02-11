import {
    Button,
    Container,
    Form,
    Input,
} from "../../../../components";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The generic search element',
    },
};
/** Default search */
export const Default = {
    render: (args: any) => <Container
        element={'search'}
        {...args}
    >
        <Form action={"#"}>
            <Input type={'search'} />
            <Button type={'submit'}>Search</Button>
        </Form>
    </Container>,
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
