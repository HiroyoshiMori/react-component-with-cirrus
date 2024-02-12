import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {
    Icons,
} from "../../../components";

/**
 * Represents a range of fontawesome icon.
 */
export default {
    title: 'React Component/Element/Label/Icons',
    component: Icons,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Icons element',
    },
};
/** Default icon */
export const Default = {
    render: (args: any) => <Icons
        icon={icon({name: 'check'})}
        {...args}
    />,
};
