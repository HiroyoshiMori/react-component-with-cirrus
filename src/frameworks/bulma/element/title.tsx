import {
    Fragment,
} from "react";
import {TitleProps} from "../@types";
import {getCssFramework, Heading, initialize, Paragraph} from "../index";
import {ArrayRegexIncludes} from "../../../utils";

export const Title = (props: TitleProps) => {
    const {
        component = 'title',
        element = 'h3',
        children,
        isSub = false,
        level = 3,
        ...restProps
    } = props;

    // Initialize and set default class if not exists
    restProps['classes'] = initialize(
        props['classes'], [], getCssFramework().getDefaultStyleClass(
            component, element, isSub ? 'title' : 'subtitle'
        )
    );
    restProps['attributes'] = initialize(
        props['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
            component, element, isSub ? 'title' : 'subtitle'
        )
    );

    if (level && level >= 1 && level <= 6) {
        if (ArrayRegexIncludes(restProps['classes'], /^is-(1-6)$/) === -1) {
            restProps['classes'].push('is-' + level);
        }
    }

    return (
        <Fragment>
            {
                (element === 'p' || element === 'paragraph') ? (
                    <Paragraph
                        {...restProps}
                        element={element}
                    >
                        {children}
                    </Paragraph>
                ) : (
                    <Heading
                        {...restProps}
                        element={element}
                        level={level}
                    >
                        {children}
                    </Heading>
                )
            }
        </Fragment>
    );
};
