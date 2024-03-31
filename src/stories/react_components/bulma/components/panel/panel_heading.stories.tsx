import {Fragment} from "react";
import {Container, DivProps, Icons, NavProps, PanelHeading, SpanProps} from "../../../../../frameworks/bulma";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Components/Panel/PanelHeading',
    component: PanelHeading,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Title as the first child of panel',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <Container<NavProps>
                    element={'nav'}
                    classes={['panel']}
                >
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
            description: 'Switcher for <code>PanelHeading</code> component to render this component',
            table: {
                type: {
                    summary: '"panel-heading"',
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
    },
};
/** Default panel heading */
export const Default = {
    render: (args: any) => <PanelHeading
        component={'panel-heading'}
        element={'p'}
        {...args}
    >
        This is sentence within panel heading
    </PanelHeading>,
};
