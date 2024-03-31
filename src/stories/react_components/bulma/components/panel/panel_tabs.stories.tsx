import {Container, DivProps, Icons, NavProps, PanelTabs, Paragraph, SpanProps} from "../../../../../frameworks/bulma";
import {Fragment} from "react";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Components/Panel/PanelTabs',
    component: PanelTabs,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'For navigation in the panel',
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
            description: 'Switcher for <code>PanelTabs</code> component to render this component',
            table: {
                type: {
                    summary: '"panel-tabs"',
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
                        'PProps', 'React Component/Element/Container/Block/Paragraph'
                        ),
            table: {
                type: {
                    summary: '"p"',
                },
            },
        },
        items: {
            control: 'object',
            type: {
                require: true,
            },
            description: deIndent(`
                            Items in panel tabs<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'PanelTabItemProps',
                        'React Component/Css Framework/Bulma/Components/Panel/PanelTabs/PanelTabItem'
                        ),
            table: {
                type: {
                    summary: 'PanelTabItemProps | PanelTabItemProps[]',
                },
            },
        },
    },
};
/** Default panel tabs */
export const Default = {
    render: (args: any) => <PanelTabs
        component={'panel-tabs'}
        element={'p'}
        items={{
            component: 'panel-tab-item',
            element: 'a',
            children: 'Panel Tab 1',
        }}
        {...args}
    />,
};
/** Multiple panel tabs */
export const MultiPanelTabs = {
    ...Default,
    args: {
        items: [{
            component: 'panel-tab-item',
            element: 'a',
            href: '#tab1',
            children: 'Panel Tab 1',
        }, {
            component: 'panel-tab-item',
            element: 'a',
            href: '#tab2',
            children: 'Panel Tab 2',
            isActive: true,
        }, {
            component: 'panel-tab-item',
            element: 'a',
            href: '#tab3',
            children: 'Panel Tab 3',
        }],
    },
};
