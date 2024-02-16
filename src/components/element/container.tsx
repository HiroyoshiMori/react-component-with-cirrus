import React, {
    Fragment,
} from "react";
import {
    MeterProps,
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
    let min: number = 0, max: number = 1, low: number|undefined, high: number|undefined;
    if (Object.hasOwn(additionalProps, 'min')) {
        min = (additionalProps as MeterProps).min ?? 0;
    }
    if (Object.hasOwn(additionalProps,'max')) {
        max = (additionalProps as MeterProps).max ?? 1;
    }
    if (min > max) {
        (additionalProps as MeterProps).min = max;
        (additionalProps as MeterProps).max = min;
    }
    if (Object.hasOwn(additionalProps, 'low')) {
        const meterProps = additionalProps as MeterProps;
        low = meterProps.low
            ? meterProps.low > min
                ? meterProps.low
                : min
            : min;
        (additionalProps as MeterProps).low = low;
    }
    if (Object.hasOwn(additionalProps, 'high')) {
        const meterProps = additionalProps as MeterProps;
        high = meterProps.high
            ? meterProps.high < max
                ? meterProps.high
                : max
            : max;
        (additionalProps as MeterProps).high = high;
    }
    if (low && high && low > high) {
        (additionalProps as MeterProps).low = high;
        (additionalProps as MeterProps).high = low;
    }
    if (Object.hasOwn(additionalProps, 'optimum')) {
        const optimum = (additionalProps as MeterProps).optimum;
        if (optimum && (optimum < min || optimum > max)) {
            delete (additionalProps as MeterProps).optimum;
        }
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
