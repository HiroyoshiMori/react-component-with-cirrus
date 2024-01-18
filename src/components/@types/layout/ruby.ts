import {
    HTMLAttributes,
} from "react";
import {
    CommonDatasetType,
} from "../index";

/** Type definition of property for ruby */
export type RubyProps = {
    id?: string;
    items: RubyTextProps[];
    useRp?: boolean;
    classes?: RubyClasses;
    attributes?: RubyAttributes;
    datasets?: RubyDatasets;
};
/** Type definition for property of each character */
export type RubyTextProps = {
    label: string;
    ruby?: string;
};
/** Type definition for style classes for ruby */
export type RubyClasses = {
    ruby?: string[];
    rp?: string[];
    rt?: string[];
};
/** Type definition for additional attributes for ruby */
export type RubyAttributes = {
    ruby?: HTMLAttributes<HTMLElement>;
    rp?: HTMLAttributes<HTMLElement>;
    rt?: HTMLAttributes<HTMLElement>;
};
/** Type definition for datasets for ruby */
export type RubyDatasets = {
    ruby?: CommonDatasetType;
    rp?: CommonDatasetType;
    rt?: CommonDatasetType;
};
