import {
    Fragment,
} from "react";
import {BlockProps} from "../@types";
import {Container, getCssFramework, initialize} from "../index";

export const Block = (props: BlockProps) => {
    const {
        component = 'block',
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
