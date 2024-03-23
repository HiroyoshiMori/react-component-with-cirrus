import {Card} from "../../../../frameworks/bulma";
// @ts-ignore
import ExampleImage from '../../../assets/file_example_PNG_500kB.png';
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The card component comprises several elements that you can mix and match:
 *
 * - <code>card</code>: The main container
 * - <code>card-header</code>:
 *   - <code>card-header-title</code>: A left-aligned bold text
 *     - <code>card-header-icon</code>: A placeholder for an icon
 *   - <code>card-image</code>: A fullwidth container for a responsive image
 *   - <code>card-content</code>: A multi-purpose container for any other element
 *   - <code>card-footer</code>: A horizontal list of controls
 *     - <code>card-footer-item</code>: A repeatable list item
 *
 * You can center the card-header-title by appending the is-centered modifier.
 *
 * See: https://bulma.io/documentation/components/card/
 */
export default {
    title: 'React Component/CSS Framework/Bulma/Component/Card',
    component: Card,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A all-around flexible and composable component',
    },
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>Card</code> component to render this component',
            table: {
                type: {
                    summary: '"card"',
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
                            'ArticleProps', 'React Component/Element/Container/Block/Article'
                        ),
            table: {
                type: {
                    summary: '"article"',
                },
            },
        },
        header: {
            control: 'object',
            description: deIndent(`
                            Header part of card component<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'CardHeaderProps',
                        'React Component/Css Framework/Bulma/Component/Card/CardHeader'
                        ),
            table: {
                type: {
                    summary: 'CardHeaderProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        image: {
            control: 'object',
            description: deIndent(`
                            Image container in this component<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'CardImageProps',
                        'React Component/Css Framework/Bulma/Component/Card/CardImage'
                        ),
            table: {
                type: {
                    summary: 'CardImageProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        content: {
            object: 'text',
            description: 'Content of card component',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        footer: {
            control: 'object',
            description: deIndent(`
                            Horizontal list of items as card footer<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'CardFooterProps',
                        'React Component/Css Framework/Bulma/Component/Card/CardFooter'
                        ),
            table: {
                type: {
                    summary: 'CardFooterProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
    },
};
/** Default card */
export const Default = {
    render: (args: any) => <Card
        component={'card'}
        element={'article'}
        content={'This is content within a card.'}
        {...args}
    />,
};
/** Card with header */
export const CardWithHeader = {
    ...Default,
    args: {
        header: {
            component: 'card-header',
            element: 'header',
            title: {children: 'This is title within card header'},
            button: {}
        }
    },
};
/** Card with image */
export const CardWithImage = {
    ...Default,
    args: {
        image: {
            component: 'card-image',
            element: 'div',
            image: {
                element: 'img',
                src: ExampleImage,
            },
        },
    },
};
/** Card with footer of 1 anchor */
export const CardWithFooterOf1A = {
    ...Default,
    args: {
        footer: {
            component: 'card-footer',
            element: 'footer',
            items: {
                element: 'a',
                children: 'Card footer item 1 anchor',
            },
        },
    },
};
/** Card with footer of 1 paragraph */
export const CardWithFooterOf1P = {
    ...Default,
    args: {
        footer: {
            component: 'card-footer',
            element: 'footer',
            items: {
                element: 'p',
                children: 'Card footer item 1 paragraph',
            },
        },
    },
};
/** Card with footer of multiple items */
export const CardWithFooterOfMultiple = {
    ...Default,
    args: {
        footer: {
            component: 'card-footer',
            element: 'footer',
            items: [
                { element: 'p', children: 'Card footer item 1 paragraph'},
                { element: 'a', children: 'Card footer item 2 anchor'},
                { element: 'a', children: 'Card footer item 3 anchor'},
                { element: 'p', children: 'Card footer item 4 paragraph'},
            ],
        },
    },
};
