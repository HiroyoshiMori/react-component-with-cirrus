import React, {
    Fragment,
} from "react";
import {
    HeadingGroupAttributes,
    HeadingGroupClasses, HeadingGroupDatasets,
    HeadingGroupProps,
} from "../@types/layout/heading_group";
import {initialize, initializeDatasets} from "../common";
import {Heading} from "../element/heading";
import {ParagraphProps} from "../@types";
import {Paragraph} from "../element";

export const HeadingGroup = (props: HeadingGroupProps) => {
    const {
        id,
        level,
        children,
        paragraphs = [],
    } = props;

    const classes = initialize(
        props['classes'] as HeadingGroupClasses, [
            'hgroup', 'heading', 'paragraph',
        ], []
    );
    const attributes = initialize(
        props['attributes'] as HeadingGroupAttributes, [
            'hgroup', 'heading', 'paragraph',
        ], {}
    );
    const {datasets, datasetShown} = initializeDatasets(
        props['datasets'] as HeadingGroupDatasets, [
            'hgroup', 'heading', 'paragraph',
        ], new Map()
    );

    return (
        <Fragment>
            <hgroup
                id={id}
                className={classes.hgroup?.join(' ')}
                {...attributes.hgroup}
                {...datasetShown.hgroup}
            >
                <Heading
                    level={level}
                    classes={classes.heading}
                    attributes={attributes.heading}
                    datasets={datasets.heading}
                >
                    {children}
                </Heading>
                {
                    paragraphs && paragraphs.length > 0 && paragraphs.map((p: ParagraphProps, idx: number) => {
                        return (
                            <Fragment key={idx}>
                                <Paragraph
                                    {...p}
                                />
                            </Fragment>
                        )
                    })
                }
            </hgroup>
        </Fragment>
    );
};
