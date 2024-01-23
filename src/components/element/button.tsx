import React, {
    Fragment,
} from "react";
import {
    ButtonProps, cssFramework,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";
import {ArrayRegexIncludes} from "../../utils";

export const Button = (props: ButtonProps) => {
    const {
        element = 'button',
        children,
        onClick,
        colorType,
        size,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    // Initialize
    if (element === 'a' || element === 'div') {
        const defaultClasses = cssFramework.getDefaultStyleClass(
            'button', element
        );
        defaultClasses?.forEach((styleClass: string) => {
            if (!classes.includes(styleClass)) {
                classes.push(styleClass);
            }
        })
    }
    (['colorType', 'size'] as Array<keyof ButtonProps>)
        .forEach((k: keyof ButtonProps) => {
            if (props[k]) {
                const val = props[k] as string;
                let pattern;
                switch (k) {
                    case 'colorType':
                        switch(true) {
                            case /^text-/.test(val):
                                pattern = '^text-(' + cssFramework.COLORS.join('|') + ')$';
                                break;
                            case /^bg-/.test(val):
                                pattern = '^bg-(' + cssFramework.COLORS.join('|') + ')$';
                                break;
                            case /^border-/.test(val):
                                pattern = '^border-(' + cssFramework.COLORS.join('|') + ')$';
                                break;
                        }
                        break;
                    case 'size':
                        const sizeList = [...cssFramework.RESPONSIVE];
                        if (sizeList.indexOf('md') > -1) {
                            sizeList.splice(sizeList.indexOf('md'), 1)
                        }
                        pattern = '^btn--(' + sizeList.join('|') + ')$';
                        break;
                }
                if (pattern && !ArrayRegexIncludes(classes, new RegExp(/pattern/))) {
                    classes.push(val);
                }
            }
        });
    const Tag = element;
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <Tag
                {...restProps}
                onClick={onClick}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </Tag>
        </Fragment>
    );
};
