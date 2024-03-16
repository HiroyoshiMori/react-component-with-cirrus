import {CardFooter, CardHeader, Container} from "../../../../../frameworks/bulma";
import {Fragment} from "react";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Component/Card/CardFooter',
    component: CardFooter,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A horizontal list of controls',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Container
                    element={'article'}
                    classes={['card']}
                >
                    <CardHeader
                        element={'header'}
                        classes={['card-header']}
                        title={{
                            element: 'p',
                            children: 'This sentence is within card header.',
                        }}
                    />
                    <Container
                        element={'div'}
                        classes={['card-content']}
                    >
                        This is sentence within card content.
                    </Container>
                    <Story />
                </Container>
            </Fragment>
        )
    ],
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>CardFooter</code> component to render this component',
            table: {
                type: {
                    summary: '"card-footer"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        element: {
            control: 'none',
            type: {
                required: true,
            },
            description: deIndent(`
                            Element type which is extended for this component<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'FooterProps', 'React Component/Element/Container/Block/Footer'
                        ),
            table: {
                type: {
                    summary: '"footer"',
                },
            },
        },
        items: {
            control: 'object',
            type: {
                required: true,
            },
            description: deIndent(`
                            A repeatable list item<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'AProps', 'React Component/Element/Container/Inline/Anchor'
                        )
                        + ' / '
                        + linkInStoryBook(
                        'PProps', 'React Component/Element/Container/Block/Paragphra'
                        ),
            table: {
                type: {
                    summary: '(AProps | PProps) | (AProps | PProps)[]',
                },
            },
        },
    },
};
/** Default card footer */
export const Default = {
    render: (args: any) => <CardFooter
        component={'card-footer'}
        element={'footer'}
        items={{
            element: 'a',
            children: 'Card footer item 1 anchor',
        }}
        {...args}
    />,
};
