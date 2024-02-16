import {Fragment} from "react";
import {
    Fieldset,
    RadioGroup,
} from "../../../components";
import {deIndent, linkInStoryBook} from "../../../utils";

/**
 * The &lt;fieldset&gt; HTML element is used to group several controls as well as labels(&lt;label&gt;)
 * within a web form.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
 */
export default {
    title: 'React Component/Element/Fieldset',
    component: Fieldset,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Field Set element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Fieldset</code> component to render &lt;fieldset&gt;',
            table: {
                type: {
                    summary: '"fieldset"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        id: {
            control: 'text',
            description: 'ID for element',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        caption: {
            control: 'object',
            description: deIndent(`
                            Provide a caption for the &lt;fieldset&gt;.<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'LegendProps', 'React Component/Element/Container/Legend'
                        ),
            table: {
                type: {
                    summary: 'LegendProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        children: {
            control: 'text',
            description: 'Content of component',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        disabled: {
            control: 'boolean',
            description: deIndent(`
                        All form controls that are descendants of the &lt;fieldset&gt;, are
                        disabled, meaning they are not editable and won't be submitted along with the &lt:form&gt;.
                    `),
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        form: {
            control: 'text',
            description: deIndent(`
                        Takes the value of the id attribute of a &lt;form&gt; element you want the &lt;fieldset&gt;
                        to be part of, even if it is not inside of the form.
                     `),
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        name: {
            control: 'text',
            description: 'The name associated with the group',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        classes: {
            control: 'object',
            description: 'Style classes',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, treated as []',
                },
            },
        },
        attributes: {
            control: 'object',
            description: 'Additional attributes',
            table: {
                type: {
                    summary: 'FieldsetHTMLAttributes<HTMLFieldSetElement>',
                    detail: deIndent(`
                            e.g.,
                            { 'aria-label': 'This is Label' }
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, treated as {}',
                },
            },
        },
        datasets: {
            control: 'object',
            description: 'Datasets. "data-" is added at the beginning of all keys',
            table: {
                type: {
                    summary: 'Map<string, string>',
                    detail: deIndent(`
                            e.g.,
                            new Map([
                                ['id', 'this-is-id'],
                                ['name', 'This is Name'],
                            ]);
                            => data-id="this-is-id" data-name="This is Name"
                        `),
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, treated as new Map()'
                },
            },
        },
    },
};
// Default fieldset
const DefaultFieldset = {
    element: 'fieldset',
};

/** Default fieldset */
export const Default = {
    render: (args: any) => <Fragment>
        <Fieldset
            {...DefaultFieldset}
            {...args}
        >
            <RadioGroup items={[
                {children: 'Radio 1', radio: {type: 'radio', name: 'radio_group', value: 'radio1'}},
                {children: 'Radio 2', radio: {type: 'radio', name: 'radio_group', value: 'radio2'}},
                {children: 'Radio 3', radio: {type: 'radio', name: 'radio_group', value: 'radio3'}},
                {children: 'Radio 4', radio: {type: 'radio', name: 'radio_group', value: 'radio4'}},
            ]} />
        </Fieldset>
    </Fragment>
};
/** Fieldset with caption */
export const FieldsetWithCaption = {
    ...Default,
    args: {
        caption: {
            element: 'legend',
            children: 'Fieldset Caption',
        },
    },
};
/** Fieldset with other attributes */
export const FieldsetWithOtherAttributes = {
    ...Default,
    args: {
        disabled: true,
        form: 'test-form',
        name: 'fieldset_name',
    },
};
/** Fieldset with style classes */
export const FieldsetWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Fieldset with additional attributes */
export const FieldsetWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Fieldset Label',
            'aria-placeholder': 'Fieldset Placeholder',
        },
    },
};
/** Fieldset with datasets */
export const FieldsetWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-fieldset-id'],
            ['name', 'Data Fieldset Name'],
        ]),
    },
};
