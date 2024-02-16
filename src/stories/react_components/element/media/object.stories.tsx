import {
    Media,
} from "../../../../components";
import {deIndent} from "../../../../utils";
// @ts-ignore
import ExampleImage from '../../../assets/file_example_PNG_500kB.png';

/**
 * The &lt;object&gt; HTML element represent an external resource, which can be
 * treated as an image, a nexted browsing context, or a resource to be handled by a plugin.<br>
 * Credits: Media files are Copyright file-examples.com | https://file-examples.com/
 */
export default {
    title: 'React Component/Element/Media/Object',
    component: Media,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The External Object element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Media</code> component to render &lt;object&gt;',
            table: {
                type: {
                    summary: '"object"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        name: {
            control: 'text',
            description: 'Specifies the name of valid browsing context (HTML5), or the name of the control (HTML4)',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        data: {
            control: 'text',
            type: {
                required: true,
            },
            description: 'Specifies the address of the resource as a valid URL',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        type: {
            control: 'text',
            type: {
                required: true,
            },
            description: 'Specifies the content type of the resource specified by <code>data</code>',
            table: {
                type: {
                    summary: 'string',
                },
            },
        },
        children: {
            control: 'text',
            description: 'Content of the object',
            table: {
                type: {
                    summary: 'ReactNode',
                },
            },
        },
        form: {
            control: 'text',
            description: 'Specifies the form name which this element is associated with (its form owner)',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        width: {
            control: {type: 'number', min: 1},
            description: 'Specifies the width of the display resource, in CSS pixels',
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
            description: 'Specifies the height of the display resource, in CSS pixels',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        useMap: {
            control: 'text',
            description: 'Specifies a hash-name reference to a &lt;map&gt;',
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
                    summary: 'ObjectHTMLAttributes<HTMLObjectElement>',
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
// Default object
const DefaultObject = {
    element: 'object',
    data: ExampleImage,
    type: 'image/png',
};

/** Default object */
export const Default = {
    render: (args: any) => <Media
        {...DefaultObject}
        {...args}
    />,
};
/** Object with ID */
export const ObjectWithID = {
    ...Default,
    args: {
        id: 'object-id',
    },
};
/** Object with children node */
export const ObjectWithChildren = {
    render: (args: any) => <Media
        {...DefaultObject}
        {...args}
    >
        This is children for Object
    </Media>,
};
/** Object with other attributes */
export const ObjectWithOtherAttributes = {
    ...Default,
    args: {
        form: 'test-form',
        width: 850,
        height: 566,
        useMap: '',
    },
};
/** Object with style classes */
export const ObjectWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Object with additional attributes */
export const ObjectWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Object Label',
            'aria-placeholder': 'Object Placeholder',
        },
    },
};
/** Object with datasets */
export const ObjectWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'object-data-id'],
            ['name', 'Object Data Name'],
        ]),
    },
};
