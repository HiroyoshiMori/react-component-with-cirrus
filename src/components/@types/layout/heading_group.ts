import {
    HTMLAttributes,
    ReactNode,
} from "react";
import {
    ParagraphProps,
} from "../element";
import {
    CommonDatasetType,
} from "../index";

/** Type definition of property for heading group */
export type HeadingGroupProps = {
    id?: string;
    level: number;
    children?: ReactNode;
    paragraphs: ParagraphProps[];
    classes?: HeadingGroupClasses;
    attributes?: HeadingGroupAttributes;
    datasets?: HeadingGroupDatasets;
};

/** Type definition of style classes for heading group */
export type HeadingGroupClasses = {
    hgroup?: string[];
    heading?: string[];
    paragraph?: string[];
};
/** Type definition of attributes for heading group */
export type HeadingGroupAttributes = {
    hgroup?: HTMLAttributes<HTMLElement>;
    heading?: HTMLAttributes<HTMLHeadingElement>;
    paragraph?: HTMLAttributes<HTMLParagraphElement>;
};
/** Type definition of datasets for heading group */
export type HeadingGroupDatasets = {
    hgroup?: CommonDatasetType;
    heading?: CommonDatasetType;
    paragraph?: CommonDatasetType;
};
