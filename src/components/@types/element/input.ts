import React, {
    InputHTMLAttributes,
} from "react";
import {
    AutoCompleteTypes,
    CommonDatasetType,
    CommonProps,
    FormEnctypeTypes,
    FormMethodTypes,
    InputModeTypes,
    TargetTypes,
} from "../index";

/** Type definition of property for input */
export type InputProps = InputButtonProps
    | InputCheckboxProps
    | InputColorProps
    | InputDateProps
    | InputEmailProps
    | InputFileProps
    | InputHiddenProps
    | InputImageProps
    | InputNumberProps
    | InputPasswordProps
    | InputRadioProps
    | InputRangeProps
    | InputSubmitProps
    | InputSearchProps
    | InputTelProps
    | InputTextProps
    | InputUrlProps;

/** Type definition of property for common input */
export type InputCommonProps = CommonProps & {
    name?: string;
    value?: string;
    disabled?: boolean;
    form?: string;
    inputmode?: InputModeTypes;
    tabindex?: number;
    title?: string;
    classes?: string[];
    attributes?: InputHTMLAttributes<HTMLInputElement>;
    datasets?: CommonDatasetType;
};

// -------------------------------------------------------
// Type definition for each type attribute
// -------------------------------------------------------
/**
 *  Type definition of property for input[type=text]
 *  @see https://developer.mozilla.org/ja/docs/Web/API/Popover_API
 */
export type InputButtonProps = InputCommonProps & {
    type: 'button';
    popovertarget?: string;
    popovertargetaction?: 'hide' | 'show' | 'toggle';
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
/** Type definition of property for input[type=checkbox] */
export type InputCheckboxProps = InputCommonProps & {
    type: 'checkbox';
    checked?: boolean;
    readonly?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/**
 *  Type definition of property for input[type=color]
 *  @see https://developer.mozilla.org/ja/docs/Web/HTML/Element/datalist
 */
export type InputColorProps = InputCommonProps & {
    type: 'color';
    autoComplete?: AutoCompleteTypes;
    list?: string;
    datalist?: string[];
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=date,datetime-local,month,time,week] */
export type InputDateProps = InputCommonProps & {
    type: 'date' | 'datetime-local' | 'month' | 'time' | 'week';
    autoComplete?: AutoCompleteTypes;
    list?: string;
    datalist?: string[];
    max?: number;
    min?: number;
    readonly?: boolean;
    required?: boolean;
    step?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=email] */
export type InputEmailProps = InputCommonProps & {
    type: 'email';
    autoComplete?: AutoCompleteTypes;
    list?: string;
    datalist?: string[];
    maxlength?: number;
    minlength?: number;
    multiple?: boolean;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    size?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=file] */
export type InputFileProps = InputCommonProps & {
    type: 'file';
    accept?: string[];
    capture?: 'user' | 'environment';
    multiple?: boolean;
    required?: boolean;
};
/** Type definition of property for input[type=hidden] */
export type InputHiddenProps = InputCommonProps & {
    type: 'hidden';
    autoComplete?: AutoCompleteTypes;
};
/** Type definition of property for input[type=image] */
export type InputImageProps = InputCommonProps & {
    type: 'image';
    alt?: string;
    formaction?: string;
    formenctype?: FormEnctypeTypes;
    formmethod?: FormMethodTypes;
    formnovalidate?: boolean;
    formtarget?: TargetTypes;
    height?: number;
    src?: string;
    width?: number;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
/** Type definition of property for input[type=number] */
export type InputNumberProps = InputCommonProps & {
    type: 'number';
    autoComplete?: AutoCompleteTypes;
    list?: string;
    datalist?: string[];
    max?: number;
    min?: number;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    step?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=password] */
export type InputPasswordProps = InputCommonProps & {
    type: 'password';
    autoComplete?: AutoCompleteTypes;
    maxlength?: number;
    minlength?: number;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    size?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=radio] */
export type InputRadioProps = InputCommonProps & {
    type: 'radio';
    checked?: boolean;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=range] */
export type InputRangeProps = InputCommonProps & {
    type: 'range';
    autoComplete?: AutoCompleteTypes;
    list?: string;
    datalist?: string[];
    max?: number;
    min?: number;
    step?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=search] */
export type InputSearchProps = InputCommonProps & {
    type: 'search';
    autoComplete?: AutoCompleteTypes;
    dir?: 'auto'|'ltr'|'rtl';
    dirName?: string;
    list?: string;
    datalist?: string[];
    maxlength?: number;
    minlength?: number;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=submit] */
export type InputSubmitProps = InputCommonProps & {
    type: 'submit';
    formaction?: string;
    formenctype?: FormEnctypeTypes;
    formmethod?: FormMethodTypes;
    formnovalidate?: boolean;
    formtarget?: TargetTypes;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
/** Type definition of property for input[type=tel] */
export type InputTelProps = InputCommonProps & {
    type: 'tel';
    autoComplete?: AutoCompleteTypes;
    list?: string;
    datalist?: string[];
    maxlength?: number;
    minlength?: number;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    size?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=text] */
export type InputTextProps = InputCommonProps & {
    type: 'text';
    autoComplete?: AutoCompleteTypes;
    dir?: 'auto'|'ltr'|'rtl';
    dirName?: string;
    list?: string;
    datalist?: string[];
    maxlength?: number;
    minlength?: number;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    size?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=url] */
export type InputUrlProps = InputCommonProps & {
    type: 'url';
    autoComplete?: AutoCompleteTypes;
    list?: string;
    datalist?: string[];
    maxlength?: number;
    minlength?: number;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
