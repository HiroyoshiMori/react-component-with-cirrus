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

export const Ruby = (props: RubyProps) => {
    const {
        element: _,
        items,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <ruby
                {...restProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {
                    items && items.length > 0 && items.map((c: RtProps, idx: number) => {
                        const {
                            element: _,
                            preParenthesis: preRp,
                            postParenthesis: postRp,
                            classes = [],
                            attributes = {},
                            datasets = new Map(),
                            ...rtProps
                        } = c;
                        const datasetShown = convertDataSet(datasets);
                        return (
                            <Fragment key={idx}>
                                {c.label}
                                {c.useRp && preRp ? function() {
                                    const {
                                        element: _,
                                        classes = [],
                                        attributes = {},
                                        datasets = new Map(),
                                        ...rpProps
                                    } = preRp;
                                    const datasetShown = convertDataSet(datasets);
                                    return (
                                        <rp
                                            {...rpProps}
                                            className={joinClasses(classes)}
                                            {...attributes}
                                            {...datasetShown}
                                        >
                                            {preRp.children}
                                        </rp>
                                    );
                                }() : <Fragment />}
                                <rt
                                    {...rtProps}
                                    className={joinClasses(classes)}
                                    {...attributes}
                                    {...datasetShown}
                                >
                                    {c.ruby}
                                </rt>
                                {c.useRp && postRp ? function() {
                                    const {
                                        element: _,
                                        classes = [],
                                        attributes = {},
                                        datasets = new Map(),
                                        ...rpProps
                                    } = postRp;
                                    const datasetShown = convertDataSet(datasets);
                                    return (
                                        <rp
                                            {...rpProps}
                                            className={joinClasses(classes)}
                                            {...attributes}
                                            {...datasetShown}
                                        >
                                            {postRp.children}
                                        </rp>
                                    );
                                }() : <Fragment />}
                            </Fragment>
                        );
                    })
                }
            </ruby>
        </Fragment>
    );
};
