import {
    Button,
    Container,
    Form,
    Input,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;search&gt; HTML element is a container representing the parts of the document or application
 * with form controls or other content related to performing a search or filtering operation. The
 * &lt;search&gt; element semantically identifies the purpose of the element's contents as having search or
 * filtering capabilities. The search or filtering functionality can be for the website or application, the
 * current web page or document, or the entire internet or subsection thereof.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search
 */
export default {
    title: 'React Component/Element/Container/Block/Search',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The generic search element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;search&gt;',
            table: {
                type: {
                    summary: '"search"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        id: {
            control: 'text',
            description: 'ID for element',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        children: {
            control: 'text',
            description: 'Content of component',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, treated as []',
                },
            },
        },
        attributes: {
            control: 'object',
            description: 'Additional attributes',
            table: {
                type: {
                    summary: 'HTMLAttributes<HTMLElement>',
                    detail: deIndent(`
                            e.g.,
                            { 'aria-label': 'This is Label' }
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, treated as {}',
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'Datasets. "data-" is added at the beginning of all keys',
            table: {
                type: {
                    summary: 'Map<string, string>',
                    detail: deIndent(`
                            e.g.,
                            new Map([
                                ['id', 'this-is-id'],
                                ['name', 'This is Name'],
                            ]);
                            => data-id="this-is-id" data-name="This is Name"
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, treated as new Map()'
                },
            },
        },
    },
};
/** Default search */
export const Default = {
    render: (args: any) => <Container
        element={'search'}
        {...args}
    >
        <Form element={'form'} action={"#"}>
            <Input element={'input'} type={'search'} />
            <Button element={'button'} type={'submit'}>Search</Button>
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
