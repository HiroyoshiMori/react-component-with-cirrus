import {
    HTMLAttributes,
    ReactNode,
} from "react";
import {
    CommonDatasetType,
} from "../index";

export type ParagraphProps = {
    id?: string;
    children?: ReactNode;
    classes?: string[];
    attributes?: HTMLAttributes<HTMLParagraphElement>;
    datasets?: CommonDatasetType;
};
