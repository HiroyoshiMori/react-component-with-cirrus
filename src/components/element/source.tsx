import React, {
    Fragment,
} from "react";
import {sprintf} from "sprintf-js";
import {
    CommonDatasetType,
    SourceProps, SourceSizesProps, SourceSrcProps, SourceSrcsetProps, SrcSetInSourceProps,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Source = (props: SourceProps) => {
    let src, media = '', width, height, restProps;
    let srcset: string | undefined ='';
    let sizes: string | undefined = '';
    let mediaQuery: string[] | undefined;
    let classes, attributes, datasets: CommonDatasetType = new Map();

    if (props === undefined || props === null) {
        return <Fragment />;
    }

    if (Object.hasOwn(props, 'src')) {
        ({
            src,
            media: mediaQuery = [],
            width,
            height,
            classes = [],
            attributes = {},
            datasets = new Map(),
            ...restProps
        } = (props as SourceSrcProps));
        if (mediaQuery && Array.isArray(mediaQuery) && mediaQuery.length > 0) {
            media = sprintf('(%s)', mediaQuery.join(') and ('));
        }
    } else if (Object.hasOwn(props, 'srcSet')) {
        let defaultSize, mediaSizes: SourceSizesProps[], srcSets;
        let con: string = '';
        ({
            srcSet: srcSets,
            media: mediaQuery = [],
            width,
            height,
            sizes: mediaSizes = [],
            defaultSize,
            classes = [],
            attributes = {},
            datasets = new Map(),
            ...restProps
        } = (props as SourceSrcsetProps));
        if (srcSets && Array.isArray(srcSets) && srcSets.length > 0) {
            srcSets.forEach((s: SrcSetInSourceProps) => {
                const mediaSize = s.mediaSize
                    ? (typeof s.mediaSize === 'number' ? (s.mediaSize + 'w') : s.mediaSize)
                    : undefined;
                srcset += sprintf(
                    '%s%s %s', con, s.src, mediaSize ?? ''
                );
                con = ', ';
            });
        }
        if (mediaSizes && Array.isArray(mediaSizes)) {
            con = '';
            mediaSizes.map((mediaSize: SourceSizesProps, idx: number) => {
                sizes += sprintf(
                    '%s(%s) %s',
                    con, mediaSize.mediaQuery.join(') and ('),
                    typeof mediaSize.size === 'number' ? (mediaSize.size + 'vw') : mediaSize.size
                );
                con = ', ';
            });
            if (defaultSize) {
                sizes += sprintf(
                    '%s%s', con, (typeof defaultSize === 'number')
                        ? (defaultSize + 'vw') : defaultSize
                );
            }
        }
        if (mediaQuery && Array.isArray(mediaQuery) && mediaQuery.length > 0) {
            media = sprintf('(%s)', mediaQuery.join(') and ('));
        }
    }
    if (restProps && Object.hasOwn(restProps, 'element')) {
        delete restProps.element;
    }
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <source
                src={src}
                srcSet={srcset || undefined}
                media={media || undefined}
                width={width && width > 0 ? width : undefined}
                height={height && height > 0 ? height : undefined}
                sizes={sizes || undefined}
                {...restProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            />
        </Fragment>
    );
};
