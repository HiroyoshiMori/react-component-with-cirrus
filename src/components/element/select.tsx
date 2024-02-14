import React, {
    Fragment,
} from "react";
import {
    HrProps,
    OptGroupProps,
    OptionProps,
    SelectProps,
} from "../@types";
import {
    convertDataSet,
    joinClasses,
} from "../common";
import {
    Break,
    Option,
} from "./index";

export const Select = (props: SelectProps) => {
    const {
        element: _,
        options = [],
        selectedValue,
        size,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <select
                {...restProps}
                defaultValue={selectedValue}
                size={size && size > 0 ? size : undefined}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {
                    Array.isArray(options) && options.length > 0 && options.map((opt, idx: number) => {
                        const {
                            element: _,
                            classes = [],
                            datasets = new Map(),
                            ...itemProps
                        } = opt;
                        if (Object.hasOwn(itemProps, 'is') && (itemProps as OptGroupProps).is === 'optgroup') {
                            const item = itemProps as OptGroupProps;
                            return (
                                <Fragment key={idx}>
                                    <OptGroup
                                        {...item}
                                        classes={classes}
                                        attributes={item.attributes}
                                        datasets={datasets}
                                    />
                                </Fragment>
                            )
                        } else if (Object.hasOwn(itemProps, 'element') && (itemProps as HrProps).element === 'hr') {
                            const item = itemProps as HrProps;
                            return (
                                <Fragment>
                                    <Break
                                        {...item}
                                        element={'hr'}
                                        classes={classes}
                                        attributes={item.attributes}
                                        datasets={datasets}
                                    />
                                </Fragment>
                            )
                        } else {
                            const item = itemProps as OptionProps;
                            return (
                                <Fragment>
                                    <Option
                                        {...item}
                                        classes={classes}
                                        attributes={item.attributes}
                                        datasets={datasets}
                                    >
                                        {item.children}
                                    </Option>
                                </Fragment>
                            );
                        }
                    })
                }
            </select>
        </Fragment>
    );
};

export const OptGroup = (props: OptGroupProps) => {
    const {
        options = [],
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <optgroup
                {...restProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {
                    options && options.length && options.map((opt: OptionProps, idx: number) => {
                        const {
                            children,
                            classes = [],
                            attributes = {},
                            datasets = new Map(),
                            ...restProps
                        } = opt;
                        return (
                            <Fragment key={idx}>
                                <Option
                                    {...restProps}
                                    classes={classes}
                                    attributes={attributes}
                                    datasets={datasets}
                                >
                                    {children}
                                </Option>
                            </Fragment>
                        );
                    })
                }
            </optgroup>
        </Fragment>
    );
};
