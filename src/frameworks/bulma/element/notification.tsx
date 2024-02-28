import React, {
    Fragment,
} from "react";
import {NotificationProps} from "../@types";
import {generateId} from "../../../utils";
import {Delete} from "./delete";
import {Container, getCssFramework, initialize} from "../../../components";

export const Notification = (props: NotificationProps) => {
    const {
        component = 'notification',
        element = 'div',
        id = generateId(),
        children,
        additionalProps = {},
        ...restProps
    } = props;

    // Initialize and set default class if not exists
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

    let onClick = undefined;
    if (restProps.onClick === undefined) {
        onClick = () => {
            const el = document.getElementById(id);
            if (el && el.parentNode) {
                el.parentNode.removeChild(el);
            }
        };
        delete restProps.onClick;
    }

    return (
        <Fragment>
            <Container
                {...restProps}
                {...additionalProps}
                element={element}
                id={id}
            >
                <Delete
                    onClick={onClick}
                />
                {children}
            </Container>
        </Fragment>
    );
};
