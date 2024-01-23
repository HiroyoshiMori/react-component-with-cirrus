import {
    HTMLAttributes,
} from "react";
import {
    CommonDatasetType,
} from "../index";

/** Type definition of property for breaks */
export type BreakProps = HrProps | BrProps;

/** Type definition of property for horizontal rule */
export type HrProps = {
    element: 'hr';
    classes?: string[];
    attributes?: HTMLAttributes<HTMLHRElement>;
    datasets?: CommonDatasetType;
};

/** Type definition of property for line break (opportunity) */
export type BrProps = {
    element: 'br'|'wbr';
    classes?: string[];
    attributes?: HTMLAttributes<HTMLBRElement>;
    datasets?: CommonDatasetType;
};
