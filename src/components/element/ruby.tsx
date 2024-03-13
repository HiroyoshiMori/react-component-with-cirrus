import {
    Fragment,
} from "react";
import {
    RpProps,
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
                    Array.isArray(items) && items.length > 0 && items.map((item: RtProps, idx: number) => {
                        const {
                            children,
                            ...rtProps
                        } = item;
                        return (
                            <Fragment key={idx}>
                                <Rt {...rtProps}>{children}</Rt>
                            </Fragment>
                        );
                    })
                }
            </ruby>
        </Fragment>
    );
};

export const Rt = (props: RtProps) => {
    const {
        element: _,
        label,
        children,
        useRp,
        preParenthesis: preRp,
        postParenthesis: postRp,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...rtProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            {label}
            {useRp && preRp ? (
                <Rp {...preRp} />
            ) : <Fragment />}
            <rt
                {...rtProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </rt>
            {useRp && postRp ? (
                <Rp {...postRp} />
            ) : <Fragment />}
        </Fragment>
    );
};

export const Rp = (props: RpProps) => {
    const {
        element: _,
        children,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...rpProps
    } = props;

    // Initialize
    const datasetShown = convertDataSet(datasets);

    return (
        <rp
            {...rpProps}
            className={joinClasses(classes)}
            {...attributes}
            {...datasetShown}
        >
            {props.children}
        </rp>
    );
};
