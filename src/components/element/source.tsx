import React, {
    Fragment,
} from "react";
import {
    CommonDatasetType,
    SourceProps, SourceSrcProps, SourceSrcsetProps,
} from "../@types";
import {convertDataSet} from "../../utils";
import {sprintf} from "sprintf-js";

export const Source = (props: SourceProps) => {
    let src, srcSet, media = '', sizes = '', restProps;
    let classes, attributes, datasets: CommonDatasetType = new Map();

    if (Object.hasOwn(props, 'src')) {
        ({
            src,
            classes = [],
            attributes = {},
            datasets = new Map(),
            ...restProps
        } = (props as SourceSrcProps));
    } else if (Object.hasOwn(props, 'srcset')) {
        let mediaData, sizesData;
        ({
            srcSet,
            media: mediaData,
            sizes: sizesData,
            classes = [],
            attributes = {},
            datasets = new Map(),
            ...restProps
        } = (props as SourceSrcsetProps));
        if (mediaData) {
            media = sprintf(
                '(%s)', mediaData.join(') and (')
            );
        }
        if (sizesData) {
            sizes = typeof sizesData === 'number'
                ? (sizesData + 'px') : sizesData;
        }
    }
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <source
                src={src}
                srcSet={srcSet}
                media={media || undefined}
                sizes={sizes || undefined}
                {...restProps}
                className={classes?.join(' ')}
                {...attributes}
                {...datasetShown}
            />
        </Fragment>
    );
};
