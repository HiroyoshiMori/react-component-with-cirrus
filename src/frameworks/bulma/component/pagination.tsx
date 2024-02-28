import React, {
    AnchorHTMLAttributes,
    Fragment, HTMLAttributes,
} from "react";
import {PaginationProps} from "../@types";
import {AProps, Container, getCssFramework, initialize, LiProps, List, SpanProps} from "../index";
import {sprintf} from "sprintf-js";

export const Pagination = (props: PaginationProps) => {
    const {
        component = 'pagination',
        element = 'div',
        link = '',
        hasPrevNext = true,
        prevLabel,
        nextLabel,
        ellipsis = '\u2026',
        ...restProps
    } = props;

    // Initialize and set default class if not exists
    const currentPage = props['currentPage']
        ? (props['currentPage'] > 0 ? props['currentPage'] : 1)
        : 1;
    const total = props['total']
        ? (props['total'] > 0 ? props['total'] : 0)
        : 0;
    const itemInPage = props['itemInPage']
        ? (props['itemInPage'] > 0 ? props['itemInPage'] : 10)
        : 10;
    const maxPage = Math.ceil(total / itemInPage);
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
    const listClasses = initialize(
        [] as string[], [], getCssFramework().getDefaultStyleClass(
            component, element, 'list'
        )
    );
    const listAttributes = initialize(
        {} as HTMLAttributes<HTMLUListElement>, {}, getCssFramework().getDefaultAdditionalAttributes(
            component, element, 'list'
        )
    );

    if (prevLabel) {
        if (currentPage > 1) {
            (prevLabel as AProps).href = link ? sprintf(link, currentPage - 1) : undefined;
        }
        prevLabel['classes'] = initialize(
            prevLabel['classes'], [], getCssFramework().getDefaultStyleClass(
                component, element, currentPage > 1 ? 'prev' : 'prev:-disabled'
            )
        );
        prevLabel['attributes'] = initialize(
            prevLabel['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
                component, element, currentPage > 1 ? 'prev' : 'prev:disabled'
            )
        );
        if (Object.hasOwn(prevLabel, 'href') && !Object.hasOwn(prevLabel.attributes, 'aria-label')) {
            prevLabel.attributes['aria-label'] = 'Jump to previous page';
        }
    }
    if (nextLabel) {
        if (currentPage < maxPage) {
            (nextLabel as AProps).element = 'a';
            (nextLabel as AProps).href = link ? sprintf(link, currentPage + 1) : undefined;
        } else {
            (nextLabel as SpanProps).element = 'span';
        }
        nextLabel['classes'] = initialize(
            nextLabel['classes'], [], getCssFramework().getDefaultStyleClass(
                component, element, currentPage < maxPage ? 'next' : 'next:disabled'
            )
        );
        nextLabel['attributes'] = initialize(
            nextLabel['attributes'], {}, getCssFramework().getDefaultAdditionalAttributes(
                component, element, currentPage < maxPage ? 'next' : 'next:disabled'
            )
        );
        if (Object.hasOwn(nextLabel, 'href') && !Object.hasOwn(nextLabel.attributes, 'aria-label')) {
            nextLabel.attributes['aria-label'] = 'Jump to next page';
        }
    }

    const listItems: LiProps<AProps|SpanProps>[] = [];
    const itemClasses = initialize(
        [] as string[], [], getCssFramework().getDefaultStyleClass(
            component, element, 'link'
        )
    );
    const itemBaseAttributes = initialize(
        {} as AnchorHTMLAttributes<HTMLAnchorElement>, {},
        getCssFramework().getDefaultAdditionalAttributes(
            component, element, 'link'
        )
    );
    const currentAttributes = initialize(
        {} as HTMLAttributes<HTMLSpanElement>, {},
        getCssFramework().getDefaultAdditionalAttributes(
            component, element, 'link:current'
        )
    );
    const ellipsisClasses = initialize(
        [] as string[], [], getCssFramework().getDefaultStyleClass(
            component, element, 'ellipsis'
        )
    );
    const ellipsisAttributes = initialize(
        {} as HTMLAttributes<HTMLSpanElement>, {}, getCssFramework().getDefaultAdditionalAttributes(
            component, element, 'ellipsis'
        )
    );

    let item: LiProps<AProps|SpanProps>;
    if (currentPage - 2 >= 1) {
        // --------------------
        // First Page
        // --------------------
        item = {
            element: 'li',
            children: {
                element: 'a',
                inline: true,
                href: link ? sprintf(link, 1) : undefined,
                children: 1,
                classes: itemClasses,
                attributes: itemBaseAttributes,
            },
        } as LiProps<AProps>;
        if (item.attributes) {
            item.attributes['aria-label'] = 'Jump to page 1';
        }
        listItems.push(item);

        if (currentPage - 3 >= 1) {
            listItems.push({
                element: 'li',
                children: {
                    element: 'span',
                    inline: true,
                    children: ellipsis,
                    classes: ellipsisClasses,
                    attributes: ellipsisAttributes
                },
            } as LiProps<SpanProps>);
        }
    }
    // --------------------
    // 1 Previous Page
    // --------------------
    if (currentPage - 1 >= 1) {
        item = {
            element: 'li',
            children: {
                element: 'a',
                inline: true,
                href: link ? sprintf(link, currentPage - 1) : undefined,
                children: currentPage - 1,
                classes: itemClasses,
                attributes: itemBaseAttributes,
            },
        } as LiProps<AProps>;
        if (item.attributes) {
            item.attributes['aria-label'] = 'Jump to page ' + (currentPage - 1);
        }
        listItems.push(item);
    }

    // --------------------
    // Current Page
    // --------------------
    /** Classes to add current page */
    const currentClasses = getCssFramework().getDefaultStyleClass(
        component, element, 'current'
    );
    item = {
        element: 'li',
        children: {
            element: 'span',
            inline: true,
            children: currentPage,
            classes: itemClasses.concat(currentClasses),
            attributes: currentAttributes,
        },
    } as LiProps<SpanProps>;
    listItems.push(item);

    // --------------------
    // 1 Next Page
    // --------------------
    if (currentPage + 1 <= maxPage) {
        item = {
            element: 'li',
            children: {
                element: 'a',
                inline: true,
                href: link ? sprintf(link, currentPage + 1) : undefined,
                children: currentPage + 1,
                classes: itemClasses,
                attributes: itemBaseAttributes,
            },
        } as LiProps<AProps>;
        if (item.attributes) {
            item.attributes['aria-label'] = 'Jump to page ' + (currentPage + 1);
        }
        listItems.push(item);
    }
    // --------------------
    // Last Page
    // --------------------
    if (currentPage + 2 <= maxPage) {
        if (currentPage + 3 <= maxPage) {
            listItems.push({
                element: 'li',
                children: {
                    element: 'span',
                    inline: true,
                    children: ellipsis,
                    classes: ellipsisClasses,
                    attributes: ellipsisAttributes
                },
            } as LiProps<SpanProps>);
        }
        item = {
            element: 'li',
            children: {
                element: 'a',
                inline: true,
                href: link ? sprintf(link, maxPage) : undefined,
                children: maxPage,
                classes: itemClasses,
                attributes: itemBaseAttributes,
            },
        } as LiProps<AProps>;
        if (item.attributes) {
            item.attributes['aria-label'] = 'Jump to page ' + maxPage;
        }
        listItems.push(item);
    }

    return (
        <Fragment>
            <Container
                element={element}
                {...restProps}
            >
                {
                    hasPrevNext ? (
                        <Fragment>
                            {
                                prevLabel ? (
                                    <Container
                                        {...prevLabel}
                                    >
                                        {prevLabel.children ?? 'Previous'}
                                    </Container>
                                ) : <Fragment />
                            }
                            {
                                nextLabel ? (
                                    <Container {...nextLabel}>{nextLabel.children ?? 'Next'}</Container>
                                ): <Fragment />
                            }
                        </Fragment>
                    ) : <Fragment />
                }
                <List
                    element={'ul'}
                    items={listItems}
                    classes={listClasses}
                    attributes={listAttributes}
                />
            </Container>
        </Fragment>
    );
};
