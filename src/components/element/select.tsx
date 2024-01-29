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
        element: elementType = 'select',
        options = [],
        selectedValue,
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
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {
                    options && options.length > 0 && options.map((opt, idx: number) => {
                        const {
                            element: elementType,
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
                                        selectedValue={selectedValue}
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
                            const selected = item.value
                                ? item.value === selectedValue
                                : item.children === selectedValue;
                            return (
                                <Fragment>
                                    <Option
                                        {...item}
                                        selected={selected}
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

const OptGroup = (props: OptGroupProps) => {
    const {
        options = [],
        selectedValue,
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
                        const selected = opt.value
                            ? opt.value === selectedValue
                            : children === selectedValue;
                        return (
                            <Fragment key={idx}>
                                <Option
                                    {...restProps}
                                    selected={selected}
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
