import {Fragment} from "react";
import {
    Caption,
} from "../../../../components/cirrus-ui";

export default {
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
