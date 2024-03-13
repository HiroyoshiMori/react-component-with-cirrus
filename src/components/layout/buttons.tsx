import {
    Fragment,
} from "react";
import {ButtonsProps, TypeButton} from "../@types";
import {Container, getCssFramework, initialize, LayoutButton} from "../index";

export const Buttons = (props: ButtonsProps) => {
    const {
        element = 'div',
        items = [],
        ...restProps
    } = props;

    // Initialize and set default value if not set
    const buttons = Array.isArray(items)
        ? items : [items];
    restProps['classes'] = initialize(
        props['classes'], [], getCssFramework().getDefaultStyleClass(
            'buttons', element
        )
    );
    restProps['attributes'] = initialize(
        props['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
            'buttons', element
        )
    );

    return (
        <Fragment>
            <Container
                {...restProps}
                element={element}
            >
                {
                    buttons && buttons.length > 0 && buttons.map((button: TypeButton, idx: number) => {
                        return (
                            <Fragment key={idx}>
                                <LayoutButton {...button} />
                            </Fragment>
                        );
                    })
                }
            </Container>
        </Fragment>
    );
};
