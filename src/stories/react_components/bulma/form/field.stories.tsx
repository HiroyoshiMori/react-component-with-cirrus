import {
    ALIGNMENTS,
    Button,
    ELEMENT_SIZES,
    FormField,
    FormSelect, LabelledCheckbox, LabelledRadio,
} from "../../../../frameworks/bulma";
import {Input} from "../../../../components";
import {deIndent, linkInStoryBook} from "../../../../utils";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";

export default {
    title: 'React Component/CSS Framework/Bulma/Form/FormField',
    component: FormField,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A container to combining several controls',
    },
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>FormField</code> component to render &lt;form field&gt;',
            table: {
                type: {
                    summary: '"form-field"',
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
            description: 'Element type which is used for this component',
            table: {
                type: {
                    summary: '"div"',
                },
            },
        },
        isGrouped: {
            control: 'boolean',
            description: 'Group controls together',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        groupedMultiline: {
            control: 'boolean',
            description: 'Allow controls to fill up multiple lines in the control group',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        hasAddon: {
            control: 'boolean',
            description: 'Attach controls together',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        position: {
            control: 'select',
            options: ['Default'].concat(ALIGNMENTS),
            mapping: {
                Default: undefined,
            },
            description: 'Alignment of the control group',
            table: {
                type: {
                    summary: '"' + ALIGNMENTS.join('"|"') + '"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        label: {
            control: 'object',
            description: deIndent(`
                            Label for control<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                            'LabelProps', 'React Component/Element/Label'
                        ),
            table: {
                type: {
                    summary: 'LabelProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        elementSize: {
            control: 'select',
            options: ['Default'].concat(ELEMENT_SIZES),
            mapping: {
                Default: undefined,
            },
            description: 'Element size in field. Only supported if items children is type of ElementBaseProps',
            table: {
                type: {
                    summary: '"' + ELEMENT_SIZES.join('"|"') + '"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        items: {
            control: 'object',
            description: 'Form control',
            table: {
                type: {
                    summary: 'FormControlProps | FormControlProps[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
    },
};
/** Default form field */
export const Default = {
    render: (args: any) => <FormField
        component={'form-field'}
        element={'div'}
        label={{
            element: 'label',
            children: 'This is Label',
        }}
        items={{
            component: 'form-control',
            element: 'div',
            children: {
                element: 'input',
                type: 'text'
            },
            leftIcon: {
                icon: icon({name: 'envelope'}),
            },
        }}
        {...args}
    />,
};
/** Field with element size */
export const FieldWithElementSize = {
    ...Default,
    args: {
        elementSize: 'large',
    },
};
/** Grouped field */
export const GroupedField = {
    ...Default,
    args: {
        isGrouped: true,
        label: undefined,
        items: [
            {
                component: 'form-control',
                element: 'div',
                children: <Button
                    element={'button'}
                >
                    Submit
                </Button>,
            },
            {
                component: 'form-control',
                element: 'div',
                children: <Button
                    element={'button'}
                >
                    Cancel
                </Button>,
            },
        ],
    },
};
/** Grouped field with position */
export const GroupedFieldWithPosition = {
    ...Default,
    args: {
        isGrouped: true,
        label: undefined,
        items: [
            {
                component: 'form-control',
                element: 'div',
                children: <Button
                    element={'button'}
                >
                    Submit
                </Button>,
            },
            {
                component: 'form-control',
                element: 'div',
                children: <Button
                    element={'button'}
                >
                    Cancel
                </Button>,
            },
        ],
        position: 'centered',
    },
};
/** Add-on field */
export const AddonField = {
    ...Default,
    args: {
        hasAddon: true,
        label: undefined,
        items: [
            {
                component: 'form-control',
                element: 'div',
                children: <Input
                    element={'input'}
                    type={'text'}
                />,
            },
            {
                component: 'form-control',
                element: 'div',
                children: <Button
                    element={'button'}
                >
                    Search
                </Button>,
            },
        ],
    },
};
/** Add-on field with position */
export const AddonFieldWithPosition = {
    ...Default,
    args: {
        hasAddon: true,
        label: undefined,
        items: [
            {
                component: 'form-control',
                element: 'div',
                children: <Input
                    element={'input'}
                    type={'text'}
                />,
            },
            {
                component: 'form-control',
                element: 'div',
                children: <Button
                    element={'button'}
                >
                    Search
                </Button>,
            },
        ],
        position: 'right',
    },
};
/** Form with select with icon (FormSelect for Bulma) */
export const FormWithFormSelectWithIcon = {
    ...Default,
    args: {
        label: {
            element: 'label',
            children: 'Form Select',
        },
        items: [
            {
                component: 'form-control',
                element: 'div',
                children: <FormSelect
                    component={'form-select'}
                    element={'div'}
                    select={{
                        element: 'select',
                        options: [
                            {element: 'option', children: '---- Select ----', value: ''},
                            {element: 'option', children: 'Option 1'},
                            {element: 'option', children: 'Option 2'},
                            {element: 'option', children: 'Option 3'},
                        ],
                    }}
                />,
                leftIcon: {
                    icon: icon({name: 'envelope'}),
                },
            },
        ],
    },
};
/** Labelled checkbox */
export const FieldWithLabelledCheckbox = {
    ...Default,
    args: {
        items: [
            {
                component: 'form-control',
                element: 'div',
                children: <LabelledCheckbox
                    element={'label'}
                    children={'Checkbox Label'}
                    checkbox={{
                        element: 'input',
                        type: 'checkbox',
                        value: 'Checkbox value 1',
                    }}
                />,
            },
        ],
    },
};
/** Labelled radio */
export const FieldWithLabelledRadio = {
    ...Default,
    args: {
        items: [
            {
                component: 'form-control',
                element: 'div',
                children: <LabelledRadio
                    element={'label'}
                    children={'Radio Label'}
                    radio={{
                        element: 'input',
                        type: 'radio',
                        value: 'Radio value 1',
                    }}
                />,
            },
        ],
    },
};
