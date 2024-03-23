import {
    Fragment,
} from "react";
import {
    BrProps,
    TypeBreak,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Break = <T extends TypeBreak = BrProps>(props: T) => {
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
