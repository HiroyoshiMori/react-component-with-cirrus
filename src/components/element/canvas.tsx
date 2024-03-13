import {
    Fragment,
} from "react";
import {
    CanvasProps,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Canvas = (props: CanvasProps) => {
    const {
        element: _,
        children,
        width = 300,
        height = 150,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    // Initialize
    const datasetShow = convertDataSet(datasets);

    return (
        <Fragment>
            <canvas
                {...restProps}
                width={width}
                height={height}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShow}
            >
                {children}
            </canvas>
        </Fragment>
    );
};
