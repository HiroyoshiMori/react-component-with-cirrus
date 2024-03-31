import {
    Fragment,
} from "react";
import {
    PanelBlockAProps,
    PanelBlockDivProps,
    PanelBlockProps,
    PanelContentProps,
    PanelHeadingProps,
    PanelProps, PanelTabItemProps,
    PanelTabsProps
} from "../@types";
import {
    AProps,
    Container, DivProps,
    getCssFramework,
    Icons, IconsProps,
    initialize,
    LabelledCheckbox, LabelledCheckboxProps,
    Paragraph, SpanProps,
} from "../index";

export const Panel = (props: PanelProps) => {
    const {
        component = 'panel',
        element = 'div',
        heading,
        contents = [],
        ...restProps
    } = props;

    // Initialize and set default class if not exists
    const items = Array.isArray(contents)
        ? contents : [contents];
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
                { heading ? <PanelHeading {...heading} /> : <Fragment /> }
                { items && items.length > 0 ? <PanelContents items={items} /> : <Fragment /> }
            </Container>
        </Fragment>
    );
};

export const PanelHeading = (props: PanelHeadingProps ) => {
    const {
        component = 'panel-heading',
        element = 'p',
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
    );

    return (
        <Fragment>
            <Paragraph
                {...restProps}
                element={element}
            >
                {children}
            </Paragraph>
        </Fragment>
    );
};

export const PanelContents = (props: PanelContentProps) => {
    const {items} = props;

    // Initialize
    const blocks = Array.isArray(items)
        ? items : [items];

    return (
        <Fragment>
            {
                blocks && blocks.length > 0 && blocks.map((item: PanelBlockProps | PanelTabsProps, idx: number) => {
                    const {
                        component = 'panel-block',
                        element,
                    } = item;
                    item['classes'] = initialize(
                        item['classes'], [], getCssFramework().getDefaultStyleClass(
                            component, element
                        )
                    );
                    item['attributes'] = initialize(
                        item['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
                            component, element
                        )
                    );
                    return (
                        <Fragment key={idx}>
                            {
                                component === 'panel-tabs' ? (
                                    <Fragment>
                                        <PanelTabs {...item as PanelTabsProps} />
                                    </Fragment>
                                ) : (
                                    <Fragment>
                                        <PanelBlock
                                            {...item as PanelBlockProps}
                                        />
                                    </Fragment>
                                )
                            }
                        </Fragment>
                    );
                })
            }
        </Fragment>
    );
};

export const PanelBlock = (props: PanelBlockProps) => {
    const {
        component = 'panel-block',
        ...restProps
    } = props;

    // Initialize and set default class if not exists
    restProps['classes'] = initialize(
        props['classes'], [], getCssFramework().getDefaultStyleClass(
            component, restProps['element']
        )
    );
    restProps['attributes'] = initialize(
        props['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
            component, restProps['element']
        )
    );
    let children;
    if (restProps['element'] === 'a') {
        const spanClasses = getCssFramework().getDefaultStyleClass(
            component, restProps['element'], 'icon'
        );
        children = (
            <Fragment>
                {
                    Object.hasOwn(restProps, 'icon') && (restProps as PanelBlockAProps)['icon'] !== undefined ? (
                        <Container<SpanProps>
                            element={'span'}
                            classes={spanClasses}
                        >
                            <Icons {...restProps.icon as IconsProps} />
                        </Container>
                    ) : <Fragment />
                }
                { (restProps as PanelBlockAProps).children }
            </Fragment>
        );
    } else if (restProps['element'] === 'div') {
        children = (restProps as PanelBlockDivProps)['children'];
    }

    return (
        <Fragment>
            {
                restProps['element'] === 'label' ? (
                    <Fragment>
                        <LabelledCheckbox
                            {...(restProps as LabelledCheckboxProps)}
                        />
                    </Fragment>
                ) : restProps['element'] === 'a' ? (
                    <Fragment>
                        <Container<AProps>
                            {...(restProps as AProps)}
                        >
                            {children}
                        </Container>
                    </Fragment>
                ) : (
                    <Fragment>
                        <Container<DivProps>
                            {...(restProps as DivProps)}
                        >
                            {children}
                        </Container>
                    </Fragment>
                )
            }
        </Fragment>
    );
};

export const PanelTabs = (props: PanelTabsProps) => {
    const {
        component = 'panel-tabs',
        element = 'p',
        items = [],
        ...restProps
    } = props;

    // Initialize and set default class if not exists
    const tabs = Array.isArray(items)
        ? items : [items];
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
            <Paragraph
                {...restProps}
                element={element}
            >
                {
                    tabs && tabs.length > 0 ? tabs.map((tab: PanelTabItemProps, idx: number) => {
                        return (
                            <Fragment key={idx}>
                                <PanelTabItem {...tab} />
                            </Fragment>
                        );
                    }) : <Fragment />
                }
            </Paragraph>
        </Fragment>
    );
};

export const PanelTabItem = (props: PanelTabItemProps) => {
    const {
        component = 'panel-tab-item',
        element = 'a',
        isActive = false,
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
    );
    if (isActive) {
        restProps['href'] = undefined;
        const isActiveClasses = getCssFramework().getDefaultStyleClass(
            component, element, 'is-active'
        );
        isActiveClasses.forEach((itemClass) => {
            if (restProps['classes'] && !restProps['classes'].includes(itemClass)) {
                restProps['classes'].push(itemClass);
            }
        });
    }

    return (
        <Fragment>
            <Container<AProps>
                {...restProps}
                element={element}
            >
                {children}
            </Container>
        </Fragment>
    );
};
