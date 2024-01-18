import {
    HTMLAttributes,
    ReactNode,
} from "react";
import {
    CommonDatasetType,
} from "../index";

/** Type definition of property for figure */
export type FigureProps = {
    children?: ReactNode;
    label?: ReactNode;
    classes?: FigureClasses;
    attributes?: FigureAttributes;
    datasets?: FigureDatasets;
};
/** type definition of style classes for FigureImage */
export type FigureClasses = {
    figure?: string[];
    caption?: string[];
};
/** type definition of additional attributes for FigureImage */
export type FigureAttributes = {
    figure?: HTMLAttributes<HTMLElement>;
    caption?: HTMLAttributes<HTMLElement>;
};
/** type definition of datasets for FigureImage */
export type FigureDatasets = {
    figure?: CommonDatasetType;
    caption?: CommonDatasetType;
};
