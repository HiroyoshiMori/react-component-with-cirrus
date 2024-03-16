import {
    Fragment,
} from "react";
import {
    Container,
    Figure,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;cite&gt; HTML element is used to mark up the title of a cited creative work. The reference may
 * be in an abbreviated form according to context-appropriate conventions related to citation metadata.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/cite
 */
export default {
    title: 'React Component/Element/Container/Inline/Cite',
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Citation element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Figure element={'figure'}>
                    <Container
                        element={'blockquote'}
                    >
                        為せば成る　為さねば成らぬ　何事も　成らぬは人の為さぬなりけり<br />
                        If you do something, it will happen. If you don't do something, it will not happen.<br />
                        If something doesn't happen, it's because it's not for people.
                    </Container>
                    <Story />
                    read by&nbsp;
                    <Container
                        element={'a'}
                        href={'https://en.wikipedia.org/wiki/Uesugi_Harunori'}
                        target={'cite-window'}
                    >
                        Youzan Uesugi
                    </Container>
                </Figure>
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Container</code> component to render &lt;cite&gt;',
            table: {
                type: {
                    summary: '"cite"',
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
// Default cite
const DefaultCite = {
    element: 'cite',
};

/** Default cite */
export const Default = {
    render: (args: any) => <Container
        {...DefaultCite}
        {...args}
    >
        <Container
            element={'a'}
            href={'https://en.wiktionary.org/wiki/%E7%82%BA%E3%81%9B%E3%81%B0%E6%88%90%E3%82%8B'}
            target={'cite-window'}
        >Waka</Container>,
        a genre of Japanese poetry,
    </Container>,
};
/** Cite with style classes */
export const CiteWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Cite with additional attributes */
export const CiteWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Cite Label',
            'aria-placeholder': 'Cite Placeholder',
        },
    },
};
/** Cite with datasets */
export const CiteWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-cite-id'],
            ['name', 'Data Cite Name'],
        ]),
    },
};
