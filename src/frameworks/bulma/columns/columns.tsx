import {
    Fragment,
} from "react";
import {ColumnProps, ColumnsProps} from "../@types";
// @ts-ignore
import {Container, DivProps, getCssFramework, initialize} from "../index";

export const Columns = (props: ColumnsProps) => {
    const {
        component = 'columns',
        element = 'div',
        columns: cols = [],
        commonClassesInChild = [],
        ...restProps
    } = props;

    // Initialize and add default classes if not exists
    const columns = Array.isArray(cols)
        ? cols : [cols];
    restProps['classes'] = initialize(
        props['classes'], [], getCssFramework().getDefaultStyleClass(
            component, element
        )
    );
    restProps['attributes'] = initialize(
        props['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
            component, element
        )
    );

    return (
        <Fragment>
            <Container<DivProps>
                {...restProps}
                element={element}
            >
                {
                    columns && Array.isArray(columns) && columns.map((column: ColumnProps, idx: number) => {
                        const classes = initialize(
                            column['classes'], [],
                            Array.isArray(commonClassesInChild) ? commonClassesInChild : []
                        )
                        return (
                            <Column
                                key={idx}
                                {...column}
                                component={'column'}
                                classes={classes}
                            >
                                {column.children}
                            </Column>
                        );
                    })
                }
            </Container>
        </Fragment>
    );
};

export const Column = (props: ColumnProps) => {
    const {
        component = 'column',
        element = 'div',
        children,
        ...restProps
    } = props;

    // Initialize and set default class if not exists
    restProps['classes'] = initialize(
        props['classes'], [], getCssFramework().getDefaultStyleClass(
            component, element
        )
    );
    restProps['attributes'] = initialize(
        props['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
            component, element
        )
    );

    return (
        <Fragment>
            <Container<DivProps>
                {...restProps}
                element={element}
            >
                {children}
            </Container>
        </Fragment>
    );
};
