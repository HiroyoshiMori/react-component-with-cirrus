import React, {
    Fragment,
} from "react";
import {
    getCssFramework,
    CheckboxGroupProps,
} from "../index";
import {generateId} from "../../utils";
import {initialize} from "../common";
import {Container, Paragraph} from "../element";
import {LabelledCheckbox} from "./labelled_checkbox";

export const CheckboxGroup = (props: CheckboxGroupProps) => {
    const {
        id = generateId(),
        name,
        items,
        currentValues,
        footnotes,
        ...restProps
    } = props;

    // Initialize
    const divClasses = initialize(
        restProps?.classes, [],
        getCssFramework().getDefaultStyleClass(
            'checkbox', 'container', 'form'
        )
    );

    return (
        <Fragment>
            <Container
                {...restProps}
                element={'div'}
                id={id}
                classes={divClasses}
            >
                {
                    Array.isArray(items) && items.length > 0 && items.map((item, idx: number) => {
                        const {
                            children,
                            checkbox: checkboxProps,
                            ...restItemProps
                        } = item;
                        return (
                            <Fragment key={idx}>
                                <LabelledCheckbox
                                    {...restItemProps}
                                    checkbox={checkboxProps}
                                    currentValues={currentValues}
                                >
                                    {children}
                                </LabelledCheckbox>
                            </Fragment>
                        );
                    })
                }
                {
                    footnotes && function () {
                        const {
                            children,
                            ...pProps
                        } = footnotes;
                        const spanClasses = initialize(
                            pProps.classes, [],
                            getCssFramework().getDefaultStyleClass(
                                'radio', 'footnote', 'form'
                            ),
                        );
                        return (
                            <Fragment>
                                <Paragraph
                                    {...pProps}
                                    classes={spanClasses}
                                >
                                    {children}
                                </Paragraph>
                            </Fragment>
                        );
                    }()
                }
            </Container>
        </Fragment>
    );
};
