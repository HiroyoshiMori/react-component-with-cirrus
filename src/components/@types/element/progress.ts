import {ProgressHTMLAttributes, ReactNode} from "react";
import {AlternativeSizeTypes, ColorTypes, CommonDatasetType} from "../index";

export type ProgressProps = {
    id?: string;
    children?: ReactNode;
    value?: number;
    max: number;
    colorType?: ColorTypes;
    size?: AlternativeSizeTypes;
    classes?: string[];
    attributes?: ProgressHTMLAttributes<HTMLProgressElement>;
    datasets?: CommonDatasetType;
};
