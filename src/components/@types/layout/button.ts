import React, {
    AnchorHTMLAttributes,
    HTMLAttributes,
    ReactNode
} from "react";
import {
    AlternativeSizeTypes,
    ButtonColorTypes, DivProps,
    ElementCommonProps, TypeButton,
} from "../../index";

/** Type definition of property for button(by <a>) */
export type AButtonProps = ElementCommonProps<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>> & {
    element: 'a';
    name?: string;
    children: ReactNode;
    colorType?: ButtonColorTypes;
    size?: AlternativeSizeTypes;
} & ({
    href: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
} | {
    href?: string;
    onClick: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
});
/** Type definition of property for button(by <div>) */
export type DivButtonProps = ElementCommonProps<HTMLDivElement, HTMLAttributes<HTMLDivElement>> & {
    element: 'div';
    name?: string;
    children: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
    colorType?: ButtonColorTypes;
    size?: AlternativeSizeTypes;
};

/** Type definition of property for buttons */
export type ButtonsProps = Omit<DivProps, 'children'> & {
    element: 'div',
    items: TypeButton | TypeButton[];
};
