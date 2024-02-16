import {action} from "@storybook/addon-actions";
import {
    FORM_ENCTYPES, FORM_METHODS,
    Input, TARGETS,
} from "../../../../components";
// @ts-ignore
import ExampleImage from '../../../assets/context.png';
import {deIndent} from "../../../../utils";

/**
 * &lt;input&gt; elements of type <code>image</code> are used to create graphical submit buttons, i.e., submit buttons
 * that take the form of an image rather than text.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/image
 */
export default {
    title: 'React Component/Element/Input/Image',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Input (Form Input) element - image',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Input</code> component to render &lt;input&gt;',
            table: {
                type: {
                    summary: '"input"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        type: {
            control: 'none',
            type: {
                required: true,
            },
            description: 'Switcher for <code>Input</code> component to render image',
            table: {
                type: {
                    summary: '"image"',
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
        src: {
            control: 'text',
            description: 'Specifies the URL of the image file to display to represent the graphical submit button',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        alt: {
            control: 'text',
            description: 'Provides an alternate string to use as the button\'s label if the image cannot be shown',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        onClick: {
            action: 'clicked',
            description: 'Function called when clicked',
            table: {
                type: {
                    summary: 'function',
                    detail: '(e: React.MouseEvent<HTMLInputElement>) => void',
                },
            },
        },
        width: {
            control: {type: 'number', min: 1},
            description: 'Specifies the width at which to draw the image, in CSS pixels',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        height: {
            control: {type: 'number', min: 1},
            description: 'Specifies the height, in CSS pixels, at which to draw the image specified by the '
                        + 'src attribute',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        formAction: {
            control: 'text',
            description: 'Indicating the URL to which to submit the data',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        formEncType: {
            control: 'select',
            options: ['Default'].concat(FORM_ENCTYPES),
            mapping: {
                Default: undefined,
            },
            description: 'Identifies the encoding method to use when submitting the form data to '
                        + 'the server',
            table: {
                type: {
                    summary: '"' + FORM_ENCTYPES.join('"|"') + '"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        formMethod: {
            control: 'select',
            options: ['Default'].concat(FORM_METHODS),
            mapping: {
                Default: undefined,
            },
            description: 'Indicating the HTTP method to use when submitting the form\'s data;',
            table: {
                type: {
                    summary: '"' + FORM_METHODS.join('"|"') + '"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        formNoValidate: {
            control: 'boolean',
            description: 'Specifies that the form should not be validated before submission to the server',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        formTarget: {
            control: 'select',
            options: ['Default', 'others'].concat(TARGETS),
            mapping: {
                Default: undefined,
            },
            description: 'Specifies a name or keyword that indicates where to display the response received '
                        + 'after submitting the form',
            table: {
                type: {
                    summary: '"' + TARGETS.join('"|"') + '"|string',
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
                    summary: 'InputHTMLAttributes<HTMLInputElement>',
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
/** Default image */
export const Default = {
    render: (args: any) => <Input
        type={'image'}
        src={ExampleImage}
        alt={'Submit Image'}
        onClick={action('clicked')}
        {...args}
    />,
};
/** Image with width/height */
export const ImageWithWidthHeight = {
    ...Default,
    args: {
        width: 145,
        height: 65,
    },
};
/** Image with other attributes */
export const ImageWithOtherAttributes = {
    ...Default,
    args: {
        formAction: '#',
        formEncType: 'multipart/form-data',
        formMethod: 'get',
        formNoValidate: true,
        formTarget: '_self',
    },
};
/** Image with style classes */
export const ImageWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Image with additional attributes */
export const ImageWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Image Label',
            'aria-placeholder': 'Image Placeholder',
        },
    },
};
/** Image with datasets */
export const ImageWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-image-id'],
            ['name', 'Data Image Name'],
        ]),
    },
};
