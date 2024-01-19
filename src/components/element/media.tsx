import React, {
    Fragment,
} from "react";
import {
    ImageSrcSetProps,
    MediaProps, SourceSrcProps,
    SourceSrcsetProps,
} from "../@types";
import {
    convertDataSet,
} from "../../utils";
import {sprintf} from "sprintf-js";
import {Source} from "./source";

export const Media = (props: MediaProps) => {
    const {
        element,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    const Tag = element;
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            {
                (element === 'embed') ? (
                    <Tag
                        {...restProps}
                        className={classes.join(' ')}
                        {...attributes}
                        {...datasetShown}
                    />
                ) : (element === 'img') ? function() {
                    // Remake variable for rest of props
                    const {
                        element: itemElement,
                        imageSizes,
                        classes = [],
                        attributes = {},
                        datasets = new Map(),
                        ...imgProps
                    } = props;
                    const datasetShown = convertDataSet(datasets);
                    let sizes: string | undefined = '';
                    let srcSet: string | undefined = '';
                    let con: string = '';
                    if (imageSizes) {
                        imageSizes.srcSet?.forEach((s: ImageSrcSetProps) => {
                            const mediaSize = typeof s.mediaSize === 'number'
                                ? (s.mediaSize + 'w') : s.mediaSize;
                            if (s.mediaQuery) {
                                sizes += sprintf(
                                    '%s(%s) %s', con, s.mediaQuery.join(') and ('), mediaSize
                                );
                            }
                            srcSet += sprintf(
                                '%s%s %s', con, s.src, mediaSize
                            );
                            con = ', ';
                        });
                        if (imageSizes.defaultSize) {
                            sizes += sprintf('%s%s', con, (typeof imageSizes.defaultSize === 'number')
                                ? (imageSizes.defaultSize + 'px') : imageSizes.defaultSize
                            );
                            srcSet += sprintf(
                                '%s%s %s', con, imgProps.src, (typeof imageSizes.defaultSize === 'number')
                                    ? (imageSizes.defaultSize + 'w') : imageSizes.defaultSize
                            );
                        } else {
                            sizes = '';
                        }
                    }

                    return (
                        <Fragment>
                            <Tag
                                {...imgProps}
                                srcSet={srcSet || undefined}
                                sizes={sizes || undefined}
                                className={classes.join(' ')}
                                {...attributes}
                                {...datasetShown}
                            />
                        </Fragment>
                    );
                }() : (element === 'object') ? (
                    <Tag
                        {...restProps}
                        className={classes.join(' ')}
                        {...attributes}
                        {...datasetShown}
                    >
                        {props.children}
                    </Tag>
                ) : (element === 'picture') ? (
                    <Tag
                        className={classes.join(' ')}
                        {...attributes}
                        {...datasetShown}
                    >
                        {
                            props.source && props.source.length > 0 && props.source.map(
                                (source: SourceSrcsetProps, idx: number) => {
                                    return (
                                        <Fragment key={idx}>
                                            <Source {...source} />
                                        </Fragment>
                                    );
                                }
                            )
                        }
                        <Media
                            {...props.img}
                        />
                    </Tag>
                ) : (element === 'audio' || element === 'video') ? function () {
                    // Remake variable for rest of props
                    const {
                        element: itemElement,
                        sources,
                        controlsList: controlData,
                        children,
                        classes = [],
                        attributes = {},
                        datasets,
                        ...mediaProps
                    } = props;
                    const controlsList = controlData?.join(' ');
                    return (
                        <Tag
                            {...mediaProps}
                            controlsList={controlsList}
                            className={classes.join(' ')}
                            {...attributes}
                            {...datasetShown}
                        >
                            {
                                sources && sources.length > 0 && sources.map(
                                    (source: SourceSrcProps, idx: number) => {
                                        return (
                                            <Fragment key={idx}>
                                                <Source {...source} />
                                            </Fragment>
                                        );
                                    }
                                )
                            }
                            {children}
                        </Tag>
                    );
                }() : <Fragment />
            }
        </Fragment>
    );
};
