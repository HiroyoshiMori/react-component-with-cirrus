import React, {
    Fragment,
} from "react";
import {
    ModalCardBodyProps,
    ModalCardFootProps,
    ModalCardHeadProps,
    ModalCardProps,
    ModalContentProps,
    ModalProps
} from "../@types";
import {
    Button, ButtonProps,
    Container,
    Delete, DivProps, FooterProps,
    getCssFramework,
    initialize,
    Paragraph, SectionProps,
} from "../index";

export const Modal = (props: ModalProps) => {
    const {
        component = 'modal',
        element = 'div',
        content,
        card,
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
                <Container<DivProps>
                    element={'div'}
                    classes={['modal-background']}
                />
                { content ? <ModalContent {...content}></ModalContent> : <Fragment /> }
                { card ? <ModalCard {...card} />:<Fragment/>}
            </Container>
        </Fragment>
    );
};

export const ModalContent = (props: ModalContentProps) => {
    const {
        component = 'modal-content',
        element = 'div',
        children,
        close,
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
    close['classes'] = initialize(
        close['classes'], [], getCssFramework().getDefaultStyleClass(
            'modal-close', 'button', 'delete'
        )
    );
    close['attributes'] = initialize(
        close['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
            'modal-close', 'button', 'delete'
        )
    );
    if (close.onClick === undefined) {
        const isActiveClasses = getCssFramework().getDefaultStyleClass(
            'modal', element, 'is-active'
        );
        close.onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            const el = e.currentTarget;
            if (el && el.parentElement) {
                isActiveClasses && isActiveClasses.forEach((itemClass: string) => {
                    el.parentElement?.classList.remove(itemClass);
                })
            }
        };
    }

    return (
        <Fragment>
            <Container<DivProps>
                {...restProps}
                element={element}
            >
                {children}
            </Container>
            <Delete {...close} />
        </Fragment>
    );
};

export const ModalCard = (props: ModalCardProps) => {
    const {
        component = 'modal-card',
        element = 'div',
        head,
        body,
        foot,
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
                {head ? <ModalCardHead {...head} /> : <Fragment /> }
                <ModalCardBody {...body} />
                {foot ? <ModalCardFoot {...foot} /> : <Fragment /> }
            </Container>
        </Fragment>
    );
};

export const ModalCardHead = (props: ModalCardHeadProps) => {
    const {
        component = 'modal-card-header',
        element = 'div',
        title,
        close = {} as Omit<ButtonProps, 'children'>,
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
    close['classes'] = initialize(
        close['classes'], [], getCssFramework().getDefaultStyleClass(
            'modal-close', 'button', 'delete'
        )
    );
    close['attributes'] = initialize(
        close['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
            'modal-close', 'button', 'delete'
        )
    );

    if (close && close.onClick === undefined) {
        const isActiveClasses = getCssFramework().getDefaultStyleClass(
            'modal', element, 'is-active'
        );
        close.onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            const el = e.currentTarget;
            if (el && el.parentElement?.parentElement?.parentElement) {
                isActiveClasses && isActiveClasses.forEach((itemClass: string) => {
                    el.parentElement?.parentElement?.parentElement?.classList.remove(itemClass);
                })
            }
        };
    }

    return (
        <Fragment>
            <Container<DivProps>
                {...restProps}
                element={element}
            >
                <Paragraph
                    {...title}
                >
                    {title.children}
                </Paragraph>
                <Delete {...close} />
            </Container>
        </Fragment>
    );
};

export const ModalCardBody = (props: ModalCardBodyProps) => {
    const {
        component = 'modal-card-body',
        element = 'section',
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
            <Container<SectionProps>
                {...restProps}
                element={element}
            >
                {children}
            </Container>
        </Fragment>
    );
};

export const ModalCardFoot = (props: ModalCardFootProps) => {
    const {
        component = 'modal-card-foot',
        element = 'footer',
        ok,
        cancel,
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
    const isActiveClasses = getCssFramework().getDefaultStyleClass(
        'modal', element, 'is-active'
    );
    if (ok) {
        ok['classes'] = initialize(
            ok['classes'], [], getCssFramework().getDefaultStyleClass(
                component, 'button', 'ok'
            )
        );
        ok['attributes'] = initialize(
            ok['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
                component, 'button', 'ok'
            )
        );
        if (ok.onClick === undefined) {
            ok.onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                const el = e.currentTarget;
                if (el && el.parentElement?.parentElement?.parentElement) {
                    isActiveClasses && isActiveClasses.forEach((itemClass: string) => {
                        el.parentElement?.parentElement?.parentElement?.classList.remove(itemClass);
                    })
                }
            };
        }
    }
    if (cancel) {
        cancel['classes'] = initialize(
            cancel['classes'], [], getCssFramework().getDefaultStyleClass(
                component, 'button', 'cancel'
            )
        );
        cancel['attributes'] = initialize(
            cancel['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
                component, 'button', 'cancel'
            )
        );
        if (cancel.onClick === undefined) {
            cancel.onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                const el = e.currentTarget;
                if (el && el.parentElement?.parentElement?.parentElement) {
                    isActiveClasses && isActiveClasses.forEach((itemClass: string) => {
                        el.parentElement?.parentElement?.parentElement?.classList.remove(itemClass);
                    })
                }
            };
        }
    }

    return (
        <Fragment>
            <Container<FooterProps>
                {...restProps}
                element={element}
            >
                { ok ? <Button {...ok}>{ok.children}</Button> : <Fragment /> }
                { cancel ? <Button {...cancel}>{cancel.children}</Button> : <Fragment /> }
            </Container>
        </Fragment>
    );
};
