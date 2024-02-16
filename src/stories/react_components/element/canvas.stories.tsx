import {
    Canvas,
} from "../../../components";
import {deIndent} from "../../../utils";

/**
 * Use the HTML &lt;canvas&gt; element with either the canvas scripting API or the WebGL API
 * to draw graphics and animations.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
 */
export default {
    title: 'React Component/Element/Canvas',
    component: Canvas,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Graphics Canvas element',
    },
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Canvas</code> component to render &lt;canvas&gt;',
            table: {
                type: {
                    summary: '"canvas"',
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
        width: {
            control: {type: 'number', min: 0},
            description: 'The width of the coordinate space in CSS pixels. Defaults to 300.',
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
            control: {type: 'number', min: 0},
            description: 'The height of the coordinate space in CSS pixels. Defaults to 150.',
            table: {
                type: {
                    summary: 'number',
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
                    summary: 'CanvasHTMLAttributes<HTMLCanvasElement>',
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
// Default canvas
const DefaultCanvas = {
    element: 'canvas',
    width: 120,
    height: 120,
};

/** Default canvas */
export const Default = {
    render: (args: any) => <Canvas
        {...DefaultCanvas}
        {...args}
    >
        An alternative text describing what canvas displays.
    </Canvas>,
};
/** Canvas with style classes */
export const CanvasWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Canvas with additional attributes */
export const CanvasWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Canvas Label',
            'aria-placeholder': 'Canvas Placeholder',
        },
    },
};
/** Canvas with datasets */
export const CanvasWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-canvas-id'],
            ['name', 'Data Canvas Name'],
        ]),
    },
};
