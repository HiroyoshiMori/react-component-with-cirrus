import React, {
    Fragment,
} from "react";
import {
    HrProps,
    OptGroupAttributes,
    OptGroupClasses,
    OptGroupDatasets,
    OptGroupProps,
    OptionProps,
    SelectAttributes,
    SelectClasses,
    SelectDatasets,
    SelectProps,
} from "../@types";
import {
    convertDataSet,
    initialize,
    initializeDatasets, joinClasses,
} from "../common";
import {
    mergeDatasets,
    mergeHtmlAttributes,
    mergeStyleClasses,
} from "../../utils";
import {Break} from "../element";

export const Select = (props: SelectProps) => {
    const {
        name,
        id,
        options = [],
        selectedValue,
        autoComplete,
        disabled = false,
        form,
        multiple = false,
        required = false,
        size,
    } = props;

    const classes = initialize(
        props['classes'] as SelectClasses, [
            'select', 'optgroup', 'option',
        ], []
    );
    const attributes = initialize(
        props['attributes'] as SelectAttributes, [
            'select', 'optgroup', 'option',
        ], {}
    );
    const {datasets, datasetShown} = initializeDatasets(
        props['datasets'] as SelectDatasets, [
            'select', 'optgroup', 'option',
        ], new Map()
    );

    return (
        <Fragment>
            <select
                name={name}
                id={id}
                autoComplete={autoComplete}
                disabled={disabled}
                form={form}
                multiple={multiple}
                required={required}
                size={size}
                className={joinClasses(classes.select)}
                {...attributes.select}
                {...datasetShown.select}
            >
                {
                    options && options.length > 0 && options.map((opt, idx: number) => {
                        if (Object.hasOwn(opt, 'is') && (opt as OptGroupProps).is === 'optgroup') {
                            const item = opt as OptGroupProps;
                            const optgroupClasses = {
                                optgroup: mergeStyleClasses(classes.optgroup, item.classes?.optgroup),
                                option: mergeStyleClasses(classes.option, item.classes?.option),
                            };
                            const optgroupAttributes = {
                                optgroup: mergeHtmlAttributes(attributes.optgroup, item.attributes?.optgroup),
                                option: mergeHtmlAttributes(attributes.option, item.attributes?.option),
                            };
                            const optgroupDatasets = {
                                optgroup: mergeDatasets(datasets.optgroup, item.datasets?.optgroup),
                                option: mergeDatasets(datasets.option, item.datasets?.option),
                            };
                            return (
                                <Fragment key={idx}>
                                    <OptGroup
                                        {...item}
                                        selectedValue={selectedValue}
                                        classes={optgroupClasses}
                                        attributes={optgroupAttributes}
                                        datasets={optgroupDatasets}
                                    />
                                </Fragment>
                            )
                        } else if (Object.hasOwn(opt, 'element') && (opt as HrProps).element === 'hr') {
                            const item = opt as HrProps;
                            return (
                                <Fragment>
                                    <Break
                                        {...item}
                                    />
                                </Fragment>
                            )
                        } else {
                            const item = opt as OptionProps;
                            const optionClasses = mergeStyleClasses(classes.option, item.classes);
                            const optionAttributes = mergeHtmlAttributes(attributes.option, item.attributes);
                            const optionDatasets = mergeDatasets(datasets.option, item.datasets);
                            const selected = item.value
                                ? item.value === selectedValue
                                : item.children === selectedValue;
                            return (
                                <Fragment>
                                    <Option
                                        name={item.name}
                                        id={item.id}
                                        value={item.value}
                                        label={item.label}
                                        selected={selected}
                                        disabled={item.disabled}
                                        classes={optionClasses}
                                        attributes={optionAttributes}
                                        datasets={optionDatasets}
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
        id,
        label,
        options = [],
        selectedValue,
        disabled = false,
    } = props;

    // Initialize
    const classes = initialize(
        props['classes'] as OptGroupClasses, [
            'optgroup', 'option',
        ], []
    );
    const attributes = initialize(
        props['attributes'] as OptGroupAttributes, [
            'optgroup', 'option',
        ], {}
    );
    const {datasets, datasetShown} = initializeDatasets(
        props['datasets'] as OptGroupDatasets, [
            'optgroup', 'option',
        ], new Map()
    );

    return (
        <Fragment>
            <optgroup
                id={id}
                label={label}
                disabled={disabled}
                className={joinClasses(classes.optgroup)}
                {...attributes.optgroup}
                {...datasetShown.optgroup}
            >
                {
                    options && options.length && options.map((opt: OptionProps, idx: number) => {
                        const optClasses = mergeStyleClasses(classes.option, opt.classes);
                        const optAttributes = mergeHtmlAttributes(attributes.option, opt.attributes);
                        const optDatasets = mergeDatasets(datasets.option, opt.datasets);
                        const selected = opt.value
                            ? opt.value === selectedValue
                            : opt.children === selectedValue;
                        return (
                            <Fragment key={idx}>
                                <Option
                                    name={opt.name}
                                    id={opt.id}
                                    value={opt.value}
                                    label={opt.label}
                                    selected={selected}
                                    disabled={disabled}
                                    classes={optClasses}
                                    attributes={optAttributes}
                                    datasets={optDatasets}
                                >
                                    {opt.children}
                                </Option>
                            </Fragment>
                        );
                    })
                }
            </optgroup>
        </Fragment>
    );
};

const Option = (props: OptionProps) => {
    const {
        name,
        id,
        children,
        value,
        label,
        selected = false,
        disabled = false,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <option
                name={name}
                id={id}
                value={value ?? children}
                label={label ?? value ?? children}
                selected={selected}
                disabled={disabled}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </option>
        </Fragment>
    );
};
