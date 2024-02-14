import {Fragment} from "react";
import {
    Caption,
} from "../../../../components";
import {deIndent} from "../../../../utils";

/**
 * The &lt;caption&gt; HTML element specifies the caption (or title) of a table,
 * providing the table an accessible description.
 *
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
 */
export default {
    title: 'React Component/Element/Table/Caption',
    component: Caption,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Table Caption element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                <table>
                    <Story />
                    <tbody>
                        <tr>
                            <td>Table cell content</td>
                        </tr>
                    </tbody>
                </table>
            </Fragment>
        ),
    ],
    argTypes: {
        element: {
            control: 'none',
            description: 'Switcher for <code>Caption</code> component to render &lt;caption&gt;',
            table: {
                type: {
                    summary: 'caption',
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
            description: 'The caption of the table',
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
                    summary: 'HTMLAttributes<HTMLTableCaptionElement>',
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
// Default caption
const DefaultCaption = {
    element: 'caption',
};

/** Default caption */
export const Default = {
    render: (args: any) => <Caption
        {...DefaultCaption}
        {...args}
    >
        This is caption for table
    </Caption>,
};
