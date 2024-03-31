import {
    AProps,
    Container,
    DivProps,
    Icons,
    NavProps,
    PanelTabItem,
    Paragraph,
    SpanProps
} from "../../../../../frameworks/bulma";
import {Fragment} from "react";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Components/Panel/PanelTabs/PanelTabItem',
    component: PanelTabItem,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Panel tab item of panel',
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
                    <Paragraph
                        element={'p'}
                        classes={['panel-tabs']}
                    >
                        <Story />
                        <Container<AProps>
                            element={'a'}
                        >Tab 2</Container>
                        <Container<AProps>
                            element={'a'}
                        >Tab 3</Container>
                        <Container<AProps>
                            element={'a'}
                        >Tab 4</Container>
                    </Paragraph>
                    <Container<DivProps>
                        element={'div'}
                        classes={['panel-block']}
                    >
                        <Container<SpanProps>
                            element={'span'}
                            classes={['panel-icon']}
                        >
                            <Icons icon={icon({name: 'envelope'})} />
                        </Container>
                        Block1
                    </Container>
                </Container>
            </Fragment>
        ),
    ],
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>PanelTabItem</code> component to render this component',
            table: {
                type: {
                    summary: '"panel-tab-item"',
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
                        'AProps', 'React Component/Element/Container/Inline/Anchor'
                        ),
            table: {
                type: {
                    summary: '"a"',
                },
            },
        },
        children: {
            control: 'text',
            description: 'Content of panel tab item',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        isActive: {
            control: 'boolean',
            description: 'Indicate panel tab item is active',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
    },
};
/** Default panel tab item */
export const Default = {
    render: (args: any) => <PanelTabItem
        component={'panel-tab-item'}
        element={'a'}
        {...args}
    >
        Tab 1
    </PanelTabItem>,
};
/** Panel tab item with is-active */
export const ActivePanelTabItem = {
    ...Default,
    args: {
        isActive: true,
    },
};
