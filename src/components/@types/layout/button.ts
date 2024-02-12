import React, {
    AnchorHTMLAttributes,
    HTMLAttributes,
    ReactNode
} from "react";
import {
    AlternativeSizeTypes,
    ButtonColorTypes,
    ElementCommonProps,
} from "../../index";

/** Type definition of property for button(by <a>) */
export type AButtonProps = ElementCommonProps & {
    element?: 'a';
    name?: string;
    children: ReactNode;
    colorType?: ButtonColorTypes;
    size?: AlternativeSizeTypes;
    attributes?: AnchorHTMLAttributes<HTMLAnchorElement>;
} & ({
    href: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
} | {
    href?: string;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
});
/** Type definition of property for button(by <div>) */
export type DivButtonProps = ElementCommonProps & {
    element?: 'div';
    name?: string;
    children: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    colorType?: ButtonColorTypes;
    size?: AlternativeSizeTypes;
    attributes?: HTMLAttributes<HTMLDivElement>;
}