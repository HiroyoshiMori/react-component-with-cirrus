import {
    Heading,
} from "../../../components";
import {deIndent} from "../../../utils";

/**
 * The &lt;h1&gt; to &;t;h6&gt; HTML elements represent six levels of section headings.
 * &lt;h1&gt; is the highest section level and &lt;h6&gt; is the lowest. By default,
 * all heading elements create a block-level box in the layout, starting on a new line
 * and taking up the full width available in their containing block.
 */
export default {
    title: 'React Component/Element/Headline/Heading',
    component: Heading,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The HTML Section Heading elements',
    },
    argTypes: {
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
        level: {
            control: 'text',
            description: 'Level for heading',
            type: {
                required: true,
            },
            table: {
                type: {
                    summary: 'number',
                },
            },
        },
        children: {
            control: 'object',
            description: 'Label for heading',
            table: {
                type: {
                    summary: 'ReactNode',
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
                    summary: 'HTMLAttributes<HTMLHeadingElement>',
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

const DefaultHeading = {
    level: 3,
};

/** Default heading */
export const Default = {
    render: (args: any) => <Heading
        {...DefaultHeading}
        {...args}
    >
        This is heading text.
    </Heading>,
};
/** H1 */
export const H1 = {
    ...Default,
    args: {
        level: 1,
    },
};
/** H2 */
export const H2 = {
    ...Default,
    args: {
        level: 2,
    },
};
/** H4 */
export const H4 = {
    ...Default,
    args: {
        level: 4,
    },
};
/** H5 */
export const H5 = {
    ...Default,
    args: {
        level: 5,
    },
};
/** H6 */
export const H6 = {
    ...Default,
    args: {
        level: 6,
    },
};
/** Heading with invalid level 0 */
export const HeadingWithLevel0 = {
    ...Default,
    args: {
        level: 0,
    },
};
/** Heading with invalid level 7 */
export const HeadingWithLevel7 = {
    ...Default,
    args: {
        level: 7,
    },
};
/** Heading with style classes */
export const HeadingWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Heading with additional attributes */
export const HeadingWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Heading Label',
            'aria-placeholder': 'Heading Placeholder',
        },
    },
};
/** Heading with datasets */
export const HeadingWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'heading-data-id'],
            ['name', 'Heading Data Name'],
        ]),
    },
};
