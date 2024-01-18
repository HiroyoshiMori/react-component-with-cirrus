import {
    LabelHTMLAttributes,
    ReactNode,
} from "react";
import {
    CommonDatasetType,
} from "../index";

/** Type definition of property for label */
export type LabelProps = {
    children?: ReactNode;
    htmlFor?: string;
    classes?: string[];
    attributes?: LabelHTMLAttributes<HTMLLabelElement>;
    datasets?: CommonDatasetType;
};
