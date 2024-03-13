import {
    HTMLAttributes,
} from "react";
import {
    ElementCommonProps,
    InputRadioProps, LabelProps, PProps,
} from "../element";

/** Type definition of property for labelled radio */
export type LabelledRadioProps = LabelProps & {
    component?: 'labelled-radio',
    radio: InputRadioProps,
    currentValue?: string | number | boolean;
};
/** Type definition of property for radio group */
export type RadioGroupProps = ElementCommonProps<HTMLDivElement, HTMLAttributes<HTMLDivElement>> & {
    name?: string;
    items: LabelledRadioProps[];
    currentValue?: string | number | boolean;
    footnotes?: PProps;
};
