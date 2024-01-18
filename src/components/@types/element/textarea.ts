import {
    TextareaHTMLAttributes,
} from "react";
import {
    AutoCapitalizeTypes,
    AutoCompleteTypes,
    CommonDatasetType,
    TextWrapTypes,
} from "../index";

/** Type definition of property for textarea */
export type TextareaProps = {
    name?: string;
    id?: string;
    children?: string;
    cols?: number;
    rows?: number;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    disabled?: boolean;
    maxLength?: number;
    minLength?: number;
    autoCapitalize?: AutoCapitalizeTypes;
    autoComplete?: AutoCompleteTypes;
    dir?: 'auto'|'ltr'|'rtl';
    dirName?: string;
    form?: string;
    wrap?: TextWrapTypes;
    classes?: string[];
    attributes?: TextareaHTMLAttributes<HTMLTextAreaElement>;
    datasets?: CommonDatasetType;
};
