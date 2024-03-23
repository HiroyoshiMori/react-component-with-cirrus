import {
    Fragment,
} from "react";
import {BlockProps} from "../@types";
import {Container, DivProps, getCssFramework, initialize} from "../index";

export const Block = (props: BlockProps) => {
    const {
        component = 'block',
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
