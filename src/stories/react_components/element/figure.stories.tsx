import {
    Figure,
    FigureProps,
    Media,
} from "../../../components";
import {deIndent} from "../../../utils";
// @ts-ignore
import ExampleImage from "../../assets/file_example_PNG_500kB.png";

/**
 * The &lt;figure&gt; HTML element represents self-contained content, potentially with an
 * option caption, which is specified using &lt;figcaption&gt; element. The figure, its caption,
 * and its contents are referenced as a single unit.
 */
export default {
    title: 'React Component/Element/Figure',
    component: Figure,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Figure with Optional Caption element',
    },
    argTypes: {
        children: {
            control: 'object',
            description: 'Content of element',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        caption: {
            control: 'object',
            description: 'Optional caption for element',
            table: {
                type: {
                    summary: 'FigcaptionProps',
                    detail: deIndent(`
                            {
                                id?: string,
                                children?: ReactNode,
                                classes?: string[],
                                attributes?: HTMLAttributes<HTMLElement>,
                                datasets?: Map<string, string>,
                            }
                        `)
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        captionPosition: {
            control: 'select',
            options: ['first', 'last'],
            description: 'Where to caption placed. "first", place as first child element of figure, '
                        + 'and "last", place as last element of figure.',
            table: {
                type: {
                    summary: 'first|last',
                },
                defaultValue: {
                    summary: 'undefined',
                    detail: 'When undefined, treated as "first"',
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
                    summary: 'HTMLAttributes<HTMLElement>',
                    detail: deIndent(`
                            e.g.,
                            {
                                'aria-label': 'This is Figure Label',
                            }
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
// Default Figure
const DefaultFigure = {}
// Figure with caption
const figureWithCaption = {
    caption: {
        children: 'Figure Caption',
    },
}
/** Default figure */
export const Default = {
    render: (args: FigureProps) => <Figure
        {...DefaultFigure}
        {...args}
    >
        <Media
            element={'img'}
            src={ExampleImage}
        />
    </Figure>,
};
/** Figure with caption first */
export const FigureWithCaptionFirst = {
    ...Default,
    args: {
        ...figureWithCaption,
    },
};
/** Figure with caption last */
export const FigureWithCaptionLast = {
    ...Default,
    args: {
        ...figureWithCaption,
        captionPosition: 'last',
    },
};
/** Figure with style classes */
export const FigureWithStyleClasses = {
    ...Default,
    args: {
        ...figureWithCaption,
        classes: ['test-figure1', 'test-figure'],
    },
};
/** Figure with additional attributes */
export const FigureWithAdditionalAttributes = {
    ...Default,
    args: {
        ...figureWithCaption,
        attributes: {
            'aria-label': 'Figure Label',
            'aria-placeholder': 'Figure Placeholder',
        },
    },
};
/** Figure with datasets */
export const FigureWithDatasets = {
    ...Default,
    args: {
        ...figureWithCaption,
        datasets: new Map([
            ['id', 'figure-data-id'], ['name', 'Figure Data Name'],
        ]),
    },
};
/** Figure with caption with style classes */
export const FigureWithCaptionWithStyleClasses = {
    ...Default,
    args: {
        ...figureWithCaption,
        caption: {
            ...figureWithCaption.caption,
            classes: ['test-class1', 'test-class2'],
        },
    },
};
