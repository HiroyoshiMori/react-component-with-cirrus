import React, {
    Fragment,
} from "react";
import {BreadcrumbItemProps, BreadcrumbProps} from "../@types";
import {
    Container,
    getCssFramework,
    Icons,
    initialize,
    LiProps,
    List,
} from "../index";

export const Breadcrumb = (props: BreadcrumbProps) => {
    const {
        component = 'breadcrumb',
        element = 'nav',
        items: itemData = [],
        children,
        additionalProps = {},
        ...restProps
    } = props;

    // Initialize and set default class if not exists
    const items = Array.isArray(itemData)
        ? itemData : [itemData];
    const breadcrumbs: LiProps[] = items.map(
        (item: BreadcrumbItemProps, idx: number) => buildBreadcrumbItem(item, idx, items.length)
    );
    restProps['classes'] = initialize(
        props['classes'], [], getCssFramework().getDefaultStyleClass(
            component, element
        )
    );
    restProps['attributes'] = initialize(
        props['attributes'], {},
        getCssFramework().getDefaultAdditionalAttributes(
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
                <List
                    element={'ul'}
                    items={breadcrumbs}
                />
            </Container>
        </Fragment>
    );
};

const buildBreadcrumbItem = (props: BreadcrumbItemProps, idx: number, total: number): LiProps => {
    const {
        component = 'breadcrumb',
        element = 'li',
        children,
        icon,
        additionalProps = {},
        ...itemProps
    } = props;

    // Initialize and set default class if not exists
    itemProps['classes'] = initialize(
        props['classes'], [], getCssFramework().getDefaultStyleClass(
            component, element
        )
    )
    itemProps['attributes'] = initialize(
        props['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
            component, element
        )
    );

    // Set class=is-active and aria-current=page to last item
    const liClasses: string[] = [];
    if (idx === total - 1) {
        if (!liClasses.includes('is-active')) {
            liClasses.push('is-active');
        }
        if (!Object.hasOwn(itemProps['attributes'], 'aria-current')) {
            itemProps['attributes']['aria-current'] = 'page';
        }
    }

    return {
        element: 'li',
        children: <Container
            {...additionalProps}
            element={'a'}
            inline={true}
        >
            {
                icon ? <Icons {...icon} /> : <Fragment />
            }
            {children}
        </Container>,
        classes: liClasses.length > 0 ? liClasses : undefined
    };
};