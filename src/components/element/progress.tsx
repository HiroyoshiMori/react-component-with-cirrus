import {Fragment} from "react";
import {cssFramework, ProgressProps} from "../@types";
import {convertDataSet, joinClasses} from "../common";
import {COLORS, ELEMENT_SIZES} from "../@types/css_framework/cirrus";
import {ArrayRegexIncludes} from "../../utils";

export const Progress = (props: ProgressProps) => {
    const {
        element: _,
        children,
        max: maxValue,
        colorType,
        size,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    // Initialize
    (['colorType', 'size'] as Array<keyof ProgressProps>).forEach((k: keyof ProgressProps) => {
        if (props[k]) {
            let pattern;
            const stylePrefix = cssFramework.getStylePrefix('progress');
            switch (k) {
                case 'colorType':
                    pattern = '^' + stylePrefix + '(' + COLORS.join('|') + ')$';
                    break;
                case 'size':
                    pattern = '^' + stylePrefix + '(' + ELEMENT_SIZES.join('|') + ')$';
                    break;
            }
            if (pattern && Array.isArray(classes) && !ArrayRegexIncludes(classes, new RegExp(/pattern/))) {
                classes.push(stylePrefix + props[k]);
            }
        }
    });
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <progress
                {...restProps}
                max={maxValue}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </progress>
        </Fragment>
    );
};
