import {
    Fragment,
} from "react";
import {
    TypeBreak,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Break = (props: TypeBreak) => {
    const {
        element = 'br',
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    const Tag = element;
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <Tag
                {...restProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            />
        </Fragment>
    );
};
