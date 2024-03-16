import {
    Fragment,
} from "react";
import _ from 'lodash';
import {
    InputProps,
} from "../@types";
import {convertDataSet, initialize, joinClasses} from "../common";
import {generateId} from "../../utils";
import {DataList} from "./datalist";
import {getCssFramework} from "../index";

export const Input = (props: InputProps) => {
    const {
        datasets = new Map(),
        element = 'input',
        noDefaultClass = false,
        ...itemProps
    } = props;

    // Initialize
    const classes = initialize(
        props['classes'], [], !noDefaultClass ? getCssFramework().getDefaultStyleClass(
            'form', element, props['type']
        ) : []
    );
    const attributes = initialize(
        props['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
            'form', element
        )
    );

    const datasetShown = convertDataSet(datasets);
    let datalistOptions;
    if (Object.hasOwn(itemProps, 'datalist') && Array.isArray((itemProps as any).datalist)) {
        datalistOptions = (itemProps as any).datalist.map((val: string) => ({
            element: 'option',
            value: val,
        }));
        (itemProps as any).datalist = undefined;
        (itemProps as any).list = (itemProps as any).list ?? generateId();
    }
    if (Object.hasOwn(itemProps, 'step')) {
        if (typeof (itemProps as any).step === 'number') {
            if ((itemProps as any).step < 1) {
                (itemProps as any).step = undefined;
            }
        } else {
            (itemProps as any).step = undefined;
        }
    }
    if (Object.hasOwn(itemProps, 'maxLength')) {
        if (typeof (itemProps as any).maxLength === 'number') {
            if ((itemProps as any).maxLength < 0) {
                (itemProps as any).maxLength = undefined;
            }
        } else {
            (itemProps as any).maxLength = undefined;
        }
    }
    if (Object.hasOwn(itemProps, 'minLength')) {
        if (typeof (itemProps as any).minLength === 'number') {
            if ((itemProps as any).minLength < 0) {
                (itemProps as any).minLength = undefined;
            }
        } else {
            (itemProps as any).minLength = undefined;
        }
    }
    if (Object.hasOwn(itemProps, 'size')) {
        if (typeof (itemProps as any).size === 'number') {
            if ((itemProps as any).size < 1) {
                (itemProps as any).size = undefined;
            }
        } else {
            (itemProps as any).size = undefined;
        }
    }
    if (Object.hasOwn(itemProps, 'width')) {
        if (typeof (itemProps as any).width === 'number') {
            if ((itemProps as any).width < 1) {
                (itemProps as any).width = undefined;
            }
        } else {
            (itemProps as any).width = undefined;
        }
    }
    if (Object.hasOwn(itemProps, 'height')) {
        if (typeof (itemProps as any)["height"] === 'number') {
            if ((itemProps as any).height < 1) {
                (itemProps as any).height = undefined;
            }
        } else {
            (itemProps as any).height = undefined;
        }
    }

    return (
        <Fragment>
            <input
                {...(_.omit(itemProps, ['classes', 'attributes']))}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            />
            {
                datalistOptions && (
                    <DataList
                        element={'datalist'}
                        id={(itemProps as any).list}
                        options={datalistOptions}
                    />
                )
            }
        </Fragment>
    );
};
