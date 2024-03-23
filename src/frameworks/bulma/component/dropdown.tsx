import React, {
    Fragment, HTMLAttributes,
} from "react";
import {
    DropdownContentProps, DropdownDividerProps,
    DropdownItemProps,
    DropdownMenuProps,
    DropdownProps,
    DropdownTriggerProps
} from "../@types";
import {
    AProps,
    Break,
    Button,
    ButtonProps,
    Container,
    DivProps,
    getCssFramework, HrProps,
    Icons,
    IconsProps,
    initialize, SpanProps
} from "../index";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {generateId} from "../../../utils";

export const Dropdown = (props: DropdownProps) => {
    const {
        component = 'dropdown',
        element = 'div',
        trigger,
        menus,
        isUp = false,
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
    if (isUp) {
        const isUpClasses = getCssFramework().getDefaultStyleClass(
            component, element, 'is-up'
        );
        isUpClasses.forEach((itemClass: string) => {
            if (restProps['classes'] && !restProps['classes'].includes(itemClass)) {
                restProps['classes'].push(itemClass)
            }
        });
    }

    if (menus.id === undefined) {
        menus.id = trigger.menuId ?? generateId();
    }

    return (
        <Fragment>
            <Container<DivProps>
                {...restProps}
                element={element}
            >
                {
                    trigger ? <DropdownTrigger
                        {...trigger}
                        component={'dropdown-trigger'}
                        menuId={menus.id}
                        isUp={isUp}
                    /> : <Fragment/>
                }
                {
                    menus ? <DropdownMenu
                        {...menus}
                        component={'dropdown-menu'}
                    /> : <Fragment/>
                }
            </Container>
        </Fragment>
    );
};

export const DropdownTrigger = (props: DropdownTriggerProps) => {
    const {
        component = 'dropdown-trigger',
        element = 'div',
        menuId,
        button = {} as Omit<ButtonProps, 'children'>,
        title,
        icons = {} as IconsProps,
        isUp,
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

    // Operate buttons
    /** Add default button behaviors - onClick and onBlur */
    if (button.onClick === undefined || button.onBlur === undefined) {
        const isActiveClasses = getCssFramework().getDefaultStyleClass(
            'dropdown', element, 'is-active'
        );
        if (button.onClick === undefined) {
            const toggleActive = (element: HTMLElement|undefined|null) => {
                if (element) {
                    isActiveClasses && isActiveClasses.forEach((eachClass: string) => {
                        element.classList.toggle(eachClass);
                    });
                }
            };
            button.onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                toggleActive(e.currentTarget.parentElement?.parentElement);
            };
        }
        if (button.onBlur === undefined) {
            const removeActive = (element: HTMLElement|undefined|null) => {
                if (element) {
                    isActiveClasses && isActiveClasses.forEach((eachClass: string) => {
                        element.classList.remove(eachClass);
                    });
                }
            };
            button.onBlur = (e: React.FocusEvent<HTMLButtonElement>) => {
                removeActive(e.currentTarget.parentElement?.parentElement);
            };
        }
    }
    /** Classes for button */
    const buttonClasses = initialize(
        [] as string[], [], getCssFramework().getDefaultStyleClass(
            component, 'button'
        )
    );
    const buttonAttributes = initialize(
        button?.attributes, {}, getCssFramework().getDefaultAdditionalAttributes(
            component, 'button'
        )
    );
    if (Object.hasOwn(buttonAttributes, 'aria-controls')) {
        buttonAttributes['aria-controls'] = menuId;
    }

    const spanClasses = initialize(
        [] as string[], [], getCssFramework().getDefaultStyleClass(
            component, 'span'
        )
    );
    const spanAttributes = initialize(
        {} as HTMLAttributes<HTMLSpanElement>, {}, getCssFramework().getDefaultAdditionalAttributes(
            component, 'span'
        )
    );

    if (Object.keys(icons).length === 0) {
        icons.icon = !isUp
            ? icon({name: 'angle-down'})
            : icon({name: 'angle-up'});
    }

    const iconsAttributes = initialize(
        {} as HTMLAttributes<SVGSVGElement>, {},
        getCssFramework().getDefaultAdditionalAttributes(
            component, 'icons'
        )
    );
    if (Object.hasOwn(buttonAttributes, 'aria-controls')) {
        buttonAttributes['aria-controls'] = menuId;
    }

    return (
        <Fragment>
            <Container<DivProps>
                {...restProps}
                element={element}
            >
                <Button
                    {...button}
                    element={'button'}
                    classes={buttonClasses}
                    attributes={buttonAttributes}
                >
                    <Container<SpanProps>
                        {...title}
                        element={'span'}
                    />
                    <Container<SpanProps>
                        element={'span'}
                        classes={spanClasses}
                        attributes={spanAttributes}
                    >
                        <Icons
                            {...icons}
                            {...iconsAttributes}
                        />
                    </Container>
                </Button>
            </Container>
        </Fragment>
    );
};

export const DropdownMenu = (props: DropdownMenuProps) => {
    const {
        component = 'dropdown-menu',
        element = 'div',
        content,
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
            <Container<DivProps>
                {...restProps}
                element={element}
            >
                <DropdownContent
                    {...content}
                    component={'dropdown-content'}
                />
            </Container>
        </Fragment>
    );
};

export const DropdownContent = (props: DropdownContentProps) => {
    const {
        component = 'dropdown-content',
        element = 'div',
        items: itemData = [],
        ...restProps
    } = props;

    // Initialize and set default class if not exists
    const items = Array.isArray(itemData)
        ? itemData : [itemData];
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
                {
                    items && items.length > 0 && items.map(
                        (item: DropdownItemProps | DropdownDividerProps, idx: number) => {
                            if (Object.hasOwn(item, 'component') && item.component === 'dropdown-divider') {

                            }
                            return Object.hasOwn(item, 'component') && item.component === 'dropdown-divider' ? (
                                <Fragment key={idx}>
                                    <DropdownDivider
                                        {...(item as DropdownDividerProps)}
                                        component={'dropdown-divider'}
                                    />
                                </Fragment>
                            ) : (
                                <Fragment key={idx}>
                                    <DropdownItem
                                        {...(item as DropdownItemProps)}
                                        component={'dropdown-item'}
                                    />
                                </Fragment>
                            )
                        }
                    )
                }
            </Container>
        </Fragment>
    );
};

export const DropdownItem = (props: DropdownItemProps) => {
    const {
        component = 'dropdown-item',
        isActive = false,
        children,
        ...restProps
    } = props;

    // Initialize and set default class if not exists
    restProps['classes'] = initialize(
        props['classes'], [], getCssFramework().getDefaultStyleClass(
            component, props.element
        )
    );
    restProps['attributes'] = initialize(
        props['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
            component, props.element
        )
    );

    if (isActive) {
        const isActiveClasses = initialize(
            props['classes'], [], getCssFramework().getDefaultStyleClass(
                component, props.element, 'is-active'
            )
        );
        isActiveClasses.forEach((extraClass: string) => {
            if (restProps['classes'] && !restProps['classes'].includes(extraClass)) {
                restProps['classes'].push(extraClass);
            }
        });
    }

    return (
        <Fragment>
            <Container<AProps|DivProps>
                {...restProps}
            >
                {children}
            </Container>
        </Fragment>
    );
};

export const DropdownDivider = (props: DropdownDividerProps) => {
    const {
        component = 'dropdown-divider',
        element = 'hr',
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
            <Break<HrProps>
                {...restProps}
                element={element}
            />
        </Fragment>
    );
};
