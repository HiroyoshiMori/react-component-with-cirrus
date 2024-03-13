import {
    Fragment,
} from "react";
import {ImageMapProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";
import {Area} from "./area";

export const ImageMap = (props: ImageMapProps) => {
    const {
        element: _,
        children,
        areas = [],
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...mapProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <map
                {...mapProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {
                    Array.isArray(areas) && areas.length > 0 && areas.map((area, idx: number) => {
                        const {
                            element: _,
                            classes = [],
                            attributes = {},
                            datasets = new Map(),
                            ...areaProps
                        } = area;
                        const datasetShown = convertDataSet(datasets);
                        return (
                            <Fragment key={idx}>
                                <Area
                                    {...areaProps}
                                    className={joinClasses(classes)}
                                    {...attributes}
                                    {...datasetShown}
                                />
                            </Fragment>
                        )
                    })
                }
                {children}
            </map>
        </Fragment>
    );
};
