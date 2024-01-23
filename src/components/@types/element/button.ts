import React, {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    HTMLAttributes,
    ReactNode
} from "react";
import {
    AlternativeSizeTypes,
    ColorTypes,
    CommonDatasetType, FormEnctypeTypes, FormMethodTypes, TargetTypes,
} from "../index";

/** Type definition of button color types */
type ButtonColorTypes = ColorTypes | {
    outline: true;
    colorType: ColorTypes;
} | {
    background?: ColorTypes;
    border?: ColorTypes;
    text?: ColorTypes;
};
/** Type definition of property for button */
export type ButtonProps = ElementButtonProps | AButtonProps | DivButtonProps;
/** Type definition of property for button(by <button>) */
export type ElementButtonProps = {
    element?: 'button';
    id?: string;
    name?: string;
    children: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement|HTMLAnchorElement|HTMLDivElement>) => void;
    colorType?: ButtonColorTypes;
    size?: AlternativeSizeTypes;
    type?: 'submit'|'rest'|'button';
    value?: string;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEnctype?: FormEnctypeTypes;
    formMethod?: FormMethodTypes;
    formNovalidate?: boolean;
    formTarget?: TargetTypes;
    popoverTarget?: string;
    popoverTargetAction?: 'hide'|'show'|'toggle';
    classes?: string[];
    attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
    datasets?: CommonDatasetType;
};
/** Type definition of property for button(by <a>) */
export type AButtonProps = {
    element?: 'a';
    id?: string;
    name?: string;
    children: ReactNode;
    colorType?: ButtonColorTypes;
    size?: AlternativeSizeTypes;
    classes?: string[];
    attributes?: AnchorHTMLAttributes<HTMLAnchorElement>;
    datasets?: CommonDatasetType;
} & ({
    href: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
} | {
    href?: string;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
});
/** Type definition of property for button(by <div>) */
export type DivButtonProps = {
    element?: 'div';
    id?: string;
    name?: string;
    children: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    colorType?: ButtonColorTypes;
    size?: AlternativeSizeTypes;
    classes?: string[];
    attributes?: HTMLAttributes<HTMLDivElement>;
    datasets?: CommonDatasetType;
}