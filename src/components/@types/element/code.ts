import {HTMLAttributes, ReactNode} from "react";
import {CommonDatasetType} from "../index";

export type CodeProps = {
    id?: string;
    children?: ReactNode;
    "data-lang"?: string;
    dark?: boolean;
    inline?: boolean;
    classes?: string[];
    attributes?: HTMLAttributes<HTMLElement>;
    datasets?: CommonDatasetType;
};
