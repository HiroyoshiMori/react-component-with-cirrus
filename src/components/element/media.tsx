import React, {
    Fragment,
} from "react";
import {sprintf} from "sprintf-js";
import {
    ImageSrcSetProps,
    SourceSrcProps,
    SourceSrcsetProps,
    TypeMedia,
} from "../@types";
import {Source} from "./source";
import {convertDataSet, joinClasses} from "../common";

export const Media = (props: TypeMedia) => {
    const {
        element,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    // Initialize
    const Tag = element;
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            {
                (element === 'embed') ? (
                    <Tag
                        {...restProps}
                        width={props.width && props.width > 0 ? props.width : undefined}
                        height={props.height && props.height > 0 ? props.height : undefined}
                        className={joinClasses(classes)}
                        {...attributes}
                        {...datasetShown}
                    />
                ) : (element === 'object') ? (
                    <Tag
                        {...restProps}
                        className={joinClasses(classes)}
                        {...attributes}
                        {...datasetShown}
                    >
                        {props.children}
                    </Tag>
                ) : (element === 'img') ? function() {
                    // Remake variable for rest of props
                    const {
                        element: Tag,
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
                            const mediaSize = s.mediaSize
                                ? (typeof s.mediaSize === 'number' ? (s.mediaSize + 'w') : s.mediaSize)
                                : undefined;
                            if (Array.isArray(s.mediaQuery)) {
                                sizes += sprintf(
                                    '%s(%s) %s', con, s.mediaQuery.join(') and ('), mediaSize ?? ''
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
                                className={joinClasses(classes)}
                                {...attributes}
                                {...datasetShown}
                            />
                        </Fragment>
                    );
                }() : (element === 'picture') ? (
                    <Tag
                        className={joinClasses(classes)}
                        {...attributes}
                        {...datasetShown}
                    >
                        {
                            Array.isArray(props.source) && props.source.length > 0 && props.source.map(
                                (source: SourceSrcsetProps, idx: number) => {
                                    return (
                                        <Fragment key={idx}>
                                            <Source
                                                {...source}
                                                element={'source'}
                                            />
                                        </Fragment>
                                    );
                                }
                            )
                        }
                        <Media
                            {...props.img}
                            element={'img'}
                        />
                    </Tag>
                ) : (element === 'audio' || element === 'video') ? function () {
                    // Remake variable for rest of props
                    const {
                        element: _,
                        sources,
                        controlsList: controlData,
                        children,
                        track,
                        classes = [],
                        attributes = {},
                        datasets,
                        ...mediaProps
                    } = props;
                    const controlsList = Array.isArray(controlData)
                        ? controlData.join(' ')
                        : undefined;
                    return (
                        <Tag
                            {...mediaProps}
                            controlsList={controlsList}
                            className={joinClasses(classes)}
                            {...attributes}
                            {...datasetShown}
                        >
                            {
                                track && function () {
                                    const {
                                        element: _,
                                        classes = [],
                                        attributes = {},
                                        datasets = new Map(),
                                        ...trackProps
                                    } = track;
                                    const datasetShown = convertDataSet(datasets);
                                    return (
                                        <Fragment>
                                            <track
                                                {...trackProps}
                                                className={joinClasses(classes)}
                                                {...attributes}
                                                {...datasetShown}
                                            />
                                        </Fragment>
                                    );
                                }()
                            }
                            {
                                Array.isArray(sources) && sources.length > 0 && sources.map(
                                    (source: SourceSrcProps, idx: number) => {
                                        return (
                                            <Fragment key={idx}>
                                                <Source
                                                    {...source}
                                                    element={'source'}
                                                />
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
