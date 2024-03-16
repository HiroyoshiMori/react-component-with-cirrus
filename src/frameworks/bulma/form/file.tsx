import {
    Fragment, HTMLAttributes,
} from "react";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {COLORS, FormFileProps} from "../@types";
import {
    Container,
    getCssFramework, Icons,
    IconsProps,
    initialize,
    Input,
    Label,
    LabelProps,
    SpanProps
} from "../../../components";
import {ArrayRegexIncludes} from "../../../utils";

export const FormFile = (props: FormFileProps) => {
    const {
        component = 'form-file',
        element = 'div',
        label,
        file,
        icon: uploadIcon = {icon: icon({name: 'upload'})} as IconsProps,
        isBoxed = false,
        isExpanded = false,
        fileName,
        elementColor,
        ...restProps
    } = props;

    // Initialize and set default class if not exists
    const labelProps: LabelProps = {element: 'label'} as LabelProps;
    const labelSpanProps: SpanProps = {element: 'span'} as SpanProps;
    const ctaSpanProps: SpanProps = {element: 'span'} as SpanProps;
    const iconSpanProps: SpanProps = {element: 'span'} as SpanProps;
    const filenameSpanProps: SpanProps = {element: 'span'} as SpanProps;

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
    file['classes'] = initialize(
        file['classes'], [], getCssFramework().getDefaultStyleClass(
            component, 'input'
        )
    );
    file['attributes'] = initialize(
        file['attributes'] as HTMLAttributes<HTMLInputElement>, {}, getCssFramework().getDefaultAdditionalAttributes(
            component, 'input'
        )
    );
    labelProps['classes'] = initialize(
        labelProps['classes'], [], getCssFramework().getDefaultStyleClass(
            component, 'label'
        )
    );
    labelProps['attributes'] = initialize(
        labelProps['attributes'] as HTMLAttributes<HTMLLabelElement>, {}, getCssFramework().getDefaultAdditionalAttributes(
            component, 'label'
        )
    );
    ctaSpanProps['classes'] = initialize(
        [] as string[], [], getCssFramework().getDefaultStyleClass(
            component, 'span', 'cta'
        )
    );
    ctaSpanProps['attributes'] = initialize(
        {} as HTMLAttributes<HTMLSpanElement>, {}, getCssFramework().getDefaultAdditionalAttributes(
            component, 'span', 'cta'
        )
    );
    labelSpanProps['classes'] = initialize(
        [] as string[], [], getCssFramework().getDefaultStyleClass(
            component, 'span', 'label'
        )
    );
    labelSpanProps['attributes'] = initialize(
        {} as HTMLAttributes<HTMLSpanElement>, {}, getCssFramework().getDefaultAdditionalAttributes(
            component, 'span', 'label'
        )
    );

    iconSpanProps['classes'] = initialize(
        [] as string[], [], getCssFramework().getDefaultStyleClass(
            component, 'span', 'icon'
        )
    );
    iconSpanProps['attributes'] = initialize(
        {} as HTMLAttributes<HTMLSpanElement>, {}, getCssFramework().getDefaultAdditionalAttributes(
            component, 'span', 'icon'
        )
    );

    if (fileName) {
        const hasNameClasses = getCssFramework().getDefaultStyleClass(
            component, element, 'has-filename'
        );
        hasNameClasses.forEach((itemClass: string) => {
            if (restProps['classes'] && !restProps['classes'].includes(itemClass)) {
                restProps['classes'].push(itemClass);
            }
        });
        filenameSpanProps['classes'] = initialize(
            [] as string[], [], getCssFramework().getDefaultStyleClass(
                component, 'span', 'filename'
            )
        );
        filenameSpanProps['attributes'] = initialize(
            {} as HTMLAttributes<HTMLSpanElement>, {}, getCssFramework().getDefaultAdditionalAttributes(
                component, 'span', 'filename'
            )
        );
    }
    if (isBoxed) {
        const isBoxedClasses = getCssFramework().getDefaultStyleClass(
            component, element, 'is-boxed'
        );
        isBoxedClasses.forEach((itemClass: string) => {
            if (restProps['classes'] && !restProps['classes'].includes(itemClass)) {
                restProps['classes'].push(itemClass);
            }
        });
    }
    if (isExpanded) {
        const isExpandedClasses = getCssFramework().getDefaultStyleClass(
            component, element, 'is-expanded'
        );
        isExpandedClasses.forEach((itemClass: string) => {
            if (restProps['classes'] && !restProps['classes'].includes(itemClass)) {
                restProps['classes'].push(itemClass);
            }
        });
    }
    if (elementColor) {
        const pattern = '^is-(' + COLORS.join('|') + ')$'
        if (ArrayRegexIncludes(restProps['classes'], new RegExp(pattern)) < 0) {
            restProps['classes'].push('is-' + elementColor);
        }
    }

    return (
        <Fragment>
            <Container
                {...restProps}
                element={element}
            >
                <Label
                    {...labelProps}
                >
                    <Input
                        {...file}
                        noDefaultClass={true}
                    />
                    <Container
                        {...ctaSpanProps}
                    >
                        {
                            uploadIcon
                                ? <Container {...iconSpanProps} ><Icons {...uploadIcon} /></Container>
                                : <Fragment />
                        }
                        <Container
                            {...labelSpanProps}
                        >
                            {label}
                        </Container>
                    </Container>
                    {
                        fileName ? (
                            <Container {...filenameSpanProps} >{fileName}</Container>
                        ) : <Fragment />
                    }
                </Label>
            </Container>
        </Fragment>
    );
};
