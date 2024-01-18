import {
    HTMLAttributes,
    ReactNode,
} from "react";
import {
    CommonDatasetType,
} from "../index";

/** Type definition of property for heading */
export type HeadingProps = {
    id?: string;
    level: number;
    children?: ReactNode;
    classes?: string[];
    attributes?: HTMLAttributes<HTMLHeadingElement>;
    datasets?: CommonDatasetType;
};
