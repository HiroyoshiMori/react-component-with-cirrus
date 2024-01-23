import React, {
    Fragment,
} from "react";
import {
    ContainerProps,
    BlockQuoteProps,
    AbbrProps,
    BdoProps,
    DelProps,
    InsProps,
    QuoteProps,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Container = (props: ContainerProps) => {
    const {
        id,
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    let Tag: any;
    let additionalProps = {};
    if (props.inline === true) {
        Tag = props.element ?? 'span';
        if (Object.hasOwn(props, 'additionalProps')) {
            if (
                (
                    props as AbbrProps|BdoProps|DelProps|InsProps|QuoteProps
                ).additionalProps !== undefined
            ) {
                additionalProps = {
                    ...(
                        props as AbbrProps|BdoProps|DelProps|InsProps|QuoteProps
                    ).additionalProps
                };
            }
        }
    } else {
        Tag = props.element ?? 'div';
        if (Object.hasOwn(props, 'additionalProps')) {
            if (
                (
                    props as BlockQuoteProps
                ).additionalProps !== undefined
            ) {
                additionalProps = {
                    ...(
                        props as BlockQuoteProps
                    ).additionalProps
                };
            }
        }
    }
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <Tag
                id={id}
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
