import {
    Fragment,
} from "react";
import {ScriptProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Script = (props: ScriptProps) => {
    const {
        element: _,
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...scriptProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <script
                {...scriptProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </script>
        </Fragment>
    );
};
