import React, {
    Fragment,
} from "react";
import {
    RubyAttributes,
    RubyClasses,
    RubyDatasets,
    RubyTextProps,
    RubyProps
} from "../@types";
import {
    initialize,
    initializeDatasets, joinClasses,
} from "../common";

export const Ruby = (props: RubyProps) => {
    const {
        items,
        useRp = true,
    } = props;

    // Initialize
    const classes = initialize(
        props['classes'] as RubyClasses, [
            'ruby', 'rp', 'rt',
        ], []
    );
    const attributes = initialize(
        props['attributes'] as RubyAttributes, [
            'ruby', 'rp', 'rt',
        ], {}
    );
    const {datasetShown} = initializeDatasets(
        props['datasets'] as RubyDatasets, [
            'ruby', 'rp', 'rt',
        ], new Map()
    );

    return (
        <Fragment>
            <ruby
                className={joinClasses(classes.ruby)}
                {...attributes.ruby}
                {...datasetShown.ruby}
            >
                {
                    items && items.length > 0 && items.map((c: RubyTextProps, idx: number) => {
                        return (
                            <Fragment key={idx}>
                                {c.label}
                                {useRp ? <rp>(</rp> : <Fragment />}
                                <rt>{c.ruby}</rt>
                                {useRp ? <rp>)</rp> : <Fragment />}
                            </Fragment>
                        );
                    })
                }
            </ruby>
        </Fragment>
    );
};
