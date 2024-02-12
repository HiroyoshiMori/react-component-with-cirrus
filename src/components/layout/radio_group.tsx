import React, {
    Fragment,
} from "react";
import type {
    RadioGroupProps,
} from "../@types";
import {
    getCssFramework,
} from "../index";
import {generateId} from "../../utils";
import {initialize} from "../common";
import {Container, Paragraph} from "../element";
import {LabelledRadio} from "./labelled_radio";

export const RadioGroup = (props: RadioGroupProps) => {
    const {
        id = generateId(),
        name,
        items,
        currentValue,
        footnotes,
        ...restProps
    } = props;

    // Initialize
    const divClasses = initialize(
        restProps?.classes, [],
        getCssFramework().getDefaultStyleClass(
            'radio', 'container', 'form'
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
                            radio: radioProps,
                            ...restItemProps
                        } = item;
                        return (
                            <Fragment key={idx}>
                                <LabelledRadio
                                    {...restItemProps}
                                    radio={radioProps}
                                    currentValue={currentValue}
                                >
                                    {children}
                                </LabelledRadio>
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
