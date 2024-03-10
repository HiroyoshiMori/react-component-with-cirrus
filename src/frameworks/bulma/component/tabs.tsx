import React, {
    Fragment,
} from "react";
import {TabItemProps, TabsProps} from "../@types";
import {AProps, Container, getCssFramework, initialize, LiProps, List} from "../index";

export const Tabs = (props: TabsProps) => {
    const {
        component = 'tabs',
        element = 'div',
        items = [],
        commonListItemClasses = [],
        commonListItemAttributes = {},
        ...restProps
    } = props;

    // Initialize and set default class if not exists
    const tabs = Array.isArray(items)
        ? items : [items];
    const listItems = tabs.map((item: TabItemProps) => {
        const {
            component = 'tab-item',
            element = 'a',
            isActive = false,
            listItemCLasses = [],
            listItemAttributes = {},
            ...itemProps
        } = item;
        const liClasses = initialize(
            listItemCLasses, [], getCssFramework().getDefaultStyleClass(
                component, 'li'
            )
        );
        const liAttributes = initialize(
            listItemAttributes, {}, getCssFramework().getDefaultAdditionalAttributes(
                component, 'li'
            )
        );
        itemProps['classes'] = initialize(
            item['classes'], [], getCssFramework().getDefaultStyleClass(
                component, element
            )
        );
        itemProps['attributes'] = initialize(
            item['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
                component, element
            )
        );
        if (isActive) {
            const isActiveClasses = getCssFramework().getDefaultStyleClass(
                component, 'li', 'is-active'
            );
            isActiveClasses.forEach((itemClass: string) => {
                if (Array.isArray(liClasses) && !liClasses.includes(itemClass)) {
                    liClasses.push(itemClass);
                }
            });
        }
        return {
            element: 'li',
            children: {
                ...itemProps,
                element: element,
            },
            classes: liClasses.concat(Array.isArray(commonListItemClasses) ? commonListItemClasses : []),
            attributes: {
                ...commonListItemAttributes,
                ...liAttributes,
            },
        } as LiProps<AProps>;
    });
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
            <Container
                {...restProps}
                element={element}
            >
                {
                    tabs && tabs.length > 0 ? (
                        <List
                            element={'ul'}
                            items={listItems}
                        />
                    ) : <Fragment />
                }
            </Container>
        </Fragment>
    );
};
