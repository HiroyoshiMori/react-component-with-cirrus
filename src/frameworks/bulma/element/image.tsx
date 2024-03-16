import {
    Fragment,
} from "react";
import {ImageProps} from "../@types";
import {Figure, getCssFramework, initialize, Media} from "../index";

export const Image = (props: ImageProps) => {
    const {
        component = 'image',
        element = 'figure',
        image,
        children,
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
    )

    return (
        <Fragment>
            <Figure
                {...restProps}
                element={element}
            >
                {
                    image
                        ? <Media
                            {...image}
                            element={'img'}
                        />
                        : <Fragment />
                }
                {children}
            </Figure>
        </Fragment>
    );
};
