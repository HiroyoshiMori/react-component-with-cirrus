import {
    TimeHTMLAttributes,
} from "react";
import {
    CommonDatasetType,
} from "../index";

/** Type definition of property for time */
export type TimeProps = {
    children?: string;
    dateTime?: string;
    classes?: string[];
    attributes?: TimeHTMLAttributes<HTMLTimeElement>;
    datasets?: CommonDatasetType;
};
