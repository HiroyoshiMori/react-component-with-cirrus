import {
    Fragment, HTMLAttributes,
} from "react";
import {CardFooterProps, CardHeaderProps, CardImageProps, CardProps} from "../@types";
import {
    AProps,
    Button,
    ButtonProps,
    Container,
    Figure,
    getCssFramework,
    Icons,
    initialize,
    Media,
    Paragraph,
    PProps
} from "../index";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";

export const Card = (props: CardProps) => {
    const {
        component = 'card',
        element = 'div',
        header,
        image,
        content,
        footer,
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

    const contentClasses = initialize(
        [] as string[], [], getCssFramework().getDefaultStyleClass(
            'card-content', 'div'
        )
    );
    const contentAttributes = initialize(
        {} as HTMLAttributes<HTMLDivElement>, {}, getCssFramework().getDefaultAdditionalAttributes(
            'card-content', 'div'
        )
    );

    return (
        <Fragment>
            <Container
                {...restProps}
                element={'div'}
            >
                {
                    header ? <CardHeader
                        {...header}
                        component={'card-header'}
                    /> : <Fragment />
                }
                { image ? <CardImage {...image} component={'card-image'} /> : <Fragment />}
                <Container
                    element={'div'}
                    classes={contentClasses}
                    attributes={contentAttributes}
                >
                    {content}
                </Container>
                {
                    footer ? <CardFooter
                        {...footer}
                        component={'card-footer'}
                    /> : <Fragment />
                }
            </Container>
        </Fragment>
    );
};

export const CardHeader = (props: CardHeaderProps) => {
    const {
        component = 'card-header',
        element = 'header',
        title = {} as PProps,
        button = {} as Omit<ButtonProps, 'children'>,
        ...restProps
    } = props;

    // Initialize and set default class if not exists
    restProps['classes'] = initialize(
        props['classes'], [], getCssFramework().getDefaultStyleClass(
            component, element
        )
    );
    restProps['attributes'] = initialize(
        props['attributes'] as HTMLAttributes<HTMLHeadingElement>, {},
        getCssFramework().getDefaultAdditionalAttributes(component, element)
    );

    return (
        <Fragment>
            <Container
                {...restProps}
                element={element}
            >
                { title ? <CardHeaderTitle {...title} /> : <Fragment /> }
                { button ? <CardHeaderButton {...button} /> : <Fragment /> }
            </Container>
        </Fragment>
    );
};

export const CardHeaderTitle = (props: PProps) => {
    const {
        element = 'p',
        children,
        ...restProps
    } = props;

    // Initialize and set default class if not exists
    restProps['classes'] = initialize(
        props['classes'], [], getCssFramework().getDefaultStyleClass(
            'card-header-title', 'p'
        )
    );
    restProps['attributes'] = initialize(
        props['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
            'card-header-title', 'p'
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

export const CardHeaderButton = (props: Omit<ButtonProps, 'children'>) => {
    const {
        element = 'button',
        onClick,
        ...buttonProps
    } = props;

    // Initialize and set default class if not exists
    buttonProps['classes'] = initialize(
        props['classes'], [], getCssFramework().getDefaultStyleClass(
            'card-header-icon', element
        )
    );
    buttonProps['attributes'] = initialize(
        props['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
            'card-header-icon', element
        )
    );

    const spanClasses = initialize(
        [] as string[], [], getCssFramework().getDefaultStyleClass(
            'card-header-icon', 'span'
        )
    );
    const spanAttributes: HTMLAttributes<HTMLSpanElement> = initialize(
        {} as HTMLAttributes<HTMLElement>, {}, getCssFramework().getDefaultAdditionalAttributes(
            'card-header-icon', 'icons'
        )
    );
    const iconsAttributes = initialize(
        {} as HTMLAttributes<SVGSVGElement>, {}, getCssFramework().getDefaultAdditionalAttributes(
            'card-header-icon', 'icons'
        )
    );

    return (
        <Fragment>
            <Button
                {...buttonProps}
                element={element}
                noDefaultClass={true}
            >
                <Container
                    element={'span'}
                    classes={spanClasses}
                    attributes={spanAttributes}
                >
                    <Icons
                        icon={icon({name: 'angle-down'})}
                        {...iconsAttributes}
                    />
                </Container>
            </Button>
        </Fragment>
    );
};

export const CardImage = (props: CardImageProps) => {
    const {
        component = 'card-image',
        element = 'div',
        image,
        ...restProps
    } = props;

    // initialize and set default class if not exists
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

    const figureClasses = initialize(
        [] as string[], [], getCssFramework().getDefaultStyleClass(
            component, 'figure'
        )
    );
    const figureAttributes = initialize(
        {} as HTMLAttributes<HTMLElement>, {}, getCssFramework().getDefaultAdditionalAttributes(
            component, 'figure'
        )
    );

    return (
        <Fragment>
            <Container
                {...restProps}
                element={element}
            >
                <Figure
                    element={'figure'}
                    classes={figureClasses}
                    attributes={figureAttributes}
                >
                    <Media
                        {...image}
                        element={'img'}
                    />
                </Figure>
            </Container>
        </Fragment>
    );
};

export const CardFooter = (props: CardFooterProps) => {
    const {
        component = 'card-footer',
        element = 'div',
        items = [],
        ...restProps
    } = props;

    // Initialize and set default class if not exists
    const footerItems = Array.isArray(items)
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
            <Container
                {...restProps}
                element={element}
            >
                {
                    footerItems && footerItems.length > 0 && footerItems.map((item: AProps | PProps, idx: number) => (
                        <CardFooterItem key={idx} {...item} />
                    ))
                }
            </Container>
        </Fragment>
    );
};

export const CardFooterItem = (props: AProps | PProps) => {
    const {
        element = 'a',
        children,
        ...restProps
    } = props;

    // Initialize and set default class if not exists
    restProps['classes'] = initialize(
        props['classes'], [], getCssFramework().getDefaultStyleClass(
            'card-footer-item', element
        )
    );
    restProps['attributes'] = initialize(
        props['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
            'card-footer-item', element
        )
    );

    return (
        <Fragment>
            {
                element === 'p' ? (
                    <Paragraph
                        {...(restProps as PProps)}
                        element={element}
                    >
                        {children}
                    </Paragraph>
                ) : (
                    <Container
                        {...(restProps as AProps)}
                        element={'a'}
                    >
                        {children}
                    </Container>
                )
            }
        </Fragment>
    );
};
