import {
    Fragment,
} from "react";
import {
    getCssFramework,
    HeadingProps,
} from "../index";
import {convertDataSet, joinClasses} from "../common";

export const Heading = (props: HeadingProps) => {
    const {
        element: _,
        level,
        children,
        noDefaultClass = false,
        classes = [],
        attributes = {},
        datasets = new Map(),
        ...restProps
    } = props;

    let Tag;
    switch (level) {
        case 1: Tag = 'h1'; break;
        case 2: Tag = 'h2'; break;
        case 4: Tag = 'h4'; break;
        case 5: Tag = 'h5'; break;
        case 6: Tag = 'h6'; break;
        default:
            Tag = 'h3';
    }
    const defaultClasses = !noDefaultClass ? getCssFramework().getDefaultStyleClass(
        'heading', Tag
    ) : [];
    defaultClasses?.forEach((styleClass: string) => {
        if (Array.isArray(classes) && !classes.includes(styleClass)) {
            classes.push(styleClass);
        }
    });
    const datasetShown = convertDataSet(datasets);

    return (
        <Fragment>
            <Tag
                {...restProps}
                className={joinClasses(classes)}
                {...attributes}
                {...datasetShown}
            >
                {children}
            </Tag>
        </Fragment>
    );
};
