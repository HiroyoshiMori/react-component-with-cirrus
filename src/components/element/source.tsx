import React, {
    Fragment,
} from "react";
import {sprintf} from "sprintf-js";
import {
    CommonDatasetType,
    SourceProps, SourceSrcProps, SourceSrcsetProps, SrcSetProps,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Source = (props: SourceProps) => {
    let src, media = '', restProps;
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
            classes = [],
            attributes = {},
            datasets = new Map(),
            ...restProps
        } = (props as SourceSrcProps));
        if (mediaQuery && Array.isArray(mediaQuery) && mediaQuery.length > 0) {
            media = sprintf('(%s)', mediaQuery.join(') and ('));
        }
    } else if (Object.hasOwn(props, 'srcSet')) {
        let defaultSize, srcSets;
        let con: string = '';
        ({
            srcSet: srcSets,
            media: mediaQuery = [],
            defaultSize,
            classes = [],
            attributes = {},
            datasets = new Map(),
            ...restProps
        } = (props as SourceSrcsetProps));
        if (srcSets && Array.isArray(srcSets) && srcSets.length > 0) {
            srcSets.forEach((s: SrcSetProps) => {
                const mediaSize = s.mediaSize
                    ? (typeof s.mediaSize === 'number' ? (s.mediaSize + 'w') : s.mediaSize)
                    : undefined;
                srcset += sprintf(
                    '%s%s %s', con, s.src, mediaSize ?? ''
                );
                con = ', ';
            });
        }
        if (defaultSize) {
            sizes += sprintf('%s%s', sizes ? con : '', (typeof defaultSize === 'number')
                ? (defaultSize + 'w') : defaultSize
            );
            if (restProps.src !== undefined) {
                srcset += sprintf(
                    '%s%s %s', con, restProps.src, (typeof defaultSize === 'number')
                        ? (defaultSize + 'w') : defaultSize
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
                sizes={sizes || undefined}
                {...restProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            />
        </Fragment>
    );
};
