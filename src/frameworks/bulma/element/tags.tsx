import {
    Fragment,
} from "react";
import {TagProps, TagsProps} from "../@types";
import {AProps, Container, getCssFramework, initialize, SpanProps} from "../index";

export const Tags = (props: TagsProps) => {
    const {
        component = 'tags',
        element = 'div',
        tags: tagData = [],
        additionalProps = {},
        commonClassesInChild = [],
        ...restProps
    } = props;

    // Initialize and set default class if not exists
    const tags = Array.isArray(tagData)
        ? tagData : [tagData];
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
                {
                    tags && tags.length > 0 && tags.map((tag: TagProps, idx: number) => {
                        const classes = initialize(
                            tag['classes'], [],
                            Array.isArray(commonClassesInChild) ? commonClassesInChild : []
                        );
                        return (
                            <Tag
                                key={idx}
                                {...tag}
                                component={'tag'}
                                classes={classes}
                            >
                                {tag.children}
                            </Tag>
                        );
                    })
                }
            </Container>
        </Fragment>
    );
};

export const Tag = (props: TagProps) => {
    const {
        component = 'tag',
        element = 'span',
        children,
        ...restProps
    } = props;

    // Initialize and set default class if not exists
    const additionalProps = (() => {
        switch (element.toLowerCase()) {
            case 'a':
                return restProps.additionalProps as AProps;
            default:
                return restProps.additionalProps as SpanProps;
        }
    })();
    if (Object.hasOwn(restProps, 'additionalProps')) delete restProps.additionalProps;

    restProps['classes'] = initialize(
        props['classes'], [], getCssFramework().getDefaultStyleClass(
            component, 'tag'
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
