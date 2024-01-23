import React, {
    Fragment,
} from "react";
import {
    cssFramework,
    HeadingProps,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Heading = (props: HeadingProps) => {
    const {
        id,
        level,
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    let Tag;
    switch (level) {
        case 1: Tag = 'h1'; break;
        case 2: Tag = 'h2'; break;
        case 4: Tag = 'h4'; break;
        case 5: Tag = 'h5'; break;
        case 6: Tag = 'h6'; break;
        default:
            Tag = 'h3';
    }
    const defaultClasses = cssFramework.getDefaultStyleClass(
        'header', Tag
    );
    defaultClasses?.forEach((styleClass) => {
        if (Array.isArray(classes) && !classes.includes(styleClass)) {
            classes.push(styleClass);
        }
    });
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <Tag
                id={id}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </Tag>
        </Fragment>
    );
};
