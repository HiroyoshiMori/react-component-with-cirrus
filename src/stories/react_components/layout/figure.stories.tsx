import {
    Figure,
    Media,
} from "../../../components";
// @ts-ignore
import ExampleImage from "../../assets/file_example_PNG_500kB.png";

/**
 *
 */
export default {
    title: 'React Component/Element/Layout/Figure',
    component: Figure,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Image Embed element',
    },
};
// Default Figure
const DefaultFigure = {}
// Figure with caption
const figureWithCaption = {
    label: 'Figure Caption',
}
/** Default figure */
export const Default = {
    render: (args: any) => <Figure
        {...DefaultFigure}
        {...args}
    >
        <Media element={'img'} src={ExampleImage} />
    </Figure>,
};
/** Figure with label first */
export const FigureWithLabelFirst = {
    ...Default,
    args: {
        ...figureWithCaption,
    },
};
/** Figure with label last */
export const FigureWithLabelLast = {
    ...Default,
    args: {
        ...figureWithCaption,
        labelPosition: 'last',
    },
};
/** Figure with style classes */
export const FigureWithStyleClasses = {
    ...Default,
    args: {
        ...figureWithCaption,
        classes: {
            figure: ['test-figure1', 'test-figure'],
            caption: ['test-caption1', 'test-caption2'],
        },
    },
};
/** Figure with additional attributes */
export const FigureWithAdditionalAttributes = {
    ...Default,
    args: {
        ...figureWithCaption,
        attributes: {
            figure: {
                'aria-label': 'Figure Label',
                'aria-placeholder': 'Figure Placeholder',
            },
            caption: {
                'aria-label': 'Caption Label',
                'aria-placeholder': 'Caption Placeholder',
            },
        },
    },
};
/** Figure with datasets */
export const FigureWithDatasets = {
    ...Default,
    args: {
        ...figureWithCaption,
        datasets: {
            figure: new Map([
                ['id', 'figure-data-id'], ['name', 'Figure Data Name'],
            ]),
            caption: new Map([
                ['id', 'caption-data-id'], ['name', 'Caption Data Name'],
            ]),
        },
    },
};
