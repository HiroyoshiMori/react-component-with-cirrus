import {
    Fragment,
} from "react";
import {DeleteButtonProps} from "../@types";
import {Button, getCssFramework, initialize} from "../index";

export const Delete = (props: DeleteButtonProps) => {
    const {
        component = 'delete',
        element = 'button',
        additionalProps = {},
        ...restProps
    } = props;

    // Initialize and add default class if not exists
    restProps['classes'] = initialize(
        props['classes'], [], getCssFramework().getDefaultStyleClass(
            component, element, 'delete'
        )
    );
    restProps['attributes'] = initialize(
        props['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
            component, element, 'delete'
        )
    );

    return (
        <Fragment>
            <Button
                {...restProps}
                {...additionalProps}
                element={element}
                noDefaultClass={true}
            />
        </Fragment>
    );
};
