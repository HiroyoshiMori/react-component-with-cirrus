import {
    DetailsHTMLAttributes, HTMLAttributes,
    ReactNode,
} from "react";
import {
    CommonDatasetType,
} from "../index";

/** Type definition of property for details */
export type DetailsProps = {
    id?: string;
    children?: ReactNode;
    open?: boolean;
    summary: ReactNode;
    classes?: DetailsClasses;
    attributes?: DetailsAttributes;
    datasets?: DetailsDatasets;
};
/** Type definition of style classes for details */
export type DetailsClasses = {
    details?: string[];
    summary?: string[];
};
/** Type definition of additional attributes for details */
export type DetailsAttributes = {
    details?: DetailsHTMLAttributes<HTMLDetailsElement>;
    summary?: HTMLAttributes<HTMLElement>;
};
/** Type definition of datasets for details */
export type DetailsDatasets = {
    details?: CommonDatasetType;
    summary?: CommonDatasetType;
};
