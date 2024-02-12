import React, {
    Fragment,
} from "react";
import {
    InputButtonProps,
    InputCheckboxProps,
    InputColorProps,
    InputDateProps,
    InputEmailProps,
    InputFileProps,
    InputHiddenProps,
    InputImageProps,
    InputNumberProps,
    InputPasswordProps,
    InputRadioProps,
    InputRangeProps,
    InputSearchProps,
    InputSubmitProps,
    InputTelProps,
    InputTextProps,
    InputUrlProps,
    InputProps,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";
import {generateId} from "../../utils";
import {DataList} from "./datalist";

export const Input = (props: InputProps) => {
    const {
        element: _,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    // Initialize
    let itemProps = switchComponent(restProps);
    const datasetShown = convertDataSet(datasets);
    let datalistOptions;
    if (Object.hasOwn(itemProps, 'datalist') && Array.isArray(itemProps.datalist)) {
        datalistOptions = itemProps.datalist.map((val: string) => ({
            element: 'option',
            value: val,
        }));
        delete itemProps.datalist;
        itemProps.list = itemProps.list ?? generateId();
    }

    return (
        <Fragment>
            <input
                {...itemProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            />
            {
                datalistOptions && (
                    <DataList
                        id={itemProps.list}
                        options={datalistOptions}
                    />
                )
            }
        </Fragment>
    );
};

const switchComponent = (props: InputProps) => {
    let itemProps: any;
    switch (props['type']) {
        case 'checkbox':
            itemProps = props as InputCheckboxProps;
            break;
        case 'radio':
            itemProps = props as InputRadioProps;
            break;
        case 'button':
            itemProps = props as InputButtonProps;
            break;
        case 'image':
            itemProps = props as InputImageProps;
            break;
        case 'submit':
            itemProps = props as InputSubmitProps;
            break;
        case 'file':
            itemProps = props as InputFileProps;
            break;
        case 'date': case 'datetime-local': case 'month': case 'time': case 'week':
            itemProps = props as InputDateProps;
            break;
        case 'color':
            itemProps = props as InputColorProps;
            break;
        case 'email':
            itemProps = props as InputEmailProps;
            break;
        case 'hidden':
            itemProps = props as InputHiddenProps;
            break;
        case 'number':
            itemProps = props as InputNumberProps;
            break;
        case 'password':
            itemProps = props as InputPasswordProps;
            break;
        case 'range':
            itemProps = props as InputRangeProps;
            break;
        case 'search':
            itemProps = props as InputSearchProps;
            break;
        case 'tel':
            itemProps = props as InputTelProps;
            break;
        case 'url':
            itemProps = props as InputUrlProps;
            break;
        default:  // case 'text':
            itemProps = props as InputTextProps;
    }

    return itemProps;
};
