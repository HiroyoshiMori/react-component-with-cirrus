import {Pagination} from "../../../../frameworks/bulma";

export default {
    component: Pagination,
    tags: ['autodocs'],
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
