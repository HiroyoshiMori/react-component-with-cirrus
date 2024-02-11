import {Fragment} from "react";
import {
    Anchor,
    Container,
    Figure,
} from "../../../../components";

export default {
    component: Container,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Block Quotation element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Figure>
                    <Story />
                    <Container
                        element={'cite'}
                        inline={true}
                    >
                        <Anchor
                            href={'https://en.wiktionary.org/wiki/%E7%82%BA%E3%81%9B%E3%81%B0%E6%88%90%E3%82%8B'}
                            target={'cite-window'}
                        >Waka</Anchor>,
                        a genre of Japanese poetry,
                    </Container>
                    read by&nbsp;
                    <Anchor
                        href={'https://en.wikipedia.org/wiki/Uesugi_Harunori'}
                        target={'cite-window'}
                    >
                        Youzan Uesugi
                    </Anchor>
                </Figure>
            </Fragment>
        ),
    ],
};
// Default blockquote
const DefaultBlockQuote = {
    element: 'blockquote',
    inline: false,
};
/** Default blockquote */
export const Default = {
    render: (args: any) => <Container
        {...DefaultBlockQuote}
        {...args}
    >
        為せば成る　為さねば成らぬ　何事も　成らぬは人の為さぬなりけり<br />
        If you do something, it will happen. If you don't do something, it will not happen.<br />
        If something doesn't happen, it's because it's not for people.
    </Container>,
};
/** Blockquote with style classes */
export const BlockQuoteWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Blockquote with additional attributes */
export const BlockquoteWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Block Quote Label',
            'aria-placeholder': 'Block Quote Placeholder',
        },
    },
};
/** Blockquote with datasets */
export const BlockquoteWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-blockquote-id'],
            ['name', 'Data Blockquote Name'],
        ]),
    },
};
