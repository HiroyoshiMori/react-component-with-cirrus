import React, {
    Fragment,
} from "react";
import {
    CodeProps,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Code = (props: CodeProps) => {
    const {
        id,
        children,
        "data-lang": dataLang,
        dark,
        inline,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    // Initialize
    if (dark) {
        if (Array.isArray(classes) && !classes.includes('dark')) {
            classes.push('dark');
        }
    }
    if (dataLang) {
        if (!datasets.has('lang')) {
            datasets.set('lang', dataLang);
        }
    }
    const WrapTag = inline ? Fragment : 'pre';
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <WrapTag>
                <code
                    id={id}
                    data-lang={dataLang}
                    className={joinClasses(classes)}
                    {...attributes}
                    {...datasetShown}
                >
                    {children}
                </code>
            </WrapTag>
        </Fragment>
    );
};
