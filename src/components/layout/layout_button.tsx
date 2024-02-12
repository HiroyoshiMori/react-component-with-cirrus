import React, {
    Fragment,
} from "react";
import type {
    TypeButton,
} from "../@types";
import {
    getCssFramework,
} from "../index";
import {
    convertDataSet,
    joinClasses,
} from "../common";

export const LayoutButton = (props: TypeButton) => {
    const {
        element = 'button',
        children,
        onClick,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    // Initialize
    if (element === 'a' || element === 'div') {
        const defaultClasses = getCssFramework().getDefaultStyleClass(
            'button', element
        );
        defaultClasses?.forEach((styleClass: string) => {
            if (!classes.includes(styleClass)) {
                classes.push(styleClass);
            }
        })
    }
    // (['colorType', 'size'] as Array<keyof TypeButton>)
    //     .forEach((k: keyof TypeButton) => {
    //         if (props[k]) {
    //             const val = props[k] as string;
    //             let pattern;
    //             switch (k) {
    //                 case 'colorType':
    //                     switch(true) {
    //                         case /^text-/.test(val):
    //                             pattern = Array.isArray(cssFramework.COLORS)
    //                                 ? ('^text-(' + cssFramework.COLORS.join('|') + ')$')
    //                                 : undefined;
    //                             break;
    //                         case /^bg-/.test(val):
    //                             pattern = Array.isArray(cssFramework.COLORS)
    //                                 ? ('^bg-(' + cssFramework.COLORS.join('|') + ')$')
    //                                 : undefined;
    //                             break;
    //                         case /^border-/.test(val):
    //                             pattern = Array.isArray(cssFramework.COLORS)
    //                                 ? ('^border-(' + cssFramework.COLORS.join('|') + ')$')
    //                                 : undefined;
    //                             break;
    //                         case /^is-/.test(val):
    //                             pattern = Array.isArray(cssFramework.COLORS)
    //                                 ? ('^is-(' + cssFramework.COLORS.join('|') + ')$')
    //                                 : undefined;
    //                             break;
    //                     }
    //                     break;
    //                 case 'size':
    //                     if (Array.isArray(cssFramework.ALTERNATIVE_SIZES)) {
    //                         const sizeList = [...cssFramework.ALTERNATIVE_SIZES];
    //                         if (sizeList.indexOf('md') > -1) {
    //                             sizeList.splice(sizeList.indexOf('md'), 1)
    //                         } else if (sizeList.indexOf('default') > -1) {
    //                             sizeList.splice(sizeList.indexOf('default'), 1)
    //                         }
    //                         const stylePrefix = cssFramework.getStylePrefix('button');
    //                         pattern = '^' + stylePrefix + '(' + sizeList.join('|') + ')$';
    //                     }
    //                     break;
    //             }
    //             if (pattern && !ArrayRegexIncludes(classes, new RegExp(/pattern/))) {
    //                 classes.push(val);
    //             }
    //         }
    //     });
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
