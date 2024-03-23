import {
    Fragment,
} from "react";
import {ALIGNMENTS, ALTERNATIVE_SEPARATORS, BreadcrumbItemProps, BreadcrumbProps} from "../@types";
import {
    Container,
    getCssFramework,
    Icons,
    initialize,
    LiProps,
    List, NavProps, SpanProps,
} from "../index";
import {ArrayRegexIncludes} from "../../../utils";

export const Breadcrumb = (props: BreadcrumbProps) => {
    const {
        component = 'breadcrumb',
        element = 'nav',
        items: itemData = [],
        commonClassesInItems = [],
        children,
        alignment,
        separators,
        ...restProps
    } = props;

    // Initialize and set default class if not exists
    const items = Array.isArray(itemData)
        ? itemData : [itemData];
    const breadcrumbs: LiProps[] = items.map(
        (item: BreadcrumbItemProps, idx: number) => buildBreadcrumbItem(item, idx, items.length)
    );
    if (Array.isArray(commonClassesInItems) && commonClassesInItems.length > 0) {
        breadcrumbs.forEach((item: LiProps, idx: number) => {
            breadcrumbs[idx]['classes'] = initialize(
                item['classes'], [], commonClassesInItems
            );
        });
    }
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
    if (alignment) {
        const pattern = '^is-(' + ALIGNMENTS.join('|') + ')$';
        if (ArrayRegexIncludes(restProps.classes, new RegExp(pattern)) < 0) {
            restProps.classes.push('is-' + alignment);
        }
    }
    if (separators) {
        const pattern = '^has-(' + ALTERNATIVE_SEPARATORS.join('|') + ')-separator$';
        if (ArrayRegexIncludes(restProps.classes, new RegExp(pattern)) < 0) {
            restProps.classes.push('has-' + separators + '-separator');
        }
    }

    return (
        <Fragment>
            <Container<NavProps>
                {...restProps}
                element={element}
            >
                <List
                    element={'ul'}
                    items={breadcrumbs}
                />
                {children}
            </Container>
        </Fragment>
    );
};

const buildBreadcrumbItem = (props: BreadcrumbItemProps, idx: number, total: number): LiProps => {
    const {
        component = 'breadcrumb-item',
        element = 'li',
        children,
        icon,
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
    let spanProps = {
        element: 'span',
    } as SpanProps;
    if (icon) {
        spanProps['classes'] = initialize(
            spanProps['classes'], [], getCssFramework().getDefaultStyleClass(
                component, 'icon', 'span'
            )
        );
    }

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
            element={'a'}
        >
            {
                icon ? (
                    <Container<SpanProps>
                        {...spanProps}
                    >
                        <Icons {...icon} />
                    </Container>
                ) : <Fragment />
            }
            {children}
        </Container>,
        classes: liClasses.length > 0 ? liClasses : undefined
    };
};