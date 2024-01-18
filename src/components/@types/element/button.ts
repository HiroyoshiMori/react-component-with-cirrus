import React, {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    HTMLAttributes,
    InputHTMLAttributes,
    ReactNode
} from "react";
import {
    AlternativeSizeTypes,
    ColorTypes,
    CommonDatasetType,
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
export type ButtonProps = {
    tag: React.ElementType<HTMLButtonElement | HTMLDivElement | HTMLInputElement | HTMLAnchorElement>;
    label: ReactNode;
    colorType?: ButtonColorTypes;
    size?: AlternativeSizeTypes;
    classes?: string[];
    attributes?: ButtonHTMLAttributes<HTMLButtonElement>
        | AnchorHTMLAttributes<HTMLAnchorElement>
        | InputHTMLAttributes<HTMLInputElement>
        | HTMLAttributes<HTMLDivElement>;
    datasets?: CommonDatasetType;
};
