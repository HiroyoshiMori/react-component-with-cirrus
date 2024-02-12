import {
    Canvas,
} from "../../../components";

export default {
    component: Canvas,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Graphics Canvas element',
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
