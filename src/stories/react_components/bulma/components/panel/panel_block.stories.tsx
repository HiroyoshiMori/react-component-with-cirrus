import {Fragment} from "react";
import {Container, NavProps, PanelBlock, Paragraph} from "../../../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../../../utils";

export default {
    title: 'React Component/CSS Framework/Bulma/Components/Panel/PanelBlock',
    component: PanelBlock,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'Elements in the panel',
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
        component: {
            control: 'none',
            description: 'Switcher for <code>PanelBlock</code> component to render this component',
            table: {
                type: {
                    summary: '"panel-block"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        element: {
            control: 'select',
            options: ['div', 'a', 'label'],
            type: {
                required: true,
            },
            description: deIndent(`
                            Element type which is extended for this component<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'DivProps', 'React Component/Element/Container/Block/Div'
                        )
                        + ' / '
                        + linkInStoryBook(
                        'AProps', 'React Component/Element/Container/Inline/Anchor'
                        )
                        + ' / '
                        + linkInStoryBook(
                        'LabelledCheckboxProps', 'React Component/Layout/LabelledCheckbox'
                        ),
            table: {
                type: {
                    summary: '"div" | "a" | "label"',
                },
            },
        },
        children: {
            control: 'text',
            description: 'Content of panel block',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        icon: {
            control: 'object',
            if: {arg: 'element', eq: 'a'},
            description: deIndent(`
                            Icon placed before content<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'IconsProps', 'React Component/Element/Icons'
                        ),
            table: {
                type: {
                    summary: 'IconsProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        checkbox: {
            control: 'object',
            if: {arg: 'element', eq: 'label'},
            type: {
                require: true,
            },
            description: deIndent(`
                            Properties for checkbox placed before content<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'CheckboxProps', 'React Component/Element/Input/Checkbox'
                        ),
            table: {
                type: {
                    summary: 'CheckboxProps',
                },
            },
        },
        currentValues: {
            control: 'object',
            if: {arg: 'element', eq: 'label'},
            description: 'Current values checked for checkbox',
            table: {
                type: {
                    summary: '(string|number|boolean)[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        noDefaultClass: {
            control: 'boolean',
            if: {arg: 'element', eq: 'label'},
            description: 'Indicate to add default checkbox class or not',
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
/** Panel block */
export const Default = {
    render: (args: any) => <PanelBlock
        component={'panel-block'}
        element={'div'}
        {...args}
    >
        This is sentence within panel block.
    </PanelBlock>,
};
/** Block with Anchor */
export const BlockWithAnchor = {
    render: (args: any) => <PanelBlock
        component={'panel-block'}
        element={'a'}
        {...args}
    >
        This is sentence within panel block with anchor.
    </PanelBlock>,
};
/** Block with labelled checkbox */
export const BlockWithLabelledCheckbox = {
    ...Default,
    args: {
        element: 'label',
        children: 'This is labelled checkbox.',
        checkbox: {
            element: 'input',
            type: 'checkbox',
            value: 'labelled checkbox',
        },
    },
};

