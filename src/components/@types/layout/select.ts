import {
    OptgroupHTMLAttributes,
    OptionHTMLAttributes,
    SelectHTMLAttributes,
} from "react";
import {
    AutoCompleteTypes,
    CommonDatasetType,
} from "../index";
import {
    HrProps,
} from "../element";

/** Type definition of property for select */
export type SelectProps = {
    name?: string;
    id?: string;
    options?: (OptGroupProps|OptionProps|HrProps)[];
    selectedValue?: string;
    autoComplete?: AutoCompleteTypes;
    disabled?: boolean;
    form?: string;
    multiple?: boolean;
    required?: boolean;
    size?: number;
    classes?: SelectClasses;
    attributes?: SelectAttributes;
    datasets?: SelectDatasets;
};
/** Type definition of property for optgroup */
export type OptGroupProps = {
    is: 'optgroup';
    id?: string;
    label: string;
    options: OptionProps[];
    selectedValue?: string;
    disabled?: boolean;
    classes?: OptGroupClasses;
    attributes?: OptGroupAttributes;
    datasets?: OptGroupDatasets;
};
/** Type definition of property for option */
export type OptionProps = {
    name?: string;
    id?: string;
    children: string;
    value?: string;
    label?: string;
    selected?: boolean;
    disabled?: boolean;
    classes?: string[];
    attributes?: OptionHTMLAttributes<HTMLOptionElement>;
    datasets?: CommonDatasetType;
};

/** Type definition of style classes for select */
export type SelectClasses = {
    select?: string[];
} & OptGroupClasses;
/** Type definition of style classes for optgroup */
export type OptGroupClasses = {
    optgroup?: string[];
    option?: string[];
};
/** Type definition of additional attributes for select */
export type SelectAttributes = {
    select?: SelectHTMLAttributes<HTMLSelectElement>;
} & OptGroupAttributes;
/** Type definition of additional attributes for optgroup */
export type OptGroupAttributes = {
    optgroup?: OptgroupHTMLAttributes<HTMLOptGroupElement>;
    option?: OptionHTMLAttributes<HTMLOptionElement>;
};
/** Type definition of datasets for select */
export type SelectDatasets = {
    select?: CommonDatasetType;
} & OptGroupDatasets;
/** Type definition of datasets for optgroup */
export type OptGroupDatasets = {
    optgroup?: CommonDatasetType;
    option?: CommonDatasetType;
};
