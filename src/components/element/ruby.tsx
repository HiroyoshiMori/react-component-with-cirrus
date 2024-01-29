import React, {
    Fragment,
} from "react";
import {
    RtProps,
    RubyProps
} from "../@types";
import {
    convertDataSet,
    joinClasses,
} from "../common";

const Ruby = (props: RubyProps) => {
    const {
        element: elementType = 'ruby',
        items,
        classes = [],
        attributes = {},
        datasets = new Map(),
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <ruby
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {
                    items && items.length > 0 && items.map((c: RtProps, idx: number) => {
                        return (
                            <Fragment key={idx}>
                                {c.label}
                                {c.useRp && c.preParenthesis ? <rp>{c.preParenthesis.children}</rp> : <Fragment />}
                                <rt>{c.ruby}</rt>
                                {c.useRp && c.postParenthesis ? <rp>{c.postParenthesis.children}</rp> : <Fragment />}
                            </Fragment>
                        );
                    })
                }
            </ruby>
        </Fragment>
    );
};

Ruby.displayName = 'Ruby';
export {Ruby};
