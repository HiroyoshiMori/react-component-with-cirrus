import {
    Fragment,
} from "react";
import {LinkProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Link = (props: LinkProps) => {
    const {
        element: _,
        itemProp,
        imageSrcset = [],
        mediaQuery = [],
        sizes: sizeData,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...linkProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);
    const srcset: string[] = [];
    if (Array.isArray(imageSrcset)) {
        imageSrcset.forEach((src: [string, string]) => {
            srcset.push(src.join(' '));
        })
    }
    const sizes = sizeData !== undefined
        ? Array.isArray(sizeData)
            ? sizeData.join('x') : sizeData
        : undefined;

    return (
        <Fragment>
            <link
                {...linkProps}
                itemProp={''}
                imageSrcSet={srcset.length > 0 ? srcset.join(', ') : undefined}
                media={Array.isArray(mediaQuery) && mediaQuery.length > 0 ? ('(' + mediaQuery.join(') and (') + ')') : undefined}
                sizes={sizes}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            />
        </Fragment>
    );
};
