import {Card} from "../../../frameworks/bulma";
// @ts-ignore
import ExampleImage from '../../assets/file_example_PNG_500kB.png';

export default {
    component: Card,
    tags: ['autodocs'],
};
/** Default card */
export const Default = {
    render: (args: any) => <Card
        content={'This is content within a card.'}
        {...args}
    />,
};
/** Card with header */
export const CardWithHeader = {
    ...Default,
    args: {
        header: {
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
            items: [
                { element: 'p', children: 'Card footer item 1 paragraph'},
                { element: 'a', children: 'Card footer item 2 anchor'},
                { element: 'a', children: 'Card footer item 3 anchor'},
                { element: 'p', children: 'Card footer item 4 paragraph'},
            ],
        },
    },
};
