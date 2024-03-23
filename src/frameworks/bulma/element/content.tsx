import {
    Fragment,
} from "react";
import {ContentProps} from "../@types";
import {Container, DivProps, getCssFramework, initialize} from "../index";

export const Content = (props: ContentProps) => {
    const {
        component = 'content',
        element = 'div',
        children,
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
            <Container<DivProps>
                {...restProps}
                element={element}
            >
                {children}
            </Container>
        </Fragment>
    );
};
