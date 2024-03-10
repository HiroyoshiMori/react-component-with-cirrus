import React from "react";
import {
    getComponent,
    TypeButton,
} from "../@types";
import {
    getCssFramework, initialize,
} from "../index";

export const LayoutButton = (props: TypeButton) => {
    const {
        element = 'button',
        children,
        noDefaultClass = false,
        ...restProps
    } = props;

    // Initialize
    restProps['classes'] = initialize(
        props['classes'], [], !noDefaultClass ? getCssFramework().getDefaultStyleClass(
            'button', element
        ) : []
    );
    restProps['attributes'] = initialize(
        props['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
            'button', element
        )
    );
    const Tag = getComponent<TypeButton>(props);

    // @ts-ignore
    return (<Tag {...restProps} element={element}>{children}</Tag>);
};
