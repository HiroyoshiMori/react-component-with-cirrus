import {CardHeader, CardImage, Container} from "../../../../../frameworks/bulma";
// @ts-ignore
import ExampleImage from '../../../../assets/file_example_PNG_500kB.png';
import {Fragment} from "react";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Component/Card/CardImage',
    component: CardImage,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A fullwidth container for a responsive image',
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
                    <Story />
                    <Container
                        element={'div'}
                        classes={['card-content']}
                    >
                        This is sentence within card content.
                    </Container>
                </Container>
            </Fragment>
        )
    ],
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>CardImage</code> component to render this component',
            table: {
                type: {
                    summary: '"card-image"',
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
                        'DivProps', 'React Component/Element/Container/Block/Div'
                        ),
            table: {
                type: {
                    summary: '"div"',
                },
            },
        },
        image: {
            control: 'object',
            type: {
                required: true,
            },
            description: deIndent(`
                            Image in this component<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'ImgProps', 'React Component/Element/Media/Img'
                        ),
            table: {
                type: {
                    summary: 'ImgProps',
                },
            }
        }
    },
};
/** Default card image */
export const Default = {
    render: (args: any) => <CardImage
        component={'card-image'}
        element={'div'}
        image={{
            element: 'img',
            src: ExampleImage,
        }}
        {...args}
    />,
};
