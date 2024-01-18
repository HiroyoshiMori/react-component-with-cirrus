import {
    HTMLAttributes,
    InputHTMLAttributes,
    LabelHTMLAttributes,
    ReactNode,
} from "react";
import {
    CommonDatasetType,
    InputProps,
} from "../index";

// -----------------------------------------------------------------
// Type definition of properties
// -----------------------------------------------------------------
/** Type definition of property for form input */
export type FormInputProps = {
    label?: ReactNode;
    inputProps: InputProps;
    footnotes?: ReactNode;
    classes?: InputClasses;
    attributes?: InputAttributes;
    datasets?: InputDatasets;
};

// -----------------------------------------------------------------
// Type definition of style classes
// -----------------------------------------------------------------
/** Type definition of style classes for input */
export type InputClasses = {
    div?: string[];
    label?: string[];
    input?: string[];
    footnotes?: string[];
};

// -----------------------------------------------------------------
// Type definition of additional attributes
// -----------------------------------------------------------------
/** Type definition of additional attributes for input */
export type InputAttributes = {
    div?: HTMLAttributes<HTMLDivElement>;
    label?: LabelHTMLAttributes<HTMLLabelElement>;
    input?: InputHTMLAttributes<HTMLInputElement>;
    footnotes?: HTMLAttributes<HTMLSpanElement>;
};

// -----------------------------------------------------------------
// Type definition of datasets
// -----------------------------------------------------------------
/** Type definition of datasets for input */
export type InputDatasets = {
    div?: CommonDatasetType;
    label?: CommonDatasetType;
    input?: CommonDatasetType;
    footnotes?: CommonDatasetType;
};


