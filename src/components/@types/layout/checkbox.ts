import {
    HTMLAttributes,
} from "react";
import {
    ElementCommonProps, InputCheckboxProps,
    LabelProps, PProps,
} from "../element";

/** Type definition of property for labelled checkbox */
export type LabelledCheckboxProps = LabelProps & {
    checkbox: InputCheckboxProps,
    currentValues?: (string | number | boolean)[];
};
/** Type definition of property for checkbox group */
export type CheckboxGroupProps = ElementCommonProps & {
    name?: string;
    items: LabelledCheckboxProps[];
    currentValues?: (string | number | boolean)[];
    footnotes?: PProps;
    attributes?: HTMLAttributes<HTMLDivElement>;
};
