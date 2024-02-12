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
        componentSubtitle: 'The Citation element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Figure>
                    <Container
                        element={'blockquote'}
                    >
                        為せば成る　為さねば成らぬ　何事も　成らぬは人の為さぬなりけり<br />
                        If you do something, it will happen. If you don't do something, it will not happen.<br />
                        If something doesn't happen, it's because it's not for people.
                    </Container>
                    <Story />
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
// Default cite
const DefaultCite = {
    element: 'cite',
    inline: true,
};

/** Default cite */
export const Default = {
    render: (args: any) => <Container
        {...DefaultCite}
        {...args}
    >
        <Anchor
            href={'https://en.wiktionary.org/wiki/%E7%82%BA%E3%81%9B%E3%81%B0%E6%88%90%E3%82%8B'}
            target={'cite-window'}
        >Waka</Anchor>,
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
