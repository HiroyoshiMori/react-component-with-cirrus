import {Fragment} from "react";
import {
    Container,
    NavProps,
    PanelContents,
    Paragraph,
} from "../../../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Components/Panel/PanelContents',
    component: PanelContents,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'For navigation and contents',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Container<NavProps>
                    element={'nav'}
                    classes={['panel']}
                >
                    <Paragraph
                        element={'p'}
                        classes={['panel-heading']}
                    >
                        This sentence is within panel heading.
                    </Paragraph>
                    <Story />
                </Container>
            </Fragment>
        ),
    ],
    argTypes: {
        items: {
            control: 'object',
            type: {
                require: true,
            },
            description: deIndent(`
                            Contents of panel.<br />
                            PanelTabsProps for navigation.<br />
                            PanelBlockProps to contain other elements.<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'PanelBlockProps',
                        'React Component/Css Framework/Bulma/Components/Panel/PanelBlock'
                        )
                        + ' / '
                        + linkInStoryBook(
                        'PanelTabsProps',
                        'React Component/Css Framework/Bulma/Components/Panel/PanelTabs'
                        ),
            table: {
                type: {
                    summary: '(PanelBlockProps | PanelTabsProps) '
                            + '| (PanelBlockProps | PanelTabsProps)[]',
                },
            },
        },
    },
};
/** Default panel contents */
export const Default = {
    render: (args: any) => <PanelContents
        items={{
            component: 'panel-block',
            element: 'div',
            children: 'Panel Block 1'
        }}
        {...args}
    />,
};
