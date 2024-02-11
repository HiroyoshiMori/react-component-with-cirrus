import React, {
    Fragment,
} from "react";
import {
    TypeContainer,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Container = (props: TypeContainer) => {
    const {
        element: itemType,
        inline,
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    let Tag: any;
    const additionalProps = restProps !== undefined
        ? {...restProps} : {};
    if (inline) {
        Tag = props.element ?? 'span';
    } else {
        Tag = props.element ?? 'div';
    }
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <Tag
                {...additionalProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </Tag>
        </Fragment>
    );
};
