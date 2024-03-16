import {
    Fragment,
} from "react";
import {
    CodeProps,
} from "../@types";
import {convertDataSet, joinClasses} from "../common";

export const Code = (props: CodeProps) => {
    const {
        element: _,
        children,
        "data-lang": dataLang,
        dark,
        inline = false,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
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
                    {...restProps}
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
