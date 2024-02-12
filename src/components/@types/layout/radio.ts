import {
    HTMLAttributes,
} from "react";
import {
    ElementCommonProps,
    InputRadioProps, LabelProps, PProps,
} from "../element";

/** Type definition of property for labelled radio */
export type LabelledRadioProps = LabelProps & {
    radio: InputRadioProps,
    currentValue?: string | number | boolean;
};
/** Type definition of property for radio group */
export type RadioGroupProps = ElementCommonProps & {
    name?: string;
    items: LabelledRadioProps[];
    currentValue?: string | number | boolean;
    footnotes?: PProps;
    attributes?: HTMLAttributes<HTMLDivElement>;
};
