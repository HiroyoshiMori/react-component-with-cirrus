import {
    FormHTMLAttributes,
    Fragment, HTMLAttributes,
} from "react";
import {BoxProps} from "../@types";
import {Container, DivProps, Form, getCssFramework, initialize} from "../index";

export const Box = (props: BoxProps) => {
    const {
        component = 'box',
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
            {
                element.toLowerCase() === 'form' ? (
                    <Fragment>
                        <Form
                            {...restProps}
                            element={'form'}
                            attributes={restProps['attributes'] as FormHTMLAttributes<HTMLFormElement>}
                        >
                            {children}
                        </Form>
                    </Fragment>
                ) : (
                    <Fragment>
                        <Container<DivProps>
                            {...restProps}
                            element={'div'}
                            attributes={restProps['attributes'] as HTMLAttributes<HTMLDivElement>}
                        >
                            {children}
                        </Container>
                    </Fragment>
                )
            }
        </Fragment>
    );
};
