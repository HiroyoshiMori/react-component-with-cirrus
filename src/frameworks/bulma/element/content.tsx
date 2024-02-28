import React, {
    Fragment,
} from "react";
import {ContentProps} from "../@types";
import {Container, getCssFramework, initialize} from "../index";

export const Content = (props: ContentProps) => {
    const {
        component = 'content',
        element = 'div',
        children,
        additionalProps = {},
        ...restProps
    } = props;

    // Initialize and add default class if not exists
    restProps['classes'] = initialize(
        props['classes'], [], getCssFramework().getDefaultStyleClass(
            component, element
        )
    );
    restProps['attributes'] = initialize(
        props['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
            component, element
        )
    );

    return (
        <Fragment>
            <Container
                {...restProps}
                {...additionalProps}
                element={element}
            >
                {children}
            </Container>
        </Fragment>
    );
};
