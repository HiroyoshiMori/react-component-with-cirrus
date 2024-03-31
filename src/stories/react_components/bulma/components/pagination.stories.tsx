import {Pagination} from "../../../../frameworks/bulma";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The pagination component consists of several elements:
 *
 * - <code>pagination-previous</code> and <code>pagination-next</code> for incremental navigation
 * - <code>pagination-list</code> which displays page items:
 *   - <code>pagination-link</code> for the page numbers
 *   - <code>pagination-ellipsis</code> for range separators
 *
 * See: https://bulma.io/documentation/components/pagination/
 */
export default {
    title: 'React Component/CSS Framework/Bulma/Components/Pagination',
    component: Pagination,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A responsive, usable, and flexible pagination',
    },
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>Pagination</code> component to render this component',
            table: {
                type: {
                    summary: '"pagination"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        element: {
            control: 'select',
            type: {
                required: true,
            },
            description: deIndent(`
                            Element type which is extended for this component<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'Omit<DivProps, "children">', 'React Component/Element/Container/Block/Div'
                        ),
            table: {
                type: {
                    summary: '"div"',
                },
            },
        },
        currentPage: {
            control: {type: 'number', min: 1},
            description: 'Current page for pagination',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        total: {
            control: {type: 'number', min: 0},
            description: 'Total item number for pagenation',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        link: {
            control: 'text',
            description: 'Link patter which is used by sprintf',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        itemInPage: {
            control: {type: 'number', min: 1},
            description: 'Number of items shown in a page',
            table: {
                type: {
                    summary: 'number',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        hasPrevNext: {
            control: 'boolean',
            description: 'Indicate pagination has prev/next link',
            table: {
                type: {
                    summary: 'boolean',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        prevLabel: {
            control: 'object',
            description: deIndent(`
                            Properties for previous label<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'AProps', 'React Component/Element/Container/Inline/Anchor'
                        )
                        + ' / '
                        + linkInStoryBook(
                        'SpanProps', 'React Component/Element/Container/Inline/Span'
                        ),
            table: {
                type: {
                    summary: 'AProps | SpanProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        nextLabel: {
            control: 'object',
            description: deIndent(`
                            Properties for next label<br />
                            👉 See:&nbsp;
                        `)
                        + linkInStoryBook(
                        'AProps', 'React Component/Element/Container/Inline/Anchor'
                        )
                        + ' / '
                        + linkInStoryBook(
                        'SpanProps', 'React Component/Element/Container/Inline/Span'
                        ),
            table: {
                type: {
                    summary: 'AProps | SpanProps',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        ellipsis: {
            control: 'text',
            description: 'Character for ellipsis',
            table: {
                type: {
                    summary: 'string',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
    },
};
// Default pagination
const defaultPagination = {
    component: 'pagination',
    currentPage: 1,
    total: 1,
    link: '#?p=%d',
};

/** Default pagination */
export const Default = {
    render: (args: any) => <Pagination
        {...defaultPagination}
        {...args}
    />,
};
/** Pagination with 2 pages */
export const PaginationWith2Pages = {
    ...Default,
    args: {
        total: 20,
    },
};
/** Pagination with 3 pages */
export const PaginationWith3Pages = {
    ...Default,
    args: {
        total: 30,
    },
};
/** Pagination with 4 pages */
export const PaginationWith4Pages = {
    ...Default,
    args: {
        total: 40,
    },
};
/** Pagination with 5 pages */
export const PaginationWith5Pages = {
    ...Default,
    args: {
        total: 50,
    },
};
/** Pagination with 6 pages */
export const PaginationWith6Pages = {
    ...Default,
    args: {
        total: 60,
    },
};
/** Pagination with 7 pages */
export const PaginationWith7Pages = {
    ...Default,
    args: {
        total: 70,
    },
};
/** Pagination with 8 pages */
export const PaginationWith8Pages = {
    ...Default,
    args: {
        total: 80,
    },
};
/** Pagination with 9 pages */
export const PaginationWith9Pages = {
    ...Default,
    args: {
        total: 90,
    },
};
/** Pagination with 4 pages */
export const PaginationWith10Pages = {
    ...Default,
    args: {
        total: 100,
    },
};
/** Pagination with 4 pages and current 2 */
export const PaginationWith4PagesCurrent2 = {
    ...Default,
    args: {
        currentPage: 2,
        total: 40,
    },
};
/** Pagination with 10 pages and current 2 */
export const PaginationWith10PagesCurrent2 = {
    ...Default,
    args: {
        currentPage: 2,
        total: 100,
    },
};
/** Pagination with 10 pages and current 3 */
export const PaginationWith10PagesCurrent3 = {
    ...Default,
    args: {
        currentPage: 3,
        total: 100,
    },
};
/** Pagination with 10 pages and current 4 */
export const PaginationWith10PagesCurrent4 = {
    ...Default,
    args: {
        currentPage: 4,
        total: 100,
    },
};
/** Pagination with 10 pages and current 5 */
export const PaginationWith10PagesCurrent5 = {
    ...Default,
    args: {
        currentPage: 5,
        total: 100,
    },
};
/** Pagination with 10 pages and current 6 */
export const PaginationWith10PagesCurrent6 = {
    ...Default,
    args: {
        currentPage: 6,
        total: 100,
    },
};
/** Pagination with 10 pages and current 7 */
export const PaginationWith10PagesCurrent7 = {
    ...Default,
    args: {
        currentPage: 7,
        total: 100,
    },
};
/** Pagination with 10 pages and current 8 */
export const PaginationWith10PagesCurrent8 = {
    ...Default,
    args: {
        currentPage: 8,
        total: 100,
    },
};
/** Pagination with 10 pages and current 9 */
export const PaginationWith10PagesCurrent9 = {
    ...Default,
    args: {
        currentPage: 9,
        total: 100,
    },
};
/** Pagination with 10 pages and current 10 */
export const PaginationWith10PagesCurrent10 = {
    ...Default,
    args: {
        currentPage: 10,
        total: 100,
    },
};
/** Pagination with prev/next with 10 pages and current 1 */
export const PaginationWithPrevNextWith10PagesCurrent1 = {
    ...Default,
    args: {
        total: 100,
        hasPrevNext: true,
        prevLabel: {element: 'a', children: 'Prev'},
        nextLabel: {element: 'a', children: 'Next'},
    },
};
/** Pagination with prev/next with 10 pages and current 2 */
export const PaginationWithPrevNextWith10PagesCurrent2 = {
    ...Default,
    args: {
        currentPage: 2,
        total: 100,
        hasPrevNext: true,
        prevLabel: {element: 'a', children: 'Prev'},
        nextLabel: {element: 'a', children: 'Next'},
    },
};
/** Pagination with prev/next with 10 pages and current 9 */
export const PaginationWithPrevNextWith10PagesCurrent9 = {
    ...Default,
    args: {
        currentPage: 9,
        total: 100,
        hasPrevNext: true,
        prevLabel: {element: 'a', children: 'Prev'},
        nextLabel: {element: 'a', children: 'Next'},
    },
};
/** Pagination with prev/next with 10 pages and current 10 */
export const PaginationWithPrevNextWith10PagesCurrent10 = {
    ...Default,
    args: {
        currentPage: 10,
        total: 100,
        hasPrevNext: true,
        prevLabel: {element: 'a', children: 'Prev'},
        nextLabel: {element: 'a', children: 'Next'},
    },
};
