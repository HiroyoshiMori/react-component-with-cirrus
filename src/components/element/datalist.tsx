import {Fragment} from "react";
import {DataListProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";
import {generateId} from "../../utils";
import {Option} from "./option";

export const DataList = (props: DataListProps) => {
    const {
        element: elementType = 'datalist',
        id = generateId(),
        children,
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
            <datalist
                id={id}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {
                    options && options.length > 0 && options.map((option, idx: number) => {
                        const {
                            element: elementType = 'option',
                            children,
                            classes = [],
                            attributes = {},
                            datasets = new Map(),
                            ...optionProps
                        } = option;
                        const datasetShown = convertDataSet(datasets);
                        return (
                            <Option
                                {...optionProps}
                                className={joinClasses(classes)}
                                {...attributes}
                                {...datasetShown}
                            >
                                {children}
                            </Option>
                        )
                    })
                }
                {children}
            </datalist>
        </Fragment>
    );
};
