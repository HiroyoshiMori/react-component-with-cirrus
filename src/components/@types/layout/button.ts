import React, {
    AnchorHTMLAttributes,
    HTMLAttributes,
    ReactNode
} from "react";
import {
    AlternativeSizeTypes,
    ButtonColorTypes,
    CommonDatasetType,
} from "../index";

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