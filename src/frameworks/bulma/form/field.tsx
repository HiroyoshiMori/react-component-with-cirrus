import React, {
    Fragment,
} from "react";
import {
    ALIGNMENTS,
    Container, ELEMENT_SIZES, ElementBaseProps,
    getComponent,
    getCssFramework,
    Icons,
    initialize,
    Label,
    SpanProps
} from "../index";
import {FormControlProps, FormFieldProps} from "../@types";
import {ArrayRegexIncludes} from "../../../utils";

export const FormField = (props: FormFieldProps) => {
    const {
        component = 'form-field',
        element = 'div',
        isGrouped = false,
        groupedMultiline = false,
        hasAddon = false,
        position,
        label,
        elementSize,
        items = [],
        ...restProps
    } = props;

    // Initialize and set default class if not exists
    const controls = Array.isArray(items)
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
    if (isGrouped) {
        const isGroupedClasses = getCssFramework().getDefaultStyleClass(
            component, element, 'is-grouped'
        );
        isGroupedClasses.forEach((itemClass: string) => {
            if (restProps['classes'] && !restProps['classes'].includes(itemClass)) {
                restProps['classes'].push(itemClass);
            }
        });
        if (groupedMultiline) {
            const groupedMultilineClasses = getCssFramework().getDefaultStyleClass(
                component, element, 'is-grouped-multiline'
            );
            groupedMultilineClasses.forEach((itemClass: string) => {
                if (restProps['classes'] && !restProps['classes'].includes(itemClass)) {
                    restProps['classes'].push(itemClass);
                }
            });
        }
        if (position) {
            const pattern = '^is-grouped-(' + ALIGNMENTS.join('|') + ')$';
            if (restProps['classes'] && ArrayRegexIncludes(restProps['classes'], new RegExp(pattern)) < 0) {
                restProps['classes'].push('is-grouped-' + position);
            }
        }
    }
    if (hasAddon) {
        const hasAddonClasses = getCssFramework().getDefaultStyleClass(
            component, element, 'has-addons'
        );
        hasAddonClasses.forEach((itemClass: string) => {
            if (restProps['classes'] && !restProps['classes'].includes(itemClass)) {
                restProps['classes'].push(itemClass);
            }
        });
        if (position) {
            const pattern = '^has-addons-(' + ALIGNMENTS.join('|') + ')$';
            if (restProps['classes'] && ArrayRegexIncludes(restProps['classes'], new RegExp(pattern)) < 0) {
                restProps['classes'].push('has-addons-' + position);
            }
        }
    }
    if (label) {
        label['classes'] = initialize(
            label['classes'], [], getCssFramework().getDefaultStyleClass(
                component, 'label'
            )
        );
        label['attributes'] = initialize(
            label['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
                component, 'label'
            )
        );
    }

    return (
        <Fragment>
            <Container
                {...restProps}
                element={element}
            >
                { label ? <Label {...label} /> : <Fragment /> }
                {
                    controls.length > 0 && controls.map((control: FormControlProps, idx: number) => {
                        return (
                            <Fragment key={idx}>
                                <FormControl {...control} elementSize={elementSize} />
                            </Fragment>
                        );
                    })
                }
            </Container>
        </Fragment>
    );
};

export const FormControl = (props: FormControlProps) => {
    const {
        component = 'form-control',
        children,
        leftIcon,
        rightIcon,
        elementSize,
        isExpanded = false,
        ...restProps
    } = props;

    // Initialize and set default class if not exists
    restProps['classes'] = initialize(
        props['classes'], [], getCssFramework().getDefaultStyleClass(
            component, props['element']
        )
    );
    restProps['attributes'] = initialize(
        props['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
            component, props['element']
        )
    );
    if (isExpanded) {
        const isExpandedClasses = getCssFramework().getDefaultStyleClass(
            component, props['element'], 'is-expanded'
        );
        isExpandedClasses.forEach((itemClass: string) => {
            if (restProps['classes'] && !restProps['classes'].includes(itemClass)) {
                restProps['classes'].push(itemClass);
            }
        });
    }

    let leftSpan: SpanProps = {element: 'span', inline: true} as SpanProps;
    if (leftIcon) {
        const leftIconClasses = getCssFramework().getDefaultStyleClass(
            component, 'icons', 'left'
        );
        leftIconClasses.forEach((iconClass: string) => {
            if (Array.isArray(restProps['classes']) && !restProps['classes'].includes(iconClass)) {
                restProps['classes'].push(iconClass);
            }
        });
        leftSpan['children'] =<Icons {...leftIcon} />;
        leftSpan['classes'] = initialize(
            leftSpan['classes'], [], getCssFramework().getDefaultStyleClass(
                component, 'span', 'left'
            )
        );
    }
    let rightSpan: SpanProps = {element: 'span', inline: true} as SpanProps;
    if (rightIcon) {
        const rightIconClasses = getCssFramework().getDefaultStyleClass(
            component, 'icons', 'right'
        );
        rightIconClasses.forEach((iconClass: string) => {
            if (Array.isArray(restProps['classes']) && !restProps['classes'].includes(iconClass)) {
                restProps['classes'].push(iconClass);
            }
        });
        rightSpan['children'] = <Icons {...rightIcon} />;
        rightSpan['classes'] = initialize(
            rightSpan['classes'], [], getCssFramework().getDefaultStyleClass(
                component, 'span', 'right'
            )
        );
    }
    if (elementSize) {
        const pattern = '^is-(' + ELEMENT_SIZES.join('|') + ')$'
        if (leftIcon) {
            if (leftSpan['classes'] && ArrayRegexIncludes(leftSpan['classes'], new RegExp(pattern)) < 0) {
                leftSpan['classes'].push('is-' + elementSize);
            }
        }
        if (rightIcon) {
            if (rightSpan['classes'] && ArrayRegexIncludes(rightSpan['classes'], new RegExp(pattern)) < 0) {
                rightSpan['classes'].push('is-' + elementSize);
            }
        }
    }

    // @ts-ignore
    return (<Container {...restProps}>
        {
            children && (typeof children === 'object') && Object.hasOwn(children, 'element')
                ? function <T extends ElementBaseProps>(items: T) {
                    console.debug('elementSize:');
                    console.debug(elementSize);
                    if (elementSize) {
                        const pattern = '^is-(' + ELEMENT_SIZES.join('|') + ')$'
                        if (items['classes'] === undefined) {
                            items['classes'] = [] as string[];
                        }
                        if (ArrayRegexIncludes(items['classes'], new RegExp(pattern)) < 0) {
                            items['classes'].push('is-' + elementSize);
                        }
                    }
                    const Component = getComponent(items);
                    // @ts-ignore
                    return (<Component {...items} />);
                }(children) : (
                    <Fragment>{children}</Fragment>
                )
        }
        { leftIcon && leftSpan.children ? <Container {...leftSpan} /> : <Fragment /> }
        { rightIcon && rightSpan.children ? <Container {...rightSpan} /> : <Fragment /> }
    </Container>);
};
