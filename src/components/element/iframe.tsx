import {
    Fragment,
} from "react";
import {IframeProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Iframe = (props: IframeProps) => {
    const {
        element: _,
        title,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...iframeProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <iframe
                {...iframeProps}
                title={title}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            ></iframe>
        </Fragment>
    );
};
