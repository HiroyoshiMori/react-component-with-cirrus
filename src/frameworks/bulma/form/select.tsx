import {
    Fragment,
} from "react";
import {COLORS, ELEMENT_SIZES, ELEMENT_STATES, FormSelectProps} from "../@types";
import {Container, getCssFramework, initialize, Select} from "../index";
import {ArrayRegexIncludes} from "../../../utils";

export const FormSelect = (props: FormSelectProps) => {
    const {
        component = 'form-select',
        element = 'div',
        select,
        elementSize,
        elementState,
        elementColor,
        selectedValue,
        multiple = false,
        size = 0,
        ...restProps
    } = props;

    // Initialize and set default classes if not exists
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
    if (selectedValue) {
        select.selectedValue = selectedValue;
    }
    if (multiple) {
        select.multiple = multiple;
    }
    if (size) {
        select.size = size && size > 0 ? size : undefined;
    }

    if (elementSize) {
        const pattern = '^is-(' + ELEMENT_SIZES.join('|') + ')$'
        if (ArrayRegexIncludes(restProps['classes'], new RegExp(pattern)) < 0) {
            restProps['classes'].push('is-' + elementSize);
        }
    }
    if (elementState) {
        const pattern = '^is-(' + ELEMENT_STATES.join('|') + ')$'
        if (ArrayRegexIncludes(restProps['classes'], new RegExp(pattern)) < 0) {
            restProps['classes'].push('is-' + elementState);
        }
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
                <Select {...select} />
            </Container>
        </Fragment>
    );
};
